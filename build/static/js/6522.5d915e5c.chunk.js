"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6522],{8963:(e,i,n)=>{n.d(i,{Z:()=>l});var t=n(92936),r=n(31017),o=n(61152);const d=o.default.button.withConfig({displayName:"MultiToggle__ToggleWrapper",componentId:"sc-6dfd833b-0"})`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,s=o.default.span.withConfig({displayName:"MultiToggle__ToggleElement",componentId:"sc-6dfd833b-1"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:i})=>i?e.surface1:"none"};
  color: ${({theme:e,isActive:i})=>i?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:i})=>i?e.neutral2:e.neutral3};
  }
`;function l({currencyA:e,currencyB:i,handleRateToggle:n}){var o,l;const a=null===(o=e)||void 0===o?void 0:o.wrapped,c=null===(l=i)||void 0===l?void 0:l.wrapped,u=a&&c&&a.sortsBefore(c);return a&&c?(0,t.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:n,children:(0,t.jsxs)(d,{width:"fit-content",children:[(0,t.jsx)(s,{isActive:u,fontSize:"12px",children:(0,t.jsx)(r.cC,{id:"J/hVSQ",values:{0:u?e.symbol:i.symbol}})}),(0,t.jsx)(s,{isActive:!u,fontSize:"12px",children:(0,t.jsx)(r.cC,{id:"J/hVSQ",values:{0:u?i.symbol:e.symbol}})})]})}):null}},42938:(e,i,n)=>{n.d(i,{t:()=>x});var t=n(11604),r=n(76078),o=n(84938),d=n(70152),s=n(45779),l=n(5347),a=n(7151);function c(e,i,n,t,r,o,d){try{var s=e[o](d),l=s.value}catch(a){return void n(a)}s.done?i(l):Promise.resolve(l).then(t,r)}const u=t.O$.from(2).pow(128).sub(1);function x(e,i,n=!1){var t,x;const h=(0,a.GL)(!1),p=null===(t=(0,o.Wk)(i?h:null,"ownerOf",[i]).result)||void 0===t?void 0:t[0],m=null===(x=i)||void 0===x?void 0:x.toHexString(),v=(0,d.ZP)(),[g,j]=(0,s.useState)();return(0,s.useEffect)((()=>{!function(){var e,i=(e=function*(){if(h&&m&&p)try{const e=yield h.callStatic.collect({tokenId:m,recipient:p,amount0Max:u,amount1Max:u},{from:p});j([e.amount0,e.amount1])}catch{}},function(){var i=this,n=arguments;return new Promise((function(t,r){var o=e.apply(i,n);function d(e){c(o,t,r,d,s,"next",e)}function s(e){c(o,t,r,d,s,"throw",e)}d(void 0)}))});return function(){return i.apply(this,arguments)}}()()}),[h,m,p,v]),e&&g?[r.CurrencyAmount.fromRawAmount(n?e.token0:(0,l.B)(e.token0),g[0].toString()),r.CurrencyAmount.fromRawAmount(n?e.token1:(0,l.B)(e.token1),g[1].toString())]:[void 0,void 0]}},26522:(e,i,n)=>{n.r(i),n.d(i,{PositionPageUnsupportedContent:()=>Pe,default:()=>Ie});var t=n(92936),r=n(11604),o=n(31017),d=n(87254),s=n(5985),l=n(76078),a=n(21651),c=n(88846),u=n(47583),x=n(61077),h=n(69780),p=n(61182),m=n(44591),v=n(47841),g=n(32546),j=n(5967),f=n(94284),y=n(56536),w=n(67716),b=n(99819),C=n(57852),T=n(18569),P=n(39671),I=n(7151),D=n(57899),k=n(55660),S=n(32682),A=n(42938),M=n(40413),_=n(84938),R=n(24509),L=n(45779),z=n(437),N=n(43454),$=n(6282),E=n(31744),W=n(99454),B=n(61152),O=n(54972),Z=n(17202),U=n(63420),q=n(66136),H=n(5347),F=n(73499),G=n(90652),J=n(8963),Q=n(10672);const V="data:application/json;base64,";var K=n(47186),X=n(64510),Y=n(54703),ee=n(40926);function ie(e,i,n,t,r,o,d){try{var s=e[o](d),l=s.value}catch(a){return void n(a)}s.done?i(l):Promise.resolve(l).then(t,r)}function ne(e){return function(){var i=this,n=arguments;return new Promise((function(t,r){var o=e.apply(i,n);function d(e){ie(o,t,r,d,s,"next",e)}function s(e){ie(o,t,r,d,s,"throw",e)}d(void 0)}))}}const te=(0,B.default)(h.DF).withConfig({displayName:"PositionPage__PositionPageButtonPrimary",componentId:"sc-500e99b1-0"})`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,re=B.default.div.withConfig({displayName:"PositionPage__PageWrapper",componentId:"sc-500e99b1-1"})`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,oe=B.default.div.withConfig({displayName:"PositionPage__BadgeText",componentId:"sc-500e99b1-2"})`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,de=(0,B.default)((({end:e,...i})=>(0,t.jsx)(O.Tv.DeprecatedLabel,{...i}))).withConfig({displayName:"PositionPage__Label",componentId:"sc-500e99b1-3"})`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,se=B.default.span.withConfig({displayName:"PositionPage__ExtentsText",componentId:"sc-500e99b1-4"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,le=(0,B.default)(O.Tv.DeprecatedMain).withConfig({displayName:"PositionPage__HoverText",componentId:"sc-500e99b1-5"})`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,ae=B.default.span.withConfig({displayName:"PositionPage__DoubleArrow",componentId:"sc-500e99b1-6"})`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,ce=(0,B.default)(f.m0).withConfig({displayName:"PositionPage__ResponsiveRow",componentId:"sc-500e99b1-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,ue=(0,B.default)(ce).withConfig({displayName:"PositionPage__ActionButtonResponsiveRow",componentId:"sc-500e99b1-8"})`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,xe=(0,B.default)(h.gn).withConfig({displayName:"PositionPage__ResponsiveButtonConfirmed",componentId:"sc-500e99b1-9"})`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,he=B.default.div.withConfig({displayName:"PositionPage__NFTGrid",componentId:"sc-500e99b1-10"})`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,pe=B.default.canvas.withConfig({displayName:"PositionPage__NFTCanvas",componentId:"sc-500e99b1-11"})`
  grid-area: overlap;
`,me=B.default.img.withConfig({displayName:"PositionPage__NFTImage",componentId:"sc-500e99b1-12"})`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`,ve=(0,B.default)(N.rU).withConfig({displayName:"PositionPage__StyledPoolLink",componentId:"sc-500e99b1-13"})`
  text-decoration: none;
  ${O.iV}
`,ge=(0,B.default)(O.Tv.H1Medium).withConfig({displayName:"PositionPage__PairHeader",componentId:"sc-500e99b1-14"})`
  margin-right: 10px;
`;function je({inverted:e,pool:i,currencyQuote:n,currencyBase:r}){var d,s;const{formatPrice:l}=(0,q.Gb)();return i&&n&&r?(0,t.jsx)(p.hl,{padding:"12px",children:(0,t.jsxs)(m.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(se,{children:(0,t.jsx)(o.cC,{id:"DWd30U"})}),(0,t.jsx)(O.Tv.DeprecatedMediumHeader,{textAlign:"center",children:l({price:e?i.token1Price:i.token0Price,type:q.sw.TokenTx})}),(0,t.jsx)(se,{children:(0,t.jsx)(o.cC,{id:"7Z4WfS",values:{0:null===(d=n)||void 0===d?void 0:d.symbol,1:null===(s=r)||void 0===s?void 0:s.symbol}})})]})}):null}const fe=({children:e,chainId:i,address:n})=>{const r=(0,T.dG)({address:n,chain:(0,T.Ld)(i)});return(0,t.jsx)(O.bm,{to:r,children:e})},ye=({children:e,chainId:i,address:n})=>(0,t.jsx)(O.dL,{href:(0,Y.E)(i,n,Y.r.TOKEN),children:e});function we({chainId:e,currency:i}){var n,r;const o=null===(n=i)||void 0===n?void 0:n.address,d=(0,T.bx)(e)?fe:ye;return(0,t.jsx)(d,{chainId:e,address:o,children:(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(j.Z,{currency:i,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsxs)(O.Tv.DeprecatedMain,{children:[null===(r=i)||void 0===r?void 0:r.symbol," \u2197"]})]})})}function be(e,i,n){const t=i.getContext("2d");if(t){let{width:r,height:o}=e;const d=r/o;o=n,r=Math.round(d*n),i.width=r*devicePixelRatio,i.height=o*devicePixelRatio,i.style.width=r+"px",i.style.height=o+"px",t.scale(devicePixelRatio,devicePixelRatio),t.clearRect(0,0,r,o),t.drawImage(e,0,0,r,o)}}function Ce({image:e,height:i}){const[n,r]=(0,L.useState)(!1),o=(0,L.useRef)(null),d=(0,L.useRef)(null);return(0,t.jsxs)(he,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{d.current&&o.current&&be(d.current,o.current,i),r(!1)},children:[(0,t.jsx)(pe,{ref:o}),(0,t.jsx)(me,{ref:d,src:e,hidden:!n,onLoad:()=>{d.current&&o.current&&be(d.current,o.current,i)}})]})}const Te=({priceLower:e,priceUpper:i,quote:n,base:t,invert:r})=>{var o,d;return{priceUpper:r?null===(o=e)||void 0===o?void 0:o.invert():i,priceLower:r?null===(d=i)||void 0===d?void 0:d.invert():e,quote:r?t:n,base:r?n:t}};function Pe(){return(0,t.jsx)(re,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,t.jsx)(O.Tv.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,t.jsx)(o.cC,{id:"Ij/sE3"})}),(0,t.jsx)(O.Tv.BodyPrimary,{style:{marginBottom:"32px"},children:(0,t.jsx)(o.cC,{id:"Jbim1e"})}),(0,t.jsx)(te,{as:N.rU,to:"/pool",width:"fit-content",children:(0,t.jsx)(o.cC,{id:"/+76Zo"})})]})})}function Ie(){const{chainId:e}=(0,c.useWeb3React)();return(0,C.EC)(e)?(0,t.jsx)(ke,{}):(0,t.jsx)(Pe,{})}const De=(0,B.default)(f.DA).withConfig({displayName:"PositionPage__PositionLabelRow",componentId:"sc-500e99b1-15"})({flexWrap:"wrap",gap:8});function ke(){var e,i,n,C,ie,te,he,pe,me,fe,ye,be,Ie,ke,Se,Ae,Me,_e,Re,Le,ze,Ne,$e,Ee,We,Be,Oe,Ze,Ue,qe,He;const{tokenId:Fe}=(0,$.UO)(),{chainId:Ge,account:Je,provider:Qe}=(0,c.useWeb3React)(),Ve=(0,B.useTheme)(),{formatCurrencyAmount:Ke,formatDelta:Xe,formatTickPrice:Ye}=(0,q.Gb)(),ei=function(e){if(e)try{return r.O$.from(e)}catch(i){return}}(Fe),{loading:ii,position:ni}=(0,M.n)(ei),{token0:ti,token1:ri,fee:oi,liquidity:di,tickLower:si,tickUpper:li,tokenId:ai}=ni||{},ci=null===(e=di)||void 0===e?void 0:e.eq(0),ui=function(e){const i=(0,I.GL)(),n=(0,L.useMemo)((()=>{var i;return[e instanceof r.O$?e.toHexString():null===(i=e)||void 0===i?void 0:i.toString(16)]}),[e]),{result:t,error:o,loading:d,valid:s}=(0,_.Wk)(i,"tokenURI",n,{..._.DB,gasRequired:3e6});return(0,L.useMemo)((()=>{if(o||!s||!e)return{valid:!1,loading:!1};if(d)return{valid:!0,loading:!0};if(!t)return{valid:!1,loading:!1};const[i]=t;if(!i||!i.startsWith(V))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(i.slice(V.length)))}}catch(o){return{valid:!1,loading:!1}}}),[o,d,t,e,s])}(ei),xi=(0,P.dQ)(ti),hi=(0,P.dQ)(ri),pi=xi?(0,H.B)(xi):void 0,mi=hi?(0,H.B)(hi):void 0,[vi,gi]=(0,L.useState)(!1),ji=(0,R.Z)(Ge).wrapped.symbol,fi=xi&&hi&&oi?a.Pool.getAddress(xi,hi,oi):void 0,[yi,wi]=(0,k.AI)(xi??void 0,hi??void 0,oi),bi=(0,L.useMemo)((()=>{if(wi&&di&&"number"===typeof si&&"number"===typeof li)return new a.Position({pool:wi,liquidity:di.toString(),tickLower:si,tickUpper:li})}),[di,wi,si,li]),Ci=(0,D.Z)(oi,si,li),Ti=(0,G.N)(bi),[Pi,Ii]=(0,L.useState)(!1),{priceLower:Di,priceUpper:ki,base:Si}=Te({priceLower:Ti.priceLower,priceUpper:Ti.priceUpper,quote:Ti.quote,base:Ti.base,invert:Pi}),Ai=hi?null===(i=Si)||void 0===i?void 0:i.equals(hi):void 0,Mi=Ai?pi:mi,_i=Ai?mi:pi,Ri=(0,L.useMemo)((()=>Di&&wi&&ki?function(e,i,n){try{if(!i.greaterThan(e))return 100;if(!i.lessThan(n))return 0;const t=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(n.toSignificant(15)),o=Number.parseFloat(i.toSignificant(15)),d=Math.floor(1/((Math.sqrt(t*r)-Math.sqrt(r*o))/(o-Math.sqrt(r*o))+1)*100);if(d<0||d>100)throw Error("Out of range");return d}catch{return}}(Ai?ki.invert():Di,wi.token0Price,Ai?Di.invert():ki):void 0),[Ai,wi,Di,ki]),[Li,zi]=(0,A.t)(wi??void 0,null===(n=ni)||void 0===n?void 0:n.tokenId,vi),Ni=wi?vi?wi.token0:(0,H.B)(wi.token0):void 0,$i=wi?vi?wi.token1:(0,H.B)(wi.token1):void 0,[Ei,Wi]=(0,L.useState)(!1),[Bi,Oi]=(0,L.useState)(null),Zi=(0,W.ub)(Bi??void 0),[Ui,qi]=(0,L.useState)(!1),Hi=(0,S.ZP)(xi??void 0),Fi=(0,S.ZP)(hi??void 0),Gi=(0,L.useMemo)((()=>{var e,i;if(!Hi||!Fi||!Li||!zi)return null;const n=null===(e=Li)||void 0===e?void 0:e.wrapped,t=null===(i=zi)||void 0===i?void 0:i.wrapped;if(!n||!t)return null;const r=Hi.quote(n),o=Fi.quote(t);return r.add(o)}),[Hi,Fi,Li,zi]),Ji=(0,L.useMemo)((()=>{if(!Hi||!Fi||!bi)return null;const e=Hi.quote(bi.amount0),i=Fi.quote(bi.amount1);return e.add(i)}),[Hi,Fi,bi]),Qi=(0,W.h7)(),Vi=(0,I.GL)(),Ki=(0,L.useCallback)(ne((function*(){if(!Ni||!$i||!Ge||!Vi||!Je||!ai||!Qe)return;Wi(!0);const{calldata:e,value:i}=a.NonfungiblePositionManager.collectCallParameters({tokenId:ai.toString(),expectedCurrencyOwed0:Li??l.CurrencyAmount.fromRawAmount(Ni,0),expectedCurrencyOwed1:zi??l.CurrencyAmount.fromRawAmount($i,0),recipient:Je}),n={to:Vi.address,data:e,value:i},t=yield Qe.getSigner().getChainId();if(Ge!==t)throw new U.CJ;Qe.getSigner().estimateGas(n).then((e=>{const i={...n,gasLimit:(0,X.y)(e)};return Qe.getSigner().sendTransaction(i).then((e=>{var i,n;Oi(e.hash),Wi(!1),(0,u._P)(s.vp.COLLECT_LIQUIDITY_SUBMITTED,{source:s.GM.V3,label:[Ni.symbol,$i.symbol].join("/")}),Qi(e,{type:K.i.COLLECT_FEES,currencyId0:(0,Z.H)(Ni),currencyId1:(0,Z.H)($i),expectedCurrencyOwed0:(null===(i=Li)||void 0===i?void 0:i.quotient.toString())??l.CurrencyAmount.fromRawAmount(Ni,0).toExact(),expectedCurrencyOwed1:(null===(n=zi)||void 0===n?void 0:n.quotient.toString())??l.CurrencyAmount.fromRawAmount($i,0).toExact()})}))})).catch((e=>{Wi(!1),console.error(e)}))})),[Ge,Li,zi,Ni,$i,Vi,Je,ai,Qi,Qe]),Xi=null===(C=(0,_.Wk)(ai?Vi:null,"ownerOf",[ai]).result)||void 0===C?void 0:C[0],Yi=Xi===Je||(null===(ie=ni)||void 0===ie?void 0:ie.operator)===Je,en=Ai?Li:zi,nn=Ai?zi:Li,tn=wi&&"number"===typeof si?wi.tickCurrent<si:void 0,rn=wi&&"number"===typeof li?wi.tickCurrent>=li:void 0,on="boolean"===typeof tn&&"boolean"===typeof rn&&(!tn&&!rn);function dn(){var e,i,n,r,d,s;return(0,t.jsxs)(m.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,t.jsx)(p.hl,{padding:"12px 16px",children:(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsxs)(f.m0,{children:[(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(j.Z,{currency:null===(e=en)||void 0===e?void 0:e.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(O.Tv.DeprecatedMain,{children:en?Ke({amount:en}):"-"})]}),(0,t.jsx)(O.Tv.DeprecatedMain,{children:null===(n=en)||void 0===n||null===(i=n.currency)||void 0===i?void 0:i.symbol})]}),(0,t.jsxs)(f.m0,{children:[(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(j.Z,{currency:null===(r=nn)||void 0===r?void 0:r.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(O.Tv.DeprecatedMain,{children:nn?Ke({amount:nn}):"-"})]}),(0,t.jsx)(O.Tv.DeprecatedMain,{children:null===(s=nn)||void 0===s||null===(d=s.currency)||void 0===d?void 0:d.symbol})]})]})}),(0,t.jsx)(O.Tv.DeprecatedItalic,{children:(0,t.jsx)(o.cC,{id:"R8aNfS"})}),(0,t.jsx)(h.DF,{"data-testid":"modal-collect-fees-button",onClick:Ki,children:(0,t.jsx)(o.cC,{id:"vR1m9d"})})]})}const sn=Boolean(Yi&&((null===(te=Li)||void 0===te?void 0:te.greaterThan(0))||(null===(he=zi)||void 0===he?void 0:he.greaterThan(0)))&&pi&&mi&&(pi.isNative||mi.isNative)&&!Bi);return ni||ii?ii||yi===k.tK.LOADING||!oi?(0,t.jsxs)(ee.pr,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]}):(0,t.jsx)(u.fM,{page:s.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z.Helmet,{children:(0,t.jsx)("title",{children:d.ag._({id:"KtIvkh",values:{0:null===(pe=Mi)||void 0===pe?void 0:pe.symbol,1:null===(me=_i)||void 0===me?void 0:me.symbol}})})}),(0,t.jsxs)(re,{children:[(0,t.jsx)(b.Z,{isOpen:Ui,onDismiss:()=>qi(!1),attemptingTxn:Ei,hash:Bi??"",reviewContent:()=>(0,t.jsx)(b.p,{title:(0,t.jsx)(o.cC,{id:"tu/fxg"}),onDismiss:()=>qi(!1),topContent:dn}),pendingText:(0,t.jsx)(o.cC,{id:"SGG5Oz"})}),(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsxs)(m.Tz,{gap:"sm",children:[(0,t.jsx)(N.rU,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pool",children:(0,t.jsx)(le,{children:(0,t.jsx)(o.cC,{id:"t2jWT0"})})}),(0,t.jsxs)(ce,{children:[(0,t.jsxs)(De,{children:[(0,t.jsx)(v.Z,{currency0:_i,currency1:Mi,size:24,margin:!0}),(0,t.jsx)(ve,{to:fi?(0,T.Ah)(fi,(0,T.Ld)(Ge)):"",children:(0,t.jsxs)(ge,{children:["\xa0",null===(fe=Mi)||void 0===fe?void 0:fe.symbol,"\xa0/\xa0",null===(ye=_i)||void 0===ye?void 0:ye.symbol]})}),(0,t.jsx)(x.Z,{style:{marginRight:"8px"},children:(0,t.jsx)(oe,{children:(0,t.jsx)(o.cC,{id:"J/hVSQ",values:{0:Xe(parseFloat(new l.Percent(oi,1e6).toSignificant()))}})})}),(0,t.jsx)(F.Z,{removed:ci,inRange:on})]}),Yi&&(0,t.jsxs)(ue,{children:[pi&&mi&&oi&&ai?(0,t.jsx)(h.Ux,{as:N.rU,to:`/add/${(0,Z.H)(pi)}/${(0,Z.H)(mi)}/${oi}/${ai}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,t.jsx)(o.cC,{id:"3pgmAj"})}):null,ai&&!ci?(0,t.jsx)(h.Hm,{as:N.rU,to:`/remove/${ai}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,t.jsx)(o.cC,{id:"cJtosk"})}):null]})]})]}),(0,t.jsxs)(ce,{align:"flex-start",children:[(0,t.jsx)(O.Pw,{style:{height:"100%",marginRight:12},children:"result"in ui?(0,t.jsxs)(p.Wm,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,t.jsx)(Ce,{image:ui.result.image,height:400}),"number"===typeof Ge&&Xi&&!Yi?(0,t.jsx)(O.dL,{href:(0,Y.E)(Ge,Xi,Y.r.ADDRESS),children:(0,t.jsx)(o.cC,{id:"LtI9AS"})}):null]}):(0,t.jsx)(p.Wm,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,t.jsx)(g.tG,{})})}),(0,t.jsxs)(m.Tz,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,t.jsx)(p.Wm,{children:(0,t.jsxs)(m.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsx)(de,{children:(0,t.jsx)(o.cC,{id:"6y2TB3"})}),(null===(be=Ji)||void 0===be?void 0:be.greaterThan(new l.Fraction(1,100)))?(0,t.jsx)(O.Tv.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:(0,t.jsx)(o.cC,{id:"J/hVSQ",values:{0:Ke({amount:Ji,type:q.sw.FiatTokenPrice})}})}):(0,t.jsx)(O.Tv.DeprecatedLargeHeader,{color:Ve.neutral1,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(o.cC,{id:"eKC+EC"})})]}),(0,t.jsx)(p.hl,{padding:"12px 16px",children:(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(we,{chainId:Ge??l.ChainId.MAINNET,currency:Mi}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.Tv.DeprecatedMain,{children:Ke({amount:Ai?null===(Ie=bi)||void 0===Ie?void 0:Ie.amount0:null===(ke=bi)||void 0===ke?void 0:ke.amount1})}),"number"!==typeof Ri||ci?null:(0,t.jsx)(x.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(oe,{children:(0,t.jsx)(o.cC,{id:"hbO8db",values:{0:Ai?Ri:100-Ri}})})})]})]}),(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(we,{chainId:Ge??l.ChainId.MAINNET,currency:_i}),(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(O.Tv.DeprecatedMain,{children:Ke({amount:Ai?null===(Se=bi)||void 0===Se?void 0:Se.amount1:null===(Ae=bi)||void 0===Ae?void 0:Ae.amount0})}),"number"!==typeof Ri||ci?null:(0,t.jsx)(x.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(oe,{children:(0,t.jsx)(o.cC,{id:"hbO8db",values:{0:Ai?100-Ri:Ri}})})})]})]})]})})]})}),(0,t.jsx)(p.Wm,{children:(0,t.jsxs)(m.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsx)(m.Tz,{gap:"md",children:(0,t.jsxs)(f.m0,{style:{alignItems:"flex-start"},children:[(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsx)(de,{children:(0,t.jsx)(o.cC,{id:"XCqY8/"})}),(null===(Me=Gi)||void 0===Me?void 0:Me.greaterThan(new l.Fraction(1,100)))?(0,t.jsx)(O.Tv.DeprecatedLargeHeader,{color:Ve.success,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(o.cC,{id:"J/hVSQ",values:{0:Ke({amount:Gi,type:q.sw.FiatTokenPrice})}})}):(0,t.jsx)(O.Tv.DeprecatedLargeHeader,{color:Ve.neutral1,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(o.cC,{id:"eKC+EC"})})]}),Yi&&((null===(_e=Li)||void 0===_e?void 0:_e.greaterThan(0))||(null===(Re=zi)||void 0===Re?void 0:Re.greaterThan(0))||Bi)?(0,t.jsx)(xe,{"data-testid":"collect-fees-button",disabled:Ei||!!Bi,confirmed:!!Bi&&!Zi,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>qi(!0),children:Bi&&!Zi?(0,t.jsx)(O.Tv.DeprecatedMain,{color:Ve.neutral1,children:(0,t.jsx)(o.cC,{id:"Jpq3gO"})}):Zi||Ei?(0,t.jsxs)(O.Tv.DeprecatedMain,{color:Ve.neutral1,children:[" ",(0,t.jsx)(y.bb,{children:(0,t.jsx)(o.cC,{id:"1RB9kv"})})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(O.Tv.DeprecatedMain,{color:Ve.white,children:(0,t.jsx)(o.cC,{id:"h5pjuM"})})})}):null]})}),(0,t.jsx)(p.hl,{padding:"12px 16px",children:(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsxs)(f.m0,{children:[(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(j.Z,{currency:null===(Le=en)||void 0===Le?void 0:Le.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(O.Tv.DeprecatedMain,{children:null===(Ne=en)||void 0===Ne||null===(ze=Ne.currency)||void 0===ze?void 0:ze.symbol})]}),(0,t.jsx)(f.DA,{children:(0,t.jsx)(O.Tv.DeprecatedMain,{children:en?Ke({amount:en}):"-"})})]}),(0,t.jsxs)(f.m0,{children:[(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(j.Z,{currency:null===($e=nn)||void 0===$e?void 0:$e.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(O.Tv.DeprecatedMain,{children:null===(We=nn)||void 0===We||null===(Ee=We.currency)||void 0===Ee?void 0:Ee.symbol})]}),(0,t.jsx)(f.DA,{children:(0,t.jsx)(O.Tv.DeprecatedMain,{children:nn?Ke({amount:nn}):"-"})})]})]})}),sn&&(0,t.jsx)(m.Tz,{gap:"md",children:(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(O.Tv.DeprecatedMain,{children:(0,t.jsx)(o.cC,{id:"oCijuv",values:{nativeWrappedSymbol:ji}})}),(0,t.jsx)(w.Z,{id:"receive-as-weth",isActive:vi,toggle:()=>gi((e=>!e))})]})})]})})]})]}),(0,t.jsx)(p.Wm,{children:(0,t.jsxs)(m.Tz,{gap:"md",children:[(0,t.jsxs)(f.m0,{children:[(0,t.jsxs)(f.DA,{children:[(0,t.jsx)(de,{display:"flex",style:{marginRight:"12px"},children:(0,t.jsx)(o.cC,{id:"7Bu2+f"})}),(0,t.jsx)(O.v_,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.Z,{removed:ci,inRange:on}),(0,t.jsx)("span",{style:{width:"8px"}})]})})]}),(0,t.jsx)(f.DA,{children:_i&&Mi&&(0,t.jsx)(J.Z,{currencyA:_i,currencyB:Mi,handleRateToggle:()=>Ii(!Pi)})})]}),(0,t.jsxs)(f.m0,{children:[(0,t.jsx)(p.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(m.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(se,{children:(0,t.jsx)(o.cC,{id:"EQs1sJ"})}),(0,t.jsx)(O.Tv.DeprecatedMediumHeader,{textAlign:"center",children:Ye({price:Di,atLimit:Ci,direction:E.Mb.LOWER,numberType:q.sw.TokenTx})}),(0,t.jsxs)(se,{children:[" ",(0,t.jsx)(o.cC,{id:"7Z4WfS",values:{0:null===(Be=Mi)||void 0===Be?void 0:Be.symbol,1:null===(Oe=_i)||void 0===Oe?void 0:Oe.symbol}})]}),on&&(0,t.jsx)(O.Tv.DeprecatedSmall,{color:Ve.neutral3,children:(0,t.jsx)(o.cC,{id:"NxMldE",values:{0:null===(Ze=_i)||void 0===Ze?void 0:Ze.symbol}})})]})}),(0,t.jsx)(ae,{children:"\u27f7"}),(0,t.jsx)(p.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(m.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(se,{children:(0,t.jsx)(o.cC,{id:"5etEUX"})}),(0,t.jsx)(O.Tv.DeprecatedMediumHeader,{textAlign:"center",children:Ye({price:ki,atLimit:Ci,direction:E.Mb.UPPER,numberType:q.sw.TokenTx})}),(0,t.jsxs)(se,{children:[" ",(0,t.jsx)(o.cC,{id:"7Z4WfS",values:{0:null===(Ue=Mi)||void 0===Ue?void 0:Ue.symbol,1:null===(qe=_i)||void 0===qe?void 0:qe.symbol}})]}),on&&(0,t.jsx)(O.Tv.DeprecatedSmall,{color:Ve.neutral3,children:(0,t.jsx)(o.cC,{id:"NxMldE",values:{0:null===(He=Mi)||void 0===He?void 0:He.symbol}})})]})})]}),(0,t.jsx)(je,{inverted:Ai,pool:wi,currencyQuote:Mi,currencyBase:_i})]})})]})]}),(0,t.jsx)(Q.c,{})]})}):(0,t.jsx)(Pe,{})}}}]);
//# sourceMappingURL=6522.5d915e5c.chunk.js.map