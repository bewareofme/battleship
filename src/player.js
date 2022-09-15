/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { gameboard } from "./gameboard";

const player = (turn = 1) => {
  const playergameboard = gameboard();
  const attack = (enemy, coordinate) => {
    enemy.playergameboard.receiveAttack(coordinate);
  };
  const computerattack = (enemy) => {
    const coordinate = Math.floor(Math.random() * 98 + 1);
    console.log(coordinate);
    if (
      enemy.playergameboard.missedAttack.find((cur) => cur === coordinate) ||
      enemy.playergameboard.succesAttack.find((cur) => cur === coordinate)
    )
      computerattack(enemy);
    enemy.playergameboard.receiveAttack(coordinate);
  };
  return { playergameboard, attack, computerattack, turn };
};
export { player };
