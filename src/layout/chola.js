// n.b. .layoutPositions() handles all these options for you

//let cholaLayout = require('../chola/cholaLayout');
//let cholaConstants = require('../chola/cholaConstants');
const CoSELayout = require('cose-base').CoSELayout;
const CoSEConstants = require('cose-base').CoSEConstants;
const cholaConstants = require('../chola/cholaConstants');
const cholaGraphManager = require('../chola/cholaGraphManager');
const cholaNode = require('../chola/cholaNode');
const cholaEdge = require('../chola/cholaEdge');
const cholaGraph = require('../chola/cholaGraph');
const PointD = require('cose-base').layoutBase.PointD;
const DimensionD = require('cose-base').layoutBase.DimensionD;
const Layout = require('cose-base').layoutBase.Layout;
const HashMap = require('cose-base').layoutBase.HashMap;

const assign = require('../assign');

const defaults = Object.freeze({
  // animation
  animate: undefined, // whether or not to animate the layout
  animationDuration: undefined, // duration of animation in ms, if enabled
  animationEasing: undefined, // easing of animation, if enabled
  animateFilter: ( node, i ) => true, // whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions

  // viewport
  pan: undefined, // pan the graph to the provided position, given as { x, y }
  zoom: undefined, // zoom level as a positive number to set after animation
  fit: undefined, // fit the viewport to the repositioned nodes, overrides pan and zoom

  // modifications
  padding: undefined, // padding around layout
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  spacingFactor: undefined, // a positive value which adjusts spacing between nodes (>1 means greater than usual spacing)
  nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node (default true)
  transform: ( node, pos ) => pos, // a function that applies a transform to the final node position

  // layout event callbacks
  ready: () => {}, // on layoutready
  stop: () => {} // on layoutstop
});

class cholaLayout {
  constructor( options ){
    Layout.call(this);
    this.options = assign( {}, defaults, options );
    this.gm;
    this.idList = [];
  }

  run(){
    var ready;
    var frameId;
    var idToLNode = this.idToLNode = {};
    var cholalayout = this.layout = new cholaLayout();
    var self = this;
    var cyNodes;

    self.stopped = false;

    this.cy = this.options.cy;

    this.cy.trigger({ type: 'layoutstart', layout: this });

    var gm = cholalayout.newGraphManager();
    this.gm = gm;

    var nodes = this.options.eles.nodes();
    var edges = this.options.eles.edges();

    this.processChildrenList(gm.addRoot(), this.getTopMostNodes(nodes), cholalayout);

    for (var i = 0; i < edges.length; i++) {
      var edge = edges[i];
      var sourceNode = this.idToLNode[edge.data("source")];
      var targetNode = this.idToLNode[edge.data("target")];
      if (sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length == 0) {
        var e1 = gm.add(cholalayout.newEdge(), sourceNode, targetNode);
        e1.id = edge.id();
      }
    }

    //finds and saves the compound nodes
    var compoundNodes = this.findCompoundNodes();
    //removes the leaf nodes
    this.removeLeafNodes(compoundNodes);
    //transfers cHolaNodes to CoseNodes
    this.coseOnCore();
  }
  //return the list of compound nodes
  findCompoundNodes() {
      var allNodes = this.gm.getAllNodes();
      var compoundNodes = [];
      for (var i = 0; i < allNodes.length; i++) {
          var node = allNodes[i];
          if (node.isCompound())
          {
            compoundNodes.push(node);
          }
      }
      return compoundNodes;
  };

