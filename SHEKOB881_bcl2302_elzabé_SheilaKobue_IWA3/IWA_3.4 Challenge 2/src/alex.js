// alex.js
//exported the variables
//added const
//removed private from the variables

export const firstName = "Alex"
export const surname = "Naidoo"
export const role = "Head of Marketing"

const display= firstName + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display