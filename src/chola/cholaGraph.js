var LGraph = require('layout-base').LGraph;

function cholaGraph(parent, graphMgr, vGraph) {
  LGraph.call(this, parent, graphMgr, vGraph);
}

cholaGraph.prototype = Object.create(LGraph.prototype);
for (var prop in LGraph) {
  cholaGraph[prop] = LGraph[prop];
}

module.exports = cholaGraph;
