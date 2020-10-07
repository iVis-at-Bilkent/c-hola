
// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

const CoSELayout = require('cose-base').CoSELayout;
const CoSEConstants = require('cose-base').CoSEConstants;
const CoSENode = require('cose-base').CoSENode;
const LayoutConstants = require('cose-base').layoutBase.LayoutConstants;
const FDLayoutConstants = require('cose-base').layoutBase.FDLayoutConstants;
const cholaConstants = require('../chola/cholaConstants');
const cholaGraphManager = require('../chola/cholaGraphManager');
const cholaNode = require('../chola/cholaNode');
const cholaEdge = require('../chola/cholaEdge');
const PointD = require('cose-base').layoutBase.PointD;
const DimensionD = require('cose-base').layoutBase.DimensionD;
const Layout = require('cose-base').layoutBase.Layout;
const HashMap = require('cose-base').layoutBase.HashMap;
const assign = require('../chola/assign');
const chain = require('../chola/chains');
const nodeBuckets = require('../chola/nodeBuckets');
const compass = require('../chola/compass');
const stem = require('../chola/stem');
const edgeSegment = require('../chola/edgeSegment');
const faceSet = require('../chola/faceSet');

// Constructor
function cholaLayout()
{
    Layout.call(this);
    this.dummyNodes = [];
}

cholaLayout.prototype = Object.create(Layout.prototype);

for (let property in Layout)
{
    cholaLayout[property] = Layout[property];
}

cholaLayout.prototype.defineCoseConstants = function(options)
{
  if (options.nodeRepulsion != null)
    CoSEConstants.DEFAULT_REPULSION_STRENGTH = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = options.nodeRepulsion;
  if (options.idealEdgeLength != null)
    CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength;
  if (options.edgeElasticity != null)
    CoSEConstants.DEFAULT_SPRING_STRENGTH = FDLayoutConstants.DEFAULT_SPRING_STRENGTH = options.edgeElasticity;
  if (options.nestingFactor != null)
    CoSEConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = options.nestingFactor;
  if (options.gravity != null)
    CoSEConstants.DEFAULT_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = options.gravity;
  if (options.numIter != null)
    CoSEConstants.MAX_ITERATIONS = FDLayoutConstants.MAX_ITERATIONS = options.numIter;
  if (options.gravityRange != null)
    CoSEConstants.DEFAULT_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = options.gravityRange;
  if(options.gravityCompound != null)
    CoSEConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = options.gravityCompound;
  if(options.gravityRangeCompound != null)
    CoSEConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = options.gravityRangeCompound;
  if (options.initialEnergyOnIncremental != null)
    CoSEConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = options.initialEnergyOnIncremental;

  if (options.quality == 'draft')
    LayoutConstants.QUALITY = 0;
  else if(options.quality == 'proof')
    LayoutConstants.QUALITY = 2;
  else
    LayoutConstants.QUALITY = 1;

  CoSEConstants.NODE_DIMENSIONS_INCLUDE_LABELS = FDLayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = options.nodeDimensionsIncludeLabels;
  CoSEConstants.DEFAULT_INCREMENTAL = FDLayoutConstants.DEFAULT_INCREMENTAL = LayoutConstants.DEFAULT_INCREMENTAL =
          !(options.randomize);
  CoSEConstants.ANIMATE = FDLayoutConstants.ANIMATE = LayoutConstants.ANIMATE = options.animate;
  CoSEConstants.TILE = options.tile;
  CoSEConstants.TILING_PADDING_VERTICAL =
          typeof options.tilingPaddingVertical === 'function' ? options.tilingPaddingVertical.call() : options.tilingPaddingVertical;
  CoSEConstants.TILING_PADDING_HORIZONTAL =
          typeof options.tilingPaddingHorizontal === 'function' ? options.tilingPaddingHorizontal.call() : options.tilingPaddingHorizontal;
  CoSEConstants.TRANSFORM_ON_CONSTRAINT_HANDLING = false;
  CoSEConstants.ENFORCE_CONSTRAINTS = true;
};

cholaLayout.prototype.newGraphManager = function(options){
   this.graphManager = new cholaGraphManager(this);
   return this.graphManager;
};

/**
* This method creates a new node associated with the input view node.
*/
cholaLayout.prototype.newNode = function(loc, size)
{
   return new cholaNode(this.graphManager, loc, size, null);
};

cholaLayout.prototype.getGraphManager = function() {
  return this.graphManager;
};

/**
* This method creates a new edge associated with the input view edge.
*/
cholaLayout.prototype.newEdge = function(source,target, vEdge)
{
   return new cholaEdge(source, target, vEdge);
};

cholaLayout.prototype.getTopMostNodes = function(nodes) {
    var nodesMap = {};
    for (var i = 0; i < nodes.length; i++) {
      nodesMap[nodes[i].id()] = true;
    }
    var roots = nodes.filter(function (ele, i) {
      if (typeof ele === "number") {
        ele = i;
      }
      var parent = ele.parent()[0];
      while (parent != null) {
        if (nodesMap[parent.id()]) {
          return false;
        }
        parent = parent.parent()[0];
      }
      return true;
    });
    return roots;
};

