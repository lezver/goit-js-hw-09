const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.getElementsByTagName("body")[0],timer:1e3};let e=null;t.startBtn.addEventListener("click",(()=>{"disabled"!==t.stopBtn.attributes.disabled&&(t.startBtn.disabled=!0,t.stopBtn.disabled=!1,e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),t.timer))})),t.stopBtn.addEventListener("click",(()=>{t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.cd24e918.js.map
