// johannes.js
// added export and const to the variables
// removed the word private to the statements

export const firstName = "Johannes"
export const surname = "Potgieter"
export const  role = "Intern"

const display= firstName + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display