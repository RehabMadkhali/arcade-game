// Creating Class Enemy with all needed Functionalities.
var Enemy = function(x, y, width, height) {
    "use strict";
  Creature.call(this, x, y, width, height, 'images/enemy-bug.png');
  this.speed = Math.floor(Math.random() * 300 + 100);
};

// it increments the x position of the enemy until it reach the end of the canvas the it back again to the zero point.
Enemy.prototype.update = function(dt) {
    "use strict";
  if (this.x <= 500)
    this.x += this.speed * dt;
  else
    this.x = 0;
};


Enemy.prototype.render = function() {
    "use strict";
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width  ,this.height);
};
