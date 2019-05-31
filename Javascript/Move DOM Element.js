/*
## Intro:
Move a div - or any other element - to another div.

## Usage:
*/

const moveDOMElement = (parent,child) => document.querySelector(parent).appendChild(document.querySelector(child))

moveDOMElement('#destination', '#source');

/* 
<div id="source">
...
</div>
*/

/* 
<div id="destination">
...
</div>
*/

/* 
<div id="destination">
  <div id="source">
    ...
  </div>
</div>
*/