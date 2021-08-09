const LGraphManager = require('cose-base').layoutBase.LGraphManager;
const cholaNode = require('../chola/cholaNode');
const DimensionD = require('cose-base').layoutBase.DimensionD;

function cholaGraphManager(layout) 
{
  LGraphManager.call(this, layout);
  this.nextTreeSerialNum = 1;
  this.maxDegree = 0;
  this.rootNode;
  this.edgeToDummyNodes = {};
  this.edgesWithBends = [];
  this.nodes = {};
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
};

//return the list of compound nodes
cholaGraphManager.prototype.findCompoundNodes = function(gm) 
{
    var allNodes = this.getAllNodes();
    var compoundNodes = [];

    for (var i = 0; i < allNodes.length; i++) 
    {
        var node = allNodes[i];
        if (node.isCompound())
        {
          compoundNodes.push(node);
        }
    }

    //sort compounds from inside to outside
    compoundNodes = this.sortCompounds(compoundNodes);
    return compoundNodes;
};

cholaGraphManager.prototype.sortCompounds = function(compoundNodes)
{
  var hierarchyList = [];

  compoundNodes.sort(function (a, b) {
    return b.getArea() - a.getArea();
  });

  //create a hierarchy list for the compound nodes
  for (var i = 0; i < compoundNodes.length; i++) {
    var node = compoundNodes[i];
    var children = node.getChildren();

    var childList = [];

    //check if any children of the compound node is a compound node
    for (var j = 0; j < children.length; j++) {
      var child = children[j];
      if (child.isCompound()) childList.push(child);
    }
    hierarchyList.push([node, childList.length]);
    node.childList = childList;
  }

  function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] < b[1] ? -1 : 1;
    }
  };

  hierarchyList.sort(compareSecondColumn);

  compoundNodes = [];
  for (let i = 0; i < hierarchyList.length; i++)
    compoundNodes.push(hierarchyList[i][0]);

  return compoundNodes;
};


cholaGraphManager.prototype.boundingBoxxXyY = function(ignore = [], includeBends = false)
{
    /*
    :return: bounding box in the form (x, X, y, Y) giving extreme coords
    */
    let allNodes = this.getAllNodes();
    let nodes = allNodes.filter(function(node) {
        if (ignore.indexOf(node) < 0)
            return true;
        else 
            return false;
    });

    let u, U, v, V, x, X, y, Y;
    let bbox = nodes[0].boundingBoxxXyY();
    for (let i = 1; i < nodes.length; i++)
    {
        let node = nodes[i];
        
        [u, U, v, V] = node.boundingBoxxXyY();
        [x, X, y, Y] = bbox;
        bbox = [Math.min(x, u), Math.max(X, U), Math.min(y, v), Math.max(Y, V)];
    }

    if (includeBends)
    {
        let allEdges = this.getAllEdges();
        for (let i = 0; i < allEdges.length; i++)
        {
            let edge = allEdges[i];
            [u, U, v, V] = edge.boundingBoxxXyY();
            [x, X, y, Y] = bbox;
            bbox = [Math.min(x, u), Math.max(X, U), Math.min(y, v), Math.max(Y, V)];
        }
    }
    return bbox;
};

cholaGraphManager.prototype.boundingBoxXYWH = function(ignore = [], includeBends = false)
{
    /*
    :return: bounding box of the graph as (ULCx, ULCy, W, H)
    */
    let output = this.boundingBoxxXyY(ignore, includeBends);
    let x = output[0];
    let X = output[1];
    let y = output[2];
    let Y = output[3];
    return [x, y, X - x, Y - y];
};

cholaGraphManager.prototype.bboxPerimeter = function()
{
    let output = this.boundingBoxXYWH();
    let x = output[0];
    let y = output[1];
    let w = output[2];
    let h = output[3];
    return 2*(w + h);
};

cholaGraphManager.prototype.buildSegments = function() 
{
    /*
    Before calling this method it is necessary that the routePoints
    of each edge in G be built.

    :param G: a routed orthogonal graph
    :return: a list of EdgeSegment objects, one for each segment in G
    */
    let segs = [];
    let allEdges = this.getAllEdges();
    for (let i = 0; i < allEdges.length; i++)
    {
        let edge = allEdges[i];

        //get all nodes between which segments have to be created in an order
        let pts = edge.routePoints;
        pts.unshift(edge.source);
        pts.push(edge.target);

        let n = pts.length;
        for (let i = 0; i < n - 1; i++)
        {
            let p = pts[i];
            let q = pts[i+1];
            let seg = new edgeSegment(p, q);
            seg.edge = edge;
            segs.push(seg);
        }
    }
    return segs;
};
    

cholaGraphManager.prototype.takeNextTreeSerialNo = function()
{
    let n = this.nextTreeSerialNum;
    this.nextTreeSerialNum = n + 1;
    return n;
};


cholaGraphManager.prototype.getNode = function(node)
{
    this.resetAllEdges();
    this.resetAllNodes();
	var allNodes = this.getAllNodes();
	for (let i = 0; i < allNodes.length; i++)
	{
		let n = allNodes[i];
		if (n.id == node.id)
			return n;
	}
	return null;
};

cholaGraphManager.prototype.severNodes = function(nodes, buckets, compoundNodes, idList, parentList)
{
	for (let i = 0; i < nodes.length; i++)
	{
        let node = nodes[i];

        if (!compoundNodes.includes(node)) 
	    {
	        let edge = node.edges[0];
            if (edge == undefined)
                continue;

	        let otherNode = edge.getOtherEnd(node);
            let degree = otherNode.getDegree();

            parentList[node.id] = [node, node.getEdges()[0], node.getOwner()];

	        node.owner.remove(node);
            delete this.nodes[node.id];

	        idList.push(node.id);
	        buckets.moveNode(otherNode, degree, degree - 1);
	    }
    }
    this.resetAllNodes();
    this.resetAllEdges();
};

