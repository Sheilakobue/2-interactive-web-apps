const nickname= "";
const firstName = "Timothy";

//To fix the code to display either the nickname or the firstName, depending on which one is present, I had to use a ternary operator to conditionally choose the value to display.

console.log(`Good Morning, ${nickname ? nickname: firstName}!`)