export default function (length) {
  let health = length;

  const hit = () => {
    health -= 1;
  };

  const getHealth = () => {
    return health;
  };

  const isSunk = () => {
    return health <= 0;
  };

  return { length, hit, getHealth, isSunk };
}
