parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"XCzN":[function(require,module,exports) {
"use strict";require("./sass/main.scss");class e{constructor({selector:e,targetDate:t}){this.selector=e,this.targetDate=t,this.refs={days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]')},setInterval(()=>{const e=Date.now(),t=this.targetDate-e,{days:s,hours:a,mins:r,secs:o}=this.getTimeComponents(t);this.updateClockface(this.getTimeComponents(t))},1e3)}getTimeComponents(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}}pad(e){return String(e).padStart(2,"0")}updateClockface({days:e,hours:t,mins:s,secs:a}){this.refs.days.textContent=`${e}`,this.refs.hours.textContent=`${t}`,this.refs.mins.textContent=`${s}`,this.refs.secs.textContent=`${a}`}}const t=new e({selector:"#timer-1",targetDate:new Date("Jul 17, 2021")});
},{"./sass/main.scss":"clu1"}]},{},["XCzN"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/timer.cd642785.js.map