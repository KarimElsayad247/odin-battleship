const Cell = () => {
  let isHit = false;
  let shipIndex = 0;
  return { isHit, shipIndex };
};

export default function () {
  const gridWidth = 10;
  const gridHight = 10;

  const grid = Array.from(Array(gridHight), () =>
    new Array(gridWidth).map(() => {
      Cell();
    })
  );

  const receiveAttack = (x, y) => {};

  return { receiveAttack };
}
