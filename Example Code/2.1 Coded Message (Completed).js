let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
//check length
console.log(secretMessage.length);

//1
secretMessage.pop();

//2
console.log(secretMessage.length);

//3
secretMessage.push("to", "Program");
//console.log(secretMessage);

//4
secretMessage["easily"] = "right";
//console.log(secretMessage);

//5
secretMessage.shift();
//console.log(secretMessage);

//6
secretMessage.unshift("Programming");
//console.log(secretMessage);

//7
console.log(secretMessage.indexOf("get"));
secretMessage.splice(6, 5, "know");
//console.log(secretMessage);

//8
console.log(secretMessage.join(" "));
