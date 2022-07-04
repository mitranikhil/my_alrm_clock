console.log("It is my clock");

function updateClock(){
  // Get the currentTime Date
  let currentTime = new Date();
  // Get the timeZone of india
  currentTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  
  // Get the Time in different variables
  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  
  // Show the minutes and seconds if less than 0 or not
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  
  // Show AM or PM in the DOM
  let am_pm = (currentHour > 12) ? "AM" : "PM";
   
  // Set the hour variable if greater than 12 to substract the hour and 0 to convet into 12 
  currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
  currentHour = (currentHour == 0) ? 12 : currentHour;
  
  // Set the time in a string
  let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + am_pm;
  
  // Show the Time in Your DOM
  let clock = document.getElementById("clock");
  clock.innerHTML = currentTimeStr;
}