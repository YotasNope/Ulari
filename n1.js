var map;
var map2;
var map3;
var map4;
var layer;
var layer2;
var layer3;
var layer4;
var player;
var facing = 'right';
var lava;
var lava2;
var audlava;
var platforms;
var cursors;
var jumpTimer = 0;
var jumpButton;
var wumpa;
var scoreCoin;
var lives;
var up;
var uplife;
var music;
var musicshot;
var score = 0;
var scoreString = '';
var scoreText;
var life = 5;
var lifestring = '';
var lifetext;
var bulletTime = 0;
var bullet;
var bullets;
var bulletTime2 = 0;
var bullet2;
var bullets2;
var rex;
var rex2;
var rex3;
var rex4;
var ost;
var t=0;
var pausa;
var reanudar;
var exit;
var click;
var scream;
var bat;
var bat2;
var bat3;
var shooter;
var shooter2;
var shooter3;
var shooter4;
var shooter5;
var shooter6;
var fireball;
var spider;
var spiderweb;
var spider2;
var spiderweb2;
var spider3;
var spiderweb3;
var spider4;
var spiderweb4;
var spider5;
var spiderweb5;
var spider6;
var spiderweb6;
var cuadro;
var head;
var out;
var n1 =
{

preload:function() 
{
    game.load.tilemap('map', 'assets/games/map/Map/m1_Capa de patrones 2.csv');
    game.load.tilemap('background', 'assets/games/map/Map/m1_fondo.csv');
    game.load.tilemap('background2', 'assets/games/map/Map/m1_fondo2.csv');
    game.load.tilemap('backlava', 'assets/games/map/Map/m1_Lava.csv');
    game.load.image('ground', 'assets/games/map/tiled map.png');
    game.load.image('ground2', 'assets/games/map/tiled map2.png');
    game.load.audio('incinerat', ['assets/games/Audio/lava.mp3']);
    game.load.spritesheet('Elena', 'assets/games/starstruck/elenasprite.png', 100, 122);
    game.load.spritesheet('wumpa','assets/games/Varios/Coins.png', 18,18);
    game.load.spritesheet('scoreCoin','assets/games/Varios/Coins.png', 18,18);
    game.load.audio('boden', ['assets/games/Audio/Bonus.wav']);
    game.load.audio('shot', ['assets/games/Audio/Shot.wav']);
    game.load.audio('1up', ['assets/games/Audio/Spawn.wav']);
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    game.load.spritesheet('Rex', 'assets/games/starstruck/Rex.png', 61, 34);
    game.load.audio('ost', ['assets/games/Audio/stage.mp3']);
    game.load.spritesheet('live', 'assets/games/Varios/lifespritesheet.png', 40, 40);
    game.load.spritesheet('lava', 'assets/games/map/lava.png', 66,64);
    game.load.spritesheet('pausa', 'assets/games/menu/button4.png', 64,64);
    game.load.spritesheet('resume', 'assets/games/menu/button5.png', 64,64);
    game.load.spritesheet('exit', 'assets/games/menu/button6.png', 64,64);
    game.load.spritesheet('cuadro', 'assets/games/Varios/Cuadro.png');
    game.load.spritesheet('head', 'assets/games/Varios/headspritesheet.png', 35,30);
    game.load.audio('click', ['assets/games/Audio/ButtonPress.wav']);
    game.load.spritesheet('bat', 'assets/games/Enemies/batspritesheet.png', 63,29);
    game.load.spritesheet('shooter', 'assets/games/Enemies/shooterspritesheet.png', 32,17);
    game.load.spritesheet('fire', 'assets/games/Enemies/fire.png');
    game.load.spritesheet('fire2', 'assets/games/Enemies/fire2.png');
    game.load.audio('fireball', ['assets/games/Audio/fireball.mp3']);
    game.load.spritesheet('spider', 'assets/games/Enemies/spiderspritesheet.png', 131,139);
    game.load.spritesheet('spiderweb', 'assets/games/Enemies/spideweb.png');
    game.load.spritesheet('spiderweb2', 'assets/games/Enemies/spideweb2.png');
    game.load.audio('scream', ['assets/games/Audio/elenascream.mp3']);
    game.load.spritesheet('out', 'assets/games/map/out.png');
},

create:function() 
{
    //Map
    map2 = game.add.tilemap('background', 64,64);
    map3 = game.add.tilemap('background2', 64,64);
    map4 = game.add.tilemap('backlava', 64,64);
    map = game.add.tilemap('map', 64,64);
    
    map2.addTilesetImage('ground');
    map3.addTilesetImage('ground2');
    map4.addTilesetImage('ground');
    map.addTilesetImage('ground');
    
    map.setCollisionBetween(0, 28);
    map.setCollisionBetween(32, 34);
    map.setCollisionBetween(40, 42);

    layer2 = map2.createLayer(0);
    layer3 = map3.createLayer(0);
    layer4 = map4.createLayer(0);

    //Lava
    lava = game.add.physicsGroup();
    lava.enableBody = true;
    map4.createFromTiles(21, -1, 'lava', layer4, lava);
    lava.callAll('animations.add', 'animations', 'move', [0,1], 5, true);
    lava.callAll('animations.play', 'animations', 'move');
    lava2 = game.add.physicsGroup();
    lava2.enableBody = true;
    map4.createFromTiles(22, -1, 'lava', layer4, lava2);
    lava2.callAll('animations.add', 'animations', 'move', [1,0], 5, true);
    lava2.callAll('animations.play', 'animations', 'move');


    //Spiderweb 5 y 6
    spiderweb5 = game.add.physicsGroup();
    spiderweb5 = game.add.sprite(13062,-220, 'spiderweb');
    game.physics.enable(spiderweb5);

    spiderweb6 = game.add.physicsGroup();
    spiderweb6 = game.add.sprite(12446,900, 'spiderweb2');
    game.physics.enable(spiderweb6);


    layer = map.createLayer(0);
    layer2.resizeWorld();
    layer3.resizeWorld();
    layer4.resizeWorld();
    layer.resizeWorld();
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    //Exit
    out = game.add.physicsGroup();
    out = game.add.sprite(13530,2325, 'out');
    game.physics.enable(out);
    out.scale.x = 1.2;
    out.scale.y = 1.2;

    //Jugador
    player = game.add.sprite(450,880,'Elena');
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
    player.animations.add('downr', [4,21,20,21], 10, true);

    //Monedas
    wumpa = game.add.physicsGroup();
    wumpa.enableBody = true;
    map.createFromTiles(35, -1, 'wumpa', layer, wumpa);
    wumpa.callAll('animations.add', 'animations', 'spin', [0,1], 10, true);
    wumpa.callAll('animations.play', 'animations', 'spin');
    wumpa.scale.x = 1.002;
    wumpa.scale.y = 1.03;
    game.physics.enable(wumpa);

    //Enemigos
    //Rex
    rex = game.add.physicsGroup();
    rex = game.add.sprite(6450,1160, 'Rex');
    game.physics.enable(rex);
    rex.body.collideWorldBounds = true;
    rex.body.gravity.y = 500;
    rex.animations.add('rightrex', [0,1,2,3,4,5,6,7], 10, true);
    rex.animations.add('leftrex', [15,14,13,12,11,10,9,8], 10, true);
    rex.scale.x = 1.5;
    rex.scale.y = 1.5;

    rex2 = game.add.physicsGroup();
    rex2 = game.add.sprite(6550,1160, 'Rex');
    game.physics.enable(rex2);
    rex2.body.collideWorldBounds = true;
    rex2.body.gravity.y = 500;
    rex2.animations.add('rightrex2', [0,1,2,3,4,5,6,7], 10, true);
    rex2.animations.add('leftrex2', [15,14,13,12,11,10,9,8], 10, true);
    rex2.scale.x = 1.5;
    rex2.scale.y = 1.5;

    rex3 = game.add.physicsGroup();
    rex3 = game.add.sprite(8124,1160, 'Rex');
    game.physics.enable(rex3);
    rex3.body.collideWorldBounds = true;
    rex3.body.gravity.y = 500;
    rex3.animations.add('rightrex3', [0,1,2,3,4,5,6,7], 10, true);
    rex3.animations.add('leftrex3', [15,14,13,12,11,10,9,8], 10, true);
    rex3.scale.x = 1.5;
    rex3.scale.y = 1.5;

    rex4 = game.add.physicsGroup();
    rex4 = game.add.sprite(8472,555, 'Rex');
    game.physics.enable(rex4);
    rex4.body.collideWorldBounds = true;
    rex4.body.gravity.y = 500;
    rex4.animations.add('rightrex4', [0,1,2,3,4,5,6,7], 10, true);
    rex4.animations.add('leftrex4', [15,14,13,12,11,10,9,8], 10, true);
    rex4.scale.x = 1.5;
    rex4.scale.y = 1.5;

    //bat
    bat = game.add.physicsGroup();
    bat = game.add.sprite(2312,443, 'bat');
    game.physics.enable(bat);
    bat.body.collideWorldBounds = true;
    bat.animations.add('flyleft', [0,4,2], 10, true);
    bat.animations.add('flyright', [1,5,3], 10, true);
    bat.body.velocity.x = -100;

    bat2 = game.add.physicsGroup();
    bat2 = game.add.sprite(10986,600, 'bat');
    game.physics.enable(bat2);
    bat2.body.collideWorldBounds = true;
    bat2.animations.add('flyleft2', [0,4,2], 10, true);
    bat2.animations.add('flyright2', [1,5,3], 10, true);
    bat2.body.velocity.x = -100;

    bat3 = game.add.physicsGroup();
    bat3 = game.add.sprite(12527,1950, 'bat');
    game.physics.enable(bat3);
    bat3.body.collideWorldBounds = true;
    bat3.animations.add('flyleft3', [0,4,2], 10, true);
    bat3.animations.add('flyright3', [1,5,3], 10, true);
    bat3.body.velocity.x = -100;

    //shooter
    shooter = game.add.physicsGroup();
    shooter = game.add.sprite(1432, 730, 'shooter');
    game.physics.enable(shooter);
    shooter.scale.x = 2.5;
    shooter.scale.y = 2.5;
    shooter.body.collideWorldBounds = true;
    shooter.body.gravity.y = 500;
    shooter.animations.add('reposingleft', [5], 10, true);
    shooter.animations.add('reposingright', [11], 10, true);
    shooter.animations.add('shootleft', [3,4,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,1,2,1,13], 8, true);
    shooter.animations.add('shootright', [9,10,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,7,6], 8, true);

    shooter2 = game.add.physicsGroup();
    shooter2 = game.add.sprite(1934, 730, 'shooter');
    game.physics.enable(shooter2);
    shooter2.scale.x = 2.5;
    shooter2.scale.y = 2.5;
    shooter2.body.collideWorldBounds = true;
    shooter2.body.gravity.y = 500;
    shooter2.animations.add('reposingleft2', [5], 10, true);
    shooter2.animations.add('reposingright2', [11], 10, true);
    shooter2.animations.add('shootleft2', [3,4,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,1,2,1,13], 8, true);
    shooter2.animations.add('shootright2', [9,10,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,7,6], 8, true);

    shooter3 = game.add.physicsGroup();
    shooter3 = game.add.sprite(2554,680, 'shooter');
    game.physics.enable(shooter3);
    shooter3.scale.x = 2.5;
    shooter3.scale.y = 2.5;
    shooter3.body.collideWorldBounds = true;
    shooter3.body.gravity.y = 500;
    shooter3.animations.add('reposingleft3', [5], 10, true);
    shooter3.animations.add('reposingright3', [11], 10, true);
    shooter3.animations.add('shootleft3', [3,4,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,1,2,1,13], 8, true);
    shooter3.animations.add('shootright3', [9,10,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,7,6], 8, true);

    shooter4 = game.add.physicsGroup();
    shooter4 = game.add.sprite(3000,680, 'shooter');
    game.physics.enable(shooter4);
    shooter4.scale.x = 2.5;
    shooter4.scale.y = 2.5;
    shooter4.body.collideWorldBounds = true;
    shooter4.body.gravity.y = 500;
    shooter4.animations.add('reposingleft4', [5], 10, true);
    shooter4.animations.add('reposingright4', [11], 10, true);
    shooter4.animations.add('shootleft4', [3,4,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,1,2,1,13], 8, true);
    shooter4.animations.add('shootright4', [9,10,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,7,6], 8, true);

    shooter5 = game.add.physicsGroup();
    shooter5 = game.add.sprite(4289,660, 'shooter');
    game.physics.enable(shooter5);
    shooter5.scale.x = 2.5;
    shooter5.scale.y = 2.5;
    shooter5.body.collideWorldBounds = true;
    shooter5.body.gravity.y = 500;
    shooter5.animations.add('reposingleft5', [5], 10, true);
    shooter5.animations.add('reposingright5', [11], 10, true);
    shooter5.animations.add('shootleft5', [3,4,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,1,2,1,13], 8, true);
    shooter5.animations.add('shootright5', [9,10,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,7,6], 8, true);

    shooter6 = game.add.physicsGroup();
    shooter6 = game.add.sprite(4961,660, 'shooter');
    game.physics.enable(shooter6);
    shooter6.scale.x = 2.5;
    shooter6.scale.y = 2.5;
    shooter6.body.collideWorldBounds = true;
    shooter6.body.gravity.y = 500;
    shooter6.animations.add('reposingleft6', [5], 10, true);
    shooter6.animations.add('reposingright6', [11], 10, true);
    shooter6.animations.add('shootleft6', [3,4,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,1,2,1,13], 8, true);
    shooter6.animations.add('shootright6', [9,10,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,7,6], 8, true);

    //spiderweb
    spiderweb = game.add.physicsGroup();
    spiderweb = game.add.sprite(10367,-660, 'spiderweb');
    game.physics.enable(spiderweb);

    spiderweb2 = game.add.physicsGroup();
    spiderweb2 = game.add.sprite(10944,-160, 'spiderweb');
    game.physics.enable(spiderweb2);

    spiderweb3 = game.add.physicsGroup();
    spiderweb3 = game.add.sprite(11586,-680, 'spiderweb');
    game.physics.enable(spiderweb3);

    spiderweb4 = game.add.physicsGroup();
    spiderweb4 = game.add.sprite(11772,-680, 'spiderweb');
    game.physics.enable(spiderweb4);

    //spider
    spider = game.add.physicsGroup();
    spider = game.add.sprite(10306,300, 'spider');
    game.physics.enable(spider);
    spider.animations.add('spiderdown', [0,2,1,3], 10, true);
    spider.animations.add('spiderup', [3,1,2,0], 10, true);

    spider2 = game.add.physicsGroup();
    spider2 = game.add.sprite(10882,800, 'spider');
    game.physics.enable(spider2);
    spider2.animations.add('spiderdown2', [0,2,1,3], 10, true);
    spider2.animations.add('spiderup2', [3,1,2,0], 10, true);

    spider3 = game.add.physicsGroup();
    spider3 = game.add.sprite(11525,300, 'spider');
    game.physics.enable(spider3);
    spider3.animations.add('spiderdown3', [0,2,1,3], 10, true);
    spider3.animations.add('spiderup3', [3,1,2,0], 10, true);
    
    spider4 = game.add.physicsGroup();
    spider4 = game.add.sprite(11710,300, 'spider');
    game.physics.enable(spider4);
    spider4.animations.add('spiderdown4', [0,2,1,3], 10, true);
    spider4.animations.add('spiderup4', [3,1,2,0], 10, true);

    spider5 = game.add.physicsGroup();
    spider5 = game.add.sprite(13000,700, 'spider');
    game.physics.enable(spider5);
    spider5.animations.add('spiderdown5', [0,2,1,3], 10, true);
    spider5.animations.add('spiderup5', [3,1,2,0], 10, true);

    spider6 = game.add.physicsGroup();
    spider6 = game.add.sprite(12385,1450, 'spider');
    game.physics.enable(spider6);
    spider6.animations.add('spiderdown6', [0,2,1,3], 10, true);
    spider6.animations.add('spiderup6', [3,1,2,0], 10, true);

    //Bullets
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    for (var i = 0; i < 10000; i++)
    {
        var b = bullets.create(5, 10, 'fire2');
        b.name = 'fire2' + i;
        b.exists = false;
        b.visible = false;
        b.checkWorldBounds = true;
    }

    bullets2 = game.add.group();
    bullets2.enableBody = true;
    bullets2.physicsBodyType = Phaser.Physics.ARCADE;
    for (var i2 = 0; i2 < 100; i2++)
    {
        var b2 = bullets2.create(5, 10, 'fire');
        b2.name = 'fire' + i2;
        b2.exists = false;
        b2.visible = false;
        b2.checkWorldBounds = true;
    }

    
    
    //buttons
    pausa = game.add.button(1120, 20, 'pausa', this.actionOnClick, this, 0,1,2);
    pausa.scale.x =0.7;
    pausa.scale.y =0.7;
    pausa.fixedToCamera = true;
    pausa.visible = true;

    reanudar = game.add.button(1120, 20, 'resume', this.actionOnClick2, this, 0,1,2);
    reanudar.scale.x =0.7;
    reanudar.scale.y =0.7;
    reanudar.fixedToCamera = true;
    reanudar.visible = false;

    exit = game.add.button(1120, 84, 'exit', this.actionOnClick3, this, 0,1,2);
    exit.scale.x =0.7;
    exit.scale.y =0.7;
    exit.fixedToCamera = true;
    exit.visible = false;

    //Controles
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.X);

    //Musica Fondo
    ost = game.add.audio('ost');
    ost.volume = 0.03;
    ost.loop = true;
    ost.detune = 100;
    ost.play();

    //Cuadro
    cuadro = game.add.physicsGroup();
    cuadro = game.add.sprite(15,21,'cuadro');
    cuadro.fixedToCamera = true;
    cuadro.scale.x = 1.8;
    cuadro.scale.y = 1.8;

    //head
    head = game.add.physicsGroup();
    head = game.add.sprite(37,25,'head');
    head.animations.add('closeeye' ,[0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0], 10, true);
    head.scale.x = 1.5;
    head.scale.y = 1.5;
    head.fixedToCamera = true;

    //score
    scoreCoin = game.add.physicsGroup();
    scoreCoin = game.add.sprite(105,67,'scoreCoin');
    scoreCoin.animations.add('rotation',[0,1], 10, true);
    scoreCoin.scale.x = 2;
    scoreCoin.scale.y = 2;
    scoreCoin.fixedToCamera = true;

    scoreString = 'x ';
    scoreText = game.add.text(140, 70, score, { font: '30px Impact' , fill: '#E9AF00' });
    scoreText.fontSize = 27;
    scoreText.fixedToCamera = true;

    //Vidas
    lives = game.add.physicsGroup();
    lives = game.add.sprite(30,64,'live');
    lives.animations.add('palpita' ,[0,1], 7, true);
    lives.fixedToCamera = true;

    lifestring = ' x ';
    lifetext = game.add.text(68, 70, life, { font: '30px Impact' , fill: '#FF0000' });
    lifetext.fontSize = 27;
    lifetext.fixedToCamera = true;
},
update:function() 
{
    t++
    //rex.forEach(IA,this);
    
    game.physics.arcade.collide(player, layer);
    game.physics.arcade.collide(rex, layer);
    game.physics.arcade.collide(rex2, layer);
    game.physics.arcade.collide(rex3, layer);
    game.physics.arcade.collide(rex4, layer);
    game.physics.arcade.collide(rex, rex2);
    game.physics.arcade.collide(shooter, layer);
    game.physics.arcade.collide(shooter2, layer);
    game.physics.arcade.collide(shooter3, layer);
    game.physics.arcade.collide(shooter4, layer);
    game.physics.arcade.collide(shooter5, layer);
    game.physics.arcade.collide(shooter6, layer);
    game.physics.arcade.overlap(player, wumpa, this.collisionHandler, null, this);
    game.physics.arcade.overlap(player, rex, this.collisionDead, null, this);
    game.physics.arcade.overlap(player, rex2, this.collisionDead2, null, this);
    game.physics.arcade.overlap(player, rex3, this.collisionDead3, null, this);
    game.physics.arcade.overlap(player, rex4, this.collisionDead4, null, this);
    game.physics.arcade.overlap(player, lava, this.incinerate, null, this);
    game.physics.arcade.overlap(player, lava2, this.incinera, null, this);
    game.physics.arcade.overlap(player, bat, this.collisionbat, null, this);
    game.physics.arcade.overlap(player, bat2, this.collisionbat2, null, this);
    game.physics.arcade.overlap(player, bat3, this.collisionbat3, null, this);
    game.physics.arcade.overlap(player, shooter, this.collisionshooter, null, this);
    game.physics.arcade.overlap(player, shooter2, this.collisionshooter2, null, this);
    game.physics.arcade.overlap(player, shooter3, this.collisionshooter3, null, this);
    game.physics.arcade.overlap(player, shooter4, this.collisionshooter4, null, this);
    game.physics.arcade.overlap(player, shooter5, this.collisionshooter5, null, this);
    game.physics.arcade.overlap(player, shooter6, this.collisionshooter6, null, this);
    game.physics.arcade.overlap(player, bullets, this.collisionbullet, null, this);
    game.physics.arcade.overlap(player, bullets2, this.collisionbullet2, null, this);
    game.physics.arcade.overlap(player, spider, this.collisionspider, null, this);
    game.physics.arcade.overlap(player, spider2, this.collisionspider2, null, this);
    game.physics.arcade.overlap(player, spider3, this.collisionspider3, null, this);
    game.physics.arcade.overlap(player, spider4, this.collisionspider4, null, this);
    game.physics.arcade.overlap(player, spider5, this.collisionspider5, null, this);
    game.physics.arcade.overlap(player, spider6, this.collisionspider6, null, this);

    scoreCoin.animations.play('rotation');
    lives.animations.play('palpita');
    head.animations.play('closeeye');

    //Player Move
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
            //Bat Move
            if (bat.body.position.x <=2080) 
            {
                bat.body.velocity.x =100;
                if (bat.body.velocity.x = 100) 
                {
                    bat.animations.play('flyright');
                }
            }

            if (bat.body.position.x >=3275) 
            {
                bat.body.velocity.x = -100;
                if (bat.body.velocity.x = -100) 
                {
                    bat.animations.play('flyleft');
                }
            }

            if (bat2.body.position.x <=10986) 
            {
                bat2.body.velocity.x =100;
                if (bat2.body.velocity.x = 100) 
                {
                    bat2.animations.play('flyright2');
                }
            }

            if (bat2.body.position.x >=11464) 
            {
                bat2.body.velocity.x = -100;
                if (bat2.body.velocity.x = -100) 
                {
                    bat2.animations.play('flyleft2');
                }
            }

            if (bat3.body.position.x <=12527) 
            {
                bat3.body.velocity.x =100;
                if (bat3.body.velocity.x = 100) 
                {
                    bat3.animations.play('flyright3');
                }
            }

            if (bat3.body.position.x >=12939) 
            {
                bat3.body.velocity.x = -100;
                if (bat3.body.velocity.x = -100) 
                {
                    bat3.animations.play('flyleft3');
                }
            }

            

            //Shooter
            if (player.body.position.x <= 1900 && player.body.position.x >= 1433)
            {
                shooter.animations.stop('reposingleft');
                shooter.animations.stop('shootleft');
                shooter.animations.play('shootright');
                shooter.animations.stop('reposingright');
                this.fireBullet2();

            }
            if (player.body.position.x >= 1000 && player.body.position.x <= 1432)
            {
                shooter.animations.stop('reposingleft');
                shooter.animations.play('shootleft');
                shooter.animations.stop('shootright');
                shooter.animations.stop('reposingright');
                this.fireBullet();

            }      
            if (player.body.position.x >= 1901)
            {
                shooter.animations.stop('reposingleft');
                shooter.animations.stop('shootleft');
                shooter.animations.stop('shootright');
                shooter.animations.play('reposingright');
            }
            if (player.body.position.x <= 999)
            {
                shooter.animations.play('reposingleft');
                shooter.animations.stop('shootleft');
                shooter.animations.stop('shootright');
                shooter.animations.stop('reposingright');
            }

            if (player.body.position.x <= 1948 && player.body.position.x >= 1687)
            {
                shooter2.animations.stop('reposingleft2');
                shooter2.animations.play('shootleft2');
                shooter2.animations.stop('shootright2');
                shooter2.animations.stop('reposingright2');
                this.fireBullet3();
            }
            if (player.body.position.x >= 1949 && player.body.position.x <= 2095)
            {
                shooter2.animations.stop('reposingleft2');
                shooter2.animations.stop('shootleft2');
                shooter2.animations.play('shootright2');
                shooter2.animations.stop('reposingright2');
                this.fireBullet4();
            }
            if (player.body.position.x >= 2096)
            {
                shooter2.animations.stop('reposingleft2');
                shooter2.animations.stop('shootleft2');
                shooter2.animations.stop('shootright2');
                shooter2.animations.play('reposingright2');
            }
            if (player.body.position.x <= 1686)
            {
                shooter2.animations.play('reposingleft2');
                shooter2.animations.stop('shootleft2');
                shooter2.animations.stop('shootright2');
                shooter2.animations.stop('reposingright2');
            }

            if (player.body.position.x <= 2532 && player.body.position.x >= 2339)
            {
                shooter3.animations.stop('reposingleft3');
                shooter3.animations.play('shootleft3');
                shooter3.animations.stop('shootright3');
                shooter3.animations.stop('reposingright3');
                this.fireBullet5();
            }
            if (player.body.position.x <= 2826 && player.body.position.x >= 2533)
            {
                shooter3.animations.stop('reposingleft3');
                shooter3.animations.stop('shootleft3');
                shooter3.animations.play('shootright3');
                shooter3.animations.stop('reposingright3');
                this.fireBullet6();
            }
            if (player.body.position.x <= 2338)
            {
                shooter3.animations.play('reposingleft3');
                shooter3.animations.stop('shootleft3');
                shooter3.animations.stop('shootright3');
                shooter3.animations.stop('reposingright3');
            }
            if (player.body.position.x >= 2827)
            {
                shooter3.animations.stop('reposingleft3');
                shooter3.animations.stop('shootleft3');
                shooter3.animations.stop('shootright3');
                shooter3.animations.play('reposingright3');
            }

            if (player.body.position.x <= 3000 && player.body.position.x >= 2686)
            {
                shooter4.animations.stop('reposingleft4');
                shooter4.animations.play('shootleft4');
                shooter4.animations.stop('shootright4');
                shooter4.animations.stop('reposingright4');
                this.fireBullet7();
            }
            if (player.body.position.x <= 3300 && player.body.position.x >= 3001)
            {
                shooter4.animations.stop('reposingleft4');
                shooter4.animations.stop('shootleft4');
                shooter4.animations.play('shootright4');
                shooter4.animations.stop('reposingright4');
                this.fireBullet8();
            }
            if (player.body.position.x <= 2685)
            {
                shooter4.animations.play('reposingleft4');
                shooter4.animations.stop('shootleft4');
                shooter4.animations.stop('shootright4');
                shooter4.animations.stop('reposingright4');
            }
            if (player.body.position.x >= 3301)
            {
                shooter4.animations.stop('reposingleft4');
                shooter4.animations.stop('shootleft4');
                shooter4.animations.stop('shootright4');
                shooter4.animations.play('reposingright4'); 
            }

            if (player.body.position.x <= 4288 && player.body.position.x >= 3875)
            {
                shooter5.animations.stop('reposingleft5');
                shooter5.animations.play('shootleft5');
                shooter5.animations.stop('shootright5');
                shooter5.animations.stop('reposingright5');
                this.fireBullet9(); 
            }
            if (player.body.position.x <= 4550 && player.body.position.x >= 4289)
            {
                shooter5.animations.stop('reposingleft5');
                shooter5.animations.stop('shootleft5');
                shooter5.animations.play('shootright5');
                shooter5.animations.stop('reposingright5');
                this.fireBullet10(); 
            }
            if (player.body.position.x <= 3876)
            {
                shooter5.animations.play('reposingleft5');
                shooter5.animations.stop('shootleft5');
                shooter5.animations.stop('shootright5');
                shooter5.animations.stop('reposingright5'); 
            }
            if (player.body.position.x >= 4551)
            {
                shooter5.animations.stop('reposingleft5');
                shooter5.animations.stop('shootleft5');
                shooter5.animations.stop('shootright5');
                shooter5.animations.play('reposingright5'); 
            }

            if (player.body.position.x <= 4960 && player.body.position.x >= 4601)
            {
                shooter6.animations.stop('reposingleft6');
                shooter6.animations.play('shootleft6');
                shooter6.animations.stop('shootright6');
                shooter6.animations.stop('reposingright6');
                this.fireBullet11(); 
            }
            if (player.body.position.x <= 5446 && player.body.position.x >= 4961)
            {
                shooter6.animations.stop('reposingleft6');
                shooter6.animations.stop('shootleft6');
                shooter6.animations.play('shootright6');
                shooter6.animations.stop('reposingright6');
                this.fireBullet12(); 
            }
            if (player.body.position.x <= 4600)
            {
                shooter6.animations.play('reposingleft6');
                shooter6.animations.stop('shootleft6');
                shooter6.animations.stop('shootright6');
                shooter6.animations.stop('reposingright6');
            }
            if (player.body.position.x >= 5447)
            {
                shooter6.animations.stop('reposingleft6');
                shooter6.animations.stop('shootleft6');
                shooter6.animations.stop('shootright6');
                shooter6.animations.play('reposingright6');
            }

            //spider move
            if (spider.body.position.y <= 300)
            {
                spider.body.velocity.y = 200;
                spiderweb.body.velocity.y = 200;
                if (spider.body.velocity.y == 200)
                {
                spider.animations.play('spiderdown');
                }

            }   
            if (spider.body.position.y >= 812)
            {
                spider.body.velocity.y = -150;
                spiderweb.body.velocity.y = -150;
                 if (spider.body.velocity.y == -150)
                {
                spider.animations.play('spiderup');
                }
            }

            if (spider2.body.position.y <= 290)
            {
                spider2.body.velocity.y = 250;
                spiderweb2.body.velocity.y = 250;
                if (spider2.body.velocity.y == 250)
                {
                spider2.animations.play('spiderdown2');
                }

            }   
            if (spider2.body.position.y >= 800)
            {
                spider2.body.velocity.y = -200;
                spiderweb2.body.velocity.y = -200;
                 if (spider2.body.velocity.y == -200)
                {
                spider2.animations.play('spiderup2');
                }
            }

            if (spider3.body.position.y <= 300)
            {
                spider3.body.velocity.y = 150;
                spiderweb3.body.velocity.y = 150;
                if (spider3.body.velocity.y == 150)
                {
                spider3.animations.play('spiderdown3');
                }

            }   
            if (spider3.body.position.y >= 700)
            {
                spider3.body.velocity.y = -100;
                spiderweb3.body.velocity.y = -100;
                 if (spider3.body.velocity.y == -100)
                {
                spider3.animations.play('spiderup3');
                }
            }

            if (spider4.body.position.y <= 300)
            {
                spider4.body.velocity.y = 150;
                spiderweb4.body.velocity.y = 150;
                if (spider4.body.velocity.y == 150)
                {
                spider4.animations.play('spiderdown4');
                }

            }   
            if (spider4.body.position.y >= 700)
            {
                spider4.body.velocity.y = -100;
                spiderweb4.body.velocity.y = -100;
                 if (spider4.body.velocity.y == -100)
                {
                spider4.animations.play('spiderup4');
                }
            }

            if (spider5.body.position.y <= 700)
            {
                spider5.body.velocity.y = 280;
                spiderweb5.body.velocity.y = 280;
                if (spider5.body.velocity.y == 280)
                {
                spider5.animations.play('spiderdown5');
                }

            }   
            if (spider5.body.position.y >= 1400)
            {
                spider5.body.velocity.y = -230;
                spiderweb5.body.velocity.y = -230;
                 if (spider5.body.velocity.y == -230)
                {
                spider5.animations.play('spiderup5');
                }
            }

            if (spider6.body.position.y <= 1450)
            {
                spider6.body.velocity.y = 200;
                spiderweb6.body.velocity.y = 200;
                if (spider6.body.velocity.y == 200)
                {
                spider6.animations.play('spiderdown6');
                }

            }   
            if (spider6.body.position.y >= 1900)
            {
                spider6.body.velocity.y = -150;
                spiderweb6.body.velocity.y = -150;
                 if (spider6.body.velocity.y == -150)
                {
                spider6.animations.play('spiderup6');
                }
            }

            //Rex
            if (player.body.position.x <= 5460)
            {
                rex.body.velocity.x = 0;
            }else if (player.body.position.x <= rex.body.position.x)
            {
                rex.body.velocity.x = -90;
                rex.animations.play('leftrex');
                rex.animations.stop('rightrex');
            }

            if (player.body.position.x >= rex.body.position.x)
             {
                rex.body.velocity.x = 90;
                rex.animations.stop('leftrex');
                rex.animations.play('rightrex');
            }

            if (player.body.position.x <= 5460)
            {
                rex2.body.velocity.x = 0;
            }else if (player.body.position.x <= rex2.body.position.x)
            {
                rex2.body.velocity.x = -90;
                rex2.animations.play('leftrex2');
                rex2.animations.stop('rightrex2');
            }

            if (player.body.position.x >= rex2.body.position.x)
             {
                rex2.body.velocity.x = 90;
                rex2.animations.stop('leftrex2');
                rex2.animations.play('rightrex2');
            }

            if (player.body.position.x <= 7300)
            {
                rex3.body.velocity.x = 0;
            }else if (player.body.position.x <= rex3.body.position.x)
            {
                rex3.body.velocity.x = -90;
                rex3.animations.play('leftrex3');
                rex3.animations.stop('rightrex3');
            }

            if (player.body.position.x >= rex3.body.position.x)
             {
                rex3.body.velocity.x = 90;
                rex3.animations.stop('leftrex3');
                rex3.animations.play('rightrex3');
            }

            if (rex4.body.position.x <= 8472)
            {
               rex4.body.velocity.x = 90;
               if (rex4.body.velocity.x == 90)
               {
                rex4.animations.stop('leftrex4');
                rex4.animations.play('rightrex4');
               }
            }

            if (rex4.body.position.x >= 8720)
            {
               rex4.body.velocity.x = -90;
               if (rex4.body.velocity.x == -90)
               {
                rex4.animations.play('leftrex4');
                rex4.animations.stop('rightrex4');
               }
            }

            //Vidas
            if (life == 0)
            {
                this.gameover();
            }

            //Exit
            if (player.body.position.x >= 13573 && player.body.position.y >= 2347)
            {
                ost.stop();
                game.state.start("win", win);
                score = 0;
                life = 5
            }

},

