const currentYear = new Date().getFullYear()
const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}
const christmas = 6
const futureId = 9
// Do not change code above this comment
//check whether an item has been assigned to the 9 key, if so, it should log the name of the holiday. If nothing has been assigned yet, then the following should be logged: ID 9 not created yet

// stored the variable in an array and used the $ to call out the variable.
console.log(holidays[futureId]|| `ID ${futureId} not created yet`)

// You are required to create a version of the Christmas object that has the date set to midnight.
//it is also requested that i change the name from Christmas to X-mas
//Create a copy of the Christmas object and update the name and date
const christmasCopy = { ...holidays[6] }
// updated the christmasCopy variable 
christmasCopy.name = 'X-mas Day'
christmasCopy.date.setHours(0)
christmasCopy.date.setMinutes(0)

// Check if the new date is earlier than the current date and log the result
const isEarlier = christmasCopy.date.getTime() < holidays[6].date.getTime()
console.log('New date is earlier:', isEarlier)


//Only if the date is earlier should it apply the change to copied.

//because the new date is false I log the changes made to the copied object

console.log(`ID change: false`)
console.log(`Name change: ${christmasCopy.name}`)
console.log(`Date change: ${christmasCopy.date.getDate().toString().padStart(2, '0')}/${(christmasCopy.date.getMonth() + 1).toString().padStart(2, '0')}/${christmasCopy.date.getFullYear()}`)

// Log the first and last holidays of the year and a randomly selected holiday date
const holidayDates = Object.values(holidays).map(holiday => holiday.date)
const firstHoliday = new Date(Math.min(holidayDates[3]))
const lastHoliday = new Date(Math.max(holidayDates[2]))
const randomHoliday = holidayDates[Math.floor(Math.random() * holidayDates.length)]
console.log(`First holiday of the year: ${firstHoliday.getDate().toString().padStart(2, '0')}/${(firstHoliday.getMonth() +1).toString().padStart(2, '0')}/${firstHoliday.getFullYear()}`)
console.log(`Last holiday of the year: ${lastHoliday.getDate().toString().padStart(2, '0')}/${(lastHoliday.getMonth() + 1).toString().padStart(2, '0')}/${lastHoliday.getFullYear()}`)
console.log(`Random holiday: ${randomHoliday.getDate().toString().padStart(2, '0')}/${(randomHoliday.getMonth() + 1)}/${randomHoliday.getFullYear()}`)