function bendSequence(bendtypes, dIn = null, dOut = null) {
	this.bendtypes = bendtypes;
    this.bendpoints = [];
    this.cost = 0;
    this.incomingDirec = dIn;
    this.outgoingDirec = dOut;
};

bendSequence.prototype.repr = function()
{
    var s = this.bendtypes.toString();
    if (this.incomingDirec != null)
        s += ' entering ' + this.incomingDirec;
    if (this.outgoingDirec != null)
        s += ' exiting ' + this.outgoingDirec;
    return s;
};

module.exports = bendSequence;