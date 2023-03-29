// alex.js
//exported the variables
//added const
export const private firstname = "Alex"
export const private surname = "Naidoo"
export const public role = "Head of Marketing"

const private display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display