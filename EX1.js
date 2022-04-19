let information = {};
let number = 1;
let infoCollector = () => {
  let input;
  while (input !== null) {
    let bio = {};
    input = prompt("please insert your first name");
    if (input === null) {
      break;
    }
    bio.name = input;
    input = prompt("please insert your last name");
    if (input === null) {
      break;
    }
    bio.lastName = input;
    input = prompt("please insert your father's name");
    if (input === null) {
      break;
    }
    bio.fatherName = input;
    input = prompt("please insert your father's job");
    if (input === null) {
      break;
    }
    bio.fatherJob = input;
    input = prompt("please insert your age");
    if (input === null) {
      break;
    }
    bio.age = input;
    input = prompt("please insert your grade");
    if (input === null) {
      break;
    }
    bio.grade = input;
    let address = {};
    input = prompt("please insert your city");
    if (input === null) {
      break;
    }
    address.city = input;
    input = prompt("please insert your boulevard");
    if (input === null) {
      break;
    }
    address.boulevard = input;
    input = prompt("please insert your street");
    if (input === null) {
      break;
    }
    address.street = input;
    input = prompt("please insert your alley");
    if (input === null) {
      break;
    }
    address.alley = input;
    input = +prompt("please insert your Block");
    if (input === null) {
      break;
    }
    address.Block = input;
    input = +prompt("please insert your No");
    if (input === null) {
      break;
    }
    address.No = input;
    input = +prompt("please insert your floor");
    if (input === null) {
      break;
    }
    address.floor = input;
    bio.address = address;
    digit = ("0" + number).slice(-2);
    information[digit] = bio;
    number += 1;
  }
  return information;
};
