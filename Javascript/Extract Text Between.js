/*
## Intro:
Extracts the text between two strings.

## Usage:
*/
function extractTextBetween(text, start, end) {
    if (!start || !end) {
        throw new Error(`Please add a "start" and "end" parameter`);
    }

    if (text.split(start).length % 2 === 0) {
        throw new Error(`There is an uneven number of "starts" and "ends".`);
    }

    return text.split(start).filter(function(v, i) {
        return i % 2 !== 0;
    });
}

extractTextBetween(
`Lorem ipsum dolor sit amet consectetur, adipisicing elit.

[gist]a1[gist]Sunt dolor quis inventore necessitatibus, voluptatibus quisquam illo,
adipisci quasi

rem quae [gist]b1[gist] ipsum facilis non maxime illum? `, "[gist]", "[gist]"); //['a1', 'b1']