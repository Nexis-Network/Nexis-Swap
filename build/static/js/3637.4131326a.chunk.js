"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3637,5118],{57809:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(45779),o=n(68090),r=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,s=void 0===r?24:r,u=d(e,["color","size"]);return i.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));s.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},s.displayName="Plus";const u=s},89482:(e,t,n)=>{n.d(t,{Z:()=>D});var i=n(92936),o=n(31017),r=n(5985),a=n(21651),d=n(88846),s=n(47583),u=n(69780),l=n(61182),c=n(44591),p=n(94284),m=n(70152),v=n(63490),f=n.n(v),h=n(45779),C=n(91284),g=n(25648),I=n(25321);const b=g.ZP`
  query FeeTierDistribution($token0: String!, $token1: String!) {
    _meta {
      block {
        number
      }
    }
    asToken0: pools(
      orderBy: totalValueLockedToken0
      orderDirection: desc
      where: { token0: $token0, token1: $token1 }
    ) {
      feeTier
      totalValueLockedToken0
      totalValueLockedToken1
    }
    asToken1: pools(
      orderBy: totalValueLockedToken0
      orderDirection: desc
      where: { token0: $token1, token1: $token0 }
    ) {
      feeTier
      totalValueLockedToken0
      totalValueLockedToken1
    }
  }
