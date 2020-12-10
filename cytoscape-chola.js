(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cose-base"), require("layout-base"));
	else if(typeof define === 'function' && define.amd)
		define(["cose-base", "layout-base"], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeChola"] = factory(require("cose-base"), require("layout-base"));
	else
		root["cytoscapeChola"] = factory(root["coseBase"], root["layoutBase"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__11__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
module.exports = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Object$freeze;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cholaLayout = __webpack_require__(3);
var HashMap = __webpack_require__(4).layoutBase.HashMap;
var assign = __webpack_require__(24);
var cholaConstants = __webpack_require__(5);
var tree = __webpack_require__(25);
var fs = __webpack_require__(26);

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
  padding: 10,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: 4500
}, _defineProperty(_Object$freeze, 'animate', 'end'), _defineProperty(_Object$freeze, 'animationDuration', 500), _defineProperty(_Object$freeze, 'idealEdgeLength', 50), _defineProperty(_Object$freeze, 'edgeGap', 50), _defineProperty(_Object$freeze, 'edgeElasticity', 0.45), _defineProperty(_Object$freeze, 'nestingFactor', 0.1), _defineProperty(_Object$freeze, 'gravity', 0.25), _defineProperty(_Object$freeze, 'numIter', 2500), _defineProperty(_Object$freeze, 'tile', false), _defineProperty(_Object$freeze, 'tilingPaddingVertical', 10), _defineProperty(_Object$freeze, 'tilingPaddingHorizontal', 10), _defineProperty(_Object$freeze, 'gravityRangeCompound', 1.5), _defineProperty(_Object$freeze, 'gravityCompound', 1.0), _defineProperty(_Object$freeze, 'gravityRange', 3.8), _defineProperty(_Object$freeze, 'initialEnergyOnIncremental', 0.5), _defineProperty(_Object$freeze, 'maxNodeDimension', 0), _defineProperty(_Object$freeze, 'fixedNodeConstraint', undefined), _defineProperty(_Object$freeze, 'alignmentConstraint', undefined), _defineProperty(_Object$freeze, 'relativePlacementConstraint', undefined), _defineProperty(_Object$freeze, 'verticalAlignment', []), _defineProperty(_Object$freeze, 'horizontalAlignment', []), _defineProperty(_Object$freeze, 'relativeAlignment', []), _defineProperty(_Object$freeze, 'placementDict', {}), _defineProperty(_Object$freeze, 'graphOutput', false), _defineProperty(_Object$freeze, 'debug', true), _defineProperty(_Object$freeze, 'ready', function ready() {}), _defineProperty(_Object$freeze, 'stop', function stop() {}), _Object$freeze));

var chola = function () {
  function chola(options) {
    _classCallCheck(this, chola);

    this.options = assign({}, defaults, options);
    this.idList = [];
    this.cholaNodeToCoseNode = {};
    this.cholaEdgeToCoseEdge = new HashMap();
    this.cholaNodesMap = new HashMap();
    this.cholaEdgesMap = new HashMap();
    this.idToLNode;
  }

  _createClass(chola, [{
    key: 'run',
    value: function run() {
      var cholaIdToLNode = this.cholaIdToLNode = {};
      var coseIdToLNode = this.coseIdToLNode = {};
      var cholaNodesMap = this.cholaNodesMap;
      var options = this.options;

      var layout = this.layout = new cholaLayout();
      var self = this;

      this.cy = this.options.cy;
      this.cy.trigger({ type: 'layoutstart', layout: this });

      var gm = layout.newGraphManager();

      var nodes = this.options.eles.nodes();
      var edges = this.options.eles.edges();

      if (nodes.length == 0 || edges.length == 0) return;

      //we get the nodes which are parent nodes or do not have a parent node above them
      var topMostNodes = layout.getTopMostNodes(nodes);
      layout.processChildrenList(this.options, gm.addRoot(), topMostNodes, layout, "chola", cholaIdToLNode, cholaNodesMap);
      layout.processEdges(layout, "chola", gm, edges, cholaIdToLNode, this.cholaEdgesMap);

      //set the parents of the nodes
      layout.setParents(gm);

      //finds and saves the compound nodes
      var compoundNodes = layout.findCompoundNodes(gm);

      //visualizes the layout in cytoscape map
      var getPositions = function getPositions(ele, i) {
        if (typeof ele === "number") {
          ele = i;
        }
        var theId = ele.data('id');
        //take the chola node
        var lNode = self.cholaIdToLNode[theId];

        return {
          x: lNode.getRect().getCenterX(),
          y: lNode.getRect().getCenterY()
        };
      };

      //store all cholanodes before the pruning
      var allCholaNodes = Object.assign({}, gm.getAllNodes());

      var parentList = {};

      //removes the leaf nodes and return the graph components
      var output = layout.prune(gm, compoundNodes, this.idList, parentList);
      var c = output[0];
      var graphIsTree = output[1];
      options.maxNodeDimension = layout.getMaxNodeDimension(gm);
      options.edgeGap = options.maxNodeDimension + options.idealEdgeLength;

      //if length of this list is 1, this means that the whole graph is a tree
      if (c.length == 1 && graphIsTree) {
        var newgm = c[0];
        var _growthDir = cholaConstants.DEFAULT_TREE_DIREC;
        var t = new tree(newgm, newgm.rootNode);
        t.symmetricLayout(_growthDir, options.edgeGap, 1.5 * options.edgeGap);

        t.createOrthogonalEdges(newgm);

        //replicate the changes back to the original gm
        var allNodes = Object.values(t.nodes);
        for (var i = 0; i < allNodes.length; i++) {
          var treeNode = allNodes[i];
          var node = cholaIdToLNode[treeNode.id];
          var treeNodeLoc = treeNode.getLocation();
          node.setLocation(treeNodeLoc.x, treeNodeLoc.y);
        }

        var _cholaEdges = Object.values(t.edges);
        for (var _i = 0; _i < _cholaEdges.length; _i++) {
          var cholaEdge = _cholaEdges[_i];
          if (cholaEdge.bendpoints.length != 0) {
            for (var k = 0; k < this.cy.edges().length; k++) {
              var cyEdge = this.cy.edges()[k];
              if (cholaEdge.id == cyEdge.id()) {
                cyEdge.css("curve-style", "segments");
                cyEdge.css("segment-weights", cholaEdge.weight);
                cyEdge.css("segment-distances", cholaEdge.distance);
                break;
              }
            }
          }
        }

        this.cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
        return;
      }

      // this.cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
      //   return;

      //core graph manager
      var coreGm = c[0];
      c.shift();
      var treeGraphs = c;

      // applying cose on the core
      var coseLayout = layout.coseOnCore(options, coseIdToLNode, cholaNodesMap, this.cholaEdgesMap, this.cholaNodeToCoseNode, this.cholaEdgeToCoseEdge);

      // Reflect changes back to chola nodes
      var cholaNodes = coreGm.getAllNodes();
      //var cholaNodes = allCholaNodes;
      for (var _i2 = 0; _i2 < cholaNodes.length; _i2++) {
        var cholaNode = cholaNodes[_i2];
        var coseNode = this.cholaNodeToCoseNode[cholaNode.id];
        var loc = coseNode.getCenter();
        cholaNode.setCenter(loc.x, loc.y);
      }

      output = layout.getHighDegreeNodes(coreGm);
      var highDegreeNodes = output[0];
      var oneDegreeNodes = output[1];

      options.relativeAlignment = [];
      options.verticalAlignment = [];
      options.horizontalAlignment = [];

      var constraintLayout = function constraintLayout(coreGm, coseLayout, options, turn) {
        // // applying cose on the core
        coseLayout = layout.constraintCoseLayout(coreGm, coseLayout, options, turn);

        // if (options.debug)
        //   return;

        var cholaNodesDict = {};

        // Reflect changes back to chola nodes
        var cholaNodes = coreGm.getAllNodes();
        for (var _i3 = 0; _i3 < cholaNodes.length; _i3++) {
          var _cholaNode = cholaNodes[_i3];
          var _coseNode = self.cholaNodeToCoseNode[_cholaNode.id];

          if (_cholaNode.isCompound()) {
            var width = _coseNode.getWidth();
            var height = _coseNode.getHeight();
            _cholaNode.setWidth(width);
            _cholaNode.setHeight(height);
          }

          var _loc = _coseNode.getCenter();
          _cholaNode.setCenter(_loc.x, _loc.y);

          cholaNodesDict[_cholaNode.id] = _cholaNode;
        }

        return cholaNodesDict;
      };

      var download = function download(filename, text) {
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        pom.setAttribute('download', filename);

        if (document.createEvent) {
          var event = document.createEvent('MouseEvents');
          event.initEvent('click', true, true);
          pom.dispatchEvent(event);
        } else {
          pom.click();
        }
      };

      // if (options.debug)
      // {
      //   console.log(options.horizontalAlignment);
      //   console.log(options.verticalAlignment);
      //   console.log(options.relativeAlignment);
      // }

      //creating orthogonal layout for higher degree nodes
      layout.higherNodesConfiguration(coreGm, highDegreeNodes, options);
      var nodesDict = constraintLayout(coreGm, coseLayout, options, 0);

      // this.cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
      // return;

      if (options.graphOutput) {
        var constraintsS1 = { alignmentConstraint: null, relativePlacementConstraint: null };
        constraintsS1.alignmentConstraint = options.alignmentConstraint;
        constraintsS1.relativePlacementConstraint = options.relativePlacementConstraint;

        var constraintStringS1 = JSON.stringify(constraintsS1, null, 2);
        download('constraintsStep1.json', constraintStringS1);

        var dataS1 = JSON.stringify(this.cy.json().elements);
        download('cyElementsStep1.json', dataS1);

        options.alignmentConstraint = undefined;
        options.relativePlacementConstraint = undefined;
      }

      //return;

      //orthogonal layout for lower degree nodes
      layout.chainNodesConfiguration(coreGm, options);
      //creating dummy nodes and edges for bendpoints in cose and also generating constraints for them
      //stores the cose dummy nodes corresponding to the id of chola edge
      var edgeToDummyNodes = {};
      layout.createDummyNodesAndEdges(this.cholaNodeToCoseNode, edgeToDummyNodes, coreGm.edgesWithBends, coseLayout, this.cholaEdgeToCoseEdge, options);
      //orthogonal layout for one-degree nodes 
      //1 degree nodes attached to 2 degree nodes will be left unaligned after the previous step
      layout.oneDegreeNodesConfiguration(coreGm, oneDegreeNodes, options);
      constraintLayout(coreGm, coseLayout, options, 1);

      //create adjusted bendpoints for cholaedges from cose
      var cholaEdges = coreGm.edgesWithBends;
      for (var _i4 = 0; _i4 < cholaEdges.length; _i4++) {
        var _cholaEdge = cholaEdges[_i4];
        var coseDummyNode = edgeToDummyNodes[_cholaEdge.id];
        var bendpoint = coseDummyNode[0].getCenter();
        var relativeBendPosition = _cholaEdge.convertToRelativeBendPosition(bendpoint);
        _cholaEdge.weight = relativeBendPosition.weight;
        _cholaEdge.distance = relativeBendPosition.distance;
      }

      if (options.graphOutput) {
        var constraintsS2 = { alignmentConstraint: null, relativePlacementConstraint: null };
        constraintsS2.alignmentConstraint = options.alignmentConstraint;
        constraintsS2.relativePlacementConstraint = options.relativePlacementConstraint;

        var constraintStringS2 = JSON.stringify(constraintsS2, null, 2);
        download('constraintsStep2.json', constraintStringS2);

        var dataS2 = JSON.stringify(this.cy.json().elements);
        download('cyElementsStep2.json', dataS2);

        options.alignmentConstraint = undefined;
        options.relativePlacementConstraint = undefined;
      }

      //turning non-orthogonal edges to orthogonal edges
      var newEdgesWithBends = layout.createOrthogonalEdges(coreGm, 1);

      //copying the id, source and target of the edges with bends
      var edgesWithBends = [];
      for (var _i5 = 0; _i5 < coreGm.edgesWithBends.length; _i5++) {
        var edge = coreGm.edgesWithBends[_i5];
        edgesWithBends.push([edge.id, edge.source, edge.target, edge.bendpoints]);
      }

      //create dummy points for new edges with bends in cose
      layout.createDummyNodesAndEdges(this.cholaNodeToCoseNode, edgeToDummyNodes, newEdgesWithBends, coseLayout, this.cholaEdgeToCoseEdge, options);

      //introduce dummy nodes at each bendpoints
      var cholaEdgeToDummyNodes = void 0;
      cholaEdgeToDummyNodes = layout.removeEdgeOverlaps(coreGm, coseLayout, this.cholaNodeToCoseNode, this.cholaEdgeToCoseEdge);

      //introducing dummy node at each edge crossing
      //layout.removeEdgeCrossings(coreGm, coseLayout, options);

      constraintLayout(coreGm, coseLayout, options, 2);

      if (options.graphOutput) {
        var constraintsS3 = { alignmentConstraint: null, relativePlacementConstraint: null };
        constraintsS3.alignmentConstraint = options.alignmentConstraint;
        constraintsS3.relativePlacementConstraint = options.relativePlacementConstraint;

        var constraintStringS3 = JSON.stringify(constraintsS3, null, 2);
        download('constraintsStep3.json', constraintStringS3);

        var dataS3 = JSON.stringify(this.cy.json().elements);
        download('cyElementsStep3.json', dataS3);

        options.alignmentConstraint = undefined;
        options.relativePlacementConstraint = undefined;
      }

      //apply symmetric layout to the trees
      var trees = [];
      var growthDir = cholaConstants.DEFAULT_TREE_DIREC;
      for (var _i6 = 0; _i6 < treeGraphs.length; _i6++) {
        var g = treeGraphs[_i6];
        var _t = new tree(g, g.rootNode);
        trees.push(_t);
        _t.symmetricLayout(growthDir, options.edgeGap, 1.5 * options.edgeGap);

        //replicate the changes back to the original gm
        var _allNodes = Object.values(_t.nodes);
        for (var _i7 = 0; _i7 < _allNodes.length; _i7++) {
          var _treeNode = _allNodes[_i7];
          if (_t.root == _treeNode) continue;
          var _node = cholaIdToLNode[_treeNode.id];
          var _treeNodeLoc = _treeNode.getLocation();
          _node.setLocation(_treeNodeLoc.x, _treeNodeLoc.y);
        }
      };

      //adding trees back to the graphs
      layout.reAttachTrees(coreGm, trees, options, cholaIdToLNode, parentList);

      var cholaNodesDict = constraintLayout(coreGm, coseLayout, options, 3);

      this.cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
      //return;

      if (options.graphOutput) {
        var constraintsS4 = { alignmentConstraint: null, relativePlacementConstraint: null };
        constraintsS4.alignmentConstraint = options.alignmentConstraint;
        constraintsS4.relativePlacementConstraint = options.relativePlacementConstraint;

        var constraintStringS4 = JSON.stringify(constraintsS4, null, 2);
        download('constraintsStep4.json', constraintStringS4);

        var dataS4 = JSON.stringify(this.cy.json().elements);
        download('cyElementsStep4.json', dataS4);
      }

      for (var _i8 = 0; _i8 < trees.length; _i8++) {
        var _t2 = trees[_i8];
        var _nodes = Object.values(_t2.nodes);
        if (_nodes.length > 2) {
          //transfer the positions after constraint layout back to the tree nodes
          for (var _k = 0; _k < _nodes.length; _k++) {
            var _treeNode2 = _nodes[_k];
            var _cholaNode2 = cholaNodesDict[_treeNode2.id];
            // console.log(cholaNode.id);
            // console.log(cholaNode.getCenter());

            var cholaLocX = _cholaNode2.getCenterX();
            var cholaLocY = _cholaNode2.getCenterY();
            _treeNode2.setCenter(cholaLocX, cholaLocY);
          }
          _t2.createOrthogonalEdges(coreGm);
        }
      }

      //replace dummy nodes and edges of cholagm with edges with bendpoints
      for (var _i9 = 0; _i9 < edgesWithBends.length; _i9++) {
        var cholaEdgeId = edgesWithBends[_i9][0];
        var source = edgesWithBends[_i9][1];
        var target = edgesWithBends[_i9][2];
        var bendpoints = edgesWithBends[_i9][3];

        var dummyNodes = cholaEdgeToDummyNodes[cholaEdgeId][0];
        var dummyEdges = cholaEdgeToDummyNodes[cholaEdgeId][1];

        var _bendpoint = dummyNodes[0].getCenter();

        //we remove edges first because we need the source and target of each edge
        //if dummy nodes are removed first, then the source or edge of an edge might not exist
        for (var j = 0; j < dummyEdges.length; j++) {
          var _edge2 = dummyEdges[j];

          //remove real edge from graph manager if it is inter-graph
          if (_edge2.isInterGraph) {
            layout.graphManager.remove(_edge2);
          }
          //else, remove the edge from the current graph
          else {
              var graph = coreGm.calcLowestCommonAncestor(_edge2.source, _edge2.target);
              graph.remove(_edge2);
            }
        }

        //now remove the dummy nodes for the cholaEdge
        for (var _j = 0; _j < dummyNodes.length; _j++) {
          var _node2 = dummyNodes[_j];
          _node2.owner.remove(_node2);
        }

        //now create an edge with bendpoint at dummy node location
        var _edge = coreGm.add(coreGm.getLayout().newEdge(), source, target);
        _edge.id = cholaEdgeId;
        var value = bendpoints[0];
        _edge.bendpoints.push([_bendpoint, value[1], value[2]]);

        var relativeBendPosition = _edge.convertToRelativeBendPosition(_bendpoint);
        _edge.weight = relativeBendPosition.weight;
        _edge.distance = relativeBendPosition.distance;

        coreGm.edgesWithBends.push(_edge);
      }

      coreGm.resetAllEdges();
      coreGm.getAllEdges();

      //Printing For debugging
      for (var _i10 = 0; _i10 < compoundNodes.length; _i10++) {
        var _cholaNode3 = compoundNodes[_i10];
        var id = compoundNodes[_i10].id;
        console.log("before changing dimensions");
        console.log(_cholaNode3.id);
        console.log(_cholaNode3.getCenter());
        console.log(_cholaNode3.getWidth());
        console.log(_cholaNode3.getHeight());
      }

      //updating the positions, widths and heights of the compounds nodes
      //FUTURE FIX: MAKE IT WORK FOR LABELS
      layout.updateCompoundDimensions(compoundNodes);

      //Printing For debugging
      for (var _i11 = 0; _i11 < compoundNodes.length; _i11++) {
        var _cholaNode4 = compoundNodes[_i11];
        var _id = compoundNodes[_i11].id;
        console.log("after changing dimensions");
        console.log(_cholaNode4.id);
        console.log(_cholaNode4.getCenter());
        console.log(_cholaNode4.getWidth());
        console.log(_cholaNode4.getHeight());
      }

      //now creating bendpoints for edges connected with compound nodes
      var compoundEdges = layout.createOrthogonalEdges(coreGm, 2);
      for (var _i12 = 0; _i12 < compoundEdges.length; _i12++) {
        var _edge3 = compoundEdges[_i12];
        var _bendpoints = _edge3.bendpoints;
        for (var _k2 = 0; _k2 < this.cy.edges().length; _k2++) {
          var _cyEdge = this.cy.edges()[_k2];
          if (_edge3.id == _cyEdge.id()) {
            // console.log("edge.sourceport");
            // console.log(edge.sourceport);
            // console.log("Edge.targetPort");
            // console.log(edge.targetPort);

            var relativePos = _edge3.source.getRelativeRatiotoNodeCenter(_edge3.sourcePort);
            _cyEdge.style({ 'source-endpoint': +relativePos.x + "% " + +relativePos.y + '%' });
            relativePos = _edge3.target.getRelativeRatiotoNodeCenter(_edge3.targetPort);
            _cyEdge.style({ 'target-endpoint': +relativePos.x + "% " + +relativePos.y + '%' });
          }
        }
      }

      //Last step: finally create edges with bends in cytoscape
      var cholaEdges2 = coreGm.edgesWithBends;
      for (var _i13 = 0; _i13 < cholaEdges2.length; _i13++) {
        var _cholaEdge2 = cholaEdges2[_i13];
        for (var _k3 = 0; _k3 < this.cy.edges().length; _k3++) {
          var _cyEdge2 = this.cy.edges()[_k3];
          if (_cholaEdge2.id == _cyEdge2.id()) {
            _cyEdge2.css("curve-style", "segments");
            _cyEdge2.css("segment-weights", _cholaEdge2.weight);
            _cyEdge2.css("segment-distances", _cholaEdge2.distance);
            break;
          }
        }
      }
    }
  }]);

  return chola;
}();

module.exports = chola;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

var CoSELayout = __webpack_require__(4).CoSELayout;
var CoSEConstants = __webpack_require__(4).CoSEConstants;
var CoSENode = __webpack_require__(4).CoSENode;
var LayoutConstants = __webpack_require__(4).layoutBase.LayoutConstants;
var FDLayoutConstants = __webpack_require__(4).layoutBase.FDLayoutConstants;
var cholaConstants = __webpack_require__(5);
var cholaGraphManager = __webpack_require__(7);
var cholaNode = __webpack_require__(8);
var cholaEdge = __webpack_require__(9);
var cholaGraph = __webpack_require__(10);
var PointD = __webpack_require__(4).layoutBase.PointD;
var DimensionD = __webpack_require__(4).layoutBase.DimensionD;
var Layout = __webpack_require__(11).Layout;
var HashMap = __webpack_require__(4).layoutBase.HashMap;
var assign = __webpack_require__(15);
var chain = __webpack_require__(19);
var nodeBuckets = __webpack_require__(22);
var compass = __webpack_require__(6);
var stem = __webpack_require__(23);
var edgeSegment = __webpack_require__(12);

// Constructor
function cholaLayout() {
  Layout.call(this);
  this.dummyNodes = [];
}

cholaLayout.prototype = Object.create(Layout.prototype);

for (var property in Layout) {
  cholaLayout[property] = Layout[property];
}

cholaLayout.prototype.defineCoseConstants = function (options) {
  if (options.nodeRepulsion != null) CoSEConstants.DEFAULT_REPULSION_STRENGTH = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = options.nodeRepulsion;
  if (options.idealEdgeLength != null) CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength; // + options.maxNodeDimension;
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
  CoSEConstants.TRANSFORM_ON_CONSTRAINT_HANDLING = false;
  CoSEConstants.ENFORCE_CONSTRAINTS = true;
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

cholaLayout.prototype.newGraph = function (vGraph) {
  return new cholaGraph(null, this.graphManager, vGraph);
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

cholaLayout.prototype.getTopMostNodes = function (nodes) {
  var nodesMap = {};

  for (var i = 0; i < nodes.length; i++) {
    nodesMap[nodes[i].id()] = true;
  }

  var roots = nodes.filter(function (ele, i) {
    if (typeof ele === "number") ele = i;

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
        layout.graphManager.nodes[theNode.id] = theNode;
      } else if (layoutType === "cose") {
        theNode = parent.add(new CoSENode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
        theNode.id = theChild._private.data.id;
      }
    }

    // Attach the paddings of cy node to layout node
    theNode.paddingLeft = parseInt(theChild.css('padding'));
    theNode.paddingTop = parseInt(theChild.css('padding'));
    theNode.paddingRight = parseInt(theChild.css('padding'));
    theNode.paddingBottom = parseInt(theChild.css('padding'));
    theNode.borderWidth = parseInt(theChild.css('border-width'));

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
      cholaNodeToCoseNode[theNode.id] = theNode;
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

cholaLayout.prototype.setParents = function (gm) {
  var allNodes = gm.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    var _cholaNode = allNodes[i];
    if (_cholaNode.owner.parent.id != undefined) {
      _cholaNode.parentNode = _cholaNode.owner.parent;
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

cholaLayout.prototype.prune = function (gm, compoundNodes, idList, parentList) {
  var nodebuckets = new nodeBuckets(gm);
  var newGm = this.newGraphManager();
  var parent = newGm.addRoot();
  var leaves = nodebuckets.takeLeaves(compoundNodes);
  var graphIsTree = false;
  while (leaves.length > 0) {
    var stems = this.stemsFromLeaves(leaves);
    gm.severNodes(leaves, nodebuckets, compoundNodes, idList, parentList);
    if (gm.isEmpty()) {
      //this happens when the whole graph is a tree with two centers
      //we can choose any of the centers
      stems = stems[0];
    }
    for (var i = 0; i < stems.length; i++) {
      stems[i].addSelfToGraph(newGm, parent);
    }
    leaves = nodebuckets.takeLeaves(compoundNodes);
  }

  var connectedComponents = newGm.getConnectedComponents();
  for (var _i = 0; _i < connectedComponents.length; _i++) {
    var component = connectedComponents[_i];
    component.identifyRootNode();
  }

  // gm will now have 3 or more nodes iff it was not in fact a tree, to begin with.
  if (gm.getAllNodes().length >= 3) {
    //add gm to the first index
    connectedComponents.unshift(gm);
    // It will be helpful to let each root node in G know that it is a root node.
    for (var _i2 = 1; _i2 < connectedComponents.length; _i2++) {
      var _component = connectedComponents[_i2];
      var root = _component.rootNode;
      var node = gm.getNode(root);
      node.isRootNode = true;
    }
  } else graphIsTree = true;

  return [connectedComponents, graphIsTree];
};

cholaLayout.prototype.stemsFromLeaves = function (leaves) {
  var stems = [];
  for (var i = 0; i < leaves.length; i++) {
    var leaf = leaves[i];
    var edgeList = leaf.edges;
    //get the node connected to the leaf
    var root = edgeList[0].getOtherEnd(leaf);
    var s = new stem(leaf, root);
    stems.push(s);
  }
  return stems;
};

// transfer cytoscape edges to chola edges
cholaLayout.prototype.processEdges = function (layout, layoutType, gm, edges, idToLNode, cholaEdgesMap, cholaEdgeToCoseEdge) {
  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    var sourceNode = idToLNode[edge.data("source")];
    var targetNode = idToLNode[edge.data("target")];
    if (sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length == 0) {
      var e = gm.add(layout.newEdge(), sourceNode, targetNode);
      e.id = edge.id();
      if (layoutType == "chola") {
        cholaEdgesMap.put(e.id, e);
      } else {
        cholaEdgeToCoseEdge.put(cholaEdgesMap.get(e.id), e);
      }
    }
  }
};

cholaLayout.prototype.coseOnCore = function (options, idToLNode, cholaNodesMap, cholaEdgesMap, cholaNodeToCoseNode, cholaEdgeToCoseEdge) {
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
  this.processEdges(coseLayout, "cose", gm, edges, idToLNode, cholaEdgesMap, cholaEdgeToCoseEdge);

  coseLayout.runLayout();
  return coseLayout;
};

cholaLayout.prototype.constraintCoseLayout = function (cholaGm, coseLayout, options, turn) {
  CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength + options.maxNodeDimension;
  // transfer cytoscape constraints to cose layout
  var processConstraints = function processConstraints(layout, options) {
    if (options.alignmentConstraint) {
      layout.constraints["alignmentConstraint"] = options.alignmentConstraint;
    }

    // get nodes to be relatively placed
    if (options.relativePlacementConstraint) {
      layout.constraints["relativePlacementConstraint"] = options.relativePlacementConstraint;
    }
  };

  LayoutConstants.DEFAULT_INCREMENTAL = FDLayoutConstants.DEFAULT_INCREMENTAL = CoSEConstants.DEFAULT_INCREMENTAL = true;

  if (turn == 0) {
    this.removeConflictingConstraints(cholaGm, options);
  }

  if (turn < 3) this.createOrthogonalAlignments(options);else CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength + options.maxNodeDimension;

  options.alignmentConstraint = { vertical: options.verticalAlignment, horizontal: options.horizontalAlignment };
  options.relativePlacementConstraint = options.relativeAlignment;
  processConstraints(coseLayout, options);

  // if (options.debug)
  // {
  //   console.log(options.horizontalAlignment);
  //   console.log(options.verticalAlignment);
  //   console.log(options.relativeAlignment);
  //   //return;
  // }

  coseLayout.getGraphManager().allNodesToApplyGravitation = null;
  coseLayout.runLayout();

  if (turn < 2) {
    //second turn will be after performing chain configuration
    options.verticalAlignment = [];
    options.horizontalAlignment = [];
  }

  return coseLayout;
};

cholaLayout.prototype.createOrthogonalEdges = function (gm, turn) {
  var compoundEdges = [];
  var allEdges = gm.getAllEdges();
  var outputEdges = [];
  var createBp = false;

  for (var i = 0; i < allEdges.length; i++) {
    var edge = allEdges[i];

    //if edge is not orthogonal, we make it orthogonal
    if (turn == 1 && !edge.isOrthogonal() || turn == 2) {
      var source = edge.source;
      var target = edge.target;
      var c = new compass();
      var dir = c.direction(source, target);
      var bbox = void 0;

      if (turn == 1 && (source.isCompound() || target.isCompound())) continue;else if (turn == 2 && !source.isCompound() && !target.isCompound()) continue;

      //storing possible semi positions for source and target to create an edge with a bendpoint
      //possible direction (a,b,c) mean that the edge goes in a direction from the source,
      //b is the direction from target to bendpoint
      //c is the direction from bendpoint to target (opposide to b)
      var possibleDirections = [];
      if (dir == c.SE) {
        possibleDirections.push([0, 3, 1]);
        possibleDirections.push([1, 2, 0]);
      } else if (dir == c.SW) {
        possibleDirections.push([1, 0, 2]);
        possibleDirections.push([2, 3, 1]);
      } else if (dir == c.NW) {
        possibleDirections.push([2, 1, 3]);
        possibleDirections.push([3, 0, 2]);
      } else if (dir == c.NE) {
        possibleDirections.push([3, 2, 0]);
        possibleDirections.push([0, 1, 3]);
      }

      var srcFreeLocs = source.getFreeSemiLocations(false, true);
      var tgtFreeLocs = target.getFreeSemiLocations(false, true);
      var option = void 0;

      for (var k = 0; k < possibleDirections.length; k++) {
        option = possibleDirections[k];
        if (srcFreeLocs.includes(option[0]) && tgtFreeLocs.includes(option[1])) break;
      }

      var bendpoint = { x: null, y: null };

      //reset any bendpoints that the edge might have
      if (edge.bendpoints.length != null) edge.resetBendpoints(gm);

      if (!source.isCompound() && !target.isCompound()) {
        createBp = true;
      }
      //if any of the incident nodes is compound, then we create source and target ports
      else {
          var srcLocX = source.getLocation().x;
          var srcLocY = source.getLocation().y;
          var srcCenterX = source.getCenterX();
          var srcCenterY = source.getCenterY();
          var srcWidth = source.getWidth();
          var srcHeight = source.getHeight();

          var tgtLocX = target.getLocation().x;
          var tgtLocY = target.getLocation().y;
          var tgtCenterX = target.getCenterX();
          var tgtCenterY = target.getCenterY();
          var tgtWidth = target.getWidth();
          var tgtHeight = target.getHeight();

          //bbox = [x1, x2, y1, y2] 
          var srcBbox = [srcLocX, srcLocX + srcWidth, srcLocY, srcLocY + srcHeight];
          var tgtBbox = [tgtLocX, tgtLocX + tgtWidth, tgtLocY, tgtLocY + tgtHeight];

          if (source.isCompound() && !target.isCompound()) {
            if (srcBbox[0] < tgtCenterX && tgtCenterX < srcBbox[1]) {
              //edge can be straight
              //target with either be on top or on bottom i.e. north or south

              //if target is on top
              if (tgtCenterY < srcBbox[2] && tgtFreeLocs.includes(c.SOUTH)) {
                edge.sourcePort = { x: tgtCenterX, y: srcBbox[2] };
                edge.targetPort = { x: tgtCenterX, y: tgtBbox[3] };
              }
              //target is on bottom
              else if (tgtCenterY > srcBbox[3] && tgtFreeLocs.includes(c.NORTH)) {
                  edge.sourcePort = { x: tgtCenterX, y: srcBbox[3] };
                  edge.targetPort = { x: tgtCenterX, y: tgtBbox[2] };
                } else createBp = true;
            } else if (srcBbox[2] < tgtCenterY && tgtCenterY < srcBbox[3]) {
              //edge can be straight
              //if target is on the left
              if (tgtCenterX < srcBbox[0] && tgtFreeLocs.includes(c.EAST)) {
                edge.sourcePort = { x: srcBbox[0], y: tgtCenterY };
                edge.targetPort = { x: tgtBbox[1], y: tgtCenterY };
              }
              //if target is on the right
              else if (tgtCenterX > srcBbox[1] && tgtFreeLocs.includes(c.WEST)) {
                  edge.sourcePort = { x: srcBbox[1], y: tgtCenterY };
                  edge.targetPort = { x: tgtBbox[2], y: tgtCenterY };
                } else createBp = true;
            } else createBp = true;
          } else if (!source.isCompound() && target.isCompound()) {
            if (tgtBbox[0] < srcCenterX && srcCenterX < tgtBbox[1]) {
              //edge can be straight
              //source can either be on top or on bottom i.e. north or south

              //if source is on top
              if (srcCenterY < tgtBbox[2] && srcFreeLocs.includes(c.SOUTH)) {
                edge.targetPort = { x: srcCenterX, y: tgtBbox[2] };
                edge.sourcePort = { x: srcCenterX, y: srcBbox[3] };
              }
              //source is on bottom
              else if (srcCenterY > tgtBbox[3] && srcFreeLocs.includes(c.NORTH)) {
                  edge.targetPort = { x: srcCenterX, y: tgtBbox[3] };
                  edge.sourcePort = { x: srcCenterX, y: srcBbox[2] };
                } else createBp = true;
            } else if (tgtBbox[2] < srcCenterY && srcCenterY < tgtBbox[3]) {
              //edge can be straight
              //if source is on the left
              if (srcCenterX < tgtBbox[0] && srcFreeLocs.includes(c.EAST)) {
                edge.targetPort = { x: tgtBbox[0], y: srcCenterY };
                edge.sourcePort = { x: srcBbox[1], y: srcCenterY };
              }
              //if source is on the right
              else if (srcCenterX > tgtBbox[1] && srcFreeLocs.includes(c.WEST)) {
                  edge.targetPort = { x: tgtBbox[1], y: srcCenterY };
                  edge.sourcePort = { x: srcBbox[0], y: srcCenterY };
                } else createBp = true;
            } else createBp = true;
          } else if (source.isCompound() && target.isCompound()) {
            //we check if the target node lies within the width of the source node
            if (srcBbox[0] < tgtBbox[0] && tgtBbox[0] < srcBbox[1] || srcBbox[0] < tgtBbox[1] && tgtBbox[1] < srcBbox[1]) {
              var xValues = [srcBbox[0], srcBbox[1], tgtBbox[0], tgtBbox[1]];

              //now we sort these values in ascending order
              xValues.sort();

              //the two nodes overlap (not literally but in x dimensions) between xValues[1] and xValues[2]
              //the mean of these two values will be x value of the source and target ports

              var mean = (xValues[1] + xValues[2]) / 2;

              //if target lies on top of the source node
              if (tgtCenterY < srcCenterY) {
                edge.sourcePort = { x: mean, y: srcBbox[2] };
                edge.targetPort = { x: mean, y: tgtBbox[3] };
              }
              //if target lies at the bottom
              else {
                  edge.sourcePort = { x: mean, y: srcBbox[3] };
                  edge.targetPort = { x: mean, y: tgtBbox[2] };
                }
            }
            //we check if the target node lies within the height of the source node
            else if (srcBbox[2] < tgtBbox[2] && tgtBbox[2] < srcBbox[3] || srcBbox[2] < tgtBbox[3] && tgtBbox[3] < srcBbox[3]) {

                var yValues = [srcBbox[2], srcBbox[3], tgtBbox[2], tgtBbox[3]];
                yValues.sort();

                var _mean = (yValues[1] + yValues[2]) / 2;

                //if target lies on the left of the source node
                if (tgtCenterX < srcCenterX) {
                  edge.sourcePort = { x: srcBbox[0], y: _mean };
                  edge.targetPort = { x: tgtBbox[1], y: _mean };
                }
                //if target lies on the right of the source node
                else {
                    edge.sourcePort = { x: srcBbox[1], y: _mean };
                    edge.targetPort = { x: tgtBbox[0], y: _mean };
                  }
              } else createBp = true;
          }

          if (createBp == true) {
            //finding the value of source port of edge
            if (option[0] == 0) edge.sourcePort = { x: srcBbox[1], y: srcCenterY };else if (option[0] == 1) edge.sourcePort = { x: srcCenterX, y: srcBbox[3] };else if (option[0] == 2) edge.sourcePort = { x: srcBbox[0], y: srcCenterY };else if (option[0] == 3) edge.sourcePort = { x: srcCenterX, y: srcBbox[2] };

            //finding the value of target port of edge
            if (option[2] == 0) edge.targetPort = { x: tgtBbox[0], y: tgtCenterY };else if (option[2] == 1) edge.targetPort = { x: tgtCenterX, y: tgtBbox[2] };else if (option[2] == 2) edge.targetPort = { x: tgtBbox[1], y: tgtCenterY };else if (option[2] == 3) edge.targetPort = { x: tgtCenterX, y: tgtBbox[3] };
          } else outputEdges.push(edge);
        }

      if (createBp == true) {
        if (option != null) {
          if (option[0] == 0 || option[0] == 2) {
            bendpoint.x = target.getCenterX();
            bendpoint.y = source.getCenterY();
          } else if (option[0] == 1 || option[0] == 3) {
            bendpoint.x = source.getCenterX();
            bendpoint.y = target.getCenterY();
          }
          edge.createBendPoint(bendpoint, option[0], option[2], source, target);
          gm.edgesWithBends.push(edge);
          outputEdges.push(edge);
        }
      }

      createBp = false;
    }
  }

  return outputEdges;
};

cholaLayout.prototype.getMaxNodeDimension = function (gm) {
  var allNodes = gm.getAllNodes();
  var max = 0;

  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    var width = node.getWidth();
    var height = node.getHeight();

    var tempMax = Math.max(width, height);

    if (!node.isCompound() & max < tempMax) max = tempMax;
  }

  return max;
};

cholaLayout.prototype.higherNodesConfiguration = function (gm, highDegreeNodes, options) {
  var cyclicIds = [];
  var asgns = [];
  var highIds = [];
  for (var i = 0; i < highDegreeNodes.length; i++) {
    var node = highDegreeNodes[i];
    highIds.push(node.id);
    var asgn = new assign();
    cyclicIds.push(asgn.getCyclicOrder(node));
  }

  options.placementDict = {};

  for (var _i3 = 0; _i3 < highDegreeNodes.length; _i3++) {
    var _node = highDegreeNodes[_i3];
    var am = this.getAdjacencyMatrix(gm);
    var asgn = new assign();
    var asgns = asgn.getNeighborAssignments(_node, cyclicIds[_i3], highIds, am);
    var degree = _node.getDegree();
    var ids = [];
    for (var j = 0; j < asgns.semis.length; j++) {
      if (typeof asgns.semis[j] != 'undefined' & asgns.semis[j] !== null) {
        ids.push(asgns.semis[j].id);
      } else {
        ids.push('x');
      }
    }

    for (var _j = 0; _j < degree; _j++) {
      var edge = _node.edges[_j];
      var nbr = edge.getOtherEnd(_node);

      var newNbrLoc = ids.indexOf(nbr.id);
      this.setNeighborPosition(gm, _node, nbr, newNbrLoc, options.edgeGap);

      this.placementConstraints(newNbrLoc, options, _node, nbr);
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
  }
};

cholaLayout.prototype.placementConstraints = function (newLoc, options, node1, node2) {
  var ignoreDuplicates = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // console.log(node1.id);
  // console.log(node2.id);
  // console.log(newLoc);
  if (newLoc == 0) {
    this.addPlacementConstraints(options, node1, node2, 0, ignoreDuplicates);
  } else if (newLoc == 1) {
    this.addPlacementConstraints(options, node1, node2, 1, ignoreDuplicates);
  } else if (newLoc == 2) {
    this.addPlacementConstraints(options, node2, node1, 0, ignoreDuplicates);
  } else {
    this.addPlacementConstraints(options, node2, node1, 1, ignoreDuplicates);
  }
};

cholaLayout.prototype.createOrthogonalAlignments = function (options) {
  //separate left-right and top-bottom alignments
  var topBottoms = [];
  var leftRights = [];

  for (var i = 0; i < options.relativeAlignment.length; i++) {
    var value = options.relativeAlignment[i];

    if (value.top != undefined) topBottoms.push(value);else leftRights.push(value);
  }

  this.combineAlignments(options.horizontalAlignment, leftRights);
  this.combineAlignments(options.verticalAlignment, topBottoms);
};

cholaLayout.prototype.combineAlignments = function (alignment, orientation) {
  //create horizontal alignments
  for (var i = 0; i < orientation.length; i++) {
    var constraint = orientation[i];
    var node1 = void 0,
        node2 = void 0;
    if (constraint.left != undefined) {
      node1 = constraint.left;
      node2 = constraint.right;
    } else {
      node1 = constraint.top;
      node2 = constraint.bottom;
    }

    var changes = false;
    var combinedNode = void 0;
    var align = void 0;

    for (var k = 0; k < alignment.length; k++) {
      align = alignment[k];
      if (align.includes(node1) && align.includes(node2)) {
        break;
      } else if (align.includes(node1)) {
        changes = true;
        combinedNode = node2;
        align.push(node2);
        break;
      } else if (align.includes(node2)) {
        changes = true;
        combinedNode = node1;
        align.push(node1);
        break;
      }
    }

    if (changes == false) {
      alignment.push([node1, node2]);
    } else {
      alignment.splice(alignment.indexOf(align), 1);

      for (var j = 0; j < alignment.length; j++) {
        var align2 = alignment[j];
        if (align2.includes(combinedNode)) {
          //add each value from align2 to align
          for (var l = 0; l < align2.length; l++) {
            if (!align.includes(align2[l])) align.push(align2[l]);
          }

          //remove align2 from alignment
          alignment.splice(j, 1);
        }
      }

      alignment.push(align);
    }
  }
};

cholaLayout.prototype.removeConflictingConstraints = function (gm, options) {
  for (var i = 0; i < options.relativeAlignment.length; i++) {
    var value = options.relativeAlignment[i];
    var nbr = void 0;
    var node1 = void 0,
        node2 = void 0;

    //determine the proposed direction from node to nbr in the constraint
    if (value.top != undefined) {
      node1 = gm.nodes[value.top];
      node2 = gm.nodes[value.bottom];

      var dir = node1.getDirec(node2.getCenter(), false);
      if (dir != 1) {
        options.relativeAlignment.splice(i, 1);
        i = i - 1;

        //and create a new constraint if possible
        if (dir == 0 || dir == 2 || dir == 3) this.placementConstraints(dir, options, node1, node2);
      } else {
        value.top = node1.id;
        value.bottom = node2.id;
      }
    } else if (value.left != undefined) {
      node1 = gm.nodes[value.left];
      node2 = gm.nodes[value.right];

      var _dir = node1.getDirec(node2.getCenter(), false);
      if (_dir != 0) {
        options.relativeAlignment.splice(i, 1);
        i = i - 1;

        //and create a new constraint if possible
        if (_dir == 1 || _dir == 2 || _dir == 3) this.placementConstraints(_dir, options, node1, node2);
      } else {
        value.left = node1.id;
        value.right = node2.id;
      }
    }
  }
};

cholaLayout.prototype.addPlacementConstraints = function (options, node1, node2, direction) {
  var ignoreDuplicates = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  //this function always stores the top, bottom, right and left values with actual nodes and not their ids
  //the reason is that when checking conflicting constraints, we need to find the direction from one node to another

  //if ignoreDuplicates is true, that shows the case when interRankConstraints2 are being constructed for a tree
  //in this case, we go not check if a constraint already exists for node1 and node2

  //if either node 1 or node2 is a compound node, no constraints are added to them 
  if (node1.withChildren().size > 1 || node2.withChildren().size > 1) return;

  if (typeof node1 != "string") node1 = node1.id;
  if (typeof node2 != "string") node2 = node2.id;

  if (!ignoreDuplicates) {
    //direction is 0 for left right, 1 for top bottom
    for (var i = 0; i < options.relativeAlignment.length; i++) {
      var val = options.relativeAlignment[i];

      if (val.left != undefined) {
        if (val.left == node1 && val.right == node2) return;else if (val.left == node2 && val.right == node1) return;
      } else if (val.top != undefined) {
        if (val.top == node1 && val.bottom == node2) return;else if (val.top == node2 && val.bottom == node1) return;
      }
    }
  }

  var temp = void 0;
  if (direction == 0) {
    if (ignoreDuplicates) temp = { left: node1, right: node2, gap: options.edgeGap / 2 };else temp = { left: node1, right: node2, gap: options.edgeGap };
    options.relativeAlignment.push(temp);
  } else {
    if (ignoreDuplicates) temp = { top: node1, bottom: node2, gap: options.edgeGap / 2 };else temp = { top: node1, bottom: node2, gap: options.edgeGap };
    options.relativeAlignment.push(temp);
  }
  //console.log(temp);

  if (options.placementDict[node1] == undefined) options.placementDict[node1] = [temp];else options.placementDict[node1].push(temp);

  if (options.placementDict[node2] == undefined) options.placementDict[node2] = [temp];else options.placementDict[node2].push(temp);
};

cholaLayout.prototype.setNeighborPosition = function (gm, node, nbr, newNbrLoc, edgeLength) {
  //ideal edge length based on the highest width node
  var nodeLoc = node.getCenter();

  var prevLoc = nbr.getCenter();
  var newLoc = Object.assign({}, prevLoc);
  if (newNbrLoc == 0) {
    newLoc.x = nodeLoc.x + edgeLength;
    newLoc.y = nodeLoc.y;
  } else if (newNbrLoc == 1) {
    newLoc.x = nodeLoc.x;
    newLoc.y = nodeLoc.y + edgeLength;
  } else if (newNbrLoc == 2) {
    newLoc.x = nodeLoc.x - edgeLength;
    newLoc.y = nodeLoc.y;
  } else if (newNbrLoc == 3) {
    newLoc.x = nodeLoc.x;
    newLoc.y = nodeLoc.y - edgeLength;
  }
  nbr.setCenter(newLoc.x, newLoc.y);
};

cholaLayout.prototype.getAdjacencyMatrix = function (gm) {
  var am = {};

  var allNodes = gm.getAllNodes();
  for (var i = 0; i < allNodes.length; i++) {
    var temp = {};
    for (var j = 0; j < allNodes.length; j++) {
      temp[allNodes[j].id] = false;
    }
    am[allNodes[i].id] = temp;
  }

  var allEdges = gm.getAllEdges();
  for (var _i4 = 0; _i4 < allEdges.length; _i4++) {
    var edge = allEdges[_i4];
    var srcId = edge.source.id;
    var tgtId = edge.target.id;
    am[srcId][tgtId] = true;
    am[tgtId][srcId] = true;
  }

  return am;
};

cholaLayout.prototype.createDummyNodesAndEdges = function (cholaNodeToCoseNode, edgeToDummyNodes, edgesWithBends, coseLayout, cholaEdgeToCoseEdge, options) {
  var coseGm = coseLayout.getGraphManager();

  for (var i = 0; i < edgesWithBends.length; i++) {
    var _cholaEdge = edgesWithBends[i];
    var coseEdge = cholaEdgeToCoseEdge.get(_cholaEdge);

    var source = void 0,
        target = void 0;

    var dummyNodes = [];
    var prev = coseEdge.source;

    var graph = coseGm.calcLowestCommonAncestor(coseEdge.source, coseEdge.target);
    var dir1 = void 0,
        dir2 = void 0,
        j = void 0;

    j = 0;

    // for (j = 0; j < cholaEdge.bendpoints.length; j++)
    // {
    var bendpoint = _cholaEdge.bendpoints[j][0];
    dir1 = _cholaEdge.bendpoints[j][1][0];
    dir2 = _cholaEdge.bendpoints[j][1][1];

    source = _cholaEdge.bendpoints[j][2][0];
    target = _cholaEdge.bendpoints[j][2][1];

    // if (prev.id != source.id)
    // {
    //   prev = coseEdge.target;
    //   target = coseEdge.source;
    // }
    // else
    // {
    //   target = coseEdge.target;
    // }

    // create new dummy node
    var dummyNode = coseGm.getRoot().add(new CoSENode(coseGm, bendpoint, new DimensionD(1, 1)));
    dummyNode.id = "dnode:" + coseEdge.source.id + "to" + coseEdge.target.id + ":" + j.toString();
    cholaNodeToCoseNode[dummyNode.id] = dummyNode;

    // create new dummy edge between prev and dummy node
    var dummyEdge = coseGm.add(coseGm.getLayout().newEdge(), coseEdge.source, dummyNode);
    dummyEdge.id = "dedge:" + prev.id + "to" + dummyNode.id + ":" + j.toString();

    dummyEdge = coseGm.add(coseGm.getLayout().newEdge(), dummyNode, coseEdge.target);
    dummyEdge.id = "dedge:" + prev.id + "to" + target.id + ":" + j.toString();

    dummyNodes.push(dummyNode);

    prev = dummyNode;
    //}


    edgeToDummyNodes[_cholaEdge.id] = dummyNodes;

    // if (coseEdge.source.id != source.id)
    // {
    //     //placement direction has to be changed
    //     this.placementConstraints(dir1, options, target, dummyNode);
    //     this.placementConstraints(dir2, options, dummyNode, source);

    // }
    // else
    // {
    this.placementConstraints(dir1, options, source, dummyNode);
    this.placementConstraints(dir2, options, dummyNode, target);

    // }

    if (coseEdge.isInterGraph) {
      coseLayout.graphManager.remove(coseEdge);
    } else {
      graph.remove(coseEdge);
    }

    coseGm.resetAllEdges();
    coseGm.resetAllNodes();
    coseGm.getAllEdges();
    coseGm.getAllNodes();
  }
  return edgeToDummyNodes;
};

cholaLayout.prototype.chainNodesConfiguration = function (gm, options) {
  var output = gm.getChainsAndCycles();
  var chains = [];
  var cycles = [];

  //create objects for chains and cycles
  for (var i = 0; i < output[0].length; i++) {
    //if the chain consists of only one node, then it will already be aligned
    //so that node is ignored
    var _c = new chain(gm, output[0][i]);
    chains.push(_c);
  }
  for (var _i5 = 0; _i5 < output[1].length; _i5++) {
    var cycle = new chain(gm, output[1][_i5], true);
    chains.push(cycle);
  }

  //we maintain a list of dummy nodes for bendpoints
  var dummyNodes = [];

  //for each chain, we find a configuration for it
  for (var _i6 = 0; _i6 < chains.length; _i6++) {
    var c = chains[_i6];
    if (c.nodes.length == 1) {
      continue;
    }

    c.takeShapeBasedConfiguration(gm, options, this);
  }
};

cholaLayout.prototype.oneDegreeNodesConfiguration = function (gm, nodes, options) {
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
    var nbrLoc = nbr.getCenter();

    //if nbr is not a 1 or 2-degree node, we go to the next one degree node
    if (nbrDegree > 2) continue;else {
      if (nbrDegree == 1) {
        //we will first check if a constraint has already been create for these two connected nodes
        //if such a constraint exists, we remove the previous constraints

        var check = false;
        for (var j = 0; j < options.relativeAlignment.length; j++) {
          var align = options.relativeAlignment[j];
          if (align.top != undefined) {
            //console.log(align);
            if (align.top == node.id || align.bottom == node.id) {
              check = true;
              break;
            }
          } else {
            if (align.left == node.id || align.right == node.id) {
              check = true;
              break;
            }
          }
        }

        if (check) continue;

        //find the free semi locations by the nbr
        var availableSemis = [0, 1, 2, 3];

        //finding the least cost position
        var nodeLoc = node.getCenter();
        node.dx = nodeLoc.x - nbrLoc.x;
        node.dy = nodeLoc.y - nbrLoc.y;
        var o = node.octalCode();
        var cost = [];
        for (var _j3 = 0; _j3 < availableSemis.length; _j3++) {
          cost.push(node.deflectionFromSemi(availableSemis[_j3], o));
        }
        var direction = availableSemis[cost.indexOf(Math.min.apply(Math, cost))];

        this.placementConstraints(direction, options, nbr, node);
        //this.changeNodestoIds(options);
        this.setNeighborPosition(gm, nbr, node, direction, options.edgeGap);
      }
      //when nbr is a 2 degree node
      else {
          //find the free semi locations by the nbr
          var _availableSemis = nbr.getFreeSemiLocations(false);

          //finding the least cost position
          var nodeLoc = node.getCenter();
          node.dx = nodeLoc.x - nbrLoc.x;
          node.dy = nodeLoc.y - nbrLoc.y;
          var _o = node.octalCode();
          var _cost = [];
          for (var _j4 = 0; _j4 < _availableSemis.length; _j4++) {
            _cost.push(node.deflectionFromSemi(_availableSemis[_j4], _o));
          }
          var direction = _availableSemis[_cost.indexOf(Math.min.apply(Math, _cost))];

          this.placementConstraints(direction, options, nbr, node);

          this.setNeighborPosition(gm, nbr, node, direction, options.edgeGap);
        }
    }
  }
};

cholaLayout.prototype.removeEdgeOverlaps = function (gm, coseLayout, cholaNodeToCoseNode, cholaEdgeToCoseEdge) {
  /*
  Remove the edge overlaps in a routed orthogonal graph G.
  :param G: The graph whose overlaps are to be removed.
  :return: A new graph object Q. It has all the nodes of G, plus
           a node for each bend point in the routes of G. Its edges
           cover the routes of G, in a set-theoretic sense, but none
           of its edges overlap.
  */

  var edgeToDummyNodes = {};
  for (var i = 0; i < gm.edgesWithBends.length; i++) {
    var source = void 0,
        target = void 0;
    var dir1 = void 0,
        dir2 = void 0,
        j = void 0;

    var dummyNodes = [];
    var dummyEdges = [];
    var routePoints = [];

    var _cholaEdge2 = gm.edgesWithBends[i];
    var prev = _cholaEdge2.source;

    var graph = gm.calcLowestCommonAncestor(_cholaEdge2.source, _cholaEdge2.target);

    for (j = 0; j < _cholaEdge2.bendpoints.length; j++) {
      var bendpoint = _cholaEdge2.bendpoints[j][0];

      source = _cholaEdge2.source;
      target = _cholaEdge2.target;

      // create new dummy node
      var dummyNode = gm.getRoot().add(new cholaNode(gm, new PointD(bendpoint.x - 0.5, bendpoint.y - 0.5), new DimensionD(1, 1)));
      dummyNode.id = "dnode:" + _cholaEdge2.source.id + "to" + _cholaEdge2.target.id + ":" + j.toString();
      gm.nodes[dummyNode.id] = dummyNode;
      routePoints.push(dummyNode);

      // create new dummy edge between prev and dummy node
      var _dummyEdge = gm.add(gm.getLayout().newEdge(), prev, dummyNode);
      _dummyEdge.id = "dedge:" + prev.id + "to" + dummyNode.id + ":" + j.toString();

      dummyNodes.push(dummyNode);
      dummyEdges.push(_dummyEdge);

      prev = dummyNode;
    }

    var dummyEdge = gm.add(gm.getLayout().newEdge(), prev, target);
    dummyEdge.id = "dedge:" + prev.id + "to" + target.id + ":" + j.toString();
    dummyEdges.push(dummyEdge);

    edgeToDummyNodes[_cholaEdge2.id] = [dummyNodes, dummyEdges, routePoints];

    //remove real edge from graph manager if it is inter-graph
    if (_cholaEdge2.isInterGraph) {
      gm.remove(_cholaEdge2);
    }
    //else, remove the edge from the current graph
    else {
        graph.remove(_cholaEdge2);
      }

    gm.resetAllEdges();
    gm.resetAllNodes();
    gm.getAllEdges();
    gm.getAllNodes();
  }
  return edgeToDummyNodes;
};

cholaLayout.prototype.computeNodeGroups = function (segs) {
  /*
  :param segs: a list of Segments (should be all H- or all V-segs)
  :return: a list of lists of Nodes ("groups"), being endpts that
           participate in a common sequence of overlapping segments,
           listed in order of increasing variable-coordinate
  */
  var groups = [];

  // Partition segs by const-coord
  var a = function a(s) {
    return s.v;
  };
  var parts = this.partition(segs, a, 0.5);

  // Compute groups for each part.
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];

    // Build list of events.
    var events = [];
    for (var k = 0; k < part.length; k++) {
      var seg = part[k];
      var temp = seg.getEvents();
      for (var j = 0; j < temp.length; j++) {
        events.push(temp[j]);
      }
    }

    // Sort events by variable-coord
    events.sort(function (a, b) {
      return a.u - b.u;
    });

    // Initialise
    var gp = [];
    var openSegs = [];
    for (var _j5 = 0; _j5 < events.length; _j5++) {
      var e = events[_j5];
      var endpoint = e.endpoint;

      // Do not append multiple copies:
      if (gp.length == 0 || gp[gp.length - 1] != endpoint) gp.push(endpoint);

      // Keep track of which segs are open.
      if (e.kind == 'open') openSegs.push(e.seg);else if (e.kind == 'close') {
        var index = openSegs.indexOf(e.seg);
        openSegs.splice(index, 1);

        // If no open segs remain, the group is complete.
        if (openSegs.length == 0) {
          groups.push(gp);
          gp = [];
        }
      }
    }
  }
  return groups;
};

cholaLayout.prototype.partition = function (list, key) {
  var tol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  /*
  :param lst: a list
  :param key: a callable
  :param tol: a tolerance -- optional
  :return: a list of lists, representing a partition of lst
           according to the value returned by key on each element.
   If you pass a tolerance value then we use the tolerantPartition
  function instead.
  */
  if (tol != null) return this.tolerantPartition(list, key, tol);

  var parts = {};
  var keys = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var k = key(item);
    if (keys.indexOf(k) < 0) keys.push(k);

    var part = [];
    if (parts[k] != undefined) part = parts[k];
    part.push(item);
    parts[k] = part;
  }

  var partList = [];
  for (var _i7 = 0; _i7 < keys.length; _i7++) {
    var _k = keys[_i7];
    partList.push(parts[_k]);
  }
  return partList;
};

cholaLayout.prototype.tolerantPartition = function (list, key) {
  var tol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.01;

  /*
    Like the basic parition function, but allows key values to
    be within a given tolerance of one another.
    (Key values should be floats!)
  */
  // If lst is empty there's nothing to be done.
  if (list.length == 0) return [];

  // Else begin by sorting the list.
  list.sort(function (a, b) {
    return key(a) - key(b);
  });

  // Prepare return value.
  var partList = [];

  // Initialise the first part with the first item of the list.
  var firstItem = list[0];
  var part = [firstItem];

  // Initialise the average key value for the part.
  var avg = key(firstItem);

  // n records how many keys are in the avg
  var n = 1;

  for (var i = 1; i < list.length; i++) {
    var item = list[i];
    var k = key(item);
    var dk = k - avg;

    if (Math.abs(dk) < tol) {
      // Difference of new key with current avg is within
      // tolerance. Add item to current part and update avg.
      part.push(item);
      avg = (n * avg + k) / (n + 1);
      n = n + 1;
    } else {
      // Difference is too much. Record the current part
      // and begin a new one for this item.
      partList.push(part);
      part = [item];
      avg = k;
      n = 1;
    }
  }

  // At this point there is always a nonempty part that has not
  // yet been appended to the part list.
  partList.push(part);
  return partList;
};

cholaLayout.prototype.removeEdgeCrossings = function (gm, coseLayout, options) {
  /*
  :param Q: a routed orthogonal graph /with no edge overlaps/
  :param withConstraints: say whether you want constraints to be
                          generated for each edge
  :return: a planarisation P of Q, obtained by inserting dummy
           nodes at all edge crossings in Q
  */

  // Get the new graph P started by giving it a copy of each node in Q.
  var p = this.newGraphManager();
  var parent = p.addRoot();
  var allNodes = gm.getAllNodes();
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    var newNode = parent.add(new cholaNode(p, node.getLocation(), new DimensionD(parseFloat(node.getWidth()), parseFloat(node.getHeight()))));
    newNode.id = node.id;
  }

  // Build a EdgeSegment object for each edge in Q.
  var segs = gm.buildSegments();

  // Compute and add nodes to the crossing pairs.
  this.computeCrossings(segs, gm.idDisp, p);

  for (var _i8 = 0; _i8 < segs.length; _i8++) {
    var seg = segs[_i8];
    var sourceNode = seg.n1;
    var targetNode = seg.n2;
    var e1 = p.add(this.newEdge(), p.getNode(sourceNode), p.getNode(targetNode));
    e1.id = "e:" + sourceNode.id + " to " + targetNode.id + ": " + toString(gm.idDisp.takeNext());
  }

  for (var _i9 = 0; _i9 < segs.length; _i9++) {
    var _seg = segs[_i9];
    var d = new edgeSegment(_seg.n1, _seg.n2).origDir;
    //p.nodeConf.setDirec(seg.n1, seg.n2, d);
    this.placementConstraints(d, options, _seg.n1, _seg.n2);
    //this.changeNodestoIds(options);
  }
  // // Get the new graph P started by giving it a copy of each node in Q.
  //  let p = this.newGraphManager();
  //  let parent = p.addRoot();
  //  let allNodes = gm.getAllNodes();
  //  for (let i = 0; i < allNodes.length; i++)
  //  {
  //      let node = allNodes[i];
  //      let newNode = parent.add(new cholaNode(p, node.getLocation(), new DimensionD(parseFloat(node.getWidth()), parseFloat(node.getHeight()))));
  //      newNode.id = node.id;
  //  }

  return p;
};

cholaLayout.prototype.computeCrossings = function (segs, idDisp, p) {
  /*
  ...
  :param segs:
  :return:
  */
  var crossingNodes = [];

  // List all events for all segs.
  var events = [];
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i];
    var temp = seg.getEvents();
    for (var j = 0; j < temp.length; j++) {
      events.push(temp[j]);
    }
  }

  var xkey = function xkey(a) {
    return a.endpoint.getCenter().x;
  };
  // Sort and partition by x.
  events.sort(xkey);

  var xparts = this.partition(events, xkey, 0.8);

  // # Scan through by x-coord.

  // # How to choose setting for SORT_BY_EXACT_Y and TOLERANCE:
  // # Suppose vertical segment A has its south end at (0, 0), and horizontal
  // # segment B has its east end at (0, -0.00000000001). This means that
  // # /technically/ A and B intersect. However (http://xkcd.com/1475/) you
  // # probably don't actually want to treat this as an intersection. In that
  // # case, set SORT_BY_EXACT_Y to False. If it doesn't help, consider making
  // # the TOLERANCE bigger.
  // #
  // # In this example, setting SORT_BY_EXACT_Y to False means that, when the
  // # list of active events is sorted, the "close" event for segment A will come
  // # /before/ the "sustain" event for segment B, instead of the other way around,
  // # as dictated by their exact y-coordinates. This way we will /not/ detect an
  // # intersection between A and B.

  var SORT_BY_EXACT_Y = false;
  var TOLERANCE = 1.0;

  var activeCmp = function activeCmp(e, f) {
    /*
    Sort primarily by increasing y-coord.
    Secondarily, "close" events come before "sustain," and those
    before "open" events.
    */
    var EPSILON = void 0;
    if (SORT_BY_EXACT_Y) EPSILON = 0;else EPSILON = TOLERANCE;

    if (f.endpoint.getLocation().y - e.endpoint.getLocation().y > EPSILON) return -1;else if (e.endpoint.getLocation().y - f.endpoint.getLocation().y > EPSILON) return 1;else {
      var kindNums = new Object({
        'close': 0,
        'sustain': 1,
        'open': 2
      });
      var ek = kindNums[e.kind];
      var fk = kindNums[f.kind];
      return ek - fk;
    }
  };

  var openH = [];
  var parent = p.getRoot();
  for (var _i10 = 0; _i10 < xparts.length; _i10++) {
    var part = xparts[_i10];
    var openV = null;
    var active = [];

    for (var _j6 = 0; _j6 < openH.length; _j6++) {
      active.push(openH[_j6]);
    }for (var _j7 = 0; _j7 < part.length; _j7++) {
      active.push(part[_j7]);
    }active.sort(activeCmp);

    for (var _j8 = 0; _j8 < active.length; _j8++) {
      var event = active[_j8];
      if (event.kind == 'sustain' && openV != null) {
        // Create new crossing node.
        var cn = parent.add(new cholaNode(p, { x: openV.v, y: event.v }, new DimensionD(parseFloat(30, 30))));
        cn.id = "dn" + idDisp.takeNext();

        // Set cn as new endpt of the two segs.
        event.seg.setNewClosingNode(cn);
        openV.seg.setNewClosingNode(cn);

        // New H-seg
        var hseg = new edgeSegment(cn, event.companion.endpoint);
        segs.push(hseg);
        event.companion.seg = hseg;

        // new V-seg
        var vseg = new edgeSegment(cn, openV.companion.endpoint);
        segs.push(vseg);
        openV.companion.seg = vseg;

        // update the two open events
        // H:
        event.seg = hseg;
        event.endpoint = cn;
        event.u = cn.getLocation().x;

        // and simply allow event to stay in openH for the next part
        // V:
        openV.seg = vseg;
        openV.endpoint = cn;
        openV.u = cn.getLocation().y;
        // and simply allow openV to remain the open vertical event
      } else if (event.kind == 'open') {
        if (event.seg.kind == "H") {
          event.kind = 'sustain';
          openH.push(event);
        } else if (event.seg.kind == "V") openV = event;
      } else if (event.kind == 'close') {
        if (event.seg.kind == "H") {
          var index = openH.indexOf(event.companion);
          openH.splice(index, 1);
        } else if (event.seg.kind == "V") openV = null;
      }
    }
  }
};

