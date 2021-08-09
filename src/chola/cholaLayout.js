
// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

const CoSELayout = require('cose-base').CoSELayout;
const CoSEConstants = require('cose-base').CoSEConstants;
const CoSENode = require('cose-base').CoSENode;
const LayoutConstants = require('cose-base').layoutBase.LayoutConstants;
const FDLayoutConstants = require('cose-base').layoutBase.FDLayoutConstants;
const cc = require('../chola/cholaConstants');
const cholaGraphManager = require('../chola/cholaGraphManager');
const cholaNode = require('../chola/cholaNode');
const cholaEdge = require('../chola/cholaEdge');
const cholaGraph = require('../chola/cholaGraph');
const PointD = require('cose-base').layoutBase.PointD;
const DimensionD = require('cose-base').layoutBase.DimensionD;
const Layout = require('layout-base').Layout;
const HashMap = require('cose-base').layoutBase.HashMap;

// Constructor
function cholaLayout(options)
{
    Layout.call(this);
    this.dummyNodes = [];
    this.options = options;
    this.maxNodeDimension;
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
    CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength;;
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

  LayoutConstants.QUALITY = 1;

  CoSEConstants.NODE_DIMENSIONS_INCLUDE_LABELS = FDLayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = options.nodeDimensionsIncludeLabels;
  CoSEConstants.DEFAULT_INCREMENTAL = FDLayoutConstants.DEFAULT_INCREMENTAL = LayoutConstants.DEFAULT_INCREMENTAL = !(options.randomize);
  CoSEConstants.ANIMATE = FDLayoutConstants.ANIMATE = LayoutConstants.ANIMATE = options.animate;
  CoSEConstants.TILE = options.tile;
  CoSEConstants.TILING_PADDING_VERTICAL = typeof options.tilingPaddingVertical === 'function' ? options.tilingPaddingVertical.call() : options.tilingPaddingVertical;
  CoSEConstants.TILING_PADDING_HORIZONTAL = typeof options.tilingPaddingHorizontal === 'function' ? options.tilingPaddingHorizontal.call() : options.tilingPaddingHorizontal;
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

cholaLayout.prototype.newGraph = function(vGraph)
{
   return new cholaGraph(null, this.graphManager, vGraph);
};

cholaLayout.prototype.getGraphManager = function() 
{
  return this.graphManager;
};

/**
* This method creates a new edge associated with the input view edge.
*/
cholaLayout.prototype.newEdge = function(source,target, vEdge)
{
   return new cholaEdge(source, target, vEdge);
};

cholaLayout.prototype.getTopMostNodes = function(nodes, cyNodesMap) 
{
    var nodesMap = {};

    for (var i = 0; i < nodes.length; i++) 
    {
        nodesMap[nodes[i].id()] = true;
        cyNodesMap[nodes[i].id()] = nodes[i];
    }

    var roots = nodes.filter(function (ele, i) 
    {
        if (typeof ele === "number")
            ele = i;

        var parent = ele.parent()[0];

        while (parent != null) 
        {
            if (nodesMap[parent.id()]) 
            {
                return false;
            }
            parent = parent.parent()[0];
        }
        return true;
    });

    return roots;
};

cholaLayout.prototype.processChildrenList = function(options, parent, children, layout, layoutType, idToLNode, cholaNodeToCoseNode) 
{
    var size = children.length;
    var includeLabelsOption = options.nodeDimensionsIncludeLabels;

    for (var i = 0; i < size; i++) 
    {
        var theNode;
        var theChild = children[i];
        var children_of_children = theChild.children();
        var dimensions = theChild.layoutDimensions({ nodeDimensionsIncludeLabels: includeLabelsOption });

        if (theChild.outerWidth() != null && theChild.outerHeight() != null) 
        {
            if (layoutType === "chola") 
            {
                theNode = parent.add(new cholaNode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
                theNode.id = theChild.data("id");
                layout.graphManager.nodes[theNode.id] = theNode;
            }
            else if (layoutType === "cose") 
            {
                theNode = parent.add(new CoSENode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
                theNode.id = theChild._private.data.id;
            }
        } 

        // Attach the paddings of cy node to layout node
        theNode.paddingLeft = parseInt(theChild.css('padding'));
        theNode.paddingTop = parseInt(theChild.css('padding'));
        theNode.paddingRight = parseInt(theChild.css('padding'));
        theNode.paddingBottom = parseInt(theChild.css('padding'));
        theNode.borderWidth = parseInt(theChild.css('border-width'));

        //Attach the label properties to compound if labels will be included in node dimensions
        if (options.nodeDimensionsIncludeLabels) 
        {
            if (theChild.isParent()) 
            {
                var labelWidth = theChild.boundingBox({ includeLabels: true, includeNodes: false }).w;
                var labelHeight = theChild.boundingBox({ includeLabels: true, includeNodes: false }).h;
                var labelPos = theChild.css("text-halign");
                theNode.labelWidth = labelWidth;
                theNode.labelHeight = labelHeight;
                theNode.labelPos = labelPos;
            }
        }

        // Map the layout node
        if (layoutType === "chola") 
        {
          idToLNode[theChild.data("id")] = theNode;
        }
        else if (layoutType === "cose") 
        {
          idToLNode[theChild.data("id")] = theNode;
          cholaNodeToCoseNode[theNode.id] = theNode;
        }

        if (isNaN(theNode.rect.x)) 
        {
          theNode.rect.x = 0;
        }

        if (isNaN(theNode.rect.y)) 
        {
          theNode.rect.y = 0;
        }

        if (children_of_children != null && children_of_children.length > 0) 
        {
          var theNewGraph = layout.getGraphManager().add(layout.newGraph(), theNode);
          this.processChildrenList(options, theNewGraph, children_of_children, layout, layoutType, idToLNode, cholaNodeToCoseNode);
        }
    }
};

cholaLayout.prototype.setParents = function(gm) 
{
    let allNodes = gm.getAllNodes();

    for (let i = 0; i < allNodes.length; i++)
    {
        let cholaNode = allNodes[i];
        if (cholaNode.owner.parent.id != undefined)
        {
          cholaNode.parentNode = cholaNode.owner.parent;
        }
    }
};

function isFn(fn) 
{
  return typeof fn === 'function';
};

function optFn(opt, ele) 
{
  if (isFn(opt)) 
  {
    return opt(ele);
  } 
  else 
  {
    return opt;
  }
};

// transfer cytoscape edges to chola edges
cholaLayout.prototype.processEdges = function(layout, gm, edges, idToLNode, cyEdgesMap, cholaEdgesMap)
{
  var idealLengthTotal = 0;
  var edgeCount = 0;
  let cholarun = false;

  if (cyEdgesMap)
    cholarun = true;

  for (let i = 0; i < edges.length; i++) 
  {
    let edge = edges[i];
    let sourceNode = idToLNode[edge.data("source")];
    let targetNode = idToLNode[edge.data("target")];

    if (cholarun)
      cyEdgesMap[edge.id()] = edge;


    if(sourceNode !== targetNode)
    {
      if (sourceNode.getEdgesBetween(targetNode).length == 0)
      {
        let e = gm.add(layout.newEdge(), sourceNode, targetNode);
        e.id = edge.id();
        e.idealLength = optFn(this.options.idealEdgeLength, edge);
        e.edgeElasticity = optFn(this.options.edgeElasticity, edge);
        e.width = parseInt(edge.css('width'));

        idealLengthTotal += e.idealLength;
        edgeCount++;

        if (cholaEdgesMap != null)
          cholaEdgesMap[e.id] = e;
      } 
    }

    if (this.options.idealEdgeLength != null)
    {
      if (edges.length > 0)
        CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = idealLengthTotal / edgeCount;
      else if(!isFn(this.options.idealEdgeLength))
        CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = this.options.idealEdgeLength;
      else
        CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;

      // we need to update these constant values based on the ideal edge length constant
      CoSEConstants.MIN_REPULSION_DIST = FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10.0;
      CoSEConstants.DEFAULT_RADIAL_SEPARATION = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
    }   
  }
};

cholaLayout.prototype.coseOnCore = function(options, idToLNode, cholaNodeToCoseNode, topMostNodes) 
{
    // Create a CoSE layout object
    var coseLayout = new CoSELayout();

    this.defineCoseConstants(options);

    var gm = coseLayout.newGraphManager();
    this.coseGm = gm;

    var nodes = options.eles.nodes();
    var edges = options.eles.edges();

    this.processChildrenList(options, gm.addRoot(), topMostNodes, coseLayout, "cose", idToLNode, cholaNodeToCoseNode);
    this.processEdges(coseLayout, gm, edges, idToLNode);

    coseLayout.runLayout();
    return coseLayout;
};

cholaLayout.prototype.getMaxNodeDimension = function(gm) 
{
    var allNodes = gm.getAllNodes();
    var max = 0;

    for (let i = 0; i < allNodes.length; i++)
    {
        var node = allNodes[i];
        let tempMax = Math.max(node.getWidth(), node.getHeight());
        
        if (!node.isCompound() & max < tempMax)
          max = tempMax;
    }

    this.maxNodeDimension = max;
    return max;
};

cholaLayout.prototype.extractBends = function(bendData, nodeDict, nodes)
{
    let edgesWithBends = [];
    for (let i = 0; i < bendData.length; i++)
    {
        let row = bendData[i];

        let firstNode = nodeDict[row[0]];
        let lastNode = nodeDict[row[row.length - 1]];

        let edge = firstNode.findEdgeBetween(lastNode);

        let src = firstNode;
        if (edge.source.id != src.id)
            row.reverse();
          
        for (let j = 1; j < row.length - 1; j++)
        {
            let pos = nodes[row[j]];
            let bp = {
              x:pos[0], 
              y:pos[1], 
              id: row[j]
            };
            edge.bendpoints.push(bp);
        }

        // if (!edge.source.id.includes("cdnode") && !edge.target.id.includes("cdnode"))
            edgesWithBends.push(edge);
    }

    return edgesWithBends;
};

cholaLayout.prototype.deleteEdgeCrossings = function(edgeSplitDict, gm, edgesWithBends)
{
    let edgesWithDummies = Object.values(edgeSplitDict);
    let edgeSplitsKeys = Object.keys(edgeSplitDict);

    for (let i = 0; i < edgesWithDummies.length; i++)
    {
        let edgeWithDummies = edgesWithDummies[i];

        if (edgeSplitsKeys[i].includes("cdnode"))
            continue;

        let len = edgeWithDummies.length;

        //first create a new edge between the original source and target
        let origEdgeId = edgeSplitsKeys[i];
        let src = edgeWithDummies[0].source;
        let tgt = edgeWithDummies[len - 1].target;

        let newEdge = gm.add(this.newEdge(), src, tgt);
        newEdge.id = origEdgeId;

        for (let j = 0; j < len; j++)
        {
            //take each split portion, and extract its bendpoints 
            let dummyEdge = edgeWithDummies[j];
            let bps = dummyEdge.bendpoints;

            //add the bendpoints to the original edge
            for (let k = 0; k < bps.length; k++)
              newEdge.bendpoints.push(bps[k]);

            //now delete the edge from graph
            var graph = gm.calcLowestCommonAncestor(dummyEdge.source, dummyEdge.target);
            graph.remove(dummyEdge);
        }

        if (newEdge.bendpoints.length > 0)
            edgesWithBends.push(newEdge);
    }
};

cholaLayout.prototype.deleteDummyNodes = function(dummyNodes)
{
    for (let i = 0; i < dummyNodes.length; i++)
    {
        dummyNodes[i].owner.remove(dummyNodes[i]);
    }
};

cholaLayout.prototype.createBendpoints = function(edgesWithBends, gm)
{
    for (let i = 0; i < edgesWithBends.length; i++)
    {
        let edge = edgesWithBends[i];
        edge.convertToRelativeBendPosition();
        gm.edgesWithBends.push(edge);
    }
};



cholaLayout.prototype.removeDummiesAndCreateBends = function(gm, bendData, nodeDict, nodes, edgeSplitDict, dummyNodes)
{
    // let edgesWithBends = this.extractBends(bendData, nodeDict, nodes);
    let edgesWithBends = [];
    this.deleteEdgeCrossings(edgeSplitDict, gm, edgesWithBends);
    this.deleteDummyNodes(dummyNodes);

    gm.resetAllEdges();
    gm.resetAllNodes();
    gm.getAllEdges();
    gm.getAllNodes();

    this.createBendpoints(edgesWithBends, gm);  
};

cholaLayout.prototype.reshapeCompounds = function(compoundNodes, cyNodesMap)
{
  //if graph is a compound graph, we need to modify the height and width of the compound
  if (compoundNodes.length > 0)
  {
    for (let i = 0; i < compoundNodes.length; i++)
    {
      let node = compoundNodes[i];

      //find corners from the boundary
      let x1 = Number.MAX_VALUE;
      let x2 = Number.MIN_VALUE;
      let y1 = Number.MAX_VALUE;
      let y2 = Number.MIN_VALUE;

      for (let k = 0; k < node.boundaryList.length; k++)
      {
        let nodePosition = node.boundaryList[k].getCenter();
        if (nodePosition.x < x1)
          x1 = nodePosition.x;
        if (nodePosition.x > x2)
          x2 = nodePosition.x;
        if (nodePosition.y < y1)
          y1 = nodePosition.y;
        if (nodePosition.y > y2)
          y2 = nodePosition.y;
      }  

      let center = {
        x: x1 + (x2 - x1) / 2,
        y: y1 + (y2 - y1) / 2
      };    

      //now get the new width and the height of the compound
      let w = x2 - x1;
      let h = y2 - y1;

      //now find the compound node in cy
      let cyNode = cyNodesMap[node.id];

      let autoWidth = cyNode[0]._private.autoWidth;
      let autoHeight = cyNode[0]._private.autoHeight;

      cyNode.css("min-width", w);
      cyNode.css("min-height", h);

      let extraWidth = w - autoWidth;
      let extraHeight = h - autoHeight;

      //get current center of the cyNode
      let cyCenter = cyNode.position();

      //get percentages for up, down, left, right biases
      let leftBias = ((cyCenter.x - autoWidth/2 - x1) / extraWidth) * 100;
      let rightBias = ((x2 - autoWidth/2 - cyCenter.x) / extraWidth) * 100;
      let topBias = ((cyCenter.y - autoHeight/2 - y1) / extraHeight) * 100;
      let bottomBias = ((y2 - autoHeight/2 - cyCenter.y) / extraHeight) * 100;

      cyNode.css("min-width-bias-left", leftBias);
      cyNode.css("min-width-bias-right", rightBias);
      cyNode.css("min-height-bias-top", topBias);
      cyNode.css("min-height-bias-bottom", bottomBias);

      if (node.getParentNode() != null)
      {
        //NEED TO KEEP THIS OTHERWISE COMPOUND EDGES BECOME NON-ORTHOGONAL
        let p = cyNodesMap[node.getParentNode().id].position();
      }

      node.setWidth(cyNode.outerWidth());
      node.setHeight(cyNode.outerHeight());
      node.setCenter(center.x, center.y);
    }
  }
};

cholaLayout.prototype.direction = function (node1Loc, node2Loc) 
{
  var x1 = node1Loc.x;
  var x2 = node2Loc.x;
  var y1 = node1Loc.y;
  var y2 = node2Loc.y;
  var dx = x2 - x1;
  var dy = y2 - y1;

  var dir;
  if (dx > 0 && dy < 0) 
    dir = cc.NE;
  else if (dx > 0 && dy == 0) 
    dir = cc.EAST;
  else if (dx > 0 && dy > 0) 
    dir = cc.SE;
  else if (dx == 0 && dy > 0) 
    dir = cc.SOUTH;
  else if (dx < 0 && dy > 0) 
    dir = cc.SW;
  else if (dx < 0 && dy == 0) 
    dir = cc.WEST;
  else if (dx < 0 && dy < 0) 
    dir = cc.NW;
  else if (dx == 0 && dy < 0) 
    dir = cc.NORTH;
  return dir;

};

cholaLayout.prototype.createOrthogonalEdges2 = function (gm, nodes, cEdges) 
{
  var compoundEdges = [];
  var allEdges = gm.getAllEdges();
  var outputEdges = [];
  var createBp = false;

  for (var i = 0; i < allEdges.length; i++) 
  {
    var edge = allEdges[i];

    //if edge is not orthogonal, we make it orthogonal
    var source = edge.source;
    var target = edge.target;

    let srcIsCompound = source.isCompound();
    let tgtIsCompound = target.isCompound();

    if (!srcIsCompound && !tgtIsCompound) 
      continue;

    var srcCenterX = source.getCenterX();
    var srcCenterY = source.getCenterY();

    var tgtCenterX = target.getCenterX();
    var tgtCenterY = target.getCenterY();

    var srcBbox = source.getBbox();
    var tgtBbox = target.getBbox();

    let bpsLength = edge.bendpoints.length;

    if (bpsLength > 0)
    {
      function findPortFromDir(dir, bbox, bp)
      {
        let output;
        switch(dir)
        {
          case 0:
            output = { x: bbox.x1, y: bp.y};
            break;

          case 1:
            output = { x: bp.x, y: bbox.y1};
            break;

          case 2:
            output = { x: bbox.x2, y: bp.y};
            break;

          case 3:
            output = { x: bp.x, y: bbox.y2};
            break;
        }
        return output;
      };

      //get direction to source and target from first and last bendpoint
      let firstBp = {x: edge.bendpoints[0].x, y: edge.bendpoints[0].y};
      let lastBp = {x: edge.bendpoints[bpsLength - 1].x, y:edge.bendpoints[bpsLength - 1].y};

      let dir1 = this.direction(firstBp, edge.sourcePoint);
      let dir2 = this.direction(lastBp, edge.targetPoint);

      edge.sourcePort = findPortFromDir(dir1, srcBbox, firstBp);
      edge.targetPort = findPortFromDir(dir2, tgtBbox, lastBp);


      // edge.convertToRelativeBendPosition();
      
    }
    else
    {
      if (source.isCompound() && !target.isCompound()) 
      {
        // console.log("Source is compound and target is not");
        
        if (srcBbox.x1 <= tgtCenterX && tgtCenterX <= srcBbox.x2) 
        {
          //if target is on top
          if (tgtCenterY < srcBbox.y1)
          {
            edge.sourcePort = { x: tgtCenterX, y: srcBbox.y1 };
            edge.targetPort = { x: tgtCenterX, y: tgtBbox.y2 };
          }
          //target is on bottom
          else if (tgtCenterY > srcBbox.y2)
          {
            edge.sourcePort = { x: tgtCenterX, y: srcBbox.y2 };
            edge.targetPort = { x: tgtCenterX, y: tgtBbox.y1 };
          } 
        } 
        else if (srcBbox.y1 <= tgtCenterY && tgtCenterY <= srcBbox.y2) 
        {
          //if target is on the left
          if (tgtCenterX < srcBbox.x1)
          {
            edge.sourcePort = { x: srcBbox.x1, y: tgtCenterY };
            edge.targetPort = { x: tgtBbox.x2, y: tgtCenterY };
          }
          //if target is on the right
          else if (tgtCenterX > srcBbox.x2)
          {
            edge.sourcePort = { x: srcBbox.x2, y: tgtCenterY };
            edge.targetPort = { x: tgtBbox.x1, y: tgtCenterY };
          } 
        } 
        
      } 
      else if (!source.isCompound() && target.isCompound()) 
      {
        if (tgtBbox.x1 < srcCenterX && srcCenterX < tgtBbox.x2) 
        {
          //source can either be on top or on bottom i.e. north or south
          //if source is on top
          if (srcCenterY < tgtBbox.y1)
          {
            edge.targetPort = { x: srcCenterX, y: tgtBbox.y1 };
            edge.sourcePort = { x: srcCenterX, y: srcBbox.y2 };
          }
          //source is on bottom
          else if (srcCenterY > tgtBbox.y2)
          {
            edge.targetPort = { x: srcCenterX, y: tgtBbox.y2 };
            edge.sourcePort = { x: srcCenterX, y: srcBbox.y1 };
          } 
        } 
        else if (tgtBbox.y1 < srcCenterY && srcCenterY < tgtBbox.y2) 
        {
          // console.log("SOurce lies along the height of target");
          //edge can be straight
          //if source is on the left
          if (srcCenterX < tgtBbox.x1)
          {
            edge.targetPort = { x: tgtBbox.x1, y: srcCenterY };
            edge.sourcePort = { x: srcBbox.x2, y: srcCenterY };
          }
          //if source is on the right
          else if (srcCenterX > tgtBbox.x2)
          {
            edge.targetPort = { x: tgtBbox.x2, y: srcCenterY };
            edge.sourcePort = { x: srcBbox.x1, y: srcCenterY };
          } 
        }
      } 
      else if (source.isCompound() && target.isCompound()) 
      {
        let sourcePos = nodes[edge.source.id.concat("-").concat(edge.id)];
        let targetPos = nodes[edge.target.id.concat("-").concat(edge.id)];

        //we check if the target node lies within the width of the source node
        if (srcBbox.x1 <= tgtBbox.x1 && tgtBbox.x1 <= srcBbox.x2 || srcBbox.x1 <= tgtBbox.x2 && tgtBbox.x2 <= srcBbox.x2
         || tgtBbox.x1 <= srcBbox.x1 && srcBbox.x1 <= tgtBbox.x2 || tgtBbox.x1 <= srcBbox.x2 && srcBbox.x2 <= tgtBbox.x2) 
        {
          //vertical edge
          //if target lies on top of the source node
          if (tgtCenterY < srcCenterY) 
          {
            if (tgtBbox.x1 <= sourcePos[0] && sourcePos[0] <= tgtBbox.x2)
            {
              edge.sourcePort = { x: sourcePos[0], y: srcBbox.y1 };
              edge.targetPort = { x: sourcePos[0], y: tgtBbox.y2 };
            }
            else
            {
              edge.sourcePort = { x: targetPos[0], y: srcBbox.y1 };
              edge.targetPort = { x: targetPos[0], y: tgtBbox.y2 };
            }
          }
          //if target lies at the bottom
          else 
          {
            if (tgtBbox.x1 <= sourcePos[0] && sourcePos[0] <= tgtBbox.x2)
            {
              edge.sourcePort = { x: sourcePos[0], y: srcBbox.y2 };
              edge.targetPort = { x: sourcePos[0], y: tgtBbox.y1 };
            }
            else
            {
              edge.sourcePort = { x: targetPos[0], y: srcBbox.y2 };
              edge.targetPort = { x: targetPos[0], y: tgtBbox.y1 };
            }
          }
        }
        //we check if the target node lies within the height of the source node
        else if (srcBbox.y1 <= tgtBbox.y1 && tgtBbox.y1 <= srcBbox.y2 || srcBbox.y1 <= tgtBbox.y2 && tgtBbox.y2 <= srcBbox.y2
              || tgtBbox.y1 <= srcBbox.y1 && srcBbox.y1 <= tgtBbox.y2 || tgtBbox.y1 <= srcBbox.y2 && srcBbox.y2 <= tgtBbox.y2) 
        {
          //horizontal edge
          //if target lies on the left of the source node
          if (tgtCenterX < srcCenterX) 
          {
            if (tgtBbox.y1 <= sourcePos[1] && sourcePos[1] <= tgtBbox.y2)
            {
              edge.sourcePort = { x: srcBbox.x1, y: sourcePos[1] };
              edge.targetPort = { x: tgtBbox.x2, y: sourcePos[1] };
            }
            else
            {
              edge.sourcePort = { x: srcBbox.x1, y: targetPos[1] };
              edge.targetPort = { x: tgtBbox.x2, y: targetPos[1] };
            }
          }
          //if target lies on the right of the source node
          else 
          {
            if (tgtBbox.y1 <= sourcePos[1] && sourcePos[1] <= tgtBbox.y2)
            {
              edge.sourcePort = { x: srcBbox.x2, y: sourcePos[1] };
              edge.targetPort = { x: tgtBbox.x1, y: sourcePos[1] };
            }
            else
            {
              edge.sourcePort = { x: srcBbox.x2, y: targetPos[1] };
              edge.targetPort = { x: tgtBbox.x1, y: targetPos[1] };
            }
          }
        } 
      }
    }

    outputEdges.push(edge);
  }

  return outputEdges;
};

cholaLayout.prototype.distance = function (a,b)
{
  return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
};

cholaLayout.prototype.insertNodeIntoCompoundBoundary = function(node, boundaryList)
{
  let point = node.getCenter();

  if (boundaryList.length == 1)
  {
    boundaryList.push(node);
    return;
  }

  //now insert the endpoint at correct location in the boundarylist
  for (let k = 0; k < boundaryList.length; k++)
  {
    let value1 = boundaryList[k].getCenter();
    let value2;
    if (k != boundaryList.length - 1)
    {
      value2 = boundaryList[k + 1].getCenter();
    }
    else
    {
      value2 = boundaryList[0].getCenter();
    }
    if (value1.x == value2.x && point.x == value1.x)
    {
      if ((value1.y < point.y && point.y < value2.y) || (value2.y < point.y && point.y < value1.y))
      {
        boundaryList.splice(k + 1, 0, node);
      }
    }
    else if (value1.y == value2.y && point.y == value1.y)
    {
      if ((value1.x < point.x && point.x < value2.x) || (value2.x < point.x && point.x < value1.x))
      {
        boundaryList.splice(k + 1, 0, node);
      }
    }
  }
};

cholaLayout.prototype.convertToSimpleGraph = function(gm, compoundNodes)
{
    var simpleGm = this.newGraphManager();
    let parent = simpleGm.addRoot();
    let newEdges = [];
    let nodeDict = {};

    //Copy the non-compound nodes to the new graph manager
    let allNodes = gm.getAllNodes();
    for (let i = 0; i < allNodes.length; i++)
    {
      let node = allNodes[i]; 
      if (!node.isCompound())
      {
        let newNode = parent.add(new cholaNode(simpleGm, node.getLocation(), new DimensionD(node.getWidth(), node.getHeight())));
        newNode.id = node.id;
        nodeDict[newNode.id] = newNode;
      }
    }

    //copy the simple edges(whose source and target are both non compound nodes and which are not intergraph edges)
    let allEdges = gm.getAllEdges();
    for (let i = 0; i < allEdges.length; i++)
    {
      let edge = allEdges[i];
      if (!edge.source.isCompound() && !edge.target.isCompound())
      {
        let source = nodeDict[edge.source.id];
        let target = nodeDict[edge.target.id];
        let newEdge = simpleGm.add(this.newEdge(), source, target);
        newEdge.id = edge.id;
      }
    }

    for (let i = 0; i < compoundNodes.length; i++)
    {
      let node = compoundNodes[i];

      //1. Get boundary corner points
      let bbox = node.getBbox();

      //storing values in clockwise direction
      let boundaryList = [];

      node.boundaryList = boundaryList;

      let corners = [
        {x: bbox.x1, y: bbox.y1},
        {x: bbox.x2, y: bbox.y1},
        {x: bbox.x2, y: bbox.y2},
        {x: bbox.x1, y: bbox.y2},
      ];

      //create nodes for the corner points of the compound node in the new gm
      for (let j = 0; j < corners.length; j++)
      {
        let point = corners[j];
        let newNode = parent.add(new cholaNode(simpleGm, point, new DimensionD(1, 1)));
        newNode.setCenter(point.x, point.y);
        newNode.isDummy = true;
        newNode.dummyOwner = node;
        newNode.isCmpdBoundaryNode = true;

        if (j == 0)
            newNode.id = node.id.concat("-tl");
        else if (j == 1)
            newNode.id = node.id.concat("-tr");
        else if (j == 2)
            newNode.id = node.id.concat("-br");
        else
            newNode.id = node.id.concat("-bl");

        nodeDict[newNode.id] = newNode;
        boundaryList.push(newNode);
      }


      //2. Get endpoints of incident edges to the compound node
      let edges = node.edges;
      
      for (let j = 0; j < edges.length; j++)
      {
        let edge = edges[j];
        let endpoint1, endpoint2;
        if (edge.source == node)
        {  
          endpoint1 = edge.sourceEndpoint();
          if (edge.target.isCompound())
            endpoint2 = edge.target.id.concat("-").concat(edge.id);
          else
            endpoint2 = edge.target.id;
        }
        else
        {
          endpoint1 = edge.targetEndpoint();
          if (edge.source.isCompound())
            endpoint2 = edge.source.id.concat("-").concat(edge.id);
          else
            endpoint2 = edge.source.id;
        }

        let newNode = parent.add(new cholaNode(simpleGm, {x: endpoint1.x - 0.5, y: endpoint1.y - 0.5}, new DimensionD(1, 1)));
        newNode.id = node.id.concat("-").concat(edge.id);
        newNode.isCmpdBoundaryNode = true;  
        node.insertNodeToBoundary(newNode);
        nodeDict[newNode.id] = newNode;

        //store the new edges that have to be created in this case

        if (edge.source == node)
          newEdges.push([newNode.id, endpoint2]);
        else
          newEdges.push([endpoint2, newNode.id]);

      }

      //3. check if the child graph of the compound node is disconnected from outside
      //if this is the case, convert the graph to a connected graph
      //get child graphs list of node including this nodes own graph
      let childGraphs = [node.child].concat(node.getChildGraphs());

      //if the owner graph of the other edge end lies in the list of child graphs, that is not counted as intergraph edge

      function findConnectivity(node, childGraphs)
      {
        let connectivityCheck = false;
        let childNodes = node.getChild().nodes;
        let cEdge;
        for (let j = 0; j < childNodes.length; j++)
        {
          let childNode = childNodes[j];
          if (childNode.isCompound())
          {
            connectivityCheck = findConnectivity(childNode, childGraphs);
            if (connectivityCheck)
              break;
          }

          let childEdges = childNode.edges;
          for (let k = 0; k < childEdges.length; k++)
          {
            cEdge = childEdges[k];
            let otherNode = cEdge.getOtherEnd(childNode);
            if (cEdge.isInterGraph && !childGraphs.includes(otherNode.owner))
            {
              connectivityCheck = true;
              break;
            }
          }
          if (connectivityCheck)
            break;
        }
        return connectivityCheck;
      };

      let connectivityCheck = findConnectivity(node, childGraphs);

      //if the child graph is disconnected it needs to be connected 
      //if the child graph is disconnected it needs to be connected   
      if (!connectivityCheck) 
      {
        var compareSecondColumn = function compareSecondColumn(a, b) 
        {
          if (a[1] === b[1]) {
            return 0;
          } else {
            return a[1] < b[1] ? -1 : 1;
          }
        };

        var nodePosList = [];
        //find the left most node
        var childNodes = node.getChild().nodes;
        for (let j = 0; j < childNodes.length; j++) 
        {
          var child = childNodes[j];
          nodePosList.push([child, child.getLocation().x]);
        }

        nodePosList.sort(compareSecondColumn);

        var leftMostNode = nodePosList[0][0];
        var src, tgt;

        if (!leftMostNode.isCompound()) 
        {
          //now find its distance from the top left and bottom left boundary nodes
          var d1 = this.distance(nodeDict[leftMostNode.id].getLocation(), nodeDict[node.id.concat("-tl")].getCenter());
          var d2 = this.distance(nodeDict[leftMostNode.id].getLocation(), nodeDict[node.id.concat("-bl")].getCenter());

          if (d1 <= d2) 
          {
            src = nodeDict[node.id.concat("-tl")];
          } 
          else 
          {
            src = nodeDict[node.id.concat("-bl")];
          }

          tgt = nodeDict[leftMostNode.id];
        } 
        else 
        {
          //find distance from the topleft corner of child node to topleft corner of compound
          //find distance from the bottomleft corner of child node to bottomleft corner of compound
          //connect the ones with smaller distance
          var d1 = this.distance(nodeDict[leftMostNode.id.concat("-tl")].getCenter(), nodeDict[node.id.concat("-tl")].getCenter());
          var d2 = this.distance(nodeDict[leftMostNode.id.concat("-bl")].getCenter(), nodeDict[node.id.concat("-bl")].getCenter());

          if (d1 <= d2)
          {
            src = nodeDict[node.id.concat("-tl")];
            tgt = nodeDict[leftMostNode.id.concat("-tl")];
          } 
          else 
          {
            src = nodeDict[node.id.concat("-bl")];
            tgt = nodeDict[leftMostNode.id.concat("-bl")];
          }
        }

        var newEdge2 = simpleGm.add(this.newEdge(), src, tgt);
        newEdge2.id = src.id.concat("to").concat(tgt.id);
      }

      //4. construct edges along the boundary of the compound nodes
      for (let j = 0; j < boundaryList.length; j++)
      {
        let source = nodeDict[boundaryList[j].id];
        let target;
        if (j != boundaryList.length - 1)
          target = nodeDict[boundaryList[j + 1].id];
        else
          target = nodeDict[boundaryList[0].id];

        let newEdge = simpleGm.add(this.newEdge(), source, target);
        newEdge.id = source.id.concat("to").concat(target.id);
        newEdge.parentNode = node;
      }

      node.boundaryList = boundaryList;
    }

    //now create the compound connected edges in the graph
    for (let i = 0; i < newEdges.length; i++)
    {
      let edge = newEdges[i];
      let source = nodeDict[edge[0]];
      let target = nodeDict[edge[1]];

      //an edge might already have been created if both endpoints belong to compound nodes
      if (source.findEdgeWithNode(target))
        continue;

      let newEdge = simpleGm.add(this.newEdge(), source, target);
      newEdge.id = source.id.concat("to").concat(target.id);
    }
  
};

cholaLayout.prototype.onSegment = function(p, q, r)
{
    if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y))
        return true;
  
    return false;
};
  
cholaLayout.prototype.orientation = function(p, q, r)
{
    let val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  
    if (val == 0) 
      return 0;
  
    return (val > 0)? 1: 2;
};
  
cholaLayout.prototype.doIntersect = function(p1, q1, p2, q2)
{
    // Find the four orientations needed for general and
    // special cases
    let o1 = this.orientation(p1, q1, p2);
    let o2 = this.orientation(p1, q1, q2);
    let o3 = this.orientation(p2, q2, p1);
    let o4 = this.orientation(p2, q2, q1);
  
    // General case
    if (o1 != o2 && o3 != o4)
        return true;
  
    // Special Cases
    // p1, q1 and p2 are colinear and p2 lies on segment p1q1
    if (o1 == 0 && this.onSegment(p1, p2, q1)) 
      return true;
  
    // p1, q1 and q2 are colinear and q2 lies on segment p1q1
    if (o2 == 0 && this.onSegment(p1, q2, q1)) 
      return true;
  
    // p2, q2 and p1 are colinear and p1 lies on segment p2q2
    if (o3 == 0 && this.onSegment(p2, p1, q2)) 
      return true;
  
    // p2, q2 and q1 are colinear and q1 lies on segment p2q2
    if (o4 == 0 && this.onSegment(p2, q1, q2)) 
      return true;
  
    return false; // Doesn't fall in any of the above cases
};

//for simple edge crosses
cholaLayout.prototype.findEdgeCrosses = function(edges1, edges2)
{
    let crossingEdges = [];
    for (let i = 0; i < edges1.length; i++) 
    {
        let edge = edges1[i];
        let srcLoc = null;
        let tgtLoc = null;

        if (edge.source.isCompound())
            srcLoc = edge.sourceEndpoint();
        else
            srcLoc = edge.source.getCenter();

        if (edge.target.isCompound())
            tgtLoc = edge.targetEndpoint();
        else
            tgtLoc = edge.target.getCenter();

        for (var j = i + 1; j < edges2.length; j++) 
        {
            let otherEdge = edges2[j]; 

            //if edges originate from the same node, dont find intersection
            if (edge.source == otherEdge.source || edge.source == otherEdge.target)
              continue;

            if (edge.target == otherEdge.source || edge.target == otherEdge.target)
              continue;

            let otherSrcLoc = null;
            let otherTgtLoc = null;

            if (otherEdge.source.isCompound())
                otherSrcLoc = otherEdge.sourceEndpoint();
            else
                otherSrcLoc = otherEdge.source.getCenter();

            if (otherEdge.target.isCompound())
                otherTgtLoc = otherEdge.targetEndpoint();
            else
                otherTgtLoc = otherEdge.target.getCenter();

            if (this.doIntersect(srcLoc, tgtLoc, otherSrcLoc, otherTgtLoc)) 
            {
                let intersectionPoint = edge.findIntersection(otherEdge);
                crossingEdges.push([edge, otherEdge, intersectionPoint]);
            }
        }
    }
    return crossingEdges;
};

cholaLayout.prototype.createDummiesForCrossings = function(gm, edgeCrosses, edgeSplitDict)
{
    let dummyNodes = [];
    for (let i = 0; i < edgeCrosses.length; i++)
    {
        let edgeCrossing = edgeCrosses[i];
        let edge1 = edgeCrossing[0];
        let edge2 = edgeCrossing[1];
        let crossingPoint = edgeCrossing[2];

        //create a dummy node for the edge crossing
        let parent = gm.getRoot();
        let dummyNode = parent.add(new cholaNode(gm, crossingPoint, new DimensionD(1,1)));
        dummyNode.setCenter(crossingPoint.x, crossingPoint.y);
        dummyNode.id = "cdnode" + (i + 1).toString();  //cdn: edge crossing dummy node
        dummyNodes.push(dummyNode);

        //if edge is a boundary edge of a compound node
        if (edge1.parentNode != null)
        {
          edge1.parentNode.insertNodeToBoundary(dummyNode);
        }
        if (edge2.parentNode != null)
        {
          edge2.parentNode.insertNodeToBoundary(dummyNode);
        }

        if (edgeSplitDict[edge1.id] != undefined)
        {
          //find the split edge section which contains the crossing point
          let splitEdges = edgeSplitDict[edge1.id];
          for (let k = 0; k < splitEdges.length; k++)
          {
            let e1 = splitEdges[k];
            let src = e1.source;
            let mid = e1.target;
            if (mid.octalCode(src) == mid.octalCode(dummyNode))
            {
              edge1 = e1;
              break;
            }
          }
        }
        if (edgeSplitDict[edge2.id] != undefined)
        {
          //find the split edge section which contains the crossing point
          let splitEdges = edgeSplitDict[edge2.id];
          for (let k = 0; k < splitEdges.length; k++)
          {
            let e1 = splitEdges[k];
            let src = e1.source;
            let mid = e1.target;
            if (mid.octalCode(src) == mid.octalCode(dummyNode))
            {
              edge2 = e1;
              break;
            }
          }
        }

        //connect the sources and targets to the dummy node
        let dummyEdge1 = gm.add(this.newEdge(), edge1.source, dummyNode);
        dummyEdge1.id = "cdedge:" + edge1.source.id + "to" + dummyNode.id;
        dummyEdge1.isDummy = true;
        dummyEdge1.parentEdge = edge1;

        let dummyEdge2 = gm.add(this.newEdge(), dummyNode, edge1.target);
        dummyEdge2.id = "cdedge:" + dummyNode.id + "to" + edge1.target.id;
        dummyEdge2.isDummy = true;
        dummyEdge2.parentEdge = edge1;

        dummyEdge1.coupleEdge = dummyEdge2;
        dummyEdge2.coupleEdge = dummyEdge1;

        let dummyEdge3 = gm.add(this.newEdge(), edge2.source, dummyNode);
        dummyEdge3.id = "cdedge:" + edge2.source.id + "to" + dummyNode.id;
        dummyEdge3.isDummy = true;
        dummyEdge3.parentEdge = edge2;

        let dummyEdge4 = gm.add(this.newEdge(), dummyNode, edge2.target);
        dummyEdge4.id = "cdedge:" + dummyNode.id + "to" + edge2.target.id;
        dummyEdge4.isDummy = true;
        dummyEdge4.parentEdge = edge2;

        dummyEdge3.coupleEdge = dummyEdge4;
        dummyEdge4.coupleEdge = dummyEdge3;

        edgeSplitDict[edge1.id] = [dummyEdge1, dummyEdge2];
        edgeSplitDict[edge2.id] = [dummyEdge3, dummyEdge4];

        let edge1temp = edge1;
        let edge2temp = edge2;

        let temp = edge1;
        let pEdge = temp.parentEdge;
        let arr = edgeSplitDict[temp.id];
        while (temp.id.includes("cdnode"))
        {
          let index = edgeSplitDict[pEdge.id].indexOf(temp);
          edgeSplitDict[pEdge.id].splice(index, 1);
          
          for (let k = 0; k < arr.length; k++)
            edgeSplitDict[pEdge.id].splice(index + k, 0, arr[k]); 

          pEdge = pEdge.parentEdge;
          if (pEdge == null)
            break;
        }

        temp = edge2;
        pEdge = temp.parentEdge;
        arr = edgeSplitDict[temp.id];
        while (temp.id.includes("cdnode"))
        {
          let index = edgeSplitDict[pEdge.id].indexOf(temp);
          edgeSplitDict[pEdge.id].splice(index, 1);
          
          for (let k = 0; k < arr.length; k++)
            edgeSplitDict[pEdge.id].splice(index + k, 0, arr[k]); 

          pEdge = pEdge.parentEdge;
          if (pEdge == null)
            break;
        }

        //delete both of the edges from the graph
        if (edge1temp.isInterGraph)
        {
          gm.remove(edge1temp);
        }
        else
        {
          var graph = gm.calcLowestCommonAncestor(edge1temp.source, edge1temp.target);
          graph.remove(edge1temp);
        }

        if (edge2temp.isInterGraph)
        {
          gm.remove(edge2temp);
        }
        else
        {
          var graph = gm.calcLowestCommonAncestor(edge2temp.source, edge2temp.target);
          graph.remove(edge2temp);
        }

        gm.resetAllEdges();
        gm.resetAllNodes();
        gm.getAllEdges();
        gm.getAllNodes();
    }

    return dummyNodes;
};

cholaLayout.prototype.compactGraph = function(gm)
{
    let xDict = {};
    let yDict = {};
    let allNodes = gm.getAllNodes();
    let allEdges = gm.getAllEdges();

    //add simple nodes to the dictionary
    for (let i = 0; i < allNodes.length; i++)
    {
        let node = allNodes[i];

        if (!node.isCompound())
        {
            let posX = node.getCenterX();
            let posY = node.getCenterY();

            if (xDict[posX] == undefined)
            {
                xDict[posX] = [];
            }
            if (yDict[posY] == undefined)
            {
                yDict[posY] = [];
            }

            xDict[posX].push([null, [posY], [node]]); 
            yDict[posY].push([null, [posX], [node]]);  
        }
    } 
   
    for (let i = 0; i < allEdges.length; i++)
    {
        let edge = allEdges[i];
      
        //add bendpoints to the dictionary
        if (edge.bendpoints.length > 0)
        {
            for (let j = 0; j < edge.bendpoints.length; j++)
            {
                let bendpoint = edge.bendpoints[j];
                let posX = bendpoint.x;
                let posY = bendpoint.y;

                if (xDict[posX] == undefined)
                {
                    xDict[posX] = [];
                }
                if (yDict[posY] == undefined)
                {
                    yDict[posY] = [];
                }

                xDict[posX].push([null, [posY], [bendpoint]]);
                yDict[posY].push([null, [posX], [bendpoint]]);

            }
        }
    }

    let xIndexDict, yIndexDict, xNextPosList, yNextPosList;
    [xDict, xIndexDict, xNextPosList] = this.sortAndCombineDict(xDict, xIndexDict);
    [yDict, yIndexDict, yNextPosList] = this.sortAndCombineDict(yDict, yIndexDict);

    this.createVisibilityGraphEdges(xNextPosList, xIndexDict);
    this.createVisibilityGraphEdges(yNextPosList, yIndexDict);

    this.assignNewLocsToBars(xIndexDict, 0);
    console.log(xIndexDict);

    this.assignNewLocsToBars(yIndexDict, 1);
    console.log(yIndexDict);


};

cholaLayout.prototype.assignNewLocsToBars = function(indexDict, dir)
{
    /*
     * if dir == 0, horizontal compaction is done towards right
     * if dir == 1, vertical compaction is done towards bottom
     * if dir == 2, horizontal compaction is done towards left
     * if dir == 3, vertical compaction is done towards bottom
     */

    let bars = Object.values(indexDict);
    let keys = Object.keys(indexDict);

    let data = null;
    if (dir == 0 || dir == 1)
    {
        data = "futureBars";
        for (let i = bars.length - 1; i >= 0; i--)
        {
            let bar = bars[i];
            if (bar[data].length == 0)
                bar.newLoc = 0;
            else
            {
                let futureIndex = bar[data][0];
                bar.newLoc = bars[futureIndex].newLoc - 1;  
            }
        }
    }
    else if (dir == 2 || dir == 3)
    {
        data = "prevBars";
        for (let i = 0; i < bars.length; i++)
        {
            let bar = bars[i];
            if (bar[data].length == 0)
                bar.newLoc = 0;
            else
            {
                let prevIndex = bar[data][bar[data].length - 1];
                bar.newLoc = bars[prevIndex].newLoc + 1; 
            }
        }
    } 
};

cholaLayout.prototype.createVisibilityGraphEdges = function(posList, indexDict)
{
    let bars = Object.values(indexDict);
    let keys = Object.keys(indexDict);

    //working on all bars at all x or y values
    for (let i = 0; i < bars.length - 1; i++)
    {
        let bar1 = bars[i];
        let dictKey = bar1.dictKey;

        let sp1 = bar1.posData[0];
        let ep1;
        if (bar1.posData.length == 1)
            ep1 = bar1.posData[0];   //in this case, it is not a bar but a single node
        else
            ep1 = bar1.posData[bar1.posData.length - 1];

        //get starting index of next x/y value
        let index = posList[dictKey];

        let shadowBars = [];  //will contain indexes of the nodes that are covered with the shadow of bar1

        for (let j = index; j < bars.length; j++)
        {
            let bar2 = bars[j];

            let sp2 = bar2.posData[0]; //starting point of bar
            let ep2;              //end point of bar
            if (bar2.posData.length == 1)
                ep2 = bar2.posData[0];
            else
                ep2 = bar2.posData[bar2.posData.length - 1];

            if ((sp1 <= sp2 && sp2 <= ep1) || (sp1 <= ep2 && ep2 <= ep1) || (sp2 <= sp1 && sp1 <= ep2) || (sp2 <= ep1 && ep1< ep2))
            {
                //then this bar lies in front of bar1
                //but we now need to check if it completely overlaps with the previous shadow bar that have been added
                let overlap = false;
                for (let m = 0; m < shadowBars.length; m++)
                {
                    let index = shadowBars[m]
                    let bar3 = indexDict[index];

                    let sp3 = bar3.posData[0];
                    let ep3;
                    if (bar3.posData.length == 1)
                        ep3 = bar3.posData[0];
                    else
                        ep3 = bar3.posData[bar3.posData.length - 1];

                    if (sp2 >= sp3 && ep2 <= ep3)
                    {
                        //now if the remaining uncovered part of bar2 is also 
                        overlap = true;
                        break;
                    }
                }

                if (overlap == false)
                {
                    bar1.futureBars.push(j);
                    bars[j].prevBars.push(i);

                    if (sp2 <= sp1 && ep1 <= ep2) //if bar2 completely overlaps bar 1
                    {
                        //then the future bars do not have to be evaluated
                        break;
                    }
                }
            }
        }
    }
};

cholaLayout.prototype.sortAndCombineDict = function(dict, indexDict)
{
    let dictValues = Object.values(dict);
    let dictKeys = Object.keys(dict);

    let index = 0;

    let nextPosList = {};

    indexDict = {};

    let modify = false;
    
    for (let j = 0; j < dictValues.length; j++) 
    {
        let row = dictValues[j];

        row.sort(function(a, b) {
          return a[1][0] - b[1][0];
        });

        let combine = false;

        //then check if each consecutive item in the values is connected or not
        for (let i = 0; i < row.length - 1; i++)
        {
            modify = true;
            let currRow = row[i];
            let nextRow = row[i + 1];

            let currRowLN = currRow[2][currRow[2].length - 1];
            let nextRowFN = nextRow[2][0];

            //now check if these two items are connected
            if (!(currRowLN instanceof cholaNode) && !(nextRowFN instanceof cholaNode))
            {
                //both are bendpoints
                let bp1 = currRowLN;
                let bp2 = nextRowFN;
                if (bp1.id == bp2.srcId || bp1.id == bp2.tgtId)
                  combine = true;
            }
            else if (currRowLN instanceof cholaNode && nextRowFN instanceof cholaNode)
            {
                //both are nodes
                let node1 = currRowLN;
                let node2 = nextRowFN;
                let edge = node1.findEdgeBetween(node2);
                if (edge != null)
                  combine = true;
            }
            else if (currRowLN instanceof cholaNode && !(nextRowFN instanceof cholaNode))
            {
                let node = currRowLN;
                let bp = nextRowFN;
                if (node.id == bp.srcId || node.id == bp.tgtId)
                  combine = true;
            }
            else if (!(currRowLN instanceof cholaNode) && nextRowFN instanceof cholaNode)
            {
                let bp = currRowLN;
                let node = nextRowFN;
                if (node.id == bp.srcId || node.id == bp.tgtId)
                  combine = true;
            }

            if (currRow[0] == null)
            {
                currRow[0] = index;
            }

            if (combine == true)
            {
                //lets combine this removed row to the current row
                currRow[1] = currRow[1].concat(nextRow[1]);
                currRow[2] = currRow[2].concat(nextRow[2]);
                row.splice(i + 1, 1);
            }

            if (combine == false || i == row.length - 1)
            {
                indexDict[index] = 
                { 
                    dictKey: dictKeys[j], 
                    posData: currRow[1], 
                    nodes: currRow[2],
                    futureBars: [],
                    prevBars: [],
                    newLoc: null
                };
                index++;
            }

            if (combine == true)
            {
                combine = false;
                i--;
            }
        }

        if (row.length == 1 && modify == false)
        {
            let currRow = row[0];
            currRow[0] = index;
            indexDict[index] = 
            { 
                dictKey: dictKeys[j], 
                posData: currRow[1], 
                nodes: currRow[2],
                futureBars: [],
                prevBars: [],
                newLoc: null
            };
            index++;
        }

        modify = false;

        dict[dictKeys[j]] = row;

        nextPosList[dictKeys[j]] = index;
    }
    return [dict, indexDict, nextPosList];
};

module.exports = cholaLayout;
