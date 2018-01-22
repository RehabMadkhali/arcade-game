var Creature = function(x, y, width, height, sprite) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};


Creature.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width  ,this.height);
};
