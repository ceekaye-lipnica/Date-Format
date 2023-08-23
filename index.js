//Date object is used to work with date and time

let date = new Date();

/*

//gets the year
let year = date.getFullYear();

//gets the day of month
let day = date.getDate();

//gets the number of week
let dayOfWeek = date.getDay();

//gets number of month
let month = date.getMonth();

//gets the hours
let hour = date.getHours();

//gets the minutes
let minutes = date.getMinutes();

//gets the seconds
let seconds = date.getSeconds();

//gets milliseconds
let ms = date.getMilliseconds();

//convert to string
date = date.toLocaleString();

*/


document.getElementById("displayDate").innerHTML = formatDate(date);
document.getElementById("displayTime").innerHTML = formatTime(date);

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

function formatTime(date){
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    //decides if the time is AM or PM
    let amOrPM = hour >= 12 ? "PM" : "AM";

    //convert the military time to standard time 
    hour = (hour % 12) || 12;

    return `${hour}:${minutes}:${seconds} ${amOrPM}`
}