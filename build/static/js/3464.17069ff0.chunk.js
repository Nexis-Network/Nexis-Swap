"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3464],{3464:(e,t,n)=>{n.d(t,{ZI:()=>_t,zD:()=>vt,ZP:()=>jt});var s=n(92936),r=n(31017),i=n(5985),o=n(47583),a=n(54690),d=n(66284),l=n(87254),c=n(76078),u=n(88846),p=n(25320),g=n(44591),x=n(63415),m=n(5967),h=n(94284),f=n(68999),I=n(82743),N=n(15824),T=n(57852),A=n(41390),C=n(25648),_=n(87685);C.ZP`
  query NftUniversalRouterAddress($chain: Chain = ETHEREUM) {
    nftRoute(chain: $chain, senderAddress: "", nftTrades: []) {
      toAddress
    }
  }
`;var v=n(39671),E=n(2802),w=n(32682),b=n(83102),y=n(68566),j=n(89882),P=n(64538),O=n(52384),k=n(5670),R=n(78635),S=n(45779),L=n(32115),B=n(91325);var z=n(47263),F=n(78129),D=n(59036),U=n(25408);function G(e,t,n){const{hasPriceAdjustment:s,updatedAssets:r}=(0,D.$)(e,t),i=s&&n,{unchanged:o,priceChanged:a,unavailable:d}=(0,U.K)(r),l=r.length>0,c=a.length>0,u=d.length>0,p=c||u,g=function(e,t,n){return[...e.map((e=>({asset:e,status:z.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:z.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:z.ZJ.REVIEWED})))]}(d,a,o),x=function(e,t,n,s){return e?t?n?z.s.IN_REVIEW:z.s.CONFIRM_REVIEW:s?z.s.CONFIRM_QUOTE:z.s.CONFIRMING_IN_WALLET:z.s.ADDING_TO_BAG}(l,p,c,i);return{newBagItems:g,nextBagStatus:x}}function H(e){return{action:z.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function M(e,t){const n=e.route?e.route.map(H):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var W=n(27009),$=n(32027);function V(e,t,n,s,r,i,o){try{var a=e[i](o),d=a.value}catch(l){return void n(l)}a.done?t(d):Promise.resolve(d).then(s,r)}function Z(){const{provider:e}=(0,u.useWeb3React)(),t=(0,W.p)((e=>e.sendTransaction)),n=(0,$.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:r,reset:i}=(0,P.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,S.useCallback)(function(){var o,a=(o=function*(o,a,d=!1){if(!e)return;const l=yield t(e.getSigner(),a,o,d);l&&(s(!1),n(l),r({bagExpanded:!1}),i())},function(){var e=this,t=arguments;return new Promise((function(n,s){var r=o.apply(e,t);function i(e){V(r,n,s,i,a,"next",e)}function a(e){V(r,n,s,i,a,"throw",e)}i(void 0)}))});return function(e,t){return a.apply(this,arguments)}}(),[e,i,t,r,s,n])}var q=n(47832),Y=n(92532);const K=(0,n(92490).F)()((0,q.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),Y.X);function X(e,t,n,s,r,i,o){try{var a=e[i](o),d=a.value}catch(l){return void n(l)}a.done?t(d):Promise.resolve(d).then(s,r)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var i=e.apply(t,n);function o(e){X(i,s,r,o,a,"next",e)}function a(e){X(i,s,r,o,a,"throw",e)}o(void 0)}))}}function Q(){const{account:e}=(0,u.useWeb3React)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:r,isLocked:i,setLocked:o,setItemsInBag:a}=(0,P.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:i,setItemsInBag:o})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:i,setItemsInBag:o}))),d=K((e=>e.tokenTradeInput)),l=(0,S.useMemo)((()=>(0,F.G7)(t)),[t]),[c]=(0,_.yoq)(),p=Z(),g=(0,S.useCallback)((()=>{s&&r(!1),!i&&o(!0),n(z.s.FETCHING_ROUTE)}),[i,s,o,n,r]);return(0,S.useCallback)(J((function*(){g(),c({variables:{senderAddress:e||"",nftTrades:(0,F.hI)(l),tokenTrades:d||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(z.s.ADDING_TO_BAG),void o(!1);const t=function(e){return e.filter((e=>e.status!==z.ZJ.UNAVAILABLE)).map((e=>e.asset))}(l),s=!!d,{route:r,routeResponse:i}=M(e.nftRoute,s),{newBagItems:c,nextBagStatus:u}=G(t,r,s);if(a(c),n(u),u===z.s.CONFIRMING_IN_WALLET)return p(i,t,s),void o(!0);o(!1)}})})),[e,c,l,p,g,o,n,a,d])}var ee=n(92650);function te(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function ne(e,t,n){const s=K((e=>e.setTokenTradeInput)),r=(0,B.pG)(e)&&e.routes,i=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,o=!!n&&!!t;(0,S.useEffect)((()=>{if(!r||!i||!o)return void s(void 0);const a=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:d,v2TokenTradeRouteInputs:l,v3TokenTradeRouteInputs:c}=function(e){const t=[],n=[],s=[],r=e.swaps;for(const i of r)i.route.protocol===ee.Protocol.MIXED?t.push(te(i)):i.route.protocol===ee.Protocol.V2?n.push(te(i)):s.push(te(i));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),u={mixedRoutes:d,tradeType:_.NSL.ExactOutput,v2Routes:l,v3Routes:c},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:p,routes:u,slippageToleranceBasisPoints:a,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,o,i,r,s,e])}var se=n(61152),re=n(66136),ie=n(2721);var oe,ae=n(43827),de=n(57221),le=n(86082),ce=n(54972);function ue(e,t,n,i,o){const a={handleClick:()=>{},buttonText:(0,s.jsx)(r.cC,{id:"nwtY4N"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[oe.WALLET_NOT_CONNECTED]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(r.cC,{id:"VHOVEJ"})},[oe.NOT_SUPPORTED_CHAIN]:{...a,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(r.cC,{id:"ffOtfc"}),disabled:!1,warningText:(0,s.jsx)(r.cC,{id:"IwI0rY"})},[oe.INSUFFICIENT_BALANCE]:{...a,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"}),warningText:(0,s.jsx)(r.cC,{id:"cPcTW+"})},[oe.ERROR]:{...a,warningText:(0,s.jsx)(r.cC,{id:"fWsBTs"})},[oe.IN_WALLET_CONFIRMATION]:{...a,buttonText:(0,s.jsx)(r.cC,{id:"CpEYLQ"})},[oe.PROCESSING_TRANSACTION]:{...a,buttonText:(0,s.jsx)(r.cC,{id:"SqYgw0"})},[oe.FETCHING_TOKEN_ROUTE]:{...a,buttonText:(0,s.jsx)(r.cC,{id:"hQHwxA"})},[oe.INVALID_TOKEN_ROUTE]:{...a,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"})},[oe.NO_TOKEN_ROUTE_FOUND]:{...a,buttonText:(0,s.jsx)(r.cC,{id:"dLAScn"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(r.cC,{id:"1u70J/"})},[oe.LOADING_ALLOWANCE]:{...a,buttonText:(0,s.jsx)(r.cC,{id:"TuN3Z4"})},[oe.IN_WALLET_ALLOWANCE_APPROVAL]:{...a,buttonText:(0,s.jsx)(r.cC,{id:"4k/lBP"})},[oe.PROCESSING_APPROVAL]:{...a,buttonText:(0,s.jsx)(r.cC,{id:"gHko4n"})},[oe.REQUIRE_APPROVAL]:{...a,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(r.cC,{id:"kpa6xe"}),buttonText:(0,s.jsx)(r.cC,{id:"Z7ZXbT"})},[oe.CONFIRM_UPDATED_PRICE]:{...a,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(r.cC,{id:"Ejd0wH"}),buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"})},[oe.PRICE_IMPACT_HIGH]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonColor:o?o.priceImpactSeverity.color:a.buttonColor,helperText:(0,s.jsx)(r.cC,{id:"NF0esC"}),helperTextColor:o?o.priceImpactSeverity.color:a.helperTextColor,buttonText:(0,s.jsx)(r.cC,{id:"2AEplS"})},[oe.PAY]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"}),helperText:i?(0,s.jsx)(r.cC,{id:"3BWxOM"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(oe||(oe={}));const pe=se.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-671223d7-0"})`
  padding: 0px 12px;
