/*
## Intro:
Waits for loop to finish and returns promise.
Excellent to use with localStorage, for instance.

## Usage:
*/
async function loop(data) {
  let updated = [];
  return new Promise(async (resolve, reject) => {
    for (const [i, each] of data.entries()) {
      await new Promise((res) => setTimeout(res, Math.random() * 1000));

      updated.push(`${each}_${i}`);

      if (i >= data.length - 1) {
        resolve(updated);
      }
    }
  });
}

async function getData() {
  const data = await loop(["llama", "alpaca", "zebra"]);
  console.log("my data: ", data);
}

getData();
