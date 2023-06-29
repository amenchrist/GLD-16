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

// let score = Math.ceil(Math.random()*100)
// let grade = "UNKNOWN"

// if(grade <= 39){
//     grade = 'F'
// } else if(score >= 40){
//     grade = 'D'
// } else if(score >= 50){
//     grade = 'C'
// } else if(score >= 70){
//     grade = 'B'
// }
// else if(score >= 80){
//     grade = 'A'
// }
//  else {
//     grade = "UNKNOWN"
// }

// console.log(score, "is an", grade)

// let dailySleepAvg = 2

// function sleepCalculator(hours) {
//     isSleepingEnough(hours) ? console.log(`Congrats! You are getting enough sleep!`) : console.log(`Get some sleep mate! You need ${sleepDebt(hours)} more hours`)
// }

// function getTotalWeekSleep(avgSleepHrs){ 
//     return avgSleepHrs * 7
// }

// function getRecommendedSleep() {
//     const recommendedSleepPerDay = 8;
//     return recommendedSleepPerDay * 7
// }
// function isSleepingEnough(hrs){
//     return getTotalWeekSleep(hrs) >= getRecommendedSleep()
// }

// function sleepDebt(hrs){
//     return getRecommendedSleep() - getTotalWeekSleep(hrs)
// }

// sleepCalculator(dailySleepAvg)



// ROCK PAPER SCISSORS

// 1	Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.

// 2	Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword. Note: The use of this array will be more apparent within the following steps.

// 3	Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.

// 4	Create a loop to iterate through each letter of the input variable text. In a later step, you will compare each letter with our vowels array.

// 5	To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string. Comment out this code when you’re ready to move on.

// 6	Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.This will enable you to check each letter of input against all the vowels elements during each iteration.

// 7	To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.

// 8	Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.Note: To check that everything is working properly, log letter matches to the console.

//9	Now instead of just logging the letters, add them to the results array. Note: To check your work use console.log() to print your resultArray. The letters you logged to the console in step 8 should be now included in your resultArray.

// 10	Whales double their e‘s and the u‘s in their language.Write an if statement that checks if each letter in the input string is equal to 'e'. If so, use the .push() method to add input[i] to the resultArray. Note: This statement belongs before the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.

// 11	Next, you want to double the letter u.

// 12	At the bottom of the program, log the resultArray to the console.

// 13	Currently, resultArray outputs an array of characters. To produce proper whale language, we want to capitalise the array elements and put them together as one string. Declare a variable resultString that joins our resultArray into a single string and capitalizes all of it’s letters.

// 14	Run the program and sing the output out loud — you officially speak whale! Note: To confirm, if you change the value of input to ‘turpentine and turtles’, the whale version would read: 'UUEEIEEAUUEE'.


// let phrase = "a flat white is not a small latte";
// let trimmedPhrase = phrase.split(" ").join("");

// const vowels = ["a", "e", "i", "o", "u"]

// let whaleTalk = [];

// console.log(trimmedPhrase)

// for (const letter in trimmedPhrase){

//     if(vowels.includes(trimmedPhrase[letter])){
//         if(trimmedPhrase[letter] === "e" || trimmedPhrase[letter] === "u" ){
//             whaleTalk.push(trimmedPhrase[letter].toUpperCase())
//             whaleTalk.push(trimmedPhrase[letter].toUpperCase())
//         } else {
//             whaleTalk.push(trimmedPhrase[letter].toUpperCase())
//         }
//     }
// }

// console.log(whaleTalk.join(""))

let phrase = "a flat white is not a small latte";

const vowels = ["a", "e", "i", "o", "u"]

let whaleTalk = [];

for(const letter of phrase){
    if (vowels.includes(letter)){
        whaleTalk.push(letter)
    }
}
console.log(whaleTalk.join(""))
