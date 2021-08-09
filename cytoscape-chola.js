(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cose-base"), require("layout-base"));
	else if(typeof define === 'function' && define.amd)
		define(["cose-base", "layout-base"], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeChola"] = factory(require("cose-base"), require("layout-base"));
	else
		root["cytoscapeChola"] = factory(root["coseBase"], root["layoutBase"]);
<<<<<<< HEAD
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__10__) {
=======
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__11__) {
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cholaLayout = __webpack_require__(3);
<<<<<<< HEAD
var assign = __webpack_require__(11);
var fs = __webpack_require__(12);

var defaults = Object.freeze({

=======
var HashMap = __webpack_require__(4).layoutBase.HashMap;
var assign = __webpack_require__(24);
var cholaConstants = __webpack_require__(5);
var tree = __webpack_require__(25);
var fs = __webpack_require__(26);

var defaults = Object.freeze((_Object$freeze = {

>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
  quality: 'default',
  // use random node positions at beginning of layout
  // if this is set to false, then quality option must be "proof"
  randomize: false,
  // whether or not to animate the layout
  animate: 'end',
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
<<<<<<< HEAD
  nodeRepulsion: 4500,
  // Ideal edge (non nested) length
  idealEdgeLength: 100,
  // Divisor to compute edge forces
  edgeElasticity: 0.45,
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 0.1,
  // Gravity force (constant)
  gravity: 0.25,
  // Maximum number of iterations to perform
  numIter: 2500,
  // For enabling tiling
  tile: false,
  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingVertical: 10,
  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingHorizontal: 10,
  // Gravity range (constant) for compounds
  gravityRangeCompound: 1.5,
  // Gravity force (constant) for compounds
  gravityCompound: 1.0,
  // Gravity range (constant)
  gravityRange: 3.8,
  // Initial cooling factor for incremental layout
  initialEnergyOnIncremental: 0.5
});

var Layout = function () {
  function Layout(options) {
    _classCallCheck(this, Layout);
=======
  nodeRepulsion: 4500
}, _defineProperty(_Object$freeze, 'animate', 'end'), _defineProperty(_Object$freeze, 'animationDuration', 500), _defineProperty(_Object$freeze, 'idealEdgeLength', 50), _defineProperty(_Object$freeze, 'edgeGap', 50), _defineProperty(_Object$freeze, 'edgeElasticity', 0.45), _defineProperty(_Object$freeze, 'nestingFactor', 0.1), _defineProperty(_Object$freeze, 'gravity', 0.25), _defineProperty(_Object$freeze, 'numIter', 2500), _defineProperty(_Object$freeze, 'tile', false), _defineProperty(_Object$freeze, 'tilingPaddingVertical', 10), _defineProperty(_Object$freeze, 'tilingPaddingHorizontal', 10), _defineProperty(_Object$freeze, 'gravityRangeCompound', 1.5), _defineProperty(_Object$freeze, 'gravityCompound', 1.0), _defineProperty(_Object$freeze, 'gravityRange', 3.8), _defineProperty(_Object$freeze, 'initialEnergyOnIncremental', 0.5), _defineProperty(_Object$freeze, 'maxNodeDimension', 0), _defineProperty(_Object$freeze, 'fixedNodeConstraint', undefined), _defineProperty(_Object$freeze, 'alignmentConstraint', undefined), _defineProperty(_Object$freeze, 'relativePlacementConstraint', undefined), _defineProperty(_Object$freeze, 'verticalAlignment', []), _defineProperty(_Object$freeze, 'horizontalAlignment', []), _defineProperty(_Object$freeze, 'relativeAlignment', []), _defineProperty(_Object$freeze, 'placementDict', {}), _defineProperty(_Object$freeze, 'compoundEdgeBends', undefined), _defineProperty(_Object$freeze, 'normalEdgeBends', undefined), _defineProperty(_Object$freeze, 'graphOutput', false), _defineProperty(_Object$freeze, 'debug', false), _defineProperty(_Object$freeze, 'ready', function ready() {}), _defineProperty(_Object$freeze, 'stop', function stop() {}), _Object$freeze));

var chola = function () {
  function chola(options) {
    _classCallCheck(this, chola);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    this.options = assign({}, defaults, options);
    this.idList = [];
    this.cholaNodeToCoseNode = {};
    this.cyNodesMap = {};
    this.cyEdgesMap = {};
    this.cholaIdToLNode = {};
    this.coseIdToLNode = {};
    this.cholaNodesMap = {};
    this.cholaEdgesMap = {};
  }

  _createClass(Layout, [{
    key: 'run',
    value: function run() {
<<<<<<< HEAD
      var _this = this;

      var cholaIdToLNode = this.cholaIdToLNode;
      var coseIdToLNode = this.coseIdToLNode;
      var cyNodesMap = this.cyNodesMap;
      var cyEdgesMap = this.cyEdgesMap;
=======
      var cholaIdToLNode = this.cholaIdToLNode = {};
      var coseIdToLNode = this.coseIdToLNode = {};
      var cholaNodesMap = this.cholaNodesMap;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
      var options = this.options;
      var cholaNodesMap = this.cholaNodesMap;
      var cholaEdgesMap = this.cholaEdgesMap;

      var layout = this.layout = new cholaLayout(options);
      var self = this;

<<<<<<< HEAD
      cy = this.options.cy;
      cy.trigger({ type: 'layoutstart', layout: this });

      var gm = layout.newGraphManager();

      var nodes = cy.nodes();
      var edges = cy.edges();

      if (nodes.length < 2 || edges.length == 0) return;
=======
      cyfinal = this.options.cy;
      cyfinal.trigger({ type: 'layoutstart', layout: this });

      var gm = layout.newGraphManager();

      var nodes = cyfinal.nodes();
      var edges = cyfinal.edges();

      if (nodes.length == 0 || edges.length == 0) return;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

      //we get the nodes which are parent nodes or do not have a parent node above them
      var topMostNodes = layout.getTopMostNodes(nodes, cyNodesMap);
      layout.processChildrenList(this.options, gm.addRoot(), topMostNodes, layout, "chola", cholaIdToLNode);
      layout.processEdges(layout, gm, edges, cholaIdToLNode, cyEdgesMap, cholaEdgesMap);

      //set the parents of the nodes
      layout.setParents(gm);

      this.options.compoundEdgeBends = [];
      this.options.normalEdgeBends = [];

      //set the parents of the nodes
      layout.setParents(gm);

      //finds and saves the compound nodes
      var compoundNodes = gm.findCompoundNodes();

      //visualizes the layout in cytoscape map
      var getPositions = function getPositions(ele, i) {
        if (typeof ele === "number") {
          ele = i;
        }
        var theId = ele.data('id');
        //take the chola node
        var lNode = self.cholaIdToLNode[theId];
<<<<<<< HEAD
=======
        console.log(theId);
        console.log(lNode.getCenter());
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

        return {
          x: lNode.getRect().getCenterX(),
          y: lNode.getRect().getCenterY()
        };
      };

      var allCholaNodes = Object.assign({}, gm.getAllNodes());

<<<<<<< HEAD
      options.randomize = true;
      //first apply cose as layout of the core
      var coseLayout = layout.coseOnCore(options, coseIdToLNode, this.cholaNodeToCoseNode, topMostNodes);

      options.randomize = false;
=======
      var parentList = {};

      //removes the leaf nodes and return the graph components
      var prunedNodes = [];
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
        var _allNodes = Object.values(t.nodes);
        for (var i = 0; i < _allNodes.length; i++) {
          var treeNode = _allNodes[i];
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

      //core graph manager
      var coreGm = c[0];
      c.shift();
      var treeGraphs = c;

      // // applying cose on the core
      var coseLayout = layout.coseOnCore(options, coseIdToLNode, cholaNodesMap, this.cholaEdgesMap, this.cholaNodeToCoseNode, this.cholaEdgeToCoseEdge);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

      //Reflect changes back to chola nodes
      var cholaNodes = gm.getAllNodes();
      for (var i = 0; i < cholaNodes.length; i++) {
        var cholaNode = cholaNodes[i];
        var coseNode = this.cholaNodeToCoseNode[cholaNode.id];

        if (cholaNode.isCompound()) {
          //for compounds, widths and heights are also updated because they change after applying cose
          //weight, height are updated before updating center bcz doing the opposite changes location of the compound node
          cholaNode.setWidth(coseNode.getWidth());
          cholaNode.setHeight(coseNode.getHeight());
        }
        var loc = coseNode.getCenter();
        cholaNode.setCenter(loc.x, loc.y);
      }

<<<<<<< HEAD
      cyCose.nodes().not(":parent").layoutPositions(this, this.options, getPositions);

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //PLANARIZATION:

      var oldGm;

      if (compoundNodes.length > 0) {
        oldGm = gm;
        layout.convertToSimpleGraph(gm, compoundNodes);
        gm = layout.graphManager;
      }

      //find edge crossings in the graph and replace them with a dummy node
      allEdges = gm.getAllEdges();
      var edgeCrosses = layout.findEdgeCrosses(allEdges, allEdges);

      //create dummy nodes for edge crossings
      var edgeSplitDict = {};
      var dummyNodes = layout.createDummiesForCrossings(gm, edgeCrosses, edgeSplitDict);

      //package data to send to the python server
      //python code needs the nodes ids and their positions and the (src,tgt) data of edges to reconstruct the graph
      //so we will create an object to store all of this data
      var nodeDict = {};
      var graphData = { nodes: {}, edges: [] };
      var allNodes = gm.getAllNodes();
      for (var _i = 0; _i < allNodes.length; _i++) {
        var node = allNodes[_i];
        nodeDict[node.id] = node;
        graphData.nodes[node.id] = [node.getCenterX(), node.getCenterY()];
      }

      var allEdges = gm.getAllEdges();
      for (var _i2 = 0; _i2 < allEdges.length; _i2++) {
        var edge = allEdges[_i2];
        graphData.edges.push([edge.source.id, edge.target.id]);
      }

      console.log("Sending the following data:");
      console.log(graphData);

      //now this jsonData has to be sent to the python server
      fetch('/tsm/', {
        method: "POST",
        body: JSON.stringify(graphData)
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        var output = JSON.parse(result);
        console.log(result);

        var nodes = output['nodes'];
        var bendData = output['bends'];

        //change the values of the positions obtained from python 
        for (var key in nodes) {
          var pos = nodes[key];
          pos[0] = pos[0] * options.idealEdgeLength;
          pos[1] = pos[1] * -1 * options.idealEdgeLength;
=======
      var allNodes = cy.nodes();
      for (var _i3 = 0; _i3 < allNodes.length; _i3++) {
        if (!(parentList[allNodes[_i3].id()] == undefined)) allNodes[_i3].css("display", "none");
      }

      cy.nodes().not(":parent").layoutPositions(this, this.options, getPositions);

      output = layout.getHighDegreeNodes(coreGm);
      var highDegreeNodes = output[0];
      var oneDegreeNodes = output[1];

      options.relativeAlignment = [];
      options.verticalAlignment = [];
      options.horizontalAlignment = [];

      var constraintLayout = function constraintLayout(coreGm, coseLayout, options, turn) {
        // // applying cose on the core
        coseLayout = layout.constraintCoseLayout(coreGm, coseLayout, options, turn);

        var cholaNodesDict = {};

        // Reflect changes back to chola nodes
        var cholaNodes = coreGm.getAllNodes();
        for (var _i4 = 0; _i4 < cholaNodes.length; _i4++) {
          var _cholaNode = cholaNodes[_i4];
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

      // allNodes = gm.getAllNodes();
      // for (let i = 0; i < allNodes.length; i++)
      // {
      //   let node = allNodes[i];
      //   let locX = node.getCenterX();
      //   let locY = node.getCenterY();
      //   node.setCenter(locX*2, locY*2);
      // }

      //creating orthogonal layout for higher degree nodes

      layout.higherNodesConfiguration(coreGm, highDegreeNodes, options);

      //let nodesDict = constraintLayout(coreGm, coseLayout, options, 0);

      console.log(cyHD.nodes());

      allNodes = cyHD.nodes();
      for (var _i5 = 0; _i5 < allNodes.length; _i5++) {
        if (!(parentList[allNodes[_i5].id()] == undefined)) allNodes[_i5].css("display", "none");
      }

      cyHD.nodes().not(":parent").layoutPositions(this, this.options, getPositions);

      // return;


      var nodesDict = constraintLayout(coreGm, coseLayout, options, 0);

      allNodes = cyHDConstraint.nodes();
      for (var _i6 = 0; _i6 < allNodes.length; _i6++) {
        if (!(parentList[allNodes[_i6].id()] == undefined)) allNodes[_i6].css("display", "none");
      }

      cyHDConstraint.nodes().not(":parent").layoutPositions(this, this.options, getPositions);

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

      allNodes = cyChains.nodes();
      for (var _i7 = 0; _i7 < allNodes.length; _i7++) {
        if (!(parentList[allNodes[_i7].id()] == undefined)) allNodes[_i7].css("display", "none");
      }

      cyChains.nodes().not(":parent").layoutPositions(this, this.options, getPositions);

      //create adjusted bendpoints for cholaedges from cose
      var cholaEdges = coreGm.edgesWithBends;
      for (var _i8 = 0; _i8 < cholaEdges.length; _i8++) {
        var _cholaEdge = cholaEdges[_i8];
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
      for (var _i9 = 0; _i9 < coreGm.edgesWithBends.length; _i9++) {
        var edge = coreGm.edgesWithBends[_i9];
        edgesWithBends.push([edge.id, edge.source, edge.target, edge.bendpoints]);
      }

      //create dummy points for new edges with bends in cose
      layout.createDummyNodesAndEdges(this.cholaNodeToCoseNode, edgeToDummyNodes, newEdgesWithBends, coseLayout, this.cholaEdgeToCoseEdge, options);

      //introduce dummy nodes at each bendpoints
      var cholaEdgeToDummyNodes = void 0;
      cholaEdgeToDummyNodes = layout.removeEdgeOverlaps(coreGm, coseLayout, this.cholaNodeToCoseNode, this.cholaEdgeToCoseEdge);

      constraintLayout(coreGm, coseLayout, options, 2);

      // allNodes = cyPlan.nodes();
      // for (let i = 0; i < allNodes.length; i++)
      // {
      //   if (!(parentList[allNodes[i].id()] == undefined))
      //       allNodes[i].css("display", "none");
      // }

      // cyTrees.nodes().not(":parent").layoutPositions(this, this.options, getPositions);


      //apply symmetric layout to the trees
      var trees = [];
      var growthDir = cholaConstants.DEFAULT_TREE_DIREC;
      for (var _i10 = 0; _i10 < treeGraphs.length; _i10++) {
        var g = treeGraphs[_i10];
        var _t = new tree(g, g.rootNode);
        trees.push(_t);
        _t.symmetricLayout(growthDir, options.edgeGap, 1.5 * options.edgeGap);

        //replicate the changes back to the original gm
        var _allNodes2 = Object.values(_t.nodes);
        for (var _i11 = 0; _i11 < _allNodes2.length; _i11++) {
          var _treeNode = _allNodes2[_i11];
          if (_t.root == _treeNode) continue;
          var _node = cholaIdToLNode[_treeNode.id];
          var _treeNodeLoc = _treeNode.getLocation();
          _node.setLocation(_treeNodeLoc.x, _treeNodeLoc.y);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
        }

<<<<<<< HEAD
        //Reflect changes back to chola nodes
        var cholaNodes = gm.getAllNodes();
        for (var _i3 = 0; _i3 < cholaNodes.length; _i3++) {
          var _cholaNode = cholaNodes[_i3];
          if (_cholaNode.isCompound()) continue;

          var newPos = nodes[_cholaNode.id];
          _cholaNode.setCenter(newPos[0], newPos[1]);
        }

        var edgesWithBends = layout.extractBends(bendData, nodeDict, nodes);
        layout.createBendpoints(edgesWithBends, gm);
=======
      //adding trees back to the graphs
      layout.reAttachTrees(coreGm, trees, options, cholaIdToLNode, parentList);

      var cholaNodesDict = constraintLayout(coreGm, coseLayout, options, 3);

      cyTrees.nodes().not(":parent").layoutPositions(this, this.options, getPositions);

      for (var _i12 = 0; _i12 < trees.length; _i12++) {
        var _t2 = trees[_i12];
        var _nodes = Object.values(_t2.nodes);
        if (_nodes.length > 2) {
          //transfer the positions after constraint layout back to the tree nodes
          for (var _k = 0; _k < _nodes.length; _k++) {
            var _treeNode2 = _nodes[_k];
            var _cholaNode2 = cholaNodesDict[_treeNode2.id];

            var cholaLocX = _cholaNode2.getCenterX();
            var cholaLocY = _cholaNode2.getCenterY();
            _treeNode2.setCenter(cholaLocX, cholaLocY);
          }
          _t2.createOrthogonalEdges(coreGm);
        }
      }

      //replace dummy nodes and edges of cholagm with edges with bendpoints
      for (var _i13 = 0; _i13 < edgesWithBends.length; _i13++) {
        var cholaEdgeId = edgesWithBends[_i13][0];
        var source = edgesWithBends[_i13][1];
        var target = edgesWithBends[_i13][2];
        var bendpoints = edgesWithBends[_i13][3];
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

        layout.compactGraph(gm);

        if (oldGm != undefined) {
          //Reflect changes back to actual chola nodes
          cholaNodes = oldGm.getAllNodes();
          for (var _i4 = 0; _i4 < cholaNodes.length; _i4++) {
            var _cholaNode2 = cholaNodes[_i4];

            if (_cholaNode2.isCompound()) continue;

            var _newPos = nodes[_cholaNode2.id];
            _cholaNode2.setCenter(_newPos[0], _newPos[1]);
          }
        }

        layout.removeDummiesAndCreateBends(gm, bendData, nodeDict, nodes, edgeSplitDict, dummyNodes);

        //Last step: finally create edges with bends in cytoscape
        var cholaEdges2 = gm.edgesWithBends;
        for (var _i5 = 0; _i5 < cholaEdges2.length; _i5++) {
          var copyBps = function copyBps(edge1, edge2) {
            if (edge2.bendpoints.length == 0) edge2.bendpoints = edge1.bendpoints;else {
              for (var j = 0; j < edge1.bendpoints.length; j++) {
                edge2.bendpoints.push(edge1.bendpoints[j]);
              }
            }
          };

          var cholaEdge = cholaEdges2[_i5];
          var cyEdge = cyEdgesMap[cholaEdge.id];

          if (cyEdge != undefined) {
            cyEdge.css("curve-style", "segments");
            cyEdge.css("segment-weights", cholaEdge.weight);
            cyEdge.css("segment-distances", cholaEdge.distance);
            if (oldGm != undefined) {
              var _edge = cholaEdgesMap[cholaEdge.id];
              copyBps(cholaEdge, _edge);
            }
          } else {
            var source = cholaEdge.source;
            var target = cholaEdge.target;

            var _edge2 = void 0;
            if (source.isDummy && source.dummyOwner.isCompound() && !target.isDummy) {
              _edge2 = source.dummyOwner.findEdgeBetween(cholaIdToLNode[target.id]);
            } else if (target.isDummy && target.dummyOwner.isCompound() && !source.isDummy) {
              _edge2 = target.dummyOwner.findEdgeBetween(cholaIdToLNode[source.id]);
            } else if (source.isDummy && source.dummyOwner.isCompound() || target.isDummy && target.dummyOwner.isCompound()) {
              _edge2 = source.dummyOwner.findEdgeBetween(target.dummyOwner);
            } else {
              continue;
            }

            if (_edge2 == null) continue;

            copyBps(cholaEdge, _edge2);

            _edge2.sourcePoint = cholaEdge.source.getCenter();
            _edge2.targetPoint = cholaEdge.target.getCenter();
          }
        }

<<<<<<< HEAD
        cy.nodes().not(":parent").layoutPositions(_this, _this.options, getPositions);
=======
        //now create an edge with bendpoint at dummy node location
        var _edge = coreGm.add(coreGm.getLayout().newEdge(), source, target);
        _edge.id = cholaEdgeId;
        var value = bendpoints[0];
        _edge.bendpoints.push([_bendpoint, value[1], value[2]]);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

        if (oldGm != undefined) {
          gm = oldGm;

<<<<<<< HEAD
          layout.reshapeCompounds(compoundNodes, cyNodesMap);

          // now creating bendpoints for edges connected with compound nodes
          var compoundEdges = layout.createOrthogonalEdges2(gm, nodes);
          for (var _i6 = 0; _i6 < compoundEdges.length; _i6++) {
            var _edge3 = compoundEdges[_i6];
            var _cyEdge = cyEdgesMap[_edge3.id];

            // console.log("working on compound node edge:");
            // console.log(edge.id);

            if (_edge3.bendpoints.length > 0) {
              _cyEdge.css("curve-style", "segments");
              _cyEdge.css("segment-weights", _edge3.weight);
              _cyEdge.css("segment-distances", _edge3.distance);
            }

            if (_edge3.sourcePort != null) {
              var relativePos1 = _edge3.source.getRelativeRatiotoNodeCenter(_edge3.sourcePort);
              _cyEdge.style({ 'source-endpoint': +relativePos1.x + "% " + +relativePos1.y + '%' });
              var relativePos2 = _edge3.target.getRelativeRatiotoNodeCenter(_edge3.targetPort);
              _cyEdge.style({ 'target-endpoint': +relativePos2.x + "% " + +relativePos2.y + '%' });
            }
          }
        }
      });
=======
        coreGm.edgesWithBends.push(_edge);
      }

      coreGm.resetAllEdges();
      coreGm.getAllEdges();

      //updating the positions, widths and heights of the compounds nodes
      //FUTURE FIX: MAKE IT WORK FOR LABELS
      layout.updateCompoundDimensions(compoundNodes);

      //now creating bendpoints for edges connected with compound nodes
      var compoundEdges = layout.createOrthogonalEdges(coreGm, 2);
      for (var _i14 = 0; _i14 < compoundEdges.length; _i14++) {
        var _edge3 = compoundEdges[_i14];
        var _bendpoints = _edge3.bendpoints;
        for (var _k2 = 0; _k2 < cyfinal.edges().length; _k2++) {
          var _cyEdge = cyfinal.edges()[_k2];
          if (_edge3.id == _cyEdge.id()) {
            var relativePos1 = _edge3.source.getRelativeRatiotoNodeCenter(_edge3.sourcePort);
            _cyEdge.style({ 'source-endpoint': +relativePos1.x + "% " + +relativePos1.y + '%' });
            var relativePos2 = _edge3.target.getRelativeRatiotoNodeCenter(_edge3.targetPort);
            _cyEdge.style({ 'target-endpoint': +relativePos2.x + "% " + +relativePos2.y + '%' });
            options.compoundEdgeBends.push([_cyEdge, relativePos1, relativePos2]);
          }
        }
      }

      //Last step: finally create edges with bends in cytoscape
      var cholaEdges2 = coreGm.edgesWithBends;
      for (var _i15 = 0; _i15 < cholaEdges2.length; _i15++) {
        var _cholaEdge2 = cholaEdges2[_i15];
        for (var _k3 = 0; _k3 < cyfinal.edges().length; _k3++) {
          var _cyEdge2 = cyfinal.edges()[_k3];
          if (_cholaEdge2.id == _cyEdge2.id()) {
            _cyEdge2.css("curve-style", "segments");
            _cyEdge2.css("segment-weights", _cholaEdge2.weight);
            _cyEdge2.css("segment-distances", _cholaEdge2.distance);
            options.normalEdgeBends.push([_cyEdge2, _cholaEdge2.weight, _cholaEdge2.distance]);
            break;
          }
        }
      }

      cyfinal.nodes().not(":parent").layoutPositions(this, this.options, getPositions);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
    }
  }]);

  return Layout;
}();

module.exports = Layout;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

var CoSELayout = __webpack_require__(4).CoSELayout;
var CoSEConstants = __webpack_require__(4).CoSEConstants;
var CoSENode = __webpack_require__(4).CoSENode;
var LayoutConstants = __webpack_require__(4).layoutBase.LayoutConstants;
var FDLayoutConstants = __webpack_require__(4).layoutBase.FDLayoutConstants;
<<<<<<< HEAD
var cc = __webpack_require__(5);
var cholaGraphManager = __webpack_require__(6);
var cholaNode = __webpack_require__(7);
var cholaEdge = __webpack_require__(8);
var cholaGraph = __webpack_require__(9);
var PointD = __webpack_require__(4).layoutBase.PointD;
var DimensionD = __webpack_require__(4).layoutBase.DimensionD;
var Layout = __webpack_require__(10).Layout;
var HashMap = __webpack_require__(4).layoutBase.HashMap;
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

// Constructor
function cholaLayout(options) {
  Layout.call(this);
  this.dummyNodes = [];
  this.options = options;
  this.maxNodeDimension;
}

cholaLayout.prototype = Object.create(Layout.prototype);

for (var property in Layout) {
  cholaLayout[property] = Layout[property];
}

cholaLayout.prototype.defineCoseConstants = function (options) {
  if (options.nodeRepulsion != null) CoSEConstants.DEFAULT_REPULSION_STRENGTH = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = options.nodeRepulsion;
<<<<<<< HEAD
  if (options.idealEdgeLength != null) CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength;;
=======
  if (options.idealEdgeLength != null) CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength; // + options.maxNodeDimension;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
  if (options.edgeElasticity != null) CoSEConstants.DEFAULT_SPRING_STRENGTH = FDLayoutConstants.DEFAULT_SPRING_STRENGTH = options.edgeElasticity;
  if (options.nestingFactor != null) CoSEConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = options.nestingFactor;
  if (options.gravity != null) CoSEConstants.DEFAULT_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = options.gravity;
  if (options.numIter != null) CoSEConstants.MAX_ITERATIONS = FDLayoutConstants.MAX_ITERATIONS = options.numIter;
  if (options.gravityRange != null) CoSEConstants.DEFAULT_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = options.gravityRange;
  if (options.gravityCompound != null) CoSEConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = options.gravityCompound;
  if (options.gravityRangeCompound != null) CoSEConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = options.gravityRangeCompound;
  if (options.initialEnergyOnIncremental != null) CoSEConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = options.initialEnergyOnIncremental;

  LayoutConstants.QUALITY = 1;

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

cholaLayout.prototype.getTopMostNodes = function (nodes, cyNodesMap) {
  var nodesMap = {};

  for (var i = 0; i < nodes.length; i++) {
    nodesMap[nodes[i].id()] = true;
    cyNodesMap[nodes[i].id()] = nodes[i];
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

cholaLayout.prototype.processChildrenList = function (options, parent, children, layout, layoutType, idToLNode, cholaNodeToCoseNode) {
  var size = children.length;
  var includeLabelsOption = options.nodeDimensionsIncludeLabels;

  for (var i = 0; i < size; i++) {
    var theNode;
    var theChild = children[i];
    var children_of_children = theChild.children();
    var dimensions = theChild.layoutDimensions({ nodeDimensionsIncludeLabels: includeLabelsOption });

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
      var theNewGraph = layout.getGraphManager().add(layout.newGraph(), theNode);
      this.processChildrenList(options, theNewGraph, children_of_children, layout, layoutType, idToLNode, cholaNodeToCoseNode);
    }
  }
};

cholaLayout.prototype.setParents = function (gm) {
<<<<<<< HEAD
  var allNodes = gm.getAllNodes();
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

  for (var i = 0; i < allNodes.length; i++) {
    var _cholaNode = allNodes[i];
    if (_cholaNode.owner.parent.id != undefined) {
      _cholaNode.parentNode = _cholaNode.owner.parent;
    }
  }
};

<<<<<<< HEAD
function isFn(fn) {
  return typeof fn === 'function';
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
};

function optFn(opt, ele) {
  if (isFn(opt)) {
    return opt(ele);
  } else {
    return opt;
  }
};

// transfer cytoscape edges to chola edges
cholaLayout.prototype.processEdges = function (layout, gm, edges, idToLNode, cyEdgesMap, cholaEdgesMap) {
  var idealLengthTotal = 0;
  var edgeCount = 0;
  var cholarun = false;

  if (cyEdgesMap) cholarun = true;

  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    var sourceNode = idToLNode[edge.data("source")];
    var targetNode = idToLNode[edge.data("target")];
<<<<<<< HEAD

    if (cholarun) cyEdgesMap[edge.id()] = edge;

    if (sourceNode !== targetNode) {
      if (sourceNode.getEdgesBetween(targetNode).length == 0) {
        var e = gm.add(layout.newEdge(), sourceNode, targetNode);
        e.id = edge.id();
        e.idealLength = optFn(this.options.idealEdgeLength, edge);
        e.edgeElasticity = optFn(this.options.edgeElasticity, edge);
        e.width = parseInt(edge.css('width'));

        idealLengthTotal += e.idealLength;
        edgeCount++;

        if (cholaEdgesMap != null) cholaEdgesMap[e.id] = e;
=======
    if (sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length == 0) {
      var e = gm.add(layout.newEdge(), sourceNode, targetNode);
      e.id = edge.id();
      e.width = parseInt(edge.css('width'));
      if (layoutType == "chola") {
        cholaEdgesMap.put(e.id, e);
      } else {
        cholaEdgeToCoseEdge.put(cholaEdgesMap.get(e.id), e);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
      }
    }

    if (this.options.idealEdgeLength != null) {
      if (edges.length > 0) CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = idealLengthTotal / edgeCount;else if (!isFn(this.options.idealEdgeLength)) CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = this.options.idealEdgeLength;else CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;

      // we need to update these constant values based on the ideal edge length constant
      CoSEConstants.MIN_REPULSION_DIST = FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10.0;
      CoSEConstants.DEFAULT_RADIAL_SEPARATION = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
    }
  }
};

cholaLayout.prototype.coseOnCore = function (options, idToLNode, cholaNodeToCoseNode, topMostNodes) {
  // Create a CoSE layout object
  var coseLayout = new CoSELayout();

  this.defineCoseConstants(options);

  var gm = coseLayout.newGraphManager();
  this.coseGm = gm;

  var nodes = options.eles.nodes();
  var edges = options.eles.edges();
<<<<<<< HEAD

  this.processChildrenList(options, gm.addRoot(), topMostNodes, coseLayout, "cose", idToLNode, cholaNodeToCoseNode);
  this.processEdges(coseLayout, gm, edges, idToLNode);

  coseLayout.runLayout();
  return coseLayout;
};

=======
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

  console.log(options.relativeAlignment);
  console.log(options.alignmentConstraint);

  console.log(CoSEConstants.DEFAULT_INCREMENTAL);

  options.randomize = false;

  //options.relativePlacementConstraint = undefined;

  processConstraints(coseLayout, options);

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

      var bbox = void 0;

      if (turn == 1 && (source.isCompound() || target.isCompound())) continue;else if (turn == 2 && !source.isCompound() && !target.isCompound()) continue;

      //storing possible semi positions for source and target to create an edge with a bendpoint
      //possible direction (a,b,c) mean that the edge goes in a direction from the source,
      //b is the direction from target to bendpoint
      //c is the direction from bendpoint to target (opposide to b)
      var possibleDirections = [];
      var c = new compass();
      var dir = c.direction(source, target);
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
      var createBend = false;

      for (var k = 0; k < possibleDirections.length; k++) {
        option = possibleDirections[k];
        // console.log(source.id);
        // console.log(srcFreeLocs);
        // console.log(target.id);
        // console.log(tgtFreeLocs);
        // console.log(option);
        //if these locs are free for both src and target, then we create the edge with bend
        if (srcFreeLocs.includes(option[0]) && tgtFreeLocs.includes(option[1])) {
          // console.log("Creating bend");
          createBend = true;
          break;
        }
        //if the locs are not free, we do not create a bend
        else {
            // console.log("NOT Creating bend");
            createBend = false;
          }
      }

      var bendpoint = { x: null, y: null };

      //reset any bendpoints that the edge might have
      if (edge.bendpoints.length != null) edge.resetBendpoints(gm);

      if (!source.isCompound() && !target.isCompound()) {
        if (createBend) createBp = true;
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
                  edge.targetPort = { x: tgtBbox[0], y: tgtCenterY };
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
              xValues.sort(function (a, b) {
                return a - b;
              });

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
                yValues.sort(function (a, b) {
                  return a - b;
                });

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

          // console.log("source");
          // console.log(source.id);
          // console.log(source.getCenter());
          // console.log(source.getWidth());
          // console.log(source.getHeight());
          // console.log(srcBbox);
          // console.log(edge.sourcePort);

          // console.log("target");
          // console.log(target.id);
          // console.log(target.getCenter());
          // console.log(target.getWidth());
          // console.log(target.getHeight());
          // console.log(tgtBbox);
          // console.log(edge.targetPort);
          // console.log("_____________________");

          //break;
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

>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
cholaLayout.prototype.getMaxNodeDimension = function (gm) {
  var allNodes = gm.getAllNodes();
  var max = 0;

  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    var tempMax = Math.max(node.getWidth(), node.getHeight());

    if (!node.isCompound() & max < tempMax) max = tempMax;
  }

  this.maxNodeDimension = max;
  return max;
};

cholaLayout.prototype.extractBends = function (bendData, nodeDict, nodes) {
  var edgesWithBends = [];
  for (var i = 0; i < bendData.length; i++) {
    var row = bendData[i];

<<<<<<< HEAD
    var firstNode = nodeDict[row[0]];
    var lastNode = nodeDict[row[row.length - 1]];
=======
  // console.log("Higher Nodes Configuration");

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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    var edge = firstNode.findEdgeBetween(lastNode);

    var src = firstNode;
    if (edge.source.id != src.id) row.reverse();

    for (var j = 1; j < row.length - 1; j++) {
      var pos = nodes[row[j]];
      var bp = {
        x: pos[0],
        y: pos[1],
        id: row[j]
      };
      edge.bendpoints.push(bp);
    }

    // if (!edge.source.id.includes("cdnode") && !edge.target.id.includes("cdnode"))
    edgesWithBends.push(edge);
  }

  return edgesWithBends;
};

cholaLayout.prototype.deleteEdgeCrossings = function (edgeSplitDict, gm, edgesWithBends) {
  var edgesWithDummies = Object.values(edgeSplitDict);
  var edgeSplitsKeys = Object.keys(edgeSplitDict);

  for (var i = 0; i < edgesWithDummies.length; i++) {
    var edgeWithDummies = edgesWithDummies[i];

    if (edgeSplitsKeys[i].includes("cdnode")) continue;

    var len = edgeWithDummies.length;

    //first create a new edge between the original source and target
    var origEdgeId = edgeSplitsKeys[i];
    var src = edgeWithDummies[0].source;
    var tgt = edgeWithDummies[len - 1].target;

    var newEdge = gm.add(this.newEdge(), src, tgt);
    newEdge.id = origEdgeId;

    for (var j = 0; j < len; j++) {
      //take each split portion, and extract its bendpoints 
      var dummyEdge = edgeWithDummies[j];
      var bps = dummyEdge.bendpoints;

      //add the bendpoints to the original edge
      for (var k = 0; k < bps.length; k++) {
        newEdge.bendpoints.push(bps[k]);
      } //now delete the edge from graph
      var graph = gm.calcLowestCommonAncestor(dummyEdge.source, dummyEdge.target);
      graph.remove(dummyEdge);
    }

    if (newEdge.bendpoints.length > 0) edgesWithBends.push(newEdge);
  }
};

cholaLayout.prototype.deleteDummyNodes = function (dummyNodes) {
  for (var i = 0; i < dummyNodes.length; i++) {
    dummyNodes[i].owner.remove(dummyNodes[i]);
  }
};

cholaLayout.prototype.createBendpoints = function (edgesWithBends, gm) {
  for (var i = 0; i < edgesWithBends.length; i++) {
    var edge = edgesWithBends[i];
    edge.convertToRelativeBendPosition();
    gm.edgesWithBends.push(edge);
  }
};

cholaLayout.prototype.removeDummiesAndCreateBends = function (gm, bendData, nodeDict, nodes, edgeSplitDict, dummyNodes) {
  // let edgesWithBends = this.extractBends(bendData, nodeDict, nodes);
  var edgesWithBends = [];
  this.deleteEdgeCrossings(edgeSplitDict, gm, edgesWithBends);
  this.deleteDummyNodes(dummyNodes);

  gm.resetAllEdges();
  gm.resetAllNodes();
  gm.getAllEdges();
  gm.getAllNodes();

  this.createBendpoints(edgesWithBends, gm);
};

cholaLayout.prototype.reshapeCompounds = function (compoundNodes, cyNodesMap) {
  //if graph is a compound graph, we need to modify the height and width of the compound
  if (compoundNodes.length > 0) {
    for (var i = 0; i < compoundNodes.length; i++) {
      var node = compoundNodes[i];

      //find corners from the boundary
      var x1 = Number.MAX_VALUE;
      var x2 = Number.MIN_VALUE;
      var y1 = Number.MAX_VALUE;
      var y2 = Number.MIN_VALUE;

      for (var k = 0; k < node.boundaryList.length; k++) {
        var nodePosition = node.boundaryList[k].getCenter();
        if (nodePosition.x < x1) x1 = nodePosition.x;
        if (nodePosition.x > x2) x2 = nodePosition.x;
        if (nodePosition.y < y1) y1 = nodePosition.y;
        if (nodePosition.y > y2) y2 = nodePosition.y;
      }

      var center = {
        x: x1 + (x2 - x1) / 2,
        y: y1 + (y2 - y1) / 2
      };

      //now get the new width and the height of the compound
      var w = x2 - x1;
      var h = y2 - y1;

      //now find the compound node in cy
      var cyNode = cyNodesMap[node.id];

      var autoWidth = cyNode[0]._private.autoWidth;
      var autoHeight = cyNode[0]._private.autoHeight;

      cyNode.css("min-width", w);
      cyNode.css("min-height", h);

      var extraWidth = w - autoWidth;
      var extraHeight = h - autoHeight;

      //get current center of the cyNode
      var cyCenter = cyNode.position();

      //get percentages for up, down, left, right biases
      var leftBias = (cyCenter.x - autoWidth / 2 - x1) / extraWidth * 100;
      var rightBias = (x2 - autoWidth / 2 - cyCenter.x) / extraWidth * 100;
      var topBias = (cyCenter.y - autoHeight / 2 - y1) / extraHeight * 100;
      var bottomBias = (y2 - autoHeight / 2 - cyCenter.y) / extraHeight * 100;

      cyNode.css("min-width-bias-left", leftBias);
      cyNode.css("min-width-bias-right", rightBias);
      cyNode.css("min-height-bias-top", topBias);
      cyNode.css("min-height-bias-bottom", bottomBias);

      if (node.getParentNode() != null) {
        //NEED TO KEEP THIS OTHERWISE COMPOUND EDGES BECOME NON-ORTHOGONAL
        var p = cyNodesMap[node.getParentNode().id].position();
      }

      node.setWidth(cyNode.outerWidth());
      node.setHeight(cyNode.outerHeight());
      node.setCenter(center.x, center.y);
    }
  }
};

<<<<<<< HEAD
cholaLayout.prototype.direction = function (node1Loc, node2Loc) {
  var x1 = node1Loc.x;
  var x2 = node2Loc.x;
  var y1 = node1Loc.y;
  var y2 = node2Loc.y;
  var dx = x2 - x1;
  var dy = y2 - y1;

  var dir;
  if (dx > 0 && dy < 0) dir = cc.NE;else if (dx > 0 && dy == 0) dir = cc.EAST;else if (dx > 0 && dy > 0) dir = cc.SE;else if (dx == 0 && dy > 0) dir = cc.SOUTH;else if (dx < 0 && dy > 0) dir = cc.SW;else if (dx < 0 && dy == 0) dir = cc.WEST;else if (dx < 0 && dy < 0) dir = cc.NW;else if (dx == 0 && dy < 0) dir = cc.NORTH;
  return dir;
};

cholaLayout.prototype.createOrthogonalEdges2 = function (gm, nodes, cEdges) {
  var compoundEdges = [];
  var allEdges = gm.getAllEdges();
  var outputEdges = [];
  var createBp = false;

  for (var i = 0; i < allEdges.length; i++) {
    var edge = allEdges[i];

    //if edge is not orthogonal, we make it orthogonal
    var source = edge.source;
    var target = edge.target;
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    var srcIsCompound = source.isCompound();
    var tgtIsCompound = target.isCompound();

    if (!srcIsCompound && !tgtIsCompound) continue;

    var srcCenterX = source.getCenterX();
    var srcCenterY = source.getCenterY();

    var tgtCenterX = target.getCenterX();
    var tgtCenterY = target.getCenterY();

    var srcBbox = source.getBbox();
    var tgtBbox = target.getBbox();

    var bpsLength = edge.bendpoints.length;

    if (bpsLength > 0) {
      var findPortFromDir = function findPortFromDir(dir, bbox, bp) {
        var output = void 0;
        switch (dir) {
          case 0:
            output = { x: bbox.x1, y: bp.y };
            break;

          case 1:
            output = { x: bp.x, y: bbox.y1 };
            break;

          case 2:
            output = { x: bbox.x2, y: bp.y };
            break;

          case 3:
            output = { x: bp.x, y: bbox.y2 };
            break;
        }
        return output;
      };

      ;

      //get direction to source and target from first and last bendpoint
      var firstBp = { x: edge.bendpoints[0].x, y: edge.bendpoints[0].y };
      var lastBp = { x: edge.bendpoints[bpsLength - 1].x, y: edge.bendpoints[bpsLength - 1].y };

      var dir1 = this.direction(firstBp, edge.sourcePoint);
      var dir2 = this.direction(lastBp, edge.targetPoint);

      edge.sourcePort = findPortFromDir(dir1, srcBbox, firstBp);
      edge.targetPort = findPortFromDir(dir2, tgtBbox, lastBp);

      // edge.convertToRelativeBendPosition();
    } else {
      if (source.isCompound() && !target.isCompound()) {
        // console.log("Source is compound and target is not");

        if (srcBbox.x1 <= tgtCenterX && tgtCenterX <= srcBbox.x2) {
          //if target is on top
          if (tgtCenterY < srcBbox.y1) {
            edge.sourcePort = { x: tgtCenterX, y: srcBbox.y1 };
            edge.targetPort = { x: tgtCenterX, y: tgtBbox.y2 };
          }
          //target is on bottom
          else if (tgtCenterY > srcBbox.y2) {
              edge.sourcePort = { x: tgtCenterX, y: srcBbox.y2 };
              edge.targetPort = { x: tgtCenterX, y: tgtBbox.y1 };
            }
        } else if (srcBbox.y1 <= tgtCenterY && tgtCenterY <= srcBbox.y2) {
          //if target is on the left
          if (tgtCenterX < srcBbox.x1) {
            edge.sourcePort = { x: srcBbox.x1, y: tgtCenterY };
            edge.targetPort = { x: tgtBbox.x2, y: tgtCenterY };
          }
          //if target is on the right
          else if (tgtCenterX > srcBbox.x2) {
              edge.sourcePort = { x: srcBbox.x2, y: tgtCenterY };
              edge.targetPort = { x: tgtBbox.x1, y: tgtCenterY };
            }
        }
      } else if (!source.isCompound() && target.isCompound()) {
        if (tgtBbox.x1 < srcCenterX && srcCenterX < tgtBbox.x2) {
          //source can either be on top or on bottom i.e. north or south
          //if source is on top
          if (srcCenterY < tgtBbox.y1) {
            edge.targetPort = { x: srcCenterX, y: tgtBbox.y1 };
            edge.sourcePort = { x: srcCenterX, y: srcBbox.y2 };
          }
          //source is on bottom
          else if (srcCenterY > tgtBbox.y2) {
              edge.targetPort = { x: srcCenterX, y: tgtBbox.y2 };
              edge.sourcePort = { x: srcCenterX, y: srcBbox.y1 };
            }
        } else if (tgtBbox.y1 < srcCenterY && srcCenterY < tgtBbox.y2) {
          // console.log("SOurce lies along the height of target");
          //edge can be straight
          //if source is on the left
          if (srcCenterX < tgtBbox.x1) {
            edge.targetPort = { x: tgtBbox.x1, y: srcCenterY };
            edge.sourcePort = { x: srcBbox.x2, y: srcCenterY };
          }
          //if source is on the right
          else if (srcCenterX > tgtBbox.x2) {
              edge.targetPort = { x: tgtBbox.x2, y: srcCenterY };
              edge.sourcePort = { x: srcBbox.x1, y: srcCenterY };
            }
        }
      } else if (source.isCompound() && target.isCompound()) {
        var sourcePos = nodes[edge.source.id.concat("-").concat(edge.id)];
        var targetPos = nodes[edge.target.id.concat("-").concat(edge.id)];

        //we check if the target node lies within the width of the source node
        if (srcBbox.x1 <= tgtBbox.x1 && tgtBbox.x1 <= srcBbox.x2 || srcBbox.x1 <= tgtBbox.x2 && tgtBbox.x2 <= srcBbox.x2 || tgtBbox.x1 <= srcBbox.x1 && srcBbox.x1 <= tgtBbox.x2 || tgtBbox.x1 <= srcBbox.x2 && srcBbox.x2 <= tgtBbox.x2) {
          //vertical edge
          //if target lies on top of the source node
          if (tgtCenterY < srcCenterY) {
            if (tgtBbox.x1 <= sourcePos[0] && sourcePos[0] <= tgtBbox.x2) {
              edge.sourcePort = { x: sourcePos[0], y: srcBbox.y1 };
              edge.targetPort = { x: sourcePos[0], y: tgtBbox.y2 };
            } else {
              edge.sourcePort = { x: targetPos[0], y: srcBbox.y1 };
              edge.targetPort = { x: targetPos[0], y: tgtBbox.y2 };
            }
          }
          //if target lies at the bottom
          else {
              if (tgtBbox.x1 <= sourcePos[0] && sourcePos[0] <= tgtBbox.x2) {
                edge.sourcePort = { x: sourcePos[0], y: srcBbox.y2 };
                edge.targetPort = { x: sourcePos[0], y: tgtBbox.y1 };
              } else {
                edge.sourcePort = { x: targetPos[0], y: srcBbox.y2 };
                edge.targetPort = { x: targetPos[0], y: tgtBbox.y1 };
              }
            }
        }
        //we check if the target node lies within the height of the source node
        else if (srcBbox.y1 <= tgtBbox.y1 && tgtBbox.y1 <= srcBbox.y2 || srcBbox.y1 <= tgtBbox.y2 && tgtBbox.y2 <= srcBbox.y2 || tgtBbox.y1 <= srcBbox.y1 && srcBbox.y1 <= tgtBbox.y2 || tgtBbox.y1 <= srcBbox.y2 && srcBbox.y2 <= tgtBbox.y2) {
            //horizontal edge
            //if target lies on the left of the source node
            if (tgtCenterX < srcCenterX) {
              if (tgtBbox.y1 <= sourcePos[1] && sourcePos[1] <= tgtBbox.y2) {
                edge.sourcePort = { x: srcBbox.x1, y: sourcePos[1] };
                edge.targetPort = { x: tgtBbox.x2, y: sourcePos[1] };
              } else {
                edge.sourcePort = { x: srcBbox.x1, y: targetPos[1] };
                edge.targetPort = { x: tgtBbox.x2, y: targetPos[1] };
              }
            }
            //if target lies on the right of the source node
            else {
                if (tgtBbox.y1 <= sourcePos[1] && sourcePos[1] <= tgtBbox.y2) {
                  edge.sourcePort = { x: srcBbox.x2, y: sourcePos[1] };
                  edge.targetPort = { x: tgtBbox.x1, y: sourcePos[1] };
                } else {
                  edge.sourcePort = { x: srcBbox.x2, y: targetPos[1] };
                  edge.targetPort = { x: tgtBbox.x1, y: targetPos[1] };
                }
              }
          }
      }
    }

    outputEdges.push(edge);
  }

  return outputEdges;
};

cholaLayout.prototype.distance = function (a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

cholaLayout.prototype.insertNodeIntoCompoundBoundary = function (node, boundaryList) {
  var point = node.getCenter();

  if (boundaryList.length == 1) {
    boundaryList.push(node);
    return;
  }

  //now insert the endpoint at correct location in the boundarylist
  for (var k = 0; k < boundaryList.length; k++) {
    var value1 = boundaryList[k].getCenter();
    var value2 = void 0;
    if (k != boundaryList.length - 1) {
      value2 = boundaryList[k + 1].getCenter();
    } else {
      value2 = boundaryList[0].getCenter();
    }
    if (value1.x == value2.x && point.x == value1.x) {
      if (value1.y < point.y && point.y < value2.y || value2.y < point.y && point.y < value1.y) {
        boundaryList.splice(k + 1, 0, node);
      }
    } else if (value1.y == value2.y && point.y == value1.y) {
      if (value1.x < point.x && point.x < value2.x || value2.x < point.x && point.x < value1.x) {
        boundaryList.splice(k + 1, 0, node);
      }
    }
  }
};

<<<<<<< HEAD
cholaLayout.prototype.convertToSimpleGraph = function (gm, compoundNodes) {
  var _this = this;

  var simpleGm = this.newGraphManager();
  var parent = simpleGm.addRoot();
  var newEdges = [];
  var nodeDict = {};

  //Copy the non-compound nodes to the new graph manager
  var allNodes = gm.getAllNodes();
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    if (!node.isCompound()) {
      var newNode = parent.add(new cholaNode(simpleGm, node.getLocation(), new DimensionD(node.getWidth(), node.getHeight())));
      newNode.id = node.id;
      nodeDict[newNode.id] = newNode;
    }
  }

  //copy the simple edges(whose source and target are both non compound nodes and which are not intergraph edges)
  var allEdges = gm.getAllEdges();
  for (var _i = 0; _i < allEdges.length; _i++) {
    var edge = allEdges[_i];
    if (!edge.source.isCompound() && !edge.target.isCompound()) {
      var source = nodeDict[edge.source.id];
      var target = nodeDict[edge.target.id];
      var newEdge = simpleGm.add(this.newEdge(), source, target);
      newEdge.id = edge.id;
    }
  }

  var _loop = function _loop(_i2) {
    var node = compoundNodes[_i2];

    //1. Get boundary corner points
    var bbox = node.getBbox();
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    //storing values in clockwise direction
    var boundaryList = [];

    node.boundaryList = boundaryList;

    var corners = [{ x: bbox.x1, y: bbox.y1 }, { x: bbox.x2, y: bbox.y1 }, { x: bbox.x2, y: bbox.y2 }, { x: bbox.x1, y: bbox.y2 }];

    //create nodes for the corner points of the compound node in the new gm
    for (var j = 0; j < corners.length; j++) {
      var point = corners[j];
      var _newNode = parent.add(new cholaNode(simpleGm, point, new DimensionD(1, 1)));
      _newNode.setCenter(point.x, point.y);
      _newNode.isDummy = true;
      _newNode.dummyOwner = node;
      _newNode.isCmpdBoundaryNode = true;

      if (j == 0) _newNode.id = node.id.concat("-tl");else if (j == 1) _newNode.id = node.id.concat("-tr");else if (j == 2) _newNode.id = node.id.concat("-br");else _newNode.id = node.id.concat("-bl");

<<<<<<< HEAD
      nodeDict[_newNode.id] = _newNode;
      boundaryList.push(_newNode);
    }

    //2. Get endpoints of incident edges to the compound node
    var edges = node.edges;

    for (var _j = 0; _j < edges.length; _j++) {
      var _edge2 = edges[_j];
      var endpoint1 = void 0,
          endpoint2 = void 0;
      if (_edge2.source == node) {
        endpoint1 = _edge2.sourceEndpoint();
        if (_edge2.target.isCompound()) endpoint2 = _edge2.target.id.concat("-").concat(_edge2.id);else endpoint2 = _edge2.target.id;
      } else {
        endpoint1 = _edge2.targetEndpoint();
        if (_edge2.source.isCompound()) endpoint2 = _edge2.source.id.concat("-").concat(_edge2.id);else endpoint2 = _edge2.source.id;
      }

      var _newNode2 = parent.add(new cholaNode(simpleGm, { x: endpoint1.x - 0.5, y: endpoint1.y - 0.5 }, new DimensionD(1, 1)));
      _newNode2.id = node.id.concat("-").concat(_edge2.id);
      _newNode2.isCmpdBoundaryNode = true;
      node.insertNodeToBoundary(_newNode2);
      nodeDict[_newNode2.id] = _newNode2;

      //store the new edges that have to be created in this case

      if (_edge2.source == node) newEdges.push([_newNode2.id, endpoint2]);else newEdges.push([endpoint2, _newNode2.id]);
    }

    //3. check if the child graph of the compound node is disconnected from outside
    //if this is the case, convert the graph to a connected graph
    //get child graphs list of node including this nodes own graph
    var childGraphs = [node.child].concat(node.getChildGraphs());

    //if the owner graph of the other edge end lies in the list of child graphs, that is not counted as intergraph edge
=======
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
    var dummyNode = coseGm.getRoot().add(new CoSENode(coseGm, bendpoint, new DimensionD(_cholaEdge.width, _cholaEdge.width)));
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

>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    function findConnectivity(node, childGraphs) {
      var connectivityCheck = false;
      var childNodes = node.getChild().nodes;
      var cEdge = void 0;
      for (var _j2 = 0; _j2 < childNodes.length; _j2++) {
        var childNode = childNodes[_j2];
        if (childNode.isCompound()) {
          connectivityCheck = findConnectivity(childNode, childGraphs);
          if (connectivityCheck) break;
        }

<<<<<<< HEAD
        var childEdges = childNode.edges;
        for (var k = 0; k < childEdges.length; k++) {
          cEdge = childEdges[k];
          var otherNode = cEdge.getOtherEnd(childNode);
          if (cEdge.isInterGraph && !childGraphs.includes(otherNode.owner)) {
            connectivityCheck = true;
            break;
          }
        }
        if (connectivityCheck) break;
      }
      return connectivityCheck;
    };

    var connectivityCheck = findConnectivity(node, childGraphs);
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    //if the child graph is disconnected it needs to be connected 
    //if the child graph is disconnected it needs to be connected   
    if (!connectivityCheck) {
      compareSecondColumn = function compareSecondColumn(a, b) {
        if (a[1] === b[1]) {
          return 0;
        } else {
          return a[1] < b[1] ? -1 : 1;
        }
      };

      nodePosList = [];
      //find the left most node

      childNodes = node.getChild().nodes;

      for (var _j3 = 0; _j3 < childNodes.length; _j3++) {
        child = childNodes[_j3];

        nodePosList.push([child, child.getLocation().x]);
      }
<<<<<<< HEAD
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

      nodePosList.sort(compareSecondColumn);

      leftMostNode = nodePosList[0][0];


      if (!leftMostNode.isCompound()) {
        //now find its distance from the top left and bottom left boundary nodes
        d1 = _this.distance(nodeDict[leftMostNode.id].getLocation(), nodeDict[node.id.concat("-tl")].getCenter());
        d2 = _this.distance(nodeDict[leftMostNode.id].getLocation(), nodeDict[node.id.concat("-bl")].getCenter());


        if (d1 <= d2) {
          src = nodeDict[node.id.concat("-tl")];
        } else {
          src = nodeDict[node.id.concat("-bl")];
        }

        tgt = nodeDict[leftMostNode.id];
      } else {
        //find distance from the topleft corner of child node to topleft corner of compound
        //find distance from the bottomleft corner of child node to bottomleft corner of compound
        //connect the ones with smaller distance
        d1 = _this.distance(nodeDict[leftMostNode.id.concat("-tl")].getCenter(), nodeDict[node.id.concat("-tl")].getCenter());
        d2 = _this.distance(nodeDict[leftMostNode.id.concat("-bl")].getCenter(), nodeDict[node.id.concat("-bl")].getCenter());


<<<<<<< HEAD
        if (d1 <= d2) {
          src = nodeDict[node.id.concat("-tl")];
          tgt = nodeDict[leftMostNode.id.concat("-tl")];
        } else {
          src = nodeDict[node.id.concat("-bl")];
          tgt = nodeDict[leftMostNode.id.concat("-bl")];
        }
      }

      newEdge2 = simpleGm.add(_this.newEdge(), src, tgt);
=======
      // create new dummy edge between prev and dummy node
      var _dummyEdge = gm.add(gm.getLayout().newEdge(), prev, dummyNode);
      _dummyEdge.id = "dedge:" + prev.id + "to" + dummyNode.id + ":" + j.toString();

      dummyNodes.push(dummyNode);
      dummyEdges.push(_dummyEdge);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

      newEdge2.id = src.id.concat("to").concat(tgt.id);
    }

    //4. construct edges along the boundary of the compound nodes
    for (var _j4 = 0; _j4 < boundaryList.length; _j4++) {
      var _source2 = nodeDict[boundaryList[_j4].id];
      var _target2 = void 0;
      if (_j4 != boundaryList.length - 1) _target2 = nodeDict[boundaryList[_j4 + 1].id];else _target2 = nodeDict[boundaryList[0].id];

      var _newEdge2 = simpleGm.add(_this.newEdge(), _source2, _target2);
      _newEdge2.id = _source2.id.concat("to").concat(_target2.id);
      _newEdge2.parentNode = node;
    }

    node.boundaryList = boundaryList;
  };

  for (var _i2 = 0; _i2 < compoundNodes.length; _i2++) {
    var compareSecondColumn;
    var nodePosList;
    var childNodes;
    var child;
    var leftMostNode;
    var src, tgt;
    var d1;
    var d2;
    var d1;
    var d2;
    var newEdge2;

    _loop(_i2);
  }

  //now create the compound connected edges in the graph
  for (var _i3 = 0; _i3 < newEdges.length; _i3++) {
    var _edge = newEdges[_i3];
    var _source = nodeDict[_edge[0]];
    var _target = nodeDict[_edge[1]];

    //an edge might already have been created if both endpoints belong to compound nodes
    if (_source.findEdgeWithNode(_target)) continue;

    var _newEdge = simpleGm.add(this.newEdge(), _source, _target);
    _newEdge.id = _source.id.concat("to").concat(_target.id);
  }
};

cholaLayout.prototype.onSegment = function (p, q, r) {
  if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y)) return true;

  return false;
};

cholaLayout.prototype.orientation = function (p, q, r) {
  var val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);

  if (val == 0) return 0;

  return val > 0 ? 1 : 2;
};

cholaLayout.prototype.doIntersect = function (p1, q1, p2, q2) {
  // Find the four orientations needed for general and
  // special cases
  var o1 = this.orientation(p1, q1, p2);
  var o2 = this.orientation(p1, q1, q2);
  var o3 = this.orientation(p2, q2, p1);
  var o4 = this.orientation(p2, q2, q1);

  // General case
  if (o1 != o2 && o3 != o4) return true;

  // Special Cases
  // p1, q1 and p2 are colinear and p2 lies on segment p1q1
  if (o1 == 0 && this.onSegment(p1, p2, q1)) return true;

  // p1, q1 and q2 are colinear and q2 lies on segment p1q1
  if (o2 == 0 && this.onSegment(p1, q2, q1)) return true;

<<<<<<< HEAD
  // p2, q2 and p1 are colinear and p1 lies on segment p2q2
  if (o3 == 0 && this.onSegment(p2, p1, q2)) return true;

  // p2, q2 and q1 are colinear and q1 lies on segment p2q2
  if (o4 == 0 && this.onSegment(p2, q1, q2)) return true;
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

  return false; // Doesn't fall in any of the above cases
};

//for simple edge crosses
cholaLayout.prototype.findEdgeCrosses = function (edges1, edges2) {
  var crossingEdges = [];
  for (var i = 0; i < edges1.length; i++) {
    var edge = edges1[i];
    var srcLoc = null;
    var tgtLoc = null;

<<<<<<< HEAD
    if (edge.source.isCompound()) srcLoc = edge.sourceEndpoint();else srcLoc = edge.source.getCenter();

    if (edge.target.isCompound()) tgtLoc = edge.targetEndpoint();else tgtLoc = edge.target.getCenter();

    for (var j = i + 1; j < edges2.length; j++) {
      var otherEdge = edges2[j];

      //if edges originate from the same node, dont find intersection
      if (edge.source == otherEdge.source || edge.source == otherEdge.target) continue;
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

      if (edge.target == otherEdge.source || edge.target == otherEdge.target) continue;

<<<<<<< HEAD
      var otherSrcLoc = null;
      var otherTgtLoc = null;

      if (otherEdge.source.isCompound()) otherSrcLoc = otherEdge.sourceEndpoint();else otherSrcLoc = otherEdge.source.getCenter();

      if (otherEdge.target.isCompound()) otherTgtLoc = otherEdge.targetEndpoint();else otherTgtLoc = otherEdge.target.getCenter();

      if (this.doIntersect(srcLoc, tgtLoc, otherSrcLoc, otherTgtLoc)) {
        var intersectionPoint = edge.findIntersection(otherEdge);
        crossingEdges.push([edge, otherEdge, intersectionPoint]);
      }
    }
  }
  return crossingEdges;
};
=======
  // Reattach the trees one by one.
  for (var _i11 = 0; _i11 < trees.length; _i11++) {
    allNodes = trunk.getAllNodes();

    var tree = trees[_i11];

    var root = cholaNodesMap[tree.root.id];
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

cholaLayout.prototype.createDummiesForCrossings = function (gm, edgeCrosses, edgeSplitDict) {
  var dummyNodes = [];
  for (var i = 0; i < edgeCrosses.length; i++) {
    var edgeCrossing = edgeCrosses[i];
    var edge1 = edgeCrossing[0];
    var edge2 = edgeCrossing[1];
    var crossingPoint = edgeCrossing[2];

    //create a dummy node for the edge crossing
    var parent = gm.getRoot();
    var dummyNode = parent.add(new cholaNode(gm, crossingPoint, new DimensionD(1, 1)));
    dummyNode.setCenter(crossingPoint.x, crossingPoint.y);
    dummyNode.id = "cdnode" + (i + 1).toString(); //cdn: edge crossing dummy node
    dummyNodes.push(dummyNode);

    //if edge is a boundary edge of a compound node
    if (edge1.parentNode != null) {
      edge1.parentNode.insertNodeToBoundary(dummyNode);
    }
    if (edge2.parentNode != null) {
      edge2.parentNode.insertNodeToBoundary(dummyNode);
    }

    if (edgeSplitDict[edge1.id] != undefined) {
      //find the split edge section which contains the crossing point
      var splitEdges = edgeSplitDict[edge1.id];
      for (var k = 0; k < splitEdges.length; k++) {
        var e1 = splitEdges[k];
        var src = e1.source;
        var mid = e1.target;
        if (mid.octalCode(src) == mid.octalCode(dummyNode)) {
          edge1 = e1;
          break;
        }
      }
    }
    if (edgeSplitDict[edge2.id] != undefined) {
      //find the split edge section which contains the crossing point
      var _splitEdges = edgeSplitDict[edge2.id];
      for (var _k = 0; _k < _splitEdges.length; _k++) {
        var _e = _splitEdges[_k];
        var _src = _e.source;
        var _mid = _e.target;
        if (_mid.octalCode(_src) == _mid.octalCode(dummyNode)) {
          edge2 = _e;
          break;
        }
      }
    }

    //connect the sources and targets to the dummy node
    var dummyEdge1 = gm.add(this.newEdge(), edge1.source, dummyNode);
    dummyEdge1.id = "cdedge:" + edge1.source.id + "to" + dummyNode.id;
    dummyEdge1.isDummy = true;
    dummyEdge1.parentEdge = edge1;

    var dummyEdge2 = gm.add(this.newEdge(), dummyNode, edge1.target);
    dummyEdge2.id = "cdedge:" + dummyNode.id + "to" + edge1.target.id;
    dummyEdge2.isDummy = true;
    dummyEdge2.parentEdge = edge1;

<<<<<<< HEAD
    dummyEdge1.coupleEdge = dummyEdge2;
    dummyEdge2.coupleEdge = dummyEdge1;

    var dummyEdge3 = gm.add(this.newEdge(), edge2.source, dummyNode);
    dummyEdge3.id = "cdedge:" + edge2.source.id + "to" + dummyNode.id;
    dummyEdge3.isDummy = true;
    dummyEdge3.parentEdge = edge2;

    var dummyEdge4 = gm.add(this.newEdge(), dummyNode, edge2.target);
    dummyEdge4.id = "cdedge:" + dummyNode.id + "to" + edge2.target.id;
    dummyEdge4.isDummy = true;
    dummyEdge4.parentEdge = edge2;
=======
    var w = void 0,
        h = void 0,
        u = void 0,
        v = void 0;

    //now create the tree box
    for (var j = 0; j < availableSemis.length; j++) {
      var placementDir = availableSemis[j];
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    dummyEdge3.coupleEdge = dummyEdge4;
    dummyEdge4.coupleEdge = dummyEdge3;

    edgeSplitDict[edge1.id] = [dummyEdge1, dummyEdge2];
    edgeSplitDict[edge2.id] = [dummyEdge3, dummyEdge4];

<<<<<<< HEAD
    var edge1temp = edge1;
    var edge2temp = edge2;
=======
      w = _tree$treeBoxWithRoot2[0];
      h = _tree$treeBoxWithRoot2[1];
      u = _tree$treeBoxWithRoot2[2];
      v = _tree$treeBoxWithRoot2[3];
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    var temp = edge1;
    var pEdge = temp.parentEdge;
    var arr = edgeSplitDict[temp.id];
    while (temp.id.includes("cdnode")) {
      var index = edgeSplitDict[pEdge.id].indexOf(temp);
      edgeSplitDict[pEdge.id].splice(index, 1);

<<<<<<< HEAD
      for (var _k2 = 0; _k2 < arr.length; _k2++) {
        edgeSplitDict[pEdge.id].splice(index + _k2, 0, arr[_k2]);
      }pEdge = pEdge.parentEdge;
      if (pEdge == null) break;
    }
=======
      var ax = void 0,
          aX = void 0,
          ay = void 0,
          aY = void 0;
      ax = u - w / 2;
      ay = v - h / 2;
      aX = ax + w;
      aY = ay + h;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    temp = edge2;
    pEdge = temp.parentEdge;
    arr = edgeSplitDict[temp.id];
    while (temp.id.includes("cdnode")) {
      var _index = edgeSplitDict[pEdge.id].indexOf(temp);
      edgeSplitDict[pEdge.id].splice(_index, 1);

<<<<<<< HEAD
      for (var _k3 = 0; _k3 < arr.length; _k3++) {
        edgeSplitDict[pEdge.id].splice(_index + _k3, 0, arr[_k3]);
      }pEdge = pEdge.parentEdge;
      if (pEdge == null) break;
    }

    //delete both of the edges from the graph
    if (edge1temp.isInterGraph) {
      gm.remove(edge1temp);
    } else {
      var graph = gm.calcLowestCommonAncestor(edge1temp.source, edge1temp.target);
      graph.remove(edge1temp);
    }
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    if (edge2temp.isInterGraph) {
      gm.remove(edge2temp);
    } else {
      var graph = gm.calcLowestCommonAncestor(edge2temp.source, edge2temp.target);
      graph.remove(edge2temp);
    }

    gm.resetAllEdges();
    gm.resetAllNodes();
    gm.getAllEdges();
    gm.getAllNodes();
  }

  return dummyNodes;
};

cholaLayout.prototype.compactGraph = function (gm) {
  var xDict = {};
  var yDict = {};
  var allNodes = gm.getAllNodes();
  var allEdges = gm.getAllEdges();

  //add simple nodes to the dictionary
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];

    if (!node.isCompound()) {
      var posX = node.getCenterX();
      var posY = node.getCenterY();

      if (xDict[posX] == undefined) {
        xDict[posX] = [];
      }
      if (yDict[posY] == undefined) {
        yDict[posY] = [];
      }

      xDict[posX].push([null, [posY], [node]]);
      yDict[posY].push([null, [posX], [node]]);
    }
  }

  for (var _i4 = 0; _i4 < allEdges.length; _i4++) {
    var edge = allEdges[_i4];

<<<<<<< HEAD
    //add bendpoints to the dictionary
    if (edge.bendpoints.length > 0) {
      for (var j = 0; j < edge.bendpoints.length; j++) {
        var bendpoint = edge.bendpoints[j];
        var _posX = bendpoint.x;
        var _posY = bendpoint.y;

        if (xDict[_posX] == undefined) {
          xDict[_posX] = [];
        }
        if (yDict[_posY] == undefined) {
          yDict[_posY] = [];
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
        }

        xDict[_posX].push([null, [_posY], [bendpoint]]);
        yDict[_posY].push([null, [_posX], [bendpoint]]);
      }
    }
<<<<<<< HEAD
  }

  var xIndexDict = void 0,
      yIndexDict = void 0,
      xNextPosList = void 0,
      yNextPosList = void 0;

  var _sortAndCombineDict = this.sortAndCombineDict(xDict, xIndexDict);

  var _sortAndCombineDict2 = _slicedToArray(_sortAndCombineDict, 3);

  xDict = _sortAndCombineDict2[0];
  xIndexDict = _sortAndCombineDict2[1];
  xNextPosList = _sortAndCombineDict2[2];

  var _sortAndCombineDict3 = this.sortAndCombineDict(yDict, yIndexDict);

  var _sortAndCombineDict4 = _slicedToArray(_sortAndCombineDict3, 3);

  yDict = _sortAndCombineDict4[0];
  yIndexDict = _sortAndCombineDict4[1];
  yNextPosList = _sortAndCombineDict4[2];


  this.createVisibilityGraphEdges(xNextPosList, xIndexDict);
  this.createVisibilityGraphEdges(yNextPosList, yIndexDict);

  this.assignNewLocsToBars(xIndexDict, 0);
  console.log(xIndexDict);

  this.assignNewLocsToBars(yIndexDict, 1);
  console.log(yIndexDict);
};

cholaLayout.prototype.assignNewLocsToBars = function (indexDict, dir) {
  /*
   * if dir == 0, horizontal compaction is done towards right
   * if dir == 1, vertical compaction is done towards bottom
   * if dir == 2, horizontal compaction is done towards left
   * if dir == 3, vertical compaction is done towards bottom
   */

  var bars = Object.values(indexDict);
  var keys = Object.keys(indexDict);

  var data = null;
  if (dir == 0 || dir == 1) {
    data = "futureBars";
    for (var i = bars.length - 1; i >= 0; i--) {
      var bar = bars[i];
      if (bar[data].length == 0) bar.newLoc = 0;else {
        var futureIndex = bar[data][0];
        bar.newLoc = bars[futureIndex].newLoc - 1;
      }
    }
  } else if (dir == 2 || dir == 3) {
    data = "prevBars";
    for (var _i5 = 0; _i5 < bars.length; _i5++) {
      var _bar = bars[_i5];
      if (_bar[data].length == 0) _bar.newLoc = 0;else {
        var prevIndex = _bar[data][_bar[data].length - 1];
        _bar.newLoc = bars[prevIndex].newLoc + 1;
      }
    }
  }
};

cholaLayout.prototype.createVisibilityGraphEdges = function (posList, indexDict) {
  var bars = Object.values(indexDict);
  var keys = Object.keys(indexDict);

  //working on all bars at all x or y values
  for (var i = 0; i < bars.length - 1; i++) {
    var bar1 = bars[i];
    var dictKey = bar1.dictKey;

    var sp1 = bar1.posData[0];
    var ep1 = void 0;
    if (bar1.posData.length == 1) ep1 = bar1.posData[0]; //in this case, it is not a bar but a single node
    else ep1 = bar1.posData[bar1.posData.length - 1];

    //get starting index of next x/y value
    var index = posList[dictKey];

    var shadowBars = []; //will contain indexes of the nodes that are covered with the shadow of bar1

    for (var j = index; j < bars.length; j++) {
      var bar2 = bars[j];

      var sp2 = bar2.posData[0]; //starting point of bar
      var ep2 = void 0; //end point of bar
      if (bar2.posData.length == 1) ep2 = bar2.posData[0];else ep2 = bar2.posData[bar2.posData.length - 1];

      if (sp1 <= sp2 && sp2 <= ep1 || sp1 <= ep2 && ep2 <= ep1 || sp2 <= sp1 && sp1 <= ep2 || sp2 <= ep1 && ep1 < ep2) {
        //then this bar lies in front of bar1
        //but we now need to check if it completely overlaps with the previous shadow bar that have been added
        var overlap = false;
        for (var m = 0; m < shadowBars.length; m++) {
          var _index2 = shadowBars[m];
          var bar3 = indexDict[_index2];

          var sp3 = bar3.posData[0];
          var ep3 = void 0;
          if (bar3.posData.length == 1) ep3 = bar3.posData[0];else ep3 = bar3.posData[bar3.posData.length - 1];

          if (sp2 >= sp3 && ep2 <= ep3) {
            //now if the remaining uncovered part of bar2 is also 
            overlap = true;
            break;
          }
        }

        if (overlap == false) {
          bar1.futureBars.push(j);
          bars[j].prevBars.push(i);

          if (sp2 <= sp1 && ep1 <= ep2) //if bar2 completely overlaps bar 1
            {
              //then the future bars do not have to be evaluated
              break;
            }
        }
      }
    }
  }
};

cholaLayout.prototype.sortAndCombineDict = function (dict, indexDict) {
  var dictValues = Object.values(dict);
  var dictKeys = Object.keys(dict);

  var index = 0;

  var nextPosList = {};

  indexDict = {};

  var modify = false;

  for (var j = 0; j < dictValues.length; j++) {
    var row = dictValues[j];

    row.sort(function (a, b) {
      return a[1][0] - b[1][0];
    });

    var combine = false;

    //then check if each consecutive item in the values is connected or not
    for (var i = 0; i < row.length - 1; i++) {
      modify = true;
      var currRow = row[i];
      var nextRow = row[i + 1];

      var currRowLN = currRow[2][currRow[2].length - 1];
      var nextRowFN = nextRow[2][0];

      //now check if these two items are connected
      if (!(currRowLN instanceof cholaNode) && !(nextRowFN instanceof cholaNode)) {
        //both are bendpoints
        var bp1 = currRowLN;
        var bp2 = nextRowFN;
        if (bp1.id == bp2.srcId || bp1.id == bp2.tgtId) combine = true;
      } else if (currRowLN instanceof cholaNode && nextRowFN instanceof cholaNode) {
        //both are nodes
        var node1 = currRowLN;
        var node2 = nextRowFN;
        var edge = node1.findEdgeBetween(node2);
        if (edge != null) combine = true;
      } else if (currRowLN instanceof cholaNode && !(nextRowFN instanceof cholaNode)) {
        var node = currRowLN;
        var bp = nextRowFN;
        if (node.id == bp.srcId || node.id == bp.tgtId) combine = true;
      } else if (!(currRowLN instanceof cholaNode) && nextRowFN instanceof cholaNode) {
        var _bp = currRowLN;
        var _node = nextRowFN;
        if (_node.id == _bp.srcId || _node.id == _bp.tgtId) combine = true;
      }

      if (currRow[0] == null) {
        currRow[0] = index;
      }

      if (combine == true) {
        //lets combine this removed row to the current row
        currRow[1] = currRow[1].concat(nextRow[1]);
        currRow[2] = currRow[2].concat(nextRow[2]);
        row.splice(i + 1, 1);
      }

      if (combine == false || i == row.length - 1) {
        indexDict[index] = {
          dictKey: dictKeys[j],
          posData: currRow[1],
          nodes: currRow[2],
          futureBars: [],
          prevBars: [],
          newLoc: null
        };
        index++;
      }

      if (combine == true) {
        combine = false;
        i--;
      }
    }
=======

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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    if (row.length == 1 && modify == false) {
      var _currRow = row[0];
      _currRow[0] = index;
      indexDict[index] = {
        dictKey: dictKeys[j],
        posData: _currRow[1],
        nodes: _currRow[2],
        futureBars: [],
        prevBars: [],
        newLoc: null
      };
      index++;
    }

<<<<<<< HEAD
    modify = false;
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    dict[dictKeys[j]] = row;

<<<<<<< HEAD
    nextPosList[dictKeys[j]] = index;
  }
  return [dict, indexDict, nextPosList];
=======
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
        // console.log("after updating bounds");
        // console.log(parent.id);
        // console.log(parent.getCenter());
        // console.log(parent.getWidth());
        // console.log(parent.getHeight());
      }
    }

    //if node is inside a compound node
  }
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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

cholaConstants.SE = 4;
cholaConstants.SW = 5;
cholaConstants.NW = 6;
cholaConstants.NE = 7;

cholaConstants.XDIM = 0;
cholaConstants.YDIM = 1;

module.exports = cholaConstants;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var LGraphManager = __webpack_require__(4).layoutBase.LGraphManager;
var cholaNode = __webpack_require__(7);
var DimensionD = __webpack_require__(4).layoutBase.DimensionD;

function cholaGraphManager(layout) {
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

cholaGraphManager.prototype.getMaxDegree = function () {
    var allNodes = this.getAllNodes();
    var maxDegree = -1;

    for (var i = 0; i < allNodes.length; i++) {
        var node = allNodes[i];
        var degree = node.getDegree();
        if (degree > maxDegree) maxDegree = degree;
    }

<<<<<<< HEAD
    return maxDegree;
};

//return the list of compound nodes
cholaGraphManager.prototype.findCompoundNodes = function (gm) {
    var allNodes = this.getAllNodes();
    var compoundNodes = [];

    for (var i = 0; i < allNodes.length; i++) {
        var node = allNodes[i];
        if (node.isCompound()) {
            compoundNodes.push(node);
        }
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
    }

    //sort compounds from inside to outside
    compoundNodes = this.sortCompounds(compoundNodes);
    return compoundNodes;
};

<<<<<<< HEAD
cholaGraphManager.prototype.sortCompounds = function (compoundNodes) {
    var hierarchyList = [];
=======
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

>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    compoundNodes.sort(function (a, b) {
        return b.getArea() - a.getArea();
    });

<<<<<<< HEAD
    //create a hierarchy list for the compound nodes
    for (var i = 0; i < compoundNodes.length; i++) {
        var node = compoundNodes[i];
        var children = node.getChildren();

        var childList = [];
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

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
    for (var _i = 0; _i < hierarchyList.length; _i++) {
        compoundNodes.push(hierarchyList[_i][0]);
    }return compoundNodes;
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
        for (var _i2 = 0; _i2 < allEdges.length; _i2++) {
            var edge = allEdges[_i2];

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
        for (var _i3 = 0; _i3 < n - 1; _i3++) {
            var p = pts[_i3];
            var q = pts[_i3 + 1];
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
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        if (!compoundNodes.includes(node)) {
            var edge = node.edges[0];
            if (edge == undefined) continue;

            var otherNode = edge.getOtherEnd(node);
            var degree = otherNode.getDegree();

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
            for (var _i4 = 0; _i4 < edgeList.length; _i4++) {
                queue.push([edgeList[_i4], n2]);
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

module.exports = cholaGraphManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var LNode = __webpack_require__(4).layoutBase.LNode;
var IMath = __webpack_require__(4).layoutBase.IMath;
var PointD = __webpack_require__(4).layoutBase.PointD;
<<<<<<< HEAD
var cholaEdge = __webpack_require__(8);
var cholaGraph = __webpack_require__(9);
=======
var cholaEdge = __webpack_require__(9);
var cholaGraph = __webpack_require__(10);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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
<<<<<<< HEAD
  this.data = {};
  this.layout = "chola";
  this.isCmpdBoundaryNode = false;
  this.boundaryList = [];
  this.childList = [];
  this.connectedEdges = [];
  this.dummyOwner = null;
  this.freeSemiLocations = [];
  this.ports = {
    top: [],
    bottom: [],
    left: [],
    right: []
  };
=======
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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

<<<<<<< HEAD
cholaNode.prototype.getChildGraphs = function () {
  var childGraphsList = [];
  var childNodes = this.getChildren();
  for (var i = 0; i < childNodes.length; i++) {
    var child = childNodes[i];
    if (child.isCompound()) {
      childGraphsList.push(child.child);
      var a = child.getChildGraphs();
      childGraphsList = childGraphsList.concat(a);
    }
  }
  return childGraphsList;
};

cholaNode.prototype.getInterGraphEdges = function () {
  var edges = this.edges;
  var igEdges = [];
  for (var k = 0; k < edgesedges.length; k++) {
    cEdge = edges[k];
    if (cEdge.isInterGraph) {
      igEdges.push(cEdge);
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
    }
  }
};

cholaNode.prototype.getBbox = function () {
  var locX = this.getLocation().x;
  var locY = this.getLocation().y;
  var width = this.getWidth();
  var height = this.getHeight();

  var bbox = {
    x1: locX,
    x2: locX + width,
    y1: locY,
    y2: locY + height };

  return bbox;
};

cholaNode.prototype.octalCode = function (node) {
  //Semi axes get octal codes 0,2,4,6; East:0; North:2; West:4; South:6
  //Quadrants get octal codes 1,3,5,7; NorthEast:1; NorthWest:3; SouthWest:5; SouthEast:7
  var thisLoc = this.getCenter();
  var o = -1;
  var dx = (this.getCenterX() - node.getCenterX()).toFixed(7);
  var dy = (this.getCenterY() - node.getCenterY()).toFixed(7);

  if (dx > 0) {
    if (dy < 0) {
      o = 7;
    } else {
      if (dy === 0) {
        o = 0;
      } else {
        o = 1;
      }
    }
  } else if (dx === 0) {
    if (dy < 0) {
      o = 6;
    } else {
      o = 2;
    }
  } else {
    if (dy < 0) {
      o = 5;
    } else {
      if (dy === 0) {
        o = 4;
      } else {
        o = 3;
      }
    }
  }
  return o;
};

<<<<<<< HEAD
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

cholaNode.prototype.calculatePorts = function () {
  var node = this;
  if (!this.isCompound()) return;else {
    var w = this.getWidth() - 20;
    var h = this.getHeight() - 20;

    var bbox = this.getBbox();
    var x1 = bbox.x1;
    var x2 = bbox.x2;
    var y1 = bbox.y1;
    var y2 = bbox.y2;

    var noOfEdges = this.edges.length;
    if (noOfEdges < 4) noOfEdges = 4;
    var divFactor = noOfEdges - 1;

    this.ports.top = [{ x: x1 + 10, y: y1, occupied: false }, { x: x1 + w / divFactor, y: y1, occupied: false }, { x: x2 - w / divFactor, y: y1, occupied: false }, { x: x2 - 10, y: y1, occupied: false }];
    this.ports.bottom = [{ x: x1 + 10, y: y2, occupied: false }, { x: x1 + w / divFactor, y: y2, occupied: false }, { x: x2 - w / divFactor, y: y2, occupied: false }, { x: x2 - 10, y: y2, occupied: false }];
    this.ports.left = [{ x: x1, y: y1 + 10, occupied: false }, { x: x1, y: y1 + h / divFactor, occupied: false }, { x: x1, y: y2 - h / divFactor, occupied: false }, { x: x1, y: y2 - 10, occupied: false }];
    this.ports.right = [{ x: x2, y: y1 + 10, occupied: false }, { x: x2, y: y1 + h / divFactor, occupied: false }, { x: x2, y: y2 - h / divFactor, occupied: false }, { x: x2, y: y2 - 10, occupied: false }];
  }
};

cholaNode.prototype.insertNodeToBoundary = function (node) {
  if (!this.isCompound()) return;
  var boundaryList = this.boundaryList;
  var point = node.getCenter();

  if (boundaryList.length == 1) {
    boundaryList.push(node);
    return;
  }
=======
cholaNode.prototype.getFreeSemiLocations = function () {
  var approx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var compound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

  //now insert the endpoint at correct location in the boundarylist 
  for (var k = 0; k < boundaryList.length; k++) {
    var value1 = boundaryList[k].getCenter();
    var value2 = void 0;
    if (k != boundaryList.length - 1) {
      value2 = boundaryList[k + 1].getCenter();
    } else {
      value2 = boundaryList[0].getCenter();
    }
    if (value1.x == value2.x && point.x == value1.x) {
      if (value1.y < point.y && point.y < value2.y || value2.y < point.y && point.y < value1.y) {
        boundaryList.splice(k + 1, 0, node);
      }
    } else if (value1.y == value2.y && point.y == value1.y) {
      if (value1.x < point.x && point.x < value2.x || value2.x < point.x && point.x < value1.x) {
        boundaryList.splice(k + 1, 0, node);
      }
    }
  }
  node.isDummy = true;
  node.dummyOwner = this;
};

cholaNode.prototype.getFreeSemiLocations = function () {
  var edges = this.edges;
<<<<<<< HEAD
  var nbr;
  var nbrLocX;
  var nbrLocY;
  var availableSemis = [0, 1, 2, 3];

  if (this.isCompound()) return availableSemis;

=======
  var nbr = null;
  var nbrLocX = null;
  var nbrLocY = null;
  var availableSemis = [0, 1, 2, 3];

>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
  for (var i = 0; i < edges.length; i++) {
    var direction = null;
    var edge = edges[i];

    //compound is true when orthogonalizing compound node edges
    //in that case, the direction to the compound is not counted in free locations
<<<<<<< HEAD

    if (edge.getOtherEnd(this).isCompound()) continue;
=======
    if (compound == true && edge.getOtherEnd(this).isCompound()) continue;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

    if (edge.bendpoints.length == 0) {
      nbr = edge.getOtherEnd(this);
      nbrLocX = nbr.getCenter().x;
      nbrLocY = nbr.getCenter().y;
    } else {
      nbr = edge.bendpoints[0];
      nbrLocX = nbr.x;
      nbrLocY = nbr.y;
    }

    var nodeLoc = this.getCenter();
    if (Math.round(nodeLoc.x * 100.0) / 100.0 == Math.round(nbrLocX * 100.0) / 100.0) {
      if (nbrLocY > nodeLoc.y) direction = 1;else if (nbrLocY < nodeLoc.y) direction = 3;
    } else if (Math.round(nodeLoc.y * 100.0) / 100.0 == Math.round(nbrLocY * 100.0) / 100.0) {
      if (nbrLocX > nodeLoc.x) direction = 0;else if (nbrLocX < nodeLoc.x) direction = 2;
    }

<<<<<<< HEAD
=======
    if (approx == true) {
      var dx = Math.abs(nodeLoc.x - nbrLocX);
      var dy = Math.abs(nodeLoc.y - nbrLocY);
      if (dx < dy) {
        if (!availableSemis.includes(1)) direction = 3;else if (!availableSemis.includes(3)) direction = 1;else if (nbrLocY > nodeLoc.y) direction = 1;else if (nbrLocY < nodeLoc.y) direction = 3;
      } else {
        if (!availableSemis.includes(0)) direction = 2;else if (!availableSemis.includes(2)) direction = 0;else if (nbrLocX > nodeLoc.x) direction = 0;else if (nbrLocX < nodeLoc.x) direction = 2;
      }
    }

>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
    if (direction != null) {
      var index = availableSemis.indexOf(direction);
      availableSemis.splice(index, 1);
    }
  }
  return availableSemis;
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

cholaNode.prototype.findEdgeWithNode = function (node) {
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

cholaNode.prototype.getRelativeRatiotoNodeCenter = function (portLocation) {
  var node = this;
  return new PointD((portLocation.x - node.getCenterX()) / node.getWidth() * 100, (portLocation.y - node.getCenterY()) / node.getHeight() * 100);
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
/* 8 */
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
<<<<<<< HEAD
=======
  this.routePoints = [];
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

  //stores the location of the ports on the source or target (if any) 
  this.sourcePort = null;
  this.targetPort = null;

<<<<<<< HEAD
  //stores the other half of the edge that is split after introducing a crossing dummy node
  this.coupleEdge = null;

  this.isDummy = false;
  this.parentEdge = null;
  this.parentNode = null;

  this.sourcePoint = null;
  this.targetPoint = null;

  this.sourcePointId = null;
  this.targetPointId = null;
=======
  this.width = null;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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
<<<<<<< HEAD
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
  }
};

cholaEdge.prototype.getEndpoint = function (node1Bbox, node2Loc) {
  var x = node2Loc.x;
  var y = node2Loc.y;

<<<<<<< HEAD
  //center of the node
  var midX = (node1Bbox.x1 + node1Bbox.x2) / 2;
  var midY = (node1Bbox.y1 + node1Bbox.y2) / 2;

  //slope of the line from source to target
  var m = (midY - y) / (midX - x);

  var endpoint = void 0;
=======
  for (var i = 0; i < edge.bendpoints.length; i++) {
    // create new dummy node
    var dummyNode = gm.getRoot().add(new cholaNode(gm, new PointD(0, 0), new DimensionD(1, 1)));
    dummyNode.id = edge.source + "to" + edge.target + toString(i);

    // create new dummy edge between prev and dummy node
    var _dummyEdge = gm.add(gm.getLayout().newEdge(), prev, dummyNode);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

  if (x <= midX) {
    // check "left" side
    var minXy = m * (node1Bbox.x1 - x) + y;
    if (node1Bbox.y1 <= minXy && minXy <= node1Bbox.y2) endpoint = { x: node1Bbox.x1, y: minXy };
  }

<<<<<<< HEAD
  if (x >= midX) {
    // check "right" side
    var maxXy = m * (node1Bbox.x2 - x) + y;
    if (node1Bbox.y1 <= maxXy && maxXy <= node1Bbox.y2) endpoint = { x: node1Bbox.x2, y: maxXy };
  }

  if (y <= midY) {
    // check "top" side
    var minYx = (node1Bbox.y1 - y) / m + x;
    if (node1Bbox.x1 <= minYx && minYx <= node1Bbox.x2) endpoint = { x: minYx, y: node1Bbox.y1 };
  }

  if (y >= midY) {
    // check "bottom" side
    var maxYx = (node1Bbox.y2 - y) / m + x;
    if (node1Bbox.x1 <= maxYx && maxYx <= node1Bbox.x2) endpoint = { x: maxYx, y: node1Bbox.y2 };
  }
=======
  var dummyEdge = gm.add(gm.getLayout().newEdge(), prev, edge.target);

  gm.edgeToDummyNodes[edge] = dummyNodes;

  graph.remove(edge);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

  return endpoint;
};

cholaEdge.prototype.sourceEndpoint = function () {
  //this assumes that the source or target of the edge is a rectangular node

  var sourceEndpoint = this.getEndpoint(this.source.getBbox(), this.target.getCenter());
  return sourceEndpoint;
};

<<<<<<< HEAD
cholaEdge.prototype.targetEndpoint = function () {
  //this assumes that the source or target of the edge is a rectangular node

  var targetEndpoint = this.getEndpoint(this.target.getBbox(), this.source.getCenter());
  return targetEndpoint;
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
=======
  var relativeBendPosition;
  if (!tree) relativeBendPosition = this.convertToRelativeBendPosition(bendpoint);else {
    relativeBendPosition = this.getDistWeight(node1.getCenterX(), node1.getCenterY(), node2.getCenterX(), node2.getCenterY(), bendpoint.x, bendpoint.y);
  }
  this.weight = relativeBendPosition.weight;
  this.distance = relativeBendPosition.distance;
  this.bendpoints.push([bendpoint, [dir1, dir2], [node1, node2]]);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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

cholaEdge.prototype.convertToRelativeBendPosition = function () {
  var srcTgtPointsAndTangents = this.getSrcTgtPointsAndTangents(this);

  var edgeWeight = "";
  var edgeDistance = "";

  for (var i = 0; i < this.bendpoints.length; i++) {
    var bendpoint = this.bendpoints[i];

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

<<<<<<< HEAD
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
=======
  //If the difference is not -2 and not 6 then the direction of the distance is negative
  if (dir1 - dir2 != -2 && dir1 - dir2 != 6) {
    if (distance != 0) {
      distance = -1 * distance;
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
    }

<<<<<<< HEAD
    this.bendpoints[i].weight = weight;
    this.bendpoints[i].distance = distance;

    if (i == 0) this.bendpoints[i].srcId = this.source.id;else this.bendpoints[i].srcId = this.bendpoints[i - 1].id;

    if (i == this.bendpoints.length - 1) this.bendpoints[i].tgtId = this.target.id;else this.bendpoints[i].tgtId = this.bendpoints[i + 1].id;

    edgeWeight = edgeWeight.concat(weight.toString()).concat(" ");
    edgeDistance = edgeDistance.concat(distance.toString()).concat(" ");
  }
  this.weight = edgeWeight;
  this.distance = edgeDistance;
=======
  return {
    weight: weight,
    distance: distance
  };
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
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
  var srcPoint = this.source.getCenter();
  var tgtPoint = this.target.getCenter();

  //m1 is the slope of the line passing through source and target
  var m1 = (tgtPoint.y - srcPoint.y) / (tgtPoint.x - srcPoint.x);

  return {
    m1: m1,
    m2: -1 / m1,
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

cholaEdge.prototype.getLine = function () {
  var sourceLoc = this.source.getCenter();
  var targetLoc = this.target.getCenter();

<<<<<<< HEAD
  var slope = (sourceLoc.y - targetLoc.y) / (sourceLoc.x - targetLoc.x);
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

  var c = sourceLoc.y - slope * sourceLoc.x;

<<<<<<< HEAD
  return {
    m: slope,
    c: c
  };
};

cholaEdge.prototype.findIntersection = function (otherEdge) {
  var intersectionPoint = void 0;
  var intersectX = void 0;
  var intersectY = void 0;
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

  var x1 = this.source.getCenterX();
  var y1 = this.source.getCenterY();

<<<<<<< HEAD
  var x2 = this.target.getCenterX();
  var y2 = this.target.getCenterY();
=======
/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

  var x3 = otherEdge.source.getCenterX();
  var y3 = otherEdge.source.getCenterY();

  var x4 = otherEdge.target.getCenterX();
  var y4 = otherEdge.target.getCenterY();

  var m1 = (y2 - y1) / (x2 - x1);
  var m2 = (y4 - y3) / (x4 - x3);

  if (m1 == Infinity || m1 == -Infinity) {
    //first line with x1, y1 and x2, y2 is vertical
    var c2 = y3 - m2 * x3;
    intersectX = x1;
    intersectY = m2 * intersectX + c2;
  } else if (m2 == Infinity || m2 == -Infinity) {
    var c1 = y1 - m1 * x1;
    intersectX = x3;
    intersectY = m1 * intersectX + c1;
  } else {
    var _c = y1 - m1 * x1;
    var _c2 = y3 - m2 * x3;

    intersectX = (_c2 - _c) / (m1 - m2);
    intersectY = m1 * intersectX + _c;
  }

  intersectionPoint = {
    x: intersectX,
    y: intersectY
  };

  return intersectionPoint;
};

module.exports = cholaEdge;

/***/ }),
<<<<<<< HEAD
/* 9 */
=======
/* 17 */
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
/***/ (function(module, exports, __webpack_require__) {

"use strict";


<<<<<<< HEAD
var LGraph = __webpack_require__(10).LGraph;
var Integer = __webpack_require__(10).Integer;
var RectangleD = __webpack_require__(10).RectangleD;
=======
var Nbr = __webpack_require__(16);
var Assignment = __webpack_require__(18);
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

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
  for (var i = 0; i < nodes.length; i++) {
    var lNode = nodes[i];

<<<<<<< HEAD
    if (recursive && lNode.child != null) {
      lNode.updateBounds();
    }
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
    }

    if (right < nodeRight) {
      right = nodeRight;
    }
<<<<<<< HEAD
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9

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

<<<<<<< HEAD
  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
  }

  margin = margin + this.parent.borderWidth / 2 + 1;

  this.left = boundingRect.x - margin;
  this.right = boundingRect.x + boundingRect.width + margin;
  this.top = boundingRect.y - margin;
  this.bottom = boundingRect.y + boundingRect.height + margin;
};

module.exports = cholaGraph;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

<<<<<<< HEAD
/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Simple, internal Object.assign() polyfill for options objects etc.

module.exports = Object.assign != null ? Object.assign.bind(Object) : function (tgt) {
  for (var _len = arguments.length, srcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    srcs[_key - 1] = arguments[_key];
=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
  }

  srcs.forEach(function (src) {
    Object.keys(src).forEach(function (k) {
      return tgt[k] = src[k];
    });
  });

<<<<<<< HEAD
=======
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
        if (i % 2 == 1) cost = cost + 3;
        if (candidate != null && cost > bestCost) {
            i1 = candidate;
            cost = bestCost;
            check = true;
            break;
        }
        // To even be considered a candidate for optimal position, the cost
        // has to be less than 0.5. Else we might start at bad and go to worse,
        // and thereby accept bad.
        if ( /*cost < 0.5 & */cost < bestCost) {
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

    // console.log(this);
    // console.log(seqs);
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
    var leafIdList = [];
    for (var i = 0; i < leaves.length; i++) {
        var node = leaves[i];
        var edge = node.edges[0];

        // if a leave node does not have to be removed, it is stored in tempNodes

        //we do not remove a node if it is a compound node
        if (compoundNodes.includes(node)) {
            tempNodes.push(node);
        }
        //we do not remove a node if it is the last node left inside a compound node
        else if (node.getParent().id !== 'undefined' && compoundNodes.includes(node.getParent())) {
                var children = node.getParent().child.nodes;
                if (children.length === 1) {
                    tempNodes.push(node);
                } else if (children.length == 2) {
                    //check if a 1-degree neighbor of a 1-degree node has already been added to the leafnodes
                    var child1 = children[0];
                    var child2 = children[1];

                    if (child1.getDegree == 1 && child2.getDegree == 1) {
                        var _edge = child1.edges[0];
                        if (_edge.getOtherEnd().id == child2.id) {
                            //BOTH 1 DEGREE NODES ARE CONNECTED TO EACH other

                            //check if child2 has been added to the leaf nodes
                            if (node.id == child1.id && leafIdList.includes(child2.id)) {
                                //if child2 has already been added to the list, then we dont add child1 to the list
                                tempNodes.push(node);
                            } else if (node.id == child2.id && leafIdList.includes(child1.id)) {
                                //if child2 has already been added to the list, then we dont add child1 to the list
                                tempNodes.push(node);
                            } else {
                                leafNodes.push(node);
                                leafIdList.push(node.id);
                            }
                        }
                    }
                }
            }
            //we do not remove nodes with intergraph edges
            else if (edge.source.owner !== edge.target.owner) {
                    tempNodes.push(node);
                } else {
                    leafNodes.push(node);
                    leafIdList.push(node.id);
                }
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

>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9
  return tgt;
};

/***/ }),
<<<<<<< HEAD
/* 12 */
/***/ (function(module, exports) {

=======
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
>>>>>>> 87b82d68aad27ca2205e5ff1513e0132bd5760c9


/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
});
