const cholaLayout = require('../chola/cholaLayout');
const assign = require('../assign');
const fs = require('fs');

const defaults = Object.freeze( {

    quality: 'default',
    // use random node positions at beginning of layout
    // if this is set to false, then quality option must be "proof"
    randomize: false,
    // whether or not to animate the layout
    animate: 'end',
    // duration of animation in ms, if enabled
    animationDuration: 1000,
    // easing of animation, if enabled
    animationEasing: undefined,
    // fit the viewport to the repositioned nodes
    fit: true,
    // whether to include labels in node dimensions. Valid in "proof" quality
    nodeDimensionsIncludeLabels: false,
    /* spectral layout options */
    // false for random, true for greedy
    samplingType: true,
    // sample size to construct distance matrix
    sampleSize: 25,
    // separation amount between nodes
    nodeSeparation: 75,
    // power iteration tolerance
    piTol: 0.0000001,
    // number of ticks per frame; higher is faster but more jerky
    refresh: 30,
    // Padding on fit
    padding: 10,
    // Node repulsion (non overlapping) multiplier
    nodeRepulsion: 4500,
    // Ideal edge (non nested) length
    idealEdgeLength: 100,
    // Divisor to compute edge forces
    edgeElasticity: 0.45,
    // Nesting factor (multiplier) to compute ideal edge length for nested edges
    nestingFactor: 0.1,
    // Gravity force (constant)
    gravity: 0.25,
    // Maximum number of iterations to perform
    numIter: 2500,
    // For enabling tiling
    tile: false,
    // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
    tilingPaddingVertical: 10,
    // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
    tilingPaddingHorizontal: 10,
    // Gravity range (constant) for compounds
    gravityRangeCompound: 1.5,
    // Gravity force (constant) for compounds
    gravityCompound: 1.0,
    // Gravity range (constant)
    gravityRange: 3.8,
    // Initial cooling factor for incremental layout
    initialEnergyOnIncremental: 0.5,
});

class Layout 
{
  constructor( options )
  {
    this.options = assign( {}, defaults, options );
    this.idList = [];
    this.cholaNodeToCoseNode = {};
    this.cyNodesMap = {};
    this.cyEdgesMap = {};
    this.cholaIdToLNode = {};
    this.coseIdToLNode = {};
    this.cholaNodesMap = {};
    this.cholaEdgesMap = {};
  }

