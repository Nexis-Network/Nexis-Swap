/*! For license information please see 3386.3fa1408d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3386],{16709:(e,t,n)=>{n.d(t,{Z:()=>r});n(45779);const r=n.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},32305:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(92936),i=n(31017),a=n(87254),o=n(88846),s=n(45779),l=n(61152),d=n(54972),c=n(55874),p=n(27296),u=n(54703),h=n(44591),g=n(94284);const f=l.default.div.withConfig({displayName:"AddressInputPanel__InputPanel",componentId:"sc-200b50a1-0"})`
  ${c.lt};
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({theme:e})=>e.surface1};
  z-index: 1;
  width: 100%;
`,m=l.default.div.withConfig({displayName:"AddressInputPanel__ContainerRow",componentId:"sc-200b50a1-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({error:e,theme:t})=>e?t.critical:t.surface3};
  transition: border-color 300ms ${({error:e})=>e?"step-end":"step-start"},
    color 500ms ${({error:e})=>e?"step-end":"step-start"};
  background-color: ${({theme:e})=>e.surface1};
`,x=l.default.div.withConfig({displayName:"AddressInputPanel__InputContainer",componentId:"sc-200b50a1-2"})`
  flex: 1;
  padding: 1rem;
`,w=l.default.input.withConfig({displayName:"AddressInputPanel__Input",componentId:"sc-200b50a1-3"})`
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
`;function j({id:e,className:t="recipient-address-input",label:n,placeholder:c,value:j,onChange:v}){const{chainId:b}=(0,o.useWeb3React)(),y=(0,l.useTheme)(),{address:C,loading:z,name:k}=(0,p.Z)(j),N=(0,s.useCallback)((e=>{const t=e.target.value.replace(/\s+/g,"");v(t)}),[v]),T=Boolean(j.length>0&&!z&&!C);return(0,r.jsx)(f,{id:e,children:(0,r.jsx)(m,{error:T,children:(0,r.jsx)(x,{children:(0,r.jsxs)(h.Tz,{gap:"md",children:[(0,r.jsxs)(g.m0,{children:[(0,r.jsx)(d.Tv.DeprecatedBlack,{color:y.neutral2,fontWeight:535,fontSize:14,children:n??(0,r.jsx)(i.cC,{id:"I3QpvQ"})}),C&&b&&(0,r.jsx)(d.dL,{href:(0,u.E)(b,k??C,u.r.ADDRESS),style:{fontSize:"14px"},children:(0,r.jsx)(i.cC,{id:"4MNk2N"})})]}),(0,r.jsx)(w,{className:t,type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:c??a.ag._({id:"pqGiVy"}),error:T,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:N,value:j})]})})})})}},82731:(e,t,n)=>{n.d(t,{SS:()=>h,sq:()=>d,MN:()=>c,RF:()=>p,uO:()=>u,I8:()=>l});var r=n(61152);const i=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",a=n.p+"static/media/noise.3c7efafc83614205bd1a.png",o=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var s=n(44591);const l=(0,r.default)(s.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=r.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${i});
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
`,c=r.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${o});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,p=r.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${a});
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
`,u=(0,r.default)(s.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=r.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},64381:(e,t,n)=>{n.d(t,{F:()=>i,z:()=>a});var r=n(8171);function i(){return(0,r.U2)(r.TT.v2Everywhere)}function a(){return i()===r.Wn.Enabled}},27296:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(45779),i=n(13446),a=n(36145),o=n(27179);function s(e){const t=(0,i.UJ)(e),n=(0,o.Z)(t||void 0),s=(0,a.Z)(e);return(0,r.useMemo)((()=>({loading:n.loading||s.loading,address:t||s.address,name:n.ENSName?n.ENSName:!t&&s.address&&e||null})),[s.address,s.loading,e,n.ENSName,n.loading,t])}},77778:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$r});var r=n(92936),i=n(31017),a=n(88846),o=n(94284),s=n(62512),l=n(8545),d=n(15966),c=n(54690),p=n(39406),u=n(45779);const h=e=>{const[t,n]=(0,u.useState)(Date.now());return(0,p.Z)((0,u.useCallback)((()=>{n(Date.now())}),[]),e),t};var g=n(70152),f=n(61152),m=n(54972),x=n(54703),w=n(15824),j=n(76078),v=n(57221),b=n(66869);const y=f.default.div.withConfig({displayName:"ChainConnectivityWarning__BodyRow",componentId:"sc-c5044b5c-0"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 12px;
  font-weight: 485;
  font-size: 14px;
  line-height: 20px;
`,C=(0,f.default)(v.Z).withConfig({displayName:"ChainConnectivityWarning__CautionTriangle",componentId:"sc-c5044b5c-1"})`
  color: ${({theme:e})=>e.deprecated_accentWarning};
`,z=(0,f.default)(m.dL).withConfig({displayName:"ChainConnectivityWarning__Link",componentId:"sc-c5044b5c-2"})`
  color: ${({theme:e})=>e.black};
  text-decoration: underline;
`,k=f.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleRow",componentId:"sc-c5044b5c-3"})`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`,N=f.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleText",componentId:"sc-c5044b5c-4"})`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 12px;
`,T=f.default.div.withConfig({displayName:"ChainConnectivityWarning__Wrapper",componentId:"sc-c5044b5c-5"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  bottom: 60px;
  z-index: 2;
  display: none;
  max-width: 348px;
  padding: 16px 20px;
  position: fixed;
  right: 16px;
  @media screen and (min-width: ${b.e.deprecated_upToMedium}px) {
    display: block;
  }
`;function E(){var e;const{chainId:t}=(0,a.useWeb3React)(),n=(0,s.o7)(t),o=null===(e=n)||void 0===e?void 0:e.label;return(0,r.jsxs)(T,{children:[(0,r.jsxs)(k,{children:[(0,r.jsx)(C,{}),(0,r.jsx)(N,{children:(0,r.jsx)(i.cC,{id:"3xf/uJ"})})]}),(0,r.jsxs)(y,{children:[t===j.ChainId.MAINNET?(0,r.jsx)(i.cC,{id:"iXzD8t"}):(0,r.jsx)(i.cC,{id:"3Fxw1j",values:{label:o}})," ",void 0!==n.statusPage&&(0,r.jsxs)("span",{children:[(0,r.jsx)(i.cC,{id:"IHlLC8"})," ",(0,r.jsx)(z,{href:n.statusPage||"",children:(0,r.jsx)(i.cC,{id:"jqVo/k"})})]})]})]})}const A=f.default.div.withConfig({displayName:"Polling__StyledPolling",componentId:"sc-7091c2e5-0"})`
  align-items: center;
  bottom: 0;
  color: ${({theme:e})=>e.neutral3};
  display: none;
  padding: 1rem;
  position: fixed;
  right: 0;
  transition: 250ms ease color;

  a {
    color: unset;
  }
  a:hover {
    color: unset;
    text-decoration: none;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: flex;
  }
`,I=(0,f.default)(m.Tv.DeprecatedSmall).withConfig({displayName:"Polling__StyledPollingBlockNumber",componentId:"sc-7091c2e5-1"})`
  color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: opacity 0.25s ease;
  opacity: ${({breathe:e,hovering:t})=>t?.7:e?1:.5};
  :hover {
    opacity: 1;
  }

  a {
    color: unset;
  }
  a:hover {
    text-decoration: none;
    color: unset;
  }
`,S=f.default.div.withConfig({displayName:"Polling__StyledPollingDot",componentId:"sc-7091c2e5-2"})`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background-color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: 250ms ease background-color;
`,M=f.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,O=f.default.div.withConfig({displayName:"Polling__Spinner",componentId:"sc-7091c2e5-3"})`
  animation: ${M} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  transform: translateZ(0);

  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  transition: 250ms ease border-color;

  left: -3px;
  top: -3px;
`;function R(){const{chainId:e}=(0,a.useWeb3React)(),t=(0,g.ZP)(),[n,p]=(0,u.useState)(!1),[f,j]=(0,u.useState)(!1),v=(0,c.GZ)(),b=(0,d.Q)(),y=(0,u.useMemo)((()=>{var t;return(e?null===(t=(0,s.bt)(e))||void 0===t?void 0:t.blockWaitMsBeforeWarning:void 0)??s.GM}),[e]),C=h(s.p1),z=(0,l.Z)((0,u.useMemo)((()=>({blocksPerFetch:25*(0,s.$V)(e)})),[e])),k=Boolean(!!z&&C-z.mul(1e3).toNumber()>y);(0,u.useEffect)((()=>{if(!t)return;p(!0);const e=setTimeout((()=>p(!1)),1e3);return()=>{clearTimeout(e)}}),[t]);const N=(0,u.useMemo)((()=>e&&t?(0,x.E)(e,t.toString(),x.r.BLOCK):""),[t,e]);return v||b?null:(0,r.jsxs)(o.DA,{children:[(0,r.jsxs)(A,{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[(0,r.jsx)(I,{breathe:n,hovering:f,warning:k,children:(0,r.jsx)(m.dL,{href:N,children:(0,r.jsxs)(w.ud,{text:(0,r.jsx)(i.cC,{id:"MCr7bN"}),children:[t,"\u2002"]})})}),(0,r.jsx)(S,{warning:k,children:n&&(0,r.jsx)(O,{warning:k})})," "]}),k&&(0,r.jsx)(E,{})]})}var F=n(25320),L=n(1356),P=n(62587),_=n(44591),W=n(63194),B=n(68090),D=n.n(B);function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var q=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,o=H(e,["color","size"]);return u.createElement("svg",U({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))}));q.propTypes={color:D().string,size:D().oneOfType([D().string,D().number])},q.displayName="Heart";const V=q,Q="data:image/png;base64,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";var J=n(29021),Z=n(3350),G=n(69780),X=n(82731);const Y=(0,f.default)(_.Tz).withConfig({displayName:"ClaimPopup__StyledClaimPopup",componentId:"sc-9e646efd-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
  border-radius: 20px;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
  max-width: 360px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`,K=(0,f.default)(W.Z).withConfig({displayName:"ClaimPopup__StyledClose",componentId:"sc-9e646efd-1"})`
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`,$=f.keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`,ee=f.default.img.withConfig({displayName:"ClaimPopup__UniToken",componentId:"sc-9e646efd-2"})`
  animation: ${$} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
`;function te(){var e;const{account:t}=(0,a.useWeb3React)(),n=(0,L.uL)(),o=(0,L.Lb)(),s=(0,L.Wt)(J.Lk.SELF_CLAIM),l=(0,L.G_)(),d=(0,u.useCallback)((()=>{l()}),[l]),c=(0,Z.ot)(t),p=(0,Z.jX)(t);return(0,u.useEffect)((()=>{c&&o()}),[c]),(0,r.jsx)(r.Fragment,{children:n&&!s&&(0,r.jsxs)(Y,{gap:"md",children:[(0,r.jsx)(X.sq,{}),(0,r.jsx)(X.RF,{}),(0,r.jsx)(K,{stroke:"white",onClick:o}),(0,r.jsxs)(_.Tz,{style:{padding:"2rem 0",zIndex:10},justify:"center",children:[(0,r.jsx)(ee,{width:"48px",src:Q})," ",(0,r.jsxs)(m.Tv.DeprecatedWhite,{style:{marginTop:"1rem"},fontSize:36,fontWeight:535,children:[null===(e=p)||void 0===e?void 0:e.toFixed(0,{groupSeparator:","}??"-")," UNI"]}),(0,r.jsxs)(m.Tv.DeprecatedWhite,{style:{paddingTop:"1.25rem",textAlign:"center"},fontWeight:535,color:"white",children:[(0,r.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})," ",(0,r.jsx)(i.cC,{id:"ayzlbD"})," ",(0,r.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})]}),(0,r.jsx)(m.Tv.DeprecatedSubHeader,{style:{paddingTop:"0.5rem",textAlign:"center"},color:"white",children:(0,r.jsx)(i.cC,{id:"sPI8ot",components:{0:(0,r.jsx)(V,{size:12})}})})]}),(0,r.jsx)(_.Tz,{style:{zIndex:10},justify:"center",children:(0,r.jsx)(G.DF,{padding:"8px",$borderRadius:"8px",width:"fit-content",onClick:d,children:(0,r.jsx)(i.cC,{id:"Hn7ais"})})})]})})}var ne=n(72741),re=n(8208),ie=n(47236),ae=n(5024),oe=n(45556),se=n(87685),le=n(39671),de=n(27179),ce=n(97978),pe=n(99454),ue=n(66136);const he=(0,f.default)(W.Z).withConfig({displayName:"PopupContent__StyledClose",componentId:"sc-16c44087-0"})`
  position: absolute;
  right: ${({$padding:e})=>`${e}px`};
  top: ${({$padding:e})=>`${e}px`};
  color: ${({theme:e})=>e.neutral2};

  :hover {
    cursor: pointer;
  }
`,ge=f.default.div.withConfig({displayName:"PopupContent__PopupContainer",componentId:"sc-16c44087-1"})`
  display: inline-block;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  position: relative;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  transition: ${({theme:e})=>`visibility ${e.transition.duration.fast} ease-in-out`};

  padding: ${({padded:e})=>e?"20px 35px 20px 20px":"2px 0px"};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
  min-width: 290px;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`}
`,fe=(0,f.default)(o.BA).withConfig({displayName:"PopupContent__RowNoFlex",componentId:"sc-16c44087-2"})`
  flex-wrap: nowrap;
`,me=(0,f.default)(_.Tz).withConfig({displayName:"PopupContent__ColumnContainer",componentId:"sc-16c44087-3"})`
  margin: 0 12px;
`,xe=(0,f.default)(oe.Z).withConfig({displayName:"PopupContent__PopupAlertTriangle",componentId:"sc-16c44087-4"})`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;function we({chainId:e,onClose:t}){const n=(0,s.bt)(e);return(0,r.jsxs)(ge,{padded:!0,children:[(0,r.jsx)(he,{$padding:20,onClick:t}),(0,r.jsxs)(fe,{gap:"12px",children:[(0,r.jsx)(xe,{}),(0,r.jsxs)(me,{gap:"sm",children:[(0,r.jsx)(m.Tv.SubHeader,{color:"neutral2",children:(0,r.jsx)(i.cC,{id:"HV8AwX"})}),(0,r.jsx)(m.Tv.BodySmall,{color:"neutral2",children:(0,r.jsx)(i.cC,{id:"qwMRCz",values:{0:n.label}})})]})]})]})}const je=(0,f.default)(m.Tv.BodySmall).withConfig({displayName:"PopupContent__Descriptor",componentId:"sc-16c44087-5"})`
  ${m.cw}
`;function ve({activity:e,onClick:t,onClose:n}){var i;const a=e.status===se.LND.Confirmed&&!e.cancelled,{ENSName:o}=(0,de.Z)(null===(i=e)||void 0===i?void 0:i.otherAccount);return(0,r.jsxs)(ge,{children:[(0,r.jsx)(he,{$padding:16,onClick:n}),(0,r.jsx)(ae.ZP,{left:a?(0,r.jsx)(_.ZP,{children:(0,r.jsx)(ie.V,{chainId:e.chainId,currencies:e.currencies,images:e.logos,accountAddress:e.otherAccount})}):(0,r.jsx)(xe,{}),title:(0,r.jsx)(m.Tv.SubHeader,{children:e.title}),descriptor:(0,r.jsxs)(je,{color:"neutral2",children:[e.descriptor,o??e.otherAccount]}),onClick:t})]})}function be({chainId:e,hash:t,onClose:n}){const i=(0,pe.kF)(t),a=(0,le.UF)(),{formatNumber:o}=(0,ue.Gb)();if(!i)return null;const s=(0,re.tI)(i,e,a,o);if(!s)return null;return(0,r.jsx)(ve,{activity:s,onClose:n,onClick:()=>window.open((0,x.E)(s.chainId,s.hash,x.r.TRANSACTION),"_blank")})}function ye({orderHash:e,onClose:t}){const n=(0,ce.Aj)(e),i=(0,le.UF)(),a=(0,ne.y2)(),{formatNumber:o}=(0,ue.Gb)();if(!n)return null;const s=(0,re.h1)(n,i,o);if(!s)return null;return(0,r.jsx)(ve,{activity:s,onClose:t,onClick:()=>{var e,t,r,i;return a(n,{inputLogo:null===(t=s)||void 0===t||null===(e=t.logos)||void 0===e?void 0:e[0],outputLogo:null===(i=s)||void 0===i||null===(r=i.logos)||void 0===r?void 0:r[1]})}})}function Ce({removeAfterMs:e,content:t,popKey:n}){const i=(0,L.J3)(),o=()=>i(n);(0,u.useEffect)((()=>{if(null===e)return;const t=setTimeout((()=>{i(n)}),e);return()=>{clearTimeout(t)}}),[n,e,i]);const{chainId:s}=(0,a.useWeb3React)();switch(t.type){case J.kQ.Transaction:return s?(0,r.jsx)(be,{hash:t.hash,chainId:s,onClose:o}):null;case J.kQ.Order:return(0,r.jsx)(ye,{orderHash:t.orderHash,onClose:o});case J.kQ.FailedSwitchNetwork:return(0,r.jsx)(we,{chainId:t.failedSwitchNetwork,onClose:o})}}const ze=f.default.div.withConfig({displayName:"Popups__MobilePopupWrapper",componentId:"sc-2f63a6b0-0"})`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: none;
  padding-left: 20px;
  padding-right: 20px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: block;
    padding-top: 20px;
  `};
`,ke=f.default.div.withConfig({displayName:"Popups__MobilePopupInner",componentId:"sc-2f63a6b0-1"})`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,Ne=(0,f.default)(_.Tz).withConfig({displayName:"Popups__FixedPopupColumn",componentId:"sc-2f63a6b0-2"})`
  position: fixed;
  top: ${({drawerOpen:e})=>64+(e?-50:0)+"px"};
  right: 1rem;
  max-width: 348px !important;
  width: 100%;
  z-index: ${P.k.modal};
  transition: ${({theme:e})=>`top ${e.transition.timing.inOut} ${e.transition.duration.slow}`};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`;function Te(){var e;const[t]=(0,F.Q5)(),n=(0,L.iT)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Ne,{gap:"20px",drawerOpen:t,"data-testid":"popups",children:[(0,r.jsx)(te,{}),n.map((e=>(0,r.jsx)(Ce,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))]}),(null===(e=n)||void 0===e?void 0:e.length)>0&&(0,r.jsx)(ze,{"data-testid":"popups",children:(0,r.jsx)(ke,{children:n.slice(0).reverse().map((e=>(0,r.jsx)(Ce,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))})})]})}var Ee,Ae=n(5985),Ie=n(47583),Se=n(2562),Me=n(64006),Oe=n(69359),Re=n(59001),Fe=n(39818),Le=Object.defineProperty,Pe=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,Be=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,De=(e,t)=>{for(var n in t||(t={}))_e.call(t,n)&&Be(e,n,t[n]);if(Pe)for(var n of Pe(t))We.call(t,n)&&Be(e,n,t[n]);return e},Ue=(e,t)=>{var n={};for(var r in e)_e.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&Pe)for(var r of Pe(e))t.indexOf(r)<0&&We.call(e,r)&&(n[r]=e[r]);return n};(e=>{const t=class{constructor(e,n,r,i){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(i<-1||i>7)throw new RangeError("Mask value out of range");this.size=4*e+17;let o=[];for(let t=0;t<this.size;t++)o.push(!1);for(let t=0;t<this.size;t++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(r);if(this.drawCodewords(s),-1==i){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const n=this.getPenaltyScore();n<e&&(i=t,e=n),this.applyMask(t)}}a(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}static encodeText(n,r){const i=e.QrSegment.makeSegments(n);return t.encodeSegments(i,r)}static encodeBinary(n,r){const i=e.QrSegment.makeBytes(n);return t.encodeSegments([i],r)}static encodeSegments(e,n,i=1,o=40,l=-1,d=!0){if(!(t.MIN_VERSION<=i&&i<=o&&o<=t.MAX_VERSION)||l<-1||l>7)throw new RangeError("Invalid value");let c,p;for(c=i;;c++){const r=8*t.getNumDataCodewords(c,n),i=s.getTotalBits(e,c);if(i<=r){p=i;break}if(c>=o)throw new RangeError("Data too long")}for(const r of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])d&&p<=8*t.getNumDataCodewords(c,r)&&(n=r);let u=[];for(const t of e){r(t.mode.modeBits,4,u),r(t.numChars,t.mode.numCharCountBits(c),u);for(const e of t.getData())u.push(e)}a(u.length==p);const h=8*t.getNumDataCodewords(c,n);a(u.length<=h),r(0,Math.min(4,h-u.length),u),r(0,(8-u.length%8)%8,u),a(u.length%8==0);for(let t=236;u.length<h;t^=253)r(t,8,u);let g=[];for(;8*g.length<u.length;)g.push(0);return u.forEach(((e,t)=>g[t>>>3]|=e<<7-(7&t))),new t(c,n,g,l)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)0==n&&0==r||0==n&&r==t-1||n==t-1&&0==r||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let i=0;i<10;i++)n=n<<1^1335*(n>>>9);const r=21522^(t<<10|n);a(r>>>15==0);for(let a=0;a<=5;a++)this.setFunctionModule(8,a,i(r,a));this.setFunctionModule(8,7,i(r,6)),this.setFunctionModule(8,8,i(r,7)),this.setFunctionModule(7,8,i(r,8));for(let a=9;a<15;a++)this.setFunctionModule(14-a,8,i(r,a));for(let a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,i(r,a));for(let a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,i(r,a));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;a(t>>>18==0);for(let n=0;n<18;n++){const e=i(t,n),r=this.size-11+n%3,a=Math.floor(n/3);this.setFunctionModule(r,a,e),this.setFunctionModule(a,r,e)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;0<=a&&a<this.size&&0<=o&&o<this.size&&this.setFunctionModule(a,o,2!=i&&4!=i)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,1!=Math.max(Math.abs(r),Math.abs(n)))}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw new RangeError("Invalid argument");const i=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],o=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),l=i-s%i,d=Math.floor(s/i);let c=[];const p=t.reedSolomonComputeDivisor(o);for(let a=0,h=0;a<i;a++){let n=e.slice(h,h+d-o+(a<l?0:1));h+=n.length;const r=t.reedSolomonComputeRemainder(n,p);a<l&&n.push(0),c.push(n.concat(r))}let u=[];for(let t=0;t<c[0].length;t++)c.forEach(((e,n)=>{(t!=d-o||n>=l)&&u.push(e[t])}));return a(u.length==s),u}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let r=0;r<this.size;r++)for(let a=0;a<2;a++){const o=t-a,s=0==(t+1&2)?this.size-1-r:r;!this.isFunction[s][o]&&n<8*e.length&&(this.modules[s][o]=i(e[n>>>3],7-(7&n)),n++)}}a(n==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let a=0;a<this.size;a++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[a][o]==n?(r++,5==r?e+=t.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),n=this.modules[a][o],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*t.PENALTY_N3}for(let a=0;a<this.size;a++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][a]==n?(r++,5==r?e+=t.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),n=this.modules[o][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*t.PENALTY_N3}for(let a=0;a<this.size-1;a++)for(let n=0;n<this.size-1;n++){const r=this.modules[a][n];r==this.modules[a][n+1]&&r==this.modules[a+1][n]&&r==this.modules[a+1][n+1]&&(e+=t.PENALTY_N2)}let n=0;for(const t of this.modules)n=t.reduce(((e,t)=>e+(t?1:0)),n);const r=this.size*this.size,i=Math.ceil(Math.abs(20*n-10*r)/r)-1;return a(0<=i&&i<=9),e+=i*t.PENALTY_N4,a(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return a(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let r=1;for(let i=0;i<e;i++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],r),e+1<n.length&&(n[e]^=n[e+1]);r=t.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(e,n){let r=n.map((e=>0));for(const i of e){const e=i^r.shift();r.push(0),n.forEach(((n,i)=>r[i]^=t.reedSolomonMultiply(n,e)))}return r}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(t>>>r&1)*e;return a(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];a(t<=3*this.size);const n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};let n=t;function r(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function i(e,t){return 0!=(e>>>t&1)}function a(e){if(!e)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;const o=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(e){let t=[];for(const n of e)r(n,8,t);return new o(o.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const i=Math.min(e.length-n,3);r(parseInt(e.substr(n,i),10),3*i+1,t),n+=i}return new o(o.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t,n=[];for(t=0;t+2<=e.length;t+=2){let i=45*o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));i+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),r(i,11,n)}return t<e.length&&r(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new o(o.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)r(e,8,t);else if(e<16384)r(2,2,t),r(e,14,t);else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range");r(6,3,t),r(e,21,t)}return new o(o.Mode.ECI,0,t)}static isNumeric(e){return o.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return o.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const r of e){const e=r.mode.numCharCountBits(t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}};let s=o;s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=s})(Ee||(Ee={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};let n=t;n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n})(t=e.QrCode||(e.QrCode={}))})(Ee||(Ee={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};let n=t;n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n})(t=e.QrSegment||(e.QrSegment={}))})(Ee||(Ee={}));var He=Ee,qe={L:He.QrCode.Ecc.LOW,M:He.QrCode.Ecc.MEDIUM,Q:He.QrCode.Ecc.QUARTILE,H:He.QrCode.Ecc.HIGH},Ve=128,Qe="L",Je="#FFFFFF",Ze="#000000",Ge=!1,Xe=4,Ye=.1;function Ke(e,t=0){const n=[];return e.forEach((function(e,r){let i=null;e.forEach((function(a,o){if(!a&&null!==i)return n.push(`M${i+t} ${r+t}h${o-i}v1H${i+t}z`),void(i=null);if(o!==e.length-1)a&&null===i&&(i=o);else{if(!a)return;null===i?n.push(`M${o+t},${r+t} h1v1H${o+t}z`):n.push(`M${i+t},${r+t} h${o+1-i}v1H${i+t}z`)}}))})),n.join("")}function $e(e,t){return e.slice().map(((e,n)=>n<t.y||n>=t.y+t.h?e:e.map(((e,n)=>(n<t.x||n>=t.x+t.w)&&e))))}function et(e,t,n,r){if(null==r)return null;const i=n?Xe:0,a=e.length+2*i,o=Math.floor(t*Ye),s=a/t,l=(r.width||o)*s,d=(r.height||o)*s,c=null==r.x?e.length/2-l/2:r.x*s,p=null==r.y?e.length/2-d/2:r.y*s;let u=null;if(r.excavate){let e=Math.floor(c),t=Math.floor(p);u={x:e,y:t,w:Math.ceil(l+c-e),h:Math.ceil(d+p-t)}}return{x:c,y:p,h:d,w:l,excavation:u}}!function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}}();function tt(e){const t=e,{value:n,size:r=Ve,level:i=Qe,bgColor:a=Je,fgColor:o=Ze,includeMargin:s=Ge,imageSettings:l}=t,d=Ue(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let c=He.QrCode.encodeText(n,qe[i]).getModules();const p=s?Xe:0,h=c.length+2*p,g=et(c,r,s,l);let f=null;null!=l&&null!=g&&(null!=g.excavation&&(c=$e(c,g.excavation)),f=u.createElement("image",{xlinkHref:l.src,height:g.h,width:g.w,x:g.x+p,y:g.y+p,preserveAspectRatio:"none"}));const m=Ke(c,p);return u.createElement("svg",De({height:r,width:r,viewBox:`0 0 ${h} ${h}`},d),u.createElement("path",{fill:a,d:`M0,0 h${h}v${h}H0z`,shapeRendering:"crispEdges"}),u.createElement("path",{fill:o,d:m,shapeRendering:"crispEdges"}),f)}var nt=n(12843);const rt=n.p+"static/media/uniwallet_modal_icon.e17cdec93dd86d3fe3b7.png";var it=n(47278);const at=f.default.button.withConfig({displayName:"DownloadButton__StyledButton",componentId:"sc-51da4631-0"})`
  ${m.iV}
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
  padding: 8px 24px;
  border: none;
  white-space: nowrap;
  background: ${({theme:e,branded:t})=>t?e.accent1:e.surface3};
  border-radius: 12px;

  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme:e,branded:t})=>t?e.deprecated_accentTextLightPrimary:e.neutral1};
`;function ot({onClick:e,branded:t,children:n}){return(0,r.jsx)(at,{branded:t,onClick:e,children:n})}function st({onClick:e,text:t="Download",element:n}){const i=(0,u.useCallback)((()=>{var t;null===(t=e)||void 0===t||t(),(0,it.J)({element:n})}),[n,e]);return(0,r.jsx)(ot,{branded:!0,onClick:i,children:t})}const lt=(0,f.default)(o.m0).withConfig({displayName:"UniwalletModal__UniwalletConnectWrapper",componentId:"sc-550c0f64-0"})`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
`,dt=(0,f.default)(o.m0).withConfig({displayName:"UniwalletModal__HeaderRow",componentId:"sc-550c0f64-1"})`
  display: flex;
`,ct=(0,f.default)(o.m0).withConfig({displayName:"UniwalletModal__QRCodeWrapper",componentId:"sc-550c0f64-2"})`
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.white};
  margin: 24px 32px 20px;
  padding: 10px;
`,pt=f.default.div.withConfig({displayName:"UniwalletModal__Divider",componentId:"sc-550c0f64-3"})`
  border-bottom: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
`;function ut(){const{activationState:e,cancelActivation:t}=(0,Oe.Y)(),[n,a]=(0,u.useState)(),o=!(nt.isIOS||nt.isAndroid)&&e.status===Oe.o.PENDING&&e.connection.type===Re.R.UNISWAP_WALLET_V2&&!!n;(0,u.useEffect)((()=>{Me.uq.connector.events.addListener(Fe.Z.UNI_URI_AVAILABLE,(e=>{e&&a(e)}))}),[]),(0,u.useEffect)((()=>{o&&(0,Ie._P)(Ae.Je.UNIWALLET_CONNECT_MODAL_OPENED)}),[o]);const s=(0,f.useTheme)();return(0,r.jsx)(Se.Z,{isOpen:o,onDismiss:t,children:(0,r.jsxs)(lt,{children:[(0,r.jsxs)(dt,{children:[(0,r.jsx)(m.Tv.SubHeader,{children:(0,r.jsx)(i.cC,{id:"4Ock4M"})}),(0,r.jsx)(m.Tw,{onClick:t})]}),(0,r.jsx)(ct,{children:n&&(0,r.jsx)(tt,{value:n,width:"100%",height:"100%",level:"M",fgColor:s.darkMode?s.surface1:s.black,imageSettings:{src:rt,height:33,width:33,excavate:!1}})}),(0,r.jsx)(pt,{}),(0,r.jsx)(gt,{})]})})}const ht=(0,f.default)(o.m0).withConfig({displayName:"UniwalletModal__InfoSectionWrapper",componentId:"sc-550c0f64-4"})`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 20px;
`;function gt(){return(0,r.jsxs)(ht,{children:[(0,r.jsxs)(_.Tz,{gap:"4px",children:[(0,r.jsx)(m.Tv.SubHeaderSmall,{color:"neutral1",children:(0,r.jsx)(i.cC,{id:"fo1Rgf"})}),(0,r.jsx)(m.Tv.BodySmall,{color:"neutral2",children:(0,r.jsx)(i.cC,{id:"hcdupZ"})})]}),(0,r.jsx)(_.ZP,{children:(0,r.jsx)(st,{element:Ae.xo.UNISWAP_WALLET_MODAL_DOWNLOAD_BUTTON})})]})}var ft=n(68588);const mt=f.default.div.withConfig({displayName:"styled__PopupContainer",componentId:"sc-87184ba3-0"})`
  ${({show:e})=>!e&&"display: none"};
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral1};
  position: fixed;
  z-index: ${P.k.sticky};
  bottom: 40px;
  right: 20px;
  width: 360px;

  user-select: none;
  border-radius: 20px;
  height: 92px;
  border: 1.3px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${b.j$.md}px) {
    bottom: 62px;
  }

  @media only screen and (max-width: ${b.j$.xs}px) {
    width: unset;
    right: 10px;
    left: 10px;
  }
`,xt=(0,f.default)(W.Z).withConfig({displayName:"styled__StyledXButton",componentId:"sc-87184ba3-1"})`
  cursor: pointer;
  position: absolute;
  top: -30px;
  right: 0px;
  padding: 4px;
  border-radius: 50%;

  background-color: ${({theme:e})=>e.surface5};
  color: ${({theme:e})=>e.neutral2};
  ${ft.cR};

  @media only screen and (max-width: ${b.j$.xs}px) {
    top: 8px;
    right: 8px;
  }
`,wt=f.default.div.withConfig({displayName:"styled__Container",componentId:"sc-87184ba3-2"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  gap: 16px;
`,jt=f.default.div.withConfig({displayName:"styled__TextContainer",componentId:"sc-87184ba3-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  color: ${({theme:e})=>e.neutral2};
  padding: 10px 0px 10px;
  line-height: 16px;

  @media only screen and (max-width: ${b.j$.xs}px) {
    width: 220px;
  }
`;var vt=n(18569);function bt(){return bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bt.apply(this,arguments)}function yt(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Ct=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,o=yt(e,["color","size"]);return u.createElement("svg",bt({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.createElement("circle",{cx:"12",cy:"12",r:"10"}),u.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),u.createElement("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}))}));Ct.propTypes={color:D().string,size:D().oneOfType([D().string,D().number])},Ct.displayName="Globe";const zt=Ct;var kt=n(89341);const Nt=f.default.div.withConfig({displayName:"OutageBanner__IconContainer",componentId:"sc-65f16ded-0"})`
  height: 100%;
  margin: 12px 0 0 12px;
  align-self: flex-start;
`,Tt=f.default.div.withConfig({displayName:"OutageBanner__IconBackground",componentId:"sc-65f16ded-1"})`
  background-color: #1f1e02;
  padding: 10px;
  border-radius: 12px;
`,Et=(0,f.default)(mt).withConfig({displayName:"OutageBanner__StyledPopupContainer",componentId:"sc-65f16ded-2"})`
  height: unset;
`,At=(0,f.default)(jt).withConfig({displayName:"OutageBanner__OutageTextContainer",componentId:"sc-65f16ded-3"})`
  padding: 10px 10px 10px 0;
`,It=(0,f.default)(m.dL).withConfig({displayName:"OutageBanner__HelpCenterLink",componentId:"sc-65f16ded-4"})`
  font-size: 14px;
  margin-top: 4px;
`;function St(e){return`hideOutageBanner-${e}`}function Mt({chainId:e}){const[t,n]=(0,u.useState)(!1),a=(0,f.useTheme)();return(0,r.jsx)(Et,{show:!t,children:(0,r.jsxs)(wt,{children:[(0,r.jsx)(Nt,{children:(0,r.jsx)(Tt,{children:(0,r.jsx)(zt,{size:28,color:a.warning2})})}),(0,r.jsxs)(At,{children:[(0,r.jsx)(m.Tv.BodySmall,{lineHeight:"20px",children:(0,r.jsx)(i.cC,{id:"yy+8bn"})}),(0,r.jsx)(m.Tv.LabelMicro,{children:(0,r.jsx)(i.cC,{id:"wrl7g0",values:{0:(0,kt.capitalize)((0,vt.Ld)(e).toLowerCase())}})}),(0,r.jsx)(m.Tv.LabelMicro,{children:(0,r.jsx)(i.cC,{id:"fiD8Rw"})}),(0,r.jsx)(It,{href:"https://support.uniswap.org/hc/en-us/articles/23952001935373-Subgraph-downtime",children:(0,r.jsx)(i.cC,{id:"zwWKhA"})})]}),(0,r.jsx)(xt,{"data-testid":"uniswap-outage-banner",size:24,onClick:()=>{n(!0),sessionStorage.setItem(St(e),"true")}})]})})}var Ot=n(8171);function Rt(){return(0,Ot.U2)(Ot.TT.outageBannerOptimism)}function Ft(){return(0,Ot.U2)(Ot.TT.outageBannerArbitrum)}function Lt(){return(0,Ot.U2)(Ot.TT.outageBannerPolygon)}var Pt=n(6282),_t=n(29696);function Wt(){const{pathname:e}=(0,Pt.TH)(),t=(0,_t.$)(e),n={[j.ChainId.OPTIMISM]:Rt()===Ot.Wn.Enabled,[j.ChainId.ARBITRUM_ONE]:Ft()===Ot.Wn.Enabled,[j.ChainId.POLYGON]:Lt()===Ot.Wn.Enabled,[j.ChainId.MAINNET]:!1,[j.ChainId.GOERLI]:!1,[j.ChainId.SEPOLIA]:!1,[j.ChainId.OPTIMISM_GOERLI]:!1,[j.ChainId.OPTIMISM_SEPOLIA]:!1,[j.ChainId.ARBITRUM_GOERLI]:!1,[j.ChainId.ARBITRUM_SEPOLIA]:!1,[j.ChainId.POLYGON_MUMBAI]:!1,[j.ChainId.CELO]:!1,[j.ChainId.CELO_ALFAJORES]:!1,[j.ChainId.GNOSIS]:!1,[j.ChainId.MOONBEAM]:!1,[j.ChainId.BNB]:!1,[j.ChainId.AVALANCHE]:!1,[j.ChainId.BASE_GOERLI]:!1,[j.ChainId.BASE]:!1,[j.ChainId.NEXIS]:!1},i=(0,u.useMemo)((()=>{const t=e.split("/").find((e=>void 0!==(0,vt.FE)(e)));return t?(0,vt.FE)(t):void 0}),[e]),a=(0,u.useMemo)((()=>t&&i&&n[i]&&!sessionStorage.getItem(St(i))&&[Ae.yJ.EXPLORE_PAGE,Ae.yJ.TOKEN_DETAILS_PAGE,Ae.yJ.POOL_DETAILS_PAGE,Ae.yJ.TOKENS_PAGE].includes(t)),[t,n,i]);return i&&a?(0,r.jsx)(Mt,{chainId:i}):null}var Bt=n(16851),Dt=n(22953),Ut=n(13446),Ht=n(16709),qt=n(27296),Vt=n(32305);const Qt=(0,f.default)(_.Tz).withConfig({displayName:"AddressClaimModal__ContentWrapper",componentId:"sc-d11108dc-0"})`
  width: 100%;
`,Jt=(0,f.default)(X.I8).withConfig({displayName:"AddressClaimModal__ModalUpper",componentId:"sc-d11108dc-1"})`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
`,Zt=f.default.div.withConfig({displayName:"AddressClaimModal__ConfirmOrLoadingWrapper",componentId:"sc-d11108dc-2"})`
  width: 100%;
  padding: 24px;
  position: relative;
  background: ${({activeBG:e})=>e&&"radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"};
`,Gt=(0,f.default)(_.lg).withConfig({displayName:"AddressClaimModal__ConfirmedIcon",componentId:"sc-d11108dc-3"})`
  padding: 60px 0;
`;function Xt({isOpen:e,onDismiss:t}){var n,s;const{chainId:l}=(0,a.useWeb3React)(),[d,c]=(0,u.useState)("");const{address:p}=(0,qt.Z)(d),[h,g]=(0,u.useState)(!1),{claimCallback:f}=(0,Z.NH)(p),w=(0,Z.jX)(p),j=(0,Z.ot)(p),[v,b]=(0,u.useState)(),y=(0,pe.ub)(v??""),C=v&&!y;function z(){g(!1),b(void 0),c(""),t()}return(0,r.jsxs)(Se.Z,{isOpen:e,onDismiss:z,maxHeight:90,children:[!h&&(0,r.jsxs)(Qt,{gap:"lg",children:[(0,r.jsxs)(Jt,{children:[(0,r.jsx)(X.sq,{}),(0,r.jsx)(X.RF,{}),(0,r.jsxs)(X.uO,{gap:"md",children:[(0,r.jsxs)(o.m0,{children:[(0,r.jsx)(m.Tv.DeprecatedWhite,{fontWeight:535,children:(0,r.jsx)(i.cC,{id:"OT2U3c"})}),(0,r.jsx)(m.Tw,{onClick:z,style:{zIndex:99},stroke:"white"})]}),(0,r.jsx)(m.Tv.DeprecatedWhite,{fontWeight:535,fontSize:36,children:(0,r.jsx)(i.cC,{id:"191ekK",values:{0:null===(n=w)||void 0===n?void 0:n.toFixed(0,{groupSeparator:","}??"-")}})})]}),(0,r.jsx)(X.SS,{})]}),(0,r.jsxs)(_.Tz,{gap:"md",style:{padding:"1rem",paddingTop:"0"},justify:"center",children:[(0,r.jsx)(m.Tv.DeprecatedSubHeader,{fontWeight:535,children:(0,r.jsx)(i.cC,{id:"8Utjse"})}),(0,r.jsx)(Vt.Z,{value:d,onChange:function(e){c(e)}}),p&&!j&&(0,r.jsx)(m.Tv.DeprecatedError,{error:!0,children:(0,r.jsx)(i.cC,{id:"YRWR01"})}),(0,r.jsx)(G.DF,{disabled:!(0,Bt.isAddress)(p??"")||!j,padding:"16px 16px",width:"100%",$borderRadius:"12px",mt:"1rem",onClick:function(){g(!0),f().then((e=>{b(e)})).catch((e=>{g(!1),console.log(e)}))},children:(0,r.jsx)(i.cC,{id:"Vv5NYl"})})]})]}),(h||C)&&(0,r.jsxs)(Zt,{activeBG:!0,children:[(0,r.jsx)(X.RF,{}),(0,r.jsx)(X.MN,{desaturate:!0}),(0,r.jsxs)(o.m0,{children:[(0,r.jsx)("div",{}),(0,r.jsx)(m.Tw,{onClick:z,style:{zIndex:99},stroke:"black"})]}),(0,r.jsx)(Gt,{children:C?(0,r.jsx)(m.M3,{width:"72px",src:Q,alt:"UNI logo"}):(0,r.jsx)(m._1,{src:Ht.Z,alt:"loader",size:"90px"})}),(0,r.jsxs)(_.Tz,{gap:"100px",justify:"center",children:[(0,r.jsxs)(_.Tz,{gap:"md",justify:"center",children:[(0,r.jsx)(m.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:C?(0,r.jsx)(i.cC,{id:"hRWvpI"}):(0,r.jsx)(i.cC,{id:"KvG1xW"})}),!C&&(0,r.jsx)(Dt.xv,{fontSize:36,color:"#ff007a",fontWeight:535,children:(0,r.jsx)(i.cC,{id:"191ekK",values:{0:null===(s=w)||void 0===s?void 0:s.toFixed(0,{groupSeparator:","}??"-")}})}),p&&(0,r.jsx)(m.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:(0,r.jsx)(i.cC,{id:"PqfYW9",values:{0:(0,Ut.Xn)(p)}})})]}),C&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(m.Tv.DeprecatedSubHeader,{fontWeight:535,color:"black",children:[(0,r.jsxs)("span",{role:"img","aria-label":"party-hat",children:["\ud83c\udf89"," "]}),(0,r.jsx)(i.cC,{id:"zArj19"}),(0,r.jsx)("span",{role:"img","aria-label":"party-hat",children:"\ud83c\udf89"})]})}),h&&!v&&(0,r.jsx)(m.Tv.DeprecatedSubHeader,{color:"black",children:(0,r.jsx)(i.cC,{id:"oG26Rt"})}),h&&v&&!C&&l&&v&&(0,r.jsx)(m.dL,{href:(0,x.E)(l,v,x.r.TRANSACTION),style:{zIndex:99},children:(0,r.jsx)(i.cC,{id:"yVxaEc"})})]})]})]})}var Yt=n(62875);const Kt=(0,f.default)(_.ZP).withConfig({displayName:"ConnectedAccountBlocked__ContentWrapper",componentId:"sc-a807755-0"})`
  align-items: center;
  margin: 32px;
  text-align: center;
  font-size: 12px;
`;function $t(e){const t=(0,f.useTheme)();return(0,r.jsx)(Se.Z,{isOpen:e.isOpen,onDismiss:Function.prototype(),children:(0,r.jsxs)(Kt,{children:[(0,r.jsx)(Yt.$,{size:"22px"}),(0,r.jsx)(m.Tv.DeprecatedLargeHeader,{lineHeight:2,marginBottom:1,marginTop:1,children:(0,r.jsx)(i.cC,{id:"c2y/7S"})}),(0,r.jsx)(m.Tv.DeprecatedDarkGray,{fontSize:12,marginBottom:12,children:e.account}),(0,r.jsxs)(m.Tv.DeprecatedMain,{fontSize:14,marginBottom:12,children:[(0,r.jsx)(i.cC,{id:"hycRWp"})," ",(0,r.jsx)(m.dL,{href:"https://help.uniswap.org/en/articles/6149816",children:(0,r.jsx)(i.cC,{id:"Tz0GSZ"})}),"."]}),(0,r.jsxs)(m.Tv.DeprecatedMain,{fontSize:12,children:[(0,r.jsx)(i.cC,{id:"WpREeE"})," "]}),(0,r.jsx)(m.WD,{toCopy:"compliance@uniswap.org",fontSize:14,iconSize:16,color:t.accent1,iconPosition:"right",children:"compliance@uniswap.org"})]})})}var en,tn=n(13678);function nn(e){const{config:t}=(0,tn.useConfig)(e);return t}function rn(){var e;const t=nn(en.quickRouteChains),n=(0,Ot.c0)(),r=t.get(en.quickRouteChains,[]),i=null===(e=n.configs[en.quickRouteChains])||void 0===e?void 0:e[en.quickRouteChains],a=Array.isArray(i)?i:r;return a.every((e=>Object.values(j.ChainId).includes(e)))?a:(console.error("feature flag config chains contain invalid ChainId"),[])}!function(e){e.quickRouteChains="quick_route_chains"}(en||(en={}));var an=n(19430),on=n(642),sn=n(82593),ln=n(80530);function dn(){return(0,Ot.U2)(Ot.TT.gqlTokenLists)}var cn=n(96537),pn=n(39021),un=n(95807);var hn=n(51966),gn=n(64002),fn=n(79535),mn=n(98191),xn=n(76924),wn=n(20360),jn=n(87308),vn=n(64381),bn=n(64505);const yn=f.default.div.withConfig({displayName:"FeatureFlagModal__StyledModal",componentId:"sc-61d4ef5f-0"})`
  position: fixed;
  display: flex;
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);
  width: 400px;
  height: fit-content;
  color: ${({theme:e})=>e.neutral1};
  font-size: 18px;
  padding: 20px 0px;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  z-index: ${P.k.modal};
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (max-width: ${b.j$.sm}px) {
    max-height: 80vh;
  }
`;function Cn({open:e,children:t}){return e?(0,r.jsx)(yn,{children:t}):null}const zn=(0,f.default)(_.ZP).withConfig({displayName:"FeatureFlagModal__FlagsColumn",componentId:"sc-61d4ef5f-1"})`
  max-height: 600px;
  overflow-y: auto;
  padding: 0px 20px;

  @media screen and (max-width: ${b.j$.sm}px) {
    max-height: unset;
  }
`,kn=f.default.div.withConfig({displayName:"FeatureFlagModal__Row",componentId:"sc-61d4ef5f-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
`,Nn=f.default.button.withConfig({displayName:"FeatureFlagModal__CloseButton",componentId:"sc-61d4ef5f-3"})`
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.neutral1};
`,Tn=f.default.button.withConfig({displayName:"FeatureFlagModal__ToggleButton",componentId:"sc-61d4ef5f-4"})`
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.neutral1};
`,En=(0,f.default)(kn).withConfig({displayName:"FeatureFlagModal__Header",componentId:"sc-61d4ef5f-5"})`
  padding: 0px 16px 8px;
  font-weight: 535;
  font-size: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};
`,An=f.default.span.withConfig({displayName:"FeatureFlagModal__FlagName",componentId:"sc-61d4ef5f-6"})`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral1};
`,In=f.default.span.withConfig({displayName:"FeatureFlagModal__FlagGroupName",componentId:"sc-61d4ef5f-7"})`
  font-size: 20px;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
`,Sn=f.default.span.withConfig({displayName:"FeatureFlagModal__FlagDescription",componentId:"sc-61d4ef5f-8"})`
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  align-items: center;
`,Mn=f.default.select.withConfig({displayName:"FeatureFlagModal__FlagVariantSelection",componentId:"sc-61d4ef5f-9"})`
  border-radius: 12px;
  padding: 8px;
  background: ${({theme:e})=>e.surface3};
  font-weight: 535;
  font-size: 16px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;

  :hover {
    background: ${({theme:e})=>e.surface3};
  }
`,On=f.default.div.withConfig({displayName:"FeatureFlagModal__FlagInfo",componentId:"sc-61d4ef5f-10"})`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`,Rn=f.default.button.withConfig({displayName:"FeatureFlagModal__SaveButton",componentId:"sc-61d4ef5f-11"})`
  border-radius: 12px;
  padding: 8px;
  margin: 0px 20px;
  background: ${({theme:e})=>e.surface3};
  font-weight: 535;
  font-size: 16px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;

  :hover {
    background: ${({theme:e})=>e.surface3};
  }
`;function Fn({option:e}){return(0,r.jsx)("option",{value:e,children:e})}function Ln({name:e,children:t}){const n=u.Children.toArray(t).filter((e=>e instanceof Object&&"type"in e&&e.type===Pn)).map((({props:e})=>e)).filter((({variant:e})=>{const t=Object.values(e);return t.includes(Ot.Wn.Control)&&t.includes(Ot.Wn.Enabled)})),i=(0,bn.yW)(Ot.Kd),a=n.every((({value:e})=>e===Ot.Wn.Enabled)),o=(0,u.useCallback)((()=>{i((e=>({...e,...n.reduce(((e,{featureFlag:t})=>({...e,[t]:a?Ot.Wn.Control:Ot.Wn.Enabled})),{})})))}),[a,i,n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(kn,{children:[(0,r.jsx)(In,{children:e}),(0,r.jsxs)(Tn,{onClick:o,children:[a?"Disable":"Enable"," group"]})]},e),t]})}function Pn({value:e,variant:t,featureFlag:n,label:i}){const a=(0,Ot.uE)(),[o,s]=(0,u.useState)(0);return(0,r.jsxs)(kn,{children:[(0,r.jsxs)(On,{children:[(0,r.jsx)(An,{children:n}),(0,r.jsx)(Sn,{children:i})]}),(0,r.jsx)(Mn,{id:n,onChange:e=>{a(n,e.target.value),s(o+1)},value:e,children:Object.values(t).map((e=>(0,r.jsx)(Fn,{option:e},e)))})]},n)}function _n({configName:e,label:t,options:n,selected:i,parser:a}){const o=(0,Ot.FC)();return(0,r.jsxs)(kn,{children:[(0,r.jsxs)(On,{children:[(0,r.jsx)(An,{children:e}),(0,r.jsx)(Sn,{children:t})]}),(0,r.jsx)("select",{multiple:!0,onChange:t=>{const n=Array.from(t.target.selectedOptions,(e=>a(e.value)));o(e,{[e]:n})},children:n.map((e=>(0,r.jsx)("option",{value:e,selected:i.includes(e),children:e},e)))})]},e)}function Wn(){const e=(0,L.Wt)(J.Lk.FEATURE_FLAGS),t=(0,L.pP)();return(0,r.jsxs)(Cn,{open:e,children:[(0,r.jsxs)(En,{children:["Feature Flag Settings",(0,r.jsx)(Nn,{onClick:t,children:(0,r.jsx)(W.Z,{size:24})})]}),(0,r.jsxs)(zn,{children:[(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,ln.UY)(),featureFlag:Ot.TT.gatewayDNSUpdate,label:"Use gateway URL for routing api"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,fn.T)(),featureFlag:Ot.TT.sendEnabled,label:"Send on swap component"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,ln.M7)(),featureFlag:Ot.TT.gatewayDNSUpdateAll,label:"Use gateway URL for all /v2 endpoints"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,on.U)(),featureFlag:Ot.TT.eip6963Enabled,label:"Enable EIP-6963: Multi Injected Provider Discovery"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,jn.V)(),featureFlag:Ot.TT.feesEnabled,label:"Enable Swap Fees"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,pn.C)(),featureFlag:Ot.TT.limitsEnabled,label:"Enable Limits"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,un.M)(),featureFlag:Ot.TT.limitsFees,label:"Enable Limits fees"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,sn.I)(),featureFlag:Ot.TT.fallbackProvider,label:"Enable fallback provider"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,an.A)(),featureFlag:Ot.TT.currencyConversion,label:"Enable currency conversion"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,Ot.U2)(Ot.TT.multichainUX),featureFlag:Ot.TT.multichainUX,label:"Updated Multichain UX"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,xn.p)(),featureFlag:Ot.TT.uniconV2,label:"Unicon V2"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,cn.b)(),featureFlag:Ot.TT.exitAnimation,label:"Landing page exit animation"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,vn.F)(),featureFlag:Ot.TT.v2Everywhere,label:"Enable V2 Everywhere"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,gn.V)(),featureFlag:Ot.TT.realtime,label:"Realtime activity updates"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:dn(),featureFlag:Ot.TT.gqlTokenLists,label:"Enable GQL Token Lists"}),(0,r.jsxs)(Ln,{name:"Quick routes",children:[(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,hn.B)(),featureFlag:Ot.TT.quickRouteMainnet,label:"Enable quick routes for Mainnet"}),(0,r.jsx)(_n,{selected:rn(),options:Object.values(j.ChainId).filter((e=>!isNaN(Number(e)))),parser:Number.parseInt,configName:en.quickRouteChains,label:"Enable quick routes for these chains"})]}),(0,r.jsx)(Ln,{name:"UniswapX Flags",children:(0,r.jsx)(Pn,{variant:Ot.Wn,value:(0,wn.M)(),featureFlag:Ot.TT.uniswapXSyntheticQuote,label:"Force synthetic quotes for UniswapX"})}),(0,r.jsxs)(Ln,{name:"Outage Banners",children:[(0,r.jsx)(Pn,{variant:Ot.Wn,value:Ft(),featureFlag:Ot.TT.outageBannerArbitrum,label:"Outage Banner for Arbitrum"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:Lt(),featureFlag:Ot.TT.outageBannerPolygon,label:"Outage Banner for Polygon"}),(0,r.jsx)(Pn,{variant:Ot.Wn,value:Rt(),featureFlag:Ot.TT.outageBannerOptimism,label:"Outage Banner for Optimism"})]}),(0,r.jsx)(Ln,{name:"Debug",children:(0,r.jsx)(Pn,{variant:mn.P,value:(0,mn.X)(),featureFlag:Ot.TT.traceJsonRpc,label:"Enables JSON-RPC tracing"})})]}),(0,r.jsx)(Rn,{onClick:()=>window.location.reload(),children:"Reload"})]})}var Bn=n(65075);const Dn=["eth","eth_arbitrum","eth_optimism","eth_polygon","weth","wbtc","matic_polygon","polygon","usdc_arbitrum","usdc_optimism","usdc_polygon","usdc","usdt"];var Un,Hn=n(64370);const qn=[se.qop.Ethereum,se.qop.Polygon,se.qop.Arbitrum,se.qop.Optimism],Vn={[se.qop.Ethereum]:{[null===(Un=j.WETH9[j.ChainId.MAINNET])||void 0===Un?void 0:Un.address.toLowerCase()]:"weth",[Hn.Hz.address.toLowerCase()]:"usdc",[Hn.AA.address.toLowerCase()]:"usdt",[Hn.ML.address.toLowerCase()]:"wbtc",[Hn.Al.address.toLowerCase()]:"polygon",native:"eth"},[se.qop.Arbitrum]:{[Hn.pj.address.toLowerCase()]:"usdc_arbitrum",native:"eth_arbitrum"},[se.qop.Optimism]:{[Hn.SP.address.toLowerCase()]:"usdc_optimism",native:"eth_optimism"},[se.qop.Polygon]:{[Hn.QF.address.toLowerCase()]:"usdc_polygon",[Hn.H8.address.toLowerCase()]:"eth_polygon",native:"matic_polygon"}};function Qn(e,t){const n=(0,vt.Qj)(t);if(!e||!n)return"eth";if(qn.includes(n)){var r;return(null===(r=Vn[n])||void 0===r?void 0:r[e.toLowerCase()])??"eth"}return"eth"}function Jn(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(d){return void n(d)}s.done?t(l):Promise.resolve(l).then(r,i)}function Zn(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){Jn(a,r,i,o,s,"next",e)}function s(e){Jn(a,r,i,o,s,"throw",e)}o(void 0)}))}}const Gn="#1c1c1e",Xn=f.default.div.withConfig({displayName:"FiatOnrampModal__Wrapper",componentId:"sc-a32a264-0"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?Gn:t.white};
  border-radius: 20px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  flex: 1 1;
  min-width: 375px;
  position: relative;
  width: 100%;
`,Yn=(0,f.default)(m.Tv.BodyPrimary).withConfig({displayName:"FiatOnrampModal__ErrorText",componentId:"sc-a32a264-1"})`
  color: ${({theme:e})=>e.critical};
  margin: auto !important;
  text-align: center;
  width: 90%;
`,Kn=f.default.iframe.withConfig({displayName:"FiatOnrampModal__StyledIframe",componentId:"sc-a32a264-2"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?Gn:t.white};
  border-radius: 12px;
  bottom: 0;
  left: 0;
  height: calc(100% - 16px);
  margin: 8px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 16px);
`,$n=(0,f.default)(m._1).withConfig({displayName:"FiatOnrampModal__StyledSpinner",componentId:"sc-a32a264-3"})`
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
`,er=f.default.div.withConfig({displayName:"FiatOnrampModal__MoonpayTextWrapper",componentId:"sc-a32a264-4"})`
  position: absolute;
  bottom: 20px;
  margin: auto;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
`;function tr(){const{account:e}=(0,a.useWeb3React)(),t=(0,f.useTheme)(),n=(0,Bn.Gv)(),o=(0,L._x)(),s=(0,L.Wt)(J.Lk.FIAT_ONRAMP),{network:l,tokenAddress:d}=function(e){const t=e.split("/");return{network:t.length>2?t[t.length-2]:void 0,tokenAddress:t.length>2?t[t.length-1]:void 0}}(location.pathname),[c,p]=(0,u.useState)(null),[h,g]=(0,u.useState)(null),[x,w]=(0,u.useState)(!1),j=(0,Pt.oQ)("/swap"),v=(0,u.useCallback)(Zn((function*(){if(e){w(!0),g(null);try{const r="https://us-central1-uniswap-mobile.cloudfunctions.net/signMoonpayLinkV2?platform=web&env=production",i=yield fetch(r,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({theme:n?"dark":"light",colorCode:t.accent1,defaultCurrencyCode:Qn(d,l),redirectUrl:j,walletAddresses:JSON.stringify(Dn.reduce(((t,n)=>({...t,[n]:e})),{}))})}),{url:a}=yield i.json();p(a)}catch(r){console.log("there was an error fetching the link",r),g(r.toString())}finally{w(!1)}}else g("Please connect an account before making a purchase.")})),[e,n,l,j,t.accent1,d]);return(0,u.useEffect)((()=>{v()}),[v]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(Se.Z,{isOpen:s,onDismiss:()=>o(),height:80,children:[(0,r.jsx)(Xn,{"data-testid":"fiat-onramp-modal",isDarkMode:n,children:h?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Tv.MediumHeader,{children:(0,r.jsx)(i.cC,{id:"hn5VGM"})}),(0,r.jsxs)(Yn,{children:[(0,r.jsx)(i.cC,{id:"ywDBfs"}),(0,r.jsx)("br",{}),h]})]}):x?(0,r.jsx)($n,{src:Ht.Z,alt:"loading spinner",size:"90px"}):(0,r.jsx)(Kn,{src:c??"",frameBorder:"0",title:"fiat-onramp-iframe",isDarkMode:n})}),(0,r.jsx)(er,{children:(0,r.jsx)(m.Tv.BodySmall,{color:"neutral3",children:(0,r.jsx)(i.cC,{id:"Z8A0Ah"})})})]})})}var nr=n(37322);const rr=(0,f.default)(_.ZP).withConfig({displayName:"UkDisclaimerModal__Wrapper",componentId:"sc-8f9673eb-0"})`
  padding: 8px;
`,ir=(0,f.default)(_.ZP).withConfig({displayName:"UkDisclaimerModal__ButtonContainer",componentId:"sc-8f9673eb-1"})`
  padding: 8px 12px 4px;
`,ar=(0,f.default)(m.oD).withConfig({displayName:"UkDisclaimerModal__CloseIconWrapper",componentId:"sc-8f9673eb-2"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  justify-content: flex-end;
  padding: 8px 0px 4px;

  :focus {
    text-decoration: none;
  }
`,or=(0,f.default)(G.UH).withConfig({displayName:"UkDisclaimerModal__StyledThemeButton",componentId:"sc-8f9673eb-3"})`
  width: 100%;
`;function sr(){const e=(0,L.Wt)(J.Lk.UK_DISCLAIMER),t=(0,L._x)();return(0,r.jsx)(Se.Z,{isOpen:e,onDismiss:t,children:(0,r.jsxs)(rr,{gap:"md",children:[(0,r.jsx)(ar,{onClick:()=>t(),children:(0,r.jsx)(W.Z,{size:24})}),(0,r.jsxs)(_.ZP,{gap:"sm",children:[(0,r.jsx)(m.Tv.HeadlineLarge,{padding:"0px 8px",fontSize:"24px",lineHeight:"32px",children:(0,r.jsx)(i.cC,{id:"mCcDO+"})}),(0,r.jsx)(m.Tv.BodyPrimary,{padding:"8px 8px 12px",lineHeight:"24px",children:nr.Fb})]}),(0,r.jsx)(ir,{gap:"md",children:(0,r.jsx)(or,{size:G.qE.large,emphasis:G.eI.medium,onClick:()=>t(),children:(0,r.jsx)(i.cC,{id:"1QfxQT"})})})]})})}var lr=n(61182),dr=n(4168),cr=n(81205);const pr=f.default.div.withConfig({displayName:"PrivacyPolicy__Wrapper",componentId:"sc-1c9e427d-0"})`
  max-height: 70vh;
  overflow: auto;
  padding: 0 1rem;
`,ur=(0,f.default)(lr.ZP).withConfig({displayName:"PrivacyPolicy__StyledExternalCard",componentId:"sc-1c9e427d-1"})`
  background-color: ${({theme:e})=>e.accent2};
  padding: 0.5rem;
  width: 100%;

  :hover,
  :focus,
  :active {
    background-color: ${({theme:e})=>e.neutral3};
  }
`,hr=f.default.div.withConfig({displayName:"PrivacyPolicy__HoverText",componentId:"sc-1c9e427d-2"})`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`,gr=(0,f.default)(dr.Z).withConfig({displayName:"PrivacyPolicy__StyledLinkOut",componentId:"sc-1c9e427d-3"})`
  transform: rotate(230deg);
`,fr=[{name:"Auto Router",description:(0,r.jsx)(i.cC,{id:"65qppU"})},{name:"Infura",description:(0,r.jsx)(i.cC,{id:"tQrPsC"})},{name:"TRM Labs",description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.cC,{id:"tJr3JG"})," ",(0,r.jsx)(m.dL,{href:"https://support.uniswap.org/hc/en-us/articles/8671777747597-Address-Screening-Guide",children:(0,r.jsx)(i.cC,{id:"zwWKhA"})})]})},{name:"Google Analytics & Amplitude",description:(0,r.jsx)(i.cC,{id:"CaOBWO"})},{name:"The Graph",description:(0,r.jsx)(i.cC,{id:"tgKCbJ"})}];function mr(){const e=(0,u.useRef)(),t=(0,L.Wt)(J.Lk.PRIVACY_POLICY),n=(0,L.OG)();return(0,u.useEffect)((()=>{t&&(0,Ie._P)(Ae.Gz.PAGE_VIEWED,{category:"Modal",action:"Show Legal"})}),[t]),(0,r.jsx)(Se.Z,{isOpen:t,onDismiss:()=>n(),children:(0,r.jsxs)(_.Tz,{gap:"md",ref:e,children:[(0,r.jsxs)(o.m0,{padding:"1rem 1rem 0.5rem 1rem",children:[(0,r.jsx)(m.Tv.DeprecatedMediumHeader,{children:(0,r.jsx)(i.cC,{id:"t6rD0p"})}),(0,r.jsx)(hr,{onClick:()=>n(),children:(0,r.jsx)(W.Z,{size:24})})]}),(0,r.jsx)(xr,{})]})})}function xr(){return(0,r.jsx)(pr,{draggable:"true",onTouchMove:e=>{nt.isMobile&&e.stopPropagation()},children:(0,r.jsxs)(_.Tz,{gap:"16px",children:[(0,r.jsxs)(_.Tz,{gap:"sm",style:{width:"100%"},children:[(0,r.jsx)(ur,{children:(0,r.jsx)(m.dL,{href:"https://uniswap.org/terms-of-service",children:(0,r.jsxs)(o.m0,{children:[(0,r.jsxs)(o.BA,{gap:"4px",children:[(0,r.jsx)(cr.Z,{size:20}),(0,r.jsx)(m.Tv.DeprecatedMain,{fontSize:14,color:"accent1",children:(0,r.jsx)(i.cC,{id:"iFR8Ye"})})]}),(0,r.jsx)(gr,{size:20})]})})}),(0,r.jsx)(ur,{children:(0,r.jsx)(m.dL,{href:"https://uniswap.org/privacy-policy/",children:(0,r.jsxs)(o.m0,{children:[(0,r.jsxs)(o.BA,{gap:"4px",children:[(0,r.jsx)(cr.Z,{size:20}),(0,r.jsx)(m.Tv.DeprecatedMain,{fontSize:14,color:"accent1",children:(0,r.jsx)(i.cC,{id:"LcET2C"})})]}),(0,r.jsx)(gr,{size:20})]})})})]}),(0,r.jsx)(m.Tv.DeprecatedMain,{fontSize:14,children:(0,r.jsx)(i.cC,{id:"c2lDX2"})}),(0,r.jsxs)(_.Tz,{gap:"md",children:[fr.map((({name:e,description:t},n)=>(0,r.jsx)(lr.OY,{children:(0,r.jsxs)(_.Tz,{gap:"sm",children:[(0,r.jsxs)(o.BA,{gap:"4px",children:[(0,r.jsx)(cr.Z,{size:18}),(0,r.jsx)(m.Tv.DeprecatedMain,{fontSize:14,color:"neutral1",children:e})]}),(0,r.jsx)(m.Tv.DeprecatedMain,{fontSize:14,children:t})]})},n))),(0,r.jsx)(m.Tv.DeprecatedBody,{fontSize:12,children:(0,r.jsx)(o.ZP,{justify:"center",marginBottom:"1rem",children:(0,r.jsx)(m.dL,{href:"https://help.uniswap.org/en/articles/5675203-terms-of-service-faq",children:(0,r.jsx)(i.cC,{id:"zwWKhA"})})})})]})]})})}function wr(){return wr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wr.apply(this,arguments)}function jr(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var vr=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,o=jr(e,["color","size"]);return u.createElement("svg",wr({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.createElement("circle",{cx:"12",cy:"12",r:"3"}),u.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))}));vr.propTypes={color:D().string,size:D().oneOfType([D().string,D().number])},vr.displayName="Settings";const br=vr;function yr(){return yr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yr.apply(this,arguments)}function Cr(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var zr=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,o=Cr(e,["color","size"]);return u.createElement("svg",yr({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.createElement("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),u.createElement("line",{x1:"4",y1:"22",x2:"4",y2:"15"}))}));zr.propTypes={color:D().string,size:D().oneOfType([D().string,D().number])},zr.displayName="Flag";const kr=zr;var Nr=n(33816);const Tr=f.default.div.withConfig({displayName:"DevFlagsBox__Box",componentId:"sc-d4209ce6-0"})`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: ${({theme:e})=>e.surface1};
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(34, 34, 34, 0.04);
  user-select: none;
  z-index: ${P.k.fixed};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    bottom: 70px;
  }
`,Er=(e,t)=>{const n=(0,tn.useGate)(e);if(n){const{value:i}=n,a=t[e],o=a===Ot.Wn.Enabled;if(a&&i!==o)return(0,r.jsxs)(m.Tv.LabelSmall,{children:[e,": ",a]},e)}return null},Ar=(e,t)=>{const n=nn(e);if(n){const i=n.getValue(),a=t[e];if(a&&i!==a)return(0,r.jsxs)(m.Tv.LabelSmall,{children:[e,": ",JSON.stringify(a[e])]},e)}return null},Ir=(0,f.default)(_.lg).withConfig({displayName:"DevFlagsBox__SettingsContainer",componentId:"sc-d4209ce6-1"})`
  width: 30px;
  height: 30px;
  justify-content: center;
  border-radius: 12px;
  :hover {
    background: ${({theme:e})=>e.surface2};
  }
`;function Sr(){const e=(0,bn.Dv)(Ot.Kd),t=(0,u.useMemo)((()=>Object.values(Ot.TT)),[]),n=(0,bn.Dv)(Ot.zp),i=(0,u.useMemo)((()=>Object.values(en)),[]),a=t.map((t=>Er(t,e)));i.forEach((e=>a.push(Ar(e,n))));const s=a.some((e=>null!==e)),[l,d]=(0,u.useState)(!1),c=(0,L.xk)(J.Lk.FEATURE_FLAGS),p=(0,L._x)();return(0,r.jsxs)(Tr,{onClick:()=>{d((e=>!e)),p()},children:[l?(0,r.jsxs)(o.m0,{children:[(0,r.jsxs)(m.Tv.SubHeader,{children:[(0,Nr.aD)()&&"Local Overrides",(0,Nr.mb)()&&"Staging Overrides"]}),(0,r.jsx)(Ir,{onClick:e=>{e.stopPropagation(),c()},children:(0,r.jsx)(br,{width:15,height:15})})]}):(0,r.jsx)(kr,{}),l&&(s?a:(0,r.jsx)(m.Tv.LabelSmall,{children:"No overrides"}))]})}var Mr=n(47856);var Or=n(3464),Rr=n(66284),Fr=n(21989),Lr=n(5850),Pr=n(27519),_r=n(60040),Wr=n(15288),Br=n(58690),Dr=n(70518),Ur=n(27389),Hr=n(33426),qr=n(47263),Vr=n(78129),Qr=n(41323),Jr=(n(35976),"hwks9j7 rgw6ezd9 rgw6ez4b9 rgw6ezbl rgw6ezpr rgw6ezv9 rgw6ezvl rgw6ezfx rgw6ezfm"),Zr="hwks9jm rgw6ezb9 rgw6ez4bf rgw6ezvr rgw6ezf3",Gr="hwks9jy rgw6ez4bf rgw6ezb3 rgw6ezl3";const Xr=f.default.a.withConfig({displayName:"TransactionCompleteModal__UploadLink",componentId:"sc-550f3ac3-0"})`
  position: absolute;
  right: 32px;
  top: 32px;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${ft.cR}

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 12px;
    top: 28px;
  }
`,Yr=()=>{const e=(0,Hr.$N)(),{formatEther:t,formatNumberOrString:n}=(0,ue.Gb)(),[a,o]=(0,u.useState)(!1),s=(0,Hr.pQ)((e=>e.txHash)),l=(0,Hr.pQ)((e=>e.purchasedWithErc20)),d=(0,Hr.pQ)((e=>e.setState)),c=(0,Hr.pQ)((e=>e.state)),p=(0,u.useRef)(c),h=(0,Hr.JC)((e=>e.transactionResponse)),g=(0,Hr.JC)((e=>e.setTransactionResponse)),f=(0,Hr.dD)(),m=(0,x.E)(1,s,x.r.TRANSACTION),w=(c===qr.c$.Success||c===qr.c$.Failed)&&c,j=(0,Ie.oO)({modal:Ae.KO.NFT_TX_COMPLETE}),{nftsPurchased:v,nftsNotPurchased:b,showPurchasedModal:y,showRefundModal:C,totalPurchaseValue:z,totalRefundValue:k,totalUSDRefund:N,txFeeFiat:T}=(0,u.useMemo)((()=>(0,Vr.lb)(h,e)),[h,e]);function E(){g({}),d(qr.c$.New)}(0,u.useEffect)((()=>{Hr.pQ.subscribe((e=>p.current=e.state))}),[]);return(0,r.jsx)(r.Fragment,{children:w&&(0,r.jsxs)(_r.h,{children:[(0,r.jsx)(Dr.a,{onClick:E}),(0,r.jsxs)(Pr.n,{className:"hwks9j1 rgw6ez2dr rgw6ez2j9 rgw6ez2rf rgw6ez2ax rgw6ez44r rgw6ez48r rgw6ez1dr rgw6ez16r rgw6ez16y rgw6ez343 rgw6ez394 rgw6ez3f3 rgw6ez3rl rgw6ez8bp",onClick:E,children:[y&&(0,r.jsx)(Ie.fM,{name:Ae.Yz.NFT_BUY_BAG_SUCCEEDED,properties:{buy_quantity:v.length,usd_value:parseFloat((0,Rr.formatEther)(z))*e,transaction_hash:s,using_erc20:l,...(0,Qr.H)(v),...j},shouldLogImpression:!0,children:(0,r.jsxs)(Pr.n,{className:"hwks9j3 rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ez1dx rgw6ez48x rgw6ez16r rgw6ez16y rgw6ez2pr rgw6ez2ps rgw6ez299 rgw6ez29a",onClick:Dr.U,children:[(0,r.jsx)(Lr.j,{color:Ur.gR.color.pink400,width:"36",height:"36",className:"rgw6ez48l rgw6ez359 rgw6ez36g rgw6ez3gl rgw6ez3gy"}),(0,r.jsxs)(Pr.n,{display:"flex",flexWrap:"wrap",width:"full",height:"min",children:[(0,r.jsx)("h1",{className:Jr,children:(0,r.jsx)(i.cC,{id:"6Mjzfq"})}),(0,r.jsx)("p",{className:"hwks9jd rgw6ez4b9 rgw6ezb9 rgw6ez16r rgw6ez469 rgw6ezpr rgw6ezv9 rgw6ezvl rgw6ezgx",children:(0,r.jsx)(i.cC,{id:"utdv8e"})})]}),(0,r.jsx)(Xr,{onClick:()=>{window.open((0,Vr.fj)(v,m),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,r.jsx)(Br.Zm,{width:32,height:32,color:Ur.Z4.colors.neutral2})}),(0,r.jsx)(Pr.n,{className:"hwks9jf rgw6ez44r rgw6ez443 rgw6ez16r rgw6ez8bp rgw6ez47l",style:{maxHeight:v.length>32?f?"172px":"292px":"min-content"},children:[...v].map(((e,t)=>(0,r.jsx)("img",{className:(0,Fr.default)("hwks9jh rgw6ez80x rgw6ez3xr",v.length>1&&"rgw6ezql rgw6ezqy rgw6ezfl rgw6ezfy"),style:{maxHeight:`${(0,Vr.QP)(v.length,f)}px`,maxWidth:`${(0,Vr.QP)(v.length,f)}px`},src:e.imageUrl,alt:e.name},t)))}),v.length>32&&(0,r.jsx)(Pr.n,{className:"hwks9jk"}),(0,r.jsxs)(Pr.n,{display:"flex",width:"full",height:"min",flexDirection:"row",marginTop:{sm:"20",md:"20"},flexWrap:{sm:"wrap",md:"nowrap"},alignItems:"center",paddingRight:"40",paddingLeft:"40",className:"rgw6ez4b9 rgw6ezb9",justifyContent:"space-between",children:[(0,r.jsxs)(Wr.X2,{children:[(0,r.jsxs)(Pr.n,{marginRight:"16",children:[v.length," NFT",1===v.length?"":"s"]}),(0,r.jsxs)(Pr.n,{children:[t({input:z.toString(),type:ue.sw.NFTToken})," ","ETH"]})]}),(0,r.jsx)("a",{href:m,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,r.jsx)(Pr.n,{color:"neutral2",fontWeight:"book",children:(0,r.jsx)(i.cC,{id:"rd4eHq"})})})]})]})}),C&&(y?(0,r.jsx)(Ie.fM,{name:Ae.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:v.length,fail_quantity:b.length,refund_amount_usd:N,transaction_hash:s,...j},shouldLogImpression:!0,children:(0,r.jsxs)(Pr.n,{className:"hwks9js rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ez2pl rgw6ez2py rgw6ez2jl rgw6ez2k4 rgw6ez2el rgw6ez2ey rgw6ez1dx rgw6ez16r rgw6ez16y rgw6ez48x rgw6ezwf",onClick:Dr.U,children:[(0,r.jsxs)(Pr.n,{display:"inline-flex",flexWrap:"wrap",width:{sm:"full",md:"half"},paddingRight:{sm:"0",md:"32"},children:[(0,r.jsx)(Br.YG,{color:"pink"}),(0,r.jsx)("p",{className:"hwks9ju rgw6ez4b9 rgw6ezd9 rgw6ezbf rgw6ezl3 rgw6ezv9 rgw6ezf3 rgw6ezka",children:"Instant Refund"}),(0,r.jsxs)("p",{className:"hwks9jw rgw6ez4b9 rgw6ezb9 rgw6ezpr rgw6ezv9 rgw6ezwl rgw6ezgl rgw6ez16r",children:["Uniswap returned"," ",(0,r.jsxs)("span",{style:{fontWeight:535},children:[t({input:k.toString(),type:ue.sw.NFTToken})," ","ETH"]})," ","back to your wallet for unavailable items."]}),(0,r.jsxs)(Pr.n,{display:"flex",flexWrap:"wrap",bottom:"24",width:"full",alignSelf:"flex-end",position:{sm:"absolute",md:"static"},children:[(0,r.jsxs)("p",{className:Zr,style:{marginBottom:"2px"},children:[t({input:k.toString(),type:ue.sw.NFTToken})," ","ETH"]}),(0,r.jsx)("p",{className:Gr,children:n({input:N,type:ue.sw.FiatNFTToken})}),(0,r.jsxs)("p",{className:Zr,style:{width:"100%"},children:["for ",b.length," unavailable item",1===b.length?"":"s","."]}),(0,r.jsx)(Pr.n,{position:{sm:"absolute",md:"relative"},right:{sm:"0",md:"auto"},bottom:{sm:"0",md:"auto"},justifyContent:{sm:"flex-end",md:"flex-start"},textAlign:{sm:"right",md:"left"},flexShrink:"0",marginRight:{sm:"40",md:"24"},width:{sm:"half",md:"auto"},children:(0,r.jsx)("a",{href:m,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,r.jsx)(Pr.n,{fontWeight:"book",marginTop:"16",color:"neutral2",className:Zr,children:"View on Etherscan"})})})]})]}),(0,r.jsx)(Pr.n,{className:"hwks9j10 rgw6ez1dx rgw6ez1ds rgw6ez16r rgw6ez16m rgw6ez443 rgw6ez8bp rgw6ez46x rgw6ez44x rgw6ez2e4",children:b.map(((e,t)=>(0,r.jsx)(Pr.n,{display:"flex",flexWrap:"wrap",height:"min",width:"52",children:(0,r.jsx)("img",{className:"hwks9j12 rgw6ez1ax rgw6ez13x rgw6ez80p rgw6ezql rgw6ezf9",src:e.imageUrl,alt:e.name},t)},t)))}),(0,r.jsx)(Pr.n,{className:"hwks9j14 rgw6ez16r rgw6ez16m rgw6ezpr rgw6ez3q3"})]})}):(0,r.jsx)(Ie.fM,{name:Ae.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:0,fail_quantity:b.length,refund_amount_usd:N,...j},shouldLogImpression:!0,children:(0,r.jsxs)(Pr.n,{className:"hwks9j16 rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ezv9 rgw6ez469 rgw6ezpr rgw6ezoy rgw6ez2vf rgw6ez1dx",onClick:Dr.U,children:[(0,r.jsx)(Pr.n,{marginLeft:"auto",marginRight:"auto",display:"flex",children:c===qr.c$.Success?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Br.YG,{}),(0,r.jsx)("h1",{className:Jr,children:"Instant Refund"})]}):(0,r.jsx)("h1",{className:Jr,children:"Failed Transaction"})}),(0,r.jsxs)("p",{className:"hwks9j1c rgw6ez4b9 rgw6ezb9 rgw6ezpr rgw6ezv9 rgw6ezw3",children:[c===qr.c$.Success&&`Selected item${1===v.length?" is":"s are"} no longer available. Uniswap instantly refunded you for this incomplete transaction. `,n({input:T,type:ue.sw.FiatNFTToken})," was used for gas in attempt to complete this transaction. For support, please visit our"," ",(0,r.jsx)("a",{href:"https://discord.gg/FCfyBSbCU5",children:"Discord"})]}),(0,r.jsxs)(Pr.n,{className:"hwks9j1e rgw6ez16r",children:[b.length>=3&&(0,r.jsxs)(Pr.n,{className:"rgw6ez6rr rgw6ez80p rgw6ez44r rgw6ez443 rgw6ezvr rgw6ezf9 rgw6ez1ax rgw6ez7zd",onClick:()=>{o(!a)},children:[!a&&(0,r.jsx)(Pr.n,{paddingLeft:"20",paddingTop:"8",paddingBottom:"8",children:b.slice(0,3).map(((e,t)=>(0,r.jsx)("img",{style:{zIndex:2-t},className:"hwks9j1j rgw6ez80l rgw6ez1a3 rgw6ez133 rgw6ez48x",src:e.imageUrl,alt:e.name},t)))}),(0,r.jsxs)(Pr.n,{color:a?"neutral1":"neutral2",className:"hwks9j1l rgw6ez4bf rgw6ezd3 rgw6ezb9 rgw6ez2of rgw6ez27x rgw6ez2dr",children:["Unavailable",(0,r.jsxs)(Pr.n,{className:"hwks9j1n rgw6ezd3 rgw6ezb3 rgw6ez44r",children:[b.length," item",1===b.length?"":"s"]})]}),(0,r.jsx)(Br.g8,{className:`${!a&&"hwks9j1t"} hwks9j1s rgw6ezk9 rgw6ezkl rgw6ezv9 rgw6ez199 rgw6ez129`})]}),(a||b.length<3)&&b.map(((e,n)=>(0,r.jsxs)(Pr.n,{backgroundColor:"surface1",display:"flex",padding:"4",marginBottom:"1",borderRadius:"8",children:[(0,r.jsx)(Pr.n,{className:"hwks9j1o",children:(0,r.jsx)("img",{className:"hwks9j1q rgw6ez80l rgw6ez1er rgw6ez1v3 rgw6ez17r rgw6ez1h3 rgw6ez49f",src:e.imageUrl,alt:e.name})}),(0,r.jsxs)(Pr.n,{flexWrap:"wrap",marginTop:"4",children:[(0,r.jsx)(Pr.n,{marginLeft:"4",width:"full",display:"flex",children:(0,r.jsxs)("p",{className:Zr,style:{marginBottom:"2px"},children:[t({input:e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,type:ue.sw.NFTToken})," ","ETH"]})}),(0,r.jsx)(Pr.n,{color:"neutral1",className:Gr,children:c===qr.c$.Success?"Refunded":e.name})]})]},n)))]}),a&&(0,r.jsx)(Pr.n,{className:"hwks9j1f"}),(0,r.jsxs)("p",{className:Zr,style:{marginBottom:"2px"},children:[t({input:k.toString(),type:ue.sw.NFTToken})," ","ETH"]}),(0,r.jsx)("p",{className:Gr,children:n({input:N,type:ue.sw.FiatNFTToken})}),(0,r.jsx)(Pr.n,{className:"hwks9j9 rgw6ez4bf rgw6ezax rgw6ez44r rgw6ez3x rgw6ez1dx rgw6ez3b3",marginLeft:"auto",marginRight:"0",children:(0,r.jsx)("a",{href:m,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(Pr.n,{className:"hwks9jb rgw6ez4bf rgw6ezax rgw6ezd3 rgw6ezw3",children:"View on Etherscan"})})}),(0,r.jsxs)("p",{className:Zr,children:["for ",b.length," unavailable item",1===b.length?"":"s","."]}),(0,r.jsxs)(Pr.n,{as:"button",border:"none",backgroundColor:"accent1",cursor:"pointer",className:"hwks9j18 rgw6ez1a9 rgw6ez469 rgw6ezd9 rgw6ezb9 rgw6ez4df rgw6ez6sl rgw6ez44r rgw6ez3x rgw6ezpr rgw6ezv9 rgw6ezwl",type:"button",onClick:()=>E(),children:[(0,r.jsx)(Br.pf,{className:"rgw6ez7mr rgw6ezlr rgw6ezs9"}),"Return to Marketplace"]})]})}))]})]})})};function Kr(){const e=(0,L.Wt)(J.Lk.ADDRESS_CLAIM),t=(0,L.xk)(J.Lk.ADDRESS_CLAIM),n=(0,L.Wt)(J.Lk.BLOCKED_ACCOUNT),{account:i}=(0,a.useWeb3React)();!function(e){const t=(0,Mr.T)();(0,u.useEffect)((()=>{if(!e)return;const n=new Headers({"Content-Type":"application/json"});fetch("https://interface.gateway.uniswap.org/v1/screen",{method:"POST",headers:n,body:JSON.stringify({address:e})}).then((e=>e.json())).then((e=>{e.block&&t((0,J.i3)(J.Lk.BLOCKED_ACCOUNT))})).catch((()=>{t((0,J.i3)(null))}))}),[e,t])}(i);const o=Boolean(n&&i),s=(0,Nr.aD)()||(0,Nr.mb)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Xt,{isOpen:e,onDismiss:t}),(0,r.jsx)($t,{account:i,isOpen:o}),(0,r.jsx)(Or.ZP,{}),(0,r.jsx)(ut,{}),(0,r.jsx)(Wt,{}),(0,r.jsx)(ne.Cl,{}),(0,r.jsx)(Yr,{}),(0,r.jsx)(tr,{}),(0,r.jsx)(sr,{}),(0,r.jsx)(mr,{}),(0,r.jsx)(Wn,{}),s&&(0,r.jsx)(Sr,{})]})}function $r(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Te,{}),(0,r.jsx)(R,{}),(0,r.jsx)(Kr,{})]})}}}]);
//# sourceMappingURL=3386.3fa1408d.chunk.js.map