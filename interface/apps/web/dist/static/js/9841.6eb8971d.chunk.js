"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9841,5347],{13310:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(45779),r=n(68090),o=n.n(r);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=(0,i.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,l=void 0===o?24:o,d=s(e,["color","size"]);return i.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Inbox";const d=l},74293:(e,t,n)=>{n.d(t,{Z:()=>M});var i=n(92936),r=n(31017),o=n(5985),a=n(88846),s=n(47583),l=n(32546),d=n(7789),c=n(57852),u=n(36399),p=n(45779),h=n(61152),x=n(66869),m=n(54972),v=n(55874),g=n(66136),f=n(96326),y=n(73720),j=n(69780),b=n(47841),C=n(5967),w=n(17706),N=n(94284),R=n(68999),_=n(19996);const E=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-8b042b4f-0"})`
  ${v.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:t})=>t?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,k=h.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-8b042b4f-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:t,disabled:n})=>!n&&`\n    :focus,\n    :hover {\n      border: 1px solid ${t?" transparent":e.surface2};\n    }\n  `}
`,T=(0,h.default)(j.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-8b042b4f-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:t})=>e?t.surface1:t.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
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
    background-color: ${({selected:e,theme:t})=>e?t.surface2:(0,u._j)(.05,t.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,I=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-8b042b4f-3"})`
  ${v.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,S=h.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-8b042b4f-4"})`
  ${v.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,A=(0,h.default)(S).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-8b042b4f-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,O=h.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-8b042b4f-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,B=(0,h.default)(f.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-8b042b4f-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
    stroke-width: 1.5px;
  }
`,U=h.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-8b042b4f-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${x.j$.sm}px) {
    font-size: 16px;
  }
`,D=h.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-8b042b4f-9"})`
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
`,P=(0,h.default)(w.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-8b042b4f-10"})`
  ${l._Q};
  text-align: left;
`,$=(0,h.default)(d.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-8b042b4f-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function M({value:e,onUserInput:t,onMax:n,showMaxButton:d,onCurrencySelect:u,currency:x,otherCurrency:v,id:f,currencySearchFilters:j,showCurrencyAmount:w,renderBalance:S,fiatValue:M,hideBalance:L=!1,pair:z=null,hideInput:Y=!1,locked:F=!1,loading:W=!1,...q}){var Z,G,H,V,K;const[X,J]=(0,p.useState)(!1),{account:Q,chainId:ee}=(0,a.useWeb3React)(),te=(0,y._h)(Q??void 0,x??void 0),ne=(0,h.useTheme)(),{formatCurrencyAmount:ie}=(0,g.Gb)(),re=(0,p.useCallback)((()=>{J(!1)}),[J]),oe=(0,c.EC)(ee);return(0,i.jsxs)(E,{id:f,hideInput:Y,...q,children:[!F&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(k,{hideInput:Y,disabled:!oe,children:[(0,i.jsxs)(I,{style:Y?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!Y&&(0,i.jsx)(P,{className:"token-amount-input",value:e,onUserInput:t,disabled:!oe,$loading:W,maxDecimals:null===(Z=x)||void 0===Z?void 0:Z.decimals}),(0,i.jsx)($,{shouldFetchOnAccountUpdate:X,$fullWidth:Y,children:(0,i.jsx)(T,{disabled:!oe,visible:void 0!==x,selected:!!x,hideInput:Y,className:"open-currency-select-button",onClick:()=>{u&&J(!0)},pointerEvents:u?void 0:"none",children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(N.DA,{children:[z?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(b.Z,{currency0:z.token0,currency1:z.token1,size:24,margin:!0})}):x&&(0,i.jsx)(C.Z,{style:{marginRight:"0.5rem"},currency:x,size:"24px"}),z?(0,i.jsxs)(U,{className:"pair-name-container",children:[null===(G=z)||void 0===G?void 0:G.token0.symbol,":",null===(H=z)||void 0===H?void 0:H.token1.symbol]}):(0,i.jsx)(U,{className:"token-symbol-container",active:Boolean(x&&x.symbol),children:(x&&x.symbol&&x.symbol.length>20?x.symbol.slice(0,4)+"..."+x.symbol.slice(x.symbol.length-5,x.symbol.length):null===(V=x)||void 0===V?void 0:V.symbol)||(0,i.jsx)(r.cC,{id:"T0Y2+3"})})]}),u&&(0,i.jsx)(B,{selected:!!x})]})})})]}),Boolean(!Y&&!L&&x)&&(0,i.jsx)(A,{children:(0,i.jsxs)(N.m0,{children:[(0,i.jsx)(l.EG,{$loading:W,children:M&&(0,i.jsx)(_.x,{fiatValue:M})}),Q&&(0,i.jsxs)(N.DA,{style:{height:"17px"},children:[(0,i.jsx)(m.Tv.DeprecatedBody,{onClick:n,color:ne.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!L&&x&&te)&&((null===(K=S)||void 0===K?void 0:K(te))||(0,i.jsx)(r.cC,{id:"VuFd5C",values:{0:ie({amount:te,type:g.sw.TokenNonTx})}}))}),Boolean(d&&te)&&(0,i.jsx)(s.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(D,{onClick:n,children:(0,i.jsx)(r.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,i.jsx)(R.Z,{isOpen:X,onDismiss:re,onCurrencySelect:u,selectedCurrency:x,otherSelectedCurrency:v,showCurrencyAmount:w,currencySearchFilters:j})]})}},39753:(e,t,n)=>{n.d(t,{q:()=>C,w:()=>N});var i=n(92936),r=n(31017),o=n(88846),a=n(1347),s=n(21926),l=n(43454),d=n(6282),c=n(22953),u=n(47856),p=n(47632),h=n(31744),x=n(61152),m=n(54972),v=n(55874),g=n(94284);const f=x.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-b673d9be-0"})`
  ${v.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,x.default)(l.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-b673d9be-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,j=(0,x.default)(m.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-b673d9be-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,x.default)(s.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-b673d9be-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,i.jsx)(f,{children:(0,i.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(l.rU,{to:e,children:(0,i.jsx)(b,{})}),(0,i.jsx)(j,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const w=(0,x.default)(m.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-b673d9be-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function N({adding:e,creating:t,autoSlippage:n,children:s}){const{chainId:l}=(0,o.useWeb3React)(),m=(0,x.useTheme)(),v=(0,u.T)(),j=(0,d.s0)();return(0,i.jsx)(f,{children:(0,i.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(y,{to:"..",onClick:t=>{t.preventDefault(),j(-1),e&&(v((0,p.dA)()),v((0,h.dA)()))},flex:s?"1":void 0,children:(0,i.jsx)(b,{stroke:m.neutral2})}),(0,i.jsx)(w,{$center:!s,children:t?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),s&&(0,i.jsx)(c.xu,{style:{marginRight:".5rem"},children:s}),(0,i.jsx)(a.Z,{autoSlippage:n,chainId:l,hideRoutingSettings:!0})]})})}},82731:(e,t,n)=>{n.d(t,{SS:()=>h,sq:()=>d,MN:()=>c,RF:()=>u,uO:()=>p,I8:()=>l});var i=n(61152);const r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",a=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var s=n(44591);const l=(0,i.default)(s.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${a});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,p=(0,i.default)(s.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},31508:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(92936),r=n(31017),o=n(88846),a=n(69780),s=n(61182),l=n(44591),d=n(5967),c=n(2562),u=n(94284),p=n(45779),h=n(61152),x=n(54972),m=n(62587),v=n(39671),g=n(54703);const f=h.default.div.withConfig({displayName:"UnsupportedCurrencyFooter__DetailsFooter",componentId:"sc-b083a83b-0"})`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${m.k.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,y=(0,h.default)(a.qL).withConfig({displayName:"UnsupportedCurrencyFooter__StyledButtonEmpty",componentId:"sc-b083a83b-1"})`
  text-decoration: none;
`,j=(0,h.default)(x.Tv.DeprecatedBlue).withConfig({displayName:"UnsupportedCurrencyFooter__AddressText",componentId:"sc-b083a83b-2"})`
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function b({show:e,currencies:t}){const{chainId:n}=(0,o.useWeb3React)(),[a,h]=(0,p.useState)(!1),m=n&&t?t.map((e=>{var t;return null===(t=e)||void 0===t?void 0:t.wrapped})):[],b=(0,v.l6)();return(0,i.jsxs)(f,{show:e,children:[(0,i.jsx)(c.Z,{isOpen:a,onDismiss:()=>h(!1),children:(0,i.jsx)(s.ZP,{padding:"2rem",children:(0,i.jsxs)(l.Tz,{gap:"lg",children:[(0,i.jsxs)(u.m0,{children:[(0,i.jsx)(x.Tv.DeprecatedMediumHeader,{children:(0,i.jsx)(r.cC,{id:"7Osz32"})}),(0,i.jsx)(x.Tw,{onClick:()=>h(!1),"data-testid":"close-icon"})]}),m.map((e=>{var t;return e&&b&&Object.keys(b).includes(e.address)&&(0,i.jsx)(s.nq,{"data-testid":"unsupported-token-card",children:(0,i.jsxs)(l.Tz,{gap:"10px",children:[(0,i.jsxs)(u.BA,{gap:"5px",align:"center",children:[(0,i.jsx)(d.Z,{currency:e,size:"24px"}),(0,i.jsx)(x.Tv.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),n&&(0,i.jsx)(x.dL,{href:(0,g.E)(n,e.address,g.r.ADDRESS),children:(0,i.jsx)(j,{children:e.address})})]})},null===(t=e.address)||void 0===t?void 0:t.concat("not-supported"))})),(0,i.jsx)(l.Tz,{gap:"lg",children:(0,i.jsx)(x.Tv.DeprecatedBody,{fontWeight:535,children:(0,i.jsx)(r.cC,{id:"l7X7DE"})})})]})})}),(0,i.jsx)(y,{padding:"0",onClick:()=>h(!0),"data-testid":"read-more-button",children:(0,i.jsx)(x.Tv.DeprecatedBlue,{children:(0,i.jsx)(r.cC,{id:"bIjYSY"})})})]})}},36813:(e,t,n)=>{n.d(t,{K:()=>j});var i=n(76078),r=n(21651),o=n(88846),a=n(63945),s=n(61592),l=n.n(s),d=n(63490),c=n.n(d),u=n(45779);const p=8;function h(e,t,n,i,o,a){let s={...n},d=[];for(let c=o+(a?1:-1);a?c<i.length:c>=0;a?c++:c--){const n=Number(i[c].tick),o=(0,r.tickToPrice)(e,t,n),u={liquidityActive:s.liquidityActive,tick:n,liquidityNet:l().BigInt(i[c].liquidityNet),price0:o.toFixed(p),sdkPrice:o};a?u.liquidityActive=l().add(s.liquidityActive,l().BigInt(i[c].liquidityNet)):!a&&l().notEqual(s.liquidityNet,l().BigInt(0))&&(u.liquidityActive=l().subtract(s.liquidityActive,s.liquidityNet)),d.push(u),s=u}return a||(d=d.reverse()),d}var x=n(25321),m=n(55660);const v=8,g=(e,t)=>e&&t?Math.floor(e/r.TICK_SPACINGS[t])*r.TICK_SPACINGS[t]:void 0;const f=1e3;function y(e,t,n,o){var s,l;const[d,p]=(0,u.useState)(0),[h,m]=(0,u.useState)([]),{data:v,error:g,loading:y}=function(e,t,n,o=0,s){var l,d,u;const p=x.u[s],h=e&&t&&n?r.Pool.getAddress(null===(l=e)||void 0===l?void 0:l.wrapped,null===(d=t)||void 0===d?void 0:d.wrapped,n,void 0,s?i.V3_CORE_FACTORY_ADDRESSES[s]:void 0):void 0;return(0,a.K_)({variables:{poolAddress:null===(u=h)||void 0===u?void 0:u.toLowerCase(),skip:o},skip:!h,pollInterval:c()("30s"),client:p})}(e,t,n,d,o);return(0,u.useEffect)((()=>{var e;(null===(e=v)||void 0===e?void 0:e.ticks.length)&&(m((e=>[...e,...v.ticks])),v.ticks.length===f&&p((e=>e+f)))}),[null===(s=v)||void 0===s?void 0:s.ticks]),{isLoading:y||(null===(l=v)||void 0===l?void 0:l.ticks.length)===f,error:g,ticks:h}}function j(e,t,n,a){var s,d,c,p,x;const f=(0,o.useWeb3React)().chainId??i.ChainId.MAINNET,j=(0,m.$o)(null===(s=e)||void 0===s?void 0:s.wrapped,null===(d=t)||void 0===d?void 0:d.wrapped,n,a??f),b=null===(c=j[1])||void 0===c?void 0:c.liquidity,C=null===(p=j[1])||void 0===p?void 0:p.sqrtRatioX96,w=null===(x=j[1])||void 0===x?void 0:x.tickCurrent,N=(0,u.useMemo)((()=>g(w,n)),[w,n]),{isLoading:R,error:_,ticks:E}=y(e,t,n,a??f);return(0,u.useMemo)((()=>{var n,i,o;if(!e||!t||void 0===N||j[0]!==m.tK.EXISTS||!E||0===E.length||R)return{isLoading:R||j[0]===m.tK.LOADING,error:_,activeTick:N,data:void 0};const a=null===(n=e)||void 0===n?void 0:n.wrapped,s=null===(i=t)||void 0===i?void 0:i.wrapped,d=E.findIndex((({tick:e})=>e>N))-1;if(d<0)return console.error("TickData pivot not found"),{isLoading:R,error:_,activeTick:N,data:void 0};const c=(0,r.tickToPrice)(a,s,N),u={liquidityActive:l().BigInt((null===(o=j[1])||void 0===o?void 0:o.liquidity)??0),tick:N,liquidityNet:Number(E[d].tick)===N?l().BigInt(E[d].liquidityNet):l().BigInt(0),price0:c.toFixed(v),sdkPrice:c},p=h(a,s,u,E,d,!0),x=h(a,s,u,E,d,!1).concat(u).concat(p);return{isLoading:R,error:_,currentTick:w,activeTick:N,liquidity:b,sqrtPriceX96:C,data:x}}),[e,t,N,j,E,R,_,w,b,C])}},19759:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Bt});var i=n(92936),r=n(88846),o=n(6282),a=n(64370),s=n(11604),l=n(31017),d=n(5985),c=n(76078),u=n(21651),p=n(47583),h=n(25320),x=n(57221),m=n(61152),v=n(54972);const g=m.default.div.withConfig({displayName:"OwnershipWarning__ExplainerText",componentId:"sc-bef8de1f-0"})`
  color: ${({theme:e})=>e.neutral2};
`,f=m.default.div.withConfig({displayName:"OwnershipWarning__TitleRow",componentId:"sc-bef8de1f-1"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${({theme:e})=>e.deprecated_accentWarning};
  margin-bottom: 8px;
`,y=m.default.div.withConfig({displayName:"OwnershipWarning__Wrapper",componentId:"sc-bef8de1f-2"})`
  background-color: ${({theme:e})=>e.deprecated_accentWarningSoft};
  border-radius: 16px;
  margin-top: 12px;
  max-width: 480px;
  padding: 12px 20px;
  width: 100%;
`,j=({ownerAddress:e})=>(0,i.jsxs)(y,{children:[(0,i.jsxs)(f,{children:[(0,i.jsx)(x.Z,{style:{marginRight:"8px"}}),(0,i.jsx)(v.Tv.SubHeader,{color:"deprecated_accentWarning",children:(0,i.jsx)(l.cC,{id:"r6y+jM"})})]}),(0,i.jsx)(g,{children:(0,i.jsx)(l.cC,{id:"7o/WJ5",values:{ownerAddress:e}})})]});var b=n(31508),C=n(57852),w=n(33986),N=n(84938),R=n(65118),_=n(26522),E=n(45779),k=n(43454),T=n(22953),I=n(56360),S=n(38004),A=n(63420),O=n(66136),B=n(69780),U=n(61182),D=n(44591),P=n(74293),$=n(89482),M=n(23116),L=n(63415),z=n(51349),Y=n(36399),F=n(13310),W=n(68090),q=n.n(W);function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Z.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var H=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,a=G(e,["color","size"]);return E.createElement("svg",Z({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),E.createElement("path",{d:"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"}),E.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))}));H.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},H.displayName="CloudOff";const V=H;function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},K.apply(this,arguments)}function X(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var J=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,a=X(e,["color","size"]);return E.createElement("svg",K({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),E.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),E.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),E.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"14"}))}));J.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},J.displayName="BarChart2";const Q=J;var ee=n(506),te=n(31744),ne=n(37399);const ie=m.default.path.withConfig({displayName:"Area__Path",componentId:"sc-c8247e1b-0"})`
  opacity: 0.5;
  stroke: ${({fill:e,theme:t})=>e??t.accent1};
  fill: ${({fill:e,theme:t})=>e??t.accent1};
`,re=({series:e,xScale:t,yScale:n,xValue:r,yValue:o,fill:a})=>(0,E.useMemo)((()=>(0,i.jsx)(ie,{fill:a,d:(0,ne.SOn)().curve(ne.jsv).x((e=>t(r(e)))).y1((e=>n(o(e)))).y0(n(0))(e.filter((e=>{const n=t(r(e));return n>0&&n<=window.innerWidth})))??void 0})),[a,e,t,r,n,o]),oe=m.default.g.withConfig({displayName:"AxisBottom__StyledGroup",componentId:"sc-1b9173d1-0"})`
  line {
    display: none;
  }

  text {
    color: ${({theme:e})=>e.neutral2};
    transform: translateY(5px);
  }
`,ae=({axisGenerator:e})=>(0,i.jsx)("g",{ref:t=>{t&&(0,ne.Ys)(t).call(e).call((e=>e.select(".domain").remove()))}}),se=({xScale:e,innerHeight:t,offset:n=0})=>(0,E.useMemo)((()=>(0,i.jsx)(oe,{transform:`translate(0, ${t+n})`,children:(0,i.jsx)(ae,{axisGenerator:(0,ne.LLu)(e).ticks(6)})})),[t,n,e]),le=e=>["M 0 0",`v ${e}`,"m 1 0","V 0","M 0 1","h 12","q 2 0, 2 2","v 22","q 0 2 -2 2","h -12","z"].join(" "),de=()=>["m 5 7","v 14","M 0 0","m 9 7","v 14","z"].join(" "),ce=({color:e,size:t=10,margin:n=10})=>(0,i.jsx)("polygon",{points:`0 0, ${t} ${t}, 0 ${t}`,transform:` translate(${t+n}, ${n}) rotate(45) `,fill:e,stroke:e,strokeWidth:"4",strokeLinejoin:"round"}),ue=m.default.path.withConfig({displayName:"Brush__Handle",componentId:"sc-ed435ec7-0"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 3;
  stroke: ${({color:e})=>e};
  fill: ${({color:e})=>e};
`,pe=m.default.path.withConfig({displayName:"Brush__HandleAccent",componentId:"sc-ed435ec7-1"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 1.5;
  stroke: ${({theme:e})=>e.white};
  opacity: ${({theme:e})=>e.opacity.hover};
`,he=m.default.g.withConfig({displayName:"Brush__LabelGroup",componentId:"sc-ed435ec7-2"})`
  opacity: ${({visible:e})=>e?"1":"0"};
  transition: opacity 300ms;
`,xe=m.default.rect.withConfig({displayName:"Brush__TooltipBackground",componentId:"sc-ed435ec7-3"})`
  fill: ${({theme:e})=>e.surface3};
`,me=m.default.text.withConfig({displayName:"Brush__Tooltip",componentId:"sc-ed435ec7-4"})`
  text-anchor: middle;
  font-size: 13px;
  fill: ${({theme:e})=>e.neutral1};
`,ve=(e,t,n)=>{const i=e.map((e=>n(e).toFixed(1))),r=t.map((e=>n(e).toFixed(1)));return i.every(((e,t)=>e===r[t]))},ge=({id:e,xScale:t,interactive:n,brushLabelValue:r,brushExtent:o,setBrushExtent:a,innerWidth:s,innerHeight:l,westHandleColor:d,eastHandleColor:c})=>{const u=(0,E.useRef)(null),p=(0,E.useRef)(null),[h,x]=(0,E.useState)(o),[m,v]=(0,E.useState)(!1),[g,f]=(0,E.useState)(!1),y=(0,w.Z)(o),j=(0,E.useCallback)((e=>{const{type:n,selection:i,mode:r}=e;if(!i)return void x(null);const s=i.map(t.invert);"end"!==n||ve(o,s,t)||a(s,r),x(s)}),[t,o,a]);(0,E.useEffect)((()=>{x(o)}),[o]),(0,E.useEffect)((()=>{u.current&&(p.current=(0,ne.Yud)().extent([[Math.max(2,t(0)),0],[s-2,l]]).handleSize(30).filter((()=>n)).on("brush end",j),p.current((0,ne.Ys)(u.current)),y&&ve(o,y,t)&&(0,ne.Ys)(u.current).transition().call(p.current.move,o.map(t)),(0,ne.Ys)(u.current).selectAll(".selection").attr("stroke","none").attr("fill-opacity","0.1").attr("fill",`url(#${e}-gradient-selection)`))}),[o,j,e,l,s,n,y,t]),(0,E.useEffect)((()=>{u.current&&p.current&&p.current.move((0,ne.Ys)(u.current),o.map(t))}),[o,t]),(0,E.useEffect)((()=>{v(!0);const e=setTimeout((()=>v(!1)),1500);return()=>clearTimeout(e)}),[h]);const b=h&&t(h[0])>20,C=h&&t(h[1])>s-20,N=h&&(t(h[0])<0||t(h[1])<0),R=h&&(t(h[0])>s||t(h[1])>s),_=h&&t(h[0])>=0&&t(h[0])<=s,k=h&&t(h[1])>=0&&t(h[1])<=s;return(0,E.useMemo)((()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:`${e}-gradient-selection`,x1:"0%",y1:"100%",x2:"100%",y2:"100%",children:[(0,i.jsx)("stop",{stopColor:d}),(0,i.jsx)("stop",{stopColor:c,offset:"1"})]}),(0,i.jsx)("clipPath",{id:`${e}-brush-clip`,children:(0,i.jsx)("rect",{x:"0",y:"0",width:s,height:l})})]}),(0,i.jsx)("g",{ref:u,clipPath:`url(#${e}-brush-clip)`,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1)}),h&&(0,i.jsxs)(i.Fragment,{children:[_?(0,i.jsxs)("g",{transform:`translate(${Math.max(0,t(h[0]))}, 0), scale(${b?"-1":"1"}, 1)`,children:[(0,i.jsxs)("g",{children:[(0,i.jsx)(ue,{color:d,d:le(l)}),(0,i.jsx)(pe,{d:de()})]}),(0,i.jsxs)(he,{transform:`translate(50,0), scale(${b?"1":"-1"}, 1)`,visible:m||g,children:[(0,i.jsx)(xe,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,i.jsx)(me,{transform:"scale(-1, 1)",y:"15",dominantBaseline:"middle",children:r("w",h[0])})]})]}):null,k?(0,i.jsxs)("g",{transform:`translate(${t(h[1])}, 0), scale(${C?"-1":"1"}, 1)`,children:[(0,i.jsxs)("g",{children:[(0,i.jsx)(ue,{color:c,d:le(l)}),(0,i.jsx)(pe,{d:de()})]}),(0,i.jsxs)(he,{transform:`translate(50,0), scale(${C?"-1":"1"}, 1)`,visible:m||g,children:[(0,i.jsx)(xe,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,i.jsx)(me,{y:"15",dominantBaseline:"middle",children:r("e",h[1])})]})]}):null,N&&(0,i.jsx)(ce,{color:d}),R&&(0,i.jsx)("g",{transform:`translate(${s}, 0) scale(-1, 1)`,children:(0,i.jsx)(ce,{color:c})})]})]})),[r,c,k,C,b,g,e,l,s,h,R,m,N,d,_,t])},fe=m.default.line.withConfig({displayName:"Line__StyledLine",componentId:"sc-2ba89400-0"})`
  opacity: 0.5;
  stroke-width: 2;
  stroke: ${({theme:e})=>e.neutral1};
  fill: none;
`,ye=({value:e,xScale:t,innerHeight:n})=>(0,E.useMemo)((()=>(0,i.jsx)(fe,{x1:t(e),y1:"0",x2:t(e),y2:n})),[e,t,n]);function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},je.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ce=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,a=be(e,["color","size"]);return E.createElement("svg",je({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),E.createElement("polyline",{points:"1 4 1 10 7 10"}),E.createElement("polyline",{points:"23 20 23 14 17 14"}),E.createElement("path",{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}))}));Ce.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},Ce.displayName="RefreshCcw";const we=Ce;function Ne(){return Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ne.apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _e=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,a=Re(e,["color","size"]);return E.createElement("svg",Ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),E.createElement("circle",{cx:"11",cy:"11",r:"8"}),E.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),E.createElement("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),E.createElement("line",{x1:"8",y1:"11",x2:"14",y2:"11"}))}));_e.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},_e.displayName="ZoomIn";const Ee=_e;function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ke.apply(this,arguments)}function Te(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ie=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,a=Te(e,["color","size"]);return E.createElement("svg",ke({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),E.createElement("circle",{cx:"11",cy:"11",r:"8"}),E.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),E.createElement("line",{x1:"8",y1:"11",x2:"14",y2:"11"}))}));Ie.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},Ie.displayName="ZoomOut";const Se=Ie,Ae=m.default.div.withConfig({displayName:"Zoom__Wrapper",componentId:"sc-226f9ef9-0"})`
  display: grid;
  grid-template-columns: repeat(${({count:e})=>e.toString()}, 1fr);
  grid-gap: 6px;

  position: absolute;
  top: -32px;
  right: 0;
`,Oe=(0,m.default)(B.Ux).withConfig({displayName:"Zoom__Button",componentId:"sc-226f9ef9-1"})`
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
    color: ${({theme:e})=>e.neutral1};
  }

  width: 32px;
  height: 32px;
  padding: 4px;
`,Be=m.default.rect.withConfig({displayName:"Zoom__ZoomOverlay",componentId:"sc-226f9ef9-2"})`
  fill: transparent;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;function Ue({svg:e,xScale:t,setZoom:n,width:r,height:o,resetBrush:a,showResetButton:s,zoomLevels:l}){const d=(0,E.useRef)(),[c,u,p,h]=(0,E.useMemo)((()=>[()=>e&&d.current&&(0,ne.Ys)(e).transition().call(d.current.scaleBy,2),()=>e&&d.current&&(0,ne.Ys)(e).transition().call(d.current.scaleBy,.5),()=>e&&d.current&&(0,ne.Ys)(e).transition().call(d.current.scaleTo,.5),()=>e&&d.current&&(0,ne.Ys)(e).call(d.current.transform,ne.CRH.translate(0,0).scale(1)).transition().call(d.current.scaleTo,.5)]),[e]);return(0,E.useEffect)((()=>{e&&(d.current=(0,ne.sPX)().scaleExtent([l.min,l.max]).extent([[0,0],[r,o]]).on("zoom",(({transform:e})=>n(e))),(0,ne.Ys)(e).call(d.current))}),[o,r,n,e,t,d,l,l.max,l.min]),(0,E.useEffect)((()=>{p()}),[p,l]),(0,i.jsxs)(Ae,{count:s?3:2,children:[s&&(0,i.jsx)(Oe,{onClick:()=>{a(),h()},disabled:!1,children:(0,i.jsx)(we,{size:16})}),(0,i.jsx)(Oe,{onClick:c,disabled:!1,children:(0,i.jsx)(Ee,{size:16})}),(0,i.jsx)(Oe,{onClick:u,disabled:!1,children:(0,i.jsx)(Se,{size:16})})]})}const De=e=>e.price0,Pe=e=>e.activeLiquidity;function $e({id:e="liquidityChartRangeInput",data:{series:t,current:n},ticksAtLimit:r,styles:o,dimensions:{width:a,height:s},margins:l,interactive:d=!0,brushDomain:c,brushLabels:u,onBrushDomainChange:p,zoomLevels:h}){const x=(0,E.useRef)(null),[m,v]=(0,E.useState)(null),[g,f]=(0,E.useMemo)((()=>[s-l.top-l.bottom,a-l.left-l.right]),[a,s,l]),{xScale:y,yScale:j}=(0,E.useMemo)((()=>{const e={xScale:(0,ne.BYU)().domain([n*h.initialMin,n*h.initialMax]).range([0,f]),yScale:(0,ne.BYU)().domain([0,(0,ne.Fp7)(t,Pe)]).range([g,0])};if(m){const t=m.rescaleX(e.xScale);e.xScale.domain(t.domain())}return e}),[n,h.initialMin,h.initialMax,f,t,g,m]);return(0,E.useEffect)((()=>{v(null)}),[h]),(0,E.useEffect)((()=>{c||p(y.domain(),void 0)}),[c,p,y]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ue,{svg:x.current,xScale:y,setZoom:v,width:f,height:s,resetBrush:()=>{p([n*h.initialMin,n*h.initialMax],"reset")},showResetButton:Boolean(r[te.Mb.LOWER]||r[te.Mb.UPPER]),zoomLevels:h}),(0,i.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${s}`,style:{overflow:"visible"},children:[(0,i.jsxs)("defs",{children:[(0,i.jsx)("clipPath",{id:`${e}-chart-clip`,children:(0,i.jsx)("rect",{x:"0",y:"0",width:f,height:s})}),c&&(0,i.jsx)("mask",{id:`${e}-chart-area-mask`,children:(0,i.jsx)("rect",{fill:"white",x:y(c[0]),y:"0",width:y(c[1])-y(c[0]),height:g})})]}),(0,i.jsxs)("g",{transform:`translate(${l.left},${l.top})`,children:[(0,i.jsxs)("g",{clipPath:`url(#${e}-chart-clip)`,children:[(0,i.jsx)(re,{series:t,xScale:y,yScale:j,xValue:De,yValue:Pe}),c&&(0,i.jsx)("g",{mask:`url(#${e}-chart-area-mask)`,children:(0,i.jsx)(re,{series:t,xScale:y,yScale:j,xValue:De,yValue:Pe,fill:o.area.selection})}),(0,i.jsx)(ye,{value:n,xScale:y,innerHeight:g}),(0,i.jsx)(se,{xScale:y,innerHeight:g})]}),(0,i.jsx)(Be,{width:f,height:s,ref:x}),(0,i.jsx)(ge,{id:e,xScale:y,interactive:d,brushLabelValue:u,brushExtent:c??y.domain(),innerWidth:f,innerHeight:g,setBrushExtent:p,westHandleColor:o.brush.handle.west,eastHandleColor:o.brush.handle.east})]})]})]})}var Me=n(36813);const Le={[u.FeeAmount.LOWEST]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[u.FeeAmount.LOW]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[u.FeeAmount.MEDIUM]:{initialMin:.5,initialMax:2,min:1e-5,max:20},[u.FeeAmount.HIGH]:{initialMin:.5,initialMax:2,min:1e-5,max:20}},ze=m.default.div.withConfig({displayName:"LiquidityChartRangeInput__ChartWrapper",componentId:"sc-fcc12d5e-0"})`
  position: relative;
  width: 100%;
  max-height: 200px;
  justify-content: center;
  align-content: center;
`;function Ye({message:e,icon:t}){return(0,i.jsxs)(D.lg,{style:{height:"100%",justifyContent:"center"},children:[t,e&&(0,i.jsx)(v.Tv.DeprecatedMediumHeader,{padding:10,marginTop:"20px",textAlign:"center",children:e})]})}function Fe({currencyA:e,currencyB:t,feeAmount:n,ticksAtLimit:r,price:o,priceLower:a,priceUpper:s,onLeftRangeInput:d,onRightRangeInput:c,interactive:p}){var h,x,v;const g=(0,m.useTheme)(),f=(0,z.r)(e),y=(0,z.r)(t),j=e&&t&&(null===(x=e)||void 0===x?void 0:x.wrapped.sortsBefore(null===(h=t)||void 0===h?void 0:h.wrapped)),{isLoading:b,error:C,formattedData:w}=function({currencyA:e,currencyB:t,feeAmount:n}){const{isLoading:i,error:r,data:o}=(0,Me.K)(e,t,n),a=(0,E.useCallback)((()=>{var e;if(!(null===(e=o)||void 0===e?void 0:e.length))return;const t=[];for(let n=0;n<o.length;n++){const e=o[n],i={activeLiquidity:parseFloat(e.liquidityActive.toString()),price0:parseFloat(e.price0)};i.activeLiquidity>0&&t.push(i)}return t}),[o]);return(0,E.useMemo)((()=>({isLoading:i,error:r,formattedData:i?void 0:a()})),[i,r,a])}({currencyA:e,currencyB:t,feeAmount:n}),N=(0,E.useCallback)(((e,t)=>{let n=Number(e[0]);const i=Number(e[1]);n<=0&&(n=1/10**6),(0,ee.dC)((()=>{(!r[j?te.Mb.LOWER:te.Mb.UPPER]||"handle"===t||"reset"===t)&&n>0&&d(n.toFixed(6)),(!r[j?te.Mb.UPPER:te.Mb.LOWER]||"reset"===t)&&i>0&&i<1e35&&c(i.toFixed(6))}))}),[j,d,c,r]);p=p&&Boolean(null===(v=w)||void 0===v?void 0:v.length);const R=(0,E.useMemo)((()=>{var e,t,n,i;const r=j?a:null===(e=s)||void 0===e?void 0:e.invert(),o=j?s:null===(t=a)||void 0===t?void 0:t.invert();return r&&o?[parseFloat(null===(n=r)||void 0===n?void 0:n.toSignificant(6)),parseFloat(null===(i=o)||void 0===i?void 0:i.toSignificant(6))]:void 0}),[j,a,s]),{formatDelta:_}=(0,O.Gb)(),k=(0,E.useCallback)(((e,t)=>{if(!o)return"";if("w"===e&&r[j?te.Mb.LOWER:te.Mb.UPPER])return"0";if("e"===e&&r[j?te.Mb.UPPER:te.Mb.LOWER])return"\u221e";const n=(t<o?-1:1)*((Math.max(t,o)-Math.min(t,o))/o)*100;return o?""+((Math.sign(n)<0?"-":"")+_(n)):""}),[_,j,o,r]),T=!e||!t||void 0===w&&!b;return(0,i.jsx)(D.Tz,{gap:"md",style:{minHeight:"200px"},children:T?(0,i.jsx)(Ye,{message:(0,i.jsx)(l.cC,{id:"OZUH85"}),icon:(0,i.jsx)(F.Z,{size:56,stroke:g.neutral1})}):b?(0,i.jsx)(Ye,{icon:(0,i.jsx)(L.ZP,{size:"40px",stroke:g.neutral2})}):C?(0,i.jsx)(Ye,{message:(0,i.jsx)(l.cC,{id:"79D0qY"}),icon:(0,i.jsx)(V,{size:56,stroke:g.neutral2})}):w&&0!==w.length&&o?(0,i.jsx)(ze,{children:(0,i.jsx)($e,{data:{series:w,current:o},dimensions:{width:560,height:200},margins:{top:10,right:2,bottom:20,left:0},styles:{area:{selection:g.accent1},brush:{handle:{west:(0,Y.p_)(.1,f)??g.critical,east:(0,Y.p_)(.1,y)??g.accent1}}},interactive:p,brushLabels:k,brushDomain:R,onBrushDomainChange:N,zoomLevels:Le[n??u.FeeAmount.MEDIUM],ticksAtLimit:r})}):(0,i.jsx)(Ye,{message:(0,i.jsx)(l.cC,{id:"rH6vg9"}),icon:(0,i.jsx)(Q,{size:56,stroke:g.neutral2})})})}var We=n(39753),qe=n(73499),Ze=n(47841),Ge=n(82731),He=n(5967),Ve=n(8963),Ke=n(94284),Xe=n(13820),Je=n(61592),Qe=n.n(Je),et=n(5347);const tt=({position:e,title:t,inRange:n,baseCurrencyDefault:r,ticksAtLimit:o})=>{var a,s,d,c,u,p,h,x,g,f;const y=(0,m.useTheme)(),{formatCurrencyAmount:j,formatDelta:b,formatPrice:C,formatTickPrice:w}=(0,O.Gb)(),N=(0,et.B)(e.pool.token0),R=(0,et.B)(e.pool.token1),[_,k]=(0,E.useState)(r?r===N?N:r===R?R:N:N),T=_===N,I=T?R:N,S=T?e.pool.priceOf(e.pool.token0):e.pool.priceOf(e.pool.token1),A=T?e.token0PriceLower:e.token0PriceUpper.invert(),B=T?e.token0PriceUpper:e.token0PriceLower.invert(),P=(0,E.useCallback)((()=>{k(I)}),[I]),$=(null===(a=e)||void 0===a?void 0:a.liquidity)&&Qe().equal(null===(s=e)||void 0===s?void 0:s.liquidity,Qe().BigInt(0));return(0,i.jsxs)(D.Tz,{gap:"md",style:{marginTop:"0.5rem"},children:[(0,i.jsxs)(Ke.m0,{style:{marginBottom:"0.5rem"},children:[(0,i.jsxs)(Ke.DA,{children:[(0,i.jsx)(Ze.Z,{currency0:N??void 0,currency1:R??void 0,size:24,margin:!0}),(0,i.jsxs)(v.Tv.DeprecatedLabel,{ml:"10px",fontSize:"24px",children:[null===(d=N)||void 0===d?void 0:d.symbol," / ",null===(c=R)||void 0===c?void 0:c.symbol]})]}),(0,i.jsx)(qe.Z,{removed:$,inRange:n})]}),(0,i.jsx)(U.hl,{children:(0,i.jsxs)(D.Tz,{gap:"md",children:[(0,i.jsxs)(Ke.m0,{children:[(0,i.jsxs)(Ke.DA,{children:[(0,i.jsx)(He.Z,{currency:N}),(0,i.jsx)(v.Tv.DeprecatedLabel,{ml:"8px",children:null===(u=N)||void 0===u?void 0:u.symbol})]}),(0,i.jsx)(Ke.DA,{children:(0,i.jsx)(v.Tv.DeprecatedLabel,{mr:"8px",children:j({amount:e.amount0})})})]}),(0,i.jsxs)(Ke.m0,{children:[(0,i.jsxs)(Ke.DA,{children:[(0,i.jsx)(He.Z,{currency:R}),(0,i.jsx)(v.Tv.DeprecatedLabel,{ml:"8px",children:null===(p=R)||void 0===p?void 0:p.symbol})]}),(0,i.jsx)(Ke.DA,{children:(0,i.jsx)(v.Tv.DeprecatedLabel,{mr:"8px",children:j({amount:e.amount1})})})]}),(0,i.jsx)(Ge.SS,{}),(0,i.jsxs)(Ke.m0,{children:[(0,i.jsx)(v.Tv.DeprecatedLabel,{children:(0,i.jsx)(l.cC,{id:"EU3wU4"})}),(0,i.jsx)(v.Tv.DeprecatedLabel,{children:(0,i.jsx)(l.cC,{id:"J/hVSQ",values:{0:b((null===(x=e)||void 0===x||null===(h=x.pool)||void 0===h?void 0:h.fee)/Xe.PM)}})})]})]})}),(0,i.jsxs)(D.Tz,{gap:"md",children:[(0,i.jsxs)(Ke.m0,{children:[t?(0,i.jsx)(v.Tv.DeprecatedMain,{children:t}):(0,i.jsx)("div",{}),(0,i.jsx)(Ve.Z,{currencyA:T?N:R,currencyB:T?R:N,handleRateToggle:P})]}),(0,i.jsxs)(Ke.m0,{children:[(0,i.jsx)(U.hl,{width:"48%",padding:"8px",children:(0,i.jsxs)(D.Tz,{gap:"4px",justify:"center",children:[(0,i.jsx)(v.Tv.DeprecatedMain,{fontSize:"12px",children:(0,i.jsx)(l.cC,{id:"EQs1sJ"})}),(0,i.jsx)(v.Tv.DeprecatedMediumHeader,{textAlign:"center",children:w({price:A,atLimit:o,direction:te.Mb.LOWER})}),(0,i.jsx)(v.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,i.jsx)(l.cC,{id:"7Z4WfS",values:{0:I.symbol,1:_.symbol}})}),(0,i.jsx)(v.Tv.DeprecatedSmall,{textAlign:"center",color:y.neutral3,style:{marginTop:"4px"},children:(0,i.jsx)(l.cC,{id:"WgTuci",values:{0:null===(g=_)||void 0===g?void 0:g.symbol}})})]})}),(0,i.jsx)(U.hl,{width:"48%",padding:"8px",children:(0,i.jsxs)(D.Tz,{gap:"4px",justify:"center",children:[(0,i.jsx)(v.Tv.DeprecatedMain,{fontSize:"12px",children:(0,i.jsx)(l.cC,{id:"5etEUX"})}),(0,i.jsx)(v.Tv.DeprecatedMediumHeader,{textAlign:"center",children:w({price:B,atLimit:o,direction:te.Mb.UPPER})}),(0,i.jsx)(v.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,i.jsx)(l.cC,{id:"7Z4WfS",values:{0:I.symbol,1:_.symbol}})}),(0,i.jsx)(v.Tv.DeprecatedSmall,{textAlign:"center",color:y.neutral3,style:{marginTop:"4px"},children:(0,i.jsx)(l.cC,{id:"WgTuci",values:{0:null===(f=I)||void 0===f?void 0:f.symbol}})})]})})]}),(0,i.jsx)(U.hl,{padding:"12px ",children:(0,i.jsxs)(D.Tz,{gap:"4px",justify:"center",children:[(0,i.jsx)(v.Tv.DeprecatedMain,{fontSize:"12px",children:(0,i.jsx)(l.cC,{id:"DWd30U"})}),(0,i.jsx)(v.Tv.DeprecatedMediumHeader,{children:`${C({price:S,type:O.sw.TokenTx})} `}),(0,i.jsx)(v.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,i.jsx)(l.cC,{id:"7Z4WfS",values:{0:I.symbol,1:_.symbol}})})]})})]})]})};var nt=n(83323);const it=(0,m.default)(B.JU).attrs((()=>({padding:"6px",$borderRadius:"8px"}))).withConfig({displayName:"PresetsButtons__Button",componentId:"sc-1074f274-0"})`
  color: ${({theme:e})=>e.neutral1};
  flex: 1;
`;function rt({onSetFullRange:e}){return(0,i.jsx)(Ke.BA,{gap:"4px",width:"auto",children:(0,i.jsx)(it,{"data-testid":"set-full-range",onClick:e,children:(0,i.jsx)(v.Tv.DeprecatedBody,{fontSize:12,children:(0,i.jsx)(l.cC,{id:"5IHTSS"})})})})}var ot=n(10672),at=n(99819),st=n(39671),lt=n(15463);const dt=JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"_transactions","type":"tuple[]"}],"name":"wc_multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_msgHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]');var ct=n(7151),ut=n(69583);var pt=n(55660);var ht=n(13919),xt=n(32682),mt=n(4650),vt=n(40413),gt=n(99454),ft=n(47186),yt=n(28098);const jt=new(n(51371).vU)([{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]);function bt(e,t){if(!e.currency.isToken)throw new Error("Must call with an amount of token");const n=jt.encodeFunctionData("approve",[t,(0,u.toHex)(e.quotient)]);return{to:e.currency.address,data:n,value:"0x0"}}var Ct=n(64510),wt=n(17202),Nt=n(7501),Rt=n(40926);const _t=m.default.div.withConfig({displayName:"Review__Wrapper",componentId:"sc-66673065-0"})`
  padding-top: 12px;
`;function Et({position:e,outOfRange:t,ticksAtLimit:n}){return(0,i.jsx)(_t,{children:(0,i.jsx)(D.Tz,{gap:"lg",children:e?(0,i.jsx)(tt,{position:e,inRange:!t,ticksAtLimit:n,title:"Selected Range"}):null})})}var kt=n(41075);function Tt(e,t,n,i,r,o,a){try{var s=e[o](a),l=s.value}catch(d){return void n(d)}s.done?t(l):Promise.resolve(l).then(i,r)}const It=new c.Percent(50,1e4),St=(0,m.default)(R.e).withConfig({displayName:"AddLiquidity__StyledBodyWrapper",componentId:"sc-a8db5680-0"})`
  padding: ${({$hasExistingPosition:e})=>e?"10px":0};
  max-width: 640px;
`;function At(){const{chainId:e}=(0,r.useWeb3React)();return(0,C.EC)(e)?(0,i.jsx)(Ot,{}):(0,i.jsx)(_.PositionPageUnsupportedContent,{})}function Ot(){var e,t,n,g,f,y,C,R,_,L,z,Y,F,W,q,Z,G;const H=(0,o.s0)(),{currencyIdA:V,currencyIdB:K,feeAmount:X,tokenId:J}=(0,o.UO)(),{account:Q,chainId:ee,provider:ne}=(0,r.useWeb3React)(),ie=(0,m.useTheme)(),re=(0,p.oO)(),oe=(0,h.LK)(),ae=(0,gt.h7)(),se=(0,ct.GL)(),{position:le,loading:de}=(0,vt.n)(J?s.O$.from(J):void 0),ce=!!le&&!de,{position:ue}=function(e){var t,n,i;const r=(0,st.U8)(null===(t=e)||void 0===t?void 0:t.token0),o=(0,st.U8)(null===(n=e)||void 0===n?void 0:n.token1),[,a]=(0,pt.AI)(r??void 0,o??void 0,null===(i=e)||void 0===i?void 0:i.fee);let s;return a&&e&&(s=new u.Position({pool:a,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper})),{position:s,pool:a??void 0}}(le),pe=X&&Object.values(u.FeeAmount).includes(parseFloat(X))?parseFloat(X):void 0,he=(0,st.U8)(V),xe=(0,st.U8)(K),me=he&&xe&&he.wrapped.equals(xe.wrapped)?void 0:xe,{independentField:ve,typedValue:ge,startPriceTypedValue:fe}=(0,I.KS)(),{pool:ye,ticks:je,dependentField:be,price:Ce,pricesAtTicks:we,pricesAtLimit:Ne,parsedAmounts:Re,currencyBalances:_e,position:Ee,noLiquidity:ke,currencies:Te,errorMessage:Ie,invalidPool:Se,invalidRange:Ae,outOfRange:Oe,depositADisabled:Be,depositBDisabled:Ue,invertPrice:De,ticksAtLimit:Pe}=(0,I.m2)(he??void 0,me??void 0,pe,he??void 0,ue),{formatPrice:$e}=(0,O.Gb)(),Me=$e({price:De?null===(e=Ce)||void 0===e?void 0:e.invert():Ce,type:O.sw.TokenTx}),{onFieldAInput:Le,onFieldBInput:ze,onLeftRangeInput:Ye,onRightRangeInput:qe,onStartPriceInput:Ze}=(0,I.EG)(ke),Ge=!Ie&&!Ae,[He,Je]=(0,E.useState)(!1),[Qe,et]=(0,E.useState)(!1),it=(0,mt.n)(),[jt,_t]=(0,E.useState)(""),At={[ve]:ge,[be]:(null===(t=Re[be])||void 0===t?void 0:t.toSignificant(6))??""},Ot={[te.gN.CURRENCY_A]:(0,xt.sq)(Re[te.gN.CURRENCY_A]),[te.gN.CURRENCY_B]:(0,xt.sq)(Re[te.gN.CURRENCY_B])},Bt=[te.gN.CURRENCY_A,te.gN.CURRENCY_B].reduce(((e,t)=>({...e,[t]:(0,Nt.i)(_e[t])})),{}),Ut=[te.gN.CURRENCY_A,te.gN.CURRENCY_B].reduce(((e,t)=>{var n;return{...e,[t]:null===(n=Bt[t])||void 0===n?void 0:n.equalTo(Re[t]??"0")}}),{}),Dt=function(){const{account:e}=(0,r.useWeb3React)(),t=(0,ut.Z)();return(0,ct.cq)(t?e??void 0:void 0,dt,!0)}(),[Pt,$t]=(0,lt.q)(Dt?void 0:Re[te.gN.CURRENCY_A],ee?c.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[ee]:void 0),[Mt,Lt]=(0,lt.q)(Dt?void 0:Re[te.gN.CURRENCY_B],ee?c.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[ee]:void 0),zt=(0,yt.eq)(Oe?Xe.fI:It);function Yt(){return Ft.apply(this,arguments)}function Ft(){var e;return e=function*(){if(!ee||!ne||!Q)return;if(!se||!he||!me)return;const e=yield it();if(Ee&&Q&&e){const t=he.isNative?he:me.isNative?me:void 0,{calldata:n,value:i}=ce&&J?u.NonfungiblePositionManager.addCallParameters(Ee,{tokenId:J,slippageTolerance:zt,deadline:e.toString(),useNative:t}):u.NonfungiblePositionManager.addCallParameters(Ee,{slippageTolerance:zt,recipient:Q,deadline:e.toString(),useNative:t,createPool:ke});let r={to:c.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[ee],data:n,value:i};if(Dt){const e=Re[te.gN.CURRENCY_A],t=Re[te.gN.CURRENCY_B],n=[...e&&e.currency.isToken?[bt(e,c.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[ee])]:[],...t&&t.currency.isToken?[bt(t,c.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[ee])]:[],{to:r.to,data:r.data,value:r.value}],i=Dt.interface.encodeFunctionData("wc_multiCall",[n]);r={to:Dt.address,data:i,value:"0x0"}}const o=yield ne.getSigner().getChainId();if(ee!==o)throw new A.CJ;et(!0),ne.getSigner().estimateGas(r).then((e=>{const t={...r,gasLimit:(0,Ct.y)(e)};return ne.getSigner().sendTransaction(t).then((e=>{var t,n,i,r,o,a;et(!1);const s={type:ft.i.ADD_LIQUIDITY_V3_POOL,baseCurrencyId:(0,wt.H)(he),quoteCurrencyId:(0,wt.H)(me),createPool:Boolean(ke),expectedAmountBaseRaw:(null===(n=Re[te.gN.CURRENCY_A])||void 0===n||null===(t=n.quotient)||void 0===t?void 0:t.toString())??"0",expectedAmountQuoteRaw:(null===(r=Re[te.gN.CURRENCY_B])||void 0===r||null===(i=r.quotient)||void 0===i?void 0:i.toString())??"0",feeAmount:Ee.pool.fee};ae(e,s),_t(e.hash),(0,p._P)(d.vp.ADD_LIQUIDITY_SUBMITTED,{label:[null===(o=Te[te.gN.CURRENCY_A])||void 0===o?void 0:o.symbol,null===(a=Te[te.gN.CURRENCY_B])||void 0===a?void 0:a.symbol].join("/"),...re,...s})}))})).catch((e=>{var t;console.error("Failed to send transaction",e),et(!1),4001!==(null===(t=e)||void 0===t?void 0:t.code)&&console.error(e)}))}},Ft=function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){Tt(o,i,r,a,s,"next",e)}function s(e){Tt(o,i,r,a,s,"throw",e)}a(void 0)}))},Ft.apply(this,arguments)}const Wt=(0,E.useCallback)(((e,t)=>{const n=(0,wt.H)(e);if(n===t)return[n,void 0];{var i,r;const e="ETH"===n||void 0!==ee&&n===(null===(i=a.Fl[ee])||void 0===i?void 0:i.address),o=void 0!==t&&("ETH"===t||void 0!==ee&&t===(null===(r=a.Fl[ee])||void 0===r?void 0:r.address));return e&&o?[n,void 0]:[n,t]}}),[ee]),qt=(0,E.useCallback)((e=>{const[t,n]=Wt(e,K);H(void 0===n?`/add/${t}`:`/add/${t}/${n}`)}),[Wt,K,H]),Zt=(0,E.useCallback)((e=>{const[t,n]=Wt(e,V);H(void 0===n?`/add/${t}`:`/add/${n}/${t}`)}),[Wt,V,H]),Gt=(0,E.useCallback)((e=>{Ye(""),qe(""),H(`/add/${V}/${K}/${e}`)}),[V,K,H,Ye,qe]),Ht=(0,E.useCallback)((()=>{Je(!1),jt&&(Le(""),H("/pools")),_t("")}),[H,Le,jt]),Vt=(0,ht.G)(null===(n=Te)||void 0===n?void 0:n.CURRENCY_A,null===(g=Te)||void 0===g?void 0:g.CURRENCY_B),Kt=(0,E.useCallback)((()=>{Le(""),ze(""),Ye(""),qe(""),H("/add")}),[H,Le,ze,Ye,qe]),{[te.Mb.LOWER]:Xt,[te.Mb.UPPER]:Jt}=je,{[te.Mb.LOWER]:Qt,[te.Mb.UPPER]:en}=we,{getDecrementLower:tn,getIncrementLower:nn,getDecrementUpper:rn,getIncrementUpper:on,getSetFullRange:an}=(0,I.a6)(he??void 0,me??void 0,pe,Xt,Jt,ye),sn=!Dt&&Pt!==lt.U.APPROVED&&!!Re[te.gN.CURRENCY_A],ln=!Dt&&Mt!==lt.U.APPROVED&&!!Re[te.gN.CURRENCY_B],dn=`Supplying ${Be?"":null===(f=Re[te.gN.CURRENCY_A])||void 0===f?void 0:f.toSignificant(6)} ${Be?"":null===(y=Te[te.gN.CURRENCY_A])||void 0===y?void 0:y.symbol} ${Oe?"":"and"} ${Ue?"":null===(C=Re[te.gN.CURRENCY_B])||void 0===C?void 0:C.toSignificant(6)} ${Ue?"":null===(R=Te[te.gN.CURRENCY_B])||void 0===R?void 0:R.symbol}`,[cn,un]=(0,k.lr)(),pn=(0,E.useCallback)((()=>{an();const e=Ne[te.Mb.LOWER];e&&cn.set("minPrice",e.toSignificant(5));const t=Ne[te.Mb.UPPER];t&&cn.set("maxPrice",t.toSignificant(5)),un(cn)}),[an,Ne,cn,un]),hn=(0,w.Z)(cn);(0,E.useEffect)((()=>{var e;const t=cn.get("minPrice"),n=null===(e=hn)||void 0===e?void 0:e.get("minPrice");!t||"string"!==typeof t||isNaN(t)||n&&n===t||Ye(t)}),[cn]),(0,E.useEffect)((()=>{var e;const t=cn.get("maxPrice"),n=null===(e=hn)||void 0===e?void 0:e.get("maxPrice");!t||"string"!==typeof t||isNaN(t)||n&&n===t||qe(t)}),[cn]);const xn=()=>{var e,t,n,r;return Vt?(0,i.jsx)(B.DF,{disabled:!0,$borderRadius:"12px",padding:"12px",children:(0,i.jsx)(v.Tv.DeprecatedMain,{mb:"4px",children:(0,i.jsx)(l.cC,{id:"Iac4Ia"})})}):Q?(0,i.jsxs)(D.Tz,{gap:"md",children:[(Pt===lt.U.NOT_APPROVED||Pt===lt.U.PENDING||Mt===lt.U.NOT_APPROVED||Mt===lt.U.PENDING)&&Ge&&(0,i.jsxs)(Ke.m0,{children:[sn&&(0,i.jsx)(B.DF,{onClick:$t,disabled:Pt===lt.U.PENDING,width:ln?"48%":"100%",children:Pt===lt.U.PENDING?(0,i.jsx)(Rt.bb,{children:(0,i.jsx)(l.cC,{id:"MfyhMG",values:{0:null===(e=Te[te.gN.CURRENCY_A])||void 0===e?void 0:e.symbol}})}):(0,i.jsx)(l.cC,{id:"fgGids",values:{0:null===(t=Te[te.gN.CURRENCY_A])||void 0===t?void 0:t.symbol}})}),ln&&(0,i.jsx)(B.DF,{onClick:Lt,disabled:Mt===lt.U.PENDING,width:sn?"48%":"100%",children:Mt===lt.U.PENDING?(0,i.jsx)(Rt.bb,{children:(0,i.jsx)(l.cC,{id:"MfyhMG",values:{0:null===(n=Te[te.gN.CURRENCY_B])||void 0===n?void 0:n.symbol}})}):(0,i.jsx)(l.cC,{id:"fgGids",values:{0:null===(r=Te[te.gN.CURRENCY_B])||void 0===r?void 0:r.symbol}})})]}),(0,i.jsx)(B.Kd,{onClick:()=>{Je(!0)},disabled:!Ge||!Dt&&Pt!==lt.U.APPROVED&&!Be||!Dt&&Mt!==lt.U.APPROVED&&!Ue,error:!Ge&&!!Re[te.gN.CURRENCY_A]&&!!Re[te.gN.CURRENCY_B],children:(0,i.jsx)(T.xv,{fontWeight:535,children:Ie||(0,i.jsx)(l.cC,{id:"rdUucN"})})})]}):(0,i.jsx)(p.M8,{events:[d.TM.onClick],name:d.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:d.xo.CONNECT_WALLET_BUTTON,children:(0,i.jsx)(B.Sy,{onClick:oe,$borderRadius:"12px",padding:"12px",children:(0,i.jsx)(l.cC,{id:"VHOVEJ"})})})},mn=Ot[te.gN.CURRENCY_A],vn=Ot[te.gN.CURRENCY_B],gn=(0,E.useMemo)((()=>({data:mn?parseFloat(mn.toSignificant()):void 0,isLoading:!1})),[mn]),fn=(0,E.useMemo)((()=>({data:vn?parseFloat(vn.toSignificant()):void 0,isLoading:!1})),[vn]),yn=null===(_=(0,N.Wk)(J?se:null,"ownerOf",[J]).result)||void 0===_?void 0:_[0],jn=(0,S.K)(yn,Q)||(0,S.K)(null===(L=le)||void 0===L?void 0:L.operator,Q),bn=Boolean(ce&&Q&&!jn);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(kt.zH,{children:[(0,i.jsx)(at.Z,{isOpen:He,onDismiss:Ht,attemptingTxn:Qe,hash:jt,reviewContent:()=>(0,i.jsx)(at.p,{title:(0,i.jsx)(l.cC,{id:"OBdohg"}),onDismiss:Ht,topContent:()=>(0,i.jsx)(Et,{parsedAmounts:Re,position:Ee,existingPosition:ue,priceLower:Qt,priceUpper:en,outOfRange:Oe,ticksAtLimit:Pe}),bottomContent:()=>(0,i.jsx)(B.DF,{style:{marginTop:"1rem"},onClick:Yt,children:(0,i.jsx)(T.xv,{fontWeight:535,fontSize:20,children:(0,i.jsx)(l.cC,{id:"m16xKo"})})})}),pendingText:dn}),(0,i.jsxs)(St,{$hasExistingPosition:ce,children:[(0,i.jsx)(We.w,{creating:!1,adding:!0,autoSlippage:It,showBackLink:!ce,children:!ce&&(0,i.jsx)(Ke.ZP,{justify:"flex-end",style:{width:"fit-content",minWidth:"fit-content"},children:(0,i.jsx)(kt.SF,{children:(0,i.jsx)(B.oD,{onClick:Kt,children:(0,i.jsx)(v.Tv.DeprecatedBlue,{fontSize:"12px",children:(0,i.jsx)(l.cC,{id:"yYxB17"})})})})})}),(0,i.jsx)(kt.im,{children:(0,i.jsxs)(kt.Sx,{wide:!ce,children:[(0,i.jsxs)(D.Tz,{gap:"lg",children:[!ce&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D.Tz,{gap:"md",children:[(0,i.jsx)(Ke.m0,{paddingBottom:"20px",children:(0,i.jsx)(v.Tv.DeprecatedLabel,{children:(0,i.jsx)(l.cC,{id:"nxRg31"})})}),(0,i.jsxs)(Ke.m0,{gap:"md",children:[(0,i.jsx)(P.Z,{value:At[te.gN.CURRENCY_A],onUserInput:Le,hideInput:!0,onMax:()=>{var e;Le((null===(e=Bt[te.gN.CURRENCY_A])||void 0===e?void 0:e.toExact())??"")},onCurrencySelect:qt,showMaxButton:!Ut[te.gN.CURRENCY_A],currency:Te[te.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena"}),(0,i.jsx)(P.Z,{value:At[te.gN.CURRENCY_B],hideInput:!0,onUserInput:ze,onCurrencySelect:Zt,onMax:()=>{var e;ze((null===(e=Bt[te.gN.CURRENCY_B])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!Ut[te.gN.CURRENCY_B],currency:Te[te.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb"})]}),(0,i.jsx)($.Z,{disabled:!me||!he,feeAmount:pe,handleFeePoolSelect:Gt,currencyA:he??void 0,currencyB:me??void 0})]})," "]}),ce&&ue&&(0,i.jsx)(tt,{position:ue,title:(0,i.jsx)(l.cC,{id:"dWPDm3"}),inRange:!Oe,ticksAtLimit:Pe})]}),!ce&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(kt.DD,{gap:"md",disabled:!pe||Se,children:[(0,i.jsxs)(Ke.m0,{children:[(0,i.jsx)(v.Tv.DeprecatedLabel,{children:(0,i.jsx)(l.cC,{id:"5CZbyC"})}),Boolean(he&&me)&&(0,i.jsxs)(Ke.DA,{gap:"8px",children:[(0,i.jsx)(rt,{onSetFullRange:pn}),(0,i.jsx)(Ve.Z,{currencyA:he,currencyB:me,handleRateToggle:()=>{var e,t,n,i;Pe[te.Mb.LOWER]||Pe[te.Mb.UPPER]||(Ye((null===(e=De?Qt:null===(t=en)||void 0===t?void 0:t.invert())||void 0===e?void 0:e.toSignificant(6))??""),qe((null===(n=De?en:null===(i=Qt)||void 0===i?void 0:i.invert())||void 0===n?void 0:n.toSignificant(6))??""),Le(At[te.gN.CURRENCY_B]??""));H(`/add/${K}/${V}${pe?"/"+pe:""}`)}})]})]}),(0,i.jsx)(nt.Z,{priceLower:Qt,priceUpper:en,getDecrementLower:tn,getIncrementLower:nn,getDecrementUpper:rn,getIncrementUpper:on,onLeftRangeInput:Ye,onRightRangeInput:qe,currencyA:he,currencyB:me,feeAmount:pe,ticksAtLimit:Pe}),Oe&&(0,i.jsx)(U.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,i.jsxs)(Ke.m0,{children:[(0,i.jsx)(x.Z,{stroke:ie.deprecated_yellow3,size:"16px"}),(0,i.jsx)(v.Tv.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,i.jsx)(l.cC,{id:"b+KjnH"})})]})}),Ae&&(0,i.jsx)(U.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,i.jsxs)(Ke.m0,{children:[(0,i.jsx)(x.Z,{stroke:ie.deprecated_yellow3,size:"16px"}),(0,i.jsx)(v.Tv.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,i.jsx)(l.cC,{id:"Jh223O"})})]})})]}),(0,i.jsx)(kt.DD,{gap:"md",disabled:!pe||Se,children:ke?(0,i.jsxs)(D.Tz,{gap:"md",children:[ke&&(0,i.jsx)(U.Pj,{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"1rem 1rem"},children:(0,i.jsx)(v.Tv.DeprecatedBody,{fontSize:14,style:{fontWeight:535},textAlign:"left",color:ie.accent1,children:(0,i.jsx)(l.cC,{id:"X6T02b"})})}),(0,i.jsx)(U.nq,{padding:"12px",children:(0,i.jsx)(kt.Fy,{className:"start-price-input",value:fe,onUserInput:Ze})}),(0,i.jsxs)(Ke.m0,{style:{backgroundColor:ie.surface1,padding:"12px",borderRadius:"12px"},children:[(0,i.jsx)(v.Tv.DeprecatedMain,{children:(0,i.jsx)(l.cC,{id:"Ay/EYV",values:{0:null===(Y=he)||void 0===Y?void 0:Y.symbol}})}),(0,i.jsx)(v.Tv.DeprecatedMain,{children:Ce?(0,i.jsx)(v.Tv.DeprecatedMain,{children:(0,i.jsxs)(Ke.DA,{children:[(0,i.jsx)(M.Z,{maxCharacters:20,text:De?null===(W=Ce)||void 0===W||null===(F=W.invert())||void 0===F?void 0:F.toSignificant(8):null===(q=Ce)||void 0===q?void 0:q.toSignificant(8)})," ",(0,i.jsxs)("span",{style:{marginLeft:"4px"},children:[null===(Z=me)||void 0===Z?void 0:Z.symbol," per ",null===(G=he)||void 0===G?void 0:G.symbol]})]})}):"-"})]})]}):(0,i.jsxs)(i.Fragment,{children:[Boolean(Ce&&he&&me&&!ke)&&(0,i.jsx)(D.Tz,{gap:"2px",style:{marginTop:"0.5rem"},children:(0,i.jsx)(l.cC,{id:"7k623k",values:{0:Ce&&(0,i.jsx)(M.Z,{maxCharacters:20,text:Me}),1:he&&(0,i.jsxs)(v.Tv.DeprecatedBody,{color:"text2",fontSize:12,children:[null===(z=me)||void 0===z?void 0:z.symbol," per ",he.symbol]})},components:{0:(0,i.jsx)(v.Tv.DeprecatedMain,{fontWeight:535,fontSize:12,color:"text1"}),1:(0,i.jsx)(v.Tv.DeprecatedBody,{fontWeight:535,fontSize:20,color:"text1"})}})}),(0,i.jsx)(Fe,{currencyA:he??void 0,currencyB:me??void 0,feeAmount:pe,ticksAtLimit:Pe,price:Ce?parseFloat((De?Ce.invert():Ce).toSignificant(8)):void 0,priceLower:Qt,priceUpper:en,onLeftRangeInput:Ye,onRightRangeInput:qe,interactive:!ce})]})})]}),(0,i.jsx)("div",{children:(0,i.jsx)(kt.DD,{disabled:Se||Ae||ke&&!fe,children:(0,i.jsxs)(D.Tz,{gap:"md",children:[(0,i.jsx)(v.Tv.DeprecatedLabel,{children:ce?(0,i.jsx)(l.cC,{id:"BRi+RY"}):(0,i.jsx)(l.cC,{id:"MU9s7M"})}),(0,i.jsx)(P.Z,{value:At[te.gN.CURRENCY_A],onUserInput:Le,onMax:()=>{var e;Le((null===(e=Bt[te.gN.CURRENCY_A])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!Ut[te.gN.CURRENCY_A],currency:Te[te.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena",fiatValue:gn,locked:Be}),(0,i.jsx)(P.Z,{value:At[te.gN.CURRENCY_B],onUserInput:ze,onMax:()=>{var e;ze((null===(e=Bt[te.gN.CURRENCY_B])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!Ut[te.gN.CURRENCY_B],fiatValue:fn,currency:Te[te.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb",locked:Ue})]})})}),(0,i.jsx)(xn,{})]})})]}),bn&&(0,i.jsx)(j,{ownerAddress:yn}),Vt&&(0,i.jsx)(b.Z,{show:Vt,currencies:[Te.CURRENCY_A,Te.CURRENCY_B]})]}),(0,i.jsx)(ot.c,{})]})}function Bt(){var e,t;const{currencyIdA:n,currencyIdB:s}=(0,o.UO)(),{chainId:l}=(0,r.useWeb3React)(),d="ETH"===n||void 0!==l&&n===(null===(e=a.Fl[l])||void 0===e?void 0:e.address),c="ETH"===s||void 0!==l&&s===(null===(t=a.Fl[l])||void 0===t?void 0:t.address);return n&&s&&(n.toLowerCase()===s.toLowerCase()||d&&c)?(0,i.jsx)(o.Fg,{to:`/add/${n}`,replace:!0}):(0,i.jsx)(At,{})}},38004:(e,t,n)=>{function i(e,t){return!(!e||!t)&&(e===t||e.toLowerCase()===t.toLowerCase())}n.d(t,{K:()=>i})},5347:(e,t,n)=>{n.d(t,{B:()=>o});var i=n(57852),r=n(64370);function o(e){var t;if(e.isNative)return e;const n=(0,i.oG)(e.chainId);return n&&(null===(t=r.Fl[n])||void 0===t?void 0:t.equals(e))?(0,r.gX)(e.chainId):e}}}]);
//# sourceMappingURL=9841.6eb8971d.chunk.js.map