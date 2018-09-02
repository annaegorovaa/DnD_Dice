function showResult(value) {
  const result = document.getElementById('result');
  result.value = value;
}

function rollDice(n) {
  showResult(getRandom(n));
}

function getRandom(n) {
  return Math.round(Math.random() * n);
}