function bendSequence(bendtypes, dIn = null, dOut = null) 
{
    this.bendtypes = bendtypes;
    this.bendpoints = [];
    this.cost = 0;
    this.incomingDirec = dIn;
    this.outgoingDirec = dOut;
};

module.exports = bendSequence;
