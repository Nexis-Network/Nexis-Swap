"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1787],{17889:(e,t,n)=>{n.d(t,{q:()=>i,v:()=>v});var i,o=n(92936),d=n(45779),r=n(43454),a=n(61152),s=n(54972),l=n(27279),c=n(30520),u=n(1356);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(i||(i={}));const p=(0,a.default)(l.r).withConfig({displayName:"Menu__StyledMenuIcon",componentId:"sc-6640503f-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,x=a.default.div.withConfig({displayName:"Menu__StyledMenu",componentId:"sc-6640503f-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,m=a.default.span.withConfig({displayName:"Menu__MenuFlyout",componentId:"sc-6640503f-2"})`
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

  ${({flyoutAlignment:e=i.RIGHT})=>e===i.RIGHT?a.css`
          right: 0rem;
        `:a.css`
          left: 0rem;
        `};
`,h=(0,a.default)(s.dL).withConfig({displayName:"Menu__MenuItem",componentId:"sc-6640503f-3"})`
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
`,f=(0,a.default)(r.rU).withConfig({displayName:"Menu__InternalMenuItem",componentId:"sc-6640503f-4"})`
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
`,g=(0,a.default)(h).withConfig({displayName:"Menu__ExternalMenuItem",componentId:"sc-6640503f-5"})`
  width: max-content;
  text-decoration: none;
`,v=({modal:e,flyoutAlignment:t=i.RIGHT,ToggleUI:n,menuItems:r,...a})=>{const s=(0,d.useRef)(),l=(0,u.Wt)(e),h=(0,u.xk)(e);(0,c.t)(s,l?h:void 0);const v=n||p;return(0,o.jsxs)(x,{ref:s,...a,children:[(0,o.jsx)(v,{onClick:h}),l&&(0,o.jsx)(m,{flyoutAlignment:t,onClick:h,children:r.map((({content:e,link:t,external:n},i)=>n?(0,o.jsx)(g,{href:t,children:e},i):(0,o.jsx)(f,{to:t,children:e},i)))})]})}},75512:(e,t,n)=>{n.d(t,{p:()=>w});var i=n(92936),o=n(31017),d=n(87254),r=n(69780);const a=e=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z",fill:e.fill||"currentColor"})});var s=n(17889),l=n(87685),c=n(86082),u=n(1356),p=n(29021),x=n(61152),m=n(54972);const h=x.default.div.withConfig({displayName:"shared__PoolVersionItem",componentId:"sc-a7c87620-0"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`,f=(0,x.default)(r.Ux).withConfig({displayName:"shared__PoolOptionsButton",componentId:"sc-a7c87620-1"})`
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
`,v={[l.Qeo.V3]:{content:(0,i.jsxs)(h,{children:[(0,i.jsx)(a,{width:"20px",height:"20px"}),(0,i.jsx)(m.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(o.cC,{id:"Lp6Z70"})})]}),link:"/pool",external:!1},[l.Qeo.V2]:{content:(0,i.jsxs)(h,{children:[(0,i.jsx)(a,{width:"20px",height:"20px"}),(0,i.jsx)(m.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(o.cC,{id:"iadVG2"})})]}),link:"/pools/v2",external:!1}},j={[l.Qeo.V3]:d.ag._({id:"YXMjkc"}),[l.Qeo.V2]:d.ag._({id:"SuKIHc"})};function w({protocolVersion:e}){const t=(0,u.Wt)(p.Lk.POOL_VERSION);return(0,i.jsx)(s.v,{modal:p.Lk.POOL_VERSION,menuItems:[v[e===l.Qeo.V3?l.Qeo.V2:l.Qeo.V3]],flyoutAlignment:s.q.LEFT,ToggleUI:n=>(0,i.jsxs)(f,{...n,$isOpen:t,children:[(0,i.jsx)(m.Tv.BodyPrimary,{color:"neutral2",children:j[e]}),(0,i.jsx)(g,{$isOpen:t})]})})}},91787:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var i=n(92936),o=n(31017),d=n(5985),r=n(88846),a=n(47583),s=n(26073),l=n(81069),c=n(61592),u=n.n(c),p=n(45779),x=n(74928),m=n(43454),h=n(22953),f=n(61152),g=n(54972),v=n(87685),j=n(75512),w=n(69780),y=n(61182),C=n(44591),k=n(52223),A=n(94284),_=n(10672),I=n(82731),T=n(56536),b=n(13820),R=n(41047),M=n(73720),B=n(51371),N=n(4570),$=n(76078),E=n(12972),V=n(8545),L=n(84938),P=n(64370),H=n(27614);const S=new B.vU(N.Mt),F={1:[{tokens:[P.Fl[$.ChainId.MAINNET],P.h1],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[P.Fl[$.ChainId.MAINNET],P.Hz],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[P.Fl[$.ChainId.MAINNET],P.AA],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[P.Fl[$.ChainId.MAINNET],P.ML],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var O=n(28098);const W=(0,f.default)(C.Tz).withConfig({displayName:"v2__PageWrapper",componentId:"sc-820f235a-0"})`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,q=(0,f.default)(I.I8).withConfig({displayName:"v2__LPFeeExplainer",componentId:"sc-820f235a-1"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,D=(0,f.default)(A.DA).withConfig({displayName:"v2__ButtonRow",componentId:"sc-820f235a-2"})`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,z=(0,f.default)(w.DF).withConfig({displayName:"v2__ResponsiveButtonPrimary",componentId:"sc-820f235a-3"})`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,U=(0,f.default)(w.PL).withConfig({displayName:"v2__ResponsiveButtonSecondary",componentId:"sc-820f235a-4"})`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,Z=f.default.div.withConfig({displayName:"v2__EmptyProposals",componentId:"sc-820f235a-5"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Q=(0,f.default)(g.Tv.H1Small).withConfig({displayName:"v2__Header",componentId:"sc-820f235a-6"})`
  margin-top: 8px;
  justify-self: flex-start;
  font-weight: 535;
`;function G(){var e,t,n,c,B,N;const G=(0,f.useTheme)(),{account:Y}=(0,r.useWeb3React)(),J=(0,l.G)();let K=(0,O.B3)();J||(K=[]);const X=(0,p.useMemo)((()=>K.map((e=>({liquidityToken:(0,O.Ce)(e),tokens:e})))),[K]),ee=(0,p.useMemo)((()=>X.map((e=>e.liquidityToken))),[X]),[te,ne]=(0,M.v2)(Y??void 0,ee),ie=(0,p.useMemo)((()=>X.filter((({liquidityToken:e})=>{var t;return null===(t=te[e.address])||void 0===t?void 0:t.greaterThan("0")}))),[X,te]),oe=(0,R.OY)(ie.map((({tokens:e})=>e))),de=ne||(null===(e=oe)||void 0===e?void 0:e.length)<ie.length||(null===(t=oe)||void 0===t?void 0:t.some((e=>!e))),re=oe.map((([,e])=>e)).filter((e=>Boolean(e))),ae=function(e){const{chainId:t,account:n}=(0,r.useWeb3React)(),i=(0,V.Z)(L.DB),o=(0,p.useMemo)((()=>{var n;return t?(null===(n=F[t])||void 0===n?void 0:n.filter((t=>void 0===e||null!==e&&e.involvesToken(t.tokens[0])&&e.involvesToken(t.tokens[1]))))??[]:[]}),[t,e]),d=t?P.yg[t]:void 0,a=(0,p.useMemo)((()=>o.map((({stakingRewardAddress:e})=>e))),[o]),s=(0,p.useMemo)((()=>[n??void 0]),[n]),l=(0,L._Y)(a,S,"balanceOf",s),c=(0,L._Y)(a,S,"earned",s),x=(0,L._Y)(a,S,"totalSupply"),m=(0,L._Y)(a,S,"rewardRate",void 0,L.DB),h=(0,L._Y)(a,S,"periodFinish",void 0,L.DB),{chainId:f}=(0,r.useWeb3React)();return(0,p.useMemo)((()=>t&&d?a.reduce(((e,t,n)=>{var r,a;const s=l[n],p=c[n],g=x[n],v=m[n],j=h[n];if(!(null===(r=s)||void 0===r?void 0:r.loading)&&!(null===(a=p)||void 0===a?void 0:a.loading)&&g&&!g.loading&&v&&!v.loading&&j&&!j.loading){var w,y,C,k,A,_,I,T,b,R;if((null===(w=s)||void 0===w?void 0:w.error)||(null===(y=p)||void 0===y?void 0:y.error)||g.error||v.error||j.error)return console.error("Failed to load staking rewards info"),e;const r=o[n].tokens,a=2371==f||7001==f?new H.uc($.CurrencyAmount.fromRawAmount(r[0],"0"),$.CurrencyAmount.fromRawAmount(r[1],"0")):new E.Pair($.CurrencyAmount.fromRawAmount(r[0],"0"),$.CurrencyAmount.fromRawAmount(r[1],"0")),l=$.CurrencyAmount.fromRawAmount(a.liquidityToken,u().BigInt((null===(k=s)||void 0===k||null===(C=k.result)||void 0===C?void 0:C[0])??0)),c=$.CurrencyAmount.fromRawAmount(a.liquidityToken,u().BigInt(null===(A=g.result)||void 0===A?void 0:A[0])),x=$.CurrencyAmount.fromRawAmount(d,u().BigInt(null===(_=v.result)||void 0===_?void 0:_[0])),m=(e,t,n)=>$.CurrencyAmount.fromRawAmount(d,u().greaterThan(t.quotient,u().BigInt(0))?u().divide(u().multiply(n.quotient,e.quotient),t.quotient):u().BigInt(0)),h=m(l,c,x),M=null===(T=j.result)||void 0===T||null===(I=T[0])||void 0===I?void 0:I.toNumber(),B=1e3*M,N=!M||!i||M>i.toNumber();e.push({stakingRewardAddress:t,tokens:o[n].tokens,periodFinish:B>0?new Date(B):void 0,earnedAmount:$.CurrencyAmount.fromRawAmount(d,u().BigInt((null===(R=p)||void 0===R||null===(b=R.result)||void 0===b?void 0:b[0])??0)),rewardRate:h,totalRewardRate:x,stakedAmount:l,totalStakedAmount:c,getHypotheticalRewardRate:m,active:N})}return e}),[]):[]),[l,t,i,c,o,h,m,a,x,d])}(),se=null===(n=ae)||void 0===n?void 0:n.filter((e=>u().greaterThan(e.stakedAmount.quotient,b.iV))),le=(0,R.OY)(null===(c=se)||void 0===c?void 0:c.map((e=>e.tokens))),ce=re.filter((e=>{var t;return 0===(null===(t=le)||void 0===t?void 0:t.map((e=>e[1])).filter((t=>{var n;return(null===(n=t)||void 0===n?void 0:n.liquidityToken.address)===e.liquidityToken.address})).length)}));return(0,i.jsx)(a.fM,{page:d.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(W,{children:[(0,i.jsxs)(q,{children:[(0,i.jsx)(I.sq,{}),(0,i.jsx)(I.RF,{}),(0,i.jsx)(I.uO,{children:(0,i.jsxs)(C.Tz,{gap:"md",children:[(0,i.jsx)(A.m0,{children:(0,i.jsx)(g.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"Vsr1yC"})})}),(0,i.jsx)(A.m0,{children:(0,i.jsx)(g.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(o.cC,{id:"ERgQKj"})})}),(0,i.jsx)(g.dL,{style:{color:G.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,i.jsx)(g.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(o.cC,{id:"uVgYyA"})})})]})}),(0,i.jsx)(I.sq,{}),(0,i.jsx)(I.RF,{})]}),J?(0,i.jsx)(C.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(C.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(A.ZP,{gap:"md",justify:"space-between",style:{marginTop:"1rem"},padding:"0",children:[(0,i.jsxs)(A.ZP,{gap:"md",width:"content",children:[(0,i.jsx)(g.Pw,{children:(0,i.jsx)(Q,{children:(0,i.jsx)(o.cC,{id:"MbHgIE"})})}),(0,i.jsx)(j.p,{protocolVersion:v.Qeo.V2})]}),(0,i.jsxs)(D,{children:[(0,i.jsx)(U,{as:m.rU,padding:"6px 8px",to:"/add/v2/ETH",children:(0,i.jsx)(o.cC,{id:"ma87bD"})}),(0,i.jsx)(z,{id:"find-pool-button",as:m.rU,to:"/pools/v2/find",padding:"6px 8px",children:(0,i.jsx)(h.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(o.cC,{id:"SkceS7"})})}),(0,i.jsx)(z,{id:"join-pool-button",as:m.rU,to:"/add/v2/ETH",padding:"6px 8px",children:(0,i.jsx)(h.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(o.cC,{id:"knGjuL"})})})]})]}),Y?de?(0,i.jsx)(Z,{children:(0,i.jsx)(g.Tv.DeprecatedBody,{color:G.neutral3,textAlign:"center",children:(0,i.jsx)(T.bb,{children:(0,i.jsx)(o.cC,{id:"yQE2r9"})})})}):(null===(B=re)||void 0===B?void 0:B.length)>0||(null===(N=le)||void 0===N?void 0:N.length)>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w.PL,{children:(0,i.jsx)(A.m0,{children:(0,i.jsx)(o.cC,{id:"vAuUUB",components:{0:(0,i.jsx)(g.dL,{href:"https://v2.info.uniswap.org/account/"+Y}),1:(0,i.jsx)("span",{})}})})}),ce.map((e=>(0,i.jsx)(k.ZP,{pair:e},e.liquidityToken.address))),le.map(((e,t)=>e[1]&&(0,i.jsx)(k.ZP,{pair:e[1],stakedBalance:se[t].stakedAmount},se[t].stakingRewardAddress))),(0,i.jsx)(A.DA,{justify:"center",style:{width:"100%"},children:(0,i.jsxs)(w.JU,{as:m.rU,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,i.jsx)(x.Z,{size:16,style:{marginRight:"8px"}}),(0,i.jsx)(o.cC,{id:"kBAezW"})]})})]}):(0,i.jsx)(Z,{children:(0,i.jsx)(g.Tv.DeprecatedBody,{color:G.neutral3,textAlign:"center",children:(0,i.jsx)(o.cC,{id:"erwMRf"})})}):(0,i.jsx)(y.ZP,{padding:"40px",children:(0,i.jsx)(g.Tv.DeprecatedBody,{color:G.neutral3,textAlign:"center",children:(0,i.jsx)(o.cC,{id:"jWRT4F"})})})]})}):(0,i.jsx)(s.A,{})]}),(0,i.jsx)(_.c,{})]})})}}}]);
//# sourceMappingURL=1787.21f818d4.chunk.js.map