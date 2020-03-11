/**
 * JS control file for the demo
 *
 * @author Alihan Okka
 *
 * @copyright i-Vis Research Group, Bilkent University, 2007 - present
 */

// Variables and Constants
let metrics;
let selectedEdge;
let idealEdgeLength = 50;
let constraints = {};
let rotations = {};

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
              }
            }
          ],
          elements: {
              nodes: [
                  { data: { id: 'n1', name: 'n1' } },
                  { data: { id: 'n2', name: 'n2', parent: "n1"} },
                  { data: { id: 'n3', name: 'n3', parent: "n1" } },
                  { data: { id: 'n4', name: 'n4', parent: "n1" } },
                  { data: { id: 'n5', name: 'n5' } },
                  { data: { id: 'n6', name: 'n6' } },
                  { data: { id: 'n7', name: 'n7' } },
                  { data: { id: 'n8', name: 'n8' } },
                  { data: { id: 'n9', name: 'n9' } },
                  { data: { id: 'n10', name: 'n10' } },
                  { data: { id: 'n11', name: 'n11' } },
                  { data: { id: 'n12', name: 'n12', parent: "n22"  } },
                  { data: { id: 'n13', name: 'n13', parent: "n22"  } },
                  { data: { id: 'n14', name: 'n14', parent: "n22"  } },
                  { data: { id: 'n15', name: 'n15', parent: "n23" } },
                  { data: { id: 'n16', name: 'n16', parent: "n22"  } },
                  { data: { id: 'n17', name: 'n17', parent: "n22"  } },
                  { data: { id: 'n18', name: 'n18', parent: "n22"  } },
                  { data: { id: 'n19', name: 'n19' } },
                  { data: { id: 'n20', name: 'n20' } },
                  { data: { id: 'n21', name: 'n21' } },
                  { data: { id: 'n22', name: 'n22' } },
                  { data: { id: 'n23', name: 'n23', parent: "n22" } },
                  { data: { id: 'n24', name: 'n24', parent: "n25" } },
                  { data: { id: 'n25', name: 'n25', parent: "n23" } },
                  { data: { id: 'n26', name: 'n26', parent: "n25" } },
                  { data: { id: 'n27', name: 'n27' } },
                  { data: { id: 'n28', name: 'n28' } },
                  { data: { id: 'n29', name: 'n29' } },
              ],
              edges: [
                  { data: { source: 'n2', target: 'n3' } },
                  { data: { source: 'n4', target: 'n3' } },
                  { data: { source: "n3", target: "n5" } },
                  { data: { source: "n5", target: "n6" } },
                  { data: { source: 'n5', target: 'n7' } },
                  //{ data: { source: 'n6', target: 'n7' } },
                  { data: { source: "n7", target: "n8" } },
                  { data: { source: "n8", target: "n9" } },
                  { data: { source: 'n7', target: 'n10' } },
                  { data: { source: 'n6', target: 'n11' } },
                  { data: { source: "n7", target: "n11" } },
                  { data: { source: "n9", target: "n10" } },
                  { data: { source: 'n10', target: 'n11' } },
                  { data: { source: 'n10', target: 'n12' } },
                  { data: { source: "n12", target: "n13" } },
                  { data: { source: "n12", target: "n14" } },
                  { data: { source: "n12", target: "n15" } },
                  //{ data: { source: "n13", target: "n15" } },
                  { data: { source: 'n15', target: 'n16' } },
                  { data: { source: 'n15', target: 'n17' } },
                  { data: { source: "n15", target: "n18" } },
                  { data: { source: "n17", target: "n19" } },
                  { data: { source: 'n17', target: 'n20' } },
                  { data: { source: 'n19', target: 'n20' } },
                  { data: { source: "n19", target: "n21" } },
                  { data: { source: "n27", target: "n28" } },
                  { data: { source: "n28", target: "n29" } },
                  { data: { source: "n29", target: "n27" } },

              ]
          }
      });

document.getElementById("cholaLayoutButton").addEventListener("click", function(){
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
  var layout = cy.layout({
    name: 'random',
    animate: true,
    animationDuration: 1000,
    animationEasing: 'ease-out'
  });

  layout.run();
});

document.getElementById("cose").addEventListener("click", function(){
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

    constraints = {};
    rotations = {};

    if( sampleGraphs.value == "1" ) {
        fetch("samples/sample1.json")
            .then(response => response.json())
            .then(json => { console.log(json)
              window.cy.json(json);
            });
    } else if(sampleGraphs.value == "2" ) {
        fetch("samples/sample2.json")
            .then(response => response.json())
            .then(json => { console.log(json)
              window.cy.json(json);
            });
    } else if( sampleGraphs.value == "3"){
        fetch("samples/sample3.json")
            .then(response => response.json())
            .then(json => { console.log(json)
              window.cy.json(json);
            });
    } else if( sampleGraphs.value == "4"){
       fetch("samples/sample4.json")
            .then(response => response.json())
            .then(json => { console.log(json)
              window.cy.json(json);
            });
    }

    window.cy.endBatch();
});

