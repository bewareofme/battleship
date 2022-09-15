import { gameboard } from "../gameboard";

test("placing ship at starting coordinate", () => {
  const ship = (len) => {
    const properties = {
      coordinates: [],
    };
    return { properties, len };
  };
  const shiptest = ship(1);
  const gameboardtest = gameboard();
  gameboardtest.placeShip(shiptest, 4);
  expect(gameboardtest.gameboardArray).toEqual([
    { coordinate: 4, ship: shiptest },
  ]);
});
test("placing ship with length", () => {
  const ship = (len) => {
    const properties = {
      coordinates: [],
    };
    return { properties, len };
  };
  const shiptest = ship(3);
  const gameboardtest = gameboard();
  gameboardtest.placeShip(shiptest, 4);
  expect(gameboardtest.gameboardArray).toEqual([
    { coordinate: 4, ship: shiptest },
    { coordinate: 5, ship: shiptest },
    { coordinate: 6, ship: shiptest },
  ]);
});
test("placing ship with length and position", () => {
  const ship = (len) => {
    const properties = {
      coordinates: [],
      position: "vertical",
    };
    return { properties, len };
  };
  const shiptest = ship(3);
  const gameboardtest = gameboard();
  gameboardtest.placeShip(shiptest, 4);
  expect(gameboardtest.gameboardArray).toEqual([
    { coordinate: 4, ship: shiptest },
    { coordinate: 14, ship: shiptest },
    { coordinate: 24, ship: shiptest },
  ]);
});
test("placing ship with length and position and validity", () => {
  const ship = (len) => {
    const properties = {
      coordinates: [],
      position: "horizontal",
    };
    return { properties, len };
  };
  const shiptest = ship(3);

  const shiptest2 = ship(2);
  shiptest2.properties.position = "vertical";
  const gameboardtest = gameboard();
  gameboardtest.placeShip(shiptest, 48);
  expect(gameboardtest.gameboardArray).toEqual([]);
  gameboardtest.placeShip(shiptest2, 94);
  expect(gameboardtest.gameboardArray).toEqual([]);
});
test("receiveattack with right attack", () => {
  const ship = (len) => {
    const properties = {
      coordinates: [],
      position: "horizontal",
      isHitArray: [],
    };
    const isHit = (coordinates) => {
      properties.isHitArray.push(coordinates);
    };
    const isSunk = () => {
      if (properties.isHitArray.length === len) return true;
      return false;
    };
    return { properties, len, isHit, isSunk };
  };
  const shiptest = ship(3);
  const gameboardtest = gameboard();
  gameboardtest.placeShip(shiptest, 44);
  gameboardtest.receiveAttack(45);
  expect(shiptest.properties.isHitArray).toEqual([45]);
});
test("receiveattack with missedAttack", () => {
  const ship = (len) => {
    const properties = {
      coordinates: [],
      position: "horizontal",
      isHitArray: [],
    };
    const isHit = (coordinates) => {
      properties.isHitArray.push(coordinates);
    };
    return { properties, len, isHit };
  };
  const shiptest = ship(3);
  const gameboardtest = gameboard();
  gameboardtest.placeShip(shiptest, 44);
  gameboardtest.receiveAttack(47);
  expect(gameboardtest.missedAttack).toEqual([47]);
});

test("testing if game is lost", () => {
  const ship = (len) => {
    const properties = {
      coordinates: [],
      position: "horizontal",
      isHitArray: [],
    };
    const isHit = (coordinates) => {
      properties.isHitArray.push(coordinates);
    };
    const isSunk = () => {
      if (properties.isHitArray.length === len) return true;
      return false;
    };
    return { len, isHit, properties, isSunk };
  };
  const shiptest = ship(3);
  const shiptest2 = ship(2);
  const gameboardtest = gameboard();
  gameboardtest.placeShip(shiptest, 44);
  gameboardtest.placeShip(shiptest2, 34);
  gameboardtest.receiveAttack(44);
  gameboardtest.receiveAttack(45);
  gameboardtest.receiveAttack(46);
  gameboardtest.receiveAttack(34);
  gameboardtest.receiveAttack(35);
  expect(gameboardtest.lost()).toEqual(true);
});

test("cehcking overlapping", () => {
  const ship = (len) => {
    const properties = {
      coordinates: [],
      position: "horizontal",
      isHitArray: [],
    };
    const isHit = (coordinates) => {
      properties.isHitArray.push(coordinates);
    };
    return { properties, len, isHit };
  };
  const shiptest = ship(3);
  const shiptest2 = ship(4);
  shiptest2.properties.position = "vertical";
  const gameboardtest = gameboard();
  gameboardtest.placeShip(shiptest, 44);
  gameboardtest.placeShip(shiptest2, 74);

  expect(gameboardtest.gameboardArray).toEqual([
    { coordinate: 44, ship: shiptest },
    { coordinate: 45, ship: shiptest },
    { coordinate: 46, ship: shiptest },
  ]);
});
