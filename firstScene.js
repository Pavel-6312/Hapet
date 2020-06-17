class firstScene extends Phaser.Scene {
    constructor() 
    {
        super('firstScene');
    }

    preload() { 
        this.load.image('bg', 'assets/bg.png');

        this.load.image('cat', 'assets/cat.svg');
        
        this.load.spritesheet('pet-walk', 'assets/cat-walk.svg',{frameWidth: 360, frameHeight: 360,});
        this.load.spritesheet('pet-sit', 'assets/cat-sit.svg',{frameWidth: 360, frameHeight: 360,});
    }

    create() {   
        //walk
        this.anims.create({
            key: 'pet-walk',
            frames: this.anims.generateFrameNumbers('pet-walk', { start: 0, end: 4 }),
            frameRate: 6,
            repeat: -1 // -1 run forever / 1 -> run once
        });

        // idle
        this.anims.create({
            key: 'pet-idle',
            frames: this.anims.generateFrameNumbers('pet-sit', { start: 0, end: 0 }),
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

        var bg = this.add.image(0, 0, 'bg')
        bg.setOrigin(0,0);

        var base = this.add.graphics()
        this.physics.add.existing(base)

        base.body.setAllowGravity(false)
        base.body.immovable = true
        base.body.width = 99000
        base.body.height = 40
        base.x = -1500
        base.y = 560

        pointer = this.input.activePointer; 

        //create pet
        // pet.anims.play('pet-idle', false);

        pet = this.physics.add.sprite(1500, 0, 'cat');
        // pet.body.collideWorldBounds=true;
        this.physics.add.collider(pet, base);
 
        //camera
        // this.cameras.main.startFollow(pet);
        // this.cameras.main.followOffset.set(0, 150);
    }

    update() {
        
        // pet.x += 20;
        // console.log(1);
        
        //death
        // if (petHp <= 0){
        //     pet.anims.play('pet-death', true);
        // }
   
        //move left
        if (pointer.x > pet.x +200){
            pet.anims.play('pet-walk', true).setFlipX(false); 
            // this.tweens.add({
            //     targets: pet,
            //     x: pet.x + 10,
            //     ease: 'Power1',
            //     duration: 1000,
            // });
            pet.x +=5
        }

        //move right
        else if (pointer.x < pet.x -200){
            pet.anims.play('pet-walk', true).setFlipX(true);  
            pet.x -=5  
        }

        else {
            pet.anims.play('pet-idle', false);
        }

        
        
        //text 
        document.querySelector('.debug').innerHTML = 
            // 'turnAction: ' + turnAction +'<br>'+ 
            'pointer x' + pointer.x +'<br>'+

            'pet x' + pet.x;
    }
}





