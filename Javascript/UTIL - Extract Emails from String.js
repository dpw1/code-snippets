/*
## Intro:
Extract all unique emails from a string.
Returns: 
- an array with unique emails;
- false.

## Usage:
*/
const extractEmails = (text) => {
	const emails = text.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi);
    return !!emails ? [...new Set(emails)] : false;
}
//extracts emails from a webpage
extractEmails(document.body.innerHTML);