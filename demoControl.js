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

  //for (let i = 0; i < 5; i++)
  //{

    let start = performance.now();

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

    let end = performance.now();
    evaluate(end - start);
  //}
});

function evaluate(layoutTime){
  let evaluate = document.getElementById("evaluate").checked;
  let graphProperties;
  if(evaluate)
    graphProperties = cy.layvo("get").generalProperties();
  //document.getElementById("numOfNodes").innerHTML = cy.nodes().length;
  //document.getElementById("numOfEdges").innerHTML = cy.edges().length;
  console.log("layout time");
  document.getElementById("layoutTime").innerHTML = evaluate ? Math.round(layoutTime * 10 ) / 10 + " ms" : "-"; 
  console.log(Math.round(layoutTime * 10 ) / 10);
  document.getElementById("numberOfEdgeCrosses").innerHTML = evaluate ? graphProperties.numberOfEdgeCrosses : "-";
  console.log(Math.round(layoutTime * 10 ) / 10);
  document.getElementById("numberOfNodeOverlaps").innerHTML = evaluate ? graphProperties.numberOfNodeOverlaps : "-";
  console.log(graphProperties.numberOfNodeOverlaps);
  document.getElementById("averageEdgeLength").innerHTML = evaluate ? Math.round(graphProperties.averageEdgeLength * 10 ) / 10 : "-";
  console.log(Math.round(graphProperties.averageEdgeLength * 10 ) / 10);
  document.getElementById("totalArea").innerHTML = evaluate ? Math.round(graphProperties.totalArea * 10 ) / 10 : "-";
  console.log(Math.round(graphProperties.totalArea * 10 ) / 10);
}

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

let testFileNames = [
    "g_00010_01.json",
    "g_00010_04.json",
    "g_00010_06.json",
    // "g_00020_04.json",
    // "g_00020_05.json",
    // "g_00020_08.json",
    // "g_00030_05.json",
    // "g_00030_07.json",
    // "g_00030_09.json",
    // "g_00040_01.json",
    // "g_00040_05.json",
    // "g_00040_08.json",
    // "g_00050_04.json",
    // "g_00050_05.json",
    // "g_00050_07.json",
    // "g_00060_01.json",
    // "g_00060_02.json",
    // "g_00060_08.json",
    // "g_00070_03.json",
    // "g_00070_07.json",
    // "g_00070_10.json",
    // "g_00080_01.json",
    // "g_00080_02.json",
    // "g_00080_05.json",
    // "g_00090_02.json",
    // "g_00090_05.json",
    // "g_00090_09.json",
    // "g_00100_04.json",
    // "g_00100_07.json",
    // "g_00100_02.json",
    // "g_00110_02.json",
    // "g_00110_01.json",
    // "g_00110_04.json",
    // "g_00120_01.json",
    // "g_00120_05.json",
    // "g_00120_09.json",
    // "g_00130_01.json",
    // "g_00130_05.json",
    // "g_00130_02.json",
    // "g_00140_10.json",
    // "g_00140_09.json",
    // "g_00140_03.json",
    // "g_00150_09.json",
    // "g_00150_02.json",
    // "g_00150_08.json",
    // "g_00160_04.json",
    // "g_00160_09.json",
    // "g_00160_07.json",
    // "g_00170_07.json",
    // "g_00170_09.json",
    // "g_00170_03.json",
    // "g_00180_02.json",
    // "g_00180_08.json",
    // "g_00180_10.json",
    // "g_00190_01.json",
    // "g_00190_05.json",
    // "g_00190_09.json",
    // "g_00200_10.json",
    // "g_00200_06.json",
    // "g_00200_03.json",
    // "g_00210_06.json",
    // "g_00210_09.json",
    // "g_00210_01.json",
    // "g_00220_03.json",
    // "g_00220_06.json",
    // "g_00220_04.json",
    // "g_00230_07.json",
    // "g_00230_06.json",
    // "g_00230_01.json",
    // "g_00240_02.json",
    // "g_00240_07.json",
    // "g_00240_06.json",
    // "g_00250_02.json",
    // "g_00250_03.json",
    // "g_00250_10.json",
    // "g_00260_01.json",
    // "g_00260_04.json",
    // "g_00260_07.json",
    // "g_00270_03.json",
    // "g_00270_09.json",
    // "g_00270_04.json",
    // "g_00280_02.json",
    // "g_00280_06.json",
    // "g_00280_10.json",
    // "g_00290_01.json",
    // "g_00290_02.json",
    // "g_00290_10.json",
    // "g_00300_04.json",
    // "g_00300_10.json",
    // "g_00300_09.json",
    // "g_00310_10.json",
    // "g_00310_02.json",
    // "g_00310_09.json",
    // "g_00320_02.json",
    // "g_00320_01.json",
    // "g_00320_09.json",
    // "g_00330_07.json",
    // "g_00330_02.json",
    // "g_00330_01.json",
    // "g_00340_01.json",
    // "g_00340_03.json",
    // "g_00340_07.json",
    // "g_00350_01.json",
    // "g_00350_03.json",
    // "g_00350_04.json",
    // "g_00360_09.json",
    // "g_00360_08.json",
    // "g_00360_03.json",
    // "g_00370_02.json",
    // "g_00370_08.json",
    // "g_00370_09.json",
    // "g_00380_04.json",
    // "g_00380_08.json",
    // "g_00380_01.json",
    // "g_00390_09.json",
    // "g_00390_10.json",
    // "g_00390_02.json",
    // "g_00400_05.json",
    // "g_00400_08.json",
    // "g_00400_09.json",
    // "g_00410_07.json",
    // "g_00410_03.json",
    // "g_00410_04.json",
    // "g_00420_10.json",
    // "g_00420_03.json",
    // "g_00420_02.json",
    // "g_00430_01.json",
    // "g_00430_02.json",
    // "g_00430_08.json",
    // "g_00440_01.json",
    // "g_00440_03.json",
    // "g_00440_05.json",
    // "g_00450_07.json",
    // "g_00450_09.json",
    // "g_00450_10.json",
    // "g_00460_03.json",
    // "g_00460_07.json",
    // "g_00460_08.json",
    // "g_00470_01.json",
    // "g_00470_02.json",
    // "g_00470_06.json",
    // "g_00480_07.json",
    // "g_00480_02.json",
    // "g_00480_04.json",
    // "g_00490_02.json",
    // "g_00490_05.json",
    // "g_00490_04.json",
    // "g_00500_01.json",
    // "g_00500_03.json",
    // "g_00500_07.json"
];

