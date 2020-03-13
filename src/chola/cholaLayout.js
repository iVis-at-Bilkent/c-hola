
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
const cholaGraph = require('../chola/cholaGraph');
const PointD = require('cose-base').layoutBase.PointD;
const DimensionD = require('cose-base').layoutBase.DimensionD;
const Layout = require('cose-base').layoutBase.Layout;
const HashMap = require('cose-base').layoutBase.HashMap;
const assign = require('../chola/assign');
const chain = require('../chola/chains');
const nodeBuckets = require('../chola/nodeBuckets');
const compass = require('../chola/compass');

// Constructor
function cholaLayout()
{
    Layout.call(this);

}

cholaLayout.prototype = Object.create(Layout.prototype);

for (let property in Layout)
{
    cholaLayout[property] = Layout[property];
}

cholaLayout.prototype.defineCoseConstants = function(options){
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

 cholaLayout.prototype.newGraph = function(vGraph) {
   return new cholaGraph(null, this.graphManager, vGraph);
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

      if (theChild.outerWidth() != null && theChild.outerHeight() != null) {
        if (layoutType === "chola") {
          theNode = parent.add(new cholaNode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
          theNode.id = theChild.data("id");
        }
        else if (layoutType === "cose") {
          theNode = parent.add(new CoSENode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
          theNode.id = theChild._private.data.id;
        }
      } else {
        if (layoutType === "chola") {
          theNode = parent.add(new cholaNode(this.graphManager));
          theNode.id = theChild.data("id");
        }
        else if (layoutType === "cose") {
          theNode = parent.add(new CoSENode(this.graphManager));
          theNode.id = theChild._private.data.id;
        }
      }
      // Attach id to the layout node

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
        cholaNodeToCoseNode.put(cholaNodesMap.get(theNode.id), theNode);

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

cholaLayout.prototype.removeLeafNodes = function (gm, compoundNodes, idList) {
  var allNodes = gm.getAllNodes();
  var count = 0;
  do {
    count = 0;
    for (var i = 0; i < allNodes.length; i++) {
      var node = allNodes[i];
      if (node.getDegree() === 1 && !compoundNodes.includes(node)) {
        //we do not remove leaf nodes if they are the only remaining children of a parent compound node
        if (node.getParent().id !== 'undefined' && compoundNodes.includes(node.getParent()) && node.getParent().child.nodes.length === 1) {
          continue;
        }
        var edge = node.edges[0];
        if (edge.source.owner !== edge.target.owner) {
          continue;
        }
        count++;
        node.owner.remove(node);
        idList.push(node.id);
      }
    }
    gm.resetAllEdges();
    gm.resetAllNodes();
    gm.getAllEdges();
    allNodes = gm.getAllNodes();
  } while (count !== 0);
};


// //removes all leaf nodes except compound leaf nodes
// cholaLayout.prototype.removeLeafNodes = function(gm, compoundNodes, idList) {
//   var allNodes = gm.getAllNodes();
//   var count = 0;

//   //var buckets = new nodeBuckets(gm);
//   //var h = this.newGraphManager();
//   // var leaves = buckets.takeLeaves();
//   // var stems = stemsFromLeaves(leaves);
//   do
//   {
//     count = 0;
//     for (var i = 0; i < /*leaves*/allNodes.length; i++) {
//       var node = allNodes[i];
      
//       if (!compoundNodes.includes(node))
//       {
//             //we do not remove leaf nodes if they are the only remaining children of a parent compound node
//             if (node.getParent().id !== undefined && compoundNodes.includes(node.getParent()) && node.getParent().child.nodes.length === 1)
//             {
//               continue;
//             }
//             console.log(node);
//             var edge = node.edges[0];
//             if (edge.source.owner !== edge.target.owner)
//             {
//               continue;
//             }
//             count++;

//             // var otherNode = edge.getOtherEnd(node);
//             // var otherNodeDegree = otherNode.getDegree();
//             // var index = buckets[otherNodeDegree].indexOf(otherNode);
//             // buckets[otherNodeDegree].splice(index);
//             // buckets[otherNodeDegree - 1].push(otherNode);
//             node.owner.remove(node);
//             idList.push(node.id);
//       }
//     }

//     gm.resetAllEdges();
//     gm.resetAllNodes();
//     gm.getAllEdges();
//     allNodes = gm.getAllNodes();

//     // if (gm.getAllNodes().length == 0)
//     //   stems = stems[0];
//     // for (let i = 0; i < stems.length; i++)
//     // {
//     //   stem[i].addSelfToGraph(h);
//     // }

//   }while(count!==0);
// };

// cholaLayout.prototype.pruneTrees = function(gm)
// {
//   var buckets = new nodeBuckets(gm);
//   var h = this.newGraphManager();
//   var leaves = buckets.takeLeaves();
//   while (leaves.length > 0)
//   {
//     var stems = stemsFromLeaves(leaves);
//     G.severNodes(leaves,bucket=buckets)
//     if G.isEmpty():
//         stems = stems[];
//     for stem in stems: stem.addSelfToGraph(H);
//     leaves = buckets.takeLeaves()
//   }
//   C = H.connComps()
//   for c in C:
//       c.identifyRootNode()
//   # G will now have 3 or more nodes iff it was
//   # not in fact a tree, to begin with.
//   if G.getNumNodes() >= 3:
//       C.insert(0,G)
//       # It will be helpful to let each root node in G know that it is a root node.
//       for c in C[1:]:
//           rp = c.rootNode
//           r = G.nodes[rp.ID]
//           r.isRootNode = True
//   return C


// };

// cholaLayout.prototype.stemsFromLeaves = function(leaves)
// {
//   /*
//   L: {ID:Node} dict
//   return: list of Stems
//   */
//   var stems = [];
//   for (i = 0; i < leaves.length; i++)
//   {
//     let leaf = leaves[i];
//     let edge = leaf.edges[0];
//     let root = edge.getOtherEnd(leaf);
//     let s = new stem(leaf, root);
//     stems.push(s);
//   }
//   return stems;
// };

cholaLayout.prototype.deleteLeafNodes = function(cy, idList)
{
  var cyNodes = cy.nodes();
  for (let i = 0; i < cyNodes.length; i++){
    var cyNode = cyNodes[i];
    if (idList.includes(cyNode._private.data.id)) {
      cy.remove(cyNodes[i]);
    }
  }
}

// transfer cytoscape edges to cose edges
cholaLayout.prototype.processEdges = function(layout, gm, edges, idToLNode){
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let sourceNode = idToLNode[edge.data("source")];
    let targetNode = idToLNode[edge.data("target")];
    if(sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length == 0){
      let e1 = gm.add(layout.newEdge(), sourceNode, targetNode);
      e1.id = edge.id();
    }
  }
};

cholaLayout.prototype.coseOnCore = function(options, idToLNode, cholaNodesMap, cholaNodeToCoseNode) {
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
  this.processEdges(coseLayout, gm, edges, idToLNode);

  coseLayout.runLayout();

};

cholaLayout.prototype.computeAvgNodeDim = function(gm)
{
  //Compute the average of all node heights and widths.
  var sum = 0;
  var num = 0;
  var allNodes = gm.getAllNodes();
  for (let i = 0; i < allNodes.length; i++)
  {   
    var node = allNodes[i];
    sum += node.getWidth() + node.getHeight();
    num += 2;
  }
  
  return sum/num;
};

cholaLayout.prototype.getMaxNodeWidth = function(gm) {
  var allNodes = gm.getAllNodes();
  var max = 0;
  for (let i = 0; i < allNodes.length; i++)
  {
    var node = allNodes[i];
    var width = node.getWidth();
    if (!node.isCompound() & max < width)
      max = width;
  }
  return max;
};

cholaLayout.prototype.addPaddingToNodes = function(gm, padding)
{
  var allNodes = gm.getAllNodes();
  for (let i = 0; i < allNodes.length; i++)
  {
    let node = allNodes[i];
    node.addPadding(padding, padding);
  }
};

cholaLayout.prototype.higherNodesConfiguration = function(gm, highDegreeNodes) 
{
  var cyclicIds = [];
  var asgns = [];
  var highIds = [];
  for (let i = 0; i < highDegreeNodes.length; i++)
  {
    let node = highDegreeNodes[i][0];
    highIds. push(node.id);
    var asgn = new assign();
    cyclicIds.push(asgn.getCyclicOrder(node));
    console.log(cyclicIds[i]);
  }

  for (let i = 0; i < highDegreeNodes.length; i++)
  {
    let node = highDegreeNodes[i][0];
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
        ids.push('x');
    }

    for (let j = 0; j < degree; j++)
    {
      var edge = node.edges[j];
      var nbr = edge.getOtherEnd(node);
      let nodeLoc = node.getCenter();
      var newNbrLoc = ids.indexOf(nbr.id);
      this.setNeighborPosition(gm, nodeLoc, nbr, newNbrLoc);

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
    console.log(cyclicIds[i]);
    // if (i==1)
    //   break;
  }
};

cholaLayout.prototype.setNeighborPosition = function(gm, nodeLoc, nbr, newNbrLoc)
{
  //ideal edge length based on the highest width node
  var edgeLength = this.getMaxNodeWidth(gm)/2 + 100;

  if (newNbrLoc == 0)
  {
    nbr.setCenter(nodeLoc.x + edgeLength, nodeLoc.y);
  }
  else if (newNbrLoc == 1)
  {
    nbr.setCenter(nodeLoc.x, nodeLoc.y + edgeLength);
  }
  else if (newNbrLoc == 2)
  {
    nbr.setCenter(nodeLoc.x - edgeLength, nodeLoc.y);
  }
  else if (newNbrLoc == 3)
  {
    nbr.setCenter(nodeLoc.x, nodeLoc.y - edgeLength);
  }
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

cholaLayout.prototype.chainNodesConfiguration = function(gm)
{
  //ideal edge length based on the highest width node
  var edgeLength = this.getMaxNodeWidth(gm)/2 + 100;

  var output = this.getChainsAndCycles(gm);
  var chains = [];
  var cycles = [];

  for (let i = 0; i < output[0].length; i++)
  {
    //if the chain consists of only one node, then it will already be aligned
    //so that node is ignored
    // if (output[0][i].length == 1)
    //   continue;
    let c = new chain(gm, output[0][i]);
    chains.push(c);
  }
  for (let i = 0; i < output[1].length; i++)
  {
    let cycle = new chain(gm, output[1][i], true);
    chains.push(cycle);
  }
  
  //let changes = []; 
  for (let i = 0; i < chains.length; i++)
  {    
    var c = chains[i];
    let changes = c.takeShapeBasedConfiguration(edgeLength);
    for (let j = 0; j < changes.length; j++)
    {
      let conf = changes[j];
      for (let k = 0; k < conf.length; k++)
      {
        let temp = conf[k];
        let startNode = null;
        let endNode = null;
        let direction = null;
        if (conf.length == 1)
        {
          startNode = temp[0];
          endNode = temp[1];
          direction = temp[2];
          let nodeLoc = startNode.getCenter();
          this.setNeighborPosition(gm, nodeLoc, endNode, direction);
        }
        else if (conf.length == 2)
        {
          //create bendpoint in an edge
        }        
      }
    }
  }
};

cholaLayout.prototype.oneDegreeNodesConfiguration = function(gm, nodes)
{
  //ideal edge length based on the highest width node
  var edgeLength = this.getMaxNodeWidth(gm)/2 + 100;
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
    let loc = nbr.getCenter();
    //if nbr is not a 1 or 2-degree node, we go to the next one degree node
    if (nbrDegree > 2)
      continue;
    else
    {
      if (nbrDegree == 1)
      {
        //assign the node to its right
        node.setCenter(loc.x + edgeLength, loc.y);
      }
      //when nbr is a 2 degree node
      else
      {
        //find the free semi locations by the nbr
        let availableSemis = nbr.getFreeSemiLocations(edgeLength);

        //finding the least cost position
        let o = node.octalCode();
        let cost = [];
        for (let j = 0; j < availableSemis.length; j++)
        {
          cost.push(node.deflectionFromSemi(availableSemis[j], o));
        }
        var direction = cost.indexOf(Math.min(...cost));
        this.setNeighborPosition(gm, nbr, node, direction);
      }
    }

  }
};

cholaLayout.prototype.getChainsAndCycles = function(gm)
{
  //Identify all sequences of consecutive "links" (degree-2 nodes) in this graph.
  var chains = [];
  var cycles = [];

  // Build /list/ of all links in the graph.
  var allNodes = gm.getAllNodes();
  var allLinks = [];

  for (let i = 0; i < allNodes.length; i++)
  {
    var node = allNodes[i];
    if (node.getDegree() == 2)
      allLinks.push(node);
  }
  while (allLinks.length > 0)
  {
    var linkNode = allLinks.pop();
    var links = [linkNode];
    // Get the two edges of link, and prepare to explore in both directions.
    var edges = linkNode.edges;
    var direction = -1;
    var polygon = false;
    for (let i = 0; i < edges.length; i++)
    {
      var edge = edges[i];
        if (polygon)
          break;

        // Explore from linknode in one direction.
        direction = -1 * direction;
        var lastNode = linkNode;
        var done = false;
        while (!done)
        {
            // Consider the next node in the current direction.
            var nextNode = edge.getOtherEnd(lastNode);
            if (nextNode == linkNode)
            {
                // In this case the entire connected component to which the node
                // belongs is a mere polygon.
                polygon = true;
                cycles.push(links);
                links = [];
                done = true;
            }
            else if (nextNode.getDegree() == 2)
            {
                // This must be a link which we have not encountered before.
                allLinks.splice(allLinks.indexOf(nextNode), 1);
                if (direction == 1)
                    links.push(nextNode);
                else if (direction == -1)
                    links.unshift(nextNode);
                var nextNodeEdges = nextNode.edges;
                for (let j = 0; j < nextNodeEdges.length; j++)
                {
                  if (nextNodeEdges[j] != edge)
                  {
                    edge = nextNodeEdges[j];
                    break;
                  }
                }
                lastNode = nextNode;
            }
            else
            {
                // We've reached the "anchor node" at one end of the chain.
                done = true;
            }
        }
    // Now have explored from link L0 in both directions, or else found that
    // it belonged to a polygon.
    }
    if (links.length > 0)
        chains.push(links);
  }
  return [chains, cycles];
};

cholaLayout.prototype.getHighDegreeNodes = function(gm) {
  var allNodes = gm.getAllNodes();

  var highDegreeNodes = [];
  var oneDegreeNodes = [];
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
  highDegreeNodes.sort(compareSecondColumn);
  highDegreeNodes.reverse();

  function compareSecondColumn(a, b) {
      if (a[1] === b[1]) {
          return 0;
      }
      else {
          return (a[1] < b[1]) ? -1 : 1;
      }
  }
  return [highDegreeNodes, oneDegreeNodes];
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
