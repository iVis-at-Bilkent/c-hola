var LNode = require('cose-base').layoutBase.LNode;
var IMath = require('cose-base').layoutBase.IMath;

const cholaEdge = require('../chola/cholaEdge');

function cholaNode(gm, loc, size, vNode) {
  LNode.call(this, gm, loc, size, vNode);
  this.processed = false;
  this.treeSerialNo = -1;
}


cholaNode.prototype = Object.create(LNode.prototype);
for (var prop in LNode) {
  cholaNode[prop] = LNode[prop];
}

cholaNode.prototype.move = function ()
{
  var layout = this.graphManager.getLayout();
  this.displacementX = layout.coolingFactor *
          (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
  this.displacementY = layout.coolingFactor *
          (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;


  if (Math.abs(this.displacementX) > layout.coolingFactor * layout.maxNodeDisplacement)
  {
    this.displacementX = layout.coolingFactor * layout.maxNodeDisplacement *
            IMath.sign(this.displacementX);
  }

  if (Math.abs(this.displacementY) > layout.coolingFactor * layout.maxNodeDisplacement)
  {
    this.displacementY = layout.coolingFactor * layout.maxNodeDisplacement *
            IMath.sign(this.displacementY);
  }

  // a simple node, just move it
  if (this.child == null)
  {
    this.moveBy(this.displacementX, this.displacementY);
  }
  // an empty compound node, again just move it
  else if (this.child.getNodes().length == 0)
  {
    this.moveBy(this.displacementX, this.displacementY);
  }
  // non-empty compound node, propogate movement to children as well
  else
  {
    this.propogateDisplacementToChildren(this.displacementX,
            this.displacementY);
  }

  layout.totalDisplacement +=
          Math.abs(this.displacementX) + Math.abs(this.displacementY);

  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  this.displacementX = 0;
  this.displacementY = 0;
};

cholaNode.prototype.propogateDisplacementToChildren = function (dX, dY)
{
  var nodes = this.getChild().getNodes();
  var node;
  for (var i = 0; i < nodes.length; i++)
  {
    node = nodes[i];
    if (node.getChild() == null)
    {
      node.moveBy(dX, dY);
      node.displacementX += dX;
      node.displacementY += dY;
    }
    else
    {
      node.propogateDisplacementToChildren(dX, dY);
    }
  }
};

cholaNode.prototype.octalCode = function ()
{
  //Semi axes get octal codes 0,2,4,6; East:0; North:2; West:4; South:6
  //Quadrants get octal codes 1,3,5,7; NorthEast:1; NorthWest:3; SouthWest:5; SouthEast:7
  var thisLoc = this.getCenter();
  var o = -1;
  var x = thisLoc.x;
  var y = thisLoc.y;
  if (x > 0)
  {
    if (y < 0)
      o = 7;
    else
    {
      if (y === 0)
        o = 0;
      else
        o = 1;
    }
  }
  else if (x === 0)
  {
    if (y < 0)
      o = 6;
    else
      o = 2;
  }
  else
  {
    if (y < 0)
      o = 5;
    else
    {
      if (y === 0)
        o = 4;
      else
        o = 3;
    }
  }
  return o;
};


cholaNode.prototype.getFreeSemiLocations = function (edgeLength)
{
  let edges = this.edges;
  let nbr = null;
  let availableSemis = [0, 1, 2, 3];
  let nbrLocX = null;
  let nbrLocY = null;
  for (let i = 0; i < edges.length; i++)
  {
    let direction = null;
    let edge = edges[i];
    if (edge.bendPoints.length == 0)
    {
      nbr = edge.getOtherEnd(this); 
      nbrLocX = nbr.getCenter().x;
      nbrLocY = nbr.getCenter().y;
    }
    else
    {  
      nbr = edge.bendPoints[0];
      nbrLocX = nbr[0];
      nbrLocY = nbr[1];
    }

    let nodeLoc = this.getCenter();
    if (nodeLoc.x == nbrLocX)
    {
      if (nbrLocY == nodeLoc.y + edgeLength)
        direction = 1;
      else if (nbrLocY == nodeLoc.y - edgeLength)
        direction = 3;
    }
    else if (nodeLoc.y == nbrLocY)
    {
      if (nbrLocX == nodeLoc.x + edgeLength)
        direction = 0;
      else if (nbrLocX == nodeLoc.x - edgeLength)
        direction = 2;
    }

    if (direction != null)
    {
      let index = availableSemis.indexOf(direction);
      availableSemis.splice(index, 1);
    }
  }
  return availableSemis;
}

cholaNode.prototype.deflectionFromSemi = function(semi, o)
{
  var x = this.getCenter().x;
  var y = this.getCenter().y;
  var xSquare = x*x;
  var ySquare = y*y;
  var lSquare = xSquare + ySquare;
  var defl = 0;

  switch (semi) {
    case 0: case 2:
      defl = ySquare/lSquare;
      break;
    case 1: case 3:
      defl = xSquare/lSquare;
      break;
    default:
      break;

  }

  switch (semi) {
    case 0:
      switch (o) {
        case 3: case 5:
          defl = 2 - defl;
          break;
        case 4:
          defl = 2;
          break;
        default:
      }
      break;
    case 1:
      switch (o) {
        case 5: case 7:
          defl = 2 - defl;
          break;
        case 6:
          defl = 2;
          break;
        default:
      }
      break;
    case 2:
      switch (o) {
        case 7: case 1:
          defl = 2 - defl;
          break;
        case 0:
          defl = 2;
          break;
        default:
      }
      break;
      case 3:
        switch (o) {
          case 1: case 3:
            defl = 2 - defl;
            break;
          case 2:
            defl = 2;
            break;
          default:
        }
        break;
    default:
        break;
  }
  return defl;

}

cholaNode.prototype.setPred1 = function (pred1)
{
  this.pred1 = pred1;
};

cholaNode.prototype.getPred1 = function ()
{
  return pred1;
};

cholaNode.prototype.getPred2 = function ()
{
  return pred2;
};

cholaNode.prototype.setNext = function (next)
{
  this.next = next;
};

cholaNode.prototype.getNext = function ()
{
  return next;
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

cholaNode.prototype.addPadding = function(xPad, yPad)
{
  this.setWidth(this.getWidth() + xPad);
  this.setHeight(this.getHeight() + yPad);
};

cholaNode.prototype.getDirec = function(v, edgeLength)
{        
  /*
  :param v: a Node object
  :return: the configured Compass direction from current node to v if any, else None
  */
  var thisLoc = this.getCenter();
  var vLoc = v.getCenter();
  let x1 = thisLoc.x;
  let y1 = thisLoc.y;
  let x2 = vLoc.x;
  let y2 = vLoc.y;

  let d = null;

  //checking if the nodes are already configured
  if (x1 == x2 || y1 == y2) 
  {
    //checking if node v is aligned to north or south of node
    if (x1 == x2)
    {
      if (y2 == y1 + edgeLength)
        d = 1;           //south
      else if (y2 == y1 - edgeLength)
        d = 3;           //north  
    }
    //checking if node v is aligned to east or west of node
    else if (y1 == y2)
    {
      if (x2 == x1 + edgeLength)
        d = 0;           //east
      else if (x2 == x1 - edgeLength)
        d = 2;           //west
    }
  }
  return d;
}
module.exports = cholaNode;
