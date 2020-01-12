// // NEW CREATES NEW INSTANCE OF DATE FUNCITON AT CURRENT TIME CALLED
// // UNIX EPOCH - JANUARY 1ST 1970 00:00:00

// const now = new Date();
// const timestamp = now.getTime();
// //const now = new Date('January 21 2001 6:25:01')

// const myDate = new Date(timestamp);
// console.log(myDate.getFullYear());

// // CREATE TWO DATES IN THE PAST ( USE STRING FOR DATE )
// let dateOne = new Date('January 01 1993 00:00:01')
// let dateTwo = new Date('February 16 1993  00:00:02');
// // GET TIMESTAMPS FOR BOTH
// let timestampOne = dateOne.getTime();
// let timestampTwo = dateTwo.getTime();
// // FIGURE OUT WHICH IS FIRST AND PRINT THE TIME USEING TOSTRING

// if (timestampOne < timestampTwo) {
// 	console.log(dateOne.toString());
// } else {
// 	console.log(dateTwo.toString());
// }


// const now = moment();
// console.log(now.toString());

// now.subtract(1, 'week').subtract(20, 'days');
// console.log(now.format('DDMMMYYYY').toUpperCase());
// console.log(now.fromNow());

// const nowTimeStamp = now.valueOf();
// // console.log(moment(nowTimeStamp).toString());

// //CREATE A NEW MOMENT
// const currentTime = moment();

// // SET THE MONTH, DAY, AND YEAR TO YOUR BIRTHDAY
// currentTime.year(1993).month(1).day(16);

// // USE FORMAT TO PRINT IT USINE THE FOLLOWING FORMAT: MMM, D, YYYY
// console.log(currentTime.format('MMM D, YYYY'))








// ZERO-INDEXED DATE (I.E. 0 == JAN)
// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of the Month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Date: ${now.getSeconds()}`);



// Create
// localStorage.setItem('location', 'Cuba');
// localStorage.setItem('Fuck', 'Fuck It')

// Read
// console.log(localStorage.getItem(location));

// Update
// localStorage.setItem('location', 'Guantanamo Bay, Cuba');

// Delete
// localStorage.removeItem('location');

//localStorage.clear() //= deletes everything//
// LocalStorage only stores strings - must convert array to string and back.