cholaLayout.prototype.reAttachTrees = function (trunk, trees, options, cholaIdToLNode, parentList) {
  /*
  :param trunk: a Graph object, being the trunk of a graph, with an existing layout
  :param trees: a list of Tree objects, being the trees of the graph, with existing layout
  :param options:
  */

  var c = new compass();

  // Sort the trees in the decreasing size of their bounding boxes
  trees.sort(function (a, b) {
    return b.graph.bboxPerimeter() - a.graph.bboxPerimeter();
  });

  //creating a map of chola nodes to their id
  var allNodes = trunk.getAllNodes();
  var cholaNodesMap = {};
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    cholaNodesMap[node.id] = node;
  }

  // Reattach the trees one by one.
  for (var _i11 = 0; _i11 < trees.length; _i11++) {
    allNodes = trunk.getAllNodes();

    var tree = trees[_i11];

    var root = cholaNodesMap[tree.root.id];

    var rx = root.getCenterX();
    var ry = root.getCenterY();

    //find the free semi locations by the nbr
    var availableSemis = root.getFreeSemiLocations(true);

    //this will store the overlapping nodes for each possible placement direction
    var overlappingNodes = {};

    var w = void 0,
        h = void 0,
        u = void 0,
        v = void 0;

    //now create the tree box
    for (var j = 0; j < availableSemis.length; j++) {
      var placementDir = availableSemis[j];

      var _tree$treeBoxWithRoot = tree.treeBoxWithRootVector(placementDir);

      var _tree$treeBoxWithRoot2 = _slicedToArray(_tree$treeBoxWithRoot, 4);

      w = _tree$treeBoxWithRoot2[0];
      h = _tree$treeBoxWithRoot2[1];
      u = _tree$treeBoxWithRoot2[2];
      v = _tree$treeBoxWithRoot2[3];


      var ax = void 0,
          aX = void 0,
          ay = void 0,
          aY = void 0;
      ax = u - w / 2;
      ay = v - h / 2;
      aX = ax + w;
      aY = ay + h;

      //now find the corners of the tree box node when translated to the actual location of the root node
      var x = void 0,
          X = void 0,
          y = void 0,
          Y = void 0;

      //these are now the coordinates of center of the tree box node
      var ru = void 0,
          rv = void 0;
      ru = rx + u;
      rv = ry + v;

      //now finding the corners.
      x = ru - w / 2;
      y = rv - h / 2;
      X = x + w;
      Y = y + h;

      //now check if any node in the coregm will overlap if the treenode in placed in the placement direction
      //the number of overlapping nodes and edges will be used as a cost function

      var temp = [];
      for (var k = 0; k < allNodes.length; k++) {
        var _node2 = allNodes[k];

        //skip the root node
        if (_node2.id == root.id) continue;

        //skip the parent compound node of the root
        var parentId = root.owner.parent.id;
        if (parentId != undefined && _node2.id == parentId) continue;

        //get bounding box of the node
        var nodeBbox = _node2.boundingBoxxXyY();
        var nx = void 0,
            ny = void 0,
            nX = void 0,
            nY = void 0;

        //we check if any of these corner points lie in the tree box 
        var _nodeBbox = _slicedToArray(nodeBbox, 4);

        nx = _nodeBbox[0];
        nX = _nodeBbox[1];
        ny = _nodeBbox[2];
        nY = _nodeBbox[3];
        var overlap = false;
        if (x < nx && nx < X && y < ny && ny < Y) //nx, ny
          overlap = true;else if (x < nx && nx < X && y < nY && nY < Y) //nx, nY
          overlap = true;else if (x < nX && nX < X && y < ny && ny < Y) //nX, ny
          overlap = true;else if (x < nX && nX < X && y < nY && nY < Y) //nX, nY
          overlap = true;

        if (overlap == true) {
          temp.push(_node2);
        }
      }

      overlappingNodes[placementDir] = temp;
    }

    var keys = Object.keys(overlappingNodes);
    var values = Object.values(overlappingNodes);
    var cost = {};

    //cost is the number of overlapping nodes
    for (var _j9 = 0; _j9 < values.length; _j9++) {
      var value = values[_j9];
      cost[keys[_j9]] = value.length;
      // console.log("Cost");
      // console.log(value.length);
    }

    var costValues = Object.values(cost);
    var minCost = Math.min.apply(Math, _toConsumableArray(costValues));

    //final chosen direction of placement
    //check if mincost exists in north or south direction
    var dp = void 0;
    if (cost[1] != undefined && cost[1] == 0) dp = c.SOUTH;else if (cost[3] != undefined && cost[3] == 0) dp = c.NORTH;else dp = parseInt(keys[costValues.indexOf(minCost)]);

    tree.applyGeometry(options.edgeGap, dp, root);

    //create constraints for nodes of the tree with each other
    tree.createMainConstraints(dp, options, this);

    //make space in the graph for the chosen placement if the cost/overlaps are greater than zero
    if (minCost > 0) {
      var _tree$treeBoxWithRoot3 = tree.treeBoxWithRootVector(dp);

      var _tree$treeBoxWithRoot4 = _slicedToArray(_tree$treeBoxWithRoot3, 4);

      w = _tree$treeBoxWithRoot4[0];
      h = _tree$treeBoxWithRoot4[1];
      u = _tree$treeBoxWithRoot4[2];
      v = _tree$treeBoxWithRoot4[3];


      for (var _j10 = 0; _j10 < allNodes.length; _j10++) {
        var _node3 = allNodes[_j10];
        var nodeLoc = _node3.getCenter();
        var rootLoc = root.getCenter();

        if (dp == c.EAST) {
          if (nodeLoc.x > rootLoc.x) _node3.setCenter(nodeLoc.x + w + options.edgeGap, nodeLoc.y);
        } else if (dp == c.SOUTH) {
          if (nodeLoc.y > rootLoc.y) _node3.setCenter(nodeLoc.x, nodeLoc.y + h + options.edgeGap);
        } else if (dp == c.WEST) {
          if (nodeLoc.x < rootLoc.x) _node3.setCenter(nodeLoc.x - w - options.edgeGap, nodeLoc.y);
        } else if (dp == c.NORTH) {
          if (nodeLoc.y < rootLoc.y) _node3.setCenter(nodeLoc.x, nodeLoc.y - h - options.edgeGap);
        }
      }
    }

    // Insert the nodes of the tree (except root) back to the graph
    this.insertTreeIntoGraph(tree, trunk, cholaNodesMap, cholaIdToLNode, parentList);
  }
};

