// import Phaser from 'phaser';
// import config from './Config/config';
// import GameScene from './scenes/GameScene';
// import BootScene from './scenes/BootScene';
// import TitleScene from './scenes/TitleScene';
// import UiScene from './scenes/UiScene';
//
//
// class Game extends Phaser.Game {
//   constructor() {
//     super(config);
//     this.scene.add('Boot', BootScene);
//     this.scene.add('Title', TitleScene);
//     this.scene.add('Game', GameScene);
//     this.scene.add('Ui', UiScene);
//     this.scene.start('Boot');
//   }
// }
//
// window.game = new Game();

import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import UiScene from './scenes/UiScene';

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
};

var game = new Phaser.Game(config);
