module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t,r){},function(e,t,r){"use strict";function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return e.trim().replace(/\s+/g," ")}function a(e){if(0===e.length)return!0;var t,r,o=(r=e,1,function(e){if(Array.isArray(e))return e}(r)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),1!==r.length);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(r)||n(r,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],i=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(e);try{for(i.s();!(t=i.n()).done;)if(t.value!==o)return!1}catch(e){i.e(e)}finally{i.f()}return!0}function c(e,t,r){var n=e.selector,o=function e(t,r,n){var o=r.indexOf(t);if(-1===o)return null;var i=o+n,a=i in r?r[i]:null;return a?""===a.trimmedLine?e(t,r,n+(n>=0?1:-1)):a:null}(e,t,r);return!o||o.selector!==n}r.r(t),r.d(t,"markdown",(function(){return Y}));var u=["# ","## ","### ","#### ","##### ","###### "],l=["> "],f=["---","***","___"],s=["```"],y=["+ ","- ","* "],d=[{selector:"0. ",regExpSearchSelector:/^\d+\.\s/,olAttributeType:"1"},{selector:"I. ",regExpSearchSelector:/^[CDILMVX]+\.\s/,olAttributeType:"I"},{selector:"i. ",regExpSearchSelector:/^[cdilmvx]+\.\s/,olAttributeType:"i"},{selector:"A. ",regExpSearchSelector:/^[A-Z]+\.\s/,olAttributeType:"A"},{selector:"a. ",regExpSearchSelector:/^[a-z]+\.\s/,olAttributeType:"a"}],p=[].concat(u,y,s,l).sort((function(e,t){return t.length-e.length})),v=[{selector:"***",openTag:"<b><i>",closeTag:"</i></b>",equal:/\*+/},{selector:"**",openTag:"<b>",closeTag:"</b>",equal:/\*+/},{selector:"__",openTag:"<u>",closeTag:"</u>",equal:/_+/},{selector:"_",openTag:"<i>",closeTag:"</i>",equal:/_+/},{selector:"*",openTag:"<i>",closeTag:"</i>",equal:/\*+/},{selector:"~~",openTag:"<strike>",closeTag:"</strike>",equal:/~+/},{selector:"~",openTag:"<sub>",closeTag:"</sub>",equal:/~+/},{selector:"^",openTag:"<sup>",closeTag:"</sup>",equal:/\^+/},{selector:"`",openTag:'<code data-type="inline">',closeTag:"</code>",equal:/`+/}];function h(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return b(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t,r,n,o,c){var u=e.trim(),l=""===u,y=l?o[o.length-1].spaceCount:e.search(/\S/),v=y<0?0:y,b=l?{selector:"",lineContent:""}:function(e){var t,r=h(p);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(e.startsWith(n))return{selector:n,lineContent:i(e.replace(n,""))}}}catch(e){r.e(e)}finally{r.f()}var o,c=h(f);try{for(c.s();!(o=c.n()).done;){var u=o.value;if(e.startsWith(u)&&a(e))return{selector:u,lineContent:""}}}catch(e){c.e(e)}finally{c.f()}var l,s=h(d);try{for(s.s();!(l=s.n()).done;){var y=l.value,v=y.selector,b=y.regExpSearchSelector;if(0===e.search(b))return{selector:v,lineContent:i(e.replace(b,""))}}}catch(e){s.e(e)}finally{s.f()}return{selector:"",lineContent:i(e)}}(u),m=b.selector,g=b.lineContent,S={lineIndex:t,spaceCount:v,selector:m,line:l?"":e,trimmedLine:u,lineContent:g,childList:[],additionalLineList:[],config:c.config};if(s.includes(m)){if(c.codeLineData&&""===g)return c.codeLineData=null,!0;c.codeLineData=S}var w=c.codeLineData;if(w&&w!==S)return w.additionalLineList.push(S.line),!0;if(""===S.selector&&g.length>0){var A=o[o.length-1];if(A&&A.lineContent.length>0)return A.additionalLineList.push(g),!0}var j=function(e,t){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(n.spaceCount<e.spaceCount)return n}return null}(S,o);return!!j&&(j.childList.push(S),o.push(S),!0)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=/<(\w+)[^>]*>[\S\s]*?<\/\1>/,w=/<\w+[^>]*?\s*\/>/;function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=/\s*?\\$/;function O(e){return e.replace(j,"<br/>")}function T(e,t){return t||j.test(e)}function x(e,t,r,n){var o="string"==typeof n&&n.trim()?' title="'+n+'"':"",i="string"==typeof t&&t.trim()?' alt="'+t+'"':"";return'<img loading="lazy" src="'.concat(r,'"').concat(i).concat(o,"/>")}var I=/!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,L=/\[x]/gi,C=/\[\s]/g,E=/\[([\S\s]*?)]\((\S+?)\)/g;function k(e,t,r){var n=t.length>0?t:r;return'<a href="'.concat(r,'">').concat(n,"</a>")}function P(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=M(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||M(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){var r=q(e,2),n=r[0],o=r[1],i=q(t,2),a=i[0],c=i[1];return!(o<a||c<n)}function U(e,t){var r,n=_(t);try{for(n.s();!(r=n.n()).done;)if($(e,r.value))return!0}catch(e){n.e(e)}finally{n.f()}return!1}var N=/(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;function z(e){var t,r=[],n=_(P(e.matchAll(N)));try{for(n.s();!(t=n.n()).done;){var o=t.value,i=o.index,a=i+o[0].length-1;r.push([i,a])}}catch(e){n.e(e)}finally{n.f()}return r}var B=/(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/g,H=/(https?:\/\/[\w.]+\.\w+)/gi;function W(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=V(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function V(e,t){if(e){if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(e,t):void 0}}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z(e,t){var r=t.selector,n=t.openTag,o=t.closeTag,i=r.length;if(!e.includes(r))return e;var a=z(e),c=function(e,t){var r,n=t.selector,o=t.equal,i=[],a=n.length;if(0===a)return i;for(var c=e.indexOf(n,0);-1!==c;){var u=(r=e.slice(c).match(o),1,function(e){if(Array.isArray(e))return e}(r)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),1!==r.length);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(r)||V(r,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].length;u===a&&i.push(c),c=e.indexOf(n,c+u)}return i.length%2==1?i.slice(0,-1):i}(e,t),u=(c=c.filter((function(e){var t,r=W(a);try{for(r.s();!(t=r.n()).done;)if($(t.value,[e,e+i-1]))return!1}catch(e){r.e(e)}finally{r.f()}return!0}))).length;if(0===u)return e;for(var l=e.slice(0,c[0]),f=1;f<=u;f+=1){var s=c[f],y=e.slice(c[f-1]+i,s);l+=f%2==1?n+y+o:y}return l}function F(e){return e.map(G).map(O).join("")}function G(e,t,r){var n=e.selector,o=e.childList,i=e.lineContent,a=e.trimmedLine,p=e.additionalLineList,h=e.config,b=h.codeHighlight,m=h.parseLink,O=function(e){var t=e.additionalLineList,r=e.config.useLineBreak;if(0===t.length)return"";for(var n=T(e.lineContent,r)?"<br/>":" ",o=t.length,i=o-1,a=new Array(o).fill(""),c=0;c<o;c+=1){var u=t[c];if(T(u,r)){var l=u.replace(j,"");a[c]=c===i?l:l+"<br/>"}else a[c]=c===i?u:u+" "}return n+a.join("")}(e),q=F(o),M=i.replace(j,"")+O;if(M=function(e){return e.replace(E,k)}(M=M.replace(I,x)),m&&(M=function(e){var t=function(e){var t,r=[],n=_(P(e.matchAll(B)));try{for(n.s();!(t=n.n()).done;){var o=t.value,i=o.index,a=i+o[0].length-1;r.push([i,a])}}catch(e){n.e(e)}finally{n.f()}return r}(e),r=z(e);return e.replace(H,(function(e,n,o,i){var a=[o,o];return U(a,r)||U(a,t)?e:'<a href="'.concat(e,'">').concat(e,"</a>")}))}(M)),M=function(e){var t,r=e,n=W(v);try{for(n.s();!(t=n.n()).done;)r=Z(r,t.value)}catch(e){n.e(e)}finally{n.f()}return r}(M=function(e){return e.replace(L,'<input type="checkbox" checked="checked" disabled="disabled"/>').replace(C,'<input type="checkbox" disabled="disabled"/>')}(M)),M+=q,function(e){return f.includes(e.selector)}(e))return"<hr/>";if(function(e){return s.includes(e.selector)}(e)){var D=b(i,p.join("\n"));return i?'<code data-lang="'.concat(i,'">').concat(D,"</code>"):"<code>".concat(D,"</code>")}if(""===i&&0===o.length)return"";if(function(e){return u.includes(e.selector)}(e)){var $=n.length-1;return"<h".concat($,">").concat(M,"</h").concat($,">")}if(function(e){return l.includes(e.selector)}(e))return"<blockquote>".concat(M,"</blockquote>");if(function(e){return y.includes(e.selector)}(e)){var N=c(e,r,-1),V=c(e,r,1)?"</ul>":"";return"".concat(N?"<ul>":"","<li>").concat(M,"</li>").concat(V)}if(function(e){var t,r=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return g(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,void 0):void 0}}(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}(d);try{for(r.s();!(t=r.n()).done;)if(t.value.selector===e.selector)return!0}catch(e){r.e(e)}finally{r.f()}return!1}(e)){var X=c(e,r,-1),G=c(e,r,1),J=X?'<ol type="'.concat(function(e){var t,r=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return A(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,void 0):void 0}}(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}(d);try{for(r.s();!(t=r.n()).done;){var n=t.value,o=n.selector,i=n.olAttributeType;if(e===o)return i}}catch(e){r.e(e)}finally{r.f()}return"1"}(e.selector),'" start="').concat(function(e){var t=e.indexOf(".");return e.slice(0,t)}(a),'">'):"",K=G?"</ol>":"";return"".concat(J,"<li>").concat(M,"</li>").concat(K)}return""===i||function(e){var t=e.trimmedLine;return 0===t.search(S)||0===t.search(w)}(e)||function(e){return""===e.replace(I,"").trim()}(i)?M:"<p>".concat(M,"</p>")}var J={useLineBreak:!1,wrapperClassName:"md-pro",parseLink:!0,codeHighlight:function(e,t){return t}};function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J,r=Q(Q({},J),t),n={lineIndex:-1,spaceCount:-1,selector:"",line:"",trimmedLine:"",lineContent:"",childList:[],additionalLineList:[],config:r},o=[n],i=[n],a={codeLineData:null,config:r};e.split("\n").forEach((function(e,t,r){m(e,t,0,0,i,a)}));var c=r.wrapperClassName,u=J.wrapperClassName,l=c===u?u:"".concat(u," ").concat(c);return'<div class="'.concat(l,'">').concat(F(o),"</div>")}t.default=Y}]);