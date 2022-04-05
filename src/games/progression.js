import engineGame, { getRandomNum } from '../index.js';

const gameRules = 'What number is missing in the progression?';

const bodyGame = () => {
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
  const gameQuestion = arr.join(' ');
  return [gameQuestion, rightAnswer];
};
const progressionGame = () => engineGame(gameRules, bodyGame);

export default progressionGame;
