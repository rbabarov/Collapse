(()=>{"use strict";class t{constructor(t){this.parentEl=t}static markup(t,e){return`\n        <button class="collapse-button" type="button">${t}</button>\n        <div class="collapse">\n          <div class="collapse__body">\n            ${e}\n          </div>\n        </div>\n      `}static get collapseButtonSelector(){return".collapse-button"}static get collapseSelector(){return".collapse"}bindToDOM(){const{buttonContent:t,collapsibleContent:e}=this.parentEl.dataset;this.parentEl.innerHTML=this.constructor.markup(t,e);const s=this.parentEl.querySelector(this.constructor.collapseButtonSelector),c=this.parentEl.querySelector(this.constructor.collapseSelector),l=c.clientHeight;c.style.maxHeight="0px",s.addEventListener("click",(()=>this.constructor.clickHandler(c,l)))}static clickHandler(t,e){const s=t.style;t.classList.contains("show")?(s.maxHeight="0px",t.classList.remove("show")):(s.maxHeight=`${e}px`,t.classList.add("show"))}}document.querySelectorAll("#collapse-button").forEach((e=>{new t(e).bindToDOM()}))})();