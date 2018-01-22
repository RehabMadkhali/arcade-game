var Heart = function(x, y, width, height) {
    "use strict";
  Creature.call(this, x, y, width, height, 'images/pixel-heart.png');

};

Heart.prototype.render = function() {
    "use strict";
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width  ,this.height);
};