cholaLayout.prototype.insertTreeIntoGraph = function (tree, gm, cholaNodesMap, cholaIdToLNode, parentList) {
  //insert all nodes of the tree into the graph
  var allNodes = Object.values(tree.nodes);
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];

    if (node.id == tree.root.id) {
      continue;
    } else {
      //create a new cholanode
      var loc = node.getLocation();

      var nodeData = parentList[node.id];
      var edge = nodeData[1];
      var ownerGraph = nodeData[2];

      var tempNode = ownerGraph.add(new cholaNode(gm, loc, new DimensionD(node.getWidth(), node.getHeight())));
      tempNode.id = node.id;

      cholaNodesMap[tempNode.id] = tempNode;
      cholaIdToLNode[tempNode.id] = tempNode;

      var sourceNode = cholaNodesMap[edge.source.id];
      var targetNode = cholaNodesMap[edge.target.id];

      var tempEdge = ownerGraph.add(gm.getLayout().newEdge(), sourceNode, targetNode);
      tempEdge.id = edge.id;
    }
  }

  gm.resetAllNodes();
  gm.getAllNodes();
  gm.resetAllEdges();
  gm.getAllEdges();
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

  //create the list of iteration for the higher degree nodes such that their neighbors are processed in an order
  if (highDegreeNodes.length > 0) {
    var j = 0;
    for (var k = 0; k < highDegreeNodes.length; k++) {
      //choose highest degree node
      var _node4 = highDegreeNodes[k][0];
      if (sortedList.indexOf(_node4) < 0) sortedList.push(_node4);else continue;
      for (j; j < sortedList.length; j++) {
        //find its neighbors sorted in descending order of degree
        var neighbors = sortedList[j].getNeighborsWithDegree();
        //add nodes with degree 3 or higher to the sortedList
        for (var _i12 = 0; _i12 < neighbors.length; _i12++) {
          var _degree = neighbors[_i12][1];
          if (sortedList.indexOf(neighbors[_i12][0]) >= 0) continue;else if (_degree >= 3) sortedList.push(neighbors[_i12][0]);else break;
        }
      }
      if (sortedList.length == highDegreeNodes.length) break;
    }
  }

  return [sortedList, oneDegreeNodes];
};

