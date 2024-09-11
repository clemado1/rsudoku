(()=>{"use strict";var n={408:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(601),i=e.n(r),o=e(314),a=e.n(o)()(i());a.push([n.id,"/* src/styles.css */\n/* ! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com */\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.-bottom-20 {\n  bottom: -5rem;\n}\n.right-5 {\n  right: 1.25rem;\n}\n.mr-10 {\n  margin-right: 2.5rem;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.max-h-full {\n  max-height: 100%;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-\\[70vmin\\] {\n  max-width: 70vmin;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.fill-current {\n  fill: currentColor;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n\n.difficulty-btn {\n  border-radius: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n  --tw-ring-color: rgb(255 255 255 / 0.6);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #60a5fa;\n}\n\n.difficulty-btn:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n@media (min-width: 768px) {\n  .difficulty-btn {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n\n.difficulty-btn.active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.difficulty-btn.inactive {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n\n.difficulty-btn.inactive:hover {\n  --tw-text-opacity: 1;\n  color: rgb(147 197 253 / var(--tw-text-opacity));\n}\n\n.sidebar-btn {\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  padding: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n\n.sidebar-btn:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(96 165 250 / var(--tw-text-opacity));\n}\n\n.number-btn {\n  border-radius: 0.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  padding: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.number-btn:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n\n@media (min-width: 640px) {\n  .number-btn {\n    padding: 0.875rem;\n  }\n  .sm\\:-right-10 {\n    right: -2.5rem;\n  }\n  .sm\\:top-2 {\n    top: 0.5rem;\n  }\n  .sm\\:mr-0 {\n    margin-right: 0px;\n  }\n  .sm\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:max-w-\\[60vmin\\] {\n    max-width: 60vmin;\n  }\n}",""]);const s=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var f=e(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var g=i(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=e(o[a]);t[s].references--}for(var c=r(n,i),l=0;l<o.length;l++){var d=e(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,i&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},167:(n,t,e)=>{n.exports=e.p+"6280bd47f715a7a683ce.wasm"}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),i=e.n(r),o=e(825),a=e.n(o),s=e(659),c=e.n(s),l=e(56),d=e.n(l),u=e(540),f=e.n(u),h=e(113),g=e.n(h),w=e(408),p={};let b;p.styleTagTransform=g(),p.setAttributes=d(),p.insert=c().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=f(),i()(w.A,p),w.A&&w.A.locals&&w.A.locals;const m=new Array(128).fill(void 0);function _(n){return m[n]}m.push(void 0,null,!0,!1);let y=m.length;function v(n){const t=_(n);return function(n){n<132||(m[n]=y,y=n)}(n),t}const x="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&x.decode();let k=null;function S(n,t){return n>>>=0,x.decode((null!==k&&0!==k.byteLength||(k=new Uint8Array(b.memory.buffer)),k).subarray(n,n+t))}function C(n){y===m.length&&m.push(m.length+1);const t=y;return y=m[t],m[t]=n,t}function z(n){return null==n}function E(n,t){try{return n.apply(this,t)}catch(n){b.__wbindgen_exn_store(C(n))}}const A=Object.freeze({Empty:0,0:"Empty",Prefilled:1,1:"Prefilled",PlayerFilled:2,2:"PlayerFilled",Invalid:3,3:"Invalid"}),R=Object.freeze({VeryEasy:1,1:"VeryEasy",Easy:2,2:"Easy",Medium:3,3:"Medium",Hard:4,4:"Hard",VeryHard:5,5:"VeryHard"}),T="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>b.__wbg_cell_free(n>>>0,1)));class I{static __wrap(n){n>>>=0;const t=Object.create(I.prototype);return t.__wbg_ptr=n,T.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,T.unregister(this),n}free(){const n=this.__destroy_into_raw();b.__wbg_cell_free(n,0)}static new(n,t){const e=b.cell_new(n,z(t)?16777215:t);return I.__wrap(e)}get_state(){return b.cell_get_state(this.__wbg_ptr)}get_value(){const n=b.cell_get_value(this.__wbg_ptr);return 16777215===n?void 0:n}clear(){b.cell_clear(this.__wbg_ptr)}set(n,t){b.cell_set(this.__wbg_ptr,n,z(t)?16777215:t)}is_empty(){return 0!==b.cell_is_empty(this.__wbg_ptr)}}const j="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>b.__wbg_sudokugame_free(n>>>0,1)));class M{static __wrap(n){n>>>=0;const t=Object.create(M.prototype);return t.__wbg_ptr=n,j.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,j.unregister(this),n}free(){const n=this.__destroy_into_raw();b.__wbg_sudokugame_free(n,0)}static new(n){const t=b.sudokugame_new(n);return M.__wrap(t)}get_cell(n,t){const e=b.sudokugame_get_cell(this.__wbg_ptr,n,t);return I.__wrap(e)}set_cell(n,t,e){return 0!==b.sudokugame_set_cell(this.__wbg_ptr,n,t,z(e)?16777215:e)}clear_cell(n,t){return 0!==b.sudokugame_clear_cell(this.__wbg_ptr,n,t)}is_solved(){return 0!==b.sudokugame_is_solved(this.__wbg_ptr)}clear(){b.sudokugame_clear(this.__wbg_ptr)}is_cell_prefilled(n,t){return 0!==b.sudokugame_is_cell_prefilled(this.__wbg_ptr,n,t)}}function F(){const n={wbg:{}};return n.wbg.__wbg_crypto_1d1f22824a6a080c=function(n){return C(_(n).crypto)},n.wbg.__wbindgen_is_object=function(n){const t=_(n);return"object"==typeof t&&null!==t},n.wbg.__wbg_process_4a72847cc503995b=function(n){return C(_(n).process)},n.wbg.__wbg_versions_f686565e586dd935=function(n){return C(_(n).versions)},n.wbg.__wbg_node_104a2ff8d6ea03a2=function(n){return C(_(n).node)},n.wbg.__wbindgen_is_string=function(n){return"string"==typeof _(n)},n.wbg.__wbindgen_object_drop_ref=function(n){v(n)},n.wbg.__wbg_require_cca90b1a94a0255b=function(){return E((function(){return C(module.require)}),arguments)},n.wbg.__wbindgen_is_function=function(n){return"function"==typeof _(n)},n.wbg.__wbindgen_string_new=function(n,t){return C(S(n,t))},n.wbg.__wbg_msCrypto_eb05e62b530a1508=function(n){return C(_(n).msCrypto)},n.wbg.__wbg_randomFillSync_5c9c955aa56b6049=function(){return E((function(n,t){_(n).randomFillSync(v(t))}),arguments)},n.wbg.__wbg_getRandomValues_3aa56aa6edec874c=function(){return E((function(n,t){_(n).getRandomValues(_(t))}),arguments)},n.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(n,t){return C(new Function(S(n,t)))},n.wbg.__wbg_call_1084a111329e68ce=function(){return E((function(n,t){return C(_(n).call(_(t)))}),arguments)},n.wbg.__wbindgen_object_clone_ref=function(n){return C(_(n))},n.wbg.__wbg_self_3093d5d1f7bcb682=function(){return E((function(){return C(self.self)}),arguments)},n.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return E((function(){return C(window.window)}),arguments)},n.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return E((function(){return C(globalThis.globalThis)}),arguments)},n.wbg.__wbg_global_e5a3fe56f8be9485=function(){return E((function(){return C(global.global)}),arguments)},n.wbg.__wbindgen_is_undefined=function(n){return void 0===_(n)},n.wbg.__wbg_call_89af060b4e1523f2=function(){return E((function(n,t,e){return C(_(n).call(_(t),_(e)))}),arguments)},n.wbg.__wbg_buffer_b7b08af79b0b0974=function(n){return C(_(n).buffer)},n.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9=function(n,t,e){return C(new Uint8Array(_(n),t>>>0,e>>>0))},n.wbg.__wbg_new_ea1883e1e5e86686=function(n){return C(new Uint8Array(_(n)))},n.wbg.__wbg_set_d1e79e2388520f18=function(n,t,e){_(n).set(_(t),e>>>0)},n.wbg.__wbg_newwithlength_ec548f448387c968=function(n){return C(new Uint8Array(n>>>0))},n.wbg.__wbg_subarray_7c2e3576afe181d1=function(n,t,e){return C(_(n).subarray(t>>>0,e>>>0))},n.wbg.__wbindgen_throw=function(n,t){throw new Error(S(n,t))},n.wbg.__wbindgen_memory=function(){return C(b.memory)},n}async function L(n){if(void 0!==b)return b;void 0!==n&&Object.getPrototypeOf(n)===Object.prototype?({module_or_path:n}=n):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===n&&(n=new URL(e(167),e.b));const t=F();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:r,module:i}=await async function(n,t){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,t)}catch(t){if("application/wasm"==n.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const e=await n.arrayBuffer();return await WebAssembly.instantiate(e,t)}{const e=await WebAssembly.instantiate(n,t);return e instanceof WebAssembly.Instance?{instance:e,module:n}:e}}(await n,t);return function(n,t){return b=n.exports,L.__wbindgen_wasm_module=t,k=null,b}(r,i)}const P=L,U=2e3,O=20,B=1960,N=B/9;(new class{constructor(){this.game=null,this.difficulty=R.Easy,this.canvas=null,this.ctx=null,this.selectedCell=null}async init(){await P(),this.bindEvents(),this.startInitialGame()}bindEvents(){document.querySelectorAll(".difficulty-btn").forEach((n=>{n.addEventListener("click",this.pickDifficulty.bind(this))})),document.getElementById("new-game").addEventListener("click",this.newGame.bind(this)),document.getElementById("clear-game").addEventListener("click",this.clearGame.bind(this)),document.addEventListener("keydown",this.handleKeyPress.bind(this)),document.querySelectorAll(".number-btn").forEach((n=>{n.addEventListener("click",this.handleNumberPadClick.bind(this))}))}startInitialGame(){const n=document.querySelector(".difficulty-btn.active");n?(this.difficulty=parseInt(n.dataset.level),this.start()):(this.difficulty=R.Easy,this.start(),this.updateButtons(document.querySelector('.difficulty-btn[data-level="3"]')))}pickDifficulty(n){this.difficulty=parseInt(n.target.dataset.level),this.updateButtons(n.target),setTimeout((()=>this.start()),300)}updateButtons(n){document.querySelectorAll(".difficulty-btn").forEach((n=>{n.classList.remove("active"),n.classList.add("inactive")})),n.classList.remove("inactive"),n.classList.add("active")}start(){this.game=M.new(this.difficulty),this.setup()}setup(){this.canvas=document.getElementById("sudoku-canvas"),this.ctx=this.canvas.getContext("2d"),this.draw(),this.listenBoard()}listenBoard(){this.canvas.addEventListener("click",this.onCellSelect.bind(this)),this.canvas.addEventListener("touchstart",this.onCellSelect.bind(this))}onCellSelect(n){n.preventDefault();const{row:t,col:e}=this.getCell(n);t>=0&&t<9&&e>=0&&e<9&&(this.selectedCell={row:t,col:e},this.draw())}getCell(n){const t=this.canvas.getBoundingClientRect(),e=this.canvas.width/t.width,r=this.canvas.height/t.height;let i,o;"touchstart"===n.type?(i=(n.touches[0].clientX-t.left)*e,o=(n.touches[0].clientY-t.top)*r):(i=(n.clientX-t.left)*e,o=(n.clientY-t.top)*r);const a=Math.floor((i-O)/N);return{row:Math.floor((o-O)/N),col:a}}handleKeyPress(n){if(this.selectedCell){const{row:t,col:e}=this.selectedCell;if(n.key>="1"&&n.key<="9"){const t=parseInt(n.key);this.setSelectedCellValue(t)}else"Backspace"!==n.key&&"Delete"!==n.key||this.setSelectedCellValue(null)}}handleNumberPadClick(n){if(this.selectedCell){const t=n.target.dataset.value;"clear"===t?this.clearSelectedCell():this.setSelectedCellValue(parseInt(t))}}clearSelectedCell(){const{row:n,col:t}=this.selectedCell;this.game.clear_cell(n,t),this.draw()}setSelectedCellValue(n){const{row:t,col:e}=this.selectedCell;this.game.set_cell(t,e,n)&&(this.draw(),this.game.is_solved()&&setTimeout((()=>{alert("축하합니다! 스도쿠를 완성했습니다! 🎉"),this.newGame()}),100))}draw(){this.clear(),this.fillNums(),this.drawGrid()}clear(){this.ctx.clearRect(0,0,U,U),this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,U,U)}fillNums(){this.ctx.font="120px Arial",this.ctx.textAlign="center",this.ctx.textBaseline="middle";for(let n=0;n<9;n++)for(let t=0;t<9;t++){const e=this.game.get_cell(n,t);this.drawNum(n,t,e)}}drawNum(n,t,e){const r=O+t*N,i=O+n*N,o=e.get_state(),a=this.selectedCell&&this.selectedCell.row===n&&this.selectedCell.col===t;o===A.Prefilled?this.ctx.fillStyle="#f3f4f6":this.ctx.fillStyle=a?"#eff6ff":"#fff",this.ctx.fillRect(r,i,N,N),o===A.Invalid?this.ctx.fillStyle="#ef4444":o===A.PlayerFilled?this.ctx.fillStyle="#3b82f6":this.ctx.fillStyle="#000";const s=e.get_value();s&&this.ctx.fillText(s.toString(),r+N/2,i+N/2)}drawGrid(){this.drawInner(),this.drawOuter()}drawInner(){this.ctx.strokeStyle="#1f2937",this.ctx.lineWidth=2;for(let n=0;n<=9;n++){const t=O+n*N;this.line(t,O,t,1980),this.line(O,t,1980,t)}}drawOuter(){this.ctx.lineWidth=8;for(let n=0;n<=3;n++){const t=O+n*(3*N);this.line(t,O,t,1980),this.line(O,t,1980,t)}this.ctx.strokeRect(O,O,B,B)}line(n,t,e,r){this.ctx.beginPath(),this.ctx.moveTo(n,t),this.ctx.lineTo(e,r),this.ctx.stroke()}newGame(){this.selectedCell=null,this.start()}clearGame(){this.game.clear(),this.draw()}}).init()})();