function subtract32(number) {
  return number - 32;
}

function getCelsius(fahrenheit) {
  return subtract32(fahrenheit) * (5 / 9);
}

console.log(getCelsius(59));
