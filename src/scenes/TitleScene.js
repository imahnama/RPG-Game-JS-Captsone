import Phaser from 'phaser';
import UiButton from '../objects/UiButton';
import config from '../Config/config'

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {

    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Monster Attack', { fontSize: '64px', fill: '#fff'});
    this.titleText.setOrigin(0.5);

    this.startGameButton = new UiButton(this, this.scale.width /2, this.scale.height * 0.65, 'button1', 'button2', 'Start', this.startScene.bind(this, 'Game'));
    // this.creditButton = new UiButton(this, this.scale.width /2, this.scale.height * 0.65, 'button1', 'button2', 'Credits', this.startScene.bind(this, 'Credits'));
    // this.LeaderButton = new UiButton(this, this.scale.width /2, this.scale.height * 0.65, 'button1', 'button2', 'Score', this.startScene.bind(this, 'Leader'));
  }

  startScene(targetScene) {
   this.scene.start(targetScene);
 }
}
