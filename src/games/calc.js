import engineGame from '../index.js';
import getRandomNum from '../utils.js';

const gameRules = 'What is the result of the expression?';

const sign = ['+', '-', '*'];
const calculate = (numOne, numTwo, operator) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    default:
      return numOne * numTwo;
  }
};
function giveGame() {
  const numOne = getRandomNum(1, 9);
  const numTwo = getRandomNum(1, 9);
  const randOperator = sign[getRandomNum(0, 2)];
  const rightAnswer = calculate(numOne, numTwo, randOperator).toString();
  const gameQuestion = `${numOne} ${randOperator} ${numTwo} `;
  return [gameQuestion, rightAnswer];
}

const calcGame = () => engineGame(gameRules, giveGame);

export default calcGame;
