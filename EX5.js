//answer is an error.
//Solution:
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}
let user = makeUser();
//Test:
console.log(user.ref().name);
//John
