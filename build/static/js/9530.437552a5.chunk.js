"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9530],{27011:(e,t,i)=>{i.r(t),i.d(t,{BannerWrapper:()=>vi,CollectionBannerLoading:()=>ui,default:()=>Ti});var n=i(92936),r=i(87254),a=i(5985),s=i(88846),o=i(47583),l=i(44591),d=i(68588),c=i(94284),p=i(82743),h=i(13901),g=i(3476),u=i(3464),m=i(65851),x=i(15288),f=i(68113),w=i(33426),v=i(52384),y=i(78129),j=i(66136);i(6155),i(49484);const b=()=>{const e=(0,w.cP)((e=>e.itemsInBag)),t=(0,w.cP)((e=>e.toggleBag)),i=(0,v.P)(),r=(0,v.B)(),{formatEther:a,formatNumberOrString:s}=(0,j.Gb)(),o=e.length>0;return(0,n.jsxs)(x.X2,{display:{sm:o?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,n.jsxs)(x.X2,{gap:"8",children:[(0,n.jsx)(m.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,n.jsx)(m.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,n.jsxs)(x.sg,{children:[(0,n.jsx)(m.n,{className:f.d1,fontWeight:"medium",children:(0,y.t)(e.length,"NFT")}),(0,n.jsxs)(x.X2,{gap:"8",children:[(0,n.jsxs)(m.n,{className:f.d1,children:[`${a({input:i.toString(),type:j.sw.NFTToken})}`," ETH"]}),(0,n.jsx)(m.n,{color:"neutral2",className:f.Km,children:s({input:r,type:j.sw.FiatNFTToken})})]})]})]}),(0,n.jsx)(m.n,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var C=i(35842),_=i(61152),k=(i(45814),"_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf"),T="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9";const I=(0,_.default)(x.X2).withConfig({displayName:"ActivitySwitcher__BaseActivityContainer",componentId:"sc-12fe17f6-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,N=new Array(2).fill(null).map(((e,t)=>(0,n.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),S=({showActivity:e,toggleActivity:t})=>{const i=(0,w.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(I,{gap:"24",marginBottom:"16",children:i?N:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.n,{as:"button",className:e?k:T,onClick:()=>e&&t(),children:"Items"}),(0,n.jsx)(o.M8,{events:[a.TM.onClick],element:a.xo.NFT_ACTIVITY_TAB,name:a.Yz.NFT_ACTIVITY_SELECTED,children:(0,n.jsx)(m.n,{as:"button",className:e?T:k,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var z=i(11604),P=i(66284),$=i(21989),E=i(87685),R=i(9604),M=i(84662),F=i(31017),B=i(2798),A=i(62293),L=i(45779);const H=({asset:e,isMobile:t,mediaShouldBePlaying:i,setCurrentTokenPlayingMedia:r,uniformAspectRatio:s,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c})=>{var p,h;const{formatEther:g}=(0,j.Gb)(),u=(0,w.cP)((e=>e.bagManuallyClosed)),m=(0,w.cP)((e=>e.addAssetsToBag)),x=(0,w.cP)((e=>e.removeAssetsFromBag)),f=(0,w.cP)((e=>e.itemsInBag)),v=(0,w.cP)((e=>e.bagExpanded)),y=(0,w.cP)((e=>e.setBagExpanded)),b=(0,o.oO)({page:a.yJ.NFT_COLLECTION_PAGE}),{isSelected:C}=(0,L.useMemo)((()=>({isSelected:f.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,f]),_=e.notForSale||z.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),k=(null===(h=e)||void 0===h||null===(p=h.rarity)||void 0===p?void 0:p.providers)?e.rarity.providers[0]:void 0,T=(0,L.useCallback)((()=>{var i;z.O$.from((null===(i=e.priceInfo)||void 0===i?void 0:i.ETHPrice)??0).gt(0)&&(m([e]),v||t||u||y({bagExpanded:!0}),(0,o._P)(a.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...b}))}),[m,e,v,u,t,y,b]),I=(0,L.useCallback)((()=>{x([e])}),[e,x]),N=(0,L.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,n.jsx)(A.yT,{}):null,primaryInfoRight:e.rarity&&k?(0,n.jsx)(A.SD,{provider:k}):null,secondaryInfo:_?"":`${g({input:e.priceInfo.ETHPrice,type:j.sw.NFTToken})} ETH`,selectedInfo:(0,n.jsx)(F.cC,{id:"77UrnP"}),notSelectedInfo:(0,n.jsx)(F.cC,{id:"2RtVHm"}),disabledInfo:(0,n.jsx)(F.cC,{id:"i/2ImT"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,g,_,k]);return(0,n.jsx)(B.y,{asset:e,display:N,isSelected:C,isDisabled:Boolean(e.notForSale),selectAsset:T,unselectAsset:I,mediaShouldBePlaying:i,uniformAspectRatio:s,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c,setCurrentTokenPlayingMedia:r,testId:"nft-collection-asset"})};var O,D=i(34385),Y=i(30520),W=i(58690),X=i(27389),Z="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",U="_10b1b4vc",V="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",G="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",K="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",q="_10b1b4v2",J=i(12461),Q=i(12294),ee=i(47832);!function(e){e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX"}(O||(O={}));const te=(0,Q.Ue)()((0,ee.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,i)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:i}})))}})),{name:"useTraitsOpen"}));var ie=i(54972),ne=i(4256);const re=(0,_.default)(x.X2).withConfig({displayName:"MarketplaceSelect__FilterItemWrapper",componentId:"sc-94e770fe-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,ae=(0,_.default)(x.X2).withConfig({displayName:"MarketplaceSelect__MarketNameWrapper",componentId:"sc-94e770fe-1"})`
  gap: 10px;
`,se={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},oe=({title:e,element:t,onClick:i})=>(0,n.jsxs)(re,{onClick:i,children:[(0,n.jsx)(ie.Tv.BodyPrimary,{children:e}),(0,n.jsx)(ie.Tv.SubHeaderSmall,{children:t})]}),le=({title:e,value:t,addMarket:i,removeMarket:r,isMarketSelected:s,count:l})=>{const[d,c]=(0,L.useState)(!1),[p,h]=(0,L.useReducer)((e=>!e),!1);(0,L.useEffect)((()=>{c(s)}),[s]);const g=e=>{e.preventDefault(),d?(r(t),c(!1)):(i(t),c(!0)),(0,o._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.MARKETPLACE})},u=(0,n.jsx)(ne.X,{checked:d,hovered:p,onChange:g,children:(0,n.jsx)(m.n,{as:"span",color:"neutral2",marginLeft:"4",paddingRight:"12",children:l})}),x=(0,n.jsxs)(ae,{children:[(0,y.Dp)(e,"16"),e]});return(0,n.jsx)("div",{onMouseEnter:h,onMouseLeave:h,children:(0,n.jsx)(oe,{title:x,element:u,onClick:g})},t)},de=({title:e,items:t,onClick:i,isOpen:r})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.n,{className:V,opacity:r?"1":"0"}),(0,n.jsxs)(m.n,{as:"details",className:(0,$.default)(f.Nf,!r&&q),open:r,borderRadius:r?"0":"12",children:[(0,n.jsxs)(m.n,{as:"summary",className:`${K} ${q}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:i,children:[e,(0,n.jsx)(m.n,{display:"flex",alignItems:"center",children:(0,n.jsx)(m.n,{className:Z,style:{transform:`rotate(${r?0:180}deg)`},children:(0,n.jsx)(W.g8,{className:U})})})]}),(0,n.jsx)(x.sg,{className:G,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),ce=()=>{const{addMarket:e,removeMarket:t,markets:i,marketCount:r}=(0,J.PY)((({markets:e,marketCount:t,removeMarket:i,addMarket:n})=>({markets:e,marketCount:t,removeMarket:i,addMarket:n}))),[a,s]=(0,L.useState)(!!i.length),o=te((e=>e.setTraitsOpen)),l=(0,L.useMemo)((()=>Object.entries(se).map((([a,s])=>{var o;return(0,n.jsx)(le,{title:s,value:a,count:(null===(o=r)||void 0===o?void 0:o[a])||0,addMarket:e,removeMarket:t,isMarketSelected:i.includes(a)},a)}))),[e,r,t,i]);return(0,n.jsx)(de,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),s(!a),o(O.MARKPLACE_INDEX,!a)},isOpen:a})};var pe=i(7797);const he=(0,_.default)(pe.Z).withConfig({displayName:"FilterSortDropdown__CheckIcon",componentId:"sc-c4c806a4-0"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,ge=({sortDropDownOptions:e})=>{const[t,i]=(0,L.useState)(!1),r=e=>{e.preventDefault(),i(!t)},a=e.map((e=>(0,n.jsx)(ue,{dropDownOption:e,parentOnClick:r},e.displayText)));return(0,n.jsx)(de,{title:"Sort by",items:a,onClick:r,isOpen:t})},ue=({dropDownOption:e,parentOnClick:t})=>{const i=(0,w.PY)((e=>e.sortBy)),r=void 0!==e.sortBy&&i===e.sortBy?(0,n.jsx)(he,{}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)(oe,{title:e.displayText,element:r,onClick:i=>{i.preventDefault(),t(i),e.onClick()}})},me=({dropDownOptions:e,inFilters:t,mini:i,miniPrompt:r,top:a,left:s})=>{const o=(0,w.PY)((e=>e.sortBy)),[l,d]=(0,L.useReducer)((e=>!e),!1),[c,p]=(0,L.useReducer)((e=>!e),!1),[h,g]=(0,L.useState)(o),u=(0,w.Iv)((e=>e.isCollectionStatsLoading)),[v,y]=(0,L.useState)(0);(0,L.useEffect)((()=>{g(o)}),[o]);const j=(0,L.useRef)(null);(0,Y.t)(j,(()=>l&&d())),(0,L.useEffect)((()=>y(0)),[e]);const b=(0,L.useMemo)((()=>e[h].reverseOnClick||e[h].reverseIndex),[h,e]),C=u?220:t?"full":i?"min":v||"300px";return(0,n.jsxs)(m.n,{ref:j,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:C},children:[(0,n.jsx)(m.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:i?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":i?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:u?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,$.default)(l&&!i&&"_12q7kth0"),children:!u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&b&&(0,n.jsxs)(x.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[h].reverseOnClick){var i,n;null===(i=(n=e[h]).reverseOnClick)||void 0===i||i.call(n),p()}else{const t=e[h].reverseIndex??1;e[t-1].onClick(),g(t-1)}},children:[e[h].reverseOnClick&&(c?(0,n.jsx)(W.iB,{}):(0,n.jsx)(W.L7,{})),e[h].reverseIndex&&(h>(e[h].reverseIndex??1)-1?(0,n.jsx)(W.iB,{}):(0,n.jsx)(W.L7,{}))]}),(0,n.jsx)(m.n,{marginLeft:b?"4":"0",marginRight:i?"2":"0",color:"neutral1",className:f.km,children:i?r:l?"Sort by":e[h].displayText})]}),(0,n.jsx)(W.g8,{secondaryColor:i?X.Z4.colors.neutral1:void 0,secondaryWidth:i?"20":void 0,secondaryHeight:i?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,n.jsx)(m.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:i?void 0:"0",borderTopRightRadius:i?void 0:"0",overflowY:"hidden",transition:"250",display:l||!v?"block":"none",visibility:v?"visible":"hidden",marginTop:i?"12":"0",className:(0,$.default)(!i&&"_12q7kth1"),style:{top:a?`${a}px`:"inherit",left:t?"16px":s?`${s}px`:"inherit"},children:v?l&&e.map(((t,r)=>(0,n.jsx)(xe,{option:t,index:r,mini:i,onClick:()=>{e[r].onClick(),g(r),d(),c&&p()}},r))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,n.jsx)(fe,{option:e,index:t,setMaxWidth:y},t)))})]})},xe=({option:e,index:t,onClick:i,mini:r})=>(0,n.jsx)(m.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:r?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:i,cursor:"pointer",children:(0,n.jsx)(m.n,{marginLeft:"8",className:f.km,children:e.displayText})},t),fe=({option:e,index:t,setMaxWidth:i})=>{const r=(0,L.useRef)(null);return(0,L.useLayoutEffect)((()=>{r&&r.current&&i(Math.ceil(r.current.getBoundingClientRect().width)+52)})),(0,n.jsx)(m.n,{position:"absolute",ref:r,children:(0,n.jsx)(xe,{option:e,index:t})},t)};var we=i(23173),ve=i(11734);const ye=(0,Q.Ue)()((0,ee.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var je=i(47263);const be="undefined"!==typeof window;const Ce=()=>{var e;const t=!!be&&window.innerWidth<X.AV.sm?"nft-anchor-mobile":"nft-anchor";null===(e=window.document.getElementById(t))||void 0===e||e.scrollIntoView({behavior:"smooth"})};var _e=i(18806);const ke=e=>{const t={...e};for(const n in t){const e=t[n],i=w.initialCollectionFilterState[n];JSON.stringify(e)===JSON.stringify(i)&&delete t[n]}t.all!==w.initialCollectionFilterState.buyNow&&delete t.all;const i=w.i9[w.initialCollectionFilterState.sortBy];return t.sort===i&&delete t.sort,t},Te=(e,t)=>{const i={...e};["traits","markets"].forEach((e=>{i[e]||(i[e]=[]),i[e]&&"string"===typeof i[e]&&(i[e]=[i[e]])}));try{const{buyNow:e,search:n}=w.initialCollectionFilterState;if(Object.entries(w.i9).forEach((([e,t])=>{t===i.sort&&(i.sortBy=Number(e))})),i.buyNow=!(void 0===i.all?!e:i.all),i.search=void 0===i.search?n:String(i.search),2===i.traits.length){const[e,t]=i.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(i.traits=[`${e},${t}`])}i.traits=i.traits.map((e=>{const i=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[n,r]=i.split(","),a=t.traits&&t.traits[n].find((e=>e.trait_value===r));return a??{trait_type:n,trait_value:r,trait_count:0}}))}catch(n){i.traits=[]}return i};var Ie=i(10581),Ne=i(6282),Se=i(71291),ze=i(52873),Pe=(i(13570),i(4105));const $e=_.default.div.withConfig({displayName:"Sweep__SweepContainer",componentId:"sc-5f1add49-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,Ee=(0,_.default)(Pe.Z).withConfig({displayName:"Sweep__StyledSlider",componentId:"sc-5f1add49-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Re=_.default.div.withConfig({displayName:"Sweep__SweepLeftmostContainer",componentId:"sc-5f1add49-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,Me=_.default.div.withConfig({displayName:"Sweep__SweepRightmostContainer",componentId:"sc-5f1add49-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Fe=_.default.div.withConfig({displayName:"Sweep__SweepHeaderContainer",componentId:"sc-5f1add49-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Be=_.default.div.withConfig({displayName:"Sweep__SweepSubContainer",componentId:"sc-5f1add49-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,Ae=_.default.input.withConfig({displayName:"Sweep__InputContainer",componentId:"sc-5f1add49-6"})`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,Le=_.default.div.withConfig({displayName:"Sweep__ToggleContainer",componentId:"sc-5f1add49-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,He=_.default.div.withConfig({displayName:"Sweep__ToggleSwitch",componentId:"sc-5f1add49-8"})`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,Oe=_.default.div.withConfig({displayName:"Sweep__NftDisplayContainer",componentId:"sc-5f1add49-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,De=_.default.div.withConfig({displayName:"Sweep__NftHolder",componentId:"sc-5f1add49-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,Ye=RegExp("^(0|[1-9][0-9]*)$"),We=RegExp("^\\d*\\.?\\d{0,2}$"),Xe=({nfts:e})=>(0,n.jsx)(Oe,{children:[...Array(3)].map(((t,i)=>(0,n.jsx)(De,{index:i,src:e.length-1>=i?e[e.length-1-i].smallImageUrl:void 0},i)))}),Ze=({contractAddress:e,minPrice:t,maxPrice:i})=>{var r;const a=(0,_.useTheme)(),{formatEther:s}=(0,j.Gb)(),[o,l]=(0,L.useReducer)((e=>!e),!0),[d,c]=(0,L.useState)(""),p=(0,w.cP)((e=>e.addAssetsToBag)),h=(0,w.cP)((e=>e.removeAssetsFromBag)),g=(0,w.cP)((e=>e.itemsInBag)),u=(0,w.cP)((e=>e.lockSweepItems)),m=(0,w.cP)((e=>e.setBagExpanded)),x=(0,w.PY)((e=>e.traits)),f=(0,w.PY)((e=>e.markets)),v=Ve(e,"others",t,i),b=Ve(e,je.Fz.Sudoswap,t,i),C=Ve(e,je.Fz.NFTX,t,i),k=Ve(e,je.Fz.NFT20,t,i),{data:T}=(0,R.he)(v),{data:I}=(0,R.he)(b),{data:N}=(0,R.he)(C),{data:S}=(0,R.he)(k),{sortedAssets:$,sortedAssetsTotalEth:E}=(0,L.useMemo)((()=>{var e,t,i,n;if(!T&&!I&&!N&&!S)return{sortedAssets:void 0,sortedAssetsTotalEth:z.O$.from(0)};let r=0,a=0,s=[];I&&(s=[...s,...I]),N&&(s=[...s,...N]),S&&(s=[...s,...S]);const o=s.filter((e=>e.marketplace===je.Fz.Sudoswap&&!e.susFlag));s.forEach((e=>{if(!e.susFlag)if(e.marketplace===je.Fz.Sudoswap){const t=(0,y.Pu)(e,o.filter((t=>(0,y.zA)(e,t))).findIndex((t=>t.tokenId===e.tokenId)));e.priceInfo.ETHPrice=t??"0"}else{const t=e.marketplace===je.Fz.NFTX,i=(0,y.Pu)(e,t?r:a);z.O$.from(i).gt(0)&&(t?r++:a++),e.priceInfo.ETHPrice=i}})),s=T?T.concat(s):s,s.sort(((e,t)=>z.O$.from(e.priceInfo.ETHPrice).gt(z.O$.from(t.priceInfo.ETHPrice))?1:-1));let l=s.filter((e=>z.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return l=l.slice(0,Math.max((null===(e=T)||void 0===e?void 0:e.length)??0,(null===(t=I)||void 0===t?void 0:t.length)??0,(null===(i=N)||void 0===i?void 0:i.length)??0,(null===(n=S)||void 0===n?void 0:n.length)??0)),{sortedAssets:l,sortedAssetsTotalEth:l.reduce(((e,t)=>e.add(z.O$.from(t.priceInfo.ETHPrice))),z.O$.from(0))}}),[T,I,N,S]),{sweepItemsInBag:M,sweepEthPrice:B}=(0,L.useMemo)((()=>{const t=g.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),i=t.reduce(((e,t)=>e.add(z.O$.from(t.priceInfo.ETHPrice))),z.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:i}}),[g,e]);(0,L.useEffect)((()=>{0===M.length&&c("")}),[M]),(0,L.useEffect)((()=>{u(e)}),[e,x,f,t,i,u]);const A=e=>{if($)if(o)0===M.length&&e>0&&m({bagExpanded:!0}),M.length<e?p($.slice(M.length,e),!0):h(M.slice(e,M.length),!0),c(e<1?"":e.toString());else{const t=(0,P.parseEther)(e.toString());if(B.lte(t)){let e=M.length,i=B;const n=[];for(;e<$.length&&i.add(z.O$.from($[e].priceInfo.ETHPrice)).lte(t);)n.push($[e]),i=i.add(z.O$.from($[e].priceInfo.ETHPrice)),e++;n.length>0&&(0===M.length&&m({bagExpanded:!0}),p(n,!0))}else{let e=M.length-1,i=B;const n=[];for(;e>=0&&i.gt(t);)n.push(M[e]),i=i.sub(z.O$.from(M[e].priceInfo.ETHPrice)),e--;n.length>0&&h(n,!0)}c(0===e?"":e.toFixed(2))}};return(0,n.jsxs)($e,{"data-testid":"nft-sweep-slider",children:[(0,n.jsxs)(Re,{children:[(0,n.jsx)(Fe,{children:(0,n.jsx)(ie.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,n.jsx)(F.cC,{id:"ZC4hNh"})})}),(0,n.jsxs)(Be,{children:[(0,n.jsx)(Ee,{defaultValue:0,min:0,max:o?(null===(r=$)||void 0===r?void 0:r.length)??0:parseFloat((0,P.formatEther)(E).toString()),value:o?M.length:parseFloat((0,P.formatEther)(B.toString())),step:o?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${a.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${a.surface3}`},onChange:e=>{"number"===typeof e&&$&&(o?(Math.floor(e)!==Math.floor(""!==d?parseFloat(d):0)&&A(Math.floor(e)),c(e<1?"":e.toString())):(A(e),c(0===e?"":e.toFixed(2))))}}),(0,n.jsx)(Ae,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:o&&""!==d?Math.floor(parseFloat(d)):d,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(A(0),c("")):(o&&Ye.test(t)||!o&&We.test(t))&&(A(parseFloat(t)),c(t))}}),(0,n.jsxs)(Le,{onClick:()=>{c(""),h(M),l()},children:[(0,n.jsx)(He,{active:o,children:"Items"}),(0,n.jsx)(He,{active:!o,children:"ETH"})]})]})]}),(0,n.jsxs)(Me,{children:[(0,n.jsx)(ie.Tv.SubHeader,{"font-size":"14px",children:`${s({input:B.toString(),type:j.sw.NFTToken})} ETH`}),(0,n.jsx)(Xe,{nfts:M})]})]})},Ue=[je.Fz.Opensea,je.Fz.X2Y2,je.Fz.LooksRare];function Ve(e,t,i,n){const r=(0,w.PY)((e=>e.traits)),a=(0,w.PY)((e=>e.markets)),s=!!a.length;return(0,L.useMemo)((()=>{if(s){if("others"===t){const t=a.filter((e=>!(0,je.g7)(e)));return t.length>0?{contractAddress:e,traits:r,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!a.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case je.Fz.Sudoswap:case je.Fz.NFTX:case je.Fz.NFT20:return{contractAddress:e,traits:r,markets:[t],price:{low:i,high:n,symbol:"ETH"}};case"others":return{contractAddress:e,traits:r,markets:Ue,price:{low:i,high:n,symbol:"ETH"}}}}),[e,s,t,a,n,i,r])}const Ge=_.default.div.withConfig({displayName:"TraitChip__TraitChipWrap",componentId:"sc-29602959-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,Ke=_.default.div.withConfig({displayName:"TraitChip__CrossIconWrap",componentId:"sc-29602959-1"})`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,qe=({onClick:e,value:t})=>(0,n.jsxs)(Ge,{children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)(Ke,{onClick:e,children:(0,n.jsx)(W.aM,{cursor:"pointer"})})]}),Je=new Map,Qe=_.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,et=_.default.div.withConfig({displayName:"CollectionNfts__ActionsContainer",componentId:"sc-c6569a9f-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Qe}
`,tt=_.default.div.withConfig({displayName:"CollectionNfts__ActionsSubContainer",componentId:"sc-c6569a9f-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,it=_.default.div.withConfig({displayName:"CollectionNfts__SortDropdownContainer",componentId:"sc-c6569a9f-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,nt=_.default.div.withConfig({displayName:"CollectionNfts__EmptyCollectionWrapper",componentId:"sc-c6569a9f-3"})`
  display: block;
  text-align: center;
`,rt=_.default.span.withConfig({displayName:"CollectionNfts__ViewFullCollection",componentId:"sc-c6569a9f-4"})`
  ${d.cR}
`,at=_.default.div.withConfig({displayName:"CollectionNfts__InfiniteScrollWrapper",componentId:"sc-c6569a9f-5"})`
  ${Qe}
`,st=_.default.div.withConfig({displayName:"CollectionNfts__SweepButton",componentId:"sc-c6569a9f-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:i})=>e&&!t?i.deprecated_accentTextLightPrimary:i.neutral1};
  background: ${({theme:e,toggled:t,disabled:i})=>!i&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,ot=(0,_.default)(ie.Tv.BodyPrimary).withConfig({displayName:"CollectionNfts__SweepText",componentId:"sc-c6569a9f-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,lt=(0,_.default)(x.X2).withConfig({displayName:"CollectionNfts__MarketNameWrapper",componentId:"sc-c6569a9f-8"})`
  gap: 8px;
`,dt=({height:e})=>(0,n.jsx)(m.n,{width:"full",className:D.P,children:(0,n.jsx)(Se.p,{height:e})}),ct=()=>(0,n.jsx)(at,{children:(0,n.jsxs)(x.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,n.jsxs)(x.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,n.jsx)(m.n,{className:we.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,n.jsx)(m.n,{className:we.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,n.jsx)(m.n,{className:we.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,n.jsx)(dt,{})]})}),pt=(e,t)=>{const i=[{displayText:"Price: Low to High",onClick:()=>e(w.hn.LowToHigh),reverseIndex:2,sortBy:w.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(w.hn.HighToLow),reverseIndex:1,sortBy:w.hn.HighToLow}];return t?i.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(w.hn.RareToCommon),reverseIndex:4,sortBy:w.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(w.hn.CommonToRare),reverseIndex:3,sortBy:w.hn.CommonToRare}]):i},ht=({contractAddress:e,collectionStats:t,rarityVerified:i})=>{var r,l,d,c,p;const{chainId:h}=(0,s.useWeb3React)(),u=(0,w.PY)((e=>e.traits)),v=(0,w.PY)((e=>e.minPrice)),j=(0,w.PY)((e=>e.maxPrice)),b=(0,w.PY)((e=>e.markets)),C=(0,w.PY)((e=>e.sortBy)),_=(0,w.PY)((e=>e.search)),k=(0,w.PY)((e=>e.setMarketCount)),T=(0,w.PY)((e=>e.setSortBy)),I=(0,w.PY)((e=>e.buyNow)),N=ye((e=>e.setPriceRangeLow)),S=ye((e=>e.priceRangeLow)),F=ye((e=>e.priceRangeHigh)),B=ye((e=>e.setPriceRangeHigh)),A=ye((e=>e.setPrevMinMax)),O=(0,ve.I)((e=>e.setIsCollectionNftsLoading)),Y=(0,w.PY)((e=>e.removeTrait)),X=(0,w.PY)((e=>e.removeMarket)),Z=(0,w.PY)((e=>e.reset)),U=(0,w.PY)((e=>e.setMinPrice)),V=(0,w.PY)((e=>e.setMaxPrice)),G=(0,w.PY)((e=>e.setHasRarity)),K=(0,w.cP)((e=>e.toggleBag)),q=(0,w.cP)((e=>e.bagExpanded)),J=(0,w.cP)((e=>e.itemsInBag)),Q=(0,M.Z)(v,500),ee=(0,M.Z)(j,500),te=(0,M.Z)(_,500),[ie,ne]=(0,L.useState)(je.Yp.unset),[re,ae]=(0,L.useState)(),[oe,le]=(0,L.useState)(!1),de={address:e,orderBy:w.AZ[C].field,asc:w.AZ[C].asc,filter:{listed:I,marketplaces:b.length>0?b.map((e=>e.toUpperCase())):void 0,maxPrice:ee?(0,P.parseEther)(ee.toString()).toString():void 0,minPrice:Q?(0,P.parseEther)(Q.toString()).toString():void 0,tokenSearchQuery:te,traits:u.length>0?u.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:R.iQ},{data:ce,loading:pe,hasNext:he,loadMore:ge}=(0,R.gP)(de),ue=(0,L.useCallback)((e=>{const t=J.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===je.Fz.Sudoswap){const i=J.filter((t=>(0,y.zA)(e,t.asset)));return t?i.findIndex((t=>t.asset.tokenId===e.tokenId)):i.length}return t?J.filter((t=>(0,y.H8)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):J.filter((t=>(0,y.H8)(e,t.asset))).length}),[J]),xe=(0,L.useCallback)((e=>(0,y.Pu)(e,ue(e))),[ue]),fe=(0,L.useMemo)((()=>{if(!ce||!ce.some((e=>e.marketplace&&(0,je.g7)(e.marketplace))))return ce;const e=[...ce];return e.forEach((e=>e.marketplace&&(0,je.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=xe(e)??"0"))),C!==w.hn.HighToLow&&C!==w.hn.LowToHigh||e.sort(((e,t)=>{var i,n;const r=z.O$.from((null===(i=e.priceInfo)||void 0===i?void 0:i.ETHPrice)??0),a=z.O$.from((null===(n=t.priceInfo)||void 0===n?void 0:n.ETHPrice)??0);if(r.gt(0)&&a.lte(0))return-1;if(a.gt(0)&&r.lte(0))return 1;const s=r.sub(a);return s.gt(0)?C===w.hn.LowToHigh?1:-1:s.lt(0)?C===w.hn.LowToHigh?-1:1:0})),e}),[ce,C,xe]),[we,be]=(0,L.useState)(),[Pe,$e]=(0,w.wx)(),Ee=(0,L.useRef)(null),Re=(0,w.dD)(),Me=(0,g.e)();(0,L.useEffect)((()=>{O(pe)}),[pe,O]);const Fe=(0,L.useMemo)((()=>{var e;const i=(0,y.oY)(Je,null===(e=t)||void 0===e?void 0:e.address,fe)??!1;return G(i),i}),[t.address,fe,G]),Be=(0,L.useMemo)((()=>pt(T,Fe)),[Fe,T]);(0,L.useEffect)((()=>(le(!1),()=>{w.PY.setState(w.initialCollectionFilterState)})),[e]);const Ae=(0,L.useMemo)((()=>fe?fe.map((e=>(0,n.jsx)(H,{asset:e,isMobile:Re,mediaShouldBePlaying:e.tokenId===we,setCurrentTokenPlayingMedia:be,rarityVerified:i,uniformAspectRatio:ie,setUniformAspectRatio:ne,renderedHeight:re,setRenderedHeight:ae},e.address+e.tokenId))):null),[fe,Re,we,i,ie,re]),Le=fe&&fe.length>0,He=Le&&fe[0]&&(null===(r=fe[0])||void 0===r?void 0:r.tokenType)===E.hgB.Erc1155,Oe=(0,L.useMemo)((()=>Q&&ee?`Price: ${Q} - ${ee} ETH`:Q?`Min. Price: ${Q} ETH`:ee?`Max Price: ${ee} ETH`:void 0),[Q,ee]);(0,L.useEffect)((()=>{var e,i;const n={};null===(i=t)||void 0===i||null===(e=i.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{n[e]=t})),k(n),Ee.current=w.PY.getState()}),[null===(l=t)||void 0===l?void 0:l.marketplaceCount,k]);const De=(0,Ne.TH)();(0,L.useEffect)((()=>{var e;if(null===(e=t)||void 0===e?void 0:e.traits){const e=((e,t)=>{if(!e.search)return;const i=_e.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return Te(i,t)})(De,t);requestAnimationFrame((()=>{e&&w.PY.setState(e)})),w.PY.subscribe((e=>{JSON.stringify(Ee.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((i=>{switch(i){case"traits":{const i=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=i;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=w.i9[e.sortBy];break;default:t[i]=e[i]}}));const i=ke(t),n=window.location.href.split("?")[0],r=_e.stringify(i,{arrayFormat:"comma"});window.history.replaceState({},"",`${n}${r&&`?${r}`}`)})(e),Ee.current=e)}))}}),[De]),(0,L.useEffect)((()=>{ne(je.Yp.unset),ae(void 0)}),[e]),(0,L.useEffect)((()=>{var e;if(t&&(null===(e=t.stats)||void 0===e?void 0:e.floor_price)){var i,n;const e=null===(i=t.stats)||void 0===i?void 0:i.floor_price,a=10*(null===(n=t.stats)||void 0===n?void 0:n.floor_price);var r;if(""===S)N(null===(r=e)||void 0===r?void 0:r.toFixed(2));""===F&&B(a.toFixed(2))}}),[t,S,F,B,N]);const Ye=(0,L.useCallback)((()=>{He||(oe||(Ce(),q||Re||K()),le(!oe))}),[q,He,Re,oe,K]),We=(0,L.useCallback)((()=>{Z(),A([0,100]),Ce()}),[Z,A]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,n.jsxs)(et,{children:[(0,n.jsxs)(tt,{children:[(0,n.jsx)(o.M8,{events:[a.TM.onClick],element:a.xo.NFT_FILTER_BUTTON,name:a.Yz.NFT_FILTER_OPENED,shouldLogImpression:!Pe,properties:{collection_address:e,chain_id:h},children:(0,n.jsx)(At.L,{isMobile:Re,isFiltersExpanded:Pe,collectionCount:(null===(c=fe)||void 0===c||null===(d=c[0])||void 0===d?void 0:d.totalCount)??0,onClick:()=>{q&&!Me.xl&&K(),$e(!Pe)}})}),(0,n.jsx)(it,{isFiltersExpanded:Pe,children:(0,n.jsx)(me,{dropDownOptions:Be})}),(0,n.jsx)(gt,{})]}),!He&&(0,n.jsxs)(st,{toggled:oe,disabled:He,className:f.km,onClick:Ye,"data-testid":"nft-sweep-button",children:[(0,n.jsx)(W.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,n.jsx)(ot,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,n.jsxs)(at,{children:[oe&&(0,n.jsx)(Ze,{contractAddress:e,minPrice:Q,maxPrice:ee}),(0,n.jsxs)(x.X2,{paddingTop:b.length||u.length||Oe?"12":"0",gap:"8",flexWrap:"wrap",children:[b.map((e=>(0,n.jsx)(qe,{value:(0,n.jsxs)(lt,{children:[(0,y.Dp)(e,"16"),se[e]]}),onClick:()=>{Ce(),X(e)}},e))),u.map((e=>(0,n.jsx)(qe,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,y._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{Ce(),Y(e)}},e.trait_value))),Oe&&(0,n.jsx)(qe,{value:Oe,onClick:()=>{Ce(),U(""),V(""),A([0,100])}}),Boolean(u.length||b.length||Oe)&&(0,n.jsx)(ze.v,{onClick:We,children:"Clear All"})]})]})]}),(0,n.jsx)(at,{children:pe?(0,n.jsx)(dt,{height:re}):(0,n.jsx)(Ie.Z,{next:ge,hasMore:he??!1,loader:Boolean(he&&Le)&&(0,n.jsx)(Se.p,{}),dataLength:(null===(p=fe)||void 0===p?void 0:p.length)??0,style:{overflow:"unset"},className:Le?D.P:void 0,children:Le?Ae:(0,n.jsx)(x.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,n.jsxs)(nt,{children:[(0,n.jsx)("p",{className:f.Es,children:"No NFTS found"}),(0,n.jsx)(m.n,{onClick:Z,type:"button",className:(0,$.default)(f.Km,f.km),color:"accent1",cursor:"pointer",children:(0,n.jsx)(rt,{children:"View full collection"})})]})})})})]})};const gt=()=>{const e=(0,J.PY)((e=>e.setSearch)),t=(0,J.PY)((e=>e.search)),i=(0,w.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(m.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:i?"":"Search by name",className:(0,$.default)(i&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var ut=i(19478);const mt=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var xt=i(35339),ft=i.n(xt),wt="_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf",vt="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",yt="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha";const jt=_.default.div.withConfig({displayName:"CollectionStats__PercentChange",componentId:"sc-5fc752f1-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,bt=_.default.h1.withConfig({displayName:"CollectionStats__CollectionNameText",componentId:"sc-5fc752f1-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,Ct=_.default.div.withConfig({displayName:"CollectionStats__CollectionNameTextLoading",componentId:"sc-5fc752f1-2"})`
  ${we.S}
  height: 32px;
  width: 236px;
`,_t=_.default.div.withConfig({displayName:"CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-5fc752f1-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,kt=({children:e,href:t})=>(0,n.jsx)(m.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),Tt=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:i})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_t,{onClick:i,children:t?(0,n.jsx)(W.DX,{width:"28",height:"28",fill:X.Z4.colors.neutral2}):(0,n.jsx)(W.ws,{width:"28",height:"20",fill:X.Z4.colors.neutral2})}),t&&(0,n.jsxs)(x.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,n.jsx)(kt,{href:e.discordUrl,children:(0,n.jsx)(m.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(W.D7,{width:28,height:28,color:X.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,n.jsx)(kt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(m.n,{margin:"auto",paddingTop:"6",children:(0,n.jsx)(W.Zm,{fill:X.Z4.colors.neutral2,color:X.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,n.jsx)(kt,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(m.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,n.jsx)(W.yu,{fill:X.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,n.jsx)(kt,{href:e.externalUrl,children:(0,n.jsx)(m.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(W.O1,{fill:X.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),It=({children:e,href:t})=>(0,n.jsx)(x.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),Nt=({collectionStats:e,name:t,isVerified:i,isMobile:r,collectionSocialsIsOpen:a,toggleCollectionSocials:s})=>{const o=(0,ve.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(x.X2,{justifyContent:"space-between",children:[(0,n.jsxs)(x.X2,{minWidth:"0",children:[o?(0,n.jsx)(Ct,{}):(0,n.jsx)(bt,{isVerified:i,className:r?f.td:f.Es,children:t}),i&&(0,n.jsx)(W.SA,{style:{width:"32px",height:"32px"}}),(0,n.jsxs)(x.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,n.jsx)(It,{href:e.discordUrl??"",children:(0,n.jsx)(W.D7,{fill:X.Z4.colors.neutral2,color:X.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,n.jsx)(It,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(W.Zm,{fill:X.Z4.colors.neutral2,color:X.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,n.jsx)(It,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(W.yu,{fill:X.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,n.jsx)(It,{href:e.externalUrl??"",children:(0,n.jsx)(W.O1,{fill:X.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),r&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,n.jsx)(Tt,{collectionStats:e,collectionSocialsIsOpen:a,toggleCollectionSocials:s})]})},St=_.default.p.withConfig({displayName:"CollectionStats__CollectionDescriptionText",componentId:"sc-5fc752f1-4"})`
  vertical-align: top;
  text-overflow: ellipsis;
  margin: 0;

  ${({readMore:e})=>e?_.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:_.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,zt=_.default.span.withConfig({displayName:"CollectionStats__ReadMore",componentId:"sc-5fc752f1-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,Pt=()=>(0,n.jsx)(m.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),$t=({description:e})=>{const[t,i]=(0,L.useState)(!1),[r,a]=(0,L.useReducer)((e=>!e),!1),s=(0,L.useRef)(null),o=(0,L.useRef)(null),l=(0,ve.I)((e=>e.isCollectionStatsLoading)),d=(0,w.dD)();return(0,L.useEffect)((()=>{var e;s&&o&&s.current&&o.current&&(o.current.getBoundingClientRect().width>=(null===(e=s.current)||void 0===e?void 0:e.getBoundingClientRect().width)-112||o.current.getBoundingClientRect().width>=590)?i(!0):i(!1)}),[o,s,l,e]),l?(0,n.jsx)(Pt,{}):(0,n.jsxs)(m.n,{ref:s,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,n.jsx)(St,{readMore:r,ref:o,className:d?f.Km:f.d1,children:(0,n.jsx)(ft(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,n.jsxs)(zt,{className:d?f.Km:f.d1,onClick:a,children:["show ",r?"less":"more"]})]})},Et=({children:e,label:t,shouldHide:i})=>(0,n.jsxs)(m.n,{display:i?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,n.jsx)(ie.Tv.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,n.jsx)(m.n,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),Rt=e=>new Array(e?3:5).fill(null).map(((t,i)=>(0,n.jsxs)(m.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,n.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,n.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${i}`))),Mt=({stats:e,isMobile:t,...i})=>{var r,a,s,o,l,d,c,p,h,u,m,f,v,y;const{formatNumberOrString:b,formatDelta:C}=(0,j.Gb)(),_=(null===(a=e)||void 0===a||null===(r=a.stats)||void 0===r?void 0:r.total_supply)?mt((e.stats.num_owners??0)/e.stats.total_supply*100):0,k=e.stats?b({input:e.stats.total_supply??0,type:j.sw.NFTCollectionStats}):0,T=(null===(o=e)||void 0===o||null===(s=o.stats)||void 0===s?void 0:s.total_supply)?mt((e.stats.total_listings??0)/e.stats.total_supply*100):0,I=(0,ve.I)((e=>e.isCollectionStatsLoading)),N=b({input:Number(null===(l=e.stats)||void 0===l?void 0:l.total_volume)??0,type:j.sw.NFTCollectionStats}),S=b({input:(null===(d=e.stats)||void 0===d?void 0:d.floor_price)??0,type:j.sw.NFTTokenFloorPrice}),z=C(Math.round(Math.abs((null===(p=e)||void 0===p||null===(c=p.stats)||void 0===c?void 0:c.one_day_floor_change)??0))),P=(0,w.cP)((e=>e.bagExpanded)),$=(0,g.e)(),E=t||!$.lg&&P;return(0,n.jsx)(x.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...i,children:I?Rt(t??!1):(0,n.jsxs)(n.Fragment,{children:[(null===(h=e.stats)||void 0===h?void 0:h.floor_price)?(0,n.jsxs)(Et,{label:"Global floor",shouldHide:!1,children:[S," ETH"]}):null,void 0!==(null===(u=e.stats)||void 0===u?void 0:u.one_day_floor_change)?(0,n.jsx)(Et,{label:"Floor 24H",shouldHide:!1,children:(0,n.jsxs)(jt,{isNegative:e.stats.one_day_floor_change<0,children:[(0,n.jsx)(ut.Kx,{delta:null===(f=e)||void 0===f||null===(m=f.stats)||void 0===m?void 0:m.one_day_floor_change}),z]})}):null,(null===(v=e.stats)||void 0===v?void 0:v.total_volume)?(0,n.jsxs)(Et,{label:"Total volume",shouldHide:!1,children:[N," ETH"]}):null,k?(0,n.jsx)(Et,{label:"Items",shouldHide:t??!1,children:k}):null,_&&e.standard!==je.iv.ERC1155?(0,n.jsxs)(Et,{label:"Unique owners",shouldHide:E??!1,children:[_,"%"]}):null,(null===(y=e.stats)||void 0===y?void 0:y.total_listings)&&e.standard!==je.iv.ERC1155?(0,n.jsxs)(Et,{label:"Listed",shouldHide:E??!1,children:[T,"%"]}):null]})})},Ft=({isMobile:e})=>(0,n.jsxs)(x.sg,{position:"relative",width:"full",children:[(0,n.jsx)(m.n,{className:vt}),(0,n.jsx)(m.n,{className:wt}),(0,n.jsxs)(m.n,{className:yt,children:[(0,n.jsx)(m.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Pt,{}),(0,n.jsx)(x.X2,{gap:"60",marginTop:"20",children:Rt(!1)})]})]}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Pt,{}),(0,n.jsx)(x.X2,{gap:"20",marginTop:"20",children:Rt(!0)})]})]}),Bt=({stats:e,isMobile:t})=>{const[i,r]=(0,L.useReducer)((e=>!e),!1),a=(0,ve.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(m.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?i?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[a&&(0,n.jsx)(m.n,{as:"div",borderRadius:"round",position:"absolute",className:vt}),(0,n.jsx)(m.n,{as:a?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:a?wt:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,n.jsxs)(m.n,{className:yt,children:[(0,n.jsx)(Nt,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:i,toggleCollectionSocials:r}),(e.description||a)&&!t&&(0,n.jsx)($t,{description:e.description??""}),(0,n.jsx)(Mt,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||a)&&t&&(0,n.jsx)($t,{description:e.description??""}),(0,n.jsx)("div",{id:"nft-anchor-mobile"}),(0,n.jsx)(Mt,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var At=i(48714),Lt=i(87175),Ht=i(3638),Ot="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Dt=_.default.div.withConfig({displayName:"TraitsHeader__ChildreMobileWrapper",componentId:"sc-ead2a0ec-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Yt=e=>{const{children:t,index:i,title:r}=e,[a,s]=(0,L.useState)(!1),o=te((e=>e.traitsOpen)),l=te((e=>e.setTraitsOpen)),d=(0,w.dD)(),c=void 0!==i&&o[i-1],p=i!==O.TRAIT_START_INDEX;return(0,L.useEffect)((()=>{void 0!==i&&l(i,a)}),[a,i,l]),(0,n.jsxs)(n.Fragment,{children:[p&&(0,n.jsx)(m.n,{className:(0,$.default)(f.Nf,!a&&q,V),opacity:!c&&a&&0!==i?"1":"0",marginTop:c?"0":"8"}),(0,n.jsxs)(m.n,{as:"details",className:(0,$.default)(f.Nf,!a&&q),open:a,children:[(0,n.jsxs)(m.n,{as:"summary",className:`${K} ${q}`,onClick:e=>{e.preventDefault(),s(!a)},children:[r,(0,n.jsxs)(m.n,{display:"flex",alignItems:"center",children:[(0,n.jsx)(m.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,n.jsx)(m.n,{className:Z,style:{transform:`rotate(${a?0:180}deg)`},children:(0,n.jsx)(W.g8,{className:U})})]})]}),(0,n.jsx)(Dt,{isMobile:d,children:t})]})]})},Wt=(0,_.default)(Pe.Z).withConfig({displayName:"PriceRange__StyledSlider",componentId:"sc-7655689-0"})`
  cursor: pointer;
`,Xt=()=>{const[e,t]=(0,L.useState)(""),i=(0,J.PY)((e=>e.setMinPrice)),r=(0,J.PY)((e=>e.setMaxPrice)),s=(0,J.PY)((e=>e.minPrice)),l=(0,J.PY)((e=>e.maxPrice)),d=ye((e=>e.priceRangeLow)),c=ye((e=>e.priceRangeHigh)),p=ye((e=>e.setPriceRangeLow)),h=ye((e=>e.setPriceRangeHigh)),g=ye((e=>e.prevMinMax)),u=ye((e=>e.setPrevMinMax)),w=(0,_.useTheme)(),v=(0,Ne.TH)();(0,L.useEffect)((()=>{i(""),r(""),p(""),h("")}),[v.pathname,i,r,p,h]);const y=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},j=i=>{i.currentTarget.placeholder=e,t(""),(s||l)&&(0,o._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.PRICE_RANGE})};return(0,n.jsxs)(Yt,{title:"Price range",index:O.PRICE_RANGE_INDEX,children:[(0,n.jsxs)(x.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,n.jsx)(x.X2,{position:"relative",children:(0,n.jsx)(Lt.A,{style:{width:"126px"},className:Ot,placeholder:d,onChange:e=>{const[,t]=g;if(e.currentTarget.value){const i=parseInt(e.currentTarget.value)-parseInt(d),n=Math.floor(i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)>=parseInt(l)?u([t,t]):u([n,t])}else u([0,t]);i(e.currentTarget.value.toString()),Ce()},onFocus:y,value:s,onBlur:j})}),(0,n.jsx)(m.n,{className:f.d1,children:"to"}),(0,n.jsx)(x.X2,{position:"relative",children:(0,n.jsx)(Lt.A,{style:{width:"126px"},className:Ot,placeholder:c,value:l,onChange:e=>{const[t]=g;if(e.currentTarget.value){const i=parseInt(c)-parseInt(e.currentTarget.value),n=Math.floor(100-i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)<=parseInt(s)?u([t,t]):u([t,n])}else u([t,100]);r(e.currentTarget.value),Ce()},onFocus:y,onBlur:j})})]}),(0,n.jsx)(x.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,n.jsx)(Wt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:g,trackStyle:{top:"3px",height:"8px",background:`${w.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:Ht.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${w.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,n]=e,a=parseFloat(c.replace(/,/g,"")),s=parseFloat(d.replace(/,/g,"")),o=a-s,l=a-(100-n)/100*o;i((t/100*o+s).toFixed(2).toString()),r(l.toFixed(2).toString()),0===t&&i(""),100===n&&r(""),u(e)}})})]})};var Zt=i(12843),Ut=i(40848),Vt=i(1285),Gt=i(43328);const Kt=({trait:e,addTrait:t,removeTrait:i,isTraitSelected:r,style:s})=>{const[l,d]=(0,L.useState)(!1),[c,p]=(0,L.useState)(!1),h=()=>p(!c),g=(0,J.PY)((e=>e.toggleShowFullTraitName)),{shouldShow:u,trait_value:w,trait_type:v}=(0,J.PY)((e=>e.showFullTraitName));(0,L.useEffect)((()=>{d(r)}),[r]);const y=n=>{n.preventDefault(),Ce(),l?(i(e),d(!1)):(t(e),d(!0)),(0,o._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.TRAIT})},j=u&&v===e.trait_type&&w===e.trait_value;return(0,n.jsxs)(x.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${f.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...s},maxHeight:"44",onMouseEnter:h,onMouseLeave:h,onClick:y,children:[(0,n.jsx)(m.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:j?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&g({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>g({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,Ut._)(Number(e.trait_value))}`:e.trait_value}),(0,n.jsx)(ne.X,{checked:l,hovered:c,onChange:y,children:(0,n.jsx)(m.n,{as:"span",color:"neutral2",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!j&&e.trait_count})})]},e.trait_value)},qt=({traits:e,type:t,index:i})=>{const r=(0,J.PY)((e=>e.addTrait)),a=(0,J.PY)((e=>e.removeTrait)),s=(0,J.PY)((e=>e.traits)),[o,l]=(0,L.useState)(""),d=(0,M.Z)(o,300),c=(0,L.useMemo)((()=>e.filter((e=>{var t;return null===(t=e.trait_value)||void 0===t?void 0:t.toString().toLowerCase().includes(d.toLowerCase())}))),[d,e]),p=(0,L.useCallback)((function({data:e,index:t,style:i}){const o=e[t],l=s.find((({trait_type:e,trait_value:t})=>e===o.trait_type&&String(t)===String(o.trait_value)));return(0,n.jsx)(Kt,{style:i,isTraitSelected:!!l,trait:o,addTrait:r,removeTrait:a})}),[s,r,a]),h=(0,L.useCallback)(((e,t)=>{const i=t[e];return`${i.trait_type}_${i.trait_value}_${e}`}),[]);return e.length?(0,n.jsxs)(Yt,{index:i,numTraits:e.length,title:t,children:[(0,n.jsx)(Lt.I,{value:o,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,n.jsx)(x.sg,{className:G,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,n.jsx)(Vt.ZP,{disableWidth:!0,children:({height:e})=>(0,n.jsx)(Gt.t7,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:h,children:({index:e,style:t,data:i})=>(0,n.jsx)(p,{style:t,data:i,index:e},h(e,i))})})})]}):null},Jt=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:i}=(0,w.PY)((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),r=(0,w.PY)((e=>e.setSortBy)),a=(0,w.PY)((e=>e.hasRarity)),[s,o]=(0,L.useReducer)((e=>!e),!1),l=()=>{i(!t)},d=(0,L.useMemo)((()=>pt(r,a??!1)),[a,r]);return(0,n.jsxs)(m.n,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,n.jsx)(x.X2,{width:"full",justifyContent:"space-between"}),(0,n.jsxs)(x.sg,{marginTop:"8",children:[(0,n.jsxs)(x.X2,{justifyContent:"space-between",className:`${K} ${q}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),l()},onMouseEnter:o,onMouseLeave:o,children:[(0,n.jsx)(m.n,{"data-testid":"nft-collection-filter-buy-now",className:f.v4,children:"Buy now"}),(0,n.jsx)(ne.X,{hovered:s,checked:t,onClick:l,children:(0,n.jsx)("span",{})})]}),Zt.isMobile&&(0,n.jsx)(ge,{sortDropDownOptions:d}),(0,n.jsx)(ce,{}),(0,n.jsx)(Xt,{}),Object.entries(e).length>0&&(0,n.jsx)(m.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,n.jsx)(x.sg,{children:Object.entries(e).map((([e,t],i)=>(0,n.jsx)(qt,{type:e,traits:t,index:i+O.TRAIT_START_INDEX},e)))})]})]})};var Qt=i(40976);const ei=(0,_.default)(l.ZP).withConfig({displayName:"CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-15bf9a08-0"})`
  ${Qt.bc}
`,ti=(0,_.default)(l.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledColumn",componentId:"sc-15bf9a08-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${u.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${u.zD+16}px)`:"100%"};
  }
`,ii=(0,_.default)(c.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledRow",componentId:"sc-15bf9a08-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,ni=()=>{const e=(0,w.cP)((e=>e.bagExpanded)),t=(0,w.dD)();return(0,n.jsxs)(ti,{isBagExpanded:e,children:[(0,n.jsx)(vi,{children:(0,n.jsx)(ui,{})}),(0,n.jsxs)(ei,{children:[(0,n.jsx)(Ft,{isMobile:t}),(0,n.jsx)(ii,{children:N})]}),(0,n.jsx)(ct,{})]})};var ri=i(32207),ai=i(57221);const si=(0,_.default)(l.ZP).withConfig({displayName:"UnavailableCollectionPage__Container",componentId:"sc-339e086d-0"})`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,oi=(0,_.default)(ie.dL).withConfig({displayName:"UnavailableCollectionPage__StyledExternalLink",componentId:"sc-339e086d-1"})`
  color: ${({theme:e})=>e.neutral2};
`;function li({isBlocked:e}){const t=(0,_.useTheme)();return e?(0,n.jsxs)(si,{children:[(0,n.jsx)(ai.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,n.jsx)(ie.Tv.HeadlineMedium,{children:(0,n.jsx)(F.cC,{id:"nSkGHi"})}),(0,n.jsx)(ie.m_,{to:"/nfts",children:(0,n.jsx)(F.cC,{id:"WFlfJ1"})}),(0,n.jsx)(oi,{href:ri.c.UNSUPPORTED_TOKEN_AND_NFT_POLICY,children:(0,n.jsx)(F.cC,{id:"f6ybgN"})})]}):(0,n.jsxs)(si,{children:[(0,n.jsx)(ie.Tv.HeadlineMedium,{children:(0,n.jsx)(F.cC,{id:"Ctk3ja"})}),(0,n.jsx)(ie.m_,{to:"/nfts",children:(0,n.jsx)(F.cC,{id:"WFlfJ1"})})]})}var di=i(437),ci=i(76907),pi=i(55874),hi=i(62587);const gi={},ui=(0,_.default)(p.X).withConfig({displayName:"collection__CollectionBannerLoading",componentId:"sc-fe84a8f9-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,mi=(0,_.default)(l.ZP).withConfig({displayName:"collection__CollectionContainer",componentId:"sc-fe84a8f9-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,xi=(0,ci.q)(mi),fi=_.default.div.withConfig({displayName:"collection__CollectionAssetsContainer",componentId:"sc-fe84a8f9-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,wi=(0,ci.q)(fi),vi=_.default.div.withConfig({displayName:"collection__BannerWrapper",componentId:"sc-fe84a8f9-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,yi=_.default.div.withConfig({displayName:"collection__Banner",componentId:"sc-fe84a8f9-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,ji=(0,_.default)(l.ZP).withConfig({displayName:"collection__CollectionDescriptionSection",componentId:"sc-fe84a8f9-5"})`
  ${Qt.bc}
`,bi=_.default.div.withConfig({displayName:"collection__FiltersContainer",componentId:"sc-fe84a8f9-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${hi.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,Ci=(0,_.default)(c.ZP).withConfig({displayName:"collection__MobileFilterHeader",componentId:"sc-fe84a8f9-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,_i=(0,_.default)(c.ZP).withConfig({displayName:"collection__CollectionDisplaySection",componentId:"sc-fe84a8f9-8"})`
  align-items: flex-start;
  position: relative;
`,ki=_.default.button.withConfig({displayName:"collection__IconWrapper",componentId:"sc-fe84a8f9-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${d.cR}
`,Ti=()=>{var e,t,i,l,d,c;const{contractAddress:p}=(0,Ne.UO)(),m=(0,w.dD)(),[x,f]=(0,w.wx)(),{pathname:v}=(0,Ne.TH)(),j=(0,Ne.s0)(),_=v.includes("/activity"),k=(0,w.PY)((e=>e.setMarketCount)),T=(0,w.cP)((e=>e.bagExpanded)),I=(0,w.cP)((e=>e.setBagExpanded)),{chainId:N}=(0,s.useWeb3React)(),z=(0,g.e)(),{data:P,loading:$}=(0,h.K)(p),{CollectionContainerWidthChange:E}=(0,ci.q_)({CollectionContainerWidthChange:T&&!m?(z.xxxl?u.zD:u.ZI)+16:0,config:{duration:pi.Kd.medium,easing:ci.Z5.easeOutSine}}),{gridWidthOffset:R}=(0,ci.q_)({gridWidthOffset:x&&!m?332:0,config:{duration:pi.Kd.medium,easing:ci.Z5.easeOutSine}});if((0,L.useEffect)((()=>{var e,t;const i={};null===(t=P)||void 0===t||null===(e=t.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{i[e]=t})),k(i)}),[null===(e=P)||void 0===e?void 0:e.marketplaceCount,k]),(0,L.useEffect)((()=>{T&&x&&!z.xl&&f(!1)}),[T,x,z,f]),(0,L.useEffect)((()=>{I({bagExpanded:!1,manualClose:!1})}),[]),$)return(0,n.jsx)(ni,{});if(!P.name)return(0,n.jsx)(li,{});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(di.Helmet,{children:(0,n.jsx)("title",{children:r.ag._({id:"wzwl3c",values:{0:P.name}})})}),(0,n.jsx)(o.fM,{page:a.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:p,chain_id:N,is_activity_view:_},shouldLogImpression:!0,children:(0,n.jsx)(xi,{style:{width:E.to((e=>`calc(100% - ${e}px)`))},children:p&&!y._P.includes(p)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vi,{children:(0,n.jsx)(yi,{src:(null===(t=P)||void 0===t?void 0:t.bannerImageUrl)?`${P.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,n.jsxs)(ji,{children:[P&&(0,n.jsx)(Bt,{stats:P,isMobile:m}),(0,n.jsx)("div",{id:"nft-anchor"}),(0,n.jsx)(S,{showActivity:_,toggleActivity:()=>{x&&f(!1),j(_?`/nfts/collection/${p}`:`/nfts/collection/${p}/activity`)}})]}),(0,n.jsxs)(_i,{children:[(0,n.jsx)(bi,{isMobile:m,isFiltersExpanded:x,children:x&&(0,n.jsxs)(n.Fragment,{children:[m&&(0,n.jsxs)(Ci,{children:[(0,n.jsx)(ie.Tv.HeadlineSmall,{children:"Filter"}),(0,n.jsx)(ki,{onClick:()=>f(!1),children:(0,n.jsx)(W.BW,{})})]}),(0,n.jsx)(Jt,{traitsByGroup:(null===(i=P)||void 0===i?void 0:i.traits)??gi})]})}),(0,n.jsx)(wi,{hideUnderneath:m&&(x||T),style:{transform:R.to((e=>`translate(${e}px)`)),width:R.to((e=>`calc(100% - ${e}px)`))},children:_?p&&(0,n.jsx)(C.cS,{contractAddress:p,rarityVerified:(null===(l=P)||void 0===l?void 0:l.rarityVerified)??!1,collectionName:(null===(d=P)||void 0===d?void 0:d.name)??"",chainId:N}):p&&P&&(0,n.jsx)(L.Suspense,{fallback:(0,n.jsx)(ct,{}),children:(0,n.jsx)(ht,{collectionStats:P,contractAddress:p,rarityVerified:null===(c=P)||void 0===c?void 0:c.rarityVerified})})})]})]}):(0,n.jsx)(li,{isBlocked:!0})})}),(0,n.jsx)(b,{})]})}}}]);
//# sourceMappingURL=9530.437552a5.chunk.js.map