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
                'opacity': 0.75
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
                'edge-distances': 'node-position',
                'line-cap': 'round',
                'targetEndpoint': 'outside-to-node',
                'sourceEndpoint': 'outside-to-node',
                'curve-style': 'straight'
              }
            },
            {
              selector: 'edge:selected',
              style: {
                'width': 3,
                'line-color': 'black',
                'edge-distances': 'node-position',
                'line-cap': 'round'
              }
            }
          ],
          elements: {
               nodes: [
                  { data: { id: 'n1', name: 'n1' } },
                  { data: { id: 'n3', name: 'n3', parent: "n1" } },
                  { data: { id: 'n5', name: 'n5' } },
                  { data: { id: 'n6', name: 'n6' } },
                  { data: { id: 'n7', name: 'n7' } },
                  { data: { id: 'n8', name: 'n8' } },
                  { data: { id: 'n9', name: 'n9' } },
                  { data: { id: 'n10', name: 'n10' } },
                  { data: { id: 'n11', name: 'n11' } },
                  { data: { id: 'n12', name: 'n12', parent: "n22"  } },
                  { data: { id: 'n15', name: 'n15', parent: "n23" } },
                  { data: { id: 'n16', name: 'n16', parent: "n22"  } },
                  { data: { id: 'n17', name: 'n17', parent: "n22"  } },
                  { data: { id: 'n18', name: 'n18', parent: "n22"  } },
                  { data: { id: 'n19', name: 'n19' } },
                  { data: { id: 'n20', name: 'n20' } },
                  { data: { id: 'n22', name: 'n22' } },
                  { data: { id: 'n23', name: 'n23', parent: "n22" } },
              ],
              edges: [
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
                  { data: { source: "n12", target: "n15" } },
                  { data: { source: 'n15', target: 'n16' } },
                  { data: { source: 'n15', target: 'n17' } },
                  { data: { source: "n15", target: "n18" } },
                  { data: { source: "n17", target: "n19" } },
                  { data: { source: 'n17', target: 'n20' } },
                  { data: { source: 'n19', target: 'n20' } },

              ]
          }
      });

document.getElementById('importGraphML-input').addEventListener('change', function (evt) 
{
    document.getElementById("sampleGraphs").selectedIndex = -1;

    let files = evt.target.files;
    let fileExtension = files[0].name.split('.').pop();
    let reader = new FileReader();
    let contents;
    reader.readAsText(files[0]);
    reader.onload = function (event) {
        // Contents is a string of the graphml
        contents = event.target.result;

        // Update Cytoscape
        window.cy.startBatch();
        window.cy.style().clear();
        window.cy.remove('nodes');
        window.cy.remove('edges');

        cy.json({elements: JSON.parse(contents)});

        window.cy.style()
            .selector('node').style({
                'background-color': '#ad1a66',
                'opacity': 0.75
            })
            .selector('node:selected').style({
                'border-color': 'black',
                'border-width': '3px'
            })
            .selector('node:parent').style({
                'background-opacity': 0.333,
                'padding': 10
            })
            .selector('edge').style({
                'width': 3,
                'line-color': '#ad1a66',
                'edge-distances': 'node-position',
                'line-cap': 'round',
                'targetEndpoint': 'outside-to-node',
                'sourceEndpoint': 'outside-to-node',
                'curve-style': 'straight'
            })
            .selector('edge:selected').style({
                'width': 3,
                'line-color': 'black',
                'edge-distances': 'node-position',
                'line-cap': 'round'
            })
            .update();
        window.cy.endBatch();

    };
});

document.getElementById("cholaLayoutButton").addEventListener("click", function(){
  //some edge types may have been changed to segments
  //so we convert them back to the original type haystack
  var allEdges = cy.edges();
  for (let i = 0; i < allEdges.length; i++)
  {
    allEdges[i].css("curve-style", "straight");
    allEdges[i].css("targetEndpoint", "outside-to-node");
    allEdges[i].css("sourceEndpoint", "outside-to-node");
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
    allEdges[i].css("curve-style", "straight");
    allEdges[i].css("targetEndpoint", "outside-to-node");
    allEdges[i].css("sourceEndpoint", "outside-to-node");
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
    allEdges[i].css("curve-style", "straight");
    allEdges[i].css("targetEndpoint", "outside-to-node");
    allEdges[i].css("sourceEndpoint", "outside-to-node");
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
document.getElementById("sampleGraphs").addEventListener("change",function() 
{
    window.cy.startBatch();
    window.cy.style().clear();
    window.cy.remove('edges');
    window.cy.remove('nodes');

    if( sampleGraphs.value == "1" ) 
    {
        fetch("samples/sample1.json")
        .then(response => response.json())
        .then(json => 
        { //console.log(json)
            window.cy.json(json);
            window.cy.nodes().forEach(function(node)
            {
                node.data('width', node.width());
                node.data('height', node.height());
                node.style({
                  'opacity': 0.75
                });
            });
            window.cy.edges().forEach(function(edge)
            {
                edge.style({
                  'edge-distances': 'node-position',
                  'line-cap': 'round',
                  'targetEndpoint': 'outside-to-node',
                  'sourceEndpoint': 'outside-to-node',
                  'curve-style': 'straight'
                });
            });
        });
    } 
    else if(sampleGraphs.value == "2" ) {
        fetch("samples/sample2.json")
            .then(response => response.json())
            .then(json => { 
              window.cy.json(json);
              let i = 0;
              window.cy.nodes().forEach(function(node){
                let width = [30, 50, 70, 90, 110];
                let size = width[i % 5];
                i++;
                node.style({
                  'width': size,
                  'height': size,
                  'opacity': 0.75,
                  'font-size': 25
                });
                node.data('width', node.width());
                node.data('height', node.height());

              });
              window.cy.edges().forEach(function(edge){
                edge.style({
                  'edge-distances': 'node-position',
                  'line-cap': 'round',
                  'targetEndpoint': 'outside-to-node',
                  'sourceEndpoint': 'outside-to-node',
                  'curve-style': 'straight'
                });
              });

            });
    } else if( sampleGraphs.value == "3"){
        fetch("samples/sample3.json")
            .then(response => response.json())
            .then(json => { //console.log(json)
              window.cy.json(json);
              window.cy.nodes().forEach(function(node){
                node.data('width', node.width());
                node.data('height', node.height());
                node.style({
                  'opacity': 0.75
                });
              });
              window.cy.edges().forEach(function(edge){
                edge.style({
                  'edge-distances': 'node-position',
                  'line-cap': 'round',
                  'targetEndpoint': 'outside-to-node',
                  'sourceEndpoint': 'outside-to-node',
                  'curve-style': 'straight'
                });
              });
            });
    } else if( sampleGraphs.value == "4"){
       fetch("samples/sample4.json")
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
                  'height': size,
                  'opacity': 0.75
                });
                node.data('width', node.width());
                node.data('height', node.height());
              });
              window.cy.edges().forEach(function(edge){
                edge.style({
                  'edge-distances': 'node-position',
                  'line-cap': 'round',
                  'targetEndpoint': 'outside-to-node',
                  'sourceEndpoint': 'outside-to-node',
                  'curve-style': 'straight'
                });
              });
            });
    }

    window.cy.endBatch();
});
