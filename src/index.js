import Phaser from 'phaser';
import config from './Config/config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import GameOverScene from './scenes/GameOverScene';
import UiScene from './scenes/UiScene';
import PreloaderScene from './scenes/PreloaderScene';
import CreditsScene from './scenes/CreditsScene';
import LeaderboardScene from './scenes/LeaderboardScene';


class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Leader', LeaderboardScene);
    this.scene.add('Ui', UiScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
