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

    this.abbrev = [[this.EAST, "E"], [this.SOUTH, "S"], [this.WEST, "W"], [this.NORTH, "N"],
        [this.SE, "SE"], [this.SW, "SW"], [this.NW, "NW"], [this.NE, "NE"]];

    // Directions w.r.t which we must /increase/ the const
    // coord in order to move to the right:
    this.rightSidePlus = [this.NORTH, this.EAST];
    // Directions w.r.t which we must /decrease/ the const
    // coord in order to move to the right:
    this.rightSideMinus = [this.SOUTH, this.WEST];

    this.variableDimension = [
        [this.EAST, 0],
        [this.SOUTH, 1],
        [this.WEST, 0],
        [this.NORTH, 1]
    ];

    this.constantDimension = [
        [this.EAST, 1],
        [this.SOUTH, 0],
        [this.WEST, 1],
        [this.NORTH, 0]
    ];

    this.components = [
        [this.SE, [this.SOUTH, this.EAST]],
        [this.SW, [this.SOUTH, this.WEST]],
        [this.NW, [this.NORTH, this.WEST]],
        [this.NE, [this.NORTH, this.EAST]],
        [this.EAST, [this.EAST]],
        [this.SOUTH, [this.SOUTH]],
        [this.WEST, [this.WEST]],
        [this.NORTH, [this.NORTH]]
    ];

    this.signs = [
        [this.EAST, [1, 0]],
        [this.SE, [1, 1]],
        [this.SOUTH, [0, 1]],
        [this.SW, [-1, 1]],
        [this.WEST, [-1, 0]],
        [this.NW, [-1, -1]],
        [this.NORTH, [0, -1]],
        [this.NE, [1, -1]]
    ];

    this.libavoidVisibility = [
        [this.EAST, 8],
        [this.SOUTH, 2],
        [this.WEST, 4],
        [this.NORTH, 1]
    ];
};
    // @classmethod
    // def cwClosedInterval(cls, d0, d1):
    //     """
    //     :param d0: a direction
    //     :param d1: another direction
    //     :return: list of all compass directions from d0 to d1 inclusive, going clockwise
    //     """
    //     rr = cls.cwRose + cls.cwRose
    //     i0 = rr.index(d0)
    //     i1 = i0 + rr[i0:].index(d1)
    //     return rr[i0:i1+1]

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

    // @classmethod
    // def sameDimension(cls, d0, d1):
    //     """
    //     :param d0: a cardinal Compass direction
    //     :param d1: a cardinal Compass direction
    //     :return: boolean saying if these directions are in the same dimension
    //     """
    //     return (d0 % 2) == (d1 % 2)

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
}

    // @classmethod
    // def getRotationFunction(cls, fromDir, toDir):
    //     # For now we only handle cardinal directions.
    //     if fromDir not in cls.cwCards or toDir not in cls.cwCards:
    //         raise Exception("only cardinal directions are currently handled")
    //     a, b = fromDir, toDir
    //     d = (b - a) % 4
    //     return [
    //         lambda v: (v[0], v[1]),
    //         lambda v: (-v[1], v[0]),
    //         lambda v: (-v[0], -v[1]),
    //         lambda v: (v[1], -v[0])
    //     ][d]

    // @classmethod
    // def flip(cls, direc):
    //     i0 = cls.cwRose.index(direc)
    //     return cls.cwRose[(i0+4)%8]

    // @classmethod
    // def cw90(cls, direc):
    //     i0 = cls.cwRose.index(direc)
    //     return cls.cwRose[(i0+2)%8]

    // @classmethod
    // def acw90(cls, direc):
    //     i0 = cls.cwRose.index(direc)
    //     return cls.cwRose[(i0-2)%8]

    // @classmethod
    // def rotateCW(cls, n, direc):
    //     i0 = cls.cwRose.index(direc)
    //     return cls.cwRose[(i0+n)%8]

    // @classmethod
    // def vectorSigns(cls, direc):
    //     """
    //     :param direc: a Compass direction
    //     :return: (xs, ys) where xs in {-1, 0, 1} represents the sign of
    //     the x-coordinate of a vector lying in the "octant" represented
    //     by direc, and likewise for ys. Here an "octant" is a semiaxis for
    //     a cardinal direction and an open quadrant for an ordinal direction.
    //     """
    //     return cls.signs[direc]

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
