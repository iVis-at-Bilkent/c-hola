const cholaLayout = require('../chola/cholaLayout');
const assign = require('../assign');
<<<<<<< HEAD
=======
const cholaConstants = require('../chola/cholaConstants');
const tree = require('../chola/tree');
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
const fs = require('fs');

const defaults = Object.freeze( {

    quality: 'default',
    // use random node positions at beginning of layout
    // if this is set to false, then quality option must be "proof"
<<<<<<< HEAD
    randomize: false,
    // whether or not to animate the layout
    animate: 'end',
=======
    randomize: true,
    // whether or not to animate the layout
    animate: true,
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
    // duration of animation in ms, if enabled
    animationDuration: 1000,
    // easing of animation, if enabled
    animationEasing: undefined,
    // fit the viewport to the repositioned nodes
    fit: true,
    // whether to include labels in node dimensions. Valid in "proof" quality
    nodeDimensionsIncludeLabels: false,
<<<<<<< HEAD
=======

>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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
<<<<<<< HEAD
    // Ideal edge (non nested) length
    idealEdgeLength: 100,
=======
    // Type of layout animation. The option set is {'during', 'end', false}
    animate: 'end',
    // Duration for animate:end
    animationDuration: 500,
    // Ideal edge (non nested) length
    idealEdgeLength: 50,
    //minimum gap between the edges of two nodes
    edgeGap: 50,
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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
<<<<<<< HEAD
});

class Layout 
=======
    //stores the maximum width and height in the graph
    maxNodeDimension: 0,
    //constraints for orthogonalization
    fixedNodeConstraint: undefined,
    alignmentConstraint: undefined,
    relativePlacementConstraint: undefined,
    verticalAlignment: [],
    horizontalAlignment: [],
    relativeAlignment: [],
    placementDict: {},

    //this variable should be set to true if you wish to export the cyElements and Constraints after each step
    graphOutput: false,
    debug: true,

    // layout event callbacks
    ready: () => {}, // on layoutready
    stop: () => {} // on layoutstop
});

class chola 
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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
<<<<<<< HEAD
    var cholaIdToLNode = this.cholaIdToLNode;
    var coseIdToLNode = this.coseIdToLNode;
    var cyNodesMap = this.cyNodesMap;
    var cyEdgesMap = this.cyEdgesMap;
=======
    var cholaIdToLNode = this.cholaIdToLNode = {};
    var coseIdToLNode = this.coseIdToLNode = {};
    var cholaNodesMap = this.cholaNodesMap;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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

<<<<<<< HEAD
    if (nodes.length < 2 || edges.length == 0)
=======
    if (nodes.length == 0 || edges.length == 0)
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
      return;

    //we get the nodes which are parent nodes or do not have a parent node above them
    var topMostNodes = layout.getTopMostNodes(nodes, cyNodesMap);
    layout.processChildrenList(this.options, gm.addRoot(), topMostNodes, layout, "chola", cholaIdToLNode);
    layout.processEdges(layout, gm, edges, cholaIdToLNode, cyEdgesMap, cholaEdgesMap);

    //set the parents of the nodes
    layout.setParents(gm);

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

<<<<<<< HEAD
    options.randomize = true;
    //first apply cose as layout of the core
    let coseLayout = layout.coseOnCore(options, coseIdToLNode, this.cholaNodeToCoseNode, topMostNodes);
