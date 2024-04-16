let data = document.getElementById("date");
let zegar = document.getElementById("clock");
date(data);

clock(zegar);

function date(e) {
  let date = new Date();
  console.log(date);
  let day = date.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday" /* , … */,
  ];
  let month = date.getMonth();
  let num = date.getDate();
  let year = date.getFullYear();
  month = month + 1;

  if (num < 10) {
    num = "0" + num;
  }

  if (month < 10) {
    month = "0" + month;
  }

  return (e.innerHTML =
    dayNames[day] + " " + num + "." + `${month}` + "." + year);
}

function clock(e) {
  setInterval(function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    return (e.innerHTML =
      "Current time:" + " " + hour + ":" + minutes + ":" + seconds);
  }, 1000);
}

