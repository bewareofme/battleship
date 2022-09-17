/* eslint-disable import/prefer-default-export */

const game = (player1,player2) => {
  let gameover = 0;
  let turn = 1;
  while (!gameover) {
    if (turn === 2) {
      player2.computerattack(player1);
      if (player1.playergameboard.lost()) gameover=1;
      turn = player1.turn;
    }
  }
  gameover = 1;
  return {turn,gameover}
};
export default game ;