var LEdge = require('cose-base').layoutBase.LEdge;
var IGeometry = require('cose-base').layoutBase.IGeometry;
const PointD = require('cose-base').layoutBase.PointD;
const DimensionD = require('cose-base').layoutBase.DimensionD;

function cholaEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.weight = 0.5;
  this.distance = 0;
  this.bendpoints = [];
  this.routePoints = [];
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

cholaEdge.prototype.createDummyNodesForBendpoints = function(gm, layout)
{
  let edge = this;
  var dummyNodes = [];
  var prev = edge.source;

  var graph = gm.calcLowestCommonAncestor(edge.source, edge.target);

  for (var i = 0; i < edge.bendpoints.length; i++)
  {
    // create new dummy node
    var dummyNode = gm.getRoot().add(new cholaNode(gm, new PointD(0, 0), new DimensionD(1, 1)));
    dummyNode.id = edge.source + "to" + edge.target + toString(i);
    //layout.newNode(null);
    //dummyNode.setRect(new PointD(0, 0), new DimensionD(1, 1));

    //graph.add(dummyNode);

    // create new dummy edge between prev and dummy node
    let dummyEdge = gm.add(gm.getLayout().newEdge(), prev, dummyNode);
    //layout.newEdge(null);
    //gm.add(dummyEdge, prev, dummyNode);

    dummyNodes.add(dummyNode);
    prev = dummyNode;
  }

  let dummyEdge = gm.add(gm.getLayout().newEdge(), prev, edge.target);
  //gm.add(dummyEdge, prev, edge.target);

  gm.edgeToDummyNodes[edge] = dummyNodes;

  // remove real edge from graph manager if it is inter-graph
  // if (edge.isInterGraph())
  // {
  //   layout.graphManager.remove(edge);
  // }
  // else, remove the edge from the current graph
 
    graph.remove(edge);
 

  return dummyNodes;
};

cholaEdge.prototype.isOrthogonal = function()
{
  //if edge has a bendpoint, it has been orthogonalized
  if (this.bendpoints.length > 0)
    return true;
  //if source and target both lie on the same axis, they are orthogonalized
  else if (Math.round(this.source.getCenterX()) == Math.round(this.target.getCenterX()))
    return true;
  else if (Math.round(this.source.getCenterY()) == Math.round(this.target.getCenterY()))
    return true; 
  else
    return false;
};

cholaEdge.prototype.createBendPoint = function(bendpoint, dir1, dir2, node1, node2, tree = false)
{  

  var relativeBendPosition;
  if (!tree)
    relativeBendPosition = this.convertToRelativeBendPosition(bendpoint);
    //let srcPoint = this.sourceEndpoint();
    //let trgtPoint = this.targetEndpoint();

    // console.log("source");
    // console.log(node1.id);
    // console.log("target");
    // console.log(node2.id);
  else
  {
    relativeBendPosition = this.getDistWeight(node1.getCenterX(), node1.getCenterY(), node2.getCenterX(), node2.getCenterY(),
      bendpoint.x, bendpoint.y);
  }
    this.weight = relativeBendPosition.weight;
    this.distance = relativeBendPosition.distance;
    this.bendpoints.push([bendpoint, [dir1, dir2], [node1, node2]]);
};

cholaEdge.prototype.getDistWeight = function(sX, sY, tX, tY, PointX, PointY){
    var W, D;

    D = ( PointY - sY + (sX-PointX) * (sY-tY) / (sX-tX) ) /  Math.sqrt( 1 + Math.pow((sY-tY) / (sX-tX), 2) );
    W = Math.sqrt(  Math.pow(PointY-sY,2) + Math.pow(PointX-sX,2) - Math.pow(D,2)  );

    var distAB = Math.sqrt(Math.pow(tX-sX, 2) + Math.pow(tY-sY, 2));
    W = W / distAB;

    //check whether the point (PointX, PointY) is on right or left of the line src to tgt. for instance : a point C(X, Y) and line (AB).  d=(xB-xA)(yC-yA)-(yB-yA)(xC-xA). if d>0, then C is on left of the line. if d<0, it is on right. if d=0, it is on the line.
    var delta1 = (tX-sX)*(PointY-sY)-(tY-sY)*(PointX-sX);
        switch (true) {
          case (delta1 >= 0) :
            delta1 = 1;
            break;
          case (delta1 < 0) :
            delta1 = -1;
            break;
        }
    //check whether the point (PointX, PointY) is "behind" the line src to tgt
    var delta2 = (tX-sX)*(PointX-sX)+(tY-sY)*(PointY-sY);
        switch (true) {
          case (delta2 >= 0) :
            delta2 = 1;
            break;
          case (delta2 < 0) :
            delta2 = -1;
            break;
        }

    D = Math.abs(D) * delta1;   //ensure that sign of D is same as sign of delta1. Hence we need to take absolute value of D and multiply by delta1
    W = W * delta2;

    return {
        ResultDistance: D, 
        ResultWeight: W
    };
};

