(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1330:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.t.bind(r,4080,23)),Promise.resolve().then(r.t.bind(r,2268,23)),Promise.resolve().then(r.t.bind(r,7525,23)),Promise.resolve().then(r.t.bind(r,3275,23)),Promise.resolve().then(r.bind(r,9535)),Promise.resolve().then(r.bind(r,4585))},4080:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return h},initScriptLoader:function(){return y}});let n=r(9920),a=r(1452),l=r(7437),s=n._(r(4887)),i=a._(r(2265)),o=r(6590),c=r(4071),u=r(9189),d=new Map,m=new Set,f=e=>{if(s.default.preinit){e.forEach(e=>{s.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},p=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:s="",strategy:i="afterInteractive",onError:o,stylesheets:u}=e,p=r||t;if(p&&m.has(p))return;if(d.has(t)){m.add(p),d.get(t).then(n,o);return}let h=()=>{a&&a(),m.add(p)},y=document.createElement("script"),g=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),n&&n.call(this,t),h()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){o&&o(e)});l?(y.innerHTML=l.__html||"",h()):s?(y.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",h()):t&&(y.src=t,d.set(t,g)),(0,c.setAttributesFromProps)(y,e),"worker"===i&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",i),u&&f(u),document.body.appendChild(y)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))}):p(e)}function y(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");m.add(t)})}function g(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:d,stylesheets:f,...h}=e,{updateScripts:y,scripts:g,getIsSsr:b,appDir:v,nonce:_}=(0,i.useContext)(o.HeadManagerContext),k=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||r;k.current||(a&&e&&m.has(e)&&a(),k.current=!0)},[a,t,r]);let C=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!C.current&&("afterInteractive"===c?p(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))})),C.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(y?(g[c]=(g[c]||[]).concat([{id:t,src:r,onLoad:n,onReady:a,onError:d,...h}]),y(g)):b&&b()?m.add(t||r):b&&!b()&&p(e)),v){if(f&&f.forEach(e=>{s.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return r?(s.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:_,crossOrigin:h.crossOrigin}:{as:"script",nonce:_,crossOrigin:h.crossOrigin}),(0,l.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===c&&r&&s.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:_,crossOrigin:h.crossOrigin}:{as:"script",nonce:_,crossOrigin:h.crossOrigin})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let b=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4071:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},n=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function l(e,t){for(let[l,s]of Object.entries(t)){if(!t.hasOwnProperty(l)||n.includes(l)||void 0===s)continue;let i=r[l]||l.toLowerCase();"SCRIPT"===e.tagName&&a(i)?e[i]=!!s:e.setAttribute(i,String(s)),(!1===s||"SCRIPT"===e.tagName&&a(i)&&(!s||"false"===s))&&(e.setAttribute(i,""),e.removeAttribute(i))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9535:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var n=r(7437),a=r(2265),l=r(4585);let s=e=>{let{width:t=48,height:s=48}=e,i=(0,a.useRef)(null),o=(0,a.useRef)(null),{effectiveTheme:c}=(0,l.F)(),u=(0,a.useCallback)(()=>({"--red-500":getComputedStyle(document.documentElement).getPropertyValue("--red-500").trim(),"--blue-500":getComputedStyle(document.documentElement).getPropertyValue("--blue-500").trim(),"--green-500":getComputedStyle(document.documentElement).getPropertyValue("--green-500").trim(),"--purple-500":getComputedStyle(document.documentElement).getPropertyValue("--purple-500").trim(),"--gray-100":getComputedStyle(document.documentElement).getPropertyValue("--gray-100").trim(),"--gray-900":getComputedStyle(document.documentElement).getPropertyValue("--gray-900").trim()}),[]),d=(0,a.useCallback)(()=>{o.current&&setTimeout(()=>{var e;null===(e=o.current)||void 0===e||e.postMessage({type:"updateColors",cssColors:u()})},0)},[u]);return(0,a.useEffect)(()=>{let e=i.current;if(e)return o.current=new Worker(r.tu(new URL(r.p+r.u(680),r.b))),o.current.onmessage=t=>{let{imageData:r}=t.data,n=e.getContext("2d");if(n){let e=new ImageData(new Uint8ClampedArray(r.data),r.width,r.height);n.putImageData(e,0,0)}},o.current.postMessage({type:"init",width:t,height:s,cssColors:u(),oversampling:2}),()=>{var e;null===(e=o.current)||void 0===e||e.terminate()}},[t,s,u]),(0,a.useEffect)(()=>{d()},[c,d]),(0,a.useEffect)(()=>{let e=new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&"data-theme"===e.attributeName&&d()})});return e.observe(document.documentElement,{attributes:!0}),()=>e.disconnect()},[d]),(0,n.jsx)("canvas",{ref:i,id:"logoCanvas",width:t,height:s,style:{width:"".concat(t,"px"),height:"".concat(s,"px")}})}},4585:(e,t,r)=>{"use strict";r.d(t,{ThemeSwitcher:()=>u,F:()=>c});var n=r(7437),a=r(8030);let l=(0,a.Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),s=(0,a.Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);var i=r(2265);let o=e=>{let{theme:t,currentTheme:r,onClick:a,icon:l}=e;return(0,n.jsxs)("button",{"aria-label":"".concat(t.charAt(0).toUpperCase()+t.slice(1)," theme"),onClick:a,disabled:r===t,className:"flex items-center gap-2 rounded bg-gray-200 px-2 py-1 text-sm disabled:opacity-50",children:[(0,n.jsx)(l,{size:14}),r===t?null:(0,n.jsx)("span",{className:"hidden sm:inline",children:"".concat(t.charAt(0).toUpperCase()+t.slice(1)," theme")})]})},c=()=>{let[e,t]=(0,i.useState)("automatic"),[r,n]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=localStorage.getItem("theme");e&&(t(e),document.documentElement.setAttribute("data-theme",e));let r=window.matchMedia("(prefers-color-scheme: dark)"),a=e=>{n(e.matches?"dark":"light")};return n(r.matches?"dark":"light"),r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[]),{theme:e,effectiveTheme:"automatic"===e?r:e,handleThemeChange:e=>{t(e),localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}}};function u(){let{effectiveTheme:e,handleThemeChange:t}=c();return(0,n.jsxs)("div",{role:"group","aria-label":"Theme switcher",className:"flex gap-2 print:hidden",children:[(0,n.jsx)(o,{theme:"light",currentTheme:e,onClick:()=>t("light"),icon:l}),(0,n.jsx)(o,{theme:"dark",currentTheme:e,onClick:()=>t("dark"),icon:s})]})}},3275:()=>{},2268:e=>{e.exports={style:{fontFamily:"'Atkinson Hyperlegible', 'Atkinson Hyperlegible Fallback'",fontStyle:"normal"},className:"__className_c159bc",variable:"__variable_c159bc"}},7525:e=>{e.exports={style:{fontFamily:"'Dosis', 'Dosis Fallback'",fontWeight:600,fontStyle:"normal"},className:"__className_6dc65f",variable:"__variable_6dc65f"}}},e=>{var t=t=>e(e.s=t);e.O(0,[405,263,130,215,744],()=>t(1330)),_N_E=e.O()}]);