"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5863,5118,5347],{39753:(e,i,n)=>{n.d(i,{q:()=>C,w:()=>k});var t=n(92936),r=n(31017),o=n(88846),d=n(1347),a=n(21926),l=n(43454),c=n(6282),s=n(22953),u=n(47856),p=n(47632),x=n(31744),h=n(61152),m=n(54972),v=n(55874),g=n(94284);const f=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-b673d9be-0"})`
  ${v.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,h.default)(l.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-b673d9be-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,h.default)(m.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-b673d9be-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,j=(0,h.default)(a.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-b673d9be-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,t.jsx)(f,{children:(0,t.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,t.jsx)(l.rU,{to:e,children:(0,t.jsx)(j,{})}),(0,t.jsx)(b,{children:(0,t.jsx)(r.cC,{id:"LCFvJr"})})]})})}const w=(0,h.default)(m.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-b673d9be-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function k({adding:e,creating:i,autoSlippage:n,children:a}){const{chainId:l}=(0,o.useWeb3React)(),m=(0,h.useTheme)(),v=(0,u.T)(),b=(0,c.s0)();return(0,t.jsx)(f,{children:(0,t.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,t.jsx)(y,{to:"..",onClick:i=>{i.preventDefault(),b(-1),e&&(v((0,p.dA)()),v((0,x.dA)()))},flex:a?"1":void 0,children:(0,t.jsx)(j,{stroke:m.neutral2})}),(0,t.jsx)(w,{$center:!a,children:i?(0,t.jsx)(r.cC,{id:"ma87bD"}):e?(0,t.jsx)(r.cC,{id:"E6MqGy"}):(0,t.jsx)(r.cC,{id:"cJtosk"})}),a&&(0,t.jsx)(s.xu,{style:{marginRight:".5rem"},children:a}),(0,t.jsx)(d.Z,{autoSlippage:n,chainId:l,hideRoutingSettings:!0})]})})}},3094:(e,i,n)=>{n.d(i,{Z:()=>d});var t=n(92936),r=n(45779);const o=n(61152).default.input.withConfig({displayName:"Slider__StyledRangeInput",componentId:"sc-2b24fd52-0"})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function d({value:e,onChange:i,min:n=0,step:d=1,max:a=100,size:l=28,...c}){const s=(0,r.useCallback)((e=>{i(parseInt(e.target.value))}),[i]);return(0,t.jsx)(o,{size:l,...c,type:"range",value:e,style:{padding:"15px 0"},onChange:s,"aria-labelledby":"input slider",step:d,min:n,max:a})}},82731:(e,i,n)=>{n.d(i,{SS:()=>x,sq:()=>c,MN:()=>s,RF:()=>u,uO:()=>p,I8:()=>l});var t=n(61152);const r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",d=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var a=n(44591);const l=(0,t.default)(a.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,c=t.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
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
`,s=t.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${d});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=t.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
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
`,p=(0,t.default)(a.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,x=t.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},47848:(e,i,n)=>{n.d(i,{Z:()=>r});var t=n(45779);function r(e,i,n=100){const[r,o]=(0,t.useState)((()=>e)),d=(0,t.useRef)(),a=(0,t.useCallback)((e=>{o(e),d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{i(e),d.current=void 0}),n)}),[n,i]);return(0,t.useEffect)((()=>{d.current&&(clearTimeout(d.current),d.current=void 0),o(e)}),[e]),[r,a]}},65118:(e,i,n)=>{n.d(i,{Z:()=>l,e:()=>a});var t=n(92936),r=n(61152),o=n(62587),d=n(7898);const a=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-b0a1d16d-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>`url(${d}), ${e.surface1}`};
  background-size: cover;
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function l(e){return(0,t.jsx)(a,{...e})}},32219:(e,i,n)=>{n.r(i),n.d(i,{default:()=>oe});var t=n(92936),r=n(11604),o=n(31017),d=n(5985),a=n(76078),l=n(21651),c=n(88846),s=n(47583),u=n(73499),p=n(69780),x=n(61182),h=n(44591),m=n(47841),v=n(82731),g=n(63415),f=n(5967),y=n(39753),b=n(94284),j=n(3094),C=n(67716),w=n(57852),k=n(7151),z=n(47848),S=n(40413),I=n(24509),T=n(26522),_=n(45779),$=n(6282),L=n(22953),q=n(39671),A=n(55660),W=n(42938),N=n(47856),R=n(5347),D=n(54542);function Z(){return(0,N.C)((e=>e.burnV3))}var V=n(99454),P=n(28098),M=n(61152),O=n(54972),F=n(63420),B=n(66136),E=n(4650),U=n(99819),G=n(64370),J=n(47186),H=n(64510),Q=n(17202),Y=n(65118),K=n(40926);const X=M.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-53ad7253-0"})`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,ee=(0,M.default)(K.ER).withConfig({displayName:"styled__SmallMaxButton",componentId:"sc-53ad7253-1"})`
  font-size: 12px;
`,ie=(0,M.default)(L.xv).withConfig({displayName:"styled__ResponsiveHeaderText",componentId:"sc-53ad7253-2"})`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`;function ne(e,i,n,t,r,o,d){try{var a=e[o](d),l=a.value}catch(c){return void n(c)}a.done?i(l):Promise.resolve(l).then(t,r)}function te(e){return function(){var i=this,n=arguments;return new Promise((function(t,r){var o=e.apply(i,n);function d(e){ne(o,t,r,d,a,"next",e)}function a(e){ne(o,t,r,d,a,"throw",e)}d(void 0)}))}}const re=new a.Percent(50,1e4);function oe(){const{chainId:e}=(0,c.useWeb3React)(),{tokenId:i}=(0,$.UO)(),n=(0,$.TH)(),o=(0,_.useMemo)((()=>{try{return r.O$.from(i)}catch{return null}}),[i]),{position:d,loading:a}=(0,S.n)(o??void 0);return null===o||o.eq(0)?(0,t.jsx)($.Fg,{to:{...n,pathname:"/pools"},replace:!0}):(0,w.EC)(e)&&(a||d)?(0,t.jsx)(de,{tokenId:o}):(0,t.jsx)(T.PositionPageUnsupportedContent,{})}function de({tokenId:e}){var i,n,r,w,T,$,K,ne,oe,de,ae,le,ce,se,ue,pe,xe,he,me,ve,ge,fe,ye,be,je,Ce,we,ke,ze,Se,Ie,Te;const{position:_e}=(0,S.n)(e),$e=(0,M.useTheme)(),{account:Le,chainId:qe,provider:Ae}=(0,c.useWeb3React)(),We=(0,s.oO)(),{formatCurrencyAmount:Ne}=(0,B.Gb)(),[Re,De]=(0,_.useState)(!1),Ze=(0,I.Z)(qe).wrapped.symbol,{percent:Ve}=Z(),{position:Pe,liquidityPercentage:Me,liquidityValue0:Oe,liquidityValue1:Fe,feeValue0:Be,feeValue1:Ee,outOfRange:Ue,error:Ge}=function(e,i=!1){var n,r,d,s;const{account:u}=(0,c.useWeb3React)(),{percent:p}=Z(),x=(0,q.dQ)(null===(n=e)||void 0===n?void 0:n.token0),h=(0,q.dQ)(null===(r=e)||void 0===r?void 0:r.token1),[,m]=(0,A.AI)(x??void 0,h??void 0,null===(d=e)||void 0===d?void 0:d.fee),v=(0,_.useMemo)((()=>{var i,n,t;return m&&(null===(i=e)||void 0===i?void 0:i.liquidity)&&"number"===typeof(null===(n=e)||void 0===n?void 0:n.tickLower)&&"number"===typeof(null===(t=e)||void 0===t?void 0:t.tickUpper)?new l.Position({pool:m,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0}),[m,e]),g=new a.Percent(p,100),f=v?g.multiply(v.amount0.quotient).quotient:void 0,y=v?g.multiply(v.amount1.quotient).quotient:void 0,b=x&&f?a.CurrencyAmount.fromRawAmount(i?x:(0,R.B)(x),f):void 0,j=h&&y?a.CurrencyAmount.fromRawAmount(i?h:(0,R.B)(h),y):void 0,[C,w]=(0,W.t)(m??void 0,null===(s=e)||void 0===s?void 0:s.tokenId,i),k=!(!m||!e)&&(m.tickCurrent<e.tickLower||m.tickCurrent>e.tickUpper);let z;return u||(z=(0,t.jsx)(o.cC,{id:"VHOVEJ"})),0===p&&(z=z??(0,t.jsx)(o.cC,{id:"Sta9CR"})),{position:v,liquidityPercentage:g,liquidityValue0:b,liquidityValue1:j,feeValue0:C,feeValue1:w,outOfRange:k,error:z}}(_e,Re),{onPercentSelect:Je}=function(){const e=(0,N.T)();return{onPercentSelect:(0,_.useCallback)((i=>{e((0,D.o)({percent:i}))}),[e])}}(),He=null===(n=_e)||void 0===n||null===(i=n.liquidity)||void 0===i?void 0:i.eq(0),[Qe,Ye]=(0,z.Z)(Ve,Je),Ke=(0,E.n)(),Xe=(0,P.eq)(re),[ei,ii]=(0,_.useState)(!1),[ni,ti]=(0,_.useState)(!1),[ri,oi]=(0,_.useState)(),di=(0,V.h7)(),ai=(0,k.GL)(),li=(0,_.useCallback)(te((function*(){if(ti(!0),!ai||!Oe||!Fe||!Le||!qe||!Pe||!Me||!Ae)return;const i=yield Ke();if(!i)throw new Error("could not get deadline");const{calldata:n,value:t}=l.NonfungiblePositionManager.removeCallParameters(Pe,{tokenId:e.toString(),liquidityPercentage:Me,slippageTolerance:Xe,deadline:i.toString(),collectOptions:{expectedCurrencyOwed0:Be??a.CurrencyAmount.fromRawAmount(Oe.currency,0),expectedCurrencyOwed1:Ee??a.CurrencyAmount.fromRawAmount(Fe.currency,0),recipient:Le}}),r={to:ai.address,data:n,value:t},o=yield Ae.getSigner().getChainId();if(qe!==o)throw new F.CJ;Ae.getSigner().estimateGas(r).then((e=>{const i={...r,gasLimit:(0,H.y)(e)};return Ae.getSigner().sendTransaction(i).then((e=>{(0,s._P)(d.vp.REMOVE_LIQUIDITY_SUBMITTED,{source:d.GM.V3,label:[Oe.currency.symbol,Fe.currency.symbol].join("/"),...We}),oi(e.hash),ti(!1),di(e,{type:J.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,Q.H)(Oe.currency),quoteCurrencyId:(0,Q.H)(Fe.currency),expectedAmountBaseRaw:Oe.quotient.toString(),expectedAmountQuoteRaw:Fe.quotient.toString()})}))})).catch((e=>{ti(!1),console.error(e)}))})),[ai,Oe,Fe,Le,qe,Pe,Me,Ae,Ke,e,Xe,Be,Ee,We,di]),ci=(0,_.useCallback)((()=>{ii(!1),ri&&Ye(0),ti(!1),oi("")}),[Ye,ri]),si=(0,t.jsx)(o.cC,{id:"F8SmOj",values:{0:null===(r=Oe)||void 0===r?void 0:r.toSignificant(6),1:null===(T=Oe)||void 0===T||null===(w=T.currency)||void 0===w?void 0:w.symbol,2:null===($=Fe)||void 0===$?void 0:$.toSignificant(6),3:null===(ne=Fe)||void 0===ne||null===(K=ne.currency)||void 0===K?void 0:K.symbol}});function ui(){var e,i,n,r,d,a,l,c,s,u,x,m,v,g;return(0,t.jsxs)(h.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,t.jsxs)(b.m0,{align:"flex-end",children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{id:"I4bzgz",values:{0:null===(i=Oe)||void 0===i||null===(e=i.currency)||void 0===e?void 0:e.symbol}})}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Oe&&Ne({amount:Oe})}),(0,t.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:null===(n=Oe)||void 0===n?void 0:n.currency})]})]}),(0,t.jsxs)(b.m0,{align:"flex-end",children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{id:"I4bzgz",values:{0:null===(d=Fe)||void 0===d||null===(r=d.currency)||void 0===r?void 0:r.symbol}})}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Fe&&Ne({amount:Fe})}),(0,t.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:null===(a=Fe)||void 0===a?void 0:a.currency})]})]}),(null===(l=Be)||void 0===l?void 0:l.greaterThan(0))||(null===(c=Ee)||void 0===c?void 0:c.greaterThan(0))?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.Tv.DeprecatedItalic,{fontSize:12,color:$e.neutral2,textAlign:"left",padding:"8px 0 0 0",children:(0,t.jsx)(o.cC,{id:"QwTcLK"})}),(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{id:"Vn8uJL",values:{0:null===(u=Be)||void 0===u||null===(s=u.currency)||void 0===s?void 0:s.symbol}})}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Be&&Ne({amount:Be})}),(0,t.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:null===(x=Be)||void 0===x?void 0:x.currency})]})]}),(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{id:"Vn8uJL",values:{0:null===(v=Ee)||void 0===v||null===(m=v.currency)||void 0===m?void 0:m.symbol}})}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Ee&&Ne({amount:Ee})}),(0,t.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:null===(g=Ee)||void 0===g?void 0:g.currency})]})]})]}):null,(0,t.jsx)(p.DF,{mt:"16px",onClick:li,children:(0,t.jsx)(o.cC,{id:"t/YqKh"})})]})}const pi=Boolean((null===(oe=Oe)||void 0===oe?void 0:oe.currency)&&(null===(de=Fe)||void 0===de?void 0:de.currency)&&(Oe.currency.isNative||Fe.currency.isNative||(null===(ae=G.Fl[Oe.currency.chainId])||void 0===ae?void 0:ae.equals(Oe.currency.wrapped))||(null===(le=G.Fl[Fe.currency.chainId])||void 0===le?void 0:le.equals(Fe.currency.wrapped))));return(0,t.jsxs)(h.Tz,{children:[(0,t.jsx)(U.Z,{isOpen:ei,onDismiss:ci,attemptingTxn:ni,hash:ri??"",reviewContent:()=>(0,t.jsx)(U.p,{title:(0,t.jsx)(o.cC,{id:"cJtosk"}),onDismiss:ci,topContent:ui}),pendingText:si}),(0,t.jsxs)(Y.Z,{$maxWidth:"unset",children:[(0,t.jsx)(y.w,{creating:!1,adding:!1,autoSlippage:re}),(0,t.jsx)(X,{children:_e?(0,t.jsxs)(h.Tz,{gap:"lg",children:[(0,t.jsxs)(b.m0,{children:[(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(m.Z,{currency0:null===(ce=Oe)||void 0===ce?void 0:ce.currency,currency1:null===(se=Fe)||void 0===se?void 0:se.currency,size:20,margin:!0}),(0,t.jsx)(O.Tv.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===(pe=Oe)||void 0===pe||null===(ue=pe.currency)||void 0===ue?void 0:ue.symbol}/${null===(he=Fe)||void 0===he||null===(xe=he.currency)||void 0===xe?void 0:xe.symbol}`})]}),(0,t.jsx)(u.Z,{removed:He,inRange:!Ue})]}),(0,t.jsx)(x.hl,{children:(0,t.jsxs)(h.Tz,{gap:"md",children:[(0,t.jsx)(O.Tv.DeprecatedMain,{fontWeight:485,children:(0,t.jsx)(o.cC,{id:"hehnjM"})}),(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(ie,{children:(0,t.jsx)(o.cC,{id:"AGSFTV",values:{percentForSlider:Qe}})}),(0,t.jsxs)(b.BA,{gap:"4px",justify:"flex-end",children:[(0,t.jsx)(ee,{onClick:()=>Je(25),width:"20%",children:(0,t.jsx)(o.cC,{id:"Xeb0wM"})}),(0,t.jsx)(ee,{onClick:()=>Je(50),width:"20%",children:(0,t.jsx)(o.cC,{id:"wW+u6Y"})}),(0,t.jsx)(ee,{onClick:()=>Je(75),width:"20%",children:(0,t.jsx)(o.cC,{id:"N+aNR1"})}),(0,t.jsx)(ee,{onClick:()=>Je(100),width:"20%",children:(0,t.jsx)(o.cC,{id:"CK1KXz"})})]})]}),(0,t.jsx)(j.Z,{value:Qe,onChange:Ye})]})}),(0,t.jsx)(x.hl,{children:(0,t.jsxs)(h.Tz,{gap:"md",children:[(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokena-symbol",children:(0,t.jsx)(o.cC,{id:"I4bzgz",values:{0:null===(ve=Oe)||void 0===ve||null===(me=ve.currency)||void 0===me?void 0:me.symbol}})}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Oe&&Ne({amount:Oe})}),(0,t.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:null===(ge=Oe)||void 0===ge?void 0:ge.currency})]})]}),(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokenb-symbol",children:(0,t.jsx)(o.cC,{id:"I4bzgz",values:{0:null===(ye=Fe)||void 0===ye||null===(fe=ye.currency)||void 0===fe?void 0:fe.symbol}})}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Fe&&Ne({amount:Fe})}),(0,t.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:null===(be=Fe)||void 0===be?void 0:be.currency})]})]}),(null===(je=Be)||void 0===je?void 0:je.greaterThan(0))||(null===(Ce=Ee)||void 0===Ce?void 0:Ce.greaterThan(0))?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.SS,{}),(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{id:"Vn8uJL",values:{0:null===(ke=Be)||void 0===ke||null===(we=ke.currency)||void 0===we?void 0:we.symbol}})}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Be&&Ne({amount:Be})}),(0,t.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:null===(ze=Be)||void 0===ze?void 0:ze.currency})]})]}),(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{id:"Vn8uJL",values:{0:null===(Ie=Ee)||void 0===Ie||null===(Se=Ie.currency)||void 0===Se?void 0:Se.symbol}})}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Ee&&Ne({amount:Ee})}),(0,t.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:null===(Te=Ee)||void 0===Te?void 0:Te.currency})]})]})]}):null]})}),pi&&(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(O.Tv.DeprecatedMain,{children:(0,t.jsx)(o.cC,{id:"oCijuv",values:{nativeWrappedSymbol:Ze}})}),(0,t.jsx)(C.Z,{id:"receive-as-weth",isActive:Re,toggle:()=>De((e=>!e))})]}),(0,t.jsx)("div",{style:{display:"flex"},children:(0,t.jsx)(h.Tz,{gap:"md",style:{flex:"1"},children:(0,t.jsx)(p.gn,{confirmed:!1,disabled:He||0===Ve||!Oe,onClick:()=>ii(!0),children:He?(0,t.jsx)(o.cC,{id:"D87pha"}):Ge??(0,t.jsx)(o.cC,{id:"t/YqKh"})})})})]}):(0,t.jsx)(g.ZP,{})})]})]})}},5347:(e,i,n)=>{n.d(i,{B:()=>o});var t=n(57852),r=n(64370);function o(e){var i;if(e.isNative)return e;const n=(0,t.oG)(e.chainId);return n&&(null===(i=r.Fl[n])||void 0===i?void 0:i.equals(e))?(0,r.gX)(e.chainId):e}}}]);
//# sourceMappingURL=5863.5136181b.chunk.js.map