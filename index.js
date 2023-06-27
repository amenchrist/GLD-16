//Celcius to Fahrenheit converter 

//Fahrenheit = Celcius*(9/5) + 32

// let Celcius = 10;
// let Fahrenheit = Math.ceil(((Celcius*9)/5) + 32)

// console.log(`${Celcius} degrees Celcius is ${Fahrenheit} degrees Fahrenheit`)


// //Fahrenheit to Celcius converter
// //Celcius = (Fahrenheit - 32) * 5/9

// let Fah = 0, cel = Math.ceil((Fah - 32)*5/9)

// console.log(`${Fah} degrees Fahrenheit is ${cel} degrees Celcius`)


// let humanYears = 3
// let dogYears = humanYears * 10.5

// if(humanYears > 2){
//     dogYears = 21 + ((humanYears-2) * 4)
// }

// console.log(`My name is Phil and I am ${humanYears} years old in human years and ${dogYears} years old in dog years`)

// let dog = true

// dog? console.log("pet dog") : console.log("locate dog")

let score = Math.ceil(Math.random()*100)
let grade = "UNKNOWN"

if(grade <= 39){
    grade = 'F'
} else if(score >= 40){
    grade = 'D'
} else if(score >= 50){
    grade = 'C'
} else if(score >= 70){
    grade = 'B'
}
else if(score >= 80){
    grade = 'A'
}
 else {
    grade = "UNKNOWN"
}

console.log(score, "is an", grade)