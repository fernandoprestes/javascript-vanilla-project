const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".subtitle");
const deadline = document.querySelector(".countdown");
const items = document.querySelectorAll(".countdown-card h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
//(year, month, day + 5 days in future, hours, minuts)
const futureDate = new Date(tempYear, tempMonth, tempDay + 2, 8, 1);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

//month [0-11] and weekday [0-6]
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `the ends on ${weekday}, ${date} ${month} ${year} ${hours}:${format(
  minutes
)} am`;

const futureTime = futureDate.getTime();

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}

function getRemaindingTime() {
  const today = new Date().getTime();

  const time = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4>sorry, timer expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);

getRemaindingTime();
