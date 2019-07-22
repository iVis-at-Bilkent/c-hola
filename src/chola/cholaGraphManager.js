var LGraphManager = require('cose-base').layoutBase.LGraphManager;

function cholaGraphManager(layout) {
  LGraphManager.call(this, layout);
}

cholaGraphManager.prototype = Object.create(LGraphManager.prototype);
for (var prop in LGraphManager) {
  cholaGraphManager[prop] = LGraphManager[prop];
}

module.exports = cholaGraphManager;
