import { player } from "../player";
import { ship } from "../ship";

test("Attack another player on a missed spot", () => {
  const shiptest = ship(3);
  const playertest = player();
  const enemy = player();
  playertest.attack(enemy, 53);
  expect(enemy.playergameboard.missedAttack).toEqual([53]);
  playertest.attack(enemy, 54);
  playertest.attack(enemy, 55);
  expect(enemy.playergameboard.missedAttack).toEqual([53, 54, 55]);
});
test("Attack another player on a hit spot", () => {
  const shiptest = ship(3);
  const playertest = player();
  const enemy = player();
  enemy.playergameboard.placeShip(shiptest, 4);
  playertest.attack(enemy, 4);
  playertest.attack(enemy, 5);
  playertest.attack(enemy, 6);
  expect(enemy.playergameboard.succesAttack).toEqual([4, 5, 6]);
});
test("Computer attack", () => {
  const shiptest = ship(7);
  const playertest = player();
  const enemy = player();
  enemy.playergameboard.placeShip(shiptest, 2);
  playertest.computerattack(enemy);
  // expect(enemy.playergameboard.succesAttack).toEqual([4,5,6])
  expect(enemy.playergameboard.missedAttack.length).toBeGreaterThan(0);
});
