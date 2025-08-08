const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function closePrompt() {
  rl.close();
}

module.exports = { askQuestion, closePrompt };
