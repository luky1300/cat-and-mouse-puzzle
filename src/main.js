const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  scene: {
    preload: preload,
    create: create,
  },
};

const game = new Phaser.Game(config);

function preload() {
  
  this.load.image("tile1", "assets/tile-corner.png");
  this.load.image("tile2", "assets/tile-corner.png");
  this.load.image("tile3", "assets/tile-corner.png");
  this.load.image("tile4", "assets/tile-corner.png");
  this.load.image("tile5", "assets/tile-flower.png");
  this.load.image("tile6", "assets/tile-flower.png");
  this.load.image("tile7", "assets/tile-two-corners.png");
  this.load.image("tile8", "assets/tile-cross.png");
  this.load.image("tile9", "assets/tile-bridge.png");

}

function create() {
  const field = this.add.rectangle(200, 200, 300, 300, 0x6666ff);

  const tile1 = this.add.sprite(425, 100, "tile1").setInteractive();
  tile1.name = tile1;
  const tile2 = this.add.sprite(550, 100, "tile2").setInteractive();
  tile2.name = tile2;
  const tile3 = this.add.sprite(675, 100, "tile3").setInteractive();
  tile3.name = tile3;
  const tile4 = this.add.sprite(425, 225, "tile4").setInteractive();
  tile4.name = tile4;
  const tile5 = this.add.sprite(425, 350, "tile5").setInteractive();
  tile5.name = tile5;
  const tile6 = this.add.sprite(550, 225, "tile6").setInteractive();
  tile6.name = tile6;
  const tile7 = this.add.sprite(550, 350, "tile7").setInteractive();
  tile7.name = tile7;
  const tile8 = this.add.sprite(675, 225, "tile8").setInteractive();
  tile8.name = tile8;
  const tile9 = this.add.sprite(675, 350, "tile9").setInteractive();
  tile9.name = tile9;


  this.input.setDraggable(tile1);
  this.input.setDraggable(tile2);
  this.input.setDraggable(tile3);
  this.input.setDraggable(tile4);
  this.input.setDraggable(tile5);
  this.input.setDraggable(tile6);
  this.input.setDraggable(tile7);
  this.input.setDraggable(tile8);
  this.input.setDraggable(tile9);

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

    if (
      Math.abs(gameObject.x - dragableOrigin.x) < 5 &&
      Math.abs(gameObject.y - dragableOrigin.y) < 5
    ) {
      gameObject.setAngle(gameObject.angle + 90);
    } else if (isInsideBoard(gameObject) && !board[row][column]) {
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
