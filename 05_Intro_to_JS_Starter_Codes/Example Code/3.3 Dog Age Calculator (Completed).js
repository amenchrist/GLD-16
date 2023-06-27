const myAge = 1;
//stores my age

let earlyYears = 2;
//first two years of dog years is different to the other remaining years

earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
//multiply the remaining years by 4

let myAgeInDogYears = earlyYears + laterYears;
//add early and later years to new variable

let myName = 'Phill';

//Change my name to lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);