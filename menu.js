var start;
var controls;
var title;
var maintheme;
var click;
var autor = '';
var textautor;
var map;
var layer;

var menu= {


preload:function(){

	game.load.tilemap('map', 'assets/games/map/Map/menu.csv');
	game.load.image('ground', 'assets/games/map/tiled map.png');
	game.load.spritesheet('play', 'assets/games/menu/button.png', 126,64);
	game.load.spritesheet('controls', 'assets/games/menu/button2.png', 126,64);
	game.load.image('title', 'assets/games/menu/title.png');
	game.load.audio('maintheme', ['assets/games/Audio/mainmenu.mp3']);
	game.load.audio('click', ['assets/games/Audio/ButtonPress.wav']);

},

create:function(){

	map = game.add.tilemap('map', 1,1);
	map.addTilesetImage('ground');
	layer = map.createLayer(0);
	layer.resizeWorld();

	maintheme = game.add.audio('maintheme');
    maintheme.volume = 0.08;
    maintheme.loop = true;
    maintheme.play();

	title = game.add.group();
	title.create(game.world.centerX, 30, 'title');
	title.scale.x = 0.5;
	title.scale.y = 0.5;
	title.fixedToCamera = true;

	start = game.add.button(game.world.centerX -65, 400, 'play', this.actionOnClick, this, 2,0,1);
	controls = game.add.button(game.world.centerX -65, 500, 'controls', this.controlOnClick, this, 2,0,1);

	autor = 'DANIEL ALDANA 2021 ALL RIGHTS RESERVERD.'
	textautor = game.add.text(380, 800, autor, { font: '34px Gill Sans MT' , fill: '#03FFD3' });
    textautor.fontSize = 20;
},

update:function(){

},

actionOnClick:function(){
	maintheme.stop();
	click = game.add.audio('click');
    click.volume = 0.1;
    click.play();
    game.state.start("n1", n1);

},

controlOnClick:function(){
	game.state.start("controls", controls);
	click = game.add.audio('click');
    click.volume = 0.1;
    click.play();

}
}