/*
## Intro:
Detects which free theme the Shopify website is using.
If it's not a free theme it returns null.

You can use the following websites to test it out:

Debut:
https://debut-theme-default.myshopify.com/

Narrative:
https://narrative-theme-earthy.myshopify.com/

Express:
https://express-theme-bistro.myshopify.com/

Venture:
https://venture-theme-snowboards.myshopify.com/

Boundless:
https://boundless-theme-apparel.myshopify.com/

Simple:
https://simpletheme-light.myshopify.com/

Brooklyn:
https://brooklyn-theme-classic.myshopify.com/

Supply:
https://supply-electronics.myshopify.com/

Minimal:
https://minimal-vintage-theme.myshopify.com/

## Usage:
*/

function detectTheme() {
	let theme = null;

	const getThemeName = () =>
		window.BOOMR && window.BOOMR.themeName.trim().toLowerCase();

	const isDebut = (() => {
		if (getThemeName() === "debut") {
			return (theme = "debut");
		}

		let $navbar = document.querySelector(
			`[class='site-header__icons-wrapper'] [class*='site-header__cart'] > svg`
		);

		if ($navbar) {
			return (theme = "debut");
		}
	})();

	const isNarrative = (() => {
		if (getThemeName() === "narrative") {
			return (theme = "narrative");
		}

		let $navbar = document.querySelector(
			`nav.site-header__section > [class*='navigation'] + .navigation`
		);

		if ($navbar) {
			return (theme = "narrative");
		}
	})();

	const isExpress = (() => {
		if (getThemeName() === "express") {
			return (theme = "express");
		}

		let $navbar = document.querySelector(
			`button > .header__cart-indicator > svg > path[d]`
		);

		if ($navbar) {
			return (theme = "express");
		}
	})();

	const isVenture = (() => {
		if (getThemeName() === "venture") {
			return (theme = "venture");
		}

		let $navbar = document.querySelector(
			`header[class] div + div > #SiteNavSearchCart`
		);

		if ($navbar) {
			return (theme = "venture");
		}
	})();

	const isBoundless = (() => {
		if (getThemeName() === "boundless") {
			return (theme = "boundless");
		}

		let $navbar = document.querySelector(
			`.site-header > div > div + div + div[class*='grid__item'] .icon-cart`
		);

		if ($navbar) {
			return (theme = "boundless");
		}
	})();

	const isSimple = (() => {
		if (getThemeName() === "simple") {
			return (theme = "simple");
		}

		let $navbar = document.querySelector(
			`[id*='section-header'] .top-bar > div + .grid__item svg[viewBox*='20 20']`
		);

		if ($navbar) {
			return (theme = "simple");
		}
	})();

	const isBrooklyn = (() => {
		if (getThemeName() === "brooklyn") {
			return (theme = "brooklyn");
		}

		let $navbar = document.querySelector(
			`.site-header .site-nav .site-nav__item + .site-nav__item + .site-nav__item + .site-nav__item + .site-nav__item + .site-nav__item +.site-nav__item [class*='fallback']`
		);

		if ($navbar) {
			return (theme = "brooklyn");
		}
	})();

	const isSupply = (() => {
		if (getThemeName() === "supply") {
			return (theme = "supply");
		}

		let $navbar = document.querySelector(
			`header.site-header form[action*='search'] + .header-cart-btn [class*='icon-cart']`
		);

		if ($navbar) {
			return (theme = "supply");
		}
	})();
	
		const isMinimal = (() => {
		if (getThemeName() === "minimal") {
			return (theme = "minimal");
		}

		let $navbar = document.querySelector(
			`#shopify-section-header style + div .header-bar + .site-header [class*='display-table']`
		);

		if ($navbar) {
			return (theme = "minimal");
		}
	})();
	


	return theme;
}

detectTheme();
