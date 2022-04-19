let states = {};
let stateAdder = (state) => {
  let temp = Object.keys(states);
  if (temp.includes(state) === true) {
    return "inserted state is already exist";
  }
  return (states = { ...states, [state]: [] });
};
//Test:
console.log(stateAdder("tehran")); //{tehran:[]}
console.log(stateAdder("tehran")); //inserted state does not exist
console.log(stateAdder("khorasan")); //{tehran:[],khorasan:[]}
////////////////////
let cityAdder = (state, city) => {
  let temp = Object.keys(states);
  if (temp.includes(state) !== true) {
    stateAdder(state);
  }
  if (states[state].includes(city) === true) {
    return "inserted city is already exist";
  }
  return (states[state] = [...states[state], ...[city]]);
};
//Test:
console.log(cityAdder("tehran", "tehran"));
//['tehran']
console.log(cityAdder("tehran", "rey"));
//['tehran','rey']
console.log(cityAdder("tehran", "rey"));
//inserted state does not found or inserted city is already exist
console.log(cityAdder("khorasan", "mashhad"));
//['mashhad']
///////////////////////
let citiesListAdder = (state, citiesList) => {
  let temp = Object.keys(states);
  if (temp.includes(state) !== true) {
    stateAdder(state);
  }
  return (states[state] = [...new Set([...states[state], ...citiesList])]);
};
//Test:
console.log(citiesListAdder("tehran", ["alborz", "kordan"]));
//['tehran','rey','alborz','kordan']
console.log(
  citiesListAdder("tehran", ["alborz", "kordan", "alborz", "kordan", "tehran"])
);
//['tehran','rey','alborz','kordan']
console.log(states);
//{tehran:['tehran','rey','alborz','kordan'],khorasan:['mashhad']}