=======
    let parentList = {};

    //removes the leaf nodes and return the graph components
    let output = layout.prune(gm, compoundNodes, this.idList, parentList);
    let c = output[0];
    let graphIsTree = output[1];
    options.maxNodeDimension = layout.getMaxNodeDimension(gm);
    options.edgeGap = options.maxNodeDimension + options.idealEdgeLength;

    //if length of this list is 1, this means that the whole graph is a tree
    if (c.length == 1 && graphIsTree)
    {
      let newgm = c[0];
      let growthDir = cholaConstants.DEFAULT_TREE_DIREC;
      let t = new tree(newgm, newgm.rootNode);
      t.symmetricLayout(growthDir, options.edgeGap, 1.5*options.edgeGap);

      t.createOrthogonalEdges(newgm);

      //replicate the changes back to the original gm
      let allNodes = Object.values(t.nodes);
      for (let i = 0; i < allNodes.length; i++)
      {
        let treeNode = allNodes[i];
        let node = cholaIdToLNode[treeNode.id];
        let treeNodeLoc = treeNode.getLocation();
        node.setLocation(treeNodeLoc.x, treeNodeLoc.y);
      }

      let cholaEdges = Object.values(t.edges);
      for (let i = 0; i < cholaEdges.length; i++)
      {
        let cholaEdge = cholaEdges[i];
        if (cholaEdge.bendpoints.length != 0)
        {
          for (let k = 0; k < this.cy.edges().length; k++)
          {
            let cyEdge = this.cy.edges()[k];
            if (cholaEdge.id == cyEdge.id())
            {
              cyEdge.css("curve-style", "segments");
              cyEdge.css("segment-weights", cholaEdge.weight);
              cyEdge.css("segment-distances", cholaEdge.distance);
              break;
            }
          }
        }
      }
      
      this.cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
      return;
    }

    // this.cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
    //   return;
    
    //core graph manager
    let coreGm = c[0];
    c.shift();
    let treeGraphs = c;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

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

<<<<<<< HEAD
    cyCose.nodes().not(":parent").layoutPositions(this, this.options, getPositions);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //PLANARIZATION:

    var oldGm;

    if (compoundNodes.length > 0)
=======
    
    output = layout.getHighDegreeNodes(coreGm);
    var highDegreeNodes = output[0];
    var oneDegreeNodes = output[1];

    options.relativeAlignment = [];
    options.verticalAlignment = [];
    options.horizontalAlignment = [];

    var constraintLayout = function(coreGm, coseLayout, options, turn)
    {
        // // applying cose on the core
      coseLayout = layout.constraintCoseLayout(coreGm, coseLayout, options, turn);

      // if (options.debug)
      //   return;

      let cholaNodesDict = {};

      // Reflect changes back to chola nodes
      var cholaNodes = coreGm.getAllNodes();
      for (let i = 0; i < cholaNodes.length; i++)
      {
          let cholaNode = cholaNodes[i];
          let coseNode = self.cholaNodeToCoseNode[cholaNode.id];

          if (cholaNode.isCompound())
          {
            let width = coseNode.getWidth();
            let height = coseNode.getHeight();
            cholaNode.setWidth(width);
            cholaNode.setHeight(height);            
          }

          let loc = coseNode.getCenter();
          cholaNode.setCenter(loc.x, loc.y);

          cholaNodesDict[cholaNode.id] = cholaNode;
      }

      return cholaNodesDict;
    };

    var download = function(filename, text) 
    {
      var pom = document.createElement('a');
      pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      pom.setAttribute('download', filename);

      if (document.createEvent) {
          var event = document.createEvent('MouseEvents');
          event.initEvent('click', true, true);
          pom.dispatchEvent(event);
      }
      else {
          pom.click();
      }
    };

    // if (options.debug)
    // {
    //   console.log(options.horizontalAlignment);
    //   console.log(options.verticalAlignment);
    //   console.log(options.relativeAlignment);
    // }

    //creating orthogonal layout for higher degree nodes
    layout.higherNodesConfiguration(coreGm, highDegreeNodes, options);
    let nodesDict = constraintLayout(coreGm, coseLayout, options, 0);

    
    
    // this.cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
    // return;

    if (options.graphOutput)
    {
      let constraintsS1 = {alignmentConstraint: null, relativePlacementConstraint: null};
      constraintsS1.alignmentConstraint = options.alignmentConstraint;
      constraintsS1.relativePlacementConstraint = options.relativePlacementConstraint; 
      
      let constraintStringS1 = JSON.stringify(constraintsS1, null, 2);
      download('constraintsStep1.json', constraintStringS1);

      let dataS1 = JSON.stringify(this.cy.json().elements);
      download('cyElementsStep1.json', dataS1);

      options.alignmentConstraint = undefined;
      options.relativePlacementConstraint = undefined;
    }


    //return;

    //orthogonal layout for lower degree nodes
    layout.chainNodesConfiguration(coreGm, options);
    //creating dummy nodes and edges for bendpoints in cose and also generating constraints for them
    //stores the cose dummy nodes corresponding to the id of chola edge
    let edgeToDummyNodes = {};
    layout.createDummyNodesAndEdges(this.cholaNodeToCoseNode, edgeToDummyNodes, coreGm.edgesWithBends, coseLayout, this.cholaEdgeToCoseEdge, options);  
    //orthogonal layout for one-degree nodes 
    //1 degree nodes attached to 2 degree nodes will be left unaligned after the previous step
    layout.oneDegreeNodesConfiguration(coreGm, oneDegreeNodes, options);
    constraintLayout(coreGm, coseLayout, options, 1);

    

    //create adjusted bendpoints for cholaedges from cose
    let cholaEdges = coreGm.edgesWithBends;
    for (let i = 0; i < cholaEdges.length; i++)
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
    {
      oldGm = gm;
      layout.convertToSimpleGraph(gm, compoundNodes);
      gm = layout.graphManager;
    }

