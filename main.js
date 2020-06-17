var game;
var pet;
var petHp =10;
var pointer;

//CONFIG
window.onload=function(){
    var config = {
            type: Phaser.AUTO,
            width: 2400,
            height: 600,
            parent: 'phaser',
            backgroundColor: 0xFFE6A6,
            // pixelArt: true, //fix blurred pixels
            zoom: 0.5,
            physics: {
                default: "arcade",
                arcade: {
                    gravity: {y: 1200},
                    debug: true
                }
            },
            scene: [firstScene, SceneTitle,]
            // scene: [SceneTitle, firstScene, ]
        };
    game = new Phaser.Game(config);
}

// game.scene.start('SceneTitle');

