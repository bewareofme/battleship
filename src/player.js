/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { gameboard } from "./gameboard";

const player = (turn = 1) => {

  const playergameboard = gameboard();
  const attack = (enemy, coordinate) => {
    if(enemy.playergameboard.receiveAttack(coordinate))return true
    return false
  };
  const computerattack = (enemy) => {
    const coordinate = Math.floor(Math.random() * 99);
    if (
      enemy.playergameboard.missedAttack.find((cur) => cur === coordinate) ||
      enemy.playergameboard.succesAttack.find((cur) => cur === coordinate)
    )
      computerattack(enemy);
    enemy.playergameboard.receiveAttack(coordinate);
  };
  return { playergameboard, attack, computerattack, turn};
};
export { player };