var textgame = '';
var textgamest;
var map;
var layer;
var continuar;
var exit;
var click;
var theme;
var voice;
var jacket;

var gameover = 
{

	preload:function (){

	game.load.tilemap('map', 'assets/games/map/Map/menu.csv');
	game.load.image('ground', 'assets/games/map/tiled map.png');
	game.load.spritesheet('continue', 'assets/games/menu/button7.png', 126,64);
	game.load.spritesheet('exit', 'assets/games/menu/button8.png', 126,64);
	game.load.audio('click', ['assets/games/Audio/ButtonPress.wav']);
	game.load.audio('theme', ['assets/games/Audio/Game Over.mp3']);
	game.load.audio('voice', ['assets/games/Audio/GameOverVoice.mp3']);
	game.load.spritesheet('jacket', 'assets/games/Varios/jacket.png');

	},

	create:function (){

		map = game.add.tilemap('map', 1,1);
		map.addTilesetImage('ground');
		layer = map.createLayer(0);
		layer.resizeWorld();

		textgame = 'GAMEOVER';
		textgamest = game.add.text(game.world.centerX-148, game.world.centerY-250, textgame, { font: '34px Chiller' , fill: '#03FFD3' });
		textgamest.fontSize = 80;

		continuar = game.add.button(game.world.centerX -180, 450, 'continue', this.actionOnClick, this, 2,0,1);
		exit = game.add.button(game.world.centerX + 50, 450, 'exit', this.actionOnClick2, this, 2,0,1);

		jacket = game.add.physicsGroup();
   		jacket = game.add.sprite(game.world.centerX -80 ,300,'jacket');
   		jacket.scale.x = 1.5;
   		jacket.scale.y = 1.5;

		theme = game.add.audio('theme');
    	theme.volume = 0.1;
    	theme.play();

    	voice = game.add.audio('voice');
    	voice.volume = 0.2;
    	voice.play();
	},

	update:function (){

	},

	actionOnClick:function (){

		theme.stop();
		game.state.start("n1", n1);
		click = game.add.audio('click');
   		click.volume = 0.1;
    	click.play();
	},

	actionOnClick2:function (){

		theme.stop();
		game.state.start("menu", menu);
		click = game.add.audio('click');
    	click.volume = 0.1;
    	click.play();
	},

}