/*
## Intro:
Rule of three.
Useful for most of math operations.

## Example:
If a 50 euros product has 1.30 euros of tax, how much tax does a 42 euros product has?

## Usage:
*/
var ruleOfThree = ((a,b,c) =>  parseFloat((b*c)/a ));
ruleOfThree(50, 1.3, 42); //1.092

/*
## Intro:
Returns biggest int out of multiple values.

## Example:

## Usage:
*/
var biggestNumber = (...values) => Math.max(...values.map(e => parseInt(e)));
biggestNumber(2,3,4,5,1,24,2,4,35,34,65,56,6,7,67,45,345,45,46,34,7798,89,89,67,55) //7798

