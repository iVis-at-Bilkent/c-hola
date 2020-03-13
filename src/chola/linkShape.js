function linkShape() {
	this.r = 0;  // looks like Latin lowercase 'r'
	this.u = 1;  // looks like Hangul 'uh' character
	this.n = 2;  // looks like Hangul n
	this.g = 3;  // looks like Hangul g
	this.i = 4;  // looks like Hangul i ("ee" sound)
	this.j = 5;  // looks like Latin 'J' (sans serif)

	this.bent = [0, 2, 3, 5];
	this.bentCW = [0, 3, 5, 2];
	this.straight = [1, 4];
};

linkShape.prototype.cwBendsFrom = function(firstBend){
    var k0 = this.bentCW.indexOf(firstBend);
    var p1 = this.bentCW.slice(k0);
    var p2 = this.bentCW.slice(0,k0);
    var output = p1.concat(p2);
    return output;
};

linkShape.r = 0;  // looks like Latin lowercase 'r'
linkShape.u = 1;  // looks like Hangul 'uh' character
linkShape.n = 2;  // looks like Hangul n
linkShape.g = 3;  // looks like Hangul g
linkShape.i = 4;  // looks like Hangul i ("ee" sound)
linkShape.j = 5;  // looks like Latin 'J' (sans serif)

linkShape.bent = [0, 2, 3, 5];
linkShape.bentCW = [0, 3, 5, 2];
linkShape.straight = [1, 4];

module.exports = linkShape;