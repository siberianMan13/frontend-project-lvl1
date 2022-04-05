import engineGame, { getRandomNum } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return findGCD(num2, num1 % num2);
};

function gameBody() {
  const numOne = getRandomNum(2, 20);
  const numTwo = getRandomNum(2, 20);
  const rightAnswer = findGCD(numOne, numTwo).toString();
  const gameQuestion = `${numOne} ${numTwo} `;
  return [gameQuestion, rightAnswer];
}
const gcdGame = () => engineGame(gameRules, gameBody);

export default gcdGame;