cholaLayout.prototype.updateCompoundDimensions = function (compoundNodes) {
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
    hierarchyList.push([node, childList, childList.length]);
  }

  function compareSecondColumn(a, b) {
    if (a[2] === b[2]) {
      return 0;
    } else {
      return a[2] < b[2] ? -1 : 1;
    }
  };

  hierarchyList.sort(compareSecondColumn);

  //we start updating the dimensions of the compound nodes from the inner most or single compound nodes
  for (var _i13 = 0; _i13 < hierarchyList.length; _i13++) {
    var _node5 = hierarchyList[_i13][0];
    var _children = hierarchyList[_i13][1];

    // if node does not contain any children nodes
    if (_children.length == 0) {
      var posX = _node5.getCenterX();
      var posY = _node5.getCenterY();

      _node5.updateBounds2();

      // //2 is for the extra padding added in cytoscape
      // let newWidth = node.getWidth() + node.borderWidth + 2;
      // node.setWidth(newWidth);

      // let newHeight = node.getHeight() + node.borderWidth + 2;
      // node.setHeight(newHeight);

      // node.setCenter(posX, posY);

      var parent = _node5.getParentNode();

      if (parent != null) {
        //var childGraph = parent.getChild();

        parent.updateBounds2();
        console.log("after updating bounds");
        console.log(parent.id);
        console.log(parent.getCenter());
        console.log(parent.getWidth());
        console.log(parent.getHeight());
      }
    }

    //if node is inside a compound node
  }
};

module.exports = cholaLayout;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LayoutConstants = __webpack_require__(4).layoutBase.LayoutConstants;
var compass = __webpack_require__(6);

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
cholaConstants.DEFAULT_TREE_DIREC = 1; // 1 means south

/*
Set the kinds of placements that are favoured for trees.
*/
cholaConstants.TREE_PLACEMENT_FAVOUR_CARDINAL = true;
cholaConstants.TREE_PLACEMENT_FAVOUR_EXTERNAL = true;
cholaConstants.TREE_PLACEMENT_FAVOUR_ISOLATION = true;

cholaConstants.EAST = 0;
cholaConstants.SOUTH = 1;
cholaConstants.WEST = 2;
cholaConstants.NORTH = 3;

cholaConstants.XDIM = 0;
cholaConstants.YDIM = 1;

module.exports = cholaConstants;

/***/ }),
/* 6 */
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

    this.abbrev = {
        0: "E",
        1: "S",
        2: "W",
        3: "N",
        4: "SE",
        5: "SW",
        6: "NW",
        7: "NE" };

    // Directions w.r.t which we must /increase/ the const
    // coord in order to move to the right:
    this.rightSidePlus = [this.NORTH, this.EAST];
    // Directions w.r.t which we must /decrease/ the const
    // coord in order to move to the right:
    this.rightSideMinus = [this.SOUTH, this.WEST];

    this.variableDimension = {
        0: 0,
        1: 1,
        2: 0,
        3: 1
    };

    this.constantDimension = {
        0: 1,
        1: 0,
        2: 1,
        3: 0
    };

    this.components = {
        4: [this.SOUTH, this.EAST],
        5: [this.SOUTH, this.WEST],
        6: [this.NORTH, this.WEST],
        7: [this.NORTH, this.EAST],
        0: [this.EAST],
        1: [this.SOUTH],
        2: [this.WEST],
        3: [this.NORTH]
    };

    this.signs = {
        0: [1, 0],
        4: [1, 1],
        1: [0, 1],
        5: [-1, 1],
        2: [-1, 0],
        6: [-1, -1],
        3: [0, -1],
        7: [1, -1]
    };

    this.libavoidVisibility = {
        0: 8,
        1: 2,
        2: 4,
        3: 1
    };
};

compass.prototype.cwClosedInterval = function (d0, d1) {
    /*
    :param d0: a direction
    :param d1: another direction
    :return: list of all compass directions from d0 to d1 inclusive, going clockwise
    */

    var rr = this.cwRose.concat(this.cwRose);
    var i0 = rr.indexOf(d0);
    var i1 = i0 + rr.slice(i0).indexOf(d1);
    return rr.slice(i0, i1 + 1);
};

compass.prototype.sameDimension = function (d0, d1) {
    /*
    :param d0: a cardinal Compass direction
    :param d1: a cardinal Compass direction
    :return: boolean saying if these directions are in the same dimension
    */
    return d0 % 2 == d1 % 2;
};

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

compass.prototype.direction = function (node1, node2) {
    var node1Loc = node1.getCenter();
    var node2Loc = node2.getCenter();
    var x1 = node1Loc.x;
    var x2 = node2Loc.x;
    var y1 = node1Loc.y;
    var y2 = node2Loc.y;
    var dx = x2 - x1;
    var dy = y2 - y1;

    var dir = void 0;
    if (dx > 0 && dy < 0) dir = this.NE;else if (dx > 0 && dy == 0) dir = this.EAST;else if (dx > 0 && dy > 0) dir = this.SE;else if (dx == 0 && dy > 0) dir = this.SOUTH;else if (dx < 0 && dy > 0) dir = this.SW;else if (dx < 0 && dy == 0) dir = this.WEST;else if (dx < 0 && dy < 0) dir = this.NW;else if (dx == 0 && dy < 0) dir = this.NORTH;
    return dir;
};

