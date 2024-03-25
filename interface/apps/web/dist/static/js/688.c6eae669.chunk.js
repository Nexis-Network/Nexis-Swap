"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[688,5347],{13310:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(45779),o=n(68090),r=n.n(o);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,l=s(e,["color","size"]);return i.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));a.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},a.displayName="Inbox";const l=a},17889:(e,t,n)=>{n.d(t,{q:()=>i,v:()=>y});var i,o=n(92936),r=n(45779),d=n(43454),s=n(61152),a=n(54972),l=n(27279),c=n(30520),p=n(1356);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(i||(i={}));const m=(0,s.default)(l.r).withConfig({displayName:"Menu__StyledMenuIcon",componentId:"sc-6640503f-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,x=s.default.div.withConfig({displayName:"Menu__StyledMenu",componentId:"sc-6640503f-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,h=s.default.span.withConfig({displayName:"Menu__MenuFlyout",componentId:"sc-6640503f-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=i.RIGHT})=>e===i.RIGHT?s.css`
          right: 0rem;
        `:s.css`
          left: 0rem;
        `};
`,u=(0,s.default)(a.dL).withConfig({displayName:"Menu__MenuItem",componentId:"sc-6640503f-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,f=(0,s.default)(d.rU).withConfig({displayName:"Menu__InternalMenuItem",componentId:"sc-6640503f-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,g=(0,s.default)(u).withConfig({displayName:"Menu__ExternalMenuItem",componentId:"sc-6640503f-5"})`
  width: max-content;
  text-decoration: none;
