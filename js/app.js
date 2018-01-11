// Creating Class Enemy with all needed Functionalities.
var Enemy = function(x, y) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.width = 120;
  this.height = 180;

  this.speed = Math.floor(Math.random() * 300 + 100);
};

// it increments the x position of the enemy until it reach the end of the canvas the it back again to the zero point.
Enemy.prototype.update = function(dt) {
  if (this.x <= 500)
    this.x += this.speed * dt;
  else
    this.x = 0;
};

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width  ,this.height);
};

// Creating Class Player with all needed Functionalities.
// i needed alive and win pointers to check if the player really win or die. it's needed to print the message.
var Player = function() {
  this.sprite = 'images/char-horn-girl.png';
  this.x = 200;
  this.y = 440;
  this.width = 99;
  this.height = 170;
  this.alive = true;
  this.win = false;
};


// controll the movement of the player by clicking lift, righ,up and down by incrementing and decrementing the x , y that represents player position.
Player.prototype.update = function() {

  var keyPressed = this.pressedKey;

  switch (keyPressed) {
    case 'up':
      if (this.y > 0) {
        this.y -= 70;
      }
      break;

    case 'down':
      if (this.y < 400) {
        this.y += 70;
      }
      break;

    case 'left':
      if (this.x > 0) {
        this.x -= 100;
      }
      break;

    case 'right':
      if (this.x < 400) {
        this.x += 100;
      }
      break;

    case 'enter':
      reset();
      break;
    default:

  }

  // to stop looping through the same movement. we need it to move once.
  this.pressedKey = null;

  // player reaches the water!
  if (this.y < 0) {
    this.win = true;
    document.removeEventListener('keyup', handleKeyUpListenerDuringPlaying);
    document.addEventListener('keyup', handleKeyUpListenerDuringEndOfGame);
    this.reset();
  }

  // I need a refrence to the player inside the clouser of the forEach. that's why i declare a global var to that function.
  var player = this;

  enemies.forEach(function(enemy) {
    if ((player.x > enemy.x && player.x < ( player.width  / 3 ) + enemy.x) &&
        (player.y > enemy.y && player.y < ( player.height / 3 ) + enemy.y)){

        player.alive = false;
        document.removeEventListener('keyup', handleKeyUpListenerDuringPlaying);
        document.addEventListener('keyup', handleKeyUpListenerDuringEndOfGame);
        player.reset();
}

  });
};


Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width,this.height);
};

Player.prototype.handleInput = function(e) {
  this.pressedKey = e;
};


Player.prototype.reset = function() {
  this.x = 200;
  this.y = 440;
};

// it resets everything after winning or losing the player the game. it turns back everything to the default state.
var reset = function() {
  player.win = false;
  player.alive = true;
  document.addEventListener('keyup', handleKeyUpListenerDuringPlaying);

}


var player = new Player();

var enemies = [];

enemies.push(new Enemy(0, 60));
enemies.push(new Enemy(0, 130));
enemies.push(new Enemy(0, 220));

function handleKeyUpListenerDuringPlaying(e) {
  var allowedKeys = {
    13: 'enter',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
}

// when a Gameover Or a GoodJob messgae appear. i wanted to prevent user from controlling the player in that state.
// except for 'enter' wich will get everything back to normal and the user can play again.
function handleKeyUpListenerDuringEndOfGame(e) {
  var allowedKeys = {
    13: 'enter',
  };

  player.handleInput(allowedKeys[e.keyCode]);
}

document.addEventListener('keyup', handleKeyUpListenerDuringPlaying);
