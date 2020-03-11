var LGraphManager = require('cose-base').layoutBase.LGraphManager;

function cholaGraphManager(layout) {
  LGraphManager.call(this, layout);
}

cholaGraphManager.prototype = Object.create(LGraphManager.prototype);
for (var prop in LGraphManager) {
  cholaGraphManager[prop] = LGraphManager[prop];
}

cholaGraphManager.prototype.getMaxDegree = function()
{
	var allNodes = this.getAllNodes();
	var maxDegree = -1;

	for(let i = 0; i < allNodes.length; i++)
	{
		let node = allNodes[i];
		let degree = node.getDegree();
		if (degree > maxDegree)
			maxDegree = degree;
	} 

	return maxDegree;
}

cholaGraphManager.prototype.getNode = function(node)
{
	var allNodes = this.getAllNodes();
	for (let i = 0; i < allNodes.length; i++)
	{
		let n = allNodes[i];
		if (n == node)
			return true;
	}
	return false;
}

module.exports = cholaGraphManager;
