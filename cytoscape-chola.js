(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeChola"] = factory();
	else
		root["cytoscapeChola"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(21));
	else if(typeof define === 'function' && define.amd)
		define(["layout-base"], factory);
	else if(typeof exports === 'object')
		exports["coseBase"] = factory(require("layout-base"));
	else
		root["coseBase"] = factory(root["layoutBase"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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


var FDLayoutConstants = __webpack_require__(0).FDLayoutConstants;

function CoSEConstants() {}

//CoSEConstants inherits static props in FDLayoutConstants
for (var prop in FDLayoutConstants) {
  CoSEConstants[prop] = FDLayoutConstants[prop];
}

CoSEConstants.DEFAULT_USE_MULTI_LEVEL_SCALING = false;
CoSEConstants.DEFAULT_RADIAL_SEPARATION = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
CoSEConstants.DEFAULT_COMPONENT_SEPERATION = 60;
CoSEConstants.TILE = true;
CoSEConstants.TILING_PADDING_VERTICAL = 10;
CoSEConstants.TILING_PADDING_HORIZONTAL = 10;

module.exports = CoSEConstants;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayoutEdge = __webpack_require__(0).FDLayoutEdge;

function CoSEEdge(source, target, vEdge) {
  FDLayoutEdge.call(this, source, target, vEdge);
}

CoSEEdge.prototype = Object.create(FDLayoutEdge.prototype);
for (var prop in FDLayoutEdge) {
  CoSEEdge[prop] = FDLayoutEdge[prop];
}

module.exports = CoSEEdge;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraph = __webpack_require__(0).LGraph;

function CoSEGraph(parent, graphMgr, vGraph) {
  LGraph.call(this, parent, graphMgr, vGraph);
}

CoSEGraph.prototype = Object.create(LGraph.prototype);
for (var prop in LGraph) {
  CoSEGraph[prop] = LGraph[prop];
}

module.exports = CoSEGraph;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphManager = __webpack_require__(0).LGraphManager;

function CoSEGraphManager(layout) {
  LGraphManager.call(this, layout);
}

CoSEGraphManager.prototype = Object.create(LGraphManager.prototype);
for (var prop in LGraphManager) {
  CoSEGraphManager[prop] = LGraphManager[prop];
}

module.exports = CoSEGraphManager;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayoutNode = __webpack_require__(0).FDLayoutNode;
var IMath = __webpack_require__(0).IMath;

function CoSENode(gm, loc, size, vNode) {
  FDLayoutNode.call(this, gm, loc, size, vNode);
}

CoSENode.prototype = Object.create(FDLayoutNode.prototype);
for (var prop in FDLayoutNode) {
  CoSENode[prop] = FDLayoutNode[prop];
}

CoSENode.prototype.move = function () {
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

CoSENode.prototype.propogateDisplacementToChildren = function (dX, dY) {
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

CoSENode.prototype.setPred1 = function (pred1) {
  this.pred1 = pred1;
};

CoSENode.prototype.getPred1 = function () {
  return pred1;
};

CoSENode.prototype.getPred2 = function () {
  return pred2;
};

CoSENode.prototype.setNext = function (next) {
  this.next = next;
};

CoSENode.prototype.getNext = function () {
  return next;
};

CoSENode.prototype.setProcessed = function (processed) {
  this.processed = processed;
};

CoSENode.prototype.isProcessed = function () {
  return processed;
};

module.exports = CoSENode;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayout = __webpack_require__(0).FDLayout;
var CoSEGraphManager = __webpack_require__(4);
var CoSEGraph = __webpack_require__(3);
var CoSENode = __webpack_require__(5);
var CoSEEdge = __webpack_require__(2);
var CoSEConstants = __webpack_require__(1);
var FDLayoutConstants = __webpack_require__(0).FDLayoutConstants;
var LayoutConstants = __webpack_require__(0).LayoutConstants;
var Point = __webpack_require__(0).Point;
var PointD = __webpack_require__(0).PointD;
var Layout = __webpack_require__(0).Layout;
var Integer = __webpack_require__(0).Integer;
var IGeometry = __webpack_require__(0).IGeometry;
var LGraph = __webpack_require__(0).LGraph;
var Transform = __webpack_require__(0).Transform;

function CoSELayout() {
  FDLayout.call(this);

  this.toBeTiled = {}; // Memorize if a node is to be tiled or is tiled
}

CoSELayout.prototype = Object.create(FDLayout.prototype);

for (var prop in FDLayout) {
  CoSELayout[prop] = FDLayout[prop];
}

CoSELayout.prototype.newGraphManager = function () {
  var gm = new CoSEGraphManager(this);
  this.graphManager = gm;
  return gm;
};

CoSELayout.prototype.newGraph = function (vGraph) {
  return new CoSEGraph(null, this.graphManager, vGraph);
};

CoSELayout.prototype.newNode = function (vNode) {
  return new CoSENode(this.graphManager, vNode);
};

CoSELayout.prototype.newEdge = function (vEdge) {
  return new CoSEEdge(null, null, vEdge);
};

CoSELayout.prototype.initParameters = function () {
  FDLayout.prototype.initParameters.call(this, arguments);
  if (!this.isSubLayout) {
    if (CoSEConstants.DEFAULT_EDGE_LENGTH < 10) {
      this.idealEdgeLength = 10;
    } else {
      this.idealEdgeLength = CoSEConstants.DEFAULT_EDGE_LENGTH;
    }

    this.useSmartIdealEdgeLengthCalculation = CoSEConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
    this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
    this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
    this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
    this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
    this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
    this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;

    // variables for tree reduction support
    this.prunedNodesAll = [];
    this.growTreeIterations = 0;
    this.afterGrowthIterations = 0;
    this.isTreeGrowing = false;
    this.isGrowthFinished = false;

    // variables for cooling
    this.coolingCycle = 0;
    this.maxCoolingCycle = this.maxIterations / FDLayoutConstants.CONVERGENCE_CHECK_PERIOD;
    this.finalTemperature = FDLayoutConstants.CONVERGENCE_CHECK_PERIOD / this.maxIterations;
    this.coolingAdjuster = 1;
  }
};

CoSELayout.prototype.layout = function () {
  var createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
  if (createBendsAsNeeded) {
    this.createBendpoints();
    this.graphManager.resetAllEdges();
  }

  this.level = 0;
  return this.classicLayout();
};

CoSELayout.prototype.classicLayout = function () {
  this.nodesWithGravity = this.calculateNodesToApplyGravitationTo();
  this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity);
  this.calcNoOfChildrenForAllNodes();
  this.graphManager.calcLowestCommonAncestors();
  this.graphManager.calcInclusionTreeDepths();
  this.graphManager.getRoot().calcEstimatedSize();
  this.calcIdealEdgeLengths();

  if (!this.incremental) {
    var forest = this.getFlatForest();

    // The graph associated with this layout is flat and a forest
    if (forest.length > 0) {
      this.positionNodesRadially(forest);
    }
    // The graph associated with this layout is not flat or a forest
    else {
        // Reduce the trees when incremental mode is not enabled and graph is not a forest 
        this.reduceTrees();
        // Update nodes that gravity will be applied
        this.graphManager.resetAllNodesToApplyGravitation();
        var allNodes = new Set(this.getAllNodes());
        var intersection = this.nodesWithGravity.filter(function (x) {
          return allNodes.has(x);
        });
        this.graphManager.setAllNodesToApplyGravitation(intersection);

        this.positionNodesRandomly();
      }
  }

  this.initSpringEmbedder();
  this.runSpringEmbedder();

  return true;
};

CoSELayout.prototype.tick = function () {
  this.totalIterations++;

  if (this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) {
    if (this.prunedNodesAll.length > 0) {
      this.isTreeGrowing = true;
    } else {
      return true;
    }
  }

  if (this.totalIterations % FDLayoutConstants.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
    if (this.isConverged()) {
      if (this.prunedNodesAll.length > 0) {
        this.isTreeGrowing = true;
      } else {
        return true;
      }
    }

    this.coolingCycle++;

    if (this.layoutQuality == 0) {
      // quality - "draft"
      this.coolingAdjuster = this.coolingCycle;
    } else if (this.layoutQuality == 1) {
      // quality - "default"
      this.coolingAdjuster = this.coolingCycle / 3;
    }

    // cooling schedule is based on http://www.btluke.com/simanf1.html -> cooling schedule 3
    this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature);
    this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
  }
  // Operations while tree is growing again 
  if (this.isTreeGrowing) {
    if (this.growTreeIterations % 10 == 0) {
      if (this.prunedNodesAll.length > 0) {
        this.graphManager.updateBounds();
        this.updateGrid();
        this.growTree(this.prunedNodesAll);
        // Update nodes that gravity will be applied
        this.graphManager.resetAllNodesToApplyGravitation();
        var allNodes = new Set(this.getAllNodes());
        var intersection = this.nodesWithGravity.filter(function (x) {
          return allNodes.has(x);
        });
        this.graphManager.setAllNodesToApplyGravitation(intersection);

        this.graphManager.updateBounds();
        this.updateGrid();
        this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
      } else {
        this.isTreeGrowing = false;
        this.isGrowthFinished = true;
      }
    }
    this.growTreeIterations++;
  }
  // Operations after growth is finished
  if (this.isGrowthFinished) {
    if (this.isConverged()) {
      return true;
    }
    if (this.afterGrowthIterations % 10 == 0) {
      this.graphManager.updateBounds();
      this.updateGrid();
    }
    this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100);
    this.afterGrowthIterations++;
  }

  var gridUpdateAllowed = !this.isTreeGrowing && !this.isGrowthFinished;
  var forceToNodeSurroundingUpdate = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;

  this.totalDisplacement = 0;
  this.graphManager.updateBounds();
  this.calcSpringForces();
  this.calcRepulsionForces(gridUpdateAllowed, forceToNodeSurroundingUpdate);
  this.calcGravitationalForces();
  this.moveNodes();
  this.animate();

  return false; // Layout is not ended yet return false
};

CoSELayout.prototype.getPositionsData = function () {
  var allNodes = this.graphManager.getAllNodes();
  var pData = {};
  for (var i = 0; i < allNodes.length; i++) {
    var rect = allNodes[i].rect;
    var id = allNodes[i].id;
    pData[id] = {
      id: id,
      x: rect.getCenterX(),
      y: rect.getCenterY(),
      w: rect.width,
      h: rect.height
    };
  }

  return pData;
};

CoSELayout.prototype.runSpringEmbedder = function () {
  this.initialAnimationPeriod = 25;
  this.animationPeriod = this.initialAnimationPeriod;
  var layoutEnded = false;

  // If aminate option is 'during' signal that layout is supposed to start iterating
  if (FDLayoutConstants.ANIMATE === 'during') {
    this.emit('layoutstarted');
  } else {
    // If aminate option is 'during' tick() function will be called on index.js
    while (!layoutEnded) {
      layoutEnded = this.tick();
    }

    this.graphManager.updateBounds();
  }
};

CoSELayout.prototype.calculateNodesToApplyGravitationTo = function () {
  var nodeList = [];
  var graph;

  var graphs = this.graphManager.getGraphs();
  var size = graphs.length;
  var i;
  for (i = 0; i < size; i++) {
    graph = graphs[i];

    graph.updateConnected();

    if (!graph.isConnected) {
      nodeList = nodeList.concat(graph.getNodes());
    }
  }

  return nodeList;
};

CoSELayout.prototype.createBendpoints = function () {
  var edges = [];
  edges = edges.concat(this.graphManager.getAllEdges());
  var visited = new Set();
  var i;
  for (i = 0; i < edges.length; i++) {
    var edge = edges[i];

    if (!visited.has(edge)) {
      var source = edge.getSource();
      var target = edge.getTarget();

      if (source == target) {
        edge.getBendpoints().push(new PointD());
        edge.getBendpoints().push(new PointD());
        this.createDummyNodesForBendpoints(edge);
        visited.add(edge);
      } else {
        var edgeList = [];

        edgeList = edgeList.concat(source.getEdgeListToNode(target));
        edgeList = edgeList.concat(target.getEdgeListToNode(source));

        if (!visited.has(edgeList[0])) {
          if (edgeList.length > 1) {
            var k;
            for (k = 0; k < edgeList.length; k++) {
              var multiEdge = edgeList[k];
              multiEdge.getBendpoints().push(new PointD());
              this.createDummyNodesForBendpoints(multiEdge);
            }
          }
          edgeList.forEach(function (edge) {
            visited.add(edge);
          });
        }
      }
    }

    if (visited.size == edges.length) {
      break;
    }
  }
};

CoSELayout.prototype.positionNodesRadially = function (forest) {
  // We tile the trees to a grid row by row; first tree starts at (0,0)
  var currentStartingPoint = new Point(0, 0);
  var numberOfColumns = Math.ceil(Math.sqrt(forest.length));
  var height = 0;
  var currentY = 0;
  var currentX = 0;
  var point = new PointD(0, 0);

  for (var i = 0; i < forest.length; i++) {
    if (i % numberOfColumns == 0) {
      // Start of a new row, make the x coordinate 0, increment the
      // y coordinate with the max height of the previous row
      currentX = 0;
      currentY = height;

      if (i != 0) {
        currentY += CoSEConstants.DEFAULT_COMPONENT_SEPERATION;
      }

      height = 0;
    }

    var tree = forest[i];

    // Find the center of the tree
    var centerNode = Layout.findCenterOfTree(tree);

    // Set the staring point of the next tree
    currentStartingPoint.x = currentX;
    currentStartingPoint.y = currentY;

    // Do a radial layout starting with the center
    point = CoSELayout.radialLayout(tree, centerNode, currentStartingPoint);

    if (point.y > height) {
      height = Math.floor(point.y);
    }

    currentX = Math.floor(point.x + CoSEConstants.DEFAULT_COMPONENT_SEPERATION);
  }

  this.transform(new PointD(LayoutConstants.WORLD_CENTER_X - point.x / 2, LayoutConstants.WORLD_CENTER_Y - point.y / 2));
};

CoSELayout.radialLayout = function (tree, centerNode, startingPoint) {
  var radialSep = Math.max(this.maxDiagonalInTree(tree), CoSEConstants.DEFAULT_RADIAL_SEPARATION);
  CoSELayout.branchRadialLayout(centerNode, null, 0, 359, 0, radialSep);
  var bounds = LGraph.calculateBounds(tree);

  var transform = new Transform();
  transform.setDeviceOrgX(bounds.getMinX());
  transform.setDeviceOrgY(bounds.getMinY());
  transform.setWorldOrgX(startingPoint.x);
  transform.setWorldOrgY(startingPoint.y);

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    node.transform(transform);
  }

  var bottomRight = new PointD(bounds.getMaxX(), bounds.getMaxY());

  return transform.inverseTransformPoint(bottomRight);
};

CoSELayout.branchRadialLayout = function (node, parentOfNode, startAngle, endAngle, distance, radialSeparation) {
  // First, position this node by finding its angle.
  var halfInterval = (endAngle - startAngle + 1) / 2;

  if (halfInterval < 0) {
    halfInterval += 180;
  }

  var nodeAngle = (halfInterval + startAngle) % 360;
  var teta = nodeAngle * IGeometry.TWO_PI / 360;

  // Make polar to java cordinate conversion.
  var cos_teta = Math.cos(teta);
  var x_ = distance * Math.cos(teta);
  var y_ = distance * Math.sin(teta);

  node.setCenter(x_, y_);

  // Traverse all neighbors of this node and recursively call this
  // function.
  var neighborEdges = [];
  neighborEdges = neighborEdges.concat(node.getEdges());
  var childCount = neighborEdges.length;

  if (parentOfNode != null) {
    childCount--;
  }

  var branchCount = 0;

  var incEdgesCount = neighborEdges.length;
  var startIndex;

  var edges = node.getEdgesBetween(parentOfNode);

  // If there are multiple edges, prune them until there remains only one
  // edge.
  while (edges.length > 1) {
    //neighborEdges.remove(edges.remove(0));
    var temp = edges[0];
    edges.splice(0, 1);
    var index = neighborEdges.indexOf(temp);
    if (index >= 0) {
      neighborEdges.splice(index, 1);
    }
    incEdgesCount--;
    childCount--;
  }

  if (parentOfNode != null) {
    //assert edges.length == 1;
    startIndex = (neighborEdges.indexOf(edges[0]) + 1) % incEdgesCount;
  } else {
    startIndex = 0;
  }

  var stepAngle = Math.abs(endAngle - startAngle) / childCount;

  for (var i = startIndex; branchCount != childCount; i = ++i % incEdgesCount) {
    var currentNeighbor = neighborEdges[i].getOtherEnd(node);

    // Don't back traverse to root node in current tree.
    if (currentNeighbor == parentOfNode) {
      continue;
    }

    var childStartAngle = (startAngle + branchCount * stepAngle) % 360;
    var childEndAngle = (childStartAngle + stepAngle) % 360;

    CoSELayout.branchRadialLayout(currentNeighbor, node, childStartAngle, childEndAngle, distance + radialSeparation, radialSeparation);

    branchCount++;
  }
};

CoSELayout.maxDiagonalInTree = function (tree) {
  var maxDiagonal = Integer.MIN_VALUE;

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    var diagonal = node.getDiagonal();

    if (diagonal > maxDiagonal) {
      maxDiagonal = diagonal;
    }
  }

  return maxDiagonal;
};

CoSELayout.prototype.calcRepulsionRange = function () {
  // formula is 2 x (level + 1) x idealEdgeLength
  return 2 * (this.level + 1) * this.idealEdgeLength;
};

// Tiling methods

// Group zero degree members whose parents are not to be tiled, create dummy parents where needed and fill memberGroups by their dummp parent id's
CoSELayout.prototype.groupZeroDegreeMembers = function () {
  var self = this;
  // array of [parent_id x oneDegreeNode_id]
  var tempMemberGroups = {}; // A temporary map of parent node and its zero degree members
  this.memberGroups = {}; // A map of dummy parent node and its zero degree members whose parents are not to be tiled
  this.idToDummyNode = {}; // A map of id to dummy node 

  var zeroDegree = []; // List of zero degree nodes whose parents are not to be tiled
  var allNodes = this.graphManager.getAllNodes();

  // Fill zero degree list
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    var parent = node.getParent();
    // If a node has zero degree and its parent is not to be tiled if exists add that node to zeroDegres list
    if (this.getNodeDegreeWithChildren(node) === 0 && (parent.id == undefined || !this.getToBeTiled(parent))) {
      zeroDegree.push(node);
    }
  }

  // Create a map of parent node and its zero degree members
  for (var i = 0; i < zeroDegree.length; i++) {
    var node = zeroDegree[i]; // Zero degree node itself
    var p_id = node.getParent().id; // Parent id

    if (typeof tempMemberGroups[p_id] === "undefined") tempMemberGroups[p_id] = [];

    tempMemberGroups[p_id] = tempMemberGroups[p_id].concat(node); // Push node to the list belongs to its parent in tempMemberGroups
  }

  // If there are at least two nodes at a level, create a dummy compound for them
  Object.keys(tempMemberGroups).forEach(function (p_id) {
    if (tempMemberGroups[p_id].length > 1) {
      var dummyCompoundId = "DummyCompound_" + p_id; // The id of dummy compound which will be created soon
      self.memberGroups[dummyCompoundId] = tempMemberGroups[p_id]; // Add dummy compound to memberGroups

      var parent = tempMemberGroups[p_id][0].getParent(); // The parent of zero degree nodes will be the parent of new dummy compound

      // Create a dummy compound with calculated id
      var dummyCompound = new CoSENode(self.graphManager);
      dummyCompound.id = dummyCompoundId;
      dummyCompound.paddingLeft = parent.paddingLeft || 0;
      dummyCompound.paddingRight = parent.paddingRight || 0;
      dummyCompound.paddingBottom = parent.paddingBottom || 0;
      dummyCompound.paddingTop = parent.paddingTop || 0;

      self.idToDummyNode[dummyCompoundId] = dummyCompound;

      var dummyParentGraph = self.getGraphManager().add(self.newGraph(), dummyCompound);
      var parentGraph = parent.getChild();

      // Add dummy compound to parent the graph
      parentGraph.add(dummyCompound);

      // For each zero degree node in this level remove it from its parent graph and add it to the graph of dummy parent
      for (var i = 0; i < tempMemberGroups[p_id].length; i++) {
        var node = tempMemberGroups[p_id][i];

        parentGraph.remove(node);
        dummyParentGraph.add(node);
      }
    }
  });
};

CoSELayout.prototype.clearCompounds = function () {
  var childGraphMap = {};
  var idToNode = {};

  // Get compound ordering by finding the inner one first
  this.performDFSOnCompounds();

  for (var i = 0; i < this.compoundOrder.length; i++) {

    idToNode[this.compoundOrder[i].id] = this.compoundOrder[i];
    childGraphMap[this.compoundOrder[i].id] = [].concat(this.compoundOrder[i].getChild().getNodes());

    // Remove children of compounds
    this.graphManager.remove(this.compoundOrder[i].getChild());
    this.compoundOrder[i].child = null;
  }

  this.graphManager.resetAllNodes();

  // Tile the removed children
  this.tileCompoundMembers(childGraphMap, idToNode);
};

CoSELayout.prototype.clearZeroDegreeMembers = function () {
  var self = this;
  var tiledZeroDegreePack = this.tiledZeroDegreePack = [];

  Object.keys(this.memberGroups).forEach(function (id) {
    var compoundNode = self.idToDummyNode[id]; // Get the dummy compound

    tiledZeroDegreePack[id] = self.tileNodes(self.memberGroups[id], compoundNode.paddingLeft + compoundNode.paddingRight);

    // Set the width and height of the dummy compound as calculated
    compoundNode.rect.width = tiledZeroDegreePack[id].width;
    compoundNode.rect.height = tiledZeroDegreePack[id].height;
  });
};

CoSELayout.prototype.repopulateCompounds = function () {
  for (var i = this.compoundOrder.length - 1; i >= 0; i--) {
    var lCompoundNode = this.compoundOrder[i];
    var id = lCompoundNode.id;
    var horizontalMargin = lCompoundNode.paddingLeft;
    var verticalMargin = lCompoundNode.paddingTop;

    this.adjustLocations(this.tiledMemberPack[id], lCompoundNode.rect.x, lCompoundNode.rect.y, horizontalMargin, verticalMargin);
  }
};

CoSELayout.prototype.repopulateZeroDegreeMembers = function () {
  var self = this;
  var tiledPack = this.tiledZeroDegreePack;

  Object.keys(tiledPack).forEach(function (id) {
    var compoundNode = self.idToDummyNode[id]; // Get the dummy compound by its id
    var horizontalMargin = compoundNode.paddingLeft;
    var verticalMargin = compoundNode.paddingTop;

    // Adjust the positions of nodes wrt its compound
    self.adjustLocations(tiledPack[id], compoundNode.rect.x, compoundNode.rect.y, horizontalMargin, verticalMargin);
  });
};

CoSELayout.prototype.getToBeTiled = function (node) {
  var id = node.id;
  //firstly check the previous results
  if (this.toBeTiled[id] != null) {
    return this.toBeTiled[id];
  }

  //only compound nodes are to be tiled
  var childGraph = node.getChild();
  if (childGraph == null) {
    this.toBeTiled[id] = false;
    return false;
  }

  var children = childGraph.getNodes(); // Get the children nodes

  //a compound node is not to be tiled if all of its compound children are not to be tiled
  for (var i = 0; i < children.length; i++) {
    var theChild = children[i];

    if (this.getNodeDegree(theChild) > 0) {
      this.toBeTiled[id] = false;
      return false;
    }

    //pass the children not having the compound structure
    if (theChild.getChild() == null) {
      this.toBeTiled[theChild.id] = false;
      continue;
    }

    if (!this.getToBeTiled(theChild)) {
      this.toBeTiled[id] = false;
      return false;
    }
  }
  this.toBeTiled[id] = true;
  return true;
};

// Get degree of a node depending of its edges and independent of its children
CoSELayout.prototype.getNodeDegree = function (node) {
  var id = node.id;
  var edges = node.getEdges();
  var degree = 0;

  // For the edges connected
  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    if (edge.getSource().id !== edge.getTarget().id) {
      degree = degree + 1;
    }
  }
  return degree;
};

// Get degree of a node with its children
CoSELayout.prototype.getNodeDegreeWithChildren = function (node) {
  var degree = this.getNodeDegree(node);
  if (node.getChild() == null) {
    return degree;
  }
  var children = node.getChild().getNodes();
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    degree += this.getNodeDegreeWithChildren(child);
  }
  return degree;
};

CoSELayout.prototype.performDFSOnCompounds = function () {
  this.compoundOrder = [];
  this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
};

CoSELayout.prototype.fillCompexOrderByDFS = function (children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.getChild() != null) {
      this.fillCompexOrderByDFS(child.getChild().getNodes());
    }
    if (this.getToBeTiled(child)) {
      this.compoundOrder.push(child);
    }
  }
};

/**
* This method places each zero degree member wrt given (x,y) coordinates (top left).
*/
CoSELayout.prototype.adjustLocations = function (organization, x, y, compoundHorizontalMargin, compoundVerticalMargin) {
  x += compoundHorizontalMargin;
  y += compoundVerticalMargin;

  var left = x;

  for (var i = 0; i < organization.rows.length; i++) {
    var row = organization.rows[i];
    x = left;
    var maxHeight = 0;

    for (var j = 0; j < row.length; j++) {
      var lnode = row[j];

      lnode.rect.x = x; // + lnode.rect.width / 2;
      lnode.rect.y = y; // + lnode.rect.height / 2;

      x += lnode.rect.width + organization.horizontalPadding;

      if (lnode.rect.height > maxHeight) maxHeight = lnode.rect.height;
    }

    y += maxHeight + organization.verticalPadding;
  }
};

CoSELayout.prototype.tileCompoundMembers = function (childGraphMap, idToNode) {
  var self = this;
  this.tiledMemberPack = [];

  Object.keys(childGraphMap).forEach(function (id) {
    // Get the compound node
    var compoundNode = idToNode[id];

    self.tiledMemberPack[id] = self.tileNodes(childGraphMap[id], compoundNode.paddingLeft + compoundNode.paddingRight);

    compoundNode.rect.width = self.tiledMemberPack[id].width + 20;
    compoundNode.rect.height = self.tiledMemberPack[id].height + 20;
  });
};

CoSELayout.prototype.tileNodes = function (nodes, minWidth) {
  var verticalPadding = CoSEConstants.TILING_PADDING_VERTICAL;
  var horizontalPadding = CoSEConstants.TILING_PADDING_HORIZONTAL;
  var organization = {
    rows: [],
    rowWidth: [],
    rowHeight: [],
    width: 20,
    height: 20,
    verticalPadding: verticalPadding,
    horizontalPadding: horizontalPadding
  };

  // Sort the nodes in ascending order of their areas
  nodes.sort(function (n1, n2) {
    if (n1.rect.width * n1.rect.height > n2.rect.width * n2.rect.height) return -1;
    if (n1.rect.width * n1.rect.height < n2.rect.width * n2.rect.height) return 1;
    return 0;
  });

  // Create the organization -> tile members
  for (var i = 0; i < nodes.length; i++) {
    var lNode = nodes[i];

    if (organization.rows.length == 0) {
      this.insertNodeToRow(organization, lNode, 0, minWidth);
    } else if (this.canAddHorizontal(organization, lNode.rect.width, lNode.rect.height)) {
      this.insertNodeToRow(organization, lNode, this.getShortestRowIndex(organization), minWidth);
    } else {
      this.insertNodeToRow(organization, lNode, organization.rows.length, minWidth);
    }

    this.shiftToLastRow(organization);
  }

  return organization;
};

CoSELayout.prototype.insertNodeToRow = function (organization, node, rowIndex, minWidth) {
  var minCompoundSize = minWidth;

  // Add new row if needed
  if (rowIndex == organization.rows.length) {
    var secondDimension = [];

    organization.rows.push(secondDimension);
    organization.rowWidth.push(minCompoundSize);
    organization.rowHeight.push(0);
  }

  // Update row width
  var w = organization.rowWidth[rowIndex] + node.rect.width;

  if (organization.rows[rowIndex].length > 0) {
    w += organization.horizontalPadding;
  }

  organization.rowWidth[rowIndex] = w;
  // Update compound width
  if (organization.width < w) {
    organization.width = w;
  }

  // Update height
  var h = node.rect.height;
  if (rowIndex > 0) h += organization.verticalPadding;

  var extraHeight = 0;
  if (h > organization.rowHeight[rowIndex]) {
    extraHeight = organization.rowHeight[rowIndex];
    organization.rowHeight[rowIndex] = h;
    extraHeight = organization.rowHeight[rowIndex] - extraHeight;
  }

  organization.height += extraHeight;

  // Insert node
  organization.rows[rowIndex].push(node);
};

//Scans the rows of an organization and returns the one with the min width
CoSELayout.prototype.getShortestRowIndex = function (organization) {
  var r = -1;
  var min = Number.MAX_VALUE;

  for (var i = 0; i < organization.rows.length; i++) {
    if (organization.rowWidth[i] < min) {
      r = i;
      min = organization.rowWidth[i];
    }
  }
  return r;
};

//Scans the rows of an organization and returns the one with the max width
CoSELayout.prototype.getLongestRowIndex = function (organization) {
  var r = -1;
  var max = Number.MIN_VALUE;

  for (var i = 0; i < organization.rows.length; i++) {

    if (organization.rowWidth[i] > max) {
      r = i;
      max = organization.rowWidth[i];
    }
  }

  return r;
};

/**
* This method checks whether adding extra width to the organization violates
* the aspect ratio(1) or not.
*/
CoSELayout.prototype.canAddHorizontal = function (organization, extraWidth, extraHeight) {

  var sri = this.getShortestRowIndex(organization);

  if (sri < 0) {
    return true;
  }

  var min = organization.rowWidth[sri];

  if (min + organization.horizontalPadding + extraWidth <= organization.width) return true;

  var hDiff = 0;

  // Adding to an existing row
  if (organization.rowHeight[sri] < extraHeight) {
    if (sri > 0) hDiff = extraHeight + organization.verticalPadding - organization.rowHeight[sri];
  }

  var add_to_row_ratio;
  if (organization.width - min >= extraWidth + organization.horizontalPadding) {
    add_to_row_ratio = (organization.height + hDiff) / (min + extraWidth + organization.horizontalPadding);
  } else {
    add_to_row_ratio = (organization.height + hDiff) / organization.width;
  }

  // Adding a new row for this node
  hDiff = extraHeight + organization.verticalPadding;
  var add_new_row_ratio;
  if (organization.width < extraWidth) {
    add_new_row_ratio = (organization.height + hDiff) / extraWidth;
  } else {
    add_new_row_ratio = (organization.height + hDiff) / organization.width;
  }

  if (add_new_row_ratio < 1) add_new_row_ratio = 1 / add_new_row_ratio;

  if (add_to_row_ratio < 1) add_to_row_ratio = 1 / add_to_row_ratio;

  return add_to_row_ratio < add_new_row_ratio;
};

//If moving the last node from the longest row and adding it to the last
//row makes the bounding box smaller, do it.
CoSELayout.prototype.shiftToLastRow = function (organization) {
  var longest = this.getLongestRowIndex(organization);
  var last = organization.rowWidth.length - 1;
  var row = organization.rows[longest];
  var node = row[row.length - 1];

  var diff = node.width + organization.horizontalPadding;

  // Check if there is enough space on the last row
  if (organization.width - organization.rowWidth[last] > diff && longest != last) {
    // Remove the last element of the longest row
    row.splice(-1, 1);

    // Push it to the last row
    organization.rows[last].push(node);

    organization.rowWidth[longest] = organization.rowWidth[longest] - diff;
    organization.rowWidth[last] = organization.rowWidth[last] + diff;
    organization.width = organization.rowWidth[instance.getLongestRowIndex(organization)];

    // Update heights of the organization
    var maxHeight = Number.MIN_VALUE;
    for (var i = 0; i < row.length; i++) {
      if (row[i].height > maxHeight) maxHeight = row[i].height;
    }
    if (longest > 0) maxHeight += organization.verticalPadding;

    var prevTotal = organization.rowHeight[longest] + organization.rowHeight[last];

    organization.rowHeight[longest] = maxHeight;
    if (organization.rowHeight[last] < node.height + organization.verticalPadding) organization.rowHeight[last] = node.height + organization.verticalPadding;

    var finalTotal = organization.rowHeight[longest] + organization.rowHeight[last];
    organization.height += finalTotal - prevTotal;

    this.shiftToLastRow(organization);
  }
};

CoSELayout.prototype.tilingPreLayout = function () {
  if (CoSEConstants.TILE) {
    // Find zero degree nodes and create a compound for each level
    this.groupZeroDegreeMembers();
    // Tile and clear children of each compound
    this.clearCompounds();
    // Separately tile and clear zero degree nodes for each level
    this.clearZeroDegreeMembers();
  }
};

