const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("error - incorect input");
  }
};

//console.log(getUserChoice('Paper'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won";
    } else {
      return "You won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won";
    } else {
      return "You won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won";
    } else {
      return "You won";
    }
  }
};

//console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("Computer threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
