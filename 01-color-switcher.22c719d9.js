!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.getElementsByTagName("body")[0],timer:1e3},e=null;t.startBtn.addEventListener("click",(function(){"disabled"!==t.stopBtn.attributes.disabled&&(t.startBtn.disabled=!0,t.stopBtn.disabled=!1,e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),t.timer))})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.22c719d9.js.map