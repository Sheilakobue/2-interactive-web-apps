// initialize the count as 0
//Listen for clicks on the increment button
//increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("counter-el")

console.log(countEl)

let count = 0

function increment() {

    count = count + 1
    countEl.innerText = count  
    
}
// create a function, save(), which logs out the count when its called
function save() {
    console.log(count)
}



