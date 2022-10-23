/*
## Intro:
Basic structure for a Shopify Javascript customization.

## Usage:
*/
window.ezfy = window.ezfy || {};

ezfy = (function () {
  function _loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s;
      s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function _extractTextBetween(text, start, end) {
    if (!start || !end) {
      throw new Error(`Please add a "start" and "end" parameter`);
    }

    return text.split(start)[1].split(end)[0];
  }

  function _loadStyle(src) {
    return new Promise(function (resolve, reject) {
      let link = document.createElement("link");
      link.href = src;
      link.rel = "stylesheet";

      link.onload = () => resolve(link);
      link.onerror = () => reject(new Error(`Style load error for ${src}`));

      document.head.append(link);
    });
  }

  function _moveDOMElement(parent, child) {
    document.querySelector(parent).appendChild(document.querySelector(child));
  }

  function _isProductPage() {
    return /product/.test(window.location.href);
  }

  function _isCartPage() {
    return /cart/.test(window.location.href);
  }

  function isCollectionsPage() {
    return /\/collections\/.*(\/)?$/.test(window.location.pathname);
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function _waitForElement(selector, delay = 50, tries = 100) {
    const element = document.querySelector(selector);

    if (!window[`__${selector}`]) {
      window[`__${selector}`] = 0;
      window[`__${selector}__delay`] = delay;
      window[`__${selector}__tries`] = tries;
    }

    function _search() {
      return new Promise((resolve) => {
        window[`__${selector}`]++;
        setTimeout(resolve, window[`__${selector}__delay`]);
      });
    }

    if (element === null) {
      if (window[`__${selector}`] >= window[`__${selector}__tries`]) {
        window[`__${selector}`] = 0;
        return Promise.resolve(null);
      }

      return _search().then(() => _waitForElement(selector));
    } else {
      return Promise.resolve(element);
    }
  }

  function _addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }

  function hello() {
    console.log("EZFY is on");
  }

  return {
    init: function () {
      document.addEventListener("DOMContentLoaded", function () {
        hello();
      });

      window.addEventListener("resize", function () {});

      window.addEventListener("load", function () {});

      window.addEventListener("scroll", function () {});
    },
  };
})();

ezfy.init();
