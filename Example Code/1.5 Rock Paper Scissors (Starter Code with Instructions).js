/* STEP 1:
The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.
*/





/* STEP 2:
Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalisations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
*/


/* STEP 3:
When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log to print an error message to the console.
*/

/* STEP 4:
Now we need to have the computer make a choice.
Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 1 and 3. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.
*/





/* STEP 5:
Now it’s time to determine a winner.
Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.
Let’s deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.
*/

// const getUserChoice = () => {

//     const userRandomNum = Math.ceil(Math.random()*4)

//     let userChoice = ""
   
//     switch (userRandomNum){
//         case 1: userChoice = "ROCK";
//         break;
//         case 2: userChoice = "PAPER";
//         break;
//         case 3: userChoice = "SCISSORS";
//         break;
//         default: userChoice = "DRAGON"
//     }
//     console.log("You played", userChoice)
//     return userChoice
// }


// const getComputerChoice = () => {

//     const userRandomNum = Math.ceil(Math.random()*3)

//     let choice = ""
   
//     switch (userRandomNum){
//         case 1: choice = "ROCK";
//         break;
//         case 2: choice = "PAPER";
//         break;
//         case 3: choice = "SCISSORS";
//         break;
//         default: choice = "DRAGON"
//     }
    
//     console.log("Computer played", choice)
//     return choice
// }

const getChoice = () => {

    const userRandomNum = Math.ceil(Math.random()*4)

    let choice = ""
    switch (userRandomNum){
        case 1: choice = "ROCK";
        break;
        case 2: choice = "PAPER";
        break;
        case 3: choice = "SCISSORS";
        break;
        default: choice = "DRAGON"
    }
    return choice
}

function determineWinner(userC, compC) {

    let outcome = ''
    switch(true){
        case userC === compC: outcome = `It's a Tie!`;
        break;
        case userC === "DRAGON" : outcome = `You win!`;
        break
        case compC === "DRAGON" : outcome = `Computer Wins!`;
        break;
        case userC === "PAPER" && compC === "ROCK" : outcome = `You win!`;
        break
        case userC === "ROCK" && compC === "SCISSORS"  : outcome = `You win!`;
        break
        case userC === "SCISSORS" && compC === "PAPER" : outcome = `You win!`;
        break
        case userC === "SCISSORS" && compC === "ROCK" : outcome = `Computer Wins!`;
        break
        case userC === "ROCK" && compC === "PAPER" : outcome = `Computer Wins!`;
        break
        case userC === "PAPER" && compC === "SCISSORS" : outcome = `Computer Wins!`;
        break
        default: `It's a TIE!!!`
    }

    return outcome
}

function playGame () {
    const userChoice = getChoice();
    const computerChoice = getChoice()
    console.log(`You played ${userChoice}`)
    console.log(`Computer played ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()

/* STEP 6: 
If the game is not a tie, you’ll need to determine a winner.
Begin by writing an if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, write another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not, return a message that the user won.
*/

/* STEP 7:
Next, write another if statement for if the userChoice is 'paper'.
Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.
*/

/* STEP 8:
Next, write yet another if statement for if the userChoice is 'scissors'.
Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.
*/

/* STEP 9:
Create a function named playGame.
Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument.
Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().
Under both of these variables, use console.log to print them to the console.
*/

/* STEP 10:
Inside the playGame() function, call the determineWinner() function. Pass in the userChoice and computerChoice variables as its parameters. Make sure to put this function call inside of a console.log() statement so you can see the result.
Then, to start the game, call the playGame() function on the last line of your program.
*/
