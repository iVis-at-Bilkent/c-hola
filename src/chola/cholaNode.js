var LNode = require('cose-base').layoutBase.LNode;
var IMath = require('cose-base').layoutBase.IMath;
const PointD = require('cose-base').layoutBase.PointD;
const cholaEdge = require('../chola/cholaEdge');
const cholaGraph = require('../chola/cholaGraph');
const LayoutConstants = require('cose-base').layoutBase.LayoutConstants;

function cholaNode(gm, loc, size, vNode) 
{
  LNode.call(this, gm, loc, size, vNode);
  this.processed = false;
  this.treeSerialNum = 0;
  this.dx = null;
  this.dy = null;
  this.isRootNode = false;
  this.isDummy = false;
  this.parentNode = null;
  this.data = {};
  this.layout = "chola";
  this.isCmpdBoundaryNode = false;
  this.boundaryList = [];
  this.childList = [];
  this.connectedEdges = [];
  this.dummyOwner = null;
  this.freeSemiLocations = [];
  this.ports = {
    top: [],
    bottom: [],
    left: [],
    right: []
  };
}

cholaNode.prototype = Object.create(LNode.prototype);
for (var prop in LNode) {
  cholaNode[prop] = LNode[prop];
}

cholaNode.prototype.setAsRootNode = function(option)
{
  this.isRootNode = option;
};

cholaNode.prototype.getParentNode = function()
{
    return this.parentNode;
};

cholaNode.prototype.getArea = function()
{
  return (this.getWidth() * this.getHeight());
};

cholaNode.prototype.getChildren = function()
{
  let children = null;

  if (this.isCompound())
  {
    return this.child.nodes;
  }
};

cholaNode.prototype.getChildGraphs = function () 
{  
  var childGraphsList = []; 
  var childNodes = this.getChildren();  
  for (var i = 0; i < childNodes.length; i++) 
  { 
    var child = childNodes[i];  
    if (child.isCompound()) 
    { 
      childGraphsList.push(child.child);  
      var a = child.getChildGraphs(); 
      childGraphsList = childGraphsList.concat(a);  
    } 
  } 
  return childGraphsList; 
};  

cholaNode.prototype.getInterGraphEdges = function () 
{  
  var edges = this.edges; 
  var igEdges = []; 
  for (var k = 0; k < edgesedges.length; k++) 
  { 
    cEdge = edges[k]; 
    if (cEdge.isInterGraph) 
    { 
      igEdges.push(cEdge);  
    } 
  } 
};

cholaNode.prototype.getBbox = function()
{
  var locX = this.getLocation().x;
  var locY = this.getLocation().y;
  var width = this.getWidth();
  var height = this.getHeight();

  var bbox = { 
    x1: locX, 
    x2: locX + width, 
    y1: locY, 
    y2: locY + height };

  return bbox;
};

cholaNode.prototype.octalCode = function (node)
{
  //Semi axes get octal codes 0,2,4,6; East:0; North:2; West:4; South:6
  //Quadrants get octal codes 1,3,5,7; NorthEast:1; NorthWest:3; SouthWest:5; SouthEast:7
  var thisLoc = this.getCenter();
  var o = -1;
  let dx = (this.getCenterX() - node.getCenterX()).toFixed(7);
  let dy = (this.getCenterY() - node.getCenterY()).toFixed(7);


  if (dx > 0)
  {
    if (dy < 0)
    {
      o = 7;
    }
    else
    {
      if (dy === 0)
      {
        o = 0;
      }
      else
      {
        o = 1;
      }
    }
  }
  else if (dx === 0)
  {
    if (dy < 0)
    {
      o = 6;
    }
    else
    {
      o = 2;
    }
  }
  else
  {
    if (dy < 0)
    {
      o = 5;
    }
    else
    {
      if (dy === 0)
      {
        o = 4;
      }
      else
      {
        o = 3;
      }
    }
  }
  return o;
};

