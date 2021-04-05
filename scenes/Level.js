class LevelScene extends Phaser.Scene {
  constructor() {
    super("LevelScene");
  }

  init(data) {
    console.log("init", data);
    this.levelNumber = data.levelNumber;
  }

  preload() {
    this.load.image("tile1", "assets/tile-corner.png");
    this.load.image("tile2", "assets/tile-corner.png");
    this.load.image("tile3", "assets/tile-corner.png");
    this.load.image("tile4", "assets/tile-flower.png");
    this.load.image("tile5", "assets/tile-flower.png");
    this.load.image("tile6", "assets/tile-two-corners.png");
    this.load.image("tile7", "assets/tile-two-corners.png");
    this.load.image("tile8", "assets/tile-cross.png");
    this.load.image("tile9", "assets/tile-bridge.png");
    this.load.image("char-mouse1", "assets/char-mouse1.png");
    this.load.image("char-house1", "assets/char-house1.png");
    this.load.image("char-tree", "assets/char-tree.png");
    this.load.image("char-mouse2", "assets/char-mouse2.png");
    this.load.image("char-dog1", "assets/char-dog1.png");
    this.load.image("char-bone", "assets/char-bone.png");
    this.load.image("char-trashcan", "assets/char-trashcan.png");
    this.load.image("char-dog2", "assets/char-dog2.png");
    this.load.image("char-house2", "assets/char-house2.png");
    this.load.image("char-cheese", "assets/char-cheese.png");
    this.load.image("char-cat", "assets/char-cat.png");
    this.load.image("char-ham", "assets/char-ham.png");
    this.load.image("arrow", "assets/arrow.png");
    this.load.image("arrow-crossed", "assets/arrow-crossed.png");
  }

  create() {
    this.cameras.main.setBackgroundColor("#fff");

    this.add.rectangle(250, 250, 475, 475, 0x4ccd43);
    const fieldBoard = this.add.rectangle(
      field.x,
      field.y,
      field.width,
      field.height,
      0x3e4095
    );
    this.add.rectangle(201, 250, 1, 300, 0x000000);
    this.add.rectangle(301, 250, 1, 300, 0x000000);
    this.add.rectangle(250, 201, 300, 1, 0x000000);
    this.add.rectangle(250, 301, 300, 1, 0x000000);

    const charMouse1 = this.add.sprite(60, 160, "char-mouse1");
    const charHouse1 = this.add.sprite(60, 250, "char-house1");
    const charTree = this.add.sprite(62, 350, "char-tree");
    const charMouse2 = this.add.sprite(150, 440, "char-mouse2");
    const charDog1 = this.add.sprite(250, 440, "char-dog1");
    const charBone = this.add.sprite(350, 430, "char-bone");
    const charTrashcan = this.add.sprite(440, 350, "char-trashcan");
    const charDog2 = this.add.sprite(440, 250, "char-dog2");
    const charHouse2 = this.add.sprite(440, 150, "char-house2");
    const charCheese = this.add.sprite(350, 75, "char-cheese");
    const charCat = this.add.sprite(250, 60, "char-cat");
    const charHam = this.add.sprite(150, 65, "char-ham");

    this.add.rectangle(750, 250, 475, 475, 0x4ccd43);
    this.add.rectangle(750, 47, 475, 70, 0x4c3);
    this.add.text(600, 30, `CHALLENGE ${this.levelNumber}`, {
      fontSize: "40px",
    });
    challenges[this.levelNumber - 1].forEach((char) => {
      this.add.sprite(char.x, char.y, char.name);
    });

    const tile1 = this.add.sprite(220, 550, "tile1").setInteractive();
    tile1.name = "tile1";
    tile1.type = "corner";
    const tile2 = this.add.sprite(340, 550, "tile2").setInteractive();
    tile2.name = "tile2";
    tile2.type = "corner";
    const tile3 = this.add.sprite(460, 550, "tile3").setInteractive();
    tile3.name = "tile3";
    tile3.type = "corner";
    const tile4 = this.add.sprite(580, 550, "tile4").setInteractive();
    tile4.name = "tile4";
    tile4.type = "flower";
    const tile5 = this.add.sprite(700, 550, "tile5").setInteractive();
    tile5.name = "tile5";
    tile5.type = "flower";
    const tile6 = this.add.sprite(270, 670, "tile6").setInteractive();
    tile6.name = "tile6";
    tile6.type = "two-corners";
    const tile7 = this.add.sprite(390, 670, "tile7").setInteractive();
    tile7.name = "tile7";
    tile7.type = "two-corners";
    const tile8 = this.add.sprite(510, 670, "tile8").setInteractive();
    tile8.name = "tile8";
    tile8.type = "cross";
    const tile9 = this.add.sprite(630, 670, "tile9").setInteractive();
    tile9.name = "tile9";
    tile9.type = "bridge";

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

    const isInsideBoard = (point) =>
      point.x > (2 * field.x - field.width) / 2 &&
      point.x < (2 * field.x + field.width) / 2 &&
      point.y > (2 * field.y - field.width) / 2 &&
      point.y < (2 * field.y + field.width) / 2;

    const isOnEdge = (point) =>
      point.x > (6 * field.x - 5 * field.width) / 6 &&
      point.x < (6 * field.x + 5 * field.width) / 6 &&
      point.y > (6 * field.y - 5 * field.width) / 6 &&
      point.y < (6 * field.y + 5 * field.width) / 6 &&
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

    this.input.on(
      "dragend",
      function (pointer, gameObject) {
        const column = Math.round(
          (gameObject.x - (field.x - field.width / 3)) / tileSize
        );
        const row = Math.round(
          (gameObject.y - (field.y - field.height / 3)) / tileSize
        );

        if (
          Math.abs(gameObject.x - dragableOrigin.x) < 5 &&
          Math.abs(gameObject.y - dragableOrigin.y) < 5 &&
          gameObject.name !== "tile8" &&
          gameObject.name !== "tile9"
        ) {
          gameObject.setAngle(gameObject.angle + 90);
          if (isInsideBoard(gameObject)) {
            currentPosition[row][column] = {
              type: gameObject.type,
              angle: gameObject.angle,
            };
          }
        } else if (isInsideBoard(gameObject) && !board[row][column]) {
          if (isInsideBoard(dragableOrigin)) {
            //remove tile from original place
            let startColumn = Math.round(
              (dragableOrigin.x - (field.x - field.width / 3)) / tileSize
            );
            let startRow = Math.round(
              (dragableOrigin.y - (field.y - field.width / 3)) / tileSize
            );
            board[startRow][startColumn] = 0;
          }

          //stick
          gameObject.x = field.x - field.width / 3 + column * tileSize;
          gameObject.y = field.y - field.width / 3 + row * tileSize;
          board[row][column] = gameObject.name;
          currentPosition[row][column] = {
            type: gameObject.type,
            angle: gameObject.angle,
          };
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
            let startColumn = Math.round(
              (dragableOrigin.x - (field.x - field.width / 3)) / tileSize
            );
            let startRow = Math.round(
              (dragableOrigin.y - (field.x - field.width / 3)) / tileSize
            );
            board[startRow][startColumn] = 0;
          }

          gameObject.x;
          gameObject.y;
        }

        //check if winning condition

        if (
          checkIfWinningPosition(
            currentPosition,
            winningConditions[this.levelNumber - 1]
          )
        ) {
          tile1.disableInteractive();
          tile2.disableInteractive();
          tile3.disableInteractive();
          tile4.disableInteractive();
          tile5.disableInteractive();
          tile6.disableInteractive();
          tile7.disableInteractive();
          tile8.disableInteractive();
          tile9.disableInteractive();
          this.add.text(60, 200, "Challenege solved!", {
            fontSize: "80px",
            backgroundColor: "#f00",
          });
        }
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.add
      .rectangle(850, 750, 200, 70, 0xfff)
      .setInteractive()
      .on(
        "pointerdown",
        function () {
          this.scene.restart({ levelNumber: this.levelNumber + 1 });
        },
        this
      );
    this.add.text(780, 730, "Next Level", {
      fill: "#4ccd43",
      fontFamily: "Playball",
      fontSize: "30px",
    });
  }
}
