import Phaser from 'phaser';

import items from '../../assets/images/items.png';
import characters from '../../assets/images/characters.png';
import monsters from '../../assets/images/monsters.png';
import goldSound from '../../assets/audio/Pickup.wav';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    // load images
   this.loadImages();
    // load spritesheet
    this.loadSpriteSheets();
    //load audio
    this.loadAudio();
    // load Tilemap
    this.loadTileMap()
  }
  loadImages() {
    this.load.image('button1', '../assets/images/ui/blue_button01.png')
    this.load.image('button2', '../assets/images/ui/blue_button02.png')
    this.load.image('background', '../assets/level/background-extruded.png')
  }

  loadSpriteSheets() {
    this.load.spritesheet('items', '../assets/images/items.png', {frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('characters', '../assets/images/characters.png', {frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('monsters', '../assets/images/monsters.png', {frameWidth: 32, frameHeight: 32});
  }

  loadAudio() {
   this.load.audio('goldSound', ['../assets/audio/Pickup.wav']);
   }

  loadTileMap() {
    this.load.tilemapTiledJSON('map', '../assets/level/large_level.json')
  }

  create() {
    this.scene.start('Game')
  }

}