CoSELayout.prototype.tilingPostLayout = function () {
  if (CoSEConstants.TILE) {
    this.repopulateZeroDegreeMembers();
    this.repopulateCompounds();
  }
};

// -----------------------------------------------------------------------------
// Section: Tree Reduction methods
// -----------------------------------------------------------------------------
// Reduce trees 
CoSELayout.prototype.reduceTrees = function () {
  var prunedNodesAll = [];
  var containsLeaf = true;
  var node;

  while (containsLeaf) {
    var allNodes = this.graphManager.getAllNodes();
    var prunedNodesInStepTemp = [];
    containsLeaf = false;

    for (var i = 0; i < allNodes.length; i++) {
      node = allNodes[i];
      if (node.getEdges().length == 1 && !node.getEdges()[0].isInterGraph && node.getChild() == null) {
        prunedNodesInStepTemp.push([node, node.getEdges()[0], node.getOwner()]);
        containsLeaf = true;
      }
    }
    if (containsLeaf == true) {
      var prunedNodesInStep = [];
      for (var j = 0; j < prunedNodesInStepTemp.length; j++) {
        if (prunedNodesInStepTemp[j][0].getEdges().length == 1) {
          prunedNodesInStep.push(prunedNodesInStepTemp[j]);
          prunedNodesInStepTemp[j][0].getOwner().remove(prunedNodesInStepTemp[j][0]);
        }
      }
      prunedNodesAll.push(prunedNodesInStep);
      this.graphManager.resetAllNodes();
      this.graphManager.resetAllEdges();
    }
  }
  this.prunedNodesAll = prunedNodesAll;
};

// Grow tree one step 
CoSELayout.prototype.growTree = function (prunedNodesAll) {
  var lengthOfPrunedNodesInStep = prunedNodesAll.length;
  var prunedNodesInStep = prunedNodesAll[lengthOfPrunedNodesInStep - 1];

  var nodeData;
  for (var i = 0; i < prunedNodesInStep.length; i++) {
    nodeData = prunedNodesInStep[i];

    this.findPlaceforPrunedNode(nodeData);

    nodeData[2].add(nodeData[0]);
    nodeData[2].add(nodeData[1], nodeData[1].source, nodeData[1].target);
  }

  prunedNodesAll.splice(prunedNodesAll.length - 1, 1);
  this.graphManager.resetAllNodes();
  this.graphManager.resetAllEdges();
};

// Find an appropriate position to replace pruned node, this method can be improved
CoSELayout.prototype.findPlaceforPrunedNode = function (nodeData) {

  var gridForPrunedNode;
  var nodeToConnect;
  var prunedNode = nodeData[0];
  if (prunedNode == nodeData[1].source) {
    nodeToConnect = nodeData[1].target;
  } else {
    nodeToConnect = nodeData[1].source;
  }
  var startGridX = nodeToConnect.startX;
  var finishGridX = nodeToConnect.finishX;
  var startGridY = nodeToConnect.startY;
  var finishGridY = nodeToConnect.finishY;

  var upNodeCount = 0;
  var downNodeCount = 0;
  var rightNodeCount = 0;
  var leftNodeCount = 0;
  var controlRegions = [upNodeCount, rightNodeCount, downNodeCount, leftNodeCount];

  if (startGridY > 0) {
    for (var i = startGridX; i <= finishGridX; i++) {
      controlRegions[0] += this.grid[i][startGridY - 1].length + this.grid[i][startGridY].length - 1;
    }
  }
  if (finishGridX < this.grid.length - 1) {
    for (var i = startGridY; i <= finishGridY; i++) {
      controlRegions[1] += this.grid[finishGridX + 1][i].length + this.grid[finishGridX][i].length - 1;
    }
  }
  if (finishGridY < this.grid[0].length - 1) {
    for (var i = startGridX; i <= finishGridX; i++) {
      controlRegions[2] += this.grid[i][finishGridY + 1].length + this.grid[i][finishGridY].length - 1;
    }
  }
  if (startGridX > 0) {
    for (var i = startGridY; i <= finishGridY; i++) {
      controlRegions[3] += this.grid[startGridX - 1][i].length + this.grid[startGridX][i].length - 1;
    }
  }
  var min = Integer.MAX_VALUE;
  var minCount;
  var minIndex;
  for (var j = 0; j < controlRegions.length; j++) {
    if (controlRegions[j] < min) {
      min = controlRegions[j];
      minCount = 1;
      minIndex = j;
    } else if (controlRegions[j] == min) {
      minCount++;
    }
  }

  if (minCount == 3 && min == 0) {
    if (controlRegions[0] == 0 && controlRegions[1] == 0 && controlRegions[2] == 0) {
      gridForPrunedNode = 1;
    } else if (controlRegions[0] == 0 && controlRegions[1] == 0 && controlRegions[3] == 0) {
      gridForPrunedNode = 0;
    } else if (controlRegions[0] == 0 && controlRegions[2] == 0 && controlRegions[3] == 0) {
      gridForPrunedNode = 3;
    } else if (controlRegions[1] == 0 && controlRegions[2] == 0 && controlRegions[3] == 0) {
      gridForPrunedNode = 2;
    }
  } else if (minCount == 2 && min == 0) {
    var random = Math.floor(Math.random() * 2);
    if (controlRegions[0] == 0 && controlRegions[1] == 0) {
      ;
      if (random == 0) {
        gridForPrunedNode = 0;
      } else {
        gridForPrunedNode = 1;
      }
    } else if (controlRegions[0] == 0 && controlRegions[2] == 0) {
      if (random == 0) {
        gridForPrunedNode = 0;
      } else {
        gridForPrunedNode = 2;
      }
    } else if (controlRegions[0] == 0 && controlRegions[3] == 0) {
      if (random == 0) {
        gridForPrunedNode = 0;
      } else {
        gridForPrunedNode = 3;
      }
    } else if (controlRegions[1] == 0 && controlRegions[2] == 0) {
      if (random == 0) {
        gridForPrunedNode = 1;
      } else {
        gridForPrunedNode = 2;
      }
    } else if (controlRegions[1] == 0 && controlRegions[3] == 0) {
      if (random == 0) {
        gridForPrunedNode = 1;
      } else {
        gridForPrunedNode = 3;
      }
    } else {
      if (random == 0) {
        gridForPrunedNode = 2;
      } else {
        gridForPrunedNode = 3;
      }
    }
  } else if (minCount == 4 && min == 0) {
    var random = Math.floor(Math.random() * 4);
    gridForPrunedNode = random;
  } else {
    gridForPrunedNode = minIndex;
  }

  if (gridForPrunedNode == 0) {
    prunedNode.setCenter(nodeToConnect.getCenterX(), nodeToConnect.getCenterY() - nodeToConnect.getHeight() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - prunedNode.getHeight() / 2);
  } else if (gridForPrunedNode == 1) {
    prunedNode.setCenter(nodeToConnect.getCenterX() + nodeToConnect.getWidth() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + prunedNode.getWidth() / 2, nodeToConnect.getCenterY());
  } else if (gridForPrunedNode == 2) {
    prunedNode.setCenter(nodeToConnect.getCenterX(), nodeToConnect.getCenterY() + nodeToConnect.getHeight() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + prunedNode.getHeight() / 2);
  } else {
    prunedNode.setCenter(nodeToConnect.getCenterX() - nodeToConnect.getWidth() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - prunedNode.getWidth() / 2, nodeToConnect.getCenterY());
  }
};

module.exports = CoSELayout;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coseBase = {};

coseBase.layoutBase = __webpack_require__(0);
coseBase.CoSEConstants = __webpack_require__(1);
coseBase.CoSEEdge = __webpack_require__(2);
coseBase.CoSEGraph = __webpack_require__(3);
coseBase.CoSEGraphManager = __webpack_require__(4);
coseBase.CoSELayout = __webpack_require__(6);
coseBase.CoSENode = __webpack_require__(5);

module.exports = coseBase;

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LEdge = __webpack_require__(0).layoutBase.LEdge;
var IGeometry = __webpack_require__(0).layoutBase.IGeometry;

function cholaEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.bendPoints = [];
}

cholaEdge.prototype = Object.create(LEdge.prototype);
for (var prop in LEdge) {
  cholaEdge[prop] = LEdge[prop];
}

/*Get the other end to which an edge is connected with*/
cholaEdge.prototype.getOtherEnd = function (node) {
  if (node === this.source && node === this.target) {
    return null;
  } else if (node === this.source) {
    return this.target;
  } else if (node === this.target) {
    return this.source;
  }
};

cholaEdge.prototype.intersectionsCost = function (gm) {
  var allEdges = gm.getAllEdges();
  var p1 = this.source.getLocation().x;
  var p2 = this.target.getLocation().y;
  var cost = 0;
  for (var i = 0; i < allEdges.length; i++) {
    var edge = allEdges[i];
    var p3 = edge.source.getLocation().x;
    var p4 = edge.target.getLocation().y;
    cost += IGeometry.doIntersect(p1, p2, p3, p4) ? 1 : 0;
  }
  return cost;
};

module.exports = cholaEdge;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compass() {
    this.EAST = 0;
    this.SOUTH = 1;
    this.WEST = 2;
    this.NORTH = 3;
    this.SE = 4;
    this.SW = 5;
    this.NW = 6;
    this.NE = 7;

    this.cwCards = [0, 1, 2, 3];
    this.acwCards = [0, 3, 2, 1];

    this.cwOrds = [4, 5, 6, 7];
    this.acwOrds = [4, 7, 6, 5];

    this.cwRose = [0, 4, 1, 5, 2, 6, 3, 7];
    this.acwRose = [0, 7, 3, 6, 2, 5, 1, 4];

    this.horizontal = [0, 2];
    this.vertical = [1, 3];

    this.increasing = [0, 1];
    this.decreasing = [2, 3];

    this.abbrev = [[this.EAST, "E"], [this.SOUTH, "S"], [this.WEST, "W"], [this.NORTH, "N"], [this.SE, "SE"], [this.SW, "SW"], [this.NW, "NW"], [this.NE, "NE"]];

    // Directions w.r.t which we must /increase/ the const
    // coord in order to move to the right:
    this.rightSidePlus = [this.NORTH, this.EAST];
    // Directions w.r.t which we must /decrease/ the const
    // coord in order to move to the right:
    this.rightSideMinus = [this.SOUTH, this.WEST];

    this.variableDimension = [[this.EAST, 0], [this.SOUTH, 1], [this.WEST, 0], [this.NORTH, 1]];

    this.constantDimension = [[this.EAST, 1], [this.SOUTH, 0], [this.WEST, 1], [this.NORTH, 0]];

    this.components = [[this.SE, [this.SOUTH, this.EAST]], [this.SW, [this.SOUTH, this.WEST]], [this.NW, [this.NORTH, this.WEST]], [this.NE, [this.NORTH, this.EAST]], [this.EAST, [this.EAST]], [this.SOUTH, [this.SOUTH]], [this.WEST, [this.WEST]], [this.NORTH, [this.NORTH]]];

    this.signs = [[this.EAST, [1, 0]], [this.SE, [1, 1]], [this.SOUTH, [0, 1]], [this.SW, [-1, 1]], [this.WEST, [-1, 0]], [this.NW, [-1, -1]], [this.NORTH, [0, -1]], [this.NE, [1, -1]]];

    this.libavoidVisibility = [[this.EAST, 8], [this.SOUTH, 2], [this.WEST, 4], [this.NORTH, 1]];
};
// @classmethod
// def cwClosedInterval(cls, d0, d1):
//     """
//     :param d0: a direction
//     :param d1: another direction
//     :return: list of all compass directions from d0 to d1 inclusive, going clockwise
//     """
//     rr = cls.cwRose + cls.cwRose
//     i0 = rr.index(d0)
//     i1 = i0 + rr[i0:].index(d1)
//     return rr[i0:i1+1]

// @classmethod
// def acwClosedInterval(cls, d0, d1):
//     """
//     :param d0: a direction
//     :param d1: another direction
//     :return: list of all compass directions from d0 to d1 inclusive, going anticlockwise
//     """
//     return list(reversed(cls.cwClosedInterval(d1, d0)))

// @classmethod
// def cwRoseDistance(cls, d0, d1):
//     """
//     :param d0: a direction
//     :param d1: another direction
//     :return: the number of steps on the compass rose going clockwise from d0 to d1
//     """
//     return len(cls.cwClosedInterval(d0, d1)) - 1

// @classmethod
// def shortestRoseDistance(cls, d0, d1):
//     """
//     :param d0: a direction
//     :param d1: another direction
//     :return: the minimum number of steps on the compass rose from d0 to d1, going in either direction
//     """
//     return min(cls.cwRoseDistance(d0, d1), cls.acwRoseDistance(d0, d1))

// @classmethod
// def acwRoseDistance(cls, d0, d1):
//     """
//     :param d0: a direction
//     :param d1: another direction
//     :return: the number of steps on the compass rose going anticlockwise from d0 to d1
//     """
//     return len(cls.acwClosedInterval(d0, d1)) - 1

// @classmethod
// def sameDimension(cls, d0, d1):
//     """
//     :param d0: a cardinal Compass direction
//     :param d1: a cardinal Compass direction
//     :return: boolean saying if these directions are in the same dimension
//     """
//     return (d0 % 2) == (d1 % 2)

// @classmethod
// def perpendicular(cls, d0, d1):
//     """
//     :param d0: a cardinal Compass direction
//     :param d1: a cardinal Compass direction
//     :return: boolean saying if these directions are perpendicular to one another
//     """
//     return not cls.sameDimension(d0, d1)


compass.prototype.cardinalDirection = function (p1, p2) {
    /*
    :param p1: either a Node object, or the coords (x1, y1) of a point
    :param p2: either a Node object, or the coords (x2, y2) of a point
    :return: the predominant cardinal direction from p1 to p2
    */
    var p1Loc = p1.getCenter();
    var p2Loc = p2.getCenter();
    var dx = p2Loc.x - p1Loc.x;
    var dy = p2Loc.y - p1Loc.y;

    if (Math.abs(dy) <= Math.abs(dx)) {
        if (p1Loc.x < p2Loc.x) return this.EAST;else return this.WEST;
    } else {
        if (p1Loc.y < p2Loc.y) return this.SOUTH;else return this.NORTH;
    }
};

compass.prototype.possibleCardinalDirections = function (node1, node2) {
    /*
    :param node1: a Node
    :param node2: a Node
    :return: a list of the possible cardinal directions from node1 to node2,
             if they were to be aligned non-aggressively
    */
    var node1Loc = node1.getCenter();
    var node2Loc = node2.getCenter();
    var x1 = node1Loc.x;
    var x2 = node2Loc.x;
    var y1 = node1Loc.y;
    var y2 = node2Loc.y;
    var dx = x2 - x1;
    var dy = y2 - y1;

    var dirs = [];
    if (dx > 0) dirs.push(this.EAST);
    if (dx < 0) dirs.push(this.WEST);
    if (dy > 0) dirs.push(this.SOUTH);
    if (dy < 0) dirs.push(this.NORTH);
    return dirs;
};

// @classmethod
// def getRotationFunction(cls, fromDir, toDir):
//     # For now we only handle cardinal directions.
//     if fromDir not in cls.cwCards or toDir not in cls.cwCards:
//         raise Exception("only cardinal directions are currently handled")
//     a, b = fromDir, toDir
//     d = (b - a) % 4
//     return [
//         lambda v: (v[0], v[1]),
//         lambda v: (-v[1], v[0]),
//         lambda v: (-v[0], -v[1]),
//         lambda v: (v[1], -v[0])
//     ][d]

// @classmethod
// def flip(cls, direc):
//     i0 = cls.cwRose.index(direc)
//     return cls.cwRose[(i0+4)%8]

// @classmethod
// def cw90(cls, direc):
//     i0 = cls.cwRose.index(direc)
//     return cls.cwRose[(i0+2)%8]

// @classmethod
// def acw90(cls, direc):
//     i0 = cls.cwRose.index(direc)
//     return cls.cwRose[(i0-2)%8]

// @classmethod
// def rotateCW(cls, n, direc):
//     i0 = cls.cwRose.index(direc)
//     return cls.cwRose[(i0+n)%8]

// @classmethod
// def vectorSigns(cls, direc):
//     """
//     :param direc: a Compass direction
//     :return: (xs, ys) where xs in {-1, 0, 1} represents the sign of
//     the x-coordinate of a vector lying in the "octant" represented
//     by direc, and likewise for ys. Here an "octant" is a semiaxis for
//     a cardinal direction and an open quadrant for an ordinal direction.
//     """
//     return cls.signs[direc]

// @classmethod
// def vector(cls, direc, mag=1):
//     """
//     :param direc: a Compass direction, cardinal or ordinal
//     :param mag: a float
//     :return: a vector in the form [x, y] having the given magnitude and
//              pointing in the given direction
//     """
//     hsqrt2 = 0.7071067811865476
//     v = {
//         cls.EAST: [1, 0],
//         cls.SOUTH: [0, 1],
//         cls.WEST: [-1, 0],
//         cls.NORTH: [0, -1],
//         cls.SE: [hsqrt2, hsqrt2],
//         cls.SW: [-hsqrt2, hsqrt2],
//         cls.NW: [-hsqrt2, -hsqrt2],
//         cls.NE: [hsqrt2, -hsqrt2]
//     }[direc]
//     return [mag*c for c in v]


module.exports = compass;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LayoutConstants = __webpack_require__(0).layoutBase.LayoutConstants;
var compass = __webpack_require__(2);

function cholaConstants() {}

//cholaConstants inherits static props in FDLayoutConstants
for (var prop in LayoutConstants) {
    cholaConstants[prop] = LayoutConstants[prop];
}

cholaConstants.DEFAULT_USE_MULTI_LEVEL_SCALING = false;;
cholaConstants.DEFAULT_RADIAL_SEPARATION = LayoutConstants.DEFAULT_MIN_LENGTH;
cholaConstants.DEFAULT_COMPONENT_SEPERATION = 60;
cholaConstants.TILE = true;
cholaConstants.TILING_PADDING_VERTICAL = 10;
cholaConstants.TILING_PADDING_HORIZONTAL = 10;

cholaConstants.DEFAULT_TREE_DIREC = compass.SOUTH;
/*
Ideal edge length will be a multiple of the average node dimension.
Set the multiplier here.

Should be at least two, or else the shape buffer multiplier should not be used.
*/
cholaConstants.IEL_MULTIPLIER = 2;
cholaConstants.ROTATE_FOR_WIDE_ASPECT_RATIO = true;
cholaConstants.CLASSIC_ACA_FOR_CHAINS = true;

//Set the kinds of placements that are favoured for trees.

cholaConstants.TREE_PLACEMENT_FAVOUR_CARDINAL = true;
cholaConstants.TREE_PLACEMENT_FAVOUR_EXTERNAL = true;
cholaConstants.TREE_PLACEMENT_FAVOUR_ISOLATION = true;

//We pad the nodes to keep gaps between them.

cholaConstants.NODE_PADDING_IEL_SCALAR = 0.25;

//For neighbour stress we scale the ideal edge length.

cholaConstants.NBR_STRESS_IEL_SCALAR = 1 / 20;

//Options and parameters for the "near alignments" pass:

cholaConstants.DO_NEAR_ALIGNMENTS = true;
cholaConstants.ALIGN_AND_SHAKE_REPS = 2;
cholaConstants.KINK_WIDTH_SCALAR = 0.5;
cholaConstants.ALIGNMENT_SCOPE_SCALAR = 2;

//Options for symmetric tree layout:

cholaConstants.RIGID_RANK_SEP = true;
cholaConstants.TRY_MIRROR_TRIPLES = false;

//Logging levels for various stages of the process:

// cholaConstants.LOG_LEVEL_GENERAL = LogLevel.TIMING;
// cholaConstants.LOG_LEVEL_TREE_PLACEMENT = LogLevel.TIMING;


//Do you want node IDs to be labels on the nodes in the final layout?

cholaConstants.NODE_IDS_AS_LABELS = false;

//Do a final stress reduction with neighbour stress?

cholaConstants.DO_FINAL_NEIGHBOUR_STRESS_SHAKE = true;

/*
If three nodes u, v, w in a graph form a triangle -- i.e. a subgraph isomorphic
to K3 -- then during node configuration we may wish to prevent the "flattening"
of this triangle, i.e. the configuration of any one of the three nodes in such
a way that the other two are assigned to opposite compass directions, e.g. assigning
u and w to be north and south, resp., of v. To prevent this, set this option to
true.

One reason to leave this option set to false; is e.g. that K4 gets a better (planar)
layout.
*/
cholaConstants.NODE_CONFIG_NO_FLAT_TRIANGLES = false;

/*
To get a dictionary of routing options to be passed to a RoutingRig object,
call the getRoutingOpts function.

In many cases it makes sense to think of router parameters as scalar multiples
of the ideal edge length of the graph. In such cases, you may set the scalars
in the following dictionary, and you must pass the ideal edge length as iel
to the getRoutingOpts function.

If you want to switch some of these off, while
continuing to use others, simply set their value to None. Where scalars are
not used we fall back on the defaults dictionary below.
*/
cholaConstants.ROUTING_OPT_IEL_SCALARS = [['crossingPenalty', 2],
// DEPRECATED: Nodes are padded throughout, so no need for this:
['shapeBufferDistance', 0], ['segmentPenalty', 0.5]];
cholaConstants.ROUTING_OPT_DEFAULTS = [['crossingPenalty', 0],
// DEPRECATED: Nodes are padded throughout, so no need for this:
['shapeBufferDistance', 0],
//
['segmentPenalty', 50]];
/*
In, for example, a NORTH-growing tree, an edge between ranks i and i + 1
will always be allowed to connect only to the south (S) port of a node in
rank i + 1.

This setting controls the directions allowed for connection to nodes in
rank i, as follows:

0:  only N is allowed
1:  N, E, W are allowed for the root node if it has exactly one child and
    it is an ordinal placement, otherwise only N
2:  N, E, W are allowed for all nodes on rank i

The "CORE" version controls trees attached to a core graph.
The "PURE" version controls graphs which are themselves trees.
*/
cholaConstants.PERMISSIVE_CORE_TREE_ROUTING = 1;
cholaConstants.PERMISSIVE_PURE_TREE_ROUTING = 2;

/*
How to react if we get a positive water level route with no bends?
This is indicative of some systematic error, but we may nevertheless
want to skip over it, and simply mark the path as unusable.
OR we can even throw all caution to the wind and try to use the path
anyway.

The settings are as follows:

0:  Do not tolerate. Raise an exception and quit immediately.
1:  Raise an UnusableWaterPath exception, and print a warning.
    This type of exception is caught by a higher level control loop.
2:  Do not raise any exception, but do print a warning.
3:  Do not raise any exception, do not print any warning.
*/
cholaConstants.ON_POSITIVE_WATER_LEVEL_ROUTE_WITHOUT_BENDS = 1;

/*
Default operation is to evaluate all tree placement options exactly
by actually carrying out each potential projection sequence, evaluating
the stress change, and backtracking.
If speed is favoured over quality, we can instead merely estimate the
cost of each tree placement. Set this to true if that is desired.
*/
cholaConstants.ESTIMATE_TREE_PLACEMENT_COSTS = false;
/*
Legacy option. Heuristic for estimating face expansion costs was discovered
to be faulty, and was updated 25 Jul 2018. Set this option to true if you
want the old behaviour.
*/
cholaConstants.USE_OLD_COST_ESTIMATE_HEURISTIC = false;
/*
We can also speed up tree placement by using an estimate of the stress
costs, in order to choose the primary expansion dimension.
*/
cholaConstants.HEURISTIC_CHOICE_FOR_PRIMARY_EXPANSION_DIMENSION = false;
/*
When making heuristic choice of primary expansion dimension, do you want
to work in the costlier dimension first? (The hope is that the bigger change
that this represents will already be enough to make room for the tree, and
you will not have to work in the other dimension at all.)
*/
cholaConstants.HCPED_COSTLIER_DIMENSION_FIRST = true;

/*
Ignore all but level zero? Doing so may miss some alternative ways to
expand a face, but will be faster.
*/
cholaConstants.WATER_LEVEL_ZERO_ONLY = false;

/*
Should we use scaling when using stress majorization for neighbour stress layout?
Recent tests have shown it is faster if we do _not_ use it.
*/
cholaConstants.USE_SCALING_IN_MAJORIZATION = false;

module.exports = cholaConstants;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraph = __webpack_require__(0).layoutBase.LGraph;

function cholaGraph(parent, graphMgr, vGraph) {
  LGraph.call(this, parent, graphMgr, vGraph);
}

cholaGraph.prototype = Object.create(LGraph.prototype);
for (var prop in LGraph) {
  cholaGraph[prop] = LGraph[prop];
}

module.exports = cholaGraph;

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

cholaGraphManager.prototype.getMaxDegree = function () {
	var allNodes = this.getAllNodes();
	var maxDegree = -1;

	for (var i = 0; i < allNodes.length; i++) {
		var node = allNodes[i];
		var degree = node.getDegree();
		if (degree > maxDegree) maxDegree = degree;
	}

	return maxDegree;
};

cholaGraphManager.prototype.getNode = function (node) {
	var allNodes = this.getAllNodes();
	for (var i = 0; i < allNodes.length; i++) {
		var n = allNodes[i];
		if (n == node) return true;
	}
	return false;
};

module.exports = cholaGraphManager;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LNode = __webpack_require__(0).layoutBase.LNode;
var IMath = __webpack_require__(0).layoutBase.IMath;

var cholaEdge = __webpack_require__(1);

function cholaNode(gm, loc, size, vNode) {
  LNode.call(this, gm, loc, size, vNode);
  this.processed = false;
  this.treeSerialNo = -1;
  this.dx = null;
  this.dy = null;
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

cholaNode.prototype.octalCode = function () {
  //Semi axes get octal codes 0,2,4,6; East:0; North:2; West:4; South:6
  //Quadrants get octal codes 1,3,5,7; NorthEast:1; NorthWest:3; SouthWest:5; SouthEast:7
  var thisLoc = this.getCenter();
  var o = -1;
  var x = this.dX;
  var y = this.dy;
  if (x > 0) {
    if (y < 0) o = 7;else {
      if (y === 0) o = 0;else o = 1;
    }
  } else if (x === 0) {
    if (y < 0) o = 6;else o = 2;
  } else {
    if (y < 0) o = 5;else {
      if (y === 0) o = 4;else o = 3;
    }
  }
  return o;
};

cholaNode.prototype.getFreeSemiLocations = function (edgeLength) {
  var edges = this.edges;
  var nbr = null;
  var availableSemis = [0, 1, 2, 3];
  var nbrLocX = null;
  var nbrLocY = null;
  for (var i = 0; i < edges.length; i++) {
    var direction = null;
    var edge = edges[i];
    if (edge.bendPoints.length == 0) {
      nbr = edge.getOtherEnd(this);
      nbrLocX = nbr.getCenter().x;
      nbrLocY = nbr.getCenter().y;
    } else {
      nbr = edge.bendPoints[0];
      nbrLocX = nbr[0];
      nbrLocY = nbr[1];
    }

    var nodeLoc = this.getCenter();
    if (nodeLoc.x == nbrLocX) {
      if (nbrLocY == nodeLoc.y + edgeLength) direction = 1;else if (nbrLocY == nodeLoc.y - edgeLength) direction = 3;
    } else if (nodeLoc.y == nbrLocY) {
      if (nbrLocX == nodeLoc.x + edgeLength) direction = 0;else if (nbrLocX == nodeLoc.x - edgeLength) direction = 2;
    }

    if (direction != null) {
      var index = availableSemis.indexOf(direction);
      availableSemis.splice(index, 1);
    }
  }
  return availableSemis;
};

cholaNode.prototype.deflectionFromSemi = function (semi, o) {
  var x = this.getCenter().x;
  var y = this.getCenter().y;
  var xSquare = x * x;
  var ySquare = y * y;
  var lSquare = xSquare + ySquare;
  var defl = 0;

  switch (semi) {
    case 0:case 2:
      defl = ySquare / lSquare;
      break;
    case 1:case 3:
      defl = xSquare / lSquare;
      break;
    default:
      break;

  }

  switch (semi) {
    case 0:
      switch (o) {
        case 3:case 5:
          defl = 2 - defl;
          break;
        case 4:
          defl = 2;
          break;
        default:
      }
      break;
    case 1:
      switch (o) {
        case 5:case 7:
          defl = 2 - defl;
          break;
        case 6:
          defl = 2;
          break;
        default:
      }
      break;
    case 2:
      switch (o) {
        case 7:case 1:
          defl = 2 - defl;
          break;
        case 0:
          defl = 2;
          break;
        default:
      }
      break;
    case 3:
      switch (o) {
        case 1:case 3:
          defl = 2 - defl;
          break;
        case 2:
          defl = 2;
          break;
        default:
      }
      break;
    default:
      break;
  }
  return defl;
};

cholaNode.prototype.getNeighbors = function () {
  //returns a list of neighbors sorted in descending order of degree
  var neighbors = [];
  for (var i = 0; i < this.edges.length; i++) {
    var nbr = this.edges[i].getOtherEnd(this);
    neighbors.push([nbr, nbr.getDegree()]);
  }
  neighbors.sort(function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] < b[1] ? -1 : 1;
    }
  });
  neighbors.reverse();
  return neighbors;
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

cholaNode.prototype.isCompound = function () {
  if (this.withChildren().size > 1) {
    return true;
  } else {
    return false;
  }
};

cholaNode.prototype.getDegree = function () {
  var edges = this.getEdges();
  var degree = 0;

  // For the edges connected
  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    if (edge.getSource().id !== edge.getTarget().id) {
      degree = degree + 1;
    }
  }
  return degree;
};

cholaNode.prototype.findDistance = function (node) {
  var nodeLoc = null;
  var nodeLocX = null;
  var nodeLocY = null;

  if (Array.isArray(node)) {
    nodeLocX = node[0];
    nodeLocY = node[1];
  } else {
    nodeLocX = node.getCenter().x;
    nodeLocY = node.getCenter().y;
  }

  var thisLoc = this.getCenter();
  var distance = Math.sqrt(Math.pow((thisLoc.x - nodeLocX).toFixed(10), 2) + Math.pow((thisLoc.y - nodeLocY).toFixed(10), 2));
  return distance;
};

cholaNode.prototype.addPadding = function (xPad, yPad) {
  this.setWidth(this.getWidth() + xPad);
  this.setHeight(this.getHeight() + yPad);
};

cholaNode.prototype.getDirec = function (v, edgeLength) {
  /*
  :param v: a Node object
  :return: the configured Compass direction from current node to v if any, else None
  */
  var thisLoc = this.getCenter();
  var vLoc = v.getCenter();
  var x1 = thisLoc.x;
  var y1 = thisLoc.y;
  var x2 = vLoc.x;
  var y2 = vLoc.y;

  var d = null;

  //checking if the nodes are already configured
  if (x1 == x2 || y1 == y2) {
    //checking if node v is aligned to north or south of node
    if (x1 == x2) {
      if (y2 == y1 + edgeLength) d = 1; //south
      else if (y2 == y1 - edgeLength) d = 3; //north  
    }
    //checking if node v is aligned to east or west of node
    else if (y1 == y2) {
        if (x2 == x1 + edgeLength) d = 0; //east
        else if (x2 == x1 - edgeLength) d = 2; //west
      }
  }
  return d;
};
module.exports = cholaNode;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Nbr(id, dx, dy, degree, processed) {
  this.id = id;
  this.x = dx;
  this.y = dy;
  this.degree = degree;
  this.processed = processed;
}

Nbr.prototype.octalCode = function () {
  //Semi axes get octal codes 0,2,4,6; East:0; North:2; West:4; South:6
  //Quadrants get octal codes 1,3,5,7; NorthEast:1; NorthWest:3; SouthWest:5; SouthEast:7
  var o = -1;
  var x = this.x;
  var y = this.y;
  if (x > 0) {
    if (y < 0) o = 7;else {
      if (y === 0) o = 0;else o = 1;
    }
  } else if (x === 0) {
    if (y < 0) o = 6;else o = 2;
  } else {
    if (y < 0) o = 5;else {
      if (y === 0) o = 4;else o = 3;
    }
  }
  return o;
};

Nbr.prototype.deflection = function () {
  var x = this.x;
  var y = this.y;
  var xSquare = x * x;
  var ySquare = y * y;
  var lSquare = xSquare + ySquare;
  var o = this.octalCode();
  var arr = [0, 1, 4, 5];
  var defl;
  if (arr.includes(o)) defl = ySquare / lSquare;else defl = xSquare / lSquare;
  return defl;
};