`,ge=se.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-671223d7-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,xe=(0,se.default)(g.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-671223d7-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,me=(0,se.default)(h.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-671223d7-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,he=(0,se.default)(g.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-671223d7-4"})`
  text-align: end;
  overflow: hidden;
`,fe=(0,se.default)(de.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-671223d7-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,Ie=(0,se.default)(ce.Tv.BodyPrimary).withConfig({displayName:"BagFooter__WarningText",componentId:"sc-671223d7-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,Ne=(0,se.default)(ce.Tv.BodySmall).withConfig({displayName:"BagFooter__HelperText",componentId:"sc-671223d7-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,Te=(0,se.default)(h.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-671223d7-8"})`
  gap: 8px;
  cursor: pointer;
`,Ae=se.default.button.withConfig({displayName:"BagFooter__ActionButton",componentId:"sc-671223d7-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,Ce=(0,se.default)(I.X).withConfig({displayName:"BagFooter__FiatLoadingBubble",componentId:"sc-671223d7-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,_e=(0,se.default)(h.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-671223d7-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,ve=(0,se.default)(h.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-671223d7-12"})`
  align-items: center;
  gap: 8px;
`,Ee=(0,se.default)(ce.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-671223d7-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,we=({color:e,children:t})=>t?(0,s.jsxs)(Ie,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(fe,{}),t]}):null,be=({children:e,color:t})=>e?(0,s.jsx)(Ne,{lineHeight:"16px",$color:t,children:e}):null,ye={onlyShowCurrenciesWithBalance:!0},je=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:i,trade:o})=>{var a;const{formatEther:d,formatNumberOrString:l}=(0,re.Gb)();var c;return e?i!==L.qx.LOADING||o?(0,s.jsx)(Ee,{color:i===L.qx.LOADING?"neutral3":"neutral1",children:l({input:null===(a=o)||void 0===a?void 0:a.inputAmount.toExact(),type:re.sw.NFTToken})}):(0,s.jsx)(ce.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(r.cC,{id:"hwuHLB"})}):(0,s.jsxs)(ce.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[d({input:t.toString(),type:re.sw.NFTToken}),"\xa0",(null===(c=n)||void 0===c?void 0:c.symbol)??"ETH"]})},Pe=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:i})=>{var o;const{formatNumberOrString:a}=(0,re.Gb)();return e?(0,s.jsxs)(_e,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(N.ud,{text:l.ag._({id:"KaCkzz"}),children:(0,s.jsxs)(ve,{children:[(0,s.jsx)(de.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(ce.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",(0,s.jsx)(r.cC,{id:"J/hVSQ",values:{0:t.displayPercentage()}}),")"]})]})})}),(0,s.jsx)(ce.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${a({input:null===(o=e)||void 0===o?void 0:o.toExact(),type:re.sw.FiatNFTToken})}`})]}):!i||n!==L.qx.INVALID&&n!==L.qx.NO_ROUTE_FOUND?(0,s.jsx)(Ce,{}):null},Oe=[z.s.FETCHING_ROUTE,z.s.CONFIRMING_IN_WALLET,z.s.FETCHING_FINAL_ROUTE,z.s.PROCESSING_TRANSACTION],ke=({setModalIsOpen:e,eventProperties:t})=>{var n,a,l,h;const I=(0,p.LK)(),N=(0,se.useTheme)(),{account:C,chainId:F,connector:D}=(0,u.useWeb3React)(),U=Boolean(C&&F),G=(0,O.P)(),{inputCurrency:H}=K((({inputCurrency:e})=>({inputCurrency:e}))),M=K((e=>e.setInputCurrency)),$=(0,v.U8)("ETH"),V=(0,y.mM)(C??void 0,H&&H.isToken?H:void 0),{isLocked:Z,bagStatus:q,setBagExpanded:Y,setBagStatus:X}=(0,P.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[J,ee]=(0,S.useState)(!1),te=Oe.includes(q),de=H??$,fe=!!H&&F===c.ChainId.MAINNET,{universalRouterAddress:Ie,universalRouterAddressIsLoading:Ne}=function(){var e,t;const{data:n,loading:s}=(0,_.Z6i)({fetchPolicy:"no-cache"});return{universalRouterAddress:null===(t=n)||void 0===t||null===(e=t.nftRoute)||void 0===e?void 0:e.toAddress,universalRouterAddressIsLoading:s}}();!function(e){const t=(0,W.p)((e=>e.state)),n=(0,W.p)((e=>e.setState)),s=(0,S.useRef)(t),{setBagStatus:r,setLocked:i}=(0,P.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,S.useEffect)((()=>{W.p.subscribe((e=>s.current=e.state))}),[]),(0,S.useEffect)((()=>{s.current===z.c$.Confirming&&r(z.s.PROCESSING_TRANSACTION),s.current!==z.c$.Denied&&s.current!==z.c$.Invalid||(s.current===z.c$.Invalid?r(z.s.WARNING):r(z.s.CONFIRM_REVIEW),n(z.c$.New),i(!1),e(!1))}),[i,r,e,n,s.current])}(e);const Ce=Q(),_e=(0,S.useMemo)((()=>(0,j.Z)((0,d.formatEther)(G.toString()),$??void 0)),[$,G]),{state:ve,trade:Ee,maximumAmountIn:ke,allowedSlippage:Re}=function(e,t){const{state:n,trade:s}=(0,R.C)(c.TradeType.EXACT_OUTPUT,t,e??void 0,L.R5.API),r=(0,k.Z)((0,B.pG)(s)?s:void 0),i=(0,S.useMemo)((()=>{var e,t;const n=null===(e=s)||void 0===e?void 0:e.maximumAmountIn(r);return(null===(t=n)||void 0===t?void 0:t.currency.isToken)?n:void 0}),[r,s]);return(0,S.useMemo)((()=>({state:n,trade:s,maximumAmountIn:i,allowedSlippage:r})),[r,i,n,s])}(fe?H:void 0,_e),Se=(0,E.Z)(ke,function(e,t){if(e)return e===c.ChainId.MAINNET?t??(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):(0,T.EC)(e)?(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):void 0}(F,Ie),L.d7.Classic),Le=Se.state===E.K.LOADING||Ne;ne(Ee,Se,Re);const Be=function(e){const t=(0,se.useTheme)(),{formatPercent:n}=(0,re.Gb)();return(0,S.useMemo)((()=>{const s=e?(0,ie.QW)(e):void 0,r=s?(0,ie.BK)(s):void 0,i="error"===r?t.critical:"warning"===r?t.deprecated_accentWarning:void 0;return s&&r&&i?{priceImpactSeverity:{type:r,color:i},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(Ee),ze=(0,w.sq)(null===(n=Ee)||void 0===n?void 0:n.inputAmount),Fe=(0,w.sq)(_e),De=fe?ze:Fe,{balance:Ue}=(0,ae.t)(),Ge=(0,S.useMemo)((()=>{if(U&&F===c.ChainId.MAINNET){if(H){var e;const t=null===(e=Ee)||void 0===e?void 0:e.inputAmount;if(!V||!t)return;return!V.lessThan(t)}return(0,d.parseEther)(Ue).gte(G)}}),[U,F,H,Ue,G,null===(a=Ee)||void 0===a?void 0:a.inputAmount,V]);(0,S.useEffect)((()=>{X(z.s.ADDING_TO_BAG)}),[H,X]);const He=(0,b.o)(),{buttonText:Me,buttonTextColor:We,disabled:$e,warningText:Ve,warningTextColor:Ze,helperText:qe,helperTextColor:Ye,handleClick:Ke,buttonColor:Xe}=(0,S.useMemo)((()=>{if(U&&F!==c.ChainId.MAINNET){const e=()=>He(D,c.ChainId.MAINNET);return ue(oe.NOT_SUPPORTED_CHAIN,N,e)}if(!1===Ge)return ue(oe.INSUFFICIENT_BALANCE,N);if(q===z.s.WARNING)return ue(oe.ERROR,N);if(!U){const e=()=>{I(),Y({bagExpanded:!1})};return ue(oe.WALLET_NOT_CONNECTED,N,e)}if(q===z.s.FETCHING_FINAL_ROUTE||q===z.s.CONFIRMING_IN_WALLET)return ue(oe.IN_WALLET_CONFIRMATION,N);if(q===z.s.PROCESSING_TRANSACTION)return ue(oe.PROCESSING_TRANSACTION,N);if(fe&&ve!==L.qx.VALID)return ve===L.qx.INVALID?ue(oe.INVALID_TOKEN_ROUTE,N):ve===L.qx.NO_ROUTE_FOUND?ue(oe.NO_TOKEN_ROUTE_FOUND,N):ue(oe.FETCHING_TOKEN_ROUTE,N);const e=Se.state===E.K.REQUIRED,t=()=>e&&Se.approveAndPermit();return Le?ue(oe.LOADING_ALLOWANCE,N,t):e?Se.isApprovalPending?ue(oe.IN_WALLET_ALLOWANCE_APPROVAL,N,t):Se.isApprovalLoading?ue(oe.PROCESSING_APPROVAL,N,t):ue(oe.REQUIRE_APPROVAL,N,t):q===z.s.CONFIRM_QUOTE?ue(oe.CONFIRM_UPDATED_PRICE,N,Ce):Be&&"error"===Be.priceImpactSeverity.type?ue(oe.PRICE_IMPACT_HIGH,N,Ce,fe,Be):ue(oe.PAY,N,Ce,fe)}),[U,F,Ge,q,fe,ve,Le,Se,Be,N,Ce,He,D,I,Y]),Je={usd_value:null===(l=De)||void 0===l?void 0:l.toExact(),using_erc20:!!H,...t};return(0,s.jsxs)(pe,{children:[(0,s.jsxs)(ge,{children:[(0,s.jsxs)(xe,{gap:"xs",children:[(0,s.jsxs)(me,{children:[(0,s.jsx)(g.ZP,{gap:"xs",children:(0,T.EC)(F)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ce.Tv.SubHeaderSmall,{children:(0,s.jsx)(r.cC,{id:"JQjhrO"})}),(0,s.jsxs)(Te,{onClick:()=>{Z||(ee(!0),(0,o._P)(i.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(m.Z,{currency:de,size:"24px"}),(0,s.jsx)(ce.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:null===(h=de)||void 0===h?void 0:h.symbol}),(0,s.jsx)(le.Z,{size:20,color:N.neutral2})]})]})}),(0,s.jsxs)(he,{gap:"xs",children:[(0,s.jsx)(ce.Tv.SubHeaderSmall,{children:(0,s.jsx)(r.cC,{id:"72c5Qo"})}),(0,s.jsx)(je,{usingPayWithAnyToken:fe,totalEthPrice:G,activeCurrency:de,tradeState:ve,trade:Ee})]})]}),(0,s.jsx)(Pe,{usdcValue:De,priceImpact:Be,tradeState:ve,usingPayWithAnyToken:fe})]}),(0,s.jsxs)(o.M8,{events:[i.TM.onClick],name:i.Yz.NFT_BUY_BAG_PAY,element:i.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...Je},shouldLogImpression:U&&!$e,children:[(0,s.jsx)(we,{color:Ze,children:Ve}),(0,s.jsx)(be,{color:Ye,children:qe}),(0,s.jsxs)(Ae,{"data-testid":"nft-buy-button",onClick:Ke,disabled:$e||te,$backgroundColor:Xe,$color:We,children:[te&&(0,s.jsx)(x.ZP,{size:"20px",stroke:"white"}),Me]})]})]}),(0,s.jsx)(f.Z,{isOpen:J,onDismiss:()=>ee(!1),onCurrencySelect:e=>{M(e.isNative?void 0:e),e.isToken&&(0,o._P)(i.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:de??void 0,currencySearchFilters:ye})]})};var Re=n(65851),Se=n(60040),Le=n(15288),Be=n(70518),ze=n(33426),Fe=n(62587),De=(n(6155),n(11604)),Ue=n(21989),Ge=n(69780);const He=se.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Me=se.default.circle.withConfig({displayName:"TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${He} linear;
  animation: ${He} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,We=()=>(0,s.jsx)(Re.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(Me,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var $e=n(62293),Ve=n(58690),Ze=n(68113),qe=n(23173),Ye=n(43454),Ke=(n(49484),"_1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l"),Xe="_1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x",Je="rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p",Qe="rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf",et="_1kuawc7",tt="rgw6ez3xr";const nt=(0,se.default)(Ge.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-2ecf14d3-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,st=(0,se.default)(Ge.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-2ecf14d3-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,rt=se.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-2ecf14d3-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,it=({onClick:e})=>(0,s.jsx)(rt,{onClick:e,children:(0,s.jsx)(Ve.Xv,{})}),ot=()=>(0,s.jsx)(Re.n,{position:"relative",background:"loadingBackground",className:Je,children:(0,s.jsxs)(Re.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),at=({asset:e,usdPrice:t,removeAsset:n,showRemove:r,grayscale:i,isMobile:o})=>{const{formatEther:a,formatNumberOrString:l}=(0,re.Gb)(),[c,u]=(0,S.useState)(!1),[p,g]=(0,S.useState)(!e.smallImageUrl),[x,m]=(0,S.useState)(!1),h=(0,S.useCallback)((()=>m(!0)),[]),f=(0,S.useCallback)((()=>m(!1)),[]),I=Boolean(r&&x&&!o),N=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,T=a({input:N,type:re.sw.NFTToken}),A=l({input:t?parseFloat((0,d.formatEther)(N))*t:t,type:re.sw.FiatNFTToken}),C=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)(Ye.rU,{to:(0,F.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(Le.X2,{className:Xe,onMouseEnter:h,onMouseLeave:f,children:[(0,s.jsxs)(Re.n,{position:"relative",display:"flex",children:[r&&o&&(0,s.jsx)(it,{onClick:C}),!p&&(0,s.jsx)(Re.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,Ue.default)(Je,i&&!x&&et),onLoad:()=>{u(!0)},onError:()=>{g(!0)},visibility:c?"visible":"hidden"}),!c&&(0,s.jsx)(Re.n,{position:"absolute",className:`${Je} ${qe.L}`}),p&&(0,s.jsx)(ot,{})]}),(0,s.jsxs)(Le.sg,{overflow:"hidden",width:"full",color:i?"neutral2":"neutral1",children:[(0,s.jsxs)(Le.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(Re.n,{className:Ke,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)($e.yT,{})]}),(0,s.jsxs)(Le.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(Re.n,{className:Qe,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(Ve.SA,{className:tt})]})]}),I&&(0,s.jsx)(nt,{onClick:C,emphasis:Ge.eI.medium,size:Ge.qE.medium,children:"Remove"}),(!I||o)&&(0,s.jsxs)(Le.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(Re.n,{className:"_1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr",children:[T,"\xa0ETH"]}),(0,s.jsx)(Re.n,{className:Qe,children:A})]})]})})},dt=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:r,isMobile:i})=>{var o;const{formatEther:a}=(0,re.Gb)(),d=De.O$.from(null===(o=e.updatedPriceInfo)||void 0===o?void 0:o.ETHPrice).gt(De.O$.from(e.priceInfo.ETHPrice)),l=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),c=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(Le.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3t3 rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez5yr rgw6ez1dr rgw6ez7zd",borderTopColor:r?"surface3":"transparent",children:[(0,s.jsxs)(Le.X2,{className:"rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4dr rgw6ez3sr",children:[d?(0,s.jsx)(Ve.PH,{}):(0,s.jsx)(Ve.HE,{}),(0,s.jsx)(Re.n,{children:`Price ${d?"increased":"decreased"} from ${a({input:e.priceInfo.ETHPrice,type:re.sw.NFTToken})} ETH`})]}),(0,s.jsx)(Re.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(at,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:i})}),(0,s.jsxs)(Le.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(st,{onClick:l,emphasis:Ge.eI.medium,size:Ge.qE.small,children:"Remove"}),(0,s.jsx)(st,{onClick:c,emphasis:Ge.eI.high,size:Ge.qE.small,children:"Keep"})]})]})},lt=({assets:e})=>(0,s.jsx)(Le.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(Re.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:et},`${e.address}-${e.tokenId}`)))}),ct=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:i,isMobile:o})=>{const[a,d]=(0,S.useReducer)((e=>!e),!1),[l,c]=(0,S.useState)(8);if((0,S.useEffect)((()=>{if(!l)return void(r||(n(),i(!1)));const e=setInterval((()=>{c(l-1)}),1e3);return()=>clearInterval(e)}),[l,n,r,i]),!e||0===e.length)return null;const u=e.length>1,p=a||!u;return(0,s.jsx)(Le.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3tf rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez6df rgw6ez5yr rgw6ez1dr",children:(0,s.jsxs)(Le.sg,{children:[(0,s.jsxs)(Le.X2,{justifyContent:"space-between",marginBottom:p?"12":"0",cursor:u?"pointer":"default",onClick:()=>{u&&(!r&&i(!0),d())},children:[(0,s.jsxs)(Le.X2,{gap:"12",color:"neutral2",className:Ze.Km,children:[!p&&(0,s.jsx)(lt,{assets:e.slice(0,5)}),"No longer available"]}),u&&(0,s.jsx)(Le.X2,{color:"neutral2",children:a?(0,s.jsx)(Ve.X_,{}):(0,s.jsx)(Ve.Xs,{})}),!r&&(0,s.jsxs)(Le.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(We,{}),(0,s.jsx)(Ve.Nb,{})]})]}),(0,s.jsx)(Le.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:p&&e.map((e=>(0,s.jsx)(at,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:o},e.id)))})]})})},ut=()=>{const e=(0,ze.cP)((e=>e.bagStatus)),t=(0,ze.cP)((e=>e.setBagStatus)),n=(0,ze.cP)((e=>e.markAssetAsReviewed)),r=(0,ze.cP)((e=>e.didOpenUnavailableAssets)),a=(0,ze.cP)((e=>e.setDidOpenUnavailableAssets)),d=(0,ze.cP)((e=>e.itemsInBag)),l=(0,ze.cP)((e=>e.setItemsInBag)),c=(0,ze.cP)((e=>e.removeAssetsFromBag)),u=(0,ze.dD)(),p=(0,S.useMemo)((()=>(0,F.G7)(d)),[d]),g=(0,ze.$N)(),{unchangedAssets:x,priceChangedAssets:m,unavailableAssets:h,availableItems:f}=(0,S.useMemo)((()=>({unchangedAssets:p.filter((e=>e.status===z.ZJ.ADDED_TO_BAG||e.status===z.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:p.filter((e=>e.status===z.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:p.filter((e=>e.status===z.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:p.filter((e=>e.status!==z.ZJ.UNAVAILABLE))})),[p]);return(0,S.useEffect)((()=>{const n=m.length>0,s=p.length>0;n&&(0,o._P)(i.Yz.NFT_BUY_BAG_CHANGED,{usd_value:g,bag_quantity:p,...(0,F.Hj)(m)}),e!==z.s.IN_REVIEW||n||t(s?z.s.CONFIRM_REVIEW:z.s.ADDING_TO_BAG),e!==z.s.CONFIRM_REVIEW||s||t(z.s.ADDING_TO_BAG)}),[e,p,m,t,g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Le.sg,{display:m.length>0||h.length>0?"flex":"none",children:[h.length>0&&(0,s.jsx)(o.fM,{name:i.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:g,bag_quantity:p.length,...(0,F.Hj)(h)},shouldLogImpression:!0,children:(0,s.jsx)(ct,{assets:h,usdPrice:g,clearUnavailableAssets:()=>l(f),didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:a,isMobile:u})}),m.map(((e,t)=>(0,s.jsx)(dt,{asset:e,usdPrice:g,markAssetAsReviewed:n,top:0===t&&0===h.length,isMobile:u},e.id)))]}),(0,s.jsx)(Le.sg,{children:x.slice(0).reverse().map((e=>(0,s.jsx)(at,{asset:e,usdPrice:g,removeAsset:c,showRemove:!0,isMobile:u},e.id)))})]})};var pt=n(68588);const gt=(0,se.default)(ce.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-feee1033-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,xt=se.default.button.withConfig({displayName:"BagHeader__IconWrapper",componentId:"sc-feee1033-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${pt.cR}
`,mt=se.default.div.withConfig({displayName:"BagHeader__CounterDot",componentId:"sc-feee1033-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,ht=se.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-feee1033-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,ft=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:i})=>{const o=(0,S.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(ht,{children:[(0,s.jsx)(ce.Tv.HeadlineSmall,{children:i?(0,s.jsx)(r.cC,{id:"xNB0TS"}):(0,s.jsx)(r.cC,{id:"EnO7qf"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(mt,{sizing:o,children:e}),(0,s.jsx)(gt,{onClick:n,children:(0,s.jsx)(r.cC,{id:"yYxB17"})})]}),(0,s.jsx)(xt,{onClick:t,children:(0,s.jsx)(Ve.BW,{"data-testid":"nft-bag-close-icon"})})]})};var It=n(27389);const Nt=(0,se.default)(Le.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`,Tt=()=>{const e=(0,a.e5)();return(0,s.jsxs)(Nt,{children:[(0,s.jsx)(Le.M5,{children:e?(0,s.jsx)(Ve.JP,{color:It.Z4.colors.neutral3}):(0,s.jsx)(Ve.Ln,{color:It.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(Le.M5,{"data-testid":"nft-no-nfts-selected",className:Ze.v4,children:"No NFTs selected"}):(0,s.jsxs)(Le.sg,{gap:"16",children:[(0,s.jsx)(Le.M5,{"data-testid":"nft-empty-bag",className:Ze.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(Le.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},At=({asset:e})=>{const t=(0,ze.Pc)((e=>e.removeSellAsset)),n=(0,ze.dD)(),[r,i]=(0,S.useState)(!1),o=()=>i(!r),a=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(Le.X2,{className:Xe,onMouseEnter:o,onMouseLeave:o,children:[(0,s.jsxs)(Re.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(it,{onClick:a}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:Je})]}),(0,s.jsxs)(Le.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(Le.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(Re.n,{className:Ke,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(Le.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(Re.n,{className:Qe,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(Ve.SA,{className:tt})]})]}),r&&!n&&(0,s.jsx)(nt,{onClick:a,emphasis:Ge.eI.medium,size:Ge.qE.medium,children:"Remove"})]})},Ct=()=>{const e=(0,ze.Pc)((e=>e.sellAssets));return(0,s.jsx)(Le.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(At,{asset:e},t))):null})},_t=320,vt=360,Et=se.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-83712a43-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${_t}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?Fe.k.modalOverTooltip:Fe.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${vt}px;
  }
`,wt=se.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-83712a43-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,bt=se.default.div.withConfig({displayName:"Bag__ContinueButton",componentId:"sc-83712a43-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,yt=({top:e,show:t})=>(0,s.jsx)(Re.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"}),jt=()=>{const{resetSellAssets:e,sellAssets:t}=(0,ze.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,ze.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:d,bagIsLocked:l,reset:c,bagExpanded:u,toggleBag:p,setBagExpanded:g}=(0,ze.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:x}=(0,ze.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),m=(0,a.e5)(),h=(0,a._3)(),f=(0,a.GZ)(),I=(0,ze.dD)(),N=(0,S.useMemo)((()=>(0,F.G7)(x)),[x]),[T,A]=(0,S.useState)(!1),{userCanScroll:C,scrollRef:_,scrollProgress:v,scrollHandler:E}=(0,ze.uh)(),w=(0,S.useCallback)((()=>{g({bagExpanded:!1,manualClose:!0})}),[g]);(0,S.useEffect)((()=>{l&&!T&&A(!0)}),[l,T]);const b=N.length>0,y=N.length>0,j=t.length>0,P=Boolean(!m&&!y&&d===z.s.ADDING_TO_BAG||m&&!j),O=(0,S.useMemo)((()=>({...(0,F.Hj)(N.map((e=>e.asset)))})),[N]);return u&&f?(0,s.jsxs)(Se.h,{children:[(0,s.jsxs)(Et,{"data-testid":"nft-bag",raiseZIndex:I||T,isProfilePage:m,children:[(0,s.jsx)(ft,{numberOfAssets:m?t.length:N.length,closeBag:w,resetFlow:m?e:c,isProfilePage:m}),P&&(0,s.jsx)(Tt,{}),(0,s.jsx)(yt,{top:!0,show:C&&v>0}),(0,s.jsx)(Le.sg,{ref:_,className:"_1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct",onScroll:E,gap:"12",children:m?(0,s.jsx)(Ct,{}):(0,s.jsx)(ut,{})}),b&&!m&&(0,s.jsx)(ke,{setModalIsOpen:A,eventProperties:O}),j&&m&&(0,s.jsx)(bt,{onClick:()=>{p(),n(z.HA.LISTING),(0,o._P)(i.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(r.cC,{id:"xGVfLh"})})]}),h?(0,s.jsx)(wt,{onClick:p}):T&&(0,s.jsx)(Be.a,{onClick:()=>l?void 0:A(!1)})]}):null}},70518:(e,t,n)=>{n.d(t,{a:()=>a,U:()=>o});var s=n(92936),r=n(15511),i=n(65851);n(6155);const o=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},a=({onClick:e=r.Z})=>(0,s.jsx)(i.n,{className:"_199qdl71 rgw6ez3f3 rgw6ez343 rgw6ez17l rgw6ez1ef rgw6ez48r rgw6ez44l rgw6ez4u3",onClick:e})},52384:(e,t,n)=>{n.d(t,{B:()=>p,P:()=>u});var s=n(11604),r=n(66284),i=n(39671),o=n(32682),a=n(89882),d=n(47263),l=n(45779),c=n(64538);function u(){const e=(0,c.c)((e=>e.itemsInBag));return(0,l.useMemo)((()=>e.reduce(((e,t)=>t.status!==d.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function p(){const e=u(),t=(0,i.U8)("ETH"),n=(0,l.useMemo)((()=>(0,a.Z)((0,r.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,o.sq)(n);return(0,l.useMemo)((()=>{var e;return null===(e=s)||void 0===e?void 0:e.toExact()}),[s])}}}]);
//# sourceMappingURL=3464.17069ff0.chunk.js.map