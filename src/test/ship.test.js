import { ship } from "../ship";

test("return the correct length", () => {
  const ship1 = ship(2);
  expect(ship1.len).toBe(2);
});

test("isHit function updates ishitArray", () => {
  const ship1 = ship(2);
  ship1.isHit(4);
  ship1.isHit(5);
  expect(ship1.properties.isHitArray).toEqual([4, 5]);
});
test("isSunk function", () => {
  const ship1 = ship(2);
  ship1.isHit(4);
  ship1.isHit(5);
  expect(ship1.isSunk()).toBe(true);
});
