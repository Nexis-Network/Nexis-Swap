"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3889,5118],{57809:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(45779),r=t(68090),o=t.n(r);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,l=void 0===o?24:o,d=s(e,["color","size"]);return i.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Plus";const d=l},74293:(e,n,t)=>{t.d(n,{Z:()=>z});var i=t(92936),r=t(31017),o=t(5985),a=t(88846),s=t(47583),l=t(32546),d=t(7789),c=t(57852),u=t(36399),p=t(45779),m=t(61152),h=t(66869),f=t(54972),y=t(55874),b=t(66136),g=t(96326),x=t(73720),v=t(69780),w=t(47841),_=t(5967),C=t(17706),N=t(94284),I=t(68999),j=t(19996);const $=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-8b042b4f-0"})`
  ${y.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,k=m.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-8b042b4f-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,P=(0,m.default)(v.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-8b042b4f-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,u._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,T=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-8b042b4f-3"})`
  ${y.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,O=m.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-8b042b4f-4"})`
  ${y.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,A=(0,m.default)(O).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-8b042b4f-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,E=m.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-8b042b4f-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,S=(0,m.default)(g.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-8b042b4f-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,R=m.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-8b042b4f-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${h.j$.sm}px) {
    font-size: 16px;
  }
`,D=m.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-8b042b4f-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,B=(0,m.default)(C.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-8b042b4f-10"})`
  ${l._Q};
  text-align: left;
`,W=(0,m.default)(d.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-8b042b4f-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function z({value:e,onUserInput:n,onMax:t,showMaxButton:d,onCurrencySelect:u,currency:h,otherCurrency:y,id:g,currencySearchFilters:v,showCurrencyAmount:C,renderBalance:O,fiatValue:z,hideBalance:M=!1,pair:U=null,hideInput:V=!1,locked:G=!1,loading:F=!1,...L}){var Z,q,K,X,H;const[J,Q]=(0,p.useState)(!1),{account:Y,chainId:ee}=(0,a.useWeb3React)(),ne=(0,x._h)(Y??void 0,h??void 0),te=(0,m.useTheme)(),{formatCurrencyAmount:ie}=(0,b.Gb)(),re=(0,p.useCallback)((()=>{Q(!1)}),[Q]),oe=(0,c.EC)(ee);return(0,i.jsxs)($,{id:g,hideInput:V,...L,children:[!G&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(k,{hideInput:V,disabled:!oe,children:[(0,i.jsxs)(T,{style:V?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!V&&(0,i.jsx)(B,{className:"token-amount-input",value:e,onUserInput:n,disabled:!oe,$loading:F,maxDecimals:null===(Z=h)||void 0===Z?void 0:Z.decimals}),(0,i.jsx)(W,{shouldFetchOnAccountUpdate:J,$fullWidth:V,children:(0,i.jsx)(P,{disabled:!oe,visible:void 0!==h,selected:!!h,hideInput:V,className:"open-currency-select-button",onClick:()=>{u&&Q(!0)},pointerEvents:u?void 0:"none",children:(0,i.jsxs)(E,{children:[(0,i.jsxs)(N.DA,{children:[U?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(w.Z,{currency0:U.token0,currency1:U.token1,size:24,margin:!0})}):h&&(0,i.jsx)(_.Z,{style:{marginRight:"0.5rem"},currency:h,size:"24px"}),U?(0,i.jsxs)(R,{className:"pair-name-container",children:[null===(q=U)||void 0===q?void 0:q.token0.symbol,":",null===(K=U)||void 0===K?void 0:K.token1.symbol]}):(0,i.jsx)(R,{className:"token-symbol-container",active:Boolean(h&&h.symbol),children:(h&&h.symbol&&h.symbol.length>20?h.symbol.slice(0,4)+"..."+h.symbol.slice(h.symbol.length-5,h.symbol.length):null===(X=h)||void 0===X?void 0:X.symbol)||(0,i.jsx)(r.cC,{id:"T0Y2+3"})})]}),u&&(0,i.jsx)(S,{selected:!!h})]})})})]}),Boolean(!V&&!M&&h)&&(0,i.jsx)(A,{children:(0,i.jsxs)(N.m0,{children:[(0,i.jsx)(l.EG,{$loading:F,children:z&&(0,i.jsx)(j.x,{fiatValue:z})}),Y&&(0,i.jsxs)(N.DA,{style:{height:"17px"},children:[(0,i.jsx)(f.Tv.DeprecatedBody,{onClick:t,color:te.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!M&&h&&ne)&&((null===(H=O)||void 0===H?void 0:H(ne))||(0,i.jsx)(r.cC,{id:"VuFd5C",values:{0:ie({amount:ne,type:b.sw.TokenNonTx})}}))}),Boolean(d&&ne)&&(0,i.jsx)(s.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(D,{onClick:t,children:(0,i.jsx)(r.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,i.jsx)(I.Z,{isOpen:J,onDismiss:re,onCurrencySelect:u,selectedCurrency:h,otherSelectedCurrency:y,showCurrencyAmount:C,currencySearchFilters:v})]})}},39753:(e,n,t)=>{t.d(n,{q:()=>_,w:()=>N});var i=t(92936),r=t(31017),o=t(88846),a=t(1347),s=t(21926),l=t(43454),d=t(6282),c=t(22953),u=t(47856),p=t(47632),m=t(31744),h=t(61152),f=t(54972),y=t(55874),b=t(94284);const g=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-b673d9be-0"})`
  ${y.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,x=(0,h.default)(l.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-b673d9be-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,h.default)(f.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-b673d9be-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,w=(0,h.default)(s.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-b673d9be-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function _({origin:e}){return(0,i.jsx)(g,{children:(0,i.jsxs)(b.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(l.rU,{to:e,children:(0,i.jsx)(w,{})}),(0,i.jsx)(v,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const C=(0,h.default)(f.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-b673d9be-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function N({adding:e,creating:n,autoSlippage:t,children:s}){const{chainId:l}=(0,o.useWeb3React)(),f=(0,h.useTheme)(),y=(0,u.T)(),v=(0,d.s0)();return(0,i.jsx)(g,{children:(0,i.jsxs)(b.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(x,{to:"..",onClick:n=>{n.preventDefault(),v(-1),e&&(y((0,p.dA)()),y((0,m.dA)()))},flex:s?"1":void 0,children:(0,i.jsx)(w,{stroke:f.neutral2})}),(0,i.jsx)(C,{$center:!s,children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),s&&(0,i.jsx)(c.xu,{style:{marginRight:".5rem"},children:s}),(0,i.jsx)(a.Z,{autoSlippage:t,chainId:l,hideRoutingSettings:!0})]})})}},15463:(e,n,t)=>{t.d(n,{U:()=>i,q:()=>x});var i,r=t(16790),o=t(5985),a=t(88846),s=t(47583),l=t(7151),d=t(65471),c=t(11016),u=t(45779),p=t(64510);function m(e,n,t,i,r,o,a){try{var s=e[o](a),l=s.value}catch(d){return void t(d)}s.done?n(l):Promise.resolve(l).then(i,r)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var o=e.apply(n,t);function a(e){m(o,i,r,a,s,"next",e)}function s(e){m(o,i,r,a,s,"throw",e)}a(void 0)}))}}function f(e,n,t){var m,f,y;const{chainId:b}=(0,a.useWeb3React)(),g=(null===(f=e)||void 0===f||null===(m=f.currency)||void 0===m?void 0:m.isToken)?e.currency:void 0,x=function(e,n,t){var r,o;const{account:s}=(0,a.useWeb3React)(),l=(null===(o=e)||void 0===o||null===(r=o.currency)||void 0===r?void 0:r.isToken)?e.currency:void 0,{tokenAllowance:c}=(0,d.Fx)(l,s??void 0,n),p=t(l,n);return(0,u.useMemo)((()=>e&&n?e.currency.isNative?i.APPROVED:c?c.lessThan(e)?p?i.PENDING:i.NOT_APPROVED:i.APPROVED:i.UNKNOWN:i.UNKNOWN),[e,p,n,c])}(e,n,t),v=(0,l.Ib)(null===(y=g)||void 0===y?void 0:y.address),w=(0,u.useCallback)(h((function*(){function t(e){var n;console.warn(`${(null===(n=g)||void 0===n?void 0:n.symbol)||"Token"} approval failed:`,e)}if(x!==i.NOT_APPROVED)return t("approve was called unnecessarily");if(!b)return t("no chainId");if(!g)return t("no token");if(!v)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let a=!1;const l=yield v.estimateGas.approve(n,r.Bz).catch((()=>(a=!0,v.estimateGas.approve(n,e.quotient.toString()))));return v.approve(n,a?e.quotient.toString():r.Bz,{gasLimit:(0,p.y)(l)}).then((t=>{var i;const r={chain_id:b,token_symbol:null===(i=g)||void 0===i?void 0:i.symbol,token_address:(0,c.DT)(g)};return(0,s._P)(o.Je.APPROVE_TOKEN_TXN_SUBMITTED,r),{response:t,tokenAddress:g.address,spenderAddress:n,amount:e}})).catch((e=>{throw t(e),e}))})),[x,g,v,e,n,b]);return[x,w]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(i||(i={}));var y=t(99454),b=t(47186);function g(e){const n=(0,y.h7)();return(0,u.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:i,spenderAddress:r,amount:o}=e;n(t,{type:b.i.APPROVAL,tokenAddress:i,spender:r,amount:o.quotient.toString()})}}))),[n,e])}function x(e,n){const[t,i]=f(e,n,y.wB);return[t,g(i)]}},65118:(e,n,t)=>{t.d(n,{Z:()=>l,e:()=>s});var i=t(92936),r=t(61152),o=t(62587),a=t(7898);const s=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-b0a1d16d-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>`url(${a}), ${e.surface1}`};
  background-size: cover;
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function l(e){return(0,i.jsx)(s,{...e})}},61744:(e,n,t)=>{t.d(n,{u:()=>r});const i=new(t(76078).Fraction)(1,1);function r(e,n){if(n.lessThan(0)||n.greaterThan(i))throw new Error("Unexpected slippage");return[e.multiply(i.subtract(n)).quotient,e.multiply(i.add(n)).quotient]}}}]);
//# sourceMappingURL=3889.bfc0c9a0.chunk.js.map