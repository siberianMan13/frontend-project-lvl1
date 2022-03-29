import readlineSync from 'readline-sync';
import { nameUser } from '../cli.js';

const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
const sign = ['+', '-', '*'];
const calculate = (numOne, numTwo, operator) => {
  if (operator === '+') {
    const result = numOne + numTwo;
    return result;
  } if (operator === '-') {
    const result = numOne - numTwo;
    return result;
  }
  const result = numOne * numTwo;
  return result;
};
function startRound() {
  const numOne = getRandomNum(1, 9);
  const numTwo = getRandomNum(1, 9);
  const randOperator = sign[getRandomNum(0, 2)];
  const rightAnswer = calculate(numOne, numTwo, randOperator).toString();
  const answerUser = readlineSync.question(`Question: ${numOne} ${randOperator} ${numTwo} `);
  if (answerUser === rightAnswer) {
    console.log(`Your answer: ${answerUser}`);
    console.log('Correct!');
    return true;
  }
  console.log(`Your answer: ${answerUser}`);
  console.log(`'${answerUser}' is Wrong Answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
}
function calcGame() {
  console.log('What is the result of the expression?');
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const result = startRound();
    if (result !== true) {
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log(`Congratulations, ${nameUser}!`);
  }
}
export default calcGame;