let numberOfTests = 5;

let testResultDuration_chola = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultDuration_chola[i] = new Array(numberOfTests + 1);

let testResultEdgeCrossing_chola = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultEdgeCrossing_chola[i] = new Array(numberOfTests + 1);

let testResultAvgEdgeLength_chola = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultProperly_chola[i] = new Array(numberOfTests + 1);

let testResultNodeOverlaps_chola = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultAvgEdgeLength_chola[i] = new Array(numberOfTests + 1);

let testResultArea_chola = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultArea_chola[i] = new Array(numberOfTests + 1);

let testResultDuration_fcose = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultDuration_fcose[i] = new Array(numberOfTests + 1);

let testResultEdgeCrossing_fcose = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultEdgeCrossing_fcose[i] = new Array(numberOfTests + 1);

let testResultNodeOverlaps_fcose = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultNodeOverlaps_fcose[i] = new Array(numberOfTests + 1);

let testResulttestResultAvgEdgeLength_fcose = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultAvgEdgeLength_fcose[i] = new Array(numberOfTests + 1);

let testResultArea_fcose = new Array(testFileNames.length);
for(let i = 0; i < testFileNames.length; i++) testResultArea_fcose[i] = new Array(numberOfTests + 1);

let run = 1;

// Load File
// Need a button to start things off
document.getElementById("testing").addEventListener("click",testRomeGraphs);

