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

Arrangement.prototype.findCost = function(nbr, semi, lastItem, cyclicIds) {
  var neighbor = nbr;
  let o = neighbor.octalCode();
  let defl = neighbor.deflectionFromSemi(semi, o);

  if (lastItem !== null && typeof(lastItem) != 'undefined')
  {
    var index = cyclicIds.indexOf(neighbor.id);
    var lastIndex = cyclicIds.indexOf(lastItem.id);
    var prevIndex = index - 1;
    var nextIndex = index + 1;
    if (prevIndex < 0)
      prevIndex += cyclicIds.length;
    if (nextIndex >= cyclicIds.length)
      nextIndex %= cyclicIds.length;
    if (semi == 1)
    {
      if (!(lastIndex == prevIndex || lastIndex == nextIndex))
          defl += Math.abs(index - lastIndex);
    }
    else {
      if (!(lastIndex == nextIndex))
          defl += Math.abs(index - lastIndex);
    }
    
  }
  return [lastItem, defl];
};

Arrangement.prototype.factorial = function(num) { 
  let out = 1; 
  for (let i = 2; i <= num; i++) 
      out = out * i; 
  return out; 
};


Arrangement.prototype.combination = function (array, k){
    var combinations = [];
    let temp = [];
    if (k == 0)
      return;
    else if (k > array.length) 
      k = array.length;
    function run(level, start, c){
      
        for(var i=start; i < array.length - k + level + 1; i++){
            temp[level] = array[i];
            
            if(level < k - 1){
                run(level + 1, i + 1, c);
            } else {
                let temp2 = JSON.parse(JSON.stringify(temp));
                c.push(temp2);
            }
        }
        
    }

    
    run(0, 0, combinations);
    return combinations;
}

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

Arrangement.prototype.getAssignment = function(cyclicNodes, am) {
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
        let cost = node.deflectionFromSemi(semiIndex, o)
        costArr[availableSemis[i]] = cost
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
      
     // let comb = [];
      

      // if (tempArray.length == 0)
      // {

      // }
      //find the possible combinations based on available spaces and unprocessed nodes
      let combinations = this.combination(tempArray, unProcessedNodes.length - 1);

      // if (combinations.length == 0)
      // {
      //   if (tempArray.length == 1)
      //   {
      //     for (let k = 0; k < unProcessedNodes.length; k++)
      //     {
      //       combinations.push(tempArray);
      //     }
      //   }
      // }
      
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
        


          // if (j == 1)
          //   break;
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



  


  // //if (processedNodes.length == 0)
  //   startNode = cyclicNodes[0];
  // // else
  // // {
  // //   for (let i = 0; i < cyclicNodes.length; i++)
  // //   {
  // //     if (this.highIds.indexOf(cyclicNodes[i].id) < 0)
  // //     {
  // //       startNode = cyclicNodes[i];
  // //       break;
  // //     }
  // //   }
  // // }
  // for (let i = 0; i < this.highIds.length; i++)
  // {
  //   if (this.highIds == this.ids)
  //     break;
  //   for (let j = 0; j < cyclicNodes.length; j++)
  //   {
  //     if (this.highIds[i] == cyclicNodes[j].id)
  //     {
  //       startNode = cyclicNodes[j];
  //       check = true;
  //       break;
  //     }
  //   }
  //   if (check == true)
  //     break;
  // }
  
  // //let node = this.nbrs[0];
  // let costArray = [];
  // let combinationsArray = [];
  // let array = [];
  // // for (let j = 0; j < this.div; j++)
  // //   array.push(j);

  //   for (let j = 0; j < this.semis.length; j++)
  //   {
  //     let indexHighId = this.highIds.indexOf(startNode.id);
  //     if ((indexHighId > -1) && (indexHighId < this.highIds.indexOf(this.id)))
        
  //       //a = j + 1;
  //       let cost = 0;
  //       let semi = this.semis[j];
  //       array = [0, 1, 2, 3]
  //       let index = array.indexOf(j);
        
  //       let firstPart = array.slice(index)
  //       let secondPart = array.slice(0, index)
  //       firstPart.splice(0, 1);
  //       array = firstPart.concat(secondPart); 

  //       let o = startNode.octalCode();
  //       cost += startNode.deflectionFromSemi(j, o);
        
  //       let combinations = this.combination(array, this.nbrs.length - 1);

  //       for (let k = 0; k < combinations.length; k++)
  //       {
  //         a = cyclicNodes.indexOf(startNode) + 1;
  //         let c = combinations[k];
  //         for (let l = 0; l < c.length; l++)
  //         {
  //           if (a > cyclicNodes.length - 1)
  //               a = a % cyclicNodes.length;
            
  //           let nextNode = cyclicNodes[a]; 
  //           let nextSemiIndex = c[l];
  //           let o = nextNode.octalCode();
  //           cost += nextNode.deflectionFromSemi(nextSemiIndex, o);
  //           a = a + 1;
  //         }
  //         combinationsArray.push([j].concat(c));
  //         costArray.push(cost); 
  //       }


  //       // if (j == 1)
  //       //   break;
  //   }
  //   var index = costArray.indexOf(Math.min(...costArray));
  //   var comb = combinationsArray[index];
  //   a = cyclicNodes.indexOf(startNode);
  //   for (let i = 0; i < cyclicNodes.length; i++)
  //   {
  //     let semiIndex = comb[i];
  //     this.semis[semiIndex] = cyclicNodes[a];
  //     a = a + 1;
  //     if (a > cyclicNodes.length - 1)
  //         a = a % cyclicNodes.length;
  //   }

  // for (let i = 0; i < this.nbrs.length; i++)
  // {
  //   var nbr = this.nbrs[i];
  //   if (this.highIds.indexOf(nbr.id) > -1 && (this.highIds.indexOf(nbr.id) < this.highIds.indexOf(this.id)))
  //     continue;
  //   else
  //   {
  //     this.semis[0].push(nbr);
  //     this.semis[1].push(nbr);
  //     this.semis[2].push(nbr);
  //     this.semis[3].push(nbr);
  //   }
  // }
  // var lastItem = null;
 
  // for (let i = 0; i <this.semis.length;i++)
  // {
  //   var cost = [];
  //   var semi = this.semis[i];
  //   for (let j = 0; j < semi.length; j++)
  //   {
  //     let cycleIndex = cyclicIds.indexOf(semi[j].id);
  //     var out = this.findCost(semi[j], i, lastItem, cyclicIds);
  //     lastItem = out[0];
  //     let defl = out[1];
  //     if (this.highIds.indexOf(semi[j].id) > -1 && (this.highIds.indexOf(semi[j].id) < this.highIds.indexOf(this.id)))
  //       defl = 0;
  //     cost.push(defl);
  //   }

  //   var index = cost.indexOf(Math.min(...cost));
  //   this.semis[i] = semi[index];
  //   if (typeof(this.semis[i]) != 'undefined')
  //     lastItem = this.semis[i];
  // }

  // var ignoredNodes = this.findAndRemoveDuplicates(cyclicIds);
  // this.addIgnoredNodes(ignoredNodes, cyclicIds);
  // this.updateSemisAndQuads(cyclicIds);
  // this.enforceCyclicOrder(cyclicIds, cycle);
  // var output = this.makesFlatTriangle(am);
  // if (output[0])
  //   this.removeFlatTriangle(output[1]);

};

