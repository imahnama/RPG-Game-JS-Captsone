/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import UiButton from '../objects/UiButton';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.text = this.add.text(250, 40, 'How to play😎', { fontSize: 40 });


    this.leftText = this.add.text(250, 100, 'Move the player to the left ⬅️', { fontSize: 24 });


    this.rightText = this.add.text(250, 160, 'Move the player to the right ➡️', { fontSize: 24 });


    this.upText = this.add.text(250, 220, 'Move the player up ⬆️', { fontSize: 24 });

    this.downText = this.add.text(250, 280, 'Move the player down ⬇️', { fontSize: 24 });

    this.menuButton = new UiButton(this, 400, 400, 'button1', 'button2', 'Play', this.startScene.bind(this, 'Game'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}
