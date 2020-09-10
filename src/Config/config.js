/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import GameScene from '../scenes/GameScene';
import BootScene from '../scenes/BootScene';
import Preloader from '../scenes/PreloaderScene';
import TitleScene from '../scenes/TitleScene';
import GameOverScene from '../scenes/GameOverScene';
import LeaderboardScene from '../scenes/LeaderboardScene';
import UiScene from '../scenes/UiScene';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 900,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 0,
      },
    },
  },
  pixelArt: true,
  roundPixels: true,
  dom: {
    createContainer: true,
  },
};