Arrangement.prototype.makesFlatTriangle = function(matrix)
{
  var allNodes = matrix[1];
  var am = matrix[0];

  for (let i = 0; i < 2; i++)
  {
    var s0 = this.semis[i];
    var s1 = this.semis[i + 2];
    if (s0 != null && s1 != null && typeof(s0) != "undefined" && typeof(s1)!=undefined)
    {
      var s0Index = allNodes.indexOf(s0.id);
      var s1Index = allNodes.indexOf(s1.id);
      if (am[s0Index][s1Index] == true)
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

Arrangement.prototype.updateSemisAndQuads = function(cyclicIds)
{
  for (let i = 0; i < cyclicIds.length; i++)
  {
    let id = cyclicIds[i];
    for (let j = 0; j < this.semis.length; j++)
    {
      if (typeof(this.semis[j]) == 'undefined' || this.semis[j] == null)
        continue;
      if (this.semis[j].id == id)
      {
        for (let k = 0; k < this.quads.length; k++)
        {
          let quad = this.quads[k];
          for (let l = 0; l < quad.nbrs.length; l++)
          {
            if (quad.nbrs[l].id == id)
              quad.nbrs.splice(l,1);
          }
        }
      }
    }
  }
};

Arrangement.prototype.enforceCyclicOrder = function(cyclicIds, cycles)
{
  //getting current cyclicOrder from Semis
  var cyclicOrder = this.getCyclicOrder();
  if(JSON.stringify(cyclicOrder)==JSON.stringify(cyclicIds))
    return;

  var arr = [];

  for (let i = 0; i < cyclicIds.length; i++)
  {
    let node = cyclicIds[i];
    let a = [node];
    let actualIndex = cyclicOrder.indexOf(node);
    let j = 0;
    let k = i;
    while (j < cyclicIds.length - 1)
    {
      actualIndex += 1;
      k+=1;
      if (actualIndex >= cyclicIds.length)
      {
        actualIndex %= cyclicIds.length;
      }
      if (k >= cyclicIds.length)
      {
        k %= cyclicIds.length;
      }
      if (cyclicIds[k] == cyclicOrder[actualIndex])
        a.push(cyclicIds[k]);
      else {
        break;
      }
      j++;
    }
    arr.push(a);
  }

  var maxLength = 0;
  var maxIndex1 = 0;
  var maxIndex2 = 0;
  var maxIndex = 0;
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i].length > maxLength)
    {
      maxLength = arr[i].length;
      maxIndex1 = i;
    }
  }
  if (maxLength == cyclicIds.length)
    return;
  else
  {
    let maxDegree = 0;
    let hdnbr;
    for (let i = 0; i < cyclicIds.length; i++)
    {
      for (let j = 0; j < this.nbrs.length; j++)
      {
        if (cyclicIds[i] == this.nbrs[j].id)
        {
          if (this.nbrs[j].degree > maxDegree)
          {
            hdnbr = cyclicIds[i];
            maxDegree = this.nbrs[j].degree;
          }
        }
      }
    }
    for (let i = 0; i< arr.length; i++)
    {
      if (arr[i][0] == hdnbr)
      {
        maxIndex2 = i;
        break;
      }
    }
  
    if (this.highIds.indexOf(hdnbr) > -1 && (this.highIds.indexOf(hdnbr) < this.highIds.indexOf(this.id)))
    {
      maxIndex = maxIndex2;
    }
    else
    {
      maxIndex = maxIndex1;
    }
    var order = arr[maxIndex];
    var startIndex = cyclicIds.indexOf(order[0]);
    startIndex+=1;
    var semiIndex = 0;
    for (let i = 0; i < this.semis.length; i++)
    {
      if (this.semis[i] != null && this.semis[i].id == order[0])
        {
          semiIndex = i;
          break;
        }
    }
    semiIndex += 1;
    var insertCount = 0;
    for (let i = 0; i < this.semis.length - 1; i++)
    {
      if (startIndex >= cyclicIds.length)
      {
        startIndex %= cyclicIds.length;
      }
      if (semiIndex >= cyclicIds.length)
      {
        semiIndex %= cyclicIds.length;
      }
      let semi = this.semis[semiIndex];

      if (typeof(order[i + 1] == 'undefined') || typeof(semi) == 'undefined' || semi == null || semi.id != order[i + 1]){
        for (let j = 0; j < this.nbrs.length; j++)
        {
          if (this.nbrs[j].id == cyclicIds[startIndex])
          {
            this.semis[semiIndex] = this.nbrs[j];
            insertCount++;
            break;
          }
        }
      }
      startIndex += 1;
      semiIndex += 1;
      if (insertCount == cyclicIds.length - 1)
        break;
    }
  }
};

