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

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// Months and days are Zero index based
// If we pass 4 for month it will take month as a may

// let futureDate = new Date(2021, 10, 15, 5, 30, 0);

// Will check what is the current date and will add 10 days to it
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);

month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am `;

// Future time in ms

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  //   console.log(today);

  const t = futureTime - today;
  console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // Values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  console.log(oneDay);

  const oneHour = 60 * 60 * 1000;
  console.log(oneHour);

  const oneMinute = 60 * 1000;
  console.log(oneMinute);

  let days = t / oneDay;
  days = Math.floor(days);
  console.log(days);

  let hours = (t % oneDay) / oneHour;
  hours = Math.floor(hours);

  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //  Set values array;

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry this giveaway Has expired</h4>`;
  }
}

// Countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
