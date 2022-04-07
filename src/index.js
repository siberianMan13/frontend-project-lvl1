import readlineSync from 'readline-sync';

function engineGame(gameRules, bodyGame) {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(gameRules);
  const countOFRounds = 3;
  for (let i = 0; i < countOFRounds; i += 1) {
    const [gameQuestion, rightAnswer] = bodyGame();
    const usersAnswer = readlineSync.question(`Question: ${gameQuestion} `);
    console.log(`Your answer: ${usersAnswer}`);
    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    }
    if (usersAnswer !== rightAnswer) {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
}
export default engineGame;
