import engineGame from '../index.js';
import getRandomNum from '../utils.js';

export const gameRules = 'What number is missing in the progression?';

const giveGame = () => {
  const giveProgressivNum = getRandomNum(2, 6);
  const hiddenNum = getRandomNum(0, 9);
  let countOfProgressivNum = 0;
  const arr = [];
  for (let i = 0; i <= 10; i += 1) {
    arr[i] = countOfProgressivNum;
    countOfProgressivNum += giveProgressivNum;
  }
  const rightAnswer = arr[hiddenNum].toString();
  arr[hiddenNum] = '..';
  const gameQuestion = arr.join(' ');
  return [gameQuestion, rightAnswer];
};
const progressionGame = () => engineGame(gameRules, giveGame);

export default progressionGame;
