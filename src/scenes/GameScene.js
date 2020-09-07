import Phaser from 'phaser';
import PlayerContainer from '../classes/player/PlayerContainer';
import Chest from '../classes/Chest';
import Monster from '../classes/Monster';
import MonsterModel from '../gameManager/MonsterModel';
import Map from '../classes/Map';
import GameManager from '../gameManager/GameManager';
import goldSound from '../../assets/audio/Pickup.wav';
import monsters from '../../assets/images/monsters.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Ui');
    this.score = 0;
  }

  create() {
    this.createAudio();
    this.createMap();
    this.createGroups();
    this.createInput();
    this.createGameManager();
}

update() {
  this.player.update(this.cursors);
}

createAudio() {
 this.goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.2});
}

createPlayer(location) {
  this.player = new PlayerContainer(this, location[0] * 2, location[1] * 2, 'characters', 19);
}

createGroups() {
  this.chests = this.physics.add.group();
  this.monsters = this.physics.add.group();
}

spawnChest(chestObject) {

  let chest = this.chests.getFirstDead();
  if (!chest) {
   chest = new Chest(
     this,
     chestObject.x * 2,
      chestObject.y * 2,
      'items',   0,
      chestObject.gold,
      chestObject.id,
    );
    this.chests.add(chest);
  } else {
    chest.coins = chestObject.gold;
    chest.id = chestObject.id;
    chest.setPosition( chestObject.x * 2, chestObject.y * 2);
    chest.makeActive();
  }

}

spawnMonster(monsterObject) {
  let monster = this.monsters.getFirstDead();
  if (!monster) {
     monster = new Monster(
       this,
      monsterObject.x * 2,
      monsterObject.y * 2,
      'monsters',
      monsterObject.frame,
      monsterObject.id,
      monsterObject.health,
      monsterObject.maxHealth,
    );

    this.monsters.add(monster);
    monster.setCollideWorldBounds(true);
  } else {
    monster.id = monsterObject.id;
    monster.health = monsterObject.health;
    monster.maxhealth = monsterObject.maxhealth;
    monster.setTexture('monsters', monsterObject.frame);
    monster.setPosition( monsterObject.x * 2, monsterObject.y * 2);
    monster.makeActive();
  }
}

createInput() {
  this.cursors = this.input.keyboard.createCursorKeys();
}

addCollisions() {
  this.physics.add.collider(this.player, this.map.blockedLayer);
  this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);
  this.physics.add.collider(this.monsters, this.map.blockedLayer);
  this.physics.add.overlap(this.player.weapon, this.monsters, this.enemyOverlap, null, this);
}

enemyOverlap(player, enemy) {
   enemy.makeInactive();
   this.events.emit('destroyEnemy', enemy.id);
}

collectChest(player, chest) {

  this.goldPickupAudio.play();

  this.score += chest.coins;

  this.events.emit('updateScore', this.score);

  chest.makeInactive();

  this.events.emit('pickUpChest', chest.id);
 }

 createMap() {
   this.map = new Map(this, 'map', 'background', 'background', 'blocked');
 }

 createGameManager() {
   this.events.on('spawnPlayer', (location) => {
   this.createPlayer(location);
   this.addCollisions();
 });

 this.events.on('chestSpawned', (chest) => {
 this.spawnChest(chest);
});

this.events.on('monsterSpawned', (monster) => {
this.spawnMonster(monster);
});

 this.gameManager = new GameManager(this, this.map.map.objects);
 this.gameManager.setup();
 }

}
