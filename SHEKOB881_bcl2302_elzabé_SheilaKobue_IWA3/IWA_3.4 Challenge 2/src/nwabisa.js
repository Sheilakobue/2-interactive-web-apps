// nwabisa.js
// added export and const to the variable
// added const to the last statement

export const private firstname = "Nwabisa"
export const private surname = "Gabe"
export const public role = "CEO"

const private display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display