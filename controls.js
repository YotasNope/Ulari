var back;
var click;
var player;
var leftcontrol;
var rightcontrol;
var jumpcontrol;
var textjump = '';
var textjumpcontrol;
var textmove = '';
var textmovecontrol;
var textcoin ='';
var textcoininfo;
var wumpa;

var controls= {

preload:function(){

	game.load.image('title', 'assets/games/menu/title.png');
	game.load.spritesheet('return', 'assets/games/menu/button3.png', 64,64);
	game.load.audio('click', ['assets/games/Audio/ButtonPress.wav']);
	game.load.spritesheet('Elena', 'assets/games/starstruck/elenasprite.png', 100, 122);
	game.load.spritesheet('controlleft', 'assets/games/controls/left.png', 64,64);
	game.load.spritesheet('controlright', 'assets/games/controls/right.png', 64,64);
	game.load.spritesheet('controljump', 'assets/games/controls/jump.png', 64,64);
	game.load.spritesheet('wumpa','assets/games/Varios/Coins.png', 18,18);

},

create:function(){

	title = game.add.group();
	title.create(game.world.centerX, 30, 'title');
	title.scale.x = 0.5;
	title.scale.y = 0.5;
	back = game.add.button(50, 20, 'return', this.actionOnClick, this, 0,1,2);
	back.scale.x =0.8;
	back.scale.y =0.8;

	player = game.add.sprite(100,880,'Elena');
    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.gravity.y = 500;
    player.body.collideWorldBounds = true;
    player.body.setSize(28,88,35,25);
    player.scale.x = 0.75;
    player.scale.y = 0.75;
    game.camera.follow(player);
    player.animations.add('right', [8,12,14,16], 10, true);
    player.animations.add('left', [17,18,9,11], 10, true);
    player.animations.add('idle', [0,0,0,0,0,6,7,7,6,0,0,0,0,0], 5, true);
    player.animations.add('idleleft', [15,15,15,15,15,16,17,17,16,15,15,15,15,15], 5, true);
    player.animations.add('jumpr', [1,2,2,2,2,3,3,3,3], 10, false);
    player.animations.add('jumpl', [12,13,13,13,13,3,3,3,3], 10, false);
    player.animations.add('downr', [4,21,20,21], 8, true);

    leftcontrol = game.add.button(860, 500, 'controlleft', this.actionOnClick2, this, 0,1,2);
    rightcontrol = game.add.button(924, 500, 'controlright', this.actionOnClick3, this, 0,1,2);
    jumpcontrol = game.add.button(250, 500, 'controljump', this.actionOnClick4, this, 0,1,2);

    textjump = 'You can jump using the X key'
	textjumpcontrol = game.add.text(140, 464, textjump, { font: '34px DotGothic16' , fill: '#03FFD3' });
    textjumpcontrol.fontSize = 20;

    textmove = 'You can move using the left and right arrows'
	textmovecontrol = game.add.text(695, 464, textmove, { font: '34px DotGothic16' , fill: '#03FFD3' });
    textmovecontrol.fontSize = 20;

    textcoin = 'You can collect 100 coins \nwhich will give you an extra life'
	textcoininfo = game.add.text(700, 720, textcoin, { font: '34px DotGothic16' , fill: '#03FFD3' });
    textcoininfo.fontSize = 20;

    wumpa = game.add.physicsGroup();
    game.physics.enable(wumpa, Phaser.Physics.ARCADE);
    wumpa = game.add.sprite(850,780,'wumpa');
    wumpa.animations.add('rotation',[0,1], 10, true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.X);
},
update:function(){

	wumpa.animations.play('rotation');

	player.body.velocity.x = 0;

    if (cursors.left.isDown )
    {
        player.body.velocity.x = -270;

        if (facing != 'left' && (player.body.onFloor() || player.body.touching.down))
        {
            
            player.animations.play('left');
            facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 270;

        if (facing != 'right' && (player.body.onFloor() || player.body.touching.down))
        {
            
            player.animations.play('right');
            facing = 'right';
        }
    }
    else
    {
        if (facing != 'idle' && (player.body.onFloor() || player.body.touching.down))
        {
           

            if (facing == 'left')
            {
                player.animations.play('idleleft');
                facing ='idlel';
            }
            else if(facing =='right')
            {
                player.animations.play('idle');
                facing ='idler';
            }

            facing = 'idle';
        }

        
            if ( jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
            {
                player.body.velocity.y = -400;

                 
                  
                if (player.body.velocity.y <= -1) 
                {
                    player.animations.play('jumpr');
                } 

            }else if(player.body.velocity.y == 0){

                player.animations.play('idle');

            }

            if(player.body.velocity.y >= 1){

                player.animations.play('downr');

            }
}

},

actionOnClick:function(){
	
	click = game.add.audio('click');
    click.volume = 0.1;
    click.play();
    maintheme.stop();
    game.state.start("menu", menu);
},

actionOnClick2:function(){
	player.body.velocity.x = -270;
        if (facing != 'left' && (player.body.onFloor() || player.body.touching.down))
        { 
            player.animations.play('left');
            facing = 'left';
        }
	click = game.add.audio('click');
    click.volume = 0.1;
    click.play();
},

actionOnClick3:function(){
	player.body.velocity.x = 270;
        if (facing != 'right' && (player.body.onFloor() || player.body.touching.down))
        {
            player.animations.play('right');
            facing = 'right';
        }
	click = game.add.audio('click');
    click.volume = 0.1;
    click.play();
},

actionOnClick4:function(){
    player.body.velocity.y = -400;
    if (player.body.velocity.y <= -1  && (player.body.onFloor() || player.body.touching.down)) 
    {
        player.animations.play('jumpr');
  	} 
	click = game.add.audio('click');
    click.volume = 0.1;
    click.play();
},

}