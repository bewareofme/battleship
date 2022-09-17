/* eslint-disable no-loop-func */
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
    let coordinate = Math.floor(Math.random() * 99);
    while (
      enemy.playergameboard.missedAttack.find((cur) => cur === coordinate) ||
      enemy.playergameboard.succesAttack.find((cur) => cur === coordinate)
    )
      {coordinate = Math.floor(Math.random() * 99);}
    enemy.playergameboard.receiveAttack(coordinate);
  };
  return { playergameboard, attack, computerattack, turn};
};
export { player };