exitmenu:function()
{
    ost.stop();
    game.state.start("menu", menu);
    score = 0;
    life = 5;
},
    
lifedead:function()
{
    life -= 1;
    lifetext.text = life;
    wumpa.callAll('revive');
},

lifeup:function()
{
    life +=1
    lifetext.text = life;
},

collisionHandler:function (player, wumpa) {
    wumpa.kill();
    music = game.add.audio('boden');
    music.volume = 0.2;
    music.detune = 100;
    music.play();
    score += 1;
    scoreText.text = score;
    if (score == 100){
        score = 0;
        this.lifeup();
        uplife = game.add.audio('1up');
        uplife.volume = 0.5;
        uplife.detune = 100;
        uplife.play();
    }
},

incinerate:function(player, lava)
{
    player.reset(7303,1131);
    audlava = game.add.audio('incinerat');
    audlava.volume = 0.5;
    audlava.detune = 100;
    audlava.play();
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

incinera:function(player, lava2)
{
    player.reset(7303,1131);
    audlava = game.add.audio('incinerat');
    audlava.volume = 0.5;
    audlava.detune = 100;
    audlava.play();
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
  },

actionOnClick:function()
{   
    reanudar.visible = true;
    pausa.visible= false;
    exit.visible = true;
    click = game.add.audio('click');
    click.volume = 0.1;
    click.play();
    game.paused = true;
},


actionOnClick2:function()
{
    reanudar.visible = false;
    pausa.visible= true;
    exit.visible = false;
    click = game.add.audio('click');
    click.volume = 0.1;
    click.play();
    game.paused = false;
},

actionOnClick3:function()
{
    click = game.add.audio('click');
    click.volume = 0.1;
    click.play();
    ost.stop();
    game.paused = false;
    this.exitmenu();
},

collisionDead:function (player, rex)
{
    rex.reset(6450,1160);
    rex2.reset(6550,1160);
    player.reset(450,880);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
  },

collisionDead2:function (player, rex2)
{
    rex.reset(6450,1160);
    rex2.reset(6550,1160);
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
  },

collisionDead3:function (player, rex3)
{
    player.reset(7303,1131);
    rex3.reset(8124,1160);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
  },

collisionDead4:function (player, rex4)
{
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
  },

collisionbat:function (bat)
{
    player.reset(450,880);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

collisionbat2:function (bat2)
{
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

collisionbat3:function (bat3)
{
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

collisionshooter:function(shooter)
{
    player.reset(450,880);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

collisionshooter2:function(shooter2)
{
    player.reset(450,880);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

collisionshooter3:function(shooter3)
{
    player.reset(450,880);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

collisionshooter4:function(shooter4)
{
    player.reset(450,880);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

collisionshooter5:function(shooter5)
{
    player.reset(450,880);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

collisionshooter6:function(shooter6)
{
    player.reset(450,880);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
},

fireBullet:function () 
    {
    if (game.time.now > bulletTime)
        {
            bullet = bullets.getFirstExists(false);
            if (bullet)
                {
                    bullet.reset(shooter.x, shooter.y + 10);
                    bullet.body.velocity.x = -450;
                    bulletTime = game.time.now + 3000;
                    fireball = game.add.audio('fireball');
                    fireball.volume = 0.5;
                    fireball.detune = 100;
                    fireball.play();
                }
        }
    },

fireBullet2:function () 
    {
        if (game.time.now > bulletTime2)
            {
                bullet2 = bullets2.getFirstExists(false);
                if (bullet2)
                    {
                        bullet2.reset(shooter.x + 2, shooter.y + 10);
                        bullet2.body.velocity.x = 450;
                        bulletTime2 = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

fireBullet3:function () 
    {
        if (game.time.now > bulletTime)
            {
                bullet = bullets.getFirstExists(false);
                if (bullet)
                    {
                        bullet.reset(shooter2.x, shooter2.y + 10);
                        bullet.body.velocity.x = -450;
                        bulletTime = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

fireBullet4:function () 
    {
        if (game.time.now > bulletTime2)
            {
                bullet2 = bullets2.getFirstExists(false);
                if (bullet2)
                    {
                        bullet2.reset(shooter2.x + 2, shooter2.y + 10);
                        bullet2.body.velocity.x = 450;
                        bulletTime2 = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

fireBullet5:function () 
    {

       if (game.time.now > bulletTime)
            {
                bullet = bullets.getFirstExists(false);
                if (bullet)
                    {
                        bullet.reset(shooter3.x, shooter3.y + 10);
                        bullet.body.velocity.x = -450;
                        bulletTime = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }

    },

fireBullet6:function () 
    {
        if (game.time.now > bulletTime2)
            {
                bullet2 = bullets2.getFirstExists(false);
                if (bullet2)
                    {
                        bullet2.reset(shooter3.x + 2, shooter3.y + 10);
                        bullet2.body.velocity.x = 450;
                        bulletTime2 = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

fireBullet7:function () 
    {

       if (game.time.now > bulletTime)
            {
                bullet = bullets.getFirstExists(false);
                if (bullet)
                    {
                        bullet.reset(shooter4.x, shooter4.y + 10);
                        bullet.body.velocity.x = -450;
                        bulletTime = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

fireBullet8:function () 
    {
        if (game.time.now > bulletTime2)
            {
                bullet2 = bullets2.getFirstExists(false);
                if (bullet2)
                    {
                        bullet2.reset(shooter4.x + 2, shooter4.y + 10);
                        bullet2.body.velocity.x = 450;
                        bulletTime2 = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

fireBullet9:function () 
    {

       if (game.time.now > bulletTime)
            {
                bullet = bullets.getFirstExists(false);
                if (bullet)
                    {
                        bullet.reset(shooter5.x, shooter5.y + 10);
                        bullet.body.velocity.x = -450;
                        bulletTime = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

fireBullet10:function () 
    {
        if (game.time.now > bulletTime2)
            {
                bullet2 = bullets2.getFirstExists(false);
                if (bullet2)
                    {
                        bullet2.reset(shooter5.x + 2, shooter5.y + 10);
                        bullet2.body.velocity.x = 450;
                        bulletTime2 = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

fireBullet11:function () 
    {

       if (game.time.now > bulletTime)
            {
                bullet = bullets.getFirstExists(false);
                if (bullet)
                    {
                        bullet.reset(shooter6.x, shooter6.y + 10);
                        bullet.body.velocity.x = -450;
                        bulletTime = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

fireBullet12:function () 
    {
        if (game.time.now > bulletTime2)
            {
                bullet2 = bullets2.getFirstExists(false);
                if (bullet2)
                    {
                        bullet2.reset(shooter6.x + 2, shooter6.y + 10);
                        bullet2.body.velocity.x = 450;
                        bulletTime2 = game.time.now + 3000;
                        fireball = game.add.audio('fireball');
                        fireball.volume = 0.5;
                        fireball.detune = 100;
                        fireball.play();
                    }
            }
    },

collisionspider:function(spider)
{
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    this.lifedead();
},

collisionspider2:function(spider2)
{
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    this.lifedead();
},

collisionspider3:function(spider3)
{
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    this.lifedead();
},

collisionspider4:function(spider4)
{
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    this.lifedead();
},

collisionspider5:function(spider5)
{
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    this.lifedead();
},

collisionspider6:function(spider)
{
    player.reset(7303,1131);
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    this.lifedead();
},

collisionbullet:function(player, bullet)
    {
    player.reset(450,880);
    bullet.kill()
    fireball = game.add.audio('fireball');
    fireball.volume = 1;
    fireball.detune = 100;
    fireball.play();
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
    },

collisionbullet2:function(player, bullet2)
    {
    player.reset(450,880);
    bullet2.kill()
    fireball = game.add.audio('fireball');
    fireball.volume = 1;
    fireball.detune = 100;
    fireball.play();
    scream = game.add.audio('scream');
    scream.volume = 0.2;
    scream.detune = 100;
    scream.play();
    this.lifedead();
    },

gameover:function ()
{
    ost.stop();
    score = 0;
    game.state.start("gameover", gameover);
    life = 5;
},
}