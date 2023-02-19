/*
## Intro:
Replace text between two strings.

## Usage:
*/
var text = `

This is the [replace]


second
[replace] 

time I drink orange juice.

`;

function replaceTextBetween(str, startStr, endStr, replacement) {
  var startIndex = str.indexOf(startStr);
  if (startIndex === -1) {
    return str;
  }
  var endIndex = str.indexOf(endStr, startIndex + startStr.length);
  if (endIndex === -1) {
    return str;
  }
  var startOffset = startIndex + startStr.length;
  var endOffset = endIndex + endStr.length;
  var before = str.substring(0, startOffset);
  var after = str.substring(endOffset);
  var between = str.substring(startOffset, endIndex);
  var lines = between.split("\n");
  var result =
    before +
    "\n" +
    replacement +
    "\n" +
    lines[lines.length - 1] +
    endStr +
    after;
  return result;
}

var result = replaceTextBetween(text, "[replace]", "[replace]", "amazing");
console.log(result);

/*



This is the [replace]
amazing
[replace] 

time I drink orange juice.

*/
