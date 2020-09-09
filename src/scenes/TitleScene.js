/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import UiButton from '../objects/UiButton';
import config from '../Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.titleText = this.add.text(200, 100, 'Monster Attack', { fontSize: '54px', fill: '#fff' });

    this.gameButton = new UiButton(this, config.width / 2, config.height / 2 - 100, 'button1', 'button2', 'Play', this.startScene.bind(this, 'Game'));

    this.creditsButton = new UiButton(this, config.width / 2, config.height / 2, 'button1', 'button2', 'Credits', this.startScene.bind(this, 'Credits'));

    this.LeaderButton = new UiButton(this, config.width / 2, config.height / 2 + 100, 'button1', 'button2', 'Scores', this.startScene.bind(this, 'Leader'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}
