/*
## Intro:
Extract all unique emails from a string.
Returns: 
- an array with unique emails;
- false.

## Usage:
*/
const extractEmails = (text) => {
	let emails = [];
	const emailsTemp = text.match(/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gi);
	
	emailsTemp.map(e => {
		e.match(/(.jpg|.jpeg|.png|.gif|.mov|.mp4|.mp3|.avi|.wmv)$/gmi) ? null : emails.push(e);
	});
	
    return !!emails ? [...new Set(emails)] : false;
}
//extracts emails from a webpage
extractEmails(document.body.innerHTML);