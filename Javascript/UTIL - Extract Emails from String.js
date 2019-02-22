/*
## Intro:
Extract all unique emails from a string.
Returns: 
- an array with unique emails;
- false.

## Usage:
*/
const extractEmails = (text) => {
	const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    return !!emails ? [...new Set(emails)] : false;
}
//extracts emails from a webpage
extractEmails(document.body.innerHTML);