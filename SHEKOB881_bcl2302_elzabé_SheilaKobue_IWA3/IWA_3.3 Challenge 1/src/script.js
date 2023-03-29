
// scripts.js
//imported configuration.js to script

import{company,year}from'./configuration.js'


const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message