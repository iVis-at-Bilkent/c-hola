var LEdge = require('cose-base').layoutBase.LEdge;
var IGeometry = require('cose-base').layoutBase.IGeometry;
const PointD = require('cose-base').layoutBase.PointD;
const DimensionD = require('cose-base').layoutBase.DimensionD;

function cholaEdge(source, target, vEdge) 
{
  LEdge.call(this, source, target, vEdge);
  this.weight = 0.5;
  this.distance = 0;

  //each entry in this.bendpoint contains [bendpoint, [dir1, dir2], [node1, node2]]
  this.bendpoints = [];

  //stores the location of the ports on the source or target (if any) 
  this.sourcePort = null;
  this.targetPort = null;

  //stores the other half of the edge that is split after introducing a crossing dummy node
  this.coupleEdge = null;

  this.isDummy = false;
  this.parentEdge = null;
  this.parentNode = null;

  this.sourcePoint = null;
  this.targetPoint = null;

  this.sourcePointId = null;
  this.targetPointId = null;
}

cholaEdge.prototype = Object.create(LEdge.prototype);
for (var prop in LEdge) 
{
  cholaEdge[prop] = LEdge[prop];
}

cholaEdge.prototype.resetBendpoints = function (gm) {
  this.weight = 0.5;
  this.distance = 0;

  this.bendpoints = [];
  this.routePoints = [];

  var edgesWithBends = gm.edgesWithBends;
  for (var i = 0; i < edgesWithBends.length; i++) {
    var edge = edgesWithBends[i];
    if (edge.id == this.id) edgesWithBends.splice(i, 1);
  }
};


cholaEdge.prototype.getEndpoint = function(node1Bbox, node2Loc) 
{
  let x = node2Loc.x;
  let y = node2Loc.y;

  //center of the node
  var midX = (node1Bbox.x1 + node1Bbox.x2) / 2;
  var midY = (node1Bbox.y1 + node1Bbox.y2) / 2;

  //slope of the line from source to target
  var m = (midY - y) / (midX - x);

  let endpoint;

  if (x <= midX) 
  { // check "left" side
    var minXy = m * (node1Bbox.x1 - x) + y;
    if (node1Bbox.y1 <= minXy && minXy <= node1Bbox.y2)
      endpoint = {x: node1Bbox.x1, y: minXy};
  }

  if (x >= midX) 
  { // check "right" side
    var maxXy = m * (node1Bbox.x2 - x) + y;
    if (node1Bbox.y1 <= maxXy && maxXy <= node1Bbox.y2)
      endpoint = {x: node1Bbox.x2, y: maxXy};
  }

  if (y <= midY) 
  { // check "top" side
    var minYx = (node1Bbox.y1 - y) / m + x;
    if (node1Bbox.x1 <= minYx && minYx <= node1Bbox.x2)
      endpoint = {x: minYx, y: node1Bbox.y1};
  }

  if (y >= midY) 
  { // check "bottom" side
    var maxYx = (node1Bbox.y2 - y) / m + x;
    if (node1Bbox.x1 <= maxYx && maxYx <= node1Bbox.x2)
      endpoint = {x: maxYx, y: node1Bbox.y2};
  }

  return endpoint;

}

cholaEdge.prototype.sourceEndpoint = function() 
{
  //this assumes that the source or target of the edge is a rectangular node

  var sourceEndpoint = this.getEndpoint(this.source.getBbox(), this.target.getCenter());
  return sourceEndpoint;
};

cholaEdge.prototype.targetEndpoint = function() 
{
  //this assumes that the source or target of the edge is a rectangular node

  let targetEndpoint = this.getEndpoint(this.target.getBbox(), this.source.getCenter());
  return targetEndpoint;
};

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
        distance: D, 
        weight: W
    };
};



cholaEdge.prototype.convertToRelativeBendPosition = function() 
{
  var srcTgtPointsAndTangents = this.getSrcTgtPointsAndTangents(this);

  let edgeWeight = "";
  let edgeDistance = "";

  for (let i = 0; i < this.bendpoints.length; i++)
  {
    let bendpoint = this.bendpoints[i];

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
    
    var distance = Math.sqrt(Math.pow((intersectY - bendpoint.y), 2) + Math.pow((intersectX - bendpoint.x), 2));
    
    //Get the direction of the line form source point to target point
    var dir1 = this.getLineDirection(srcPoint, tgtPoint);
    //Get the direction of the line from intesection point to bend point
    var dir2 = this.getLineDirection(intersectionPoint, bendpoint);
    
    //If the difference is not -2 and not 6 then the direction of the distance is negative
    if(dir1 - dir2 != -2 && dir1 - dir2 != 6)
    {
      if(distance != 0)
      {
        distance = -1 * distance;
      }
    }

    this.bendpoints[i].weight = weight;
    this.bendpoints[i].distance = distance;

    if (i == 0)
      this.bendpoints[i].srcId = this.source.id;
    else
      this.bendpoints[i].srcId = this.bendpoints[i - 1].id;

    if (i == this.bendpoints.length - 1)
      this.bendpoints[i].tgtId = this.target.id;
    else
      this.bendpoints[i].tgtId = this.bendpoints[i + 1].id;

    edgeWeight = edgeWeight.concat(weight.toString()).concat(" ");
    edgeDistance = edgeDistance.concat(distance.toString()).concat(" ");

  }
  this.weight = edgeWeight;
  this.distance = edgeDistance;

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
  let srcPoint = this.source.getCenter();
  let tgtPoint = this.target.getCenter();

  //m1 is the slope of the line passing through source and target
  var m1 = (tgtPoint.y - srcPoint.y) / (tgtPoint.x - srcPoint.x);

  return {
    m1: m1,
    m2: -1 / m1,
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

cholaEdge.prototype.getLine = function()
{
  let sourceLoc = this.source.getCenter();
  let targetLoc = this.target.getCenter();

  let slope = (sourceLoc.y - targetLoc.y) / (sourceLoc.x - targetLoc.x);

  let c = sourceLoc.y - slope*sourceLoc.x;

  return {
    m: slope,
    c: c
  };
};

cholaEdge.prototype.findIntersection = function(otherEdge)
{
  let intersectionPoint;
  let intersectX;
  let intersectY;

  let x1 = this.source.getCenterX();
  let y1 = this.source.getCenterY();

  let x2 = this.target.getCenterX();
  let y2 = this.target.getCenterY();

  let x3 = otherEdge.source.getCenterX();
  let y3 = otherEdge.source.getCenterY();

  let x4 = otherEdge.target.getCenterX();
  let y4 = otherEdge.target.getCenterY();

  let m1 = (y2 - y1) / (x2 - x1);
  let m2 = (y4 - y3) / (x4 - x3);

  if (m1 == Infinity || m1 == -Infinity)
  {
    //first line with x1, y1 and x2, y2 is vertical
    let c2 = y3 - m2*x3;
    intersectX = x1;
    intersectY = m2*intersectX + c2;

  }
  else if (m2 == Infinity|| m2 == -Infinity)
  {
    let c1 = y1 - m1*x1;
    intersectX = x3;
    intersectY = m1*intersectX + c1;
  }
  else
  {
    let c1 = y1 - m1*x1;
    let c2 = y3 - m2*x3;

    intersectX = (c2 - c1) / (m1 - m2);
    intersectY = m1*intersectX + c1;

    
  }

  intersectionPoint = {
      x: intersectX,
      y: intersectY
    };



  return intersectionPoint;

}


module.exports = cholaEdge
