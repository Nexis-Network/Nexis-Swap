"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4075,5347],{52223:(e,i,n)=>{n.d(i,{WP:()=>W,ZP:()=>R,rG:()=>q});var t=n(92936),r=n(31017),o=n(76078),d=n(88846),s=n(61592),a=n.n(s),c=n(36399),l=n(45779),u=n(37525),x=n(86082),h=n(43454),p=n(22953),g=n(61152),f=n(54972),v=n(13820),j=n(51349),m=n(83416),y=n(73720),S=n(17202),b=n(5347),w=n(69780),C=n(61182),A=n(44591),z=n(47841),k=n(82731),I=n(5967),T=n(94284),_=n(56536);const q=(0,g.default)(T.m0).withConfig({displayName:"PositionCard__FixedHeightRow",componentId:"sc-ca448159-0"})`
  height: 24px;
`,D=(0,g.default)(C.hl).withConfig({displayName:"PositionCard__StyledPositionCard",componentId:"sc-ca448159-1"})`
  border: none;
  background: ${({theme:e,bgColor:i})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,c.DZ)(.8,i)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function W({pair:e,showUnwrapped:i=!1,border:n}){var s,c;const{account:u}=(0,d.useWeb3React)(),x=i?e.token0:(0,b.B)(e.token0),h=i?e.token1:(0,b.B)(e.token1),[g,v]=(0,l.useState)(!1),j=(0,y.mM)(u??void 0,e.liquidityToken),S=(0,m.A)(e.liquidityToken),w=j&&S&&a().greaterThanOrEqual(S.quotient,j.quotient)?new o.Percent(j.quotient,S.quotient):void 0,[k,I]=e&&S&&j&&a().greaterThanOrEqual(S.quotient,j.quotient)?[e.getLiquidityValue(e.token0,S,j,!1),e.getLiquidityValue(e.token1,S,j,!1)]:[void 0,void 0];return(0,t.jsx)(t.Fragment,{children:j&&a().greaterThan(j.quotient,a().BigInt(0))?(0,t.jsx)(C.rd,{border:n,children:(0,t.jsxs)(A.Tz,{gap:"md",children:[(0,t.jsx)(q,{children:(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(r.cC,{id:"VdLEAW"})})})}),(0,t.jsxs)(q,{onClick:()=>v(!g),children:[(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(z.Z,{currency0:x,currency1:h,margin:!0,size:20}),(0,t.jsxs)(p.xv,{fontWeight:535,fontSize:20,children:[x.symbol,"/",h.symbol]})]}),(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontWeight:535,fontSize:20,children:j?j.toSignificant(4):"-"})})]}),(0,t.jsxs)(A.Tz,{gap:"4px",children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"wcXFoV"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:w?w.toFixed(6)+"%":"-"})]}),(0,t.jsxs)(q,{children:[(0,t.jsxs)(p.xv,{fontSize:16,fontWeight:535,children:[x.symbol,":"]}),k?(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(s=k)||void 0===s?void 0:s.toSignificant(6)})}):"-"]}),(0,t.jsxs)(q,{children:[(0,t.jsxs)(p.xv,{fontSize:16,fontWeight:535,children:[h.symbol,":"]}),I?(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(c=I)||void 0===c?void 0:c.toSignificant(6)})}):"-"]})]})]})}):(0,t.jsx)(C.hl,{children:(0,t.jsxs)(f.Tv.DeprecatedSubHeader,{style:{textAlign:"center"},children:[(0,t.jsx)("span",{role:"img","aria-label":"wizard-icon",children:"\u2b50\ufe0f"})," ",(0,t.jsx)(r.cC,{id:"Z4Vy7Z"})," "]})})})}function R({pair:e,border:i,stakedBalance:n}){var s,c,g,C;const{account:W}=(0,d.useWeb3React)(),R=(0,b.B)(e.token0),$=(0,b.B)(e.token1),[E,L]=(0,l.useState)(!1),F=(0,y.mM)(W??void 0,e.liquidityToken),N=(0,m.A)(e.liquidityToken),O=n?null===(s=F)||void 0===s?void 0:s.add(n):F,V=O&&N&&a().greaterThanOrEqual(N.quotient,O.quotient)?new o.Percent(O.quotient,N.quotient):void 0,[B,P]=e&&N&&O&&a().greaterThanOrEqual(N.quotient,O.quotient)?[e.getLiquidityValue(e.token0,N,O,!1),e.getLiquidityValue(e.token1,N,O,!1)]:[void 0,void 0],U=(0,j.r)(null===(c=e)||void 0===c?void 0:c.token0);return(0,t.jsxs)(D,{border:i,bgColor:U,children:[(0,t.jsx)(k.RF,{}),(0,t.jsxs)(A.Tz,{gap:"md",children:[(0,t.jsxs)(q,{children:[(0,t.jsxs)(T.BA,{gap:"8px",style:{marginLeft:"8px"},children:[(0,t.jsx)(z.Z,{currency0:R,currency1:$,size:20}),(0,t.jsx)(p.xv,{fontWeight:535,fontSize:20,children:R&&$?`${R.symbol}/${$.symbol}`:(0,t.jsx)(_.bb,{children:(0,t.jsx)(r.cC,{id:"yQE2r9"})})})]}),(0,t.jsx)(T.DA,{gap:"8px",style:{marginRight:"4px"},children:(0,t.jsx)(w.qL,{padding:"6px 8px",$borderRadius:"12px",width:"100%",onClick:()=>L(!E),children:E?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.cC,{id:"wckWOP"}),(0,t.jsx)(u.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.cC,{id:"wckWOP"}),(0,t.jsx)(x.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]})})})]}),E&&(0,t.jsxs)(A.Tz,{gap:"sm",children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"EJ2nlN"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:O?O.toSignificant(4):"-"})]}),n&&(0,t.jsxs)(q,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"kOe6n7"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:n.toSignificant(4)})]}),(0,t.jsxs)(q,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"I4bzgz",values:{0:R.symbol}})})}),B?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(g=B)||void 0===g?void 0:g.toSignificant(6)}),(0,t.jsx)(I.Z,{size:"20px",style:{marginLeft:"8px"},currency:R})]}):"-"]}),(0,t.jsxs)(q,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"I4bzgz",values:{0:$.symbol}})})}),P?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(C=P)||void 0===C?void 0:C.toSignificant(6)}),(0,t.jsx)(I.Z,{size:"20px",style:{marginLeft:"8px"},currency:$})]}):"-"]}),(0,t.jsxs)(q,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"wcXFoV"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:V?(0,t.jsx)(r.cC,{id:"70DOjk",values:{0:"0.00"===V.toFixed(2)?"<0.01":V.toFixed(2)}}):"-"})]}),(0,t.jsx)(w.PL,{padding:"8px",$borderRadius:"8px",children:(0,t.jsx)(f.dL,{style:{width:"100%",textAlign:"center"},href:`https://v2.info.uniswap.org/account/${W}`,children:(0,t.jsx)(r.cC,{id:"DdWFnk",components:{0:(0,t.jsx)("span",{style:{fontSize:"11px"}})}})})}),F&&a().greaterThan(F.quotient,v.iV)&&(0,t.jsxs)(T.m0,{marginTop:"10px",children:[(0,t.jsx)(w.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/migrate/v2/${e.liquidityToken.address}`,width:"32%",children:(0,t.jsx)(r.cC,{id:"y5rS9U"})}),(0,t.jsx)(w.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/add/v2/${(0,S.H)(R)}/${(0,S.H)($)}`,width:"32%",children:(0,t.jsx)(r.cC,{id:"m16xKo"})}),(0,t.jsx)(w.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,width:"32%",to:`/remove/v2/${(0,S.H)(R)}/${(0,S.H)($)}`,children:(0,t.jsx)(r.cC,{id:"t/YqKh"})})]}),n&&a().greaterThan(n.quotient,v.iV)&&(0,t.jsx)(w.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/uni/${(0,S.H)(R)}/${(0,S.H)($)}`,width:"100%",children:(0,t.jsx)(r.cC,{id:"wD6KPn"})})]})]})]})}},26073:(e,i,n)=>{n.d(i,{A:()=>c});var t=n(92936),r=n(31017),o=n(44591),d=n(61152),s=n(54972);const a=d.default.div.withConfig({displayName:"V2Unsupported__TextWrapper",componentId:"sc-d048fc54-0"})`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function c(){return(0,t.jsx)(o.Tz,{gap:"lg",justify:"center",children:(0,t.jsx)(o.Tz,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(a,{children:(0,t.jsx)(s.Tv.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(r.cC,{id:"JUHu1U"})})})})})}},82731:(e,i,n)=>{n.d(i,{SS:()=>h,sq:()=>c,MN:()=>l,RF:()=>u,uO:()=>x,I8:()=>a});var t=n(61152);const r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",d=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var s=n(44591);const a=(0,t.default)(s.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
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
`,l=t.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
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
`,x=(0,t.default)(s.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=t.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},64381:(e,i,n)=>{n.d(i,{F:()=>r,z:()=>o});var t=n(8171);function r(){return(0,t.U2)(t.TT.v2Everywhere)}function o(){return r()===t.Wn.Enabled}},81069:(e,i,n)=>{n.d(i,{G:()=>d});var t=n(88846),r=n(57852),o=n(64381);function d(){const{chainId:e}=(0,t.useWeb3React)(),i=(0,o.z)();return e&&(i&&r.Ep.includes(e)||r.$6.includes(e))}},83416:(e,i,n)=>{n.d(i,{A:()=>s});var t=n(76078),r=n(84938),o=n(45779),d=n(7151);function s(e){var i,n,s,a;const c=(0,d.Ib)((null===(i=e)||void 0===i?void 0:i.isToken)?e.address:void 0,!1),l=null===(a=(0,r.Wk)(c,"totalSupply"))||void 0===a||null===(s=a.result)||void 0===s||null===(n=s[0])||void 0===n?void 0:n.toString();return(0,o.useMemo)((()=>{var i;return(null===(i=e)||void 0===i?void 0:i.isToken)&&l?t.CurrencyAmount.fromRawAmount(e,l):void 0}),[e,l])}},41047:(e,i,n)=>{n.d(i,{OY:()=>x,Oo:()=>h,_G:()=>u});var t=n(51371),r=n(76078),o=n(40148),d=n(12972),s=n(84938),a=n(45779),c=n(27614);const l=new t.vU(o.abi);var u;function x(e){const i=(0,a.useMemo)((()=>e.map((([e,i])=>{var n,t;return[null===(n=e)||void 0===n?void 0:n.wrapped,null===(t=i)||void 0===t?void 0:t.wrapped]}))),[e]),n=(0,a.useMemo)((()=>i.map((([e,i])=>(console.log("address==",r.V2_FACTORY_ADDRESSES[e.chainId]),e&&i&&e.chainId===i.chainId&&!e.equals(i)&&r.V2_FACTORY_ADDRESSES[e.chainId]?2370==e.chainId?(0,c.RA)({factoryAddress:r.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:i}):(0,d.computePairAddress)({factoryAddress:r.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:i}):void 0)))),[i]),t=(0,s._Y)(n,l,"getReserves"),o=(0,a.useMemo)((()=>t.map(((e,n)=>{const{result:t,loading:o}=e,s=i[n][0],a=i[n][1];if(o)return[u.LOADING,null];if(!s||!a||s.equals(a))return[u.INVALID,null];if(console.log("reserves===",t),!t)return[u.NOT_EXISTS,null];const{reserve0:l,reserve1:x}=t,[h,p]=s.sortsBefore(a)?[s,a]:[a,s];let g;try{g=2370==s.chainId?new c.uc(r.CurrencyAmount.fromRawAmount(h,l.toString()),r.CurrencyAmount.fromRawAmount(p,x.toString())):new d.Pair(r.CurrencyAmount.fromRawAmount(h,l.toString()),r.CurrencyAmount.fromRawAmount(p,x.toString()))}catch(f){g=void 0,console.log("useV2Pairs ERROR===",f,l.toString())}return[u.EXISTS,g]}))),[t,i]);return console.log("useV2PairsResponse===",o),o}function h(e,i){return x((0,a.useMemo)((()=>[[e,i]]),[e,i]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(u||(u={}))},5347:(e,i,n)=>{n.d(i,{B:()=>o});var t=n(57852),r=n(64370);function o(e){var i;if(e.isNative)return e;const n=(0,t.oG)(e.chainId);return n&&(null===(i=r.Fl[n])||void 0===i?void 0:i.equals(e))?(0,r.gX)(e.chainId):e}}}]);
//# sourceMappingURL=4075.a832c65b.chunk.js.map