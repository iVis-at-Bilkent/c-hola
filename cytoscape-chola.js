(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cose-base"));
	else if(typeof define === 'function' && define.amd)
		define(["cose-base"], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeChola"] = factory(require("cose-base"));
	else
		root["cytoscapeChola"] = factory(root["coseBase"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * TODO
 * Choose the type of layout that best suits your usecase as a starting point.
 *
 * A discrete layout is one that algorithmically sets resultant positions.  It
 * does not have intermediate positions.
 *
 * A continuous layout is one that updates positions continuously, like a force-
 * directed / physics simulation layout.
 */
module.exports = __webpack_require__(9);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Simple, internal Object.assign() polyfill for options objects etc.

module.exports = Object.assign != null ? Object.assign.bind(Object) : function (tgt) {
  for (var _len = arguments.length, srcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    srcs[_key - 1] = arguments[_key];
  }

  srcs.forEach(function (src) {
    Object.keys(src).forEach(function (k) {
      return tgt[k] = src[k];
    });
  });

  return tgt;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LayoutConstants = __webpack_require__(0).layoutBase.LayoutConstants;

function cholaConstants() {}

//cholaConstants inherits static props in FDLayoutConstants
for (var prop in LayoutConstants) {
  cholaConstants[prop] = LayoutConstants[prop];
}

cholaConstants.DEFAULT_USE_MULTI_LEVEL_SCALING = false;
cholaConstants.DEFAULT_RADIAL_SEPARATION = LayoutConstants.DEFAULT_MIN_LENGTH;
cholaConstants.DEFAULT_COMPONENT_SEPERATION = 60;
cholaConstants.TILE = true;
cholaConstants.TILING_PADDING_VERTICAL = 10;
cholaConstants.TILING_PADDING_HORIZONTAL = 10;

module.exports = cholaConstants;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LEdge = __webpack_require__(0).layoutBase.LEdge;

function cholaEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
}

cholaEdge.prototype = Object.create(LEdge.prototype);
for (var prop in LEdge) {
  cholaEdge[prop] = LEdge[prop];
}

module.exports = cholaEdge;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphManager = __webpack_require__(0).layoutBase.LGraphManager;

function cholaGraphManager(layout) {
  LGraphManager.call(this, layout);
}

cholaGraphManager.prototype = Object.create(LGraphManager.prototype);
for (var prop in LGraphManager) {
  cholaGraphManager[prop] = LGraphManager[prop];
}

module.exports = cholaGraphManager;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------
var CoSELayout = __webpack_require__(0).CoSELayout;
var CoSEConstants = __webpack_require__(0).CoSEConstants;
var cholaConstants = __webpack_require__(3);
var cholaGraphManager = __webpack_require__(5);
var cholaNode = __webpack_require__(7);
var cholaEdge = __webpack_require__(4);

// Constructor
function cholaLayout() {
    Layout.call(this);

    /**
     * Whether it is incremental
     */
    this.incremental = cholaConstants.INCREMENTAL;

    /**
     * Separation of the nodes on each circle customizable by the user
     */
    this.nodeSeparation = cholaConstants.DEFAULT_NODE_SEPARATION;

    /**
     * Ideal edge length coefficient for inter-cluster edges
     */
    this.idealInterClusterEdgeLengthCoefficient = cholaConstants.DEFAULT_IDEAL_INTER_CLUSTER_EDGE_LENGTH_COEFF;

    /**
     * Decides whether pull on-circle nodes inside of the circle.
     */
    this.allowNodesInsideCircle = cholaConstants.DEFAULT_ALLOW_NODES_INSIDE_CIRCLE;

    /**
     * Max percentage of the nodes in a circle that can move inside the circle
     */
    this.maxRatioOfNodesInsideCircle = cholaConstants.DEFAULT_MAX_RATIO_OF_NODES_INSIDE_CIRCLE;

    /**
     * Current step of the layout process
     */
    this.step = cholaLayout.STEP_NOT_STARTED;

    /**
     * Current phase of current step
     */
    this.phase = cholaLayout.PHASE_NOT_STARTED;

    /**
     * Holds the set of pairs swapped in the last swap phase.
     */
    this.swappedPairsInLastIteration = [];

    /**
     * Iterations in the runSpringEmbedderTicl function
     */
    this.iterations = 0;

    this.oldTotalDisplacement = 0.0;

    /**
     * Cooling Factor Variables
     */
    this.coolingCycle = 0;
    this.maxCoolingCycle = this.maxIterations / cholaConstants.CONVERGENCE_CHECK_PERIOD;
}

cholaLayout.prototype = Object.create(Layout.prototype);

for (var property in Layout) {
    cholaLayout[property] = Layout[property];
}

// -----------------------------------------------------------------------------
// Section: Class constants
// -----------------------------------------------------------------------------
/**
 * Steps of layout
 */
cholaLayout.STEP_NOT_STARTED = 0;
cholaLayout.STEP_1 = 1;
cholaLayout.STEP_2 = 2;
cholaLayout.STEP_3 = 3;
cholaLayout.STEP_4 = 4;
cholaLayout.STEP_5 = 5;

/**
 * Phases of a step
 */
cholaLayout.PHASE_NOT_STARTED = 0;
cholaLayout.PHASE_SWAP_PREPERATION = 1;
cholaLayout.PHASE_PERFORM_SWAP = 2;
cholaLayout.PHASE_OTHER = 3;

// -----------------------------------------------------------------------------
// Section: Class methods
// -----------------------------------------------------------------------------

/**
 * This method creates a new graph manager associated with this layout.
 */
cholaLayout.prototype.newGraphManager = function () {
    this.graphManager = new cholaGraphManager(this);
    return this.graphManager;
};

/**
 * This method creates a new graph(cholaCircle) associated with the input view graph.
 */
cholaLayout.prototype.newCircleLGraph = function (vGraph) {
    return new cholaCircle(null, this.graphManager, vGraph);
};

/**
 * This method creates a new node associated with the input view node.
 */
cholaLayout.prototype.newNode = function (loc, size) {
    return new cholaNode(this.graphManager, loc, size, null);
};

/**
 * This method creates a new on-circle chola node associated with the input
 * view node.
 */
cholaLayout.prototype.newcholaOnCircleNode = function (loc, size) {
    var newNode = this.newNode(loc, size);
    newNode.setAsOnCircleNode();

    return newNode;
};

/**
 * This method creates a new edge associated with the input view edge.
 */
cholaLayout.prototype.newEdge = function (source, target, vEdge) {
    return new cholaEdge(source, target, vEdge);
};

/**
 * This method returns the node separation amount for this layout.
 */
cholaLayout.prototype.getNodeSeparation = function () {
    return this.nodeSeparation;
};

/**
 * This method establishes the GraphManager object related to this layout. Each compound(LGraph) is cholaCircle except
 * for the root.
 * @param nodes: All nodes in the graph
 * @param edges: All edges in the graph
 * @param clusters: Array of cluster ID arrays. Each array represents a cluster where ID ∈ {0,1,2,..,n(# of clusters)}
 *
 * Notes:
 * -> For unclustered nodes, their clusterID is -1.
 * -> cholaNode that corresponds to a cluster has no ID property.
 */
cholaLayout.prototype.convertToClusteredGraph = function (nodes, edges, clusters) {
    var _this = this;

    var self = this;
    var idToLNode = {};
    var rootGraph = this.graphManager.getRoot();

    // Firstly, lets create a HashMap to get node properties easier
    var idToCytoscapeNode = new HashMap();
    for (var i = 0; i < nodes.length; i++) {
        idToCytoscapeNode.put(nodes[i].data('id'), nodes[i]);
    }

    // If it is a function just change it
    if (typeof clusters === "function") {
        var cIDs = [];
        var temp = [];

        for (var _i = 0; _i < nodes.length; _i++) {
            var cID = clusters(nodes[_i]);
            if (cID > 0 && cID !== null && cID !== undefined) {
                var index = cIDs.indexOf(cID);
                if (index > -1) {
                    temp[index].push(nodes[_i].data('id'));
                } else {
                    cIDs.push(cID);
                    temp.push([nodes[_i].data('id')]);
                }
            }
        }
        clusters = temp;
    }

    // lets add the nodes in clusters to the GraphManager

    var _loop = function _loop(_i2) {
        if (clusters[_i2].length === 0) return 'continue';

        // Create a cholaNode for the cluster
        var clusterNode = _this.newNode(null);

        // ClusterID ∈ {0,1,2,..,n(# of clusters)}
        clusterNode.setClusterId(_i2);

        // Add it rootGraph
        rootGraph.add(clusterNode);

        // Create the associated Circle representing the cluster and link them together
        var circle = _this.newCircleLGraph(null);
        _this.graphManager.add(circle, clusterNode);

        // Set bigger margins so clusters are spaced out nicely
        circle.margin = circle.margin + 15;

        // Move each node of the cluster into this circle
        clusters[_i2].forEach(function (nodeID) {
            var cytoNode = idToCytoscapeNode.get(nodeID);
            var dimensions = cytoNode.layoutDimensions({
                nodeDimensionsIncludeLabels: false
            });
            // Adding a node into the circle
            var cholaNode = self.newcholaOnCircleNode(new PointD(cytoNode.position('x') - dimensions.w / 2, cytoNode.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h)));
            cholaNode.setId(nodeID);
            cholaNode.setClusterId(_i2);
            circle.getOnCircleNodes().push(cholaNode);
            circle.add(cholaNode);

            // Initially all on-circle nodes are assumed to be in-nodes
            circle.getInNodes().push(cholaNode);

            // Map the node
            idToLNode[cholaNode.getId()] = cholaNode;
        });
    };

    for (var _i2 = 0; _i2 < clusters.length; _i2++) {
        var _ret = _loop(_i2);

        if (_ret === 'continue') continue;
    }

    // Now, add unclustered nodes to the GraphManager

    var _loop2 = function _loop2(_i3) {
        var clustered = false;

        clusters.forEach(function (cluster) {
            if (cluster.includes(nodes[_i3].data('id'))) clustered = true;
        });

        if (!clustered) {
            var cytoNode = nodes[_i3];
            var dimensions = cytoNode.layoutDimensions({
                nodeDimensionsIncludeLabels: false
            });
            var _cholaNode = _this.newNode(new PointD(cytoNode.position('x') - dimensions.w / 2, cytoNode.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h)));
            _cholaNode.setClusterId(-1);
            _cholaNode.setId(nodes[_i3].data('id'));
            rootGraph.add(_cholaNode);

            // Map the node
            idToLNode[_cholaNode.getId()] = _cholaNode;
        }
    };

    for (var _i3 = 0; _i3 < nodes.length; _i3++) {
        _loop2(_i3);
    }

    // Lastly, add all edges
    for (var _i4 = 0; _i4 < edges.length; _i4++) {
        var e = edges[_i4];
        var sourceNode = idToLNode[e.data("source")];
        var targetNode = idToLNode[e.data("target")];
        var sourceClusterID = sourceNode.getClusterId();
        var targetClusterID = targetNode.getClusterId();

        if (sourceNode === targetNode) continue;

        var _cholaEdge = self.newEdge(sourceNode, targetNode, null);

        // Edge is intracluster
        // Remember: If source or target is unclustered then edge is Not intracluster
        if (sourceClusterID === targetClusterID && sourceClusterID !== -1 && targetClusterID !== -1) {
            _cholaEdge.isIntraCluster = true;
            _cholaEdge.getSource().getOwner().add(_cholaEdge, _cholaEdge.getSource(), _cholaEdge.getTarget());
        } else {
            _cholaEdge.isIntraCluster = false;
            this.graphManager.add(_cholaEdge, _cholaEdge.getSource(), _cholaEdge.getTarget());
        }
    }

    // Populate the references of GraphManager
    var onCircleNodes = [];
    var nonOnCircleNodes = [];
    var allNodes = this.graphManager.getAllNodes();
    for (var _i5 = 0; _i5 < allNodes.length; _i5++) {
        if (allNodes[_i5].getOnCircleNodeExt()) {
            onCircleNodes.push(allNodes[_i5]);
        } else {
            nonOnCircleNodes.push(allNodes[_i5]);
        }
    }

    this.graphManager.setOnCircleNodes(onCircleNodes);
    this.graphManager.setNonOnCircleNodes(nonOnCircleNodes);

    // Deternine out-nodes of each circle
    this.graphManager.edges.forEach(function (e) {
        var sourceNode = e.getSource();
        var targetNode = e.getTarget();
        var sourceClusterID = sourceNode.getClusterId();
        var targetClusterID = targetNode.getClusterId();

        // If an on-circle node is an out-node, then remove it from the
        // in-node list and add it to out-node list of the associated
        // circle. Notice that one or two ends of an inter-graph edge will
        // be out-node(s).
        if (sourceClusterID !== -1) {
            var _circle = sourceNode.getOwner();

            // Make sure it has not been already moved to the out node list
            var _index = _circle.getInNodes().indexOf(sourceNode);
            if (_index > -1) {
                _circle.getInNodes().splice(_index, 1);
                _circle.getOutNodes().push(sourceNode);
            }
        }

        if (targetClusterID !== -1) {
            var _circle2 = targetNode.getOwner();

            // Make sure it has not been already moved to the out node list
            var _index2 = _circle2.getInNodes().indexOf(targetNode);
            if (_index2 > -1) {
                _circle2.getInNodes().splice(_index2, 1);
                _circle2.getOutNodes().push(targetNode);
            }
        }
    });

    return idToLNode;
};

/**
 * This method runs AVSDF layout for each cluster.
 */
cholaLayout.prototype.doStep1 = function () {
    this.step = cholaLayout.STEP_1;
    this.phase = cholaLayout.PHASE_OTHER;

    // Mapping for transferring positions and dimensions back
    var cholaToAvsdf = new HashMap();

    var allGraphs = this.graphManager.getGraphs();
    for (var i = 0; i < allGraphs.length; i++) {
        var _graph = allGraphs[i];

        // Skip the root graph which is a normal LGraph
        if (_graph instanceof cholaCircle) {
            // Create the AVSDF layout objects
            AVSDFConstants.DEFAULT_NODE_SEPARATION = this.nodeSeparation;
            var avsdfLayout = new AVSDFLayout();
            var _avsdfCircle = avsdfLayout.graphManager.addRoot();
            var clusteredNodes = _graph.getOnCircleNodes();

            // Create corresponding AVSDF nodes in current cluster
            for (var _i6 = 0; _i6 < clusteredNodes.length; _i6++) {
                var cholaOnCircleNode = clusteredNodes[_i6];

                var avsdfNode = avsdfLayout.newNode(null);
                var loc = cholaOnCircleNode.getLocation();
                avsdfNode.setLocation(loc.x, loc.y);
                avsdfNode.setWidth(cholaOnCircleNode.getWidth());
                avsdfNode.setHeight(cholaOnCircleNode.getHeight());
                _avsdfCircle.add(avsdfNode);

                cholaToAvsdf.put(cholaOnCircleNode, avsdfNode);
            }

            // For each edge, create a corresponding AVSDF edge if its both ends
            // are in this cluster.
            var allEdges = this.getAllEdges();
            for (var _i7 = 0; _i7 < allEdges.length; _i7++) {
                var edge = allEdges[_i7];

                if (clusteredNodes.includes(edge.getSource()) && clusteredNodes.includes(edge.getTarget())) {
                    var avsdfSource = cholaToAvsdf.get(edge.getSource());
                    var avsdfTarget = cholaToAvsdf.get(edge.getTarget());
                    var avsdfEdge = avsdfLayout.newEdge("");

                    _avsdfCircle.add(avsdfEdge, avsdfSource, avsdfTarget);
                }
            }

            // Run AVSDF layout
            avsdfLayout.layout();

            // Do post-processing
            var sortedByDegreeList = avsdfLayout.initPostProcess();
            for (var _i8 = 0; _i8 < sortedByDegreeList.length; _i8++) {
                avsdfLayout.oneStepPostProcess(sortedByDegreeList[_i8]);
            }
            avsdfLayout.updateNodeAngles();
            avsdfLayout.updateNodeCoordinates();

            // Reflect changes back to cholaNode's
            for (var _i9 = 0; _i9 < clusteredNodes.length; _i9++) {
                var _cholaOnCircleNode = clusteredNodes[_i9];
                var _avsdfNode = cholaToAvsdf.get(_cholaOnCircleNode);
                var _loc = _avsdfNode.getLocation();
                _cholaOnCircleNode.setLocation(_loc.x, _loc.y);
                _cholaOnCircleNode.getOnCircleNodeExt().setIndex(_avsdfNode.getIndex());
                _cholaOnCircleNode.getOnCircleNodeExt().setAngle(_avsdfNode.getAngle());
            }

            // Sort nodes of this cholaCircle according to circle indexes of
            // cholaOnCircleNodes.
            clusteredNodes.sort(function (a, b) {
                return a.getOnCircleNodeExt().getIndex() - b.getOnCircleNodeExt().getIndex();
            });

            // Assign width and height of the AVSDF circle containing the nodes
            // above to the corresponding chola-circle.
            if (_avsdfCircle.getNodes().length > 0) {
                var parentchola = _graph.getParent();
                var parentAVSDF = _avsdfCircle.getParent();
                parentchola.setLocation(parentAVSDF.getLocation().x, parentAVSDF.getLocation().y);
                _graph.setRadius(_avsdfCircle.getRadius());
                _graph.calculateParentNodeDimension();
            }
        }
    }if (avsdfCircle.getNodes().length > 0) {
        var _parentchola = graph.getParent();
        var _parentAVSDF = avsdfCircle.getParent();
        _parentchola.setLocation(_parentAVSDF.getLocation().x, _parentAVSDF.getLocation().y);
        graph.setRadius(avsdfCircle.getRadius());
        graph.calculateParentNodeDimension();
    }

    //  }
    //}
};

/**
 * This method runs a spring embedder on the cluster-graph (quotient graph
 * of the clustered graph) to determine initial layout.
 */
cholaLayout.prototype.doStep2 = function () {
    this.step = cholaLayout.STEP_2;
    this.phase = cholaLayout.PHASE_OTHER;
    var newCoSENodes = [];
    var newCoSEEdges = [];

    // Used for holding conversion mapping between chola and cose nodes.
    var cholaNodeToCoseNode = new HashMap();

    // Used for reverse mapping between cose and chola edges while sorting
    // incident edges.
    var coseEdgeTocholaEdges = new HashMap();

    // Create a CoSE layout object
    var coseLayout = new CoSELayout();
    coseLayout.isSubLayout = false;
    coseLayout.useMultiLevelScaling = false;
    coseLayout.useFRGridVariant = true;
    coseLayout.springConstant *= 1.5;

    var gm = coseLayout.newGraphManager();
    var coseRoot = gm.addRoot();

    // Traverse through all nodes and create new CoSENode's.
    // !WARNING! = REMEMBER to set unique "id" properties to CoSENodes!!!!
    var nonOnCircleNodes = this.graphManager.getNonOnCircleNodes();
    for (var i = 0; i < nonOnCircleNodes.length; i++) {
        var _cholaNode2 = nonOnCircleNodes[i];

        var newNode = coseLayout.newNode(null);
        var loc = _cholaNode2.getLocation();
        newNode.setLocation(loc.x, loc.y);
        newNode.setWidth(_cholaNode2.getWidth());
        newNode.setHeight(_cholaNode2.getHeight());

        // Set nodes corresponding to circles to be larger than original, so
        // inter-cluster edges end up longer.
        if (_cholaNode2.getChild() != null) {
            newNode.setWidth(1.2 * newNode.getWidth());
            newNode.setHeight(1.2 * newNode.getHeight());
        }

        // !WARNING! = CoSE EXPECTS "id" PROPERTY IMPLICITLY, REMOVING IT WILL CAUSE TILING TO OCCUR ON THE WHOLE GRAPH
        newNode.id = i;

        coseRoot.add(newNode);
        newCoSENodes.push(newNode);
        cholaNodeToCoseNode.put(_cholaNode2, newNode);
    }

    // Used for preventing duplicate edge creation between two cose nodes
    var nodePairs = new Array(newCoSENodes.length);
    for (var _i10 = 0; _i10 < nodePairs.length; _i10++) {
        nodePairs[_i10] = new Array(newCoSENodes.length);
    }

    // Traverse through edges and create cose edges for inter-cluster ones.
    var allEdges = this.graphManager.getAllEdges();
    for (var _i11 = 0; _i11 < allEdges.length; _i11++) {
        var _cholaEdge2 = allEdges[_i11];
        var sourcechola = _cholaEdge2.getSource();
        var targetchola = _cholaEdge2.getTarget();

        // Determine source and target nodes for current edge
        if (sourcechola.getOnCircleNodeExt() != null) {
            // Source node is an on-circle node, take its parent as source node
            sourcechola = _cholaEdge2.getSource().getOwner().getParent();
        }
        if (targetchola.getOnCircleNodeExt() != null) {
            // Target node is an on-circle node, take its parent as target node
            targetchola = _cholaEdge2.getTarget().getOwner().getParent();
        }

        var sourceCose = cholaNodeToCoseNode.get(sourcechola);
        var targetCose = cholaNodeToCoseNode.get(targetchola);
        var sourceIndex = newCoSENodes.indexOf(sourceCose);
        var targetIndex = newCoSENodes.indexOf(targetCose);

        var newEdge = void 0;
        if (sourceIndex !== targetIndex) {
            // Make sure it's an inter-cluster edge

            if (nodePairs[sourceIndex][targetIndex] == null && nodePairs[targetIndex][sourceIndex] == null) {
                newEdge = coseLayout.newEdge(null);
                coseRoot.add(newEdge, sourceCose, targetCose);
                newCoSEEdges.push(newEdge);

                coseEdgeTocholaEdges.put(newEdge, []);

                nodePairs[sourceIndex][targetIndex] = newEdge;
                nodePairs[targetIndex][sourceIndex] = newEdge;
            } else {
                newEdge = nodePairs[sourceIndex][targetIndex];
            }

            coseEdgeTocholaEdges.get(newEdge).push(_cholaEdge2);
        }
    }

    // Run CoSELayout
    coseLayout.runLayout();

    // Reflect changes back to chola nodes
    // First update all non-on-circle nodes.
    for (var _i12 = 0; _i12 < nonOnCircleNodes.length; _i12++) {
        var _cholaNode3 = nonOnCircleNodes[_i12];
        var coseNode = cholaNodeToCoseNode.get(_cholaNode3);
        var _loc2 = coseNode.getLocation();
        _cholaNode3.setLocation(_loc2.x, _loc2.y);
    }

    // Then update all chola on-circle nodes, since their parents have
    // changed location.

    var onCircleNodes = this.graphManager.getOnCircleNodes();

    for (var _i13 = 0; _i13 < onCircleNodes.length; _i13++) {
        var _cholaNode4 = onCircleNodes[_i13];
        var _loc3 = _cholaNode4.getLocation();
        var parentLoc = _cholaNode4.getOwner().getParent().getLocation();
        _cholaNode4.setLocation(_loc3.x + parentLoc.x, _loc3.y + parentLoc.y);
    }
};

/**
 * This method runs a modified spring embedder as described by the chola
 * layout algorithm where the on-circle nodes are fixed (pinned down to
 * the location on their owner circle). Circles, however, are allowed to be
 * flipped (i.e. nodes are re-ordered in the reverse direction) if reversal
 * yields a better aligned neighborhood (w.r.t. its inter-graph edges).
 */
cholaLayout.prototype.step3Init = function () {
    this.step = cholaLayout.STEP_3;
    this.phase = cholaLayout.PHASE_OTHER;
    this.initSpringEmbedder();
    this.coolingCycle = 0;
};

/**
 * This method runs a modified spring embedder as described by the chola
 * layout algorithm where the neighboring on-circle nodes are allowed to
 * move by swapping without increasing crossing number but circles are not
 * allowed to be flipped.
 */
cholaLayout.prototype.step4Init = function () {
    this.step = cholaLayout.STEP_4;
    this.phase = cholaLayout.PHASE_OTHER;
    this.initSpringEmbedder();
    for (var i = 0; i < this.graphManager.getOnCircleNodes().length; i++) {
        this.graphManager.getOnCircleNodes()[i].getOnCircleNodeExt().updateSwappingConditions();
    }
    this.coolingCycle = 0;
};

/**
 * This method runs a modified spring embedder as described by the chola
 * layout algorithm where the on-circle nodes are fixed (pinned down to
 * the location on their owner circle) and circles are not allowed to be
 * flipped.
 */
cholaLayout.prototype.step5Init = function () {
    this.step = cholaLayout.STEP_5;
    this.phase = cholaLayout.PHASE_OTHER;
    this.initSpringEmbedder();
    this.coolingCycle = 0;
};

/**
 * This method implements a spring embedder used by steps 3 thru 5 with
 * potentially different parameters.
 *
 */
cholaLayout.prototype.runSpringEmbedderTick = function () {
    // This function uses iterations but FDLayout uses this.totalIterations
    this.iterations++;
    this.totalIterations = this.iterations;

    if (this.iterations % cholaConstants.CONVERGENCE_CHECK_PERIOD === 0) {
        // In step 4 make sure at least a 1/4 of max iters take place
        var notTooEarly = this.step !== cholaLayout.STEP_4 || this.iterations > this.maxIterations / 4;

        if (notTooEarly && this.isConverged()) {
            return true;
        }

        // Cooling factor descend function
        //this.coolingFactor = this.initialCoolingFactor * Math.pow( 1 - 0.005 , this.iterations) ;

        this.coolingFactor = this.initialCoolingFactor * ((this.maxIterations - this.iterations) / this.maxIterations);
    }

    this.totalDisplacement = 0;

    if (this.step === cholaLayout.STEP_3) {
        if (this.iterations % cholaConstants.REVERSE_PERIOD === 0) {
            this.checkAndReverseIfReverseIsBetter();
        }
    } else if (this.step === cholaLayout.STEP_4) {
        // clear history every now and then
        if (this.iterations % cholaConstants.SWAP_HISTORY_CLEARANCE_PERIOD === 0) {
            this.swappedPairsInLastIteration = [];
        }

        // no of iterations in this swap period
        var iterationInPeriod = this.iterations % cholaConstants.SWAP_PERIOD;

        if (iterationInPeriod >= cholaConstants.SWAP_IDLE_DURATION) {
            this.phase = cholaLayout.PHASE_SWAP_PREPERATION;
        } else if (iterationInPeriod === 0) {
            this.phase = cholaLayout.PHASE_PERFORM_SWAP;
        } else {
            this.phase = cholaLayout.PHASE_OTHER;
        }
    }

    this.calcSpringForces();
    this.calcRepulsionForces();
    this.calcGravitationalForces();
    this.calcTotalForces();
    this.moveNodes();

    return this.iterations >= this.maxIterations;
};

/**
 * This method prepares circles for possible reversal by computing the order
 * matrix of each circle. It also determines any circles that should never
 * be reversed (e.g. when it has no more than 1 inter-cluster edge).
 */

cholaLayout.prototype.prepareCirclesForReversal = function () {
    var nodes = this.graphManager.getRoot().getNodes();
    nodes.forEach(function (node) {
        var circle = node.getChild();
        if (circle !== null && circle !== undefined) {
            //It is a circle
            if (circle.getInterClusterEdges().length < 2) circle.setMayNotBeReversed();

            circle.computeOrderMatrix();
        }
    });
};

/**
 * This method calculates the ideal edge length of each edge. Here we relax
 * edge lengths in the polishing step and keep the edge lengths of the edges
 * incident with inner-nodes very short to avoid overlaps.
 */
cholaLayout.prototype.calcIdealEdgeLengths = function (isPolishingStep) {
    var lEdges = this.graphManager.getAllEdges();
    for (var i = 0; i < lEdges.length; i++) {
        var edge = lEdges[i];

        // Loosen in the polishing step to avoid overlaps
        if (isPolishingStep) edge.idealLength = 1.5 * this.idealEdgeLength * this.idealInterClusterEdgeLengthCoefficient;else edge.idealLength = this.idealEdgeLength * this.idealInterClusterEdgeLengthCoefficient;
    }

    // Update in-nodes edge's lengths
    var lNodes = this.graphManager.getInCircleNodes();
    for (var _i14 = 0; _i14 < lNodes.length; _i14++) {
        var node = lNodes[_i14];

        node.getEdges().forEach(function (edge) {
            edge.idealLength = cholaConstants.DEFAULT_INNER_EDGE_LENGTH;
        });
    }
};

/**
 * This method calculates the spring forces applied to end nodes of each
 * edge. In steps 3 & 5, where on-circle nodes are not allowed to move,
 * intra-cluster edges are ignored (as their total will equal zero and won't
 * have an affect on the owner circle).
 */
cholaLayout.prototype.calcSpringForces = function () {
    var lEdges = this.graphManager.getAllEdges();
    for (var i = 0; i < lEdges.length; i++) {
        var edge = lEdges[i];
        var source = edge.getSource();
        var target = edge.getTarget();

        // Ignore intra-cluster edges (all steps 3 thru 5) except for those
        // incident w/ any inner-nodes
        if (edge.isIntraCluster && source.getOnCircleNodeExt() != null && target.getOnCircleNodeExt() != null) {
            continue;
        }

        this.calcSpringForce(edge, edge.idealLength);
    }
};

/**
 * This method calculates the repulsion forces for each pair of nodes.
 * Repulsions need not be calculated for on-circle nodes.
 */
cholaLayout.prototype.calcRepulsionForces = function () {
    var lNodes = this.graphManager.getNonOnCircleNodes();
    for (var i = 0; i < lNodes.length; i++) {
        var nodeA = lNodes[i];
        for (var j = i + 1; j < lNodes.length; j++) {
            var nodeB = lNodes[j];

            this.calcRepulsionForce(nodeA, nodeB);
        }
    }

    // We need the calculate repulsion forces for in-circle nodes as well
    // to keep them inside circle.
    var inCircleNodes = this.graphManager.getInCircleNodes();
    for (var _i15 = 0; _i15 < inCircleNodes.length; _i15++) {
        var inCircleNode = inCircleNodes[_i15];
        var ownerCircle = inCircleNode.getOwner();

        //TODO: inner nodes repulse on-circle nodes as well, not desired!
        // Calculate repulsion forces with all nodes inside the owner circle
        // of this inner node.

        var childNodes = ownerCircle.getNodes();
        for (var _i16 = 0; _i16 < childNodes.length; _i16++) {
            var childcholaNode = childNodes[_i16];

            if (childcholaNode !== inCircleNode) {
                this.calcRepulsionForce(inCircleNode, childcholaNode);
            }
        }
    }
};

/**
 * This method calculates the gravitational forces for each node. On-circle
 * nodes move with their owner; thus they are not applied separate gravity.
 */
cholaLayout.prototype.calcGravitationalForces = function () {
    if (!this.graphManager.rootGraph.isConnected) {
        var _lNodes = this.graphManager.getNonOnCircleNodes();

        for (var i = 0; i < _lNodes.length; i++) {
            var node = _lNodes[i];
            this.calcGravitationalForce(node);
        }
    }

    // Calculate gravitational forces to keep in-circle nodes in the center
    // TODO: is this really helping or necessary?
    var lNodes = this.graphManager.getInCircleNodes();

    for (var _i17 = 0; _i17 < lNodes.length; _i17++) {
        var _node = lNodes[_i17];
        this.calcGravitationalForce(_node);
    }
};

/**
 * This method adds up all the forces calculated earlier transferring forces
 * of on-circle nodes to their owner node (as regular and rotational forces)
 * when they are not allowed to move. When they are allowed to move,
 * on-circle nodes will partially contribute to the forces of their owner
 * circle (no rotational contribution).
 */
cholaLayout.prototype.calcTotalForces = function () {
    var allNodes = this.graphManager.getAllNodes();

    for (var i = 0; i < allNodes.length; i++) {
        var node = allNodes[i];

        node.displacementX = this.coolingFactor * (node.springForceX + node.repulsionForceX + node.gravitationForceX);
        node.displacementY = this.coolingFactor * (node.springForceY + node.repulsionForceY + node.gravitationForceY);

        node.rotationAmount = 0.0;

        node.springForceX = 0.0;
        node.springForceY = 0.0;
        node.repulsionForceX = 0.0;
        node.repulsionForceY = 0.0;
        node.gravitationForceX = 0.0;
        node.gravitationForceY = 0.0;
    }

    var onCircleNodes = this.graphManager.getOnCircleNodes();
    for (var _i18 = 0; _i18 < onCircleNodes.length; _i18++) {
        var _node2 = onCircleNodes[_i18];
        var parentNode = _node2.getOwner().getParent();
        var values = _node2.getOwner().decomposeForce(_node2);

        if (this.phase === cholaLayout.PHASE_SWAP_PREPERATION) {
            _node2.getOnCircleNodeExt().addDisplacementForSwap(values.getRotationAmount());
        }

        parentNode.displacementX += values.getDisplacementX();
        parentNode.displacementY += values.getDisplacementY();
        _node2.displacementX = 0.0;
        _node2.displacementY = 0.0;

        parentNode.rotationAmount += values.getRotationAmount();
        _node2.rotationAmount = 0.0;
    }
};

/**
 * This method updates positions of each node at the end of an iteration.
 * Also, it deals with swapping of two consecutive nodes on a circle in
 * step 4.
 */
cholaLayout.prototype.moveNodes = function () {
    if (this.phase !== cholaLayout.PHASE_PERFORM_SWAP) {
        var nonOnCircleNodes = this.graphManager.getNonOnCircleNodes();

        // Simply move all non-on-circle nodes.
        for (var i = 0; i < nonOnCircleNodes.length; i++) {
            nonOnCircleNodes[i].move();

            // Also make required rotations for circles
            if (nonOnCircleNodes[i].getChild() !== null && nonOnCircleNodes[i].getChild() !== undefined) {
                nonOnCircleNodes[i].getChild().rotate();
            }
        }

        // Also move all in-circle nodes. Note that in-circle nodes will be
        // empty if this option is not set, hence no negative effect on
        // performance

        var inCircleNodes = this.graphManager.getInCircleNodes();
        var inCircleNode = void 0;

        for (var _i19 = 0; _i19 < inCircleNodes.length; _i19++) {
            inCircleNode = inCircleNodes[_i19];
            // TODO: workaround to force inner nodes to stay inside
            inCircleNode.displacementX /= 20.0;
            inCircleNode.displacementY /= 20.0;
            inCircleNode.move();
        }
    } else {
        // If in perform-swap phase of step 4, we have to look for swappings
        // that do not increase edge crossings and is likely to decrease total
        // energy.
        var cholaOnCircleNodes = this.graphManager.getOnCircleNodes();
        var size = cholaOnCircleNodes.length;

        // Both nodes of a pair are out-nodes, not necessarilly safe due to
        // inter-cluster edge crossings
        // TODO It should be a max heap structure
        var nonSafePairs = [];

        // Pairs where one of the on circle nodes is an in-node; no problem
        // swapping these
        var safePairs = [];

        // Nodes swapped in this round
        var swappedNodes = [];

        // Pairs swapped or prevented from being swapped in this round
        var swappedPairs = [];

        var firstNode = void 0;
        var secondNode = void 0;
        var firstNodeExt = void 0;
        var secondNodeExt = void 0;
        var firstNodeDisp = void 0;
        var secondNodeDisp = void 0;
        var discrepancy = void 0;
        var inSameDirection = void 0;

        // Check each node with its next node for swapping
        for (var _i20 = 0; _i20 < size; _i20++) {
            firstNode = cholaOnCircleNodes[_i20];
            secondNode = firstNode.getOnCircleNodeExt().getNextNode();
            firstNodeExt = firstNode.getOnCircleNodeExt();
            secondNodeExt = secondNode.getOnCircleNodeExt();

            // Ignore if the swap is to introduce new intra-edge crossings
            if (!firstNodeExt.canSwapWithNext || !secondNodeExt.canSwapWithPrev) continue;

            firstNodeDisp = firstNodeExt.getDisplacementForSwap();
            secondNodeDisp = secondNodeExt.getDisplacementForSwap();
            discrepancy = firstNodeDisp - secondNodeDisp;

            // Pulling in reverse directions, no swap
            if (discrepancy < 0.0) continue;

            // Might swap, create safe or nonsafe node pairs
            inSameDirection = firstNodeDisp > 0 && secondNodeDisp > 0 || firstNodeDisp < 0 && secondNodeDisp < 0;
            var pair = new cholaOnCircleNodePair(firstNode, secondNode, discrepancy, inSameDirection);

            // When both are out-nodes, nonsafe; otherwise, safe
            if (firstNodeDisp === 0.0 || secondNodeDisp === 0.0) safePairs.push(pair);else nonSafePairs.push(pair);
        }

        var nonSafePair = void 0;
        var lookForSwap = true;
        var rollback = void 0;

        // TODO max heap -> extractMax
        nonSafePairs.sort(function (a, b) {
            return a.getDiscrepancy() - b.getDiscrepancy();
        });

        // Look for a nonsafe pair until we swap one
        while (lookForSwap && nonSafePairs.length > 0) {
            // Pick the non safe pair that has the maximum discrepancy.
            nonSafePair = nonSafePairs[nonSafePairs.length - 1];
            firstNode = nonSafePair.getFirstNode();
            secondNode = nonSafePair.getSecondNode();
            firstNodeExt = firstNode.getOnCircleNodeExt();
            secondNodeExt = secondNode.getOnCircleNodeExt();

            // If this pair is swapped in previous swap phase, don't allow
            // this swap. Also save it for the future as if it is actually
            // swapped in order to prevent future oscilations
            if (this.isSwappedPreviously(nonSafePair)) {
                nonSafePairs.pop();
                swappedPairs.push(nonSafePair);
                continue;
            }

            // Check for inter-cluster edge crossings before swapping.
            var int1 = firstNodeExt.getInterClusterIntersections(secondNodeExt);

            // Try a swap
            nonSafePair.swap();
            rollback = false;

            // Then re-compute crossings
            var int2 = firstNodeExt.getInterClusterIntersections(secondNodeExt);

            // Possible cases regarding discrepancy:
            // first  second  action
            // +      +       both clockwise: might swap if disp > 0
            // +      -       disp > 0: might swap
            // -      -       both counter-clockwise: might swap if disp > 0
            // -      +       disp <= 0: no swap

            // Under following conditions roll swap back:
            // - swap increases inter-cluster edge crossings
            // - inter-cluster edge number is the same but pulling in the
            // same direction or discrepancy is below pre-determined
            // threshold (not enough for swap)

            rollback = int2 > int1;

            if (!rollback && int2 === int1) {
                rollback = nonSafePair.inSameDirection() || nonSafePair.getDiscrepancy() < cholaConstants.MIN_DISPLACEMENT_FOR_SWAP;
            }

            if (rollback) {
                nonSafePair.swap();
                nonSafePairs.pop();
                continue;
            }

            swappedNodes.push(nonSafePair.getFirstNode());
            swappedNodes.push(nonSafePair.getSecondNode());
            swappedPairs.push(nonSafePair);

            // Swap performed, do not look for another nonsafe pair
            lookForSwap = false;
        }

        // Now process all safe pairs
        for (var _i21 = 0; _i21 < safePairs.length; _i21++) {
            var safePair = safePairs[_i21];

            // Check if discrepancy is above the threshold (enough to swap)
            if (safePair.inSameDirection() || safePair.getDiscrepancy() < cholaConstants.MIN_DISPLACEMENT_FOR_SWAP) {
                continue;
            }

            // Check if they were already involved in a swap in this phase
            if (swappedNodes.includes(safePair.getFirstNode()) || swappedNodes.includes(safePair.getSecondNode())) {
                continue;
            }

            // Should be swapped if not previously swapped; so
            // Check if they were previously swapped
            if (!this.isSwappedPreviously(safePair)) {
                safePair.swap();
                swappedNodes.push(safePair.getFirstNode());
                swappedNodes.push(safePair.getSecondNode());
            }

            // Mark swapped (even if not) to prevent future oscillations
            swappedPairs.push(safePair);
        }

        // Update swap history
        this.swappedPairsInLastIteration = [];
        for (var _i22 = 0; _i22 < swappedPairs.length; _i22++) {
            this.swappedPairsInLastIteration.push(swappedPairs[_i22]);
        }

        // Reset all discrepancy values of on circle nodes.
        var node = void 0;

        for (var _i23 = 0; _i23 < size; _i23++) {
            node = cholaOnCircleNodes[_i23];
            node.getOnCircleNodeExt().setDisplacementForSwap(0.0);
        }
    }
};

/*
 * This method returns whether or not the input node pair was previously
 * swapped.
 */
cholaLayout.prototype.isSwappedPreviously = function (pair) {
    for (var i = 0; i < this.swappedPairsInLastIteration.length; i++) {
        var swappedPair = this.swappedPairsInLastIteration[i];

        if (swappedPair.getFirstNode() === pair.getFirstNode() && swappedPair.getSecondNode() === pair.getSecondNode() || swappedPair.getSecondNode() === pair.getFirstNode() && swappedPair.getFirstNode() === pair.getSecondNode()) {
            return true;
        }
    }

    return false;
};

/**
* This method tries to improve the edge crossing number by reversing a
* cluster (i.e., the order of the nodes in the cluster such as C,B,A
* instead of A,B,C). No more than one reversal is performed with each
* execution. The decision is based on the global sequence alignment
* heuristic (typically used in biological sequence alignment). A cluster
* that was previsouly reversed is not a candidate for reversal to avoid
* oscillations. It returns true if a reversal has been performed.
*/
cholaLayout.prototype.checkAndReverseIfReverseIsBetter = function () {
    var gm = this.getGraphManager();

    // For each cluster (in no particular order) check to see whether
    // reversing the order of the nodes on the cluster could improve on
    // inter-graph edge crossing number of that cluster.

    var nodeIterator = gm.getRoot().getNodes();
    var node = void 0;
    var circle = void 0;

    for (var i = 0; i < nodeIterator.length; i++) {
        node = nodeIterator[i];
        circle = node.getChild();

        if (circle != null && circle.getMayBeReversed() && circle.getNodes().length <= 52) {
            if (circle.checkAndReverseIfReverseIsBetter()) {
                return true;
            }
        }
    }

    return false;
};

/**
 * This method goes over all circles and tries to find nodes that can be
 * moved inside the circle. Inner nodes are found and moved inside one at a
 * time. This process continues for a circle until either there is no inner
 * node or reached max inner nodes for that circle.
 */
cholaLayout.prototype.findAndMoveInnerNodes = function () {
    if (!this.allowNodesInsideCircle) {
        return;
    }

    var graphs = this.graphManager.getGraphs();
    for (var i = 0; i < graphs.length; i++) {
        var _cholaCircle = graphs[i];

        // Count inner nodes not to exceed user defined maximum
        var innerNodeCount = 0;

        if (_cholaCircle !== this.getGraphManager().getRoot()) {
            // It is a user parameter, retrieve it.
            var maxInnerNodes = _cholaCircle.getNodes().length * this.maxRatioOfNodesInsideCircle;

            // Look for an inner node and move it inside
            var innerNode = this.findInnerNode(_cholaCircle);

            while (innerNode !== null && innerNode !== undefined && innerNodeCount < maxInnerNodes) {
                this.moveInnerNode(innerNode);
                innerNodeCount++;

                if (innerNodeCount < maxInnerNodes) {
                    innerNode = this.findInnerNode(_cholaCircle);
                }
            }
        }
    }
};

/**
 * This method finds an inner node (if any) in the given circle.
 */
cholaLayout.prototype.findInnerNode = function (cholaCircle) {
    var innerNode = null;
    var onCircleNodeCount = cholaCircle.getOnCircleNodes().length;

    // First sort the nodes in the circle according to their degrees.
    var sortedNodes = cholaCircle.getOnCircleNodes();
    sortedNodes.sort(function (a, b) {
        return a.getEdges().length - b.getEdges().length;
    });

    // Evaluate each node as possible candidate
    for (var i = onCircleNodeCount - 1; i >= 0 && innerNode == null; i--) {
        var candidateNode = sortedNodes[i];

        // Out nodes cannot be moved inside, so just skip them
        if (candidateNode.getOnCircleNodeExt().getInterClusterEdges().length !== 0) {
            continue;
        }

        var circleSegment = this.findMinimalSpanningSegment(candidateNode);

        // Skip nodes with no neighbors (circle segment will be empty)
        if (circleSegment.length === 0) {
            continue;
        }

        // For all nodes in the spanning circle segment, check if that node
        // is connected to another node on the circle with an index diff of
        // greater than 1 (i.e. connected to a non-immediate neighbor)

        var connectedToNonImmediate = false;

        for (var _i24 = 0; _i24 < circleSegment.length; _i24++) {
            var spanningNode = circleSegment[_i24];

            // Performance improvement: stop iteration if this cannot be
            // an inner node.
            if (connectedToNonImmediate) {
                break;
            }

            // Look for neighbors of this spanning node.
            var neighbors = spanningNode.getNeighborsList();
            for (var j = 0; j < neighbors.length; j++) {
                var neighborOfSpanningNode = neighbors[j];

                // In some case we don't need to look at the neighborhood
                // relationship. We won't care the neighbor of spanning node
                // if:
                // - It is the candidate node
                // - It is on another circle
                // - It is already an inner node.
                if (neighborOfSpanningNode !== candidateNode && neighborOfSpanningNode.getOwner() === cholaCircle && neighborOfSpanningNode.getOnCircleNodeExt() != null && neighborOfSpanningNode.getOnCircleNodeExt() != undefined) {

                    var spanningIndex = spanningNode.getOnCircleNodeExt().getIndex();
                    var neighborOfSpanningIndex = neighborOfSpanningNode.getOnCircleNodeExt().getIndex();

                    // Calculate the index difference between spanning node
                    // and its neighbor
                    var indexDiff = spanningIndex - neighborOfSpanningIndex;
                    indexDiff += onCircleNodeCount; // Get rid of neg. index
                    indexDiff %= onCircleNodeCount; // Mod it

                    // Give one more chance, try reverse order of nodes
                    // just in case.
                    if (indexDiff > 1) {
                        indexDiff = neighborOfSpanningIndex - spanningIndex;
                        indexDiff += onCircleNodeCount; // Get rid of neg.
                        indexDiff %= onCircleNodeCount; // Mod it
                    }

                    // If the diff is still greater 1, this spanning node
                    // has a non-immediate neighbor. Sorry but you cannot
                    // be an inner node. Poor candidate node !!!
                    if (indexDiff > 1) {
                        connectedToNonImmediate = true;
                        // stop computation.
                        break;
                    }
                }
            }
        }

        // If neighbors of candidate node is not connect to a non-immediate
        // neighbor that this can be an inner node.
        if (!connectedToNonImmediate) {
            innerNode = candidateNode;
        }
    }

    return innerNode;
};

/**
 * This method safely removes inner node from circle perimeter (on-circle)
 * and moves them inside their owner circles (as in-circle nodes)
 */
cholaLayout.prototype.moveInnerNode = function (innerNode) {
    var cholaCircle = innerNode.getOwner();

    // Remove the node from the circle first. This forces circle to
    // re-adjust its geometry. A costly operation indeed...
    cholaCircle.moveOnCircleNodeInside(innerNode);

    // We need to also remove the inner node from on-circle nodes list
    // of the associated graph manager
    var onCircleNodesList = this.graphManager.getOnCircleNodes();
    var index = onCircleNodesList.indexOf(innerNode);
    if (index > -1) {
        onCircleNodesList.splice(index, 1);
    }

    this.graphManager.inCircleNodes.push(innerNode);
};

/**
 * This method returns a circular segment (ordered array of nodes),
 * which is the smallest segment that spans neighbors of the given node.
 */
cholaLayout.prototype.findMinimalSpanningSegment = function (node) {
    var segment = [];

    // First create an ordered neighbors list which includes given node and
    // its neighbors and ordered according to their indexes in this circle.
    var orderedNeigbors = node.getOnCircleNeighbors();

    if (orderedNeigbors.length === 0) {
        return segment;
    }

    orderedNeigbors.sort(function (a, b) {
        return a.getOnCircleNodeExt().getIndex() - b.getOnCircleNodeExt().getIndex();
    });

    // According to the order found, find the start and end nodes of the
    // segment by testing each (order adjacent) neighbor pair.
    var orderedNodes = node.getOwner().getOnCircleNodes();
    orderedNodes.sort(function (a, b) {
        return a.getOnCircleNodeExt().getIndex() - b.getOnCircleNodeExt().getIndex();
    });

    var shortestSegmentStartNode = null;
    var shortestSegmentEndNode = null;
    var shortestSegmentLength = orderedNodes.length;
    var segmentLength = orderedNodes.length;
    var neighSize = orderedNeigbors.length;
    var i = void 0;
    var j = void 0;
    var tempSegmentStartNode = void 0;
    var tempSegmentEndNode = void 0;
    var tempSegmentLength = void 0;

    for (i = 0; i < neighSize; i++) {
        j = (i - 1 + neighSize) % neighSize;

        tempSegmentStartNode = orderedNeigbors[i];
        tempSegmentEndNode = orderedNeigbors[j];

        tempSegmentLength = (tempSegmentEndNode.getOnCircleNodeExt().getIndex() - tempSegmentStartNode.getOnCircleNodeExt().getIndex() + segmentLength) % segmentLength + 1;

        if (tempSegmentLength < shortestSegmentLength) {
            shortestSegmentStartNode = tempSegmentStartNode;
            shortestSegmentEndNode = tempSegmentEndNode;
            shortestSegmentLength = tempSegmentLength;
        }
    }

    // After finding start and end nodes for the segment, simply go over
    // ordered nodes and create an ordered list of nodes in the segment

    var segmentEndReached = false;
    var currentNode = shortestSegmentStartNode;

    while (!segmentEndReached) {
        if (currentNode !== node) {
            segment.push(currentNode);
        }

        if (currentNode === shortestSegmentEndNode) {
            segmentEndReached = true;
        } else {
            var nextIndex = currentNode.getOnCircleNodeExt().getIndex() + 1;

            if (nextIndex === orderedNodes.length) {
                nextIndex = 0;
            }

            currentNode = orderedNodes[nextIndex];
        }
    }

    return segment;
};

module.exports = cholaLayout;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LNode = __webpack_require__(0).layoutBase.LNode;
var IMath = __webpack_require__(0).layoutBase.IMath;

function cholaNode(gm, loc, size, vNode) {
  LNode.call(this, gm, loc, size, vNode);
}

cholaNode.prototype = Object.create(LNode.prototype);
for (var prop in LNode) {
  cholaNode[prop] = LNode[prop];
}

cholaNode.prototype.move = function () {
  var layout = this.graphManager.getLayout();
  this.displacementX = layout.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
  this.displacementY = layout.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;

  if (Math.abs(this.displacementX) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementX = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementX);
  }

  if (Math.abs(this.displacementY) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementY = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementY);
  }

  // a simple node, just move it
  if (this.child == null) {
    this.moveBy(this.displacementX, this.displacementY);
  }
  // an empty compound node, again just move it
  else if (this.child.getNodes().length == 0) {
      this.moveBy(this.displacementX, this.displacementY);
    }
    // non-empty compound node, propogate movement to children as well
    else {
        this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
      }

  layout.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY);

  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  this.displacementX = 0;
  this.displacementY = 0;
};

