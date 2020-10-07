const Nbr = require('../chola/nbr');
const Arrangement = require('../chola/arrangement');

function assign() {
}

assign.prototype.getCyclicOrder = function (node)
{
  var neighbors = [];
  for (let i = 0; i < node.edges.length; i++)
  {
    var edge = node.edges[i];
    var other = edge.getOtherEnd(node);
    var otherLoc = other.getCenter();
    var nodeLoc = node.getCenter();
    var dx = otherLoc.x - nodeLoc.x;
    var dy = otherLoc.y - nodeLoc.y;
    var moved = other.moved;
    var degree = other.getDegree();
    var processd = other.processed;
    var neighbor = new Nbr(other.id, dx, dy, degree, processd);
    neighbors.push(neighbor);
  }
  var arr = new Arrangement(neighbors, node.getDegree());
  arr.getArrangement();
  return arr.getCyclicOrder();
};


assign.prototype.getNeighborAssignments = function (node, cyclicIds, highIds, am)
{
    var neighbors = [];
    for (let i = 0; i < node.edges.length; i++)
    {
      var edge = node.edges[i];
      var other = edge.getOtherEnd(node);
      var otherLoc = other.getCenter();
      var nodeLoc = node.getCenter();
      var dx = otherLoc.x - nodeLoc.x;
      var dy = otherLoc.y - nodeLoc.y;
      var degree = other.getDegree();
      var processd = other.processed;
      var neighbor = new Nbr(other.id, dx, dy, degree, processd);
      neighbors.push(neighbor);
    }
    var arr = new Arrangement(neighbors, node.getDegree(), node.id, highIds);
    arr.getArrangement();
    var asgns = arr.getAsgns(cyclicIds, am);
    return asgns;
};

module.exports = assign;