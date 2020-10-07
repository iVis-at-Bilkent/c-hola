function compass() {
    this.EAST = 0;
    this.SOUTH = 1;
    this.WEST = 2;
    this.NORTH = 3;
    this.SE = 4;
    this.SW = 5;
    this.NW = 6;
    this.NE = 7;

    this.cwCards = [0, 1, 2, 3];
    this.acwCards = [0, 3, 2, 1];

    this.cwOrds = [4, 5, 6, 7];
    this.acwOrds = [4, 7, 6, 5];

    this.cwRose = [0, 4, 1, 5, 2, 6, 3, 7];
    this.acwRose = [0, 7, 3, 6, 2, 5, 1, 4];

    this.horizontal = [0, 2];
    this.vertical = [1, 3];

    this.increasing = [0, 1];
    this.decreasing = [2, 3];

    this.abbrev = {
        0: "E", 
        1: "S", 
        2: "W", 
        3: "N",
        4: "SE", 
        5: "SW", 
        6: "NW", 
        7: "NE"};

    // Directions w.r.t which we must /increase/ the const
    // coord in order to move to the right:
    this.rightSidePlus = [this.NORTH, this.EAST];
    // Directions w.r.t which we must /decrease/ the const
    // coord in order to move to the right:
    this.rightSideMinus = [this.SOUTH, this.WEST];

    this.variableDimension = {
        0: 0,
        1: 1,
        2: 0,
        3: 1
    };

    this.constantDimension = {
        0: 1,
        1: 0,
        2: 1,
        3: 0
    };

    this.components = {
        4: [this.SOUTH, this.EAST],
        5: [this.SOUTH, this.WEST],
        6: [this.NORTH, this.WEST],
        7: [this.NORTH, this.EAST],
        0: [this.EAST],
        1: [this.SOUTH],
        2: [this.WEST],
        3: [this.NORTH]
    };

    this.signs = {
        0: [1, 0],
        4: [1, 1],
        1: [0, 1],
        5: [-1, 1],
        2: [-1, 0],
        6: [-1, -1],
        3: [0, -1],
        7: [1, -1]
    };

    this.libavoidVisibility = {
        0: 8,
        1: 2,
        2: 4,
        3: 1
    };
};

compass.prototype.cwClosedInterval = function(d0, d1)
{
    /*
    :param d0: a direction
    :param d1: another direction
    :return: list of all compass directions from d0 to d1 inclusive, going clockwise
    */

    let rr = this.cwRose.concat(this.cwRose);
    let i0 = rr.indexOf(d0);
    let i1 = i0 + rr.slice(i0).indexOf(d1);
    return rr.slice(i0,i1+1);
};

    // @classmethod
    // def acwClosedInterval(cls, d0, d1):
    //     """
    //     :param d0: a direction
    //     :param d1: another direction
    //     :return: list of all compass directions from d0 to d1 inclusive, going anticlockwise
    //     """
    //     return list(reversed(cls.cwClosedInterval(d1, d0)))

    // @classmethod
    // def cwRoseDistance(cls, d0, d1):
    //     """
    //     :param d0: a direction
    //     :param d1: another direction
    //     :return: the number of steps on the compass rose going clockwise from d0 to d1
    //     """
    //     return len(cls.cwClosedInterval(d0, d1)) - 1

    // @classmethod
    // def shortestRoseDistance(cls, d0, d1):
    //     """
    //     :param d0: a direction
    //     :param d1: another direction
    //     :return: the minimum number of steps on the compass rose from d0 to d1, going in either direction
    //     """
    //     return min(cls.cwRoseDistance(d0, d1), cls.acwRoseDistance(d0, d1))

    // @classmethod
    // def acwRoseDistance(cls, d0, d1):
    //     """
    //     :param d0: a direction
    //     :param d1: another direction
    //     :return: the number of steps on the compass rose going anticlockwise from d0 to d1
    //     """
    //     return len(cls.acwClosedInterval(d0, d1)) - 1

compass.prototype.sameDimension = function(d0, d1)
{
    /*
    :param d0: a cardinal Compass direction
    :param d1: a cardinal Compass direction
    :return: boolean saying if these directions are in the same dimension
    */
    return ((d0 % 2) == (d1 % 2));
}

    // @classmethod
    // def perpendicular(cls, d0, d1):
    //     """
    //     :param d0: a cardinal Compass direction
    //     :param d1: a cardinal Compass direction
    //     :return: boolean saying if these directions are perpendicular to one another
    //     """
    //     return not cls.sameDimension(d0, d1)


