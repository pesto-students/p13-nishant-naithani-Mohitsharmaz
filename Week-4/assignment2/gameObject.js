const game = {
  lives: 3,
  coins: 1,
  points: function () {
    return this.coins * 10;
  },
  playerDies: function () {
    this.lives -= 1;
  },
  newGame: function () {
    this.lives = 3;
    this.coins = 0;
  },
};
console.log(game.lives)
game.playerDies()
console.log(game.lives)
game.newGame()
console.log(game.lives, game.coins)