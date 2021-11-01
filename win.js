var textwin;
var textwinst;
var exit;
var map;
var layer;
var theme;

var win = {

	preload:function(){

		game.load.tilemap('map', 'assets/games/map/Map/menu.csv');
		game.load.image('ground', 'assets/games/map/tiled map.png');
		game.load.spritesheet('exit', 'assets/games/menu/button8.png', 126,64);
		game.load.audio('theme', ['assets/games/Audio/win.mp3']);
	},

	create:function (){
		
		map = game.add.tilemap('map', 1,1);
		map.addTilesetImage('ground');
		layer = map.createLayer(0);
		layer.resizeWorld();

		textwin = 'THANK U FOR PLAYING! \nComing Soon Level 2!';
		textwinst = game.add.text(game.world.centerX-230, game.world.centerY-250, textwin, { font: '34px Courier New' , fill: '#03FFD3' });
		textwinst.fontSize = 40;

		exit = game.add.button(game.world.centerX -65, 450, 'exit', this.actionOnClick, this, 2,0,1);

		theme = game.add.audio('theme');
    	theme.volume = 0.1;
    	theme.play()
	},

	update:function (){

	},

	actionOnClick:function (){

		theme.stop();
		game.state.start("menu", menu);
		click = game.add.audio('click');
    	click.volume = 0.1;
    	click.play();
	},

}	