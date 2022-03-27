import readlineSync from 'readline-sync';
import { nameUser } from '../cli.js';

function isEven(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

const startRound = () => {
  function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  const randomNum = getRandomNum(1, 98);
  const rightAnswer = isEven(randomNum);
  const usersAnswer = readlineSync.question(`Question: ${randomNum} `);
  console.log(`Your answer: ${usersAnswer}`);
  if (usersAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  return 'false';
};
const round = 3;
function game() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < round; i += 1) {
    const result = startRound();
    if (result !== true) {
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}`);
}

export default game;
