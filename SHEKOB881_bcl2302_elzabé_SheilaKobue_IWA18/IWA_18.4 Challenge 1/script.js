// scripts.js

/* Gets and formats the current hour and minute values */

const hour = new Date().getHours().toString().padStart(2, '0')
const minutes = new Date().getMinutes().toString().padStart(2, '0')
const seconds = new Date().getSeconds().toString().padStart(2, '0')

/* Gets the paragraph HTML node and changes the text inside to show the above values */

const node = document.querySelector('p')
node.innerText = `JavaScript ${action} at ${hour}:${minutes}:${seconds}`