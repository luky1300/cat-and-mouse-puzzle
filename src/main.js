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

  this.input.setDraggable(tile1);
  this.input.setDraggable(tile2);

  let dragableOrigin = {};

  this.input.on("dragstart", function (pointer, gameObject) {
    dragableOrigin.x = gameObject.x;
    dragableOrigin.y = gameObject.y;
  });

  this.input.on("dragend", function (pointer, gameObject) {
    const column = Math.round((gameObject.x - 100) / 100);
    const row = Math.round((gameObject.y - 100) / 100);

    console.log(gameObject);
    if (
      gameObject.x < 50 ||
      gameObject.x > 350 ||
      gameObject.y < 50 ||
      gameObject.y > 350
    ) {
      gameObject.x = dragableOrigin.x;
      gameObject.y = dragableOrigin.y;
    } else {
      gameObject.x = 100 + column * 100;
      gameObject.y = 100 + row * 100;
    }
  });

  this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
    gameObject.x = dragX;
    gameObject.y = dragY;
  });
}