Nbr.prototype.deflectionFromSemi = function (semi, o) {
  var x = this.x;
  var y = this.y;
  var xSquare = x * x;
  var ySquare = y * y;
  var lSquare = xSquare + ySquare;
  var defl = 0;

  switch (semi) {
    case 0:case 2:
      defl = ySquare / lSquare;
      break;
    case 1:case 3:
      defl = xSquare / lSquare;
      break;
    default:
      break;

  }

  switch (semi) {
    case 0:
      switch (o) {
        case 3:case 5:
          defl = 2 - defl;
          break;
        case 4:
          defl = 2;
          break;
        default:
      }
      break;
    case 1:
      switch (o) {
        case 5:case 7:
          defl = 2 - defl;
          break;
        case 6:
          defl = 2;
          break;
        default:
      }
      break;
    case 2:
      switch (o) {
        case 7:case 1:
          defl = 2 - defl;
          break;
        case 0:
          defl = 2;
          break;
        default:
      }
      break;
    case 3:
      switch (o) {
        case 1:case 3:
          defl = 2 - defl;
          break;
        case 2:
          defl = 2;
          break;
        default:
      }
      break;
    default:
      break;
  }
  return defl;
};

module.exports = Nbr;

/***/ }),
/* 8 */
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
module.exports = __webpack_require__(20);

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//a struct to represent an assignment of neighbors to semiaxes, and the cost of this assignment
function Assignment(semis, cost) {
  //semis is a list [a, b, c, d] of lists of neighbors to be assigned to the semiaxes s0, s1, s2, s3 respectively
  this.semis = semis;
  this.cost = cost;
}

Assignment.prototype.union = function (other) {
  //returns a new assignment by taking a union of this assignment with another
  var semis = [[], [], [], []];
  for (var i = 0; i < this.semis.length; i++) {
    var s = this.semis[i];
    for (var j = 0; j < s.length; j++) {
      semis[i].push(s[j]);
    }

    var o = other.semis[i];
    for (var _j = 0; _j < o.length; _j++) {
      semis[i].push(o[_j]);
    }
  }
  var cost = this.cost + other.cost;
  var asgn = new Assignment(semis, cost);
  return asgn;
};

module.exports = Assignment;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Perm(code) {
  //code: a vector [a,b,c,d]
  this.lookup = code;
}

Perm.prototype.inv = function () {
  //inverse the permutation
  var code = [9, 9, 9, 9];
  var L = this.lookup;
  for (var i = 0; i < 4; i++) {
    code[L[i]] = i;
  }
  var I = new Perm(code);
  return I;
};

Perm.prototype.getValue = function () {
  return this.lookup;
};

Perm.prototype.isFlip = function () {
  var a = this.lookup[0];
  var b = this.lookup[1];
  if ((a - b) % 4 == 1) return true;else return false;
};

Perm.prototype.apply = function (a) {
  if ((typeof a === "undefined" ? "undefined" : _typeof(a)) == _typeof(0)) {
    return this.lookup[a];
  } else if ((typeof a === "undefined" ? "undefined" : _typeof(a)) == _typeof([])) {
    var b = [9, 9, 9, 9];
    for (var i = 0; i < a.length; i++) {
      var j = this.lookup[i];
      var k = a[i];
      b[j] = k;
    }
    return b;
  }
};

module.exports = Perm;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Nbr = __webpack_require__(7);
var Perm = __webpack_require__(11);
var Assignment = __webpack_require__(10);

function Arrangement(neighbors, degree, id, highIds) {
  this.div = 4;
  this.semis = [];
  this.quads = [];
  this.nbrs = neighbors;
  this.degree = degree;
  this.id = id;
  this.highIds = highIds;
}

Arrangement.prototype.getArrangement = function () {
  for (var i = 0; i < this.div; i++) {
    this.semis.push([]);
    this.quads.push([]);
  }

  var quads = this.quads;
  var nbrs = this.nbrs;
  var semis = this.semis;
  for (var _i = 0; _i < nbrs.length; _i++) {
    var nbr = nbrs[_i];
    var o = nbr.octalCode();
    if (o % 2 === 0) {
      var s = o / 2;
      semis[s].push(nbr);
    } else {
      var q = (o - 1) / 2;
      quads[q].push(nbr);
    }
  }
};

Arrangement.prototype.getAsgns = function (cyclicIds, am) {
  var trials = [];
  var assigns;
  var N = this.nbrs.length;
  var vac = this.vacancy();

  var n = N - vac.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (n === 0) {
    var a = this.basicAssignment();
    assigns = a;
  } else if (n < 0) {
    assigns = [];
  } else {
    this.getAssignment(cyclicIds, am, n);
    assigns = new Assignment(this.semis, 0);
  }
  return assigns;
};

Arrangement.prototype.getCyclicOrder = function () {
  var cyclicOrder = [];

  for (var i = 0; i < this.quads.length; i++) {
    var semi = this.semis[i];
    var quad = this.quads[i];
    var orderedNodes = [];
    if (semi != null) {
      if (Array.isArray(semi)) {
        for (var j = 0; j < semi.length; j++) {
          //cyclicOrder.push(semi[j].id);
          cyclicOrder.push(semi[j]);
        }
      } else {
        //cyclicOrder.push(semi.id);
        cyclicOrder.push(semi);
      }
    }
    for (var _j = 0; _j < quad.length; _j++) {
      var arr = [quad[_j], null];
      orderedNodes.push(arr);
    }
    if (orderedNodes.length > 1) {
      var defl = [];
      for (var k = 0; k < orderedNodes.length; k++) {
        var node = orderedNodes[k][0];
        orderedNodes[k][1] = node.deflectionFromSemi(i, node.octalCode());
      }
      orderedNodes.sort(function (a, b) {
        return a[1] - b[1];
      });
    }
    for (var _j2 = 0; _j2 < orderedNodes.length; _j2++) {
      cyclicOrder.push(orderedNodes[_j2][0]);
    }
  }
  return cyclicOrder;
};

Arrangement.prototype.findCost = function (nbr, semi, lastItem, cyclicIds) {
  var neighbor = nbr;
  var o = neighbor.octalCode();
  var defl = neighbor.deflectionFromSemi(semi, o);

  if (lastItem !== null && typeof lastItem != 'undefined') {
    var index = cyclicIds.indexOf(neighbor.id);
    var lastIndex = cyclicIds.indexOf(lastItem.id);
    var prevIndex = index - 1;
    var nextIndex = index + 1;
    if (prevIndex < 0) prevIndex += cyclicIds.length;
    if (nextIndex >= cyclicIds.length) nextIndex %= cyclicIds.length;
    if (semi == 1) {
      if (!(lastIndex == prevIndex || lastIndex == nextIndex)) defl += Math.abs(index - lastIndex);
    } else {
      if (!(lastIndex == nextIndex)) defl += Math.abs(index - lastIndex);
    }
  }
  return [lastItem, defl];
};

Arrangement.prototype.factorial = function (num) {
  var out = 1;
  for (var i = 2; i <= num; i++) {
    out = out * i;
  }return out;
};

Arrangement.prototype.combination = function (array, k) {
  var combinations = [];
  var temp = [];
  if (k == 0) return;else if (k > array.length) k = array.length;
  function run(level, start, c) {

    for (var i = start; i < array.length - k + level + 1; i++) {
      temp[level] = array[i];

      if (level < k - 1) {
        run(level + 1, i + 1, c);
      } else {
        var temp2 = JSON.parse(JSON.stringify(temp));
        c.push(temp2);
      }
    }
  }

  run(0, 0, combinations);

  console.log(combinations);
  console.log("printed combinations");
  return combinations;
};

Arrangement.prototype.compareConfiguration = function (finalNode, cyclicNodes, comb, cost, costArr, quadNodes) {
  //finding index of finalNode in cyclicNodes
  var cyclicIndex = void 0;
  for (var l = 0; l < cyclicNodes.length; l++) {
    if (cyclicNodes[l].id == finalNode.id) {
      cyclicIndex = l;
      break;
    }
  }
  var quadComb = [];
  for (var i = 0; i < this.quads.length; i++) {
    comb.splice(2 * i + 1, 0, null); // at index position 1, remove 0 elements, then add "baz" to that position
    costArr.splice(2 * i + 1, 0, null);
  }
  for (var _i2 = 0; _i2 < quadNodes.length; _i2++) {
    //will have to add code for dealing with two processed nodes in the same quad
    //currently the code works only for 1 processed node in a quad
    var node = quadNodes[_i2];
    var o = node.octalCode();
    comb[o] = node;
  }

  var combIndex = comb.indexOf(finalNode);
  var arr = [];
  for (var _i3 = 0; _i3 < this.quads.length * 2; _i3++) {
    arr.push(null);
  }

  for (var _l = 0; _l < cyclicNodes.length; _l++) {
    while (1) {
      if (!comb[combIndex]) {
        combIndex = combIndex + 1;
        if (combIndex > comb.length - 1) combIndex = combIndex % comb.length;
      } else break;
    }
    if (cyclicIndex > cyclicNodes.length - 1) cyclicIndex = cyclicIndex % cyclicNodes.length;

    if (combIndex > comb.length - 1) combIndex = combIndex % comb.length;

    if (comb[combIndex].id == cyclicNodes[cyclicIndex].id) {
      if (costArr[combIndex] != null) arr[combIndex] = costArr[combIndex];else arr[combIndex] = 0;
      cyclicIndex = cyclicIndex + 1;
      combIndex = combIndex + 1;
    } else {
      if (costArr[combIndex] != null) arr[combIndex] = costArr[combIndex] + 100;else arr[combIndex] = 0;
      cost = cost + 100;
      combIndex = combIndex + 1;
    }
  }
  return [arr, cost];
};

Arrangement.prototype.getAssignment = function (cyclicNodes, am) {
  var a = 0;

  //determine processed and non processed nodes
  var processedNodes = [];
  var unProcessedNodes = [];

  for (var i = 0; i < cyclicNodes.length; i++) {
    if (cyclicNodes[i].processed == true) processedNodes.push(cyclicNodes[i]);else unProcessedNodes.push(cyclicNodes[i]);
  }

  //if all neighbors have been processed before, then return
  if (unProcessedNodes.length == 0) return;

  var availableSemis = [];
  var unAvailableSemis = [];
  var array = [];
  ///determine available semis
  for (var _i4 = 0; _i4 < this.semis.length; _i4++) {
    if (this.semis[_i4].length == 0 || this.semis[_i4].length > 0 && this.semis[_i4][0].processed == false) {
      availableSemis.push(_i4);
      array.push(_i4);
      if (this.semis[_i4].length > 0) this.semis[_i4].splice(0, 1);
    } else unAvailableSemis.push(_i4);
  }

  //if no semis are available, then return

  if (availableSemis.length == 0) return;

  //determine processed nodes which do not lie on a semi
  var quadNodes = [];
  if (processedNodes.length != unAvailableSemis.length) {
    for (var _i5 = 0; _i5 < processedNodes.length; _i5++) {
      var node = void 0;
      for (var j = 0; j < this.nbrs.length; j++) {
        if (processedNodes[_i5].id == this.nbrs[j].id) {
          node = this.nbrs[j];
          break;
        }
      }

      var count = 0;
      for (var _j3 = 0; _j3 < unAvailableSemis.length; _j3++) {
        var semi = this.semis[unAvailableSemis[_j3]];
        if (semi[0].id == node.id) count = count + 1;
      }
      if (count == 0) {
        quadNodes.push(node);
      }
    }
  }

  //for each semi, determine unProcessed nodes with least deflection
  var costArray = [];
  for (var _i6 = 0; _i6 < availableSemis.length; _i6++) {
    for (var _j4 = 0; _j4 < unProcessedNodes.length; _j4++) {
      var _node = unProcessedNodes[_j4];
      var o = _node.octalCode();
      var semiIndex = availableSemis[_i6];
      var _cost = _node.deflectionFromSemi(semiIndex, o);
      costArray.push(_cost);
    }
  }

  //chose the node closest to a semi and fix it
  var index = costArray.indexOf(Math.min.apply(Math, costArray));
  var startNode = unProcessedNodes[index % unProcessedNodes.length];
  var startCost = costArray[index];

  var overallCostArray = [];
  var combinationsArray = [];
  var individualCostArray = [];

  if (unProcessedNodes.length == 1) {
    var finalNode = startNode;
    //check if combination follows the cyclic order
    if (unAvailableSemis.length > 0) finalNode = this.semis[unAvailableSemis[0]][0];
    for (var _i7 = 0; _i7 < availableSemis.length; _i7++) {
      var _node2 = unProcessedNodes[0];
      var _o = _node2.octalCode();
      var _semiIndex = availableSemis[_i7];
      var _comb = [];
      var costArr = [];
      _comb[availableSemis[_i7]] = _node2;
      var _cost2 = _node2.deflectionFromSemi(_semiIndex, _o);
      costArr[availableSemis[_i7]] = _cost2;
      for (var l = 0; l < unAvailableSemis.length; l++) {
        var _semiIndex2 = unAvailableSemis[l];
        _comb[_semiIndex2] = this.semis[_semiIndex2][0];
        costArr[_semiIndex2] = 0;
      }
      var out = this.compareConfiguration(finalNode, cyclicNodes, _comb, _cost2, costArr, quadNodes);
      combinationsArray.push(_comb);
      overallCostArray.push(out[1]);
      individualCostArray.push(out[0]);
    }
  } else {
    for (var _j5 = 0; _j5 < availableSemis.length; _j5++) {
      var tempArray = JSON.parse(JSON.stringify(array));
      var _semiIndex3 = availableSemis[_j5];
      var _index = array.indexOf(availableSemis[_j5]);

      var firstPart = tempArray.slice(_index);
      var secondPart = tempArray.slice(0, _index);
      firstPart.splice(0, 1);
      tempArray = firstPart.concat(secondPart);

      // let comb = [];


      // if (tempArray.length == 0)
      // {

      // }
      //find the possible combinations based on available spaces and unprocessed nodes
      var combinations = this.combination(tempArray, unProcessedNodes.length - 1);

      // if (combinations.length == 0)
      // {
      //   if (tempArray.length == 1)
      //   {
      //     for (let k = 0; k < unProcessedNodes.length; k++)
      //     {
      //       combinations.push(tempArray);
      //     }
      //   }
      // }

      for (var k = 0; k < combinations.length; k++) {
        var _cost3 = 0;
        var _costArr = [];

        //fix the startnode at the first available semi and find the cost
        var _o2 = startNode.octalCode();
        _cost3 += startNode.deflectionFromSemi(_semiIndex3, _o2);

        var _comb2 = []; //comb[semi index] = [node][cost]
        a = unProcessedNodes.indexOf(startNode) + 1;
        var c = combinations[k];
        for (var _l2 = 0; _l2 < c.length; _l2++) {
          if (a > unProcessedNodes.length - 1) a = a % unProcessedNodes.length;

          var nextNode = unProcessedNodes[a];
          var nextSemiIndex = c[_l2];
          var _o3 = nextNode.octalCode();
          var defl = nextNode.deflectionFromSemi(nextSemiIndex, _o3);
          _cost3 += defl;
          _comb2[nextSemiIndex] = nextNode;
          _costArr[nextSemiIndex] = defl;
          a = a + 1;
        }
        _comb2[_semiIndex3] = startNode;
        _costArr[_j5] = startCost;

        for (var _l3 = 0; _l3 < unAvailableSemis.length; _l3++) {
          var _index2 = unAvailableSemis[_l3];
          _comb2[_index2] = this.semis[_index2][0];
          _costArr[_index2] = 0;
        }
        var _finalNode = startNode;
        //check if combination follows the cyclic order
        if (unAvailableSemis.length > 0) _finalNode = this.semis[unAvailableSemis[0]][0];

        var out = this.compareConfiguration(_finalNode, cyclicNodes, _comb2, _cost3, _costArr, quadNodes);
        combinationsArray.push(_comb2);
        overallCostArray.push(out[1]);
        individualCostArray.push(out[0]);
      }

      // if (j == 1)
      //   break;
    }
  }
  var index = overallCostArray.indexOf(Math.min.apply(Math, overallCostArray));
  var comb = combinationsArray[index];
  var cost = individualCostArray[index];
  for (var _i8 = 0; _i8 < comb.length; _i8 = _i8 + 2) {
    if (comb[_i8] == null) continue;
    if (cost[_i8] > 100) continue;else {
      this.semis[_i8 / 2] = comb[_i8];
    }
  }

  // //if (processedNodes.length == 0)
  //   startNode = cyclicNodes[0];
  // // else
  // // {
  // //   for (let i = 0; i < cyclicNodes.length; i++)
  // //   {
  // //     if (this.highIds.indexOf(cyclicNodes[i].id) < 0)
  // //     {
  // //       startNode = cyclicNodes[i];
  // //       break;
  // //     }
  // //   }
  // // }
  // for (let i = 0; i < this.highIds.length; i++)
  // {
  //   if (this.highIds == this.ids)
  //     break;
  //   for (let j = 0; j < cyclicNodes.length; j++)
  //   {
  //     if (this.highIds[i] == cyclicNodes[j].id)
  //     {
  //       startNode = cyclicNodes[j];
  //       check = true;
  //       break;
  //     }
  //   }
  //   if (check == true)
  //     break;
  // }

  // //let node = this.nbrs[0];
  // let costArray = [];
  // let combinationsArray = [];
  // let array = [];
  // // for (let j = 0; j < this.div; j++)
  // //   array.push(j);

  //   for (let j = 0; j < this.semis.length; j++)
  //   {
  //     let indexHighId = this.highIds.indexOf(startNode.id);
  //     if ((indexHighId > -1) && (indexHighId < this.highIds.indexOf(this.id)))

  //       //a = j + 1;
  //       let cost = 0;
  //       let semi = this.semis[j];
  //       array = [0, 1, 2, 3]
  //       let index = array.indexOf(j);

  //       let firstPart = array.slice(index)
  //       let secondPart = array.slice(0, index)
  //       firstPart.splice(0, 1);
  //       array = firstPart.concat(secondPart); 

  //       let o = startNode.octalCode();
  //       cost += startNode.deflectionFromSemi(j, o);

  //       let combinations = this.combination(array, this.nbrs.length - 1);

  //       for (let k = 0; k < combinations.length; k++)
  //       {
  //         a = cyclicNodes.indexOf(startNode) + 1;
  //         let c = combinations[k];
  //         for (let l = 0; l < c.length; l++)
  //         {
  //           if (a > cyclicNodes.length - 1)
  //               a = a % cyclicNodes.length;

  //           let nextNode = cyclicNodes[a]; 
  //           let nextSemiIndex = c[l];
  //           let o = nextNode.octalCode();
  //           cost += nextNode.deflectionFromSemi(nextSemiIndex, o);
  //           a = a + 1;
  //         }
  //         combinationsArray.push([j].concat(c));
  //         costArray.push(cost); 
  //       }


  //       // if (j == 1)
  //       //   break;
  //   }
  //   var index = costArray.indexOf(Math.min(...costArray));
  //   var comb = combinationsArray[index];
  //   a = cyclicNodes.indexOf(startNode);
  //   for (let i = 0; i < cyclicNodes.length; i++)
  //   {
  //     let semiIndex = comb[i];
  //     this.semis[semiIndex] = cyclicNodes[a];
  //     a = a + 1;
  //     if (a > cyclicNodes.length - 1)
  //         a = a % cyclicNodes.length;
  //   }

  // for (let i = 0; i < this.nbrs.length; i++)
  // {
  //   var nbr = this.nbrs[i];
  //   if (this.highIds.indexOf(nbr.id) > -1 && (this.highIds.indexOf(nbr.id) < this.highIds.indexOf(this.id)))
  //     continue;
  //   else
  //   {
  //     this.semis[0].push(nbr);
  //     this.semis[1].push(nbr);
  //     this.semis[2].push(nbr);
  //     this.semis[3].push(nbr);
  //   }
  // }
  // var lastItem = null;

  // for (let i = 0; i <this.semis.length;i++)
  // {
  //   var cost = [];
  //   var semi = this.semis[i];
  //   for (let j = 0; j < semi.length; j++)
  //   {
  //     let cycleIndex = cyclicIds.indexOf(semi[j].id);
  //     var out = this.findCost(semi[j], i, lastItem, cyclicIds);
  //     lastItem = out[0];
  //     let defl = out[1];
  //     if (this.highIds.indexOf(semi[j].id) > -1 && (this.highIds.indexOf(semi[j].id) < this.highIds.indexOf(this.id)))
  //       defl = 0;
  //     cost.push(defl);
  //   }

  //   var index = cost.indexOf(Math.min(...cost));
  //   this.semis[i] = semi[index];
  //   if (typeof(this.semis[i]) != 'undefined')
  //     lastItem = this.semis[i];
  // }

  // var ignoredNodes = this.findAndRemoveDuplicates(cyclicIds);
  // this.addIgnoredNodes(ignoredNodes, cyclicIds);
  // this.updateSemisAndQuads(cyclicIds);
  // this.enforceCyclicOrder(cyclicIds, cycle);
  // var output = this.makesFlatTriangle(am);
  // if (output[0])
  //   this.removeFlatTriangle(output[1]);
};

Arrangement.prototype.makesFlatTriangle = function (matrix) {
  var allNodes = matrix[1];
  var am = matrix[0];

  for (var i = 0; i < 2; i++) {
    var s0 = this.semis[i];
    var s1 = this.semis[i + 2];
    if (s0 != null && s1 != null && typeof s0 != "undefined" && (typeof s1 === 'undefined' ? 'undefined' : _typeof(s1)) != undefined) {
      var s0Index = allNodes.indexOf(s0.id);
      var s1Index = allNodes.indexOf(s1.id);
      if (am[s0Index][s1Index] == true) return [true, [s0, s1]];
    }
  }
  return [false, null];
};

Arrangement.prototype.removeFlatTriangle = function (nodes) {
  var s0 = nodes[0];
  var s1 = nodes[1];
  var s0Index = this.semis.indexOf(s0);
  var s1Index = this.semis.indexOf(s1);

  var s0OctalCode = s0.octalCode();
  var s1OctalCode = s1.octalCode();

  var s0Cost = s0.deflectionFromSemi(this.semis[s0Index], s0OctalCode);
  var s1Cost = s1.deflectionFromSemi(this.semis[s1Index], s1OctalCode);

  if (s0Cost < s1Cost) {
    var prevIndex = s0Index - 1;
    if (prevIndex < 0) prevIndex += this.div;
    var nextIndex = s0Index + 1;
    if (nextIndex == this.div) nextIndex %= this.div;

    var cost1 = s1.deflectionFromSemi(this.semis[prevIndex], s1OctalCode) + (this.semis[prevIndex] != null ? 2 : 0);
    var cost2 = s1.deflectionFromSemi(this.semis[nextIndex], s1OctalCode) + (this.semis[nextIndex] != null ? 2 : 0);

    if (cost1 < cost2) {
      var temp = this.semis[prevIndex];
      this.semis[prevIndex] = this.semis[s1Index];
      this.semis[s1Index] = temp;
    }
    if (cost1 >= cost2) {
      var _temp = this.semis[nextIndex];
      this.semis[nextIndex] = this.semis[s1Index];
      this.semis[s1Index] = _temp;
    }
  } else {
    var _prevIndex = s1Index - 1;
    if (_prevIndex < 0) _prevIndex += this.div;
    var _nextIndex = s1Index + 1;
    if (_nextIndex == this.div) _nextIndex %= this.div;

    var _cost4 = s0.deflectionFromSemi(this.semis[_prevIndex], s0OctalCode) + (this.semis[_prevIndex] != null ? 2 : 0);
    var _cost5 = s0.deflectionFromSemi(this.semis[_nextIndex], s0OctalCode) + (this.semis[_nextIndex] != null ? 2 : 0);

    if (_cost4 < _cost5) {
      var _temp2 = this.semis[_prevIndex];
      this.semis[_prevIndex] = this.semis[s1Index];
      this.semis[s1Index] = _temp2;
    }
    if (_cost4 >= _cost5) {
      var _temp3 = this.semis[_nextIndex];
      this.semis[_nextIndex] = this.semis[s1Index];
      this.semis[s1Index] = _temp3;
    }
  }
};

Arrangement.prototype.updateSemisAndQuads = function (cyclicIds) {
  for (var i = 0; i < cyclicIds.length; i++) {
    var id = cyclicIds[i];
    for (var j = 0; j < this.semis.length; j++) {
      if (typeof this.semis[j] == 'undefined' || this.semis[j] == null) continue;
      if (this.semis[j].id == id) {
        for (var k = 0; k < this.quads.length; k++) {
          var quad = this.quads[k];
          for (var l = 0; l < quad.nbrs.length; l++) {
            if (quad.nbrs[l].id == id) quad.nbrs.splice(l, 1);
          }
        }
      }
    }
  }
};

Arrangement.prototype.enforceCyclicOrder = function (cyclicIds, cycles) {
  //getting current cyclicOrder from Semis
  var cyclicOrder = this.getCyclicOrder();
  if (JSON.stringify(cyclicOrder) == JSON.stringify(cyclicIds)) return;

  var arr = [];

  for (var i = 0; i < cyclicIds.length; i++) {
    var node = cyclicIds[i];
    var a = [node];
    var actualIndex = cyclicOrder.indexOf(node);
    var j = 0;
    var k = i;
    while (j < cyclicIds.length - 1) {
      actualIndex += 1;
      k += 1;
      if (actualIndex >= cyclicIds.length) {
        actualIndex %= cyclicIds.length;
      }
      if (k >= cyclicIds.length) {
        k %= cyclicIds.length;
      }
      if (cyclicIds[k] == cyclicOrder[actualIndex]) a.push(cyclicIds[k]);else {
        break;
      }
      j++;
    }
    arr.push(a);
  }

  var maxLength = 0;
  var maxIndex1 = 0;
  var maxIndex2 = 0;
  var maxIndex = 0;
  for (var _i9 = 0; _i9 < arr.length; _i9++) {
    if (arr[_i9].length > maxLength) {
      maxLength = arr[_i9].length;
      maxIndex1 = _i9;
    }
  }
  if (maxLength == cyclicIds.length) return;else {
    var maxDegree = 0;
    var hdnbr = void 0;
    for (var _i10 = 0; _i10 < cyclicIds.length; _i10++) {
      for (var _j6 = 0; _j6 < this.nbrs.length; _j6++) {
        if (cyclicIds[_i10] == this.nbrs[_j6].id) {
          if (this.nbrs[_j6].degree > maxDegree) {
            hdnbr = cyclicIds[_i10];
            maxDegree = this.nbrs[_j6].degree;
          }
        }
      }
    }
    for (var _i11 = 0; _i11 < arr.length; _i11++) {
      if (arr[_i11][0] == hdnbr) {
        maxIndex2 = _i11;
        break;
      }
    }

    if (this.highIds.indexOf(hdnbr) > -1 && this.highIds.indexOf(hdnbr) < this.highIds.indexOf(this.id)) {
      maxIndex = maxIndex2;
    } else {
      maxIndex = maxIndex1;
    }
    var order = arr[maxIndex];
    var startIndex = cyclicIds.indexOf(order[0]);
    startIndex += 1;
    var semiIndex = 0;
    for (var _i12 = 0; _i12 < this.semis.length; _i12++) {
      if (this.semis[_i12] != null && this.semis[_i12].id == order[0]) {
        semiIndex = _i12;
        break;
      }
    }
    semiIndex += 1;
    var insertCount = 0;
    for (var _i13 = 0; _i13 < this.semis.length - 1; _i13++) {
      if (startIndex >= cyclicIds.length) {
        startIndex %= cyclicIds.length;
      }
      if (semiIndex >= cyclicIds.length) {
        semiIndex %= cyclicIds.length;
      }
      var semi = this.semis[semiIndex];

      if (_typeof(order[_i13 + 1] == 'undefined') || typeof semi == 'undefined' || semi == null || semi.id != order[_i13 + 1]) {
        for (var _j7 = 0; _j7 < this.nbrs.length; _j7++) {
          if (this.nbrs[_j7].id == cyclicIds[startIndex]) {
            this.semis[semiIndex] = this.nbrs[_j7];
            insertCount++;
            break;
          }
        }
      }
      startIndex += 1;
      semiIndex += 1;
      if (insertCount == cyclicIds.length - 1) break;
    }
  }
};

Arrangement.prototype.findAndRemoveDuplicates = function (cyclicIds) {
  //finding duplicate assignments of same node
  var ids = [];
  for (var i = 0; i < this.semis.length; i++) {
    if (typeof this.semis[i] != 'undefined') ids.push(this.semis[i].id);else {
      ids.push(null);
    }
  }

  var counts = {};
  ids.forEach(function (el) {
    return counts[el] = 1 + (counts[el] || 0);
  });

  var ignoredNodes = [];
  for (var _i14 = 0; _i14 < this.nbrs.length; _i14++) {
    var nbrId = this.nbrs[_i14].id;
    if (typeof counts[nbrId] !== 'undefined' & counts[nbrId] !== null) {
      //find the indexes of the duplicate assignments
      if (counts[nbrId] > 1) {
        var dupIndexes = [];
        for (var j = 0; j < ids.length; j++) {
          if (ids[j] == nbrId) dupIndexes.push(j);
        }

        //calculate the costs for both assignments and remove the one with the larger cost
        var deflArray = [];
        var cycleIndex = cyclicIds.indexOf(nbrId);
        for (var _j8 = 0; _j8 < dupIndexes.length; _j8++) {
          var defl = 0;
          var semi = dupIndexes[_j8];
          var o = this.semis[semi].octalCode();
          defl += this.semis[semi].deflectionFromSemi(semi, o);
          deflArray.push(defl);
        }

        var index = deflArray.indexOf(Math.min.apply(Math, deflArray));
        for (var _j9 = 0; _j9 < dupIndexes.length; _j9++) {
          if (_j9 != index) this.semis[dupIndexes[_j9]] = null;
        }
      }
    } else {
      if (this.nbrs[_i14].degree <= this.nbrs.length) ignoredNodes.push(nbrId);
    }
  }
  return ignoredNodes;
};

Arrangement.prototype.addIgnoredNodes = function (ignoredNodes /*, direction*/, cyclicIds) {
  var lastItem = null;
  for (var j = 0; j < ignoredNodes.length; j++) {
    var freeIndexes = [];
    //find the possible empty locations where nodes can be assigned
    for (var i = 0; i < this.semis.length; i++) {
      if (this.semis[i] == null) freeIndexes.push([i, lastItem]);else {
        lastItem = this.semis[i];
      }
    }

    var nbr = null;
    for (var _i15 = 0; _i15 < this.nbrs.length; _i15++) {
      if (this.nbrs[_i15].id == ignoredNodes[j]) {
        nbr = this.nbrs[_i15];
        break;
      }
    }

    //calculate the costs for all assignments and assigns to the one with lowest cost
    var deflArray = [];
    for (var _i16 = 0; _i16 < freeIndexes.length; _i16++) {
      var semi = freeIndexes[_i16][0];
      var o = nbr.octalCode();
      var out = this.findCost(nbr, semi, freeIndexes[_i16][1], cyclicIds);
      var defl = out[1];
      deflArray.push(defl);
    }
    var index = deflArray.indexOf(Math.min.apply(Math, deflArray));
    this.semis[freeIndexes[index][0]] = nbr;
  }
};

Arrangement.prototype.vacancy = function () {
  var vec = [];
  for (var i = 0; i < this.semis.length; i++) {
    var semi = this.semis[i];
    if (semi.length === 0) vec.push(0);else {
      vec.push(1);
    }
  }
  return vec;
};

Arrangement.prototype.basicAssignment = function () {
  var arr = new Assignment(this.semis, 0);
  return arr;
};

module.exports = Arrangement;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Nbr = __webpack_require__(7);
var Arrangement = __webpack_require__(12);

function assign() {}

assign.prototype.getCyclicOrder = function (node) {
  var neighbors = [];
  for (var i = 0; i < node.edges.length; i++) {
    var edge = node.edges[i];
    var other = edge.getOtherEnd(node);
    var otherLoc = other.getCenter();
    var nodeLoc = node.getCenter();
    var dx = otherLoc.x - nodeLoc.x;
    var dy = otherLoc.y - nodeLoc.y;
    var moved = other.moved;
    var degree = other.getDegree();
    var processd = other.processed;
    var neighbor = new Nbr(other.id, dx, dy, degree, processd);
    neighbors.push(neighbor);
  }
  var arr = new Arrangement(neighbors, node.getDegree());
  arr.getArrangement();
  return arr.getCyclicOrder();
};

