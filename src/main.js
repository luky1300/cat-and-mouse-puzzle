const config = {
  width: 1000,
  height: 800,
  type: Phaser.AUTO,
  scene: [WelcomeScene, LevelScene],
};

const game = new Phaser.Game(config);

const field = {
  width: 300,
  height: 300,
  x: 250,
  y: 250,
};

const tileSize = field.width / 3;

let currentPosition = [
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}],
];

function checkIfWinningPosition(currentPosition, winningConditions) {
  
  let isWinningPosition = true;

  for (let i = 0; i < winningConditions.length; i++) {
    let condition = winningConditions[i];
    if (
      isRoute(condition.point1, condition.point2, currentPosition) !==
      condition.connected
    )
      isWinningPosition = false;
      break;
  }

  return isWinningPosition;
}
