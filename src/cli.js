import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const nameUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default nameUser;