// Changes arrow types
function changeArrowShape( edge, endpoint, portConstraintType ) {
    switch( portConstraintType ){
        case 'Free':
            if( endpoint == 'Source' )
                edge.style({ 'source-arrow-shape': 'vee', 'source-arrow-color': '#930fcf' });
            else
                edge.style({ 'target-arrow-shape': 'vee', 'target-arrow-color': '#00c6cf' });
            break;
        case 'Sided':
            if( endpoint == 'Source' )
                edge.style({ 'source-arrow-shape': 'triangle-tee', 'source-arrow-color': '#930fcf' });
            else
                edge.style({ 'target-arrow-shape': 'triangle-tee', 'target-arrow-color': '#00c6cf' });
            break;
        case 'Absolute':
            if( endpoint == 'Source' )
                edge.style({ 'source-arrow-shape': 'circle', 'source-arrow-color': '#930fcf' });
            else
                edge.style({ 'target-arrow-shape': 'circle', 'target-arrow-color': '#00c6cf' });
            break;
    }
}

// Add to history
function addToHistory( edge, endpoint, portConstraintType, portConstraintParameter ) {
    let row = logsTable.insertRow();
    row.onclick = function(event){ if(event.ctrlKey) deleteRowElements(row); };
    let cell4 = row.insertCell(0);
    let cell3 = row.insertCell(0);
    let cell2 = row.insertCell(0);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = edge.data('id');
    cell2.innerHTML = endpoint;
    cell3.innerHTML = portConstraintType;
    cell4.innerHTML = (portConstraintParameter) ? portConstraintParameter : 'N/A';
}

// Add ports that should be free
function addImplicitPorts( cytoEdge, nodeID ) {
    let node = cy.nodes().filter( "[id = '" + nodeID + "']" );
    let edges = node.connectedEdges();
    for(let i = 0; i < edges.length; i++){
        let edge = edges[i];
        if(edge == cytoEdge){
            continue;
        }

        let endpoint;
        if( edge.source().data('id') == node.data('id'))
            endpoint = 'Source';
        else
            endpoint = 'Target';

        // Does this endpoint have a constraint already defined?
        if( constraints[ edge.data('id') ] == undefined || constraints[ edge.data('id') ] == null ){
            constraints[ edge.data('id') ] = [{
                endpoint: endpoint,
                portConstraintType: 'Free',
                portConstraintParameter: 'N/A'
            }];

            addToHistory( edge, endpoint, 'Free', 'N/A' );
            changeArrowShape( edge, endpoint, 'Free' );
        } else {
            let alreadyCons =  constraints[ edge.data('id') ];
            let bool = false;
            alreadyCons.forEach( function (cons) {
                if(cons.endpoint == endpoint){
                    bool = true;
                }
            });

            // Other endpoint has a constraint
            if(!bool){
                constraints[ edge.data('id') ].push({
                    endpoint: endpoint,
                    portConstraintType: 'Free',
                    portConstraintParameter: 'N/A'
                });

                addToHistory( edge, endpoint, 'Free', 'N/A' );
                changeArrowShape( edge, endpoint, 'Free' );
            }
        }
    }
}

// Delete Row Elements
function deleteRowElements ( row ){
    let edge =  cy.edges().filter( "[id = '" + row.cells[0].innerHTML + "']" );
    let endpoint = row.cells[1].innerHTML;

    if(endpoint == 'Source') {
        edge.style({'source-arrow-shape': 'none'});
        edge.style({'source-endpoint': 'outside-to-node'});
    }else{
        edge.style({'target-arrow-shape': 'none'});
        edge.style({'target-endpoint': 'outside-to-node'});
    }

    delete constraints[row.cells[0].innerHTML];
    logsTable.deleteRow(row.rowIndex);
}

// Node Rotation Table filler
function fillNodeRotationTable() {
    if( nodeRotationTable.rows.length == 1){
        cy.nodes().forEach(function ( node ) {
            let row = nodeRotationTable.insertRow();
            row.onclick = function(event){ changeNodeRotation(row); };
            let cell2 = row.insertCell(0);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = node.data('id');
            cell2.innerHTML = 'Yes';

            rotations[node.data('id')] = true;
        });
    }
}

// Change Node Rotation 
function changeNodeRotation( row ) {
    let nodeId = row.cells[0].innerHTML;

    if( rotations[nodeId] ){
        row.cells[1].innerHTML = 'No';
        rotations[nodeId] = false;
    }else{
        row.cells[1].innerHTML = 'Yes';
        rotations[nodeId] = true;
    }
}