import Phaser from 'phaser';
import Player from '../classes/Player';
import Chest from '../classes/Chest';
import Map from '../classes/Map';
import GameManager from '../gameManager/GameManager';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Ui');
    this.score = 0;
  }

  create() {
    // this.createAudio();
    this.createMap();
    this.createGroups();
    this.createInput();
    this.createGameManager();
}

update() {
  this.player.update(this.cursors);
}

// createAudio() {
//   this.goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.2});
// }

createPlayer(location) {
  this.player = new Player(this, location[0] * 2, location[1] * 2, 'characters', 19);
}

createGroups() {
  //create a chest group
  this.chests = this.physics.add.group();


}

spawnChest(chestObject) {

  let chest = this.chests.getFirstDead();
  if (!chest) {
    const chest = new Chest(this, chestObject.x * 2, chestObject.y * 2, 'items', 0, chestObject.gold, chestObject.id);
    // add chests to group
    this.chests.add(chest);
  } else {
    chest.coins = chestObject.id;
    chest.id = chestObject.id;
    chest.setPosition( chestObject.x * 2, chestObject.y * 2);
    chest.makeActive();
  }

}

createInput() {
  this.cursors = this.input.keyboard.createCursorKeys();
}

addCollisions() {
  this.physics.add.collider(this.player, this.map.blockedLayer);
  this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);

}

collectChest(player, chest) {
  // play gold souns
  // this.goldPickupAudio.play();
  //update our score
  this.score += chest.coins;
  // update score in the ui
  this.events.emit('updateScore', this.score);
  // make chest game object interactive
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

 this.gameManager = new GameManager(this, this.map.map.objects);
 this.gameManager.setup();
 }

}
