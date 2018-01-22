// it resets everything after winning or losing the player the game. it turns back everything to the default state.
var reseting = function() {
  player.win = false;
  if (player.heart < 0)
    player.heart = 10;
  else
    player.heart += 10;

  if (playerLifes.length <= 0) {
    playerLifes = createLifes();
  }

  allowedKeys = {
    13: 'enter',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
}

function createEnemies() {
  var enemies = [];
  var enemyXPosition = 60;

  for (var i = 0; i < 3; i++) {
    enemies.push(new Enemy(0, enemyXPosition, 120, 180));
    enemyXPosition += 80;
  }

  return enemies;
}


function createLifes() {
  var xPosition = 190;
  var playerLifes = [];

  for (var i = 0; i < player.lifeChances; i++) {
    playerLifes.push(new Player(xPosition, -35, 50, 100));
    xPosition += 50;
  }

  return playerLifes;
}

function createStar() {

  var star = [];
  star.push(new Star(50, 100));

  return star;
}


function handleKeyUpListener(e) {
  allowedKeys = {
    13: 'enter',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
}



var player = new Player(200, 440, 99, 170);
var enemies = createEnemies();
var playerLifes = createLifes();
var star = createStar();
var heart = new Heart(460, 5, 40, 40);



document.addEventListener('keyup', handleKeyUpListener);
