/*
## Intro:
Generates an array containing only unique numbers.

Params:
Min - smallest number it can have;
Max - biggest number it can have;
Length - how many numbers;

## Usage:
*/

const randomUniqueNumbers = (min, max, length=1) => 
{
    const limit = max-min+1;
    if (min > max || max < min){
       throw new Error(`Parameter "min" has to be smaller than "max" and vice-versa.`)
    }
    else if (length > limit){
      throw new Error(`The length between ${min} and ${max} cannot exceed ${limit}.`)
    }

    let uniqueNumbers = [];
    let number;
    for(var i=0; i<length; i++){
        do
            number = Math.floor(Math.random() * limit) + min;
        while(uniqueNumbers.indexOf(number) !== -1);

       uniqueNumbers[i] = number;
    }

    return uniqueNumbers;
}

console.log(randomUniqueNumbers(20, 30, 3)); //[24, 27, 26]
console.log(randomUniqueNumbers(100, 1000, 5)) //[865, 438, 798, 247, 232]
console.log(randomUniqueNumbers(1, 5, 5)) //[5, 2, 1, 3, 4]
