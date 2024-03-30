"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[155],{10404:(e,n,i)=>{i.d(n,{Z:()=>a});var r=i(45779),s=i(68090),t=i.n(s);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o.apply(this,arguments)}function c(e,n){if(null==e)return{};var i,r,s=function(e,n){if(null==e)return{};var i,r,s={},t=Object.keys(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var d=(0,r.forwardRef)((function(e,n){var i=e.color,s=void 0===i?"currentColor":i,t=e.size,d=void 0===t?24:t,a=c(e,["color","size"]);return r.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));d.propTypes={color:t().string,size:t().oneOfType([t().string,t().number])},d.displayName="AlertCircle";const a=d},33882:(e,n,i)=>{i.d(n,{Z:()=>a});var r=i(45779),s=i(68090),t=i.n(s);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o.apply(this,arguments)}function c(e,n){if(null==e)return{};var i,r,s=function(e,n){if(null==e)return{};var i,r,s={},t=Object.keys(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var d=(0,r.forwardRef)((function(e,n){var i=e.color,s=void 0===i?"currentColor":i,t=e.size,d=void 0===t?24:t,a=c(e,["color","size"]);return r.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("polyline",{points:"16 12 12 8 8 12"}),r.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));d.propTypes={color:t().string,size:t().oneOfType([t().string,t().number])},d.displayName="ArrowUpCircle";const a=d},16709:(e,n,i)=>{i.d(n,{Z:()=>r});i(45779);const r=i.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},99819:(e,n,i)=>{i.d(n,{p:()=>pe,Z:()=>je});var r=i(92936),s=i(31017),t=i(87254),o=i(76078),c=i(88846),d=i(61077),a=i(39418),l=i(62512),u=i(98176),m=i(45779),x=i(33882),p=i(19733),f=i(10404),h=i(99454),j=i(61152),g=i(54972),v=i(2148),y=i(54703),b=i(16709),C=i(68707),w=i(61592),I=i.n(w),T=i(64370),A=i(39671),k=i(27179),_=i(53286),O=i(47186);function E(e,n,i){return new o.Fraction(e,I().exponentiate(I().BigInt(10),I().BigInt(n))).toSignificant(i)}function N({rawAmount:e,symbol:n,decimals:i,sigFigs:s}){return(0,r.jsxs)(r.Fragment,{children:[E(e,i,s)," ",n]})}function S({rawAmount:e,currencyId:n,sigFigs:i=6}){const s=(0,A.U8)(n);return s?(0,r.jsx)(N,{rawAmount:e,decimals:s.decimals,sigFigs:i,symbol:s.symbol??"???"}):null}function L({info:{recipient:e,uniAmountRaw:n}}){const{ENSName:i}=(0,k.Z)();return"string"===typeof n?(0,r.jsx)(s.cC,{id:"bSNki7",values:{0:i??e},components:{0:(0,r.jsx)(N,{rawAmount:n,symbol:"UNI",decimals:18,sigFigs:4})}}):(0,r.jsx)(s.cC,{id:"5TmU0U",values:{0:i??e}})}function D(){return(0,r.jsx)(s.cC,{id:"wUhLhH"})}function R({info:e}){var n,i,t;const o=(0,A.dQ)(e.tokenAddress);return(null===(n=C.BigNumber.from(e.amount))||void 0===n?void 0:n.eq(0))?(0,r.jsx)(s.cC,{id:"a1EvGV",values:{0:null===(i=o)||void 0===i?void 0:i.symbol}}):(0,r.jsx)(s.cC,{id:"fgGids",values:{0:null===(t=o)||void 0===t?void 0:t.symbol}})}function U({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;if(e.reason&&e.reason.trim().length>0)switch(e.decision){case _.N.For:return(0,r.jsx)(s.cC,{id:"0l55gd",values:{proposalKey:n}});case _.N.Abstain:return(0,r.jsx)(s.cC,{id:"GPbgWr",values:{proposalKey:n}});case _.N.Against:return(0,r.jsx)(s.cC,{id:"wH9gUf",values:{proposalKey:n}})}else switch(e.decision){case _.N.For:return(0,r.jsx)(s.cC,{id:"zBAY67",values:{proposalKey:n,0:e.reason}});case _.N.Abstain:return(0,r.jsx)(s.cC,{id:"lkIb/R",values:{proposalKey:n,0:e.reason}});case _.N.Against:return(0,r.jsx)(s.cC,{id:"wnjcA+",values:{proposalKey:n,0:e.reason}})}}function z({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,r.jsx)(s.cC,{id:"5BeGFT",values:{proposalKey:n}})}function F({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,r.jsx)(s.cC,{id:"XtYDjM",values:{proposalKey:n}})}function P({info:{delegatee:e}}){const{ENSName:n}=(0,k.Z)(e);return(0,r.jsx)(s.cC,{id:"0gp1xS",values:{0:n??e}})}function H({info:{chainId:e,currencyAmountRaw:n,unwrapped:i}}){const t=e?(0,T.gX)(e):void 0;var o,c,d,a,l,u;return i?(0,r.jsx)(s.cC,{id:"7jNXA4",values:{0:(null===(o=t)||void 0===o?void 0:o.symbol)??"ETH"},components:{0:(0,r.jsx)(N,{rawAmount:n,symbol:(null===(d=t)||void 0===d||null===(c=d.wrapped)||void 0===c?void 0:c.symbol)??"WETH",decimals:18,sigFigs:6})}}):(0,r.jsx)(s.cC,{id:"v6OlxZ",values:{0:(null===(l=t)||void 0===l||null===(a=l.wrapped)||void 0===a?void 0:a.symbol)??"WETH"},components:{0:(0,r.jsx)(N,{rawAmount:n,symbol:(null===(u=t)||void 0===u?void 0:u.symbol)??"ETH",decimals:18,sigFigs:6})}})}function W(){return(0,r.jsx)(s.cC,{id:"ZnrtHG"})}function $(){return(0,r.jsx)(s.cC,{id:"cs0d7d"})}function B({info:{baseCurrencyId:e,quoteCurrencyId:n}}){var i,t;const o=(0,A.U8)(e),c=(0,A.U8)(n);return(0,r.jsx)(s.cC,{id:"Q67jnO",values:{0:null===(i=o)||void 0===i?void 0:i.symbol,1:null===(t=c)||void 0===t?void 0:t.symbol}})}function M({info:{quoteCurrencyId:e,baseCurrencyId:n}}){var i,t;const o=(0,A.U8)(n),c=(0,A.U8)(e);return(0,r.jsx)(s.cC,{id:"0oKBc4",values:{0:null===(i=o)||void 0===i?void 0:i.symbol,1:null===(t=c)||void 0===t?void 0:t.symbol}})}function Z({info:{currencyId0:e,currencyId1:n}}){var i,t;const o=(0,A.U8)(e),c=(0,A.U8)(n);return(0,r.jsx)(s.cC,{id:"RKHSxX",values:{0:null===(i=o)||void 0===i?void 0:i.symbol,1:null===(t=c)||void 0===t?void 0:t.symbol}})}function K({info:{baseCurrencyId:e,quoteCurrencyId:n,expectedAmountBaseRaw:i,expectedAmountQuoteRaw:t}}){return(0,r.jsx)(s.cC,{id:"bqGPBl",components:{0:(0,r.jsx)(S,{rawAmount:i,currencyId:e,sigFigs:3}),1:(0,r.jsx)(S,{rawAmount:t,currencyId:n,sigFigs:3})}})}function G({info:{createPool:e,quoteCurrencyId:n,baseCurrencyId:i}}){var t,o,c,d;const a=(0,A.U8)(i),l=(0,A.U8)(n);return e?(0,r.jsx)(s.cC,{id:"xn2Tnb",values:{0:null===(t=a)||void 0===t?void 0:t.symbol,1:null===(o=l)||void 0===o?void 0:o.symbol}}):(0,r.jsx)(s.cC,{id:"8wzCv/",values:{0:null===(c=a)||void 0===c?void 0:c.symbol,1:null===(d=l)||void 0===d?void 0:d.symbol}})}function Q({info:{quoteCurrencyId:e,expectedAmountBaseRaw:n,expectedAmountQuoteRaw:i,baseCurrencyId:t}}){return(0,r.jsx)(s.cC,{id:"SrExtM",components:{0:(0,r.jsx)(S,{rawAmount:n,currencyId:t,sigFigs:3}),1:(0,r.jsx)(S,{rawAmount:i,currencyId:e,sigFigs:3})}})}function V({info:e}){return(0,r.jsx)(s.cC,{id:"WPG0jO",values:{0:e.recipient},components:{0:(0,r.jsx)(S,{rawAmount:e.amount,currencyId:e.currencyId,sigFigs:6})}})}function Y({info:e}){return e.tradeType===o.TradeType.EXACT_INPUT?(0,r.jsx)(s.cC,{id:"EA6BTt",components:{0:(0,r.jsx)(S,{rawAmount:e.inputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6}),1:(0,r.jsx)(S,{rawAmount:e.settledOutputCurrencyAmountRaw??e.expectedOutputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})}}):(0,r.jsx)(s.cC,{id:"N078gH",components:{0:(0,r.jsx)(S,{rawAmount:e.expectedInputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6}),1:(0,r.jsx)(S,{rawAmount:e.outputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})}})}function q({info:e}){switch(e.type){case O.i.ADD_LIQUIDITY_V3_POOL:return(0,r.jsx)(G,{info:e});case O.i.ADD_LIQUIDITY_V2_POOL:return(0,r.jsx)(Q,{info:e});case O.i.CLAIM:return(0,r.jsx)(L,{info:e});case O.i.DEPOSIT_LIQUIDITY_STAKING:return(0,r.jsx)(W,{});case O.i.WITHDRAW_LIQUIDITY_STAKING:return(0,r.jsx)($,{});case O.i.SWAP:return(0,r.jsx)(Y,{info:e});case O.i.APPROVAL:return(0,r.jsx)(R,{info:e});case O.i.VOTE:return(0,r.jsx)(U,{info:e});case O.i.DELEGATE:return(0,r.jsx)(P,{info:e});case O.i.WRAP:return(0,r.jsx)(H,{info:e});case O.i.CREATE_V3_POOL:return(0,r.jsx)(M,{info:e});case O.i.MIGRATE_LIQUIDITY_V3:return(0,r.jsx)(B,{info:e});case O.i.COLLECT_FEES:return(0,r.jsx)(Z,{info:e});case O.i.REMOVE_LIQUIDITY_V3:return(0,r.jsx)(K,{info:e});case O.i.QUEUE:return(0,r.jsx)(z,{info:e});case O.i.EXECUTE:return(0,r.jsx)(F,{info:e});case O.i.SUBMIT_PROPOSAL:return(0,r.jsx)(D,{});case O.i.SEND:return(0,r.jsx)(V,{info:e})}}var X=i(69780),J=i(44591),ee=i(2562),ne=i(94284);const ie=j.default.div.withConfig({displayName:"AnimatedConfirmation__Wrapper",componentId:"sc-5616b2b8-0"})`
  height: 90px;
  width: 90px;
