'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess || guess > 20) {
    document.querySelector('.message').textContent =
      'Invalid Guess, Number is between 1 and 20';
    // When Number is Correct
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = `${highScore}`;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = `${number}`;

    //When number 2 low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too Low ⬇️';
      score = score - 1;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      document.querySelector('.message').textContent = 'Game Over 💀';
      document.querySelector('.score').textContent = `0`;
    }
    //When Number 2 high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too High ⬆️';
      score = score - 1;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      document.querySelector('.message').textContent = 'Game Over 💀';
      document.querySelector('.score').textContent = `0`;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('test');
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = `${score}`;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = `?`;
});