cholaNode.prototype.propogateDisplacementToChildren = function (dX, dY) {
  var nodes = this.getChild().getNodes();
  var node;
  for (var i = 0; i < nodes.length; i++) {
    node = nodes[i];
    if (node.getChild() == null) {
      node.moveBy(dX, dY);
      node.displacementX += dX;
      node.displacementY += dY;
    } else {
      node.propogateDisplacementToChildren(dX, dY);
    }
  }
};

cholaNode.prototype.setPred1 = function (pred1) {
  this.pred1 = pred1;
};

cholaNode.prototype.getPred1 = function () {
  return pred1;
};

cholaNode.prototype.getPred2 = function () {
  return pred2;
};

cholaNode.prototype.setNext = function (next) {
  this.next = next;
};

cholaNode.prototype.getNext = function () {
  return next;
};

cholaNode.prototype.setProcessed = function (processed) {
  this.processed = processed;
};

cholaNode.prototype.isProcessed = function () {
  return processed;
};

module.exports = cholaNode;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var impl = __webpack_require__(1);

// registers the extension on a cytoscape lib ref
var register = function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape('layout', 'chola', impl); // register with cytoscape.js
};

if (typeof cytoscape !== 'undefined') {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}

module.exports = register;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// n.b. .layoutPositions() handles all these options for you

