var LNode = require('cose-base').layoutBase.LNode;
var IMath = require('cose-base').layoutBase.IMath;

const cholaEdge = require('../chola/cholaEdge');

function cholaNode(gm, loc, size, vNode) {
  LNode.call(this, gm, loc, size, vNode);
  this.processed = false;
  this.treeSerialNum = 0;
  this.dx = null;
  this.dy = null;
  this.isRootNode = false;
  this.isDummy = false;
}


cholaNode.prototype = Object.create(LNode.prototype);
for (var prop in LNode) {
  cholaNode[prop] = LNode[prop];
}

cholaNode.prototype.setAsRootNode = function(option)
{
  this.isRootNode = option;
};

cholaNode.prototype.getChildren = function()
{
  /*
  :return: a list of the neighbours of this node that sit as
           the target end of the connecting edge
  */
  let kids = [];
  let edges = this.edges;
  for (let i = 0; i < edges.length; i++)
  {
    let edge = edges[i];
    if (this.id == edge.source.id)
      kids.push(edge.target);
  }
  return kids;
};

cholaNode.prototype.octalCode = function ()
{
  //Semi axes get octal codes 0,2,4,6; East:0; North:2; West:4; South:6
  //Quadrants get octal codes 1,3,5,7; NorthEast:1; NorthWest:3; SouthWest:5; SouthEast:7
  var thisLoc = this.getCenter();
  var o = -1;
  var x = this.dx;
  var y = this.dy;
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


cholaNode.prototype.getFreeSemiLocations = function (approx = false)
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
    if (edge.bendpoints.length == 0)
    {
      nbr = edge.getOtherEnd(this); 
      nbrLocX = nbr.getCenter().x;
      nbrLocY = nbr.getCenter().y;
    }
    else
    {  
      nbr = edge.bendpoints[0][0];
      nbrLocX = nbr.x;
      nbrLocY = nbr.y;
    }

    let nodeLoc = this.getCenter();
    if (nodeLoc.x == nbrLocX)
    {
      if (nbrLocY > nodeLoc.y)
        direction = 1;
      else if (nbrLocY < nodeLoc.y)
        direction = 3;
    }
    else if (nodeLoc.y == nbrLocY)
    {
      if (nbrLocX > nodeLoc.x)
        direction = 0;
      else if (nbrLocX < nodeLoc.x)
        direction = 2;
    }

    if (approx == true)
    {
      let dx = Math.abs(nodeLoc.x - nbrLocX);
      let dy = Math.abs(nodeLoc.y - nbrLocY);
      if (dx < dy)
      {
        if (nbrLocY > nodeLoc.y)
          direction = 1;
        else if (nbrLocY < nodeLoc.y)
          direction = 3;
      }
      else if (dy > dx)
      {
        if (nbrLocX > nodeLoc.x)
          direction = 0;
        else if (nbrLocX < nodeLoc.x)
          direction = 2;
      }
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

cholaNode.prototype.getNeighborsWithDegree = function ()
{
  //returns a list of neighbors sorted in descending order of degree
  var neighbors = [];
  for (let i = 0; i < this.edges.length; i++)
  {
    let nbr = this.edges[i].getOtherEnd(this);
    neighbors.push([nbr, nbr.getDegree()]);
  }
  neighbors.sort(function compareSecondColumn(a, b) {
      if (a[1] === b[1]) {
          return 0;
      }
      else {
          return (a[1] < b[1]) ? -1 : 1;
      }
  });
  neighbors.reverse();
  return neighbors;
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

cholaNode.prototype.getNbrsCWCyclic = function() 
{
    /*
    :return: list of all neighbours in clockwise cyclic order
            (assuming the usual graphics convention of x increasing
             to the right and y increasing downward)
    */
    let nbrs = this.getNeighbors();
    if (nbrs.length == 0)
      return [];

    function sortByLocation(array, node) {
        return array.sort(function (a, b) {
            let x = Math.atan2((a.getLocation().y - node.getLocation().y), (a.getLocation().x - node.getLocation().x));
            let y = Math.atan2((b.getLocation().y - node.getLocation().y), (b.getLocation().x - node.getLocation().x));
            return (x - y);
        });
    }

    let sortedNbrs = sortByLocation(nbrs, this);
    
    return sortedNbrs;
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
