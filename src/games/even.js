import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const evenGame = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);

  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const startRound = () => {
    const randomNum = getRandomNum(1, 98);
    const rightAnswer = isEven(randomNum);
    const usersAnswer = readlineSync.question(`Question: ${randomNum} `);
    console.log(`Your answer: ${usersAnswer}`);
    if (randomNum === rightAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.
    Let's try again, ${name}`);
    return false;
  };
  const round = 3;
  const game = () => {
    for (let i = 0; i <= round; i += 1) {
      const result = startRound;
      if (result === false) {
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log(`Congratulations, ${name}`);
    }
  };
};
export default evenGame;
