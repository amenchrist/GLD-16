const whatDay = (day) => {
  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "it's a week day";
      break;
    case "saturday":
    case "sunday":
      return "it's the weekend";
      break;
    default:
      return "is that a day?";
      break;
  }
};

console.log(whatDay("monday"));
console.log(whatDay("tuesday"));
console.log(whatDay("wednesday"));
console.log(whatDay("thursday"));
console.log(whatDay("friday"));
console.log(whatDay("saturday"));
console.log(whatDay("sunday"));
