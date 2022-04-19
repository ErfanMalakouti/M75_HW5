let fileContent = "12,fatemeh\n" + "22,zahra\n" + "36,ali\n" + "45,reza\n";
let listMaker = (sentence) => {
  let result = {};
  let temp = sentence.split(/\n/);
  for (let i = 0; i < temp.length - 1; i++) {
    let splitter = temp[i].split(",");
    result[splitter[0]] = splitter[1];
  }
  return result;
};
//Test:
console.log(listMaker(fileContent));
//{12:'fatemeh',22:'zahra',36:'ali',45:'reza'}
