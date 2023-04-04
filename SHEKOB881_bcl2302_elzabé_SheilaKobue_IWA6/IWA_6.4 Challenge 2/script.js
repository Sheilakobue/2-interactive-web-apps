const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

// i have used the if statement to state that if the hour of the day and minute =0 then we calculate expense 
// or else if the the hour of day and minutes are not known(null) then no calculations as the result is undefined.

// i have added ()brackets to the if statement
// i have changed tax number to number using parseInt
// multiplied the salary by tax number

if (hourOfDay === 00 && minuteOfDay === 00)
{
 const taxAsDecimal = parseInt(tax) / 100;
 const startingAfterTax = salary * taxAsDecimal;
 const balance =salary - startingAfterTax - food - transport- rent;
	
console.log('R',balance.toFixed(2));

}
else {(hourOfDay !==null && minuteOfDay !== null)
   console.log('undefined')
}