function testRomeGraphs(){

  let moveTo = "./new";
  let toPath = path.join(moveTo, "fcose_vs_chola.csv");
  let toPathRuntime = path.join(moveTo, "fcose_chola_fixed_node_runtime.csv");
  let toPathNodeOverlap = path.join(moveTo, "fcose_chola_fixed_node_node_overlap.csv");
  let toPathEdgeCrossing = path.join(moveTo, "fcose_chola_fixed_node_edge_crossing.csv");
  let toPathAvgEdgeLength = path.join(moveTo, "fcose_chola_fixed_node_avg_edge_length.csv");
  let toPathTotalArea = path.join(moveTo, "fcose_chola_fixed_node_total_area.csv");

    for(let index = 0; index < testFileNames.length; index++) {
        let fileName = "old/" + testFileNames[index];
        testResultDuration_CoSEP[index][0] = testFileNames[index];
        testResultEdgeCrossing_CoSEP[index][0] = testFileNames[index];
        testResultProperly_CoSEP[index][0] = testFileNames[index];
        testResultNodeOverlaps_CoSEP[index][0] = testFileNames[index];
        testResultDuration_CoSE[index][0] = testFileNames[index];
        testResultEdgeCrossing_CoSE[index][0] = testFileNames[index];
        testResultProperly_CoSE[index][0] = testFileNames[index];
        testResultNodeOverlaps_CoSE[index][0] = testFileNames[index];

        testResultDuration_chola[index][0] = testFileNames[index];
        testResultEdgeCrossing_chola[index][0] = testFileNames[index];
        testResultAvgEdgeLength_chola[index][0] = testFileNames[index];
        testResultNodeOverlaps_chola[index][0] = testFileNames[index];
        testResultArea_chola[index][0] = testFileNames[index];
        testResultDuration_fcose[index][0] = testFileNames[index];
        testResultEdgeCrossing_fcose[index][0] = testFileNames[index];
        testResultNodeOverlaps_fcose[index][0] = testFileNames[index];
        testResulttestResultAvgEdgeLength_fcose[index][0] = testFileNames[index];
        testResultArea_fcose[index][0] = testFileNames[index];

        fetch(fileName)
            .then(response => response.text())
            .then(text => {
                // Update Cytoscape
                window.cy.remove('nodes');
                window.cy.remove('edges');
                cy.json({elements: JSON.parse(text)});

                // Testing--------------------------------------------------------------------------------------------------
                // CoSEP
                let ranTwice = false;
                for (let run = 1; run < numberOfTests + 1;) {
                    let layout = window.cy.layout({
                        name: 'chola',
                        animate: 'end',
                        animationEasing: 'ease-out',
                        animationDuration: 1000,
                        randomize: true
                    });

                    // Duration Time
                    let start = performance.now();
                    layout.run();
                    //let tempDur = Math.floor((performance.now() - start) * 100) / 100;
                    let graphProperties = cy.layvo("get").generalProperties();
                    let layoutTime = Math.round((performance.now() - start) * 100) / 100;
                    let numberOfEdgeCrosses = graphProperties.numberOfEdgeCrosses;
                    let numberOfNodeOverlaps = graphProperties.numberOfNodeOverlaps;
                    let averageEdgeLength = Math.round(graphProperties.averageEdgeLength * 100 ) / 100;
                    let totalArea = Math.round(graphProperties.totalArea * 100 ) / 100;

                    testResultDuration_chola[index][run] = layoutTime;
                    testResultEdgeCrossing_chola[index][run] = numberOfEdgeCrosses;
                    testResultAvgEdgeLength_chola[index][run] = averageEdgeLength;
                    testResultNodeOverlaps_chola[index][run] = numberOfNodeOverlaps;
                    testResultArea_chola[index][run] = totalArea;
                }

                // CoSE
                //ranTwice = false;
                for (let run = 1; run < numberOfTests + 1;) {
                    let layout = window.cy.layout({
                        name: 'fcose', 
                        quality: 'default', 
                        step: 'all', 
                        packComponents: false, 
                        animate: false, 
                        fit: false
                    });

                    // Duration Time
                    let start = performance.now();
                    layout.run();
                    let graphProperties = cy.layvo("get").generalProperties();
                    let layoutTime = Math.round((performance.now() - start) * 100) / 100;
                    let numberOfEdgeCrosses = graphProperties.numberOfEdgeCrosses;
                    let numberOfNodeOverlaps = graphProperties.numberOfNodeOverlaps;
                    let averageEdgeLength = Math.round(graphProperties.averageEdgeLength * 100 ) / 100;
                    let totalArea = Math.round(graphProperties.totalArea * 100 ) / 100;

                    //calcPerformanceMetrics();

                    //if(tempDur < 1500) {
                    testResultDuration_fcose[index][0] = layoutTime;
                    testResultEdgeCrossing_fcose[index][0] = numberOfEdgeCrosses;
                    testResultNodeOverlaps_fcose[index][0] = averageEdgeLength;
                    testResulttestResultAvgEdgeLength_fcose[index][0] = numberOfNodeOverlaps;
                    testResultArea_fcose[index][0] = totalArea;

                    //     run++;
                    // }else{
                    //     ranTwice = true;
                    // }
                }

                if(index === testFileNames.length - 1){
                    alert('Done');
                }
            });
    }
}

// Doesn't work like this :/ . But copy-pasting it into the browser works
function downloadTestResults() {
    exportToCsv('testResultDuration_CoSE', testResultDuration_CoSE);
    exportToCsv('testResultDuration_CoSEP', testResultDuration_CoSEP);
    exportToCsv('testResultEdgeCrossing_CoSE', testResultEdgeCrossing_CoSE);
    exportToCsv('testResultEdgeCrossing_CoSEP', testResultEdgeCrossing_CoSEP);
    exportToCsv('testResultProperly_CoSE', testResultProperly_CoSE);
    exportToCsv('testResultProperly_CoSEP', testResultProperly_CoSEP);
    exportToCsv('testResultNodeOverlaps_CoSE', testResultNodeOverlaps_CoSE);
    exportToCsv('testResultNodeOverlaps_CoSEP', testResultNodeOverlaps_CoSEP);
}

// Export to CSV file -----------------------------------------
function exportToCsv(filename, rows) {
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };

    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


