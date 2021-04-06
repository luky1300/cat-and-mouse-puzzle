function getNeighborsByTile(tile, point) {
  switch (tile.type) {
    case "corner":
      switch (tile.angle) {
        case 0:
          return {
            top: [],
            right: [],
            bottom: [{ x: point.x - 1, y: point.y - 1 }],
            left: [{ x: point.x + 1, y: point.y + 1 }],
          };
        case 90:
          return {
            top: [{ x: point.x - 1, y: point.y + 1 }],
            right: [],
            bottom: [],
            left: [{ x: point.x + 1, y: point.y - 1 }],
          };
        case -180:
          return {
            top: [{ x: point.x + 1, y: point.y + 1 }],
            right: [{ x: point.x - 1, y: point.y - 1 }],
            bottom: [],
            left: [],
          };
        case -90:
          return {
            top: [],
            right: [{ x: point.x - 1, y: point.y + 1 }],
            bottom: [],
            left: [{ x: point.x + 1, y: point.y + 1 }],
          };
        default:
          console.log("empty tile");
      }
    case "two-corners":
      switch (tile.angle) {
        case 0:
        case -180:
          return {
            top: [{ x: point.x + 1, y: point.y + 1 }],
            right: [{ x: point.x - 1, y: point.y - 1 }],
            bottom: [{ x: point.x - 1, y: point.y - 1 }],
            left: [{ x: point.x + 1, y: point.y + 1 }],
          };
        case 90:
        case -90:
          return {
            top: [{ x: point.x - 1, y: point.y + 1 }],
            right: [{ x: point.x - 1, y: point.y + 1 }],
            bottom: [{ x: point.x + 1, y: point.y - 1 }],
            left: [{ x: point.x + 1, y: point.y - 1 }],
          };
      }
    case "flower":
      switch (tile.angle) {
        case 0:
          return {
            top: [],
            right: [{ x: point.x - 1, y: point.y + 1 }],
            bottom: [
              { x: point.x - 1, y: point.y - 1 },
              { x: point.x + 1, y: point.y - 1 },
            ],
            left: [{ x: point.x + 1, y: point.y + 1 }],
          };
        case 90:
          return {
            top: [{ x: point.x - 1, y: point.y + 1 }],
            right: [],
            bottom: [{ x: point.x - 1, y: point.y - 1 }],
            left: [
              { x: point.x + 1, y: point.y - 1 },
              { x: point.x + 1, y: point.y + 1 },
            ],
          };
        case -180:
          return {
            top: [
              { x: point.x + 1, y: point.y + 1 },
              { x: point.x - 1, y: point.y + 1 },
            ],
            right: [{ x: point.x - 1, y: point.y - 1 }],
            bottom: [],
            left: [{ x: point.x + 1, y: point.y - 1 }],
          };
        case -90:
          return {
            top: [{ x: point.x + 1, y: point.y + 1 }],
            right: [
              { x: point.x - 1, y: point.y - 1 },
              { x: point.x - 1, y: point.y + 1 },
            ],
            bottom: [{ x: point.x + 1, y: point.y - 1 }],
            left: [],
          };
      }
    case "cross":
      return {
        top: [
          { x: point.x + 1, y: point.y + 1 },
          { x: point.x, y: point.y + 2 },
          { x: point.x - 1, y: point.y + 1 },
        ],
        right: [
          { x: point.x - 1, y: point.y + 1 },
          { x: point.x - 2, y: point.y },
          { x: point.x - 1, y: point.y - 1 },
        ],
        bottom: [
          { x: point.x - 1, y: point.y - 1 },
          { x: point.x, y: point.y - 2 },
          { x: point.x + 1, y: point.y - 1 },
        ],
        left: [
          { x: point.x + 1, y: point.y - 1 },
          { x: point.x + 2, y: point.y },
          { x: point.x + 1, y: point.y + 1 },
        ],
      };
    case "bridge":
      return {
        top: [{ x: point.x, y: point.y + 2 }],
        right: [{ x: point.x - 2, y: point.y }],
        bottom: [{ x: point.x, y: point.y - 2 }],
        left: [{ x: point.x + 2, y: point.y }],
      };
  }
}

function getAllNeighbors(point, board) {
  let neighbors = [];
  let row;
  let column;

  if (point.y % 2 === 0) {
    //top/bottom neighbors
    row = point.y / 2;
    column = (point.x - 1) / 2;

    if (point.y !== 6 && board[row][column].type) {
      //there is a bottom neighbor
      neighbors = [
        ...neighbors,
        ...getNeighborsByTile(board[row][column], point).top,
      ];
    }

    if (point.y !== 0 && board[row - 1][column].type) {
      // there is a top neighbor
      neighbors = [
        ...neighbors,
        ...getNeighborsByTile(board[row - 1][column], point).bottom,
      ];
    }
  }

  // if (point1.x % 2 === 0) => right/left neighbors
  if (point.x % 2 === 0) {
    //top/bottom neighbors
    row = (point.y - 1) / 2;
    column = point.x / 2;

    if (point.x !== 6 && board[row][column - 1].type) {
      //there is a right neighbor
      neighbors = [
        ...neighbors,
        ...getNeighborsByTile(board[row][column - 1], point).right,
      ];
    }

    if (point.x !== 0 && board[row][column].type) {
      // there is a left neighbor
      neighbors = [
        ...neighbors,
        ...getNeighborsByTile(board[row][column], point).left,
      ];
    }
  }
  return neighbors;
}

function isRoute(point1, point2, board) {
  let visited = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  let allNeighbors = [point1];

  let isWinningCondition = false;

  while (allNeighbors.length) {
    let neighbor = allNeighbors.shift();
    if (neighbor.x === point2.x && neighbor.y === point2.y) {
      isWinningCondition = true;
      break;
    } else {
      if (!visited[neighbor.x][neighbor.y]) {
        visited[neighbor.x][neighbor.y] = true;
        //find all neighbors
        let newNeighbors = getAllNeighbors(neighbor, board);
        newNeighbors.forEach((n) => {
          if (!visited[n.x][n.y]) {
            allNeighbors.push(n);
          }
        });
      }
    }
  }

  return isWinningCondition;
}
