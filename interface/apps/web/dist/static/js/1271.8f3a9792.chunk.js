"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1271,5118],{16709:(e,t,n)=>{n.d(t,{Z:()=>i});n(45779);const i=n.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},32305:(e,t,n)=>{n.d(t,{Z:()=>v});var i=n(92936),a=n(31017),o=n(87254),s=n(88846),r=n(45779),d=n(61152),l=n(54972),c=n(55874),p=n(27296),u=n(54703),m=n(44591),h=n(94284);const f=d.default.div.withConfig({displayName:"AddressInputPanel__InputPanel",componentId:"sc-200b50a1-0"})`
  ${c.lt};
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({theme:e})=>e.surface1};
  z-index: 1;
  width: 100%;
`,g=d.default.div.withConfig({displayName:"AddressInputPanel__ContainerRow",componentId:"sc-200b50a1-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({error:e,theme:t})=>e?t.critical:t.surface3};
  transition: border-color 300ms ${({error:e})=>e?"step-end":"step-start"},
    color 500ms ${({error:e})=>e?"step-end":"step-start"};
  background-color: ${({theme:e})=>e.surface1};
`,x=d.default.div.withConfig({displayName:"AddressInputPanel__InputContainer",componentId:"sc-200b50a1-2"})`
  flex: 1;
  padding: 1rem;
`,y=d.default.input.withConfig({displayName:"AddressInputPanel__Input",componentId:"sc-200b50a1-3"})`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`;function v({id:e,className:t="recipient-address-input",label:n,placeholder:c,value:v,onChange:b}){const{chainId:j}=(0,s.useWeb3React)(),C=(0,d.useTheme)(),{address:w,loading:T,name:I}=(0,p.Z)(v),N=(0,r.useCallback)((e=>{const t=e.target.value.replace(/\s+/g,"");b(t)}),[b]),E=Boolean(v.length>0&&!T&&!w);return(0,i.jsx)(f,{id:e,children:(0,i.jsx)(g,{error:E,children:(0,i.jsx)(x,{children:(0,i.jsxs)(m.Tz,{gap:"md",children:[(0,i.jsxs)(h.m0,{children:[(0,i.jsx)(l.Tv.DeprecatedBlack,{color:C.neutral2,fontWeight:535,fontSize:14,children:n??(0,i.jsx)(a.cC,{id:"I3QpvQ"})}),w&&j&&(0,i.jsx)(l.dL,{href:(0,u.E)(j,I??w,u.r.ADDRESS),style:{fontSize:"14px"},children:(0,i.jsx)(a.cC,{id:"4MNk2N"})})]}),(0,i.jsx)(y,{className:t,type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:c??o.ag._({id:"pqGiVy"}),error:E,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:N,value:v})]})})})})}},74293:(e,t,n)=>{n.d(t,{Z:()=>U});var i=n(92936),a=n(31017),o=n(5985),s=n(88846),r=n(47583),d=n(32546),l=n(7789),c=n(57852),p=n(36399),u=n(45779),m=n(61152),h=n(66869),f=n(54972),g=n(55874),x=n(66136),y=n(96326),v=n(73720),b=n(69780),j=n(47841),C=n(5967),w=n(17706),T=n(94284),I=n(68999),N=n(19996);const E=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-8b042b4f-0"})`
  ${g.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:t})=>t?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,_=m.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-8b042b4f-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:t,disabled:n})=>!n&&`\n    :focus,\n    :hover {\n      border: 1px solid ${t?" transparent":e.surface2};\n    }\n  `}
`,D=(0,m.default)(b.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-8b042b4f-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:t})=>e?t.surface1:t.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:t})=>e?t.surface2:(0,p._j)(.05,t.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,S=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-8b042b4f-3"})`
  ${g.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,k=m.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-8b042b4f-4"})`
  ${g.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,p._j)(.2,e.neutral2)};
  }
`,A=(0,m.default)(k).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-8b042b4f-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,P=m.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-8b042b4f-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,M=(0,m.default)(y.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-8b042b4f-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
    stroke-width: 1.5px;
  }
`,R=m.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-8b042b4f-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${h.j$.sm}px) {
    font-size: 16px;
  }
`,$=m.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-8b042b4f-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,W=(0,m.default)(w.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-8b042b4f-10"})`
  ${d._Q};
  text-align: left;
