import readlineSync from 'readline-sync';
import { nameUser } from '../cli.js';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return findGCD(num2, num1 % num2);
};
const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);

function startRound() {
  const numOne = getRandomNum(2, 20);
  const numTwo = getRandomNum(2, 20);
  const rightAnswer = findGCD(numOne, numTwo).toString();
  const usersAnswer = readlineSync.question(`Question: ${numOne} ${numTwo} `);
  if (usersAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  return 'false';
}
function gameofGCD() {
  console.log('Find the greatest common divisor of given numbers.');
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
export default gameofGCD;
