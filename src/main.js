
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

const winningConditions = [
  [
    [
      { type: "flower", angle: [-90] },
      { type: "corner", angle: [90] },
      { type: "corner", angle: [-90] },
    ],
    [
      { type: "two-corners", angle: [0, -180] },
      { type: "flower", angle: [0] },
      { type: "two-corners", angle: [90, -90] },
    ],
    [
      { type: "corner", angle: [-180] },
      { type: "bridge", angle: [0] },
      { type: "cross", angle: [0] },
    ],
  ],
  [
    [
      { type: "corner", angle: [-180] },
      { type: "cross", angle: [0] },
      { type: "two-corners", angle: [90, -90] },
    ],
    [
      { type: "corner", angle: [0] },
      { type: "flower", angle: [-90] },
      { type: "two-corners", angle: [90, -90] },
    ],
    [
      { type: "corner", angle: [-180] },
      { type: "bridge", angle: [0] },
      { type: "flower", angle: [90] },
    ],
  ],
  [
    [
      { type: "flower", angle: [-90] },
      { type: "corner", angle: [0] },
      { type: "corner", angle: [-90] },
    ],
    [
      { type: "two-corners", angle: [0, -180] },
      { type: "cross", angle: [0] },
      { type: "two-corners", angle: [90, -90] },
    ],
    [
      { type: "corner", angle: [-180] },
      { type: "bridge", angle: [0] },
      { type: "flower", angle: [90] },
    ],
  ],
  [
    [
      { type: "two-corners", angle: [0, -180] },
      { type: "corner", angle: [0] },
      { type: "corner", angle: [-90] },
    ],
    [
      { type: "flower", angle: [90] },
      { type: "flower", angle: [-90] },
      { type: "two-corners", angle: [90, -90] },
    ],
    [
      { type: "corner", angle: [-180] },
      { type: "bridge", angle: [0] },
      { type: "cross", angle: [0] },
    ],
  ],
];

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
    let numberWinningBlocks = 0;

    for (let j = 0; j < oneWinningPosition.length; j++) {
      let winningRow = oneWinningPosition[j];
      for (let k = 0; k < winningRow.length; k++) {
        let winningBlock = winningRow[k];
        if (
          winningBlock.type === currentPosition[j][k].type &&
          winningBlock.angle.includes(currentPosition[j][k].angle)
        ) {
          numberWinningBlocks++;
        }
      }
    }
    if (numberWinningBlocks === 9) {
      isWinningPosition = true;
      break;
    }
  }
  return isWinningPosition;
}

