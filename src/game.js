/* eslint-disable import/prefer-default-export */
import { player } from "./player";

const game = () => {
  const player1 = player(1);
  const player2 = player(2);
  let gameover = 0;
  let turn = 1;
  player1.playergameboard.placeShip(player1.playergameboard.ship1,53)
  player1.playergameboard.placeShip(player1.playergameboard.ship2,42)
  player2.playergameboard.placeShip(player2.playergameboard.ship1,53)
  player2.playergameboard.placeShip(player2.playergameboard.ship2,42)
  while (!gameover) {
    if (turn === 1) {
      // eslint-disable-next-line no-alert
      const playermove = prompt("what position to attack");
      player1.attack(player2, Number(playermove));
      turn = player2.turn;
      if (player2.playergameboard.lost()) break;
    }
    if (turn === 2) {
      player2.computerattack(player1);
      if (player1.playergameboard.lost()) break;
      turn = player1.turn;
    }
  }
  gameover = 1;
};
game();
export { game };
