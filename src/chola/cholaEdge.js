var LEdge = require('cose-base').layoutBase.LEdge;
var IGeometry = require('cose-base').layoutBase.IGeometry;

function cholaEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.bendPoints = [];
}

cholaEdge.prototype = Object.create(LEdge.prototype);
for (var prop in LEdge) {
  cholaEdge[prop] = LEdge[prop];
}

/*Get the other end to which an edge is connected with*/
cholaEdge.prototype.getOtherEnd = function(node)
{
  if (node === this.source && node === this.target)
  {
    return null;
  }
  else if (node === this.source)
  {
    return this.target;
  }
  else if (node === this.target)
  {
    return this.source;
  }
};

cholaEdge.prototype.intersectionsCost = function(gm)
{
  var allEdges = gm.getAllEdges();
  var p1 = this.source.getLocation().x;
  var p2 = this.target.getLocation().y;
  var cost = 0;
  for (let i = 0; i < allEdges.length; i++)
  {
    var edge = allEdges[i];
    var p3 = edge.source.getLocation().x;
    var p4 = edge.target.getLocation().y;
    cost += IGeometry.doIntersect(p1,p2,p3,p4)? 1:0;
  }
  return cost;
}

module.exports = cholaEdge
