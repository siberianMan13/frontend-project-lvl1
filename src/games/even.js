import engineGame from '../index.js';
import getRandomNum from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

const giveGame = () => {
  const randomNum = getRandomNum(1, 98);
  const rightAnswer = isEven(randomNum);
  const gameQuestion = randomNum;
  return [gameQuestion, rightAnswer];
};
const evenGame = () => engineGame(gameRules, giveGame);

export default evenGame;
