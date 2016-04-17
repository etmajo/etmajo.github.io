//State dodge.play

'use strict'

var dodge = {};

dodge.Play = function () {};

dodge.Play.prototype = {

  inti: function () {
    console.log("%c~~~ Booting Dodge ~~~/n Compliments of SkilStak", " color:#fdfe3; background:#073642");

  },

  preload: function () {
    this.load.image('background','assets/space.png');
    this.load.spritesheet('dodger','assets/ship.png',46,64,2);
    this.load.spritesheet('dodging','assets/',46,64,2)
  },

  create: function () {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.background = this.add.tileSprite(0,0,320,568,"space.png");
    this.background.autoScroll(0,700);
    this.background.scale.set(1);

    this.dodger = this.add.sprite(160,518, 'dodger');
    this.dodger.anchor.set(0.5,0.5);

    this.dodging = this.add.sprite(160,518, 'dodging')
    this.dodging.anchor.set(0.5,0.5);

    this.cursors = game.input.keyboard.createCursorKeys();
  }

  update: function () {
    if (this.cursor.left.isDown) {
      this.dodger.body.velocity.x = -800;
    }
    if (this.cursor.right.isDown) {
      this.dodger.body.velocity.x = 800;
    }
    if (this.dodging.y >= 568) {
      this.dodging.y = -32
      this.dodging.body.velocity.x = 800
      this.dodging.x = game.rnd.integerInRange(0,320);
    }
    
    game.physics.arcade.collide(this.dodger, this.dodging, this.handleCollision);
  },
  
  handleCollision: function() {
    console.log("U lost");
    game.state.start('Play')
  }
  };
};

