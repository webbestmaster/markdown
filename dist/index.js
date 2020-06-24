module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static/",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t,r){},function(e,t,r){"use strict";function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return e.trim().replace(/\s+/g," ")}function a(e){if(0===e.length)return!0;var t,r,o=(r=e,1,function(e){if(Array.isArray(e))return e}(r)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),1!==r.length);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}}(r)||n(r,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],i=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,a=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw a}}}}(e);try{for(i.s();!(t=i.n()).done;)if(t.value!==o)return!1}catch(e){i.e(e)}finally{i.f()}return!0}r.r(t),r.d(t,"markdown",(function(){return W}));var l=["# ","## ","### ","#### ","##### ","###### "],u=["> "],c=["---","***","___"],f=["```"],s=["+ ","- ","* "],y=[{selector:"0. ",regExpSearchSelector:/^\d+\.\s/,olAttributeType:"1"},{selector:"I. ",regExpSearchSelector:/^[CDILMVX]+\.\s/,olAttributeType:"I"},{selector:"i. ",regExpSearchSelector:/^[cdilmvx]+\.\s/,olAttributeType:"i"},{selector:"A. ",regExpSearchSelector:/^[A-Z]+\.\s/,olAttributeType:"A"},{selector:"a. ",regExpSearchSelector:/^[a-z]+\.\s/,olAttributeType:"a"}],d=[].concat(l,s,f,u).sort((function(e,t){return t.length-e.length})),v=[{selector:"**",openTag:"<b>",closeTag:"</b>",equal:/\*+/},{selector:"__",openTag:"<u>",closeTag:"</u>",equal:/_+/},{selector:"~~",openTag:"<strike>",closeTag:"</strike>",equal:/~+/},{selector:"_",openTag:"<i>",closeTag:"</i>",equal:/_+/},{selector:"*",openTag:"<i>",closeTag:"</i>",equal:/\*+/},{selector:"~",openTag:"<sub>",closeTag:"</sub>",equal:/~+/},{selector:"^",openTag:"<sup>",closeTag:"</sup>",equal:/\^+/},{selector:"`",openTag:'<code data-type="inline">',closeTag:"</code>",equal:/`+/}];function p(e,t,r){var n=e.selector,o=function e(t,r,n){var o=r.indexOf(t);if(-1===o)return null;var i=o+n,a=i in r?r[i]:null;return a?""===a.trimmedLine?e(t,r,n+(n>=0?1:-1)):a:null}(e,t,r);return!o||o.selector!==n}function b(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return h(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t,r,n,o,l){var u=e.trim(),s=""===u,v=s?o[o.length-1].spaceCount:e.search(/\S/),p=v<0?0:v,h=s?{selector:"",lineContent:""}:function(e){var t,r=b(d);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(e.startsWith(n))return{selector:n,lineContent:i(e.replace(n,""))}}}catch(e){r.e(e)}finally{r.f()}var o,l=b(c);try{for(l.s();!(o=l.n()).done;){var u=o.value;if(e.startsWith(u)&&a(e))return{selector:u,lineContent:""}}}catch(e){l.e(e)}finally{l.f()}var f,s=b(y);try{for(s.s();!(f=s.n()).done;){var v=f.value,p=v.selector,h=v.regExpSearchSelector;if(0===e.search(h))return{selector:p,lineContent:i(e.replace(h,""))}}}catch(e){s.e(e)}finally{s.f()}return{selector:"",lineContent:i(e)}}(u),m=h.selector,g=h.lineContent,S={lineIndex:t,spaceCount:p,selector:m,line:s?"":e,trimmedLine:u,lineContent:g,childList:[],additionalLineList:[],useLineBreak:l.useLineBreak};if(f.includes(m)){if(l.codeLineData&&""===g)return void(l.codeLineData=null);l.codeLineData=S}var w=l.codeLineData;if(w&&w!==S)w.additionalLineList.push(S.line);else{if(""===S.selector&&g.length>0){var A=o.length-1,j=A in o?o[A]:null;if(j&&j.lineContent.length>0)return void j.additionalLineList.push(g)}(function(e,t){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(n.spaceCount<e.spaceCount)return n}return e})(S,o).childList.push(S),o.push(S)}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=/<(\w+)[^>]*>[\S\s]*?<\/\1>/,w=/<\w+[^>]*?\s*\/>/;function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=/\s*?\\$/;function O(e){return e.replace(j,"<br/>")}function L(e,t){return t||j.test(e)}function T(e,t,r,n){var o="string"==typeof n?' title="'+n+'"':"",i="string"==typeof t?' alt="'+t+'"':"";return'<img loading="lazy" src="'.concat(r,'"').concat(i).concat(o,"/>")}var x=/!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,I=/\[([\S\s]*?)]\((\S+?)\)/g;function C(e,t,r){var n=t.length>0?t:r;return'<a href="'.concat(r,'">').concat(n,"</a>")}function E(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=P(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var q=/(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;function D(e,t){var r=t.selector,n=t.openTag,o=t.closeTag,i=r.length;if(!e.includes(r))return e;var a=function(e){var t,r,n=[],o=E(function(e){if(Array.isArray(e))return _(e)}(r=e.matchAll(q))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(r)||P(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());try{for(o.s();!(t=o.n()).done;){var i=t.value,a=i.index,l=a+i[0].length-1;n.push([a,l])}}catch(e){o.e(e)}finally{o.f()}return n}(e),l=function(e,t){var r=t.selector,n=t.equal,o=[],i=r.length;if(0===i)return o;for(var a=e.indexOf(r,0);-1!==a;){var l=e.slice(a).match(n);if(!l)return[];var u=k(l,1)[0].length;u===i&&o.push(a),a=e.indexOf(r,a+u)}return o.length%2==1?o.slice(0,-1):o}(e,t),u=(l=l.filter((function(e){var t,r,n,o,l,u,c,f,s=E(a);try{for(s.s();!(t=s.n()).done;){var y=t.value;if(r=[e,e+i-1],o=(n=k(y,2))[0],l=n[1],c=(u=k(r,2))[0],f=u[1],!(l<c||f<o))return!1}}catch(e){s.e(e)}finally{s.f()}return!0}))).length;if(0===u)return e;for(var c=e.slice(0,l[0]),f=1;f<=u;f+=1){var s=l[f],y=e.slice(l[f-1]+i,s);c+=f%2==1?n+y+o:y}return c}function M(e){return e.map(B).map(O).join("")}function B(e,t,r){var n=e.selector,o=e.childList,i=e.lineContent,a=e.additionalLineList,d=e.trimmedLine,b=function(e){var t=e.additionalLineList,r=e.useLineBreak;if(0===t.length)return"";for(var n=L(e.lineContent,r)?"<br/>":" ",o=t.length,i=o-1,a=new Array(o).fill(""),l=0;l<o;l+=1){var u=t[l];if(L(u,r)){var c=u.replace(j,"");a[l]=l===i?c:c+"<br/>"}else a[l]=l===i?u:u+" "}return n+a.join("")}(e),h=M(o),m=i.replace(j,"")+b;if(m=function(e){var t,r=e,n=E(v);try{for(n.s();!(t=n.n()).done;)r=D(r,t.value)}catch(e){n.e(e)}finally{n.f()}return r}(m=function(e){return e.replace(I,C)}(m=m.replace(x,T))),m+=h,function(e){return c.includes(e.selector)}(e))return"<hr/>";if(function(e){return f.includes(e.selector)}(e))return'<code data-lang="'.concat(i,'">').concat(a.join("\n"),"</code>");if(""===i&&0===o.length)return"";if(function(e){return l.includes(e.selector)}(e)){var O=n.length-1;return"<h".concat(O,">").concat(m,"</h").concat(O,">")}if(function(e){return u.includes(e.selector)}(e))return"<blockquote>".concat(m,"</blockquote>");if(function(e){return s.includes(e.selector)}(e)){var k=p(e,r,-1),P=p(e,r,1)?"</ul>":"";return"".concat(k?"<ul>":"","<li>").concat(m,"</li>").concat(P)}if(function(e){var t,r=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return g(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,void 0):void 0}}(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}(y);try{for(r.s();!(t=r.n()).done;)if(t.value.selector===e.selector)return!0}catch(e){r.e(e)}finally{r.f()}return!1}(e)){var _=p(e,r,-1),q=p(e,r,1),B=_?'<ol type="'.concat(function(e){var t,r=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return A(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,void 0):void 0}}(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}(y);try{for(r.s();!(t=r.n()).done;){var n=t.value,o=n.selector,i=n.olAttributeType;if(e===o)return i}}catch(e){r.e(e)}finally{r.f()}return"1"}(e.selector),'" start="').concat(function(e){var t=e.indexOf(".");return e.slice(0,t)}(d),'">'):"",$=q?"</ol>":"";return"".concat(B,"<li>").concat(m,"</li>").concat($)}return""===i||function(e){var t=e.trimmedLine;return 0===t.search(S)||0===t.search(w)}(e)||function(e){return""===e.replace(x,"").trim()}(i)?m:"<p>".concat(m,"</p>")}var $={useLineBreak:!1,wrapperClassName:"md-pro"};function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$,r=N(N({},$),t),n={lineIndex:-1,spaceCount:-1,selector:"",line:"",trimmedLine:"",lineContent:"",childList:[],additionalLineList:[],useLineBreak:r.useLineBreak},o=[n],i=[n],a={codeLineData:null,useLineBreak:r.useLineBreak};e.split("\n").forEach((function(e,t,r){m(e,t,0,0,i,a)}));var l=r.wrapperClassName,u=$.wrapperClassName,c=l===u?u:"".concat(u," ").concat(l);return'<div class="'.concat(c,'">').concat(M(o),"</div>")}t.default=W}]);