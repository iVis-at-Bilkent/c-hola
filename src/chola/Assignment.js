//a struct to represent an assignment of neighbors to semiaxes, and the cost of this assignment
function Assignment(semis, cost) {
  //semis is a list [a, b, c, d] of lists of neighbors to be assigned to the semiaxes s0, s1, s2, s3 respectively
  this.semis = semis;
  this.cost = cost;
}

Assignment.prototype.union = function (other) {
  //returns a new assignment by taking a union of this assignment with another
  var semis = [[],[],[],[]];
  for (let i = 0; i < this.semis.length; i++)
  {
    var s = this.semis[i];
    for (let j = 0; j < s.length; j++)
    {
      semis[i].push(s[j]);
    }

    var o = other.semis[i];
    for (let j = 0; j < o.length; j++)
    {
      semis[i].push(o[j]);
    }
  }
  var cost = this.cost + other.cost;
  var asgn = new Assignment(semis, cost);
  return asgn;
};

module.exports = Assignment;
