/*
## Intro:
Waits for a specific element to appear on the DOM.

## Usage:
*/
const waitUntilElementExists = (selector, callback) => {
const el = document.querySelector(selector);

if (el){
	return callback(el);
}

setTimeout(() => waitUntilElementExists(selector, callback), 500);
}

waitUntilElementExists('.wait-for-me', el => console.log(el));