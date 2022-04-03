import readlineSync from 'readline-sync';
import { nameUser } from '../cli.js';

const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);

const startRound = () => {
  const giveProgressivNum = getRandomNum(2, 6);
  const hiddenNum = getRandomNum(0, 9);
  let countRaund = 1;
  const arr = [];
  for (let i = 0; i <= 10; i += 1) {
    arr[i] = countRaund;
    countRaund += giveProgressivNum;
  }
  const rightAnswer = arr[hiddenNum].toString();
  arr[hiddenNum] = '..';
  const str = arr.join(' ');
  const usersAnswer = readlineSync.question(`Question: ${str} `);
  if (rightAnswer === usersAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  return false;
};

function progressionGame() {
  console.log('What number is missing in the progression?');
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
export default progressionGame;
