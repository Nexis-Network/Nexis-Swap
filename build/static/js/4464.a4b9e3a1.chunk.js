"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4464,5347],{13310:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(45779),o=n(68090),r=n.n(o);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,l=s(e,["color","size"]);return i.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));a.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},a.displayName="Inbox";const l=a},17889:(e,t,n)=>{n.d(t,{q:()=>i,v:()=>j});var i,o=n(92936),r=n(45779),d=n(43454),s=n(61152),a=n(54972),l=n(27279),c=n(30520),p=n(1356);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(i||(i={}));const m=(0,s.default)(l.r).withConfig({displayName:"Menu__StyledMenuIcon",componentId:"sc-6640503f-0"})`
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
`,f=s.default.span.withConfig({displayName:"Menu__MenuFlyout",componentId:"sc-6640503f-2"})`
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
`,h=(0,s.default)(a.dL).withConfig({displayName:"Menu__MenuItem",componentId:"sc-6640503f-3"})`
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
`,u=(0,s.default)(d.rU).withConfig({displayName:"Menu__InternalMenuItem",componentId:"sc-6640503f-4"})`
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
`,g=(0,s.default)(h).withConfig({displayName:"Menu__ExternalMenuItem",componentId:"sc-6640503f-5"})`
  width: max-content;
  text-decoration: none;
`,j=({modal:e,flyoutAlignment:t=i.RIGHT,ToggleUI:n,menuItems:d,...s})=>{const a=(0,r.useRef)(),l=(0,p.Wt)(e),h=(0,p.xk)(e);(0,c.t)(a,l?h:void 0);const j=n||m;return(0,o.jsxs)(x,{ref:a,...s,children:[(0,o.jsx)(j,{onClick:h}),l&&(0,o.jsx)(f,{flyoutAlignment:t,onClick:h,children:d.map((({content:e,link:t,external:n},i)=>n?(0,o.jsx)(g,{href:t,children:e},i):(0,o.jsx)(u,{to:t,children:e},i)))})]})}},64381:(e,t,n)=>{n.d(t,{F:()=>o,z:()=>r});var i=n(8171);function o(){return(0,i.U2)(i.TT.v2Everywhere)}function r(){return o()===i.Wn.Enabled}},81069:(e,t,n)=>{n.d(t,{G:()=>d});var i=n(88846),o=n(57852),r=n(64381);function d(){const{chainId:e}=(0,i.useWeb3React)(),t=(0,r.z)();return e&&(t&&o.Ep.includes(e)||o.$6.includes(e))}},54527:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var i=n(92936),o=n(31017),r=n(5985),d=n(88846),s=n(47583),a=n(25320),l=n(69780),c=n(44591),p=n(17889),m=n(90652),x=n(45779),f=n(61152),h=n(66869);const u=f.default.div.withConfig({displayName:"PositionList__DesktopHeader",componentId:"sc-dcaf7249-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${h.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,g=f.default.div.withConfig({displayName:"PositionList__MobileHeader",componentId:"sc-dcaf7249-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${h.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${h.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,j=f.default.div.withConfig({displayName:"PositionList__ToggleWrap",componentId:"sc-dcaf7249-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,y=f.default.button.withConfig({displayName:"PositionList__ToggleLabel",componentId:"sc-dcaf7249-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function w({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(o.cC,{id:"LcLwJZ"}),e&&" ("+e.length+")"]}),(0,i.jsx)(y,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,i.jsx)(o.cC,{id:"GOctE4"}):(0,i.jsx)(o.cC,{id:"l+HNUa"})})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(o.cC,{id:"LcLwJZ"}),(0,i.jsx)(j,{children:(0,i.jsx)(y,{onClick:()=>{t(!n)},children:n?(0,i.jsx)(o.cC,{id:"GOctE4"}):(0,i.jsx)(o.cC,{id:"l+HNUa"})})})]}),e.map((e=>(0,i.jsx)(m.Z,{...e},e.tokenId.toString())))]})}var v=n(94284),C=n(10672),b=n(57852),_=n(30112),I=n(81069),T=n(40413),$=n(57221),k=n(13310),O=n(74928),N=n(68090),P=n.n(N);function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},L.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M=(0,x.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,d=E(e,["color","size"]);return x.createElement("svg",L({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),x.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),x.createElement("polyline",{points:"2 17 12 22 22 17"}),x.createElement("polyline",{points:"2 12 12 17 22 12"}))}));M.propTypes={color:P().string,size:P().oneOfType([P().string,P().number])},M.displayName="Layers";const H=M;var z=n(86082),W=n(43454),V=n(28098),S=n(54972),B=n(87685),R=n(75512),A=n(29021),U=n(62512);const Z=f.default.section.withConfig({displayName:"CTACards__CTASection",componentId:"sc-a331bc8-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,F=(0,f.default)(S.dL).withConfig({displayName:"CTACards__CTA",componentId:"sc-a331bc8-1"})`
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
`,G=(0,f.default)(S.Tv.DeprecatedLabel).withConfig({displayName:"CTACards__HeaderText",componentId:"sc-a331bc8-2"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,D=(0,f.default)(c.Tz).withConfig({displayName:"CTACards__ResponsiveColumn",componentId:"sc-a331bc8-3"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function Q(){const{chainId:e}=(0,d.useWeb3React)(),{infoLink:t}=(0,U.o7)(e);return(0,i.jsxs)(Z,{children:[(0,i.jsx)(F,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,i.jsxs)(D,{children:[(0,i.jsxs)(G,{children:[(0,i.jsx)(o.cC,{id:"4xl+7r"})," \u2197"]}),(0,i.jsx)(S.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,i.jsx)(o.cC,{id:"xTN8Uu"})})]})}),(0,i.jsx)(F,{"data-testid":"cta-infolink",href:t+"pools",children:(0,i.jsxs)(D,{children:[(0,i.jsxs)(G,{style:{alignSelf:"flex-start"},children:[(0,i.jsx)(o.cC,{id:"T6amNF"})," \u2197"]}),(0,i.jsx)(S.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,i.jsx)(o.cC,{id:"VLrq2h"})})]})})]})}var J=n(40926);const q=(0,f.default)(c.Tz).withConfig({displayName:"Pool__PageWrapper",componentId:"sc-7cf9f85-0"})`
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
`,Y=(0,f.default)(v.m0).withConfig({displayName:"Pool__TitleRow",componentId:"sc-7cf9f85-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,K=(0,f.default)(v.DA).withConfig({displayName:"Pool__ButtonRow",componentId:"sc-7cf9f85-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,X=(0,f.default)(p.v).withConfig({displayName:"Pool__PoolMenu",componentId:"sc-7cf9f85-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,ee=f.default.div.withConfig({displayName:"Pool__PoolMenuItem",componentId:"sc-7cf9f85-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,te=(0,f.default)(l.Ux).withConfig({displayName:"Pool__MoreOptionsButton",componentId:"sc-7cf9f85-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,ne=(0,f.default)(S.Tv.BodyPrimary).withConfig({displayName:"Pool__MoreOptionsText",componentId:"sc-7cf9f85-6"})`
  align-items: center;
  display: flex;
