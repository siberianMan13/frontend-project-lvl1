import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const nameUser = readlineSync.question('May I have your name? ');
function greeting() {
  return console.log(`Hello, ${nameUser}!`);
}

export default greeting;
