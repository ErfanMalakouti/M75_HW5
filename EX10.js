function User() {
  return {
    usersList: [],
    copy: [],
    ListOfUsers() {
      return this.usersList;
    },
    add(item) {
      this.usersList.push(item);
      this.usersList.forEach((element, index) => {
        element.ID = index + 1;
      });
      return this.usersList;
    },
    remove(id) {
      for (item of this.usersList) {
        if (id === item.ID) {
          return this.usersList.splice(this.usersList.indexOf(item), 1);
        }
      }
      return "user with this ID does not exist";
    },
    change(id, item) {
      for (element of this.usersList) {
        if (id === element.ID) {
          this.usersList.splice(this.usersList.indexOf(element), 1, item);
          item.ID = id;
          return item;
        }
      }
      return "user with this ID does not exist";
    },
    findById(id) {
      return this.usersList.filter((item) => item.ID === id);
    },
    filter(option) {
      let conditionKey = Object.keys(option);
      let temp1 = Object.values(option);
      let temp2 = Object.values(temp1[0]);
      let s = temp2[0];
      let e = temp2[1];
      if (conditionKey.toString() === "name") {
        return this.usersList.filter(
          (item) => item.name[0] === s && item.name[item.name.length - 1] === e
        );
      }
      if (conditionKey.toString() === "lastName") {
        return this.usersList.filter(
          (item) =>
            item.lastName[0] === s &&
            item.lastName[item.lastName.length - 1] === e
        );
      }
      if (conditionKey.toString() === "education") {
        return this.usersList.filter(
          (item) =>
            item.education[0] === s &&
            item.education[item.education.length - 1] === e
        );
      }
      if (conditionKey.toString() === "age") {
        return this.usersList.filter((item) => item.age > s && item.age < e);
      }
    },
    sort(condition) {
      if (condition === "age") {
        return this.usersList.sort((a, b) => a.age - b.age);
      }
      if (condition === "name") {
        return this.usersList.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (condition === "lastName") {
        return this.usersList.sort((a, b) =>
          a.lastName.localeCompare(b.lastName)
        );
      }
      if (condition === "education") {
        return this.usersList.sort((a, b) =>
          a.education.localeCompare(b.education)
        );
      }
    },
    export(id) {
      this.copy = JSON.parse(JSON.stringify(this.findById(id)));
      return this.copy;
    },
  };
}
let userManager = new User();
//Example:
console.log(
  userManager.add({
    name: "ali",
    lastName: "salami",
    age: "18",
    education: "physics",
  })
);
//[{ name: "ali", lastName: "salami",age: "18" ,education: "physics",ID:1}]
console.log(
  userManager.add({
    name: "reza",
    lastName: "sadeghi",
    age: "28",
    education: "art",
  })
);
//[{ name: "ali", lastName: "salami",age: "18" ,education: "physics",ID:1},{ name: "reza",lastName: "sadeghi", age: "28" ,education: "art",ID:2}]
console.log(
  userManager.add({
    name: "jahan",
    lastName: "abedi",
    age: "24",
    education: "chemistry",
  })
);
//[{ name: "ali", lastName: "salami",age: "18" ,education: "physics",ID:1},{ name: "reza",lastName: "sadeghi", age: "28" ,education: "art",ID:2},{ name: "jahan",lastName: "abedi",age: "24" ,education: "chemistry",ID:3}]
console.log(userManager.remove(2));
//{ name: "reza",lastName: "sadeghi", age: "28" ,education: "art",ID:2}
console.log(
  userManager.change(1, {
    name: "ahmad",
    lastName: "safdari",
    age: "26",
    education: "geology",
  })
);
//{ name: "ahmad",lastName: "safdari",education:"geology" , age: "26" , ID:1}
console.log(userManager.findById(1));
//{ name: "ahmad",lastName: "safdari",education:"geology" , age: "26" , ID:1}
console.log(userManager.export(3));
//[{ name: "jahan",lastName: "abedi",age: "24" ,education: "chemistry",ID:3}]
console.log(
  userManager.export(3) ===
    {
      name: "jahan",
      lastName: "abedi",
      age: "24",
      education: "chemistry",
      ID: 3,
    }
);
//false
console.log(
  userManager.copy ===
    {
      name: "jahan",
      lastName: "abedi",
      age: "24",
      education: "chemistry",
      ID: 3,
    }
);
console.log(userManager.sort("age"));
//[{ name: "jahan",lastName: "abedi",age: "24" ,education: "chemistry",ID:3},{ name: "ahmad",lastName: "safdari",education:"geology" , age: "26" , ID:1}]
console.log(userManager.filter({ age: { s: 25, e: 27 } }));
//[{ name: "ahmad",lastName: "safdari",education:"geology" , age: "26" , ID:1}]
console.log(userManager.ListOfUsers());
//[{ name: "jahan",lastName: "abedi",age: "24" ,education: "chemistry",ID:3},{ name: "ahmad",lastName: "safdari",education:"geology" , age: "26" , ID:1}]
