//created const variables which also has a function called logTwice
// a parameter is a named variable passed into a function

const firstName = 'John';
const age = 35;
const hobbyLes = 'Coding';
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}
function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobbyLes}!`)
};
hobby(); 