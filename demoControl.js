// Variables and Constants
const sampleGraphs = document.getElementById("sampleGraphs");

// Clear Selections/Options at start
document.getElementById("sampleGraphs").selectedIndex = 0;

// Initial Layout on opening the page
var cy = window.cy = cytoscape({
          container: document.getElementById('cy'),

          layout: {
            name: 'random',
            animate: false
          },
          style: [
            {
              selector: 'node',
              style: {
                'background-color': '#ad1a66',
                'label': 'data(id)'
              }
            },
            {
                selector: 'node:selected',
                style: {
                    'border-color': 'black',
                    'border-width': '3px'
                }
            },
            {
              selector: ':parent',
              style: {
                'background-opacity': 0.333
              }
            },

            {
              selector: 'edge',
              style: {
                'width': 3,
                'line-color': '#ad1a66',
                'edge-distances': 'node-position'
              }
            },
            {
              selector: 'edge:selected',
              style: {
                'width': 3,
                'line-color': 'black',
                'edge-distances': 'node-position'
              }
            }
          ],
          elements: {
              nodes: [
                  { data: { id: 'n1', name: 'n1' } },
                  // { data: { id: 'n2', name: 'n2', parent: "n1"} },
                  { data: { id: 'n3', name: 'n3', parent: "n1" } },
                  // { data: { id: 'n4', name: 'n4', parent: "n1" } },
                  { data: { id: 'n5', name: 'n5' } },
                  { data: { id: 'n6', name: 'n6' } },
                  { data: { id: 'n7', name: 'n7' } },
                  { data: { id: 'n8', name: 'n8' } },
                  { data: { id: 'n9', name: 'n9' } },
                  { data: { id: 'n10', name: 'n10' } },
                  { data: { id: 'n11', name: 'n11' } },
                  { data: { id: 'n12', name: 'n12', parent: "n22"  } },
                  // { data: { id: 'n13', name: 'n13', parent: "n22"  } },
                  // { data: { id: 'n14', name: 'n14', parent: "n22"  } },
                  { data: { id: 'n15', name: 'n15', parent: "n23" } },
                  { data: { id: 'n16', name: 'n16', parent: "n22"  } },
                  { data: { id: 'n17', name: 'n17', parent: "n22"  } },
                  { data: { id: 'n18', name: 'n18', parent: "n22"  } },
                  { data: { id: 'n19', name: 'n19' } },
                  { data: { id: 'n20', name: 'n20' } },
                  // { data: { id: 'n21', name: 'n21' } },
                  { data: { id: 'n22', name: 'n22' } },
                  { data: { id: 'n23', name: 'n23', parent: "n22" } },
                  // { data: { id: 'n24', name: 'n24', parent: "n25" } },
                  // { data: { id: 'n25', name: 'n25', parent: "n23" } },
                  // { data: { id: 'n26', name: 'n26', parent: "n25" } },
                  // { data: { id: 'n27', name: 'n27' } },
                  // { data: { id: 'n28', name: 'n28' } },
                  // { data: { id: 'n29', name: 'n29' } },
                  // { data: { id: 'n30', name: 'n30' } },
                  // { data: { id: 'n31', name: 'n31' } }
              ],
              edges: [
                  // { data: { source: 'n2', target: 'n3' } },
                  // { data: { source: 'n4', target: 'n3' } },
                  { data: { source: "n3", target: "n5" } },
                  { data: { source: "n5", target: "n6" } },
                  { data: { source: 'n5', target: 'n7' } },
                  { data: { source: "n7", target: "n8" } },
                  { data: { source: "n8", target: "n9" } },
                  { data: { source: 'n7', target: 'n10' } },
                  { data: { source: 'n6', target: 'n11' } },
                  { data: { source: "n7", target: "n11" } },
                  { data: { source: "n9", target: "n10" } },
                  { data: { source: 'n10', target: 'n11' } },
                  { data: { source: 'n10', target: 'n12' } },
                  // { data: { source: "n12", target: "n13" } },
                  // { data: { source: "n12", target: "n14" } },
                  { data: { source: "n12", target: "n15" } },
                  { data: { source: 'n15', target: 'n16' } },
                  { data: { source: 'n15', target: 'n17' } },
                  { data: { source: "n15", target: "n18" } },
                  { data: { source: "n17", target: "n19" } },
                  { data: { source: 'n17', target: 'n20' } },
                  { data: { source: 'n19', target: 'n20' } },
                  // { data: { source: "n19", target: "n21" } },
                  // { data: { source: "n27", target: "n28" } },
                  // { data: { source: "n28", target: "n29" } },
                  // { data: { source: "n29", target: "n30" } },
                  // { data: { source: "n30", target: "n31" } },
                  // { data: { source: "n31", target: "n27" } }

              ]
          }
      });