`,y=({modal:e,flyoutAlignment:t=i.RIGHT,ToggleUI:n,menuItems:d,...s})=>{const a=(0,r.useRef)(),l=(0,p.Wt)(e),u=(0,p.xk)(e);(0,c.t)(a,l?u:void 0);const y=n||m;return(0,o.jsxs)(x,{ref:a,...s,children:[(0,o.jsx)(y,{onClick:u}),l&&(0,o.jsx)(h,{flyoutAlignment:t,onClick:u,children:d.map((({content:e,link:t,external:n},i)=>n?(0,o.jsx)(g,{href:t,children:e},i):(0,o.jsx)(f,{to:t,children:e},i)))})]})}},64381:(e,t,n)=>{n.d(t,{F:()=>o,z:()=>r});var i=n(8171);function o(){return(0,i.U2)(i.TT.v2Everywhere)}function r(){return o()===i.Wn.Enabled}},81069:(e,t,n)=>{n.d(t,{G:()=>d});var i=n(88846),o=n(57852),r=n(64381);function d(){const{chainId:e}=(0,i.useWeb3React)(),t=(0,r.z)();return e&&(t&&o.Ep.includes(e)||o.$6.includes(e))}},74220:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var i=n(92936),o=n(31017),r=n(5985),d=n(88846),s=n(47583),a=n(25320),l=n(69780),c=n(44591),p=n(17889),m=n(90652),x=n(45779),h=n(61152),u=n(66869);const f=h.default.div.withConfig({displayName:"PositionList__DesktopHeader",componentId:"sc-dcaf7249-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${u.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,g=h.default.div.withConfig({displayName:"PositionList__MobileHeader",componentId:"sc-dcaf7249-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${u.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${u.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,y=h.default.div.withConfig({displayName:"PositionList__ToggleWrap",componentId:"sc-dcaf7249-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,j=h.default.button.withConfig({displayName:"PositionList__ToggleLabel",componentId:"sc-dcaf7249-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function w({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(f,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(o.cC,{id:"LcLwJZ"}),e&&" ("+e.length+")"]}),(0,i.jsx)(j,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,i.jsx)(o.cC,{id:"GOctE4"}):(0,i.jsx)(o.cC,{id:"l+HNUa"})})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(o.cC,{id:"LcLwJZ"}),(0,i.jsx)(y,{children:(0,i.jsx)(j,{onClick:()=>{t(!n)},children:n?(0,i.jsx)(o.cC,{id:"GOctE4"}):(0,i.jsx)(o.cC,{id:"l+HNUa"})})})]}),e.map((e=>(0,i.jsx)(m.Z,{...e},e.tokenId.toString())))]})}var v=n(94284),b=n(10672),C=n(57852),_=n(30112),T=n(81069),I=n(40413),O=n(57221),k=n(13310),$=n(74928),N=n(68090),P=n.n(N);function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},L.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var z=(0,x.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,d=E(e,["color","size"]);return x.createElement("svg",L({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),x.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),x.createElement("polyline",{points:"2 17 12 22 22 17"}),x.createElement("polyline",{points:"2 12 12 17 22 12"}))}));z.propTypes={color:P().string,size:P().oneOfType([P().string,P().number])},z.displayName="Layers";const M=z;function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},H.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S=(0,x.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,d=W(e,["color","size"]);return x.createElement("svg",H({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),x.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),x.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));S.propTypes={color:P().string,size:P().oneOfType([P().string,P().number])},S.displayName="BookOpen";const B=S;var R=n(86082),V=n(43454),A=n(28098),Z=n(54972),U=n(87685),F=n(75512),G=n(29021),D=n(62512);const Q=h.default.section.withConfig({displayName:"CTACards__CTASection",componentId:"sc-b74bef8e-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,J=(0,h.default)(Z.dL).withConfig({displayName:"CTACards__CTA",componentId:"sc-b74bef8e-1"})`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`,q=(0,h.default)(Z.Tv.DeprecatedLabel).withConfig({displayName:"CTACards__HeaderText",componentId:"sc-b74bef8e-2"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,Y=(0,h.default)(c.Tz).withConfig({displayName:"CTACards__ResponsiveColumn",componentId:"sc-b74bef8e-3"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function K(){const{chainId:e}=(0,d.useWeb3React)(),{infoLink:t}=(0,D.o7)(e);return(0,i.jsxs)(Q,{children:[(0,i.jsx)(J,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,i.jsxs)(Y,{children:[(0,i.jsxs)(q,{children:[(0,i.jsx)(o.cC,{id:"4xl+7r"})," \u2197"]}),(0,i.jsx)(Z.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,i.jsx)(o.cC,{id:"xTN8Uu"})})]})}),(0,i.jsx)(J,{"data-testid":"cta-infolink",href:t+"pools",children:(0,i.jsxs)(Y,{children:[(0,i.jsxs)(q,{style:{alignSelf:"flex-start"},children:[(0,i.jsx)(o.cC,{id:"T6amNF"})," \u2197"]}),(0,i.jsx)(Z.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,i.jsx)(o.cC,{id:"sX+nNt"})})]})})]})}var X=n(40926);const ee=(0,h.default)(c.Tz).withConfig({displayName:"Pool__PageWrapper",componentId:"sc-a22210e3-0"})`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,te=(0,h.default)(v.m0).withConfig({displayName:"Pool__TitleRow",componentId:"sc-a22210e3-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,ne=(0,h.default)(v.DA).withConfig({displayName:"Pool__ButtonRow",componentId:"sc-a22210e3-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,ie=(0,h.default)(p.v).withConfig({displayName:"Pool__PoolMenu",componentId:"sc-a22210e3-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,oe=h.default.div.withConfig({displayName:"Pool__PoolMenuItem",componentId:"sc-a22210e3-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,re=(0,h.default)(l.Ux).withConfig({displayName:"Pool__MoreOptionsButton",componentId:"sc-a22210e3-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,de=(0,h.default)(Z.Tv.BodyPrimary).withConfig({displayName:"Pool__MoreOptionsText",componentId:"sc-a22210e3-6"})`
  align-items: center;
  display: flex;
`,se=h.default.div.withConfig({displayName:"Pool__ErrorContainer",componentId:"sc-a22210e3-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,ae=h.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,le=(0,h.default)(O.Z).withConfig({displayName:"Pool__NetworkIcon",componentId:"sc-a22210e3-8"})`
  ${ae}
`,ce=(0,h.default)(k.Z).withConfig({displayName:"Pool__InboxIcon",componentId:"sc-a22210e3-9"})`
  ${ae}
`,pe=(0,h.default)(l.DF).withConfig({displayName:"Pool__ResponsiveButtonPrimary",componentId:"sc-a22210e3-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,me=h.default.main.withConfig({displayName:"Pool__MainContentWrapper",componentId:"sc-a22210e3-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function xe(){return(0,i.jsxs)(X.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})}function he(){const e=(0,h.useTheme)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ee,{children:(0,i.jsx)(c.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(c.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsx)(te,{padding:"0",children:(0,i.jsx)(Z.Tv.H1Large,{children:(0,i.jsx)(o.cC,{id:"12Jgfh"})})}),(0,i.jsx)(me,{children:(0,i.jsx)(se,{children:(0,i.jsxs)(Z.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,i.jsx)(le,{strokeWidth:1.2}),(0,i.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,i.jsx)(o.cC,{id:"nFZR3H"})})]})})})]})})}),(0,i.jsx)(b.c,{})]})}function ue(){var e;const{account:t,chainId:n}=(0,d.useWeb3React)(),m=(0,T.G)(),u=(0,a.LK)(),f=(0,h.useTheme)(),[g,y]=(0,A.QP)(),{positions:j,loading:O}=(0,I.W)(t),[k,N]=(null===(e=j)||void 0===e?void 0:e.reduce(((e,t)=>{var n;return e[(null===(n=t.liquidity)||void 0===n?void 0:n.isZero())?1:0].push(t),e}),[[],[]]))??[[],[]],P=(0,x.useMemo)((()=>[...k,...g?[]:N]),[N,k,g]),L=(0,_.J)(P);if(!(0,C.EC)(n))return(0,i.jsx)(he,{});const E=Boolean(!t),z=[{content:(0,i.jsxs)(oe,{children:[(0,i.jsx)(o.cC,{id:"y5rS9U"}),(0,i.jsx)($.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,i.jsxs)(oe,{children:[(0,i.jsx)(o.cC,{id:"F+Ocff"}),(0,i.jsx)(M,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,i.jsxs)(oe,{children:[(0,i.jsx)(o.cC,{id:"rjZpLn"}),(0,i.jsx)(B,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,i.jsxs)(s.fM,{page:r.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,i.jsx)(ee,{children:(0,i.jsx)(c.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(c.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsxs)(te,{padding:"0",children:[(0,i.jsxs)(v.ZP,{gap:"md",width:"min-content",children:[(0,i.jsx)(Z.Tv.LargeHeader,{children:(0,i.jsx)(o.cC,{id:"12Jgfh"})}),(0,i.jsx)(F.p,{protocolVersion:U.Qeo.V3})]}),(0,i.jsxs)(ne,{children:[m&&(0,i.jsx)(ie,{modal:G.Lk.POOL_OVERVIEW_OPTIONS,menuItems:z,flyoutAlignment:p.q.LEFT,ToggleUI:e=>(0,i.jsx)(re,{...e,children:(0,i.jsxs)(de,{children:[(0,i.jsx)(o.cC,{id:"2FYpfJ"}),(0,i.jsx)(R.Z,{size:15})]})})}),(0,i.jsxs)(pe,{"data-cy":"join-pool-button",id:"join-pool-button",as:V.rU,to:"/add/ETH",children:["+ ",(0,i.jsx)(o.cC,{id:"1k0YWs"})]})]})]}),(0,i.jsx)(me,{children:O?(0,i.jsx)(xe,{}):L&&N&&L.length>0?(0,i.jsx)(w,{positions:L,setUserHideClosedPositions:y,userHideClosedPositions:g}):(0,i.jsxs)(se,{children:[(0,i.jsxs)(Z.Tv.BodyPrimary,{color:f.neutral3,textAlign:"center",children:[(0,i.jsx)(ce,{strokeWidth:1,style:{marginTop:"2em"}}),(0,i.jsx)("div",{children:(0,i.jsx)(o.cC,{id:"YgSnQ0"})})]}),!E&&N.length>0&&(0,i.jsx)(l.oD,{style:{marginTop:".5rem"},onClick:()=>y(!g),children:(0,i.jsx)(o.cC,{id:"GOctE4"})}),E&&(0,i.jsx)(s.M8,{events:[r.TM.onClick],name:r.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:r.xo.CONNECT_WALLET_BUTTON,children:(0,i.jsx)(l.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:u,children:(0,i.jsx)(o.cC,{id:"GdzYJ9"})})})]})}),(0,i.jsx)(Z.Pw,{children:(0,i.jsx)(K,{})})]})})}),(0,i.jsx)(b.c,{})]})}},75512:(e,t,n)=>{n.d(t,{p:()=>w});var i=n(92936),o=n(31017),r=n(87254),d=n(69780);const s=e=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z",fill:e.fill||"currentColor"})});var a=n(17889),l=n(87685),c=n(86082),p=n(1356),m=n(29021),x=n(61152),h=n(54972);const u=x.default.div.withConfig({displayName:"shared__PoolVersionItem",componentId:"sc-a7c87620-0"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`,f=(0,x.default)(d.Ux).withConfig({displayName:"shared__PoolOptionsButton",componentId:"sc-a7c87620-1"})`
  flex: 1 1 auto;
  padding: 6px 8px 6px 12px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  border-radius: 8px;
  gap: 6px;

  &:hover {
    background-color: ${({theme:e,$isOpen:t})=>t?e.surface1:e.surface3};
    opacity: 0.9;
  }

  ${({$isOpen:e})=>e&&x.css`
      background-color: ${({theme:e})=>e.surface1};
      border: ${({theme:e})=>`1.5px solid ${e.neutral3}`};
    `}
`,g=(0,x.default)(c.Z).withConfig({displayName:"shared__StyledChevron",componentId:"sc-a7c87620-2"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,y={[l.Qeo.V3]:{content:(0,i.jsxs)(u,{children:[(0,i.jsx)(s,{width:"20px",height:"20px"}),(0,i.jsx)(h.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(o.cC,{id:"Lp6Z70"})})]}),link:"/pool",external:!1},[l.Qeo.V2]:{content:(0,i.jsxs)(u,{children:[(0,i.jsx)(s,{width:"20px",height:"20px"}),(0,i.jsx)(h.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(o.cC,{id:"iadVG2"})})]}),link:"/pools/v2",external:!1}},j={[l.Qeo.V3]:r.ag._({id:"YXMjkc"}),[l.Qeo.V2]:r.ag._({id:"SuKIHc"})};function w({protocolVersion:e}){const t=(0,p.Wt)(m.Lk.POOL_VERSION);return(0,i.jsx)(a.v,{modal:m.Lk.POOL_VERSION,menuItems:[y[e===l.Qeo.V3?l.Qeo.V2:l.Qeo.V3]],flyoutAlignment:a.q.LEFT,ToggleUI:n=>(0,i.jsxs)(f,{...n,$isOpen:t,children:[(0,i.jsx)(h.Tv.BodyPrimary,{color:"neutral2",children:j[e]}),(0,i.jsx)(g,{$isOpen:t})]})})}},40926:(e,t,n)=>{n.d(t,{DC:()=>s,ER:()=>a,bb:()=>l,im:()=>d,pr:()=>c});var i=n(32546),o=n(22953),r=n(61152);const d=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,s=(0,r.default)(o.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=r.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,l=r.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,c=(0,r.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},5347:(e,t,n)=>{n.d(t,{B:()=>r});var i=n(57852),o=n(64370);function r(e){var t;if(e.isNative)return e;const n=(0,i.oG)(e.chainId);return n&&(null===(t=o.Fl[n])||void 0===t?void 0:t.equals(e))?(0,o.gX)(e.chainId):e}}}]);
//# sourceMappingURL=688.c6eae669.chunk.js.map