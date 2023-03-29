// johannes.js

export const private firstname = "Johannes"
export const private surname = "Potgieter"
export const public role = "Intern"

const private display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display