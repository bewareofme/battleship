/* eslint-disable import/prefer-default-export */
const ship = (len) => {
  const properties = {
    isHitArray: [],
    position: "horizontal",
  };
  // isHit Function
  const isHit = (coordinates) => {
    properties.isHitArray.push(coordinates);
  };
  // isSunk Function
  const isSunk = () => {
    if (properties.isHitArray.length === len) return true;
    return false;
  };
  return { len, isHit, properties, isSunk };
};

export { ship };
