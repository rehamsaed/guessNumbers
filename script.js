'use strict';

let check = document.querySelector('.check');
let realscore = 20;
let highscore = 0;
let guessnumber = Math.trunc(Math.random() * 20) + 1;
let gameOver = false;

check.addEventListener('click', function () {
 if (gameOver) return;
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  let score = document.querySelector('.score');
  let number = document.querySelector('.number');
  let highscoree = document.querySelector('.highscore');

  if (realscore === 0) {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    score.innerText = '0';
    gameOver = true;
    return;
  }
  if (!guess) {
    message.innerText = '⛔️ No number!';
  } 
  else if (guess < guessnumber && guess > 0) {
    message.innerText = '📉 Too low!';
    --realscore;
    score.innerText = `${realscore}`;
  } else if (guess > guessnumber) {
    message.innerText = '📈 Too high!';
    --realscore;
    score.innerText = `${realscore}`;
  } else if (guess === guessnumber) {
    message.innerText = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.innerText = `${guess}`;
    gameOver = true;
    if (realscore > highscore) {
      highscore = realscore;
      console.log(highscore,highscoree)
      highscoree.innerText = `${highscore}`;
    }
  }

  console.log(guess, guessnumber);
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value="";
  gameOver = false; 
  realscore = 20;
  document.querySelector('.message').innerText="Start guessing...";
  document.querySelector('.score').innerText="20";
  document.querySelector('.number').innerText="?";
  document.querySelector('body').style.backgroundColor =  '#222';
  guessnumber = Math.trunc(Math.random() * 20) + 1;
  

}


)