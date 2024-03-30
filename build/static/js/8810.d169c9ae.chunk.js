(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8810],{21510:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Go});var i=n(92936),o=n(31017),s=n(87254),a=n(5985),r=n(88846),d=n(47583),l=n(25320),c=n(69780),p=n(27179),u=n(3464),h=n(44591),m=n(94284),x=n(32682),f=n(24509),g=n(89882),w=n(60040),v=n(70518),y=n(45779),j=n(63194),C=n(57221),_=n(61152),b=n(66869),P=n(54972),I=n(62587),S=n(66136);const N=(0,_.default)(h.ZP).withConfig({displayName:"BelowFloorWarningModal__ModalWrapper",componentId:"sc-2aa83e4c-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${I.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${b.j$.sm}px) {
    width: 100%;
  }
`,k=_.default.div.withConfig({displayName:"BelowFloorWarningModal__CloseIconWrapper",componentId:"sc-2aa83e4c-1"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,T=(0,_.default)(j.Z).withConfig({displayName:"BelowFloorWarningModal__CloseIcon",componentId:"sc-2aa83e4c-2"})`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,$=_.default.div.withConfig({displayName:"BelowFloorWarningModal__HazardIconWrap",componentId:"sc-2aa83e4c-3"})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,R=(0,_.default)(c.DF).withConfig({displayName:"BelowFloorWarningModal__ContinueButton",componentId:"sc-2aa83e4c-4"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,E=_.default.span.withConfig({displayName:"BelowFloorWarningModal__EditListings",componentId:"sc-2aa83e4c-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,L=({listingsBelowFloor:e,closeModal:t,startListing:n})=>{const a=(0,_.useTheme)(),{formatDelta:r}=(0,S.Gb)();return(0,i.jsxs)(w.h,{children:[(0,i.jsxs)(N,{children:[(0,i.jsxs)(k,{children:[(0,i.jsx)(T,{width:24,height:24,onClick:t})," "]}),(0,i.jsx)($,{children:(0,i.jsx)(C.Z,{height:90,width:90,color:a.critical})}),(0,i.jsx)(P.Tv.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,i.jsx)(o.cC,{id:"nJdoNI"})}),(0,i.jsxs)(P.Tv.BodyPrimary,{textAlign:"center",children:[(0,i.jsx)(o.cC,{id:"+VPrZ3",values:{0:1!==e.length?2:1,1:s.ag._({id:"DK8H0x",values:{0:r(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)))}}),2:s.ag._({id:"7fIIB5",values:{0:e.length}})}}),"\xa0",(0,i.jsx)(o.cC,{id:"LngMh5"})]}),(0,i.jsx)(R,{onClick:e=>{e.preventDefault(),e.stopPropagation(),n(),t()},children:(0,i.jsx)(o.cC,{id:"xGVfLh"})}),(0,i.jsx)(E,{onClick:t,children:(0,i.jsx)(o.cC,{id:"jUcBoP"})})]}),(0,i.jsx)(v.a,{onClick:t})]})};var A=n(33426),M=n(35797),F=n(87685),O=n(63490),D=n.n(O);const B=_.default.div.withConfig({displayName:"shared__RemoveIconWrap",componentId:"sc-e1e0e3a1-0"})`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,Z=(0,_.default)(m.ZP).withConfig({displayName:"shared__TitleRow",componentId:"sc-e1e0e3a1-1"})`
  justify-content: space-between;
  margin-bottom: 8px;
`;var W,G;!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM"}(W||(W={})),function(e){e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE"}(G||(G={}));const H="0x59728544B08AB483533076417FbBB2fD0B17CE3a",z="0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051",V="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",X="0x1e0049783f008a0085193e00003d00cd54003c71",Y="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",J={[V]:X},K=1e4;function U(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){U(s,i,o,a,r,"next",e)}function r(e){U(s,i,o,a,r,"throw",e)}a(void 0)}))}}const Q="0xf849de01b080adc3a814fabe1e2087475cf2e354",ee="0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779",te=function(){var e=q((function*(e){const t=JSON.stringify(e),n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),o=setTimeout((()=>n.abort()),6e4);try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(s){return!1}finally{clearTimeout(o)}}));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=q((function*(e,t){var n,i,o,s;const a=`https://temp.gateway.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,r=yield fetch(a,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}});return null===(s=yield r.json())||void 0===s||null===(o=s.data)||void 0===o||null===(i=o.data)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.id}));return function(t,n){return e.apply(this,arguments)}}();var ie=n(47263),oe=n(11604),se=n(7937),ae=n(66284),re=n(5540),de=n(56079),le=n(13820);function ce(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}const pe=function(){var e,t=(e=function*(e){const t=yield fetch("https://temp.gateway.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(yield t.json()).success}catch(n){return!1}},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){ce(s,i,o,a,r,"next",e)}function r(e){ce(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();function ue(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}const he=function(){var e,t=(e=function*({params:e}){let t=!1;for(const o of Object.values(e))void 0===o&&(t=!0);if(t)return[];const n=yield fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),i=yield n.json();return i?i.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){ue(s,i,o,a,r,"next",e)}function r(e){ue(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();function me(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}function xe(){var e;return e=function*(e){const t=e?JSON.stringify(e):void 0,n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),o=setTimeout((()=>n.abort()),D()("60s"));try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(s){return!1}finally{clearTimeout(o)}},xe=function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){me(s,i,o,a,r,"next",e)}function r(e){me(s,i,o,a,r,"throw",e)}a(void 0)}))},xe.apply(this,arguments)}var fe=n(23399),ge=n(98282),we=n(31042),ve=n(46854),ye=n(73116),je=n(6412),Ce=n(30012);function _e(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}const be="tuple(uint256 price, bytes data)",Pe=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${be}[]`],Ie=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${be}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,Se=function(){var e,t=(e=function*(e,t){const n=we.$.encode(Pe,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),i=(0,je.keccak256)(n),o=yield e.send("personal_sign",[i,t.user]);t.r=`0x${o.slice(2,66)}`,t.s=`0x${o.slice(66,130)}`,t.v=parseInt(o.slice(130,132),16),Ne(t)},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){_e(s,i,o,a,r,"next",e)}function r(e){_e(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),Ne=e=>{e.v<27&&(e.v=e.v+27)},ke=e=>we.$.encode([Ie],[e]),Te=(e,t,n,i=F.hgB.Erc721)=>({salt:(()=>{const e=oe.O$.from((0,Ce.O)(16)).toHexString();return(0,ve.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:i===F.hgB.Erc721?1:2,deadline:t,currency:ye.d,dataMask:"0x",items:n.map((e=>{return{price:e.price,data:(t=e.tokens,we.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1});function $e(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}function Re(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){$e(s,i,o,a,r,"next",e)}function r(e){$e(s,i,o,a,r,"throw",e)}a(void 0)}))}}const Ee=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],Le=(e,t)=>({amount:e,recipient:t}),Ae=(e,t,n)=>{var i,o,s,a;const r=(null===(i=e)||void 0===i?void 0:i.basisPoints)??0,d=100*((null===(o=Ee.find((e=>"OpenSea"===e.name)))||void 0===o?void 0:o.fee)??0),l=K-r-d,c=t.mul(oe.O$.from(r)).div(oe.O$.from(K)).toString(),p=t.mul(oe.O$.from(l)).div(oe.O$.from(K)).toString(),u=t.mul(oe.O$.from(d)).div(oe.O$.from(K)).toString();return{sellerFee:Le(p,n),creatorFee:r>0?Le(c,(null===(a=e)||void 0===a||null===(s=a.asset_contract)||void 0===s?void 0:s.payout_address)??""):void 0,openSeaFee:d?Le(u,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};function Me(){return(Me=Re((function*(e,t,n,i,o=F.hgB.Erc721){const s=new se.Contract(t,o===F.hgB.Erc721?ge:fe,n),a=yield n.getAddress();try{if(yield s.isApprovedForAll(a,e))return void i(ie.Sb.APPROVED);i(ie.Sb.SIGNING);const t=yield s.setApprovalForAll(e,!0);i(ie.Sb.PENDING);1===(yield t.wait()).status?i(ie.Sb.APPROVED):i(ie.Sb.FAILED)}catch(r){4001===r.code?i(ie.Sb.REJECTED):i(ie.Sb.FAILED)}}))).apply(this,arguments)}function Fe(){return Fe=Re((function*(e,t,n,i,o=0,s){var a,r;const d=new re.A(i,{conduitKeyToConduit:J,overrides:{defaultConduitKey:V},seaportVersion:"1.5"}),l=yield n.getAddress(),c=null===(r=t.newListings)||void 0===r||null===(a=r.find((t=>t.marketplace.name===e.name)))||void 0===a?void 0:a.price;if(!c||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,ae.parseEther)(`${c}`),{sellerFee:n,creatorFee:i,openSeaFee:o}=Ae(t,e,l),a=[n,i,o].filter((e=>void 0!==e)),{executeAllActions:r}=yield d.createOrder({offer:[{itemType:t.asset_contract.tokenType===F.hgB.Erc721?de.ItemType.ERC721:de.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:a,endTime:t.expirationTime.toString(),zone:le.r_,allowPartialFills:!0},l),p={...yield r(),protocol_address:Y};s(ie.Sb.PENDING);const u=yield function(e){return xe.apply(this,arguments)}(p);return s(u?ie.Sb.APPROVED:ie.Sb.FAILED),u}catch(p){return 4001===p.code?s(ie.Sb.REJECTED):s(ie.Sb.FAILED),!1}case"LooksRare":{const e=M.Xg[M.HL.MAINNET],i=Math.round(Date.now()/1e3),a={isOrderAsk:!0,signer:l,collection:t.asset_contract.address,price:(0,ae.parseEther)(c.toString()),tokenId:oe.O$.from(t.tokenId),amount:oe.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:oe.O$.from(o),startTime:oe.O$.from(i),endTime:oe.O$.from(t.expirationTime),minPercentageToAsk:oe.O$.from(1e4).sub(oe.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const r=yield(0,M.tI)(n,M.HL.MAINNET,a,H);s(ie.Sb.PENDING);const d={signature:r,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:l,isOrderAsk:!0,nonce:o,amount:1,price:(0,ae.parseEther)(c.toString()).toString(),startTime:i,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=yield pe(d);return s(p?ie.Sb.APPROVED:ie.Sb.FAILED),p}catch(p){return 4001===p.code?s(ie.Sb.REJECTED):s(ie.Sb.FAILED),!1}}case"X2Y2":{const e={price:(0,ae.parseEther)(c.toString()),tokens:[{token:t.asset_contract.address,tokenId:oe.O$.from(t.tokenId),amount:1}]},n=Te(l,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=yield ne(t.asset_contract.address,t.tokenId);yield Se(i,n);const o={order:ke(n),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};s(ie.Sb.PENDING);const a=yield te(o);return s(a?ie.Sb.APPROVED:ie.Sb.FAILED),a}catch(p){return 4001===p.code?s(ie.Sb.REJECTED):s(ie.Sb.FAILED),!1}}default:return!1}})),Fe.apply(this,arguments)}function Oe(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}function De(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){Oe(s,i,o,a,r,"next",e)}function r(e){Oe(s,i,o,a,r,"throw",e)}a(void 0)}))}}function Be(e,t,n){return Ze.apply(this,arguments)}function Ze(){return Ze=De((function*(e,t,n){const i=()=>Be(e,t,n);n(e,ie.Sb.SIGNING,i);const{marketplace:o,collectionAddress:s,nftStandard:a}=e,r=M.Xg[M.HL.MAINNET],d="OpenSea"===o.name?X:"LooksRare"===o.name?e.nftStandard===F.hgB.Erc721?H:z:"X2Y2"===o.name?e.nftStandard===F.hgB.Erc721?Q:ee:r.TRANSFER_MANAGER_ERC721;s&&(yield function(e,t,n,i){return Me.apply(this,arguments)}(d,s,t,(t=>n(e,t,i)),a))})),Ze.apply(this,arguments)}function We(e,t,n,i,o,s){return Ge.apply(this,arguments)}function Ge(){return Ge=De((function*(e,t,n,i,o,s){const a=i(),r=()=>We(e,t,n,i,o,s);s(e,ie.Sb.SIGNING,r);const{asset:d,marketplace:l}=e,c=yield function(e,t,n,i){return Fe.apply(this,arguments)}(l,d,t,n,a,(t=>s(e,t,r)));c&&"LooksRare"===e.marketplace.name&&o(a+1)})),Ge.apply(this,arguments)}const He=e=>{const t=e.reduce(((e,t)=>{var n;if(null===(n=t.newListings)||void 0===n?void 0:n.length){var i;const n=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),o=n.marketplace.fee+("LooksRare"===n.marketplace.name?50:(null===(i=t)||void 0===i?void 0:i.basisPoints)??0)/100;return e+(n.price??0)-(n.price??0)*(o/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function ze(){const e=(0,A.Pc)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:n}=(0,A.zM)((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,y.useEffect)((()=>{const[i,o]=(e=>{const t=[],n=[];return e.forEach((e=>{var i;null===(i=e.marketplaces)||void 0===i||i.forEach((i=>{var o,s;const a={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:ie.Sb.DEFINED,asset:e,marketplace:i,price:null===(s=e.newListings)||void 0===s||null===(o=s.find((e=>e.marketplace.name===i.name)))||void 0===o?void 0:o.price};if(n.push(a),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===i.name))){const n={image:e.asset_contract.image_url,name:e.asset_contract.name,status:ie.Sb.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:i,nftStandard:e.asset_contract.tokenType};t.push(n)}}))})),[t,n]})(e);t(o),n(i)}),[e,n,t])}const Ve=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),Xe=(0,_.default)(c.Yd).withConfig({displayName:"ListingButton__StyledListingButton",componentId:"sc-720b119c-0"})`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${b.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,Ye=({onClick:e})=>{const{sellAssets:t,showResolveIssues:n,toggleShowResolveIssues:a,issues:r,setIssues:d}=(0,A.Pc)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:o})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:o}))),[l,c]=(0,y.useState)(!1),p=(0,A.dD)(),[u,h]=(0,y.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:i,listingsMissingPrice:o,listingsBelowFloor:s,listingsAboveSellOrderFloor:r}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<D()("60s")))),n=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>D()("180d"))),i=[],o=[],s=[];for(const r of e)if(r.newListings)for(const e of r.newListings){var a;e.price?e.price<.8*((null===(a=r)||void 0===a?void 0:a.floorPrice)??0)&&!e.overrideFloorPrice?o.push([r,e]):r.floor_sell_order_price&&e.price>=r.floor_sell_order_price&&r.asset_contract.tokenType!==F.hgB.Erc1155&&s.push([r,e]):i.push([r,e])}return{missingExpiration:t,overMaxExpiration:n,listingsMissingPrice:i,listingsBelowFloor:o,listingsAboveSellOrderFloor:s}})(t),l=Number(e)+Number(i)+o.length+r.length;return d(l),!l&&n&&a(),(e||i||r.length)&&!n&&a(),[o,s]}),[t,d,n,a]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Xe,{onClick:()=>{r?!n&&a():h.length?c(!0):e()},missingPrices:!!u.length,showResolveIssues:n,children:n?(0,i.jsx)(o.cC,{id:"KbR9EP",values:{0:1!==r?2:1,1:s.ag._({id:"mTYnTI",values:{issues:r}})}}):u.length&&!p?(0,i.jsx)(o.cC,{id:"FULt6J"}):(0,i.jsx)(o.cC,{id:"HmkXCG"})}),l&&(0,i.jsx)(L,{listingsBelowFloor:h,closeModal:()=>c(!1),startListing:e})]})};var Je=n(21926),Ke=n(68588),Ue=n(15824),qe=n(58690),Qe=n(81205),et=n(76623),tt=n(55874),nt=n(63415),it=n(78129),ot=n(7797),st=n(50901),at=n(62652);const rt=(0,_.default)(h.ZP).withConfig({displayName:"ContentRow__ContentColumn",componentId:"sc-ac4ccdd6-0"})`
  background-color: ${({theme:e,failed:t})=>t&&(0,at.jb)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,dt=(0,_.default)(m.ZP).withConfig({displayName:"ContentRow__ContentRowWrapper",componentId:"sc-ac4ccdd6-1"})`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,lt=_.default.img.withConfig({displayName:"ContentRow__CollectionIcon",componentId:"sc-ac4ccdd6-2"})`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,ct=_.default.img.withConfig({displayName:"ContentRow__AssetIcon",componentId:"sc-ac4ccdd6-3"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,pt=_.default.div.withConfig({displayName:"ContentRow__MarketplaceIcon",componentId:"sc-ac4ccdd6-4"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,ut=(0,_.default)(P.Tv.SubHeaderSmall).withConfig({displayName:"ContentRow__ContentName",componentId:"sc-ac4ccdd6-5"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,ht=_.default.span.withConfig({displayName:"ContentRow__ProceedText",componentId:"sc-ac4ccdd6-6"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,mt=_.default.span.withConfig({displayName:"ContentRow__FailedText",componentId:"sc-ac4ccdd6-7"})`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,xt=(0,_.default)(qe.SA).withConfig({displayName:"ContentRow__StyledVerifiedIcon",componentId:"sc-ac4ccdd6-8"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,ft=_.default.div.withConfig({displayName:"ContentRow__IconWrapper",componentId:"sc-ac4ccdd6-9"})`
  margin-left: auto;
  margin-right: 0px;
`,gt=(0,_.default)(m.ZP).withConfig({displayName:"ContentRow__ButtonRow",componentId:"sc-ac4ccdd6-10"})`
  padding: 0px 16px;
  justify-content: space-between;
`,wt=_.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,vt=_.default.button.withConfig({displayName:"ContentRow__RemoveButton",componentId:"sc-ac4ccdd6-11"})`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${wt}
`,yt=_.default.button.withConfig({displayName:"ContentRow__RetryButton",componentId:"sc-ac4ccdd6-12"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${wt}
`,jt=({row:e,isCollectionApprovalSection:t,removeRow:n})=>{const s=(0,_.useTheme)(),a=(0,y.useRef)(),r=e.status===ie.Sb.FAILED||e.status===ie.Sb.REJECTED;return(0,y.useEffect)((()=>{var t;e.status===ie.Sb.SIGNING&&(null===(t=a.current)||void 0===t||t.scroll)}),[e.status]),(0,i.jsxs)(rt,{failed:r,children:[(0,i.jsxs)(dt,{active:e.status===ie.Sb.SIGNING||e.status===ie.Sb.APPROVED,failed:r,ref:a,children:[t?(0,i.jsx)(lt,{src:e.image}):(0,i.jsx)(ct,{src:e.image}),(0,i.jsx)(pt,{children:(0,it.Dp)(e.marketplace.name,"24")}),(0,i.jsx)(ut,{children:e.name}),t&&e.isVerified&&(0,i.jsx)(xt,{}),(0,i.jsx)(ft,{children:e.status===ie.Sb.DEFINED||e.status===ie.Sb.PENDING?(0,i.jsx)(nt.ZP,{height:"14px",width:"14px",stroke:e.status===ie.Sb.PENDING?s.accent1:s.neutral3}):e.status===ie.Sb.SIGNING?(0,i.jsx)(ht,{children:(0,i.jsx)(o.cC,{id:"CpEYLQ"})}):e.status===ie.Sb.APPROVED?(0,i.jsx)(ot.Z,{height:"20",width:"20",stroke:s.success}):r&&(0,i.jsxs)(m.ZP,{children:[(0,i.jsx)(st.Z,{height:"20",width:"20",color:s.critical}),(0,i.jsx)(mt,{children:e.status===ie.Sb.FAILED?(0,i.jsx)(o.cC,{id:"7Bj3x9"}):(0,i.jsx)(o.cC,{id:"ekCRTP"})})]})})]}),r&&(0,i.jsxs)(gt,{justify:"space-between",children:[(0,i.jsx)(vt,{onClick:()=>n(e),children:(0,i.jsx)(o.cC,{id:"t/YqKh"})}),(0,i.jsx)(yt,{onClick:e.callback,children:(0,i.jsx)(o.cC,{id:"6gRgw8"})})]})]})},Ct=(0,_.default)(m.ZP).withConfig({displayName:"ListModalSection__SectionHeader",componentId:"sc-fe36f725-0"})`
  justify-content: space-between;
`,_t=(0,_.default)(P.Tv.SubHeader).withConfig({displayName:"ListModalSection__SectionTitle",componentId:"sc-fe36f725-1"})`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:n})=>n?e.success:t?e.neutral1:e.neutral2};
`,bt=(0,_.default)(qe.g8).withConfig({displayName:"ListModalSection__SectionArrow",componentId:"sc-fe36f725-2"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${tt.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,Pt=(0,_.default)(h.ZP).withConfig({displayName:"ListModalSection__SectionBody",componentId:"sc-fe36f725-3"})`
  border-left: 1.5px solid ${et.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${Ke.Zl}
`,It=(0,_.default)(Qe.Z).withConfig({displayName:"ListModalSection__StyledInfoIcon",componentId:"sc-fe36f725-4"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,St=(0,_.default)(h.ZP).withConfig({displayName:"ListModalSection__ContentRowContainer",componentId:"sc-fe36f725-5"})`
  gap: 8px;
  scroll-behavior: smooth;
`;var Nt;!function(e){e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN"}(Nt||(Nt={}));const kt=({sectionType:e,active:t,content:n,toggleSection:s})=>{const a=(0,_.useTheme)(),r=(0,A.Pc)((e=>e.sellAssets)),d=(0,A.Pc)((e=>e.removeAssetMarketplace)),l=(0,y.useMemo)((()=>!n.some((e=>e.status!==ie.Sb.APPROVED))),[n]),c=0===e,p=(0,y.useMemo)((()=>{if(c){const e=n.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[n,c]),u=e=>{if(c){const t=e;for(const e of r)e.asset_contract.address===t.collectionAddress&&d(e,t.marketplace)}else{const t=e;d(t.asset,t.marketplace)}};return(0,i.jsxs)(h.ZP,{children:[(0,i.jsxs)(Ct,{children:[(0,i.jsxs)(m.ZP,{children:[t||l?(0,i.jsx)(qe.bT,{fill:l?a.success:a.accent1}):(0,i.jsx)(qe.rD,{}),(0,i.jsx)(_t,{active:t,marginLeft:"12px",approved:l,children:c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.cC,{id:"Z7ZXbT"}),"\xa0",(0,i.jsx)(o.cC,{id:"8KNiOP",values:{0:p??1}})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.cC,{id:"c+Fnce"})," \xa0",n.length,"\xa0"," ",(0,i.jsx)(o.cC,{id:"OOoi9e",values:{0:n.length}})]})})]}),(0,i.jsx)(bt,{active:t,secondaryColor:t?a.neutral1:a.neutral2,onClick:s})]}),t&&(0,i.jsxs)(Pt,{children:[c&&(0,i.jsxs)(m.ZP,{height:"16px",marginBottom:"16px",children:[(0,i.jsx)(P.Tv.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,i.jsx)(o.cC,{id:"CSw5a/"})}),(0,i.jsx)(Ue.ud,{text:(0,i.jsx)(o.cC,{id:"VsETB7"}),children:(0,i.jsx)(It,{})})]}),(0,i.jsx)(St,{children:n.map((e=>{var t;return(0,i.jsx)(jt,{row:e,removeRow:u,isCollectionApprovalSection:c},(null===(t=e)||void 0===t?void 0:t.name)??e.marketplace.name)}))})]})]})};var Tt=n(81339);const $t=_.default.img.withConfig({displayName:"SuccessScreen__SuccessImage",componentId:"sc-abeb9f05-0"})`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,Rt=(0,_.default)(m.ZP).withConfig({displayName:"SuccessScreen__SuccessImageWrapper",componentId:"sc-abeb9f05-1"})`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${Ke.Zl}
`,Et=(0,_.default)(h.ZP).withConfig({displayName:"SuccessScreen__ProceedsColumn",componentId:"sc-abeb9f05-2"})`
  text-align: right;
`,Lt=_.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${b.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,At=_.default.button.withConfig({displayName:"SuccessScreen__ReturnButton",componentId:"sc-abeb9f05-3"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Lt}
`,Mt=_.default.a.withConfig({displayName:"SuccessScreen__TweetButton",componentId:"sc-abeb9f05-4"})`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${Lt}
`,Ft=(0,_.default)(m.ZP).withConfig({displayName:"SuccessScreen__TweetRow",componentId:"sc-abeb9f05-5"})`
  justify-content: center;
  gap: 4px;
`,Ot=({overlayClick:e})=>{const t=(0,_.useTheme)(),{formatNumberOrString:n}=(0,S.Gb)(),s=(0,A.Pc)((e=>e.sellAssets)),{chainId:a}=(0,r.useWeb3React)(),d=(0,f.Z)(a),{formatCurrencyAmount:l}=(0,S.Gb)(),c=(0,y.useMemo)((()=>He(s)),[s]),p=(0,g.Z)(c.toString(),d),u=(0,x.sq)(p);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Z,{children:[(0,i.jsxs)(P.Tv.HeadlineSmall,{lineHeight:"28px",children:[(0,i.jsx)(o.cC,{id:"n3Wa1f"}),"\xa0",s.length>1?` ${s.length} `:"","NFT",(0,it._6)(s.length),"!"]}),(0,i.jsx)(j.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,i.jsx)(Rt,{children:s.map((e=>{var t,n,o;return(0,i.jsx)($t,{src:e.imageUrl,numImages:s.length},(null===(n=e)||void 0===n||null===(t=n.asset_contract)||void 0===t?void 0:t.address)??""+(null===(o=e)||void 0===o?void 0:o.tokenId))}))}),(0,i.jsxs)(m.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,i.jsx)(P.Tv.SubHeader,{children:(0,i.jsx)(o.cC,{id:"ORzP3x"})}),(0,i.jsxs)(Et,{children:[(0,i.jsxs)(P.Tv.SubHeader,{children:[n({input:c,type:S.sw.NFTToken})," ETH"]}),u&&(0,i.jsx)(P.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:l({amount:u,type:S.sw.FiatTokenPrice})})]})]}),(0,i.jsxs)(m.ZP,{justify:"space-between",style:{flexWrap:"wrap"},children:[(0,i.jsx)(At,{onClick:()=>window.location.reload(),children:(0,i.jsx)(o.cC,{id:"eIO6eZ"})}),(0,i.jsx)(Mt,{href:(0,it.FX)(s),target:"_blank",rel:"noreferrer",children:(0,i.jsxs)(Ft,{children:[(0,i.jsx)(Tt.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,i.jsx)(o.cC,{id:"BMdkoo"})]})})]})]})};function Dt(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}const Bt=_.default.div.withConfig({displayName:"ListModal__ListModalWrapper",componentId:"sc-fe9992e0-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${I.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${b.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,Zt=({overlayClick:e})=>{var t;const{provider:n,chainId:s}=(0,r.useWeb3React)(),l=null===(t=n)||void 0===t?void 0:t.getSigner(),c=(0,d.oO)({modal:a.KO.NFT_LISTING}),{formatCurrencyAmount:p}=(0,S.Gb)(),u=(0,A.Pc)((e=>e.sellAssets)),{setListingStatusAndCallback:h,setLooksRareNonce:m,getLooksRareNonce:C,collectionsRequiringApproval:_,listings:b}=(0,A.zM)((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:o})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:o}))),I=(0,y.useMemo)((()=>He(u)),[u]),[N,k]=(0,y.useReducer)((e=>e===Nt.APPROVE?Nt.SIGN:Nt.APPROVE),Nt.APPROVE),T=(0,f.Z)(s),$=(0,g.Z)(I.toString(),T),R=p({amount:(0,x.sq)($),type:S.sw.FiatTokenPrice}),E=(0,y.useMemo)((()=>_.every((e=>e.status===ie.Sb.APPROVED))),[_]),L=(0,y.useMemo)((()=>b.every((e=>e.status===ie.Sb.APPROVED))),[b]),M=function(){var e,t=(e=function*(){if(l&&n){for(const e of b)yield We(e,l,n,C,m,h);(0,d._P)(a.Yz.NFT_LISTING_COMPLETED,{signatures_approved:b.filter((e=>e.status===ie.Sb.APPROVED)),list_quantity:b.length,usd_value:R,...c})}},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){Dt(s,i,o,a,r,"next",e)}function r(e){Dt(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,y.useEffect)((()=>{E&&(M(),N===Nt.APPROVE&&k())}),[E]);const F=(0,y.useCallback)((()=>{L?window.location.reload():e()}),[L,e]);return(0,y.useEffect)((()=>{!b.length&&F()}),[b,F]),(0,i.jsxs)(w.h,{children:[(0,i.jsx)(d.fM,{modal:a.KO.NFT_LISTING,children:(0,i.jsx)(Bt,{children:L?(0,i.jsx)(Ot,{overlayClick:F}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Z,{children:[(0,i.jsx)(P.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)(o.cC,{id:"k6Nkrt"})}),(0,i.jsx)(j.Z,{size:24,cursor:"pointer",onClick:F})]}),(0,i.jsx)(kt,{sectionType:Nt.APPROVE,active:N===Nt.APPROVE,content:_,toggleSection:k}),(0,i.jsx)(kt,{sectionType:Nt.SIGN,active:N===Nt.SIGN,content:b,toggleSection:k})]})})}),(0,i.jsx)(v.a,{onClick:F})]})};var Wt=n(30520),Gt=n(86082);const Ht=(0,_.default)(h.ZP).withConfig({displayName:"Dropdown__DropdownWrapper",componentId:"sc-2f0c6b6d-0"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,zt=(0,_.default)(m.ZP).withConfig({displayName:"Dropdown__DropdownRow",componentId:"sc-2f0c6b6d-1"})`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Vt=({dropDownOptions:e,width:t})=>{const n=(0,_.useTheme)();return(0,i.jsx)(Ht,{$width:t,children:e.map((e=>(0,i.jsxs)(zt,{onClick:e.onClick,children:[(0,i.jsx)(P.Tv.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,i.jsx)(ot.Z,{height:20,width:20,color:n.accent1})]},e.displayText)))})};var Xt=n(95684),Yt=n(43562),Jt=n(87175),Kt=n(68113),Ut=n(37246);const qt=(0,_.default)(h.ZP).withConfig({displayName:"PriceTextInput__PriceTextInputWrapper",componentId:"sc-99cc0811-0"})`
  gap: 12px;
  position: relative;
`,Qt=(0,_.default)(m.ZP).withConfig({displayName:"PriceTextInput__InputWrapper",componentId:"sc-99cc0811-1"})`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,en=_.default.div.withConfig({displayName:"PriceTextInput__CurrencyWrapper",componentId:"sc-99cc0811-2"})`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,tn=_.default.div.withConfig({displayName:"PriceTextInput__GlobalPriceIcon",componentId:"sc-99cc0811-3"})`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,nn=(0,_.default)(m.ZP).withConfig({displayName:"PriceTextInput__WarningRow",componentId:"sc-99cc0811-4"})`
  gap: 4px;
`,on=(0,_.default)(m.ZP).withConfig({displayName:"PriceTextInput__WarningMessage",componentId:"sc-99cc0811-5"})`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${b.j$.md}px) {
    right: unset;
  }
`,sn=_.default.div.withConfig({displayName:"PriceTextInput__WarningAction",componentId:"sc-99cc0811-6"})`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,an=e=>{let t=(0,i.jsx)(i.Fragment,{});switch(e){case G.BELOW_FLOOR:t=(0,i.jsx)(o.cC,{id:"rKgBmD"});break;case G.ALREADY_LISTED:t=(0,i.jsx)(o.cC,{id:"VnmT/F"})}return t},rn=({listPrice:e,setListPrice:t,isGlobalPrice:n,setGlobalOverride:s,globalOverride:a,asset:r})=>{var d;const{formatNumberOrString:l,formatDelta:c}=(0,S.Gb)(),[p,u]=(0,y.useState)(G.NONE),h=(0,A.Pc)((e=>e.removeSellAsset)),m=(0,A.Pc)((e=>e.showResolveIssues)),x=(0,y.useRef)(),f=(0,_.useTheme)(),g=100*(1-(e??0)/(r.floorPrice??0)),w=m&&!e||p===G.ALREADY_LISTED||p===G.BELOW_FLOOR&&g>=20?et.O9.red400:p===G.BELOW_FLOOR?f.deprecated_accentWarning:n||e?f.accent1:f.neutral2;return function(e,t,n,i){var o;(0,y.useEffect)((()=>{var o;e(G.NONE);const s=i??0;t.current.value=`${s}`,s<((null===(o=n)||void 0===o?void 0:o.floorPrice)??0)&&s>0?e(G.BELOW_FLOOR):n.floor_sell_order_price&&s>=n.floor_sell_order_price&&n.asset_contract.tokenType!==F.hgB.Erc1155&&e(G.ALREADY_LISTED)}),[n.asset_contract.tokenType,null===(o=n)||void 0===o?void 0:o.floorPrice,n.floor_sell_order_price,t,i,e])}(u,x,r,e),(0,i.jsxs)(qt,{children:[(0,i.jsxs)(Qt,{borderColor:w,children:[(0,i.jsx)(Jt.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:x,onChange:n=>{if(!e&&n.target.value.includes(".")&&0===parseFloat(n.target.value))return;const i=parseFloat(n.target.value);t(isNaN(i)?void 0:i)}}),(0,i.jsx)(en,{listPrice:e,children:"\xa0ETH"}),(n||a)&&(0,i.jsx)(tn,{onClick:()=>s(!a),children:a?(0,i.jsx)(qe.We,{}):(0,i.jsx)(Ut.Z,{size:20,color:w})})]}),(0,i.jsx)(on,{$color:w,children:p!==G.NONE&&(0,i.jsxs)(nn,{children:[(0,i.jsx)(C.Z,{height:16,width:16,color:w}),(0,i.jsxs)("span",{children:[p===G.BELOW_FLOOR&&`${c(g)} `,an(p),"\xa0",p===G.ALREADY_LISTED&&`${l({input:(null===(d=r)||void 0===d?void 0:d.floor_sell_order_price)??0,type:S.sw.NFTToken})} ETH`]}),(0,i.jsx)(sn,{onClick:()=>{p===G.ALREADY_LISTED&&h(r),u(G.NONE)},children:p===G.BELOW_FLOOR?(0,i.jsx)(o.cC,{id:"1QfxQT"}):(0,i.jsx)(o.cC,{id:"vop1s3"})})]})})]})},dn=(0,_.default)(m.ZP).withConfig({displayName:"RoyaltyTooltip__FeeWrap",componentId:"sc-d16e3c92-0"})`
  margin-bottom: 4px;
  justify-content: space-between;
`,ln=(0,_.default)(h.ZP).withConfig({displayName:"RoyaltyTooltip__RoyaltyContainer",componentId:"sc-d16e3c92-1"})`
  gap: 12px;
  padding: 4px 0px;
`,cn=_.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,pn=_.default.div.withConfig({displayName:"RoyaltyTooltip__MarketIcon",componentId:"sc-d16e3c92-2"})`
  border-radius: 4px;
  ${cn}
`,un=_.default.img.withConfig({displayName:"RoyaltyTooltip__CollectionIcon",componentId:"sc-d16e3c92-3"})`
  object-fit: cover;
  border-radius: 50%;
  ${cn}
`,hn=(0,_.default)(P.Tv.BodySmall).withConfig({displayName:"RoyaltyTooltip__FeePercent",componentId:"sc-d16e3c92-4"})`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,mn=(0,_.default)(m.ZP).withConfig({displayName:"RoyaltyTooltip__MaxFeeContainer",componentId:"sc-d16e3c92-5"})`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,xn=({selectedMarkets:e,asset:t,fees:n})=>{var s;const{formatNumberOrString:a,formatDelta:r}=(0,S.Gb)(),d=Math.max(...e.map((e=>Ve(e,t)??0)));return(0,i.jsxs)(ln,{children:[e.map((e=>{var n;return(0,i.jsxs)(dn,{children:[(0,i.jsxs)(m.ZP,{children:[(0,i.jsx)(pn,{children:(0,it.Dp)(e.name,"16")}),(0,i.jsxs)(P.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:[e.name,"\xa0",(0,i.jsx)(o.cC,{id:"9JsPP+"})]})]}),(0,i.jsx)(hn,{children:r(e.fee)})]},(null===(n=t.collection)||void 0===n?void 0:n.address)??""+t.tokenId+e.name+"fee")})),(0,i.jsxs)(dn,{children:[(0,i.jsxs)(m.ZP,{children:[(0,i.jsx)(un,{src:null===(s=t.collection)||void 0===s?void 0:s.imageUrl}),(0,i.jsx)(P.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,i.jsx)(o.cC,{id:"5KArrt"})})]}),(0,i.jsxs)(hn,{children:[d,"%"]})]}),(0,i.jsxs)(mn,{children:[(0,i.jsx)(P.Tv.BodySmall,{lineHeight:"16px",children:(0,i.jsx)(o.cC,{id:"b/e652"})}),(0,i.jsxs)(P.Tv.BodySmall,{lineHeight:"16px",color:n?"neutral1":"neutral2",children:[n?a({input:n,type:S.sw.NFTToken}):"-"," ETH"]})]})]})},fn=(0,_.default)(h.ZP).withConfig({displayName:"MarketplaceRow__LastPriceInfo",componentId:"sc-dd36ece7-0"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${b.j$.lg}px) {
    display: flex;
  }
`,gn=(0,_.default)(h.ZP).withConfig({displayName:"MarketplaceRow__FloorPriceInfo",componentId:"sc-dd36ece7-1"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,wn=(0,_.default)(B).withConfig({displayName:"MarketplaceRow__RemoveMarketplaceWrap",componentId:"sc-dd36ece7-2"})`
  top: 8px;
  left: 16px;
  z-index: 3;
`,vn=(0,_.default)(m.ZP).withConfig({displayName:"MarketplaceRow__MarketIconsWrapper",componentId:"sc-dd36ece7-3"})`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${b.j$.sm}px) {
    display: none;
  }
`,yn=(0,_.default)(h.ZP).withConfig({displayName:"MarketplaceRow__MarketIconWrapper",componentId:"sc-dd36ece7-4"})`
  position: relative;
  cursor: pointer;
`,jn=_.default.div.withConfig({displayName:"MarketplaceRow__MarketIcon",componentId:"sc-dd36ece7-5"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,Cn=_.default.div.withConfig({displayName:"MarketplaceRow__ExpandMarketIconWrapper",componentId:"sc-dd36ece7-6"})`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${b.j$.sm}px) {
    display: none;
  }
`,_n=(0,_.default)(h.ZP).withConfig({displayName:"MarketplaceRow__FeeColumnWrapper",componentId:"sc-dd36ece7-7"})`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,bn=_.default.div.withConfig({displayName:"MarketplaceRow__FeeWrapper",componentId:"sc-dd36ece7-8"})`
  width: min-content;
  white-space: nowrap;
`,Pn=(0,_.default)(h.ZP).withConfig({displayName:"MarketplaceRow__ReturnColumn",componentId:"sc-dd36ece7-9"})`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,In=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:n,selectedMarkets:o,removeMarket:a,asset:r,expandMarketplaceRows:d,toggleExpandMarketplaceRows:l,rowHovered:c})=>{const{formatNumberOrString:p,formatDelta:u}=(0,S.Gb)(),h=(0,A.Pc)((e=>e.setAssetListPrice)),x=(0,A.Pc)((e=>e.removeAssetMarketplace)),[f,g]=(0,y.useReducer)((e=>!e),!1),[w,v]=(0,y.useReducer)((e=>!e),!1),[j,C]=(0,y.useState)((()=>{var e,t;return null===(t=r.newListings)||void 0===t||null===(e=t.find((e=>{var t;return d?e.marketplace.name===(null===(t=o)||void 0===t?void 0:t[0].name):!!e.price})))||void 0===e?void 0:e.price})),[_,b]=(0,y.useState)(!1),I=e===W.SAME_PRICE&&!_,N=I?t:j,k=(0,y.useCallback)((e=>{I?n(e):C(e);for(const t of o)h(r,e,t)}),[r,o,h,n,I]),T=(0,y.useMemo)((()=>{let e=0;for(const t of o){const n=Ve(t,r)+t.fee;e=Math.max(n,e)}return e}),[r,o]),$=N&&N*T/100,R=N&&$&&N-$;return function(e,t,n,i,o){(0,y.useEffect)((()=>{let s;e?(i||t(o),s=o):s=i,n(s)}),[e])}(_,C,k,j,t),function(e,t,n,i,o,s,a){(0,y.useEffect)((()=>{var r;a===W.FLOOR_PRICE?(t(null===(r=e)||void 0===r?void 0:r.floorPrice),n(e.floorPrice)):a===W.LAST_PRICE?(t(e.lastPrice),n(e.lastPrice)):a===W.SAME_PRICE&&(o&&!s?n(o):t(s)),i(!1)}),[a])}(r,C,n,b,j,t,e),(0,y.useEffect)((()=>{I&&k(t)}),[t]),(0,i.jsxs)(m.ZP,{onMouseEnter:v,onMouseLeave:v,children:[(0,i.jsx)(gn,{children:(0,i.jsx)(P.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:p({input:r.floorPrice,type:S.sw.NFTToken})+r.floorPrice?" ETH":""})}),(0,i.jsx)(fn,{children:(0,i.jsx)(P.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:r.lastPrice?`${p({input:r.lastPrice,type:S.sw.NFTToken})} ETH`:"-"})}),(0,i.jsxs)(m.ZP,{flex:"2",children:[(d||o.length>1)&&(0,i.jsx)(vn,{onMouseEnter:g,onMouseLeave:g,children:o.map(((e,t)=>{var n;return(0,i.jsxs)(yn,{onClick:t=>{t.stopPropagation(),x(r,e),a&&a()},children:[(0,i.jsx)(jn,{index:t,children:(0,it.Dp)(e.name,"20")}),(0,i.jsx)(wn,{hovered:f&&(d??!1),children:(0,i.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+(null===(n=r.collection)||void 0===n?void 0:n.address)+r.tokenId)}))}),(0,i.jsx)(rn,{listPrice:N,setListPrice:k,isGlobalPrice:I,setGlobalOverride:b,globalOverride:_,asset:r}),c&&(d&&w||o.length>1)&&(0,i.jsx)(Cn,{onClick:l,children:d?(0,i.jsx)(qe.fJ,{}):(0,i.jsx)(qe.nG,{})})]}),(0,i.jsx)(_n,{children:(0,i.jsx)(Ue.ud,{text:(0,i.jsx)(xn,{selectedMarkets:o,asset:r,fees:$}),placement:"left",children:(0,i.jsx)(bn,{children:(0,i.jsx)(P.Tv.BodyPrimary,{color:"neutral2",children:T>0?`${u(T)}${o.length>1?s.ag._({id:"ydV21Q"}):""}`:"--%"})})})}),(0,i.jsx)(Pn,{children:(0,i.jsx)(Sn,{ethPrice:R})})]})},Sn=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,S.Gb)(),n=(0,Yt.$)();return(0,i.jsx)(m.ZP,{width:"100%",justify:"flex-end",children:(0,i.jsx)(P.Tv.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,i.jsxs)(h.ZP,{children:[(0,i.jsxs)("span",{children:[t({input:e,type:S.sw.NFTToken})," ETH"]}),(0,i.jsx)(P.Tv.BodyPrimary,{color:"neutral2",children:t({input:e*n,type:S.sw.FiatNFTToken})})]}):"- ETH"})})},Nn=(0,_.default)(m.ZP).withConfig({displayName:"NFTListRow__NFTListRowWrapper",componentId:"sc-18902c6d-0"})`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,kn=_.default.div.withConfig({displayName:"NFTListRow__RemoveIconContainer",componentId:"sc-18902c6d-1"})`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${b.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Tn=(0,_.default)(m.ZP).withConfig({displayName:"NFTListRow__NFTInfoWrapper",componentId:"sc-18902c6d-2"})`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 1.5;
  }
`,$n=_.default.img.withConfig({displayName:"NFTListRow__NFTImage",componentId:"sc-18902c6d-3"})`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,Rn=_.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,En=(0,_.default)(h.ZP).withConfig({displayName:"NFTListRow__TokenInfoWrapper",componentId:"sc-18902c6d-4"})`
  margin-right: 8px;
  min-width: 0px;
`,Ln=_.default.div.withConfig({displayName:"NFTListRow__TokenName",componentId:"sc-18902c6d-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${Rn}
`,An=(0,_.default)(P.Tv.BodySmall).withConfig({displayName:"NFTListRow__CollectionName",componentId:"sc-18902c6d-6"})`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${Rn};
`,Mn=(0,_.default)(h.ZP).withConfig({displayName:"NFTListRow__MarketPlaceRowWrapper",componentId:"sc-18902c6d-7"})`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 3;
  }
`,Fn=({asset:e,globalPriceMethod:t,globalPrice:n,setGlobalPrice:o,selectedMarkets:s})=>{var a;const[r,d]=(0,y.useReducer)((e=>!e),!1),l=(0,A.Pc)((e=>e.removeSellAsset)),[c,p]=(0,y.useState)([]),[u,h]=(0,y.useReducer)((e=>!e),!1),m=(0,_.useTheme)();return(0,y.useEffect)((()=>{p(JSON.parse(JSON.stringify(s)))}),[s]),(0,i.jsxs)(Nn,{onMouseEnter:()=>{!u&&h()},onMouseLeave:()=>{u&&h()},children:[(0,i.jsx)(kn,{children:u&&(0,i.jsx)(Xt.Z,{size:20,color:m.neutral2,cursor:"pointer",onClick:()=>{l(e)}})}),(0,i.jsxs)(Tn,{children:[(0,i.jsx)($n,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,i.jsxs)(En,{children:[(0,i.jsx)(Ln,{children:e.name?e.name:`#${e.tokenId}`}),(0,i.jsxs)(An,{children:[null===(a=e.collection)||void 0===a?void 0:a.name,e.collectionIsVerified&&(0,i.jsx)(qe.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,i.jsx)(Mn,{children:r&&c.length>1?c.map((s=>(0,i.jsx)(In,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:o,selectedMarkets:[s],removeMarket:()=>p(c.filter((e=>e.name!==s.name))),asset:e,expandMarketplaceRows:r,rowHovered:u,toggleExpandMarketplaceRows:d},e.name+s.name))):(0,i.jsx)(In,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:o,selectedMarkets:c,asset:e,rowHovered:u,toggleExpandMarketplaceRows:d})})]})},On=_.default.div.withConfig({displayName:"NFTListingsGrid__TableHeader",componentId:"sc-a77714fd-0"})`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${b.j$.sm}px) {
    padding-left: 48px;
  }
`,Dn=_.default.div.withConfig({displayName:"NFTListingsGrid__NFTHeader",componentId:"sc-a77714fd-1"})`
  flex: 2;

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 1.5;
  }
`,Bn=(0,_.default)(m.ZP).withConfig({displayName:"NFTListingsGrid__PriceHeaders",componentId:"sc-a77714fd-2"})`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 3;
  }
`,Zn=_.default.div.withConfig({displayName:"NFTListingsGrid__LastPriceHeader",componentId:"sc-a77714fd-3"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${b.j$.lg}px) {
    display: flex;
  }
`,Wn=_.default.div.withConfig({displayName:"NFTListingsGrid__FloorPriceHeader",componentId:"sc-a77714fd-4"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,Gn=(0,_.default)(m.ZP).withConfig({displayName:"NFTListingsGrid__DropdownAndHeaderWrapper",componentId:"sc-a77714fd-5"})`
  flex: 2;
  gap: 4px;
`,Hn=(0,_.default)(h.ZP).withConfig({displayName:"NFTListingsGrid__DropdownPromptContainer",componentId:"sc-a77714fd-6"})`
  position: relative;
  @media screen and (max-width: ${b.j$.sm}px) {
    display: none;
  }
`,zn=(0,_.default)(m.ZP).withConfig({displayName:"NFTListingsGrid__DropdownPrompt",componentId:"sc-a77714fd-7"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Vn=(0,_.default)(Gt.Z).withConfig({displayName:"NFTListingsGrid__DropdownChevron",componentId:"sc-a77714fd-8"})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Xn=_.default.div.withConfig({displayName:"NFTListingsGrid__DropdownContainer",componentId:"sc-a77714fd-9"})`
  position: absolute;
  top: 36px;
  right: 0px;
`,Yn=_.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,Jn=_.default.div.withConfig({displayName:"NFTListingsGrid__FeeHeader",componentId:"sc-a77714fd-10"})`
  flex: 1;
  ${Yn}
`,Kn=_.default.div.withConfig({displayName:"NFTListingsGrid__UserReceivesHeader",componentId:"sc-a77714fd-11"})`
  flex: 1.5;
  ${Yn}
`,Un=_.default.hr.withConfig({displayName:"NFTListingsGrid__RowDivider",componentId:"sc-a77714fd-12"})`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,qn=({selectedMarkets:e})=>{const t=(0,A.Pc)((e=>e.sellAssets)),[n,s]=(0,y.useState)(W.CUSTOM),[a,r]=(0,y.useState)(),[d,l]=(0,y.useReducer)((e=>!e),!1),c=(0,y.useRef)(null);(0,Wt.t)(c,d?l:void 0);const p=(0,y.useMemo)((()=>[{displayText:"Custom",isSelected:n===W.CUSTOM,onClick:()=>{s(W.CUSTOM),l()}},{displayText:"Floor price",isSelected:n===W.FLOOR_PRICE,onClick:()=>{s(W.FLOOR_PRICE),l()}},{displayText:"Last price",isSelected:n===W.LAST_PRICE,onClick:()=>{s(W.LAST_PRICE),l()}},{displayText:"Same price",isSelected:n===W.SAME_PRICE,onClick:()=>{s(W.SAME_PRICE),l()}}]),[n]);let u;switch(n){case W.CUSTOM:u=(0,i.jsx)(o.cC,{id:"8Tg/JR"});break;case W.FLOOR_PRICE:u=(0,i.jsx)(o.cC,{id:"IX1M/E"});break;case W.LAST_PRICE:u=(0,i.jsx)(o.cC,{id:"HoGOsT"});break;case W.SAME_PRICE:u=(0,i.jsx)(o.cC,{id:"uK2Qlr"})}return(0,i.jsxs)(h.ZP,{children:[(0,i.jsxs)(On,{children:[(0,i.jsx)(Dn,{children:(0,i.jsx)(o.cC,{id:"zJlXbX"})}),(0,i.jsxs)(Bn,{children:[(0,i.jsx)(Wn,{children:(0,i.jsx)(o.cC,{id:"WEXsZg"})}),(0,i.jsx)(Zn,{children:(0,i.jsx)(o.cC,{id:"RtKKbA"})}),(0,i.jsxs)(Gn,{ref:c,children:[(0,i.jsx)(o.cC,{id:"a7u1N9"}),(0,i.jsxs)(Hn,{children:[(0,i.jsxs)(zn,{onClick:l,children:[u," ",(0,i.jsx)(Vn,{isOpen:d})]}),d&&(0,i.jsx)(Xn,{children:(0,i.jsx)(Vt,{dropDownOptions:p,width:200})})]})]}),(0,i.jsx)(Jn,{children:(0,i.jsx)(o.cC,{id:"/mfICu"})}),(0,i.jsx)(Kn,{children:(0,i.jsx)(o.cC,{id:"88cUW+"})})]})]}),t.map((o=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Fn,{asset:o,globalPriceMethod:n,globalPrice:a,setGlobalPrice:r,selectedMarkets:e}),t.indexOf(o)<t.length-1&&(0,i.jsx)(Un,{})]})))]})};var Qn=n(90090),ei=n(15288),ti=n(4256),ni=n(27389);const ii=(0,_.default)(ei.X2).withConfig({displayName:"SelectMarketplacesDropdown__MarketplaceRowWrapper",componentId:"sc-45ca7e4-0"})`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,oi=_.default.div.withConfig({displayName:"SelectMarketplacesDropdown__FeeText",componentId:"sc-45ca7e4-1"})`
  color: ${({theme:e})=>e.neutral2};
`,si=(0,_.default)(ei.X2).withConfig({displayName:"SelectMarketplacesDropdown__HeaderButtonWrap",componentId:"sc-45ca7e4-2"})`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${Qn.T1}) {
    width: 220px;
  }
`,ai=_.default.div.withConfig({displayName:"SelectMarketplacesDropdown__HeaderButtonContentWrapper",componentId:"sc-45ca7e4-3"})`
  display: flex;
`,ri=_.default.div.withConfig({displayName:"SelectMarketplacesDropdown__MarketIcon",componentId:"sc-45ca7e4-4"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,di=(0,_.default)(qe.g8).withConfig({displayName:"SelectMarketplacesDropdown__Chevron",componentId:"sc-45ca7e4-5"})`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,li=_.default.div.withConfig({displayName:"SelectMarketplacesDropdown__ModalWrapper",componentId:"sc-45ca7e4-6"})`
  display: flex;
  flex-direction: column;
  position: relative;
`,ci=(0,_.default)(ei.sg).withConfig({displayName:"SelectMarketplacesDropdown__DropdownWrapper",componentId:"sc-45ca7e4-7"})`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${I.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,pi=({setSelectedMarkets:e,selectedMarkets:t})=>{const[n,o]=(0,y.useReducer)((e=>!e),!1),s=(0,y.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),a=(0,y.useRef)(null);return(0,Wt.t)(a,(()=>n&&o())),(0,i.jsxs)(li,{ref:a,children:[(0,i.jsxs)(si,{className:Kt.km,onClick:o,children:[(0,i.jsxs)(ai,{children:[t.map(((e,n)=>(0,i.jsx)(ri,{totalSelected:t.length,index:n,children:(0,it.Dp)(e.name,"20")},n))),s]}),(0,i.jsx)(di,{isOpen:n,secondaryColor:ni.Z4.colors.neutral1})]}),(0,i.jsx)(ci,{isOpen:n,children:Ee.map((n=>(({market:e,setSelectedMarkets:t,selectedMarkets:n})=>{const o=n.includes(e),[s,a]=(0,y.useReducer)((e=>!e),!1),r=()=>{1===n.length&&o||t(o?n.filter((t=>t!==e)):[...n,e])};return(0,i.jsxs)(ii,{onMouseEnter:a,onMouseLeave:a,onClick:r,children:[(0,i.jsxs)(ei.X2,{gap:"12",onClick:r,children:[(0,it.Dp)(e.name,"24"),(0,i.jsxs)(ei.sg,{children:[(0,i.jsx)(P.Tv.BodyPrimary,{children:e.name}),(0,i.jsxs)(oi,{className:Kt.VJ,children:[e.fee,"% fee"]})]})]}),(0,i.jsx)(ti.X,{hovered:s,checked:o,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,i.jsx)("span",{})})]})})({market:n,setSelectedMarkets:e,selectedMarkets:t})))})]})},ui=(0,_.default)(ei.sg).withConfig({displayName:"SetDurationModal__ModalWrapper",componentId:"sc-b747ba68-0"})`
  gap: 4px;
  position: relative;
`,hi=(0,_.default)(ei.X2).withConfig({displayName:"SetDurationModal__InputWrapper",componentId:"sc-b747ba68-1"})`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,mi=(0,_.default)(ei.X2).withConfig({displayName:"SetDurationModal__DropdownPrompt",componentId:"sc-b747ba68-2"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,xi=(0,_.default)(Gt.Z).withConfig({displayName:"SetDurationModal__DropdownChevron",componentId:"sc-b747ba68-3"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,fi=_.default.div.withConfig({displayName:"SetDurationModal__DropdownContainer",componentId:"sc-b747ba68-4"})`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${I.k.dropdown};
`,gi=(0,_.default)(ei.X2).withConfig({displayName:"SetDurationModal__ErrorMessage",componentId:"sc-b747ba68-5"})`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,wi=(0,_.default)(C.Z).withConfig({displayName:"SetDurationModal__WarningIcon",componentId:"sc-b747ba68-6"})`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;var vi,yi;!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(vi||(vi={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(yi||(yi={}));const ji=()=>{const[e,t]=(0,y.useState)(vi.day),[n,s]=(0,y.useState)("7"),[a,r]=(0,y.useState)(yi.valid),d=(0,A.Pc)((e=>e.setGlobalExpiration)),[l,c]=(0,y.useReducer)((e=>!e),!1),p=(0,y.useRef)(null);(0,Wt.t)(p,l?c:void 0);const u=(0,y.useMemo)((()=>[{displayText:"hours",isSelected:e===vi.hour,onClick:()=>{t(vi.hour),c()}},{displayText:"days",isSelected:e===vi.day,onClick:()=>{t(vi.day),c()}},{displayText:"weeks",isSelected:e===vi.week,onClick:()=>{t(vi.week),c()}},{displayText:"months",isSelected:e===vi.month,onClick:()=>{t(vi.month),c()}}]),[e]);let h;switch(e){case vi.hour:h=(0,i.jsx)(o.cC,{id:"JC1A6G",values:{amount:n}});break;case vi.day:h=(0,i.jsx)(o.cC,{id:"/TUNHz",values:{amount:n}});break;case vi.week:h=(0,i.jsx)(o.cC,{id:"v3mlu/",values:{amount:n}});break;case vi.month:h=(0,i.jsx)(o.cC,{id:"zo+8I3",values:{amount:n}})}return(0,y.useEffect)((()=>{const t=Ci(parseFloat(n),e);1e3*t-Date.now()<D()("60s")||isNaN(t)?r(yi.empty):1e3*t-Date.now()>D()("180d")?r(yi.overMax):r(yi.valid),d(t)}),[n,e,d]),(0,i.jsxs)(ui,{ref:p,children:[(0,i.jsxs)(hi,{isInvalid:a!==yi.valid,children:[(0,i.jsx)(Jt.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},value:n,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{s(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,i.jsxs)(mi,{onClick:c,children:[h," ",(0,i.jsx)(xi,{isOpen:l})]}),l&&(0,i.jsx)(fi,{children:(0,i.jsx)(Vt,{dropDownOptions:u,width:125})})]}),a!==yi.valid&&(0,i.jsxs)(gi,{className:Kt.VJ,children:[" ",(0,i.jsx)(wi,{})," ",a===yi.overMax?"Maximum 6 months":"Set duration"]})]})},Ci=(e,t)=>Math.round((Date.now()+D()("1h")*(()=>{switch(t){case vi.hour:return 1;case vi.day:return 24;case vi.week:return 168;default:return 720}})()*e)/1e3);function _i(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}const bi=(0,_.default)(h.ZP).withConfig({displayName:"ListPage__ListingHeader",componentId:"sc-f0009ca0-0"})`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${b.j$.xs}px) {
    gap: 4px;
  }
`,Pi=_.default.div.withConfig({displayName:"ListPage__ArrowContainer",componentId:"sc-f0009ca0-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${b.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,Ii=(0,_.default)(Je.Z).withConfig({displayName:"ListPage__BackArrow",componentId:"sc-f0009ca0-2"})`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${b.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,Si=(0,_.default)(m.ZP).withConfig({displayName:"ListPage__TitleWrapper",componentId:"sc-f0009ca0-3"})`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${b.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,Ni=(0,_.default)(m.ZP).withConfig({displayName:"ListPage__ButtonsWrapper",componentId:"sc-f0009ca0-4"})`
  gap: 12px;
  width: min-content;
`,ki=_.default.section.withConfig({displayName:"ListPage__MarketWrap",componentId:"sc-f0009ca0-5"})`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,Ti=(0,_.default)(m.ZP).withConfig({displayName:"ListPage__ListingHeaderRow",componentId:"sc-f0009ca0-6"})`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${b.j$.sm}px) {
    padding-left: 40px;
  }
`,$i=_.default.div.withConfig({displayName:"ListPage__GridWrapper",componentId:"sc-f0009ca0-7"})`
  margin-top: 24px;
  margin-bottom: 48px;
`,Ri=(0,_.default)(m.ZP).withConfig({displayName:"ListPage__FloatingConfirmationBar",componentId:"sc-f0009ca0-8"})`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>e.maxWidth};
  z-index: ${I.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${b.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${b.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,Ei=_.default.div.withConfig({displayName:"ListPage__Overlay",componentId:"sc-f0009ca0-9"})`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,Li=(0,_.default)(P.Tv.SubHeader).withConfig({displayName:"ListPage__UsdValue",componentId:"sc-f0009ca0-10"})`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${b.j$.lg}px) {
    display: flex;
  }
`,Ai=(0,_.default)(m.ZP).withConfig({displayName:"ListPage__ProceedsAndButtonWrapper",componentId:"sc-f0009ca0-11"})`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${b.j$.sm}px) {
    gap: 20px;
  }
`,Mi=(0,_.default)(m.ZP).withConfig({displayName:"ListPage__ProceedsWrapper",componentId:"sc-f0009ca0-12"})`
  width: min-content;
  gap: 16px;
`,Fi=_.default.span.withConfig({displayName:"ListPage__EthValueWrapper",componentId:"sc-f0009ca0-13"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${b.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Oi=()=>{var e;const{formatNumberOrString:t}=(0,S.Gb)(),{setProfilePageState:n}=(0,A.aO)(),{provider:s,chainId:l}=(0,r.useWeb3React)(),c=(0,A.dD)(),p=(0,d.oO)({modal:a.KO.NFT_LISTING}),{formatCurrencyAmount:u}=(0,S.Gb)(),{setGlobalMarketplaces:w,sellAssets:v,issues:j}=(0,A.Pc)((({setGlobalMarketplaces:e,sellAssets:t,issues:n})=>({setGlobalMarketplaces:e,sellAssets:t,issues:n}))),{listings:C,collectionsRequiringApproval:_,setCollectionStatusAndCallback:b}=(0,A.zM)((({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n}))),I=(0,y.useMemo)((()=>He(v)),[v]),N=(0,f.Z)(l),k=(0,g.Z)(I.toString(),N),T=(0,x.sq)(k),$=u({amount:T,type:S.sw.FiatTokenPrice}),[R,E]=(0,y.useReducer)((e=>!e),!1),[L,M]=(0,y.useState)([Ee[0]]),F=null===(e=s)||void 0===e?void 0:e.getSigner();ze(),(0,y.useEffect)((()=>{w(L)}),[L,w]);const O={collection_addresses:v.map((e=>e.asset_contract.address)),token_ids:v.map((e=>e.tokenId)),marketplaces:Array.from(new Set(C.map((e=>e.marketplace.name)))),list_quantity:C.length,usd_value:$,...p},D=function(){var e,t=(e=function*(){if(F){(0,d._P)(a.Yz.NFT_SELL_START_LISTING,{...O});for(const t of _)(e=t.status)!==ie.Sb.PAUSED&&e!==ie.Sb.APPROVED&&(c?yield Be(t,F,b):Be(t,F,b));var e}},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){_i(s,i,o,a,r,"next",e)}function r(e){_i(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),B=c?(0,i.jsx)(P.Tv.SubHeader,{children:(0,i.jsx)(o.cC,{id:"lDgVWA"})}):(0,i.jsx)(P.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)(o.cC,{id:"88cUW+"})});return(0,i.jsxs)(h.ZP,{children:[(0,i.jsxs)(ki,{children:[(0,i.jsxs)(bi,{children:[(0,i.jsxs)(m.ZP,{children:[(0,i.jsx)(Pi,{children:(0,i.jsx)(Ii,{onClick:()=>n(ie.HA.VIEWING)})}),(0,i.jsx)(P.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,i.jsx)(o.cC,{id:"/7Thkl"})})]}),(0,i.jsxs)(Ti,{children:[(0,i.jsx)(Si,{children:(0,i.jsx)(o.cC,{id:"EjWd3p"})}),(0,i.jsxs)(Ni,{children:[(0,i.jsx)(pi,{setSelectedMarkets:M,selectedMarkets:L}),(0,i.jsx)(ji,{})]})]})]}),(0,i.jsx)($i,{children:(0,i.jsx)(qn,{selectedMarkets:L})})]}),(0,i.jsxs)(Ri,{issues:!!j,children:[B,(0,i.jsxs)(Ai,{children:[(0,i.jsxs)(Mi,{children:[(0,i.jsxs)(Fi,{totalEthListingValue:!!I,children:[I>0?t({input:I,type:S.sw.NFTToken}):"-"," ","ETH"]}),!!T&&(0,i.jsx)(Li,{children:$})]}),(0,i.jsx)(Ye,{onClick:()=>{E(),D()}})]})]}),(0,i.jsx)(Ei,{}),R&&(0,i.jsx)(Zt,{overlayClick:E})]})};var Di=n(44952),Bi=n(27519),Zi=n(71291),Wi=n(34385),Gi=n(48714),Hi=n(52873),zi=n(82743),Vi=(n(35976),n(76907)),Xi=n(1285),Yi=n(43328),Ji=n(84820),Ki=n(15511);n(49484);const Ui=(0,_.default)(ei.sg).withConfig({displayName:"FilterSidebar__ItemsContainer",componentId:"sc-c7c26696-0"})`
  ${Ke.Zl}
  height: 100vh;
`,qi=(0,_.default)(zi.X).withConfig({displayName:"FilterSidebar__LongLoadingBubble",componentId:"sc-c7c26696-1"})`
  min-height: 15px;
  width: 75%;
`,Qi=(0,_.default)(zi.X).withConfig({displayName:"FilterSidebar__SmallLoadingBubble",componentId:"sc-c7c26696-2"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,eo=(0,_.default)(ei.X2).withConfig({displayName:"FilterSidebar__MobileMenuHeader",componentId:"sc-c7c26696-3"})`
  justify-content: space-between;
  padding-bottom: 8px;
`,to=({style:e})=>(0,i.jsxs)(ei.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,i.jsxs)(ei.X2,{display:"flex",flex:"1",children:[(0,i.jsx)(Qi,{}),(0,i.jsx)(qi,{})]}),(0,i.jsx)(Bi.n,{as:"span",borderColor:"surface3",className:"rgw6ez453 rgw6ezq9 rgw6ez80l rgw6ez19f rgw6ez12f rgw6ez7zp rgw6ez89d","aria-hidden":"true"})]}),no=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,walletCollections:o})=>{const s=(0,A.Pr)((e=>e.collectionFilters)),a=(0,A.Pr)((e=>e.setCollectionFilters)),[r,d]=(0,A.wx)(),l=(0,A.dD)(),{sidebarX:c}=(0,Vi.q_)({sidebarX:r?0:-360,config:{duration:tt.Kd.medium,easing:Vi.Z5.easeOutSine}}),p=(0,y.useMemo)((()=>{var e;return o&&(null===(e=o)||void 0===e?void 0:e.length)>=$o||n}),[o,n]);return(0,i.jsx)(Bi.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:r?"flex":"none",style:{transform:l?void 0:c.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,i.jsxs)(Bi.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[l&&(0,i.jsxs)(eo,{children:[(0,i.jsx)(P.Tv.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(qe.DX,{height:28,width:28,fill:ni.Z4.colors.neutral1,onClick:()=>d(!1)})]}),(0,i.jsx)(io,{collections:o,collectionFilters:s,setCollectionFilters:a,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,hideSearch:p})]})})},io=({collections:e,collectionFilters:t,setCollectionFilters:n,fetchNextPage:o,hasNextPage:s,isFetchingNextPage:a,hideSearch:r})=>{const[d,l]=(0,y.useState)(""),[c,p]=(0,y.useState)(e);(0,y.useEffect)((()=>{if(d){const t=e.filter((e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(d.toLowerCase())}));p(t)}else p(e)}),[d,e]);const u=(0,y.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),h=s?c.length+1:c.length,m=a?Ki.Z:o,x=(0,y.useCallback)((e=>!s||e<c.length),[c.length,s]),f=(0,y.useCallback)((({index:e,style:o})=>!(!!c&&c[e])||a?(0,i.jsx)(to,{style:o},e):(0,i.jsx)(so,{style:o,collection:c[e],collectionFilters:t,setCollectionFilters:n},u(e,c))),[c,a,u,t,n]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Bi.n,{className:Kt.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,i.jsx)(Bi.n,{paddingBottom:"12",borderRadius:"8",children:(0,i.jsxs)(ei.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!r&&(0,i.jsx)(oo,{collectionSearchText:d,setCollectionSearchText:l}),(0,i.jsx)(Ui,{children:(0,i.jsx)(Xi.ZP,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(Ji.Z,{isItemLoaded:x,itemCount:h,loadMoreItems:m,children:({onItemsRendered:t,ref:n})=>(0,i.jsx)(Yi.t7,{height:e,width:"100%",itemCount:h,itemSize:44,onItemsRendered:t,itemKey:u,ref:n,children:f})})})})]})})]})},oo=({collectionSearchText:e,setCollectionSearchText:t})=>(0,i.jsx)(Jt.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),so=({collection:e,collectionFilters:t,setCollectionFilters:n,style:o})=>{const[s,a]=(0,y.useState)(!1),[r,d]=(0,y.useReducer)((e=>!e),!1),l=(0,y.useCallback)((e=>t.some((t=>t===e))),[t]),c=()=>{a(!s),n(e.address)};return(0,i.jsxs)(ei.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...o},maxHeight:"44",as:"li",onMouseEnter:d,onMouseLeave:d,onClick:c,children:[(0,i.jsxs)(ei.X2,{children:[(0,i.jsx)(Bi.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsxs)(Bi.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,i.jsx)(ti.X,{checked:l(e.address),hovered:r,onChange:c,children:(0,i.jsx)(Bi.n,{as:"span",color:"neutral3",marginRight:"12",marginLeft:"auto",children:e.count})})]})};var ao=n(40976),ro=n(10581),lo=n(32276),co=n(41218),po=n(23173);const uo=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SkeletonBodyWrapper",componentId:"sc-a6ba35bc-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,ho=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SkeletonRowWrapper",componentId:"sc-a6ba35bc-1"})`
  display: flex;
  flex-direct: row;
  width: 100%;
`,mo=(0,_.default)(ho).withConfig({displayName:"ProfilePageLoadingSkeleton__AccountDetailsSkeletonWrapper",componentId:"sc-a6ba35bc-2"})`
  gap: 12px;
  margin-bottom: 30px;
`,xo=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__ProfileDetailsSkeleton",componentId:"sc-a6ba35bc-3"})`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,fo=(0,_.default)(ho).withConfig({displayName:"ProfilePageLoadingSkeleton__FilterBarSkeletonWrapper",componentId:"sc-a6ba35bc-4"})`
  justify-content: space-between;
`,go=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__FilterButtonSkeleton",componentId:"sc-a6ba35bc-5"})`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,wo=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SellButtonSkeleton",componentId:"sc-a6ba35bc-6"})`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,vo=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__ProfileAssetCardSkeleton",componentId:"sc-a6ba35bc-7"})`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,yo=()=>(0,i.jsx)(Bi.n,{width:"full",className:Wi.P,children:Array.from(Array(To),((e,t)=>(0,i.jsx)(vo,{className:po.S},t)))}),jo=()=>(0,i.jsxs)(uo,{children:[(0,i.jsx)(mo,{children:(0,i.jsx)(xo,{className:po.S})}),(0,i.jsxs)(fo,{children:[(0,i.jsx)(go,{className:po.S}),(0,i.jsx)(wo,{className:po.S})]}),(0,i.jsx)(yo,{})]});var Co=n(2798),_o=n(42601),bo=n(6282);const Po=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,hideDetails:s})=>{const r=(0,A.Pc)((e=>e.sellAssets)),l=(0,A.Pc)((e=>e.selectSellAsset)),c=(0,A.Pc)((e=>e.removeSellAsset)),p=(0,A.cP)((e=>e.bagExpanded)),u=(0,A.cP)((e=>e.toggleBag)),h=(0,A.dD)(),m=(0,bo.s0)(),x=(0,y.useMemo)((()=>r.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,r]),f=(0,d.oO)(),g=t=>{t?c(e):(l(e),(0,d._P)(a.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...f})),p||r.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||h||u()},w=e.susFlag,v=(0,y.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,i.jsx)(qe.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,i.jsx)(o.cC,{id:"77UrnP"}),notSelectedInfo:(0,i.jsx)(o.cC,{id:"9AgVn/"}),disabledInfo:(0,i.jsx)(o.cC,{id:"KWvmby"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,i.jsx)(Co.y,{asset:e,display:v,isSelected:x,isDisabled:Boolean(w),selectAsset:()=>g(!1),unselectAsset:()=>g(!0),onButtonClick:()=>g(x),onCardClick:()=>{s||m((0,_o.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,testId:"nft-profile-asset"})};function Io(e,t,n,i,o,s,a){try{var r=e[s](a),d=r.value}catch(l){return void n(l)}r.done?t(d):Promise.resolve(d).then(i,o)}const So=(0,_.default)(ei.sg).withConfig({displayName:"ProfilePage__ProfilePageColumn",componentId:"sc-c40541c2-0"})`
  ${ao.bc}
`,No=_.default.div.withConfig({displayName:"ProfilePage__ProfileHeader",componentId:"sc-c40541c2-1"})`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,ko=_.default.div.withConfig({displayName:"ProfilePage__EmptyStateContainer",componentId:"sc-c40541c2-2"})`
  margin-top: 164px;
`,To=25,$o=300,Ro=()=>{const{address:e}=(0,A.tM)(),t=(0,A.Pr)((e=>e.walletCollections)),n=(0,A.Pr)((e=>e.setWalletCollections)),{resetSellAssets:o}=(0,A.Pc)((({reset:e})=>({resetSellAssets:e}))),s=(0,A.Pc)((e=>e.sellAssets)),a=(0,A.cP)((e=>e.toggleBag)),[r,d]=(0,A.wx)(),l=(0,A.dD)(),c=function(){var t,n=(t=function*({pageParam:t=0}){return{data:yield he({params:{asset_owner:e,offset:""+t*$o,limit:`${$o}`}}),nextPage:t+1}},function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(e){Io(s,i,o,a,r,"next",e)}function r(e){Io(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}(),{data:p,fetchNextPage:u,hasNextPage:h,isFetchingNextPage:m,isSuccess:x}=(0,lo.useInfiniteQuery)(["ownerCollections",{address:e}],c,{getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:15e3,refetchIntervalInBackground:!1,refetchOnWindowFocus:!1,refetchOnMount:!1}),f=(0,y.useMemo)((()=>{var e;return x?null===(e=p)||void 0===e?void 0:e.pages.map((e=>e.data)).flat():null}),[x,p]);return(0,y.useEffect)((()=>{f&&n(f)}),[f,n]),(0,i.jsxs)(So,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(No,{children:"My NFTs"}),(0,i.jsxs)(ei.X2,{alignItems:"flex-start",position:"relative",children:[(0,i.jsx)(no,{fetchNextPage:u,hasNextPage:h,isFetchingNextPage:m,walletCollections:t}),(!l||!r)&&(0,i.jsx)(y.Suspense,{fallback:(0,i.jsx)(jo,{}),children:(0,i.jsx)(Eo,{walletCollections:t,isFiltersExpanded:r,setFiltersExpanded:d})})]})]}),s.length>0&&(0,i.jsxs)(ei.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:Kt.v4,children:[s.length," NFT",1===s.length?"":"s",(0,i.jsx)(Bi.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:o,lineHeight:"16",children:"Clear"}),(0,i.jsx)(Bi.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:a,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},Eo=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:n})=>{var o,s,a,r,d;const{address:l}=(0,A.tM)(),c=(0,A.Pr)((e=>e.setCollectionFilters)),p=(0,A.Pr)((e=>e.collectionFilters)),u=(0,A.Pr)((e=>e.clearCollectionFilters)),h=(0,A.cP)((e=>e.bagExpanded)),[m,x]=(0,y.useState)(),f=(0,A.dD)(),g=(0,A.Pc)((e=>e.sellAssets)),{walletAssets:w,loading:v,hasNext:j,loadMore:C}=(0,Di.b)(l,p,[],To),{gridX:_}=(0,Vi.q_)({gridX:t?300:-16,config:{duration:250,easing:Vi.Z5.easeOutSine}});return v?(0,i.jsx)(jo,{}):(0,i.jsx)(ei.sg,{width:"full",children:0===(null===(o=w)||void 0===o?void 0:o.length)?(0,i.jsx)(ko,{children:(0,i.jsx)(co.f,{})}):(0,i.jsxs)(Bi.x,{flexShrink:"0",position:f&&h?"fixed":"static",style:{transform:_.to((e=>`translate(${Number(e)-(!f&&t?300:-16)}px)`))},paddingY:"20",children:[(0,i.jsx)(ei.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,i.jsx)(Gi.L,{isMobile:f,isFiltersExpanded:t,onClick:()=>n(!t)})}),(0,i.jsx)(ei.X2,{children:(0,i.jsx)(Lo,{collections:e,collectionFilters:p,setCollectionFilters:c,clearCollectionFilters:u})}),(0,i.jsx)(ro.Z,{next:C,hasMore:j??!1,loader:Boolean(j&&(null===(s=w)||void 0===s?void 0:s.length))&&(0,i.jsx)(Zi.p,{count:To}),dataLength:(null===(a=w)||void 0===a?void 0:a.length)??0,className:(null===(r=w)||void 0===r?void 0:r.length)?Wi.P:void 0,style:{overflow:"unset"},children:(null===(d=w)||void 0===d?void 0:d.length)?w.map(((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(Po,{asset:e,mediaShouldBePlaying:e.tokenId===m,setCurrentTokenPlayingMedia:x,hideDetails:g.length>0})},t))):null})]})})},Lo=({collections:e,collectionFilters:t,setCollectionFilters:n,clearCollectionFilters:o})=>{var s,a;const r=t=>{var n;return null===(n=e)||void 0===n?void 0:n.find((e=>e.address===t))},d=(0,y.useCallback)((()=>o()),[o]);return(0,i.jsxs)(ei.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(null===(s=t)||void 0===s?void 0:s.length)&&t.map(((e,t)=>(0,i.jsx)(Ao,{collection:r(e),setCollectionFilters:n},`CollectionFilterItem-${e}-${t}`))),Boolean(null===(a=t)||void 0===a?void 0:a.length)&&(0,i.jsx)(Hi.v,{onClick:d,children:"Clear all"})]})},Ao=({collection:e,setCollectionFilters:t})=>{var n;return e?(0,i.jsxs)(ei.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,i.jsx)(Bi.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsx)(Bi.n,{marginLeft:"6",className:"_1bw5dlr8",children:null===(n=e)||void 0===n?void 0:n.name}),(0,i.jsx)(Bi.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,i.jsx)(qe.aM,{})})]}):null};var Mo=n(437),Fo=n(13446);const Oo=_.default.div.withConfig({displayName:"profile__ProfilePageWrapper",componentId:"sc-8702c4d9-0"})`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${b.j$.lg}px) {
    height: auto;
  }
`,Do=_.default.div.withConfig({displayName:"profile__LoadedAccountPage",componentId:"sc-8702c4d9-1"})`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?u.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${b.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,Bo=_.default.div.withConfig({displayName:"profile__Center",componentId:"sc-8702c4d9-2"})`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,Zo=(0,_.default)(c.DF).withConfig({displayName:"profile__ConnectWalletButton",componentId:"sc-8702c4d9-3"})`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function Wo(e,t){return e?t?s.ag._({id:"VUy8Qu",values:{ENSName:t}}):s.ag._({id:"YW7lOv",values:{0:(0,Fo.Xn)(e)}}):s.ag._({id:"ulc8rz"})}function Go(){const e=(0,A.aO)((e=>e.state)),t=(0,A.aO)((e=>e.setProfilePageState)),n=(0,A.Pc)((e=>e.reset)),s=(0,A.Pr)((e=>e.clearCollectionFilters)),{account:c}=(0,r.useWeb3React)(),{ENSName:u}=(0,p.Z)(c),h=(0,y.useRef)(c),m=(0,l.LK)();(0,y.useEffect)((()=>{h.current!==c&&(h.current=c,n(),t(ie.HA.VIEWING),s())}),[c,n,t,s]);const x=(0,A.cP)((e=>e.bagExpanded)),f=e===ie.HA.LISTING;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Mo.Helmet,{children:(0,i.jsx)("title",{children:Wo(c,u)})}),(0,i.jsx)(d.fM,{page:a.yJ.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:(0,i.jsx)(Oo,{children:c?(0,i.jsx)(Do,{cartExpanded:x,isListingNfts:f,children:f?(0,i.jsx)(Oi,{}):(0,i.jsx)(Ro,{})}):(0,i.jsxs)(Bo,{children:[(0,i.jsx)(P.Tv.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,i.jsx)(o.cC,{id:"xZBwjV"})}),(0,i.jsx)(Zo,{onClick:m,children:(0,i.jsx)(P.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,i.jsx)(o.cC,{id:"VHOVEJ"})})})]})})})]})}},50633:()=>{}}]);
//# sourceMappingURL=8810.d169c9ae.chunk.js.map