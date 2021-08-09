// Variables and Constants

var layout;
var runningChola = false;

// Initial Layout on opening the page
var cy = cytoscape({
    container: document.getElementById('cy')
});

function updateCy(contents)
{
  cy.startBatch();
  cy.style().clear();
  cy.remove('nodes');
  cy.remove('edges');

  cy.json({elements: JSON.parse(contents)});

  cy.style()
      .selector('node').style({
          'background-color': '#ad1a66',
          'opacity': 0.75
          //'label': "data(id)"
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

  cy.endBatch();
  cy.layout({
      name: 'random',
      animate: false
    }).run();
}

document.addEventListener('DOMContentLoaded', function()
{
  /*
   *  deleting a node on "Delete" key press
   */

  if (runningChola == true)
      return;

  function getKey(e)
  {
    if (e.keyCode == 46)
    {
      for (let i = 0; i < cyArray.length; i++)
      {
        let obj = cyArray[i];
        obj.remove(obj.$(":selected"));
      }
    }
  }
  document.onkeyup = getKey;
});

document.getElementById('importGraphML-input').addEventListener('change', function (evt) 
{
    if (runningChola == true)
      return;

    let files = evt.target.files;
    let fileExtension = files[0].name.split('.').pop();
    let reader = new FileReader();
    let contents;
    reader.readAsText(files[0]);
    reader.onload = function (event) {
        // Contents is a string of the graphml
        contents = event.target.result;

        // Update Cytoscape
        updateCy(contents);
        
    };


});

document.getElementById("cholaLayoutButton").addEventListener("click", function(){
  //some edge types may have been changed to segments
  //so we convert them back to the original type haystack

    runningChola = true

    console.clear();

    console.log("applying chola")

    let start = performance.now();

    var allEdges = cy.edges();
    for (let i = 0; i < allEdges.length; i++)
    {
      allEdges[i].css("curve-style", "straight");
      allEdges[i].css("targetEndpoint", "outside-to-node");
      allEdges[i].css("sourceEndpoint", "outside-to-node");
    }

    layout = null;
    layout = cy.layout({
      name: 'chola',
      animate: 'end',
      animationEasing: 'ease-out',
      animationDuration: 1000,
    });

    layout.run();

    /*
    * now this code should send pack the data of cy into json and send it to the python server.
    */

    // var jsonData = cy.json()

    // //now this jsonData has to be sent to the python server
    // fetch('/tsm/', {
    //   method: "POST",
    //   body: JSON.stringify(jsonData)
    // })
    // .then(response => response.json())
    // .then(result => 
    //     {
    //       console.log(result);
    //       console.log("Evaluating data")
    //       let end = performance.now();
    //       evaluate(end - start);

    //       runningChola = false
    //     }
    //   )  

});

document.getElementById("cose").addEventListener("click", function()
{
  //some edge types may have been changed to segments
  //so we convert them back to the original type haystack

    if (runningChola == true)
      return;

    let obj = cy;
    var allEdges = obj.edges();
    for (let i = 0; i < allEdges.length; i++)
    {
      allEdges[i].css("curve-style", "straight");
      allEdges[i].css("targetEndpoint", "outside-to-node");
      allEdges[i].css("sourceEndpoint", "outside-to-node");
    }

    var layout2 = obj.layout({
      name: 'cose-bilkent',
      animate: true,
      animationDuration: 1000,
      animationEasing: 'ease-out'
    });

    layout2.run();
    console.log("ran cose")
});


document.getElementById("randomize").addEventListener("click", function()
{
  //some edge types may have been changed to segments
  //so we convert them back to the original type haystack

  if (runningChola == true)
      return;

  var allEdges = cy.edges();
  for (let i = 0; i < allEdges.length; i++)
  {
    allEdges[i].css("curve-style", "straight");
    allEdges[i].css("targetEndpoint", "outside-to-node");
    allEdges[i].css("sourceEndpoint", "outside-to-node");
  }

  var layout2 = cy.layout({
    name: 'random',
    animate: true,
    animationDuration: 1000,
    animationEasing: 'ease-out'
  });
  layout2.run();
});


function evaluate(layoutTime)
{
    let evaluate = true;
    let graphProperties;
    if(evaluate)
      graphProperties = cy.layvo("get").generalProperties();

    console.log("in evaluate")


    document.getElementById("layoutTime").innerHTML = evaluate ? Math.round(layoutTime * 10 ) / 10 + " ms" : "-"; 

    document.getElementById("numberOfEdgeCrosses").innerHTML = evaluate ? graphProperties.numberOfEdgeCrosses : "-";

    document.getElementById("numberOfNodeOverlaps").innerHTML = evaluate ? graphProperties.numberOfNodeOverlaps : "-";

    document.getElementById("averageEdgeLength").innerHTML = evaluate ? Math.round(graphProperties.averageEdgeLength * 10 ) / 10 : "-";

    document.getElementById("totalArea").innerHTML = evaluate ? Math.round(graphProperties.totalArea * 10 ) / 10 : "-";

}