`;var N=n(55660);const A=20;function T(e,t){var n,i;const{isLoading:o,error:r,distributions:d}=function(e,t){var n,i;const o=(0,m.ZP)(),{isLoading:r,error:d,data:s}=function(e,t,n){var i,o;const{data:r,loading:a,error:d}=(0,C.a)(b,{variables:{token0:null===(i=e)||void 0===i?void 0:i.toLowerCase(),token1:null===(o=t)||void 0===o?void 0:o.toLowerCase()},pollInterval:n,client:I.l});return(0,h.useMemo)((()=>({error:d,isLoading:a,data:r})),[r,d,a])}(null===(n=e)||void 0===n?void 0:n.address,null===(i=t)||void 0===i?void 0:i.address,f()("30s")),{asToken0:u,asToken1:l,_meta:c}=s??{};return(0,h.useMemo)((()=>{var e,t;if(!o||!c||!u||!l)return{isLoading:r,error:d};if(o-((null===(t=c)||void 0===t||null===(e=t.block)||void 0===e?void 0:e.number)??0)>A)return console.log(`Graph stale (latest block: ${o})`),{isLoading:r,error:d};const n=u.concat(l).reduce(((e,t)=>(e[t.feeTier][0]=(e[t.feeTier][0]??0)+Number(t.totalValueLockedToken0),e[t.feeTier][1]=(e[t.feeTier][1]??0)+Number(t.totalValueLockedToken1),e)),{[a.FeeAmount.LOWEST]:[void 0,void 0],[a.FeeAmount.LOW]:[void 0,void 0],[a.FeeAmount.MEDIUM]:[void 0,void 0],[a.FeeAmount.HIGH]:[void 0,void 0]}),[i,s]=Object.values(n).reduce(((e,t)=>(e[0]+=t[0]??0,e[1]+=t[1]??0,e)),[0,0]),p=(e,t,n,i)=>void 0===e&&void 0===n?void 0:((e??0)+(n??0))/(t+i)||0,m={[a.FeeAmount.LOWEST]:p(n[a.FeeAmount.LOWEST][0],i,n[a.FeeAmount.LOWEST][1],s),[a.FeeAmount.LOW]:p(n[a.FeeAmount.LOW][0],i,n[a.FeeAmount.LOW][1],s),[a.FeeAmount.MEDIUM]:p(n[a.FeeAmount.MEDIUM][0],i,n[a.FeeAmount.MEDIUM][1],s),[a.FeeAmount.HIGH]:p(n[a.FeeAmount.HIGH][0],i,n[a.FeeAmount.HIGH][1],s)};return{isLoading:r,error:d,distributions:m}}),[c,u,l,r,d,o])}(null===(n=e)||void 0===n?void 0:n.wrapped,null===(i=t)||void 0===i?void 0:i.wrapped),[s]=(0,N.AI)(e,t,a.FeeAmount.LOWEST),[u]=(0,N.AI)(e,t,a.FeeAmount.LOW),[l]=(0,N.AI)(e,t,a.FeeAmount.MEDIUM),[c]=(0,N.AI)(e,t,a.FeeAmount.HIGH);return(0,h.useMemo)((()=>{if(o||r||!d)return{isLoading:o,isError:!!r,distributions:d};const e=Object.keys(d).map((e=>Number(e))).filter((e=>0!==d[e]&&void 0!==d[e])).reduce(((e,t)=>(d[e]??0)>(d[t]??0)?e:t),-1),t=o||r||!d||s===N.tK.LOADING||u===N.tK.LOADING||l===N.tK.LOADING||c===N.tK.LOADING?void 0:{[a.FeeAmount.LOWEST]:s===N.tK.EXISTS?100*(d[a.FeeAmount.LOWEST]??0):void 0,[a.FeeAmount.LOW]:u===N.tK.EXISTS?100*(d[a.FeeAmount.LOW]??0):void 0,[a.FeeAmount.MEDIUM]:l===N.tK.EXISTS?100*(d[a.FeeAmount.MEDIUM]??0):void 0,[a.FeeAmount.HIGH]:c===N.tK.EXISTS?100*(d[a.FeeAmount.HIGH]??0):void 0};return{isLoading:o,isError:!!r,distributions:t,largestUsageFeeTier:-1===e?void 0:e}}),[o,r,d,s,u,l,c])}var R=n(33986),E=n(41075),y=n(22953),x=n(61152),k=n(54972),O=n(66136),_=n(61077);function S({feeAmount:e,distributions:t,poolState:n}){var r;return(0,i.jsx)(_.Z,{children:(0,i.jsx)(k.Tv.DeprecatedLabel,{fontSize:10,children:t&&n!==N.tK.NOT_EXISTS&&n!==N.tK.INVALID?void 0!==t[e]?(0,i.jsx)(o.cC,{id:"P1NNMy",values:{0:null===(r=t[e])||void 0===r?void 0:r.toFixed(0)}}):(0,i.jsx)(o.cC,{id:"plhHQt"}):(0,i.jsx)(o.cC,{id:"cKHbrZ"})})})}var P=n(76078);const w={[a.FeeAmount.LOWEST]:{label:"0.01",description:(0,i.jsx)(o.cC,{id:"6AHHoU"}),supportedChains:[P.ChainId.ARBITRUM_ONE,P.ChainId.BNB,P.ChainId.CELO,P.ChainId.CELO_ALFAJORES,P.ChainId.MAINNET,P.ChainId.OPTIMISM,P.ChainId.POLYGON,P.ChainId.POLYGON_MUMBAI,P.ChainId.AVALANCHE,P.ChainId.BASE,P.ChainId.NEXIS,P.ChainId.ZETA]},[a.FeeAmount.LOW]:{label:"0.05",description:(0,i.jsx)(o.cC,{id:"ig/lul"}),supportedChains:P.SUPPORTED_CHAINS},[a.FeeAmount.MEDIUM]:{label:"0.3",description:(0,i.jsx)(o.cC,{id:"DlUgFZ"}),supportedChains:P.SUPPORTED_CHAINS},[a.FeeAmount.HIGH]:{label:"1",description:(0,i.jsx)(o.cC,{id:"fiGxJ/"}),supportedChains:P.SUPPORTED_CHAINS}},M=(0,x.default)(k.Tv.DeprecatedLabel).withConfig({displayName:"FeeOption__ResponsiveText",componentId:"sc-ba00ea84-0"})`
  line-height: 16px;
  font-size: 14px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 12px;
    line-height: 12px;
  `};
`;function L({feeAmount:e,active:t,poolState:n,distributions:r,onClick:a}){const{formatDelta:d}=(0,O.Gb)();return(0,i.jsx)(u.ro,{active:t,onClick:a,children:(0,i.jsxs)(c.Tz,{gap:"sm",justify:"flex-start",children:[(0,i.jsxs)(c.Tz,{justify:"flex-start",gap:"6px",children:[(0,i.jsx)(M,{children:(0,i.jsx)(o.cC,{id:"J/hVSQ",values:{0:d(parseFloat(w[e].label))}})}),(0,i.jsx)(k.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:w[e].description})]}),r&&(0,i.jsx)(S,{distributions:r,feeAmount:e,poolState:n})]})})}const U=(0,x.default)(l.ZP).withConfig({displayName:"FeeSelector__FocusedOutlineCard",componentId:"sc-afe9d1cd-0"})`
  border: 1px solid ${({theme:e})=>e.surface3};
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,x.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.6s linear;
  align-self: center;
`,j=x.default.div.withConfig({displayName:"FeeSelector__Select",componentId:"sc-afe9d1cd-1"})`
  align-items: flex-start;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
`;function D({disabled:e=!1,feeAmount:t,handleFeePoolSelect:n,currencyA:l,currencyB:m}){const{chainId:v}=(0,d.useWeb3React)(),f=(0,s.oO)(),{formatDelta:C}=(0,O.Gb)(),{isLoading:g,isError:I,largestUsageFeeTier:b,distributions:A}=T(l,m),x=(0,N.Oh)([[l,m,a.FeeAmount.LOWEST],[l,m,a.FeeAmount.LOW],[l,m,a.FeeAmount.MEDIUM],[l,m,a.FeeAmount.HIGH]]),_=(0,h.useMemo)((()=>x.reduce(((e,[t,n])=>{var i;return e={...e,[null===(i=n)||void 0===i?void 0:i.fee]:t}}),{[a.FeeAmount.LOWEST]:N.tK.NOT_EXISTS,[a.FeeAmount.LOW]:N.tK.NOT_EXISTS,[a.FeeAmount.MEDIUM]:N.tK.NOT_EXISTS,[a.FeeAmount.HIGH]:N.tK.NOT_EXISTS})),[x]),[P,M]=(0,h.useState)(!1),[D,F]=(0,h.useState)(!1),B=(0,R.Z)(t),W=(0,h.useRef)(!1),$=(0,h.useCallback)((e=>{(0,s._P)(r.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:r.jI.MANUAL,...f}),n(e)}),[n,f]);return(0,h.useEffect)((()=>{t||g||I||(b?(M(!1),W.current=!0,(0,s._P)(r.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:r.jI.RECOMMENDED,...f}),n(b)):M(!0))}),[t,g,I,b,n,f]),(0,h.useEffect)((()=>{M(I)}),[I]),(0,h.useEffect)((()=>{t&&B!==t&&F(!0)}),[B,t]),(0,i.jsx)(c.Tz,{gap:"16px",children:(0,i.jsxs)(E.DD,{gap:"md",disabled:e,children:[(0,i.jsx)(U,{pulsing:D,onAnimationEnd:()=>F(!1),children:(0,i.jsxs)(p.m0,{children:[(0,i.jsx)(c.Tz,{id:"add-liquidity-selected-fee",children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.Tv.DeprecatedLabel,{className:"selected-fee-label",children:(0,i.jsx)(o.cC,{id:"GczB8z",values:{0:C(parseFloat(w[t].label))}})}),A&&(0,i.jsx)(y.xu,{style:{width:"fit-content",marginTop:"8px"},className:"selected-fee-percentage",children:(0,i.jsx)(S,{distributions:A,feeAmount:t,poolState:_[t]})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.Tv.DeprecatedLabel,{children:(0,i.jsx)(o.cC,{id:"EU3wU4"})}),(0,i.jsx)(k.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:(0,i.jsx)(o.cC,{id:"8ZKEXr"})})]})}),(0,i.jsx)(u.Ux,{onClick:()=>M(!P),width:"auto",padding:"4px",$borderRadius:"6px",children:P?(0,i.jsx)(o.cC,{id:"vLyv1R"}):(0,i.jsx)(o.cC,{id:"ePK91l"})})]})}),v&&P&&(0,i.jsx)(j,{children:[a.FeeAmount.LOWEST,a.FeeAmount.LOW,a.FeeAmount.MEDIUM,a.FeeAmount.HIGH].map(((e,n)=>{const{supportedChains:o}=w[e];return o.includes(v)?(0,i.jsx)(L,{feeAmount:e,active:t===e,onClick:()=>$(e),distributions:A,poolState:_[e]},n):null}))})]})})}},83323:(e,t,n)=>{n.d(t,{Z:()=>O});var i=n(92936),o=n(31017),r=n(69780),a=n(61182),d=n(44591),s=n(45779),u=n(57809),l=n(68090),c=n.n(l);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v=(0,s.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,a=m(e,["color","size"]);return s.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),s.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));v.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},v.displayName="Minus";const f=v;var h=n(61152),C=n(54972),g=n(17706);const I=h.default.div.withConfig({displayName:"InputStepCounter__InputRow",componentId:"sc-45cb4a1c-0"})`
  display: flex;
`,b=(0,h.default)(r.Ux).withConfig({displayName:"InputStepCounter__SmallButton",componentId:"sc-45cb4a1c-1"})`
  border-radius: 8px;
  padding: 4px;
`,N=(0,h.default)(a.nq).withConfig({displayName:"InputStepCounter__FocusedOutlineCard",componentId:"sc-45cb4a1c-2"})`
  border-color: ${({active:e,theme:t})=>e&&t.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,h.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.8s linear;
`,A=(0,h.default)(g.I).withConfig({displayName:"InputStepCounter__StyledInput",componentId:"sc-45cb4a1c-3"})`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,T=(0,h.default)(d.Tz).withConfig({displayName:"InputStepCounter__InputColumn",componentId:"sc-45cb4a1c-4"})`
  width: 100%;
