(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{7773:function(e,t,r){Promise.resolve().then(r.bind(r,8814))},8814:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(7437),l=r(2265),o=r(7850),i=r(9089);function a(){let[e,t]=(0,l.useState)([]),[r,a]=(0,l.useState)({title:"",description:"",videoUrl:""});(0,l.useEffect)(()=>{t(JSON.parse(localStorage.getItem("projects"))||[])},[]);let s=r=>{let n=e.filter((e,t)=>t!==r);t(n),localStorage.setItem("projects",JSON.stringify(n))};return(0,n.jsxs)("div",{className:"min-h-screen bg-black text-white p-20",children:[(0,n.jsx)("h1",{className:"text-6xl font-extrabold text-center text-blue-400",children:"Projects"}),(0,n.jsxs)("div",{className:"mt-8 flex flex-col items-center",children:[(0,n.jsx)("input",{type:"text",placeholder:"プロジェクトタイトル",value:r.title,onChange:e=>a({...r,title:e.target.value}),className:"mb-4 p-3 text-xl bg-gray-900 text-white border border-gray-700 rounded-lg w-1/2"}),(0,n.jsx)("input",{type:"text",placeholder:"プロジェクト概要",value:r.description,onChange:e=>a({...r,description:e.target.value}),className:"mb-4 p-3 text-xl bg-gray-900 text-white border border-gray-700 rounded-lg w-1/2"}),(0,n.jsx)("input",{type:"text",placeholder:"動画URL（YouTube, Vimeo など）",value:r.videoUrl,onChange:e=>a({...r,videoUrl:e.target.value}),className:"mb-4 p-3 text-xl bg-gray-900 text-white border border-gray-700 rounded-lg w-1/2"}),(0,n.jsxs)("button",{onClick:()=>{let n=[...e,r];t(n),localStorage.setItem("projects",JSON.stringify(n)),a({title:"",description:"",videoUrl:""})},className:"mt-4 px-8 py-3 bg-blue-500 text-white text-2xl rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center space-x-3",children:[(0,n.jsx)(i.wEH,{})," ",(0,n.jsx)("span",{children:"プロジェクトを追加"})]})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 mt-12",children:e.map((e,t)=>(0,n.jsxs)(o.E.div,{className:"p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-all border border-blue-500 relative",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2*t},children:[(0,n.jsx)("button",{onClick:()=>s(t),className:"absolute top-2 right-2 bg-red-500 p-2 rounded-full hover:bg-red-700",children:(0,n.jsx)(i.Xm5,{})}),(0,n.jsx)("h2",{className:"text-3xl font-bold",children:e.title}),(0,n.jsx)("p",{className:"mt-2 text-gray-400",children:e.description}),e.videoUrl&&(0,n.jsx)("iframe",{src:e.videoUrl,className:"mt-4 w-full h-48 rounded-lg",allowFullScreen:!0})]},t))})]})}},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(l),i=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,l;n=t,l=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,a({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:l,size:o,title:s}=e,u=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,i),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(l)}}},function(e){e.O(0,[699,850,971,117,744],function(){return e(e.s=7773)}),_N_E=e.O()}]);