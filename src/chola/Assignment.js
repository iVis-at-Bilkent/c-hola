
//a struct to represent an assignment of neighbors to semiaxes, and the cost of this assignment

function Assignment(semis, cost) 
{
  //semis is a list [a, b, c, d] of lists of neighbors to be assigned to the semiaxes s0, s1, s2, s3 respectively
  this.semis = semis;
  this.cost = cost;
}


module.exports = Assignment;
