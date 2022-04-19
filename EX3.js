let inputs = ["google", "yahoo", "maktab", "apple"];
let domains = ["com", "net", "org", "ir"];
let websites = (inputs, domains) => {
  let result = {};
  let temp = {};
  for (key of domains) {
    for (item of inputs) {
      temp[key] = item + "." + key;
      result[item] = temp;
    }
  }
  return result;
};
//Test:
console.log(websites(inputs, domains));
//{apple: {com: 'apple.com', net: 'apple.net', org: 'apple.org', ir: 'apple.ir'}
//google: {com: 'apple.com', net: 'apple.net', org: 'apple.org', ir: 'apple.ir'}
//maktab: {com: 'apple.com', net: 'apple.net', org: 'apple.org', ir: 'apple.ir'}
//yahoo: {com: 'apple.com', net: 'apple.net', org: 'apple.org', ir}}
