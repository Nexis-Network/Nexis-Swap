"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8548,5118],{57809:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(45779),r=t(68090),s=t.n(r);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,s=e.size,c=void 0===s?24:s,a=d(e,["color","size"]);return i.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="Plus";const a=c},39753:(e,n,t)=>{t.d(n,{q:()=>T,w:()=>_});var i=t(92936),r=t(31017),s=t(88846),o=t(1347),d=t(21926),c=t(43454),a=t(6282),l=t(22953),x=t(47856),p=t(47632),h=t(31744),m=t(61152),g=t(54972),u=t(55874),f=t(94284);const j=m.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-b673d9be-0"})`
  ${u.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,m.default)(c.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-b673d9be-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,m.default)(g.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-b673d9be-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,y=(0,m.default)(d.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-b673d9be-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function T({origin:e}){return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(c.rU,{to:e,children:(0,i.jsx)(y,{})}),(0,i.jsx)(v,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const C=(0,m.default)(g.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-b673d9be-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function _({adding:e,creating:n,autoSlippage:t,children:d}){const{chainId:c}=(0,s.useWeb3React)(),g=(0,m.useTheme)(),u=(0,x.T)(),v=(0,a.s0)();return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(b,{to:"..",onClick:n=>{n.preventDefault(),v(-1),e&&(u((0,p.dA)()),u((0,h.dA)()))},flex:d?"1":void 0,children:(0,i.jsx)(y,{stroke:g.neutral2})}),(0,i.jsx)(C,{$center:!d,children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),d&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:d}),(0,i.jsx)(o.Z,{autoSlippage:t,chainId:c,hideRoutingSettings:!0})]})})}},65118:(e,n,t)=>{t.d(n,{Z:()=>c,e:()=>d});var i=t(92936),r=t(61152),s=t(62587),o=t(7898);const d=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-b0a1d16d-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>`url(${o}), ${e.surface1}`};
  background-size: cover;
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${s.k.default};
`;function c(e){return(0,i.jsx)(d,{...e})}},40926:(e,n,t)=>{t.d(n,{DC:()=>d,ER:()=>c,bb:()=>a,im:()=>o,pr:()=>l});var i=t(32546),r=t(22953),s=t(61152);const o=s.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,d=(0,s.default)(r.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,c=s.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,a=s.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,l=(0,s.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},8548:(e,n,t)=>{t.r(n),t.d(n,{default:()=>L});var i,r=t(92936),s=t(31017),o=t(5985),d=t(88846),c=t(47583),a=t(26073),l=t(81069),x=t(61592),p=t.n(x),h=t(45779),m=t(57809),g=t(6282),u=t(22953),f=t(54972),j=t(69780),b=t(61182),v=t(44591),y=t(5967),T=t(39753),C=t(52223),_=t(94284),w=t(68999),N=t(10672),O=t(64370),I=t(41047),k=t(73720),S=t(28098),$=t(17202),E=t(65118),A=t(40926);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}));const z={showCommonBases:!0};function L(){var e;const n=new URLSearchParams((0,g.TH)().search),{account:t,chainId:x}=(0,d.useWeb3React)(),[L,W]=(0,h.useState)(!1),[B,K]=(0,h.useState)(i.TOKEN1),[P,D]=(0,h.useState)((()=>x?(0,O.gX)(x):null)),[G,R]=(0,h.useState)(null),[Z,q]=(0,I.Oo)(P??void 0,G??void 0),H=(0,S.uB)();(0,h.useEffect)((()=>{q&&H(q)}),[q,H]);const F=Z===I._G.NOT_EXISTS||Boolean(Z===I._G.EXISTS&&q&&p().equal(q.reserve0.quotient,p().BigInt(0))&&p().equal(q.reserve1.quotient,p().BigInt(0))),M=(0,k.mM)(t??void 0,null===(e=q)||void 0===e?void 0:e.liquidityToken),X=Boolean(M&&p().greaterThan(M.quotient,p().BigInt(0))),Y=(0,h.useCallback)((e=>{B===i.TOKEN0?D(e):R(e)}),[B]),J=(0,h.useCallback)((()=>{W(!1)}),[W]),U=(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsx)(u.xv,{textAlign:"center",children:t?(0,r.jsx)(s.cC,{id:"pKO91W"}):(0,r.jsx)(s.cC,{id:"4YB3Bt"})})});return(0,l.G)()?(0,r.jsx)(c.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(T.q,{origin:n.get("origin")??"/pools/v2"}),(0,r.jsxs)(v.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(b.Pj,{children:(0,r.jsx)(v.Tz,{gap:"10px",children:(0,r.jsx)(f.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsx)(s.cC,{id:"qtO+b3",components:{0:(0,r.jsx)("b",{})}})})})}),(0,r.jsx)(j.KA,{onClick:()=>{W(!0),K(i.TOKEN0)},children:P?(0,r.jsxs)(_.ZP,{children:[(0,r.jsx)(y.Z,{currency:P}),(0,r.jsx)(u.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:P.symbol})]}):(0,r.jsx)(u.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(s.cC,{id:"T0Y2+3"})})}),(0,r.jsx)(v.lg,{children:(0,r.jsx)(m.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(j.KA,{onClick:()=>{W(!0),K(i.TOKEN1)},children:G?(0,r.jsxs)(_.ZP,{children:[(0,r.jsx)(y.Z,{currency:G}),(0,r.jsx)(u.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:G.symbol})]}):(0,r.jsx)(u.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(s.cC,{id:"T0Y2+3"})})}),X&&(0,r.jsxs)(v.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(u.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(s.cC,{id:"lYF0uv"})}),(0,r.jsx)(f.m_,{to:"pools/v2",children:(0,r.jsx)(u.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"/4YRTg"})})})]}),P&&G?Z===I._G.EXISTS?X&&q?(0,r.jsx)(C.WP,{pair:q,border:"1px solid #CED0D9"}):(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(u.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"Lu0Uod"})}),(0,r.jsx)(f.m_,{to:`/add/v2/${(0,$.H)(P)}/${(0,$.H)(G)}`,children:(0,r.jsx)(u.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"xJEVlK"})})})]})}):F?(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(u.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"+8rnEI"})}),(0,r.jsx)(f.m_,{to:`/add/${(0,$.H)(P)}/${(0,$.H)(G)}`,children:(0,r.jsx)(s.cC,{id:"I1gztT"})})]})}):Z===I._G.INVALID?(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(u.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(s.cC,{id:"ovVGFw"})})})}):Z===I._G.LOADING?(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(u.xv,{textAlign:"center",children:[(0,r.jsx)(s.cC,{id:"yQE2r9"}),(0,r.jsx)(A.bb,{})]})})}):null:U]}),(0,r.jsx)(w.Z,{isOpen:L,onCurrencySelect:Y,onDismiss:J,selectedCurrency:(B===i.TOKEN0?G:P)??void 0,currencySearchFilters:z})]}),(0,r.jsx)(N.c,{})]})}):(0,r.jsx)(a.A,{})}}}]);
//# sourceMappingURL=8548.13ec5407.chunk.js.map