/*
## Intro:
Asynchronously loads a script tag.

## Usage:
*/

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var s;
    s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function load() {
  if (!window.jQuery) {
    await loadScript(
      `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js`,
    );
  }

  console.log(jQuery);
}

load();
