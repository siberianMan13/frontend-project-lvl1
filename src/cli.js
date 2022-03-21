import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const nameUser = (text) => {
  text = readlineSync.question('May I have your name? ');
  const name = (text === '') ? 'new player' : text;
  console.log(`Hello, ${name}!`);
};
export default nameUser;
