(()=>{"use strict";var t={167:(t,e,n)=>{t.exports=n.p+"3536a2bf797225342986.wasm"}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}let i;n.m=t,n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=i[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href;const r=new Array(128).fill(void 0);function s(t){return r[t]}r.push(void 0,null,!0,!1);let l=r.length;function a(t){const e=s(t);return function(t){t<132||(r[t]=l,l=t)}(t),e}const c="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&c.decode();let o=null;function u(t,e){return t>>>=0,c.decode((null!==o&&0!==o.byteLength||(o=new Uint8Array(i.memory.buffer)),o).subarray(t,t+e))}function _(t){l===r.length&&r.push(r.length+1);const e=l;return l=r[e],r[e]=t,e}function d(t){return null==t}function f(t,e){try{return t.apply(this,e)}catch(t){i.__wbindgen_exn_store(_(t))}}const h=Object.freeze({VeryEasy:1,1:"VeryEasy",Easy:2,2:"Easy",Medium:3,3:"Medium",Hard:4,4:"Hard",VeryHard:5,5:"VeryHard"}),w=Object.freeze({Empty:0,0:"Empty",Prefilled:1,1:"Prefilled",PlayerFilled:2,2:"PlayerFilled",Invalid:3,3:"Invalid"}),g="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_cell_free(t>>>0,1)));class b{static __wrap(t){t>>>=0;const e=Object.create(b.prototype);return e.__wbg_ptr=t,g.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,g.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_cell_free(t,0)}static new(t,e){const n=i.cell_new(t,d(e)?16777215:e);return b.__wrap(n)}get_state(){return i.cell_get_state(this.__wbg_ptr)}get_value(){const t=i.cell_get_value(this.__wbg_ptr);return 16777215===t?void 0:t}clear(){i.cell_clear(this.__wbg_ptr)}set(t,e){i.cell_set(this.__wbg_ptr,t,d(e)?16777215:e)}is_empty(){return 0!==i.cell_is_empty(this.__wbg_ptr)}}const p="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_sudokugame_free(t>>>0,1)));class m{static __wrap(t){t>>>=0;const e=Object.create(m.prototype);return e.__wbg_ptr=t,p.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,p.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_sudokugame_free(t,0)}static new(t){const e=i.sudokugame_new(t);return m.__wrap(e)}get_cell(t,e){const n=i.sudokugame_get_cell(this.__wbg_ptr,t,e);return b.__wrap(n)}set_cell(t,e,n){return 0!==i.sudokugame_set_cell(this.__wbg_ptr,t,e,d(n)?16777215:n)}clear_cell(t,e){return 0!==i.sudokugame_clear_cell(this.__wbg_ptr,t,e)}is_solved(){return 0!==i.sudokugame_is_solved(this.__wbg_ptr)}clear(){i.sudokugame_clear(this.__wbg_ptr)}is_cell_prefilled(t,e){return 0!==i.sudokugame_is_cell_prefilled(this.__wbg_ptr,t,e)}}function y(){const t={wbg:{}};return t.wbg.__wbg_crypto_1d1f22824a6a080c=function(t){return _(s(t).crypto)},t.wbg.__wbindgen_is_object=function(t){const e=s(t);return"object"==typeof e&&null!==e},t.wbg.__wbg_process_4a72847cc503995b=function(t){return _(s(t).process)},t.wbg.__wbg_versions_f686565e586dd935=function(t){return _(s(t).versions)},t.wbg.__wbg_node_104a2ff8d6ea03a2=function(t){return _(s(t).node)},t.wbg.__wbindgen_is_string=function(t){return"string"==typeof s(t)},t.wbg.__wbindgen_object_drop_ref=function(t){a(t)},t.wbg.__wbg_require_cca90b1a94a0255b=function(){return f((function(){return _(module.require)}),arguments)},t.wbg.__wbindgen_is_function=function(t){return"function"==typeof s(t)},t.wbg.__wbindgen_string_new=function(t,e){return _(u(t,e))},t.wbg.__wbg_msCrypto_eb05e62b530a1508=function(t){return _(s(t).msCrypto)},t.wbg.__wbg_randomFillSync_5c9c955aa56b6049=function(){return f((function(t,e){s(t).randomFillSync(a(e))}),arguments)},t.wbg.__wbg_getRandomValues_3aa56aa6edec874c=function(){return f((function(t,e){s(t).getRandomValues(s(e))}),arguments)},t.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(t,e){return _(new Function(u(t,e)))},t.wbg.__wbg_call_1084a111329e68ce=function(){return f((function(t,e){return _(s(t).call(s(e)))}),arguments)},t.wbg.__wbindgen_object_clone_ref=function(t){return _(s(t))},t.wbg.__wbg_self_3093d5d1f7bcb682=function(){return f((function(){return _(self.self)}),arguments)},t.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return f((function(){return _(window.window)}),arguments)},t.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return f((function(){return _(globalThis.globalThis)}),arguments)},t.wbg.__wbg_global_e5a3fe56f8be9485=function(){return f((function(){return _(global.global)}),arguments)},t.wbg.__wbindgen_is_undefined=function(t){return void 0===s(t)},t.wbg.__wbg_call_89af060b4e1523f2=function(){return f((function(t,e,n){return _(s(t).call(s(e),s(n)))}),arguments)},t.wbg.__wbg_buffer_b7b08af79b0b0974=function(t){return _(s(t).buffer)},t.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9=function(t,e,n){return _(new Uint8Array(s(t),e>>>0,n>>>0))},t.wbg.__wbg_new_ea1883e1e5e86686=function(t){return _(new Uint8Array(s(t)))},t.wbg.__wbg_set_d1e79e2388520f18=function(t,e,n){s(t).set(s(e),n>>>0)},t.wbg.__wbg_newwithlength_ec548f448387c968=function(t){return _(new Uint8Array(t>>>0))},t.wbg.__wbg_subarray_7c2e3576afe181d1=function(t,e,n){return _(s(t).subarray(e>>>0,n>>>0))},t.wbg.__wbindgen_throw=function(t,e){throw new Error(u(t,e))},t.wbg.__wbindgen_memory=function(){return _(i.memory)},t}async function v(t){if(void 0!==i)return i;void 0!==t&&Object.getPrototypeOf(t)===Object.prototype?({module_or_path:t}=t):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===t&&(t=new URL(n(167),n.b));const e=y();("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t));const{instance:r,module:s}=await async function(t,e){if("function"==typeof Response&&t instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(t,e)}catch(e){if("application/wasm"==t.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}(await t,e);return function(t,e){return i=t.exports,v.__wbindgen_wasm_module=e,o=null,i}(r,s)}const x=v,S=2e3,T=20,C=1960,k=C/9;(new class{constructor(){this.game=null,this.difficulty=h.Easy,this.canvas=null,this.ctx=null,this.selectedCell=null,this.startTime=null,this.timerInterval=null}async init(){await x(),this.bindEvents(),this.startInitialGame()}bindEvents(){document.querySelectorAll(".difficulty-btn").forEach((t=>{t.addEventListener("click",this.pickDifficulty.bind(this))})),document.getElementById("new-game").addEventListener("click",this.newGame.bind(this)),document.getElementById("clear-game").addEventListener("click",this.clearGame.bind(this)),document.addEventListener("keydown",this.handleKeyPress.bind(this)),document.querySelectorAll(".number-btn").forEach((t=>{t.addEventListener("click",this.handleNumberPadClick.bind(this))}))}startInitialGame(){const t=document.querySelector(".difficulty-btn.active");t?(this.difficulty=parseInt(t.dataset.level),this.start()):(this.difficulty=h.Easy,this.start(),this.updateButtons(document.querySelector('.difficulty-btn[data-level="3"]')))}pickDifficulty(t){this.difficulty=parseInt(t.target.dataset.level),this.updateButtons(t.target),setTimeout((()=>this.start()),300)}updateButtons(t){document.querySelectorAll(".difficulty-btn").forEach((t=>{t.classList.remove("active"),t.classList.add("inactive")})),t.classList.remove("inactive"),t.classList.add("active")}start(){this.game=m.new(this.difficulty),this.setup(),this.startTimer()}setup(){this.canvas=document.getElementById("sudoku-canvas"),this.ctx=this.canvas.getContext("2d"),this.draw(),this.listenBoard()}listenBoard(){this.canvas.addEventListener("click",this.onCellSelect.bind(this)),this.canvas.addEventListener("touchstart",this.onCellSelect.bind(this))}onCellSelect(t){t.preventDefault();const{row:e,col:n}=this.getCell(t);e>=0&&e<9&&n>=0&&n<9&&(this.selectedCell={row:e,col:n},this.draw())}getCell(t){const e=this.canvas.getBoundingClientRect(),n=this.canvas.width/e.width,i=this.canvas.height/e.height;let r,s;"touchstart"===t.type?(r=(t.touches[0].clientX-e.left)*n,s=(t.touches[0].clientY-e.top)*i):(r=(t.clientX-e.left)*n,s=(t.clientY-e.top)*i);const l=Math.floor((r-T)/k);return{row:Math.floor((s-T)/k),col:l}}handleKeyPress(t){if(this.selectedCell)if(t.key>="1"&&t.key<="9"){const e=parseInt(t.key);this.setSelectedCellValue(e)}else"Backspace"!==t.key&&"Delete"!==t.key||this.setSelectedCellValue(null)}handleNumberPadClick(t){if(this.selectedCell){const e=t.target.dataset.value;"clear"===e?this.clearSelectedCell():this.setSelectedCellValue(parseInt(e))}}clearSelectedCell(){const{row:t,col:e}=this.selectedCell;this.game.clear_cell(t,e),this.draw()}setSelectedCellValue(t){const{row:e,col:n}=this.selectedCell;if(this.game.set_cell(e,n,t)&&(this.draw(),this.game.is_solved())){this.stopTimer();const t=Math.floor((Date.now()-this.startTime)/1e3);setTimeout((()=>{alert(`축하합니다! ${this.formatTime(t)}만에 스도쿠를 완성했습니다! 🎉`),this.newGame()}),100)}}draw(){this.clear(),this.fillNums(),this.drawGrid()}clear(){this.ctx.clearRect(0,0,S,S),this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,S,S)}fillNums(){this.ctx.font="120px Arial",this.ctx.textAlign="center",this.ctx.textBaseline="middle";for(let t=0;t<9;t++)for(let e=0;e<9;e++){const n=this.game.get_cell(t,e);this.drawNum(t,e,n)}}drawNum(t,e,n){const i=T+e*k,r=T+t*k,s=n.get_state(),l=this.selectedCell&&this.selectedCell.row===t&&this.selectedCell.col===e;s===w.Prefilled?this.ctx.fillStyle="#f3f4f6":this.ctx.fillStyle=l?"#eff6ff":"#fff",this.ctx.fillRect(i,r,k,k),s===w.Invalid?this.ctx.fillStyle="#ef4444":s===w.PlayerFilled?this.ctx.fillStyle="#3b82f6":this.ctx.fillStyle="#000";const a=n.get_value();a&&this.ctx.fillText(a.toString(),i+k/2,r+k/2)}drawGrid(){this.drawInner(),this.drawOuter()}drawInner(){this.ctx.strokeStyle="#1f2937",this.ctx.lineWidth=2;for(let t=0;t<=9;t++){const e=T+t*k;this.line(e,T,e,1980),this.line(T,e,1980,e)}}drawOuter(){this.ctx.lineWidth=8;for(let t=0;t<=3;t++){const e=T+t*(3*k);this.line(e,T,e,1980),this.line(T,e,1980,e)}this.ctx.strokeRect(T,T,C,C)}line(t,e,n,i){this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(n,i),this.ctx.stroke()}newGame(){this.selectedCell=null,this.stopTimer(),this.start()}clearGame(){this.game.clear(),this.draw()}startTimer(){this.startTime=Date.now(),this.updateTimer(),this.timerInterval=setInterval((()=>this.updateTimer()),1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}updateTimer(){const t=Math.floor((Date.now()-this.startTime)/1e3),e=document.getElementById("timer");e&&(e.textContent=this.formatTime(t))}formatTime(t){const e=t%60;return`${Math.floor(t/60).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}}).init()})();