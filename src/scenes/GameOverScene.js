/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import fetchData from '../objects/Api';
import UiButton from '../objects/UiButton';
import config from '../Config/config';

let result = 0;

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  getGold(value) {
    result = value;
  }

  create() {
    this.add.text(450, 200, `Total Score: ${result}`, { fontSize: 36 }).setOrigin(0.5);

    const divContent = document.createElement('div');
    divContent.setAttribute('id', 'phaser');
    divContent.setAttribute('class', 'hide-div');

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'user-name');
    inputName.setAttribute('placeholder', 'Enter Your Name');
    inputName.type = 'text';
    divContent.appendChild(inputName);

    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'Submit';
    submitBtn.setAttribute('class', 'btn btn-secondary btn-submit');
    divContent.appendChild(submitBtn);

    document.getElementById('phaser-game').appendChild(divContent);

    submitBtn.addEventListener('click', () => {
      const name = document.getElementById('user-name').value;
      document.getElementById('user-name').remove();
      document.querySelector('.btn-submit').remove();
      fetchData.saveScore(name, result);
    });

    const leaderBtn = document.createElement('button');
    leaderBtn.innerHTML = 'View Scores';
    leaderBtn.setAttribute('class', 'btn btn-warning scores');
    document.getElementById('phaser-game').appendChild(leaderBtn);

    leaderBtn.addEventListener('click', () => {
      document.querySelector('.scores').remove();
      this.scene.switch('Leader');
      this.scene.stop('GameOver');
    });
  }
}
