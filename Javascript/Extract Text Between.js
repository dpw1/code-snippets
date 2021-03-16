/*
## Intro:
Extracts the text between two strings.

## Usage:
*/
function extractTextBetween(text, start, end){
	if (!start || !end){
			throw new Error(`Please add a "start" and "end" parameter`);
		}
		
		return text.split(start)[1].split(end)[0]
}

extractTextBetween("have you ever seen a fluffy llama?", "have", "seen"); //you ever