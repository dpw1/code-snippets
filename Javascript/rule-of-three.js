/*
Intro:
Rule of three.
Useful for most of math operations.
*/

/*
Example:
If a 50 euros product has 1.30 euros of tax, how much tax does a 42 euros product has?
*/

/* Usage */
var ruleOfThree = ((a,b,c) =>  parseFloat((b*c)/a ));
ruleOfThree(50, 1.3, 42); //1.092