cholaLayout.prototype.processChildrenList = function(options, parent, children, layout, layoutType, idToLNode, cholaNodesMap, cholaNodeToCoseNode) {
  var size = children.length;
  var includeLabelsOption = options.nodeDimensionsIncludeLabels;
  for (var i = 0; i < size; i++) {
      var theChild = children[i];
      var children_of_children = theChild.children();
      var theNode;
      var dimensions = theChild.layoutDimensions({
        nodeDimensionsIncludeLabels: includeLabelsOption
      });

      if (theChild.outerWidth() != null && theChild.outerHeight() != null) 
      {
        if (layoutType === "chola") {
          theNode = parent.add(new cholaNode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
          theNode.id = theChild.data("id");
          layout.graphManager.nodes[theNode.id] = theNode;
        }
        else if (layoutType === "cose") {
          theNode = parent.add(new CoSENode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
          theNode.id = theChild._private.data.id;
        }
      } 

      // Attach the paddings of cy node to layout node
      theNode.paddingLeft = parseInt(theChild.css('padding'));
      theNode.paddingTop = parseInt(theChild.css('padding'));
      theNode.paddingRight = parseInt(theChild.css('padding'));
      theNode.paddingBottom = parseInt(theChild.css('padding'));

      //Attach the label properties to compound if labels will be included in node dimensions
      if (options.nodeDimensionsIncludeLabels) {
        if (theChild.isParent()) {
          var labelWidth = theChild.boundingBox({ includeLabels: true, includeNodes: false }).w;
          var labelHeight = theChild.boundingBox({ includeLabels: true, includeNodes: false }).h;
          var labelPos = theChild.css("text-halign");
          theNode.labelWidth = labelWidth;
          theNode.labelHeight = labelHeight;
          theNode.labelPos = labelPos;
        }
      }

      // Map the layout node
      if (layoutType === "chola") {
        idToLNode[theChild.data("id")] = theNode;
        cholaNodesMap.put(theNode.id, theNode);
      }
      else if (layoutType === "cose") {
        idToLNode[theChild.data("id")] = theNode;
        cholaNodeToCoseNode[theNode.id] = theNode;
      }

      if (isNaN(theNode.rect.x)) {
        theNode.rect.x = 0;
      }

      if (isNaN(theNode.rect.y)) {
        theNode.rect.y = 0;
      }

      if (children_of_children != null && children_of_children.length > 0) {
        var theNewGraph;
        theNewGraph = layout.getGraphManager().add(layout.newGraph(), theNode);
        this.processChildrenList(options, theNewGraph, children_of_children, layout, layoutType, idToLNode, cholaNodesMap, cholaNodeToCoseNode);
        }
    }
};

//return the list of compound nodes
cholaLayout.prototype.findCompoundNodes = function(gm) {
    var allNodes = gm.getAllNodes();
    var compoundNodes = [];
    for (var i = 0; i < allNodes.length; i++) {
        var node = allNodes[i];
        if (node.isCompound())
        {
          compoundNodes.push(node);
        }
    }
    return compoundNodes;
};

cholaLayout.prototype.prune = function(gm, compoundNodes, idList)
{
    let nodebuckets = new nodeBuckets(gm);
    let newGm = this.newGraphManager();
    let parent = newGm.addRoot();
    let leaves = nodebuckets.takeLeaves(compoundNodes);
    let graphIsTree = false;
    while(leaves.length > 0)
    {
      let stems = this.stemsFromLeaves(leaves);
      gm.severNodes(leaves, nodebuckets, compoundNodes, idList);
      if (gm.isEmpty())
      {
        //this happens when the whole graph is a tree with two centers
        //we can choose any of the centers
        stems = stems[0];
      }
      for (let i = 0; i < stems.length; i++)
      {
        stems[i].addSelfToGraph(newGm, parent);
      }
      leaves = nodebuckets.takeLeaves(compoundNodes);
    }

    let connectedComponents = newGm.getConnectedComponents();
    for (let i = 0; i < connectedComponents.length; i++)
    {
      let component = connectedComponents[i];
      component.identifyRootNode();
    }

    // gm will now have 3 or more nodes iff it was not in fact a tree, to begin with.
    if (gm.getAllNodes().length >= 3)
    {
      //add gm to the first index
      connectedComponents.unshift(gm);
      // It will be helpful to let each root node in G know that it is a root node.
      for (let i = 1; i < connectedComponents.length; i++)
      {
        let component = connectedComponents[i];
          let root = component.rootNode;
          let node = gm.getNode(root);
          node.isRootNode = true;
      }
    }
    else
      graphIsTree = true;

    return [connectedComponents, graphIsTree];
};

cholaLayout.prototype.stemsFromLeaves = function(leaves)
{
  let stems = [];
  for (let i = 0; i < leaves.length; i++)
  {
    let leaf = leaves[i];
    let edgeList = leaf.edges;
    //get the node connected to the leaf
    let root = edgeList[0].getOtherEnd(leaf);
    let s = new stem(leaf, root);
    stems.push(s);
  }
  return stems;
}

// transfer cytoscape edges to chola edges
cholaLayout.prototype.processEdges = function(layout, layoutType, gm, edges, idToLNode, cholaEdgesMap, cholaEdgeToCoseEdge){
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let sourceNode = idToLNode[edge.data("source")];
    let targetNode = idToLNode[edge.data("target")];
    if(sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length == 0){
      let e = gm.add(layout.newEdge(), sourceNode, targetNode);
      e.id = edge.id();
      if (layoutType == "chola")
      {
        cholaEdgesMap.put(e.id, e);
      }
      else
      {
        cholaEdgeToCoseEdge.put(cholaEdgesMap.get(e.id), e);
      }
    }
  }
};

cholaLayout.prototype.coseOnCore = function(options, idToLNode, cholaNodesMap, cholaEdgesMap, cholaNodeToCoseNode, cholaEdgeToCoseEdge) 
{
  let newCoSENodes = [];
  let newCoSEEdges = [];

  // Create a CoSE layout object
  var coseLayout = new CoSELayout();

  this.defineCoseConstants(options);

  var gm = coseLayout.newGraphManager();
  this.coseGm = gm;

  var nodes = options.eles.nodes();
  var edges = options.eles.edges();
  var topMostNodes = this.getTopMostNodes(nodes);
  this.processChildrenList(options, gm.addRoot(), topMostNodes, coseLayout, "cose", idToLNode, cholaNodesMap, cholaNodeToCoseNode);
  this.processEdges(coseLayout, "cose", gm, edges, idToLNode, cholaEdgesMap, cholaEdgeToCoseEdge);
  //processConstraints(coseLayout, options);
  coseLayout.runLayout();
  return coseLayout;

};

cholaLayout.prototype.constraintCoseLayout = function(cholaGm, coseLayout, options, turn)
{
  // transfer cytoscape constraints to cose layout
  let processConstraints = function(layout, options)
  {
    if(options.alignmentConstraint)
    {
      layout.constraints["alignmentConstraint"] = options.alignmentConstraint;
    }

    // get nodes to be relatively placed
    if(options.relativePlacementConstraint){
      layout.constraints["relativePlacementConstraint"] = options.relativePlacementConstraint;
    }  
  };

  console.log(options.relativeAlignment);
  console.log(options.verticalAlignment);
  console.log(options.horizontalAlignment);

  LayoutConstants.DEFAULT_INCREMENTAL =FDLayoutConstants.DEFAULT_INCREMENTAL =CoSEConstants.DEFAULT_INCREMENTAL = true;

  if (turn == 0)
  {
    this.removeConflictingConstraints(cholaGm, options);
    //options.relativeAlignment = this.removeDuplicateConstraints(options);
  }

  if (turn < 3)
    this.createOrthogonalAlignments(options);

  options.alignmentConstraint = {vertical: options.verticalAlignment, horizontal: options.horizontalAlignment};
  options.relativePlacementConstraint = options.relativeAlignment;
  processConstraints(coseLayout, options);

  // console.log(options.relativeAlignment);
  // console.log(options.verticalAlignment);
  // console.log(options.horizontalAlignment);

  console.log(options.alignmentConstraint);
  console.log(options.relativePlacementConstraint);

  // let coseNodes = coseLayout.getGraphManager().getAllNodes();
  // for (let i = 0; i < coseNodes.length; i++)
  // {
  //     //let cholaNode = cholaNodes[i];
  //     let coseNode = coseNodes[i];
  //     //let loc = cholaNode.getCenter();
  //     //coseNode.setCenter(loc.x, loc.y);
  //     console.log(coseNode.id);
  //     console.log(coseNode.getCenter());
  // }

  // if (turn != 2)
  // {
  coseLayout.getGraphManager().allNodesToApplyGravitation = null;
  coseLayout.runLayout();
//}

let coseNodes = coseLayout.getGraphManager().getAllNodes();
  for (let i = 0; i < coseNodes.length; i++)
  {
      //let cholaNode = cholaNodes[i];
      let coseNode = coseNodes[i];
      //let loc = cholaNode.getCenter();
      //coseNode.setCenter(loc.x, loc.y);
      console.log(coseNode.id);
      console.log(coseNode.getCenter());
  }

  if (turn < 2)
  {
    //second turn will be after performing chain configuration
    options.verticalAlignment = [];
    options.horizontalAlignment = [];
  }
  options.alignmentConstraint = undefined;
  options.relativePlacementConstraint = undefined;

  return coseLayout;
};

cholaLayout.prototype.createOrthogonalEdges = function(gm) 
{
  let allEdges = gm.getAllEdges();
  let edgesWithBends = [];
  for (let i = 0; i < allEdges.length; i++)
  {
    let edge = allEdges[i];
    //if edge is not orthogonal, we make it orthogonal
    if (!edge.isOrthogonal())
    {
      let source = edge.source;
      let target = edge.target;
      let c = new compass();
      let dir = c.direction(source, target);
      //console.log(dir);

      //storing possible semi positions for source and target to create an edge with a bendpoint
      //possible direction (a,b) contains free semi a of source and free semi b of trgt
      let possibleDirections = [];
      if (dir == c.SE)
      {
        possibleDirections.push([0,3,1]);
        possibleDirections.push([1,2,0]);
      }
      else if (dir == c.SW)
      {
        possibleDirections.push([1,0,2]);
        possibleDirections.push([2,3,1]);
      }
      else if (dir == c.NW)
      {
        possibleDirections.push([2,1,3]);
        possibleDirections.push([3,0,2]);
      }
      else if (dir == c.NE)
      {
        possibleDirections.push([3,2,0]);
        possibleDirections.push([0,1,3]);
      }

      let srcFreeLocs = source.getFreeSemiLocations();
      let tgtFreeLocs = target.getFreeSemiLocations();
      let option;
      for (let k = 0; k < possibleDirections.length; k++)
      {
        option = possibleDirections[k];
        if (srcFreeLocs.includes(option[0]) && tgtFreeLocs.includes(option[1]))
          break;
      }
      if (option != null)
      {
        let bendpoint = {x:null, y:null};
        if (option[0] == 0 || option[0]  == 2)
        {
            bendpoint.x = target.getCenterX();
            bendpoint.y = source.getCenterY();
        }
        else if (option[0]  == 1 || option[0]  == 3)
        {
            bendpoint.x = source.getCenterX();
            bendpoint.y = target.getCenterY();
        }
        edge.createBendPoint(bendpoint, option[0], option[2], source, target);
        gm.edgesWithBends.push(edge);
        edgesWithBends.push(edge);
      }
    }
  }
  return edgesWithBends;
};

cholaLayout.prototype.getMaxNodeDimension = function(gm) 
{
  var allNodes = gm.getAllNodes();
  var max = 0;

  for (let i = 0; i < allNodes.length; i++)
  {
    var node = allNodes[i];
    var width = node.getWidth();
    var height = node.getHeight();

    let tempMax = Math.max(width, height);
    
    if (!node.isCompound() & max < tempMax)
      max = tempMax;
  }

  return max;
};

cholaLayout.prototype.higherNodesConfiguration = function(gm, highDegreeNodes, options) 
{
  var cyclicIds = [];
  var asgns = [];
  var highIds = [];
  for (let i = 0; i < highDegreeNodes.length; i++)
  {
    let node = highDegreeNodes[i];
    highIds. push(node.id);
    var asgn = new assign();
    cyclicIds.push(asgn.getCyclicOrder(node));
  }

  options.placementDict = {};

  for (let i = 0; i < highDegreeNodes.length; i++)
  {
    let node = highDegreeNodes[i];
    var am = this.getAdjacencyMatrix(gm);
    var asgn = new assign();
    var asgns = asgn.getNeighborAssignments(node, cyclicIds[i], highIds, am);
    var degree = node.getDegree();
    var ids = [];
    for (let j = 0; j < asgns.semis.length; j++)
    {
      if (typeof(asgns.semis[j]) != 'undefined' & asgns.semis[j] !== null)
      {
        ids.push(asgns.semis[j].id);
      }
      else
      {
        ids.push('x');
      }
    }

    for (let j = 0; j < degree; j++)
    {
      var edge = node.edges[j];
      var nbr = edge.getOtherEnd(node);

      var newNbrLoc = ids.indexOf(nbr.id);
      this.setNeighborPosition(gm, node, nbr, newNbrLoc, options.edgeGap);

      this.placementConstraints(newNbrLoc, options, node, nbr);
    }

    node.processed = true;

    // changing the status of node to processed in cyclic list
    for (let j = 0; j < cyclicIds.length; j++)
    {
      let arr = cyclicIds[j];
      for (let k = 0; k < arr.length; k++)
      {
        if (arr[k].id == node.id)
        {
          arr[k].processed = true;
        }
      }
    }
  }
};

cholaLayout.prototype.placementConstraints = function(newLoc, options, node1, node2, ignoreDuplicates = false)
{
  if (newLoc == 0)
  {
    this.addPlacementConstraints(options, node1, node2, 0, ignoreDuplicates);
    
  }
  else if (newLoc == 1)
  {
    this.addPlacementConstraints(options, node1, node2, 1, ignoreDuplicates);
  }
  else if (newLoc == 2)
  {
    this.addPlacementConstraints(options, node2, node1, 0, ignoreDuplicates);
  }
  else 
  {
    this.addPlacementConstraints(options, node2, node1, 1, ignoreDuplicates);
  }
};

cholaLayout.prototype.createOrthogonalAlignments = function(options)
{
    //separate left-right and top-bottom alignments
    let topBottoms = [];
    let leftRights = [];

    for (let i = 0; i < options.relativeAlignment.length; i++)
    {
      let value = options.relativeAlignment[i];

      if (value.top != undefined)
          topBottoms.push(value);
      else
          leftRights.push(value);
    }

    this.combineAlignments(options.horizontalAlignment, leftRights);
    this.combineAlignments(options.verticalAlignment, topBottoms);

};

cholaLayout.prototype.combineAlignments = function(alignment, orientation) 
{
    //create horizontal alignments
    for (let i = 0; i < orientation.length; i++)
    {
      let constraint = orientation[i];
      let node1, node2;
      if (constraint.left != undefined)
      {
        node1 = constraint.left;
        node2 = constraint.right;
      }
      else
      {
        node1 = constraint.top;
        node2 = constraint.bottom; 
      }

      let changes = false;
      let combinedNode;
      let align;

      for (let k = 0; k < alignment.length; k++)
      {
        align = alignment[k];
        if (align.includes(node1) && align.includes(node2))
        {
          break;
        }
        else if (align.includes(node1))
        {
          changes = true;
          combinedNode = node2;
          align.push(node2);
          break;
        }
        else if (align.includes(node2))
        {
          changes = true;
          combinedNode = node1;
          align.push(node1);
          break;
        }
      }

      if (changes == false)
      {
        alignment.push([node1, node2]);
      }
      else
      {
        alignment.splice(alignment.indexOf(align), 1);

        for (let j = 0; j < alignment.length; j++)
        {
          let align2 = alignment[j];
          if (align2.includes(combinedNode))
          {
              //add each value from align2 to align
              for (let l = 0; l < align2.length; l++)
              {
                if (!align.includes(align2[l]))
                  align.push(align2[l]);
              }
              
              //remove align2 from alignment
              alignment.splice(j, 1);

          }
        }

        alignment.push(align);
      }
    }
};

cholaLayout.prototype.removeDuplicateConstraints = function(options)
{
  //combine the constraints into a set to remove duplicates

  let aligns = new Set();
  let keys = Object.keys(placementDict);
  for (let i = 0; i < keys.length; i++)
  {
    let node = keys[i];
    let constraints = placementDict[node];
    for (let j = 0; j < constraints.length; j++)
    {
      aligns.add(constraints[j]);
    }
  }
  return (Array.from(aligns));
};



cholaLayout.prototype.removeConflictingConstraints = function(gm, options) 
{
  //let placementDict = options.placementDict;

  for (let i = 0; i < options.relativeAlignment.length; i++)
  {
    let value = options.relativeAlignment[i];
  //console.log(value);
  let nbr;
  let node1, node2;


  //determine the proposed direction from node to nbr in the constraint
  if (value.top != undefined)
  {
      //if constraint has been checked in a previous iteration
      // if (typeof(value.top) == "string")
      //   continue;

      //determine whether node is on top or bottom
      //if (value.top == node)
      //{
          
          node1 = gm.nodes[value.top];
          node2 = gm.nodes[value.bottom];
          let dir = node1.getDirec(node2.getCenter(), false);
          if (dir != 1)
          {
              options.relativeAlignment.splice(i, 1);
              i = i - 1;

              //and create a new constraint if possible
              if (dir == 0 || dir == 2 || dir == 3)
                this.placementConstraints(dir, options, node1, node2);
          }
          else 
          {
            value.top = node1.id;
            value.bottom = node2.id;
          }
      // }
      // else  //else node is at the bottom
      // {
      //     nbr = gm.nodes[value.top];
      //     node1 = gm.nodes[value.bottom];
      //     let dir = node1.getDirec(nbr.getCenter(), false);
      //     if (dir != 3)
      //     {
      //         constraints.splice(k, 1);
      //         k = k - 1;

      //         //and create a new constraint if possible
      //         if (dir == 0 || dir == 1 || dir == 2)
      //           this.placementConstraints(dir, options, node1, nbr);
      //     }
      //     else 
      //     {
      //       value.top = nbr.id;
      //       value.bottom = node1.id;
      //     }
      // }
  }
  else if (value.left != undefined)
  {
      //if constraint has been checked in a previous iteration
      // if (typeof(value.left) == "string")
      //   continue;

      //determine whether node is on left or right
      // if (value.left == node)
      // {
          
          node1 = gm.nodes[value.left];
          node2 = gm.nodes[value.right];
          let dir = node1.getDirec(node2.getCenter(), false);
          if (dir != 0)
          {
              options.relativeAlignment.splice(i, 1);
              i = i - 1;

              //and create a new constraint if possible
              if (dir == 1 || dir == 2 || dir == 3)
                this.placementConstraints(dir, options, node1, node2);
          }
          else 
          {
            value.left = node1.id;
            value.right = node2.id;
          }
      // }
      // else  //else node is at the right
      // {
      //     nbr = gm.nodes[value.left];
      //     node1 = gm.nodes[value.right];
      //     let dir = node1.getDirec(nbr.getCenter(), false);
      //     if (dir != 2)
      //     {
      //         //if the constraint is not being satisfied, we remove it
      //         constraints.splice(k, 1);
      //         k = k - 1;

      //         //and create a new constraint if possible
      //         if (dir == 0 || dir == 1 || dir == 3)
      //           this.placementConstraints(dir, options, node1, nbr);
      //     }
      //     else 
      //     {
      //       value.left = nbr.id;
      //       value.right = node1.id;
      //     }
      // }
  }
}

  // //remove conflicting relative placement constraints
  // let keys = Object.keys(options.placementDict);

  // //let gm = this.graphManager;
  // for (let i = 0; i < keys.length; i++)
  // {
  //   let node = keys[i];
  //   //console.log(node);

  //   if (node == "n11")
  //   {
  //     let c = 6;
  //     let p = 8;
  //   }

  //   let constraints = options.placementDict[node];
  //   let len = constraints.length;

  //   for (let k = 0; k < constraints.length; k++)
  //   {
  //       let value = constraints[k];
  //       //console.log(value);
  //       let nbr;
  //       let node1;
  //       //determine the proposed direction from node to nbr in the constraint
  //       if (value.top != undefined)
  //       {
  //           //if constraint has been checked in a previous iteration
  //           // if (typeof(value.top) == "string")
  //           //   continue;

  //           //determine whether node is on top or bottom
  //           if (value.top == node)
  //           {
  //               nbr = gm.nodes[value.bottom];
  //               node1 = gm.nodes[value.top];
  //               let dir = node1.getDirec(nbr.getCenter(), false);
  //               if (dir != 1)
  //               {
  //                   constraints.splice(k, 1);
  //                   k = k - 1;

  //                   //and create a new constraint if possible
  //                   if (dir == 0 || dir == 2 || dir == 3)
  //                     this.placementConstraints(dir, options, node1, nbr);
  //               }
  //               else 
  //               {
  //                 value.top = node1.id;
  //                 value.bottom = nbr.id;
  //               }
  //           }
  //           else  //else node is at the bottom
  //           {
  //               nbr = gm.nodes[value.top];
  //               node1 = gm.nodes[value.bottom];
  //               let dir = node1.getDirec(nbr.getCenter(), false);
  //               if (dir != 3)
  //               {
  //                   constraints.splice(k, 1);
  //                   k = k - 1;

  //                   //and create a new constraint if possible
  //                   if (dir == 0 || dir == 1 || dir == 2)
  //                     this.placementConstraints(dir, options, node1, nbr);
  //               }
  //               else 
  //               {
  //                 value.top = nbr.id;
  //                 value.bottom = node1.id;
  //               }
  //           }
  //       }
  //       else if (value.left != undefined)
  //       {
  //           //if constraint has been checked in a previous iteration
  //           // if (typeof(value.left) == "string")
  //           //   continue;

  //           //determine whether node is on left or right
  //           if (value.left == node)
  //           {
  //               nbr = gm.nodes[value.right];
  //               node1 = gm.nodes[value.left];
  //               let dir = node1.getDirec(nbr.getCenter(), false);
  //               if (dir != 0)
  //               {
  //                   constraints.splice(k, 1);
  //                   k = k - 1;

  //                   //and create a new constraint if possible
  //                   if (dir == 1 || dir == 2 || dir == 3)
  //                     this.placementConstraints(dir, options, node1, nbr);
  //               }
  //               else 
  //               {
  //                 value.left = node1.id;
  //                 value.right = nbr.id;
  //               }
  //           }
  //           else  //else node is at the right
  //           {
  //               nbr = gm.nodes[value.left];
  //               node1 = gm.nodes[value.right];
  //               let dir = node1.getDirec(nbr.getCenter(), false);
  //               if (dir != 2)
  //               {
  //                   //if the constraint is not being satisfied, we remove it
  //                   constraints.splice(k, 1);
  //                   k = k - 1;

  //                   //and create a new constraint if possible
  //                   if (dir == 0 || dir == 1 || dir == 3)
  //                     this.placementConstraints(dir, options, node1, nbr);
  //               }
  //               else 
  //               {
  //                 value.left = nbr.id;
  //                 value.right = node1.id;
  //               }
  //           }
  //       }
  //   }
    
  // }
};

cholaLayout.prototype.addPlacementConstraints = function(options, node1, node2, direction, ignoreDuplicates = false) 
{
    //this function always stores the top, bottom, right and left values with actual nodes and not their ids
    //the reason is that when checking conflicting constraints, we need to find the direction from one node to another

    //if ignoreDuplicates is true, that shows the case when interRankConstraints2 are being constructed for a tree
    //in this case, we go not check if a constraint already exists for node1 and node2

    //if either node 1 or node2 is a compound node, no constraints are added to them 
    if (node1.withChildren().size > 1 || node2.withChildren().size > 1)
      return;

    if (typeof(node1) != "string")
      node1  = node1.id;
    if (typeof(node2) != "string")
      node2 = node2.id;

    if (!ignoreDuplicates)
    {
      //direction is 0 for left right, 1 for top bottom
      for (let i = 0; i < options.relativeAlignment.length; i++)
      {
          let val = options.relativeAlignment[i];

          if (val.left != undefined)
          {
            if (val.left == node1 && val.right == node2)
              return;
            else if (val.left == node2 && val.right == node1)
              return;
          }
          else if (val.top != undefined)
          {
            if (val.top == node1 && val.bottom == node2)
              return;
            else if (val.top == node2 && val.bottom == node1)
              return;
          }
      }
    }

    let temp;
    if (direction == 0)
    {
      if (ignoreDuplicates)
        temp = {left: node1, right: node2, gap: options.edgeGap/2};
      else
        temp = {left: node1, right: node2, gap: options.edgeGap};
      options.relativeAlignment.push(temp);
    }
    else
    {
      if (ignoreDuplicates)
        temp = {top: node1, bottom: node2, gap: options.edgeGap/2};
      else
        temp = {top: node1, bottom: node2, gap: options.edgeGap};
      options.relativeAlignment.push(temp);
    }

    if (options.placementDict[node1] == undefined)
        options.placementDict[node1] = [temp];
    else
        options.placementDict[node1].push(temp);

    if (options.placementDict[node2] == undefined)
        options.placementDict[node2] = [temp];
    else
        options.placementDict[node2].push(temp);
};

cholaLayout.prototype.setNeighborPosition = function(gm, node, nbr, newNbrLoc, edgeLength)
{
  //ideal edge length based on the highest width node
  let nodeLoc = node.getCenter();

  let prevLoc = nbr.getCenter();
  let newLoc = Object.assign({}, prevLoc);
  if (newNbrLoc == 0)
  {
    newLoc.x = nodeLoc.x + edgeLength;
    newLoc.y = nodeLoc.y;
  }
  else if (newNbrLoc == 1)
  {
    newLoc.x = nodeLoc.x;
    newLoc.y = nodeLoc.y + edgeLength;
  }
  else if (newNbrLoc == 2)
  {
    newLoc.x = nodeLoc.x - edgeLength;
    newLoc.y = nodeLoc.y;
  }
  else if (newNbrLoc == 3)
  {
    newLoc.x = nodeLoc.x;
    newLoc.y = nodeLoc.y - edgeLength;
  }
  nbr.setCenter(newLoc.x, newLoc.y);
  
};

cholaLayout.prototype.getAdjacencyMatrix = function(gm)
{      
    var am = [];
    var nodeIds = [];
    var allNodes = gm.getAllNodes();
    for (let i = 0; i < allNodes.length; i++)
    {
      let temp = [];
      nodeIds.push(allNodes[i].id);
      for (let j = 0; j < allNodes.length; j++)
      {
        temp[j] = false;
      }
      am.push(temp);
    }
    var allEdges = gm.getAllEdges();
    for (let i = 0; i < allEdges.length; i++)
    {
      let edge = allEdges[i];
      let srcIndex = allNodes.indexOf(edge.getSource());
      let trgtIndex = allNodes.indexOf(edge.getTarget());
      am[srcIndex][trgtIndex] = true;
      am[trgtIndex][srcIndex] = true;
    }

    return [am, nodeIds];
};

cholaLayout.prototype.createDummyNodesAndEdges = function(cholaNodeToCoseNode, edgeToDummyNodes, edgesWithBends, coseLayout, cholaEdgeToCoseEdge, options)
{
  let coseGm = coseLayout.getGraphManager();
  //let edgeToDummyNodes = {};

  for (let i = 0; i < edgesWithBends.length; i++)
  {
    let cholaEdge = edgesWithBends[i];
    let coseEdge = cholaEdgeToCoseEdge.get(cholaEdge);
    
    let source, target;

    var dummyNodes = [];
    var prev = coseEdge.source;

    var graph = coseGm.calcLowestCommonAncestor(coseEdge.source, coseEdge.target);
    let dir1, dir2, j;

    for (j = 0; j < cholaEdge.bendpoints.length; j++)
    {
      let bendpoint = cholaEdge.bendpoints[j][0];
      dir1 = cholaEdge.bendpoints[j][1][0];
      dir2 = cholaEdge.bendpoints[j][1][1];

      source = cholaEdge.bendpoints[j][2][0];
      target = cholaEdge.bendpoints[j][2][1];

      if (prev.id != source.id)
      {
        prev = coseEdge.target;
        target = coseEdge.source;
      }
      else
      {
        target = coseEdge.target;
      }

      // create new dummy node
      var dummyNode = coseGm.getRoot().add(new CoSENode(coseGm, bendpoint, new DimensionD(1, 1)));
      dummyNode.id = "dnode:" + coseEdge.source.id + "to" + coseEdge.target.id + ":" + j.toString();
      cholaNodeToCoseNode[dummyNode.id] = dummyNode;

      // create new dummy edge between prev and dummy node
      let dummyEdge = coseGm.add(coseGm.getLayout().newEdge(), prev, dummyNode);
      dummyEdge.id = "dedge:" + prev.id + "to" + dummyNode.id + ":" + j.toString();

      this.placementConstraints(dir1, options, prev, dummyNode);
      
      dummyNodes.push(dummyNode);

      prev = dummyNode;
    }

    let dummyEdge = coseGm.add(coseGm.getLayout().newEdge(), prev, target);
    dummyEdge.id = "dedge:" + prev.id + "to" + target.id + ":" + j.toString();
    
    this.placementConstraints(dir2, options, prev, target);
    //this.changeNodestoIds(options);

    edgeToDummyNodes[cholaEdge.id] = dummyNodes;

    //remove real edge from graph manager if it is inter-graph
    if (coseEdge.isInterGraph)
    {
      coseLayout.graphManager.remove(coseEdge);
    }
    //else, remove the edge from the current graph
    else
    {
      graph.remove(coseEdge);
    }

    coseGm.resetAllEdges();
    coseGm.resetAllNodes();
    coseGm.getAllEdges();
    coseGm.getAllNodes();
    
  } 
  return edgeToDummyNodes;

};

cholaLayout.prototype.chainNodesConfiguration = function(gm, options)
{
  var output = gm.getChainsAndCycles();
  var chains = [];
  var cycles = [];

  //create objects for chains and cycles
  for (let i = 0; i < output[0].length; i++)
  {
    //if the chain consists of only one node, then it will already be aligned
    //so that node is ignored
    let c = new chain(gm, output[0][i]);
    chains.push(c);
  }
  for (let i = 0; i < output[1].length; i++)
  {
    let cycle = new chain(gm, output[1][i], true);
    chains.push(cycle);
  }
  
  //we maintain a list of dummy nodes for bendpoints
  let dummyNodes = [];

  //for each chain, we find a configuration for it
  for (let i = 0; i < chains.length; i++)
  {    
    var c = chains[i];
    if (c.nodes.length == 1)
    {
     //    let node = c.nodes[0];
     //  //let endNode = c.nodes[c.nodes.length - 1];
     //    //removing previous relative constraints for the chain nodes
     //  let arr = [];

     //  // if (startNode.id == endNode.id)
     //  //   arr = [startNode];
     //  // else
     //  //   arr = [startNode, endNode];

     // // for (let k = 0; k < arr.length; k++)
     //  //{
     //    //let node = arr[k];
     //    for (let j = 0; j < options.relativeAlignment.length; j++)
     //    {
     //      let align = options.relativeAlignment[j];
     //      if (align.top != undefined)
     //      {
     //        if (align.top == node.id || align.bottom == node.id)
     //        {
     //          options.relativeAlignment.splice(j, 1);
     //          j = j-1;
     //        }
     //      }
     //      else
     //      {
     //        if (align.left == node.id || align.right == node.id)
     //        {
     //          options.relativeAlignment.splice(j, 1);
     //          j = j-1;
     //        }
     //      }
     //    }
      //}
      continue;
    }

    c.takeShapeBasedConfiguration(gm, options, this); 
  }
};

cholaLayout.prototype.oneDegreeNodesConfiguration = function(gm, nodes, options)
{
  for (let i = 0; i < nodes.length; i++)
  {
    let node = nodes[i];
    let edge = node.edges[0];

    //finding the nbr node
    let nbr = null;
    if (edge.source == node)
    {
      nbr = edge.target;
    }
    else
    {
      nbr = edge.source;
    }

    let nbrDegree = nbr.getDegree();
    let nbrLoc = nbr.getCenter();

    //if nbr is not a 1 or 2-degree node, we go to the next one degree node
    if (nbrDegree > 2)
      continue;
    else
    {
      if (nbrDegree == 1)
      {
        //we will first check if a constraint has already been create for these two connected nodes
        //if such a constraint exists, we remove the previous constraints

        let check = false;
        for (let j = 0; j < options.relativeAlignment.length; j++)
        {
          let align = options.relativeAlignment[j];
          if (align.top != undefined)
          {
            //console.log(align);
            if (align.top == node.id || align.bottom == node.id)
            {
              check = true;
              break;
            }
          }
          else
          {
            if (align.left == node.id || align.right == node.id)
            {
              check = true;
              break;
            }
          }
        }
        
        if (check)
          continue;

        //find the free semi locations by the nbr
        let availableSemis = [0, 1, 2, 3];

        //finding the least cost position
        var nodeLoc = node.getCenter();
        node.dx = nodeLoc.x - nbrLoc.x;
        node.dy = nodeLoc.y - nbrLoc.y;
        let o = node.octalCode();
        let cost = [];
        for (let j = 0; j < availableSemis.length; j++)
        {
          cost.push(node.deflectionFromSemi(availableSemis[j], o));
        }
        var direction = availableSemis[cost.indexOf(Math.min(...cost))];

        this.placementConstraints(direction, options, nbr, node);
        //this.changeNodestoIds(options);
        this.setNeighborPosition(gm, nbr, node, direction, options.edgeGap);
      }
      //when nbr is a 2 degree node
      else
      {
        //find the free semi locations by the nbr
        let availableSemis = nbr.getFreeSemiLocations();

        //finding the least cost position
        var nodeLoc = node.getCenter();
        node.dx = nodeLoc.x - nbrLoc.x;
        node.dy = nodeLoc.y - nbrLoc.y;
        let o = node.octalCode();
        let cost = [];
        for (let j = 0; j < availableSemis.length; j++)
        {
          cost.push(node.deflectionFromSemi(availableSemis[j], o));
        }
        var direction = availableSemis[cost.indexOf(Math.min(...cost))];

        this.placementConstraints(direction, options, nbr, node);

        this.setNeighborPosition(gm, nbr, node, direction, options.edgeGap);
      }
    }
  }
};

cholaLayout.prototype.removeEdgeOverlaps = function(gm, coseLayout, cholaNodeToCoseNode, cholaEdgeToCoseEdge)
{
  /*
  Remove the edge overlaps in a routed orthogonal graph G.
  :param G: The graph whose overlaps are to be removed.
  :return: A new graph object Q. It has all the nodes of G, plus
           a node for each bend point in the routes of G. Its edges
           cover the routes of G, in a set-theoretic sense, but none
           of its edges overlap.
  */

  let edgeToDummyNodes = {};
  for (let i = 0; i < gm.edgesWithBends.length; i++)
  {
    let source, target;
    let dir1, dir2, j;

    var dummyNodes = [];
    let dummyEdges = [];
    let routePoints = [];

    let cholaEdge = gm.edgesWithBends[i];
    var prev = cholaEdge.source;

    var graph = gm.calcLowestCommonAncestor(cholaEdge.source, cholaEdge.target);
    
    for (j = 0; j < cholaEdge.bendpoints.length; j++)
    {
      let bendpoint = cholaEdge.bendpoints[j][0];

      source = cholaEdge.source;
      target = cholaEdge.target;

      // create new dummy node
      var dummyNode = gm.getRoot().add(new cholaNode(gm, new PointD(bendpoint.x - 0.5, bendpoint.y - 0.5), new DimensionD(1, 1)));
      dummyNode.id = "dnode:" + cholaEdge.source.id + "to" + cholaEdge.target.id + ":" + j.toString();
      gm.nodes[dummyNode.id] = dummyNode;
      routePoints.push(dummyNode);

      // create new dummy edge between prev and dummy node
      let dummyEdge = gm.add(gm.getLayout().newEdge(), prev, dummyNode);
      dummyEdge.id = "dedge:" + prev.id + "to" + dummyNode.id + ":" + j.toString();

      dummyNodes.push(dummyNode);
      dummyEdges.push(dummyEdge);

      prev = dummyNode;
    }

    let dummyEdge = gm.add(gm.getLayout().newEdge(), prev, target);
    dummyEdge.id = "dedge:" + prev.id + "to" + target.id + ":" + j.toString();
    dummyEdges.push(dummyEdge);

    edgeToDummyNodes[cholaEdge.id] = [dummyNodes, dummyEdges, routePoints];

    //remove real edge from graph manager if it is inter-graph
    if (cholaEdge.isInterGraph)
    {
      gm.remove(cholaEdge);
    }
    //else, remove the edge from the current graph
    else
    {
      graph.remove(cholaEdge);
    }

    gm.resetAllEdges();
    gm.resetAllNodes();
    gm.getAllEdges();
    gm.getAllNodes();

  } 
  return edgeToDummyNodes;  
};

cholaLayout.prototype.computeNodeGroups = function(segs) 
{
  /*
  :param segs: a list of Segments (should be all H- or all V-segs)
  :return: a list of lists of Nodes ("groups"), being endpts that
           participate in a common sequence of overlapping segments,
           listed in order of increasing variable-coordinate
  */
  let groups = [];

  // Partition segs by const-coord
  let a = function(s){return s.v};
  let parts = this.partition(segs, a, 0.5);

  // Compute groups for each part.
  for (let i = 0; i < parts.length; i++)
  {
    let part = parts[i];

    // Build list of events.
    let events = [];
    for (let k = 0; k < part.length; k++)
    {
      let seg = part[k];
      let temp = seg.getEvents();
      for (let j = 0; j < temp.length; j++)
        events.push(temp[j]);
    }

    // Sort events by variable-coord
    events.sort(function(a, b) {
      return a.u - b.u;
    });

    // Initialise
    let gp = [];
    let openSegs = [];
    for (let j = 0; j < events.length; j++)
    {
      let e = events[j];
      let endpoint = e.endpoint;

      // Do not append multiple copies:
      if ((gp.length == 0) || (gp[gp.length - 1] != endpoint))
          gp.push(endpoint);

      // Keep track of which segs are open.
      if (e.kind == 'open')
          openSegs.push(e.seg);
      else if (e.kind == 'close')
      {
        let index = openSegs.indexOf(e.seg);
        openSegs.splice(index, 1);

        // If no open segs remain, the group is complete.
        if (openSegs.length == 0)
        {
            groups.push(gp);
            gp = [];
        }
      }
    }
  }
  return groups;
};

cholaLayout.prototype.partition = function(list, key, tol=null) 
{
  /*
  :param lst: a list
  :param key: a callable
  :param tol: a tolerance -- optional
  :return: a list of lists, representing a partition of lst
           according to the value returned by key on each element.

  If you pass a tolerance value then we use the tolerantPartition
  function instead.
  */
  if (tol != null)
      return this.tolerantPartition(list, key, tol);

  let parts = {};
  let keys = [];
  for (let i = 0; i < list.length; i++)
  {
    let item = list[i];
    let k = key(item);
    if (keys.indexOf(k) < 0)
        keys.push(k);

    let part = [];
    if (parts[k] != undefined)
      part = parts[k];
    part.push(item);
    parts[k] = part;
  }

  let partList = [];
  for (let i = 0; i < keys.length; i++)
  {
    let k = keys[i];
    partList.push(parts[k]);
  }
  return partList;
};

cholaLayout.prototype.tolerantPartition = function(list, key, tol=0.01) 
{
  /*
    Like the basic parition function, but allows key values to
    be within a given tolerance of one another.
    (Key values should be floats!)
  */
  // If lst is empty there's nothing to be done.
  if (list.length == 0)
    return [];

  // Else begin by sorting the list.
  list.sort(function(a, b) {
    return key(a) - key(b);
  });

  // Prepare return value.
  let partList = [];

  // Initialise the first part with the first item of the list.
  let firstItem = list[0];
  let part = [firstItem];

  // Initialise the average key value for the part.
  let avg = key(firstItem);

  // n records how many keys are in the avg
  let n = 1;

  for (let i = 1; i < list.length; i++)
  {
    let item = list[i];
    let k = key(item);
    let dk = k - avg;

    if (Math.abs(dk) < tol)
    {
      // Difference of new key with current avg is within
      // tolerance. Add item to current part and update avg.
      part.push(item);
      avg = (n*avg + k)/(n+1);
      n = n + 1;
    }
    else
    {
      // Difference is too much. Record the current part
      // and begin a new one for this item.
      partList.push(part);
      part = [item];
      avg = k;
      n = 1;
    }
  }

  // At this point there is always a nonempty part that has not
  // yet been appended to the part list.
  partList.push(part);
  return partList;
};

cholaLayout.prototype.removeEdgeCrossings = function(gm, coseLayout, options) 
{
    /*
    :param Q: a routed orthogonal graph /with no edge overlaps/
    :param withConstraints: say whether you want constraints to be
                            generated for each edge
    :return: a planarisation P of Q, obtained by inserting dummy
             nodes at all edge crossings in Q
    */

    // // Get the new graph P started by giving it a copy of each node in Q.
    // let p = this.newGraphManager();
    // let parent = p.addRoot();
    // let allNodes = q.getAllNodes();
    // for (let i = 0; i < allNodes.length; i++)
    // {
    //     let node = allNodes[i];
    //     let newNode = parent.add(new cholaNode(p, node.getLocation(), new DimensionD(parseFloat(node.getWidth()), parseFloat(node.getHeight()))));
    //     newNode.id = node.id;
    // }

    // Build a EdgeSegment object for each edge in Q.
    let segs = gm.buildSegments();

    // Compute and add nodes to the crossing pairs.
    this.computeCrossings(segs, gm.idDisp, p);

    for (let i = 0; i < segs.length; i++)
    {
        let seg = segs[i];
        let sourceNode = seg.n1;
        let targetNode = seg.n2;
        let e1 = p.add(this.newEdge(), p.getNode(sourceNode), p.getNode(targetNode));
        e1.id = "e:" + sourceNode.id + " to " + targetNode.id + ": " + toString(q.idDisp.takeNext());
    }

    
    for (let i = 0; i < segs.length; i++)
    {
        let seg = segs[i];
        let d = new edgeSegment(seg.n1, seg.n2).origDir
        //p.nodeConf.setDirec(seg.n1, seg.n2, d);
        this.placementConstraints(d, options, seg.n1, seg.n2);
        //this.changeNodestoIds(options);
    }
   
    return p;
};

cholaLayout.prototype.computeCrossings = function(segs, idDisp, p) 
{
    /*
    ...
    :param segs:
    :return:
    */
    let crossingNodes = [];

    // List all events for all segs.
    let events = [];
    for (let i = 0; i < segs.length; i++)
    {
        let seg = segs[i];
        let temp = seg.getEvents();
        for (let j = 0; j < temp.length; j++)
          events.push(temp[j]);
    }

    let xkey = function(a) {
      return a.endpoint.getCenter().x;
    };
    // Sort and partition by x.
    events.sort(xkey);

    let xparts = this.partition(events, xkey, 0.8);

    // # Scan through by x-coord.

    // # How to choose setting for SORT_BY_EXACT_Y and TOLERANCE:
    // # Suppose vertical segment A has its south end at (0, 0), and horizontal
    // # segment B has its east end at (0, -0.00000000001). This means that
    // # /technically/ A and B intersect. However (http://xkcd.com/1475/) you
    // # probably don't actually want to treat this as an intersection. In that
    // # case, set SORT_BY_EXACT_Y to False. If it doesn't help, consider making
    // # the TOLERANCE bigger.
    // #
    // # In this example, setting SORT_BY_EXACT_Y to False means that, when the
    // # list of active events is sorted, the "close" event for segment A will come
    // # /before/ the "sustain" event for segment B, instead of the other way around,
    // # as dictated by their exact y-coordinates. This way we will /not/ detect an
    // # intersection between A and B.

    let SORT_BY_EXACT_Y = false;
    let TOLERANCE = 1.0;

    let activeCmp = function(e, f)
    {
        /*
        Sort primarily by increasing y-coord.
        Secondarily, "close" events come before "sustain," and those
        before "open" events.
        */
        let EPSILON;
        if (SORT_BY_EXACT_Y)
          EPSILON = 0;  
        else 
          EPSILON = TOLERANCE;

        if (f.endpoint.getLocation().y - e.endpoint.getLocation().y > EPSILON)
            return -1;
        else if (e.endpoint.getLocation().y - f.endpoint.getLocation().y > EPSILON)
            return 1;
        else
        {
            let kindNums = new Object({
                'close': 0,
                'sustain': 1,
                'open': 2
            });
            let ek = kindNums[e.kind];
            let fk = kindNums[f.kind];
            return ek - fk;
        }
    };

    let openH = [];
    let parent = p.getRoot();
    for (let i = 0; i < xparts.length; i++)
    {
        let part = xparts[i];
        let openV = null;
        let active = [];

        for (let j = 0; j < openH.length; j++)
          active.push(openH[j]);

        for (let j = 0; j < part.length; j++) 
          active.push(part[j]);

        active.sort(activeCmp);

        for (let j = 0; j < active.length; j++)
        {
            let event = active[j];
            if (event.kind == 'sustain' && openV != null)
            {
                // Create new crossing node.
                let cn = parent.add(new cholaNode(p, {x:openV.v, y: event.v}, new DimensionD(parseFloat(30, 30))));
                cn.id = "dn" + idDisp.takeNext();

                // Set cn as new endpt of the two segs.
                event.seg.setNewClosingNode(cn);
                openV.seg.setNewClosingNode(cn);

                // New H-seg
                let hseg = new edgeSegment(cn, event.companion.endpoint);
                segs.push(hseg);
                event.companion.seg = hseg;

                // new V-seg
                let vseg = new edgeSegment(cn, openV.companion.endpoint);
                segs.push(vseg);
                openV.companion.seg = vseg;

                // update the two open events
                // H:
                event.seg = hseg;
                event.endpoint = cn;
                event.u = cn.getLocation().x;

                // and simply allow event to stay in openH for the next part
                // V:
                openV.seg = vseg;
                openV.endpoint = cn;
                openV.u = cn.getLocation().y;
                // and simply allow openV to remain the open vertical event
            }
            else if (event.kind == 'open')
            {
                if (event.seg.kind == "H")
                {
                    event.kind = 'sustain';
                    openH.push(event);
                }
                else if (event.seg.kind == "V")
                    openV = event;
            }
            else if (event.kind == 'close')
            {
                if (event.seg.kind == "H")
                {
                    let index = openH.indexOf(event.companion);
                    openH.splice(index, 1);
                }
                else if (event.seg.kind == "V")
                    openV = null;
            }
        }
    }

};

cholaLayout.prototype.reAttachTrees = function(trunk, trees, options, cholaIdToLNode) 
{
  /*
    :param trunk: a Graph object, being the trunk of a graph, with an existing layout
    :param trees: a list of Tree objects, being the trees of the graph, with existing layout
    :param iel: ideal edge length for the graph
    :return: the FaceSet for the trunk, in which the Faces will have all the TreePlacements
             representing the placements that we make

    We add to trunk a node representing each tree, having the tree's bounding
    box dimensions. Each such node contains a reference to the tree that it
    represents, in the field, 'actualTree'.
    */

    // Compute the faces of the trunk.
    //let faceset = new faceSet(trunk);
    
    // Sort the trees into the order in which we want to reattach them.
    // For now we try placing those with biggest perimeter first.
    trees.sort(function (a,b){return b.graph.bboxPerimeter() - a.graph.bboxPerimeter()});
    let c = new compass();

    //creating a map of chola nodes to their id
    let allNodes = trunk.getAllNodes();
    let cholaNodesMap = {};
    for (let i = 0; i < allNodes.length; i++)
    {
      let node = allNodes[i];
      cholaNodesMap[node.id] = node;
    }

    let allEdges = trunk.getAllEdges();

    // Reattach the trees one by one.
    for (let i = 0; i < trees.length; i++)
    {
        allNodes = trunk.getAllNodes();

        let tree = trees[i];

        let root = cholaNodesMap[tree.root.id];
        console.log(root.id);

        let rx = root.getCenterX();
        let ry = root.getCenterY();

        //find the free semi locations by the nbr
        let availableSemis = root.getFreeSemiLocations(true);

        //this will store the overlapping nodes for each possible placement direction
        let overlappingNodes = {};

        //now create the tree box
        for (let j = 0; j < availableSemis.length; j++)
        {

          let placementDir = availableSemis[j];
          console.log(placementDir);

          let w, h, u, v;
          [w, h, u, v] = tree.treeBoxWithRootVector(placementDir);

          let ax, aX, ay, aY;
          ax = u - w/2;
          ay = v - h/2;
          aX = ax + w;
          aY = ay + h;

          //now find the corners of the tree box node when translated to the actual location of the root node
          let x, X, y, Y;
          
          //these are now the coordinates of center of the tree box node
          let ru, rv;
          ru = rx + u;
          rv = ry + v;

          //now finding the corners.
          x = ru - w/2;
          y = rv - h/2;
          X = x + w;
          Y = y + h;

          //now check if any node in the coregm will overlap if the treenode in placed in the placement direction
          //the number of overlapping nodes and edges will be used as a cost function
          
          let temp = [];
          for (let k = 0; k < allNodes.length; k++)
          {
            let node = allNodes[k];

            //skip the root node
            if (node.id == root.id)
              continue;

            //skip the parent compound node of the root
            let parentId = root.owner.parent.id;
            if (parentId != undefined && node.id == parentId)
              continue;

            //get bounding box of the node
            let nodeBbox = node.boundingBoxxXyY();
            let nx, ny, nX, nY;
            [nx, nX, ny, nY] = nodeBbox;

            //we check if any of these corner points lie in the tree box 
            let overlap = false;
            if((x < nx && nx < X) && ((y < ny && ny < Y))) //nx, ny
              overlap = true;
            else if((x < nx && nx < X) && ((y < nY && nY < Y))) //nx, nY
              overlap = true;
            else if((x < nX && nX < X) && ((y < ny && ny < Y))) //nX, ny
              overlap = true;
            else if((x < nX && nX < X) && ((y < nY && nY < Y))) //nX, nY
              overlap = true;

            if (overlap == true)
            {
              temp.push(node);
            }
          }

          overlappingNodes[placementDir] = temp;          
        }

        let keys = Object.keys(overlappingNodes);
        let values = Object.values(overlappingNodes);
        let cost = {};

        //cost is the number of overlapping nodes
        for (let j = 0; j < values.length; j++)
        {
          let value = values[j];
          cost[keys[j]] = value.length;
        }

        let costValues = Object.values(cost);
        let minCost = Math.min(...costValues);

        //final chosen direction of placement
        //check if mincost exists in north or south direction
        let dp;
        if (cost[1] != undefined && cost[1] == 0)
          dp = c.SOUTH;
        else if (cost[3] != undefined && cost[3] == 0)
          dp = c.NORTH;
        else
          dp = parseInt(keys[costValues.indexOf(minCost)]);


        tree.applyGeometry(options.edgeGap, dp, root);

        //create constraints for nodes of the tree with each other
        tree.createMainConstraints(dp, options, this);
        
        //make space in the graph for the chosen placement
        //if (minCost > 0)
        //{
          //let allNodes = trunk.getAllNodes();
          let toBeMovedNodes = [];
          let w, h, u, v;
          [w, h, u, v] = tree.treeBoxWithRootVector(dp);
          //this implies that the tree node is overlapping with other nodes
          //we have to push these nodes away to make space for the tree
          
          for (let j = 0; j < allNodes.length; j++)
          {
            let node = allNodes[j];
            let nodeLoc = node.getCenter();
            let rootLoc = root.getCenter();

            if (dp == c.EAST)
            {
              if (nodeLoc.x > rootLoc.x)
              {  
                node.setCenter(nodeLoc.x + w + options.edgeGap, nodeLoc.y);
                //this.placementConstraints(dp, options, Object.values(tree.leaves)[0], node);
              }

            }
            else if (dp == c.SOUTH)
            {
              if (nodeLoc.y > rootLoc.y)
              {
                node.setCenter(nodeLoc.x, nodeLoc.y + h + options.edgeGap);
                //this.placementConstraints(dp, options, Object.values(tree.leaves)[0], node);
              }
            }
            else if (dp == c.WEST)
            {
              if (nodeLoc.x < rootLoc.x)
              {
                node.setCenter(nodeLoc.x - w - options.edgeGap, nodeLoc.y);
                //this.placementConstraints(dp, options, Object.values(tree.leaves)[0], node);
              }
            }
            else if (dp == c.NORTH)
            {
              if (nodeLoc.y < rootLoc.y)
              {
                node.setCenter(nodeLoc.x, nodeLoc.y - h - options.edgeGap);
                //this.placementConstraints(dp, options, Object.values(tree.leaves)[0], node);
              }
            }
          }
        //}

         console.log("placement direction is ");
        console.log(dp);

        // Insert the nodes of the tree (except root) back to the graph
        this.insertTreeIntoGraph(tree, trunk, cholaNodesMap, cholaIdToLNode);
        //break;
    }


    //return faceset;
};

cholaLayout.prototype.insertTreeIntoGraph = function(tree, gm, cholaNodesMap, cholaIdToLNode)
{
  //insert all nodes of the tree into the graph
  let allNodes = Object.values(tree.nodes);
  for (let i = 0; i < allNodes.length; i++)
  {
    let node = allNodes[i];
    if (node.id == tree.root.id)
      continue;
    else
    {
      //create a new cholanode
      let loc = node.getLocation();
      let tempNode = gm.getRoot().add(new cholaNode(gm, loc, new DimensionD(node.getWidth(), node.getHeight())));
      tempNode.id = node.id;

      // console.log(tempNode.id);
      // console.log(tempNode.getRect());

      cholaNodesMap[tempNode.id] = tempNode;
      cholaIdToLNode[tempNode.id] = tempNode;
    }
  }

  gm.resetAllNodes();
  gm.getAllNodes();

  //insert all edges into the graph
  let allEdges = Object.values(tree.edges);
  for (let i = 0; i < allEdges.length; i++)
  {
    let edge = allEdges[i];
    let sourceNode = cholaNodesMap[edge.source.id];
    let targetNode = cholaNodesMap[edge.target.id];
    let tempEdge = gm.add(gm.getLayout().newEdge(), sourceNode, targetNode);
    tempEdge.id = edge.id;
  }

  gm.resetAllEdges();
  gm.getAllEdges();

};



cholaLayout.prototype.chooseBestPlacement = function(gm, tps, iel,
                        favourCardinal=true, favourExternal=true, favourIsolation=true)
{
    /*
    :param tps: list of TreePlacement objects
    :param iel: ideal edge length for the graph
    :return: the best one
    */
    let bestPlacement = null;
    let c = new compass();

    let cmpCardinal = function(p, q)
    {
      let pc, qc;
        if (c.cwCards.includes(p.placementDirec))
          pc = true;
        else 
          pc = false;

        if (c.cwCards.includes(q.placementDirec))
          qc = true;
        else 
          qc = false;

        if (pc && !qc)
            return -1;
        else if (qc && !pc)
            return 1;
        else
            return 0;
    }

    let cmpExternal = function(p, q)
    {
        let pe = p.face.external;
        let qe = q.face.external;
        if (pe && !qe)
            return -1;
        else if (qe && !pe)
            return 1;
        else
            return 0;
    }

    let cmpIsolation = function(p, q)
    {
        return p.getNumPotentialNbrs() - q.getNumPotentialNbrs();
    }

    if (favourCardinal)
    {
        tps.sort(cmpCardinal);

        // How many of the placements are in a cardinal direction?
        // Due to sorting, these all come first, if any.
        let numCardinal = 0;

        for (let i = 0; i < tps.length; i++)
        {
            let tp = tps[i];
            if (c.cwCards.indexOf(tp.placementDirec) > -1)
                numCardinal = numCardinal + 1;
            else
                break;
        }

        if (numCardinal == 1)
        {
            // There is a unique cardinal placement. Choose it.
            bestPlacement = tps[0];
        }
        else
        {
            // If there are several cardinal placements, then we choose only from among them.
            if (numCardinal > 1)
                tps = tps.slice(0,numCardinal);
        }
    }

    if (bestPlacement == null && favourExternal)
    {
        tps.sort(cmpExternal);

        // Consider how many placements are in the external face.
        let numExternal = 0;
        for (let i = 0; i < tps.length; i++)
        {
            let tp = tps[i];
            if (tp.face.external)
                numExternal = numCardinal + 1;
            else
                break;
        }

        if (numExternal == 1)
        {
            // There is a unique external placement. Choose it.
            bestPlacement = tps[0];
        }
        else
        {
            // If there are several external placements, then we choose only from among them.
            if (numExternal > 1)
                tps = tps.slice(0,numExternal);
        }
    }

    if (bestPlacement == null && favourIsolation)
    {
        // Sort tps by number of potential nbrs.
        let nbrnums = [];
        for (let i = 0; i < tps.length; i++)
        {
          let tp = tps[i];
          let output = tp.getNumPotentialNbrs();
          nbrnums.push([tp, output]);

        }
        
        nbrnums.sort(function(a,b){return a[1] - b[1];});

        // Get all those that have minimal number.
        let m = nbrnums[0][1];
        let i = 0;

        while (i < tps.length && nbrnums[i][1] == m) 
            i = i + 1;

        let arr = nbrnums.slice(0,i);
        let minimal = [];
        for (let j = 0; j < arr.length; i++)
        {
          let p = arr[j];
          minimal.push(p[0]);
        }

        let numMinimal = i;

        if (numMinimal == 1)
        {
            // There is a unique placement with minimal number of potential neighbours. Choose it.
            bestPlacement = minimal[0];
        }
        else
        {
            // We choose only from among the placements with minimal number of potential nbrs.
            tps = minimal;
        }
    }

    if (bestPlacement == null)
    {
        // Finally, we come to the case in which we must evaluate the cost of each remaining
        // potential placement, and choose the cheapest one.
        for (let i = 0; i < tps.length; i++)
        {
            let tp = tps[i];
            if (cholaConstants.ESTIMATE_TREE_PLACEMENT_COSTS)
                tp.estimateCost(gm, iel, cholaConstants.USE_OLD_COST_ESTIMATE_HEURISTIC);
            else
                tp.evaluateCost(gm, iel);
        }
        //bestPlacement = min(tps, key=lambda tp: tp.cost);
    }

    return bestPlacement;
};

cholaLayout.prototype.getHighDegreeNodes = function(gm) {
  var allNodes = gm.getAllNodes();

  var highDegreeNodes = [];
  var oneDegreeNodes = [];
  var sortedList = [];
  //console.log("One degree nodes");
  for(let i = 0; i < allNodes.length; i++)
  {
    let node = allNodes[i];
    var degree = node.getDegree();
    if (degree > 2) {
      var valueToPush = [];
      valueToPush[0] = node;
      valueToPush[1] = degree;
      highDegreeNodes.push(valueToPush);
    }
    else if (degree == 1)
    {
      oneDegreeNodes.push(node);
    }
  }

  function compareSecondColumn(a, b) {
      if (a[1] === b[1]) {
          return 0;
      }
      else {
          return (a[1] < b[1]) ? -1 : 1;
      }
  };

  highDegreeNodes.sort(compareSecondColumn);
  highDegreeNodes.reverse();

  if (highDegreeNodes.length > 0)
  {
    var j = 0;
    for (let k = 0; k < highDegreeNodes.length; k++)
    {
      //choose highest degree node
      let node = highDegreeNodes[k][0];
      if (sortedList.indexOf(node) < 0)
        sortedList.push(node);
      else
        continue;
      for (j; j < sortedList.length; j++)
      {
        //find its neighbors sorted in descending order of degree
        let neighbors = sortedList[j].getNeighborsWithDegree();
        //add nodes with degree 3 or higher to the sortedList
        for (let i = 0; i < neighbors.length; i++)
        {
          let degree = neighbors[i][1];
          if (sortedList.indexOf(neighbors[i][0]) >= 0)
            continue;
          else if (degree >= 3)
            sortedList.push(neighbors[i][0]);
          else 
            break;
        }

      }
      if (sortedList.length == highDegreeNodes.length)
        break;
    }
    
  }
  
  return [sortedList, oneDegreeNodes];
};

cholaLayout.prototype.findNeighbors = function(node) {
  var neighborsList = [];
  for (let i = 0; i < node.edges.length; i++)
  {
    var edge = node.edges[i];
    var source = edge.source;
    var target = edge.target;
    if (source.id == node.id && target.id == node.id)
      continue;
    else if (source.id == node.id)
      neighborsList.push(target.id);
    else if (target.id == node.id)
      neighborsList.push(source.id);
  }
  return [...new Set(neighborsList)];
};

module.exports = cholaLayout;
