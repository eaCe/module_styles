(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,o){for(var r=0;r<o.length;r++){var n=o[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,l=void 0,l=function(t,o){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,o||"default");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}(i,"string"),"symbol"===e(l)?l:String(l)),n)}var i,l}$(document).on("rex:ready",(function(){new o}));var o=function(){function e(){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$slicePanels=document.querySelectorAll("ul.rex-slices .panel-default .panel-body"),this.stylesheet=rex.moduleStylesheet,this.stylesheet&&this.$slicePanels.length)for(var t=0;t<this.$slicePanels.length;t++)this.wrapSlices(this.$slicePanels[t])}var o,r,n;return o=e,(r=[{key:"wrapSlices",value:function(e){var t=e.innerHTML;e.attachShadow({mode:"open"}),e.shadowRoot,e.shadowRoot.host,e.shadowRoot.innerHTML=t;var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href",this.stylesheet),e.shadowRoot.appendChild(o)}}])&&t(o.prototype,r),n&&t(o,n),Object.defineProperty(o,"prototype",{writable:!1}),e}()})();