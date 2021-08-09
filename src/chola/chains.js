const compass = require('../chola/compass');
const LinkShape = require('../chola/linkShape');
const BendSequence = require('../chola/bendSequence');
const cholaNode = require('../chola/cholaNode');

function chain(gm, nodes, cycle = false) {
    /*
        :param gm: the Graph to which the Chain belongs
        :param links: a list(-like object) of the links belonging to the chain, in order
        :param cycle: boolean saying if this chain forms a cycle
        */
        this.gm = gm;
        this.aestheticBends = [];
        if (nodes.length == 0)
            return;
        this.nodes = nodes;
        this.cycle = cycle;
        if (this.cycle)
        {
            if (this.nodes.length < 3)
                return;
            // For cycles, we always store the links in clockwise order.
            // Start by getting the index of a node of minimal y-coord.
            let min = this.nodes[0].getCenter().y;
            let index1 = 0;
            for (let i = 0; i < this.nodes.length; i ++)
            {
                let node = this.nodes[i];
                let loc = node.getCenter();
                let y = loc.y;
                if (y < min)
                {
                    min = y;
                    index1 = i;
                }
            }
            
            let index0 = (index1 - 1);
            if (index0 < 0) 
                index0 = index0 + this.nodes.length;
            let index2 = (index1 + 1);
            if (index2 < 0)
                index2 = index2 + this.nodes.length;
            let node0 = this.nodes[index0];
            let node1 = this.nodes[index1];
            let node2 = this.nodes[index2];

            if (node0.getCenter().x < node1.getCenter().x)
            {
                // already clockwise
            }
            else if (node0.getCenter().x > node1.getCenter().x)
            {
                // anticlockwise
                this.nodes.reverse();
            }
            else
            {
                // Part and parcel of the assumption that the cycle even /has/ an interior
                // is the assumption that it is not this-intersecting. Therefore, since
                // both neighbouring nodes n0 and n2 have y-coord >= that of n1, they cannot
                // both have the same x-coord as n1. Therefore...

                if (node2.getCenter().x > node1.getCenter().x)
                {
                    // already clockwise
                }
                else
                {
                    // anticlockwise
                    this.nodes.reverse();
                }
            }
        }
        // Compute and store the shape of each link.
        this.shapes = [];
        for (let i = 0; i < nodes.length; i++)
        {
            this.shapes.push(this.shapeOfLink(nodes[i]));
        }

        // Determine the sequence of internal edges, as well as the
        // anchor nodes and edges if it is not a cycle,
        // or the "return edge" if it is a cycle.
        this.edges = []
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
        if (nodes.length == 1)
        {
            // In this case 'left' and 'right' are meaningless, so record
            // the nodes and edges in any way.
            this.anchorNodeLeft = n1;
            this.anchorEdgeLeft = e1;
            this.anchorNodeRight = n2;
            this.anchorEdgeRight = e2;
        }
        else
        {
            if (n1 == nodes[1])
            {
                this.anchorNodeLeft = n2;
                this.anchorEdgeLeft = e2;
                e0 = e1;
            }
            else
            {   this.anchorNodeLeft = n1;
                this.anchorEdgeLeft = e1;
                e0 = e2;
            }
            for (let i = 1; i < this.nodes.length; i++)
            {   
                var n0 = this.nodes[i];
                //Append the edge e0 that leads into n0 from the left.
                this.edges.push(e0);
                // And get the next edge.
                let E = [];
                for (let j = 0; j < n0.edges.length; j++)
                {
                    E.push(n0.edges[j]);
                }

                E.splice(E.indexOf(e0), 1);
                if (E.length > 0)
                    e0 = E[0];
            }
            this.anchorEdgeRight = e0;
            this.anchorNodeRight = e0.getOtherEnd(n0);
            if (this.cycle)
            {   // In the case of a cycle, the "anchors" are meaningless, but harmless.
                this.returnEdge = this.anchorEdgeRight;
            }
        }
};

