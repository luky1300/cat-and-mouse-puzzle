const config = {
    width: 600,
    height: 600,
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create
    }
}

const game = new Phaser.Game(config);


function preload() {
}

function create(){

    const field = this.add.rectangle(200, 200, 300, 300, 0x6666ff);

    const tile1 = this.add.rectangle(450, 200, 100, 100, 0x00ff00).setInteractive();

    this.input.setDraggable(tile1);

    this.input.on('dragstart', function (pointer, gameObject) {

        this.children.bringToTop(gameObject);

    }, this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });


    }

