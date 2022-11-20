import Gameboard from "../src/modules/Gameboard";
import Ship from "../src/modules/Ship";

test("Places ship horizontally on board", () => {
  const board = Gameboard();
  const ship = Ship(4);
  board.placeShip(ship, 0, 0, "horizontal");
  for (let i = 0; i < 4; ++i) {
    expect(board.containsShip(i, 0)).toBeTruthy();
  }
});

test("Places ship vertically on board", () => {
  const board = Gameboard();
  const ship = Ship(4);
  board.placeShip(ship, 0, 0, "vertical");
  for (let i = 0; i < 4; ++i) {
    expect(board.containsShip(0, i)).toBeTruthy();
  }
});

test("Raises error when attempting to place ship out of bound vertically", () => {
  const board = Gameboard();
  const ship = Ship(4);
  expect(() => board.placeShip(ship, 0, 9, "vertical")).toThrow();
});

test("Raises error when attempting to place ship out of bound horizontally", () => {
  const board = Gameboard();
  const ship = Ship(4);
  expect(() => board.placeShip(ship, 9, 0, "horizontal")).toThrow();
});

test("Receives attack on a cell", () => {});
