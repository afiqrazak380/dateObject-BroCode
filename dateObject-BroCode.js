// date Object =  use to work with date and times

let date = new Date();
// let date = new Date(0); // reference point
// let date = new Date(2023, 0, 14);
// let date = new Date("January, 1, 2023, 00:12:45") // string representation

/* To call the current date, month, day and hours using "get" keywords
let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay() // 0(sunday), 1(Monday), 2(Tue)
let dayOfMonth = date.getDate() 
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let miliseconds = date.getMilliseconds()
*/

/* To set a date, month, day and hours using "set" keywords
date.setFullYear(2034)
date.setMonth(0) // 0(Jan), 1(Feb), 2(March)...
date.setDate(11)
date.setHours(4)
*/

// console.log(date) 

// date = date.toLocaleString()
// console.log(date) // 17/10/2023, 09:20:59
document.getElementById("myButton").innerHTML = customTime(date)

// custom date format function

function customDate(date){
  let year = date.getFullYear();
  let month = date.getMonth() +1;
  let day = date.getDate();

  return `${day}/${month}/${year}`
}

function customTime(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();
  let amOrPm = hours >= 12 ? "pm" : "am"; // using ternary operator to set am or pm

  hours = (hours % 12) || 12; // convert 24 format to 12 hour format

  return `${hours}:${minutes}:${sec} ${amOrPm}` // template literals
}

