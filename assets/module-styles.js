(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,l=void 0,l=function(t,o){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,o||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}(i,"string"),"symbol"===e(l)?l:String(l)),r)}var i,l}$(document).on("rex:ready",(function(){new o}));var o=function(){function e(){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$slicePanels=document.querySelectorAll("ul.rex-slices .panel-default .panel-body"),this.stylesheet=rex.moduleStylesheet,this.stylesheet&&this.$slicePanels.length)for(var t=0;t<this.$slicePanels.length;t++)this.wrapSlices(this.$slicePanels[t])}var o,n,r;return o=e,(n=[{key:"wrapSlices",value:function(e){var t=e.innerHTML;e.innerHTML="",e.attachShadow({mode:"open"}),e.shadowRoot,e.shadowRoot.host,e.shadowRoot.innerHTML=t;var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.onload=function(){e.classList.add("module-styles-loaded")},o.setAttribute("href",this.stylesheet),e.shadowRoot.appendChild(o)}}])&&t(o.prototype,n),r&&t(o,r),Object.defineProperty(o,"prototype",{writable:!1}),e}()})();