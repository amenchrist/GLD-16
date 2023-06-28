function getSleepHours(day) {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 7;
      break;
    case "Wednesday":
      return 7;
      break;
    case "Thursday":
      return 6;
      break;
    case "Friday":
      return 7;
      break;
    case "Saturday":
      return 5;
      break;
    case "Sunday":
      return 8;
      break;
    default:
      return "Incorrect day of the week";
  }
}

function getActualSleepHours() {
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
}

function getIdealSleepHours() {
  let idealHours = 7;
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got more sleep then needed. You actually needed " +
        (idealSleepHours - actualSleepHours) +
        " hours this week."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You should get some rest. You have slept " +
        (idealSleepHours - actualSleepHours) +
        " hours less than your goal this week."
    );
  } else {
    console.log("An error has occurred");
  }
}

calculateSleepDebt();
