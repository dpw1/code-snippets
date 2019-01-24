/*
## Intro:
Replace all.
Replace all characters from a string based on an object.

## Usage:
*/
/* Prototype */
String.prototype.replaceAll = function(obj) {
	let finalString = '';
	let word = this;
	for (let each of word){
		for (const o in obj){
			const value = obj[o];
			if (each == o){
				each = value;
			}
		}
		finalString += each;
	}
	
	return finalString;
};

'abc'.replaceAll({'a':'x', 'b':'y'}); //"xyc"

/* Function */