cholaNode.prototype.updateBounds2 = function () 
{
  if (this.getChild() == null) {
    throw "assert failed";
  }
  if (this.getChild().getNodes().length != 0)
  {
    // wrap the children nodes by re-arranging the boundaries
    var childGraph = this.getChild();
    childGraph.updateBounds2(false);

    this.rect.x = childGraph.getLeft();
    this.rect.y = childGraph.getTop();

    this.setWidth(childGraph.getRight() - childGraph.getLeft());
    this.setHeight(childGraph.getBottom() - childGraph.getTop());
    
    // Update compound bounds considering its label properties    
    if(LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS){
        
      var width = childGraph.getRight() - childGraph.getLeft();
      var height = childGraph.getBottom() - childGraph.getTop();

      if(this.labelWidth > width){
        this.rect.x -= (this.labelWidth - width) / 2;
        this.setWidth(this.labelWidth);
      }

      if(this.labelHeight > height){
        if(this.labelPos == "center"){
          this.rect.y -= (this.labelHeight - height) / 2;
        }
        else if(this.labelPos == "top"){
          this.rect.y -= (this.labelHeight - height); 
        }
        this.setHeight(this.labelHeight);
      }
    }
  }
};

cholaNode.prototype.calculatePorts = function () 
{  
  var node = this;  
  if (!this.isCompound()) 
    return;
  else { 
    var w = this.getWidth() - 20; 
    var h = this.getHeight() - 20;  

    var bbox = this.getBbox();  
    var x1 = bbox.x1; 
    var x2 = bbox.x2; 
    var y1 = bbox.y1; 
    var y2 = bbox.y2; 

    var noOfEdges = this.edges.length;  
    if (noOfEdges < 4) 
      noOfEdges = 4; 
    var divFactor = noOfEdges - 1;  

    this.ports.top = [
      { x: x1 + 10, y: y1, occupied: false }, 
      { x: x1 + w / divFactor, y: y1, occupied: false }, 
      { x: x2 - w / divFactor, y: y1, occupied: false }, 
      { x: x2 - 10, y: y1, occupied: false }
    ];  
    this.ports.bottom = [
      { x: x1 + 10, y: y2, occupied: false }, 
      { x: x1 + w / divFactor, y: y2, occupied: false }, 
      { x: x2 - w / divFactor, y: y2, occupied: false }, 
      { x: x2 - 10, y: y2, occupied: false }
    ]; 
    this.ports.left = [
      { x: x1, y: y1 + 10, occupied: false }, 
      { x: x1, y: y1 + h / divFactor, occupied: false }, 
      { x: x1, y: y2 - h / divFactor, occupied: false }, 
      { x: x1, y: y2 - 10, occupied: false }
    ]; 
    this.ports.right = [
      { x: x2, y: y1 + 10, occupied: false }, 
      { x: x2, y: y1 + h / divFactor, occupied: false }, 
      { x: x2, y: y2 - h / divFactor, occupied: false }, 
      { x: x2, y: y2 - 10, occupied: false }
    ];  
  } 
};  

cholaNode.prototype.insertNodeToBoundary = function (node) 
{  
  if (!this.isCompound()) 
    return; 
  var boundaryList = this.boundaryList; 
  var point = node.getCenter(); 

  if (boundaryList.length == 1) 
  { 
    boundaryList.push(node);  
    return; 
  } 

  //now insert the endpoint at correct location in the boundarylist 
  for (var k = 0; k < boundaryList.length; k++) 
  { 
    var value1 = boundaryList[k].getCenter(); 
    var value2 = void 0;  
    if (k != boundaryList.length - 1) 
    { 
      value2 = boundaryList[k + 1].getCenter(); 
    } 
    else {  
      value2 = boundaryList[0].getCenter(); 
    } 
    if (value1.x == value2.x && point.x == value1.x) 
    {  
      if (value1.y < point.y && point.y < value2.y || value2.y < point.y && point.y < value1.y) 
      { 
        boundaryList.splice(k + 1, 0, node);  
      } 
    } else if (value1.y == value2.y && point.y == value1.y) 
    { 
      if (value1.x < point.x && point.x < value2.x || value2.x < point.x && point.x < value1.x) 
      { 
        boundaryList.splice(k + 1, 0, node);  
      } 
    } 
  } 
  node.isDummy = true;  
  node.dummyOwner = this; 
};

