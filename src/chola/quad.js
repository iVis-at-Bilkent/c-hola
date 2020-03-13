const Nbr = require('../chola/nbr');
const Assignment = require('../chola/Assignment');

function Quad(num) {
  //num is the quadrant number: 0, 1, 2, 3
  this.num = num;
  this.nbrs = [];
  this.costs = [0, 0, 0, 0];
}

Quad.prototype.addNbr = function (neighbor)
{
  this.nbrs.push(neighbor);
};

Quad.prototype.size = function()
{
  return this.nbrs.length;
};



module.exports = Quad;