  getTopMostNodes(nodes) {
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

//removes all leaf nodes except compound leaf nodes
  removeLeafNodes(compoundNodes) {
    var allNodes = this.gm.getAllNodes();
    var count = 0;
    do
    {
      count = 0;
      for (var i = 0; i < allNodes.length; i++) {
        var node = allNodes[i];
        count = 0;
        if (node.id === "n4")
        {console.log("found n4");}
        if ((this.getNodeDegree(node) === 0 || this.getNodeDegree(node) === 1) && !compoundNodes.includes(node))
        {

              count++;
              node.owner.remove(node);
        }
      }
      this.gm.resetAllEdges();
      this.gm.resetAllNodes();
      this.gm.getAllEdges();
      allNodes = this.gm.getAllNodes();
    }while(count!==0);
};

  // Get degree of a node depending of its edges and independent of its children
  getNodeDegree(node) {
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

  findCyCoreNodes(idList)
  {
    var cyCoreNodes = [];
    var cyLeafNodes = [];
    var cyNodes = this.cy.nodes();
    for (let i = 0; i < cyNodes.length; i++){
      if (idList.includes(i)) {
        cyCoreNodes.push(cyNodes[i]);
      }
      else {
        cyLeafNodes.push(cyNodes[i]);
        this.cy.remove(cyNodes[i]);
      }
    }
    return [cyCoreNodes, cyLeafNodes];
  }

  coseOnCore() {
    let newCoSENodes = [];
    let newCoSEEdges = [];

    // Used for holding conversion mapping between chola and cose nodes.
    let cholaNodeToCoseNode = new HashMap();

    // Used for reverse mapping between cose and chola edges while sorting
    // incident edges.
    let coseEdgeToCholaEdges = new HashMap();

    // Create a CoSE layout object
    let coseLayout = new CoSELayout();
    coseLayout.isSubLayout = false;
    coseLayout.useMultiLevelScaling = false;
    coseLayout.useFRGridVariant = true;
    coseLayout.springConstant *= 1.5;

    let gm = coseLayout.newGraphManager();
    let coseRoot = gm.addRoot();

    // Traverse through all nodes and create new CoSENode's.
    // !WARNING! = REMEMBER to set unique "id" properties to CoSENodes!!!!
    //var idList = [];
    let cholaNodes = this.gm.getAllNodes();
    for (let i = 0; i < cholaNodes.length; i++){
        let cholaNode = cholaNodes[i];
        this.idList.push(parseInt(cholaNode.id.substring(1)));
        let newNode = coseLayout.newNode(null);
        let loc = cholaNode.getLocation();
        newNode.setLocation(loc.x, loc.y);
        newNode.setWidth(cholaNode.getWidth());
        newNode.setHeight(cholaNode.getHeight());

        // !WARNING! = CoSE EXPECTS "id" PROPERTY IMPLICITLY, REMOVING IT WILL CAUSE TILING TO OCCUR ON THE WHOLE GRAPH
        newNode.id = i;

        coseRoot.add(newNode);
        newCoSENodes.push(newNode);
        cholaNodeToCoseNode.put(cholaNode, newNode);
    }

    // Used for preventing duplicate edge creation between two cose nodes
    let nodePairs = new Array(newCoSENodes.length);
    for(let i = 0; i < nodePairs.length; i++){
        nodePairs[i] = new Array(newCoSENodes.length);
    }

    // Run CoSELayout
    coseLayout.runLayout();

    // Reflect changes back to chola nodes
    // First update all cholaNodes nodes.
    for (let i = 0; i < cholaNodes.length; i++)
    {
        let cholaNode = cholaNodes[i];
        let coseNode = cholaNodeToCoseNode.get(cholaNode);
        let loc = coseNode.getLocation();
        cholaNode.setLocation(loc.x, loc.y);
    }

    let self = this;
    var getPositions = function(ele, i){
       if(typeof ele === "number") {
         ele = i;
       }
       var theId = ele.data('id');
       var lNode = self.idToLNode[theId];
       console.log(theId);
       console.log(lNode.getRect().getCenterX());
       console.log(lNode.getRect().getCenterY());
       return {
         x: lNode.getRect().getCenterX(),
         y: lNode.getRect().getCenterY()
       };

      };

      var nodes = this.findCyCoreNodes(this.idList);
      var cyCoreNodes = nodes[0];
      var cyLeafNodes = nodes[1];
      this.cy.nodes().layoutPositions(this, this.options, getPositions);


};


  getGraphManager() {
  return this.graphManager;
};

/**
 * This method creates a new graph manager associated with this layout.
 */
 newGraphManager() {
    this.graphManager = new cholaGraphManager(this);
    return this.graphManager;
};

/**
 * This method creates a new node associated with the input view node.
 */
newNode(loc, size)
{
    return new cholaNode(this.graphManager, loc, size, null);
};


/**
 * This method creates a new edge associated with the input view edge.
 */
 newEdge(source,target, vEdge)
{
    return new cholaEdge(source, target, vEdge);
};

  newGraph(vGraph) {
    return new cholaGraph(null, this.graphManager, vGraph);
};

  processChildrenList(parent, children, layout) {
    var size = children.length;
    var includeLabelsOption = this.options.nodeDimensionsIncludeLabels;
    for (var i = 0; i < size; i++) {
        var theChild = children[i];
        var children_of_children = theChild.children();
        var theNode;
        var dimensions = theChild.layoutDimensions({
          nodeDimensionsIncludeLabels: includeLabelsOption
        });

        if (theChild.outerWidth() != null && theChild.outerHeight() != null) {
          theNode = parent.add(new cholaNode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
        } else {
          theNode = parent.add(new cholaNode(this.graphManager));
        }
        // Attach id to the layout node
        theNode.id = theChild.data("id");
        // Attach the paddings of cy node to layout node
        theNode.paddingLeft = parseInt(theChild.css('padding'));
        theNode.paddingTop = parseInt(theChild.css('padding'));
        theNode.paddingRight = parseInt(theChild.css('padding'));
        theNode.paddingBottom = parseInt(theChild.css('padding'));

        //Attach the label properties to compound if labels will be included in node dimensions
        if (this.options.nodeDimensionsIncludeLabels) {
          if (theChild.isParent()) {
            var createClasslabelWidth = theChild.boundingBox({ includeLabels: true, includeNodes: false }).w;
            var labelHeight = theChild.boundingBox({ includeLabels: true, includeNodes: false }).h;
            var labelPos = theChild.css("text-halign");
            theNode.labelWidth = labelWidth;
            theNode.labelHeight = labelHeight;
            theNode.labelPos = labelPos;
          }
        }

        // Map the layout node
        this.idToLNode[theChild.data("id")] = theNode;

        if (isNaN(theNode.rect.x)) {
          theNode.rect.x = 0;
        }

        if (isNaN(theNode.rect.y)) {
          theNode.rect.y = 0;
        }

        if (children_of_children != null && children_of_children.length > 0) {
          var theNewGraph;
          theNewGraph = layout.getGraphManager().add(layout.newGraph(), theNode);
          this.processChildrenList(theNewGraph, children_of_children, layout);
          }
      }
  }


}
module.exports = cholaLayout;