assign.prototype.getNeighborAssignments = function (node, cyclicIds, highIds, am) {
  var neighbors = [];
  for (var i = 0; i < node.edges.length; i++) {
    var edge = node.edges[i];
    var other = edge.getOtherEnd(node);
    var otherLoc = other.getCenter();
    var nodeLoc = node.getCenter();
    var dx = otherLoc.x - nodeLoc.x;
    var dy = otherLoc.y - nodeLoc.y;
    var degree = other.getDegree();
    var processd = other.processed;
    var neighbor = new Nbr(other.id, dx, dy, degree, processd);
    neighbors.push(neighbor);
  }
  var arr = new Arrangement(neighbors, node.getDegree(), node.id, highIds);
  arr.getArrangement();
  var asgns = arr.getAsgns(cyclicIds, am);
  return asgns;
};

module.exports = assign;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function bendSequence(bendtypes) {
    var dIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var dOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    this.bendtypes = bendtypes;
    this.bendpoints = [];
    this.cost = 0;
    this.incomingDirec = dIn;
    this.outgoingDirec = dOut;
};

bendSequence.prototype.repr = function () {
    var s = this.bendtypes.toString();
    if (this.incomingDirec != null) s += ' entering ' + this.incomingDirec;
    if (this.outgoingDirec != null) s += ' exiting ' + this.outgoingDirec;
    return s;
};

module.exports = bendSequence;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compass = __webpack_require__(2);
var LinkShape = __webpack_require__(17);
var BendSequence = __webpack_require__(14);

function chain(gm, nodes) {
    var cycle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    /*
        :param gm: the Graph to which the Chain belongs
        :param links: a list(-like object) of the links belonging to the chain, in order
        :param cycle: boolean saying if this chain forms a cycle
        */
    this.gm = gm;
    this.aestheticBends = [];
    if (nodes.length == 0) return;
    this.nodes = nodes;
    this.cycle = cycle;
    if (this.cycle) {
        if (this.nodes.length < 3) return;
        // For cycles, we always store the links in clockwise order.
        // Start by getting the index of a node of minimal y-coord.
        var min = this.nodes[0].getCenter().y;
        var index1 = 0;
        for (var i = 0; i < this.nodes.length; i++) {
            var node = this.nodes[i];
            var loc = node.getCenter();
            var y = loc.y;
            if (y < min) {
                min = y;
                index1 = i;
            }
        }

        var index0 = index1 - 1;
        if (index0 < 0) index0 = index0 + this.nodes.length;
        var index2 = index1 + 1;
        if (index2 < 0) index2 = index2 + this.nodes.length;
        var node0 = this.nodes[index0];
        var node1 = this.nodes[index1];
        var node2 = this.nodes[index2];

        if (node0.getCenter().x < node1.getCenter().x) {
            // already clockwise
        } else if (node0.getCenter().x > node1.getCenter().x) {
            // anticlockwise
            this.nodes.reverse();
        } else {
            // Part and parcel of the assumption that the cycle even /has/ an interior
            // is the assumption that it is not this-intersecting. Therefore, since
            // both neighbouring nodes n0 and n2 have y-coord >= that of n1, they cannot
            // both have the same x-coord as n1. Therefore...

            if (node2.getCenter().x > node1.getCenter().x) {
                // already clockwise
            } else {
                // anticlockwise
                this.nodes.reverse();
            }
        }
    }
    // Compute and store the shape of each link.
    this.shapes = [];
    for (var _i = 0; _i < nodes.length; _i++) {
        this.shapes.push(this.shapeOfLink(nodes[_i]));
    }

    // Determine the sequence of internal edges, as well as the
    // anchor nodes and edges if it is not a cycle,
    // or the "return edge" if it is a cycle.
    this.edges = [];
    this.anchorNodeLeft = null;
    this.anchorEdgeLeft = null;
    this.anchorNodeRight = null;
    this.anchorEdgeRight = null;
    this.returnEdge = null;
    var n0 = this.nodes[0];
    var e1 = n0.edges[0];
    var e2 = n0.edges[1];
    var n1 = e1.getOtherEnd(n0);
    var n2 = e2.getOtherEnd(n0);
    var e0 = null;
    if (nodes.length == 1) {
        // In this case 'left' and 'right' are meaningless, so record
        // the nodes and edges in any way.
        this.anchorNodeLeft = n1;
        this.anchorEdgeLeft = e1;
        this.anchorNodeRight = n2;
        this.anchorEdgeRight = e2;
    } else {
        if (n1 == nodes[1]) {
            this.anchorNodeLeft = n2;
            this.anchorEdgeLeft = e2;
            e0 = e1;
        } else {
            this.anchorNodeLeft = n1;
            this.anchorEdgeLeft = e1;
            e0 = e2;
        }
        for (var _i2 = 1; _i2 < this.nodes.length; _i2++) {
            var n0 = this.nodes[_i2];
            //Append the edge e0 that leads into n0 from the left.
            this.edges.push(e0);
            // And get the next edge.
            var E = [];
            for (var j = 0; j < n0.edges.length; j++) {
                E.push(n0.edges[j]);
            }

            E.splice(E.indexOf(e0), 1);
            if (E.length > 0) e0 = E[0];
        }
        this.anchorEdgeRight = e0;
        this.anchorNodeRight = e0.getOtherEnd(n0);
        if (this.cycle) {
            // In the case of a cycle, the "anchors" are meaningless, but harmless.
            this.returnEdge = this.anchorEdgeRight;
        }
    }
};

chain.prototype.shapeOfLink = function (link) {
    //param link: a Node of degree 2
    //return: the LinkShape for the shape of this link

    var d = [];
    for (var i = 0; i < link.edges.length; i++) {
        var edge = link.edges[i];
        var v = edge.getOtherEnd(link);
        var comp = new compass();
        d.push(comp.cardinalDirection(link, v));
    }
    d.sort(function (a, b) {
        return a - b;
    });
    //convert array to string and remove commas
    d = d.toString().replace(/,/g, "");

    var out = null;
    var ls = new LinkShape();
    //get the respective linkshape
    switch (d) {
        case '01':
            out = ls.r;
            break;
        case '02':
            out = ls.u;
            break;
        case '03':
            out = ls.n;
            break;
        case '12':
            out = ls.g;
            break;
        case '13':
            out = ls.i;
            break;
        case '23':
            out = ls.j;
            break;
    }
    return out;
};
// def __init__(this, gm, links, cycle=False):


// def __len__(this):
//     return len(this.links)

// def __repr__(this):
//     s = 'Chain: %s' % [node.ID for node in this.links]
//     #if this.cycle:
//     #    s += ' (cycle)'
//     #elif this.isEll():
//     #    s += ' (ell)'
//     verbose = True
//     if verbose:
//         s += '\n    Internal edges:\n'
//         for edge in this.edges:
//             s += '    %s\n' % edge
//         if this.cycle:
//             s += '    Cycle return edge: %s\n' % this.returnEdge
//         else:
//             s += '    Left anchor: %s, %s\n' % (
//                 this.anchorNodeLeft.ID, this.anchorEdgeLeft
//             )
//             s += '    Right anchor: %s, %s\n' % (
//                 this.anchorNodeRight.ID, this.anchorEdgeRight
//             )
//     return s

// def addRoutePointsInGraph(this, G):
//     for a in this.aestheticBends:
//         a.addRoutePointToEdgeInGraph(G)

chain.prototype.getNode = function (i) {
    /*
    Together with the getEdge function, this function allows us to have the indices
        0, 1, 2, 3, ...
    refer to the first node in the chain, then the first edge, next node, next edge, ...
     :param i: an even integer from -2 to 2n, where n is the number of links in
              this chain.
    :return: left anchor node for i == -2, this.links[i/2] for i from 0 to 2n-2,
             and right anchor node for i == 2n
    */
    var len = this.nodes.length;
    //assert(i%2==0 and -2 <= i and i <= 2*n)
    if (i == -2) return this.anchorNodeLeft;else if (i == 2 * len) return this.anchorNodeRight;else return this.nodes[i / 2];
};

chain.prototype.getEdge = function (i) {
    /*
    Together with the getNode function, this function allows us to have the indices
        0, 1, 2, 3, ...
    refer to the first node in the chain, then the first edge, next node, next edge, ...
     :param i: an odd integer from -1 to 2n-1, where n is the number of links in
              this chain
    :return: left anchor edge for i == -1, this.edges[(i-1)/2] for i from 1 to 2n-3,
             and right anchor edge for i == 2n-1
    */
    var len = this.nodes.length;
    //assert(i%2==1 and -1 <= i and i <= 2*n-1)
    if (i == -1) return this.anchorEdgeLeft;else if (i == 2 * len - 1) return this.anchorEdgeRight;else return this.edges[(i - 1) / 2];
};

// def numBends(this):
//     return len(filter(lambda sh: sh in LinkShape.bent, this.shapes))

// def isEll(this):
//     """
//     "Ell-chains" are those with precisely one bent link.
//     :return: boolean
//     """
//     return this.numBends() == 1

// def getNodePairsForRange(this, i0, i1):
//     """
//     :param i0: index in range [0, len(this.links) - 2]
//     :param i1: index in range [1, len(this.links) - 1]
//     :return: node pairs (i0, i0+1), (i0+1, i0+2), ..., (i1-1, i1)
//     """
//     return [
//         (this.links[a], this.links[a+1])
//         for a in range(i0, i1)
//     ]

// def nextBendIndex(this, i0):
//     """
//     :param i0: an index
//     :return: the index of the next bent link on or after index i0, or -1 if none
//     """
//     i1 = -1
//     for i, shape in enumerate(this.shapes[i0:]):
//         if shape in LinkShape.bent:
//             i1 = i
//             break
//     return i1

// def firstBendIndex(this):
//     """
//     :return: index of first bent link, or -1 if none
//     """
//     return this.nextBendIndex(0)

chain.prototype.bendCost = function (bendtype, i0) {
    /*
    :param bendtype: a bent LinkShape
    :param i0: a position in the chain -- evens for links, odds for edges
    :return: the cost of creating that bend shape at that position, given
             current geometry.
             If this Chain is a cycle, then the cost takes into account that
             the links are in clockwise order.
    */
    // First compute the angle alpha for position i0.
    // This is the atan2 for a vector z from point p to point q, where
    // if i0 is an edge then p is centre of node i0 - 1 and q centre of node i0 + 1;
    // if i0 is a node then p and q are points on edges i0 - 1 and i0 + 1 resp, a
    // each a unit distance from centre of node i0.
    var p = 0;
    var q = 0;
    if (i0 % 2 == 1) //i0 is an edge
        {
            var u = this.getNode(i0 - 1).getCenter();
            var w = this.getNode(i0 + 1).getCenter();
            p = [u.x, u.y];
            q = [w.x, w.y];
        } else {
        var _u = this.getNode(i0 - 2).getCenter();
        var v = this.getNode(i0).getCenter();
        var _w = this.getNode(i0 + 2).getCenter();
        p = [_u.x - v.x, _u.y - v.y];
        q = [_w.x - v.x, _w.y - v.y];
        var lp = Math.sqrt(Math.pow(p[0], 2) + Math.pow(p[1], 2));
        var lq = Math.sqrt(Math.pow(q[0], 2) + Math.pow(q[1], 2));

        p[0] = p[0] / lp;
        p[1] = p[1] / lp;
        q[0] = q[0] / lq;
        q[1] = q[1] / lq;
    }
    var z = [q[0] - p[0], q[1] - p[1]];
    // Get angle in degrees.
    var alpha0 = Math.atan2(z[1], z[0]) * (180 / Math.PI);

    //values from LInkShape.bentCW = [0, 3, 5, 2];
    var r = 0;
    var g = 3;
    var j = 5;
    var n = 2;
    var cost = null;
    if (this.cycle) {
        // For a cycle each type of bend has a specific angle associated with it,
        // so you can be up to +/-180 degrees off.
        var beta = [-45, null, -135, 45, null, 135][bendtype];
        var alpha1 = alpha0 - beta;
        //assert(-360 < alpha1 and alpha1 <= 360)
        if (alpha1 <= -180) alpha1 = alpha1 + 360;else if (alpha1 > 180) alpha1 = alpha1 - 360;
        //assert(-180 < alpha1 and alpha1 <= 180)
        // Normalise the cost.
        cost = Math.abs(alpha1 / 180);
    } else {
        // For a non-cycle we don't distinguish between r and j, or between g and n
        // bends, so you can only be up to +/- 90 degrees off.
        //assert(-180 < alpha0 and alpha0 <= 180)
        if (alpha0 <= -90) alpha0 = alpha0 + 180;else if (alpha0 > 90) alpha0 -= alpha0 - 180;
        //assert(-90 < alpha0 and alpha0 <= 90)
        var _beta = [-45, null, 45, 45, null, -45][bendtype];
        var _alpha = alpha0 - _beta;
        //assert(-135 < alpha1 and alpha1 <= 135)
        if (_alpha <= -90) _alpha = _alpha + 180;else if (_alpha > 90) _alpha = _alpha - 180;
        //assert(-90 < alpha1 and alpha1 <= 90)
        // Normalise the cost.
        cost = Math.abs(_alpha / 90);
    }
    return cost;
};

chain.prototype.nextLocalOptimalPoint = function (i0, bendtype) {
    var remaining = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    /*
    :param i0: a position in the chain
    :param bendtype: a bent LinkShape
    :param remaining: how many more points we must choose /after/ this one
    :return: (i1, c) being the chosen point and the cost there
     We choose a locally optimal point i1 /at or after/ position i0, at which to create
    the given bend type. Optimality means minimal cost, from the bendCost function.
     If remaining == r and there are at least r positions left after i0 in the chain,
    then we return an i1 which has at least r points left after it; if not,
    then we just return i1 = i0.
    */
    var len = this.nodes.length;
    var candidate = null;
    var bestCost = 10; // effectively infinity since costs are at most 1
    var i1 = i0;
    var M = 2 * len - 1;

    if (this.cycle) M = M + 1;

    M = M - remaining;
    var cost = bestCost;

    var check = false;
    for (var i = i0; i < M; i++) {
        cost = this.bendCost(bendtype, i);
        if (candidate != null && cost > bestCost) {
            i1 = candidate;
            cost = bestCost;
            check = true;
            break;
        }
        // To even be considered a candidate for optimal position, the cost
        // has to be less than 0.5. Else we might start at bad and go to worse,
        // and thereby accept bad.
        if (cost < 0.5 && cost < bestCost) {
            candidate = i;
            bestCost = cost;
        }
    }
    if (check == false) {
        if (candidate != null) {
            i1 = candidate;
            cost = bestCost;
        }
    }
    return [i1, cost];
};
chain.prototype.globalOptimalPoint = function (bendtype) {
    var beginAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    /*
    :param bendtype: a bent LinkShape
    :param beginAt: a position in the chain
    :return: (i, c) being the point and the cost
     We choose a locally optimal point /at or after/ position beginAt, at which to create
    the given bend type. Optimality means minimal cost, from the bendCost function.
     If there are no points left after beginAt, we return None.
    */
    var len = this.nodes.length;
    var i0 = null;
    var cost = 10; // max cost is 1, so 10 is effectively infinity
    var M = 2 * len - 1;

    if (this.cycle) M = M + 1;

    for (var i = beginAt; i < M; i++) {
        var c = this.bendCost(bendtype, i);
        if (c < cost) {
            i0 = i;
            cost = c;
        }
    }

    return [i0, cost];
};

chain.prototype.evaluateBendSeq = function (bendseq) {
    /*
    :param bendseq: a BendSequence object
    :return: the given bendseq object, for convenience
     We compute the best places for the prescribed bendtypes to occur and stash them in
    the bendpoints field of the bendseq object, and the cost of creating these bends in
    the cost field.
     The "places" are indices 0, 1, 2, 3, ... which refer to the first node in the chain,
    then the first edge, next node, next edge, and so on, with even numbers meaning links
    */

    var queue = JSON.parse(JSON.stringify(bendseq.bendtypes));
    var i = 0;
    var cost = 0;
    var bendpoints = [];
    while (queue.length > 1) {
        var bendtype = queue[0];
        queue.shift();
        var out = this.nextLocalOptimalPoint(i, bendtype, queue.length);
        i = out[0];
        var c = out[1];
        if (i != null) {
            bendpoints.push(i);
            cost = cost + c;
            i = i + 1;
        }
    }
    if (queue.length == 1) {
        var _bendtype = queue[0];
        queue.shift();
        var _out = this.globalOptimalPoint(_bendtype, i);
        i = _out[0];
        var _c = _out[1];
        if (i != null) {
            bendpoints.push(i);
            cost = cost + _c;
            i = i + 1;
        }
    }

    bendseq.bendpoints = bendpoints;
    bendseq.cost = cost;
    return bendseq;
};

chain.prototype.cwIncomingDirForBend = function (b) {
    /*
    :param b: a bent LinkShape
    :return: the clockwise incoming Compass direction for the given bend type
    */
    var arr = [3, null, 2, 0, null, 1];
    return arr[b];
};

chain.prototype.applyBendToDir = function (b, d) {
    /*
    :param b: a bent LinkShape
    :param d: a cardinal Compass direction
    :return: the cardinal direction you would be going if you came into bend b
             going in direction d, and then followed the bend; None if b and d
             are incompatible
    */
    var lookup = [[null, null, 1, 0], null, [null, 0, 3, null], [1, null, null, 2], null, [3, 2, null, null]];
    return lookup[b][d];
};

chain.prototype.writeConfigSeq = function (bendseq) {
    /*
    :param bendseq: a BendSequence object, whose bendpoints are indices into this
            Chain's sequence of links AND edges -- thus even indices for links and
            odd indices for edges. Its corresponding bendtypes are the types of bends
            that should occur at those indices.
     :return: a "configuration sequence," which looks like
                [ c0, c1, ..., cm-1 ]
            where m the number of edges to be configured, which is n - 1 if this is
            not a cycle, and n if it is -- n the number of links in the chain --
            and each ci is a list of length 1 or 2, containing Compass directions.
             When ci == [ d ], then edge i is to be configured in direction d.
            When ci == [d1, d2], then edge i is to be replaced by a bend point,
            which we go into in direction d1, and come out of in direction d2.
    */
    var m = this.edges.length;
    var config = [];
    var bends = [];

    var dIn = null;

    for (var i = 0; i < bendseq.bendpoints.length; i++) {
        bends.push([bendseq.bendpoints[i], bendseq.bendtypes[i]]);
    }

    if (this.cycle) {
        m = m + 1;
        //assert(len(bends) == 4)
        var bt0 = bends[0][1]; //get first bendtype
        // Since we always run cycles clockwise, we can infer from the first bendtype
        // what the incoming direction must be.
        dIn = this.cwIncomingDirForBend(bt0);
    } else {
        // Not a cycle
        dIn = bendseq.incomingDirec;
        //assert(dIn is not None)
    }
    var ptr = 0;
    var direc = dIn;
    for (var j = 0; j < m; j++) {
        if (ptr == bends.length) {
            // All remaining edges get the current direc.
            config.push([direc]);
        } else {
            var k = 2 * j + 1;
            var bs = [];
            while (ptr < bends.length && (bends[ptr][0] == k || bends[ptr][0] == k - 1)) {
                bs.push(bends[ptr]);
                ptr = ptr + 1;
            }
            // At this point, k is an odd number, referring to an edge in the chain,
            // direc is the incoming direction into node k - 1, and bs is a list of
            // bend points of length 0, 1, or 2, occurring at node k - 1 and/or edge k.
            // Our job is to: (a) describe what happens at edge k, namely either that
            // it be configured to run in a certain compass direction, or that it contain
            // a bend point, with certain incoming and outgoing compass directions;
            // and (b) to set direc equal to the (outgoing) direction of the edge that
            // leads into node k + 1.
            if (bs.length == 2) {
                var bp0 = bs[0][0];
                var _bt = bs[0][1];
                var bp1 = bs[1][0];
                var bt1 = bs[1][1];
                var dir0 = this.applyBendToDir(_bt, direc);
                var dir1 = this.applyBendToDir(bt1, dir0);
                config.push([dir0, dir1]);
                direc = dir1;
            } else if (bs.length == 1) {
                var bp = bs[0][0];
                var bt = bs[0][1];
                var nextDir = this.applyBendToDir(bt, direc);
                //assert(nextDir is not None)
                if (bp == k) {
                    // Next bend should occur at this edge.
                    config.push([direc, nextDir]);
                } else if (bp == k - 1) {
                    // Next bend should occur at the node before this edge.
                    config.push([nextDir]);
                }
                direc = nextDir;
            } else {
                // Carry on with current direction.
                // In particular, this case handles what happens if the final
                // bend is to occur at the final node. For in that case all we
                // can do is carry on with the current direction, and it is
                // up to the anchorEdgeRight to make the final bend happen.
                config.push([direc]);
            }
        }
    }
    return config;
};

chain.prototype.possibleBendSeqs = function (edgeLength) {
    /*
    :return: list [s0, s1, ..., sk] where each si is a BendSequence object,
             indicating a sequence of bends that this
             chain may have, given its endpoints.
              If "no bends" is a possibility, we return a BendSequence with empty
             list of bend types.
    */
    if (this.nodes.length == 1) return;

    var seqs = [];
    if (this.cycle) {
        for (var i = 0; i < LinkShape.bent.length; i++) {
            var bt = LinkShape.bent[i];
            var ls = new LinkShape();
            var bs = new BendSequence(ls.cwBendsFrom(bt));
            seqs.push(bs);
        }
    } else {
        // Get incoming and outgoing directions:
        var A = this.anchorNodeLeft;
        var Z = this.anchorNodeRight;
        var b = this.nodes[0];
        var y = this.nodes[this.nodes.length - 1];
        var dIn = A.getDirec(b, edgeLength);
        var dOut = y.getDirec(Z, edgeLength);
        var dIns = [];
        var dOuts = [];

        // If edge (A, b) or (y, Z) is not configured, we look up possible directions.
        if (dIn != null) dIns = [dIn];else {
            var comp = new compass();
            dIns = comp.possibleCardinalDirections(A, b);
        }

        if (dOut != null) dOuts = [dOut];else {
            var comp = new compass();
            dOuts = comp.possibleCardinalDirections(y, Z);
        }

        // Now computing the sequences.
        for (var _i3 = 0; _i3 < dIns.length; _i3++) {
            var d0 = dIns[_i3];
            for (var j = 0; j < dOuts.length; j++) {
                var d1 = dOuts[j];
                var bendSeqs = this.lookupMinimalBendSeqs(A, d0, Z, d1);
                for (var k = 0; k < bendSeqs.length; k++) {
                    var _bs = bendSeqs[k];
                    var temp = new BendSequence(_bs, dIn = d0, dOut = d1);
                    seqs.push(temp);
                }
            }
        }
    }
    return seqs;
};

chain.prototype.lookupMinimalBendSeqs = function (A, d0, Z, d1) {
    /*
    :param A: Node at beginning of path
    :param d0: Compass direction in which to depart from A
    :param Z: Node at end of path
    :param d1: Compass direction in which to enter Z
    :return: a list [s0, s1, ..., sk-1] where each si is a list of LinkShapes.
             These are all and only the sequences of bends that can occur on
             a bend-minimal orthogonal route from node A to node Z, with the
             prescribed departure and arrival directions d0 and d1.
              You always get at least one si, but it itself may be empty (meaning
             that the best path has zero bends).
    */

    //values from LInkShape.bentCW = [0, 3, 5, 2];
    var r = 0;
    var g = 3;
    var j = 5;
    var n = 2;

    var pMap = [[0, 2, 2, 3, 5, 5, 6, 8, 8], //E
    [6, 3, 0, 8, 5, 2, 8, 5, 2], //S
    [8, 8, 6, 5, 5, 3, 2, 2, 0], //W
    [2, 5, 8, 2, 5, 8, 0, 3, 6]][d1]; //N

    var d0Map = [[0, 1, 2, 3], //E
    [3, 0, 1, 2], //S
    [2, 3, 0, 1], //W
    [1, 2, 3, 0]][d1]; //N

    var bendMap = [[r, null, n, g, null, j], //E
    [g, null, r, j, null, n], //S
    [j, null, g, n, null, r], //W
    [n, null, j, r, null, g]][d1]; //N

    var x = null;
    var y = null;

    if (A.getCenter().x < Z.getCenter().x) x = 0;else {
        if (A.getCenter().x == Z.getCenter().x) x = 1;else x = 2;
    }

    if (A.getCenter().y < Z.getCenter().y) y = 0;else {
        if (A.getCenter().y == Z.getCenter().y) y = 1;else y = 2;
    }

    var p = 3 * y + x;

    var eastFinalLookup = [[[[g, n]], [[n]], [[r, n]], [[r, g, n], [g, r, n]]], //0
    null, //1
    [[[j, g, r, n], [g, j, r, n], [g, j, n, r]], [[j, r, n], [j, n, r]], [[r, n]], [[g, r, n]]], //2
    [[[]], [[n, j, r]], [[n, r, g, n], [r, n, j, r]], [[r, g, n]]], //3
    null, //4
    [[[j, g, r, n], [g, j, n, r]], [[j, n, r]], [[n, g, r, n], [r, j, n, r]], [[g, r, n]]], //5
    [[[j, r]], [[n, j, r], [j, n, r]], [[n, r]], [[r]]], //6
    null, //7
    [[[g, j, n, r], [j, g, n, r], [j, g, r, n]], [[j, n, r]], [[n, r]], [[g, n, r], [g, r, n]]] //8
    ];

    var lookup = eastFinalLookup[pMap[p]][d0Map[d0]];
    var bends = [];

    for (var i = 0; i < lookup.length; i++) {
        var seq = lookup[i];
        var temp = [];
        for (var _j = 0; _j < seq.length; _j++) {
            var bend = seq[_j];
            temp.push(bendMap[bend]);
        }
        bends.push(temp);
    }

    return bends;
};

chain.prototype.takeShapeBasedConfiguration = function (edgeLength) {
    /*
    Give this chain an orthogonal configuration best fitting its present
    geometric shape, i.e. putting the bend points in the most natural places,
    including the possibility that they go where edges are (meaning a new bend
    point is created).
     :return: boolean saying if anything changed
    */

    // For a chain of one node, there is nothing to do.
    var changes = [];

    if (this.nodes.length == 1) {
        var node = this.nodes[0];
        var edges = node.edges;
        var neighbors = [edges[0].getOtherEnd(node), edges[1].getOtherEnd(node)];
        var nbr1FreePositions = neighbors[0].getFreeSemiLocations(edgeLength);
        var nbr2FreePositions = neighbors[1].getFreeSemiLocations(edgeLength);
        var nbr = null;
        var otherNbr = null;
        var freePos = 0;

        //find the neighbors with least number of free semi locations
        if (nbr1FreePositions.length == 0 || nbr2FreePositions.length == 0) return changes;

        if (nbr1FreePositions.length > nbr2FreePositions.length) {
            nbr = neighbors[1];
            otherNbr = neighbors[0];
            freePos = nbr2FreePositions;
        } else {
            nbr = neighbors[0];
            otherNbr = neighbors[1];
            freePos = nbr1FreePositions;
        }

        //finding current chain length
        var currChainLength = node.findDistance(neighbors[0]) + node.findDistance(neighbors[1]);
        var nbrLoc = nbr.getCenter();
        //place node at each free semi location and current location and find total length of chain
        var cost = [];
        var pos = null;
        var _min = currChainLength;
        for (var i = 0; i < freePos.length; i++) {
            var loc = null;
            if (freePos[i] == 0) loc = [nbrLoc.x + edgeLength, nbrLoc.y];else if (freePos[i] == 1) {
                loc = [nbrLoc.x, nbrLoc.y + edgeLength];
            } else if (freePos[i] == 2) {
                loc = [nbrLoc.x - edgeLength, nbrLoc.y];
            } else if (freePos[i] == 3) {
                loc = [nbrLoc.x, nbrLoc.y - edgeLength];
            }
            var chainLength = nbr.findDistance(loc) + otherNbr.findDistance(loc);
            if (chainLength < _min) {
                pos = freePos[i];
                _min = chainLength;
            }
        }
        if (_min != currChainLength) {
            changes.push([[nbr, node, pos]]);
        }
        return changes;
    }

    // //if both nodes in the chain are connected to 
    // else if (this.nodes.length == 2 && this.anchorNodeLeft == this.anchorNodeRight)
    //     return [];

    // Else there is at least one internal edge, and we assume that none of the
    // internal edges is yet configured. Therefore we /will/ be making
    // changes -- even if not creating any bent links (straight chains still need
    // to be configured).

    var seqs = this.possibleBendSeqs(edgeLength);
    for (var _i4 = 0; _i4 < seqs.length; _i4++) {
        var bs = seqs[_i4];
        //find the cost for each bend sequence
        this.evaluateBendSeq(bs);
    }

    //finding the index with smallest cost
    var min = seqs[0].cost;
    var index = 0;
    for (var _i5 = 1; _i5 < seqs.length; _i5++) {
        var _bs2 = seqs[_i5];
        if (_bs2.cost < min) {
            min = _bs2.cost;
            index = _i5;
        }
    }
    var bestSeq = seqs[index];
    var configseq = this.writeConfigSeq(bestSeq);
    // Now create the configuration.
    var G = this.gm;
    for (var j = 0; j < configseq.length; j++) {
        var conf = configseq[j];
        // Get the edge and the links u, v that come before and after
        // it in the chain, respectively.
        var k = 2 * j + 1;
        var edge = this.getEdge(k);
        var u = this.getNode(k - 1);
        var v = this.getNode(k + 1);
        if (conf.length == 1) {
            changes.push([[u, v, conf[0]]]);
            // In this case the edge is to be aligned in a compass direction.
        } else {
            //assert(len(conf) == 2)
            // In this case we are to create a bend point.
            // First sever the edge and free any config on the links.
            //this.gm.severEdge(edge)
            //this.gm.nodeConf.free(u, v)
            // Create a bend point, giving it a reasonable initial location
            // midway between u and v. It is not yet aligned with either of
            // them; that will wait until we project onto the new constraints.
            var x = (u.getCenter().x + v.getCenter().x) / 2;
            var y = (u.getCenter().y + v.getCenter().y) / 2;
            var bendpoint = [x, y];

            changes.push([[u, bendpoint, conf[0]], [bendpoint, v, conf[1]]]);
        }
    }
    return changes;
};

module.exports = chain;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

var CoSELayout = __webpack_require__(0).CoSELayout;
var CoSEConstants = __webpack_require__(0).CoSEConstants;
var CoSENode = __webpack_require__(0).CoSENode;
var LayoutConstants = __webpack_require__(0).layoutBase.LayoutConstants;
var FDLayoutConstants = __webpack_require__(0).layoutBase.FDLayoutConstants;
var cholaConstants = __webpack_require__(3);
var cholaGraphManager = __webpack_require__(5);
var cholaNode = __webpack_require__(6);
var cholaEdge = __webpack_require__(1);
var cholaGraph = __webpack_require__(4);
var PointD = __webpack_require__(0).layoutBase.PointD;
var DimensionD = __webpack_require__(0).layoutBase.DimensionD;
var Layout = __webpack_require__(0).layoutBase.Layout;
var HashMap = __webpack_require__(0).layoutBase.HashMap;
var assign = __webpack_require__(13);
var chain = __webpack_require__(15);
var nodeBuckets = __webpack_require__(18);
var compass = __webpack_require__(2);

// Constructor
function cholaLayout() {
  Layout.call(this);
}

cholaLayout.prototype = Object.create(Layout.prototype);

for (var property in Layout) {
  cholaLayout[property] = Layout[property];
}

cholaLayout.prototype.defineCoseConstants = function (options) {
  if (options.nodeRepulsion != null) CoSEConstants.DEFAULT_REPULSION_STRENGTH = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = options.nodeRepulsion;
  if (options.idealEdgeLength != null) CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength;
  if (options.edgeElasticity != null) CoSEConstants.DEFAULT_SPRING_STRENGTH = FDLayoutConstants.DEFAULT_SPRING_STRENGTH = options.edgeElasticity;
  if (options.nestingFactor != null) CoSEConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = options.nestingFactor;
  if (options.gravity != null) CoSEConstants.DEFAULT_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = options.gravity;
  if (options.numIter != null) CoSEConstants.MAX_ITERATIONS = FDLayoutConstants.MAX_ITERATIONS = options.numIter;
  if (options.gravityRange != null) CoSEConstants.DEFAULT_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = options.gravityRange;
  if (options.gravityCompound != null) CoSEConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = options.gravityCompound;
  if (options.gravityRangeCompound != null) CoSEConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = options.gravityRangeCompound;
  if (options.initialEnergyOnIncremental != null) CoSEConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = options.initialEnergyOnIncremental;

  if (options.quality == 'draft') LayoutConstants.QUALITY = 0;else if (options.quality == 'proof') LayoutConstants.QUALITY = 2;else LayoutConstants.QUALITY = 1;

  CoSEConstants.NODE_DIMENSIONS_INCLUDE_LABELS = FDLayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = options.nodeDimensionsIncludeLabels;
  CoSEConstants.DEFAULT_INCREMENTAL = FDLayoutConstants.DEFAULT_INCREMENTAL = LayoutConstants.DEFAULT_INCREMENTAL = !options.randomize;
  CoSEConstants.ANIMATE = FDLayoutConstants.ANIMATE = LayoutConstants.ANIMATE = options.animate;
  CoSEConstants.TILE = options.tile;
  CoSEConstants.TILING_PADDING_VERTICAL = typeof options.tilingPaddingVertical === 'function' ? options.tilingPaddingVertical.call() : options.tilingPaddingVertical;
  CoSEConstants.TILING_PADDING_HORIZONTAL = typeof options.tilingPaddingHorizontal === 'function' ? options.tilingPaddingHorizontal.call() : options.tilingPaddingHorizontal;
};

