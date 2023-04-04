const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line
//i've noticed that valuables are not numbers but string
//i have stated by using !NaN to state that the variables and not a number
// added && and string to state that primaryPhone is a string.
// constant has been used because the variables are not going be reassigned
const primaryValid = !isNaN(primaryPhone)&& typeof primaryPhone== 'string';
const secondaryValid = !isNaN(secondaryPhone) && typeof secondaryPhone == 'string';


console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )