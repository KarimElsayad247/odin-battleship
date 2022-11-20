const Cell = () => {
  let isHit = false;
  let ship = null;

  const assignShip = (shipToPlace) => {
    ship = shipToPlace;
  };

  const hit = () => {
    isHit = true;
  };

  const containsShip = () => {
    return ship !== null;
  };

  const getShip = () => {
    return ship;
  };

  return { isHit, getShip, assignShip, hit, containsShip };
};

export default function () {
  const gridWidth = 10;
  const gridHight = 10;

  const grid = Array.from(Array(gridHight), () =>
    new Array(gridWidth).fill().map((_) => Cell())
  );

  const isPlaceable = (ship, x, y, orientation) => {
    // Ensure there is enough space to put the ship
    // Ensure there is enough space to put the ship
    if (orientation === "horizontal") {
      if (ship.length + x > gridWidth) {
        return false;
      }
    }

    if (orientation === "vertical") {
      if (ship.length + y > gridHight) {
        return false;
      }
    }

    return true;

    // switch (orientation) {
    //   case "horizontal":
    //     if (ship.length + x > gridWidth) {
    //       return false;
    //     }
    //   case "vertical":
    //     if (ship.length + y > gridHight) {
    //       return false;
    //     }
    //     break;
    //   default:
    //     break;
    // }
  };

  const placeShip = (ship, x, y, orientation) => {
    if (!isPlaceable(ship, x, y, orientation)) {
      throw Error("Can't place ship here!");
    }

    switch (orientation) {
      case "horizontal":
        for (let i = x; i < ship.length + x; i++) {
          const cell = grid[y][i];
          cell.assignShip(ship);
        }
        break;

      case "vertical":
        for (let i = y; i < ship.length + y; i++) {
          const cell = grid[i][x];
          cell.assignShip(ship);
        }
        break;

      default:
        break;
    }
  };

  const receiveAttack = (x, y) => {};

  const containsShip = (x, y) => {
    const cell = grid[y][x];
    return cell.containsShip();
  };

  return { receiveAttack, placeShip, isPlaceable, containsShip };
}