cholaLayout.prototype.newGraphManager = function (options) {
  this.graphManager = new cholaGraphManager(this);
  return this.graphManager;
};

/**
* This method creates a new node associated with the input view node.
*/
cholaLayout.prototype.newNode = function (loc, size) {
  return new cholaNode(this.graphManager, loc, size, null);
};

cholaLayout.prototype.getGraphManager = function () {
  return this.graphManager;
};

/**
* This method creates a new edge associated with the input view edge.
*/
cholaLayout.prototype.newEdge = function (source, target, vEdge) {
  return new cholaEdge(source, target, vEdge);
};

cholaLayout.prototype.newGraph = function (vGraph) {
  return new cholaGraph(null, this.graphManager, vGraph);
};

cholaLayout.prototype.getTopMostNodes = function (nodes) {
  var nodesMap = {};
  for (var i = 0; i < nodes.length; i++) {
    nodesMap[nodes[i].id()] = true;
  }
  var roots = nodes.filter(function (ele, i) {
    if (typeof ele === "number") {
      ele = i;
    }
    var parent = ele.parent()[0];
    while (parent != null) {
      if (nodesMap[parent.id()]) {
        return false;
      }
      parent = parent.parent()[0];
    }
    return true;
  });
  return roots;
};

cholaLayout.prototype.processChildrenList = function (options, parent, children, layout, layoutType, idToLNode, cholaNodesMap, cholaNodeToCoseNode) {
  var size = children.length;
  var includeLabelsOption = options.nodeDimensionsIncludeLabels;
  for (var i = 0; i < size; i++) {
    var theChild = children[i];
    var children_of_children = theChild.children();
    var theNode;
    var dimensions = theChild.layoutDimensions({
      nodeDimensionsIncludeLabels: includeLabelsOption
    });

    if (theChild.outerWidth() != null && theChild.outerHeight() != null) {
      if (layoutType === "chola") {
        theNode = parent.add(new cholaNode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
        theNode.id = theChild.data("id");
      } else if (layoutType === "cose") {
        theNode = parent.add(new CoSENode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
        theNode.id = theChild._private.data.id;
      }
    } else {
      if (layoutType === "chola") {
        theNode = parent.add(new cholaNode(this.graphManager));
        theNode.id = theChild.data("id");
      } else if (layoutType === "cose") {
        theNode = parent.add(new CoSENode(this.graphManager));
        theNode.id = theChild._private.data.id;
      }
    }
    // Attach id to the layout node

    // Attach the paddings of cy node to layout node
    theNode.paddingLeft = parseInt(theChild.css('padding'));
    theNode.paddingTop = parseInt(theChild.css('padding'));
    theNode.paddingRight = parseInt(theChild.css('padding'));
    theNode.paddingBottom = parseInt(theChild.css('padding'));

    //Attach the label properties to compound if labels will be included in node dimensions
    if (options.nodeDimensionsIncludeLabels) {
      if (theChild.isParent()) {
        var labelWidth = theChild.boundingBox({ includeLabels: true, includeNodes: false }).w;
        var labelHeight = theChild.boundingBox({ includeLabels: true, includeNodes: false }).h;
        var labelPos = theChild.css("text-halign");
        theNode.labelWidth = labelWidth;
        theNode.labelHeight = labelHeight;
        theNode.labelPos = labelPos;
      }
    }

    // Map the layout node
    if (layoutType === "chola") {
      idToLNode[theChild.data("id")] = theNode;
      cholaNodesMap.put(theNode.id, theNode);
    } else if (layoutType === "cose") {
      idToLNode[theChild.data("id")] = theNode;
      cholaNodeToCoseNode.put(cholaNodesMap.get(theNode.id), theNode);
    }

    if (isNaN(theNode.rect.x)) {
      theNode.rect.x = 0;
    }

    if (isNaN(theNode.rect.y)) {
      theNode.rect.y = 0;
    }

    if (children_of_children != null && children_of_children.length > 0) {
      var theNewGraph;
      theNewGraph = layout.getGraphManager().add(layout.newGraph(), theNode);
      this.processChildrenList(options, theNewGraph, children_of_children, layout, layoutType, idToLNode, cholaNodesMap, cholaNodeToCoseNode);
    }
  }
};

//return the list of compound nodes
cholaLayout.prototype.findCompoundNodes = function (gm) {
  var allNodes = gm.getAllNodes();
  var compoundNodes = [];
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    if (node.isCompound()) {
      compoundNodes.push(node);
    }
  }
  return compoundNodes;
};

cholaLayout.prototype.removeLeafNodes = function (gm, compoundNodes, idList) {
  var allNodes = gm.getAllNodes();
  var count = 0;
  do {
    count = 0;
    for (var i = 0; i < allNodes.length; i++) {
      var node = allNodes[i];
      if (node.getDegree() === 1 && !compoundNodes.includes(node)) {
        //we do not remove leaf nodes if they are the only remaining children of a parent compound node
        if (node.getParent().id !== 'undefined' && compoundNodes.includes(node.getParent()) && node.getParent().child.nodes.length === 1) {
          continue;
        }
        var edge = node.edges[0];
        if (edge.source.owner !== edge.target.owner) {
          continue;
        }
        count++;
        node.owner.remove(node);
        idList.push(node.id);
      }
    }
    gm.resetAllEdges();
    gm.resetAllNodes();
    gm.getAllEdges();
    allNodes = gm.getAllNodes();
  } while (count !== 0);
};

// //removes all leaf nodes except compound leaf nodes
// cholaLayout.prototype.removeLeafNodes = function(gm, compoundNodes, idList) {
//   var allNodes = gm.getAllNodes();
//   var count = 0;

//   //var buckets = new nodeBuckets(gm);
//   //var h = this.newGraphManager();
//   // var leaves = buckets.takeLeaves();
//   // var stems = stemsFromLeaves(leaves);
//   do
//   {
//     count = 0;
//     for (var i = 0; i < /*leaves*/allNodes.length; i++) {
//       var node = allNodes[i];

//       if (!compoundNodes.includes(node))
//       {
//             //we do not remove leaf nodes if they are the only remaining children of a parent compound node
//             if (node.getParent().id !== undefined && compoundNodes.includes(node.getParent()) && node.getParent().child.nodes.length === 1)
//             {
//               continue;
//             }
//             console.log(node);
//             var edge = node.edges[0];
//             if (edge.source.owner !== edge.target.owner)
//             {
//               continue;
//             }
//             count++;

//             // var otherNode = edge.getOtherEnd(node);
//             // var otherNodeDegree = otherNode.getDegree();
//             // var index = buckets[otherNodeDegree].indexOf(otherNode);
//             // buckets[otherNodeDegree].splice(index);
//             // buckets[otherNodeDegree - 1].push(otherNode);
//             node.owner.remove(node);
//             idList.push(node.id);
//       }
//     }

//     gm.resetAllEdges();
//     gm.resetAllNodes();
//     gm.getAllEdges();
//     allNodes = gm.getAllNodes();

//     // if (gm.getAllNodes().length == 0)
//     //   stems = stems[0];
//     // for (let i = 0; i < stems.length; i++)
//     // {
//     //   stem[i].addSelfToGraph(h);
//     // }

//   }while(count!==0);
// };

// cholaLayout.prototype.pruneTrees = function(gm)
// {
//   var buckets = new nodeBuckets(gm);
//   var h = this.newGraphManager();
//   var leaves = buckets.takeLeaves();
//   while (leaves.length > 0)
//   {
//     var stems = stemsFromLeaves(leaves);
//     G.severNodes(leaves,bucket=buckets)
//     if G.isEmpty():
//         stems = stems[];
//     for stem in stems: stem.addSelfToGraph(H);
//     leaves = buckets.takeLeaves()
//   }
//   C = H.connComps()
//   for c in C:
//       c.identifyRootNode()
//   # G will now have 3 or more nodes iff it was
//   # not in fact a tree, to begin with.
//   if G.getNumNodes() >= 3:
//       C.insert(0,G)
//       # It will be helpful to let each root node in G know that it is a root node.
//       for c in C[1:]:
//           rp = c.rootNode
//           r = G.nodes[rp.ID]
//           r.isRootNode = True
//   return C


// };

// cholaLayout.prototype.stemsFromLeaves = function(leaves)
// {
//   /*
//   L: {ID:Node} dict
//   return: list of Stems
//   */
//   var stems = [];
//   for (i = 0; i < leaves.length; i++)
//   {
//     let leaf = leaves[i];
//     let edge = leaf.edges[0];
//     let root = edge.getOtherEnd(leaf);
//     let s = new stem(leaf, root);
//     stems.push(s);
//   }
//   return stems;
// };

cholaLayout.prototype.deleteLeafNodes = function (cy, idList) {
  var cyNodes = cy.nodes();
  for (var i = 0; i < cyNodes.length; i++) {
    var cyNode = cyNodes[i];
    if (idList.includes(cyNode._private.data.id)) {
      cy.remove(cyNodes[i]);
    }
  }
};

// transfer cytoscape edges to cose edges
cholaLayout.prototype.processEdges = function (layout, gm, edges, idToLNode) {
  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    var sourceNode = idToLNode[edge.data("source")];
    var targetNode = idToLNode[edge.data("target")];
    if (sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length == 0) {
      var e1 = gm.add(layout.newEdge(), sourceNode, targetNode);
      e1.id = edge.id();
    }
  }
};

cholaLayout.prototype.coseOnCore = function (options, idToLNode, cholaNodesMap, cholaNodeToCoseNode) {
  var newCoSENodes = [];
  var newCoSEEdges = [];

  // Create a CoSE layout object
  var coseLayout = new CoSELayout();

  this.defineCoseConstants(options);

  var gm = coseLayout.newGraphManager();
  this.coseGm = gm;

  var nodes = options.eles.nodes();
  var edges = options.eles.edges();
  var topMostNodes = this.getTopMostNodes(nodes);
  this.processChildrenList(options, gm.addRoot(), topMostNodes, coseLayout, "cose", idToLNode, cholaNodesMap, cholaNodeToCoseNode);
  this.processEdges(coseLayout, gm, edges, idToLNode);

  coseLayout.runLayout();
};

cholaLayout.prototype.computeAvgNodeDim = function (gm) {
  //Compute the average of all node heights and widths.
  var sum = 0;
  var num = 0;
  var allNodes = gm.getAllNodes();
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    sum += node.getWidth() + node.getHeight();
    num += 2;
  }

  return sum / num;
};

cholaLayout.prototype.getMaxNodeWidth = function (gm) {
  var allNodes = gm.getAllNodes();
  var max = 0;
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    var width = node.getWidth();
    if (!node.isCompound() & max < width) max = width;
  }
  return max;
};

cholaLayout.prototype.addPaddingToNodes = function (gm, padding) {
  var allNodes = gm.getAllNodes();
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    node.addPadding(padding, padding);
  }
};

cholaLayout.prototype.higherNodesConfiguration = function (gm, highDegreeNodes) {
  var cyclicIds = [];
  var asgns = [];
  var highIds = [];
  for (var i = 0; i < highDegreeNodes.length; i++) {
    var node = highDegreeNodes[i];
    highIds.push(node.id);
    var asgn = new assign();
    cyclicIds.push(asgn.getCyclicOrder(node));
    console.log(cyclicIds[i]);
  }

  for (var _i = 0; _i < highDegreeNodes.length; _i++) {
    var _node = highDegreeNodes[_i];
    var am = this.getAdjacencyMatrix(gm);
    var asgn = new assign();
    var asgns = asgn.getNeighborAssignments(_node, cyclicIds[_i], highIds, am);
    var degree = _node.getDegree();
    var ids = [];
    for (var j = 0; j < asgns.semis.length; j++) {
      if (typeof asgns.semis[j] != 'undefined' & asgns.semis[j] !== null) {
        ids.push(asgns.semis[j].id);
      } else ids.push('x');
    }

    for (var _j = 0; _j < degree; _j++) {
      var edge = _node.edges[_j];
      var nbr = edge.getOtherEnd(_node);
      var nodeLoc = _node.getCenter();
      var newNbrLoc = ids.indexOf(nbr.id);
      this.setNeighborPosition(gm, nodeLoc, nbr, newNbrLoc);
    }

    _node.processed = true;

    // changing the status of node to processed in cyclic list
    for (var _j2 = 0; _j2 < cyclicIds.length; _j2++) {
      var arr = cyclicIds[_j2];
      for (var k = 0; k < arr.length; k++) {
        if (arr[k].id == _node.id) {
          arr[k].processed = true;
        }
      }
    }
    // if (i==2)
    //   break;
  }
};

cholaLayout.prototype.setNeighborPosition = function (gm, nodeLoc, nbr, newNbrLoc) {
  //ideal edge length based on the highest width node
  var edgeLength = this.getMaxNodeWidth(gm) / 2 + 100;

  if (newNbrLoc == 0) {
    nbr.setCenter(nodeLoc.x + edgeLength, nodeLoc.y);
  } else if (newNbrLoc == 1) {
    nbr.setCenter(nodeLoc.x, nodeLoc.y + edgeLength);
  } else if (newNbrLoc == 2) {
    nbr.setCenter(nodeLoc.x - edgeLength, nodeLoc.y);
  } else if (newNbrLoc == 3) {
    nbr.setCenter(nodeLoc.x, nodeLoc.y - edgeLength);
  }
};

cholaLayout.prototype.getAdjacencyMatrix = function (gm) {
  var am = [];
  var nodeIds = [];
  var allNodes = gm.getAllNodes();
  for (var i = 0; i < allNodes.length; i++) {
    var temp = [];
    nodeIds.push(allNodes[i].id);
    for (var j = 0; j < allNodes.length; j++) {
      temp[j] = false;
    }
    am.push(temp);
  }
  var allEdges = gm.getAllEdges();
  for (var _i2 = 0; _i2 < allEdges.length; _i2++) {
    var edge = allEdges[_i2];
    var srcIndex = allNodes.indexOf(edge.getSource());
    var trgtIndex = allNodes.indexOf(edge.getTarget());
    am[srcIndex][trgtIndex] = true;
    am[trgtIndex][srcIndex] = true;
  }

  return [am, nodeIds];
};

cholaLayout.prototype.chainNodesConfiguration = function (gm) {
  //ideal edge length based on the highest width node
  var edgeLength = this.getMaxNodeWidth(gm) / 2 + 100;

  var output = this.getChainsAndCycles(gm);
  var chains = [];
  var cycles = [];

  for (var i = 0; i < output[0].length; i++) {
    //if the chain consists of only one node, then it will already be aligned
    //so that node is ignored
    // if (output[0][i].length == 1)
    //   continue;
    var _c = new chain(gm, output[0][i]);
    chains.push(_c);
  }
  for (var _i3 = 0; _i3 < output[1].length; _i3++) {
    var cycle = new chain(gm, output[1][_i3], true);
    chains.push(cycle);
  }

  //let changes = []; 
  for (var _i4 = 0; _i4 < chains.length; _i4++) {
    var c = chains[_i4];
    var changes = c.takeShapeBasedConfiguration(edgeLength);
    for (var j = 0; j < changes.length; j++) {
      var conf = changes[j];
      for (var k = 0; k < conf.length; k++) {
        var temp = conf[k];
        var startNode = null;
        var endNode = null;
        var direction = null;
        if (conf.length == 1) {
          startNode = temp[0];
          endNode = temp[1];
          direction = temp[2];
          var nodeLoc = startNode.getCenter();
          this.setNeighborPosition(gm, nodeLoc, endNode, direction);
        } else if (conf.length == 2) {
          //create bendpoint in an edge
        }
      }
    }
  }
};

cholaLayout.prototype.oneDegreeNodesConfiguration = function (gm, nodes) {
  //ideal edge length based on the highest width node
  var edgeLength = this.getMaxNodeWidth(gm) / 2 + 100;
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var edge = node.edges[0];

    //finding the nbr node
    var nbr = null;
    if (edge.source == node) {
      nbr = edge.target;
    } else {
      nbr = edge.source;
    }

    var nbrDegree = nbr.getDegree();
    var loc = nbr.getCenter();
    //if nbr is not a 1 or 2-degree node, we go to the next one degree node
    if (nbrDegree > 2) continue;else {
      if (nbrDegree == 1) {
        //assign the node to its right
        node.setCenter(loc.x + edgeLength, loc.y);
      }
      //when nbr is a 2 degree node
      else {
          //find the free semi locations by the nbr
          var availableSemis = nbr.getFreeSemiLocations(edgeLength);

          //finding the least cost position
          var o = node.octalCode();
          var cost = [];
          for (var j = 0; j < availableSemis.length; j++) {
            cost.push(node.deflectionFromSemi(availableSemis[j], o));
          }
          var direction = cost.indexOf(Math.min.apply(Math, cost));
          this.setNeighborPosition(gm, nbr, node, direction);
        }
    }
  }
};

cholaLayout.prototype.getChainsAndCycles = function (gm) {
  //Identify all sequences of consecutive "links" (degree-2 nodes) in this graph.
  var chains = [];
  var cycles = [];

  // Build /list/ of all links in the graph.
  var allNodes = gm.getAllNodes();
  var allLinks = [];

  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    if (node.getDegree() == 2) allLinks.push(node);
  }
  while (allLinks.length > 0) {
    var linkNode = allLinks.pop();
    var links = [linkNode];
    // Get the two edges of link, and prepare to explore in both directions.
    var edges = linkNode.edges;
    var direction = -1;
    var polygon = false;
    for (var _i5 = 0; _i5 < edges.length; _i5++) {
      var edge = edges[_i5];
      if (polygon) break;

      // Explore from linknode in one direction.
      direction = -1 * direction;
      var lastNode = linkNode;
      var done = false;
      while (!done) {
        // Consider the next node in the current direction.
        var nextNode = edge.getOtherEnd(lastNode);
        if (nextNode == linkNode) {
          // In this case the entire connected component to which the node
          // belongs is a mere polygon.
          polygon = true;
          cycles.push(links);
          links = [];
          done = true;
        } else if (nextNode.getDegree() == 2) {
          // This must be a link which we have not encountered before.
          allLinks.splice(allLinks.indexOf(nextNode), 1);
          if (direction == 1) links.push(nextNode);else if (direction == -1) links.unshift(nextNode);
          var nextNodeEdges = nextNode.edges;
          for (var j = 0; j < nextNodeEdges.length; j++) {
            if (nextNodeEdges[j] != edge) {
              edge = nextNodeEdges[j];
              break;
            }
          }
          lastNode = nextNode;
        } else {
          // We've reached the "anchor node" at one end of the chain.
          done = true;
        }
      }
      // Now have explored from link L0 in both directions, or else found that
      // it belonged to a polygon.
    }
    if (links.length > 0) chains.push(links);
  }
  return [chains, cycles];
};

cholaLayout.prototype.getHighDegreeNodes = function (gm) {
  var allNodes = gm.getAllNodes();

  var highDegreeNodes = [];
  var oneDegreeNodes = [];
  var sortedList = [];
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    var degree = node.getDegree();
    if (degree > 2) {
      var valueToPush = [];
      valueToPush[0] = node;
      valueToPush[1] = degree;
      highDegreeNodes.push(valueToPush);
    } else if (degree == 1) {
      oneDegreeNodes.push(node);
    }
  }

  function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] < b[1] ? -1 : 1;
    }
  };

  highDegreeNodes.sort(compareSecondColumn);
  highDegreeNodes.reverse();

  if (highDegreeNodes.length > 0) {
    var j = 0;
    for (var k = 0; k < highDegreeNodes.length; k++) {
      //choose highest degree node
      var _node2 = highDegreeNodes[k][0];
      if (sortedList.indexOf(_node2) < 0) sortedList.push(_node2);else continue;
      for (j; j < sortedList.length; j++) {
        //find its neighbors sorted in descending order of degree
        var neighbors = sortedList[j].getNeighbors();
        //add nodes with degree 3 or higher to the sortedList
        for (var _i6 = 0; _i6 < neighbors.length; _i6++) {
          var _degree = neighbors[_i6][1];
          if (sortedList.indexOf(neighbors[_i6][0]) >= 0) continue;else if (_degree >= 3) sortedList.push(neighbors[_i6][0]);else break;
        }
      }
      if (sortedList.length == highDegreeNodes.length) break;
    }
  }

  return [sortedList, oneDegreeNodes];
};

cholaLayout.prototype.findNeighbors = function (node) {
  var neighborsList = [];
  for (var i = 0; i < node.edges.length; i++) {
    var edge = node.edges[i];
    var source = edge.source;
    var target = edge.target;
    if (source.id == node.id && target.id == node.id) continue;else if (source.id == node.id) neighborsList.push(target.id);else if (target.id == node.id) neighborsList.push(source.id);
  }
  return [].concat(_toConsumableArray(new Set(neighborsList)));
};

module.exports = cholaLayout;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function linkShape() {
	this.r = 0; // looks like Latin lowercase 'r'
	this.u = 1; // looks like Hangul 'uh' character
	this.n = 2; // looks like Hangul n
	this.g = 3; // looks like Hangul g
	this.i = 4; // looks like Hangul i ("ee" sound)
	this.j = 5; // looks like Latin 'J' (sans serif)

	this.bent = [0, 2, 3, 5];
	this.bentCW = [0, 3, 5, 2];
	this.straight = [1, 4];
};

linkShape.prototype.cwBendsFrom = function (firstBend) {
	var k0 = this.bentCW.indexOf(firstBend);
	var p1 = this.bentCW.slice(k0);
	var p2 = this.bentCW.slice(0, k0);
	var output = p1.concat(p2);
	return output;
};

linkShape.r = 0; // looks like Latin lowercase 'r'
linkShape.u = 1; // looks like Hangul 'uh' character
linkShape.n = 2; // looks like Hangul n
linkShape.g = 3; // looks like Hangul g
linkShape.i = 4; // looks like Hangul i ("ee" sound)
linkShape.j = 5; // looks like Latin 'J' (sans serif)

linkShape.bent = [0, 2, 3, 5];
linkShape.bentCW = [0, 3, 5, 2];
linkShape.straight = [1, 4];

module.exports = linkShape;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// function nodeBuckets(gm) {
//     this.graph = gm
//     this.buckets;
//     this.maxDegree = gm.getMaxDegree();

//     for (let i = 0; i < this.maxDegree + 1; i++)
//         this.buckets.push([]);

//     let allNodes = gm.getAllNodes();
//     for (let i = 0; i < allNodes.length; i++)
//     {
//         let node = allNodes[i];
//         let index = node.getDegree();
//         this.buckets[index].push(node);
//     }
// };

// nodeBuckets.prototype.takeLeaves = function()
// {
//     var leaves = this.buckets[1];
//     this.buckets[1] = [];
//     return leaves;
// };

// nodeBuckets.prototype.hasLeaves = function()
// {
//     return len(this.buckets[1].keys()) > 0
// };

// nodeBuckets.prototype.cutOneStem = function()
// {
//     /*
//     If there are any leaves, make a Stem object to represent one of
//     them, cut the leaf from the graph, and adjust buckets.
//     */
//     stem = None
//     if this.hasLeaves():
//         # Choose a leaf.
//         k0 = this.buckets[1].keys()[0]
//         leaf = this.buckets[1][k0]
//         # Make a stem for it.
//         el = leaf.edgeList()
//         edge = el[0]
//         root = edge.otherEnd(leaf)
//         stem = Stem(leaf, root)
//         # Move nodes up in the bucket stack.
//         this.moveNode(leaf.ID, 1, 0)
//         rootDeg = root.degree
//         this.moveNode(root.ID, rootDeg, rootDeg - 1)
//         # Cut from graph.
//         this.graph.severEdge(edge)
//         this.graph.deleteNode(leaf)
//     return stem
// };
// nodeBuckets.prototype.moveNode = function(ID,oldDeg,newDeg)
// {
//     /*
//     Move node of given ID from old degree to new degree.
//     Fails quietly if there is no node of given ID in
//     oldDeg bucket.
//     */
//     try:
//         node = this.buckets[oldDeg][ID]
//         this.buckets[newDeg][ID] = node
//         del this.buckets[oldDeg][ID]
//     except: pass
// }

// module.exports = bendSequence;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var impl = __webpack_require__(8);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Object$freeze;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CoSELayout = __webpack_require__(0).CoSELayout;
var CoSEConstants = __webpack_require__(0).CoSEConstants;
var CoSENode = __webpack_require__(0).CoSENode;
var LayoutConstants = __webpack_require__(0).layoutBase.LayoutConstants;
var FDLayoutConstants = __webpack_require__(0).layoutBase.FDLayoutConstants;
var cholaConstants = __webpack_require__(3);
var cholaGraphManager = __webpack_require__(5);
var cholaNode = __webpack_require__(6);
var cholaLayout = __webpack_require__(16);
var cholaEdge = __webpack_require__(1);
var cholaGraph = __webpack_require__(4);
var PointD = __webpack_require__(0).layoutBase.PointD;
var DimensionD = __webpack_require__(0).layoutBase.DimensionD;
var Layout = __webpack_require__(0).layoutBase.Layout;
var HashMap = __webpack_require__(0).layoutBase.HashMap;

var assign = __webpack_require__(9);

var defaults = Object.freeze((_Object$freeze = {
  quality: 'default',
  // use random node positions at beginning of layout
  // if this is set to false, then quality option must be "proof"
  randomize: true,
  // whether or not to animate the layout
  animate: true,
  // duration of animation in ms, if enabled
  animationDuration: 1000,
  // easing of animation, if enabled
  animationEasing: undefined,
  // fit the viewport to the repositioned nodes
  fit: true,
  // whether to include labels in node dimensions. Valid in "proof" quality
  nodeDimensionsIncludeLabels: false,

  /* spectral layout options */

  // false for random, true for greedy
  samplingType: true,
  // sample size to construct distance matrix
  sampleSize: 25,
  // separation amount between nodes
  nodeSeparation: 75,
  // power iteration tolerance
  piTol: 0.0000001,

  // number of ticks per frame; higher is faster but more jerky
  refresh: 30,
  // Padding on fit
  padding: 20,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: 4500
}, _defineProperty(_Object$freeze, 'animate', 'end'), _defineProperty(_Object$freeze, 'animationDuration', 500), _defineProperty(_Object$freeze, 'idealEdgeLength', 50), _defineProperty(_Object$freeze, 'edgeElasticity', 0.45), _defineProperty(_Object$freeze, 'nestingFactor', 0.1), _defineProperty(_Object$freeze, 'gravity', 0.25), _defineProperty(_Object$freeze, 'numIter', 2500), _defineProperty(_Object$freeze, 'tile', true), _defineProperty(_Object$freeze, 'tilingPaddingVertical', 10), _defineProperty(_Object$freeze, 'tilingPaddingHorizontal', 10), _defineProperty(_Object$freeze, 'gravityRangeCompound', 1.5), _defineProperty(_Object$freeze, 'gravityCompound', 1.0), _defineProperty(_Object$freeze, 'gravityRange', 3.8), _defineProperty(_Object$freeze, 'initialEnergyOnIncremental', 0.5), _defineProperty(_Object$freeze, 'ready', function ready() {}), _defineProperty(_Object$freeze, 'stop', function stop() {}), _Object$freeze));

var chola = function () {
  function chola(options) {
    _classCallCheck(this, chola);

    //Layout.call(this);
    this.options = assign({}, defaults, options);
    this.cholaGm;
    this.coseGm;
    this.idList = [];
    this.cholaNodeToCoseNode = new HashMap();
    this.cholaNodesMap = new HashMap();
    this.idToLNode;
  }

  _createClass(chola, [{
    key: 'run',
    value: function run() {
      var ready;
      var frameId;
      var cholaIdToLNode = this.cholaIdToLNode = {};
      var coseIdToLNode = this.coseIdToLNode = {};
      var cholaNodesMap = this.cholaNodesMap;
      var options = this.options;

      var layout = this.layout = new cholaLayout();
      var self = this;
      var cyNodes;
      self.stopped = false;

      this.cy = this.options.cy;

      this.cy.trigger({ type: 'layoutstart', layout: this });

      var gm = layout.newGraphManager();
      this.cholaGm = gm;

      var nodes = this.options.eles.nodes();
      var edges = this.options.eles.edges();
      var topMostNodes = layout.getTopMostNodes(nodes);
      layout.processChildrenList(this.options, gm.addRoot(), topMostNodes, layout, "chola", cholaIdToLNode, cholaNodesMap);
      layout.processEdges(layout, gm, edges, cholaIdToLNode);

      if (this.cholaGm.getAllEdges().length == 0) return;

      //finds and saves the compound nodes
      var compoundNodes = layout.findCompoundNodes(this.cholaGm);
      //removes the leaf nodes
      layout.removeLeafNodes(this.cholaGm, compoundNodes, this.idList);
      layout.deleteLeafNodes(this.cy, this.idList);
      //applies cose on the core
      layout.coseOnCore(options, coseIdToLNode, cholaNodesMap, this.cholaNodeToCoseNode);

      // Reflect changes back to chola nodes
      var cholaNodes = this.cholaGm.getAllNodes();
      for (var i = 0; i < cholaNodes.length; i++) {
        var _cholaNode = cholaNodes[i];
        var coseNode = this.cholaNodeToCoseNode.get(_cholaNode);
        var loc = coseNode.getCenter();
        _cholaNode.setCenter(loc.x, loc.y);
      }

      //visualizes the layout in cytoscape map
      var getPositions = function getPositions(ele, i) {
        if (typeof ele === "number") {
          ele = i;
        }
        var theId = ele.data('id');
        var lNode = self.cholaIdToLNode[theId];
        return {
          x: lNode.getRect().getCenterX(),
          y: lNode.getRect().getCenterY()
        };
      };

      var output = layout.getHighDegreeNodes(gm);
      var highDegreeNodes = output[0];
      var oneDegreeNodes = output[1];
      console.log(highDegreeNodes);
      //creating orthogonal layout for higher degree nodes
      layout.higherNodesConfiguration(this.cholaGm, highDegreeNodes);

      // // //orthogonal layout for lower degree nodes
      layout.chainNodesConfiguration(this.cholaGm);

      // // //orthogonal layout for one-degree nodes 
      //1 degree nodes attached to 2 degree nodes will be left unaligned after the previous step
      // layout.oneDegreeNodesConfiguration(this.cholaGm, oneDegreeNodes);

      this.cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
    }
  }]);

  return chola;
}();

