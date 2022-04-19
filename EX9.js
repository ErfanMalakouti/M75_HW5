let params1 = (...array) => {
  return array.reduce((a, b) => [...a, ...b]);
};
///////////Another solution
let params2 = (...array) => {
  return [].concat(...array);
};
//Test:
console.log(params1([1, 2, 3, 4], [3, 4, 5], ["a", "b", "c"]));
//[1,2,3,4,3,4,5,'a','b','c']
console.log(params2([1, 2, 3, 4], [3, 4, 5], ["a", "b", "c"]));
//[1,2,3,4,3,4,5,'a','b','c']
