
const date = new Date();


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const dayIndex = date.getDay();


const dayName = daysOfWeek[dayIndex];


const displayDay = document.querySelector(".day");
displayDay.innerHTML = dayName;

const hours =document.getElementById("hours");
const minutes =document.getElementById("minutes");
const seconds =document.getElementById("seconds");
let am_pm = document.getElementById("am-pm");

setInterval(() => {
    
let currnttime = new Date();
let hr = currnttime.getHours();
let min = currnttime.getMinutes();
let sec = currnttime.getSeconds();

if(hr<10){
    hr = "0" + hr;
}    
if(min<10){
    min = "0" + min;
}    
if(sec<10){
    sec = "0" + sec;
}
if(hr>12){
    hr = hr - 12;
    hr = "0" + hr;

}
am_pm.innerHTML = hr > 12 ? "am" : "pm";
hours.innerHTML = hr;
minutes.innerHTML = min;
seconds.innerHTML = sec;


},1000);
// updateClock();
