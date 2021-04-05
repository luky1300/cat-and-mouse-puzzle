
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

function checkIfWinningPosition(currentPosition, winningPositions) {
  console.log(currentPosition);
  let isWinningPosition = false;

  for (let i = 0; i < winningPositions.length; i++) {
    let oneWinningPosition = winningPositions[i];
    let wasFailedBlock = false;

    for (let j = 0; j < oneWinningPosition.length; j++) {
      let winningRow = oneWinningPosition[j];
      for (let k = 0; k < winningRow.length; k++) {
        let winningBlock = winningRow[k];
        if (
          winningBlock.type !== currentPosition[j][k].type ||
          !winningBlock.angle.includes(currentPosition[j][k].angle)
        ) {
          wasFailedBlock = true;
        }
      }
    }
    if (!wasFailedBlock) {
      isWinningPosition = true;
      break;
    }
  }
  return isWinningPosition;
}

