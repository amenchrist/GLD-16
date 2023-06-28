function compoundWord(a, b) {
  if (a.includes(b)) {
    return b + a;
  } else {
    return a + b;
  }
}

function compoundWordChallenge(a, b) {
  return a.includes(b) ? b + a : a + b;
}

console.log(compoundWord("cheese", "cake"));
console.log(compoundWordChallenge("ages", "s"));
