import Phaser from 'phaser';
import GameScene from '../scenes/GameScene';
import BootScene from '../scenes/BootScene';
import TitleScene from '../scenes/TitleScene';
import UiScene from '../scenes/UiScene';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [
    BootScene,
    TitleScene,
    GameScene,
    UiScene,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        y: 0,
      },
    },
  },
  pixelArt: true,
  roundPixels: true,
};

var game = new Phaser.Game(config);