  run()
  {
    var cholaIdToLNode = this.cholaIdToLNode;
    var coseIdToLNode = this.coseIdToLNode;
    var cyNodesMap = this.cyNodesMap;
    var cyEdgesMap = this.cyEdgesMap;
    var options = this.options;
    var cholaNodesMap = this.cholaNodesMap;
    var cholaEdgesMap = this.cholaEdgesMap;

    var layout = this.layout = new cholaLayout(options);
    var self = this;

    cy = this.options.cy;
    cy.trigger({ type: 'layoutstart', layout: this });

    var gm = layout.newGraphManager();

    var nodes = cy.nodes();
    var edges = cy.edges();

    if (nodes.length < 2 || edges.length == 0)
      return;

    //we get the nodes which are parent nodes or do not have a parent node above them
    var topMostNodes = layout.getTopMostNodes(nodes, cyNodesMap);
    layout.processChildrenList(this.options, gm.addRoot(), topMostNodes, layout, "chola", cholaIdToLNode);
    layout.processEdges(layout, gm, edges, cholaIdToLNode, cyEdgesMap, cholaEdgesMap);

    //set the parents of the nodes
    layout.setParents(gm);

    //finds and saves the compound nodes
    var compoundNodes = gm.findCompoundNodes();

    //visualizes the layout in cytoscape map
    let getPositions = function(ele, i)
    {
       if(typeof ele === "number") {
         ele = i;
       }
       var theId = ele.data('id');
       //take the chola node
       var lNode = self.cholaIdToLNode[theId];
       
       return {
         x: lNode.getRect().getCenterX(),
         y: lNode.getRect().getCenterY()
       };
    };

    
    let allCholaNodes = Object.assign({}, gm.getAllNodes());

    options.randomize = true;
    //first apply cose as layout of the core
    let coseLayout = layout.coseOnCore(options, coseIdToLNode, this.cholaNodeToCoseNode, topMostNodes);

    options.randomize = false;

    //Reflect changes back to chola nodes
    var cholaNodes = gm.getAllNodes();
    for (let i = 0; i < cholaNodes.length; i++)
    {
        let cholaNode = cholaNodes[i];
        let coseNode = this.cholaNodeToCoseNode[cholaNode.id];

        if (cholaNode.isCompound())
        {
          //for compounds, widths and heights are also updated because they change after applying cose
          //weight, height are updated before updating center bcz doing the opposite changes location of the compound node
          cholaNode.setWidth(coseNode.getWidth());
          cholaNode.setHeight(coseNode.getHeight());
        }
        let loc = coseNode.getCenter();
        cholaNode.setCenter(loc.x, loc.y);
    }

    cyCose.nodes().not(":parent").layoutPositions(this, this.options, getPositions);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //PLANARIZATION:

    var oldGm;

    if (compoundNodes.length > 0)
    {
      oldGm = gm;
      layout.convertToSimpleGraph(gm, compoundNodes);
      gm = layout.graphManager;
    }

    //find edge crossings in the graph and replace them with a dummy node
    allEdges = gm.getAllEdges();
    let edgeCrosses = layout.findEdgeCrosses(allEdges, allEdges);

    //create dummy nodes for edge crossings
    let edgeSplitDict = {};
    let dummyNodes = layout.createDummiesForCrossings(gm, edgeCrosses, edgeSplitDict);

    //package data to send to the python server
    //python code needs the nodes ids and their positions and the (src,tgt) data of edges to reconstruct the graph
    //so we will create an object to store all of this data
    let nodeDict = {};
    let graphData = {nodes: {}, edges: []}
    let allNodes = gm.getAllNodes();
    for (let i = 0; i < allNodes.length; i++)
    {
      let node = allNodes[i];
      nodeDict[node.id] = node;
      graphData.nodes[node.id]  = [node.getCenterX(), node.getCenterY()];
    }

    let allEdges = gm.getAllEdges();
    for (let i = 0; i < allEdges.length; i++)
    {
      let edge = allEdges[i];
      graphData.edges.push([edge.source.id, edge.target.id]);
    }

    console.log("Sending the following data:");
    console.log(graphData);

    //now this jsonData has to be sent to the python server
    fetch('/tsm/', {
      method: "POST",
      body: JSON.stringify(graphData)
    })
    .then(response => response.json())
    .then(result => 
        {
          let output = JSON.parse(result);
          console.log(result);

          let nodes = output['nodes'];
          let bendData = output['bends'];

          //change the values of the positions obtained from python 
          for (var key in nodes) {  
            var pos = nodes[key]; 
            pos[0] = pos[0] * options.idealEdgeLength;  
            pos[1] = pos[1] * -1 * options.idealEdgeLength; 
          }

          //Reflect changes back to chola nodes
          var cholaNodes = gm.getAllNodes();
          for (let i = 0; i < cholaNodes.length; i++)
          {
              let cholaNode = cholaNodes[i];
              if (cholaNode.isCompound())
                continue;
              
              var newPos = nodes[cholaNode.id]; 
              cholaNode.setCenter(newPos[0], newPos[1]);
          }

          

          let edgesWithBends = layout.extractBends(bendData, nodeDict, nodes);
          layout.createBendpoints(edgesWithBends, gm);  

          layout.compactGraph(gm);

          if (oldGm != undefined)
          {
            //Reflect changes back to actual chola nodes
            cholaNodes = oldGm.getAllNodes();
            for (let i = 0; i < cholaNodes.length; i++)
            {
                let cholaNode = cholaNodes[i];

                if (cholaNode.isCompound())
                  continue;

                let newPos = nodes[cholaNode.id];
                cholaNode.setCenter(newPos[0], newPos[1]);
            }
          }

          




          layout.removeDummiesAndCreateBends(gm, bendData, nodeDict, nodes, edgeSplitDict, dummyNodes);

          //Last step: finally create edges with bends in cytoscape
          let cholaEdges2 = gm.edgesWithBends;
          for (let i = 0; i < cholaEdges2.length; i++)
          {
              let cholaEdge = cholaEdges2[i];
              let cyEdge = cyEdgesMap[cholaEdge.id];

              function copyBps(edge1, edge2)
              {
                if (edge2.bendpoints.length == 0)
                  edge2.bendpoints = edge1.bendpoints;
                else
                {
                  for (let j = 0; j < edge1.bendpoints.length; j++)
                  {
                    edge2.bendpoints.push(edge1.bendpoints[j]);
                  }
                }
              }
              if (cyEdge != undefined)
              {
                cyEdge.css("curve-style", "segments");
                cyEdge.css("segment-weights", cholaEdge.weight);
                cyEdge.css("segment-distances", cholaEdge.distance);
                if (oldGm != undefined)
                {
                  let edge = cholaEdgesMap[cholaEdge.id];
                  copyBps (cholaEdge, edge);
                }
              }
              else
              {
                let source = cholaEdge.source;
                let target = cholaEdge.target;

                let edge;
                if (source.isDummy && source.dummyOwner.isCompound() && !target.isDummy)
                {
                  edge = source.dummyOwner.findEdgeBetween(cholaIdToLNode[target.id]);
                }
                else if (target.isDummy && target.dummyOwner.isCompound() && !source.isDummy)
                {
                  edge = target.dummyOwner.findEdgeBetween(cholaIdToLNode[source.id]);
                }
                else if ((source.isDummy && source.dummyOwner.isCompound()) || (target.isDummy && target.dummyOwner.isCompound()))
                {
                  edge = source.dummyOwner.findEdgeBetween(target.dummyOwner);
                }
                else
                {
                  continue;
                }

                if (edge == null)
                  continue;

                copyBps(cholaEdge, edge);

                edge.sourcePoint = cholaEdge.source.getCenter();
                edge.targetPoint = cholaEdge.target.getCenter();
              }
          } 

          cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);  

          
          if (oldGm != undefined)
          {
              gm = oldGm;

              layout.reshapeCompounds(compoundNodes, cyNodesMap);

              // now creating bendpoints for edges connected with compound nodes
              let compoundEdges = layout.createOrthogonalEdges2(gm, nodes);
              for (let i = 0; i < compoundEdges.length; i++)
              {
                  let edge = compoundEdges[i];
                  let cyEdge = cyEdgesMap[edge.id];
                  
                  // console.log("working on compound node edge:");
                  // console.log(edge.id);

                  if (edge.bendpoints.length > 0)
                  {
                    cyEdge.css("curve-style", "segments");
                    cyEdge.css("segment-weights", edge.weight);
                    cyEdge.css("segment-distances", edge.distance);
                  }  

                  if (edge.sourcePort != null)
                  {
                    let relativePos1 = edge.source.getRelativeRatiotoNodeCenter(edge.sourcePort);
                    cyEdge.style({ 'source-endpoint': + relativePos1.x + "% "+ +relativePos1.y + '%' });
                    let relativePos2 = edge.target.getRelativeRatiotoNodeCenter(edge.targetPort);
                    cyEdge.style({ 'target-endpoint': + relativePos2.x + "% "+ +relativePos2.y + '%' });
                  }
              }
          }




        }
      )  
  }
}

module.exports = Layout;
