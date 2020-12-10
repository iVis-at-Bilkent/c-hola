const Nbr = require('../chola/nbr');
const Perm = require('../chola/Perm');
const Assignment = require('../chola/Assignment');

function Arrangement(neighbors, degree, id, highIds) {
  this.div = 4;
  this.semis = [];
  this.quads = [];
  this.nbrs = neighbors;
  this.degree = degree;
  this.id = id;
  this.highIds = highIds;
}

Arrangement.prototype.getArrangement = function()
{
  for (let i = 0; i < this.div; i++)
  {
    this.semis.push([]);
    this.quads.push([]);
  }

  var quads = this.quads;
  var nbrs = this.nbrs;
  var semis = this.semis;
  for (let i = 0; i < nbrs.length; i++)
  {
    var nbr = nbrs[i];
    var o = nbr.octalCode();
    if (o % 2 === 0)
    {
      var s = o / 2;
      semis[s].push(nbr);
    }
    else {
      var q = (o - 1) / 2;
      quads[q].push(nbr);
      
    }
  }
};

Arrangement.prototype.getAsgns = function(cyclicIds, am) {
  var trials = [];
  var assigns;
  var N = this.nbrs.length;
  var vac = this.vacancy();

  var n = N - vac.reduce((a, b) => a + b, 0);

  if (n === 0)
  {
    var a = this.basicAssignment()
    assigns = a;
  }
  else if (n < 0) {
    assigns = [];
  }
  else {
    this.getAssignment(cyclicIds, am, n);
    assigns = new Assignment(this.semis, 0);
  }
  return assigns;
};

Arrangement.prototype.getCyclicOrder = function() 
{
  var cyclicOrder = [];

  for (let i = 0; i < this.quads.length; i++)
  {
    let semi = this.semis[i];
    let quad = this.quads[i];
    let orderedNodes = [];
    if (semi != null)
    {
      if (Array.isArray(semi))
      {
        for (let j = 0; j < semi.length; j++)
        {
          //cyclicOrder.push(semi[j].id);
          cyclicOrder.push(semi[j]);
        }
      }
      else {
        //cyclicOrder.push(semi.id);
        cyclicOrder.push(semi);
      }
    }
    for (let j = 0; j < quad.length; j++)
    {
      var arr = [quad[j], null];
      orderedNodes.push(arr);
    }
    if (orderedNodes.length > 1)
    {
      let defl = [];
      for (let k = 0; k < orderedNodes.length; k++)
      {
        let node = orderedNodes[k][0];
        orderedNodes[k][1] = node.deflectionFromSemi(i, node.octalCode());
      }
      orderedNodes.sort(function(a, b){
          return a[1] - b[1];
      });
    }
    for (let j = 0; j < orderedNodes.length; j++)
    {
      cyclicOrder.push(orderedNodes[j][0]);
    }
  }
  return cyclicOrder;
};

Arrangement.prototype.combination = function (array, k)
{
    var combinations = [];
    let temp = [];

    if (k == 0)
        return;
    else if (k > array.length) 
        k = array.length;

    function run(level, start, c)
    {
        for(var i = start; i < array.length - k + level + 1; i++)
        {
            temp[level] = array[i];
            
            if(level < k - 1)
            {
                run(level + 1, i + 1, c);
            } 
            else 
            {
                let temp2 = JSON.parse(JSON.stringify(temp));
                c.push(temp2);
            }
        }     
    }

    run(0, 0, combinations);
    return combinations;
};

Arrangement.prototype.compareConfiguration = function(finalNode, cyclicNodes, comb, cost, costArr, quadNodes)
{
  //finding index of finalNode in cyclicNodes
  let cyclicIndex;
  for (let l = 0; l < cyclicNodes.length; l++)
  {
    if (cyclicNodes[l].id == finalNode.id)
    {
      cyclicIndex = l;
      break;
    }
  }

  let quadComb = [];
  for (let i = 0; i < this.quads.length; i++)
  {
    comb.splice((2*i + 1), 0, null); // at index position 1, remove 0 elements, then add "baz" to that position
    costArr.splice((2*i + 1), 0, null);
  }
  for (let i = 0; i < quadNodes.length; i++)
  {
    //will have to add code for dealing with two processed nodes in the same quad
    //currently the code works only for 1 processed node in a quad
    let node = quadNodes[i];
    let o = node.octalCode();
    comb[o] = node;
  }

  let combIndex = comb.indexOf(finalNode);
  let arr = [];
  for (let i = 0; i < this.quads.length*2; i++)
  {
    arr.push(null);
  }

  for (let l = 0; l < cyclicNodes.length; l++)
  {
    while(1)
    {
      if (!comb[combIndex])
      {
        combIndex = combIndex + 1;
        if (combIndex > comb.length - 1)
          combIndex = combIndex % comb.length;
      }
      else
        break;
    }
    if (cyclicIndex > cyclicNodes.length - 1)
      cyclicIndex = cyclicIndex % cyclicNodes.length;

    if (combIndex > comb.length - 1)
      combIndex = combIndex % comb.length;
    

    if (comb[combIndex].id == cyclicNodes[cyclicIndex].id)
    {
      if (costArr[combIndex] != null)
        arr[combIndex] = costArr[combIndex];
      else
        arr[combIndex] = 0;
      cyclicIndex = cyclicIndex + 1;
      combIndex = combIndex + 1;
    }
    else
    {
      if (costArr[combIndex]!= null)
        arr[combIndex] = costArr[combIndex] + 100;
      else
        arr[combIndex] = 0;
      cost = cost + 100;
      combIndex = combIndex + 1;
    }
  }
  return [arr, cost];
};

