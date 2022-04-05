import engineGame, { getRandomNum } from '../index.js';

const gameRules = 'What is the result of the expression?';

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
function bodyGame() {
  const numOne = getRandomNum(1, 9);
  const numTwo = getRandomNum(1, 9);
  const randOperator = sign[getRandomNum(0, 2)];
  const rightAnswer = calculate(numOne, numTwo, randOperator).toString();
  const gameQuestion = ` ${numOne} ${randOperator} ${numTwo} `;
  return [gameQuestion, rightAnswer];
}

const calcGame = () => engineGame(gameRules, bodyGame);

export default calcGame;