cholaNode.prototype.getFreeSemiLocations = function () 
{
  var edges = this.edges;
  var nbr;
  var nbrLocX;
  var nbrLocY;
  var availableSemis = [0, 1, 2, 3];

  if (this.isCompound())
    return availableSemis;

  for (var i = 0; i < edges.length; i++) 
  {
    var direction = null;
    var edge = edges[i];

    //compound is true when orthogonalizing compound node edges
    //in that case, the direction to the compound is not counted in free locations

    if (edge.getOtherEnd(this).isCompound()) 
      continue;

    if (edge.bendpoints.length == 0) 
    {
      nbr = edge.getOtherEnd(this);
      nbrLocX = nbr.getCenter().x;
      nbrLocY = nbr.getCenter().y;
    } 
    else 
    {
      nbr = edge.bendpoints[0];
      nbrLocX = nbr.x;
      nbrLocY = nbr.y;
    }

    var nodeLoc = this.getCenter();
    if (Math.round(nodeLoc.x * 100.0) / 100.0 == Math.round(nbrLocX * 100.0) / 100.0) 
    {
      if (nbrLocY > nodeLoc.y) 
        direction = 1;
      else if (nbrLocY < nodeLoc.y)
        direction = 3;
    } 
    else if (Math.round(nodeLoc.y * 100.0) / 100.0 == Math.round(nbrLocY * 100.0) / 100.0) 
    {
      if (nbrLocX > nodeLoc.x) 
        direction = 0;
      else if (nbrLocX < nodeLoc.x) 
        direction = 2;
    }

    if (direction != null) {
      var index = availableSemis.indexOf(direction);
      availableSemis.splice(index, 1);
    }
  }
  return availableSemis;
};


cholaNode.prototype.getNeighbors = function ()
{
  var neighbors = [];
  for (let i = 0; i < this.edges.length; i++)
  {
    let nbr = this.edges[i].getOtherEnd(this);
    neighbors.push(nbr);
  }
  return neighbors;
};

cholaNode.prototype.setProcessed = function (processed)
{
  this.processed = processed;
};

cholaNode.prototype.isProcessed = function ()
{
  return processed;
};

cholaNode.prototype.isCompound = function() {
	if (this.withChildren().size > 1) {
			return true;
	}
		else {
			return false;
		}
};

cholaNode.prototype.findEdgeBetween = function(node) {
  //finds if an edge exists between the current node and node and returns it
  let output = null;
  for (let i = 0; i < this.edges.length; i++)
  {
    let edge = this.edges[i]; 
    if (edge.source == this && edge.target == node)
    {
        output = edge;
        break;
    }
    else if (edge.source == node && edge.target == this)
    {
      output = edge;
      break;
    }
  }
  return output;
}

cholaNode.prototype.getDegree = function()
{
  var edges = this.getEdges();
  var degree = 0;

  // For the edges connected
  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    if (edge.getSource().id !== edge.getTarget().id) {
      degree = degree + 1;
    }
  }
  return degree;
};

cholaNode.prototype.getBdryCompassPt = function(direc)
{
    /*
    :param direc: a Compass direction
    :return: point (u, v) on the boundary of this node in the given direction
             from the centre
    */
    let c = new compass();
    let cx = this.getLocation().x;
    let cy = this.getLocation().y;

    let hw, hh, sgnx, sgny, u, v;
    [hw, hh] = self.halfDims();
    [sgnx, sgny] = c.vectorSigns(direc);
    [u, v] = [cx + sgnx * hw, cy + sgny * hh];
    return [u, v];
};