<<<<<<< HEAD
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
=======
    if (options.graphOutput)
    {
      let constraintsS2 = {alignmentConstraint: null, relativePlacementConstraint: null};
      constraintsS2.alignmentConstraint = options.alignmentConstraint;
      constraintsS2.relativePlacementConstraint = options.relativePlacementConstraint; 
      
      let constraintStringS2 = JSON.stringify(constraintsS2, null, 2);
      download('constraintsStep2.json', constraintStringS2);

      let dataS2 = JSON.stringify(this.cy.json().elements);
      download('cyElementsStep2.json', dataS2);

      options.alignmentConstraint = undefined;
      options.relativePlacementConstraint = undefined;
    }

    //turning non-orthogonal edges to orthogonal edges
    let newEdgesWithBends = layout.createOrthogonalEdges(coreGm, 1);

    //copying the id, source and target of the edges with bends
    let edgesWithBends = [];
    for (let i = 0; i < coreGm.edgesWithBends.length; i++)
    {
      let edge = coreGm.edgesWithBends[i];
      edgesWithBends.push([edge.id, edge.source, edge.target, edge.bendpoints]);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
    }

    let allEdges = gm.getAllEdges();
    for (let i = 0; i < allEdges.length; i++)
    {
      let edge = allEdges[i];
      graphData.edges.push([edge.source.id, edge.target.id]);
    }

    console.log("Sending the following data:");
    console.log(graphData);

