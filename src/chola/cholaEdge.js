var LEdge = require('cose-base').layoutBase.LEdge;

function cholaEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
}

cholaEdge.prototype = Object.create(LEdge.prototype);
for (var prop in LEdge) {
  cholaEdge[prop] = LEdge[prop];
}

module.exports = cholaEdge
