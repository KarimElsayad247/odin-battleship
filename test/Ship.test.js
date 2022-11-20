import Ship from "../src/modules/Ship";

test("Ship has correct length", () => {
  const ship = Ship(4);
  expect(ship.length).toBe(4);
});

test("Ship gets hit correctly and its health is reduced", () => {
  const ship = Ship(4);
  ship.hit();
  expect(ship.getHealth()).toBe(3);
});

test("Ship gets sunk when its health reaches zero", () => {
  const ship = Ship(4);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});
