import Phaser from 'phaser'
import fetchData from '../objects/Api.js'
import UiButton from '../objects/UiButton';

let result = 0;

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver')

  }

  getGold(value) {
    result = value;
 }

  create() {

    this.add.text(450, 200, `Total Score: ${result}`, { fontSize: 36 }).setOrigin(0.5);

    const divContent = document.createElement('div');
    divContent.setAttribute('id', 'phaser');

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'user-name');
    inputName.setAttribute('placeholder', 'Enter Your Name');
    inputName.type = 'text';
    divContent.appendChild(inputName);

    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'Submit'
    submitBtn.setAttribute('class', 'btn btn-secondary');
    divContent.appendChild(submitBtn);

    document.getElementById('phaser-game').appendChild(divContent);

    submitBtn.addEventListener('click', () => {
      const name = document.getElementById('user-name').value
      fetchData.saveScore(name, result)
    })

    const leaderBtn = document.createElement('button');
    leaderBtn.innerHTML = 'View Scores'
    leaderBtn.setAttribute('class', 'btn btn-secondary');
    divContent.appendChild(leaderBtn);

    leaderBtn.addEventListener('click', () => {
      this.scene.start('Leader')
    })



    // submitBtn.on('pointerup', () => {
    //   console.log(result)
    // });
}

// async getName(value) {
//  this.name = document.getElementById('user-name').value;
//  if (this.name.length < 13 && this.name.length > 1) {
//    await fetchData.saveScore(this.name, window.score);
//    this.callLeaderBoard();
//  }
// }
//
// callLeaderBoard() {
//  document.getElementById('user-name').remove();
//  this.scene.start('Leader');
// }

}
