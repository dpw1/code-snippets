/*
## Intro:
Basic structure for a Shopify Javascript customization.

## Usage:
*/
window.ezfy = window.ezfy || {};

ezfy = (function() {
    const selectors = {
        example: '#example',
    };

    function _moveDOMElement(parent, child) {
        document.querySelector(parent).appendChild(document.querySelector(child));
    }

    function _isProductPage() {
        return /product/.test(window.location.href);
    }

    function _isCartPage() {
        return /cart/.test(window.location.href);
    }

    function _waitUntilElementExists(selector, callback) {
        const el = document.querySelector(selector);

        if (el) {
            return callback(el);
        }

        setTimeout(() => _waitUntilElementExists(selector, callback), 500);
    }

    function _addStyle(styleString) {
        const style = document.createElement('style');
        style.textContent = styleString;
        document.head.append(style);
    }

    function _observeDOM() {
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
			eventListenerSupported = window.addEventListener;

		return function (obj, callback) {
			if (MutationObserver) {
				// define a new observer
				var obs = new MutationObserver(function (mutations, observer) {
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