module.exports = chola;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["layoutBase"] = factory();
	else
		root["layoutBase"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function LayoutConstants() {}

/**
 * Layout Quality: 0:draft, 1:default, 2:proof
 */
LayoutConstants.QUALITY = 1;

/**
 * Default parameters
 */
LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
LayoutConstants.DEFAULT_INCREMENTAL = false;
LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT = true;
LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT = false;
LayoutConstants.DEFAULT_ANIMATION_PERIOD = 50;
LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;

// -----------------------------------------------------------------------------
// Section: General other constants
// -----------------------------------------------------------------------------
/*
 * Margins of a graph to be applied on bouding rectangle of its contents. We
 * assume margins on all four sides to be uniform.
 */
LayoutConstants.DEFAULT_GRAPH_MARGIN = 15;

/*
 * Whether to consider labels in node dimensions or not
 */
LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = false;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_SIZE = 40;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_HALF_SIZE = LayoutConstants.SIMPLE_NODE_SIZE / 2;

/*
 * Empty compound node size. When a compound node is empty, its both
 * dimensions should be of this value.
 */
LayoutConstants.EMPTY_COMPOUND_NODE_SIZE = 40;

/*
 * Minimum length that an edge should take during layout
 */
LayoutConstants.MIN_EDGE_LENGTH = 1;

/*
 * World boundaries that layout operates on
 */
LayoutConstants.WORLD_BOUNDARY = 1000000;

/*
 * World boundaries that random positioning can be performed with
 */
LayoutConstants.INITIAL_WORLD_BOUNDARY = LayoutConstants.WORLD_BOUNDARY / 1000;

/*
 * Coordinates of the world center
 */
LayoutConstants.WORLD_CENTER_X = 1200;
LayoutConstants.WORLD_CENTER_Y = 900;

module.exports = LayoutConstants;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphObject = __webpack_require__(2);
var IGeometry = __webpack_require__(8);
var IMath = __webpack_require__(9);

function LEdge(source, target, vEdge) {
  LGraphObject.call(this, vEdge);

  this.isOverlapingSourceAndTarget = false;
  this.vGraphObject = vEdge;
  this.bendpoints = [];
  this.source = source;
  this.target = target;
}

LEdge.prototype = Object.create(LGraphObject.prototype);

for (var prop in LGraphObject) {
  LEdge[prop] = LGraphObject[prop];
}

LEdge.prototype.getSource = function () {
  return this.source;
};

LEdge.prototype.getTarget = function () {
  return this.target;
};

LEdge.prototype.isInterGraph = function () {
  return this.isInterGraph;
};

LEdge.prototype.getLength = function () {
  return this.length;
};

LEdge.prototype.isOverlapingSourceAndTarget = function () {
  return this.isOverlapingSourceAndTarget;
};

LEdge.prototype.getBendpoints = function () {
  return this.bendpoints;
};

LEdge.prototype.getLca = function () {
  return this.lca;
};

LEdge.prototype.getSourceInLca = function () {
  return this.sourceInLca;
};

LEdge.prototype.getTargetInLca = function () {
  return this.targetInLca;
};

LEdge.prototype.getOtherEnd = function (node) {
  if (this.source === node) {
    return this.target;
  } else if (this.target === node) {
    return this.source;
  } else {
    throw "Node is not incident with this edge";
  }
};

LEdge.prototype.getOtherEndInGraph = function (node, graph) {
  var otherEnd = this.getOtherEnd(node);
  var root = graph.getGraphManager().getRoot();

  while (true) {
    if (otherEnd.getOwner() == graph) {
      return otherEnd;
    }

    if (otherEnd.getOwner() == root) {
      break;
    }

    otherEnd = otherEnd.getOwner().getParent();
  }

  return null;
};

LEdge.prototype.updateLength = function () {
  var clipPointCoordinates = new Array(4);

  this.isOverlapingSourceAndTarget = IGeometry.getIntersection(this.target.getRect(), this.source.getRect(), clipPointCoordinates);

  if (!this.isOverlapingSourceAndTarget) {
    this.lengthX = clipPointCoordinates[0] - clipPointCoordinates[2];
    this.lengthY = clipPointCoordinates[1] - clipPointCoordinates[3];

    if (Math.abs(this.lengthX) < 1.0) {
      this.lengthX = IMath.sign(this.lengthX);
    }

    if (Math.abs(this.lengthY) < 1.0) {
      this.lengthY = IMath.sign(this.lengthY);
    }

    this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
  }
};

LEdge.prototype.updateLengthSimple = function () {
  this.lengthX = this.target.getCenterX() - this.source.getCenterX();
  this.lengthY = this.target.getCenterY() - this.source.getCenterY();

  if (Math.abs(this.lengthX) < 1.0) {
    this.lengthX = IMath.sign(this.lengthX);
  }

  if (Math.abs(this.lengthY) < 1.0) {
    this.lengthY = IMath.sign(this.lengthY);
  }

  this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
};

module.exports = LEdge;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function LGraphObject(vGraphObject) {
  this.vGraphObject = vGraphObject;
}

module.exports = LGraphObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphObject = __webpack_require__(2);
var Integer = __webpack_require__(10);
var RectangleD = __webpack_require__(13);
var LayoutConstants = __webpack_require__(0);
var RandomSeed = __webpack_require__(16);
var PointD = __webpack_require__(4);

function LNode(gm, loc, size, vNode) {
  //Alternative constructor 1 : LNode(LGraphManager gm, Point loc, Dimension size, Object vNode)
  if (size == null && vNode == null) {
    vNode = loc;
  }

  LGraphObject.call(this, vNode);

  //Alternative constructor 2 : LNode(Layout layout, Object vNode)
  if (gm.graphManager != null) gm = gm.graphManager;

  this.estimatedSize = Integer.MIN_VALUE;
  this.inclusionTreeDepth = Integer.MAX_VALUE;
  this.vGraphObject = vNode;
  this.edges = [];
  this.graphManager = gm;

  if (size != null && loc != null) this.rect = new RectangleD(loc.x, loc.y, size.width, size.height);else this.rect = new RectangleD();
}

LNode.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LNode[prop] = LGraphObject[prop];
}

LNode.prototype.getEdges = function () {
  return this.edges;
};

LNode.prototype.getChild = function () {
  return this.child;
};

LNode.prototype.getOwner = function () {
  //  if (this.owner != null) {
  //    if (!(this.owner == null || this.owner.getNodes().indexOf(this) > -1)) {
  //      throw "assert failed";
  //    }
  //  }

  return this.owner;
};

LNode.prototype.getWidth = function () {
  return this.rect.width;
};

LNode.prototype.setWidth = function (width) {
  this.rect.width = width;
};

LNode.prototype.getHeight = function () {
  return this.rect.height;
};

LNode.prototype.setHeight = function (height) {
  this.rect.height = height;
};

LNode.prototype.getCenterX = function () {
  return this.rect.x + this.rect.width / 2;
};

LNode.prototype.getCenterY = function () {
  return this.rect.y + this.rect.height / 2;
};

LNode.prototype.getCenter = function () {
  return new PointD(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
};

LNode.prototype.getLocation = function () {
  return new PointD(this.rect.x, this.rect.y);
};

LNode.prototype.getRect = function () {
  return this.rect;
};

LNode.prototype.getDiagonal = function () {
  return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
};

/**
 * This method returns half the diagonal length of this node.
 */
LNode.prototype.getHalfTheDiagonal = function () {
  return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
};

LNode.prototype.setRect = function (upperLeft, dimension) {
  this.rect.x = upperLeft.x;
  this.rect.y = upperLeft.y;
  this.rect.width = dimension.width;
  this.rect.height = dimension.height;
};

LNode.prototype.setCenter = function (cx, cy) {
  this.rect.x = cx - this.rect.width / 2;
  this.rect.y = cy - this.rect.height / 2;
};

LNode.prototype.setLocation = function (x, y) {
  this.rect.x = x;
  this.rect.y = y;
};

LNode.prototype.moveBy = function (dx, dy) {
  this.rect.x += dx;
  this.rect.y += dy;
};

LNode.prototype.getEdgeListToNode = function (to) {
  var edgeList = [];
  var edge;
  var self = this;

  self.edges.forEach(function (edge) {

    if (edge.target == to) {
      if (edge.source != self) throw "Incorrect edge source!";

      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getEdgesBetween = function (other) {
  var edgeList = [];
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (!(edge.source == self || edge.target == self)) throw "Incorrect edge source and/or target";

    if (edge.target == other || edge.source == other) {
      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getNeighborsList = function () {
  var neighbors = new Set();

  var self = this;
  self.edges.forEach(function (edge) {

    if (edge.source == self) {
      neighbors.add(edge.target);
    } else {
      if (edge.target != self) {
        throw "Incorrect incidency!";
      }

      neighbors.add(edge.source);
    }
  });

  return neighbors;
};

LNode.prototype.withChildren = function () {
  var withNeighborsList = new Set();
  var childNode;
  var children;

  withNeighborsList.add(this);

  if (this.child != null) {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];
      children = childNode.withChildren();
      children.forEach(function (node) {
        withNeighborsList.add(node);
      });
    }
  }

  return withNeighborsList;
};

LNode.prototype.getNoOfChildren = function () {
  var noOfChildren = 0;
  var childNode;

  if (this.child == null) {
    noOfChildren = 1;
  } else {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];

      noOfChildren += childNode.getNoOfChildren();
    }
  }

  if (noOfChildren == 0) {
    noOfChildren = 1;
  }
  return noOfChildren;
};

LNode.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LNode.prototype.calcEstimatedSize = function () {
  if (this.child == null) {
    return this.estimatedSize = (this.rect.width + this.rect.height) / 2;
  } else {
    this.estimatedSize = this.child.calcEstimatedSize();
    this.rect.width = this.estimatedSize;
    this.rect.height = this.estimatedSize;

    return this.estimatedSize;
  }
};

LNode.prototype.scatter = function () {
  var randomCenterX;
  var randomCenterY;

  var minX = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxX = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterX = LayoutConstants.WORLD_CENTER_X + RandomSeed.nextDouble() * (maxX - minX) + minX;

  var minY = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxY = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterY = LayoutConstants.WORLD_CENTER_Y + RandomSeed.nextDouble() * (maxY - minY) + minY;

  this.rect.x = randomCenterX;
  this.rect.y = randomCenterY;
};

LNode.prototype.updateBounds = function () {
  if (this.getChild() == null) {
    throw "assert failed";
  }
  if (this.getChild().getNodes().length != 0) {
    // wrap the children nodes by re-arranging the boundaries
    var childGraph = this.getChild();
    childGraph.updateBounds(true);

    this.rect.x = childGraph.getLeft();
    this.rect.y = childGraph.getTop();

    this.setWidth(childGraph.getRight() - childGraph.getLeft());
    this.setHeight(childGraph.getBottom() - childGraph.getTop());

    // Update compound bounds considering its label properties    
    if (LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS) {

      var width = childGraph.getRight() - childGraph.getLeft();
      var height = childGraph.getBottom() - childGraph.getTop();

      if (this.labelWidth > width) {
        this.rect.x -= (this.labelWidth - width) / 2;
        this.setWidth(this.labelWidth);
      }

      if (this.labelHeight > height) {
        if (this.labelPos == "center") {
          this.rect.y -= (this.labelHeight - height) / 2;
        } else if (this.labelPos == "top") {
          this.rect.y -= this.labelHeight - height;
        }
        this.setHeight(this.labelHeight);
      }
    }
  }
};

LNode.prototype.getInclusionTreeDepth = function () {
  if (this.inclusionTreeDepth == Integer.MAX_VALUE) {
    throw "assert failed";
  }
  return this.inclusionTreeDepth;
};

LNode.prototype.transform = function (trans) {
  var left = this.rect.x;

  if (left > LayoutConstants.WORLD_BOUNDARY) {
    left = LayoutConstants.WORLD_BOUNDARY;
  } else if (left < -LayoutConstants.WORLD_BOUNDARY) {
    left = -LayoutConstants.WORLD_BOUNDARY;
  }

  var top = this.rect.y;

  if (top > LayoutConstants.WORLD_BOUNDARY) {
    top = LayoutConstants.WORLD_BOUNDARY;
  } else if (top < -LayoutConstants.WORLD_BOUNDARY) {
    top = -LayoutConstants.WORLD_BOUNDARY;
  }

  var leftTop = new PointD(left, top);
  var vLeftTop = trans.inverseTransformPoint(leftTop);

  this.setLocation(vLeftTop.x, vLeftTop.y);
};

LNode.prototype.getLeft = function () {
  return this.rect.x;
};

LNode.prototype.getRight = function () {
  return this.rect.x + this.rect.width;
};

LNode.prototype.getTop = function () {
  return this.rect.y;
};

LNode.prototype.getBottom = function () {
  return this.rect.y + this.rect.height;
};

LNode.prototype.getParent = function () {
  if (this.owner == null) {
    return null;
  }

  return this.owner.getParent();
};

module.exports = LNode;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function PointD(x, y) {
  if (x == null && y == null) {
    this.x = 0;
    this.y = 0;
  } else {
    this.x = x;
    this.y = y;
  }
}

PointD.prototype.getX = function () {
  return this.x;
};

PointD.prototype.getY = function () {
  return this.y;
};

PointD.prototype.setX = function (x) {
  this.x = x;
};

PointD.prototype.setY = function (y) {
  this.y = y;
};

PointD.prototype.getDifference = function (pt) {
  return new DimensionD(this.x - pt.x, this.y - pt.y);
};

PointD.prototype.getCopy = function () {
  return new PointD(this.x, this.y);
};

PointD.prototype.translate = function (dim) {
  this.x += dim.width;
  this.y += dim.height;
  return this;
};

module.exports = PointD;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphObject = __webpack_require__(2);
var Integer = __webpack_require__(10);
var LayoutConstants = __webpack_require__(0);
var LGraphManager = __webpack_require__(6);
var LNode = __webpack_require__(3);
var LEdge = __webpack_require__(1);
var RectangleD = __webpack_require__(13);
var Point = __webpack_require__(12);
var LinkedList = __webpack_require__(11);

function LGraph(parent, obj2, vGraph) {
  LGraphObject.call(this, vGraph);
  this.estimatedSize = Integer.MIN_VALUE;
  this.margin = LayoutConstants.DEFAULT_GRAPH_MARGIN;
  this.edges = [];
  this.nodes = [];
  this.isConnected = false;
  this.parent = parent;

  if (obj2 != null && obj2 instanceof LGraphManager) {
    this.graphManager = obj2;
  } else if (obj2 != null && obj2 instanceof Layout) {
    this.graphManager = obj2.graphManager;
  }
}

LGraph.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LGraph[prop] = LGraphObject[prop];
}

LGraph.prototype.getNodes = function () {
  return this.nodes;
};

LGraph.prototype.getEdges = function () {
  return this.edges;
};

LGraph.prototype.getGraphManager = function () {
  return this.graphManager;
};

LGraph.prototype.getParent = function () {
  return this.parent;
};

LGraph.prototype.getLeft = function () {
  return this.left;
};

LGraph.prototype.getRight = function () {
  return this.right;
};

LGraph.prototype.getTop = function () {
  return this.top;
};

LGraph.prototype.getBottom = function () {
  return this.bottom;
};

LGraph.prototype.isConnected = function () {
  return this.isConnected;
};

LGraph.prototype.add = function (obj1, sourceNode, targetNode) {
  if (sourceNode == null && targetNode == null) {
    var newNode = obj1;
    if (this.graphManager == null) {
      throw "Graph has no graph mgr!";
    }
    if (this.getNodes().indexOf(newNode) > -1) {
      throw "Node already in graph!";
    }
    newNode.owner = this;
    this.getNodes().push(newNode);

    return newNode;
  } else {
    var newEdge = obj1;
    if (!(this.getNodes().indexOf(sourceNode) > -1 && this.getNodes().indexOf(targetNode) > -1)) {
      throw "Source or target not in graph!";
    }

    if (!(sourceNode.owner == targetNode.owner && sourceNode.owner == this)) {
      throw "Both owners must be this graph!";
    }

    if (sourceNode.owner != targetNode.owner) {
      return null;
    }

    // set source and target
    newEdge.source = sourceNode;
    newEdge.target = targetNode;

    // set as intra-graph edge
    newEdge.isInterGraph = false;

    // add to graph edge list
    this.getEdges().push(newEdge);

    // add to incidency lists
    sourceNode.edges.push(newEdge);

    if (targetNode != sourceNode) {
      targetNode.edges.push(newEdge);
    }

    return newEdge;
  }
};

LGraph.prototype.remove = function (obj) {
  var node = obj;
  if (obj instanceof LNode) {
    if (node == null) {
      throw "Node is null!";
    }
    if (!(node.owner != null && node.owner == this)) {
      throw "Owner graph is invalid!";
    }
    if (this.graphManager == null) {
      throw "Owner graph manager is invalid!";
    }
    // remove incident edges first (make a copy to do it safely)
    var edgesToBeRemoved = node.edges.slice();
    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];

      if (edge.isInterGraph) {
        this.graphManager.remove(edge);
      } else {
        edge.source.owner.remove(edge);
      }
    }

    // now the node itself
    var index = this.nodes.indexOf(node);
    if (index == -1) {
      throw "Node not in owner node list!";
    }

    this.nodes.splice(index, 1);
  } else if (obj instanceof LEdge) {
    var edge = obj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }
    if (!(edge.source.owner != null && edge.target.owner != null && edge.source.owner == this && edge.target.owner == this)) {
      throw "Source and/or target owner is invalid!";
    }

    var sourceIndex = edge.source.edges.indexOf(edge);
    var targetIndex = edge.target.edges.indexOf(edge);
    if (!(sourceIndex > -1 && targetIndex > -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    edge.source.edges.splice(sourceIndex, 1);

    if (edge.target != edge.source) {
      edge.target.edges.splice(targetIndex, 1);
    }

    var index = edge.source.owner.getEdges().indexOf(edge);
    if (index == -1) {
      throw "Not in owner's edge list!";
    }

    edge.source.owner.getEdges().splice(index, 1);
  }
};

LGraph.prototype.updateLeftTop = function () {
  var top = Integer.MAX_VALUE;
  var left = Integer.MAX_VALUE;
  var nodeTop;
  var nodeLeft;
  var margin;

  var nodes = this.getNodes();
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeTop = lNode.getTop();
    nodeLeft = lNode.getLeft();

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (left > nodeLeft) {
      left = nodeLeft;
    }
  }

  // Do we have any nodes in this graph?
  if (top == Integer.MAX_VALUE) {
    return null;
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = left - margin;
  this.top = top - margin;

  // Apply the margins and return the result
  return new Point(this.left, this.top);
};

LGraph.prototype.updateBounds = function (recursive) {
  // calculate bounds
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;
  var margin;

  var nodes = this.nodes;
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];

    if (recursive && lNode.child != null) {
      lNode.updateBounds();
    }
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);
  if (left == Integer.MAX_VALUE) {
    this.left = this.parent.getLeft();
    this.right = this.parent.getRight();
    this.top = this.parent.getTop();
    this.bottom = this.parent.getBottom();
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = boundingRect.x - margin;
  this.right = boundingRect.x + boundingRect.width + margin;
  this.top = boundingRect.y - margin;
  this.bottom = boundingRect.y + boundingRect.height + margin;
};

LGraph.calculateBounds = function (nodes) {
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;

  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);

  return boundingRect;
};

LGraph.prototype.getInclusionTreeDepth = function () {
  if (this == this.graphManager.getRoot()) {
    return 1;
  } else {
    return this.parent.getInclusionTreeDepth();
  }
};

LGraph.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LGraph.prototype.calcEstimatedSize = function () {
  var size = 0;
  var nodes = this.nodes;
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    size += lNode.calcEstimatedSize();
  }

  if (size == 0) {
    this.estimatedSize = LayoutConstants.EMPTY_COMPOUND_NODE_SIZE;
  } else {
    this.estimatedSize = size / Math.sqrt(this.nodes.length);
  }

  return this.estimatedSize;
};

LGraph.prototype.updateConnected = function () {
  var self = this;
  if (this.nodes.length == 0) {
    this.isConnected = true;
    return;
  }

  var queue = new LinkedList();
  var visited = new Set();
  var currentNode = this.nodes[0];
  var neighborEdges;
  var currentNeighbor;
  var childrenOfNode = currentNode.withChildren();
  childrenOfNode.forEach(function (node) {
    queue.push(node);
    visited.add(node);
  });

  while (queue.length !== 0) {
    currentNode = queue.shift();

    // Traverse all neighbors of this node
    neighborEdges = currentNode.getEdges();
    var size = neighborEdges.length;
    for (var i = 0; i < size; i++) {
      var neighborEdge = neighborEdges[i];
      currentNeighbor = neighborEdge.getOtherEndInGraph(currentNode, this);

      // Add unvisited neighbors to the list to visit
      if (currentNeighbor != null && !visited.has(currentNeighbor)) {
        var childrenOfNeighbor = currentNeighbor.withChildren();

        childrenOfNeighbor.forEach(function (node) {
          queue.push(node);
          visited.add(node);
        });
      }
    }
  }

  this.isConnected = false;

  if (visited.size >= this.nodes.length) {
    var noOfVisitedInThisGraph = 0;

    visited.forEach(function (visitedNode) {
      if (visitedNode.owner == self) {
        noOfVisitedInThisGraph++;
      }
    });

    if (noOfVisitedInThisGraph == this.nodes.length) {
      this.isConnected = true;
    }
  }
};

module.exports = LGraph;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraph;
var LEdge = __webpack_require__(1);

function LGraphManager(layout) {
  LGraph = __webpack_require__(5); // It may be better to initilize this out of this function but it gives an error (Right-hand side of 'instanceof' is not callable) now.
  this.layout = layout;

  this.graphs = [];
  this.edges = [];
}

LGraphManager.prototype.addRoot = function () {
  var ngraph = this.layout.newGraph();
  var nnode = this.layout.newNode(null);
  var root = this.add(ngraph, nnode);
  this.setRootGraph(root);
  return this.rootGraph;
};

LGraphManager.prototype.add = function (newGraph, parentNode, newEdge, sourceNode, targetNode) {
  //there are just 2 parameters are passed then it adds an LGraph else it adds an LEdge
  if (newEdge == null && sourceNode == null && targetNode == null) {
    if (newGraph == null) {
      throw "Graph is null!";
    }
    if (parentNode == null) {
      throw "Parent node is null!";
    }
    if (this.graphs.indexOf(newGraph) > -1) {
      throw "Graph already in this graph mgr!";
    }

    this.graphs.push(newGraph);

    if (newGraph.parent != null) {
      throw "Already has a parent!";
    }
    if (parentNode.child != null) {
      throw "Already has a child!";
    }

    newGraph.parent = parentNode;
    parentNode.child = newGraph;

    return newGraph;
  } else {
    //change the order of the parameters
    targetNode = newEdge;
    sourceNode = parentNode;
    newEdge = newGraph;
    var sourceGraph = sourceNode.getOwner();
    var targetGraph = targetNode.getOwner();

    if (!(sourceGraph != null && sourceGraph.getGraphManager() == this)) {
      throw "Source not in this graph mgr!";
    }
    if (!(targetGraph != null && targetGraph.getGraphManager() == this)) {
      throw "Target not in this graph mgr!";
    }

    if (sourceGraph == targetGraph) {
      newEdge.isInterGraph = false;
      return sourceGraph.add(newEdge, sourceNode, targetNode);
    } else {
      newEdge.isInterGraph = true;

      // set source and target
      newEdge.source = sourceNode;
      newEdge.target = targetNode;

      // add edge to inter-graph edge list
      if (this.edges.indexOf(newEdge) > -1) {
        throw "Edge already in inter-graph edge list!";
      }

      this.edges.push(newEdge);

      // add edge to source and target incidency lists
      if (!(newEdge.source != null && newEdge.target != null)) {
        throw "Edge source and/or target is null!";
      }

      if (!(newEdge.source.edges.indexOf(newEdge) == -1 && newEdge.target.edges.indexOf(newEdge) == -1)) {
        throw "Edge already in source and/or target incidency list!";
      }

      newEdge.source.edges.push(newEdge);
      newEdge.target.edges.push(newEdge);

      return newEdge;
    }
  }
};

LGraphManager.prototype.remove = function (lObj) {
  if (lObj instanceof LGraph) {
    var graph = lObj;
    if (graph.getGraphManager() != this) {
      throw "Graph not in this graph mgr";
    }
    if (!(graph == this.rootGraph || graph.parent != null && graph.parent.graphManager == this)) {
      throw "Invalid parent node!";
    }

    // first the edges (make a copy to do it safely)
    var edgesToBeRemoved = [];

    edgesToBeRemoved = edgesToBeRemoved.concat(graph.getEdges());

    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];
      graph.remove(edge);
    }

    // then the nodes (make a copy to do it safely)
    var nodesToBeRemoved = [];

    nodesToBeRemoved = nodesToBeRemoved.concat(graph.getNodes());

    var node;
    s = nodesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      node = nodesToBeRemoved[i];
      graph.remove(node);
    }

    // check if graph is the root
    if (graph == this.rootGraph) {
      this.setRootGraph(null);
    }

    // now remove the graph itself
    var index = this.graphs.indexOf(graph);
    this.graphs.splice(index, 1);

    // also reset the parent of the graph
    graph.parent = null;
  } else if (lObj instanceof LEdge) {
    edge = lObj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!edge.isInterGraph) {
      throw "Not an inter-graph edge!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }

    // remove edge from source and target nodes' incidency lists

    if (!(edge.source.edges.indexOf(edge) != -1 && edge.target.edges.indexOf(edge) != -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    var index = edge.source.edges.indexOf(edge);
    edge.source.edges.splice(index, 1);
    index = edge.target.edges.indexOf(edge);
    edge.target.edges.splice(index, 1);

    // remove edge from owner graph manager's inter-graph edge list

    if (!(edge.source.owner != null && edge.source.owner.getGraphManager() != null)) {
      throw "Edge owner graph or owner graph manager is null!";
    }
    if (edge.source.owner.getGraphManager().edges.indexOf(edge) == -1) {
      throw "Not in owner graph manager's edge list!";
    }

    var index = edge.source.owner.getGraphManager().edges.indexOf(edge);
    edge.source.owner.getGraphManager().edges.splice(index, 1);
  }
};

LGraphManager.prototype.updateBounds = function () {
  this.rootGraph.updateBounds(true);
};

LGraphManager.prototype.getGraphs = function () {
  return this.graphs;
};

LGraphManager.prototype.getAllNodes = function () {
  if (this.allNodes == null) {
    var nodeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < s; i++) {
      nodeList = nodeList.concat(graphs[i].getNodes());
    }
    this.allNodes = nodeList;
  }
  return this.allNodes;
};

LGraphManager.prototype.resetAllNodes = function () {
  this.allNodes = null;
};

LGraphManager.prototype.resetAllEdges = function () {
  this.allEdges = null;
};

LGraphManager.prototype.resetAllNodesToApplyGravitation = function () {
  this.allNodesToApplyGravitation = null;
};

LGraphManager.prototype.getAllEdges = function () {
  if (this.allEdges == null) {
    var edgeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < graphs.length; i++) {
      edgeList = edgeList.concat(graphs[i].getEdges());
    }

    edgeList = edgeList.concat(this.edges);

    this.allEdges = edgeList;
  }
  return this.allEdges;
};

LGraphManager.prototype.getAllNodesToApplyGravitation = function () {
  return this.allNodesToApplyGravitation;
};

LGraphManager.prototype.setAllNodesToApplyGravitation = function (nodeList) {
  if (this.allNodesToApplyGravitation != null) {
    throw "assert failed";
  }

  this.allNodesToApplyGravitation = nodeList;
};

LGraphManager.prototype.getRoot = function () {
  return this.rootGraph;
};

LGraphManager.prototype.setRootGraph = function (graph) {
  if (graph.getGraphManager() != this) {
    throw "Root not in this graph mgr!";
  }

  this.rootGraph = graph;
  // root graph must have a root node associated with it for convenience
  if (graph.parent == null) {
    graph.parent = this.layout.newNode("Root node");
  }
};

LGraphManager.prototype.getLayout = function () {
  return this.layout;
};

LGraphManager.prototype.isOneAncestorOfOther = function (firstNode, secondNode) {
  if (!(firstNode != null && secondNode != null)) {
    throw "assert failed";
  }

  if (firstNode == secondNode) {
    return true;
  }
  // Is second node an ancestor of the first one?
  var ownerGraph = firstNode.getOwner();
  var parentNode;

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == secondNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);
  // Is first node an ancestor of the second one?
  ownerGraph = secondNode.getOwner();

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == firstNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);

  return false;
};

LGraphManager.prototype.calcLowestCommonAncestors = function () {
  var edge;
  var sourceNode;
  var targetNode;
  var sourceAncestorGraph;
  var targetAncestorGraph;

  var edges = this.getAllEdges();
  var s = edges.length;
  for (var i = 0; i < s; i++) {
    edge = edges[i];

    sourceNode = edge.source;
    targetNode = edge.target;
    edge.lca = null;
    edge.sourceInLca = sourceNode;
    edge.targetInLca = targetNode;

    if (sourceNode == targetNode) {
      edge.lca = sourceNode.getOwner();
      continue;
    }

    sourceAncestorGraph = sourceNode.getOwner();

    while (edge.lca == null) {
      edge.targetInLca = targetNode;
      targetAncestorGraph = targetNode.getOwner();

      while (edge.lca == null) {
        if (targetAncestorGraph == sourceAncestorGraph) {
          edge.lca = targetAncestorGraph;
          break;
        }

        if (targetAncestorGraph == this.rootGraph) {
          break;
        }

        if (edge.lca != null) {
          throw "assert failed";
        }
        edge.targetInLca = targetAncestorGraph.getParent();
        targetAncestorGraph = edge.targetInLca.getOwner();
      }

      if (sourceAncestorGraph == this.rootGraph) {
        break;
      }

      if (edge.lca == null) {
        edge.sourceInLca = sourceAncestorGraph.getParent();
        sourceAncestorGraph = edge.sourceInLca.getOwner();
      }
    }

    if (edge.lca == null) {
      throw "assert failed";
    }
  }
};

LGraphManager.prototype.calcLowestCommonAncestor = function (firstNode, secondNode) {
  if (firstNode == secondNode) {
    return firstNode.getOwner();
  }
  var firstOwnerGraph = firstNode.getOwner();

  do {
    if (firstOwnerGraph == null) {
      break;
    }
    var secondOwnerGraph = secondNode.getOwner();

    do {
      if (secondOwnerGraph == null) {
        break;
      }

      if (secondOwnerGraph == firstOwnerGraph) {
        return secondOwnerGraph;
      }
      secondOwnerGraph = secondOwnerGraph.getParent().getOwner();
    } while (true);

    firstOwnerGraph = firstOwnerGraph.getParent().getOwner();
  } while (true);

  return firstOwnerGraph;
};

LGraphManager.prototype.calcInclusionTreeDepths = function (graph, depth) {
  if (graph == null && depth == null) {
    graph = this.rootGraph;
    depth = 1;
  }
  var node;

  var nodes = graph.getNodes();
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    node = nodes[i];
    node.inclusionTreeDepth = depth;

    if (node.child != null) {
      this.calcInclusionTreeDepths(node.child, depth + 1);
    }
  }
};

LGraphManager.prototype.includesInvalidEdge = function () {
  var edge;

  var s = this.edges.length;
  for (var i = 0; i < s; i++) {
    edge = this.edges[i];

    if (this.isOneAncestorOfOther(edge.source, edge.target)) {
      return true;
    }
  }
  return false;
};

module.exports = LGraphManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LayoutConstants = __webpack_require__(0);

function FDLayoutConstants() {}

//FDLayoutConstants inherits static props in LayoutConstants
for (var prop in LayoutConstants) {
  FDLayoutConstants[prop] = LayoutConstants[prop];
}

FDLayoutConstants.MAX_ITERATIONS = 2500;

FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;
FDLayoutConstants.DEFAULT_SPRING_STRENGTH = 0.45;
FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = 4500.0;
FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = 0.4;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1.0;
FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3;
FDLayoutConstants.COOLING_ADAPTATION_FACTOR = 0.33;
FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT = 1000;
FDLayoutConstants.ADAPTATION_UPPER_NODE_LIMIT = 5000;
FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100.0;
FDLayoutConstants.MAX_NODE_DISPLACEMENT = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10.0;
FDLayoutConstants.CONVERGENCE_CHECK_PERIOD = 100;
FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
FDLayoutConstants.MIN_EDGE_LENGTH = 1;
FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD = 10;

module.exports = FDLayoutConstants;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This class maintains a list of static geometry related utility methods.
 *
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

var Point = __webpack_require__(12);

function IGeometry() {}

/**
 * This method calculates *half* the amount in x and y directions of the two
 * input rectangles needed to separate them keeping their respective
 * positioning, and returns the result in the input array. An input
 * separation buffer added to the amount in both directions. We assume that
 * the two rectangles do intersect.
 */
