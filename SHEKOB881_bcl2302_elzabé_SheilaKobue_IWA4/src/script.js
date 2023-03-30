/*
 changed cost to let
 added the ;(semicolons)
 changed :(punctuation) to =(equal sign)
 changed status to stat
 */
let date = 2050;
let stat = 'parent';
let count = 0;

/*
first if statement 
added =(equal signs)
added the ;(semicolons)
added let to the date
removed let count =, and added =
and closed with ;(semicolon)
added :(punctuation mark to december)
changed status to stat
*/

if (date===2050) {
	console.log("January:", 'New Year’s Day');
	console.log("March:", 'Human Rights Day');
	let date = "April:"
    console.log(date, 'Family Day');
	console.log(date, 'Freedom Day');
	count +=4;

if (stat === "student") {
    console.log("June:", 'Youth Day');
    count += 1;
}

    console.log("August:", 'Women’s Day');
    console.log("September:", 'Heritage Day');
    date = "December:";
    console.log(date, 'Day of Reconciliation');
    count += 3;
         
if (stat === "parent") {
    
    console.log(date, 'Christmas Day')
    count += 1;
}   
    console.log(date, 'Day of Goodwill');
    count += 1;
}
    


console.log('Your status is:', stat)
console.log('The year is:', date)
console.log('The total holidays is:', count)
