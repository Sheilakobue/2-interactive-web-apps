// nwabisa.js
// added export and const to the variable
// added const to the last statement
// removed the word private from the variables

export const firstName = "Nwabisa";
export const surname = "Gabe";
export const role = "CEO";

const  display= firstName + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display