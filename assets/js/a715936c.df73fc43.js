"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72468],{61132:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(24246),a=(r(27378),r(40624));const o={tabItem:"tabItem_pnkT"};function s({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(24246),a=r(27378),o=r(40624),s=r(75527),u=r(3620),i=r(44479),l=r(62821),c=r(52196),d=r(53589);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function h(e){var t,r;return null!==(r=null===(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const r=(0,u.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,l._X)(n),s=(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace(p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[n,r]);return[o,s]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=b(e),[s,u]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=g({queryString:r,groupId:n}),[m,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),h=(()=>{const e=null!=l?l:m;return f({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{h&&u(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),p(e)}),[c,p,o]),tabValues:o}}var y=r(29088);const j={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function k({className:e,block:t,selectedValue:r,selectValue:a,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),o=u[n].value;o!==r&&(l(t),a(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[i.length-1];break}}null==t||t.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},e),children:u.map((({value:e,label:t,attributes:a})=>(0,n.jsx)("li",x(O({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:c},a),{className:(0,o.Z)("tabs__item",j.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e)))})}function P({lazy:e,children:t,selectedValue:r}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function I(e){const t=v(e);return(0,n.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,n.jsx)(k,O({},t,e)),(0,n.jsx)(P,O({},t,e))]})}function S(e){const t=(0,y.Z)();return(0,n.jsx)(I,x(O({},e),{children:h(e.children)}),String(t))}},74356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var n=r(24246),a=r(71670),o=r(97555),s=r(61132);const u={sidebar_position:5,slug:"/api/themes/@docusaurus/theme-mermaid"},i="\ud83d\udce6 theme-mermaid",l={id:"api/themes/theme-mermaid",title:"\ud83d\udce6 theme-mermaid",description:"This theme provides a @theme/Mermaid component that is powered by mermaid. You can read more on diagrams documentation.",source:"@site/docs/api/themes/theme-mermaid.mdx",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-mermaid",permalink:"/docs/api/themes/@docusaurus/theme-mermaid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-mermaid.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1717178106e3,sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/api/themes/@docusaurus/theme-mermaid"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia"},next:{title:"\ud83d\udce6 create-docusaurus",permalink:"/docs/api/misc/create-docusaurus"}},c={},d=[{value:"Configuration",id:"configuration",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-theme-mermaid",children:"\ud83d\udce6 theme-mermaid"}),"\n",(0,n.jsxs)(t.p,{children:["This theme provides a ",(0,n.jsx)(t.code,{children:"@theme/Mermaid"})," component that is powered by ",(0,n.jsx)(t.a,{href:"https://mermaid-js.github.io/",children:"mermaid"}),". You can read more on ",(0,n.jsx)(t.a,{href:"/docs/markdown-features/diagrams",children:"diagrams"})," documentation."]}),"\n",(0,n.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-mermaid\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-mermaid\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-mermaid\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themes: ['@docusaurus/theme-mermaid'],\n  // In order for Mermaid code blocks in Markdown to work,\n  // you also need to enable the Remark plugin with this option\n  markdown: {\n    mermaid: true,\n  },\n};\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},71670:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>s});var n=r(27378);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);