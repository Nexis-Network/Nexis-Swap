"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8859],{78859:(e,n,i)=>{i.r(n),i.d(n,{default:()=>tn});var a=i(92936),t=i(5985),o=i(47583),r=i(87685),l=i(66057),d=i(78129),s=i(45779),c=i(6282),p=i(61152),m=i(58690),h=i(76907);function u(e,n,i,a,t,o,r){try{var l=e[o](r),d=l.value}catch(s){return void i(s)}l.done?n(d):Promise.resolve(d).then(a,t)}function x(e){return function(){var n=this,i=arguments;return new Promise((function(a,t){var o=e.apply(n,i);function r(e){u(o,a,t,r,l,"next",e)}function l(e){u(o,a,t,r,l,"throw",e)}r(void 0)}))}}const g=p.default.div.withConfig({displayName:"Carousel__CarouselContainer",componentId:"sc-718aa339-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,f=p.default.div.withConfig({displayName:"Carousel__CarouselCardContainer",componentId:"sc-718aa339-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,b=(0,p.default)(h.a.div).withConfig({displayName:"Carousel__CarouselItemCard",componentId:"sc-718aa339-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,C=p.default.div.withConfig({displayName:"Carousel__CarouselItemIcon",componentId:"sc-718aa339-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,w=800,y=({children:e,activeIndex:n,toggleNextSlide:i})=>{const t=(0,s.useCallback)(((n,i=e.length)=>(0,d.ef)(n,i)),[e]),o=(0,s.useCallback)(((e,n,i)=>(0,d.E)(e,n,i,t)),[t]),[r,l]=(0,h.bY)(e.length,(n=>({x:(n<e.length-1?n:-1)*w}))),c=(0,s.useRef)([0,1]),p=(0,s.useCallback)(((n,i)=>{const a=t(Math.floor(n/w)%e.length),r=i<0?e.length-2:1;l((t=>{const l=o(t,a,r),s=o(t,c.current[0],c.current[1]),p=(0,d.Z1)(a,r,l,e.length,n);return{x:-n%(w*e.length)+w*p,immediate:i<0?s>l:s<l,config:{tension:250,friction:30}}})),c.current=[a,r]}),[t,o,l,e.length]),u=(0,s.useRef)(0);(0,s.useEffect)((()=>{p(n*w,u.current)}),[n,p]);const y=(0,s.useCallback)((e=>{u.current=e,i(e)}),[i]);return(0,s.useEffect)((()=>{const e=setInterval(x((function*(){y(1)})),7e3);return()=>{clearInterval(e)}}),[y,n]),(0,a.jsxs)(g,{children:[(0,a.jsx)(C,{onClick:()=>y(-1),children:(0,a.jsx)(m.wy,{width:"16px",height:"16px"})}),(0,a.jsx)(f,{children:r.map((({x:n},i)=>(0,a.jsx)(b,{style:{x:n},children:e[i]},i)))}),(0,a.jsx)(C,{onClick:()=>y(1),children:(0,a.jsx)(m.XC,{width:"16px",height:"16px"})})]})},v=({children:e})=>(0,a.jsx)(y,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var j=i(32546),_=i(82743),T=i(13901),k=i(47263),N=i(68798),$=i(66136);const I=p.default.div.withConfig({displayName:"CarouselCard__CarouselCardBorder",componentId:"sc-a2f657bb-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,S=p.default.div.withConfig({displayName:"CarouselCard__CardHeaderContainer",componentId:"sc-a2f657bb-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,H=p.default.div.withConfig({displayName:"CarouselCard__LoadingCardHeaderContainer",componentId:"sc-a2f657bb-2"})`
  position: relative;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,z=p.default.div.withConfig({displayName:"CarouselCard__CardHeaderColumn",componentId:"sc-a2f657bb-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,F=p.default.div.withConfig({displayName:"CarouselCard__IconContainer",componentId:"sc-a2f657bb-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,E=p.default.div.withConfig({displayName:"CarouselCard__CollectionNameContainer",componentId:"sc-a2f657bb-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,P=(0,p.default)(_.X).withConfig({displayName:"CarouselCard__LoadingCollectionNameContainer",componentId:"sc-a2f657bb-6"})`
  width: 50%;
`,B=p.default.div.withConfig({displayName:"CarouselCard__HeaderOverlay",componentId:"sc-a2f657bb-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,D=p.default.img.withConfig({displayName:"CarouselCard__CollectionImage",componentId:"sc-a2f657bb-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,X=p.default.div.withConfig({displayName:"CarouselCard__LoadingCollectionImage",componentId:"sc-a2f657bb-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,O=(0,p.default)(_.X).withConfig({displayName:"CarouselCard__LoadingTableElement",componentId:"sc-a2f657bb-10"})`
  width: 50px;
`,V=p.default.div.withConfig({displayName:"CarouselCard__TableElement",componentId:"sc-a2f657bb-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,L=p.default.div.withConfig({displayName:"CarouselCard__FirstColumnTextWrapper",componentId:"sc-a2f657bb-12"})``,M=p.default.div.withConfig({displayName:"CarouselCard__CardBottomContainer",componentId:"sc-a2f657bb-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,R=p.default.img.withConfig({displayName:"CarouselCard__MarketplaceIcon",componentId:"sc-a2f657bb-14"})`
  width: 20px;
  height: 20px;
`,G=p.default.div.withConfig({displayName:"CarouselCard__CarouselCardContainer",componentId:"sc-a2f657bb-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${V}:nth-child(3n-1), ${O}:nth-child(3n-1) {
    justify-self: center;
  }

  ${V}:nth-child(3n), ${O}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${L} {
      display: none;
    }
    ${V} {
      justify-self: left !important;
    }
    ${z} {
      padding: 0 20px;
    }
  }
`,A=({marketplace:e,floorInEth:n,listings:i})=>{const{formatNumberOrString:t}=(0,$.Gb)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(V,{children:[(0,a.jsx)(R,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,a.jsx)(L,{children:(0,a.jsx)(N.T.BodySmall,{color:"neutral2",children:e})})]}),(0,a.jsx)(V,{children:(0,a.jsx)(N.T.BodySmall,{color:"neutral2",children:Number(n)>0?`${t({input:n,type:$.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,a.jsx)(V,{children:(0,a.jsx)(N.T.BodySmall,{color:"neutral2",children:Number(i)>0?i:"None"})})]})},W=[k.Fz.Opensea,k.Fz.X2Y2,k.Fz.LooksRare],Y={[k.Fz.Opensea]:"OpenSea",[k.Fz.X2Y2]:"X2Y2",[k.Fz.LooksRare]:"LooksRare"},U=({collection:e,onClick:n})=>{var i;const{data:t,loading:o}=(0,T.K)(e.address??""),{formatNumber:r}=(0,$.Gb)();return o?(0,a.jsx)(J,{}):(0,a.jsx)(I,{children:(0,a.jsxs)(G,{onClick:n,children:[(0,a.jsx)(q,{collection:e}),(0,a.jsx)(M,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(V,{children:[(0,a.jsx)(m.pD,{width:"20",height:"20"}),(0,a.jsx)(L,{children:(0,a.jsx)(N.T.SubHeaderSmall,{color:"userThemeColor",children:"Nexis"})})]}),(0,a.jsx)(V,{children:e.floor&&(0,a.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[r({input:e.floor,type:$.sw.NFTToken})," ETH Floor"]})}),(0,a.jsx)(V,{children:(0,a.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[null===(i=t.marketplaceCount)||void 0===i?void 0:i.reduce(((e,n)=>e+n.count),0)," Listings"]})}),W.map((n=>{var i;const o=null===(i=t.marketplaceCount)||void 0===i?void 0:i.find((e=>e.marketplace===n));return o?(0,a.jsx)(A,{marketplace:Y[n],listings:o.count,floorInEth:o.floorPrice},`CarouselCard-key-${e.address}-${o.marketplace}`):null}))]})})]})})},K=()=>(0,a.jsx)(a.Fragment,{children:[...Array(12)].map((e=>(0,a.jsx)(O,{},e)))}),Z=(0,p.default)(N.T.MediumHeader).withConfig({displayName:"CarouselCard__CollectionName",componentId:"sc-a2f657bb-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,q=({collection:e})=>(0,a.jsxs)(S,{src:e.bannerImageUrl??"",children:[(0,a.jsxs)(z,{children:[(0,a.jsx)(D,{src:e.imageUrl}),(0,a.jsxs)(E,{children:[(0,a.jsx)(Z,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,a.jsx)(F,{children:(0,a.jsx)(m.SA,{width:"24px",height:"24px"})})]})]}),(0,a.jsx)(B,{})]}),J=({collection:e})=>(0,a.jsx)(I,{children:(0,a.jsxs)(G,{children:[e?(0,a.jsx)(q,{collection:e}):(0,a.jsxs)(H,{children:[(0,a.jsxs)(z,{children:[(0,a.jsx)(X,{}),(0,a.jsx)(P,{})]}),(0,a.jsx)(B,{})]}),(0,a.jsx)(M,{children:(0,a.jsx)(K,{})})]})}),Q=p.default.div.withConfig({displayName:"Banner__BannerContainer",componentId:"sc-37b670da-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,ee=p.default.div.withConfig({displayName:"Banner__BannerMainArea",componentId:"sc-37b670da-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,ne=p.default.div.withConfig({displayName:"Banner__HeaderContainer",componentId:"sc-37b670da-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,ie=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],ae=()=>{const e=(0,c.s0)(),{data:n}=(0,l.S)(5+ie.length,r._uu.Day),i=(0,s.useMemo)((()=>{var e;return null===(e=n)||void 0===e?void 0:e.filter((e=>e.address&&!ie.includes(e.address))).slice(0,5)}),[n]),[t,o]=(0,s.useState)(0),p=(0,s.useCallback)((e=>{i&&o((n=>(0,d.ef)(n+e,i.length)))}),[i]);return(0,a.jsx)(Q,{children:(0,a.jsxs)(ee,{children:[(0,a.jsxs)(ne,{children:["Better prices. ",(0,a.jsx)("br",{}),"More listings."]}),i?(0,a.jsx)(y,{activeIndex:t,toggleNextSlide:p,children:i.map((n=>(0,a.jsx)(U,{collection:n,onClick:()=>e(`/nfts/collection/${n.address}`)},n.address)))}):(0,a.jsx)(v,{children:(0,a.jsx)(J,{})})]})})};var te=i(68588),oe=i(33426),re=i(54972),le=i(66284),de=i(19478);i(35976),i(49484);const se=p.default.div.withConfig({displayName:"Cells__TruncatedText",componentId:"sc-6ddadcc7-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ce=(0,p.default)(se).withConfig({displayName:"Cells__CollectionNameContainer",componentId:"sc-6ddadcc7-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,pe=(0,p.default)(se).withConfig({displayName:"Cells__CollectionName",componentId:"sc-6ddadcc7-2"})`
  margin-left: 8px;
`,me=(0,p.default)(re.Tv.SubHeader).withConfig({displayName:"Cells__TruncatedSubHeader",componentId:"sc-6ddadcc7-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,he=(0,p.default)(re.Tv.SubHeaderSmall).withConfig({displayName:"Cells__TruncatedSubHeaderSmall",componentId:"sc-6ddadcc7-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ue=p.default.div.withConfig({displayName:"Cells__RoundedImage",componentId:"sc-6ddadcc7-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:n})=>e?`url(${e})`:n.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,xe=p.default.div.withConfig({displayName:"Cells__ChangeCellContainer",componentId:"sc-6ddadcc7-6"})`
  display: flex;
  color: ${({theme:e,change:n})=>n>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ge=p.default.div.withConfig({displayName:"Cells__EthContainer",componentId:"sc-6ddadcc7-7"})`
  display: flex;
  justify-content: flex-end;
`,fe=({value:e})=>{const n=(0,oe.dD)();return(0,a.jsxs)(ce,{children:[(0,a.jsx)(ue,{src:e.logo}),(0,a.jsx)(pe,{children:n?(0,a.jsx)(he,{children:e.name}):(0,a.jsx)(me,{children:e.name})}),e.isVerified&&(0,a.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,a.jsx)(m.SA,{})})]})},be=({value:e})=>{const{formatNumberOrString:n}=(0,$.Gb)();return(0,a.jsx)("span",{children:e.value?n({input:e.value,type:$.sw.NFTCollectionStats}):"-"})},Ce=(e,n,i,a)=>e===k.VG.ETH?i:a&&i?a*(n?parseFloat((0,le.formatEther)(i)):i):void 0,we=({value:e,denomination:n,usdPrice:i})=>{const{formatNumberOrString:t}=(0,$.Gb)(),o=Ce(n,!1,e,i),r=n===k.VG.ETH,l=t({input:o,type:r?$.sw.NFTToken:$.sw.FiatTokenStats})+(r?" ETH":""),d=(0,oe.dD)()?re.Tv.BodySmall:re.Tv.BodyPrimary;return(0,a.jsx)(ge,{children:(0,a.jsx)(d,{children:e?l:"-"})})},ye=({value:e})=>(0,a.jsx)(re.Tv.BodyPrimary,{children:e}),ve=({value:e,denomination:n,usdPrice:i})=>{const{formatNumberOrString:t}=(0,$.Gb)(),o=Ce(n,!1,e,i),r=n===k.VG.ETH,l=t({input:o,type:r?$.sw.WholeNumber:$.sw.FiatTokenStats})+(r?" ETH":"");return(0,a.jsx)(ge,{children:(0,a.jsx)(re.Tv.BodyPrimary,{children:l})})},je=({change:e,children:n})=>{const i=(0,oe.dD)()?re.Tv.BodySmall:re.Tv.BodyPrimary;return(0,a.jsxs)(xe,{change:e??0,children:[(0,a.jsx)(de.Kx,{delta:e}),(0,a.jsx)(i,{color:"currentColor",children:n||`${e?Math.abs(Math.round(e)):0}%`})]})};var _e=i(88846),Te=i(98643),ke=i(91527),Ne=i(96795),$e=i(40403),Ie=i(27519),Se="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",He="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",ze="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",Fe="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805";const Ee=p.default.div.withConfig({displayName:"Table__RankCellContainer",componentId:"sc-31220bfb-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Pe=p.default.tr.withConfig({displayName:"Table__StyledRow",componentId:"sc-31220bfb-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Be=p.default.tr.withConfig({displayName:"Table__StyledLoadingRow",componentId:"sc-31220bfb-2"})`
  height: 80px;
`,De=p.default.th.withConfig({displayName:"Table__StyledHeader",componentId:"sc-31220bfb-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.click};`}
  }
`,Xe=p.default.div.withConfig({displayName:"Table__StyledLoadingHolder",componentId:"sc-31220bfb-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Oe=p.default.div.withConfig({displayName:"Table__StyledCollectionNameHolder",componentId:"sc-31220bfb-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Ve=(0,p.default)(_.X).withConfig({displayName:"Table__StyledImageHolder",componentId:"sc-31220bfb-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Le=(0,p.default)(_.X).withConfig({displayName:"Table__StyledRankHolder",componentId:"sc-31220bfb-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Me=10;function Re({columns:e,data:n,smallHiddenColumns:i,mediumHiddenColumns:r,largeHiddenColumns:l,...d}){const m=(0,p.useTheme)(),{chainId:h}=(0,_e.useWeb3React)(),{width:u}=(0,Ne.i)(),x=(0,oe.dD)(),{getTableProps:g,getTableBodyProps:f,headerGroups:b,rows:C,prepareRow:w,setHiddenColumns:y,visibleColumns:v}=(0,$e.useTable)({columns:e,data:n,initialState:{sortBy:[{desc:!0,id:Ae.Volume}]},...d},$e.useSortBy),j=(0,c.s0)();return(0,s.useEffect)((()=>{u&&(u<=m.breakpoint.sm?y(i):u<=m.breakpoint.md?y(r):u<=m.breakpoint.lg?y(l):y([]))}),[u,y,e,i,r,l,m.breakpoint]),0===n.length?(0,a.jsx)(Ge,{headerGroups:b,visibleColumns:v,...g()}):(0,a.jsxs)("table",{...g(),className:He,children:[(0,a.jsx)("thead",{className:Fe,children:b.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,s.createElement)(De,{className:ze,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?x?"16px":"52px":0},disabled:e.disableSortBy,key:n,children:[(0,a.jsx)(Ie.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(ke.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,a.jsx)(Te.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,a.jsx)(Ie.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...f(),children:C.map(((e,n)=>(w(e),(0,a.jsx)(o.M8,{events:[t.TM.onClick],name:t.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:h},element:t.xo.NFT_TRENDING_ROW,children:(0,s.createElement)(Pe,{...e.getRowProps(),key:e.id,onClick:()=>j(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,i)=>(0,s.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:i,style:{maxWidth:0===i?x?"240px":"360px":"160px"}},0===i?(0,a.jsxs)(Ee,{children:[!x&&(0,a.jsx)(re.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell")))))},n))))})]})}function Ge({headerGroups:e,visibleColumns:n,...i}){return(0,a.jsxs)("table",{...i,className:He,children:[(0,a.jsx)("thead",{className:Fe,children:e.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,s.createElement)(De,{className:ze,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n,children:[(0,a.jsx)(Ie.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(ke.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,a.jsx)(Te.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,a.jsx)(Ie.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...i,children:[...Array(Me)].map(((e,i)=>(0,a.jsx)(Be,{children:[...Array(n.length)].map(((e,n)=>(0,a.jsx)("td",{className:Se,children:0===n?(0,a.jsxs)(Oe,{children:[(0,a.jsx)(Le,{}),(0,a.jsx)(Ve,{}),(0,a.jsx)(_.X,{})]}):(0,a.jsx)(Xe,{children:(0,a.jsx)(_.X,{})})},n)))},i)))})]})}var Ae;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Ae||(Ae={}));const We=(e,n)=>e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1,Ye=({data:e,timePeriod:n})=>{const i=(0,s.useMemo)((()=>(e,n)=>We(e.original.floor.value,n.original.floor.value)),[]),t=(0,s.useMemo)((()=>(e,n)=>We(e.original.floor.change,n.original.floor.change)),[]),o=(0,s.useMemo)((()=>(e,n)=>We(e.original.volume.value,n.original.volume.value)),[]),r=(0,s.useMemo)((()=>(e,n)=>We(e.original.volume.change,n.original.volume.change)),[]),l=(0,s.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:fe,disableSortBy:!0},{id:Ae.Floor,Header:Ae.Floor,accessor:({floor:e})=>e.value,sortType:i,Cell:function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(we,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),n!==k.XH.AllTime&&(0,a.jsx)(re.SF,{children:(0,a.jsx)(je,{change:e.row.original.floor.change})})]})}},{id:Ae.FloorChange,Header:Ae.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:n===k.XH.AllTime,sortType:t,Cell:function(e){return n===k.XH.AllTime?(0,a.jsx)(ye,{value:"-"}):(0,a.jsx)(je,{change:e.row.original.floor.change})}},{id:Ae.Volume,Header:Ae.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:o,Cell:function(e){return(0,a.jsx)(ve,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Ae.VolumeChange,Header:Ae.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:n===k.XH.AllTime,sortType:r,Cell:function(e){const{change:i}=e.row.original.volume;return n===k.XH.AllTime?(0,a.jsx)(ye,{value:"-"}):i&&i>=9999?(0,a.jsxs)(je,{change:i,children:[">9999","%"]}):(0,a.jsx)(je,{change:i})}},{id:Ae.Items,Header:Ae.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(be,{value:{value:e.row.original.totalSupply}})}},{Header:Ae.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(be,{value:e.row.original.owners})}}]),[t,i,r,o,n]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Re,{smallHiddenColumns:[Ae.Items,Ae.FloorChange,Ae.Volume,Ae.VolumeChange,Ae.Owners],mediumHiddenColumns:[Ae.Items,Ae.FloorChange,Ae.VolumeChange,Ae.Owners],largeHiddenColumns:[Ae.Items,Ae.Owners],data:e,columns:l})})},Ue=[{label:"1D",value:k.XH.OneDay},{label:"1W",value:k.XH.SevenDays},{label:"1M",value:k.XH.ThirtyDays},{label:"All",value:k.XH.AllTime}],Ke=p.default.div.withConfig({displayName:"TrendingCollections__ExploreContainer",componentId:"sc-6500bef7-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ze=p.default.h1.withConfig({displayName:"TrendingCollections__StyledHeader",componentId:"sc-6500bef7-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,qe=p.default.div.withConfig({displayName:"TrendingCollections__FiltersRow",componentId:"sc-6500bef7-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Je=p.default.div.withConfig({displayName:"TrendingCollections__Filter",componentId:"sc-6500bef7-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,Qe=p.default.div.withConfig({displayName:"TrendingCollections__Selector",componentId:"sc-6500bef7-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:n})=>e?n.surface3:"none"};
  cursor: pointer;

  ${te.cR}
`,en=(0,p.default)(re.Tv.SubHeader).withConfig({displayName:"TrendingCollections__StyledSelectorText",componentId:"sc-6500bef7-5"})`
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
`;const nn=()=>{const{formatterLocalCurrency:e}=(0,$.h2)(),[n,i]=(0,s.useState)(k.XH.OneDay),[t,o]=(0,s.useState)(!0),{data:d,loading:c}=(0,l.S)(100,function(e){switch(e){case k.XH.OneDay:return r._uu.Day;case k.XH.SevenDays:return r._uu.Week;case k.XH.ThirtyDays:return r._uu.Month;case k.XH.AllTime:return r._uu.Max;default:return r._uu.Day}}(n)),p=(0,oe.$N)(),m=(0,s.useMemo)((()=>!c&&d?d.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:t?k.VG.ETH:k.VG.USD,usdPrice:p}))):[]),[d,c,t,p]);return(0,a.jsxs)(Ke,{children:[(0,a.jsx)(Ze,{children:"Trending NFT collections"}),(0,a.jsxs)(qe,{children:[(0,a.jsx)(Je,{children:Ue.map((e=>(0,a.jsx)(Qe,{active:e.value===n,onClick:()=>i(e.value),children:(0,a.jsx)(en,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)))}),(0,a.jsxs)(Je,{onClick:()=>o(!t),children:[(0,a.jsx)(Qe,{active:t,children:(0,a.jsx)(en,{lineHeight:"20px",active:t,children:"ETH"})}),(0,a.jsx)(Qe,{active:!t,children:(0,a.jsx)(en,{lineHeight:"20px",active:!t,children:e})})]})]}),(0,a.jsx)(Ye,{data:m,timePeriod:n})]})},an=p.default.div.withConfig({displayName:"explore__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,tn=()=>{const e=(0,oe.cP)((e=>e.setBagExpanded));return(0,s.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.fM,{page:t.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,a.jsxs)(an,{children:[(0,a.jsx)(ae,{}),(0,a.jsx)(nn,{})]})})})}}}]);
//# sourceMappingURL=8859.111a6b4a.chunk.js.map