cholaEdge.prototype.convertToRelativeBendPosition = function(bendpoint) 
{
  var srcTgtPointsAndTangents = this.getSrcTgtPointsAndTangents(); 
  var intersectionPoint = this.getIntersection(bendpoint, srcTgtPointsAndTangents);
  var intersectX = intersectionPoint.x;
  var intersectY = intersectionPoint.y;
  
  var srcPoint = srcTgtPointsAndTangents.srcPoint;
  var tgtPoint = srcTgtPointsAndTangents.tgtPoint;
  
  var weight;
  
  if( intersectX != srcPoint.x ) {
    weight = (intersectX - srcPoint.x) / (tgtPoint.x - srcPoint.x);
  }
  else if( intersectY != srcPoint.y ) {
    weight = (intersectY - srcPoint.y) / (tgtPoint.y - srcPoint.y);
  }
  else {
    weight = 0;
  }
  
  var distance = Math.sqrt(Math.pow((intersectY - bendpoint.y), 2)
      + Math.pow((intersectX - bendpoint.x), 2));
  
  //Get the direction of the line form source point to target point
  var dir1 = this.getLineDirection(srcPoint, tgtPoint);
  //Get the direction of the line from intesection point to bend point
  var dir2 = this.getLineDirection(intersectionPoint, bendpoint);

  console.log(this.id);

  console.log(dir1);
  console.log(dir2);
  
  //If the difference is not -2 and not 6 then the direction of the distance is negative
  if(dir1 - dir2 != -2 && dir1 - dir2 != 6)
  {
    if(distance != 0)
    {
      distance = -1 * distance;
      console.log("inverted distance");
    }
  }

  // if (distance != 0)
  //  {
  //     //if (dir1 == 2 && dir2 == 8)
  //       //distance = -1 * distance;
  //     if (dir1 == 4 && dir2 == 2)
  //       distance = -1 * distance; 
  //     else if (dir1 == 6 && dir2 == 4)
  //       distance = -1 * distance;
  //     else if (dir1 == 8 && dir2 == 6)
  //       distance = -1 * distance;
      
  //     if (distance < 0) 
  //       console.log("inverted distance");
  //  }

  console.log(distance);
  
  return {
    weight: weight,
    distance: distance
  };
};

cholaEdge.prototype.getLineDirection = function(srcPoint, tgtPoint)
{
  if(srcPoint.y == tgtPoint.y && srcPoint.x < tgtPoint.x){
    return 1;
  }
  if(srcPoint.y < tgtPoint.y && srcPoint.x < tgtPoint.x){
    return 2;
  }
  if(srcPoint.y < tgtPoint.y && srcPoint.x == tgtPoint.x){
    return 3;
  }
  if(srcPoint.y < tgtPoint.y && srcPoint.x > tgtPoint.x){
    return 4;
  }
  if(srcPoint.y == tgtPoint.y && srcPoint.x > tgtPoint.x){
    return 5;
  }
  if(srcPoint.y > tgtPoint.y && srcPoint.x > tgtPoint.x){
    return 6;
  }
  if(srcPoint.y > tgtPoint.y && srcPoint.x == tgtPoint.x){
    return 7;
  }
  return 8;//if srcPoint.y > tgtPoint.y and srcPoint.x < tgtPoint.x
};

cholaEdge.prototype.getSrcTgtPointsAndTangents = function()
{
  var sourceNode = this.source;
  var targetNode = this.target;
  
  var srcPoint = sourceNode.getCenter();
  var tgtPoint = targetNode.getCenter();

  //m1 is the slope of the line passing through source and target
  var m1 = (tgtPoint.y - srcPoint.y) / (tgtPoint.x - srcPoint.x);
  var m2 = -1 / m1;

  return {
    m1: m1,
    m2: m2,
    srcPoint: srcPoint,
    tgtPoint: tgtPoint
  };
};

cholaEdge.prototype.getIntersection = function(point, srcTgtPointsAndTangents)
{
  var srcPoint = srcTgtPointsAndTangents.srcPoint;
  var tgtPoint = srcTgtPointsAndTangents.tgtPoint;
  var m1 = srcTgtPointsAndTangents.m1;
  var m2 = srcTgtPointsAndTangents.m2;

  var intersectX;
  var intersectY;

  if(m1 == Infinity || m1 == -Infinity){
    intersectX = srcPoint.x;
    intersectY = point.y;
  }
  else if(m1 == 0){
    intersectX = point.x;
    intersectY = srcPoint.y;
  }
  else {
    //y-intercept or c for the line passing between the source point and the target point
    //y-intersect is the intersecting point of the line and the y-axis
    var a1 = srcPoint.y - m1 * srcPoint.x;

    //y-intercept or c for the line perpendicular to the line passing between the source point and the target point
    //since line2 is perpendicular to line 1, its slope will be m2
    var a2 = point.y - m2 * point.x;

    //now we must find the point of intersection of line 1 and line 2
    //formula for findinf value of x
    intersectX = (a2 - a1) / (m1 - m2);

    //plugging back the value of x in equation of line 1 to get the value of y
    intersectY = m1 * intersectX + a1;
  }

  //Intersection point is the intersection of the lines passing through the nodes and
  //passing through the bend point and perpendicular to the other line
  var intersectionPoint = {
    x: intersectX,
    y: intersectY
  };
  
  return intersectionPoint;
};

module.exports = cholaEdge
