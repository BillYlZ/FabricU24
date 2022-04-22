'use strict'

Helper.prototype = {}
Helper.visible = false;  
Helper.color = 'pink';

function Helper(opts) {
  if (opts) {
    if (opts.hasOwnProperty('visible')) {
      this.setVisible(opts.visible);
    }    
    if (opts.hasOwnProperty('color')) {
      this.setColor(opts.color);
    }
  }
}

Helper.prototype.setVisible = function (visible) {
  this.visible = visible;
}

Helper.prototype.setColor = function (color) {
  this.color = color;
}

module.exports = Helper