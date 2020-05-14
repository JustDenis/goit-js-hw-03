const countProps = function (obj) {
  const objValues = Object.values(obj);
  const count = objValues.length;

  return count;
};

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