chain.prototype.shapeOfLink = function (link)
{
    //param link: a Node of degree 2
    //return: the LinkShape for the shape of this link
   
    let d = [];
    for (let i = 0; i < link.edges.length; i++)
    {    
        let edge = link.edges[i];
        let v = edge.getOtherEnd(link);
        let comp = new compass();        
        d.push(comp.cardinalDirection(link, v));
    }
    d.sort(function(a, b){return a-b});
    //convert array to string and remove commas
    d = d.toString().replace(/,/g, "");

    var out = null;
    var ls = new LinkShape();
    //get the respective linkshape
    switch(d) {
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

chain.prototype.getNode = function(i)
{
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
    if (i == -2)
        return this.anchorNodeLeft;
    else if (i == 2*len)
        return this.anchorNodeRight;
    else
        return this.nodes[i/2];
}

chain.prototype.getEdge = function(i)
{
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
    if (i == -1)
        return this.anchorEdgeLeft;
    else if (i == 2*len - 1)
        return this.anchorEdgeRight;
    else
        return this.edges[(i-1)/2];
}

chain.prototype.bendCost = function(bendtype, i0)
{
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
    if (i0 % 2 == 1)    //i0 is an edge
    {
        let u = this.getNode(i0 - 1).getCenter();
        let w = this.getNode(i0 + 1).getCenter();
        p = [u.x, u.y];
        q = [w.x, w.y];
    }
    else
    {
        let u = this.getNode(i0 - 2).getCenter();
        let v = this.getNode(i0).getCenter();
        let w = this.getNode(i0 + 2).getCenter();
        p = [u.x - v.x, u.y - v.y];
        q = [w.x - v.x, w.y - v.y];
        let lp = Math.sqrt(Math.pow(p[0], 2) + Math.pow(p[1], 2));
        let lq = Math.sqrt(Math.pow(q[0], 2) + Math.pow(q[1], 2));

        p[0] = p[0]/lp;
        p[1] = p[1]/lp;
        q[0] = q[0]/lq;
        q[1] = q[1]/lq;
    }
    var z = [q[0] - p[0], q[1] - p[1]];
    // Get angle in degrees.
    var alpha0 = Math.atan2(z[1], z[0]) * (180 / Math.PI);

    //values from LInkShape.bentCW = [0, 3, 5, 2];
    let r = 0;
    let g = 3;
    let j = 5;
    let n = 2;
    var cost = null;
    if (this.cycle)
    {
        // For a cycle each type of bend has a specific angle associated with it,
        // so you can be up to +/-180 degrees off.
        let beta = [-45, null, -135, 45, null, 135][bendtype];
        let alpha1 = alpha0 - beta;
        //assert(-360 < alpha1 and alpha1 <= 360)
        if (alpha1 <= -180)
            alpha1 = alpha1 + 360;
        else if (alpha1 > 180)
            alpha1 = alpha1 - 360;
        //assert(-180 < alpha1 and alpha1 <= 180)
        // Normalise the cost.
        cost = Math.abs(alpha1/180);
    }
    else
    {
        // For a non-cycle we don't distinguish between r and j, or between g and n
        // bends, so you can only be up to +/- 90 degrees off.
        //assert(-180 < alpha0 and alpha0 <= 180)
        if (alpha0 <= -90) 
            alpha0 = alpha0 + 180;
        else if (alpha0 > 90) 
            alpha0 -= alpha0 - 180;
        //assert(-90 < alpha0 and alpha0 <= 90)
        let beta = [-45, null, 45, 45, null, -45][bendtype];
        let alpha1 = alpha0 - beta;
        //assert(-135 < alpha1 and alpha1 <= 135)
        if (alpha1 <= -90) 
            alpha1 = alpha1 + 180;
        else if (alpha1 > 90) 
            alpha1 = alpha1 - 180;
        //assert(-90 < alpha1 and alpha1 <= 90)
        // Normalise the cost.
        cost = Math.abs(alpha1/90);
    }

    return cost;
};

chain.prototype.nextLocalOptimalPoint = function(i0, bendtype, remaining=0)
{
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
    var M = 2*len - 1;
    
    // if (this.cycle)
    //     M = M + 1;
    
    M = M - remaining;
    var cost = bestCost;

    var check = false;
    for (let i = i0; i < M; i++)
    {
        cost = this.bendCost(bendtype, i);
        if (i % 0 == 1)
            cost = cost + 3;
        if (candidate != null && cost > bestCost)
        {
            i1 = candidate;
            cost = bestCost;
            check = true;
            break;
        }
        // To even be considered a candidate for optimal position, the cost
        // has to be less than 0.5. Else we might start at bad and go to worse,
        // and thereby accept bad.
        if (cost < 0.5 && cost < bestCost)
        {    
            candidate = i;
            bestCost = cost;
        }
    }
    if (check == false)
    {
        if (candidate != null)
        {
            i1 = candidate;
            cost = bestCost;
        }
    }
    return [i1, cost];
};
chain.prototype.globalOptimalPoint = function(bendtype, beginAt=0)
{
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
    var cost = 10 // max cost is 1, so 10 is effectively infinity
    var M = 2*len - 1;
    
    if (this.cycle) 
        M = M + 1;

    for (let i = beginAt; i < M; i++)
    {
        let c = this.bendCost(bendtype, i);
        if (i % 0 == 1)
            cost = cost + 3;
        if (c < cost)
        {
            i0 = i;
            cost = c;
        }
    }
        
    return [i0, cost];
};

chain.prototype.evaluateBendSeq = function(bendseq)
{
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
    if (this.cycle)
    {
        if (this.nodes.length == 3)
        {
            //only this case will contain a bend
            bendpoints = [0, 2, 4, 5];
        }
        else
        {
            //first node will be the first bendpoint
            bendpoints.push(i);

            //next bendpoints
            let n = this.nodes.length;            
            let m = n;
            let width = parseInt(n/4);
            if (n%2 != 0)
            {
                m = n + 1;
                width = parseInt(m/4);
            }
            
            let length = parseInt((m-2*width)/2);
            
            for (let j = 1; j < bendseq.bendtypes.length; j++)
            {
                if (j % 2 == 1)
                    i = i + 2*length;
                else 
                    i = i + 2*width;
                if (i <= (2*this.nodes.length - 1))
                {
                    bendpoints.push(i);
                }
                else
                {
                    bendpoints.push(i - 1);
                }
            }
        }
    }
    else
    {
        var queue = JSON.parse(JSON.stringify(bendseq.bendtypes));     

        while (queue.length > 1)
        {
            let bendtype = queue[0];
            queue.shift();
            let out = this.nextLocalOptimalPoint(i, bendtype, queue.length);
            i = out[0];
            let c = out[1];
            if (i != null)
            {
                bendpoints.push(i);
                cost = cost + c;
                i = i + 1;
            }
        }

        if (queue.length == 1)
        {
            let bendtype = queue[0];
            queue.shift();
            let out = this.globalOptimalPoint(bendtype, i);
            i = out[0];
            let c = out[1];
            if (i != null)
            {
                bendpoints.push(i);
                cost = cost + c;
                i = i + 1;
            }
        }
    }

    bendseq.bendpoints = bendpoints;
    bendseq.cost = cost;
    return bendseq;
};

chain.prototype.cwIncomingDirForBend = function(b)
{
    /*
    :param b: a bent LinkShape
    :return: the clockwise incoming Compass direction for the given bend type
    */
    let arr = [3, null, 2, 0, null, 1]
    return arr[b]
};

chain.prototype.applyBendToDir = function(b, d)
{
    /*
    :param b: a bent LinkShape
    :param d: a cardinal Compass direction
    :return: the cardinal direction you would be going if you came into bend b
             going in direction d, and then followed the bend; None if b and d
             are incompatible
    */
    var lookup = [
        [null, null, 1, 0],
        null,
        [null, 0, 3, null],
        [1, null, null, 2],
        null,
        [3, 2, null, null]
    ];
    return lookup[b][d];
};

chain.prototype.writeConfigSeq = function(bendseq)
{
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
    
    let dIn = null;

    for (let i = 0; i < bendseq.bendpoints.length; i++)
    {
        bends.push([bendseq.bendpoints[i], bendseq.bendtypes[i]]);
    }

    if (this.cycle)
    {
        m = m + 1;
        //assert(len(bends) == 4)
        let bt0 = bends[0][1];      //get first bendtype
        // Since we always run cycles clockwise, we can infer from the first bendtype
        // what the incoming direction must be.
        dIn = this.cwIncomingDirForBend(bt0);
    }
    else
    {
        // Not a cycle
        dIn = bendseq.incomingDirec;
        //assert(dIn is not None)
    }
    var ptr = 0;
    var direc = dIn;
    for (let j = 0; j < m; j++)
    {
        if (ptr == bends.length)
        {
            // All remaining edges get the current direc.
            config.push([direc]);
        }
        else
        {
            let k = 2*j + 1;
            let bs = [];
            while (ptr < bends.length && (bends[ptr][0] == k || bends[ptr][0] == k - 1))
            {
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
            if (bs.length == 2)
            {
                let bp0 = bs[0][0];
                let bt0 = bs[0][1];
                let bp1 = bs[1][0];
                let bt1 = bs[1][1];
                let dir0 = this.applyBendToDir(bt0, direc);
                let dir1 = this.applyBendToDir(bt1, dir0);
                config.push([dir0, dir1])
                direc = dir1;
            }
            else if (bs.length == 1)
            {
                let bp = bs[0][0];
                let bt = bs[0][1];
                let nextDir = this.applyBendToDir(bt, direc);
                //assert(nextDir is not None)
                if (bp == k)
                {
                    // Next bend should occur at this edge.
                    config.push([direc, nextDir]);
                }
                else if (bp == k - 1)
                {
                    // Next bend should occur at the node before this edge.
                    config.push([nextDir]);
                }
                direc = nextDir;
            }
            else
            {
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

chain.prototype.possibleBendSeqs = function() 
{
    /*
    :return: list [s0, s1, ..., sk] where each si is a BendSequence object,
             indicating a sequence of bends that this
             chain may have, given its endpoints.

             If "no bends" is a possibility, we return a BendSequence with empty
             list of bend types.
    */
    if (this.nodes.length == 1) 
        return;
    
    var seqs = [];
    if (this.cycle)
    {    
        let index = Math.floor((Math.random() * 3) + 0);
        let bt = LinkShape.bent[index];
        let ls = new LinkShape();
        let bs = new BendSequence(ls.cwBendsFrom(bt));
        seqs.push(bs);
    }
    else
    {
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
        if (dIn != null)
            dIns = [dIn];
        else
        {
            var comp = new compass();
            dIns = comp.possibleCardinalDirections(A, b);
            if (dIns[0] == undefined)
            {
                comp.possibleCardinalDirections(A, b);
            }
        }

        if (dOut != null)
            dOuts = [dOut];
        else
        {
            var comp = new compass();
            dOuts = comp.possibleCardinalDirections(y, Z);
        }

        // Now computing the sequences.
        for (let i = 0; i < dIns.length; i++)
        {
            let d0 = dIns[i];
            for (let j = 0; j < dOuts.length; j++)
            {
                let d1 = dOuts[j];
                let bendSeqs = this.lookupMinimalBendSeqs(A, d0, Z, d1);
                for (let k = 0; k < bendSeqs.length; k++)
                {
                   let bs = bendSeqs[k];
                   let temp = new BendSequence(bs, dIn=d0, dOut=d1); 
                   seqs.push(temp);
                }
            }
        }
    }
    
    return seqs;
};

chain.prototype.lookupMinimalBendSeqs = function(A, d0, Z, d1)
{
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
    let r = 0;
    let g = 3;
    let j = 5;
    let n = 2;

    var pMap = [[0, 2, 2, 3, 5, 5, 6, 8, 8],        //E
                [6, 3, 0, 8, 5, 2, 8, 5, 2],        //S
                [8, 8, 6, 5, 5, 3, 2, 2, 0],        //W
                [2, 5, 8, 2, 5, 8, 0, 3, 6]][d1];    //N
        
    var d0Map =[[0, 1, 2, 3],        //E
                [3, 0, 1, 2],        //S
                [2, 3, 0, 1],        //W
                [1, 2, 3, 0]][d1];   //N
    
    var bendMap = [[r, null, n, g, null, j],        //E
                   [g, null, r, j, null, n],        //S
                   [j, null, g, n, null, r],        //W
                   [n, null, j, r, null, g]][d1];   //N

    let x = null;
    let y = null;

    if (A.getCenter().x < Z.getCenter().x) 
        x = 0;
    else 
    {
        if (A.getCenter().x == Z.getCenter().x) 
            x = 1; 
        else 
            x = 2;
    }

    if (A.getCenter().y < Z.getCenter().y) 
        y = 0;
    else 
    {
        if (A.getCenter().y == Z.getCenter().y) 
            y = 1; 
        else 
            y = 2;
    }
    
    var p = 3*y + x;

    var eastFinalLookup = [
        [
            [[g,n]],
            [[n]],
            [[r,n]],
            [[r,g,n], [g,r,n]]
        ],      //0
        null,   //1
        [
            [[j,g,r,n], [g,j,r,n], [g,j,n,r]],
            [[j,r,n], [j,n,r]],
            [[r,n]],
            [[g,r,n]]
        ],      //2
        [
            [[]],
            [[n,j,r]],
            [[n,r,g,n], [r,n,j,r]],
            [[r,g,n]]
        ],      //3
        null,   //4
        [
            [[j,g,r,n], [g,j,n,r]],
            [[j,n,r]],
            [[n,g,r,n], [r,j,n,r]],
            [[g,r,n]]
        ],      //5
        [
            [[j,r]],
            [[n,j,r], [j,n,r]],
            [[n,r]],
            [[r]]
        ],      //6
        null,   //7
        [
            [[g,j,n,r], [j,g,n,r], [j,g,r,n]],
            [[j,n,r]],
            [[n,r]],
            [[g,n,r], [g,r,n]]
        ]       //8
    ];

    var lookup = eastFinalLookup[pMap[p]][d0Map[d0]];
    if (lookup == undefined)
    {
        let b = 4;
        let c = 6;
    }

    var bends = [];

    for (let i = 0; i < lookup.length; i++)
    {
        let seq = lookup[i];
        let temp = [];
        for (let j = 0; j < seq.length; j++)
        {
            let bend = seq[j];
            temp.push(bendMap[bend]);
        }
        bends.push(temp);
    }

    return bends;
};

chain.prototype.takeShapeBasedConfiguration = function(gm, options, layout)
{
    /*
    Give this chain an orthogonal configuration best fitting its present
    geometric shape, i.e. putting the bend points in the most natural places,
    including the possibility that they go where edges are (meaning a new bend
    point is created).

    :return: boolean saying if anything changed
    */

    // For a chain of one node, there is nothing to do.
    var changes = [];

    if (this.nodes.length == 1) 
    {
        return;
    }

    // Else there is at least one internal edge, and we assume that none of the
    // internal edges is yet configured. Therefore we /will/ be making
    // changes -- even if not creating any bent links (straight chains still need
    // to be configured).
    
    var seqs = this.possibleBendSeqs();
    for (let i = 0; i < seqs.length; i++)
    {
        let bs = seqs[i];
        //find the cost for each bend sequence
        this.evaluateBendSeq(bs);
    }

    //finding the index with smallest cost
    var min = seqs[0].cost;
    var index = 0;
    for(let i = 1; i < seqs.length; i++)
    {
        let bs = seqs[i];
        if (bs.cost < min)
        {
            min = bs.cost;
            index = i;
        }

    }
    var bestSeq = seqs[index];
    var configseq = this.writeConfigSeq(bestSeq);

    // Now create the configuration.
    var G = this.gm;
    for (let j = 0; j < configseq.length; j++)
    {
        let conf = configseq[j];    
        // Get the edge and the links u, v that come before and after
        // it in the chain, respectively.

        let k = 2 * j + 1;
        let edge = this.getEdge(k);
        let u = this.getNode(k - 1);
        let v = this.getNode(k + 1);

        // if (u.isCompound() || v.isCompound())
        //     contin
        if (conf.length == 1)
        {
            layout.placementConstraints(conf[0], options, u, v);

            let value = options.relativeAlignment[options.relativeAlignment.length - 1];
            if (value.top != undefined)
            {
                if (typeof(value.top) != "string")
                {
                    value.top = value.top.id;
                    value.bottom = value.bottom.id;
                }
            }
            else
            {
                if (typeof(value.left) != "string")
                {
                    value.left = value.left.id;
                    value.right = value.right.id;
                }
            }
        }
        else
        {
            // In this case we are to create a bend point.
            // Create a bend point
            
            let bendpoint = {
              x: null,
              y: null
            };
            if (conf[0] == 0 || conf[0] == 2)
            {
                bendpoint.x = v.getCenter().x;
                bendpoint.y = u.getCenter().y;
            }
            else if (conf[0] == 1 || conf[0] == 3)
            {
                bendpoint.x = u.getCenter().x;
                bendpoint.y = v.getCenter().y;
            }

            edge.createBendPoint(bendpoint, conf[0], conf[1], u, v);
            gm.edgesWithBends.push(edge);
        }
    }
};

module.exports = chain;
