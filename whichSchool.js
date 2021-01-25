
/*
Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases.
*/


function whichSchool(age){
let answer = "Lighthouse Labs";

if (age < 13){
  answer = "Elementary School";
}else if(age > 12 && age < 19){
  answer = "Secondary School";
}


return answer;
}





console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));