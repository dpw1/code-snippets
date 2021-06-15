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


## Premium Themes:

Highlight:
https://highlight-theme.myshopify.com/

Expanse:
https://expanse-theme-furniture.myshopify.com/

Streamline:
https://streamline-theme-core.myshopify.com

## Usage:
*/

const themes = {
  debut: {
    name: "Debut",
    url: "https://debut-theme-default.myshopify.com/",
  },

  narrative: {
    name: "Narrative",
    url: "https://narrative-theme-earthy.myshopify.com/",
  },

  express: {
    name: "Express",
    url: "https://express-theme-bistro.myshopify.com/",
  },

  venture: {
    name: "Venture",
    url: "https://venture-theme-snowboards.myshopify.com/",
  },

  boundless: {
    name: "Boundless",
    url: "https://boundless-theme-apparel.myshopify.com/",
  },

  simple: {
    name: "Simple",
    url: "https://simpletheme-light.myshopify.com/",
  },
};

function detectTheme() {
  let theme = null;

  const getThemeName = () =>
    window.BOOMR && window.BOOMR.themeName.trim().toLowerCase();

  const isDebut = (() => {
    let $navbar = document.querySelector(
      `[class='site-header__icons-wrapper'] [class*='site-header__cart'] > svg`,
    );

    if ($navbar) {
      return (theme = themes.debut);
    }
  })();

  const isNarrative = (() => {
    let $navbar = document.querySelector(
      `nav.site-header__section > [class*='navigation'] + .navigation`,
    );

    if ($navbar) {
      return (theme = "narrative");
    }
  })();

  const isExpress = (() => {
    let $navbar = document.querySelector(
      `button > .header__cart-indicator > svg > path[d]`,
    );

    if ($navbar) {
      return (theme = "express");
    }
  })();

  const isVenture = (() => {
    let $navbar = document.querySelector(
      `header[class] div + div > #SiteNavSearchCart`,
    );
    if ($navbar) {
      return (theme = "venture");
    }
  })();

  const isBoundless = (() => {
    let $navbar = document.querySelector(
      `.site-header > div > div + div + div[class*='grid__item'] .icon-cart`,
    );

    if ($navbar) {
      return (theme = "boundless");
    }
  })();

  const isSimple = (() => {
    let $navbar = document.querySelector(
      `[id*='section-header'] .top-bar > div + .grid__item svg[viewBox*='20 20']`,
    );

    if ($navbar) {
      return (theme = "simple");
    }
  })();

  const isBrooklyn = (() => {
    let $navbar = document.querySelector(
      `.site-header .site-nav .site-nav__item + .site-nav__item + .site-nav__item + .site-nav__item + .site-nav__item + .site-nav__item +.site-nav__item [class*='fallback']`,
    );

    if ($navbar) {
      return (theme = "brooklyn");
    }
  })();

  const isSupply = (() => {
    let $navbar = document.querySelector(
      `header.site-header form[action*='search'] + .header-cart-btn [class*='icon-cart']`,
    );

    if ($navbar) {
      return (theme = "supply");
    }
  })();

  const isMinimal = (() => {
    let $navbar = document.querySelector(
      `#shopify-section-header style + div .header-bar + .site-header [class*='display-table']`,
    );

    if ($navbar) {
      return (theme = "minimal");
    }
  })();

  const isHighlight = (() => {
    let $navbar = document.querySelector(
      `header.header-holder .menu-meta [class*='menu-meta'] svg`,
    );

    if ($navbar) {
      return (theme = "highlight");
    }
  })();

  const isExpanse = (() => {
    let $navbar = document.querySelector(
      `#SiteHeader[data-overlay] .header-layout [id*='Header']`,
    );

    if ($navbar) {
      return (theme = "expanse");
    }
  })();

  const isStreamline = (() => {
    let $body = document.querySelector(
      `body[data-type_header_capitalize][data-animate_images][data-transitions] [class*='thumb-menu']`,
    );

    if ($body) {
      return (theme = "streamline");
    }
  })();

  return theme;
}

detectTheme();
