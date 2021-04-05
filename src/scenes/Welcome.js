
const WelcomeScene = {

    key: "WelcomeScene",

    preload: function preload() {
        this.load.image("overview", "assets/overview.jpg");
    },

    create: function create() {

        this.cameras.main.setBackgroundColor('#fff')
           
        this.add.text(80, 50, `Welcome to online version of the GoGetter's ‍Cat ‍& Mouse game!`, {fill: "#3a55b4", fontFamily: 'Roboto', fontSize: '32px'})
        
        this.add.sprite(500, 230, 'overview')

        this.add.text(0, 380,    
        `
        How to play:

        Challenge on the right of the board shows which connections you need to make to complete level.
        Arrange nine tiles on the game board to connect the icons pictured on the challenge.
        - Arrow means you must create a pathway between the icons.
        - Crossed arrow means you must NOT create a pathway between the icons.

        Good luck!
        `, {fill: "#3a55b4", fontFamily: 'Roboto', fontSize: '24px'})
        
        this.add.rectangle(500, 730, 300, 100, 0x81de76)
            .setInteractive()
            .on("pointerdown", function(pointer, gameObject) {
            this.scene.launch('LevelScene', {levelNumber: 1})
        }, this)

        this.add.text(440, 700, "PLAY", {fill: "#3a55b4", fontFamily: 'Playball', fontSize: '50px'})


        }
      
}