Arrangement.prototype.getAssignment = function(cyclicNodes, am) 
{
  let a = 0;

    //determine processed and non processed nodes
  let processedNodes = [];
  let unProcessedNodes = [];

  for (let i = 0; i < cyclicNodes.length; i++)
  {
    if (cyclicNodes[i].processed == true)
      processedNodes.push(cyclicNodes[i]);
    else
      unProcessedNodes.push(cyclicNodes[i]);
  }

  //if all neighbors have been processed before, then return
  if (unProcessedNodes.length == 0)
    return;

  var availableSemis = [];
  var unAvailableSemis = [];
  var array = [];
  ///determine available semis
  for(let i = 0; i < this.semis.length; i++)
  {
    if (this.semis[i].length == 0 || (this.semis[i].length > 0 && this.semis[i][0].processed == false))
    {
      availableSemis.push(i);
      array.push(i);
      if (this.semis[i].length > 0)
        this.semis[i].splice(0,1);
    }
    else
      unAvailableSemis.push(i);
  }

  //if no semis are available, then return

  if (availableSemis.length == 0)
    return;

  //determine processed nodes which do not lie on a semi
  let quadNodes = [];
  if (processedNodes.length != unAvailableSemis.length)
  {
    for (let i = 0; i < processedNodes.length; i++)
    {
      let node;
      for (let j = 0; j < this.nbrs.length; j++)
      {
        if (processedNodes[i].id == this.nbrs[j].id)
        {
          node = this.nbrs[j];
          break;
        }
      }

      let count = 0;
      for (let j = 0; j < unAvailableSemis.length; j++)
      {
        let semi = this.semis[unAvailableSemis[j]];
        if (semi[0].id == node.id)
          count = count + 1;
      }
      if (count == 0)
      {
        quadNodes.push(node);
      }
    }
  }
 
  //for each semi, determine unProcessed nodes with least deflection
  let costArray = [];
  for (let i = 0; i < availableSemis.length; i++)
  {
    for (let j = 0; j < unProcessedNodes.length; j++)
    {
      let node = unProcessedNodes[j];
      let o = node.octalCode();
      let semiIndex = availableSemis[i];
      let cost = node.deflectionFromSemi(semiIndex, o)
      costArray.push(cost);
    }
  }

  //chose the node closest to a semi and fix it
  var index = costArray.indexOf(Math.min(...costArray));
  var startNode = unProcessedNodes[index % unProcessedNodes.length];
  let startCost = costArray[index];

  let overallCostArray = [];
  let combinationsArray = [];
  let individualCostArray = [];

  if (unProcessedNodes.length == 1)
  {
    let finalNode = startNode;

    //check if combination follows the cyclic order
    if (unAvailableSemis.length > 0)
      finalNode = this.semis[unAvailableSemis[0]][0];

    for (let i = 0; i < availableSemis.length; i++)
    {
        let node = unProcessedNodes[0];
        let o = node.octalCode();
        let semiIndex = availableSemis[i];
        let comb = [];
        let costArr = [];
        comb[availableSemis[i]] = node;
        let cost = node.deflectionFromSemi(semiIndex, o);
        costArr[availableSemis[i]] = cost;

        for (let l = 0; l < unAvailableSemis.length; l++)
        {
          let semiIndex = unAvailableSemis[l];
          comb[semiIndex] = this.semis[semiIndex][0];
          costArr[semiIndex] = 0;
        }

        var out = this.compareConfiguration(finalNode, cyclicNodes, comb, cost, costArr, quadNodes);
        combinationsArray.push(comb);
        overallCostArray.push(out[1]); 
        individualCostArray.push(out[0]);
    }
  }
  else
  {
    for (let j = 0; j < availableSemis.length; j++)
    {
      let tempArray = JSON.parse(JSON.stringify(array));
      let semiIndex = availableSemis[j];
      let index = array.indexOf(availableSemis[j]);
      
      let firstPart = tempArray.slice(index)
      let secondPart = tempArray.slice(0, index)
      firstPart.splice(0, 1);
      tempArray = firstPart.concat(secondPart); 
      
      //find the possible combinations based on available spaces and unprocessed nodes
      let combinations = this.combination(tempArray, unProcessedNodes.length - 1);

      for (let k = 0; k < combinations.length; k++)
      {
        let cost = 0;
        let costArr = [];

        //fix the startnode at the first available semi and find the cost
        let o = startNode.octalCode();
        cost += startNode.deflectionFromSemi(semiIndex, o);

        let comb = [];  //comb[semi index] = [node][cost]
        a = unProcessedNodes.indexOf(startNode) + 1;
        let c = combinations[k];
        for (let l = 0; l < c.length; l++)
        {
          if (a > unProcessedNodes.length - 1)
              a = a % unProcessedNodes.length;
          
          let nextNode = unProcessedNodes[a]; 
          let nextSemiIndex = c[l];
          let o = nextNode.octalCode();
          let defl = nextNode.deflectionFromSemi(nextSemiIndex, o);
          cost += defl;
          comb[nextSemiIndex] = nextNode;
          costArr[nextSemiIndex] = defl;
          a = a + 1;
        }
        comb[semiIndex] = startNode;
        costArr[j] = startCost;
        
        for (let l = 0; l < unAvailableSemis.length; l++)
        {
          let index = unAvailableSemis[l];
          comb[index] = this.semis[index][0];
          costArr[index] = 0;
        }

        let finalNode = startNode;

        //check if combination follows the cyclic order
        if (unAvailableSemis.length > 0)
          finalNode = this.semis[unAvailableSemis[0]][0];

        var out = this.compareConfiguration(finalNode, cyclicNodes, comb, cost, costArr, quadNodes);
        combinationsArray.push(comb);
        overallCostArray.push(out[1]); 
        individualCostArray.push(out[0]);
      }
    }
  }

  var index = overallCostArray.indexOf(Math.min(...overallCostArray));
  var comb = combinationsArray[index];
  var cost = individualCostArray[index];

  for (let i = 0; i < comb.length; i=i+2)
  {
    if (comb[i] == null)
      continue;
    if (cost[i] > 100)
      continue;
    else
    {
      this.semis[i/2] = comb[i];
    }
  }

  let output = this.makesFlatTriangle(am);

  if (output[0] == true)
  {
    let flatTriangle = output[1];
    this.removeFlatTriangle(flatTriangle);
  }

};

Arrangement.prototype.makesFlatTriangle = function(am)
{
    for (let i = 0; i < 2; i++)
    {
        var s0 = this.semis[i];
        var s1 = this.semis[i + 2];
        if (!Array.isArray(s0) && !Array.isArray(s1))
        {
            if (am[s0.id][s1.id] == true)
                return [true, [s0, s1]];
        }
    }
    return [false, null];
};

Arrangement.prototype.removeFlatTriangle = function(nodes)
{
  var s0 = nodes[0];
  var s1 = nodes[1];
  var s0Index = this.semis.indexOf(s0);
  var s1Index = this.semis.indexOf(s1);

  let s0OctalCode = s0.octalCode();
  let s1OctalCode = s1.octalCode();

  let s0Cost = s0.deflectionFromSemi(this.semis[s0Index], s0OctalCode);
  let s1Cost = s1.deflectionFromSemi(this.semis[s1Index], s1OctalCode);

  if (s0Cost < s1Cost)
  {
    let prevIndex = s0Index - 1;
    if (prevIndex < 0)
      prevIndex += this.div;
    let nextIndex = s0Index + 1;
    if (nextIndex == this.div)
      nextIndex %= this.div;

    let cost1 = s1.deflectionFromSemi(this.semis[prevIndex], s1OctalCode) + (this.semis[prevIndex]!= null ? 2 : 0);
    let cost2 = s1.deflectionFromSemi(this.semis[nextIndex], s1OctalCode) + (this.semis[nextIndex]!= null ? 2 : 0);

    if (cost1 < cost2)
    {
      let temp = this.semis[prevIndex];
      this.semis[prevIndex] = this.semis[s1Index];
      this.semis[s1Index] = temp;
    }
    if (cost1 >= cost2)
    {
      let temp = this.semis[nextIndex];
      this.semis[nextIndex] = this.semis[s1Index];
      this.semis[s1Index] = temp;
    }
  }
  else
  {
    let prevIndex = s1Index - 1;
    if (prevIndex < 0)
      prevIndex += this.div;
    let nextIndex = s1Index + 1;
    if (nextIndex == this.div)
      nextIndex %= this.div;

    let cost1 = s0.deflectionFromSemi(this.semis[prevIndex], s0OctalCode) + (this.semis[prevIndex]!= null ? 2 : 0);
    let cost2 = s0.deflectionFromSemi(this.semis[nextIndex], s0OctalCode) + (this.semis[nextIndex]!= null ? 2 : 0);

    if (cost1 < cost2)
    {
      let temp = this.semis[prevIndex];
      this.semis[prevIndex] = this.semis[s1Index];
      this.semis[s1Index] = temp;
    }
    if (cost1 >= cost2)
    {
      let temp = this.semis[nextIndex];
      this.semis[nextIndex] = this.semis[s1Index];
      this.semis[s1Index] = temp;
    }
  }
};

Arrangement.prototype.vacancy = function() {
  var vec = [];
  for (let i = 0; i < this.semis.length; i++)
  {
    let semi = this.semis[i];
    if (semi.length === 0)
      vec.push(0);
    else {
      vec.push(1);
    }
  }
  return vec;
};

Arrangement.prototype.basicAssignment = function ()
{
  var arr = new Assignment(this.semis, 0);
  return arr;
}

module.exports = Arrangement;
