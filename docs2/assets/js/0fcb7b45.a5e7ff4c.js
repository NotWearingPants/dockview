"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[931],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,c=k["".concat(p,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2971:function(t,e,n){n.d(e,{M:function(){return r}});var a=n(7294),r=function(t){var e=a.useRef();return a.useLayoutEffect((function(){e.current&&(e.current.scrollTop=Math.max(0,e.current.scrollHeight-e.current.clientHeight))}),[t.lines]),a.createElement("div",{ref:e,className:"console-container"},t.lines.map((function(t,e){return a.createElement("div",{key:e,className:"console-line"},a.createElement("span",{className:"console-line-timestamp"},(n=t.timestamp,(r=function(t){return t<10?"0"+t:""+t})(n.getHours())+":"+r(n.getMinutes())+":"+r(n.getSeconds())+"."+n.getMilliseconds())),a.createElement("span",{className:"console-line-text",style:t.css},t.text));var n,r})))}},6035:function(t,e,n){n.d(e,{X:function(){return i}});var a=n(1152),r=n(7294),l={default:function(t){return r.createElement("div",{style:{padding:"20px"}},t.params.title)}},i=function(){return r.createElement(a.$R,{components:l,onReady:function(t){t.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),t.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),t.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),t.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}}),t.api.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}}),t.api.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"},minimumWidth:10}),t.api.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10}),t.api.addPanel({id:"panel_8",component:"default",params:{title:"Panel 8"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10})},proportionalLayout:!1,orientation:a.i5.VERTICAL,className:"dockview-theme-dark"})}},1664:function(t,e,n){n.r(e),n.d(e,{assets:function(){return v},contentTitle:function(){return N},default:function(){return b},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return f}});var a=n(7462),r=n(3366),l=n(7294),i=n(3905),d=n(6035),p=n(1152),o=n(2971),m={default:function(t){return l.createElement("div",{style:{padding:"20px"}},t.params.title)}},u=function(){var t=l.useState([]),e=t[0],n=t[1],a=l.useState(!1),r=a[0],i=a[1],d=l.useState(),u=d[0],k=d[1];l.useEffect((function(){if(!u)return function(){};var t=[u.onDidAddPanel((function(t){n((function(e){return[].concat(e,[{timestamp:new Date,text:"onDidAddPanel: "+t.id}])}))})),u.onDidRemovePanel((function(t){n((function(e){return[].concat(e,[{timestamp:new Date,text:"onDidRemovePanel: "+t.id}])}))})),u.onDidActivePanelChange((function(t){n((function(e){return[].concat(e,[{timestamp:new Date,text:"onDidActivePanelChange: "+(null==t?void 0:t.id)}])}))})),u.onDidLayoutChange((function(t){n((function(t){return[].concat(t,[{timestamp:new Date,text:"onDidLayoutChange"}])}))})),u.onDidLayoutFromJSON((function(t){n((function(t){return[].concat(t,[{timestamp:new Date,text:"onDidLayoutFromJSON"}])}))}))];return function(){t.forEach((function(t){return t.dispose()}))}}),[u]),l.useEffect((function(){u&&(n((function(t){return[].concat(t,[{timestamp:new Date,text:"Rebuilding view fromJSON:"+r,css:{color:"yellow",backgroundColor:"grey"}}])})),r?u.fromJSON({grid:{root:{type:"branch",data:[{type:"branch",data:[{type:"leaf",data:{id:"panel_3",component:"default",params:{title:"Panel 3"},snap:!1},size:394},{type:"branch",data:[{type:"leaf",data:{id:"panel_5",component:"default",params:{title:"Panel 5"},snap:!1},size:50},{type:"branch",data:[{type:"leaf",data:{id:"panel_6",component:"default",params:{title:"Panel 6"},minimumWidth:10,snap:!1},size:131},{type:"leaf",data:{id:"panel_8",component:"default",params:{title:"Panel 8"},minimumWidth:10,snap:!1},size:131},{type:"leaf",data:{id:"panel_7",component:"default",params:{title:"Panel 7"},minimumWidth:10,snap:!1},size:132}],size:50}],size:394}],size:100},{type:"leaf",data:{id:"panel_2",component:"default",params:{title:"Panel 2"},snap:!1},size:100},{type:"branch",data:[{type:"leaf",data:{id:"panel_1",component:"default",params:{title:"Panel 1"},snap:!1},size:394},{type:"leaf",data:{id:"panel_4",component:"default",params:{title:"Panel 4"},snap:!1},size:394}],size:100}],size:788},width:788,height:300,orientation:p.i5.VERTICAL},activePanel:"panel_8"}):(u.clear(),u.orientation=p.i5.VERTICAL,u.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),u.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),u.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),console.log("sdf"),u.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}}),u.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}}),u.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"},minimumWidth:10}),u.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10}),u.addPanel({id:"panel_8",component:"default",params:{title:"Panel 8"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10})))}),[u,r]);return l.createElement(l.Fragment,null,l.createElement("label",null,l.createElement("input",{type:"checkbox",checked:r,onChange:function(t){return i(t.target.checked)}}),l.createElement("span",null,"fromJSON")),l.createElement("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},l.createElement(p.$R,{components:m,onReady:function(t){k(t.api)},proportionalLayout:!1,orientation:p.i5.VERTICAL,className:"dockview-theme-dark"})),l.createElement(o.M,{lines:e}))},k=n(9960),s=["components"],c={},N="Gridview",g={unversionedId:"api/gridview",id:"api/gridview",title:"Gridview",description:"Introduction",source:"@site/docs/api/gridview.mdx",sourceDirName:"api",slug:"/api/gridview",permalink:"/docs2/docs/api/gridview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/gridview.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dockview",permalink:"/docs2/docs/api/dockview"},next:{title:"Paneview",permalink:"/docs2/docs/api/paneview"}},v={},f=[{value:"Introduction",id:"introduction",level:2},{value:"GridviewReact Component",id:"gridviewreact-component",level:2},{value:"Gridview API",id:"gridview-api",level:2},{value:"Gridview Panel API",id:"gridview-panel-api",level:2},{value:"Events",id:"events",level:2}],y={toc:f};function b(t){var e=t.components,n=(0,r.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gridview"},"Gridview"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,i.kt)(d.X,{mdxType:"SimpleGridview"})),(0,i.kt)("h2",{id:"gridviewreact-component"},"GridviewReact Component"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ReactGridview } from 'dockview';\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onReady"),(0,i.kt)("td",{parentName:"tr",align:null},"(event: SplitviewReadyEvent) => void"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"components"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"orientation"),(0,i.kt)("td",{parentName:"tr",align:null},"Orientation"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Orientation.HORIZONTAL"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"proportionalLayout"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)(k.Z,{to:"/docs/basics/#proportional-layout",mdxType:"Link"},"Proportional layout"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hideBorders"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"className"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"''"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"disableAutoResizing"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)(k.Z,{to:"/docs/basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))))),(0,i.kt)("h2",{id:"gridview-api"},"Gridview API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: IGridviewPanelProps<{ title: string }>) => {\n    // props.containerApi...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const onReady = (event: GridviewReadyEvent) => {\n    // event.api...\n};\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"height"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"Component pixel height")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"width"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"Component pixel width")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"minimumHeight"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maximumHeight"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maximumWidth"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maximumWidth"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"length"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of panels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"panels"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ISplitviewPanel[]")),(0,i.kt)("td",{parentName:"tr",align:null},"all panels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"orientation"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Orientation")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidLayoutChange"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,i.kt)("td",{parentName:"tr",align:null},"Fires on layout change")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidLayoutFromJSON"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,i.kt)("td",{parentName:"tr",align:null},"Fires of layout change caused by a fromJSON deserialization call")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidAddPanel"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Event<IGridviewPanel>")),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when a view is added")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidRemovePanel"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Event<IGridviewPanel>")),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when a view is removed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidActivePanelChange"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Event<IGridviewPanel \\| undefined>")),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when the active group changes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"addPanel"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"addPanel(options: AddComponentOptions): IGridviewPanel")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"removePanel"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(panel: IGridviewPanel, sizing?: Sizing): void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"movePanel"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(panel: IGridviewPanel, options: {direction: Direction, refernece:string, size?: number}): void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"getPanel"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(id: string) \\| IGridviewPanel \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"updateOptions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(options:SplitviewComponentUpdateOptions): void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"focus"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(): void")),(0,i.kt)("td",{parentName:"tr",align:null},"Focus the active panel, if exists")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"layout"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(width: number, height:number): void")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(k.Z,{to:"/docs/basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fromJSON"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(data: SerializedGridview): void")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(k.Z,{to:"/docs/basics/#serialization",mdxType:"Link"},"Serialization"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"toJSON"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(): SerializedGridview")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(k.Z,{to:"/docs/basics/#serialization",mdxType:"Link"},"Serialization"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clear"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(): void")),(0,i.kt)("td",{parentName:"tr",align:null},"Clears the current layout")))),(0,i.kt)("h2",{id:"gridview-panel-api"},"Gridview Panel API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: IGridviewPanelProps<{ title: string }>) => {\n    // props.api...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Panel id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isFocused"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Is panel focsed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isActive"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Is panel active")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isVisible"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Is panel visible")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"width"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"Panel width")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"height"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"Panel height")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidDimensionsChange"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Event<PanelDimensionChangeEvent>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidFocusChange"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Event<FocusEvent>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidVisibilityChange"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Event<VisibilityEvent>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidActiveChange"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Event<ActiveEvent>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDidConstraintsChange"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onDidConstraintsChange: Event<PanelConstraintChangeEvent>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setVisible"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(isVisible: boolean): void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setActive"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(): void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setConstraints"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(value: PanelConstraintChangeEvent2): void;")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setSize"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(event: SizeEvent): void")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GridviewReact")," exposes a number of events that the developer can listen to and below is a simple example with a log panel showing those events that occur."),(0,i.kt)(u,{mdxType:"EventsGridview"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=0fcb7b45.a5e7ff4c.js.map