`,R=(0,h.default)(C.Tv.DeprecatedSmall).withConfig({displayName:"InputStepCounter__InputTitle",componentId:"sc-45cb4a1c-5"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 12px;
  font-weight: 535;
`,E=(0,h.default)(C.Tv.DeprecatedWhite).withConfig({displayName:"InputStepCounter__ButtonLabel",componentId:"sc-45cb4a1c-6"})`
  color: ${({theme:e,disabled:t})=>t?e.neutral2:e.neutral1} !important;
  display: flex;
`,y=({value:e,decrement:t,increment:n,decrementDisabled:r=!1,incrementDisabled:a=!1,width:l,locked:c,onUserInput:p,title:m,tokenA:v,tokenB:h})=>{const[C,g]=(0,s.useState)(!1),[y,x]=(0,s.useState)(""),[k,O]=(0,s.useState)(!1),[_,S]=(0,s.useState)(!1),P=(0,s.useCallback)((()=>{O(!1),g(!1),p(y)}),[y,p]),w=(0,s.useCallback)((()=>{O(!1),p(t())}),[t,p]),M=(0,s.useCallback)((()=>{O(!1),p(n())}),[n,p]);return(0,s.useEffect)((()=>{y===e||k||setTimeout((()=>{x(e),S(!0),setTimeout((function(){S(!1)}),1800)}),0)}),[y,k,e]),(0,i.jsx)(N,{pulsing:_,active:C,onFocus:()=>{O(!0),g(!0)},onBlur:P,width:l,children:(0,i.jsxs)(I,{children:[(0,i.jsxs)(T,{justify:"flex-start",children:[(0,i.jsx)(R,{fontSize:12,textAlign:"center",children:m}),(0,i.jsx)(A,{className:"rate-input-0",value:y,fontSize:"20px",disabled:c,onUserInput:e=>{x(e)}}),(0,i.jsx)(R,{fontSize:12,textAlign:"left",children:(0,i.jsx)(o.cC,{id:"1/LP4K",values:{tokenB:h,tokenA:v}})})]}),(0,i.jsxs)(d.Tz,{gap:"8px",children:[!c&&(0,i.jsx)(b,{"data-testid":"increment-price-range",onClick:M,disabled:a,children:(0,i.jsx)(E,{disabled:a,fontSize:"12px",children:(0,i.jsx)(u.Z,{size:18})})}),!c&&(0,i.jsx)(b,{"data-testid":"decrement-price-range",onClick:w,disabled:r,children:(0,i.jsx)(E,{disabled:r,fontSize:"12px",children:(0,i.jsx)(f,{size:18})})})]})]})})};var x=n(94284),k=n(31744);function O({priceLower:e,priceUpper:t,onLeftRangeInput:n,onRightRangeInput:r,getDecrementLower:a,getIncrementLower:d,getDecrementUpper:s,getIncrementUpper:u,currencyA:l,currencyB:c,feeAmount:p,ticksAtLimit:m}){var v,f,h,C,g,I,b,N,A,T,R,E;const O=null===(v=l??void 0)||void 0===v?void 0:v.wrapped,_=null===(f=c??void 0)||void 0===f?void 0:f.wrapped,S=O&&_&&O.sortsBefore(_),P=S?e:null===(h=t)||void 0===h?void 0:h.invert(),w=S?t:null===(C=e)||void 0===C?void 0:C.invert();return(0,i.jsxs)(x.BA,{gap:"md",children:[(0,i.jsx)(y,{value:m[S?k.Mb.LOWER:k.Mb.UPPER]?"0":(null===(g=P)||void 0===g?void 0:g.toSignificant(8))??"",onUserInput:n,decrement:S?a:u,increment:S?d:s,decrementDisabled:void 0===P||m[S?k.Mb.LOWER:k.Mb.UPPER],incrementDisabled:void 0===P||m[S?k.Mb.LOWER:k.Mb.UPPER],feeAmount:p,label:P?`${null===(I=c)||void 0===I?void 0:I.symbol}`:"-",title:(0,i.jsx)(o.cC,{id:"uEoBVI"}),tokenA:null===(b=l)||void 0===b?void 0:b.symbol,tokenB:null===(N=c)||void 0===N?void 0:N.symbol}),(0,i.jsx)(y,{value:m[S?k.Mb.UPPER:k.Mb.LOWER]?"\u221e":(null===(A=w)||void 0===A?void 0:A.toSignificant(8))??"",onUserInput:r,decrement:S?s:d,increment:S?u:a,incrementDisabled:void 0===w||m[S?k.Mb.UPPER:k.Mb.LOWER],decrementDisabled:void 0===w||m[S?k.Mb.UPPER:k.Mb.LOWER],feeAmount:p,label:w?`${null===(T=c)||void 0===T?void 0:T.symbol}`:"-",tokenA:null===(R=l)||void 0===R?void 0:R.symbol,tokenB:null===(E=c)||void 0===E?void 0:E.symbol,title:(0,i.jsx)(o.cC,{id:"kAC8rT"})})]})}},25321:(e,t,n)=>{n.d(t,{l:()=>m,u:()=>v});var i=n(29531),o=n(74365),r=n(88108),a=n(49256),d=n(10105),s=n(76078),u=n(66473);const l={[s.ChainId.MAINNET]:"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3?source=uniswap",[s.ChainId.ARBITRUM_ONE]:"https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-arbitrum-one?source=uniswap",[s.ChainId.OPTIMISM]:"https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis?source=uniswap",[s.ChainId.POLYGON]:"https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon?source=uniswap",[s.ChainId.CELO]:"https://api.thegraph.com/subgraphs/name/jesse-sawa/uniswap-celo?source=uniswap",[s.ChainId.BNB]:"https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-bsc?source=uniswap",[s.ChainId.AVALANCHE]:"https://api.thegraph.com/subgraphs/name/lynnshaoyu/uniswap-v3-avax?source=uniswap",[s.ChainId.BASE]:"https://api.studio.thegraph.com/query/48211/uniswap-v3-base/version/latest?source=uniswap"},c=new i.u({uri:l[s.ChainId.MAINNET]}),p=new o.i(((e,t)=>{const n=u.ZP.getState().application.chainId;return e.setContext((()=>({uri:n&&l[n]?l[n]:l[s.ChainId.MAINNET]}))),t(e)})),m=new r.f({cache:new a.h,link:(0,d.z)(p,c)}),v={[s.ChainId.MAINNET]:new r.f({cache:new a.h,uri:l[s.ChainId.MAINNET]}),[s.ChainId.ARBITRUM_ONE]:new r.f({cache:new a.h,uri:l[s.ChainId.ARBITRUM_ONE]}),[s.ChainId.OPTIMISM]:new r.f({cache:new a.h,uri:l[s.ChainId.OPTIMISM]}),[s.ChainId.POLYGON]:new r.f({cache:new a.h,uri:l[s.ChainId.POLYGON]}),[s.ChainId.CELO]:new r.f({cache:new a.h,uri:l[s.ChainId.CELO]}),[s.ChainId.BNB]:new r.f({cache:new a.h,uri:l[s.ChainId.BNB]}),[s.ChainId.AVALANCHE]:new r.f({cache:new a.h,uri:l[s.ChainId.AVALANCHE]})}},15463:(e,t,n)=>{n.d(t,{U:()=>i,q:()=>I});var i,o=n(16790),r=n(5985),a=n(88846),d=n(47583),s=n(7151),u=n(65471),l=n(11016),c=n(45779),p=n(64510);function m(e,t,n,i,o,r,a){try{var d=e[r](a),s=d.value}catch(u){return void n(u)}d.done?t(s):Promise.resolve(s).then(i,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function a(e){m(r,i,o,a,d,"next",e)}function d(e){m(r,i,o,a,d,"throw",e)}a(void 0)}))}}function f(e,t,n){var m,f,h;const{chainId:C}=(0,a.useWeb3React)(),g=(null===(f=e)||void 0===f||null===(m=f.currency)||void 0===m?void 0:m.isToken)?e.currency:void 0,I=function(e,t,n){var o,r;const{account:d}=(0,a.useWeb3React)(),s=(null===(r=e)||void 0===r||null===(o=r.currency)||void 0===o?void 0:o.isToken)?e.currency:void 0,{tokenAllowance:l}=(0,u.Fx)(s,d??void 0,t),p=n(s,t);return(0,c.useMemo)((()=>e&&t?e.currency.isNative?i.APPROVED:l?l.lessThan(e)?p?i.PENDING:i.NOT_APPROVED:i.APPROVED:i.UNKNOWN:i.UNKNOWN),[e,p,t,l])}(e,t,n),b=(0,s.Ib)(null===(h=g)||void 0===h?void 0:h.address),N=(0,c.useCallback)(v((function*(){function n(e){var t;console.warn(`${(null===(t=g)||void 0===t?void 0:t.symbol)||"Token"} approval failed:`,e)}if(I!==i.NOT_APPROVED)return n("approve was called unnecessarily");if(!C)return n("no chainId");if(!g)return n("no token");if(!b)return n("tokenContract is null");if(!e)return n("missing amount to approve");if(!t)return n("no spender");let a=!1;const s=yield b.estimateGas.approve(t,o.Bz).catch((()=>(a=!0,b.estimateGas.approve(t,e.quotient.toString()))));return b.approve(t,a?e.quotient.toString():o.Bz,{gasLimit:(0,p.y)(s)}).then((n=>{var i;const o={chain_id:C,token_symbol:null===(i=g)||void 0===i?void 0:i.symbol,token_address:(0,l.DT)(g)};return(0,d._P)(r.Je.APPROVE_TOKEN_TXN_SUBMITTED,o),{response:n,tokenAddress:g.address,spenderAddress:t,amount:e}})).catch((e=>{throw n(e),e}))})),[I,g,b,e,t,C]);return[I,N]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(i||(i={}));var h=n(99454),C=n(47186);function g(e){const t=(0,h.h7)();return(0,c.useCallback)((()=>e().then((e=>{if(e){const{response:n,tokenAddress:i,spenderAddress:o,amount:r}=e;t(n,{type:C.i.APPROVAL,tokenAddress:i,spender:o,amount:r.quotient.toString()})}}))),[t,e])}function I(e,t){const[n,i]=f(e,t,h.wB);return[n,g(i)]}},69583:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(88846),o=n(84938),r=n(45779),a=n(7151);function d(){var e,t;const{account:n}=(0,i.useWeb3React)(),d=(0,a.c5)(),s=(0,r.useMemo)((()=>[n??void 0]),[n]),u=(0,o.Wk)(d,"isArgentWallet",s,o.DB);return Boolean(null===(t=u)||void 0===t||null===(e=t.result)||void 0===e?void 0:e[0])}},41075:(e,t,n)=>{n.d(t,{DD:()=>s,Fy:()=>u,SF:()=>c,Sx:()=>l,im:()=>a,zH:()=>d});var i=n(44591),o=n(17706),r=n(61152);const a=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-740507e2-0"})`
  position: relative;
  padding: 26px 16px;
`,d=r.default.div.withConfig({displayName:"styled__ScrollablePage",componentId:"sc-740507e2-1"})`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,s=(0,r.default)(i.Tz).withConfig({displayName:"styled__DynamicSection",componentId:"sc-740507e2-2"})`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,u=(0,r.default)(o.I).withConfig({displayName:"styled__StyledInput",componentId:"sc-740507e2-3"})`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,l=r.default.div.withConfig({displayName:"styled__ResponsiveTwoColumns",componentId:"sc-740507e2-4"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,c=r.default.div.withConfig({displayName:"styled__MediumOnly",componentId:"sc-740507e2-5"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`},65118:(e,t,n)=>{n.d(t,{Z:()=>s,e:()=>d});var i=n(92936),o=n(61152),r=n(62587),a=n(7898);const d=o.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-b0a1d16d-0"})`
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
  z-index: ${r.k.default};
`;function s(e){return(0,i.jsx)(d,{...e})}},56360:(e,t,n)=>{n.d(t,{a6:()=>T,m2:()=>A,EG:()=>N,KS:()=>b});var i=n(92936),o=n(31017),r=n(76078),a=n(21651),d=n(88846),s=n(55660),u=n(61592),l=n.n(u),c=n(89882),p=n(45779),m=n(43454),v=n(47856);function f(e,t,n){if(e&&t&&"number"===typeof n)return(0,a.tickToPrice)(e,t,n)}var h=n(13820),C=n(73720),g=n(31744);function I(e,t,n,i){if(!e||!t||!n||!i)return;const o=function(e,t,n){var i;if(!e||!t||!n)return;if(!n.match(/^\d*\.?\d+$/))return;const[o,a]=n.split("."),d=(null===(i=a)||void 0===i?void 0:i.length)??0,s=l().BigInt((o??"")+(a??""));return new r.Price(e,t,l().multiply(l().BigInt(10**d),l().BigInt(10**e.decimals)),l().multiply(s,l().BigInt(10**t.decimals)))}(e,t,i);if(!o)return;let d;const s=(0,a.encodeSqrtRatioX96)(o.numerator,o.denominator);return d=l().greaterThanOrEqual(s,a.TickMath.MAX_SQRT_RATIO)?a.TickMath.MAX_TICK:l().lessThanOrEqual(s,a.TickMath.MIN_SQRT_RATIO)?a.TickMath.MIN_TICK:(0,a.priceToClosestTick)(o),(0,a.nearestUsableTick)(d,a.TICK_SPACINGS[n])}function b(){return(0,v.C)((e=>e.mintV3))}function N(e){const t=(0,v.T)(),n=(0,p.useCallback)((n=>{t((0,g.LC)({field:g.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),i=(0,p.useCallback)((n=>{t((0,g.LC)({field:g.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e]),[o,r]=(0,m.lr)();return{onFieldAInput:n,onFieldBInput:i,onLeftRangeInput:(0,p.useCallback)((e=>{t((0,g.yw)({typedValue:e}));const n=o.get("minPrice");(!n||n&&n!==e)&&(o.set("minPrice",e),r(o))}),[t,o,r]),onRightRangeInput:(0,p.useCallback)((e=>{t((0,g.ay)({typedValue:e}));const n=o.get("maxPrice");(!n||n&&n!==e)&&(o.set("maxPrice",e),r(o))}),[t,o,r]),onStartPriceInput:(0,p.useCallback)((e=>{t((0,g.A8)({typedValue:e}))}),[t])}}function A(e,t,n,u,m){var v,N,A,T;const{account:R}=(0,d.useWeb3React)(),{independentField:E,typedValue:y,leftRangeTypedValue:x,rightRangeTypedValue:k,startPriceTypedValue:O}=b(),_=E===g.gN.CURRENCY_A?g.gN.CURRENCY_B:g.gN.CURRENCY_A,S=(0,p.useMemo)((()=>({[g.gN.CURRENCY_A]:e,[g.gN.CURRENCY_B]:t})),[e,t]),[P,w,M]=(0,p.useMemo)((()=>{var n,i,o;return[null===(n=e)||void 0===n?void 0:n.wrapped,null===(i=t)||void 0===i?void 0:i.wrapped,null===(o=u)||void 0===o?void 0:o.wrapped]}),[e,t,u]),[L,U]=(0,p.useMemo)((()=>P&&w?P.sortsBefore(w)?[P,w]:[w,P]:[void 0,void 0]),[P,w]),j=(0,C.K5)(R??void 0,(0,p.useMemo)((()=>[S[g.gN.CURRENCY_A],S[g.gN.CURRENCY_B]]),[S])),D={[g.gN.CURRENCY_A]:j[0],[g.gN.CURRENCY_B]:j[1]},[F,B]=(0,s.AI)(S[g.gN.CURRENCY_A],S[g.gN.CURRENCY_B],n),W=F===s.tK.NOT_EXISTS,$=Boolean(M&&L&&!M.equals(L)),G=(0,p.useMemo)((()=>{if(!W)return B&&L?B.priceOf(L):void 0;{const t=(0,c.Z)(O,$?L:U);if(t&&L&&U){var e;const n=(0,c.Z)("1",$?U:L),i=n&&t?new r.Price(n.currency,t.currency,n.quotient,t.quotient):void 0;return($?null===(e=i)||void 0===e?void 0:e.invert():i)??void 0}}}),[W,O,$,U,L,B]),K=(0,p.useMemo)((()=>{const e=G?(0,a.encodeSqrtRatioX96)(G.numerator,G.denominator):void 0;return G&&e&&!(l().greaterThanOrEqual(e,a.TickMath.MIN_SQRT_RATIO)&&l().lessThan(e,a.TickMath.MAX_SQRT_RATIO))}),[G]),V=(0,p.useMemo)((()=>{if(P&&w&&n&&G&&!K){const e=(0,a.priceToClosestTick)(G),t=a.TickMath.getSqrtRatioAtTick(e);return new a.Pool(P,w,n,t,l().BigInt(0),e,[])}}),[n,K,G,P,w]),Y=B??V,z=(0,p.useMemo)((()=>({[g.Mb.LOWER]:n?(0,a.nearestUsableTick)(a.TickMath.MIN_TICK,a.TICK_SPACINGS[n]):void 0,[g.Mb.UPPER]:n?(0,a.nearestUsableTick)(a.TickMath.MAX_TICK,a.TICK_SPACINGS[n]):void 0})),[n]),H=(0,p.useMemo)((()=>{var e,t;return{[g.Mb.LOWER]:"number"===typeof(null===(e=m)||void 0===e?void 0:e.tickLower)?m.tickLower:$&&"boolean"===typeof k||!$&&"boolean"===typeof x?z[g.Mb.LOWER]:$?I(U,L,n,k.toString()):I(L,U,n,x.toString()),[g.Mb.UPPER]:"number"===typeof(null===(t=m)||void 0===t?void 0:t.tickUpper)?m.tickUpper:!$&&"boolean"===typeof k||$&&"boolean"===typeof x?z[g.Mb.UPPER]:$?I(U,L,n,x.toString()):I(L,U,n,k.toString())}}),[m,n,$,x,k,L,U,z]),{[g.Mb.LOWER]:q,[g.Mb.UPPER]:X}=H||{},Z=(0,p.useMemo)((()=>({[g.Mb.LOWER]:n&&q===z.LOWER,[g.Mb.UPPER]:n&&X===z.UPPER})),[z,q,X,n]),Q=Boolean("number"===typeof q&&"number"===typeof X&&q>=X),J=(0,p.useMemo)((()=>({[g.Mb.LOWER]:f(L,U,z.LOWER),[g.Mb.UPPER]:f(L,U,z.UPPER)})),[L,U,z.LOWER,z.UPPER]),ee=(0,p.useMemo)((()=>({[g.Mb.LOWER]:f(L,U,H[g.Mb.LOWER]),[g.Mb.UPPER]:f(L,U,H[g.Mb.UPPER])})),[L,U,H]),{[g.Mb.LOWER]:te,[g.Mb.UPPER]:ne}=ee,ie=Boolean(!Q&&G&&te&&ne&&(G.lessThan(te)||G.greaterThan(ne))),oe=(0,c.Z)(y,S[E]),re=(0,p.useMemo)((()=>{var n;const i=null===(n=oe)||void 0===n?void 0:n.wrapped,o=_===g.gN.CURRENCY_B?t:e;if(oe&&i&&"number"===typeof q&&"number"===typeof X&&Y){if(ie||Q)return;const e=i.currency.equals(Y.token0)?a.Position.fromAmount0({pool:Y,tickLower:q,tickUpper:X,amount0:oe.quotient,useFullPrecision:!0}):a.Position.fromAmount1({pool:Y,tickLower:q,tickUpper:X,amount1:oe.quotient}),t=i.currency.equals(Y.token0)?e.amount1:e.amount0;return o&&r.CurrencyAmount.fromRawAmount(o,t.quotient)}}),[oe,ie,_,t,e,q,X,Y,Q]),ae=(0,p.useMemo)((()=>({[g.gN.CURRENCY_A]:E===g.gN.CURRENCY_A?oe:re,[g.gN.CURRENCY_B]:E===g.gN.CURRENCY_A?re:oe})),[re,oe,E]),de=Boolean("number"===typeof X&&Y&&Y.tickCurrent>=X),se=Boolean("number"===typeof q&&Y&&Y.tickCurrent<=q),ue=Q||Boolean(de&&Y&&P&&Y.token0.equals(P)||se&&Y&&P&&Y.token1.equals(P)),le=Q||Boolean(de&&Y&&w&&Y.token0.equals(w)||se&&Y&&w&&Y.token1.equals(w)),ce=(0,p.useMemo)((()=>{var e,t,n,i;if(!Y||!P||!w||"number"!==typeof q||"number"!==typeof X||Q)return;const o=de?h.iV:null===(t=ae)||void 0===t||null===(e=t[P.equals(Y.token0)?g.gN.CURRENCY_A:g.gN.CURRENCY_B])||void 0===e?void 0:e.quotient,r=se?h.iV:null===(i=ae)||void 0===i||null===(n=i[P.equals(Y.token0)?g.gN.CURRENCY_B:g.gN.CURRENCY_A])||void 0===n?void 0:n.quotient;return void 0!==o&&void 0!==r?a.Position.fromAmounts({pool:Y,tickLower:q,tickUpper:X,amount0:o,amount1:r,useFullPrecision:!0}):void 0}),[ae,Y,P,w,de,se,Q,q,X]);let pe;R||(pe=(0,i.jsx)(o.cC,{id:"VHOVEJ"})),F===s.tK.INVALID&&(pe=pe??(0,i.jsx)(o.cC,{id:"R7D79P"})),K&&(pe=pe??(0,i.jsx)(o.cC,{id:"HXBqgG"})),(ae[g.gN.CURRENCY_A]||ue)&&(ae[g.gN.CURRENCY_B]||le)||(pe=pe??(0,i.jsx)(o.cC,{id:"iPMIoT"}));const{[g.gN.CURRENCY_A]:me,[g.gN.CURRENCY_B]:ve}=ae;var fe,he;me&&(null===(N=D)||void 0===N||null===(v=N[g.gN.CURRENCY_A])||void 0===v?void 0:v.lessThan(me))&&(pe=(0,i.jsx)(o.cC,{id:"m6RmA/",values:{0:null===(fe=S[g.gN.CURRENCY_A])||void 0===fe?void 0:fe.symbol}}));ve&&(null===(T=D)||void 0===T||null===(A=T[g.gN.CURRENCY_B])||void 0===A?void 0:A.lessThan(ve))&&(pe=(0,i.jsx)(o.cC,{id:"m6RmA/",values:{0:null===(he=S[g.gN.CURRENCY_B])||void 0===he?void 0:he.symbol}}));const Ce=F===s.tK.INVALID;return{dependentField:_,currencies:S,pool:B,poolState:F,currencyBalances:D,parsedAmounts:ae,ticks:H,price:G,pricesAtTicks:ee,pricesAtLimit:J,position:ce,noLiquidity:W,errorMessage:pe,invalidPool:Ce,invalidRange:Q,outOfRange:ie,depositADisabled:ue,depositBDisabled:le,invertPrice:$,ticksAtLimit:Z}}function T(e,t,n,i,o,d){const s=(0,v.T)(),u=(0,p.useMemo)((()=>{var t;return null===(t=e)||void 0===t?void 0:t.wrapped}),[e]),l=(0,p.useMemo)((()=>{var e;return null===(e=t)||void 0===e?void 0:e.wrapped}),[t]);return{getDecrementLower:(0,p.useCallback)((()=>{if(u&&l&&"number"===typeof i&&n){return(0,a.tickToPrice)(u,l,i-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&u&&l&&n&&d){return(0,a.tickToPrice)(u,l,d.tickCurrent-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[u,l,i,n,d]),getIncrementLower:(0,p.useCallback)((()=>{if(u&&l&&"number"===typeof i&&n){return(0,a.tickToPrice)(u,l,i+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&u&&l&&n&&d){return(0,a.tickToPrice)(u,l,d.tickCurrent+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[u,l,i,n,d]),getDecrementUpper:(0,p.useCallback)((()=>{if(u&&l&&"number"===typeof o&&n){return(0,a.tickToPrice)(u,l,o-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&u&&l&&n&&d){return(0,a.tickToPrice)(u,l,d.tickCurrent-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[u,l,o,n,d]),getIncrementUpper:(0,p.useCallback)((()=>{if(u&&l&&"number"===typeof o&&n){return(0,a.tickToPrice)(u,l,o+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&u&&l&&n&&d){return(0,a.tickToPrice)(u,l,d.tickCurrent+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[u,l,o,n,d]),getSetFullRange:(0,p.useCallback)((()=>{s((0,g._h)())}),[s])}}}}]);
//# sourceMappingURL=3637.4131326a.chunk.js.map