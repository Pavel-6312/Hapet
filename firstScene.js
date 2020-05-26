class firstScene extends Phaser.Scene {
    constructor() 
    {
        super('firstScene');
    }

    preload() { 
        // this.load.image('bg', 'assets/bg.png');
        this.load.spritesheet('pet-idle', 'assets/desert-enemy/2 Hyena/Hyena_idle.png',{frameWidth: 48, frameHeight: 48,});
        this.load.spritesheet('pet-walk', 'assets/desert-enemy/2 Hyena/Hyena_walk.png',{frameWidth: 48, frameHeight: 48,});
        this.load.spritesheet('pet-attack', 'assets/desert-enemy/2 Hyena/Hyena_attack.png',{frameWidth: 48, frameHeight: 48,});
        this.load.spritesheet('pet-death', 'assets/desert-enemy/2 Hyena/Hyena_death.png',{frameWidth: 48, frameHeight: 48,});
    }

    create() {   
        //walk
        this.anims.create({
            key: 'pet-walk',
            frames: this.anims.generateFrameNumbers('pet-walk', { start: 0, end: 6 }),
            frameRate: 6,
            repeat: -1 // -1 run forever / 1 -> run once
        });

        //idle
        this.anims.create({
            key: 'pet-idle',
            frames: this.anims.generateFrameNumbers('pet-idle', { start: 0, end: 4 }),
            frameRate: 6,
            repeat: -1 // -1 run forever / 1 -> run once
        });  

        //death
        this.anims.create({
            key: 'pet-death',
            frames: this.anims.generateFrameNumbers('pet-death', { start: 0, end: 6 }),
            frameRate: 10,
            repeat:1,
        }); 

        //create environment
        // var bg = this.add.image(0, -56, 'bg')
        // bg.setOrigin(0,0);

        var base = this.add.graphics()
        this.physics.add.existing(base)
        base.body.setAllowGravity(false)
        base.body.immovable = true
        base.body.width = 1000
        base.body.height = 24
        base.x = 0
        base.y = 400   

        //create pet
        var pet = this.physics.add.sprite(0, 0, 'pet-idle');
        pet.anims.play('pet-idle', false);
        this.physics.add.collider(pet, base);
 
        //camera
        this.cameras.main.startFollow(pet);
        this.cameras.main.followOffset.set(0, 0);
    }

    update() {
        
        // //death
        // if (petHp <= 0){
        //     pet.anims.play(animKey + '-death', true);
        // }
   
        // //move left
        // if (distance > 1){
        //     pet.anims.play(animKey + '-walk', true).setFlipX(false); 
        //     scene.tweens.add({
        //         targets: pet,
        //         x: pet.x - cell,
        //         ease: 'Power1',
        //         duration: 500,
        //     });
        // }

        // //move right
        // else if (distance < -1){
        //     pet.anims.play(animKey + '-walk', true).setFlipX(true);
        //     scene.tweens.add({
        //         targets: pet,
        //         x: pet.x + cell,
        //         ease: 'Power1',
        //         duration: 500,
        //     });      
        // }

        // this.pet.anims.play('pet-idle', false);
        
        //text 
        document.querySelector('.debug').innerHTML = 
            // 'turnAction: ' + turnAction +'<br>'+ 
            '';
    }
}





