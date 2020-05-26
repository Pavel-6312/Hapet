var game;
var pet;
var petHp =10;

//CONFIG
window.onload=function(){
    var config = {
            type: Phaser.AUTO,
            width: 1200,
            height: 300,
            parent: 'phaser',
            backgroundColor: 0xFFE6A6,
            pixelArt: true, //fix blurred pixels
            zoom: 1,
            physics: {
                default: "arcade",
                arcade: {
                    gravity: {y: 1200},
                    // debug: true
                }
            },
            scene: [firstScene, SceneTitle,]
            // scene: [SceneTitle, firstScene, ]
        };
    game = new Phaser.Game(config);
}

// game.scene.start('SceneTitle');

