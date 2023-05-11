'use strict';

//function declrations
function updateMessage(message) {
  document.querySelector('.message').textContent = `${message}`;
}
function updateHighScore(highscore) {
  document.querySelector('.highscore').textContent = `${highScore}`;
}
function updateBackground(colour) {
  document.querySelector('body').style.backgroundColor = colour;
}
function newNumber() {
  let number = Math.trunc(Math.random() * 100 + 1);
  return number;
}
function bttnVisibility(visibility) {
  document.querySelector('.check').style.display = `${visibility}`;
}

//varible declaration
let number = newNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess || guess > 100) {
    updateMessage('Invalid Guess, Number is between 1 and 100');
    // When Number is Correct
  } else if (guess === number) {
    updateMessage('Correct Number 🎉');
    if (score > highScore) {
      highScore = score;
      updateHighScore(highScore);
      // const button = document.querySelector('.check');
      bttnVisibility('none');
    }
    updateBackground('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = `${number}`;
  } else if (guess != number) {
    if (score > 1) {
      updateMessage(guess > number ? 'too high' : 'too low');
      score--;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  bttnVisibility('inline');
  number = newNumber();
  score = 20;
  updateMessage('Start guessing...');
  updateBackground('#222');
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = `${score}`;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = `?`;
});
