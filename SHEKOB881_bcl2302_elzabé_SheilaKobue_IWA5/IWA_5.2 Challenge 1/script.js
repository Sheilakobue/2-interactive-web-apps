//added constant to create variables and ;(semicolons)
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = '0';

//added let to create variables
// changed location,currency,customer by adding 1

let location1 ="RSA";
let currency1 = "R";
let customer1 = 1;
let shipping;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

//put everything in brackets, 
//added '' (apostrophes) & ==(equal signs)
//added ()parentheses and combined the the sentence with &&
// created a console for a free-warning feedback


if (location1 === 'RSA'){
  shipping === 400 && currency1 === 'R';

    console.log (FREE_WARNING);

}
if(location1==='NAM'){
  shipping === 600 && currency1==='$';
  
  console.log(FREE_WARNING);
}
// specified shipping for RSA,NAM,NK in an if statement
//console the BANNED_WARNING)

if (location1 === 'RSA') {
  shipping = 400;
} else if (location1 === 'NAM') {
  shipping = 600;
} else if (location1 === 'NK') {
  console.log(BANNED_WARNING);
} else {
  shipping = 800;
}
//created a variable for subtotal
//and an if statement to state that is the order is greater than a 1000 and is in RSA or NAM then the shipping =0
// or and it will reflect the warning message if shipping is less

const subtotal = shoes + toys + shirts + batteries + pens;
if ((subtotal >= 1000) && (location1 === 'RSA' || location1 === 'NAM') && (customers === 1)) {
  shipping = 0;
} else if (shipping === undefined) {
  console.log(BANNED_WARNING);
} else if ((shipping === 0) && (customers1 !== 1)) {
  console.log(FREE_WARNING);
}

// calculated the subtotal & the shipping to get the total
// consoled the price
const total = subtotal + shipping;
console.log('Price:', currency1, total);