Arrangement.prototype.findAndRemoveDuplicates = function(cyclicIds)
{
  //finding duplicate assignments of same node
  var ids = [];
  for (let i = 0; i < this.semis.length; i++) {
      if (typeof(this.semis[i]) != 'undefined')
        ids.push(this.semis[i].id);
      else {
        ids.push(null);
      }
  }

  let counts = {};
  ids.forEach(el => counts[el] = 1  + (counts[el] || 0))

  var ignoredNodes = [];
  for (let i = 0; i < this.nbrs.length; i++)
  {
    var nbrId = this.nbrs[i].id;
    if (typeof(counts[nbrId]) !== 'undefined' & counts[nbrId] !== null)
    {
      //find the indexes of the duplicate assignments
      if (counts[nbrId] > 1)
      {
        var dupIndexes = [];
        for (let j = 0; j < ids.length; j++)
        {
          if (ids[j] == nbrId)
            dupIndexes.push(j);
        }

        //calculate the costs for both assignments and remove the one with the larger cost
        var deflArray = [];
        var cycleIndex = cyclicIds.indexOf(nbrId);
        for (let j = 0; j < dupIndexes.length; j++)
        {
          let defl = 0;
          let semi = dupIndexes[j];
          let o = this.semis[semi].octalCode();
          defl += this.semis[semi].deflectionFromSemi(semi, o);
          deflArray.push(defl);
        }

        var index = deflArray.indexOf(Math.min(...deflArray));
        for (let j = 0; j < dupIndexes.length; j++)
        {
          if (j != index)
            this.semis[dupIndexes[j]] = null;
        }
      }
    }
    else {
      if (this.nbrs[i].degree <= this.nbrs.length)
        ignoredNodes.push(nbrId);
    }
  }
  return ignoredNodes;
};

Arrangement.prototype.addIgnoredNodes = function(ignoredNodes/*, direction*/, cyclicIds) {
  var lastItem = null;
  for (let j = 0; j < ignoredNodes.length; j++)
  {
    var freeIndexes = [];
    //find the possible empty locations where nodes can be assigned
    for (let i = 0; i < this.semis.length; i++)
    {
      if (this.semis[i] == null)
        freeIndexes.push([i, lastItem]);
      else {
          lastItem = this.semis[i];
      }
    }

    var nbr = null;
    for (let i = 0; i < this.nbrs.length; i++)
    {
      if (this.nbrs[i].id == ignoredNodes[j])
      {
        nbr = this.nbrs[i];
        break;
      }
    }

    //calculate the costs for all assignments and assigns to the one with lowest cost
    var deflArray = [];
    for (let i = 0; i < freeIndexes.length; i++)
    {
      let semi = freeIndexes[i][0];
      let o = nbr.octalCode();
      var out = this.findCost(nbr, semi, freeIndexes[i][1], cyclicIds);
      let defl = out[1];
      deflArray.push(defl);
    }
    var index = deflArray.indexOf(Math.min(...deflArray));
    this.semis[freeIndexes[index][0]] = nbr;
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