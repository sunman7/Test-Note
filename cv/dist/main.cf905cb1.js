parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),e='\n/*\n哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n*/\n\n/* 太极阴阳 */\n#div1 {\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n  }\n  /* 首先把div变成一个圆 */\n  #div1 {\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n    border: none;\n  }\n  /* 创建阴阳背景*/\n  #div1 {\n    background: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 1) 50%,\n      rgba(0, 0, 0, 1) 50%,\n      rgba(0, 0, 0, 1) 100%\n    );\n  }\n  #div1::before {\n    content: "";\n    display: block;\n    position: absolute;\n  }\n  #div1::after {\n    content: "";\n    display: block;\n    position: absolute;\n  }\n  \n  /* 创建阴阳球 */\n  #div1::before {\n    width: 100px;\n    height: 100px;\n    left: 50%;\n    top: 0;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: radial-gradient(\n      circle,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(0, 0, 0, 1) 25%,\n      rgba(255, 255, 255, 1) 25%,\n      rgba(255, 255, 255, 1) 100%\n    );\n  }\n  #div1::after {\n    width: 100px;\n    height: 100px;\n    left: 50%;\n    bottom: 0;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: radial-gradient(\n      circle,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 1) 25%,\n      rgba(0, 0, 0, 1) 25%,\n      rgba(0, 0, 0, 1) 100%\n    );\n  }\n  \n\n\n',o="",t=0,a=function a(){setTimeout(function(){console.log(e[t]),"\n"===e[t]?o+="<br>":" "===e[t]?o+="&nbsp;":o+=e[t],n.innerHTML=o,r.innerHTML=e.substring(0,t),window.scrollTo(0,99999),n.scrollTo(0,99999),t<e.length-1&&(t++,a())},5)};a();
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.cf905cb1.js.map