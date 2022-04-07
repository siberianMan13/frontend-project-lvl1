import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${nameUser}!`);
}

export default greeting;