compass.prototype.getRotationFunction = function (fromDir, toDir) {
    // For now we only handle cardinal directions.

    var d = (toDir - fromDir) % 4;
    if (d < 0) d = d + 4;
    return [function (a) {
        return [a[0], a[1]];
    }, function (a) {
        return [-1 * a[1], a[0]];
    }, function (a) {
        return [-1 * a[0], -1 * a[1]];
    }, function (a) {
        return [a[1], -1 * a[0]];
    }][d];
};

compass.prototype.flip = function (direc) {
    var i0 = this.cwRose.indexOf(direc);
    return this.cwRose[(i0 + 4) % 8];
};

compass.prototype.cw90 = function (direc) {
    var i0 = this.cwRose.indexOf(direc);
    return this.cwRose[(i0 + 2) % 8];
};

compass.prototype.rotateCW = function (n, direc) {
    var i0 = this.cwRose.indexOf(direc);
    return this.cwRose[(i0 + n) % 8];
};

compass.prototype.vectorSigns = function (direc) {
    /*
    :param direc: a Compass direction
    :return: (xs, ys) where xs in {-1, 0, 1} represents the sign of
    the x-coordinate of a vector lying in the "octant" represented
    by direc, and likewise for ys. Here an "octant" is a semiaxis for
    a cardinal direction and an open quadrant for an ordinal direction.
    */
    return this.signs[direc];
};

module.exports = compass;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var LGraphManager = __webpack_require__(4).layoutBase.LGraphManager;
var cholaNode = __webpack_require__(8);
var edgeSegment = __webpack_require__(12);
var DimensionD = __webpack_require__(4).layoutBase.DimensionD;
var idDispenser = __webpack_require__(14);

function cholaGraphManager(layout) {
    LGraphManager.call(this, layout);
    this.nextTreeSerialNum = 1;
    this.maxDegree = 0;
    this.rootNode;
    this.idDisp = new idDispenser(0);
    this.edgeToDummyNodes = {};
    this.edgesWithBends = [];
    this.nodes = {};
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

cholaGraphManager.prototype.boundingBoxxXyY = function () {
    var ignore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var includeBends = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    /*
    :return: bounding box in the form (x, X, y, Y) giving extreme coords
    */
    var allNodes = this.getAllNodes();
    var nodes = allNodes.filter(function (node) {
        if (ignore.indexOf(node) < 0) return true;else return false;
    });

    var u = void 0,
        U = void 0,
        v = void 0,
        V = void 0,
        x = void 0,
        X = void 0,
        y = void 0,
        Y = void 0;
    var bbox = nodes[0].boundingBoxxXyY();
    for (var i = 1; i < nodes.length; i++) {
        var node = nodes[i];

        var _node$boundingBoxxXyY = node.boundingBoxxXyY();

        var _node$boundingBoxxXyY2 = _slicedToArray(_node$boundingBoxxXyY, 4);

        u = _node$boundingBoxxXyY2[0];
        U = _node$boundingBoxxXyY2[1];
        v = _node$boundingBoxxXyY2[2];
        V = _node$boundingBoxxXyY2[3];
        var _bbox = bbox;

        var _bbox2 = _slicedToArray(_bbox, 4);

        x = _bbox2[0];
        X = _bbox2[1];
        y = _bbox2[2];
        Y = _bbox2[3];

        bbox = [Math.min(x, u), Math.max(X, U), Math.min(y, v), Math.max(Y, V)];
    }

    if (includeBends) {
        var allEdges = this.getAllEdges();
        for (var _i = 0; _i < allEdges.length; _i++) {
            var edge = allEdges[_i];

            var _edge$boundingBoxxXyY = edge.boundingBoxxXyY();

            var _edge$boundingBoxxXyY2 = _slicedToArray(_edge$boundingBoxxXyY, 4);

            u = _edge$boundingBoxxXyY2[0];
            U = _edge$boundingBoxxXyY2[1];
            v = _edge$boundingBoxxXyY2[2];
            V = _edge$boundingBoxxXyY2[3];
            var _bbox3 = bbox;

            var _bbox4 = _slicedToArray(_bbox3, 4);

            x = _bbox4[0];
            X = _bbox4[1];
            y = _bbox4[2];
            Y = _bbox4[3];

            bbox = [Math.min(x, u), Math.max(X, U), Math.min(y, v), Math.max(Y, V)];
        }
    }
    return bbox;
};

cholaGraphManager.prototype.boundingBoxXYWH = function () {
    var ignore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var includeBends = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    /*
    :return: bounding box of the graph as (ULCx, ULCy, W, H)
    */
    var output = this.boundingBoxxXyY(ignore, includeBends);
    var x = output[0];
    var X = output[1];
    var y = output[2];
    var Y = output[3];
    return [x, y, X - x, Y - y];
};

cholaGraphManager.prototype.bboxPerimeter = function () {
    var output = this.boundingBoxXYWH();
    var x = output[0];
    var y = output[1];
    var w = output[2];
    var h = output[3];
    return 2 * (w + h);
};

cholaGraphManager.prototype.buildSegments = function () {
    /*
    Before calling this method it is necessary that the routePoints
    of each edge in G be built.
     :param G: a routed orthogonal graph
    :return: a list of EdgeSegment objects, one for each segment in G
    */
    var segs = [];
    var allEdges = this.getAllEdges();
    for (var i = 0; i < allEdges.length; i++) {
        var edge = allEdges[i];

        //get all nodes between which segments have to be created in an order
        var pts = edge.routePoints;
        pts.unshift(edge.source);
        pts.push(edge.target);

        var n = pts.length;
        for (var _i2 = 0; _i2 < n - 1; _i2++) {
            var p = pts[_i2];
            var q = pts[_i2 + 1];
            var seg = new edgeSegment(p, q);
            seg.edge = edge;
            segs.push(seg);
        }
    }
    return segs;
};

cholaGraphManager.prototype.takeNextTreeSerialNo = function () {
    var n = this.nextTreeSerialNum;
    this.nextTreeSerialNum = n + 1;
    return n;
};

cholaGraphManager.prototype.getNode = function (node) {
    this.resetAllEdges();
    this.resetAllNodes();
    var allNodes = this.getAllNodes();
    for (var i = 0; i < allNodes.length; i++) {
        var n = allNodes[i];
        if (n.id == node.id) return n;
    }
    return null;
};

cholaGraphManager.prototype.severNodes = function (nodes, buckets, compoundNodes, idList, parentList) {
    //let parentList = {};
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        //console.log("severing node");
        if (!compoundNodes.includes(node)) {
            var edge = node.edges[0];
            if (edge == undefined) continue;
            //console.log(edge);
            var otherNode = edge.getOtherEnd(node);
            var degree = otherNode.getDegree();

            //if (node.getParentNode() != null)
            parentList[node.id] = [node, node.getEdges()[0], node.getOwner()];

            node.owner.remove(node);
            delete this.nodes[node.id];

            idList.push(node.id);
            buckets.moveNode(otherNode, degree, degree - 1);
        }
    }
    this.resetAllNodes();
    this.resetAllEdges();

    //return parentList;
};

cholaGraphManager.prototype.getConnectedComponents = function () {
    /*
    takes the stems and reconnects them to form trees
    */
    var components = [];

    // Make a copy of the nodes
    var nodes = this.getAllNodes();
    var newIndex = 0;

    var layout = this.getLayout();

    while (nodes.length > 0) {
        //create a new graph manager
        var gm = layout.newGraphManager();
        var parent = gm.addRoot();

        // Start with any node

        var node = nodes[0];
        var tempNode1 = parent.add(new cholaNode(gm, node.getCenter(), new DimensionD(parseFloat(node.getWidth()), parseFloat(node.getHeight()))));
        tempNode1.id = node.id;
        tempNode1.treeSerialNum = node.treeSerialNum;

        nodes.splice(0, 1);

        // We will use a queue of pairs (e,u), being an edge e
        // along with the node u that nominated it.
        var edgeList = node.edges;
        var queue = [];
        for (var i = 0; i < edgeList.length; i++) {
            queue.push([edgeList[i], node]);
        }
        // Applying BFS
        while (queue.length > 0) {
            var edge = queue[0][0];
            var n1 = queue[0][1]; //node in original gm
            tempNode1 = gm.getNode(n1); //node in newGm
            queue.splice(0, 1);

            var n2 = edge.getOtherEnd(n1); //node in original gm
            var tempNode2 = gm.getNode(n2); //node in newGm
            if (tempNode2 != null) continue;

            tempNode2 = parent.add(new cholaNode(gm, n2.getCenter(), new DimensionD(parseFloat(n2.getWidth()), parseFloat(n2.getHeight()))));
            tempNode2.id = n2.id;
            tempNode2.treeSerialNum = n2.treeSerialNum;

            var source = void 0,
                target = void 0,
                tempEdge = void 0;
            if (edge.source == n1) tempEdge = gm.add(gm.getLayout().newEdge(), tempNode1, tempNode2);else tempEdge = gm.add(gm.getLayout().newEdge(), tempNode2, tempNode1);
            tempEdge.id = edge.id;

            nodes.splice(nodes.indexOf(n2), 1);
            edgeList = n2.edges;
            for (var _i3 = 0; _i3 < edgeList.length; _i3++) {
                queue.push([edgeList[_i3], n2]);
            }
        }
        var allEdges = gm.getAllEdges();
        gm.computeMaxDegree();
        components.push(gm);
    }
    return components;
};

cholaGraphManager.prototype.computeMaxDegree = function () {
    this.resetAllNodes();
    this.resetAllEdges();

    var max = 0;
    var allNodes = this.getAllNodes();
    for (var i = 0; i < allNodes.length; i++) {
        var node = allNodes[i];
        if (node.getDegree() > max) max = node.getDegree();
    }
    this.maxDegree = max;
};

cholaGraphManager.prototype.identifyRootNode = function () {
    var maxSerialNumber = 0;
    var root = void 0;
    var allNodes = this.getAllNodes();

    for (var i = 0; i < allNodes.length; i++) {
        var node = allNodes[i];
        if (node.treeSerialNum > maxSerialNumber) {
            maxSerialNumber = node.treeSerialNum;
            root = node;
        }
    }

    this.rootNode = root;
    root.setAsRootNode(true);
};

cholaGraphManager.prototype.isEmpty = function () {
    if (this.getAllNodes().length == 0) return true;else return false;
};

