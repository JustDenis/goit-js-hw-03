const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const max = Math.max(...values);
  const keys = Object.keys(employees);
  let bestEmployee;
  for (const key of keys) {
    if (employees[key] !== max) continue;
    bestEmployee = key;
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); 

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
