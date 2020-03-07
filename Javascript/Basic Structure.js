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

    function hello() {
        console.log('ezfy working');
    }

    return {
        init: function() {
            document.addEventListener("DOMContentLoaded", function() {

                hello();

                window.onresize = function(event) {
                    hello();
                };
            });
        }
    };
})();


ezfy.init();