document.getElementById("cholaLayoutButton").addEventListener("click", function(){
  //some edge types may have been changed to segments
  //so we convert them back to the original type haystack
  var allEdges = cy.edges();
  for (let i = 0; i < allEdges.length; i++)
  {
    allEdges[i].css("curve-style", "haystack");
  }

  var layout = cy.layout({
    name: 'chola',
    animate: 'end',
    animationEasing: 'ease-out',
    animationDuration: 1000,
    randomize: true
  });

  layout.run();
});

document.getElementById("randomize").addEventListener("click", function(){
  //some edge types may have been changed to segments
  //so we convert them back to the original type haystack
  var allEdges = cy.edges();
  for (let i = 0; i < allEdges.length; i++)
  {
    allEdges[i].css("curve-style", "haystack");
  }

  var layout = cy.layout({
    name: 'random',
    animate: true,
    animationDuration: 1000,
    animationEasing: 'ease-out'
  });
  layout.run();
});

document.getElementById("cose").addEventListener("click", function(){
  //some edge types may have been changed to segments
  //so we convert them back to the original type haystack
  var allEdges = cy.edges();
  for (let i = 0; i < allEdges.length; i++)
  {
    allEdges[i].css("curve-style", "haystack");
    allEdges[i].css("edge", "haystack");
  }

  var layout = cy.layout({
    name: 'cose-bilkent',
    animate: true,
    animationDuration: 1000,
    animationEasing: 'ease-out'
  });

  layout.run();
});

// Sample File Changer
document.getElementById("sampleGraphs").addEventListener("change",function(){
    window.cy.startBatch();
    window.cy.style().clear();
    window.cy.remove('edges');
    window.cy.remove('nodes');

    if( sampleGraphs.value == "1" ) {
        fetch("samples/sample1.json")
            .then(response => response.json())
            .then(json => { //console.log(json)
              window.cy.json(json);
              window.cy.nodes().forEach(function(node){
                node.data('width', node.width());
                node.data('height', node.height());
              });
              window.cy.edges().forEach(function(edge){
                edge.style({
                  'edge-distances': 'node-position'
                });
              });
            });
    } else if(sampleGraphs.value == "2" ) {
        fetch("samples/sample2.json")
            .then(response => response.json())
            .then(json => { //console.log(json)
              window.cy.json(json);
              let i = 0;
              window.cy.nodes().forEach(function(node){
                let width = [30, 50, 70, 90, 110];
                let size = width[i%5];
                i++;
                node.style({
                  'width': size,
                  'height': size
                });
                node.data('width', node.width());
                node.data('height', node.height());
              });
              window.cy.edges().forEach(function(edge){
                edge.style({
                  'edge-distances': 'node-position'
                });
              });

            });
    } else if( sampleGraphs.value == "3"){
        fetch("samples/sample3.json")
            .then(response => response.json())
            .then(json => { console.log(json)
              window.cy.json(json);
              window.cy.nodes().forEach(function(node){
                node.data('width', node.width());
                node.data('height', node.height());
              });
              window.cy.edges().forEach(function(edge){
                edge.style({
                  'edge-distances': 'node-position'
                });
              });
            });
    } else if( sampleGraphs.value == "4"){
       fetch("samples/sample4.json")
            .then(response => response.json())
            .then(json => { console.log(json)
              window.cy.json(json);
              let i = 0;
              window.cy.nodes().forEach(function(node){
                let width = [30, 50, 70, 90, 110];
                let size = width[i%5];
                i++;
                node.style({
                  'width': size,
                  'height': size
                });
                node.data('width', node.width());
                node.data('height', node.height());
              });
              window.cy.edges().forEach(function(edge){
                edge.style({
                  'edge-distances': 'node-position'
                });
              });
            });
    }

    window.cy.endBatch();
});