`,O=(0,m.default)(l.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-8b042b4f-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function U({value:e,onUserInput:t,onMax:n,showMaxButton:l,onCurrencySelect:p,currency:h,otherCurrency:g,id:y,currencySearchFilters:b,showCurrencyAmount:w,renderBalance:k,fiatValue:U,hideBalance:z=!1,pair:L=null,hideInput:V=!1,locked:B=!1,loading:F=!1,...G}){var H,Z,q,Y,Q;const[K,X]=(0,u.useState)(!1),{account:J,chainId:ee}=(0,s.useWeb3React)(),te=(0,v._h)(J??void 0,h??void 0),ne=(0,m.useTheme)(),{formatCurrencyAmount:ie}=(0,x.Gb)(),ae=(0,u.useCallback)((()=>{X(!1)}),[X]),oe=(0,c.EC)(ee);return(0,i.jsxs)(E,{id:y,hideInput:V,...G,children:[!B&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(_,{hideInput:V,disabled:!oe,children:[(0,i.jsxs)(S,{style:V?{padding:"0",borderRadius:"8px"}:{},selected:!p,children:[!V&&(0,i.jsx)(W,{className:"token-amount-input",value:e,onUserInput:t,disabled:!oe,$loading:F,maxDecimals:null===(H=h)||void 0===H?void 0:H.decimals}),(0,i.jsx)(O,{shouldFetchOnAccountUpdate:K,$fullWidth:V,children:(0,i.jsx)(D,{disabled:!oe,visible:void 0!==h,selected:!!h,hideInput:V,className:"open-currency-select-button",onClick:()=>{p&&X(!0)},pointerEvents:p?void 0:"none",children:(0,i.jsxs)(P,{children:[(0,i.jsxs)(T.DA,{children:[L?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(j.Z,{currency0:L.token0,currency1:L.token1,size:24,margin:!0})}):h&&(0,i.jsx)(C.Z,{style:{marginRight:"0.5rem"},currency:h,size:"24px"}),L?(0,i.jsxs)(R,{className:"pair-name-container",children:[null===(Z=L)||void 0===Z?void 0:Z.token0.symbol,":",null===(q=L)||void 0===q?void 0:q.token1.symbol]}):(0,i.jsx)(R,{className:"token-symbol-container",active:Boolean(h&&h.symbol),children:(h&&h.symbol&&h.symbol.length>20?h.symbol.slice(0,4)+"..."+h.symbol.slice(h.symbol.length-5,h.symbol.length):null===(Y=h)||void 0===Y?void 0:Y.symbol)||(0,i.jsx)(a.cC,{id:"T0Y2+3"})})]}),p&&(0,i.jsx)(M,{selected:!!h})]})})})]}),Boolean(!V&&!z&&h)&&(0,i.jsx)(A,{children:(0,i.jsxs)(T.m0,{children:[(0,i.jsx)(d.EG,{$loading:F,children:U&&(0,i.jsx)(N.x,{fiatValue:U})}),J&&(0,i.jsxs)(T.DA,{style:{height:"17px"},children:[(0,i.jsx)(f.Tv.DeprecatedBody,{onClick:n,color:ne.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!z&&h&&te)&&((null===(Q=k)||void 0===Q?void 0:Q(te))||(0,i.jsx)(a.cC,{id:"VuFd5C",values:{0:ie({amount:te,type:x.sw.TokenNonTx})}}))}),Boolean(l&&te)&&(0,i.jsx)(r.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)($,{onClick:n,children:(0,i.jsx)(a.cC,{id:"4HtGBb"})})})]})]})})]})}),p&&(0,i.jsx)(I.Z,{isOpen:K,onDismiss:ae,onCurrencySelect:p,selectedCurrency:h,otherSelectedCurrency:g,showCurrencyAmount:w,currencySearchFilters:b})]})}},94961:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(92936),a=n(76078),o=n(61592),s=n.n(o);const r=new a.Fraction(s().BigInt(1),s().BigInt(1e6));function d({currencyAmount:e,significantDigits:t=4}){return(0,i.jsx)(i.Fragment,{children:e.equalTo(s().BigInt(0))?"0":e.greaterThan(r)?e.toSignificant(t):`<${r.toSignificant(1)}`})}},82731:(e,t,n)=>{n.d(t,{SS:()=>m,sq:()=>l,MN:()=>c,RF:()=>p,uO:()=>u,I8:()=>d});var i=n(61152);const a=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",s=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var r=n(44591);const d=(0,i.default)(r.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${a});
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
`,c=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${s});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,p=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
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
`,u=(0,i.default)(r.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,m=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},27296:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(45779),a=n(13446),o=n(36145),s=n(27179);function r(e){const t=(0,a.UJ)(e),n=(0,s.Z)(t||void 0),r=(0,o.Z)(e);return(0,i.useMemo)((()=>({loading:n.loading||r.loading,address:t||r.address,name:n.ENSName?n.ENSName:!t&&r.address&&e||null})),[r.address,r.loading,e,n.ENSName,n.loading,t])}},65118:(e,t,n)=>{n.d(t,{Z:()=>r,e:()=>s});var i=n(92936),a=n(61152),o=n(62587);const s=a.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function r(e){return(0,i.jsx)(s,{...e})}},40926:(e,t,n)=>{n.d(t,{DC:()=>r,ER:()=>d,bb:()=>l,im:()=>s,pr:()=>c});var i=n(32546),a=n(22953),o=n(61152);const s=o.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,r=(0,o.default)(a.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=o.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,l=o.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,c=(0,o.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},45727:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Dn});var i=n(92936),a=n(31042),o=n(16851),s=n(31017),r=n(5985),d=n(88846),l=n(47583),c=n(69780),p=n(61182),u=n(44591),m=n(61592),h=n.n(m),f=n(89882),g=n(40926),x=n(45779),y=n(21926),v=n(43454),b=n(51371),j=n(29400),C=n(87254),w=n(37240),T=n(71383),I=n(76078);const N={[I.ChainId.MAINNET]:{[I.UNI_ADDRESSES[I.ChainId.MAINNET]]:"UNI",[I.TIMELOCK_ADDRESSES[I.ChainId.MAINNET]]:"Timelock",[I.GOVERNANCE_ALPHA_V0_ADDRESSES[I.ChainId.MAINNET]]:"Governance (V0)",[I.GOVERNANCE_ALPHA_V1_ADDRESSES[I.ChainId.MAINNET]]:"Governance (V1)",[I.GOVERNANCE_BRAVO_ADDRESSES[I.ChainId.MAINNET]]:"Governance","0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e":"ENS Registry","0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41":"ENS Public Resolver","0xf754A7E347F81cFdc70AF9FbCCe9Df3D826360FA":"Franchiser Factory"}},E=12,_={1:E},D=2,S="Should Nexis v3 be deployed to Polygon?",k="# Nexis Grants Program v0.1\n\n*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*\n\n## Summary:\n\n**This post outlines a framework for funding Nexis ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small\u2014sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)\u2014but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members \u20141 lead and 5 reviewers\u2014to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal\u2014a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.\n\n**Purpose:**\n\n**The mission of the UGP is to provide valuable resources to help grow the Nexis ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Nexis. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Nexis as a nexus for DeFi on Ethereum.\n\n**Quarterly Budget:**\n\n* Max quarterly budget of up to $750k\n* Budget and caps to be assessed every six months\n\n**Grant Allocation Committee:**\n\n* Of 6 committee members: 1 lead and 5 reviewers\n* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance\n* Committee functions as a 4 of 5 multi-sig\n\n**Committee Members**\n\nWhile the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**\n\nStarting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.\n\n**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.\n\n**The other 5 committee members should be thought of as \u201creviewers\u201d \u2014 UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.\n\n**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)\n*Ecosystem Support Program at the Ethereum Foundation*\n\n1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))\n*Founder and Investor at Variant Fund (holds UNI)*\n\n2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)\n*Risk Analyst at MakerDAO*\n\n3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)\n*Founder and CEO of Compound Finance*\n\n4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)\n*Founder of Synthetix*\n\n5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)\n*Growth Lead, Nexis (Company)*\n\n## Methodology\n\n**1.1 Budget**\n\nThis proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).\n\nThe UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Nexis team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).\n\nTaking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1\u2019s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.\n\n**1.2 Committee Compensation**\n\nOperating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.\n\n**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee\u2019s commitment to the community, hours and duties will be logged publicly and transparently .\n\n**2.1 Priorities**\n\nInitially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Nexis developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.\n\n![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)\n\nWith the initial priorities in mind, some effective measures for quick successes might look like:\n\n* Total number of projects funded\n* Quarterly increase in applications\n* Project engagement post-event/funding\n* Overall community engagement/sentiment\n\n**2.2 Timeline**\n\nIn keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.\n\n**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**\n\n**Rolling Wave 1 & 2 Applications**\n\n* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding\n\n* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective\n\n**Wave 3 & Beyond**\n\n* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.\n\n* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements\n\n## Conclusion:\n\n**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.\n\n**This program is meant to be the simplest possible MVP of a Nexis Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**\n\nIf this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital\u2014ideally with different specializations.\n";var A=n(7151),P=n(84938);const M=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldProposalThreshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"ProposalThresholdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"support","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"VoteCast","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingDelay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"VotingDelaySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"VotingPeriodSet","type":"event"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalCount","type":"uint256"}],"name":"_initiate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"_setProposalThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"_setVotingDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"_setVotingPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"string","name":"reason","type":"string"}],"name":"castVoteWithReason","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorBravoDelegateStorageV1.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialProposalId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"uni_","type":"address"},{"internalType":"uint256","name":"votingPeriod_","type":"uint256"},{"internalType":"uint256","name":"votingDelay_","type":"uint256"},{"internalType":"uint256","name":"proposalThreshold_","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"uint256","name":"abstainVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorBravoDelegateStorageV1.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"uni","outputs":[{"internalType":"contract UniInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');var R=n(64510);const $=11473815,W=13059344,O=13551293,U=13786993,z=14732457;var L,V=n(64370),B=n(70152),F=n(47856),G=n(27414),H=n(95591);!function(e){e[e.INVALID=0]="INVALID",e[e.LOADING=1]="LOADING",e[e.SYNCING=2]="SYNCING",e[e.ERROR=3]="ERROR",e[e.SYNCED=4]="SYNCED"}(L||(L={}));var Z=n(99454),q=n(47186),Y=n(53286);function Q(){return(0,A.cq)(I.GOVERNANCE_BRAVO_ADDRESSES,M,!0)}const K=Q;function X(){const{chainId:e}=(0,d.useWeb3React)(),t=(0,x.useMemo)((()=>{var t;return e?null===(t=V.yg[e])||void 0===t?void 0:t.address:void 0}),[e]);return(0,A.cq)(t,T.Mt,!0)}var J;!function(e){e[e.UNDETERMINED=-1]="UNDETERMINED",e[e.PENDING=0]="PENDING",e[e.ACTIVE=1]="ACTIVE",e[e.CANCELED=2]="CANCELED",e[e.DEFEATED=3]="DEFEATED",e[e.SUCCEEDED=4]="SUCCEEDED",e[e.QUEUED=5]="QUEUED",e[e.EXPIRED=6]="EXPIRED",e[e.EXECUTED=7]="EXECUTED"}(J||(J={}));const ee=new b.vU(w.Mt);function te(e){var t,n;const{result:i}=(0,P.Wk)(e,"proposalCount");return null===(n=i)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.toNumber()}const ne={"0x5ef2c7f0":"setSubnodeRecord(bytes32,bytes32,address,address,uint64)","0x10f13a8c":"setText(bytes32,string,string)","0xb4720477":"sendMessageToChild(address,bytes)","0xa9059cbb":"transfer(address,uint256)","0x095ea7b3":"approve(address,uint256)","0x7b1837de":"fund(address,uint256)"};function ie(e,t,n,i){const o=function(e){const{chainId:t}=(0,d.useWeb3React)(),n=(0,B.ZP)(),i=(0,F.C)((e=>e.logs)),a=(0,F.T)();return(0,x.useEffect)((()=>{if(e&&t)return a((0,G.NH)({chainId:t,filter:e})),()=>{a((0,G.ys)({chainId:t,filter:e}))}}),[t,a,e]),(0,x.useMemo)((()=>{var a,o;if(!t||!e||!n)return{logs:void 0,state:L.INVALID};const s=null===(o=null===(a=i[t])||void 0===a?void 0:a[(0,H.QM)(e)])||void 0===o?void 0:o.results;return s?s.error?{state:L.ERROR,logs:void 0}:{state:(0,H.x5)(e,n)||s.blockNumber>=n?L.SYNCED:L.SYNCING,logs:s.logs}:{state:L.LOADING,logs:void 0}}),[n,t,e,i])}((0,x.useMemo)((()=>{var t,a;const o=null===(a=e)||void 0===a||null===(t=a.filters)||void 0===t?void 0:t.ProposalCreated();if(o)return{...o,fromBlock:n,toBlock:i}}),[e,n,i]));return(0,x.useMemo)((()=>{var e,n,i,s;return null===(s=o)||void 0===s||null===(i=s.logs)||void 0===i||null===(n=i.map((e=>ee.parseLog(e).args)))||void 0===n||null===(e=n.filter((e=>t.flat().some((t=>t===e.id.toNumber())))))||void 0===e?void 0:e.map((e=>{var t;let n;const i=parseInt(null===(t=e.startBlock)||void 0===t?void 0:t.toString());try{n=e.description}catch(o){let e=j.te.replace;if(i===W){const t=[226,128,152].toString(),n=[226,128,166].toString();e=(e,i,a,o)=>{if(e===j.Uw.UNEXPECTED_CONTINUE){const e=[a[i],a[i+1],a[i+2]].reverse().toString();if(e===t)return o.push(8216),2;if(e===n)return o.push(8230),2}return j.te.replace(e,i,a,o)}}n=JSON.parse((0,j.ZN)(o.error.value,e))||""}return i!==W&&i!==O&&i!==z||(n=n.replace(/ {2}/g,"\n").replace(/\d\. /g,"\n$&")),{description:n,details:e.targets.map(((t,n)=>{const i=e.signatures[n];let o,s,r=e.calldatas[n];if(""===i){const e=r.slice(0,10),t=ne[e]??"UNKNOWN()";if(!t)throw new Error("Missing four byte sig");[o,s]=t.substring(0,t.length-1).split("("),r=`0x${r.slice(10)}`}else[o,s]=i.substring(0,i.length-1).split("(");return{target:t,functionSig:o,callData:a.$.decode(s.split(","),r).join(", ")}}))}}))}),[t,o])}const ae=[[1],[2],[3],[4]],oe=[[1],[2],[3]];function se(e,t=0){return"number"===typeof e?new Array(e-t).fill(0).map(((e,n)=>[n+1+t])):[]}function re(){const{chainId:e}=(0,d.useWeb3React)(),t=(0,A.cq)(I.GOVERNANCE_ALPHA_V0_ADDRESSES,w.Mt,!1),n=(0,A.cq)(I.GOVERNANCE_ALPHA_V1_ADDRESSES,w.Mt,!1),i=Q(),a=te(t),o=te(n),s=te(i),r=(0,x.useMemo)((()=>e===I.ChainId.MAINNET?ae:se(a)),[e,a]),l=(0,x.useMemo)((()=>e===I.ChainId.MAINNET?oe:se(o)),[e,o]),c=(0,x.useMemo)((()=>se(s,8)),[s]),p=(0,P.es)(t,"proposals",r),u=(0,P.es)(n,"proposals",l),m=(0,P.es)(i,"proposals",c),h=(0,P.es)(t,"state",r),f=(0,P.es)(n,"state",l),g=(0,P.es)(i,"state",c),y=ie(t,r,11042287,12563484),v=ie(n,l,12686656,13059343),b=ie(i,c,13538153),j=(0,x.useMemo)((()=>e?V.yg[e]:void 0),[e]);return(0,x.useMemo)((()=>{const e=[...p,...u,...m],a=[...h,...f,...g],o=[...y??[],...v??[],...b??[]];return!j||e.some((e=>e.loading))||a.some((e=>e.loading))||t&&!y||n&&!v||i&&!b?{data:[],loading:!0}:{data:e.map(((e,t)=>{var n,i,s,r,d,l,c,m,h,f,g,x,y,v,b,w,T,N,E,_,D;const A=parseInt(null===(s=e)||void 0===s||null===(i=s.result)||void 0===i||null===(n=i.startBlock)||void 0===n?void 0:n.toString());let P=(null===(r=o[t])||void 0===r?void 0:r.description)??"";A===$&&(P=k);let M=null===(d=P)||void 0===d?void 0:d.split(/#+\s|\n/g)[1];return A===U&&(M=S),{id:null===(c=e)||void 0===c||null===(l=c.result)||void 0===l?void 0:l.id.toString(),title:M??C.ag._({id:"wja8aL"}),description:P??C.ag._({id:"ry0RbG"}),proposer:null===(h=e)||void 0===h||null===(m=h.result)||void 0===m?void 0:m.proposer,status:(null===(g=a[t])||void 0===g||null===(f=g.result)||void 0===f?void 0:f[0])??J.UNDETERMINED,forCount:I.CurrencyAmount.fromRawAmount(j,null===(y=e)||void 0===y||null===(x=y.result)||void 0===x?void 0:x.forVotes),againstCount:I.CurrencyAmount.fromRawAmount(j,null===(b=e)||void 0===b||null===(v=b.result)||void 0===v?void 0:v.againstVotes),startBlock:A,endBlock:parseInt(null===(N=e)||void 0===N||null===(T=N.result)||void 0===T||null===(w=T.endBlock)||void 0===w?void 0:w.toString()),eta:null===(_=e)||void 0===_||null===(E=_.result)||void 0===E?void 0:E.eta,details:null===(D=o[t])||void 0===D?void 0:D.details,governorIndex:t>=p.length+u.length?2:t>=p.length?1:0}})),loading:!1}}),[y,v,b,t,n,i,h,f,g,p,u,m,j])}function de(e,t){var n;const{data:i}=re();return null===(n=i.filter((t=>t.governorIndex===e)))||void 0===n?void 0:n.find((e=>e.id===t))}function le(){var e;const{account:t}=(0,d.useWeb3React)(),n=X(),{result:i}=(0,P.Wk)(n,"delegates",[t??void 0]);return(null===(e=i)||void 0===e?void 0:e[0])??void 0}function ce(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=X(),{result:i,loading:a}=(0,P.Wk)(n,"getCurrentVotes",[e??void 0]);return(0,x.useMemo)((()=>{var e;const n=t?V.yg[t]:void 0;return{loading:a,votes:n&&i?I.CurrencyAmount.fromRawAmount(n,null===(e=i)||void 0===e?void 0:e[0]):void 0}}),[t,a,i])}var pe,ue=n(61152),me=n(54972),he=n(65118),fe=n(32305),ge=n(74293),xe=n(2562),ye=n(94284),ve=n(49934),be=n(22953);!function(e){e.TRANSFER_TOKEN="Transfer Token",e.APPROVE_TOKEN="Approve Token"}(pe||(pe={}));const je=(0,ue.default)(u.ZP).withConfig({displayName:"ProposalActionSelector__ContentWrapper",componentId:"sc-d5741932-0"})`
  width: 100%;
  flex: 1 1;
  position: relative;
