import{_ as x}from"./TnGtvhup.js";import{m as k,u as N,n as P,p as L,q as A,s as C,r as S,v as T,x as y,y as B,z as j,P as O,A as b,B as R,C as $,S as I,T as w,D as E,L as H,E as s,c,a as t,t as u,b as h,w as v,d as f,F as _,o as p,G as V}from"./DpMTPtge.js";import{u as G}from"./BdA3_Cki.js";const M=k({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(n,e){return()=>b(y[n.name],n.layoutProps,e.slots)}}),D=k({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(n,e){const a=N(),r=P(O),o=r===L()?A():r,i=C(()=>{let l=s(n.name)??o.meta.layout??"default";return l&&!(l in y)&&n.fallback&&(l=s(n.fallback)),l}),d=S();e.expose({layoutRef:d});const m=a.deferHydration();if(a.isHydrating){const l=a.hooks.hookOnce("app:error",m);T().beforeEach(l)}return()=>{const l=i.value&&i.value in y,g=o.meta.layoutTransition??B;return j(w,l&&g,{default:()=>b(I,{suspensible:!0,onResolve:()=>{$(m)}},{default:()=>b(q,{layoutProps:R(e.attrs,{ref:d}),key:i.value||void 0,name:i.value,shouldProvide:!n.name,hasTransition:!!g},e.slots)})}).default()}}}),q=k({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(n,e){const a=n.name;return n.shouldProvide&&E(H,{isCurrent:r=>a===(r.meta.layout??"default")}),()=>{var r,o;return!a||typeof a=="string"&&!(a in y)?(o=(r=e.slots).default)==null?void 0:o.call(r):b(M,{key:a,layoutProps:n.layoutProps,name:a},e.slots)}}}),z={id:"page-wrapper"},F={id:"header",class:"alt"},Z={href:"index.html"},J={id:"menu"},K={class:"inner"},Q={class:"links"},U={id:"footer"},W={class:"inner"},X={class:"contact"},Y={key:0,class:"icon solid fa-home"},ee={key:1,class:"icon solid fa-phone"},te=["href"],oe={key:2,class:"icon solid fa-envelope"},se=["href"],ne={key:3,class:"icon brands fa-github"},ae=["href"],re={key:4,class:"icon brands fa-linkedin"},ie=["href"],le={class:"copyright"},pe={__name:"index",setup(n){const e=G();function a(r){if(!/^\+\d{1,3}\d+$/.test(r))return"Invalid phone number format";const i=r.match(/^(\+\d{1,3})(\d{4,})$/);if(!i)return"Invalid phone number structure";const d=i[1],l=i[2].replace(/(\d{3})(?=\d)/g,"$1 ");return`${d} ${l.trim()}`}return(r,o)=>{const i=x,d=V,m=D;return p(),c("div",z,[t("header",F,[t("h1",null,[t("a",Z,u(s(e).appName),1)]),o[0]||(o[0]=t("nav",null,[t("a",{href:"#menu"},"Menu")],-1))]),t("nav",J,[t("div",K,[o[3]||(o[3]=t("h2",null,"Menu",-1)),t("ul",Q,[t("li",null,[h(i,{href:"/"},{default:v(()=>o[1]||(o[1]=[f("Home")])),_:1})])]),h(i,{href:"/",class:"close"},{default:v(()=>o[2]||(o[2]=[f("Close")])),_:1})])]),h(m,null,{default:v(()=>[h(d)]),_:1}),t("section",U,[t("div",W,[o[6]||(o[6]=t("h2",{class:"major"},"Get in touch",-1)),t("p",null,u(s(e).contact_section.descriptionText),1),t("ul",X,[s(e).contact_section.address?(p(),c("li",Y,[f(u(s(e).contact_section.address.name),1),o[4]||(o[4]=t("br",null,null,-1)),f(" "+u(s(e).contact_section.address.street),1),o[5]||(o[5]=t("br",null,null,-1)),f(" "+u(s(e).contact_section.address.provinceAndZip),1)])):_("",!0),s(e).phone?(p(),c("li",ee,[t("a",{href:"tel:"+s(e).phone},u(a(s(e).phone)),9,te)])):_("",!0),s(e).email?(p(),c("li",oe,[t("a",{href:"mailto:"+s(e).email},u(s(e).email),9,se)])):_("",!0),s(e).github?(p(),c("li",ne,[t("a",{href:s(e).github},"Github: "+u(s(e).appName),9,ae)])):_("",!0),s(e).linkedin?(p(),c("li",re,[t("a",{href:s(e).linkedin},"LinkedIn: "+u(s(e).appName),9,ie)])):_("",!0)]),t("ul",le,[t("li",null,"© "+u(s(e).appName)+". All rights reserved.",1)])])])])}}};export{pe as default};
