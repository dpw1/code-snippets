/*
## Intro:
Remove images and CSS from page.
Will remove all images and stylesheets found in a page.

## Usage:
*/
const removeImagesAndCSS = _ => {
	const imgs = document.querySelectorAll('img');

	for (let img of imgs) {
		img.remove();
	}
	for (const each of document.styleSheets){
		each.disabled = true;
	}
	document.querySelector("head").remove();
}

removeImagesAndCSS();