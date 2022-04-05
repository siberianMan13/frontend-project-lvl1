import readlineSync from 'readline-sync';
import engineGame, { getRandomNum } from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const bodyGame = () => {
  const giveRandNum = getRandomNum(1, 99);
  function checkPrime() {
    for (let i = 2; i <= giveRandNum / 2; i += 1) {
      const isPrime = giveRandNum / i;
      if (isPrime === Math.floor(isPrime)) {
        return false;
      }
    }
    return true;
  }
  const rightAnswer = checkPrime(giveRandNum) ? 'yes' : 'no';
  const gameQuestion = giveRandNum;
  return [gameQuestion, rightAnswer];
};
const primeGame = () => engineGame(gameRules, bodyGame);

export default primeGame;
