
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { ship } from "./ship";

const gameboard = () => {
const ship1=ship(5);
const ship2=ship(4);
const ship3=ship(3);
const ship4=ship(3);
const ship5=ship(2);

  const gameboardArray = [];
  const missedAttack = [];
  const succesAttack = [];
  const isSunkArray = [];
  const shipAmount = 5;

  const checkhorizontalvalidity = (startcoordinate, len) => {
    if ((startcoordinate % 10) + len > 10) return false;
    return true;
  };
  const checkverticalvalidity = (startcoordinate, len) => {
    if (Math.floor(startcoordinate / 10 + len) > 10) return false;
    return true;
  };
  const checkoverlappingvalidity = (coordinates) => {
    if (gameboardArray.find((cur) => cur.coordinate === coordinates))
      return false;
    return true;
  };

  // eslint-disable-next-line no-shadow
  const placeShip = (ship, startcoordinate) => {
    const length = ship.len;
    if (ship.properties.position === "vertical") {
      if (checkverticalvalidity(startcoordinate, length)) {
        for (let i = 0; i < length; i++) {  
          if (!checkoverlappingvalidity(startcoordinate)) return false;
          startcoordinate += 10;
        }
        startcoordinate -= 10 * length;
        for (let i = 0; i < length; i++) {
          gameboardArray.push({ coordinate: startcoordinate, ship });
          startcoordinate += 10;
        }
        return true;
      }
      return false;
    }
    if (checkhorizontalvalidity(startcoordinate, length)) {
      for (let i = 0; i < length; i++) {
        if (!checkoverlappingvalidity(startcoordinate)) return false;
        startcoordinate++;
      }
      startcoordinate -= length;
      for (let i = 0; i < length; i++) {
        gameboardArray.push({ coordinate: startcoordinate, ship });
        startcoordinate++;
      }
      return true
    }
    return false
  };

  const receiveAttack = (coordinates) => {
    if (gameboardArray.find((cur) => cur.coordinate === coordinates)) {
      succesAttack.push(coordinates);
      const index = gameboardArray.findIndex(
        (cur) => cur.coordinate === coordinates
      );
      gameboardArray[index].ship.isHit(coordinates);
      if (gameboardArray[index].ship.isSunk())
        isSunkArray.push(gameboardArray[index].ship);
      return true;
    }
    missedAttack.push(coordinates);
    return false;
  };
  const lost = () => {
    if (isSunkArray.length === shipAmount) return true;
    return false;
  };
  return {
    missedAttack,
    placeShip,
    receiveAttack,
    gameboardArray,
    lost,
    succesAttack,
    ship1,
    ship2,
    ship3,
    ship4,
    ship5,
    isSunkArray
  };
};
export { gameboard };