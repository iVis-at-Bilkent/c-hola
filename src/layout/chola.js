const cholaLayout = require('../chola/cholaLayout');
const HashMap = require('cose-base').layoutBase.HashMap;
const assign = require('../assign');
const cholaConstants = require('../chola/cholaConstants');
const tree = require('../chola/tree');
const fs = require('fs');

const defaults = Object.freeze( {

    quality: 'default',
    // use random node positions at beginning of layout
    // if this is set to false, then quality option must be "proof"
    randomize: true,
    // whether or not to animate the layout
    animate: true,
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
    // Type of layout animation. The option set is {'during', 'end', false}
    animate: 'end',
    // Duration for animate:end
    animationDuration: 500,
    // Ideal edge (non nested) length
    idealEdgeLength: 50,
    //minimum gap between the edges of two nodes
    edgeGap: 50,
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
{
  constructor( options )
  {
    this.options = assign( {}, defaults, options );
    this.idList = [];
    this.cholaNodeToCoseNode = {};
    this.cholaEdgeToCoseEdge = new HashMap();
    this.cholaNodesMap = new HashMap();
    this.cholaEdgesMap = new HashMap();
    this.idToLNode;
  }

  run()
  {
    var cholaIdToLNode = this.cholaIdToLNode = {};
    var coseIdToLNode = this.coseIdToLNode = {};
    var cholaNodesMap = this.cholaNodesMap;
    var options = this.options;

    var layout = this.layout = new cholaLayout();
    var self = this;

    this.cy = this.options.cy;
    this.cy.trigger({ type: 'layoutstart', layout: this });

    var gm = layout.newGraphManager();

    var nodes = this.options.eles.nodes();
    var edges = this.options.eles.edges();

    if (nodes.length == 0 || edges.length == 0)
      return;

    //we get the nodes which are parent nodes or do not have a parent node above them
    var topMostNodes = layout.getTopMostNodes(nodes);
    layout.processChildrenList(this.options, gm.addRoot(), topMostNodes, layout, "chola", cholaIdToLNode, cholaNodesMap);
    layout.processEdges(layout, "chola", gm, edges, cholaIdToLNode, this.cholaEdgesMap);

    //set the parents of the nodes
    layout.setParents(gm);

    //finds and saves the compound nodes
    var compoundNodes = layout.findCompoundNodes(gm);

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

    //store all cholanodes before the pruning
    let allCholaNodes = Object.assign({}, gm.getAllNodes());

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

    // applying cose on the core
    let coseLayout = layout.coseOnCore(options, coseIdToLNode, cholaNodesMap, this.cholaEdgesMap, this.cholaNodeToCoseNode, this.cholaEdgeToCoseEdge);

    // Reflect changes back to chola nodes
    var cholaNodes = coreGm.getAllNodes();
    //var cholaNodes = allCholaNodes;
    for (let i = 0; i < cholaNodes.length; i++)
    {
        let cholaNode = cholaNodes[i];
        let coseNode = this.cholaNodeToCoseNode[cholaNode.id];
        let loc = coseNode.getCenter();
        cholaNode.setCenter(loc.x, loc.y);
    }

    
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
    {
        let cholaEdge = cholaEdges[i];
        let coseDummyNode = edgeToDummyNodes[cholaEdge.id];
        let bendpoint = coseDummyNode[0].getCenter();
        var relativeBendPosition = cholaEdge.convertToRelativeBendPosition(bendpoint);
        cholaEdge.weight = relativeBendPosition.weight;
        cholaEdge.distance = relativeBendPosition.distance;
    }

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
    }

    //create dummy points for new edges with bends in cose
    layout.createDummyNodesAndEdges(this.cholaNodeToCoseNode, edgeToDummyNodes, newEdgesWithBends, coseLayout, this.cholaEdgeToCoseEdge, options);

    //introduce dummy nodes at each bendpoints
    let cholaEdgeToDummyNodes; 
    cholaEdgeToDummyNodes = layout.removeEdgeOverlaps(coreGm, coseLayout, this.cholaNodeToCoseNode, this.cholaEdgeToCoseEdge);    

    //introducing dummy node at each edge crossing
    //layout.removeEdgeCrossings(coreGm, coseLayout, options);

    constraintLayout(coreGm, coseLayout, options, 2);

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
        {
          let treeNode = allNodes[i];
          if (t.root == treeNode)
            continue;
          let node = cholaIdToLNode[treeNode.id];
          let treeNodeLoc = treeNode.getLocation();
          node.setLocation(treeNodeLoc.x, treeNodeLoc.y);
        }
    };

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

        let dummyNodes = cholaEdgeToDummyNodes[cholaEdgeId][0];
        let dummyEdges = cholaEdgeToDummyNodes[cholaEdgeId][1];

        let bendpoint = dummyNodes[0].getCenter();

        //we remove edges first because we need the source and target of each edge
        //if dummy nodes are removed first, then the source or edge of an edge might not exist
        for (let j = 0; j < dummyEdges.length; j++)
        {
          let edge = dummyEdges[j];

          //remove real edge from graph manager if it is inter-graph
          if (edge.isInterGraph)
          {
            layout.graphManager.remove(edge);
          }
          //else, remove the edge from the current graph
          else
          {
            let graph = coreGm.calcLowestCommonAncestor(edge.source, edge.target);
            graph.remove(edge);
          }      
        }

        //now remove the dummy nodes for the cholaEdge
        for (let j = 0; j < dummyNodes.length; j++)
        {
          let node = dummyNodes[j];
          node.owner.remove(node);
        }

        //now create an edge with bendpoint at dummy node location
        let edge = coreGm.add(coreGm.getLayout().newEdge(), source, target);
        edge.id = cholaEdgeId;
        let value = bendpoints[0];
        edge.bendpoints.push([bendpoint, value[1], value[2]]);


        var relativeBendPosition = edge.convertToRelativeBendPosition(bendpoint);
        edge.weight = relativeBendPosition.weight;
        edge.distance = relativeBendPosition.distance;

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
  }
}

module.exports = chola;