`,Ce=ue.default.div.withConfig({displayName:"ProposalActionSelector__ActionSelectorHeader",componentId:"sc-d5741932-1"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
  margin-bottom: 10px;
`,we=(0,ue.default)(c.Kb).withConfig({displayName:"ProposalActionSelector__ActionDropdown",componentId:"sc-d5741932-2"})`
  padding: 0px;
  background-color: transparent;
  color: ${({theme:e})=>e.neutral1};
  font-size: 1.25rem;

  :hover,
  :active,
  :focus {
    outline: 0px;
    box-shadow: none;
    background-color: transparent;
  }
`,Te=ue.default.div.withConfig({displayName:"ProposalActionSelector__ProposalActionSelectorFlex",componentId:"sc-d5741932-3"})`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Ie=ue.default.div.withConfig({displayName:"ProposalActionSelector__ProposalActionSelectorContainer",componentId:"sc-d5741932-4"})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1em;
`,Ne=({className:e,onClick:t,proposalAction:n})=>(0,i.jsx)(Te,{children:(0,i.jsxs)(Ie,{className:e,children:[(0,i.jsx)(Ce,{children:(0,i.jsx)(s.cC,{id:"ZjOawn"})}),(0,i.jsx)(we,{onClick:t,children:n})]})});function Ee({isOpen:e,onDismiss:t,onProposalActionSelect:n}){const a=(0,x.useCallback)((e=>{n(e),t()}),[t,n]);return(0,i.jsx)(xe.Z,{isOpen:e,onDismiss:t,children:(0,i.jsxs)(je,{children:[(0,i.jsx)(ve.AC,{gap:"16px",children:(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)(be.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(s.cC,{id:"pnOrm4"})}),(0,i.jsx)(me.Tw,{onClick:t})]})}),(0,i.jsx)(ve.Z0,{}),(0,i.jsx)(ve.sN,{onClick:()=>a(pe.TRANSFER_TOKEN),children:(0,i.jsx)(u.ZP,{children:(0,i.jsx)(be.xv,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"PmH8DD"})})})}),(0,i.jsx)(ve.sN,{onClick:()=>a(pe.APPROVE_TOKEN),children:(0,i.jsx)(u.ZP,{children:(0,i.jsx)(be.xv,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"TXcuVO"})})})})]})})}var _e;!function(e){e[e.ADDRESS=0]="ADDRESS",e[e.CURRENCY=1]="CURRENCY"}(_e||(_e={}));const De=ue.default.div.withConfig({displayName:"ProposalActionDetail__ProposalActionDetailContainer",componentId:"sc-da62ad0f-0"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > * {
    width: 100%;
  }
  > :not(:last-child) {
    margin-bottom: 10px;
  }
`,Se={disableNonToken:!0,showCommonBases:!1},ke=({className:e,proposalAction:t,currency:n,amount:a,toAddress:o,onCurrencySelect:r,onAmountInput:d,onToAddressInput:l})=>{const c={[pe.TRANSFER_TOKEN]:[{type:_e.ADDRESS,label:(0,i.jsx)(s.cC,{id:"/jQctM"})},{type:_e.CURRENCY}],[pe.APPROVE_TOKEN]:[{type:_e.ADDRESS,label:(0,i.jsx)(s.cC,{id:"/jQctM"})},{type:_e.CURRENCY}]};return(0,i.jsx)(De,{className:e,children:c[t].map(((e,t)=>e.type===_e.ADDRESS?(0,i.jsx)(fe.Z,{label:e.label,value:o,onChange:l},t):e.type===_e.CURRENCY?(0,i.jsx)(ge.Z,{value:a,currency:n,onUserInput:e=>d(e),onCurrencySelect:e=>r(e),showMaxButton:!1,showCurrencyAmount:!1,hideBalance:!0,id:"currency-input",currencySearchFilters:Se},t):null))})},Ae=ue.default.input.withConfig({displayName:"TextInput__Input",componentId:"sc-a11c969c-0"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`,Pe=ue.default.textarea.withConfig({displayName:"TextInput__TextAreaInput",componentId:"sc-a11c969c-1"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  resize: none;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  line-height: 1.2;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral2};
  }
`,Me=(0,x.memo)((({className:e,value:t,onUserInput:n,placeholder:a,fontSize:o})=>{const s=(0,x.useRef)(document.createElement("textarea")),r=(0,x.useCallback)((e=>{s.current.style.height="auto",s.current.style.height=s.current.scrollHeight+"px",n(e.target.value)}),[n]);return(0,i.jsx)(Pe,{style:{height:"auto",minHeight:"535px"},className:e,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:a||"",onChange:r,value:t,fontSize:o,ref:s})}));Me.displayName="ResizingTextArea";const Re=(0,ue.default)(be.xv).withConfig({displayName:"ProposalEditor__ProposalEditorHeader",componentId:"sc-adc4adc-0"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
`,$e=(0,x.memo)((0,ue.default)((({className:e,value:t,onUserInput:n,placeholder:a,fontSize:o})=>{const s=(0,x.useCallback)((e=>{n(e.target.value)}),[n]);return(0,i.jsx)("div",{className:e,children:(0,i.jsx)(Ae,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:a||"",onChange:s,value:t,fontSize:o})})})).withConfig({displayName:"ProposalEditor__ProposalTitle",componentId:"sc-adc4adc-1"})`
  margin-top: 10.5px;
  margin-bottom: 7.5px;
`),We=ue.default.div.withConfig({displayName:"ProposalEditor__ProposalEditorContainer",componentId:"sc-adc4adc-2"})`
  margin-top: 10px;
  padding: 0.75rem 1rem 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Oe=({className:e,title:t,body:n,onTitleInput:a,onBodyInput:o})=>(0,i.jsxs)(We,{className:e,children:[(0,i.jsx)(Re,{children:(0,i.jsx)(s.cC,{id:"qcybNQ"})}),(0,i.jsx)($e,{value:t,onUserInput:a,placeholder:C.ag._({id:"ypPAJ2"}),fontSize:"1.25rem"}),(0,i.jsx)("hr",{}),(0,i.jsx)(Me,{value:n,onUserInput:o,placeholder:"## Summary\n\nInsert your summary here\n\n## Methodology\n  \nInsert your methodology here\n\n## Conclusion\n  \nInsert your conclusion here\n  \n  ",fontSize:"1rem"})]});var Ue=n(33882),ze=n(16709),Le=n(54703);const Ve=ue.default.div.withConfig({displayName:"ModalViews__ConfirmOrLoadingWrapper",componentId:"sc-94f08704-0"})`
  width: 100%;
  padding: 24px;
`,Be=(0,ue.default)(u.lg).withConfig({displayName:"ModalViews__ConfirmedIcon",componentId:"sc-94f08704-1"})`
  padding: 60px 0;
`;function Fe({children:e,onDismiss:t}){return(0,i.jsxs)(Ve,{children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(me.Tw,{onClick:t})]}),(0,i.jsx)(Be,{children:(0,i.jsx)(me._1,{src:ze.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[e,(0,i.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(s.cC,{id:"oG26Rt"})})]})]})}function Ge({children:e,onDismiss:t,hash:n}){const a=(0,ue.useTheme)(),{chainId:o}=(0,d.useWeb3React)();return(0,i.jsxs)(Ve,{children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(me.Tw,{onClick:t})]}),(0,i.jsx)(Be,{children:(0,i.jsx)(Ue.Z,{strokeWidth:.5,size:90,color:a.accent1})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[e,o&&n&&(0,i.jsx)(me.dL,{href:(0,Le.E)(o,n,Le.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,i.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(s.cC,{id:"yVxaEc"})})})]})]})}const He=({isOpen:e,hash:t,onDismiss:n})=>{const a=(0,ue.useTheme)();return(0,i.jsx)(xe.Z,{isOpen:e,onDismiss:n,children:t?(0,i.jsx)(Ge,{onDismiss:n,hash:t,children:(0,i.jsxs)(u.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(be.xv,{fontWeight:535,fontSize:20,textAlign:"center",children:(0,i.jsx)(s.cC,{id:"zEu7SF"})}),t&&(0,i.jsx)(me.dL,{href:(0,Le.E)(1,t,Le.r.TRANSACTION),children:(0,i.jsx)(be.xv,{fontWeight:535,fontSize:14,color:a.accent1,children:(0,i.jsx)(s.cC,{id:"rd4eHq"})})}),(0,i.jsx)(c.DF,{as:v.rU,to:"/vote",onClick:n,style:{margin:"20px 0 0 0"},children:(0,i.jsx)(be.xv,{fontWeight:535,fontSize:20,children:(0,i.jsx)(s.cC,{id:"vUOn9d"})})})]})}):(0,i.jsx)(Fe,{onDismiss:n,children:(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"jVqrMl"})})})})})};function Ze(e,t,n,i,a,o,s){try{var r=e[o](s),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,a)}const qe=(0,ue.default)(u.Tz).withConfig({displayName:"CreateProposal__PageWrapper",componentId:"sc-b30c3d8-0"})`
  padding: 68px 8px 0px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,Ye=(0,ue.default)(y.Z).withConfig({displayName:"CreateProposal__BackArrow",componentId:"sc-b30c3d8-1"})`
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
`,Qe=(0,ue.default)(v.rU).withConfig({displayName:"CreateProposal__Nav",componentId:"sc-b30c3d8-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1em 0 0 1em;
  text-decoration: none;
`,Ke=(0,ue.default)(me.Tv.H1Small).withConfig({displayName:"CreateProposal__HeaderText",componentId:"sc-b30c3d8-3"})`
  margin: auto !important;
`,Xe=({proposalThreshold:e,hasActiveOrPendingProposal:t,hasEnoughVote:n,isFormInvalid:a,handleCreateProposal:o})=>{const r=e?h().divide(e.quotient,h().exponentiate(h().BigInt(10),h().BigInt(e.currency.decimals))).toLocaleString():void 0;return(0,i.jsx)(c.Kd,{style:{marginTop:"18px"},error:t||!n,disabled:a||t||!n,onClick:o,children:t?(0,i.jsx)(s.cC,{id:"EaeCw4"}):n?(0,i.jsx)(s.cC,{id:"+2ovA+"}):(0,i.jsx)(i.Fragment,{children:r?(0,i.jsx)(s.cC,{id:"zeKvPC",values:{formattedProposalThreshold:r}}):(0,i.jsx)(s.cC,{id:"GujLUI"})})})},Je=(0,ue.default)(g.im).withConfig({displayName:"CreateProposal__CreateProposalWrapper",componentId:"sc-b30c3d8-4"})`
  display: flex;
  flex-flow: column wrap;
`,et=ue.default.div.withConfig({displayName:"CreateProposal__AutonomousProposalCTA",componentId:"sc-b30c3d8-5"})`
  text-align: center;
  margin-top: 10px;
`;function tt(){var e,t;const{account:n,chainId:c}=(0,d.useWeb3React)(),m=function(e){var t,n,i;const a=K();return null===(i=(0,P.Wk)(a,"latestProposalIds",[e]))||void 0===i||null===(n=i.result)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.toString()}(n??void 0)??"0",g=de(D,m),{votes:y}=ce(),v=function(){var e,t;const{chainId:n}=(0,d.useWeb3React)(),i=K(),a=(0,P.Wk)(i,"proposalThreshold"),o=(0,x.useMemo)((()=>n?V.yg[n]:void 0),[n]);if((null===(t=a)||void 0===t||null===(e=t.result)||void 0===e?void 0:e[0])&&o)return I.CurrencyAmount.fromRawAmount(o,a.result[0])}(),[b,j]=(0,x.useState)(!1),[C,w]=(0,x.useState)(),[T,N]=(0,x.useState)(!1),[E,_]=(0,x.useState)(pe.TRANSFER_TOKEN),[S,k]=(0,x.useState)(""),[A,M]=(0,x.useState)(V.yg[c??1]),[$,W]=(0,x.useState)(""),[O,U]=(0,x.useState)(""),[z,L]=(0,x.useState)(""),B=(0,x.useCallback)((()=>{j(!0)}),[j]),F=(0,x.useCallback)((e=>{_(e)}),[_]),G=(0,x.useCallback)((()=>{j(!1)}),[j]),H=(0,x.useCallback)((()=>{w(void 0),N(!1)}),[w,N]),Y=(0,x.useCallback)((e=>{k(e)}),[k]),Q=(0,x.useCallback)((e=>{M(e)}),[M]),X=(0,x.useCallback)((e=>{W(e)}),[W]),ee=(0,x.useCallback)((e=>{U(e)}),[U]),te=(0,x.useCallback)((e=>{L(e)}),[L]),ne=(0,x.useMemo)((()=>{var e;return Boolean(!E||!(0,o.isAddress)(S)||!(null===(e=A)||void 0===e?void 0:e.isToken)||""===$||""===O||""===z)}),[E,S,A,$,O,z]),ie=Boolean(y&&v&&h().greaterThanOrEqual(y.quotient,v.quotient)),ae=function(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=K(),i=(0,Z.h7)();return(0,x.useCallback)((a=>{if(!e||!n||!a||!t)return;const o=[a.targets,a.values,a.signatures,a.calldatas,a.description];return n.estimateGas.propose(...o).then((e=>n.propose(...o,{gasLimit:(0,R.y)(e)}).then((e=>(i(e,{type:q.i.SUBMIT_PROPOSAL}),e.hash)))))}),[e,i,n,t])}(),oe=function(){var e,t=(e=function*(){var e;N(!0);const t={};if(!ae||!E||!A.isToken)return;const n=(0,f.Z)($,A);if(!n)return;let i,s;switch(t.targets=[A.address],t.values=["0"],t.description=`# ${O}\n\n${z}\n`,E){case pe.TRANSFER_TOKEN:i=[["address","uint256"]],s=[[(0,o.getAddress)(S),n.quotient.toString()]],t.signatures=[`transfer(${i[0].join(",")})`];break;case pe.APPROVE_TOKEN:i=[["address","uint256"]],s=[[(0,o.getAddress)(S),n.quotient.toString()]],t.signatures=[`approve(${i[0].join(",")})`]}t.calldatas=[];for(let o=0;o<t.signatures.length;o++)t.calldatas[o]=a.$.encode(i[o],s[o]);const r=yield null===(e=ae(t??void 0))||void 0===e?void 0:e.catch((()=>{N(!1)}));r&&w(r)},function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){Ze(o,i,a,s,r,"next",e)}function r(e){Ze(o,i,a,s,r,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,i.jsx)(l.fM,{page:r.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,i.jsx)(qe,{children:(0,i.jsxs)(he.Z,{$maxWidth:"800px",children:[(0,i.jsxs)(Qe,{to:"/vote",children:[(0,i.jsx)(Ye,{}),(0,i.jsx)(Ke,{children:"Create Proposal"})]}),(0,i.jsxs)(Je,{children:[(0,i.jsx)(p.Pj,{children:(0,i.jsx)(u.Tz,{gap:"10px",children:(0,i.jsx)(me.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,i.jsx)(s.cC,{id:"8kkwc5",components:{0:(0,i.jsx)("strong",{}),1:(0,i.jsx)(me.dL,{href:"https://docs.uniswap.org/protocol/reference/Governance/governance-reference#propose"})}})})})}),(0,i.jsx)(Ne,{onClick:B,proposalAction:E}),(0,i.jsx)(ke,{proposalAction:E,currency:A,amount:$,toAddress:S,onCurrencySelect:Q,onAmountInput:X,onToAddressInput:Y}),(0,i.jsx)(Oe,{title:O,body:z,onTitleInput:ee,onBodyInput:te}),(0,i.jsx)(Xe,{proposalThreshold:v,hasActiveOrPendingProposal:(null===(e=g)||void 0===e?void 0:e.status)===J.ACTIVE||(null===(t=g)||void 0===t?void 0:t.status)===J.PENDING,hasEnoughVote:ie,isFormInvalid:ne,handleCreateProposal:oe}),ie?null:(0,i.jsxs)(et,{children:["Don\u2019t have 2.5M votes? Anyone can create an autonomous proposal using"," ",(0,i.jsx)(me.dL,{href:"https://fish.vote",children:"fish.vote"})]})]}),(0,i.jsx)(Ee,{isOpen:b,onDismiss:G,onProposalActionSelect:e=>F(e)}),(0,i.jsx)(He,{isOpen:T,hash:C,onDismiss:H})]})})})}var nt=n(6282),it=n(82731),at=n(94961),ot=n(63415),st=n(10672),rt=n(67716),dt=n(63194),lt=n(75082),ct=n(27296),pt=n(73720);function ut(e,t,n,i,a,o,s){try{var r=e[o](s),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,a)}const mt=(0,ue.default)(u.Tz).withConfig({displayName:"DelegateModal__ContentWrapper",componentId:"sc-627ffb35-0"})`
  width: 100%;
  padding: 24px;
`,ht=(0,ue.default)(dt.Z).withConfig({displayName:"DelegateModal__StyledClosed",componentId:"sc-627ffb35-1"})`
  :hover {
    cursor: pointer;
  }
`,ft=ue.default.div.withConfig({displayName:"DelegateModal__TextButton",componentId:"sc-627ffb35-2"})`
  :hover {
    cursor: pointer;
  }
`;function gt({isOpen:e,onDismiss:t,title:n}){const{account:a,chainId:r}=(0,d.useWeb3React)(),[l,p]=(0,x.useState)(!1),[m,h]=(0,x.useState)("");const f=l?m:a,{address:g}=(0,ct.Z)(f),y=(0,pt.mM)(a??void 0,r?V.yg[r]:void 0),v=function(){const{account:e,chainId:t,provider:n}=(0,d.useWeb3React)(),i=(0,Z.h7)(),a=X();return(0,x.useCallback)((s=>{if(!n||!t||!e||!s||!(0,o.isAddress)(s??""))return;const r=[s];if(!a)throw new Error("No UNI Contract!");return a.estimateGas.delegate(...r,{}).then((e=>a.delegate(...r,{value:null,gasLimit:(0,R.y)(e)}).then((e=>(i(e,{type:q.i.DELEGATE,delegatee:s}),e.hash)))))}),[e,i,t,n,a])}(),[b,j]=(0,x.useState)(),[C,w]=(0,x.useState)(!1);function T(){j(void 0),w(!1),t()}function I(){var e;return e=function*(){var e;if(w(!0),!v)return;const t=yield null===(e=v(g??void 0))||void 0===e?void 0:e.catch((e=>{w(!1),console.log(e)}));t&&j(t)},I=function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){ut(o,i,a,s,r,"next",e)}function r(e){ut(o,i,a,s,r,"throw",e)}s(void 0)}))},I.apply(this,arguments)}return(0,i.jsxs)(xe.Z,{isOpen:e,onDismiss:T,maxHeight:90,children:[!C&&!b&&(0,i.jsx)(mt,{gap:"lg",children:(0,i.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:n}),(0,i.jsx)(ht,{stroke:"black",onClick:T})]}),(0,i.jsx)(me.Tv.DeprecatedBody,{children:(0,i.jsx)(s.cC,{id:"bax021"})}),(0,i.jsx)(me.Tv.DeprecatedBody,{children:(0,i.jsx)(s.cC,{id:"7AHe/w"})}),l&&(0,i.jsx)(fe.Z,{value:m,onChange:function(e){h(e)}}),(0,i.jsx)(c.DF,{disabled:!(0,o.isAddress)(g??""),onClick:function(){return I.apply(this,arguments)},children:(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:l?(0,i.jsx)(s.cC,{id:"Ui1tti"}):(0,i.jsx)(s.cC,{id:"SqN37/"})})}),(0,i.jsx)(ft,{onClick:()=>p(!l),children:(0,i.jsx)(me.Tv.DeprecatedBlue,{children:l?(0,i.jsx)(s.cC,{id:"vXCSlR"}):(0,i.jsx)(s.cC,{id:"i3lR50"})})})]})}),C&&!b&&(0,i.jsx)(Fe,{onDismiss:T,children:(0,i.jsxs)(u.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:l?(0,i.jsx)(s.cC,{id:"mYDX/5"}):(0,i.jsx)(s.cC,{id:"rO0m+d"})}),(0,i.jsxs)(me.Tv.DeprecatedMain,{fontSize:36,children:[" ",(0,lt.Z)(y,4)]})]})}),b&&(0,i.jsx)(Ge,{onDismiss:T,hash:b,children:(0,i.jsxs)(u.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"ExzCxg"})}),(0,i.jsx)(me.Tv.DeprecatedMain,{fontSize:36,children:(0,lt.Z)(y,4)})]})})]})}const xt=ue.default.div.withConfig({displayName:"ProposalEmptyState__EmptyProposals",componentId:"sc-d5c56468-0"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,yt=ue.default.i.withConfig({displayName:"ProposalEmptyState__Sub",componentId:"sc-d5c56468-1"})`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`,vt=({HeaderContent:e,SubHeaderContent:t})=>(0,i.jsxs)(xt,{children:[(0,i.jsx)(me.Tv.DeprecatedBody,{style:{marginBottom:"8px"},children:(0,i.jsx)(e,{})}),(0,i.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(yt,{children:(0,i.jsx)(t,{})})})]});function bt(){const{chainId:e}=(0,d.useWeb3React)();return e&&e!==I.ChainId.MAINNET?(0,i.jsx)(vt,{HeaderContent:()=>(0,i.jsx)(s.cC,{id:"ejl/89"}),SubHeaderContent:()=>(0,i.jsx)(s.cC,{id:"ekfCbW"})}):(0,i.jsx)(vt,{HeaderContent:()=>(0,i.jsx)(s.cC,{id:"wra16A"}),SubHeaderContent:()=>(0,i.jsx)(s.cC,{id:"LNOwr1"})})}var jt=n(36399),Ct=n(99902),wt=n(1356),Tt=n(29021),It=n(13446),Nt=n(13820);const Et=(e,t)=>{switch(e){case J.PENDING:case J.ACTIVE:return t.accent1;case J.SUCCEEDED:case J.EXECUTED:return t.success;case J.DEFEATED:return t.critical;case J.QUEUED:case J.CANCELED:case J.EXPIRED:default:return t.neutral3}};function _t({status:e}){switch(e){case J.PENDING:return(0,i.jsx)(s.cC,{id:"UbRKMZ"});case J.ACTIVE:return(0,i.jsx)(s.cC,{id:"F6pfE9"});case J.SUCCEEDED:return(0,i.jsx)(s.cC,{id:"KAbcm2"});case J.EXECUTED:return(0,i.jsx)(s.cC,{id:"L4jnDP"});case J.DEFEATED:return(0,i.jsx)(s.cC,{id:"WRTJfs"});case J.QUEUED:return(0,i.jsx)(s.cC,{id:"8wu9lr"});case J.CANCELED:return(0,i.jsx)(s.cC,{id:"GGWsTU"});case J.EXPIRED:return(0,i.jsx)(s.cC,{id:"M1RnFv"});default:return(0,i.jsx)(s.cC,{id:"v2r3sT"})}}const Dt=ue.default.span.withConfig({displayName:"styled__StyledProposalContainer",componentId:"sc-676ed4ee-0"})`
  font-size: 0.825rem;
  font-weight: 535;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${({status:e,theme:t})=>Et(e,t)};
  border: 1px solid ${({status:e,theme:t})=>Et(e,t)};
  width: fit-content;
  justify-self: flex-end;
  text-transform: uppercase;
  flex: 0 0 100px;
  text-align: center;
`;function St({status:e}){return(0,i.jsx)(Dt,{status:e,children:(0,i.jsx)(_t,{status:e})})}const kt=(0,ue.default)(u.Tz).withConfig({displayName:"Landing__PageWrapper",componentId:"sc-b91d1346-0"})`
  padding-top: 68px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,At=(0,ue.default)(u.Tz).withConfig({displayName:"Landing__TopSection",componentId:"sc-b91d1346-1"})`
  max-width: 640px;
  width: 100%;
`,Pt=(0,ue.default)(Ct.zx).withConfig({displayName:"Landing__Proposal",componentId:"sc-b91d1346-2"})`
  padding: 0.75rem 1rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  outline: none;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  background-color: ${({theme:e})=>e.surface1};
  &:focus {
    background-color: ${({theme:e})=>(0,jt._j)(.05,e.surface1)};
  }
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
`,Mt=ue.default.span.withConfig({displayName:"Landing__ProposalNumber",componentId:"sc-b91d1346-3"})`
  opacity: ${({theme:e})=>e.opacity.hover};
  flex: 0 0 40px;
`,Rt=ue.default.span.withConfig({displayName:"Landing__ProposalTitle",componentId:"sc-b91d1346-4"})`
  font-weight: 535;
  flex: 1;
  max-width: 420px;
  white-space: initial;
  word-wrap: break-word;
  padding-right: 10px;
`,$t=(0,ue.default)(it.I8).withConfig({displayName:"Landing__VoteCard",componentId:"sc-b91d1346-5"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  overflow: hidden;
`,Wt=(0,ue.default)(ye.m0).withConfig({displayName:"Landing__WrapSmall",componentId:"sc-b91d1346-6"})`
  margin-bottom: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
  `};
`,Ot=(0,ue.default)(me.Tv.DeprecatedMain).withConfig({displayName:"Landing__TextButton",componentId:"sc-b91d1346-7"})`
  color: ${({theme:e})=>e.accent1};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,Ut=ue.default.div.withConfig({displayName:"Landing__AddressButton",componentId:"sc-b91d1346-8"})`
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.accent1};
`,zt=(0,ue.default)(me.dL).withConfig({displayName:"Landing__StyledExternalLink",componentId:"sc-b91d1346-9"})`
  color: ${({theme:e})=>e.neutral1};
`,Lt=(0,ue.default)(me.Tv.H1Small).withConfig({displayName:"Landing__Header",componentId:"sc-b91d1346-10"})`
  color: white;
  font-weight: 535;
  font-size: inherit;
  line-height: inherit;
`;function Vt(){var e,t,n,a,o,p,m,f;const g=(0,ue.useTheme)(),{account:y,chainId:b}=(0,d.useWeb3React)(),[j,C]=(0,x.useState)(!0),w=(0,wt.Wt)(Tt.Lk.DELEGATE),T=(0,wt.up)(),{data:I,loading:N}=re(),{loading:E,votes:_}=ce(),D=(0,pt.mM)(y??void 0,b?V.yg[b]:void 0),S=le(),k=Boolean(D&&h().notEqual(D.quotient,h().BigInt(0))&&S===Nt.r_);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.fM,{page:r.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(kt,{gap:"lg",justify:"center",children:[(0,i.jsx)(gt,{isOpen:w,onDismiss:T,title:k?(0,i.jsx)(s.cC,{id:"MdYzHJ"}):(0,i.jsx)(s.cC,{id:"pyQcYT"})}),(0,i.jsx)(At,{gap:"md",children:(0,i.jsxs)($t,{children:[(0,i.jsx)(it.sq,{}),(0,i.jsx)(it.RF,{}),(0,i.jsx)(it.uO,{children:(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(ye.m0,{children:(0,i.jsx)(Lt,{children:(0,i.jsx)(s.cC,{id:"b/GPs3"})})}),(0,i.jsx)(ye.m0,{children:(0,i.jsx)(me.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(s.cC,{id:"UPoMvW"})})}),(0,i.jsx)(me.dL,{style:{color:g.white,textDecoration:"underline"},href:"https://uniswap.org/blog/uni",target:"_blank",children:(0,i.jsx)(me.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(s.cC,{id:"UP8B0b"})})})]})}),(0,i.jsx)(it.sq,{}),(0,i.jsx)(it.RF,{})]})}),(0,i.jsxs)(At,{gap:"2px",children:[(0,i.jsxs)(Wt,{children:[(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{style:{margin:"0.5rem 0.5rem 0.5rem 0",flexShrink:0},children:(0,i.jsx)(s.cC,{id:"6g1gi0"})}),(0,i.jsxs)(ye.BA,{gap:"6px",justify:"flex-end",children:[N||E?(0,i.jsx)(ot.ZP,{}):null,k?(0,i.jsx)(c.DF,{style:{width:"fit-content",height:"40px"},padding:"8px",$borderRadius:"8px",onClick:T,children:(0,i.jsx)(s.cC,{id:"1XEaEo"})}):_&&h().notEqual(h().BigInt(0),null===(e=_)||void 0===e?void 0:e.quotient)?(0,i.jsx)(me.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,i.jsx)(s.cC,{id:"YgWhFg",components:{0:(0,i.jsx)(at.Z,{currencyAmount:_})}})}):D&&S&&S!==Nt.r_&&h().notEqual(h().BigInt(0),null===(t=D)||void 0===t?void 0:t.quotient)?(0,i.jsx)(me.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,i.jsx)(s.cC,{id:"YgWhFg",components:{0:(0,i.jsx)(at.Z,{currencyAmount:D})}})}):"",(0,i.jsx)(c.DF,{as:v.rU,to:"/create-proposal",style:{width:"fit-content",borderRadius:"8px",height:"40px"},padding:"8px",children:(0,i.jsx)(s.cC,{id:"+2ovA+"})})]})]}),!k&&(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)("div",{}),S&&S!==Nt.r_?(0,i.jsxs)(ye.DA,{children:[(0,i.jsx)(me.Tv.DeprecatedBody,{fontWeight:535,mr:"4px",children:(0,i.jsx)(s.cC,{id:"if4+2Q"})}),(0,i.jsxs)(Ut,{children:[(0,i.jsx)(zt,{href:(0,Le.E)(1,S,Le.r.ADDRESS),style:{margin:"0 4px"},children:S===y?(0,i.jsx)(s.cC,{id:"QwCX4t"}):(0,It.Xn)(S)}),(0,i.jsx)(Ot,{onClick:T,style:{marginLeft:"4px"},children:(0,i.jsx)(s.cC,{id:"zBlp20"})})]})]}):""]}),0===(null===(n=I)||void 0===n?void 0:n.length)&&(0,i.jsx)(bt,{}),(null===(a=I)||void 0===a?void 0:a.length)>0&&(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(ye.m0,{}),(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)(me.Tv.DeprecatedMain,{children:(0,i.jsx)(s.cC,{id:"h3EttW"})}),(0,i.jsx)(rt.Z,{isActive:!j,toggle:()=>C((e=>!e))})]})]}),null===(f=I)||void 0===f||null===(m=f.slice(0))||void 0===m||null===(p=m.reverse())||void 0===p||null===(o=p.filter((e=>!j||e.status!==J.CANCELED)))||void 0===o?void 0:o.map((e=>(0,i.jsxs)(Pt,{as:v.rU,to:`/vote/${e.governorIndex}/${e.id}`,children:[(0,i.jsxs)(Mt,{children:[e.governorIndex,".",e.id]}),(0,i.jsx)(Rt,{children:e.title}),(0,i.jsx)(St,{status:e.status})]},`${e.governorIndex}${e.id}`)))]}),(0,i.jsx)(me.Tv.DeprecatedSubHeader,{color:"text3",children:(0,i.jsx)(s.cC,{id:"3Mwm54"})})]})}),(0,i.jsx)(st.c,{})]})}var Bt=n(11604);function Ft(e,t,n,i,a,o,s){try{var r=e[o](s),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,a)}const Gt=(0,ue.default)(u.Tz).withConfig({displayName:"ExecuteModal__ContentWrapper",componentId:"sc-7c1ef6e8-0"})`
  width: 100%;
  padding: 24px;
`,Ht=(0,ue.default)(dt.Z).withConfig({displayName:"ExecuteModal__StyledClosed",componentId:"sc-7c1ef6e8-1"})`
  :hover {
    cursor: pointer;
  }
`,Zt=ue.default.div.withConfig({displayName:"ExecuteModal__ConfirmOrLoadingWrapper",componentId:"sc-7c1ef6e8-2"})`
  width: 100%;
  padding: 24px;
`,qt=(0,ue.default)(u.lg).withConfig({displayName:"ExecuteModal__ConfirmedIcon",componentId:"sc-7c1ef6e8-3"})`
  padding: 60px 0;
`;function Yt({isOpen:e,onDismiss:t,proposalId:n}){const{chainId:a}=(0,d.useWeb3React)(),o=function(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=K(),i=(0,Z.h7)();return(0,x.useCallback)((a=>{if(!e||!n||!a||!t)return;const o=[a];return n.estimateGas.execute(...o,{}).then((e=>n.execute(...o,{value:null,gasLimit:(0,R.y)(e)}).then((e=>(i(e,{type:q.i.EXECUTE,governorAddress:n.address,proposalId:parseInt(a)}),e.hash)))))}),[e,i,n,t])}(),[r,l]=(0,x.useState)(),[p,m]=(0,x.useState)(!1),h=(0,ue.useTheme)();function f(){l(void 0),m(!1),t()}function g(){var e;return e=function*(){var e;if(m(!0),!o)return;const t=yield null===(e=o(n))||void 0===e?void 0:e.catch((e=>{m(!1),console.log(e)}));t&&l(t)},g=function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){Ft(o,i,a,s,r,"next",e)}function r(e){Ft(o,i,a,s,r,"throw",e)}s(void 0)}))},g.apply(this,arguments)}return(0,i.jsxs)(xe.Z,{isOpen:e,onDismiss:f,maxHeight:90,children:[!p&&!r&&(0,i.jsx)(Gt,{gap:"lg",children:(0,i.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"/dt0VU",values:{proposalId:n}})}),(0,i.jsx)(Ht,{onClick:f})]}),(0,i.jsx)(ye.m0,{children:(0,i.jsx)(me.Tv.DeprecatedBody,{children:(0,i.jsx)(s.cC,{id:"VHfiai"})})}),(0,i.jsx)(c.DF,{onClick:function(){return g.apply(this,arguments)},children:(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:(0,i.jsx)(s.cC,{id:"ZC2VJP"})})})]})}),p&&!r&&(0,i.jsxs)(Zt,{children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(Ht,{onClick:f})]}),(0,i.jsx)(qt,{children:(0,i.jsx)(me._1,{src:ze.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"cS4teF"})})}),(0,i.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(s.cC,{id:"oG26Rt"})})]})]}),r&&(0,i.jsxs)(Zt,{children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(Ht,{onClick:f})]}),(0,i.jsx)(qt,{children:(0,i.jsx)(Ue.Z,{strokeWidth:.5,size:90,color:h.accent1})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"xthwq6"})})}),a&&(0,i.jsx)(me.dL,{href:(0,Le.E)(a,r,Le.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,i.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(s.cC,{id:"yVxaEc"})})})]})]})]})}function Qt(e,t,n,i,a,o,s){try{var r=e[o](s),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,a)}const Kt=(0,ue.default)(u.Tz).withConfig({displayName:"QueueModal__ContentWrapper",componentId:"sc-70391d71-0"})`
  width: 100%;
  padding: 24px;
`,Xt=(0,ue.default)(dt.Z).withConfig({displayName:"QueueModal__StyledClosed",componentId:"sc-70391d71-1"})`
  :hover {
    cursor: pointer;
  }
`,Jt=ue.default.div.withConfig({displayName:"QueueModal__ConfirmOrLoadingWrapper",componentId:"sc-70391d71-2"})`
  width: 100%;
  padding: 24px;
`,en=(0,ue.default)(u.lg).withConfig({displayName:"QueueModal__ConfirmedIcon",componentId:"sc-70391d71-3"})`
  padding: 60px 0;
`;function tn({isOpen:e,onDismiss:t,proposalId:n}){const{chainId:a}=(0,d.useWeb3React)(),o=function(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=K(),i=(0,Z.h7)();return(0,x.useCallback)((a=>{if(!e||!n||!a||!t)return;const o=[a];return n.estimateGas.queue(...o,{}).then((e=>n.queue(...o,{value:null,gasLimit:(0,R.y)(e)}).then((e=>(i(e,{type:q.i.QUEUE,governorAddress:n.address,proposalId:parseInt(a)}),e.hash)))))}),[e,i,n,t])}(),[r,l]=(0,x.useState)(),[p,m]=(0,x.useState)(!1),h=(0,ue.useTheme)();function f(){l(void 0),m(!1),t()}function g(){var e;return e=function*(){var e;if(m(!0),!o)return;const t=yield null===(e=o(n))||void 0===e?void 0:e.catch((e=>{m(!1),console.log(e)}));t&&l(t)},g=function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){Qt(o,i,a,s,r,"next",e)}function r(e){Qt(o,i,a,s,r,"throw",e)}s(void 0)}))},g.apply(this,arguments)}return(0,i.jsxs)(xe.Z,{isOpen:e,onDismiss:f,maxHeight:90,children:[!p&&!r&&(0,i.jsx)(Kt,{gap:"lg",children:(0,i.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"PCMS6I",values:{proposalId:n}})}),(0,i.jsx)(Xt,{onClick:f})]}),(0,i.jsx)(ye.m0,{children:(0,i.jsx)(me.Tv.DeprecatedBody,{children:(0,i.jsx)(s.cC,{id:"ZYe2DX"})})}),(0,i.jsx)(c.DF,{onClick:function(){return g.apply(this,arguments)},children:(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:(0,i.jsx)(s.cC,{id:"b24kPi"})})})]})}),p&&!r&&(0,i.jsxs)(Jt,{children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(Xt,{onClick:f})]}),(0,i.jsx)(en,{children:(0,i.jsx)(me._1,{src:ze.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"4iM1V1"})})}),(0,i.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(s.cC,{id:"oG26Rt"})})]})]}),r&&(0,i.jsxs)(Jt,{children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(Xt,{onClick:f})]}),(0,i.jsx)(en,{children:(0,i.jsx)(Ue.Z,{strokeWidth:.5,size:90,color:h.accent1})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"ExzCxg"})})}),a&&(0,i.jsx)(me.dL,{href:(0,Le.E)(a,r,Le.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,i.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(s.cC,{id:"yVxaEc"})})})]})]})]})}var nn=n(85135),an=n(8545),on=n(63490),sn=n.n(on),rn=n(35339),dn=n.n(rn),ln=n(70359);function cn(e,t,n,i,a,o,s){try{var r=e[o](s),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,a)}const pn=(0,ue.default)(u.Tz).withConfig({displayName:"VoteModal__ContentWrapper",componentId:"sc-18c3e03f-0"})`
  width: 100%;
  padding: 24px;
`,un=(0,ue.default)(dt.Z).withConfig({displayName:"VoteModal__StyledClosed",componentId:"sc-18c3e03f-1"})`
  :hover {
    cursor: pointer;
  }
`,mn=ue.default.div.withConfig({displayName:"VoteModal__ConfirmOrLoadingWrapper",componentId:"sc-18c3e03f-2"})`
  width: 100%;
  padding: 24px;
`,hn=(0,ue.default)(u.lg).withConfig({displayName:"VoteModal__ConfirmedIcon",componentId:"sc-18c3e03f-3"})`
  padding: 60px 0;
`;function fn({isOpen:e,onDismiss:t,proposalId:n,voteOption:a}){const{chainId:o}=(0,d.useWeb3React)(),r=function(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=K(),i=(0,Z.h7)();return(0,x.useCallback)(((a,o)=>{if(!e||!n||!a||!t)return;const s=[a,o===Y.N.Against?0:o===Y.N.For?1:2];return n.estimateGas.castVote(...s,{}).then((e=>n.castVote(...s,{value:null,gasLimit:(0,R.y)(e)}).then((e=>(i(e,{type:q.i.VOTE,decision:o,governorAddress:n.address,proposalId:parseInt(a),reason:""}),e.hash)))))}),[e,i,n,t])}(),{votes:l}=ce(),[p,m]=(0,x.useState)(),[h,f]=(0,x.useState)(!1),g=(0,ue.useTheme)();function y(){m(void 0),f(!1),t()}function v(){var e;return e=function*(){var e;if(f(!0),!r||void 0===a)return;const t=yield null===(e=r(n,a))||void 0===e?void 0:e.catch((e=>{f(!1),console.log(e)}));t&&m(t)},v=function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){cn(o,i,a,s,r,"next",e)}function r(e){cn(o,i,a,s,r,"throw",e)}s(void 0)}))},v.apply(this,arguments)}return(0,i.jsxs)(xe.Z,{isOpen:e,onDismiss:y,maxHeight:90,children:[!h&&!p&&(0,i.jsx)(pn,{gap:"lg",children:(0,i.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:a===Y.N.Against?(0,i.jsx)(s.cC,{id:"aSX+fT",values:{proposalId:n}}):a===Y.N.For?(0,i.jsx)(s.cC,{id:"A7Ys4I",values:{proposalId:n}}):(0,i.jsx)(s.cC,{id:"eiIsQo",values:{proposalId:n}})}),(0,i.jsx)(un,{onClick:y})]}),(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"WO4eRQ",values:{0:(0,lt.Z)(l,4)}})}),(0,i.jsx)(c.DF,{onClick:function(){return v.apply(this,arguments)},children:(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:a===Y.N.Against?(0,i.jsx)(s.cC,{id:"aSX+fT",values:{proposalId:n}}):a===Y.N.For?(0,i.jsx)(s.cC,{id:"A7Ys4I",values:{proposalId:n}}):(0,i.jsx)(s.cC,{id:"eiIsQo",values:{proposalId:n}})})})]})}),h&&!p&&(0,i.jsxs)(mn,{children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(un,{onClick:y})]}),(0,i.jsx)(hn,{children:(0,i.jsx)(me._1,{src:ze.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"b2nic5"})})}),(0,i.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(s.cC,{id:"oG26Rt"})})]})]}),p&&(0,i.jsxs)(mn,{children:[(0,i.jsxs)(ye.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(un,{onClick:y})]}),(0,i.jsx)(hn,{children:(0,i.jsx)(Ue.Z,{strokeWidth:.5,size:90,color:g.accent1})}),(0,i.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,i.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,i.jsx)(s.cC,{id:"RSb2E9"})})}),o&&(0,i.jsx)(me.dL,{href:(0,Le.E)(o,p,Le.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,i.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,i.jsx)(s.cC,{id:"yVxaEc"})})})]})]})]})}const gn=(0,ue.default)(u.Tz).withConfig({displayName:"VotePage__PageWrapper",componentId:"sc-7b7f6ad7-0"})`
  padding-top: 68px;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,xn=(0,ue.default)(u.Tz).withConfig({displayName:"VotePage__ProposalInfo",componentId:"sc-7b7f6ad7-1"})`
  background: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  max-width: 640px;
  width: 100%;
`,yn=(0,ue.default)(me.m_).withConfig({displayName:"VotePage__ArrowWrapper",componentId:"sc-7b7f6ad7-2"})`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  color: ${({theme:e})=>e.neutral1};

  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
`,vn=ue.default.div.withConfig({displayName:"VotePage__CardWrapper",componentId:"sc-7b7f6ad7-3"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
`,bn=(0,ue.default)(it.I8).withConfig({displayName:"VotePage__StyledDataCard",componentId:"sc-7b7f6ad7-4"})`
  width: 100%;
  background: none;
  background-color: ${({theme:e})=>e.surface1};
  height: fit-content;
  z-index: 2;
`,jn=ue.default.div.withConfig({displayName:"VotePage__ProgressWrapper",componentId:"sc-7b7f6ad7-5"})`
  width: 100%;
  margin-top: 1rem;
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.surface2};
  position: relative;
`,Cn=ue.default.div.withConfig({displayName:"VotePage__Progress",componentId:"sc-7b7f6ad7-6"})`
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e,status:t})=>"for"===t?e.success:e.critical};
  width: ${({percentageString:e})=>e??"0%"};
`,wn=ue.default.div.withConfig({displayName:"VotePage__MarkDownWrapper",componentId:"sc-7b7f6ad7-7"})`
  max-width: 640px;
  overflow: hidden;
`,Tn=(0,ue.default)(ye.m0).withConfig({displayName:"VotePage__WrapSmall",componentId:"sc-7b7f6ad7-8"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    align-items: flex-start;
    flex-direction: column;
  `};
`,In=ue.default.div.withConfig({displayName:"VotePage__DetailText",componentId:"sc-7b7f6ad7-9"})`
  word-break: break-all;
`,Nn=(0,ue.default)(me.dL).withConfig({displayName:"VotePage__ProposerAddressLink",componentId:"sc-7b7f6ad7-10"})`
  word-break: break-all;
`;function En(e,t,n,i){if(e&&t&&n&&i){const a=new Date;return a.setTime(i.add(Bt.O$.from(n).mul(Bt.O$.from(e-t))).toNumber()*sn()("1s")),a}}function _n(){var e,t,n,a,o,m,f,g,v,b,j,C,w,T,S,k,A,M,R,$,W,O,U,z,L,F,G,H;const{governorIndex:Z,id:q}=(0,nt.UO)(),Q=Number.parseInt(Z),{chainId:ee,account:te}=(0,d.useWeb3React)(),ne=function(e){var t,n;const i=K(),a=null===(n=(0,P.Wk)(i,"quorumVotes"))||void 0===n||null===(t=n.result)||void 0===t?void 0:t[0],{chainId:o}=(0,d.useWeb3React)(),s=(0,x.useMemo)((()=>o?V.yg[o]:void 0),[o]);if(i&&a&&o===I.ChainId.MAINNET&&s&&e===D)return I.CurrencyAmount.fromRawAmount(s,a)}(Q),ie=de(Q,q),[ae,oe]=(0,x.useState)(void 0),se=(0,wt.Wt)(Tt.Lk.VOTE),re=(0,wt.VE)(),ce=(0,wt.Wt)(Tt.Lk.DELEGATE),pe=(0,wt.up)(),ue=(0,wt.Wt)(Tt.Lk.QUEUE),he=(0,wt.wG)(),fe=(0,wt.Wt)(Tt.Lk.EXECUTE),ge=(0,wt.jC)(),xe=(0,an.Z)(ln.DB),ve=(0,B.ZP)(),be=En(null===(e=ie)||void 0===e?void 0:e.startBlock,ve,(ee&&_[ee])??E,xe),je=En(null===(t=ie)||void 0===t?void 0:t.endBlock,ve,(ee&&_[ee])??E,xe),Ce=new Date,we=(0,nn.eQ)(),Te={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"},Ie=(null===(n=ie)||void 0===n?void 0:n.eta)?new Date(ie.eta.mul(sn()("1s")).toNumber()):void 0,Ne=null===(o=ie)||void 0===o||null===(a=o.forCount)||void 0===a?void 0:a.add(ie.againstCount),Ee=Ne?null===(v=ie)||void 0===v||null===(g=v.forCount)||void 0===g||null===(f=g.asFraction)||void 0===f||null===(m=f.divide(Ne.asFraction))||void 0===m?void 0:m.multiply(100):void 0,_e=Ee?new I.Fraction(100).subtract(Ee):void 0,De=function(e){var t,n;const{account:i,chainId:a}=(0,d.useWeb3React)(),o=X(),s=(0,x.useMemo)((()=>a?V.yg[a]:void 0),[a]),r=null===(n=(0,P.Wk)(o,"getPriorVotes",[i??void 0,e??void 0]))||void 0===n||null===(t=n.result)||void 0===t?void 0:t[0];return r&&s?I.CurrencyAmount.fromRawAmount(s,r):void 0}((null===(b=ie)||void 0===b?void 0:b.startBlock)??void 0),Se=De&&h().greaterThan(De.quotient,h().BigInt(0))&&ie&&ie.status===J.ACTIVE,ke=te&&(null===(j=ie)||void 0===j?void 0:j.status)===J.SUCCEEDED,Ae=te&&(null===(C=ie)||void 0===C?void 0:C.status)===J.QUEUED,Pe=(0,pt.mM)(te??void 0,ee?V.yg[ee]:void 0),Me=le(),Re=Boolean(Pe&&h().notEqual(Pe.quotient,h().BigInt(0))&&Me===Nt.r_),$e=e=>{if((0,It.UJ)(e)&&ee){var t;const n=(null===(t=N[ee])||void 0===t?void 0:t[e])??e;return(0,i.jsx)(me.dL,{href:(0,Le.E)(ee,e,Le.r.ADDRESS),children:n})}return(0,i.jsx)("span",{children:e})};return(0,i.jsx)(l.fM,{page:r.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(gn,{gap:"lg",justify:"center",children:[(0,i.jsx)(fn,{isOpen:se,onDismiss:re,proposalId:null===(w=ie)||void 0===w?void 0:w.id,voteOption:ae}),(0,i.jsx)(gt,{isOpen:ce,onDismiss:pe,title:(0,i.jsx)(s.cC,{id:"MdYzHJ"})}),(0,i.jsx)(tn,{isOpen:ue,onDismiss:he,proposalId:null===(T=ie)||void 0===T?void 0:T.id}),(0,i.jsx)(Yt,{isOpen:fe,onDismiss:ge,proposalId:null===(S=ie)||void 0===S?void 0:S.id}),(0,i.jsxs)(xn,{gap:"lg",justify:"start",children:[(0,i.jsxs)(ye.m0,{style:{width:"100%"},children:[(0,i.jsx)(yn,{to:"/vote",children:(0,i.jsx)(s.cC,{id:"HgT4Lv",components:{0:(0,i.jsx)(y.Z,{size:20})}})}),ie&&(0,i.jsx)(St,{status:ie.status})]}),(0,i.jsxs)(u.Tz,{gap:"10px",style:{width:"100%"},children:[(0,i.jsx)(me.Tv.DeprecatedLargeHeader,{style:{marginBottom:".5rem"},children:null===(k=ie)||void 0===k?void 0:k.title}),(0,i.jsx)(ye.m0,{children:(0,i.jsx)(me.Tv.DeprecatedMain,{children:be&&be>Ce?(0,i.jsx)(s.cC,{id:"/lY+kD",values:{0:be.toLocaleString(we,Te)}}):null})}),(0,i.jsx)(ye.m0,{children:(0,i.jsx)(me.Tv.DeprecatedMain,{children:je&&(je<Ce?(0,i.jsx)(s.cC,{id:"3X8B3E",values:{0:je.toLocaleString(we,Te)}}):(0,i.jsx)(s.cC,{id:"IPCr3d",values:{0:je.toLocaleString(we,Te)}}))})}),ie&&ie.status===J.ACTIVE&&!Se&&(0,i.jsx)(p.rd,{children:(0,i.jsxs)(me.Tv.DeprecatedBlack,{children:[(0,i.jsx)(s.cC,{id:"7bxUAT",values:{0:ie.startBlock}})," ",Re&&(0,i.jsx)("span",{children:(0,i.jsx)(s.cC,{id:"LP6nKU",components:{0:(0,i.jsx)(me.m_,{to:"/vote"})}})})]})})]}),Se&&(0,i.jsxs)(ye.DA,{style:{width:"100%",gap:"12px"},children:[(0,i.jsx)(c.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{oe(Y.N.For),re()},children:(0,i.jsx)(s.cC,{id:"TW/9Cs"})}),(0,i.jsx)(c.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{oe(Y.N.Against),re()},children:(0,i.jsx)(s.cC,{id:"taP3et"})})]}),ke&&(0,i.jsx)(ye.DA,{style:{width:"100%",gap:"12px"},children:(0,i.jsx)(c.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{he()},children:(0,i.jsx)(s.cC,{id:"b24kPi"})})}),Ae&&(0,i.jsxs)(i.Fragment,{children:[Ie&&(0,i.jsx)(ye.m0,{children:(0,i.jsx)(me.Tv.DeprecatedBlack,{children:(0,i.jsx)(s.cC,{id:"bW/jOL",values:{0:Ie.toLocaleString(we,Te)}})})}),(0,i.jsx)(ye.DA,{style:{width:"100%",gap:"12px"},children:(0,i.jsx)(c.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{ge()},disabled:!xe||!(null===(A=ie)||void 0===A?void 0:A.eta)||xe.lt(ie.eta),children:(0,i.jsx)(s.cC,{id:"ZC2VJP"})})})]}),(0,i.jsxs)(vn,{children:[(0,i.jsx)(bn,{children:(0,i.jsxs)(it.uO,{children:[(0,i.jsx)(u.Tz,{gap:"md",children:(0,i.jsxs)(Tn,{children:[(0,i.jsx)(me.Tv.DeprecatedBlack,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"YHpbe1"})}),ie&&(0,i.jsxs)(me.Tv.DeprecatedBlack,{fontWeight:535,children:[ie.forCount.toFixed(0,{groupSeparator:","}),ne&&(0,i.jsx)("span",{style:{fontWeight:485},children:` / ${ne.toExact({groupSeparator:","})}`})]})]})}),(0,i.jsx)(jn,{children:(0,i.jsx)(Cn,{status:"for",percentageString:(null===(M=ie)||void 0===M?void 0:M.forCount.greaterThan(0))?`${(null===(R=Ee)||void 0===R?void 0:R.toFixed(0))??0}%`:"0%"})})]})}),(0,i.jsx)(bn,{children:(0,i.jsxs)(it.uO,{children:[(0,i.jsx)(u.Tz,{gap:"md",children:(0,i.jsxs)(Tn,{children:[(0,i.jsx)(me.Tv.DeprecatedBlack,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"GFvPy6"})}),ie&&(0,i.jsx)(me.Tv.DeprecatedBlack,{fontWeight:535,children:ie.againstCount.toFixed(0,{groupSeparator:","})})]})}),(0,i.jsx)(jn,{children:(0,i.jsx)(Cn,{status:"against",percentageString:(null===(W=ie)||void 0===W||null===($=W.againstCount)||void 0===$?void 0:$.greaterThan(0))?`${(null===(O=_e)||void 0===O?void 0:O.toFixed(0))??0}%`:"0%"})})]})})]}),(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"URmyfc"})}),null===(z=ie)||void 0===z||null===(U=z.details)||void 0===U?void 0:U.map(((e,t)=>(0,i.jsxs)(In,{children:[t+1,": ",$e(e.target),".",e.functionSig,"(",e.callData.split(",").map(((t,n)=>(0,i.jsxs)("span",{children:[$e(t),e.callData.split(",").length-1===n?"":","]},n))),")"]},t)))]}),(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"Nu4oKW"})}),(0,i.jsx)(wn,{children:(0,i.jsx)(dn(),{source:null===(L=ie)||void 0===L?void 0:L.description,renderers:{image:function({...e}){return(0,i.jsx)("img",{...e,style:{width:"100%",height:"100$",objectFit:"cover"},alt:""})}}})})]}),(0,i.jsxs)(u.Tz,{gap:"md",children:[(0,i.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"5nBkYU"})}),(0,i.jsx)(Nn,{href:(null===(F=ie)||void 0===F?void 0:F.proposer)&&ee?(0,Le.E)(ee,null===(G=ie)||void 0===G?void 0:G.proposer,Le.r.ADDRESS):"",children:(0,i.jsx)(dn(),{source:null===(H=ie)||void 0===H?void 0:H.proposer})})]})]})]}),(0,i.jsx)(st.c,{})]})})}function Dn(){return(0,i.jsxs)(nt.Z5,{children:[(0,i.jsx)(nt.AW,{path:"/",element:(0,i.jsx)(Vt,{})}),(0,i.jsx)(nt.AW,{path:":governorIndex/:id",element:(0,i.jsx)(_n,{})}),(0,i.jsx)(nt.AW,{path:"create-proposal",element:(0,i.jsx)(tt,{})})]})}},53286:(e,t,n)=>{var i;n.d(t,{N:()=>i}),function(e){e[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain"}(i||(i={}))},75082:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(76078),a=n(34342),o=n(61592),s=n.n(o);function r({number:e,locale:t,sigFigs:n,fixedDecimals:i,options:o={}}){let s,r;if(s=!t||t&&!a.RF.includes(t)?a.ZW:[t,a.ZW],o.minimumFractionDigits=o.minimumFractionDigits||i,o.maximumFractionDigits=o.maximumFractionDigits||i,o.maximumSignificantDigits=o.maximumSignificantDigits||i?void 0:n,"number"===typeof e)r=i?parseFloat(e.toFixed(i)):e;else{const t=parseFloat(e.toSignificant(n));r=i?parseFloat(t.toFixed(i)):t}return r.toLocaleString(s,o)}function d(e,t,n=a.ZW,o){return e?s().equal(e.quotient,s().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new i.Fraction(1,1e5))?`<${r({number:1e-5,locale:n})}`:r({number:e,locale:n,sigFigs:t,fixedDecimals:o}):"-"}}}]);
//# sourceMappingURL=1271.8f3a9792.chunk.js.map