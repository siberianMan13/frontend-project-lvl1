import engineGame, { getRandomNum } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

const gameBody = () => {
  const randomNum = getRandomNum(1, 98);
  const rightAnswer = isEven(randomNum);
  const gameQuestion = randomNum;
  return [gameQuestion, rightAnswer];
};
const evenGame = () => engineGame(gameRules, gameBody);

export default evenGame;
