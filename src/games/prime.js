import readlineSync from 'readline-sync';
import { nameUser } from '../cli.js';

const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);

const startRound = () => {
  const giveRandNum = getRandomNum(1, 99);
  function rightAnswer() {
    for (let i = 2; i <= giveRandNum / 2; i += 1) {
      const isPrime = giveRandNum / i;
      if (isPrime === Math.floor(isPrime)) {
        return 'no';
      }
    }
    return 'yes';
  }
  const strAnsw = rightAnswer(giveRandNum).toString();
  const usersAnswer = readlineSync.question(`Question: ${giveRandNum} `);
  if (strAnsw === usersAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer(giveRandNum)}.`);
  return false;
};

function primeGame() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const result = startRound();
    if (result !== true) {
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
}
export default primeGame;
