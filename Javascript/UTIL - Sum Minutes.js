/*
## Intro:
Sum all HH:MM:SS values.
Please take a look at the examples below for clarification.

## Usage:
*/

function sumMinutes(values) {
    
  const validate = time => {
    if (time > 59 || time < 0) {
      throw new Error(
        "Hours, minutes and seconds values have to be between 0 and 59."
      );
    }
    return time;
  };

  const seconds = values
    .map(e => validate(Number(e.split(":").reverse()[0])))
    .reduce((a, b) => a + b);

  let minutes = values
    .map(e => Number(e.split(":").reverse()[1]))
    .reduce((a, b) => a + b);

  let hours = values
    .map(e =>
      e.split(":").reverse()[2] ? Number(e.split(":").reverse()[2]) : 0
    )
    .reduce((a, b) => a + b);

  minutes *= 60;
  hours *= 3600;

  let result = new Date((hours + minutes + seconds) * 1000)
    .toISOString()
    .substr(11, 8);

  return result.split(":").reverse()[2] === "00" ? result.slice(3) : result;
}

/* examples */
const seconds = ["00:03", "00:9"];
const mins = ["01:20", "1:23"];
const hours = ["00:03:59", "02:05:01"];
const mix = ["00:04:58", "10:00"];

console.log(sumMinutes(seconds)); //'01:02'
console.log(sumMinutes(mins)); //'02:43'
console.log(sumMinutes(hours)); //'02:09:00'
console.log(sumMinutes(mix)); //'14:58'