`,ie=f.default.div.withConfig({displayName:"Pool__ErrorContainer",componentId:"sc-7cf9f85-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,oe=f.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,re=(0,f.default)($.Z).withConfig({displayName:"Pool__NetworkIcon",componentId:"sc-7cf9f85-8"})`
  ${oe}
`,de=(0,f.default)(k.Z).withConfig({displayName:"Pool__InboxIcon",componentId:"sc-7cf9f85-9"})`
  ${oe}
`,se=(0,f.default)(l.DF).withConfig({displayName:"Pool__ResponsiveButtonPrimary",componentId:"sc-7cf9f85-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,ae=f.default.main.withConfig({displayName:"Pool__MainContentWrapper",componentId:"sc-7cf9f85-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function le(){return(0,i.jsxs)(J.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})}function ce(){const e=(0,f.useTheme)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(q,{children:(0,i.jsx)(c.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(c.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsx)(Y,{padding:"0",children:(0,i.jsx)(S.Tv.H1Large,{children:(0,i.jsx)(o.cC,{id:"12Jgfh"})})}),(0,i.jsx)(ae,{children:(0,i.jsx)(ie,{children:(0,i.jsxs)(S.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,i.jsx)(re,{strokeWidth:1.2}),(0,i.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,i.jsx)(o.cC,{id:"nFZR3H"})})]})})})]})})}),(0,i.jsx)(C.c,{})]})}function pe(){var e;const{account:t,chainId:n}=(0,d.useWeb3React)(),m=(0,I.G)(),h=(0,a.LK)(),u=(0,f.useTheme)(),[g,j]=(0,V.QP)(),{positions:y,loading:$}=(0,T.W)(t),[k,N]=(null===(e=y)||void 0===e?void 0:e.reduce(((e,t)=>{var n;return e[(null===(n=t.liquidity)||void 0===n?void 0:n.isZero())?1:0].push(t),e}),[[],[]]))??[[],[]],P=(0,x.useMemo)((()=>[...k,...g?[]:N]),[N,k,g]),L=(0,_.J)(P);if(!(0,b.EC)(n))return(0,i.jsx)(ce,{});const E=Boolean(!t),M=[{content:(0,i.jsxs)(ee,{children:[(0,i.jsx)(o.cC,{id:"y5rS9U"}),(0,i.jsx)(O.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,i.jsxs)(ee,{children:[(0,i.jsx)(o.cC,{id:"F+Ocff"}),(0,i.jsx)(H,{size:16})]}),link:"/pools/v2",external:!1}];return(0,i.jsxs)(s.fM,{page:r.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,i.jsx)(q,{children:(0,i.jsx)(c.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(c.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsxs)(Y,{padding:"0",children:[(0,i.jsxs)(v.ZP,{gap:"md",width:"min-content",children:[(0,i.jsx)(S.Tv.LargeHeader,{children:(0,i.jsx)(o.cC,{id:"12Jgfh"})}),(0,i.jsx)(R.p,{protocolVersion:B.Qeo.V3})]}),(0,i.jsxs)(K,{children:[m&&(0,i.jsx)(X,{modal:A.Lk.POOL_OVERVIEW_OPTIONS,menuItems:M,flyoutAlignment:p.q.LEFT,ToggleUI:e=>(0,i.jsx)(te,{...e,children:(0,i.jsxs)(ne,{children:[(0,i.jsx)(o.cC,{id:"2FYpfJ"}),(0,i.jsx)(z.Z,{size:15})]})})}),(0,i.jsxs)(se,{"data-cy":"join-pool-button",id:"join-pool-button",as:W.rU,to:"/add/ETH",children:["+ ",(0,i.jsx)(o.cC,{id:"1k0YWs"})]})]})]}),(0,i.jsx)(ae,{children:$?(0,i.jsx)(le,{}):L&&N&&L.length>0?(0,i.jsx)(w,{positions:L,setUserHideClosedPositions:j,userHideClosedPositions:g}):(0,i.jsxs)(ie,{children:[(0,i.jsxs)(S.Tv.BodyPrimary,{color:u.neutral3,textAlign:"center",children:[(0,i.jsx)(de,{strokeWidth:1,style:{marginTop:"2em"}}),(0,i.jsx)("div",{children:(0,i.jsx)(o.cC,{id:"YgSnQ0"})})]}),!E&&N.length>0&&(0,i.jsx)(l.oD,{style:{marginTop:".5rem"},onClick:()=>j(!g),children:(0,i.jsx)(o.cC,{id:"GOctE4"})}),E&&(0,i.jsx)(s.M8,{events:[r.TM.onClick],name:r.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:r.xo.CONNECT_WALLET_BUTTON,children:(0,i.jsx)(l.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:h,children:(0,i.jsx)(o.cC,{id:"GdzYJ9"})})})]})}),(0,i.jsx)(S.Pw,{children:(0,i.jsx)(Q,{})})]})})}),(0,i.jsx)(C.c,{})]})}},75512:(e,t,n)=>{n.d(t,{p:()=>w});var i=n(92936),o=n(31017),r=n(87254),d=n(69780);const s=e=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z",fill:e.fill||"currentColor"})});var a=n(17889),l=n(87685),c=n(86082),p=n(1356),m=n(29021),x=n(61152),f=n(54972);const h=x.default.div.withConfig({displayName:"shared__PoolVersionItem",componentId:"sc-a7c87620-0"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`,u=(0,x.default)(d.Ux).withConfig({displayName:"shared__PoolOptionsButton",componentId:"sc-a7c87620-1"})`
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
`,j={[l.Qeo.V3]:{content:(0,i.jsxs)(h,{children:[(0,i.jsx)(s,{width:"20px",height:"20px"}),(0,i.jsx)(f.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(o.cC,{id:"Lp6Z70"})})]}),link:"/pool",external:!1},[l.Qeo.V2]:{content:(0,i.jsxs)(h,{children:[(0,i.jsx)(s,{width:"20px",height:"20px"}),(0,i.jsx)(f.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(o.cC,{id:"iadVG2"})})]}),link:"/pools/v2",external:!1}},y={[l.Qeo.V3]:r.ag._({id:"YXMjkc"}),[l.Qeo.V2]:r.ag._({id:"SuKIHc"})};function w({protocolVersion:e}){const t=(0,p.Wt)(m.Lk.POOL_VERSION);return(0,i.jsx)(a.v,{modal:m.Lk.POOL_VERSION,menuItems:[j[e===l.Qeo.V3?l.Qeo.V2:l.Qeo.V3]],flyoutAlignment:a.q.LEFT,ToggleUI:n=>(0,i.jsxs)(u,{...n,$isOpen:t,children:[(0,i.jsx)(f.Tv.BodyPrimary,{color:"neutral2",children:y[e]}),(0,i.jsx)(g,{$isOpen:t})]})})}},40926:(e,t,n)=>{n.d(t,{DC:()=>s,ER:()=>a,bb:()=>l,im:()=>d,pr:()=>c});var i=n(32546),o=n(22953),r=n(61152);const d=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
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
//# sourceMappingURL=4464.a4b9e3a1.chunk.js.map