compass.prototype.cardinalDirection = function(p1, p2) {
    /*
    :param p1: either a Node object, or the coords (x1, y1) of a point
    :param p2: either a Node object, or the coords (x2, y2) of a point
    :return: the predominant cardinal direction from p1 to p2
    */
    var p1Loc = p1.getCenter();
    var p2Loc = p2.getCenter();
    var dx = p2Loc.x - p1Loc.x;
    var dy = p2Loc.y - p1Loc.y;
    
    if (Math.abs(dy) <= Math.abs(dx))
    {
        if (p1Loc.x < p2Loc.x)
            return this.EAST;
        else
            return this.WEST;
    }
    else
    {
        if (p1Loc.y < p2Loc.y)
            return this.SOUTH;
        else
            return this.NORTH;
    }
};

compass.prototype.possibleCardinalDirections = function(node1, node2)
{
    /*
    :param node1: a Node
    :param node2: a Node
    :return: a list of the possible cardinal directions from node1 to node2,
             if they were to be aligned non-aggressively
    */
    var node1Loc = node1.getCenter();
    var node2Loc = node2.getCenter();
    let x1 = node1Loc.x;
    let x2 = node2Loc.x;
    let y1 = node1Loc.y;
    let y2 = node2Loc.y;
    let dx = x2 - x1;
    let dy = y2 - y1;

    var dirs = [];
    if (dx > 0)
        dirs.push(this.EAST);
    if (dx < 0)
        dirs.push(this.WEST);
    if (dy > 0)
        dirs.push(this.SOUTH);
    if (dy < 0)
        dirs.push(this.NORTH);
    return dirs;
};

compass.prototype.direction = function(node1, node2)
{
    var node1Loc = node1.getCenter();
    var node2Loc = node2.getCenter();
    let x1 = node1Loc.x;
    let x2 = node2Loc.x;
    let y1 = node1Loc.y;
    let y2 = node2Loc.y;
    let dx = x2 - x1;
    let dy = y2 - y1;

    let dir;
    if (dx > 0 && dy < 0)
        dir = this.NE;
    else if (dx > 0 && dy == 0)
        dir = this.EAST;
    else if (dx > 0 && dy > 0)
        dir = this.SE;
    else if (dx == 0 && dy > 0)
        dir = this.SOUTH;
    else if (dx < 0 && dy > 0)
        dir = this.SW;
    else if (dx < 0 && dy == 0)
        dir = this.WEST;
    else if (dx < 0 && dy < 0)
        dir = this.NW;
    else if (dx == 0 && dy < 0)
        dir = this.NORTH;
    return dir;
};

compass.prototype.getRotationFunction = function(fromDir, toDir)
{
    // For now we only handle cardinal directions.

    let d = (toDir - fromDir) % 4;
    if (d < 0)
        d = d + 4;
    return [
        function(a){return [a[0], a[1]]},
        function(a){return [-1*a[1], a[0]]},
        function(a){return [-1*a[0], -1*a[1]]},
        function(a){return [a[1], -1*a[0]]},
    ][d];
}

compass.prototype.flip = function(direc)
{
    let i0 = this.cwRose.indexOf(direc);
    return this.cwRose[(i0+4)%8];
}

compass.prototype.cw90 = function(direc)
{
    let i0 = this.cwRose.indexOf(direc);
    return this.cwRose[(i0+2)%8];
}

    // @classmethod
    // def acw90(cls, direc):
    //     i0 = cls.cwRose.index(direc)
    //     return cls.cwRose[(i0-2)%8]

compass.prototype.rotateCW = function(n, direc)
{
    let i0 = this.cwRose.indexOf(direc);
    return this.cwRose[(i0+n)%8];
}

compass.prototype.vectorSigns = function(direc)
{
    /*
    :param direc: a Compass direction
    :return: (xs, ys) where xs in {-1, 0, 1} represents the sign of
    the x-coordinate of a vector lying in the "octant" represented
    by direc, and likewise for ys. Here an "octant" is a semiaxis for
    a cardinal direction and an open quadrant for an ordinal direction.
    */
    return this.signs[direc];
};

    // @classmethod
    // def vector(cls, direc, mag=1):
    //     """
    //     :param direc: a Compass direction, cardinal or ordinal
    //     :param mag: a float
    //     :return: a vector in the form [x, y] having the given magnitude and
    //              pointing in the given direction
    //     """
    //     hsqrt2 = 0.7071067811865476
    //     v = {
    //         cls.EAST: [1, 0],
    //         cls.SOUTH: [0, 1],
    //         cls.WEST: [-1, 0],
    //         cls.NORTH: [0, -1],
    //         cls.SE: [hsqrt2, hsqrt2],
    //         cls.SW: [-hsqrt2, hsqrt2],
    //         cls.NW: [-hsqrt2, -hsqrt2],
    //         cls.NE: [hsqrt2, -hsqrt2]
    //     }[direc]
    //     return [mag*c for c in v]

module.exports = compass;
