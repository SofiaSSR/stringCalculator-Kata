function divideString(stringLine,divider){
return stringLine.split(divider);
}

function sumNumbers(numbersArray) {
  return numbersArray.reduce((n1,n2)=>{return n1+n2})
}

function Add(stringInput) {
const {dividersLine,numberStringLine} = separateLines(stringInput);
const dividers = getDividers(dividersLine) ;
console.log(dividers);
let numbersStringArray = divideString(numberStringLine, dividers);
let numbersArray = getNumbersArray(numbersStringArray);
negativesPolicy(numbersArray);
numbersArray = numbersBiggerThan1000Policy(numbersArray);
 return sumNumbers(numbersArray);
}

function getDividers(dividersLine) {
  if(dividersLine==""){
    return /[\n,]/
  }
  dividers = getDividersFromLine(dividersLine);
return dividers
}
function getNumbersArray(numbersStringArray){
 return numbersStringArray.map((stringNumber) => {return parseInt(stringNumber)})
}

function getDividersFromLine(dividersLine){
  return dividersLine.replace("\[","").replace("\]","")
}

function separateLines(stringInput){
if(!isDividerLine(stringInput)){
return { dividersLine:"" ,
        numberStringLine: stringInput }
}
stringInput= stringInput.slice(2);
let lines = stringInput.split("\n");
 return{ dividersLine:lines[0] ,
        numberStringLine: lines[1] 
}
}

function isDividerLine(stringInput) {
   return stringInput[0] == "/" && stringInput[1] == "/"
}

function negativesPolicy(numbersArray) {
   const negatives = numbersArray.filter((number) => {return number<0});
  if (negatives.length!=0) {
     throw `negatives not allowed ${negatives.join(" ")}` ;
  }
  
}

function numbersBiggerThan1000Policy(numbersArray ){
  return numbersArray.map((number)=>{
    if(number>1000){
      return 0
    }
    return number;
  })
}

module.exports = {
Add,
getDividers,
negativesPolicy,
isDividerLine,
}


















