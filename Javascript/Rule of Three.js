/*
## Intro:
Rule of three.
Useful for most of math operations.

## Example:
If a given product valued in 50 euros has 1.30 euros of tax, how much of tax does a 42 euros product has?

## Usage:
*/
const ruleOfThree = (a,b,c) =>  parseFloat((b*c)/a );
ruleOfThree(50, 1.3, 42); //1.092

