
var Star = function(width, height) {
    "use strict";
  var xPosition = Math.floor(Math.random() * 400);;
  var yPosition = Math.floor(Math.random() * 300 + 100);

  Creature.call(this, xPosition, yPosition, width, height, 'images/Star.png');

};

Star.prototype.render = function() {
    "use strict";
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width  ,this.height);
};

Star.prototype.randomize = function() {
    "use strict";
  this.x =  Math.floor(Math.random() * 400);;
  this.y = Math.floor(Math.random() * 300 + 100);
};
