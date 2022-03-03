/*
- if value in min is < to one day (24*60)
    if (value < 0)  
      hours = 24 + floor(value / 60)
    else 
      hours = 00:00 + floor(value / 60)
  
  
      - min = value % 60
  else
    - get rid of all complete days of the value (% dayInMin)
*/


const DAYS_IN_MIN = 24 * 60;

function timeOfDay(int) {
  if (Math.abs(int) > DAYS_IN_MIN) {
    int %= DAYS_IN_MIN;
  }
  let hours = Math.floor(int / 60);
  let minutes = int % 60;

  if (int < 0) {
    hours = append0(String(24 + hours));
    minutes = append0(String(60 + minutes));
  } else {
    hours = append0(String(0 + hours));
    minutes = append0(String(minutes));
  }

  return `${hours}:${minutes}`;

}

function append0(str) {
  if (str.length === 1) {
    return "0" + str;
  }
  return str;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");