`,re=j.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,se=j.keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`,te=j.default.circle.withConfig({displayName:"AnimatedConfirmation__Circle",componentId:"sc-5616b2b8-1"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${re} 0.9s ease-in-out;
  animation: ${re} 0.9s ease-in-out;
`,oe=j.default.polyline.withConfig({displayName:"AnimatedConfirmation__PolyLine",componentId:"sc-5616b2b8-2"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke-dashoffset: -100;
  -webkit-animation: ${se} 0.9s 0.35s ease-in-out forwards;
  animation: ${se} 0.9s 0.35s ease-in-out forwards;
`;function ce({className:e}){const n=(0,j.useTheme)();return(0,r.jsx)(ie,{className:e,"data-testid":"animated-confirmation",children:(0,r.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[(0,r.jsx)(te,{className:"path circle",fill:"none",stroke:n.success,strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,r.jsx)(oe,{className:"path check",fill:"none",stroke:n.success,strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})})}const de=j.default.div.withConfig({displayName:"TransactionConfirmationModal__Wrapper",componentId:"sc-10bd5e2d-0"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
  padding: 16px;
`,ae=(0,j.default)(J.Tz).withConfig({displayName:"TransactionConfirmationModal__BottomSection",componentId:"sc-10bd5e2d-1"})`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,le=(0,j.default)(J.lg).withConfig({displayName:"TransactionConfirmationModal__ConfirmedIcon",componentId:"sc-10bd5e2d-2"})`
  padding: ${({inline:e})=>e?"20px 0":"32px 0;"};
`,ue=(0,j.default)(J.Tz).withConfig({displayName:"TransactionConfirmationModal__ConfirmationModalContentWrapper",componentId:"sc-10bd5e2d-3"})`
  padding-bottom: 12px;
`;function me({onDismiss:e,pendingText:n,inline:i}){return(0,r.jsx)(de,{children:(0,r.jsxs)(J.Tz,{gap:"md",children:[!i&&(0,r.jsxs)(ne.m0,{children:[(0,r.jsx)("div",{}),(0,r.jsx)(g.Tw,{onClick:e})]}),(0,r.jsx)(le,{inline:i,children:(0,r.jsx)(g._1,{src:b.Z,alt:"loader",size:i?"40px":"90px"})}),(0,r.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,r.jsx)(g.Tv.SubHeaderLarge,{color:"neutral1",textAlign:"center",children:(0,r.jsx)(s.cC,{id:"v/dhKi"})}),(0,r.jsx)(g.Tv.SubHeader,{color:"neutral1",textAlign:"center",children:n}),(0,r.jsx)(g.Tv.SubHeaderSmall,{color:"neutral2",textAlign:"center",marginBottom:"12px",children:(0,r.jsx)(s.cC,{id:"oG26Rt"})})]})]})})}function xe({onDismiss:e,chainId:n,hash:i,currencyToAdd:d,inline:a}){var l;const f=(0,j.useTheme)(),{connector:h}=(0,c.useWeb3React)(),v=null===(l=d)||void 0===l?void 0:l.wrapped,b=(0,u.ZP)(v)[0],[C,w]=(0,m.useState)(),I=(0,m.useCallback)((()=>{var e;(null===(e=v)||void 0===e?void 0:e.symbol)&&h.watchAsset&&h.watchAsset({address:v.address,symbol:v.symbol,decimals:v.decimals,image:b}).then((()=>w(!0))).catch((()=>w(!1)))}),[h,b,v]),T=n===o.ChainId.MAINNET?t.ag._({id:"J6fH9n"}):t.ag._({id:"O4DSKu"});return(0,r.jsx)(de,{children:(0,r.jsxs)(J.Tz,{children:[!a&&(0,r.jsxs)(ne.m0,{children:[(0,r.jsx)("div",{}),(0,r.jsx)(g.Tw,{onClick:e})]}),(0,r.jsx)(le,{inline:a,children:(0,r.jsx)(x.Z,{strokeWidth:1,size:a?"40px":"75px",color:f.accent1})}),(0,r.jsxs)(ue,{gap:"md",justify:"center",children:[(0,r.jsx)(g.Tv.MediumHeader,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"ExzCxg"})}),d&&h.watchAsset&&(0,r.jsx)(X.Sy,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:I,children:C?(0,r.jsxs)(ne.DA,{children:[(0,r.jsx)(s.cC,{id:"e5wMU/",values:{0:d.symbol}}),(0,r.jsx)(p.Z,{size:"16px",stroke:f.success,style:{marginLeft:"6px"}})]}):(0,r.jsx)(ne.DA,{children:(0,r.jsx)(s.cC,{id:"3nLdaX",values:{0:d.symbol}})})}),(0,r.jsx)(X.DF,{onClick:e,style:{margin:"20px 0 0 0"},"data-testid":"dismiss-tx-confirmation",children:(0,r.jsx)(g.Tv.HeadlineSmall,{color:f.deprecated_accentTextLightPrimary,children:a?(0,r.jsx)(s.cC,{id:"vUOn9d"}):(0,r.jsx)(s.cC,{id:"yz7wBu"})})}),n&&i&&(0,r.jsx)(g.dL,{href:(0,y.E)(n,i,y.r.TRANSACTION),children:(0,r.jsx)(g.Tv.Link,{color:f.accent1,children:T})})]})]})})}function pe({title:e,bottomContent:n,onDismiss:i,topContent:s,headerContent:t}){var o;return(0,r.jsxs)(de,{children:[(0,r.jsxs)(J.Tz,{gap:"sm",children:[(0,r.jsxs)(ne.ZP,{children:[null===(o=t)||void 0===o?void 0:o(),(0,r.jsx)(ne.ZP,{justify:"center",marginLeft:"24px",children:(0,r.jsx)(g.Tv.SubHeader,{children:e})}),(0,r.jsx)(g.Tw,{onClick:i,"data-testid":"confirmation-close-icon"})]}),s()]}),n&&(0,r.jsx)(ae,{gap:"16px",children:n()})]})}const fe=(0,j.default)(d.Z).withConfig({displayName:"TransactionConfirmationModal__StyledL2Badge",componentId:"sc-10bd5e2d-4"})`
  padding: 6px 8px;
`;function he({onDismiss:e,chainId:n,hash:i,pendingText:t,inline:o}){var c,d,u;const m=(0,j.useTheme)(),x=(0,h.kF)(i),p=(0,h.$l)(i),v=1===(null===(d=x)||void 0===d||null===(c=d.receipt)||void 0===c?void 0:c.status),C=(null===(u=x)||void 0===u?void 0:u.confirmedTime)?(x.confirmedTime-x.addedTime)/1e3:void 0,w=(0,l.bt)(n);return(0,r.jsx)(de,{children:(0,r.jsxs)(J.Tz,{children:[!o&&(0,r.jsxs)(ne.m0,{mb:"16px",children:[(0,r.jsx)(fe,{children:(0,r.jsxs)(ne.DA,{gap:"sm",children:[(0,r.jsx)(a.Ej,{chainId:n}),(0,r.jsx)(g.Tv.SubHeaderSmall,{children:w.label})]})}),(0,r.jsx)(g.Tw,{onClick:e})]}),(0,r.jsx)(le,{inline:o,children:p?v?(0,r.jsx)(ce,{}):(0,r.jsx)(f.Z,{strokeWidth:1,size:o?"40px":"90px",color:m.critical}):(0,r.jsx)(g._1,{src:b.Z,alt:"loader",size:o?"40px":"90px"})}),(0,r.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,r.jsx)(g.Tv.SubHeaderLarge,{textAlign:"center",children:i?p?v?(0,r.jsx)(s.cC,{id:"zzDlyQ"}):(0,r.jsx)(s.cC,{id:"SlfejT"}):(0,r.jsx)(s.cC,{id:"ExzCxg"}):(0,r.jsx)(s.cC,{id:"fgo6o9"})}),(0,r.jsx)(g.Tv.BodySecondary,{textAlign:"center",children:x?(0,r.jsx)(q,{info:x.info}):t}),n&&i?(0,r.jsx)(g.dL,{href:(0,y.E)(n,i,y.r.TRANSACTION),children:(0,r.jsx)(g.Tv.SubHeaderSmall,{color:m.accent1,children:(0,r.jsx)(s.cC,{id:"Sjplg3"})})}):(0,r.jsx)("div",{style:{height:"17px"}}),(0,r.jsx)(g.Tv.SubHeaderSmall,{color:m.neutral3,marginTop:"20px",children:C?(0,r.jsxs)("div",{children:[(0,r.jsx)(s.cC,{id:"W1RH6d"}),(0,r.jsxs)("span",{style:{fontWeight:535,marginLeft:"4px",color:m.neutral1},children:[C," seconds \ud83c\udf89"]})]}):(0,r.jsx)("div",{style:{height:"24px"}})}),(0,r.jsx)(X.DF,{onClick:e,style:{margin:"4px 0 0 0"},children:o?(0,r.jsx)(s.cC,{id:"vUOn9d"}):(0,r.jsx)(s.cC,{id:"yz7wBu"})})]})]})})}function je({isOpen:e,onDismiss:n,attemptingTxn:i,hash:s,pendingText:t,reviewContent:o,currencyToAdd:d}){const{chainId:a}=(0,c.useWeb3React)();return a?(0,r.jsx)(ee.Z,{isOpen:e,$scrollOverlay:!0,onDismiss:n,maxHeight:90,children:(0,v.p)(a)&&(s||i)?(0,r.jsx)(he,{chainId:a,hash:s,onDismiss:n,pendingText:t}):i?(0,r.jsx)(me,{onDismiss:n,pendingText:t}):s?(0,r.jsx)(xe,{chainId:a,hash:s,onDismiss:n,currencyToAdd:d}):o()}):null}},40926:(e,n,i)=>{i.d(n,{DC:()=>c,ER:()=>d,bb:()=>a,im:()=>o,pr:()=>l});var r=i(32546),s=i(22953),t=i(61152);const o=t.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,c=(0,t.default)(s.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=t.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,a=t.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,t.default)(r.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},53286:(e,n,i)=>{var r;i.d(n,{N:()=>r}),function(e){e[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain"}(r||(r={}))}}]);
//# sourceMappingURL=155.40e923ec.chunk.js.map