cholaGraphManager.prototype.getConnectedComponents = function()
{
    /*
    takes the stems and reconnects them to form trees
    */
    let components = [];

    // Make a copy of the nodes
    let nodes = this.getAllNodes();
    let newIndex = 0;

    let layout = this.getLayout();
    

    while(nodes.length > 0)
    {
        //create a new graph manager
        let gm = layout.newGraphManager();
        let parent = gm.addRoot();

        // Start with any node

        let node = nodes[0];
        let tempNode1 = parent.add(new cholaNode(gm, node.getCenter(), new DimensionD(parseFloat(node.getWidth()), parseFloat(node.getHeight()))));
        tempNode1.id = node.id;
        tempNode1.treeSerialNum = node.treeSerialNum;

        nodes.splice(0,1);

        // We will use a queue of pairs (e,u), being an edge e
        // along with the node u that nominated it.
        let edgeList = node.edges;
        let queue = [];
        for (let i = 0; i < edgeList.length; i++)
        {
            queue.push([edgeList[i], node]);
        }
        // Applying BFS
        while (queue.length > 0)
        {
            let edge = queue[0][0];
            let n1 = queue[0][1];   //node in original gm
            tempNode1 = gm.getNode(n1);     //node in newGm
            queue.splice(0,1);
            
            let n2 = edge.getOtherEnd(n1);  //node in original gm
            let tempNode2 = gm.getNode(n2); //node in newGm
            if (tempNode2 != null)
                continue;
            
            tempNode2 = parent.add(new cholaNode(gm, n2.getCenter(), new DimensionD(parseFloat(n2.getWidth()), parseFloat(n2.getHeight()))));
            tempNode2.id = n2.id;
            tempNode2.treeSerialNum = n2.treeSerialNum;

            let source, target, tempEdge;
            if (edge.source == n1)
                tempEdge = gm.add(gm.getLayout().newEdge(), tempNode1, tempNode2);
            else
                tempEdge = gm.add(gm.getLayout().newEdge(), tempNode2, tempNode1);
            tempEdge.id = edge.id;

            nodes.splice(nodes.indexOf(n2), 1);
            edgeList = n2.edges;
            for (let i = 0; i < edgeList.length; i++)
            {
                queue.push([edgeList[i], n2]);
            }
        }
        let allEdges = gm.getAllEdges();
        gm.computeMaxDegree();
        components.push(gm);
    }
    return components;
};

cholaGraphManager.prototype.computeMaxDegree = function()
{
    this.resetAllNodes();
    this.resetAllEdges();
    
    let max = 0;
    let allNodes = this.getAllNodes();
    for (let i = 0; i < allNodes.length; i++)
    {
        let node = allNodes[i];
        if (node.getDegree() > max)
            max = node.getDegree();
    }
    this.maxDegree = max;
};

cholaGraphManager.prototype.identifyRootNode = function()
{
    let maxSerialNumber = 0;
    let root;
    let allNodes = this.getAllNodes();

    for (let i = 0; i < allNodes.length; i++)
    {
        let node = allNodes[i];
        if (node.treeSerialNum > maxSerialNumber)
        {
            maxSerialNumber = node.treeSerialNum;
            root = node;
        }
    }

    this.rootNode = root;
    root.setAsRootNode(true);

};

cholaGraphManager.prototype.isEmpty = function()
{
	if (this.getAllNodes().length == 0)
		return true;
	else
		return false;
};

cholaGraphManager.prototype.getChainsAndCycles = function()
{
    //Identify all sequences of consecutive "links" (degree-2 nodes) in this graph.
  var chains = [];
  var cycles = [];

  // Build /list/ of all links in the graph.
  var allNodes = this.getAllNodes();
  var allLinks = [];

  for (let i = 0; i < allNodes.length; i++)
  {
    var node = allNodes[i];
    if (node.getDegree() == 2)
      allLinks.push(node);
  }

  while (allLinks.length > 0)
  {
    var linkNode = allLinks.pop();
    var links = [linkNode];

    // Get the two edges of link, and prepare to explore in both directions.
    var edges = linkNode.edges;
    var direction = -1;
    var polygon = false;
    for (let i = 0; i < edges.length; i++)
    {
        var edge = edges[i];
        if (polygon)
          break;

        // Explore from linknode in one direction.
        direction = -1 * direction;
        var lastNode = linkNode;
        var done = false;
        while (!done)
        {
            // Consider the next node in the current direction.
            var nextNode = edge.getOtherEnd(lastNode);
            if (nextNode == linkNode)
            {
                // In this case the entire connected component to which the node
                // belongs is a mere polygon.
                polygon = true;
                cycles.push(links);
                links = [];
                done = true;
            }
            else if (nextNode.getDegree() == 2)
            {
                // This must be a link which we have not encountered before.
                allLinks.splice(allLinks.indexOf(nextNode), 1);

                if (direction == 1)
                    links.push(nextNode);
                else if (direction == -1)
                    links.unshift(nextNode);

                var nextNodeEdges = nextNode.edges;
                for (let j = 0; j < nextNodeEdges.length; j++)
                {
                  if (nextNodeEdges[j] != edge)
                  {
                    edge = nextNodeEdges[j];
                    break;
                  }
                }

                lastNode = nextNode;
            }
            else
            {
                // We've reached the "anchor node" at one end of the chain.
                done = true;
            }
        }

    // Now have explored from link L0 in both directions, or else found that
    // it belonged to a polygon.
    }

    if (links.length > 0)
        chains.push(links);
  }

  return [chains, cycles];
};


module.exports = cholaGraphManager;
