const CoSELayout = require('cose-base').CoSELayout;
const CoSEConstants = require('cose-base').CoSEConstants;
const CoSENode = require('cose-base').CoSENode;
const LayoutConstants = require('cose-base').layoutBase.LayoutConstants;
const FDLayoutConstants = require('cose-base').layoutBase.FDLayoutConstants;
const cholaConstants = require('../chola/cholaConstants');
const cholaGraphManager = require('../chola/cholaGraphManager');
const cholaNode = require('../chola/cholaNode');
const cholaLayout = require('../chola/cholaLayout');
const cholaEdge = require('../chola/cholaEdge');
const cholaGraph = require('../chola/cholaGraph');
const PointD = require('cose-base').layoutBase.PointD;
const DimensionD = require('cose-base').layoutBase.DimensionD;
const Layout = require('cose-base').layoutBase.Layout;
const HashMap = require('cose-base').layoutBase.HashMap;

const assign = require('../assign');

const defaults = Object.freeze({
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
   nodeRepulsion: 4500,
   // Type of layout animation. The option set is {'during', 'end', false}
   animate: 'end',
   // Duration for animate:end
   animationDuration: 500,

  // Ideal edge (non nested) length
  idealEdgeLength: 50,
  // Divisor to compute edge forces
  edgeElasticity: 0.45,
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 0.1,
  // Gravity force (constant)
  gravity: 0.25,
  // Maximum number of iterations to perform
  numIter: 2500,
  // For enabling tiling
  tile: true,
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
  initialEnergyOnIncremental: 0.5,

  // layout event callbacks
  ready: () => {}, // on layoutready
  stop: () => {} // on layoutstop
});

class chola {
  constructor( options ){
    //Layout.call(this);
    this.options = assign( {}, defaults, options );
    this.cholaGm;
    this.coseGm;
    this.idList = [];
    this.cholaNodeToCoseNode = new HashMap();
    this.cholaNodesMap = new HashMap();
    this.idToLNode;
  }

  run(){
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

      if (this.cholaGm.getAllEdges().length == 0)
        return;

      //finds and saves the compound nodes
      var compoundNodes = layout.findCompoundNodes(this.cholaGm);
      //removes the leaf nodes
      layout.removeLeafNodes(this.cholaGm, compoundNodes, this.idList);
      layout.deleteLeafNodes(this.cy, this.idList);
      //applies cose on the core
      layout.coseOnCore(options, coseIdToLNode, cholaNodesMap, this.cholaNodeToCoseNode);

      // Reflect changes back to chola nodes
      var cholaNodes = this.cholaGm.getAllNodes();
      for (let i = 0; i < cholaNodes.length; i++)
      {
          let cholaNode = cholaNodes[i];
          let coseNode = this.cholaNodeToCoseNode.get(cholaNode);
          let loc = coseNode.getCenter();
          cholaNode.setCenter(loc.x, loc.y);
      }

      //visualizes the layout in cytoscape map
      var getPositions = function(ele, i){
           if(typeof ele === "number") {
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
}
module.exports = chola;
