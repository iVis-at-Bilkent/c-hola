var LayoutConstants = require('cose-base').layoutBase.LayoutConstants;

function cholaConstants() {
}

//cholaConstants inherits static props in FDLayoutConstants
for (var prop in LayoutConstants) {
  cholaConstants[prop] = LayoutConstants[prop];
}

cholaConstants.DEFAULT_USE_MULTI_LEVEL_SCALING = false;
cholaConstants.DEFAULT_RADIAL_SEPARATION = LayoutConstants.DEFAULT_MIN_LENGTH;
cholaConstants.DEFAULT_COMPONENT_SEPERATION = 60;
cholaConstants.TILE = true;
cholaConstants.TILING_PADDING_VERTICAL = 10;
cholaConstants.TILING_PADDING_HORIZONTAL = 10;

module.exports = cholaConstants;
