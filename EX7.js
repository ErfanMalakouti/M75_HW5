let deepCopy = (object) => {
  let keys = Object.keys(object);
  let values = Object.values(object);
  let clone = {};
  keys.forEach((item, index) => {
    return (clone[item] = values[index]);
  });
  return clone;
};
//Test:
let original = { name: "ali", name2: { car: "bmw", age: { young: "20" } } };
console.log(deepCopy(original));
//{name:"ali",name2:{car:"bmw",age:{young:"20"}}}
console.log(deepCopy(original) === original);
//false
