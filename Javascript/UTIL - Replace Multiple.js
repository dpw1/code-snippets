/*
## Intro:
Replace all.
Replace multiple characters in a string.

## Usage:
*/
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