cholaGraphManager.prototype.getChainsAndCycles = function () {
    //Identify all sequences of consecutive "links" (degree-2 nodes) in this graph.
    var chains = [];
    var cycles = [];

    // Build /list/ of all links in the graph.
    var allNodes = this.getAllNodes();
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
        for (var _i4 = 0; _i4 < edges.length; _i4++) {
            var edge = edges[_i4];
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

module.exports = cholaGraphManager;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var LNode = __webpack_require__(4).layoutBase.LNode;
var IMath = __webpack_require__(4).layoutBase.IMath;
var PointD = __webpack_require__(4).layoutBase.PointD;
var cholaEdge = __webpack_require__(9);
var cholaGraph = __webpack_require__(10);
var LayoutConstants = __webpack_require__(4).layoutBase.LayoutConstants;

function cholaNode(gm, loc, size, vNode) {
  LNode.call(this, gm, loc, size, vNode);
  this.processed = false;
  this.treeSerialNum = 0;
  this.dx = null;
  this.dy = null;
  this.isRootNode = false;
  this.isDummy = false;
  this.parentNode = null;
}

cholaNode.prototype = Object.create(LNode.prototype);
for (var prop in LNode) {
  cholaNode[prop] = LNode[prop];
}

cholaNode.prototype.setAsRootNode = function (option) {
  this.isRootNode = option;
};

cholaNode.prototype.getParentNode = function () {
  return this.parentNode;
};

cholaNode.prototype.getArea = function () {
  return this.getWidth() * this.getHeight();
};

cholaNode.prototype.getChildren = function () {
  var children = null;

  if (this.isCompound()) {
    return this.child.nodes;
  }
};

cholaNode.prototype.updateBounds2 = function () {
  if (this.getChild() == null) {
    throw "assert failed";
  }
  if (this.getChild().getNodes().length != 0) {
    // wrap the children nodes by re-arranging the boundaries
    var childGraph = this.getChild();
    childGraph.updateBounds2(false);

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

cholaNode.prototype.octalCode = function () {
  //Semi axes get octal codes 0,2,4,6; East:0; North:2; West:4; South:6
  //Quadrants get octal codes 1,3,5,7; NorthEast:1; NorthWest:3; SouthWest:5; SouthEast:7
  var thisLoc = this.getCenter();
  var o = -1;
  var x = this.dx;
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

cholaNode.prototype.getFreeSemiLocations = function () {
  var approx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var compound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var edges = this.edges;
  var nbr = null;
  var nbrLocX = null;
  var nbrLocY = null;
  var availableSemis = [0, 1, 2, 3];

  for (var i = 0; i < edges.length; i++) {
    var direction = null;
    var edge = edges[i];

    //compound is true when orthogonalizing compound node edges
    //in that case, the direction to the compound is not counted in free locations
    if (compound == true && edge.getOtherEnd(this).isCompound()) continue;

    if (edge.bendpoints.length == 0) {
      nbr = edge.getOtherEnd(this);
      nbrLocX = nbr.getCenter().x;
      nbrLocY = nbr.getCenter().y;
    } else {
      nbr = edge.bendpoints[0][0];
      nbrLocX = nbr.x;
      nbrLocY = nbr.y;
    }

    var nodeLoc = this.getCenter();
    if (Math.round(nodeLoc.x * 100.0) / 100.0 == Math.round(nbrLocX * 100.0) / 100.0) {
      if (nbrLocY > nodeLoc.y) direction = 1;else if (nbrLocY < nodeLoc.y) direction = 3;
    } else if (Math.round(nodeLoc.y * 100.0) / 100.0 == Math.round(nbrLocY * 100.0) / 100.0) {
      if (nbrLocX > nodeLoc.x) direction = 0;else if (nbrLocX < nodeLoc.x) direction = 2;
    }

    if (approx == true) {
      var dx = Math.abs(nodeLoc.x - nbrLocX);
      var dy = Math.abs(nodeLoc.y - nbrLocY);
      if (dx < dy) {
        if (!availableSemis.includes(1)) direction = 3;else if (!availableSemis.includes(3)) direction = 1;else if (nbrLocY > nodeLoc.y) direction = 1;else if (nbrLocY < nodeLoc.y) direction = 3;
      } else {
        if (!availableSemis.includes(0)) direction = 2;else if (!availableSemis.includes(2)) direction = 0;else if (nbrLocX > nodeLoc.x) direction = 0;else if (nbrLocX < nodeLoc.x) direction = 2;
      }
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

cholaNode.prototype.getNeighborsWithDegree = function () {
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

cholaNode.prototype.getNeighbors = function () {
  var neighbors = [];
  for (var i = 0; i < this.edges.length; i++) {
    var nbr = this.edges[i].getOtherEnd(this);
    neighbors.push(nbr);
  }
  return neighbors;
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

cholaNode.prototype.findEdgeBetween = function (node) {
  //finds if an edge exists between the current node and node and returns it
  var output = null;
  for (var i = 0; i < this.edges.length; i++) {
    var edge = this.edges[i];
    if (edge.source == this && edge.target == node) {
      output = edge;
      break;
    } else if (edge.source == node && edge.target == this) {
      output = edge;
      break;
    }
  }
  return output;
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

cholaNode.prototype.getBdryCompassPt = function (direc) {
  /*
  :param direc: a Compass direction
  :return: point (u, v) on the boundary of this node in the given direction
           from the centre
  */
  var c = new compass();
  var cx = this.getLocation().x;
  var cy = this.getLocation().y;

  var hw = void 0,
      hh = void 0,
      sgnx = void 0,
      sgny = void 0,
      u = void 0,
      v = void 0;

  var _self$halfDims = self.halfDims();

  var _self$halfDims2 = _slicedToArray(_self$halfDims, 2);

  hw = _self$halfDims2[0];
  hh = _self$halfDims2[1];

  var _c$vectorSigns = c.vectorSigns(direc);

  var _c$vectorSigns2 = _slicedToArray(_c$vectorSigns, 2);

  sgnx = _c$vectorSigns2[0];
  sgny = _c$vectorSigns2[1];
  u = cx + sgnx * hw;
  v = cy + sgny * hh;

  return [u, v];
};

cholaNode.prototype.halfDims = function () {
  var hw = this.getWidth() / 2;
  var hh = this.getHeight() / 2;
  return [hw, hh];
};

cholaNode.prototype.boundingBoxxXyY = function () {
  /*
  :return: bounding box in the form (x, X, y, Y) giving extreme coords
  */
  var output = this.halfDims();
  var hw = output[0];
  var hh = output[1];
  var u = this.getCenterX() - hw;
  var v = this.getCenterY() - hh;

  // Now use 2*hw, 2*hh instead of self.w, self.h, since in integer
  // case the halfdims are rounded up with the ceiling function.
  return [u, u + 2 * hw, v, v + 2 * hh];
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

cholaNode.prototype.getNbrsCWCyclic = function () {
  /*
  :return: list of all neighbours in clockwise cyclic order
          (assuming the usual graphics convention of x increasing
           to the right and y increasing downward)
  */
  var nbrs = this.getNeighbors();
  if (nbrs.length == 0) return [];

  function sortByLocation(array, node) {
    return array.sort(function (a, b) {
      var x = Math.atan2(a.getLocation().y - node.getLocation().y, a.getLocation().x - node.getLocation().x);
      var y = Math.atan2(b.getLocation().y - node.getLocation().y, b.getLocation().x - node.getLocation().x);
      return x - y;
    });
  }

  var sortedNbrs = sortByLocation(nbrs, this);

  return sortedNbrs;
};

cholaNode.prototype.getRelativeRatiotoNodeCenter = function (portLocation) {
  var node = this;
  return new PointD((portLocation.x - node.getCenterX()) / node.getWidth() * 100, (portLocation.y - node.getCenterY()) / node.getHeight() * 100);
};

cholaNode.prototype.getDirec = function (vLoc) {
  var cardinal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var ordinal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  /*
  :param vLcc: a location object
  :param cardinal: if true, the function returns the closest cardinal direction
  :return: the configured Compass direction from current node to v if any, else None
  */
  var thisLoc = this.getCenter();
  var x1 = thisLoc.x;
  var y1 = thisLoc.y;
  var x2 = vLoc.x;
  var y2 = vLoc.y;
  var dx = Math.abs(x1 - x2);
  var dy = Math.abs(y1 - y2);

  var d = null;

  if (cardinal == true) {
    if (dx < dy) {
      if (y2 > y1) d = 1; //south
      else if (y2 < y1) d = 3; //north  
    }
    //checking if node v is aligned to east or west of node
    else if (dx > dy) {
        if (x2 > x1) d = 0; //east
        else if (x2 < x1) d = 2; //west
      }
  }

  //checking if the nodes are already configured
  if (x1 == x2 || y1 == y2) {
    //checking if node v is aligned to north or south of node
    if (x1 == x2) {
      if (y2 > y1) d = 1; //south
      else if (y2 < y1) d = 3; //north  
    }
    //checking if node v is aligned to east or west of node
    else if (y1 == y2) {
        if (x2 > x1) d = 0; //east
        else if (x2 < x1) d = 2; //west
      }
  } else if (ordinal == true) {
    if (x2 > x1 && y2 > y1) d = 4;else if (x2 < x1 && y2 > y1) d = 5;else if (x2 < x1 && y2 < y1) d = 6;else if (x2 > x1 && y2 < y1) d = 7;
  }

  return d;
};

module.exports = cholaNode;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LEdge = __webpack_require__(4).layoutBase.LEdge;
var IGeometry = __webpack_require__(4).layoutBase.IGeometry;
var PointD = __webpack_require__(4).layoutBase.PointD;
var DimensionD = __webpack_require__(4).layoutBase.DimensionD;

function cholaEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.weight = 0.5;
  this.distance = 0;

  //each entry in this.bendpoint contains [bendpoint, [dir1, dir2], [node1, node2]]
  this.bendpoints = [];
  this.routePoints = [];

  //stores the location of the ports on the source or target (if any) 
  this.sourcePort = null;
  this.targetPort = null;
}

cholaEdge.prototype = Object.create(LEdge.prototype);
for (var prop in LEdge) {
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

cholaEdge.prototype.createDummyNodesForBendpoints = function (gm, layout) {
  var edge = this;
  var dummyNodes = [];
  var prev = edge.source;

  var graph = gm.calcLowestCommonAncestor(edge.source, edge.target);

  for (var i = 0; i < edge.bendpoints.length; i++) {
    // create new dummy node
    var dummyNode = gm.getRoot().add(new cholaNode(gm, new PointD(0, 0), new DimensionD(1, 1)));
    dummyNode.id = edge.source + "to" + edge.target + toString(i);

    // create new dummy edge between prev and dummy node
    var _dummyEdge = gm.add(gm.getLayout().newEdge(), prev, dummyNode);

    dummyNodes.add(dummyNode);
    prev = dummyNode;
  }

  var dummyEdge = gm.add(gm.getLayout().newEdge(), prev, edge.target);

  gm.edgeToDummyNodes[edge] = dummyNodes;

  graph.remove(edge);

  return dummyNodes;
};

cholaEdge.prototype.isOrthogonal = function () {
  //if edge has a bendpoint, it has been orthogonalized
  if (this.bendpoints.length > 0) return true;
  //if source and target both lie on the same axis, they are orthogonalized
  else if (Math.round(this.source.getCenterX()) == Math.round(this.target.getCenterX())) return true;else if (Math.round(this.source.getCenterY()) == Math.round(this.target.getCenterY())) return true;else return false;
};

cholaEdge.prototype.createBendPoint = function (bendpoint, dir1, dir2, node1, node2) {
  var tree = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  var relativeBendPosition;
  if (!tree) relativeBendPosition = this.convertToRelativeBendPosition(bendpoint);else {
    relativeBendPosition = this.getDistWeight(node1.getCenterX(), node1.getCenterY(), node2.getCenterX(), node2.getCenterY(), bendpoint.x, bendpoint.y);
  }
  this.weight = relativeBendPosition.weight;
  this.distance = relativeBendPosition.distance;
  this.bendpoints.push([bendpoint, [dir1, dir2], [node1, node2]]);
};

cholaEdge.prototype.getDistWeight = function (sX, sY, tX, tY, PointX, PointY) {
  var W, D;

  D = (PointY - sY + (sX - PointX) * (sY - tY) / (sX - tX)) / Math.sqrt(1 + Math.pow((sY - tY) / (sX - tX), 2));
  W = Math.sqrt(Math.pow(PointY - sY, 2) + Math.pow(PointX - sX, 2) - Math.pow(D, 2));

  var distAB = Math.sqrt(Math.pow(tX - sX, 2) + Math.pow(tY - sY, 2));
  W = W / distAB;

  //check whether the point (PointX, PointY) is on right or left of the line src to tgt. for instance : a point C(X, Y) and line (AB).  d=(xB-xA)(yC-yA)-(yB-yA)(xC-xA). if d>0, then C is on left of the line. if d<0, it is on right. if d=0, it is on the line.
  var delta1 = (tX - sX) * (PointY - sY) - (tY - sY) * (PointX - sX);
  switch (true) {
    case delta1 >= 0:
      delta1 = 1;
      break;
    case delta1 < 0:
      delta1 = -1;
      break;
  }
  //check whether the point (PointX, PointY) is "behind" the line src to tgt
  var delta2 = (tX - sX) * (PointX - sX) + (tY - sY) * (PointY - sY);
  switch (true) {
    case delta2 >= 0:
      delta2 = 1;
      break;
    case delta2 < 0:
      delta2 = -1;
      break;
  }

  D = Math.abs(D) * delta1; //ensure that sign of D is same as sign of delta1. Hence we need to take absolute value of D and multiply by delta1
  W = W * delta2;

  return {
    distance: D,
    weight: W
  };
};

cholaEdge.prototype.convertToRelativeBendPosition = function (bendpoint) {
  var srcTgtPointsAndTangents = this.getSrcTgtPointsAndTangents();
  var intersectionPoint = this.getIntersection(bendpoint, srcTgtPointsAndTangents);
  var intersectX = intersectionPoint.x;
  var intersectY = intersectionPoint.y;

  var srcPoint = srcTgtPointsAndTangents.srcPoint;
  var tgtPoint = srcTgtPointsAndTangents.tgtPoint;

  var weight;

  if (intersectX != srcPoint.x) {
    weight = (intersectX - srcPoint.x) / (tgtPoint.x - srcPoint.x);
  } else if (intersectY != srcPoint.y) {
    weight = (intersectY - srcPoint.y) / (tgtPoint.y - srcPoint.y);
  } else {
    weight = 0;
  }

  var distance = Math.sqrt(Math.pow(intersectY - bendpoint.y, 2) + Math.pow(intersectX - bendpoint.x, 2));

  //Get the direction of the line form source point to target point
  var dir1 = this.getLineDirection(srcPoint, tgtPoint);
  //Get the direction of the line from intesection point to bend point
  var dir2 = this.getLineDirection(intersectionPoint, bendpoint);

  //If the difference is not -2 and not 6 then the direction of the distance is negative
  if (dir1 - dir2 != -2 && dir1 - dir2 != 6) {
    if (distance != 0) {
      distance = -1 * distance;
    }
  }

  return {
    weight: weight,
    distance: distance
  };
};

cholaEdge.prototype.getLineDirection = function (srcPoint, tgtPoint) {
  if (srcPoint.y == tgtPoint.y && srcPoint.x < tgtPoint.x) {
    return 1;
  }
  if (srcPoint.y < tgtPoint.y && srcPoint.x < tgtPoint.x) {
    return 2;
  }
  if (srcPoint.y < tgtPoint.y && srcPoint.x == tgtPoint.x) {
    return 3;
  }
  if (srcPoint.y < tgtPoint.y && srcPoint.x > tgtPoint.x) {
    return 4;
  }
  if (srcPoint.y == tgtPoint.y && srcPoint.x > tgtPoint.x) {
    return 5;
  }
  if (srcPoint.y > tgtPoint.y && srcPoint.x > tgtPoint.x) {
    return 6;
  }
  if (srcPoint.y > tgtPoint.y && srcPoint.x == tgtPoint.x) {
    return 7;
  }
  return 8; //if srcPoint.y > tgtPoint.y and srcPoint.x < tgtPoint.x
};

cholaEdge.prototype.getSrcTgtPointsAndTangents = function () {
  var sourceNode = this.source;
  var targetNode = this.target;

  var srcPoint = sourceNode.getCenter();
  var tgtPoint = targetNode.getCenter();

  //m1 is the slope of the line passing through source and target
  var m1 = (tgtPoint.y - srcPoint.y) / (tgtPoint.x - srcPoint.x);
  var m2 = -1 / m1;

  return {
    m1: m1,
    m2: m2,
    srcPoint: srcPoint,
    tgtPoint: tgtPoint
  };
};

cholaEdge.prototype.getIntersection = function (point, srcTgtPointsAndTangents) {
  var srcPoint = srcTgtPointsAndTangents.srcPoint;
  var tgtPoint = srcTgtPointsAndTangents.tgtPoint;
  var m1 = srcTgtPointsAndTangents.m1;
  var m2 = srcTgtPointsAndTangents.m2;

  var intersectX;
  var intersectY;

  if (m1 == Infinity || m1 == -Infinity) {
    intersectX = srcPoint.x;
    intersectY = point.y;
  } else if (m1 == 0) {
    intersectX = point.x;
    intersectY = srcPoint.y;
  } else {
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

module.exports = cholaEdge;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraph = __webpack_require__(11).LGraph;
var Integer = __webpack_require__(11).Integer;
var RectangleD = __webpack_require__(11).RectangleD;

function cholaGraph(parent, graphMgr, vGraph) {
  LGraph.call(this, parent, graphMgr, vGraph);
}

cholaGraph.prototype = Object.create(LGraph.prototype);
for (var prop in LGraph) {
  cholaGraph[prop] = LGraph[prop];
};

cholaGraph.prototype.updateBounds2 = function (recursive) {
  // calculate bounds
  var left = Number.MAX_VALUE;
  var right = -Number.MAX_VALUE;
  var top = Number.MAX_VALUE;
  var bottom = -Number.MAX_VALUE;
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

  margin = margin + this.parent.borderWidth / 2 + 1;

  this.left = boundingRect.x - margin;
  this.right = boundingRect.x + boundingRect.width + margin;
  this.top = boundingRect.y - margin;
  this.bottom = boundingRect.y + boundingRect.height + margin;
};

module.exports = cholaGraph;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cc = __webpack_require__(5);
var Event = __webpack_require__(13);

function edgeSegment(node1, node2) {
    /*
    Pass the two Nodes that are the endpoints of the segment.
    We will define:
        this.kind: "H" or "V"
        this.u1, this.u2: the lower and upper bounds on the interval
                          spanned by the segment, x if H, y if V.
        this.n1, this.n2: the two endpt nodes, n1 where the segment
                          opens, n2 where it closes
        this.v: the y coord of the segment if H, the x coord if V
     Finally, Segments are not per se directed; however, it is convenient to note
    the direction implied by the order in which the arguments were passed
    to this __init__ function, and we record this in this.origDir.
    */

    var x1 = node1.getLocation().x;
    var y1 = node1.getLocation().y;
    var x2 = node2.getLocation().x;
    var y2 = node2.getLocation().y;

    var dx = x2 - x1;
    var dy = y2 - y1;

    if (Math.abs(dy) <= Math.abs(dx)) {
        this.kind = "H";
        this.v = y1;
        if (x1 < x2) {
            this.u1 = x1;
            this.u2 = x2;
            this.n1 = node1;
            this.n2 = node2;
            this.origDir = cc.EAST;
        } else {
            this.u1 = x2;
            this.u2 = x1;
            this.n1 = node2;
            this.n2 = node1;
            this.origDir = cc.WEST;
        }
    } else {
        this.kind = "V";
        this.v = x1;
        if (y1 < y2) {
            this.u1 = y1;
            this.u2 = y2;
            this.n1 = node1;
            this.n2 = node2;
            this.origDir = cc.SOUTH;
        } else {
            this.u1 = y2;
            this.u2 = y1;
            this.n1 = node2;
            this.n2 = node1;
            this.origDir = cc.NORTH;
        }
    }

    // A reference to the owning edge may be stashed here, if you wish:
    this.edge = null;
}

edgeSegment.prototype.setNewClosingNode = function (node) {
    this.n2 = node;
    if (this.kind == "H") this.u2 = node.getLocation().x;else this.u2 = node.getLocation().y;
};

edgeSegment.prototype.getEvents = function () {
    /*
    Return the two Event objects, in order, representing the
    opening and closing of this segment.
    */
    var events = [];
    var temp = [this.n1, this.n2];
    for (var i = 0; i < temp.length; i++) {
        var n = temp[i];
        var event = new Event(this, n);
        events.push(event);
    }

    events[0].companion = events[1];
    events[1].companion = events[0];
    return events;
};

module.exports = edgeSegment;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function event(seg, endpoint) {
    this.seg = seg;
    this.endpoint = endpoint;

    // const-coord:
    if (seg.kind == "H") this.v = endpoint.getLocation().y;else this.v = endpoint.getLocation().x;

    // var-coord:
    if (seg.kind == "H") this.u = endpoint.getLocation().x;else this.u = endpoint.getLocation().y;

    // kind
    if (this.u == seg.u1) this.kind = "open";else if (this.u == seg.u2) this.kind = "close";else console.log("endpoint does not match segment");

    // for holding a ref to corresp. event
    this.companion = null;
}

module.exports = event;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function idDispenser(firstID) {
    this.nextID = firstID;
}

idDispenser.prototype.takeNext = function () {
    var n = this.nextID;
    this.nextID = n + 1;
    return n;
};

idDispenser.prototype.noteIDInUse = function (ID) {
    this.nextID = Math.max(this.nextID, ID + 1);
};

idDispenser.prototype.reset = function () {
    this.nextID = 0;
};

module.exports = idDispenser;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Nbr = __webpack_require__(16);
var Arrangement = __webpack_require__(17);

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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Nbr = __webpack_require__(16);
var Assignment = __webpack_require__(18);

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

      //find the possible combinations based on available spaces and unprocessed nodes
      var combinations = this.combination(tempArray, unProcessedNodes.length - 1);

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

  var output = this.makesFlatTriangle(am);

  if (output[0] == true) {
    var flatTriangle = output[1];
    this.removeFlatTriangle(flatTriangle);
  }
};

Arrangement.prototype.makesFlatTriangle = function (am) {
  for (var i = 0; i < 2; i++) {
    var s0 = this.semis[i];
    var s1 = this.semis[i + 2];
    if (!Array.isArray(s0) && !Array.isArray(s1)) {
      if (am[s0.id][s1.id] == true) return [true, [s0, s1]];
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//a struct to represent an assignment of neighbors to semiaxes, and the cost of this assignment

function Assignment(semis, cost) {
  //semis is a list [a, b, c, d] of lists of neighbors to be assigned to the semiaxes s0, s1, s2, s3 respectively
  this.semis = semis;
  this.cost = cost;
}

module.exports = Assignment;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compass = __webpack_require__(6);
var LinkShape = __webpack_require__(20);
var BendSequence = __webpack_require__(21);
var cholaNode = __webpack_require__(8);

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

    // if (this.cycle)
    //     M = M + 1;

    M = M - remaining;
    var cost = bestCost;

    var check = false;
    for (var i = i0; i < M; i++) {
        cost = this.bendCost(bendtype, i);
        if (i % 0 == 1) cost = cost + 3;
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
        if (i % 0 == 1) cost = cost + 3;
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
    var bendpoints = [];
    var cost = 0;
    var i = 0;
    if (this.cycle) {
        if (this.nodes.length == 3) {
            //only this case will contain a bend
            bendpoints = [0, 2, 4, 5];
        } else {
            //first node will be the first bendpoint
            bendpoints.push(i);

            //next bendpoints
            var n = this.nodes.length;
            var m = n;
            var width = parseInt(n / 4);
            if (n % 2 != 0) {
                m = n + 1;
                width = parseInt(m / 4);
            }

            var length = parseInt((m - 2 * width) / 2);

            for (var j = 1; j < bendseq.bendtypes.length; j++) {
                if (j % 2 == 1) i = i + 2 * length;else i = i + 2 * width;
                if (i <= 2 * this.nodes.length - 1) {
                    bendpoints.push(i);
                } else {
                    bendpoints.push(i - 1);
                }
            }
        }
    } else {
        var queue = JSON.parse(JSON.stringify(bendseq.bendtypes));

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

chain.prototype.possibleBendSeqs = function () {
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
        var index = Math.floor(Math.random() * 3 + 0);
        var bt = LinkShape.bent[index];
        var ls = new LinkShape();
        var bs = new BendSequence(ls.cwBendsFrom(bt));
        seqs.push(bs);
    } else {
        // Get incoming and outgoing directions:
        var A = this.anchorNodeLeft;
        var Z = this.anchorNodeRight;
        var b = this.nodes[0];
        var y = this.nodes[this.nodes.length - 1];
        var dIn = A.getDirec(b.getCenter(), false);
        var dOut = y.getDirec(Z.getCenter(), false);
        var dIns = [];
        var dOuts = [];

        // If edge (A, b) or (y, Z) is not configured, we look up possible directions.
        if (dIn != null) dIns = [dIn];else {
            var comp = new compass();
            dIns = comp.possibleCardinalDirections(A, b);
            if (dIns[0] == undefined) {
                comp.possibleCardinalDirections(A, b);
            }
        }

        if (dOut != null) dOuts = [dOut];else {
            var comp = new compass();
            dOuts = comp.possibleCardinalDirections(y, Z);
        }

        // Now computing the sequences.
        for (var i = 0; i < dIns.length; i++) {
            var d0 = dIns[i];
            for (var j = 0; j < dOuts.length; j++) {
                var d1 = dOuts[j];
                // if (d0 == undefined)
                // {
                //     let b = 3; 
                //     let c = 4; 
                // }
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
    if (lookup == undefined) {
        var b = 4;
        var c = 6;
    }

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

chain.prototype.takeShapeBasedConfiguration = function (gm, options, layout) {
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
        // var node = this.nodes[0];
        // var edges = node.edges;
        // var neighbors = [edges[0].getOtherEnd(node), edges[1].getOtherEnd(node)];
        // let nbr1FreePositions = neighbors[0].getFreeSemiLocations(edgeLength);
        // let nbr2FreePositions = neighbors[1].getFreeSemiLocations(edgeLength);
        // let nbr = null;
        // let otherNbr = null;
        // let freePos = 0;

        // //find the neighbors with least number of free semi locations
        // if (nbr1FreePositions.length == 0 || nbr2FreePositions.length == 0)
        //     return changes;

        // if (nbr1FreePositions.length > nbr2FreePositions.length)
        // {
        //     nbr = neighbors[1];
        //     otherNbr = neighbors[0];
        //     freePos = nbr2FreePositions;
        // }
        // else
        // {    
        //     nbr = neighbors[0];
        //     otherNbr = neighbors[1];
        //     freePos = nbr1FreePositions;
        // }

        // //finding current chain length
        // let currChainLength = node.findDistance(neighbors[0]) + node.findDistance(neighbors[1]);         
        // let nbrLoc = nbr.getCenter();

        // //place node at each free semi location and current location and find total length of chain
        // let cost = [];
        // let pos = null;
        // let min = currChainLength;
        // for (let i = 0; i < freePos.length; i++)
        // {
        //     let loc = null;
        //     if (freePos[i] == 0)
        //         loc = [nbrLoc.x + edgeLength, nbrLoc.y];
        //     else if (freePos[i] == 1)
        //       {
        //         loc = [nbrLoc.x, nbrLoc.y + edgeLength];
        //       }
        //       else if (freePos[i] == 2)
        //       {
        //         loc = [nbrLoc.x - edgeLength, nbrLoc.y];
        //       }
        //       else if (freePos[i] == 3)
        //       {
        //         loc = [nbrLoc.x, nbrLoc.y - edgeLength];
        //       }
        //     let chainLength = nbr.findDistance(loc) + otherNbr.findDistance(loc);
        //     if (chainLength < min)
        //     {    
        //         pos = freePos[i];
        //         min = chainLength;
        //     }
        // }
        // if (min != currChainLength)
        // {
        //     //changes.push([nbr, node, pos]);
        //     layout.placementConstraints(pos, options, nbr, node);
        // }
        return;
    }

    // Else there is at least one internal edge, and we assume that none of the
    // internal edges is yet configured. Therefore we /will/ be making
    // changes -- even if not creating any bent links (straight chains still need
    // to be configured).

    var seqs = this.possibleBendSeqs();
    for (var i = 0; i < seqs.length; i++) {
        var bs = seqs[i];
        //find the cost for each bend sequence
        this.evaluateBendSeq(bs);
    }

    //console.log(this.nodes);

    //finding the index with smallest cost
    var min = seqs[0].cost;
    var index = 0;
    for (var _i3 = 1; _i3 < seqs.length; _i3++) {
        var _bs2 = seqs[_i3];
        if (_bs2.cost < min) {
            min = _bs2.cost;
            index = _i3;
        }
    }
    var bestSeq = seqs[index];
    //console.log(bestSeq);
    var configseq = this.writeConfigSeq(bestSeq);

    //console.log(configseq);

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

        // if (u.isCompound() || v.isCompound())
        //     contin
        if (conf.length == 1) {
            layout.placementConstraints(conf[0], options, u, v);

            var value = options.relativeAlignment[options.relativeAlignment.length - 1];
            if (value.top != undefined) {
                if (typeof value.top != "string") {
                    value.top = value.top.id;
                    value.bottom = value.bottom.id;
                }
            } else {
                if (typeof value.left != "string") {
                    value.left = value.left.id;
                    value.right = value.right.id;
                }
            }
        } else {
            // In this case we are to create a bend point.
            // Create a bend point

            var bendpoint = {
                x: null,
                y: null
            };
            if (conf[0] == 0 || conf[0] == 2) {
                bendpoint.x = v.getCenter().x;
                bendpoint.y = u.getCenter().y;
            } else if (conf[0] == 1 || conf[0] == 3) {
                bendpoint.x = u.getCenter().x;
                bendpoint.y = v.getCenter().y;
            }

            edge.createBendPoint(bendpoint, conf[0], conf[1], u, v);
            gm.edgesWithBends.push(edge);
        }
    }
};

module.exports = chain;

/***/ }),
/* 20 */
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
/* 21 */
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

module.exports = bendSequence;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function nodeBuckets(gm) {
    this.graph = gm;
    this.buckets = [];
    this.maxDegree = gm.getMaxDegree();

    //creating containers of nodes for each degree
    for (var i = 0; i <= this.maxDegree; i++) {
        this.buckets.push([]);
    }var allNodes = gm.getAllNodes();
    for (var _i = 0; _i < allNodes.length; _i++) {
        var node = allNodes[_i];
        var index = node.getDegree();
        this.buckets[index].push(node);
    }
};

nodeBuckets.prototype.takeLeaves = function (compoundNodes) {
    var leaves = this.buckets[1];
    var tempNodes = [];
    var leafNodes = [];
    for (var i = 0; i < leaves.length; i++) {
        var node = leaves[i];
        var edge = node.edges[0];

        // if a leave node does not have to be removed, it is stored in tempNodes
        //we do not remove a node if it is a compound node
        if (compoundNodes.includes(node)) {
            tempNodes.push(node);
        }
        //we do not remove a node if it is the last node left inside a compound node
        else if (node.getParent().id !== 'undefined' && compoundNodes.includes(node.getParent()) && node.getParent().child.nodes.length === 1) {

                tempNodes.push(node);
            }
            //we do not remove nodes with intergraph edges
            else if (edge.source.owner !== edge.target.owner) {
                    tempNodes.push(node);
                } else leafNodes.push(node);
    }
    this.buckets[1] = tempNodes;
    return leafNodes;
};

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
nodeBuckets.prototype.moveNode = function (node, oldDegree, newDegree) {
    //Move node from old degree bucket to new degree bucket
    var index = this.buckets[oldDegree].indexOf(node);
    if (index >= 0) {
        this.buckets[oldDegree].splice(index, 1);
        this.buckets[newDegree].push(node);
    }
};

module.exports = nodeBuckets;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cholaNode = __webpack_require__(8);
var DimensionD = __webpack_require__(4).layoutBase.DimensionD;

function stem(leaf, root) {
    this.leaf = leaf;
    this.root = root;
    this.edge = root.getEdgesBetween(leaf)[0];
}

stem.prototype.addSelfToGraph = function (gm, parent) {
    /*
    creating new graphs for each stem
    */

    var leaf = gm.getNode(this.leaf);
    if (!leaf) {
        leaf = parent.add(new cholaNode(gm, this.leaf.getLocation(), new DimensionD(parseFloat(this.leaf.getWidth()), parseFloat(this.leaf.getHeight()))));
        leaf.id = this.leaf.id;
        leaf.treeSerialNum = 0;
    }

    var root = gm.getNode(this.root);
    if (!root) {
        root = parent.add(new cholaNode(gm, this.root.getLocation(), new DimensionD(parseFloat(this.root.getWidth()), parseFloat(this.root.getHeight()))));
        root.id = this.root.id;
    }

    // Must always update root node's serial number to be the largest.
    root.treeSerialNum = gm.takeNextTreeSerialNo();

    var e = gm.add(gm.getLayout().newEdge(), root, leaf);
    e.id = this.edge.id;
};

module.exports = stem;

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var compass = __webpack_require__(6);

function tree(gm, root, cutoffNode) {
    this.graph = gm;
    this.root = root;

    this.nodes = {}; // id of node --> node
    this.edges = {};
    // Initialise fields.
    this.depth = 0;

    //maximum number of nodes in one level
    this.breadth = 0;
    this.leaves = new Object(); // id of node --> 1
    this.nodesByRank = new Object(); // rank (int) --> list of Nodes
    this.rankByNodeid = new Object(); // id of node --> rank (int)
    this.parent = new Object(); // id of child --> parent Node
    this.isSymmetric = false;
    this.holaConfig = null;

    // For layout, we have a map
    // rank (int) --> [lb, ub]
    // returning the lower and upper bounds on the lateral coordinates
    // of the tree, for each rank (e.g. for NORTH growth direction the
    // bounds are on x-coordinates).
    this.boundsByRank = new Object();
    // We also keep the global lower and upper bounds over all populated ranks.
    this.lb = 0;
    this.ub = 0;
    this.orderingNumbers = new Object(); // id of node --> its ordering number
    this.bufferNodes = [];
    this.pcs = [];
    // # The following booleans configure how the getBounds function for this
    // # tree will work.
    // #
    // # If the boundary is infinite, then you will always get
    // # lower and upper bound for every rank, no matter how high; else you will
    // # get None for ranks having no nodes in them.
    // #
    // # If the boundary is tight then the bounds for each rank cover just the
    // # nodes on that rank plus half nodeSep on each end; else the bounds for
    // # every rank are equal to the tight bounds for the widest rank.
    // #
    // # The style of the layout can be configured to some extent by setting
    // # these booleans.
    this.boundaryInfinite = false;
    this.boundaryTight = true;

    this.c = new compass();

    this.growthDir = null;
    // Compute ranks etc.
    this.setRank(root, 0);

    var deque = [root];
    var processedNodes = [];

    while (deque.length > 0) {
        // Pop front of queue.
        var node = deque.shift();
        this.nodes[node.id] = node;

        var children = node.getNeighbors();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (this.nodes[child.id] != undefined) children.splice(i, 1);

            //for not using the the prevNodes while creating cTrees
            else if (cutoffNode != undefined && child.id == cutoffNode.id) children.splice(i, 1);
        }

        var rank = this.rankByNodeid[node.id];
        if (children.length == 0) this.leaves[node.id] = node;

        for (var _i = 0; _i < children.length; _i++) {
            var _child = children[_i];
            var edge = node.findEdgeBetween(_child);
            this.edges[edge.id] = edge;
            this.parent[_child.id] = node;
            this.setRank(_child, rank + 1);
            deque.push(_child);
        }
    }
    var ranks = Object.keys(this.nodesByRank);

    //depth of tree
    this.depth = ranks.length;
    var values = Object.values(this.nodesByRank);
    for (var _i2 = 0; _i2 < values.length; _i2++) {
        var r = values[_i2];
        if (r.length > this.breadth) this.breadth = r.length;
    }
};

tree.prototype.applyGeometry = function (iel, dp, root) {
    /*
    Rotate, flip, and translate the tree as necessary to match this placement.
    :return: nothing
    */

    var dg = dp;
    this.rotateTo(dg);

    var flip = false;
    if (!this.isSymmetric) flip = true;

    if (flip) this.flip(dg);

    var vect = [root.getCenterX(), root.getCenterY()];

    var c = new compass();
    if (c.cwCards.includes(dp)) {
        this.translate(vect, dg);
    } else {
        var x0 = void 0,
            y0 = void 0,
            w0 = void 0,
            h0 = void 0,
            u0 = void 0,
            v0 = void 0;

        var _getBoundingBoxXYWHWi = this.getBoundingBoxXYWHWithoutRoot(dg);

        var _getBoundingBoxXYWHWi2 = _slicedToArray(_getBoundingBoxXYWHWi, 6);

        x0 = _getBoundingBoxXYWHWi2[0];
        y0 = _getBoundingBoxXYWHWi2[1];
        w0 = _getBoundingBoxXYWHWi2[2];
        h0 = _getBoundingBoxXYWHWi2[3];
        u0 = _getBoundingBoxXYWHWi2[4];
        v0 = _getBoundingBoxXYWHWi2[5];


        var w1 = void 0,
            h1 = void 0,
            u1 = void 0,
            v1 = void 0;

        var _treeBoxWithRootVecto = this.treeBoxWithRootVector(dp);

        var _treeBoxWithRootVecto2 = _slicedToArray(_treeBoxWithRootVecto, 4);

        w1 = _treeBoxWithRootVecto2[0];
        h1 = _treeBoxWithRootVecto2[1];
        u1 = _treeBoxWithRootVecto2[2];
        v1 = _treeBoxWithRootVecto2[3];


        var dw = void 0;
        if (c.increasing.includes(dg)) dw = -1 * iel / 8;else dw = iel / 8;

        if (c.vertical.includes(dg)) v1 = v1 + dw;else u1 = u1 + dw;

        var x = void 0,
            y = void 0;
        var _vect = vect;

        var _vect2 = _slicedToArray(_vect, 2);

        x = _vect2[0];
        y = _vect2[1];


        vect = [x + u1 - u0, y + v1 - v0];
        this.translate(vect, dg);
    }

    // Do this last, after we have rotated the tree.
    this.growthDir = dg;

    this.sortRankNodes(dp);
};

tree.prototype.treeBoxWithRootVector = function (placementDirec) {
    var iel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    /*
    :param iel: ideal edge length for the graph. Set this to a positive value if
                you want padding based on this length to be added to the box
                dimensions.
    :return: (w, h, u, v) where w, h are the width and height of the bounding box
             for the tree (minus root) for the growth direction of this TreePlacement,
             and (u, v) is the vector from the centre of the trunk root to the centre
             of this box, for the placement direction and flip of this TreePlacement.
              If iel is positive, we add padding to w and h.
    */
    var x0 = void 0,
        y0 = void 0,
        w0 = void 0,
        h0 = void 0,
        u0 = void 0,
        v0 = void 0,
        w1 = void 0,
        h1 = void 0,
        u1 = void 0,
        v1 = void 0;

    // console.log("bounding box of tree without root");
    // console.log(x0);
    // console.log(y0);
    var _getBoundingBoxXYWHWi3 = this.getBoundingBoxXYWHWithoutRoot(placementDirec);

    var _getBoundingBoxXYWHWi4 = _slicedToArray(_getBoundingBoxXYWHWi3, 6);

    x0 = _getBoundingBoxXYWHWi4[0];
    y0 = _getBoundingBoxXYWHWi4[1];
    w0 = _getBoundingBoxXYWHWi4[2];
    h0 = _getBoundingBoxXYWHWi4[3];
    u0 = _getBoundingBoxXYWHWi4[4];
    v0 = _getBoundingBoxXYWHWi4[5];
    w1 = w0;
    h1 = h0;


    var c = new compass();
    var growthDir = placementDirec;
    var flip = false;

    if (!this.isSymmetric) flip = true;

    //if (placementDirec == growthDir)
    //{
    // Placement direction is cardinal and equals the growth direction.
    //assert(this.placementDirec in Compass.cwCards)
    // In this case we need to check whether the tree is to be flipped,
    // and if so alter the (u, v) vector accordingly.
    // Also add padding if iel is set.
    if (c.vertical.includes(placementDirec)) {
        if (flip) {
            ;
            u1 = -1 * u0;
            v1 = v0;
        } else {
            ;

            u1 = u0;
            v1 = v0;
        }if (iel > 0) {

            // Want half the width padding on each side, but all height padding on outside:
            var _ref = [w1 + iel / 2, h1 + iel / 4];
            w1 = _ref[0];
            h1 = _ref[1];
            if (c.increasing.includes(growthDir)) v1 = v1 + iel / 8;else v1 = -1 * iel / 8;
        }
    } else {
        if (flip) {
            ;
            u1 = u0;
            v1 = -1 * v0;
        } else {
            ;

            u1 = u0;
            v1 = v0;
        }if (iel > 0) {

            //exchange height and width because placement direction is horizontal
            // let temp = w1;
            // w1 = h1;
            // h1 = temp;

            // Want half the height padding on each side, but all width padding on outside:
            var _ref2 = [w1 + iel / 4, h1 + iel / 2];
            w1 = _ref2[0];
            h1 = _ref2[1];
            if (c.increasing.includes(growthDir)) u1 = u1 + iel / 8;else u1 = -1 * iel / 8;
        }
    }
    // }
    // else
    // {
    //     // Placement direction is ordinal, and growth direction is one of its components.
    //     // assert(this.placementDirec in Compass.cwOrds)
    //     // assert(this.growthDirec in Compass.components[this.placementDirec])
    //     // In this case we throw away the given (u0, v0), and compute this vector
    //     // based solely on the dimensions of the tree and root, and on the placement direction.
    //     // It does not matter if the tree is to be flipped.
    //     // First consider padding.
    //     if (iel > 0)
    //     {
    //         if (c.vertical.includes(growthDir))
    //             [w1, h1] = [w1 + iel/2, h1 + iel/4];
    //         else
    //             [w1, h1] = [w1 + iel/4, h1 + iel/2];
    //     }

    //     let rootW = tree.root.getWidth();
    //     let rootH = tree.root.getHeight();

    //     let sgnX, sgnY;
    //     [sgnX, sgnY] = c.vectorSigns(placementDirec);

    //     [u1, v1] = [sgnX * (rootW + w1)/2, sgnY * (rootH + h1)/2];
    // }

    return [w1, h1, u1, v1];
};

tree.prototype.createMainConstraints = function (placementDir, options, cholaLayout) {
    this.createInterRankConstraints(placementDir, options, cholaLayout);
    this.createInterRankConstraints2(placementDir, options, cholaLayout);
    this.createIntraRankConstraints(placementDir, options, cholaLayout);
    //this.createSpecialConstraints(placementDir, options, cholaLayout);
};

tree.prototype.createInterRankConstraints = function (placementDir, options, cholaLayout) {
    //constraints between nodes of different ranks
    var values = Object.values(this.nodesByRank);
    for (var j = 0; j < this.depth - 1; j++) {
        var value = values[j];
        for (var k = 0; k < value.length; k++) {
            var prevNode = value[k];

            //if next rank exists, create constraints between nodes of these ranks
            var nextRank = values[j + 1];
            // if (nextRank != undefined)
            // {
            for (var l = 0; l < nextRank.length; l++) {
                var nextNode = nextRank[l];
                cholaLayout.placementConstraints(placementDir, options, prevNode, nextNode);
            }
            // }
        }
    }
};

tree.prototype.createInterRankConstraints2 = function (placementDir, options, cholaLayout) {
    var temph = [];
    var tempv = [];

    var topBottoms = [];
    var leftRights = [];

    var c = this.c;

    var ranks = Object.values(this.nodesByRank);
    for (var j = 0; j < this.depth; j++) {
        var nodes = ranks[j];
        for (var k = 0; k < nodes.length; k++) {
            var node = nodes[k];
            var nbrs = node.getNeighbors();
            for (var i = 0; i < nbrs.length; i++) {
                var nbr = nbrs[i];
                //if neighbor exists in next rank of the tree, we create a constraint for it.
                if (this.rankByNodeid[nbr.id] == j + 1) {
                    var dir = node.getDirec(nbr.getCenter(), false, true);
                    if (placementDir == c.EAST) {
                        if (dir == c.EAST) leftRights.push({ left: node.id, right: nbr.id, gap: options.edgeGap });else if (dir == c.NE) cholaLayout.placementConstraints(3, options, node, nbr, true);else if (dir == c.SE) cholaLayout.placementConstraints(1, options, node, nbr, true);
                    } else if (placementDir == c.SOUTH) {
                        if (dir == c.SOUTH) topBottoms.push({ top: node.id, bottom: nbr.id, gap: options.edgeGap });else if (dir == c.SE) cholaLayout.placementConstraints(0, options, node, nbr, true);else if (dir == c.SW) cholaLayout.placementConstraints(2, options, node, nbr, true);
                    } else if (placementDir == c.WEST) {
                        if (dir == c.WEST) leftRights.push({ left: nbr.id, right: node.id, gap: options.edgeGap });else if (dir == c.SW) cholaLayout.placementConstraints(1, options, node, nbr, true);else if (dir == c.NW) cholaLayout.placementConstraints(3, options, node, nbr, true);
                    } else if (placementDir == c.NORTH) {
                        if (dir == c.NORTH) topBottoms.push({ top: nbr.id, bottom: node.id, gap: options.edgeGap });else if (dir == c.NW) cholaLayout.placementConstraints(2, options, node, nbr, true);else if (dir == c.NE) cholaLayout.placementConstraints(0, options, node, nbr, true);
                    }
                }
            }
        }
    }

    cholaLayout.combineAlignments(options.horizontalAlignment, leftRights);
    cholaLayout.combineAlignments(options.verticalAlignment, topBottoms);
};

tree.prototype.createIntraRankConstraints = function (placementDir, options, cholaLayout) {
    var values = Object.values(this.nodesByRank);
    for (var i = 0; i < values.length; i++) {
        //take a rank of the tree
        var value = values[i];

        //if rank is 0, no need to create constraints since it has only the root
        if (i == 0) continue;else {
            var temp = [];

            //for all the nodes in rank i, we create constraints from left to right
            for (var j = 0; j < value.length; j++) {
                var prevNode = value[j];
                temp.push(prevNode.id);
                var nextNode = value[j + 1];

                if (nextNode != undefined) {
                    var dir = placementDir - 1;;
                    // if (placementDir == 1 || placementDir == 3)
                    //     dir = 0;
                    // else if (placementDir == 0)
                    //     dir = 3;
                    // else if (placementDir == 2)
                    //     dir = 1;
                    // if (dir < 0)
                    //     dir = dir + 4;

                    cholaLayout.placementConstraints(dir, options, prevNode, nextNode);
                }
            }

            if (temp.length < 2) continue;

            if (placementDir == 0 || placementDir == 2) options.verticalAlignment.push(temp);else options.horizontalAlignment.push(temp);
        }
    }
};

tree.createSpecialConstraints = function (placementDir, options, cholaLayout) {
    //if a node is horizontally or vertically aligned to its parent node
    //create horizontal or vertical constraints for it as needed
};

tree.prototype.getBoundingBoxXYWHWithoutRoot = function () {
    var growthDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    /*
    Before calling this function the Tree should have been laid out,
    so the root node should be centred at (0, 0) and this.growthDir
    should be set.
     :param growthDir: a cardinal Compass direction
    :return: (ULCx, ULCy, w, h, u, v) where (ULCx, ULCy, w, h) gives the bounding
             box after taking away the root node (but not taking away
             inter-rank space between the root node and the next rank),
             and where (u, v) is the vector from the centre of the root
             node to the centre of the bounding box. Since the root is
             at (0, 0), this is just the coords of the centre of the box.
     If you pass a growthDir argument then we use that. Otherwise we
    use this.growthDir.
    */
    var x = void 0,
        y = void 0,
        w = void 0,
        h = void 0,
        u = void 0,
        v = void 0;

    var _graph$boundingBoxXYW = this.graph.boundingBoxXYWH();

    var _graph$boundingBoxXYW2 = _slicedToArray(_graph$boundingBoxXYW, 4);

    x = _graph$boundingBoxXYW2[0];
    y = _graph$boundingBoxXYW2[1];
    w = _graph$boundingBoxXYW2[2];
    h = _graph$boundingBoxXYW2[3];


    if (this.growthDir == this.c.EAST) {
        x = x + this.root.getWidth();
        w = w - this.root.getWidth();
    } else if (this.growthDir == this.c.WEST) {
        w = w - this.root.getWidth();
    } else if (this.growthDir == this.c.SOUTH) {
        y = y + this.root.getHeight();
        h = h - this.root.getHeight();
    } else if (this.growthDir == this.c.NORTH) {
        h = h - this.root.getHeight();
    }

    u = x + w / 2;
    v = y + h / 2;


    if (growthDir != null) {
        var _c$getRotationFunctio = this.c.getRotationFunction(this.growthDir, growthDir)([u, v]);

        var _c$getRotationFunctio2 = _slicedToArray(_c$getRotationFunctio, 2);

        u = _c$getRotationFunctio2[0];
        v = _c$getRotationFunctio2[1];


        if (!this.c.sameDimension(this.growthDir, growthDir)) {

            // If root node is oblong, then tree box needs to be shifted
            // in the growth direction.
            var _ref3 = [h, w];
            // Dimensions of tree box swap.

            w = _ref3[0];
            h = _ref3[1];
            if (growthDir == this.c.EAST) u = u + (this.root.getWidth() - this.root.getHeight()) / 2;else if (growthDir == this.c.WEST) u = u - (this.root.getWidth() - this.root.getHeight()) / 2;else if (growthDir == this.c.SOUTH) v = v + (this.root.getHeight() - this.root.getWidth()) / 2;else v = v - (this.root.getHeight() - this.root.getWidth()) / 2;
        }

        // ULC is easily recomputed based on new centre.
        x = u - w / 2;
        y = v - h / 2;
    }

    return [x, y, w, h, u, v];
};

tree.prototype.flip = function (growthDir) {
    /*    :param growthDir: A compass direction, e.g. Compass.NORTH
    :return: nothing
     We filp the tree around the y-axis for NORTH and SOUTH growth,
    around the x-axis for EAST and WEST growth.
    */

    var nodes = Object.values(this.nodes);
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var loc = node.getCenter();
        if (growthDir == 1 || growthDir == 3) node.setCenter(-1 * loc.x, loc.y);else node.setCenter(loc.x, -loc.y);
    }

    this.lb = this.ub;
    this.ub = this.lb;

    var keys = Object.keys(this.boundsByRank);
    for (var _i3 = 0; _i3 < keys.length; _i3++) {
        var key = keys[_i3];
        var b = this.boundsByRank[key];
        this.boundsByRank[key] = [-1 * b[1], -1 * b[0]];
    }
};

tree.prototype.translate = function (vect, growthDir) {
    /*
    :param vect: a list or tuple of two numbers
    :return: nothing
     We add the vector to the coordinates of every node in the tree.
    */
    var nodes = Object.values(this.nodes);
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var loc = node.getCenter();
        node.setCenter(loc.x + vect[0], loc.y + vect[1]);
    }

    var c = void 0;
    if (growthDir == 3 || growthDir == 1) c = 0;else c = 1;
    this.lb = this.lb + vect[c];
    this.ub = this.ub + vect[c];

    var keys = Object.keys(this.boundsByRank);
    for (var _i4 = 0; _i4 < keys.length; _i4++) {
        var b = this.boundsByRank[keys[_i4]];
        this.boundsByRank[keys[_i4]] = [b[0] + vect[c], b[1] + vect[c]];
    }
};

tree.prototype.rotateTo = function (growthDir) {
    /*
    :param growthDir: a cardinal Compass direction
    :return: nothing
     We rotate the tree around (0,0) so that it grows in the given direction.
    We assume that by now the tree's this.growthDir has been defined.
    If not, we raise an exception!
    */

    var r = this.c.getRotationFunction(this.growthDir, growthDir);

    var allNodes = Object.values(this.nodes);
    for (var i = 0; i < allNodes.length; i++) {
        var node = allNodes[i];

        //this function returns the new x and y coordinates of the node after rotation
        var newLoc = r([node.getCenterX(), node.getCenterY()]);
        node.setCenter(newLoc[0], newLoc[1]);
    }
    this.growthDir = growthDir;
};

tree.prototype.getBounds = function (rank, nodeSep) {
    var bds = void 0;
    if (this.boundaryInfinite) {
        if (this.boundaryTight) {
            bds = this.boundsByRank[rank];
            if (bds == null) bds = [0, 0];
        } else bds = [this.lb, this.ub];
    } else {
        bds = this.boundsByRank[rank];
        if (!(this.boundaryTight && bds != null)) bds = [this.lb, this.ub];
    }
    var h = nodeSep;
    if (bds != null) bds = [bds[0] - h, bds[1] + h];
    return bds;
};

tree.prototype.setRank = function (node, rank) {
    //storing nodes by order of their rank
    //root node has the smallest rank

    this.rankByNodeid[node.id] = rank;
    var r = this.nodesByRank[rank];

    //if there is no node of the current rank, create a new rank container to store it
    if (r == undefined) r = [];

    r.push(node);
    this.nodesByRank[rank] = r;
};

tree.prototype.getCTrees = function () {
    /*
    The "C-Trees" are the connected components of the graph obtained
    by deleting the root node of this tree.
     But for functional C-Trees we don't actually need to delete any
    nodes, we just need to make sure the new Trees have the right root
    node, depth, breadth, and mapping from rank to nodes in that rank.
    The set of leaves is the same, since being in the subtree and
    being a leaf of the original tree are together equivalent to
    being a leaf of the subtree.
    */
    var cTrees = [];
    var children = this.root.getNeighbors();
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (this.nodes[child.id] != undefined) {
            var t = new tree(this.graph, child, this.root);
            cTrees.push(t);
        }
    }
    return cTrees;
};

tree.prototype.leavesOfRank = function (rank) {
    var leaves = [];
    var nodes = this.nodesByRank[rank];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.id in this.leaves) leaves.push(node);
    }
    return leaves;
};

tree.prototype.nonleavesOfRank = function (rank) {
    var leaves = [];
    var nodes = this.nodesByRank[rank];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (!(node.id in this.leaves)) leaves.push(node);
    }
    return leaves;
};

tree.prototype.computeIsomString = function () {
    /*
    Compute a string which uniquely represents the
    isomorphism class of this tree.
    This is the core idea from Manning & Atallah 1985.
    */

    var isomNumber = {};
    var isomTuple = {};
    var isomTupleString = {};
    var levelIsomStrings = [];

    // Assign isomNumber 0 to all leaves.
    var leaves = Object.keys(this.leaves);
    for (var i = 0; i < leaves.length; i++) {
        var id = leaves[i];
        isomNumber[id] = 0;
    }

    // Let deepestLeaves be a list of the deepest leaves.
    var depth = this.depth;
    var deepestLeaves = this.leavesOfRank(depth - 1);

    // Compute the isomstring for each level.
    for (var r = depth - 2; r > -1; r--) {
        var compareSecondColumn = function compareSecondColumn(a, b) {
            if (a[1] === b[1]) {
                return 0;
            } else {
                return a[1] < b[1] ? -1 : 1;
            }
        };

        var nonLeaves = this.nonleavesOfRank(r);
        for (var _i5 = 0; _i5 < nonLeaves.length; _i5++) {
            var node = nonLeaves[_i5];
            isomTuple[node.id] = [];
        }

        // For each leaf v in deepestLeaves, insert its number into
        // the tuple of its parent node.
        for (var _i6 = 0; _i6 < deepestLeaves.length; _i6++) {
            var leaf = deepestLeaves[_i6];
            var parent = this.parent[leaf.id];
            var num = isomNumber[leaf.id];
            isomTuple[parent.id].push(num);
        }

        // Create strings for isomTuples.
        for (var _i7 = 0; _i7 < nonLeaves.length; _i7++) {
            var _node = nonLeaves[_i7];
            var val = isomTuple[_node.id];

            //sort in ascending order
            var sorted = val.sort(function (a, b) {
                return a - b;
            });

            //convertng list to string
            isomTupleString[_node.id] = sorted.join(",");
        }

        // Sort the nonleaves of rank r by tuple.
        //based on the values corresponding to each node in nonLeaves in isomTupleString, 
        //we sort the values of nonLeaves

        // nonLeaves.sort(key=lambda u: isomTupleString[u.id])
        var temp = [];
        for (var _i8 = 0; _i8 < nonLeaves.length; _i8++) {
            var _node2 = nonLeaves[_i8];
            temp.push([_node2, isomTupleString[_node2.id]]);
        }
        temp.sort(compareSecondColumn);

        ;

        //obtaining the sorted nonLeaves from the temp array
        nonLeaves = [];
        var str = [];
        for (var _i9 = 0; _i9 < temp.length; _i9++) {
            var _node3 = temp[_i9][0];
            nonLeaves.push(_node3);
            str.push(_node3.id);
        }

        // Now can write isom string for this level.
        levelIsomStrings.push(str.join(";"));

        // Compute next deepestLeaves.
        deepestLeaves = [];
        var nodesByTuple = {};
        for (var _i10 = 0; _i10 < nonLeaves.length; _i10++) {
            var _node4 = nonLeaves[_i10];
            str = isomTupleString[_node4.id];
            var arr = [];
            if (str in nodesByTuple) arr = nodesByTuple[str];
            arr.push(_node4);
            nodesByTuple[str] = arr;
        }

        var distinctTuples = Object.keys(nodesByTuple);
        distinctTuples.sort();
        for (var _i11 = 0; _i11 < distinctTuples.length; _i11++) {
            var t = distinctTuples[_i11];
            var nodes = nodesByTuple[t];
            for (var j = 0; j < nodes.length; j++) {
                var _node5 = nodes[j];
                isomNumber[_node5.id] = _i11 + 1;
                deepestLeaves.push(_node5);
            }
        }

        leaves = this.leavesOfRank(r);
        for (var _i12 = 0; _i12 < deepestLeaves.length; _i12++) {
            leaves.push(deepestLeaves[_i12]);
        }deepestLeaves = leaves;
    }
    // Join the level strings for the full tree string.
    return levelIsomStrings.join(":");
};

tree.prototype.createOrthogonalEdges = function (gm) {
    var edges = Object.values(this.edges);
    for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];
        var sourceLoc = void 0,
            targetLoc = void 0;
        var node1 = void 0,
            node2 = void 0;

        //round off the values to two digits for better results
        var edgeSrcX = Math.round(edge.source.getCenterX() * 100 + Number.EPSILON) / 100;
        var edgeSrcY = Math.round(edge.source.getCenterY() * 100 + Number.EPSILON) / 100;
        var edgeTgtX = Math.round(edge.target.getCenterX() * 100 + Number.EPSILON) / 100;
        var edgeTgtY = Math.round(edge.target.getCenterY() * 100 + Number.EPSILON) / 100;

        if (edgeSrcX == edgeTgtX) {
            continue;
        } else if (edgeSrcY == edgeTgtY) {
            continue;
        }

        //we take the node which is at the top as the source, and the lower one as the target
        var dir1 = void 0,
            dir2 = void 0;
        if (edgeSrcY < edgeTgtY) {
            sourceLoc = edge.source.getCenter();
            targetLoc = edge.target.getCenter();
            node1 = edge.source;
            node2 = edge.target;
        } else if (edgeSrcY > edgeTgtY) {
            sourceLoc = edge.target.getCenter();
            targetLoc = edge.source.getCenter();
            node2 = edge.source;
            node1 = edge.target;
        }

        if (sourceLoc == undefined) {
            var p = 4;
            var o = 6;
        }

        //determine the directions for the bendpoint
        if (sourceLoc.x > targetLoc.x) dir1 = 2;else dir1 = 0;
        //since source is definitely on top of target, hence dir2 will be downwards
        dir2 = 1;

        var bendpoint = { x: null, y: null };

        bendpoint.x = targetLoc.x;
        bendpoint.y = sourceLoc.y + (targetLoc.y - sourceLoc.y) / 2;

        edge.createBendPoint(bendpoint, dir1, dir2, node1, node2);
        gm.edgesWithBends.push(edge);

        console.log("making tree edges orthogonal");
        console.log(node1.id);
        console.log(node1.getCenter());
        console.log(node2.id);
        console.log(node2.getCenter());
        console.log(bendpoint);

        // console.log(edge.id);
        // console.log(edge.weight);
        // console.log(edge.distance);
        // console.log(sourceLoc);
        // console.log(targetLoc);
        // console.log(bendpoint);
    }
};

tree.prototype.symmetricLayout = function (growthDir, nodeSep, rankSep) {
    /*
    Alternative to the 'buildSymmetricTreeConstraints' method.
     Instead of computing symmetric tree constraints, you can just compute a symmetric
    layout.
     :growthDir: a compass direction, being a field of the Compass enum,
                e.g. Compass.NORTH
    :nodeSep: minimal gap between nodes on the same rank
    :rankSep: separation between ranks
    :return: nothing
    */
    // Save the growth direction.
    this.growthDir = growthDir;
    // Initialise root position to zero.
    this.root.setCenter(0, 0);
    // Initialise rank bounds to zero.
    for (var k = 0; k < this.depth; k++) {
        this.boundsByRank[k] = [0, 0];
    }

    var half = null;

    // Initialise rank 0 bounds for root node.
    if (growthDir == 3 || growthDir == 1) //if direction is north or south
        half = this.root.getWidth() / 2;else half = this.root.getHeight() / 2;

    this.lb = -half;
    this.ub = half;

    this.boundsByRank[0] = [this.lb, this.ub];

    // Leaves are simple.
    if (this.depth == 1) {
        this.isSymmetric = true;
        return;
    }

    // Proceed for nonleaves:
    var cTrees = this.getCTrees();

    // Layout the C-Trees, recursively.
    for (var i = 0; i < cTrees.length; i++) {
        cTrees[i].symmetricLayout(growthDir, nodeSep, rankSep);
    }

    // Sort the C-trees into isomorphism classes.
    var classes = new Object();
    for (var _i13 = 0; _i13 < cTrees.length; _i13++) {
        var t = cTrees[_i13];
        var isomstr = t.computeIsomString();
        //console.log(isomstr);

        var a = [];
        if (isomstr in classes) a = classes[isomstr];
        a.push(t);
        classes[isomstr] = a;
    }

    // Now sort the classes.
    var isoms = Object.keys(classes);
    function isomCmp(I, J) {
        var c = classes[I];
        var d = classes[J];
        var cd = c[0].depth;
        var dd = d[0].depth;
        var cb = c[0].breadth;
        var db = d[0].breadth;
        if (cb > db) return 1;else if (cb < db) return -1;else if (cd > dd) return 1;else if (cd < dd) return -1;
        // Otherwise just compare the isomorphism strings for some
        // way to make this relation deterministic.
        else if (I < J) return -1;else if (I > J) return 1;else return 0;
    };

    isoms.sort(isomCmp);
    // Which classes have odd order?
    var oddOrder = {};
    for (var _i14 = 0; _i14 < isoms.length; _i14++) {
        var val = isoms[_i14];
        var c = classes[val];
        if (c.length % 2 == 1) oddOrder[val] = c;
    }

    // Determine whether our layout is going to be symmetric or not.
    var numOdd = Object.values(oddOrder).length;
    var haveCentralTree = false;

    // If there are no odd-order classes, then we are symmetric.
    if (numOdd == 0) {
        this.isSymmetric = true;
    }
    // If there are two or more odd-order classes, then we are not symmetric.
    else if (numOdd > 1) {
            this.isSymmetric = false;
        }
        // Else there is exactly one odd-order class.
        // In this case we are symmetric if and only if (any representative of) the one
        // odd order class is symmetric.
        else {
                this.isSymmetric = Object.values(oddOrder)[0][0].isSymmetric;
                // For symmetric layout the trees of odd-order class need to go in the centre,
                // so we put them first in the list, since we work our way outward from the centre
                // when placing the trees.
                haveCentralTree = true;
                var oddIsom = Object.keys(oddOrder)[0];
                isoms.splice(isoms.indexOf(oddIsom), 1);
                isoms.unshift(oddIsom);
            }

    // Now place the c-trees alternating around the centre.
    // For this operation this tree must have "infinite boundary" at the
    // centre line. But we preserve the configured value and restore it
    // when we are done.
    var givenBoundaryInfiniteValue = this.boundaryInfinite;
    this.boundaryInfinite = true;
    var positiveNext = true;
    var mustPlaceCentralTree = haveCentralTree;
    var baseTrans = new Object({
        0: [rankSep, 0],
        1: [0, rankSep],
        2: [-rankSep, 0],
        3: [0, -rankSep]
    })[growthDir];

    var ns = nodeSep;
    for (var _i15 = 0; _i15 < isoms.length; _i15++) {
        var _val = isoms[_i15];
        var _c = classes[_val];
        for (var j = 0; j < _c.length; j++) {
            var _t = _c[j];
            if (mustPlaceCentralTree) {
                _t.translate(baseTrans, growthDir);
                var lb = 0;
                var ub = 0;
                for (var _k = 0; _k < this.depth; _k++) {
                    if (1 <= _k && _k <= _t.depth) {
                        var output = _t.boundsByRank[_k - 1];
                        var tlb = output[0];
                        var tub = output[1];
                        this.boundsByRank[_k] = [tlb, tub];
                        lb = Math.min(lb, tlb);
                        ub = Math.max(ub, tub);
                    }
                }
                mustPlaceCentralTree = false;
            } else {
                // Set up based on whether we're on the positive or
                // the negative side.
                var _a = positiveNext ? 1 : 0;
                var b = positiveNext ? 0 : 1;
                var rootPosChooser = positiveNext ? Math.max : Math.min;
                if (!positiveNext) _t.flip(growthDir);
                positiveNext = !positiveNext;

                // Compute the position where each rank would like the
                // root to go.
                var inf = _t.boundaryInfinite;
                _t.boundaryInfinite = true;
                var rootPosPerRank = [];
                for (var _k2 = 0; _k2 < _t.depth; _k2++) {
                    var value = this.getBounds(_k2 + 1, ns)[_a] - _t.getBounds(_k2, ns)[b];
                    rootPosPerRank.push(value);
                }

                _t.boundaryInfinite = inf;

                // Take max or min, according to which side we are on.
                //console.log(rootPosPerRank);
                var rootPos = rootPosChooser.apply(undefined, rootPosPerRank);
                //console.log(rootPos);

                // Compute the translation for the tree.
                var translation = void 0;
                if (growthDir == 1 || growthDir == 3) translation = [rootPos, baseTrans[1]];else translation = [baseTrans[0], rootPos];

                // Translate it.
                _t.translate(translation, growthDir);

                // Update upper bounds if a == 1, lower if a == 0.
                var extreme = 0;
                var bound = void 0;
                for (var _k3 = 0; _k3 < this.depth; _k3++) {
                    if (1 <= _k3 && _k3 <= _t.depth) {
                        bound = _t.boundsByRank[_k3 - 1][_a];
                        this.boundsByRank[_k3][_a] = bound;
                    } else bound = this.boundsByRank[_k3][_a];
                    extreme = rootPosChooser(extreme, bound);
                }

                if (_a == 1) this.ub = bound;else this.lb = bound;
            }
        }
    }

    // Restore configuration
    this.boundaryInfinite = givenBoundaryInfiniteValue;

    this.sortRankNodes(growthDir);
};

tree.prototype.sortRankNodes = function (dp) {
    //At this point, trees have been grown into the south direction
    //we sort the nodes of each rank from left to right according to their positions
    //this is done by sorting them in ascending order of their x values

    var ranks = Object.values(this.nodesByRank);
    for (var i = 1; i < ranks.length; i++) {
        var nodes = ranks[i];
        //for south, nodes are sorted from left to right
        if (dp == 1) {
            nodes.sort(function (a, b) {
                return a.getCenterX() - b.getCenterX();
            });
        }
        //for west, nodes are sorted from top to bottom
        else if (dp == 2) {
                nodes.sort(function (a, b) {
                    return a.getCenterY() - b.getCenterY();
                });
            }
            //for north, nodes are sorted from right to left
            else if (dp == 3) {
                    nodes.sort(function (a, b) {
                        return b.getCenterX() - a.getCenterX();
                    });
                }
                //for east, nodes are sorted from bottom to top
                else if (dp == 0) {
                        nodes.sort(function (a, b) {
                            return b.getCenterY() - a.getCenterY();
                        });
                    }

        this.nodesByRank[i] = nodes;
    }
};

module.exports = tree;

/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
});
