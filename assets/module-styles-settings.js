(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(i,"string"),"symbol"===e(a)?a:String(a)),o)}var i,a}$(document).on("rex:ready",(function(){new n}));var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stylesheet=rex.moduleStylesheet,this.flag=!1,this.stylesheet}var n,r,o;return n=e,(r=[{key:"checkStylesheet",value:function(){var e=this,t=new XMLHttpRequest;t.open("GET",this.stylesheet,!0),t.onreadystatechange=function(){if(4!==t.readyState&&200!==t.status&&!e.flag){var n=document.createElement("div");n.innerHTML='<div class="alert alert-warning">Die Stylesheet-Datei konnte nicht gefunden werden.</div>',document.querySelector(".module-styles-settings").parentElement.prepend(n),e.flag=!0}},t.send()}}])&&t(n.prototype,r),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}()})();