IGeometry.calcSeparationAmount = function (rectA, rectB, overlapAmount, separationBuffer) {
  if (!rectA.intersects(rectB)) {
    throw "assert failed";
  }

  var directions = new Array(2);

  this.decideDirectionsForOverlappingNodes(rectA, rectB, directions);

  overlapAmount[0] = Math.min(rectA.getRight(), rectB.getRight()) - Math.max(rectA.x, rectB.x);
  overlapAmount[1] = Math.min(rectA.getBottom(), rectB.getBottom()) - Math.max(rectA.y, rectB.y);

  // update the overlapping amounts for the following cases:
  if (rectA.getX() <= rectB.getX() && rectA.getRight() >= rectB.getRight()) {
    /* Case x.1:
    *
    * rectA
    * 	|                       |
    * 	|        _________      |
    * 	|        |       |      |
    * 	|________|_______|______|
    * 			 |       |
    *           |       |
    *        rectB
    */
    overlapAmount[0] += Math.min(rectB.getX() - rectA.getX(), rectA.getRight() - rectB.getRight());
  } else if (rectB.getX() <= rectA.getX() && rectB.getRight() >= rectA.getRight()) {
    /* Case x.2:
    *
    * rectB
    * 	|                       |
    * 	|        _________      |
    * 	|        |       |      |
    * 	|________|_______|______|
    * 			 |       |
    *           |       |
    *        rectA
    */
    overlapAmount[0] += Math.min(rectA.getX() - rectB.getX(), rectB.getRight() - rectA.getRight());
  }
  if (rectA.getY() <= rectB.getY() && rectA.getBottom() >= rectB.getBottom()) {
    /* Case y.1:
     *          ________ rectA
     *         |
     *         |
     *   ______|____  rectB
     *         |    |
     *         |    |
     *   ______|____|
     *         |
     *         |
     *         |________
     *
     */
    overlapAmount[1] += Math.min(rectB.getY() - rectA.getY(), rectA.getBottom() - rectB.getBottom());
  } else if (rectB.getY() <= rectA.getY() && rectB.getBottom() >= rectA.getBottom()) {
    /* Case y.2:
    *          ________ rectB
    *         |
    *         |
    *   ______|____  rectA
    *         |    |
    *         |    |
    *   ______|____|
    *         |
    *         |
    *         |________
    *
    */
    overlapAmount[1] += Math.min(rectA.getY() - rectB.getY(), rectB.getBottom() - rectA.getBottom());
  }

  // find slope of the line passes two centers
  var slope = Math.abs((rectB.getCenterY() - rectA.getCenterY()) / (rectB.getCenterX() - rectA.getCenterX()));
  // if centers are overlapped
  if (rectB.getCenterY() === rectA.getCenterY() && rectB.getCenterX() === rectA.getCenterX()) {
    // assume the slope is 1 (45 degree)
    slope = 1.0;
  }

  var moveByY = slope * overlapAmount[0];
  var moveByX = overlapAmount[1] / slope;
  if (overlapAmount[0] < moveByX) {
    moveByX = overlapAmount[0];
  } else {
    moveByY = overlapAmount[1];
  }
  // return half the amount so that if each rectangle is moved by these
  // amounts in opposite directions, overlap will be resolved
  overlapAmount[0] = -1 * directions[0] * (moveByX / 2 + separationBuffer);
  overlapAmount[1] = -1 * directions[1] * (moveByY / 2 + separationBuffer);
};

/**
 * This method decides the separation direction of overlapping nodes
 *
 * if directions[0] = -1, then rectA goes left
 * if directions[0] = 1,  then rectA goes right
 * if directions[1] = -1, then rectA goes up
 * if directions[1] = 1,  then rectA goes down
 */
IGeometry.decideDirectionsForOverlappingNodes = function (rectA, rectB, directions) {
  if (rectA.getCenterX() < rectB.getCenterX()) {
    directions[0] = -1;
  } else {
    directions[0] = 1;
  }

  if (rectA.getCenterY() < rectB.getCenterY()) {
    directions[1] = -1;
  } else {
    directions[1] = 1;
  }
};

/**
 * This method calculates the intersection (clipping) points of the two
 * input rectangles with line segment defined by the centers of these two
 * rectangles. The clipping points are saved in the input double array and
 * whether or not the two rectangles overlap is returned.
 */
IGeometry.getIntersection2 = function (rectA, rectB, result) {
  //result[0-1] will contain clipPoint of rectA, result[2-3] will contain clipPoint of rectB
  var p1x = rectA.getCenterX();
  var p1y = rectA.getCenterY();
  var p2x = rectB.getCenterX();
  var p2y = rectB.getCenterY();

  //if two rectangles intersect, then clipping points are centers
  if (rectA.intersects(rectB)) {
    result[0] = p1x;
    result[1] = p1y;
    result[2] = p2x;
    result[3] = p2y;
    return true;
  }
  //variables for rectA
  var topLeftAx = rectA.getX();
  var topLeftAy = rectA.getY();
  var topRightAx = rectA.getRight();
  var bottomLeftAx = rectA.getX();
  var bottomLeftAy = rectA.getBottom();
  var bottomRightAx = rectA.getRight();
  var halfWidthA = rectA.getWidthHalf();
  var halfHeightA = rectA.getHeightHalf();
  //variables for rectB
  var topLeftBx = rectB.getX();
  var topLeftBy = rectB.getY();
  var topRightBx = rectB.getRight();
  var bottomLeftBx = rectB.getX();
  var bottomLeftBy = rectB.getBottom();
  var bottomRightBx = rectB.getRight();
  var halfWidthB = rectB.getWidthHalf();
  var halfHeightB = rectB.getHeightHalf();

  //flag whether clipping points are found
  var clipPointAFound = false;
  var clipPointBFound = false;

  // line is vertical
  if (p1x === p2x) {
    if (p1y > p2y) {
      result[0] = p1x;
      result[1] = topLeftAy;
      result[2] = p2x;
      result[3] = bottomLeftBy;
      return false;
    } else if (p1y < p2y) {
      result[0] = p1x;
      result[1] = bottomLeftAy;
      result[2] = p2x;
      result[3] = topLeftBy;
      return false;
    } else {
      //not line, return null;
    }
  }
  // line is horizontal
  else if (p1y === p2y) {
      if (p1x > p2x) {
        result[0] = topLeftAx;
        result[1] = p1y;
        result[2] = topRightBx;
        result[3] = p2y;
        return false;
      } else if (p1x < p2x) {
        result[0] = topRightAx;
        result[1] = p1y;
        result[2] = topLeftBx;
        result[3] = p2y;
        return false;
      } else {
        //not valid line, return null;
      }
    } else {
      //slopes of rectA's and rectB's diagonals
      var slopeA = rectA.height / rectA.width;
      var slopeB = rectB.height / rectB.width;

      //slope of line between center of rectA and center of rectB
      var slopePrime = (p2y - p1y) / (p2x - p1x);
      var cardinalDirectionA = void 0;
      var cardinalDirectionB = void 0;
      var tempPointAx = void 0;
      var tempPointAy = void 0;
      var tempPointBx = void 0;
      var tempPointBy = void 0;

      //determine whether clipping point is the corner of nodeA
      if (-slopeA === slopePrime) {
        if (p1x > p2x) {
          result[0] = bottomLeftAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = topRightAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        }
      } else if (slopeA === slopePrime) {
        if (p1x > p2x) {
          result[0] = topLeftAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = bottomRightAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        }
      }

      //determine whether clipping point is the corner of nodeB
      if (-slopeB === slopePrime) {
        if (p2x > p1x) {
          result[2] = bottomLeftBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = topRightBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        }
      } else if (slopeB === slopePrime) {
        if (p2x > p1x) {
          result[2] = topLeftBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = bottomRightBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        }
      }

      //if both clipping points are corners
      if (clipPointAFound && clipPointBFound) {
        return false;
      }

      //determine Cardinal Direction of rectangles
      if (p1x > p2x) {
        if (p1y > p2y) {
          cardinalDirectionA = this.getCardinalDirection(slopeA, slopePrime, 4);
          cardinalDirectionB = this.getCardinalDirection(slopeB, slopePrime, 2);
        } else {
          cardinalDirectionA = this.getCardinalDirection(-slopeA, slopePrime, 3);
          cardinalDirectionB = this.getCardinalDirection(-slopeB, slopePrime, 1);
        }
      } else {
        if (p1y > p2y) {
          cardinalDirectionA = this.getCardinalDirection(-slopeA, slopePrime, 1);
          cardinalDirectionB = this.getCardinalDirection(-slopeB, slopePrime, 3);
        } else {
          cardinalDirectionA = this.getCardinalDirection(slopeA, slopePrime, 2);
          cardinalDirectionB = this.getCardinalDirection(slopeB, slopePrime, 4);
        }
      }
      //calculate clipping Point if it is not found before
      if (!clipPointAFound) {
        switch (cardinalDirectionA) {
          case 1:
            tempPointAy = topLeftAy;
            tempPointAx = p1x + -halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 2:
            tempPointAx = bottomRightAx;
            tempPointAy = p1y + halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 3:
            tempPointAy = bottomLeftAy;
            tempPointAx = p1x + halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 4:
            tempPointAx = bottomLeftAx;
            tempPointAy = p1y + -halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
        }
      }
      if (!clipPointBFound) {
        switch (cardinalDirectionB) {
          case 1:
            tempPointBy = topLeftBy;
            tempPointBx = p2x + -halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 2:
            tempPointBx = bottomRightBx;
            tempPointBy = p2y + halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 3:
            tempPointBy = bottomLeftBy;
            tempPointBx = p2x + halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 4:
            tempPointBx = bottomLeftBx;
            tempPointBy = p2y + -halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
        }
      }
    }
  return false;
};

/**
 * This method returns in which cardinal direction does input point stays
 * 1: North
 * 2: East
 * 3: South
 * 4: West
 */
IGeometry.getCardinalDirection = function (slope, slopePrime, line) {
  if (slope > slopePrime) {
    return line;
  } else {
    return 1 + line % 4;
  }
};

/**
 * This method calculates the intersection of the two lines defined by
 * point pairs (s1,s2) and (f1,f2).
 */
IGeometry.getIntersection = function (s1, s2, f1, f2) {
  if (f2 == null) {
    return this.getIntersection2(s1, s2, f1);
  }

  var x1 = s1.x;
  var y1 = s1.y;
  var x2 = s2.x;
  var y2 = s2.y;
  var x3 = f1.x;
  var y3 = f1.y;
  var x4 = f2.x;
  var y4 = f2.y;
  var x = void 0,
      y = void 0; // intersection point
  var a1 = void 0,
      a2 = void 0,
      b1 = void 0,
      b2 = void 0,
      c1 = void 0,
      c2 = void 0; // coefficients of line eqns.
  var denom = void 0;

  a1 = y2 - y1;
  b1 = x1 - x2;
  c1 = x2 * y1 - x1 * y2; // { a1*x + b1*y + c1 = 0 is line 1 }

  a2 = y4 - y3;
  b2 = x3 - x4;
  c2 = x4 * y3 - x3 * y4; // { a2*x + b2*y + c2 = 0 is line 2 }

  denom = a1 * b2 - a2 * b1;

  if (denom === 0) {
    return null;
  }

  x = (b1 * c2 - b2 * c1) / denom;
  y = (a2 * c1 - a1 * c2) / denom;

  return new Point(x, y);
};

/**
 * This method finds and returns the angle of the vector from the + x-axis
 * in clockwise direction (compatible w/ Java coordinate system!).
 */
IGeometry.angleOfVector = function (Cx, Cy, Nx, Ny) {
  var C_angle = void 0;

  if (Cx !== Nx) {
    C_angle = Math.atan((Ny - Cy) / (Nx - Cx));

    if (Nx < Cx) {
      C_angle += Math.PI;
    } else if (Ny < Cy) {
      C_angle += this.TWO_PI;
    }
  } else if (Ny < Cy) {
    C_angle = this.ONE_AND_HALF_PI; // 270 degrees
  } else {
    C_angle = this.HALF_PI; // 90 degrees
  }

  return C_angle;
};

/**
 * This method checks whether the given two line segments (one with point
 * p1 and p2, the other with point p3 and p4) intersect at a point other
 * than these points.
 */
IGeometry.doIntersect = function (p1, p2, p3, p4) {
  var a = p1.x;
  var b = p1.y;
  var c = p2.x;
  var d = p2.y;
  var p = p3.x;
  var q = p3.y;
  var r = p4.x;
  var s = p4.y;
  var det = (c - a) * (s - q) - (r - p) * (d - b);

  if (det === 0) {
    return false;
  } else {
    var lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    var gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
  }
};

// -----------------------------------------------------------------------------
// Section: Class Constants
// -----------------------------------------------------------------------------
/**
 * Some useful pre-calculated constants
 */
IGeometry.HALF_PI = 0.5 * Math.PI;
IGeometry.ONE_AND_HALF_PI = 1.5 * Math.PI;
IGeometry.TWO_PI = 2.0 * Math.PI;
IGeometry.THREE_PI = 3.0 * Math.PI;

module.exports = IGeometry;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function IMath() {}

/**
 * This method returns the sign of the input value.
 */
IMath.sign = function (value) {
  if (value > 0) {
    return 1;
  } else if (value < 0) {
    return -1;
  } else {
    return 0;
  }
};

IMath.floor = function (value) {
  return value < 0 ? Math.ceil(value) : Math.floor(value);
};

IMath.ceil = function (value) {
  return value < 0 ? Math.floor(value) : Math.ceil(value);
};

module.exports = IMath;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Integer() {}

Integer.MAX_VALUE = 2147483647;
Integer.MIN_VALUE = -2147483648;

module.exports = Integer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nodeFrom = function nodeFrom(value) {
  return { value: value, next: null, prev: null };
};

var add = function add(prev, node, next, list) {
  if (prev !== null) {
    prev.next = node;
  } else {
    list.head = node;
  }

  if (next !== null) {
    next.prev = node;
  } else {
    list.tail = node;
  }

  node.prev = prev;
  node.next = next;

  list.length++;

  return node;
};

var _remove = function _remove(node, list) {
  var prev = node.prev,
      next = node.next;


  if (prev !== null) {
    prev.next = next;
  } else {
    list.head = next;
  }

  if (next !== null) {
    next.prev = prev;
  } else {
    list.tail = prev;
  }

  node.prev = node.next = null;

  list.length--;

  return node;
};

var LinkedList = function () {
  function LinkedList(vals) {
    var _this = this;

    _classCallCheck(this, LinkedList);

    this.length = 0;
    this.head = null;
    this.tail = null;

    if (vals != null) {
      vals.forEach(function (v) {
        return _this.push(v);
      });
    }
  }

  _createClass(LinkedList, [{
    key: "size",
    value: function size() {
      return this.length;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(val, otherNode) {
      return add(otherNode.prev, nodeFrom(val), otherNode, this);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(val, otherNode) {
      return add(otherNode, nodeFrom(val), otherNode.next, this);
    }
  }, {
    key: "insertNodeBefore",
    value: function insertNodeBefore(newNode, otherNode) {
      return add(otherNode.prev, newNode, otherNode, this);
    }
  }, {
    key: "insertNodeAfter",
    value: function insertNodeAfter(newNode, otherNode) {
      return add(otherNode, newNode, otherNode.next, this);
    }
  }, {
    key: "push",
    value: function push(val) {
      return add(this.tail, nodeFrom(val), null, this);
    }
  }, {
    key: "unshift",
    value: function unshift(val) {
      return add(null, nodeFrom(val), this.head, this);
    }
  }, {
    key: "remove",
    value: function remove(node) {
      return _remove(node, this);
    }
  }, {
    key: "pop",
    value: function pop() {
      return _remove(this.tail, this).value;
    }
  }, {
    key: "popNode",
    value: function popNode() {
      return _remove(this.tail, this);
    }
  }, {
    key: "shift",
    value: function shift() {
      return _remove(this.head, this).value;
    }
  }, {
    key: "shiftNode",
    value: function shiftNode() {
      return _remove(this.head, this);
    }
  }, {
    key: "get_object_at",
    value: function get_object_at(index) {
      if (index <= this.length()) {
        var i = 1;
        var current = this.head;
        while (i < index) {
          current = current.next;
          i++;
        }
        return current.value;
      }
    }
  }, {
    key: "set_object_at",
    value: function set_object_at(index, value) {
      if (index <= this.length()) {
        var i = 1;
        var current = this.head;
        while (i < index) {
          current = current.next;
          i++;
        }
        current.value = value;
      }
    }
  }]);

  return LinkedList;
}();

module.exports = LinkedList;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 *This class is the javascript implementation of the Point.java class in jdk
 */
function Point(x, y, p) {
  this.x = null;
  this.y = null;
  if (x == null && y == null && p == null) {
    this.x = 0;
    this.y = 0;
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    this.x = x;
    this.y = y;
  } else if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.x = p.x;
    this.y = p.y;
  }
}

Point.prototype.getX = function () {
  return this.x;
};

Point.prototype.getY = function () {
  return this.y;
};

Point.prototype.getLocation = function () {
  return new Point(this.x, this.y);
};

Point.prototype.setLocation = function (x, y, p) {
  if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.setLocation(p.x, p.y);
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    //if both parameters are integer just move (x,y) location
    if (parseInt(x) == x && parseInt(y) == y) {
      this.move(x, y);
    } else {
      this.x = Math.floor(x + 0.5);
      this.y = Math.floor(y + 0.5);
    }
  }
};

Point.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.translate = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

Point.prototype.equals = function (obj) {
  if (obj.constructor.name == "Point") {
    var pt = obj;
    return this.x == pt.x && this.y == pt.y;
  }
  return this == obj;
};

Point.prototype.toString = function () {
  return new Point().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
};

module.exports = Point;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function RectangleD(x, y, width, height) {
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;

  if (x != null && y != null && width != null && height != null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

RectangleD.prototype.getX = function () {
  return this.x;
};

RectangleD.prototype.setX = function (x) {
  this.x = x;
};

RectangleD.prototype.getY = function () {
  return this.y;
};

RectangleD.prototype.setY = function (y) {
  this.y = y;
};

RectangleD.prototype.getWidth = function () {
  return this.width;
};

RectangleD.prototype.setWidth = function (width) {
  this.width = width;
};

RectangleD.prototype.getHeight = function () {
  return this.height;
};

RectangleD.prototype.setHeight = function (height) {
  this.height = height;
};

RectangleD.prototype.getRight = function () {
  return this.x + this.width;
};

RectangleD.prototype.getBottom = function () {
  return this.y + this.height;
};

RectangleD.prototype.intersects = function (a) {
  if (this.getRight() < a.x) {
    return false;
  }

  if (this.getBottom() < a.y) {
    return false;
  }

  if (a.getRight() < this.x) {
    return false;
  }

  if (a.getBottom() < this.y) {
    return false;
  }

  return true;
};

RectangleD.prototype.getCenterX = function () {
  return this.x + this.width / 2;
};

RectangleD.prototype.getMinX = function () {
  return this.getX();
};

RectangleD.prototype.getMaxX = function () {
  return this.getX() + this.width;
};

RectangleD.prototype.getCenterY = function () {
  return this.y + this.height / 2;
};

RectangleD.prototype.getMinY = function () {
  return this.getY();
};

RectangleD.prototype.getMaxY = function () {
  return this.getY() + this.height;
};

RectangleD.prototype.getWidthHalf = function () {
  return this.width / 2;
};

RectangleD.prototype.getHeightHalf = function () {
  return this.height / 2;
};

module.exports = RectangleD;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function UniqueIDGeneretor() {}

UniqueIDGeneretor.lastID = 0;

UniqueIDGeneretor.createID = function (obj) {
  if (UniqueIDGeneretor.isPrimitive(obj)) {
    return obj;
  }
  if (obj.uniqueID != null) {
    return obj.uniqueID;
  }
  obj.uniqueID = UniqueIDGeneretor.getString();
  UniqueIDGeneretor.lastID++;
  return obj.uniqueID;
};

UniqueIDGeneretor.getString = function (id) {
  if (id == null) id = UniqueIDGeneretor.lastID;
  return "Object#" + id + "";
};

UniqueIDGeneretor.isPrimitive = function (arg) {
  var type = typeof arg === "undefined" ? "undefined" : _typeof(arg);
  return arg == null || type != "object" && type != "function";
};

module.exports = UniqueIDGeneretor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var LayoutConstants = __webpack_require__(0);
var LGraphManager = __webpack_require__(6);
var LNode = __webpack_require__(3);
var LEdge = __webpack_require__(1);
var LGraph = __webpack_require__(5);
var PointD = __webpack_require__(4);
var Transform = __webpack_require__(17);
var Emitter = __webpack_require__(27);

function Layout(isRemoteUse) {
  Emitter.call(this);

  //Layout Quality: 0:draft, 1:default, 2:proof
  this.layoutQuality = LayoutConstants.QUALITY;
  //Whether layout should create bendpoints as needed or not
  this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
  //Whether layout should be incremental or not
  this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
  //Whether we animate from before to after layout node positions
  this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
  //Whether we animate the layout process or not
  this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
  //Number iterations that should be done between two successive animations
  this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
  /**
   * Whether or not leaf nodes (non-compound nodes) are of uniform sizes. When
   * they are, both spring and repulsion forces between two leaf nodes can be
   * calculated without the expensive clipping point calculations, resulting
   * in major speed-up.
   */
  this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  /**
   * This is used for creation of bendpoints by using dummy nodes and edges.
   * Maps an LEdge to its dummy bendpoint path.
   */
  this.edgeToDummyNodes = new Map();
  this.graphManager = new LGraphManager(this);
  this.isLayoutFinished = false;
  this.isSubLayout = false;
  this.isRemoteUse = false;

  if (isRemoteUse != null) {
    this.isRemoteUse = isRemoteUse;
  }
}

Layout.RANDOM_SEED = 1;

Layout.prototype = Object.create(Emitter.prototype);

Layout.prototype.getGraphManager = function () {
  return this.graphManager;
};

Layout.prototype.getAllNodes = function () {
  return this.graphManager.getAllNodes();
};

Layout.prototype.getAllEdges = function () {
  return this.graphManager.getAllEdges();
};

Layout.prototype.getAllNodesToApplyGravitation = function () {
  return this.graphManager.getAllNodesToApplyGravitation();
};

Layout.prototype.newGraphManager = function () {
  var gm = new LGraphManager(this);
  this.graphManager = gm;
  return gm;
};

Layout.prototype.newGraph = function (vGraph) {
  return new LGraph(null, this.graphManager, vGraph);
};

Layout.prototype.newNode = function (vNode) {
  return new LNode(this.graphManager, vNode);
};

Layout.prototype.newEdge = function (vEdge) {
  return new LEdge(null, null, vEdge);
};

Layout.prototype.checkLayoutSuccess = function () {
  return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
};

Layout.prototype.runLayout = function () {
  this.isLayoutFinished = false;

  if (this.tilingPreLayout) {
    this.tilingPreLayout();
  }

  this.initParameters();
  var isLayoutSuccessfull;

  if (this.checkLayoutSuccess()) {
    isLayoutSuccessfull = false;
  } else {
    isLayoutSuccessfull = this.layout();
  }

  if (LayoutConstants.ANIMATE === 'during') {
    // If this is a 'during' layout animation. Layout is not finished yet. 
    // We need to perform these in index.js when layout is really finished.
    return false;
  }

  if (isLayoutSuccessfull) {
    if (!this.isSubLayout) {
      this.doPostLayout();
    }
  }

  if (this.tilingPostLayout) {
    this.tilingPostLayout();
  }

  this.isLayoutFinished = true;

  return isLayoutSuccessfull;
};

/**
 * This method performs the operations required after layout.
 */
Layout.prototype.doPostLayout = function () {
  //assert !isSubLayout : "Should not be called on sub-layout!";
  // Propagate geometric changes to v-level objects
  if (!this.incremental) {
    this.transform();
  }
  this.update();
};

/**
 * This method updates the geometry of the target graph according to
 * calculated layout.
 */
Layout.prototype.update2 = function () {
  // update bend points
  if (this.createBendsAsNeeded) {
    this.createBendpointsFromDummyNodes();

    // reset all edges, since the topology has changed
    this.graphManager.resetAllEdges();
  }

  // perform edge, node and root updates if layout is not called
  // remotely
  if (!this.isRemoteUse) {
    // update all edges
    var edge;
    var allEdges = this.graphManager.getAllEdges();
    for (var i = 0; i < allEdges.length; i++) {
      edge = allEdges[i];
      //      this.update(edge);
    }

    // recursively update nodes
    var node;
    var nodes = this.graphManager.getRoot().getNodes();
    for (var i = 0; i < nodes.length; i++) {
      node = nodes[i];
      //      this.update(node);
    }

    // update root graph
    this.update(this.graphManager.getRoot());
  }
};

Layout.prototype.update = function (obj) {
  if (obj == null) {
    this.update2();
  } else if (obj instanceof LNode) {
    var node = obj;
    if (node.getChild() != null) {
      // since node is compound, recursively update child nodes
      var nodes = node.getChild().getNodes();
      for (var i = 0; i < nodes.length; i++) {
        update(nodes[i]);
      }
    }

    // if the l-level node is associated with a v-level graph object,
    // then it is assumed that the v-level node implements the
    // interface Updatable.
    if (node.vGraphObject != null) {
      // cast to Updatable without any type check
      var vNode = node.vGraphObject;

      // call the update method of the interface
      vNode.update(node);
    }
  } else if (obj instanceof LEdge) {
    var edge = obj;
    // if the l-level edge is associated with a v-level graph object,
    // then it is assumed that the v-level edge implements the
    // interface Updatable.

    if (edge.vGraphObject != null) {
      // cast to Updatable without any type check
      var vEdge = edge.vGraphObject;

      // call the update method of the interface
      vEdge.update(edge);
    }
  } else if (obj instanceof LGraph) {
    var graph = obj;
    // if the l-level graph is associated with a v-level graph object,
    // then it is assumed that the v-level object implements the
    // interface Updatable.

    if (graph.vGraphObject != null) {
      // cast to Updatable without any type check
      var vGraph = graph.vGraphObject;

      // call the update method of the interface
      vGraph.update(graph);
    }
  }
};

/**
 * This method is used to set all layout parameters to default values
 * determined at compile time.
 */
Layout.prototype.initParameters = function () {
  if (!this.isSubLayout) {
    this.layoutQuality = LayoutConstants.QUALITY;
    this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
    this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
    this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
    this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
    this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
    this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  }

  if (this.animationDuringLayout) {
    this.animationOnLayout = false;
  }
};

Layout.prototype.transform = function (newLeftTop) {
  if (newLeftTop == undefined) {
    this.transform(new PointD(0, 0));
  } else {
    // create a transformation object (from Eclipse to layout). When an
    // inverse transform is applied, we get upper-left coordinate of the
    // drawing or the root graph at given input coordinate (some margins
    // already included in calculation of left-top).

    var trans = new Transform();
    var leftTop = this.graphManager.getRoot().updateLeftTop();

    if (leftTop != null) {
      trans.setWorldOrgX(newLeftTop.x);
      trans.setWorldOrgY(newLeftTop.y);

      trans.setDeviceOrgX(leftTop.x);
      trans.setDeviceOrgY(leftTop.y);

      var nodes = this.getAllNodes();
      var node;

      for (var i = 0; i < nodes.length; i++) {
        node = nodes[i];
        node.transform(trans);
      }
    }
  }
};

Layout.prototype.positionNodesRandomly = function (graph) {

  if (graph == undefined) {
    //assert !this.incremental;
    this.positionNodesRandomly(this.getGraphManager().getRoot());
    this.getGraphManager().getRoot().updateBounds(true);
  } else {
    var lNode;
    var childGraph;

    var nodes = graph.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      lNode = nodes[i];
      childGraph = lNode.getChild();

      if (childGraph == null) {
        lNode.scatter();
      } else if (childGraph.getNodes().length == 0) {
        lNode.scatter();
      } else {
        this.positionNodesRandomly(childGraph);
        lNode.updateBounds();
      }
    }
  }
};

/**
 * This method returns a list of trees where each tree is represented as a
 * list of l-nodes. The method returns a list of size 0 when:
 * - The graph is not flat or
 * - One of the component(s) of the graph is not a tree.
 */
Layout.prototype.getFlatForest = function () {
  var flatForest = [];
  var isForest = true;

  // Quick reference for all nodes in the graph manager associated with
  // this layout. The list should not be changed.
  var allNodes = this.graphManager.getRoot().getNodes();

  // First be sure that the graph is flat
  var isFlat = true;

  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i].getChild() != null) {
      isFlat = false;
    }
  }

  // Return empty forest if the graph is not flat.
  if (!isFlat) {
    return flatForest;
  }

  // Run BFS for each component of the graph.

  var visited = new Set();
  var toBeVisited = [];
  var parents = new Map();
  var unProcessedNodes = [];

  unProcessedNodes = unProcessedNodes.concat(allNodes);

  // Each iteration of this loop finds a component of the graph and
  // decides whether it is a tree or not. If it is a tree, adds it to the
  // forest and continued with the next component.

  while (unProcessedNodes.length > 0 && isForest) {
    toBeVisited.push(unProcessedNodes[0]);

    // Start the BFS. Each iteration of this loop visits a node in a
    // BFS manner.
    while (toBeVisited.length > 0 && isForest) {
      //pool operation
      var currentNode = toBeVisited[0];
      toBeVisited.splice(0, 1);
      visited.add(currentNode);

      // Traverse all neighbors of this node
      var neighborEdges = currentNode.getEdges();

      for (var i = 0; i < neighborEdges.length; i++) {
        var currentNeighbor = neighborEdges[i].getOtherEnd(currentNode);

        // If BFS is not growing from this neighbor.
        if (parents.get(currentNode) != currentNeighbor) {
          // We haven't previously visited this neighbor.
          if (!visited.has(currentNeighbor)) {
            toBeVisited.push(currentNeighbor);
            parents.set(currentNeighbor, currentNode);
          }
          // Since we have previously visited this neighbor and
          // this neighbor is not parent of currentNode, given
          // graph contains a component that is not tree, hence
          // it is not a forest.
          else {
              isForest = false;
              break;
            }
        }
      }
    }

    // The graph contains a component that is not a tree. Empty
    // previously found trees. The method will end.
    if (!isForest) {
      flatForest = [];
    }
    // Save currently visited nodes as a tree in our forest. Reset
    // visited and parents lists. Continue with the next component of
    // the graph, if any.
    else {
        var temp = [].concat(_toConsumableArray(visited));
        flatForest.push(temp);
        //flatForest = flatForest.concat(temp);
        //unProcessedNodes.removeAll(visited);
        for (var i = 0; i < temp.length; i++) {
          var value = temp[i];
          var index = unProcessedNodes.indexOf(value);
          if (index > -1) {
            unProcessedNodes.splice(index, 1);
          }
        }
        visited = new Set();
        parents = new Map();
      }
  }

  return flatForest;
};

/**
 * This method creates dummy nodes (an l-level node with minimal dimensions)
 * for the given edge (one per bendpoint). The existing l-level structure
 * is updated accordingly.
 */
Layout.prototype.createDummyNodesForBendpoints = function (edge) {
  var dummyNodes = [];
  var prev = edge.source;

  var graph = this.graphManager.calcLowestCommonAncestor(edge.source, edge.target);

  for (var i = 0; i < edge.bendpoints.length; i++) {
    // create new dummy node
    var dummyNode = this.newNode(null);
    dummyNode.setRect(new Point(0, 0), new Dimension(1, 1));

    graph.add(dummyNode);

    // create new dummy edge between prev and dummy node
    var dummyEdge = this.newEdge(null);
    this.graphManager.add(dummyEdge, prev, dummyNode);

    dummyNodes.add(dummyNode);
    prev = dummyNode;
  }

  var dummyEdge = this.newEdge(null);
  this.graphManager.add(dummyEdge, prev, edge.target);

  this.edgeToDummyNodes.set(edge, dummyNodes);

  // remove real edge from graph manager if it is inter-graph
  if (edge.isInterGraph()) {
    this.graphManager.remove(edge);
  }
  // else, remove the edge from the current graph
  else {
      graph.remove(edge);
    }

  return dummyNodes;
};

/**
 * This method creates bendpoints for edges from the dummy nodes
 * at l-level.
 */
Layout.prototype.createBendpointsFromDummyNodes = function () {
  var edges = [];
  edges = edges.concat(this.graphManager.getAllEdges());
  edges = [].concat(_toConsumableArray(this.edgeToDummyNodes.keys())).concat(edges);

  for (var k = 0; k < edges.length; k++) {
    var lEdge = edges[k];

    if (lEdge.bendpoints.length > 0) {
      var path = this.edgeToDummyNodes.get(lEdge);

      for (var i = 0; i < path.length; i++) {
        var dummyNode = path[i];
        var p = new PointD(dummyNode.getCenterX(), dummyNode.getCenterY());

        // update bendpoint's location according to dummy node
        var ebp = lEdge.bendpoints.get(i);
        ebp.x = p.x;
        ebp.y = p.y;

        // remove the dummy node, dummy edges incident with this
        // dummy node is also removed (within the remove method)
        dummyNode.getOwner().remove(dummyNode);
      }

      // add the real edge to graph
      this.graphManager.add(lEdge, lEdge.source, lEdge.target);
    }
  }
};

Layout.transform = function (sliderValue, defaultValue, minDiv, maxMul) {
  if (minDiv != undefined && maxMul != undefined) {
    var value = defaultValue;

    if (sliderValue <= 50) {
      var minValue = defaultValue / minDiv;
      value -= (defaultValue - minValue) / 50 * (50 - sliderValue);
    } else {
      var maxValue = defaultValue * maxMul;
      value += (maxValue - defaultValue) / 50 * (sliderValue - 50);
    }

    return value;
  } else {
    var a, b;

    if (sliderValue <= 50) {
      a = 9.0 * defaultValue / 500.0;
      b = defaultValue / 10.0;
    } else {
      a = 9.0 * defaultValue / 50.0;
      b = -8 * defaultValue;
    }

    return a * sliderValue + b;
  }
};

/**
 * This method finds and returns the center of the given nodes, assuming
 * that the given nodes form a tree in themselves.
 */
