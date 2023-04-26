const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  // Only edit below this comment
  //defines a function called createHtml which takes an argument called athlete.
  // this function creates an HTML element to display information about the athlete.
  
  const createHtml = (athlete) => {
  
    //Inside the function, I first created four variables: firstName, surname, id, and 'races'.
    //I have declared a constant variable called firstName and assigns it the value of the firstName property of an object located at the athlete index of an array called data.response.data.
    //These variables are assigned values from the data object
    
    const firstName = data.response.data[athlete].firstName;
    const surname = data.response.data[athlete].surname;
    const id = data.response.data[athlete].id;
    //The races variable is assigned the length of the races array, which is a property of the athlete object
    const races = (data.response.data[athlete].races).length
    //then created a Date object using the date of the last race in the races array of the athlete object.
    const date = new Date(data.response.data[athlete].races[races-1].date)
    //the time variable is assigned the value of the time of the last race in the races array of the athlete object.
    const time = data.response.data[athlete].races[races-1].time;
    //create a new document fragment to hold the content.
    const fragment = document.createDocumentFragment();
    //create a new h2 element. and the title.textContent = id: set the text content of the h2 element to the id parameter passed to the function.
    let title = document.createElement('h2');
    title.textContent = id
    //append the h2 element to the document fragment.
    fragment.appendChild(title);
    //create a new dl element.
    const list = document.createElement('dl');
    //get the day of the month from a Date object called date.
    const day =  date.getDate()
    //get the month name from the MONTHS array, based on the month number from date.
    const month = MONTHS[date.getMonth()];
    //get the year from `date`.
    const year = date.getFullYear();
    console.log(month)
    let sum = 0;
    //initialize a counter variable to zero
    let i = 0;
    // start a loop that will perform through an array called time.
    while ( i < time.length ) {
      //add the current element of time to the sum variable.
      //i++: increment(increase) the counter variable.
      sum += time[i]
      i++
    }
    //calculate the minutes portion of the total time by taking the remainder of sum divided by 60.
    const minutes = sum % 60;
    //calculate the hours portion of the total time by subtracting the minutes from sum and dividing by 60.
    const hours = (sum - minutes) / 60;
    
    //innerHTML to modify the HTML element
    //This sets the content of the list to a string of HTML code using a template literal
    //and set properties of the list variable.
    //firstName and surname: These are concatenated together to display the athlete's full name.
    // ive also used the notation ${} to insert strings

    list.innerHTML = /* html */ `
        <dt>Athlete: ${firstName +' '+ surname}</dt>
        <dt>Total Races: ${races}</dt>
        <dt>Event Date (Latest): ${day.toString().padStart(2, '0')+' '+ month +' '+ year}</dt>
        <dt>Total Time (Latest): ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dt>
      `;
      //created a new fragment object to hold the list element and append (add to the end) the list element to the `fragment`
    fragment.appendChild(list);
    //the function returns the fragment, This allows to insert the newly created list element and its content into the HTML document.
    return fragment;
  }
  // [NM372], [SV782] = data
  //ive used the querySelector method to select HTML elements with specific attribute with a given value.

   //The attribute selector [data-athlete="NM372"] selects an element with the data-athlete attribute equal to "NM372",
   
  //and then used the appendChild method to add items to the end of the list.
  document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml('NM372'));
  document.querySelector('[data-athlete ="SV782"]').appendChild(createHtml('SV782'));