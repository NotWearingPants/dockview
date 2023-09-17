"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[8734],{4453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(984),n=(r(6204),r(6575));const o={slug:"dockview-1.8.3-release",title:"Dockview 1.8.3",tags:["release"]},i="Release Notes",c={permalink:"/blog/dockview-1.8.3-release",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-17-dockview-1.8.3.md",source:"@site/blog/2023-09-17-dockview-1.8.3.md",title:"Dockview 1.8.3",description:"Please reference to docs @ dockview.dev.",date:"2023-09-17T00:00:00.000Z",formattedDate:"September 17, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.3,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"dockview-1.8.3-release",title:"Dockview 1.8.3",tags:["release"]},nextItem:{title:"Dockview 1.8.2",permalink:"/blog/dockview-1.8.2-release"}},l={authorsImageUrls:[]},s=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udee0 Miscs",id:"-miscs",level:2},{value:"\ud83d\udd25 Breaking changes",id:"-breaking-changes",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Please reference to docs @ ",(0,n.kt)("a",{parentName:"p",href:"https://dockview.dev"},"dockview.dev"),"."),(0,n.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Additional to DockviewDefaultTab component ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mathuo/dockview/issues/321"},"#321"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Additional group drop target options ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mathuo/dockview/issues/316"},"#316"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Intercept events to attach custom DataTransfer object to tabs ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mathuo/dockview/issues/299"},"#299"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Floating groups viewport overflow options ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mathuo/dockview/issues/326"},"#326")))),(0,n.kt)("h2",{id:"-miscs"},"\ud83d\udee0 Miscs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bug: Close button on tab shouldn't bring panel to active state ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/issues/330"},"#330"))),(0,n.kt)("h2",{id:"-breaking-changes"},"\ud83d\udd25 Breaking changes"))}m.isMDXComponent=!0},6575:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(6204);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=91312226.b698998f.js.map