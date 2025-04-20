System.register(["jimu-core","jimu-ui","jimu-theme","jimu-core/react"],(function(e,t){var n={},o={},r={},a={};return{setters:[function(e){n.BrowserSizeMode=e.BrowserSizeMode,n.Immutable=e.Immutable,n.LinkType=e.LinkType,n.PageType=e.PageType,n.React=e.React,n.ReactRedux=e.ReactRedux,n.SessionManager=e.SessionManager,n.css=e.css,n.hooks=e.hooks,n.jsx=e.jsx,n.polished=e.polished},function(e){o.Button=e.Button,o.Drawer=e.Drawer,o.Icon=e.Icon,o.Navigation=e.Navigation,o.PanelHeader=e.PanelHeader,o.defaultMessages=e.defaultMessages,o.utils=e.utils},function(e){r.getBoxStyles=e.getBoxStyles},function(e){a.default=e.default}],execute:function(){e((()=>{var e={222:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#000" fill-rule="nonzero" d="M1 0h3a1 1 0 0 1 1 1v1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1m0 1v10h10V3H4V1zm0 3.5h10v1H1z"></path></svg>'},846:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill-rule="nonzero" d="M7.42 8.839a.5.5 0 0 1 0 .71L6 10.966a3.5 3.5 0 0 1-4.967 0 3.5 3.5 0 0 1 0-4.966l1.416-1.422a.504.504 0 0 1 .713.712L1.746 6.713a2.497 2.497 0 0 0-.003 3.545c.983.983 2.56.98 3.544-.003l1.42-1.42a.504.504 0 0 1 .712.004m1.415-2.132 1.422-1.416a2.5 2.5 0 0 0 0-3.547 2.5 2.5 0 0 0-3.547 0L5.29 3.163a.504.504 0 0 1-.713-.712l1.42-1.42a3.506 3.506 0 0 1 4.97.003 3.5 3.5 0 0 1 0 4.967L9.547 7.42a.504.504 0 0 1-.713-.712m-4.967.71 3.548-3.548a.504.504 0 0 1 .713.713L4.58 8.129a.504.504 0 0 1-.713-.712"></path></svg>'},635:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12"><path fill="#000" fill-rule="nonzero" d="M1 0h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1m0 1v10h8V1zm2 2h4a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1m0 2.5h4a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1"></path></svg>'},244:e=>{"use strict";e.exports=n},972:e=>{"use strict";e.exports=a},888:e=>{"use strict";e.exports=r},321:e=>{"use strict";e.exports=o}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var l={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(l),i.d(l,{__set_webpack_public_path__:()=>L,default:()=>I});var e=i(244),t=i(321),n=i(888);const{useState:o,useEffect:r,useMemo:a}=e.React,{useSelector:s}=e.ReactRedux,c=i(635),u=i(846),d=i(222),p={[e.PageType.Normal]:c,[e.PageType.Link]:u,[e.PageType.Folder]:d},v=(e,t)=>(e=((e,t)=>(e=e.filter((e=>{const n=Object.keys(e)[0];return(null==t?void 0:t[n]).isVisible}))).map((e=>{const n=Object.entries(e)[0],o=n[0];let r=n[1];return r=r.filter((e=>(null==t?void 0:t[e]).isVisible)),e.set(o,r)})))(e,t),e.map((e=>{const n=Object.entries(e)[0],o=n[0],r=n[1],a=t[o],i=m(a),l=r.map((e=>{const n=t[e];return m(n)}));return i.set("subs",l)}))),m=n=>{const o=g(n),r=b(n),a=n.icon||p[n.type];return(0,e.Immutable)({linkType:o,value:r,icon:"[object Object]"===Object.prototype.toString.call(a)?a:t.utils.toIconResult(a,n.type,16),target:n.openTarget,name:n.label})},g=t=>t.type===e.PageType.Link?e.LinkType.WebAddress:t.type===e.PageType.Normal?e.LinkType.Page:t.type===e.PageType.Folder?e.LinkType.None:void 0,b=t=>t.type===e.PageType.Link?t.linkUrl:t.type===e.PageType.Normal?t.id:t.type===e.PageType.Folder?"#":void 0,h=e=>{if(!(null==e?void 0:e.value))return"";const t=e.value.split(",");return(null==t?void 0:t.length)?t[0]:""},f=t=>{var n,o,r,a;const{borderTop:i,borderBottom:l,borderLeft:s,borderRight:c}=t;return e.css`
    ${i&&`\n      border-top-width: ${i.width};\n      ${i.width&&`border-top-style: ${null!==(n=null==i?void 0:i.type)&&void 0!==n?n:"solid"};`}\n      border-top-color: ${i.color};\n    `}
    ${l&&`\n      border-bottom-width: ${l.width};\n      ${l.width&&`border-bottom-style: ${null!==(o=null==l?void 0:l.type)&&void 0!==o?o:"solid"};`}\n      border-bottom-color: ${l.color};\n    `}
    ${s&&`\n      border-left-width: ${s.width};\n      ${s.width&&`border-left-style: ${null!==(r=null==s?void 0:s.type)&&void 0!==r?r:"solid"};`}\n      border-left-color: ${s.color};\n    `}
    ${c&&`\n      border-right-width: ${c.width};\n      ${c.width&&`border-right-style: ${null!==(a=null==c?void 0:c.type)&&void 0!==a?a:"solid"};`}\n      border-right-color: ${c.color};\n    `}
  `},y=t=>{var n,o;return e.css`
    font-size: ${(null==t?void 0:t.size)?`${e.polished.rem(t.size)}!important`:""};
    ${t.icon&&`.jimu-nav-link-wrapper > .jimu-icon, .jimu-icon-img {\n      ${(null===(n=null==t?void 0:t.icon)||void 0===n?void 0:n.size)&&`\n        width: ${e.polished.rem(t.icon.size)};\n        height: ${e.polished.rem(t.icon.size)};\n      `};\n      ${(null===(o=null==t?void 0:t.icon)||void 0===o?void 0:o.color)&&`color: ${t.icon.color}`};\n    }`}
 `},w=(t,o,r,i)=>a((()=>{var a,l;return t?e.css`
      &.menu-navigation {
        .jimu-nav,
        &.jimu-nav {
          ${(null===(a=null==r?void 0:r.root)||void 0===a?void 0:a.bg)&&`background-color: ${r.root.bg};`}
          border-radius: ${(null===(l=null==r?void 0:r.root)||void 0===l?void 0:l.borderRadius)||"0px"};
          ${(t=>{if(!(null==t?void 0:t.item))return null;const{default:o,hover:r,active:a}=t.item,i=(null==o?void 0:o.merge(r||{},{deep:!0}))||r,l=(null==o?void 0:o.merge(a||{},{deep:!0}))||a;return e.css`
    .nav-item>.nav-link {
      ${o&&e.css`
        &:not(:hover):not(.active) {
          ${(0,n.getBoxStyles)(o)}
          ${f(o)}
          ${y(o)}
        }
      `}
      ${i&&e.css`
        &:hover:not(.active) {
          ${(0,n.getBoxStyles)(i)}
          ${f(i)}
          ${y(i)}
        }
      `}
      ${l&&e.css`
        &:not(:disabled):not(.disabled).active {
          ${(0,n.getBoxStyles)(l)}
          ${f(l)}
          ${y(l)}
        }
      `}
    }
  `})(r)}
          ${((t,n)=>{const o=n?"left":"bottom",r=["top","bottom","left","right"].map((e=>o===e?"":`border-${e}-width: 0 !important;`)).join("");return"underline"===t&&e.css`
    &.nav-underline {
      ${r}
      .nav-link {
        ${r}
      }
      ${n&&"\n        .nav-item {\n          margin-left: -1px;\n        }\n      "}
  `})(o,i)}
        }
      }
    `:null}),[t,o,r,i]),x={_widgetLabel:"Username Menu"};var j=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const $=n=>{var o,r;const[i,l]=e.React.useState(!1),{icon:s,anchor:c,advanced:u,type:d,variant:p,paper:v,vertical:m}=n,g=j(n,["icon","anchor","advanced","type","variant","paper","vertical"]),b=()=>{l((e=>!e))},h=((t,n,o)=>{var r,i;const l=null==o?void 0:o.bg,s=null===(i=null===(r=null==n?void 0:n.item)||void 0===r?void 0:r.default)||void 0===i?void 0:i.color;return a((()=>t?e.css`
      .jimu-drawer-paper {
        background: ${l};
        .header {
          color: ${s};
          padding: ${e.polished.rem(8)};
        }
      }
    `:e.css`
      .jimu-drawer-paper {
        .header {
          padding: ${e.polished.rem(8)};
        }
      }
    `),[t,l,s])})(u,p,v),f=w(u,d,p,!0),y=e.hooks.useCheckSmallBrowserSizeMode(),$=(t=>a((()=>{const n=e.css`
      .jimu-nav-link-wrapper {
        text-overflow: ellipsis !important;
        overflow: hidden !important;
        white-space: nowrap;
      }
      .nav-link {
        text-decoration: none;
        &:hover {
          text-decoration: none;
        }
      }
    `;return t?n:e.css`
        &{
          min-width: ${e.polished.rem(240)};
          max-width: ${e.polished.rem(320)};
        }
        ${n}
      `}),[t]))(y),O=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId));e.React.useEffect((()=>{l(!1)}),[O]);const S=e.hooks.useTranslation(x);return(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"button-container w-100 h-100 d-flex align-items-center justify-content-center"},(0,e.jsx)(t.Button,{className:"jimu-outline-inside",icon:!0,type:"tertiary",onClick:b,"aria-label":S("_widgetLabel"),"aria-haspopup":"menu"},(0,e.jsx)(t.Icon,{className:"caret-icon",icon:null==s?void 0:s.svg,color:null===(o=null==s?void 0:s.properties)||void 0===o?void 0:o.color,size:null===(r=null==s?void 0:s.properties)||void 0===r?void 0:r.size}))),(0,e.jsx)(t.Drawer,{anchor:c,open:i,toggle:b,autoFlip:!1,css:h,"aria-label":S("_widgetLabel"),backdrop:!0},(0,e.jsx)(t.PanelHeader,{className:"header",title:"",onClose:b}),(0,e.jsx)("nav",{"aria-label":S("_widgetLabel")},(0,e.jsx)(t.Navigation,Object.assign({role:"menu",className:y?"w-100":"menu-navigation",vertical:m,css:[$,f],type:d,showTitle:!0,isUseNativeTitle:!0,right:!0},g)))))};var O=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const{useMemo:S}=e.React,z=n=>{const{type:a,menuStyle:i,vertical:l,standard:c,advanced:u,paper:d,variant:p}=n,m=(t=>{const[n,a]=o([]),i=s((e=>{var t;return null===(t=e.appConfig)||void 0===t?void 0:t.pages})),l=s((e=>{var t;return null===(t=e.appConfig)||void 0===t?void 0:t.pageStructure}));return r((()=>{var n,o;const r=v(l,i).asMutable({deep:!0}),s=null!==(o=null===(n=e.SessionManager.getInstance().getMainSession())||void 0===n?void 0:n.username)&&void 0!==o?o:"",c=(null==t?void 0:t.pageAccess)||{},u=r.filter((e=>{var t;const n=h(e),o=null===(t=c[n])||void 0===t?void 0:t.split(",").map((e=>e.trim())).filter(Boolean);return!(null==o?void 0:o.length)||o.includes(s)}));a(u)}),[i,l,t]),n})(n),g=(()=>{const t=s((e=>{var t;return null===(t=null==e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId}));return e.React.useCallback((e=>h(e)===t),[t])})(),b=c.asMutable({deep:!0}),{icon:f,anchor:y}=b,j=O(b,["icon","anchor"]),z=(t=>s((n=>(null==n?void 0:n.browserSizeMode)===e.BrowserSizeMode.Small?"full":t)))(y),M=(t=>S((()=>e.css`
      width: 100%;
      height: 100%;
      max-width: 100vw;
      max-height: 100vh;
      .nav-item {
        ${!t&&'\n          .nav-link:hover {\n            position: relative;\n            &::before {\n              content: "";\n              position: absolute;\n              left: 0;\n              right: 0;\n              top: -1000px;\n              bottom: 100%;\n            }\n            &::after {\n              content: "";\n              position: absolute;\n              left: 0;\n              right: 0;\n              top: 100%;\n              bottom: -1000px;\n            }\n          }\n        '}
      }
    `),[t]))(l),k=w(u,i,p,l),T=e.hooks.useTranslation(x);return(0,e.jsx)("div",{className:"menu-navigation",css:[M,k]},"nav"===a&&(0,e.jsx)(t.Navigation,Object.assign({role:l?"menu":"menubar",data:m,vertical:l,isActive:g,showTitle:!0,isUseNativeTitle:!0,scrollable:!0,right:!0},j,{type:i,"aria-label":T("_widgetLabel")})),"drawer"===a&&(0,e.jsx)($,Object.assign({data:m,advanced:u,variant:p,paper:d,type:i,vertical:l,isActive:g,scrollable:!1,icon:f,anchor:z},j)))};var M;!function(e){e.Icon="ICON",e.Vertical="VERTICAL",e.Horizontal="HORIZONTAL"}(M||(M={}));var k=i(972);function T(e){return{svg:'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="css-1i7frhi jimu-icon"><path d="M2 1a1 1 0 100 2h12a1 1 0 100-2H2zm0-1h12a2 2 0 010 4H2a2 2 0 010-4zm0 7a1 1 0 100 2h12a1 1 0 100-2H2zm0-1h12a2 2 0 010 4H2a2 2 0 010-4zm0 7a1 1 0 100 2h12a1 1 0 100-2H2zm0-1h12a2 2 0 010 4H2a2 2 0 010-4z" fill="currentColor" fill-rule="nonzero"></path></svg>',properties:{color:"var(--ref-palette-neutral-1100)",size:20,inlineSvg:!0,filename:e("menu")}}}function P(e){switch(e){case"anchor":return"left";case"textAlign":return"center";case"showIcon":return!1;case"gap":return"0px";case"submenuMode":return"foldable";default:return null}}const R=(t,n,o)=>k.default.useMemo((()=>function(t=M.Horizontal,n){const o={pageAccess:{}};switch(t){case M.Horizontal:return(0,e.Immutable)(Object.assign(Object.assign({},o),{type:"nav",menuStyle:"default",vertical:!1,advanced:!1,standard:{gap:P("gap"),textAlign:P("textAlign")}}));case M.Vertical:return(0,e.Immutable)(Object.assign(Object.assign({},o),{type:"nav",menuStyle:"default",vertical:!0,advanced:!1,standard:{submenuMode:P("submenuMode"),gap:P("gap"),textAlign:P("textAlign")}}));case M.Icon:return(0,e.Immutable)(Object.assign(Object.assign({},o),{type:"drawer",menuStyle:"default",vertical:!0,advanced:!1,standard:{anchor:P("anchor"),submenuMode:P("submenuMode"),icon:T(n),gap:P("gap"),textAlign:P("textAlign")}}))}}(n,o).merge(t,{deep:!0})),[t,n,o]),I=n=>{const{config:o}=n,r=e.hooks.useTranslation(t.defaultMessages),a=(e=>k.default.useMemo((()=>"drawer"===e.type?M.Icon:e.vertical?M.Vertical:M.Horizontal),[e.type,e.vertical]))(o),i=R(o,a,r);return e.React.createElement("div",{className:"widget-menu jimu-widget"},e.React.createElement(z,Object.assign({},i.asMutable())))};function L(e){i.p=e}})(),l})())}}}));