import{B as u,o as a,n as h,U as f,l as m,d as w,h as v,V as y,W as c}from"./index.e180ec06.js";let l,i=0;const n=new Array(256);for(let t=0;t<256;t++)n[t]=(t+256).toString(16).substring(1);const g=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const o=new Uint8Array(e);return t.getRandomValues(o),o}}return e=>{const o=[];for(let r=e;r>0;r--)o.push(Math.floor(Math.random()*256));return o}})(),d=4096;function T(){(l===void 0||i+16>d)&&(i=0,l=g(d));const t=Array.prototype.slice.call(l,i,i+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,n[t[0]]+n[t[1]]+n[t[2]]+n[t[3]]+"-"+n[t[4]]+n[t[5]]+"-"+n[t[6]]+n[t[7]]+"-"+n[t[8]]+n[t[9]]+"-"+n[t[10]]+n[t[11]]+n[t[12]]+n[t[13]]+n[t[14]]+n[t[15]]}function k(){let t;const e=m();function o(){t=void 0}return u(o),a(o),{removeTick:o,registerTick(r){t=r,h(()=>{t===r&&(f(e)===!1&&t(),t=void 0)})}}}function S(){let t=null;const e=m();function o(){t!==null&&(clearTimeout(t),t=null)}return u(o),a(o),{removeTimeout:o,registerTimeout(r,p){o(),f(e)===!1&&(t=setTimeout(r,p))}}}let b=!1;{const t=document.createElement("div");t.setAttribute("dir","rtl"),Object.assign(t.style,{width:"1px",height:"1px",overflow:"auto"});const e=document.createElement("div");Object.assign(e.style,{width:"1000px",height:"1px"}),document.body.appendChild(t),t.appendChild(e),t.scrollLeft=-1e3,b=t.scrollLeft>=0,t.remove()}const B={dark:{type:Boolean,default:null}};function L(t,e){return w(()=>t.dark===null?e.dark.isActive:t.dark)}const C={name:String};function W(t={}){return(e,o,r)=>{e[o](v("input",{class:"hidden"+(r||""),...t.value}))}}function A(t){return w(()=>t.name||t.for)}const x=[null,document,document.body,document.scrollingElement,document.documentElement];function F(t,e){let o=y(e);if(o===void 0){if(t==null)return window;o=t.closest(".scroll,.scroll-y,.overflow-auto")}return x.includes(o)?window:o}function I(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function D(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let s;function O(){if(s!==void 0)return s;const t=document.createElement("p"),e=document.createElement("div");c(t,{width:"100%",height:"200px"}),c(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const o=t.offsetWidth;e.style.overflow="scroll";let r=t.offsetWidth;return o===r&&(r=e.clientWidth),e.remove(),s=o-r,s}function j(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}export{k as a,S as b,I as c,D as d,O as e,L as f,F as g,B as h,C as i,W as j,A as k,j as l,b as r,T as u};
