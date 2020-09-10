# RPG-Game-JS-Captsone
This project consist on building a video game using JavaScript and the game engine [Phaser](https://phaser.io/).

# MOnster Attack
> This is an rpg game where the warrior is randomly place at different level of the tilesmap at the start of each game. The warrior must kill the monsters, get the treasure box to get more gold.

![rpg](1.png)

## Game Design and Development
- Day1: RPG Game Tutorial on Zenva Academy(Inspiration of the game was gotten from there)
- Day2: Game background design using tilesmap editor. Blocked layers(areas in the background we don't want the players to collide with) and game objects such as the players, treasure box and monsters was added while designing on the map editor and the background image was exported in a json file.
- Day3: Game initial template setup was gotten Zenva Academy. it was modify to add extra features to enhance the game.
- Day4: The game logic is made up of the following:
- The warrior who is the player of the game spawn at different locations of the gamescene at the start of a new game.
- There are blocked layers more like obstacles so the player does not move freely in the tilemap or background just to increase the complexity.
- The monsters and the treasure box spawn at different location of the game.
- The warrior must collect the treasure box to get more gold.
- The warrior get more health bar and gold by fighting the monsters with his sword. The sword can be gotten by pressing the spacebar of your keyboard.
- The warrior must be quick to fight the monsters so that he doesn't lose his healthbar.
- The game is over if the warrior healthbar is empty.

- Day5: Implement LeaderBoard API and fix bugs/linter errors.

## Instructions
- After the loading scene, a scene appears with the buttons. You can click on options to disable sound and music. To get started click on play.
- When you click on play button you will be taken to a screen with instructions on how to play and make sure you enter your name and click on play button to get started.
- How to play:
- use the left arrow key on the keyboard to move the player movement to the left of the game scene.
- use the right arrow key on the keyboard to move the player movement to the right of the game scene.
- use the up arrow key on the keyboard to move the player movement to up of the game scene.
- use the down arrow key on the keyboard to move the player movement to down of the game scene.
- use the spacebar key on the keyboard to fight the monsters with your weapon which is a sword.
- The warrior must collect the treasure box to get more gold.
- The warrior get more health bar and gold by fighting the monsters with his sword. The sword can be gotten by pressing the spacebar key on your keyboard.
- The warrior must be quick to fight the monsters so that he doesn't lose his healthbar.
- The game is over if the warrior healthbar is empty.
- If the game over it takes you to screen where you can add your scores to the leaderboard click on the button submit to add your name to the leaderboard.
- [Play online here](https://practical-heyrovsky-f62678.netlify.app/)

## Future Features
- Add mobile friendliness.
- Increase the complexity of the game.
- Make it an MMORPG(an online role-playing video game in which multiple people participate simultaneously.) Game


## Built with
- JavaScript
- Phaser3
- Webpack
- Tiled Map Editor
- Babel
- Es6
- Netlify
- Jest

## How to Install

> Follow the commands below
- git clone
- cd RPG-Game-Js-Capstone
- npm install
- npm start

 - run npm start

## Author

👤 **Rahma Halane**

- [Portfolio](https://raw.githack.com/imahnama/my-portfolio/develop/index.html)
- [Twitter](https://twitter.com/halane_rahma)
- [Linkedin](https://www.linkedin.com/in/rahmahalane/)
- [Email](mailto:Halane.rahma@gmail.com )

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/imahnama/RPG-Game-JS-Captsone/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Phaser ]( https://phaser.io/)
- [ Openweathermap ]( https://adventurerr.netlify.app) image assets
- [Zenva Academy]( https://academy.zenva.com/?zva_src=https://gamedevacademy.org) rpg game tutorial



## 📝 License

This project is [MIT]licensed.