cholaNode.prototype.halfDims = function()
{
    let hw = this.getWidth()/2;
    let hh = this.getHeight()/2;
    return [hw, hh];
};

cholaNode.prototype.boundingBoxxXyY = function()
{
    /*
    :return: bounding box in the form (x, X, y, Y) giving extreme coords
    */
    let output = this.halfDims();
    let hw = output[0];
    let hh = output[1];
    let u = this.getCenterX() - hw;
    let v = this.getCenterY() - hh;

    // Now use 2*hw, 2*hh instead of self.w, self.h, since in integer
    // case the halfdims are rounded up with the ceiling function.
    return [u, u + 2*hw, v, v+ 2*hh];
};

cholaNode.prototype.findDistance = function(node)
{
  var nodeLoc = null;
  var nodeLocX = null;
  var nodeLocY = null;

  if (Array.isArray(node))
  {  
    nodeLocX = node[0];
    nodeLocY = node[1]
  }
  else
  {  
    nodeLocX = node.getCenter().x;
    nodeLocY = node.getCenter().y;
  }

  var thisLoc = this.getCenter();
  var distance = Math.sqrt(Math.pow((thisLoc.x - nodeLocX).toFixed(10), 2) + Math.pow((thisLoc.y - nodeLocY).toFixed(10), 2));
  return distance;
};

cholaNode.prototype.findEdgeWithNode = function (node) 
{
  //finds if an edge exists between the current node and node and returns it
  var output = null;
  for (var i = 0; i < this.edges.length; i++) 
  {
    var edge = this.edges[i];
    if (edge.source == this && edge.target == node) 
    {
      output = edge;
      break;
    } 
    else if (edge.source == node && edge.target == this) 
    {
      output = edge;
      break;
    }
  }
  return output;
};

cholaNode.prototype.getRelativeRatiotoNodeCenter = function(portLocation)
{
    let node = this;
    return new PointD((portLocation.x - node.getCenterX()) / (node.getWidth()) * 100,
        (portLocation.y -  node.getCenterY()) / (node.getHeight()) * 100);
};

cholaNode.prototype.getDirec = function(vLoc, cardinal = false, ordinal = false)
{        
  /*
  :param vLcc: a location object
  :param cardinal: if true, the function returns the closest cardinal direction
  :return: the configured Compass direction from current node to v if any, else None
  */
  var thisLoc = this.getCenter();
  let x1 = thisLoc.x;
  let y1 = thisLoc.y;
  let x2 = vLoc.x;
  let y2 = vLoc.y;
  let dx = Math.abs(x1 - x2);
  let dy = Math.abs(y1 - y2);

  let d = null;

  if(cardinal == true)
  {
    if (dx < dy)
    {
      if (y2 > y1)
        d = 1;           //south
      else if (y2 < y1)
        d = 3;           //north  
    }
    //checking if node v is aligned to east or west of node
    else if (dx > dy)
    {
      if (x2 > x1)
        d = 0;           //east
      else if (x2 < x1)
        d = 2;           //west
    }
  }

  //checking if the nodes are already configured
  if (x1 == x2 || y1 == y2) 
  {
    //checking if node v is aligned to north or south of node
    if (x1 == x2)
    {
      if (y2 > y1)
        d = 1;           //south
      else if (y2 < y1)
        d = 3;           //north  
    }
    //checking if node v is aligned to east or west of node
    else if (y1 == y2)
    {
      if (x2 > x1)
        d = 0;           //east
      else if (x2 < x1)
        d = 2;           //west
    }
  }
  else if (ordinal == true)
  {
    if (x2 > x1 && y2 > y1)
      d = 4;
    else if (x2 < x1 && y2 > y1)
      d = 5;
    else if (x2 < x1 && y2 < y1)
      d = 6;
    else if (x2 > x1 && y2 < y1)
      d = 7;
  }

  return d;
}

module.exports = cholaNode;
