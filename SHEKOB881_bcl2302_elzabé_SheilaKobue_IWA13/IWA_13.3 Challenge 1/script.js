let state = 'idle'
let user = null
let calculated = '1'
// Only allowed to change below
//added the = to assign a variable
//used the typeof to check the variable type
// I used the parseInt to change the calculated variable to a number 
const logCalc = () => {
    const isString = typeof calculated === 'string';
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
    calculated = calculatedAsNumber + 1;
}

//I've added () parentheses and semicolons;

const calcUser = () => {
  logCalc ();
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';
}
// it does not need editing.
const checkUser = () => {
    if (user && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`);
    }
}
// Only allowed to change code above
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()