Layout.findCenterOfTree = function (nodes) {
  var list = [];
  list = list.concat(nodes);

  var removedNodes = [];
  var remainingDegrees = new Map();
  var foundCenter = false;
  var centerNode = null;

  if (list.length == 1 || list.length == 2) {
    foundCenter = true;
    centerNode = list[0];
  }

  for (var i = 0; i < list.length; i++) {
    var node = list[i];
    var degree = node.getNeighborsList().size;
    remainingDegrees.set(node, node.getNeighborsList().size);

    if (degree == 1) {
      removedNodes.push(node);
    }
  }

  var tempList = [];
  tempList = tempList.concat(removedNodes);

  while (!foundCenter) {
    var tempList2 = [];
    tempList2 = tempList2.concat(tempList);
    tempList = [];

    for (var i = 0; i < list.length; i++) {
      var node = list[i];

      var index = list.indexOf(node);
      if (index >= 0) {
        list.splice(index, 1);
      }

      var neighbours = node.getNeighborsList();

      neighbours.forEach(function (neighbour) {
        if (removedNodes.indexOf(neighbour) < 0) {
          var otherDegree = remainingDegrees.get(neighbour);
          var newDegree = otherDegree - 1;

          if (newDegree == 1) {
            tempList.push(neighbour);
          }

          remainingDegrees.set(neighbour, newDegree);
        }
      });
    }

    removedNodes = removedNodes.concat(tempList);

    if (list.length == 1 || list.length == 2) {
      foundCenter = true;
      centerNode = list[0];
    }
  }

  return centerNode;
};

/**
 * During the coarsening process, this layout may be referenced by two graph managers
 * this setter function grants access to change the currently being used graph manager
 */
Layout.prototype.setGraphManager = function (gm) {
  this.graphManager = gm;
};

module.exports = Layout;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function RandomSeed() {}
RandomSeed.seed = 1;
RandomSeed.x = 0;

RandomSeed.nextDouble = function () {
  RandomSeed.x = Math.sin(RandomSeed.seed++) * 10000;
  return RandomSeed.x - Math.floor(RandomSeed.x);
};

module.exports = RandomSeed;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PointD = __webpack_require__(4);

function Transform(x, y) {
  this.lworldOrgX = 0.0;
  this.lworldOrgY = 0.0;
  this.ldeviceOrgX = 0.0;
  this.ldeviceOrgY = 0.0;
  this.lworldExtX = 1.0;
  this.lworldExtY = 1.0;
  this.ldeviceExtX = 1.0;
  this.ldeviceExtY = 1.0;
}

Transform.prototype.getWorldOrgX = function () {
  return this.lworldOrgX;
};

Transform.prototype.setWorldOrgX = function (wox) {
  this.lworldOrgX = wox;
};

Transform.prototype.getWorldOrgY = function () {
  return this.lworldOrgY;
};

Transform.prototype.setWorldOrgY = function (woy) {
  this.lworldOrgY = woy;
};

Transform.prototype.getWorldExtX = function () {
  return this.lworldExtX;
};

Transform.prototype.setWorldExtX = function (wex) {
  this.lworldExtX = wex;
};

Transform.prototype.getWorldExtY = function () {
  return this.lworldExtY;
};

Transform.prototype.setWorldExtY = function (wey) {
  this.lworldExtY = wey;
};

/* Device related */

Transform.prototype.getDeviceOrgX = function () {
  return this.ldeviceOrgX;
};

Transform.prototype.setDeviceOrgX = function (dox) {
  this.ldeviceOrgX = dox;
};

Transform.prototype.getDeviceOrgY = function () {
  return this.ldeviceOrgY;
};

Transform.prototype.setDeviceOrgY = function (doy) {
  this.ldeviceOrgY = doy;
};

Transform.prototype.getDeviceExtX = function () {
  return this.ldeviceExtX;
};

Transform.prototype.setDeviceExtX = function (dex) {
  this.ldeviceExtX = dex;
};

Transform.prototype.getDeviceExtY = function () {
  return this.ldeviceExtY;
};

Transform.prototype.setDeviceExtY = function (dey) {
  this.ldeviceExtY = dey;
};

Transform.prototype.transformX = function (x) {
  var xDevice = 0.0;
  var worldExtX = this.lworldExtX;
  if (worldExtX != 0.0) {
    xDevice = this.ldeviceOrgX + (x - this.lworldOrgX) * this.ldeviceExtX / worldExtX;
  }

  return xDevice;
};

Transform.prototype.transformY = function (y) {
  var yDevice = 0.0;
  var worldExtY = this.lworldExtY;
  if (worldExtY != 0.0) {
    yDevice = this.ldeviceOrgY + (y - this.lworldOrgY) * this.ldeviceExtY / worldExtY;
  }

  return yDevice;
};

Transform.prototype.inverseTransformX = function (x) {
  var xWorld = 0.0;
  var deviceExtX = this.ldeviceExtX;
  if (deviceExtX != 0.0) {
    xWorld = this.lworldOrgX + (x - this.ldeviceOrgX) * this.lworldExtX / deviceExtX;
  }

  return xWorld;
};

Transform.prototype.inverseTransformY = function (y) {
  var yWorld = 0.0;
  var deviceExtY = this.ldeviceExtY;
  if (deviceExtY != 0.0) {
    yWorld = this.lworldOrgY + (y - this.ldeviceOrgY) * this.lworldExtY / deviceExtY;
  }
  return yWorld;
};

Transform.prototype.inverseTransformPoint = function (inPoint) {
  var outPoint = new PointD(this.inverseTransformX(inPoint.x), this.inverseTransformY(inPoint.y));
  return outPoint;
};

module.exports = Transform;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Layout = __webpack_require__(15);
var FDLayoutConstants = __webpack_require__(7);
var LayoutConstants = __webpack_require__(0);
var IGeometry = __webpack_require__(8);
var IMath = __webpack_require__(9);

function FDLayout() {
  Layout.call(this);

  this.useSmartIdealEdgeLengthCalculation = FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
  this.idealEdgeLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
  this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
  this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
  this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
  this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
  this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
  this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
  this.displacementThresholdPerNode = 3.0 * FDLayoutConstants.DEFAULT_EDGE_LENGTH / 100;
  this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.initialCoolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.totalDisplacement = 0.0;
  this.oldTotalDisplacement = 0.0;
  this.maxIterations = FDLayoutConstants.MAX_ITERATIONS;
}

FDLayout.prototype = Object.create(Layout.prototype);

for (var prop in Layout) {
  FDLayout[prop] = Layout[prop];
}

FDLayout.prototype.initParameters = function () {
  Layout.prototype.initParameters.call(this, arguments);

  this.totalIterations = 0;
  this.notAnimatedIterations = 0;

  this.useFRGridVariant = FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;

  this.grid = [];
};

FDLayout.prototype.calcIdealEdgeLengths = function () {
  var edge;
  var lcaDepth;
  var source;
  var target;
  var sizeOfSourceInLca;
  var sizeOfTargetInLca;

  var allEdges = this.getGraphManager().getAllEdges();
  for (var i = 0; i < allEdges.length; i++) {
    edge = allEdges[i];

    edge.idealLength = this.idealEdgeLength;

    if (edge.isInterGraph) {
      source = edge.getSource();
      target = edge.getTarget();

      sizeOfSourceInLca = edge.getSourceInLca().getEstimatedSize();
      sizeOfTargetInLca = edge.getTargetInLca().getEstimatedSize();

      if (this.useSmartIdealEdgeLengthCalculation) {
        edge.idealLength += sizeOfSourceInLca + sizeOfTargetInLca - 2 * LayoutConstants.SIMPLE_NODE_SIZE;
      }

      lcaDepth = edge.getLca().getInclusionTreeDepth();

      edge.idealLength += FDLayoutConstants.DEFAULT_EDGE_LENGTH * FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (source.getInclusionTreeDepth() + target.getInclusionTreeDepth() - 2 * lcaDepth);
    }
  }
};

FDLayout.prototype.initSpringEmbedder = function () {

  var s = this.getAllNodes().length;
  if (this.incremental) {
    if (s > FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) {
      this.coolingFactor = Math.max(this.coolingFactor * FDLayoutConstants.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (s - FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) / (FDLayoutConstants.ADAPTATION_UPPER_NODE_LIMIT - FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - FDLayoutConstants.COOLING_ADAPTATION_FACTOR));
    }
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL;
  } else {
    if (s > FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) {
      this.coolingFactor = Math.max(FDLayoutConstants.COOLING_ADAPTATION_FACTOR, 1.0 - (s - FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) / (FDLayoutConstants.ADAPTATION_UPPER_NODE_LIMIT - FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) * (1 - FDLayoutConstants.COOLING_ADAPTATION_FACTOR));
    } else {
      this.coolingFactor = 1.0;
    }
    this.initialCoolingFactor = this.coolingFactor;
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT;
  }

  this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);

  this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;

  this.repulsionRange = this.calcRepulsionRange();
};

FDLayout.prototype.calcSpringForces = function () {
  var lEdges = this.getAllEdges();
  var edge;

  for (var i = 0; i < lEdges.length; i++) {
    edge = lEdges[i];

    this.calcSpringForce(edge, edge.idealLength);
  }
};

FDLayout.prototype.calcRepulsionForces = function () {
  var gridUpdateAllowed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var forceToNodeSurroundingUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var i, j;
  var nodeA, nodeB;
  var lNodes = this.getAllNodes();
  var processedNodeSet;

  if (this.useFRGridVariant) {
    if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed) {
      this.updateGrid();
    }

    processedNodeSet = new Set();

    // calculate repulsion forces between each nodes and its surrounding
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];
      this.calculateRepulsionForceOfANode(nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate);
      processedNodeSet.add(nodeA);
    }
  } else {
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];

      for (j = i + 1; j < lNodes.length; j++) {
        nodeB = lNodes[j];

        // If both nodes are not members of the same graph, skip.
        if (nodeA.getOwner() != nodeB.getOwner()) {
          continue;
        }

        this.calcRepulsionForce(nodeA, nodeB);
      }
    }
  }
};

FDLayout.prototype.calcGravitationalForces = function () {
  var node;
  var lNodes = this.getAllNodesToApplyGravitation();

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    this.calcGravitationalForce(node);
  }
};

FDLayout.prototype.moveNodes = function () {
  var lNodes = this.getAllNodes();
  var node;

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    node.move();
  }
};

FDLayout.prototype.calcSpringForce = function (edge, idealLength) {
  var sourceNode = edge.getSource();
  var targetNode = edge.getTarget();

  var length;
  var springForce;
  var springForceX;
  var springForceY;

  // Update edge length
  if (this.uniformLeafNodeSizes && sourceNode.getChild() == null && targetNode.getChild() == null) {
    edge.updateLengthSimple();
  } else {
    edge.updateLength();

    if (edge.isOverlapingSourceAndTarget) {
      return;
    }
  }

  length = edge.getLength();

  // Calculate spring forces
  springForce = this.springConstant * (length - idealLength);

  // Project force onto x and y axes
  springForceX = springForce * (edge.lengthX / length);
  springForceY = springForce * (edge.lengthY / length);

  // Apply forces on the end nodes
  sourceNode.springForceX += springForceX;
  sourceNode.springForceY += springForceY;
  targetNode.springForceX -= springForceX;
  targetNode.springForceY -= springForceY;
};

FDLayout.prototype.calcRepulsionForce = function (nodeA, nodeB) {
  var rectA = nodeA.getRect();
  var rectB = nodeB.getRect();
  var overlapAmount = new Array(2);
  var clipPoints = new Array(4);
  var distanceX;
  var distanceY;
  var distanceSquared;
  var distance;
  var repulsionForce;
  var repulsionForceX;
  var repulsionForceY;

  if (rectA.intersects(rectB)) // two nodes overlap
    {
      // calculate separation amount in x and y directions
      IGeometry.calcSeparationAmount(rectA, rectB, overlapAmount, FDLayoutConstants.DEFAULT_EDGE_LENGTH / 2.0);

      repulsionForceX = 2 * overlapAmount[0];
      repulsionForceY = 2 * overlapAmount[1];

      var childrenConstant = nodeA.noOfChildren * nodeB.noOfChildren / (nodeA.noOfChildren + nodeB.noOfChildren);

      // Apply forces on the two nodes
      nodeA.repulsionForceX -= childrenConstant * repulsionForceX;
      nodeA.repulsionForceY -= childrenConstant * repulsionForceY;
      nodeB.repulsionForceX += childrenConstant * repulsionForceX;
      nodeB.repulsionForceY += childrenConstant * repulsionForceY;
    } else // no overlap
    {
      // calculate distance

      if (this.uniformLeafNodeSizes && nodeA.getChild() == null && nodeB.getChild() == null) // simply base repulsion on distance of node centers
        {
          distanceX = rectB.getCenterX() - rectA.getCenterX();
          distanceY = rectB.getCenterY() - rectA.getCenterY();
        } else // use clipping points
        {
          IGeometry.getIntersection(rectA, rectB, clipPoints);

          distanceX = clipPoints[2] - clipPoints[0];
          distanceY = clipPoints[3] - clipPoints[1];
        }

      // No repulsion range. FR grid variant should take care of this.
      if (Math.abs(distanceX) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceX = IMath.sign(distanceX) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      if (Math.abs(distanceY) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceY = IMath.sign(distanceY) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      distanceSquared = distanceX * distanceX + distanceY * distanceY;
      distance = Math.sqrt(distanceSquared);

      repulsionForce = this.repulsionConstant * nodeA.noOfChildren * nodeB.noOfChildren / distanceSquared;

      // Project force onto x and y axes
      repulsionForceX = repulsionForce * distanceX / distance;
      repulsionForceY = repulsionForce * distanceY / distance;

      // Apply forces on the two nodes    
      nodeA.repulsionForceX -= repulsionForceX;
      nodeA.repulsionForceY -= repulsionForceY;
      nodeB.repulsionForceX += repulsionForceX;
      nodeB.repulsionForceY += repulsionForceY;
    }
};

FDLayout.prototype.calcGravitationalForce = function (node) {
  var ownerGraph;
  var ownerCenterX;
  var ownerCenterY;
  var distanceX;
  var distanceY;
  var absDistanceX;
  var absDistanceY;
  var estimatedSize;
  ownerGraph = node.getOwner();

  ownerCenterX = (ownerGraph.getRight() + ownerGraph.getLeft()) / 2;
  ownerCenterY = (ownerGraph.getTop() + ownerGraph.getBottom()) / 2;
  distanceX = node.getCenterX() - ownerCenterX;
  distanceY = node.getCenterY() - ownerCenterY;
  absDistanceX = Math.abs(distanceX) + node.getWidth() / 2;
  absDistanceY = Math.abs(distanceY) + node.getHeight() / 2;

  if (node.getOwner() == this.graphManager.getRoot()) // in the root graph
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.gravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX;
        node.gravitationForceY = -this.gravityConstant * distanceY;
      }
    } else // inside a compound
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.compoundGravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX * this.compoundGravityConstant;
        node.gravitationForceY = -this.gravityConstant * distanceY * this.compoundGravityConstant;
      }
    }
};

FDLayout.prototype.isConverged = function () {
  var converged;
  var oscilating = false;

  if (this.totalIterations > this.maxIterations / 3) {
    oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
  }

  converged = this.totalDisplacement < this.totalDisplacementThreshold;

  this.oldTotalDisplacement = this.totalDisplacement;

  return converged || oscilating;
};

FDLayout.prototype.animate = function () {
  if (this.animationDuringLayout && !this.isSubLayout) {
    if (this.notAnimatedIterations == this.animationPeriod) {
      this.update();
      this.notAnimatedIterations = 0;
    } else {
      this.notAnimatedIterations++;
    }
  }
};

//This method calculates the number of children (weight) for all nodes
FDLayout.prototype.calcNoOfChildrenForAllNodes = function () {
  var node;
  var allNodes = this.graphManager.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    node = allNodes[i];
    node.noOfChildren = node.getNoOfChildren();
  }
};

// -----------------------------------------------------------------------------
// Section: FR-Grid Variant Repulsion Force Calculation
// -----------------------------------------------------------------------------

FDLayout.prototype.calcGrid = function (graph) {

  var sizeX = 0;
  var sizeY = 0;

  sizeX = parseInt(Math.ceil((graph.getRight() - graph.getLeft()) / this.repulsionRange));
  sizeY = parseInt(Math.ceil((graph.getBottom() - graph.getTop()) / this.repulsionRange));

  var grid = new Array(sizeX);

  for (var i = 0; i < sizeX; i++) {
    grid[i] = new Array(sizeY);
  }

  for (var i = 0; i < sizeX; i++) {
    for (var j = 0; j < sizeY; j++) {
      grid[i][j] = new Array();
    }
  }

  return grid;
};

FDLayout.prototype.addNodeToGrid = function (v, left, top) {

  var startX = 0;
  var finishX = 0;
  var startY = 0;
  var finishY = 0;

  startX = parseInt(Math.floor((v.getRect().x - left) / this.repulsionRange));
  finishX = parseInt(Math.floor((v.getRect().width + v.getRect().x - left) / this.repulsionRange));
  startY = parseInt(Math.floor((v.getRect().y - top) / this.repulsionRange));
  finishY = parseInt(Math.floor((v.getRect().height + v.getRect().y - top) / this.repulsionRange));

  for (var i = startX; i <= finishX; i++) {
    for (var j = startY; j <= finishY; j++) {
      this.grid[i][j].push(v);
      v.setGridCoordinates(startX, finishX, startY, finishY);
    }
  }
};

FDLayout.prototype.updateGrid = function () {
  var i;
  var nodeA;
  var lNodes = this.getAllNodes();

  this.grid = this.calcGrid(this.graphManager.getRoot());

  // put all nodes to proper grid cells
  for (i = 0; i < lNodes.length; i++) {
    nodeA = lNodes[i];
    this.addNodeToGrid(nodeA, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
  }
};

FDLayout.prototype.calculateRepulsionForceOfANode = function (nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate) {

  if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed || forceToNodeSurroundingUpdate) {
    var surrounding = new Set();
    nodeA.surrounding = new Array();
    var nodeB;
    var grid = this.grid;

    for (var i = nodeA.startX - 1; i < nodeA.finishX + 2; i++) {
      for (var j = nodeA.startY - 1; j < nodeA.finishY + 2; j++) {
        if (!(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length)) {
          for (var k = 0; k < grid[i][j].length; k++) {
            nodeB = grid[i][j][k];

            // If both nodes are not members of the same graph, 
            // or both nodes are the same, skip.
            if (nodeA.getOwner() != nodeB.getOwner() || nodeA == nodeB) {
              continue;
            }

            // check if the repulsion force between
            // nodeA and nodeB has already been calculated
            if (!processedNodeSet.has(nodeB) && !surrounding.has(nodeB)) {
              var distanceX = Math.abs(nodeA.getCenterX() - nodeB.getCenterX()) - (nodeA.getWidth() / 2 + nodeB.getWidth() / 2);
              var distanceY = Math.abs(nodeA.getCenterY() - nodeB.getCenterY()) - (nodeA.getHeight() / 2 + nodeB.getHeight() / 2);

              // if the distance between nodeA and nodeB 
              // is less then calculation range
              if (distanceX <= this.repulsionRange && distanceY <= this.repulsionRange) {
                //then add nodeB to surrounding of nodeA
                surrounding.add(nodeB);
              }
            }
          }
        }
      }
    }

    nodeA.surrounding = [].concat(_toConsumableArray(surrounding));
  }
  for (i = 0; i < nodeA.surrounding.length; i++) {
    this.calcRepulsionForce(nodeA, nodeA.surrounding[i]);
  }
};

FDLayout.prototype.calcRepulsionRange = function () {
  return 0.0;
};

module.exports = FDLayout;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LEdge = __webpack_require__(1);
var FDLayoutConstants = __webpack_require__(7);

function FDLayoutEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.idealLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
}

FDLayoutEdge.prototype = Object.create(LEdge.prototype);

for (var prop in LEdge) {
  FDLayoutEdge[prop] = LEdge[prop];
}

module.exports = FDLayoutEdge;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LNode = __webpack_require__(3);

function FDLayoutNode(gm, loc, size, vNode) {
  // alternative constructor is handled inside LNode
  LNode.call(this, gm, loc, size, vNode);
  //Spring, repulsion and gravitational forces acting on this node
  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  //Amount by which this node is to be moved in this iteration
  this.displacementX = 0;
  this.displacementY = 0;

  //Start and finish grid coordinates that this node is fallen into
  this.startX = 0;
  this.finishX = 0;
  this.startY = 0;
  this.finishY = 0;

  //Geometric neighbors of this node
  this.surrounding = [];
}

FDLayoutNode.prototype = Object.create(LNode.prototype);

for (var prop in LNode) {
  FDLayoutNode[prop] = LNode[prop];
}

FDLayoutNode.prototype.setGridCoordinates = function (_startX, _finishX, _startY, _finishY) {
  this.startX = _startX;
  this.finishX = _finishX;
  this.startY = _startY;
  this.finishY = _finishY;
};

module.exports = FDLayoutNode;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DimensionD(width, height) {
  this.width = 0;
  this.height = 0;
  if (width !== null && height !== null) {
    this.height = height;
    this.width = width;
  }
}

DimensionD.prototype.getWidth = function () {
  return this.width;
};

DimensionD.prototype.setWidth = function (width) {
  this.width = width;
};

DimensionD.prototype.getHeight = function () {
  return this.height;
};

DimensionD.prototype.setHeight = function (height) {
  this.height = height;
};

module.exports = DimensionD;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UniqueIDGeneretor = __webpack_require__(14);

function HashMap() {
  this.map = {};
  this.keys = [];
}

HashMap.prototype.put = function (key, value) {
  var theId = UniqueIDGeneretor.createID(key);
  if (!this.contains(theId)) {
    this.map[theId] = value;
    this.keys.push(key);
  }
};

HashMap.prototype.contains = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[key] != null;
};

HashMap.prototype.get = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[theId];
};

HashMap.prototype.keySet = function () {
  return this.keys;
};

module.exports = HashMap;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UniqueIDGeneretor = __webpack_require__(14);

function HashSet() {
  this.set = {};
}
;

HashSet.prototype.add = function (obj) {
  var theId = UniqueIDGeneretor.createID(obj);
  if (!this.contains(theId)) this.set[theId] = obj;
};

HashSet.prototype.remove = function (obj) {
  delete this.set[UniqueIDGeneretor.createID(obj)];
};

HashSet.prototype.clear = function () {
  this.set = {};
};

HashSet.prototype.contains = function (obj) {
  return this.set[UniqueIDGeneretor.createID(obj)] == obj;
};

HashSet.prototype.isEmpty = function () {
  return this.size() === 0;
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

//concats this.set to the given list
HashSet.prototype.addAllTo = function (list) {
  var keys = Object.keys(this.set);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    list.push(this.set[keys[i]]);
  }
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

HashSet.prototype.addAll = function (list) {
  var s = list.length;
  for (var i = 0; i < s; i++) {
    var v = list[i];
    this.add(v);
  }
};

module.exports = HashSet;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A classic Quicksort algorithm with Hoare's partition
 * - Works also on LinkedList objects
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

var LinkedList = __webpack_require__(11);

var Quicksort = function () {
    function Quicksort(A, compareFunction) {
        _classCallCheck(this, Quicksort);

        if (compareFunction !== null || compareFunction !== undefined) this.compareFunction = this._defaultCompareFunction;

        var length = void 0;
        if (A instanceof LinkedList) length = A.size();else length = A.length;

        this._quicksort(A, 0, length - 1);
    }

    _createClass(Quicksort, [{
        key: '_quicksort',
        value: function _quicksort(A, p, r) {
            if (p < r) {
                var q = this._partition(A, p, r);
                this._quicksort(A, p, q);
                this._quicksort(A, q + 1, r);
            }
        }
    }, {
        key: '_partition',
        value: function _partition(A, p, r) {
            var x = this._get(A, p);
            var i = p;
            var j = r;
            while (true) {
                while (this.compareFunction(x, this._get(A, j))) {
                    j--;
                }while (this.compareFunction(this._get(A, i), x)) {
                    i++;
                }if (i < j) {
                    this._swap(A, i, j);
                    i++;
                    j--;
                } else return j;
            }
        }
    }, {
        key: '_get',
        value: function _get(object, index) {
            if (object instanceof LinkedList) return object.get_object_at(index);else return object[index];
        }
    }, {
        key: '_set',
        value: function _set(object, index, value) {
            if (object instanceof LinkedList) object.set_object_at(index, value);else object[index] = value;
        }
    }, {
        key: '_swap',
        value: function _swap(A, i, j) {
            var temp = this._get(A, i);
            this._set(A, i, this._get(A, j));
            this._set(A, j, temp);
        }
    }, {
        key: '_defaultCompareFunction',
        value: function _defaultCompareFunction(a, b) {
            return b > a;
        }
    }]);

    return Quicksort;
}();

module.exports = Quicksort;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *   Needleman-Wunsch algorithm is an procedure to compute the optimal global alignment of two string
 *   sequences by S.B.Needleman and C.D.Wunsch (1970).
 *
 *   Aside from the inputs, you can assign the scores for,
 *   - Match: The two characters at the current index are same.
 *   - Mismatch: The two characters at the current index are different.
 *   - Insertion/Deletion(gaps): The best alignment involves one letter aligning to a gap in the other string.
 */

var NeedlemanWunsch = function () {
    function NeedlemanWunsch(sequence1, sequence2) {
        var match_score = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var mismatch_penalty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
        var gap_penalty = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;

        _classCallCheck(this, NeedlemanWunsch);

        this.sequence1 = sequence1;
        this.sequence2 = sequence2;
        this.match_score = match_score;
        this.mismatch_penalty = mismatch_penalty;
        this.gap_penalty = gap_penalty;

        // Just the remove redundancy
        this.iMax = sequence1.length + 1;
        this.jMax = sequence2.length + 1;

        // Grid matrix of scores
        this.grid = new Array(this.iMax);
        for (var i = 0; i < this.iMax; i++) {
            this.grid[i] = new Array(this.jMax);

            for (var j = 0; j < this.jMax; j++) {
                this.grid[i][j] = 0;
            }
        }

        // Traceback matrix (2D array, each cell is an array of boolean values for [`Diag`, `Up`, `Left`] positions)
        this.tracebackGrid = new Array(this.iMax);
        for (var _i = 0; _i < this.iMax; _i++) {
            this.tracebackGrid[_i] = new Array(this.jMax);

            for (var _j = 0; _j < this.jMax; _j++) {
                this.tracebackGrid[_i][_j] = [null, null, null];
            }
        }

        // The aligned sequences (return multiple possibilities)
        this.alignments = [];

        // Final alignment score
        this.score = -1;

        // Calculate scores and tracebacks
        this.computeGrids();
    }

    _createClass(NeedlemanWunsch, [{
        key: "getScore",
        value: function getScore() {
            return this.score;
        }
    }, {
        key: "getAlignments",
        value: function getAlignments() {
            return this.alignments;
        }

        // Main dynamic programming procedure

    }, {
        key: "computeGrids",
        value: function computeGrids() {
            // Fill in the first row
            for (var j = 1; j < this.jMax; j++) {
                this.grid[0][j] = this.grid[0][j - 1] + this.gap_penalty;
                this.tracebackGrid[0][j] = [false, false, true];
            }

            // Fill in the first column
            for (var i = 1; i < this.iMax; i++) {
                this.grid[i][0] = this.grid[i - 1][0] + this.gap_penalty;
                this.tracebackGrid[i][0] = [false, true, false];
            }

            // Fill the rest of the grid
            for (var _i2 = 1; _i2 < this.iMax; _i2++) {
                for (var _j2 = 1; _j2 < this.jMax; _j2++) {
                    // Find the max score(s) among [`Diag`, `Up`, `Left`]
                    var diag = void 0;
                    if (this.sequence1[_i2 - 1] === this.sequence2[_j2 - 1]) diag = this.grid[_i2 - 1][_j2 - 1] + this.match_score;else diag = this.grid[_i2 - 1][_j2 - 1] + this.mismatch_penalty;

                    var up = this.grid[_i2 - 1][_j2] + this.gap_penalty;
                    var left = this.grid[_i2][_j2 - 1] + this.gap_penalty;

                    // If there exists multiple max values, capture them for multiple paths
                    var maxOf = [diag, up, left];
                    var indices = this.arrayAllMaxIndexes(maxOf);

                    // Update Grids
                    this.grid[_i2][_j2] = maxOf[indices[0]];
                    this.tracebackGrid[_i2][_j2] = [indices.includes(0), indices.includes(1), indices.includes(2)];
                }
            }

            // Update alignment score
            this.score = this.grid[this.iMax - 1][this.jMax - 1];
        }

        // Gets all possible valid sequence combinations

    }, {
        key: "alignmentTraceback",
        value: function alignmentTraceback() {
            var inProcessAlignments = [];

            inProcessAlignments.push({ pos: [this.sequence1.length, this.sequence2.length],
                seq1: "",
                seq2: ""
            });

            while (inProcessAlignments[0]) {
                var current = inProcessAlignments[0];
                var directions = this.tracebackGrid[current.pos[0]][current.pos[1]];

                if (directions[0]) {
                    inProcessAlignments.push({ pos: [current.pos[0] - 1, current.pos[1] - 1],
                        seq1: this.sequence1[current.pos[0] - 1] + current.seq1,
                        seq2: this.sequence2[current.pos[1] - 1] + current.seq2
                    });
                }
                if (directions[1]) {
                    inProcessAlignments.push({ pos: [current.pos[0] - 1, current.pos[1]],
                        seq1: this.sequence1[current.pos[0] - 1] + current.seq1,
                        seq2: '-' + current.seq2
                    });
                }
                if (directions[2]) {
                    inProcessAlignments.push({ pos: [current.pos[0], current.pos[1] - 1],
                        seq1: '-' + current.seq1,
                        seq2: this.sequence2[current.pos[1] - 1] + current.seq2
                    });
                }

                if (current.pos[0] === 0 && current.pos[1] === 0) this.alignments.push({ sequence1: current.seq1,
                    sequence2: current.seq2
                });

                inProcessAlignments.shift();
            }

            return this.alignments;
        }

        // Helper Functions

    }, {
        key: "getAllIndexes",
        value: function getAllIndexes(arr, val) {
            var indexes = [],
                i = -1;
            while ((i = arr.indexOf(val, i + 1)) !== -1) {
                indexes.push(i);
            }
            return indexes;
        }
    }, {
        key: "arrayAllMaxIndexes",
        value: function arrayAllMaxIndexes(array) {
            return this.getAllIndexes(array, Math.max.apply(null, array));
        }
    }]);

    return NeedlemanWunsch;
}();

module.exports = NeedlemanWunsch;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var layoutBase = function layoutBase() {
  return;
};

layoutBase.FDLayout = __webpack_require__(18);
layoutBase.FDLayoutConstants = __webpack_require__(7);
layoutBase.FDLayoutEdge = __webpack_require__(19);
layoutBase.FDLayoutNode = __webpack_require__(20);
layoutBase.DimensionD = __webpack_require__(21);
layoutBase.HashMap = __webpack_require__(22);
layoutBase.HashSet = __webpack_require__(23);
layoutBase.IGeometry = __webpack_require__(8);
layoutBase.IMath = __webpack_require__(9);
layoutBase.Integer = __webpack_require__(10);
layoutBase.Point = __webpack_require__(12);
layoutBase.PointD = __webpack_require__(4);
layoutBase.RandomSeed = __webpack_require__(16);
layoutBase.RectangleD = __webpack_require__(13);
layoutBase.Transform = __webpack_require__(17);
layoutBase.UniqueIDGeneretor = __webpack_require__(14);
layoutBase.Quicksort = __webpack_require__(24);
layoutBase.LinkedList = __webpack_require__(11);
layoutBase.LGraphObject = __webpack_require__(2);
layoutBase.LGraph = __webpack_require__(5);
layoutBase.LEdge = __webpack_require__(1);
layoutBase.LGraphManager = __webpack_require__(6);
layoutBase.LNode = __webpack_require__(3);
layoutBase.Layout = __webpack_require__(15);
layoutBase.LayoutConstants = __webpack_require__(0);
layoutBase.NeedlemanWunsch = __webpack_require__(25);

module.exports = layoutBase;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Emitter() {
  this.listeners = [];
}

var p = Emitter.prototype;

p.addListener = function (event, callback) {
  this.listeners.push({
    event: event,
    callback: callback
  });
};

p.removeListener = function (event, callback) {
  for (var i = this.listeners.length; i >= 0; i--) {
    var l = this.listeners[i];

    if (l.event === event && l.callback === callback) {
      this.listeners.splice(i, 1);
    }
  }
};

p.emit = function (event, data) {
  for (var i = 0; i < this.listeners.length; i++) {
    var l = this.listeners[i];

    if (event === l.event) {
      l.callback(data);
    }
  }
};

module.exports = Emitter;

/***/ })
/******/ ]);
});

/***/ })
/******/ ]);
});