var cholaLayout = __webpack_require__(6);
//let cholaConstants = require('../chola/cholaConstants');

var assign = __webpack_require__(2);

var defaults = Object.freeze({
  // animation
  animate: undefined, // whether or not to animate the layout
  animationDuration: undefined, // duration of animation in ms, if enabled
  animationEasing: undefined, // easing of animation, if enabled
  animateFilter: function animateFilter(node, i) {
    return true;
  }, // whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions

  // viewport
  pan: undefined, // pan the graph to the provided position, given as { x, y }
  zoom: undefined, // zoom level as a positive number to set after animation
  fit: undefined, // fit the viewport to the repositioned nodes, overrides pan and zoom

  // modifications
  padding: undefined, // padding around layout
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  spacingFactor: undefined, // a positive value which adjusts spacing between nodes (>1 means greater than usual spacing)
  nodeDimensionsIncludeLabels: undefined, // whether labels should be included in determining the space used by a node (default true)
  transform: function transform(node, pos) {
    return pos;
  }, // a function that applies a transform to the final node position

  // layout event callbacks
  ready: function ready() {}, // on layoutready
  stop: function stop() {} // on layoutstop
});

var Layout = function () {
  function Layout(options) {
    _classCallCheck(this, Layout);

    this.options = assign({}, defaults, options);
  }

  _createClass(Layout, [{
    key: 'run',
    value: function run() {
      var layout = this;
      var options = this.options;
      var cy = options.cy;
      var eles = options.eles;
      var nodes = eles.nodes();

      // example positioning algorithm
      var getRandomPos = function getRandomPos(ele, i) {
        return {
          x: Math.round(Math.random() * 100),
          y: Math.round(Math.random() * 100)
        };
      };

      // TODO replace this with your own positioning algorithm
      var getNodePos = function getNodePos(ele, i) {
        var dims = ele.layoutDimensions(options); // the space used by the node

        return getRandomPos(ele, i);
      };

      // .layoutPositions() automatically handles the layout busywork for you
      nodes.layoutPositions(layout, options, getNodePos);
    }
  }]);

  return Layout;
}();

module.exports = Layout;

/***/ })
/******/ ]);
});