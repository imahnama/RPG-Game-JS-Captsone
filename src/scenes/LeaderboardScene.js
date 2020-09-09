import Phaser from 'phaser'
import fetchData from '../objects/Api.js'

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {

    super('Leader')

  }

  create() {
   this.add.text(300, 100, 'Leader Board').setScale(2)

   this.retrieveScore();
  }

  async retrieveScore() {
   const response = await fetchData.getScores();
   const scores = response.sort((x, y) => y.score - x.score);
   if (scores.empty) {
     // this.loading.text = 'Scores are not available';
   } else {
     this.displayScores(scores);
   }
 }

 displayScores(info) {
   console.log(info)
   let spaceY = 0;
   // this.loading.text = '';
   for (let i = 0; i <= info.length - 1; i += 1) {
     this.add.text(340, 240 + spaceY, `${i + 1}.`, { fontSize: 20 });
     this.add.text(375, 240 + spaceY, `${info[i].user}`, { fontSize: 20 });
     this.add.text(510, 240 + spaceY, `${info[i].score}`, { fontSize: 20 });
     spaceY += 25;
   }
 }
}
