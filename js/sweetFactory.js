const makeSweet = (name, quantity, desc, shapeId, typeId, seasonId) => {
  const newSweet = {
    name: name,
    quantity: quantity,
    desc: desc,
    shapeId: shapeId,
    typeId: typeId,
    seasonId: seasonId,
  };

  return newSweet;
};

export default makeSweet;