<<<<<<< HEAD
    //now this jsonData has to be sent to the python server
    fetch('/tsm/', {
      method: "POST",
      body: JSON.stringify(graphData)
    })
    .then(response => response.json())
    .then(result => 
=======
    if (options.graphOutput)
    {
      let constraintsS3 = {alignmentConstraint: null, relativePlacementConstraint: null};
      constraintsS3.alignmentConstraint = options.alignmentConstraint;
      constraintsS3.relativePlacementConstraint = options.relativePlacementConstraint; 
      
      let constraintStringS3 = JSON.stringify(constraintsS3, null, 2);
      download('constraintsStep3.json', constraintStringS3);

      let dataS3 = JSON.stringify(this.cy.json().elements);
      download('cyElementsStep3.json', dataS3);

      options.alignmentConstraint = undefined;
      options.relativePlacementConstraint = undefined;
    }

    //apply symmetric layout to the trees
    let trees = [];
    let growthDir = cholaConstants.DEFAULT_TREE_DIREC;
    for (let i = 0; i < treeGraphs.length; i++)
    {
        let g = treeGraphs[i];
        let t = new tree(g, g.rootNode);
        trees.push(t);
        t.symmetricLayout(growthDir, options.edgeGap, 1.5*options.edgeGap);

        //replicate the changes back to the original gm
        let allNodes = Object.values(t.nodes);
        for (let i = 0; i < allNodes.length; i++)
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
        {
          let output = JSON.parse(result);
          console.log(result);

<<<<<<< HEAD
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
=======
    //adding trees back to the graphs
    layout.reAttachTrees(coreGm, trees, options, cholaIdToLNode, parentList);

    let cholaNodesDict = constraintLayout(coreGm, coseLayout, options, 3);

    this.cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
    //return;

    if (options.graphOutput)
    {
      let constraintsS4 = {alignmentConstraint: null, relativePlacementConstraint: null};
      constraintsS4.alignmentConstraint = options.alignmentConstraint;
      constraintsS4.relativePlacementConstraint = options.relativePlacementConstraint; 
      
      let constraintStringS4 = JSON.stringify(constraintsS4, null, 2);
      download('constraintsStep4.json', constraintStringS4);

      let dataS4 = JSON.stringify(this.cy.json().elements);
      download('cyElementsStep4.json', dataS4);
    }


    for (let i = 0; i < trees.length; i++)
    {
      let t = trees[i];
      let nodes = Object.values(t.nodes);
      if (nodes.length > 2)
      {
        //transfer the positions after constraint layout back to the tree nodes
        for (let k = 0; k < nodes.length; k++)
        {
          let treeNode = nodes[k];
          let cholaNode = cholaNodesDict[treeNode.id];
          // console.log(cholaNode.id);
          // console.log(cholaNode.getCenter());
          
          let cholaLocX = cholaNode.getCenterX();
          let cholaLocY = cholaNode.getCenterY();
          treeNode.setCenter(cholaLocX, cholaLocY);
        }
        t.createOrthogonalEdges(coreGm);
      }
    }

    
    //replace dummy nodes and edges of cholagm with edges with bendpoints
    for (let i = 0; i < edgesWithBends.length; i++)
    {
        let cholaEdgeId = edgesWithBends[i][0];
        let source = edgesWithBends[i][1];
        let target = edgesWithBends[i][2];
        let bendpoints = edgesWithBends[i][3];
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

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

          

<<<<<<< HEAD
=======
        //now create an edge with bendpoint at dummy node location
        let edge = coreGm.add(coreGm.getLayout().newEdge(), source, target);
        edge.id = cholaEdgeId;
        let value = bendpoints[0];
        edge.bendpoints.push([bendpoint, value[1], value[2]]);

>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9


<<<<<<< HEAD

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
=======
        coreGm.edgesWithBends.push(edge);
    }

    coreGm.resetAllEdges();
    coreGm.getAllEdges();

    //Printing For debugging
    for (let i = 0; i < compoundNodes.length; i++)
    {
      let cholaNode = compoundNodes[i];
      let id = compoundNodes[i].id;
      console.log("before changing dimensions");
      console.log(cholaNode.id);
      console.log(cholaNode.getCenter());
      console.log(cholaNode.getWidth());
      console.log(cholaNode.getHeight()); 
    }


    //updating the positions, widths and heights of the compounds nodes
    //FUTURE FIX: MAKE IT WORK FOR LABELS
    layout.updateCompoundDimensions(compoundNodes);

    //Printing For debugging
    for (let i = 0; i < compoundNodes.length; i++)
    {
        let cholaNode = compoundNodes[i];
        let id = compoundNodes[i].id;
        console.log("after changing dimensions");
        console.log(cholaNode.id);
        console.log(cholaNode.getCenter());
        console.log(cholaNode.getWidth());
        console.log(cholaNode.getHeight()); 
    }


    //now creating bendpoints for edges connected with compound nodes
    let compoundEdges = layout.createOrthogonalEdges(coreGm, 2);
    for (let i = 0; i < compoundEdges.length; i++)
    {
        let edge = compoundEdges[i];
        let bendpoints = edge.bendpoints;
        for (let k = 0; k < this.cy.edges().length; k++)
        {
            let cyEdge = this.cy.edges()[k];
            if (edge.id == cyEdge.id())
            {
                // console.log("edge.sourceport");
                // console.log(edge.sourceport);
                // console.log("Edge.targetPort");
                // console.log(edge.targetPort);

                let relativePos = edge.source.getRelativeRatiotoNodeCenter(edge.sourcePort);
                cyEdge.style({ 'source-endpoint': + relativePos.x + "% "+ +relativePos.y + '%' });
                relativePos = edge.target.getRelativeRatiotoNodeCenter(edge.targetPort);
                cyEdge.style({ 'target-endpoint': + relativePos.x + "% "+ +relativePos.y + '%' });      
            }
        }   
    }


    //Last step: finally create edges with bends in cytoscape
    let cholaEdges2 = coreGm.edgesWithBends;
    for (let i = 0; i < cholaEdges2.length; i++)
    {
        let cholaEdge = cholaEdges2[i];
        for (let k = 0; k < this.cy.edges().length; k++)
        {
            let cyEdge = this.cy.edges()[k];
            if (cholaEdge.id == cyEdge.id())
            {          
                cyEdge.css("curve-style", "segments");
                cyEdge.css("segment-weights", cholaEdge.weight);
                cyEdge.css("segment-distances", cholaEdge.distance);
                break;
            }
        }
    }
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
  }
}

module.exports = Layout;
