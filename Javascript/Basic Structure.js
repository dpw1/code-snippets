/*
## Intro:
Basic structure for a Shopify Javascript customization.

## Usage:
*/
window.ezfy = window.ezfy || {};

ezfy = (function() {
    function _loadScript(src) {
        return new Promise(function(resolve, reject) {
            var s;
            s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }


    function credits() {
        var e = ["background: linear-gradient(-47deg,#8731e8,#4528dc)", "border: 1px solid #3E0E02", "color: white", "display: block", "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)", "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset", "line-height: 40px", "text-align: center", "font-weight: bold", "padding: 0px 5px"].join(";");

        function r(e) {
            return (e + "").replace(/&#\d+;/gm, function(e) {
                return String.fromCharCode(e.match(/\d+/gm)[0])
            })
        }
        var n = r(`&#67;&#117;&#115;&#116;&#111;&#109;&#32;&#99;&#111;&#100;&#101;&#100;&#32;&#98;&#121;&#32;&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#101;&#122;&#102;&#121;&#99;&#111;&#100;&#101;&#46;&#99;&#111;&#109;`);
        console.log(`%c ${n}`, e);
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

    function waitForElement(selector, delay = 1000, tries = 10) {
        const element = document.querySelector(selector);

        // creates a local variable w/ the name of the selector to keep track of all tries
        if (!window[`__${selector}`]) {
            window[`__${selector}`] = 0;
        }

        function _search() {
            return new Promise((resolve) => {
                window[`__${selector}`]++;
                console.log(window[`__${selector}`]);
                setTimeout(resolve, delay);
            });
        }

        //element not found, retry
        if (element === null) {
            if (window[`__${selector}`] >= tries) {
                window[`__${selector}`] = 0;
                return Promise.reject(null);
            }

            return _search().then(() => waitForElement(selector));
        } else {
            return Promise.resolve(element);
        }
    }

    function _addStyle(styleString) {
        const style = document.createElement('style');
        style.textContent = styleString;
        document.head.append(style);
    }

    function _observeDOM() {
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
            eventListenerSupported = window.addEventListener;

        return function(obj, callback) {
            if (MutationObserver) {
                // define a new observer
                var obs = new MutationObserver(function(mutations, observer) {
                    if (mutations[0].addedNodes.length || mutations[0].removedNodes.length)
                        callback();
                });

                obs.observe(obj, {
                    childList: true,
                    subtree: true
                });
            } else if (eventListenerSupported) {
                obj.addEventListener('DOMNodeInserted', callback, false);
                obj.addEventListener('DOMNodeRemoved', callback, false);
            }
        };
    }

    function hello() {
        console.log('EZFY is on')
    }

    return {
        init: function() {
            document.addEventListener("DOMContentLoaded", function() {
                hello();
            });

            window.onresize = function(event) {

            };

            window.onload = function() {

            }
        }
    };
})();


ezfy.init();