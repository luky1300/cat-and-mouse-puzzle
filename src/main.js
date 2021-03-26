const config = {
  width: 600,
  height: 600,
  type: Phaser.AUTO,
  scene: {
    preload: preload,
    create: create,
  },
};

const game = new Phaser.Game(config);

function preload() {}

function create() {
  const field = this.add.rectangle(200, 200, 300, 300, 0x6666ff);

  const tile1 = this.add
    .rectangle(450, 200, 100, 100, 0x00ff00)
    .setInteractive();
  tile1.name = "tile1";
  const tile2 = this.add
    .rectangle(450, 450, 100, 100, 0x80aa90)
    .setInteractive();
  tile2.name = "tile2";

  this.input.setDraggable(tile1);
  this.input.setDraggable(tile2);

  let dragableOrigin = {};
  let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  //TBD: refactor to account for board size and position
  const isInsideBoard = (point) =>
    point.x > 50 && point.x < 350 && point.y > 50 && point.y < 350;

  const isOnEdge = (point) =>
    point.x > 0 &&
    point.x < 400 &&
    point.y > 0 &&
    point.y < 400 &&
    !isInsideBoard(point);

  this.input.on(
    "dragstart",
    function (pointer, gameObject) {
      dragableOrigin.x = gameObject.x;
      dragableOrigin.y = gameObject.y;
      this.children.bringToTop(gameObject);
    },
    this
  );

  this.input.on("dragend", function (pointer, gameObject) {
    const column = Math.round((gameObject.x - 100) / 100);
    const row = Math.round((gameObject.y - 100) / 100);

    if (isInsideBoard(gameObject) && !board[row][column]) {
      if (isInsideBoard(dragableOrigin)) {
        //remove tile from original place
        let startColumn = dragableOrigin.x / 100 - 1;
        let startRow = dragableOrigin.y / 100 - 1;
        board[startRow][startColumn] = 0;
      }

      //stick
      gameObject.x = 100 + column * 100;
      gameObject.y = 100 + row * 100;
      board[row][column] = gameObject.name;
    } else if (
      (isInsideBoard(gameObject) && board[row] && board[row][column]) ||
      isOnEdge(gameObject)
    ) {
      //return to origin
      gameObject.x = dragableOrigin.x;
      gameObject.y = dragableOrigin.y;
    } else {
      //leave where dropped

      if (isInsideBoard(dragableOrigin)) {
        //remove tile from original place
        let startColumn = dragableOrigin.x / 100 - 1;
        let startRow = dragableOrigin.y / 100 - 1;
        board[startRow][startColumn] = 0;
      }

      gameObject.x;
      gameObject.y;
    }
  });

  this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
    gameObject.x = dragX;
    gameObject.y = dragY;
  });
}
