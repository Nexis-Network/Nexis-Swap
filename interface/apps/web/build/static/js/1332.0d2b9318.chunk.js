"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1332],{79833:(e,n,i)=>{i.d(n,{Z:()=>f});var t=i(92936),o=i(31017),a=i(80149),r=i(2108),d=i(57221),l=i(30335),s=i(22953),c=i(61152),u=i(54972);const h=c.default.div.withConfig({displayName:"TokenSafetyMessage__Label",componentId:"sc-1e5f49d3-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,v=c.default.div.withConfig({displayName:"TokenSafetyMessage__TitleRow",componentId:"sc-1e5f49d3-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,p=(0,c.default)(s.xv).withConfig({displayName:"TokenSafetyMessage__Title",componentId:"sc-1e5f49d3-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,x=c.default.div.withConfig({displayName:"TokenSafetyMessage__DetailsRow",componentId:"sc-1e5f49d3-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,m=(0,c.default)(u.dL).withConfig({displayName:"TokenSafetyMessage__StyledLink",componentId:"sc-1e5f49d3-4"})`
  color: ${({theme:e})=>e.accent1};

  font-weight: 535;
`;function f({warning:e,tokenAddress:n,plural:i=!1,tokenSymbol:s}){const c=(0,r.g)(e.level),u=(0,r.A)(e.level),{heading:f,description:y}=(0,a.N6)(e,i,s);return(0,t.jsxs)(h,{"data-cy":"token-safety-message",color:u,backgroundColor:c,children:[(0,a._x)(e)&&(0,t.jsxs)(v,{children:[e.canProceed?(0,t.jsx)(d.Z,{size:"16px"}):(0,t.jsx)(l.Z,{size:"16px"}),(0,t.jsx)(p,{marginLeft:"7px",children:e.message})]}),(0,t.jsxs)(x,{children:[f,Boolean(f)&&" ",y,Boolean(y)&&" ",n&&(0,t.jsx)(m,{href:a.W3,children:(0,t.jsx)(o.cC,{id:"zwWKhA"})})]})]})}},31332:(e,n,i)=>{i.r(n),i.d(n,{default:()=>mn});var t=i(92936),o=i(76078),a=i(88846),r=i(7789),d=i(31017),l=i(5985),s=i(47583),c=i(98961),u=i(79833),h=i(55575),v=i(26431),p=i(67968),x=i(71805),m=i(64370),f=i(18569),y=i(39671),j=i(76628),g=i(76110),C=i(3476),k=i(65480),b=i(76437),w=i(45779),T=i(51578),I=i(6282),N=i(61152),B=i(38004),_=i(94284),S=i(60847),M=i(87685),P=i(75748);const A=20;var L=i(64505);const E=[S.Oz.Transactions];function V({chainId:e,referenceToken:n}){const i=(0,L.Dv)(S.AY),a=(0,L.Dv)(S.$E),r=(0,w.useMemo)((()=>({sortBy:i,sortDirection:a?f.N9.Asc:f.N9.Desc})),[a,i]),{pools:d,loading:l,error:s,loadMore:c}=function(e,n,i){var t,a,r,d;const{loading:l,error:s,data:c,fetchMore:u}=(0,M.p71)({variables:{first:A,tokenAddress:e,chain:(0,f.Ld)(i)}}),{loading:h,error:v,data:p,fetchMore:x}=(0,M.wMB)({variables:{first:A,tokenAddress:e},skip:i!==o.ChainId.MAINNET}),m=l||h,y=s||v,j=(0,w.useRef)(!1),g=(0,w.useRef)(!1),C=(0,w.useRef)(A),k=(0,w.useCallback)((({onComplete:e})=>{var n,t,a,r,d,l,s,h;j.current||g.current&&i===o.ChainId.MAINNET||(j.current=!0,g.current=!0,C.current+=A,u({variables:{cursor:null===(r=c)||void 0===r||null===(a=r.topV3Pools)||void 0===a||null===(t=a[c.topV3Pools.length-1])||void 0===t||null===(n=t.totalLiquidity)||void 0===n?void 0:n.value},updateQuery:(n,{fetchMoreResult:t})=>{var a;if(!t||!n||!Object.keys(n).length)return n;g.current&&i===o.ChainId.MAINNET||null===(a=e)||void 0===a||a();const r={topV3Pools:[...(n.topV3Pools??[]).slice(),...(t.topV3Pools??[]).slice()]};return j.current=!1,r}}),i===o.ChainId.MAINNET&&x({variables:{cursor:null===(h=p)||void 0===h||null===(s=h.topV2Pairs)||void 0===s||null===(l=s[p.topV2Pairs.length-1])||void 0===l||null===(d=l.totalLiquidity)||void 0===d?void 0:d.value},updateQuery:(n,{fetchMoreResult:i})=>{var t;if(!i||!n||!Object.keys(n).length)return n;j.current||null===(t=e)||void 0===t||t();const o={topV2Pairs:[...(n.topV2Pairs??[]).slice(),...(i.topV2Pairs??[]).slice()]};return g.current=!1,o}}))}),[i,null===(t=p)||void 0===t?void 0:t.topV2Pairs,null===(a=c)||void 0===a?void 0:a.topV3Pools,x,u]);return(0,w.useMemo)((()=>{var e,i,t,o;const a=(null===(i=c)||void 0===i||null===(e=i.topV3Pools)||void 0===e?void 0:e.map((e=>{var n,i,t,o,a;return{hash:e.address,token0:e.token0,token1:e.token1,txCount:e.txCount,tvl:null===(n=e.totalLiquidity)||void 0===n?void 0:n.value,volume24h:null===(i=e.volume24h)||void 0===i?void 0:i.value,volumeWeek:null===(t=e.volumeWeek)||void 0===t?void 0:t.value,turnover:(0,P.MV)(null===(o=e.volume24h)||void 0===o?void 0:o.value,null===(a=e.totalLiquidity)||void 0===a?void 0:a.value,e.feeTier),feeTier:e.feeTier,protocolVersion:e.protocolVersion}})))??[],r=(null===(o=p)||void 0===o||null===(t=o.topV2Pairs)||void 0===t?void 0:t.map((e=>{var n,i,t,o,a;return{hash:e.address,token0:e.token0,token1:e.token1,txCount:e.txCount,tvl:null===(n=e.totalLiquidity)||void 0===n?void 0:n.value,volume24h:null===(i=e.volume24h)||void 0===i?void 0:i.value,volumeWeek:null===(t=e.volumeWeek)||void 0===t?void 0:t.value,turnover:(0,P.MV)(null===(o=e.volume24h)||void 0===o?void 0:o.value,null===(a=e.totalLiquidity)||void 0===a?void 0:a.value,P.y9),feeTier:P.y9,protocolVersion:e.protocolVersion}})))??[],d=(0,P.s$)([...a,...r],n).slice(0,C.current);return{loading:m,error:y,pools:d,loadMore:k}}),[null===(r=p)||void 0===r?void 0:r.topV2Pairs,null===(d=c)||void 0===d?void 0:d.topV3Pools,y,k,m,n])}(n.address,r,e),u=(0,L.oC)(S.AY),h=(0,L.oC)(S.$E);return(0,w.useEffect)((()=>{u(),h()}),[h,u]),(0,t.jsx)("div",{"data-testid":`tdp-pools-table-${n.address.toLowerCase()}`,children:(0,t.jsx)(S.NE,{pools:d,loading:l,error:s,chainId:e,maxHeight:600,hiddenColumns:E,loadMore:c})})}var $,F=i(54972),R=i(73705),D=i(66789),W=i(53083),Z=i(57144),O=i(23388);!function(e){e.BUY="Buy",e.SELL="Sell"}($||($={}));const z=25;var U=i(63945),H=i(95685),Q=i(13446),q=i(66136),Y=i(54703);const G=(0,N.default)(F.Tv.BodyPrimary).withConfig({displayName:"TransactionsTable__StyledSwapAmount",componentId:"sc-33ace590-0"})`
  display: inline-block;
  ${F.cw}
  max-width: 75px;
`,K=N.default.div.withConfig({displayName:"TransactionsTable__TableWrapper",componentId:"sc-33ace590-1"})`
  min-height: 158px;
`;function X({chainId:e,referenceToken:n}){const i=(0,H.XB)(),{formatNumber:a,formatFiatPrice:r}=(0,q.Gb)(),[l,s]=(0,w.useReducer)((e=>!e),!1),[c,u]=(0,w.useState)([$.BUY,$.SELL]),[h]=(0,w.useState)({sortBy:U.AI.Timestamp,sortDirection:U.N9.Desc}),{transactions:v,loading:p,loadMore:x,error:m}=function(e,n,i=[$.BUY,$.SELL]){var t,a,r,d,l,s,c,u;const{data:h,loading:v,fetchMore:p,error:x}=(0,M.KfE)({variables:{address:e.toLowerCase(),chain:(0,f.Ld)(n),first:z}}),{data:m,loading:y,error:j,fetchMore:g}=(0,M.t5Z)({variables:{address:e.toLowerCase(),first:z},skip:n!==o.ChainId.MAINNET}),C=(0,w.useRef)(!1),k=(0,w.useRef)(!1),b=(0,w.useRef)(z),T=(0,w.useCallback)((({onComplete:e})=>{var i,t,a,r,d,l,s,c,u,v;C.current||k.current&&n===o.ChainId.MAINNET||(C.current=!0,k.current=!0,b.current+=z,p({variables:{cursor:null===(d=h)||void 0===d||null===(r=d.token)||void 0===r||null===(a=r.v3Transactions)||void 0===a||null===(i=a[(null===(t=h.token)||void 0===t?void 0:t.v3Transactions.length)-1])||void 0===i?void 0:i.timestamp},updateQuery:(i,{fetchMoreResult:t})=>{var a,r,d,l,s,c,u;if(!t)return i;k.current&&n===o.ChainId.MAINNET||null===(a=e)||void 0===a||a();const h={token:{...i.token,id:(null===(d=i)||void 0===d||null===(r=d.token)||void 0===r?void 0:r.id)??"",chain:(null===(s=i)||void 0===s||null===(l=s.token)||void 0===l?void 0:l.chain)??M.qop.Ethereum,v3Transactions:[...(null===(c=i.token)||void 0===c?void 0:c.v3Transactions)??[],...(null===(u=t.token)||void 0===u?void 0:u.v3Transactions)??[]]}};return C.current=!1,h}}),n==o.ChainId.MAINNET&&g({variables:{cursor:null===(v=m)||void 0===v||null===(u=v.token)||void 0===u||null===(c=u.v2Transactions)||void 0===c||null===(l=c[(null===(s=m.token)||void 0===s?void 0:s.v2Transactions.length)-1])||void 0===l?void 0:l.timestamp},updateQuery:(n,{fetchMoreResult:i})=>{var t,o,a,r,d,l,s;if(!i)return n;C.current||null===(t=e)||void 0===t||t();const c={token:{...n.token,id:(null===(a=n)||void 0===a||null===(o=a.token)||void 0===o?void 0:o.id)??"",chain:(null===(d=n)||void 0===d||null===(r=d.token)||void 0===r?void 0:r.chain)??M.qop.Ethereum,v2Transactions:[...(null===(l=n.token)||void 0===l?void 0:l.v2Transactions)??[],...(null===(s=i.token)||void 0===s?void 0:s.v2Transactions)??[]]}};return k.current=!1,c}}))}),[n,null===(a=m)||void 0===a||null===(t=a.token)||void 0===t?void 0:t.v2Transactions,null===(d=h)||void 0===d||null===(r=d.token)||void 0===r?void 0:r.v3Transactions,g,p]),I=(0,w.useMemo)((()=>{var n,t,o,a,r,d;return[...(null===(o=h)||void 0===o||null===(t=o.token)||void 0===t||null===(n=t.v3Transactions)||void 0===n?void 0:n.filter((n=>{var t;const o=(null===(t=(parseFloat(n.token0Quantity)<0?n.token0:n.token1).address)||void 0===t?void 0:t.toLowerCase())===e.toLowerCase();return n.type===M.uGm.Swap&&i.includes(o?$.SELL:$.BUY)})))??[],...(null===(d=m)||void 0===d||null===(r=d.token)||void 0===r||null===(a=r.v2Transactions)||void 0===a?void 0:a.filter((n=>{var t;const o=(null===(t=(parseFloat(n.token0Quantity)<0?n.token0:n.token1).address)||void 0===t?void 0:t.toLowerCase())===e.toLowerCase();return n.type===M.uGm.Swap&&i.includes(o?$.SELL:$.BUY)})))??[]].sort(((e,n)=>n.timestamp-e.timestamp)).slice(0,b.current)}),[e,null===(s=m)||void 0===s||null===(l=s.token)||void 0===l?void 0:l.v2Transactions,null===(u=h)||void 0===u||null===(c=u.token)||void 0===c?void 0:c.v3Transactions,i]);return(0,w.useMemo)((()=>({transactions:I,loading:v||y,loadMore:T,error:j||x})),[I,v,y,T,j,x])}(n.address,e,c),y=(0,f.vR)(e,n),j=(0,w.useMemo)((()=>v.map((e=>{const n={address:e.token0.address,symbol:e.token0.symbol,amount:parseFloat(e.token0Quantity),token:e.token0},i={address:e.token1.address,symbol:e.token1.symbol,amount:parseFloat(e.token1Quantity),token:e.token1},t=parseFloat(e.token0Quantity)<0;return{hash:e.hash,timestamp:e.timestamp,input:t?n:i,output:t?i:n,usdValue:e.usdValue.value,makerAddress:e.account}}))),[v]),g=p||!!m,C=(0,w.useMemo)((()=>{const o=(0,R.Cl)();return[o.accessor((e=>e),{id:"timestamp",header:()=>(0,t.jsx)(W.b,{minWidth:120,justifyContent:"flex-start",grow:!0,children:(0,t.jsxs)(_.ZP,{gap:"xs",children:[h.sortBy===U.AI.Timestamp&&(0,t.jsx)(O.iX,{direction:h.sortDirection}),(0,t.jsx)(O.Hu,{$active:h.sortBy===U.AI.Timestamp,children:(0,t.jsx)(d.cC,{id:"LhMjLm"})})]})}),cell:n=>{var i,o,a,r;return(0,t.jsx)(W.b,{loading:g,minWidth:120,justifyContent:"flex-start",grow:!0,children:(0,t.jsx)(O._q,{timestamp:Number(null===(i=(o=n).getValue)||void 0===i?void 0:i.call(o).timestamp),link:(0,Y.E)(e,null===(a=(r=n).getValue)||void 0===a?void 0:a.call(r).hash,Y.r.TRANSACTION)})})}}),o.accessor((e=>e.output.address),{id:"swap-type",header:()=>(0,t.jsx)(W.b,{minWidth:75,justifyContent:"flex-start",grow:!0,children:(0,t.jsxs)(O.j4,{modalOpen:l,onClick:s,children:[(0,t.jsx)(Z.w,{allFilters:Object.values($),activeFilter:c,setFilters:u,isOpen:l,toggleFilterModal:s}),(0,t.jsx)(F.Tv.BodySecondary,{children:(0,t.jsx)(d.cC,{id:"+zy2Nq"})})]})}),cell:e=>{var i,o;const a=String(null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o)).toLowerCase()===n.address.toLowerCase();return(0,t.jsx)(W.b,{loading:g,minWidth:75,justifyContent:"flex-start",grow:!0,children:(0,t.jsx)(F.Tv.BodyPrimary,{color:a?"success":"critical",children:a?(0,t.jsx)(d.cC,{id:"qiOIiY"}):(0,t.jsx)(d.cC,{id:"xNB0TS"})})})}}),o.accessor((e=>{var i;return(null===(i=e.input.address)||void 0===i?void 0:i.toLowerCase())===n.address.toLowerCase()?e.input.amount:e.output.amount}),{id:"reference-amount",header:()=>(0,t.jsx)(W.b,{minWidth:100,justifyContent:"flex-end",children:(0,t.jsxs)(F.Tv.BodySecondary,{children:["$",y.symbol]})}),cell:e=>{var n,i;return(0,t.jsx)(W.b,{loading:g,minWidth:100,justifyContent:"flex-end",children:(0,t.jsx)(F.Tv.BodyPrimary,{children:a({input:Math.abs(null===(n=(i=e).getValue)||void 0===n?void 0:n.call(i))||0})})})}}),o.accessor((e=>{var i;const o=(null===(i=e.input.address)||void 0===i?void 0:i.toLowerCase())===n.address.toLowerCase()?e.output:e.input;return(0,t.jsxs)(_.ZP,{gap:"8px",justify:"flex-end",children:[(0,t.jsx)(G,{children:a({input:Math.abs(o.amount)||0})}),(0,t.jsx)(O.Jn,{token:o.token})]})}),{id:"non-reference-amount",header:()=>(0,t.jsx)(W.b,{minWidth:160,justifyContent:"flex-end",children:(0,t.jsx)(F.Tv.BodySecondary,{children:(0,t.jsx)(d.cC,{id:"YHpbe1"})})}),cell:e=>{var n,i;return(0,t.jsx)(W.b,{loading:g,minWidth:160,justifyContent:"flex-end",children:null===(n=(i=e).getValue)||void 0===n?void 0:n.call(i)})}}),o.accessor((e=>e.usdValue),{id:"fiat-value",header:()=>(0,t.jsx)(W.b,{minWidth:125,justifyContent:"flex-end",children:(0,t.jsxs)(_.ZP,{gap:"xs",justify:"flex-end",children:[h.sortBy===U.AI.AmountUsd&&(0,t.jsx)(O.iX,{direction:h.sortDirection}),(0,t.jsx)(O.Hu,{$active:h.sortBy===U.AI.AmountUsd,children:i})]})}),cell:e=>{var n,i;return(0,t.jsx)(W.b,{loading:g,minWidth:125,justifyContent:"flex-end",children:(0,t.jsx)(F.Tv.BodyPrimary,{children:r({price:null===(n=(i=e).getValue)||void 0===n?void 0:n.call(i)})})})}}),o.accessor((e=>e.makerAddress),{id:"maker-address",header:()=>(0,t.jsx)(W.b,{minWidth:150,justifyContent:"flex-end",children:(0,t.jsx)(F.Tv.BodySecondary,{children:(0,t.jsx)(d.cC,{id:"sb9Y58"})})}),cell:n=>{var i,o,a,r;return(0,t.jsx)(W.b,{loading:g,minWidth:150,justifyContent:"flex-end",children:(0,t.jsx)(O.Bq,{href:(0,Y.E)(e,null===(i=(o=n).getValue)||void 0===i?void 0:i.call(o),Y.r.ADDRESS),children:(0,Q.Xn)(null===(a=(r=n).getValue)||void 0===a?void 0:a.call(r))})})}})]}),[h.sortBy,h.sortDirection,g,e,l,c,n.address,y.symbol,a,i,r]);return(0,t.jsx)(K,{children:(0,t.jsx)(D.i,{columns:C,data:j,loading:p,error:m,loadMore:x,maxHeight:600})})}const J=N.default.div.withConfig({displayName:"ActivitySection__Container",componentId:"sc-8d99992d-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
`,ee=(0,N.default)(F.Tv.HeadlineMedium).withConfig({displayName:"ActivitySection__Tab",componentId:"sc-8d99992d-1"})`
  cursor: pointer;
  color: ${({isActive:e,theme:n})=>e?n.neutral1:n.neutral2};
  ${F.iV};
`;var ne;function ie(){const{wrapped:e,chainId:n}=(0,b.U)().currency,[i,o]=(0,w.useState)(ne.Txs);return e?(0,t.jsxs)(J,{"data-testid":"token-details-activity-section",children:[(0,t.jsxs)(_.ZP,{gap:"24px",marginBottom:"24px",id:"activity-header",children:[(0,t.jsx)(ee,{isActive:i===ne.Txs,onClick:()=>o(ne.Txs),children:(0,t.jsx)(d.cC,{id:"4wyw8H"})}),(0,t.jsx)(ee,{isActive:i===ne.Pools,onClick:()=>o(ne.Pools),children:(0,t.jsx)(d.cC,{id:"lQfOr9"})})]}),i===ne.Txs&&(0,t.jsx)(X,{chainId:n,referenceToken:e}),i===ne.Pools&&(0,t.jsx)(V,{chainId:n,referenceToken:e})]}):null}!function(e){e[e.Txs=0]="Txs",e[e.Pools=1]="Pools"}(ne||(ne={}));var te=i(47236);const oe=N.default.div.withConfig({displayName:"BalanceSummary__BalancesCard",componentId:"sc-21ee44a9-0"})`
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: fit-content;
  width: 100%;

  // 768 hardcoded to match NFT-redesign navbar breakpoints
  // src/nft/css/sprinkles.css.ts
  // change to match theme breakpoints when this navbar is updated
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,ae=N.default.div.withConfig({displayName:"BalanceSummary__BalanceSection",componentId:"sc-21ee44a9-1"})`
  height: fit-content;
  width: 100%;
`,re=N.default.div.withConfig({displayName:"BalanceSummary__BalanceRow",componentId:"sc-21ee44a9-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`,de=N.default.div.withConfig({displayName:"BalanceSummary__BalanceItem",componentId:"sc-21ee44a9-3"})`
  display: flex;
  align-items: center;
`,le=N.default.div.withConfig({displayName:"BalanceSummary__BalanceAmountsContainer",componentId:"sc-21ee44a9-4"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 12px;
`,se=({currency:e,chainId:n=o.ChainId.MAINNET,gqlBalance:i,onClick:a})=>{var r,d,l,s,c;const{formatNumber:u}=(0,q.Gb)(),h=(0,w.useMemo)((()=>[e]),[e]),v=u({input:null===(r=i)||void 0===r?void 0:r.quantity,type:q.sw.TokenNonTx}),p=u({input:null===(l=i)||void 0===l||null===(d=l.denominatedValue)||void 0===d?void 0:d.value,type:q.sw.PortfolioBalance});return(0,t.jsxs)(re,{onClick:a,children:[(0,t.jsx)(te.V,{currencies:h,chainId:n,images:[null===(c=i)||void 0===c||null===(s=c.tokenProjectMarket)||void 0===s?void 0:s.tokenProject.logoUrl],size:"2rem"}),(0,t.jsxs)(le,{children:[(0,t.jsx)(de,{children:(0,t.jsx)(F.Tv.BodyPrimary,{children:p})}),(0,t.jsx)(de,{children:(0,t.jsx)(F.Tv.BodySecondary,{children:v})})]})]})},ce=({pageChainBalance:e})=>{var n;if(!e||!e.token)return null;const i=(0,f.Pc)(e.token);return(0,t.jsxs)(ae,{children:[(0,t.jsx)(F.Tv.HeadlineSmall,{color:"neutral1",children:(0,t.jsx)(d.cC,{id:"sQikRY"})}),(0,t.jsx)(se,{currency:i,chainId:null===(n=i)||void 0===n?void 0:n.chainId,gqlBalance:e})]})},ue=({otherChainBalances:e,hasPageChainBalance:n})=>{const i=(0,I.s0)();return e.length?(0,t.jsxs)(ae,{children:[n?(0,t.jsx)(F.Tv.SubHeaderSmall,{children:(0,t.jsx)(d.cC,{id:"tcMwDA"})}):(0,t.jsx)(F.Tv.HeadlineSmall,{children:(0,t.jsx)(d.cC,{id:"tQinFN"})}),e.map((e=>{const n=e.token&&(0,f.Pc)(e.token),a=(e.token&&(0,f.Tz)(e.token.chain))??o.ChainId.MAINNET;return(0,t.jsx)(se,{currency:n,chainId:a,gqlBalance:e,onClick:()=>{var n,t;return i((0,f.dG)({address:null===(n=e.token)||void 0===n?void 0:n.address,chain:(null===(t=e.token)||void 0===t?void 0:t.chain)??M.qop.Ethereum}))}},e.id)}))]}):null};function he(){var e;const{account:n}=(0,a.useWeb3React)(),{currencyChain:i,multiChainMap:o}=(0,b.U)(),r=null===(e=o[i])||void 0===e?void 0:e.balance,d=[];for(const[t,a]of Object.entries(o)){var l;t!==i&&void 0!==(null===(l=a)||void 0===l?void 0:l.balance)&&d.push(a.balance)}const s=r||Boolean(d.length);return n&&s?(0,t.jsxs)(oe,{children:[(0,t.jsx)(ce,{pageChainBalance:r}),(0,t.jsx)(ue,{otherChainBalances:d,hasPageChainBalance:!!r})]}):null}var ve=i(62587);const pe=N.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Wrapper",componentId:"sc-e4c94fbb-0"})`
  align-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral2};
  display: none;
  flex-direction: row;
  font-weight: 535;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  line-height: 20px;
  position: fixed;
  z-index: ${ve.k.sticky};
  border-radius: 20px;
  bottom: 56px;
  margin: 8px;
  padding: 12px 32px;
  width: calc(100vw - 16px);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    bottom: 0px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: flex;
  }
`,xe=N.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceValue",componentId:"sc-e4c94fbb-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 20px;
  line-height: 20px;
  display: flex;
  gap: 8px;
`,me=N.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Balance",componentId:"sc-e4c94fbb-2"})`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,fe=N.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceInfo",componentId:"sc-e4c94fbb-3"})`
  display: flex;
  flex: 10 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`,ye=(0,N.default)(F.Tv.Caption).withConfig({displayName:"MobileBalanceSummaryFooter__FiatValue",componentId:"sc-e4c94fbb-4"})`
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    line-height: 24px;
  }
`,je=(0,N.default)(F.m_).withConfig({displayName:"MobileBalanceSummaryFooter__SwapButton",componentId:"sc-e4c94fbb-5"})`
  background-color: ${({theme:e})=>e.accent1};
  border: none;
  border-radius: 22px;
  color: ${({theme:e})=>e.neutralContrast};
  display: flex;
  flex: 1 1 auto;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 535;
  height: 44px;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
`;function ge(){var e,n,i,o;const{currency:r,multiChainMap:l,currencyChain:s}=(0,b.U)(),c=null===(e=l[s])||void 0===e?void 0:e.balance,{account:u}=(0,a.useWeb3React)(),{formatNumber:h}=(0,q.Gb)(),v=h({input:null===(n=c)||void 0===n?void 0:n.quantity,type:q.sw.TokenNonTx}),p=h({input:null===(o=c)||void 0===o||null===(i=o.denominatedValue)||void 0===i?void 0:i.value,type:q.sw.PortfolioBalance}),x=f.yC[r.chainId].toLowerCase();return(0,t.jsxs)(pe,{children:[Boolean(u&&c)&&(0,t.jsxs)(fe,{children:[(0,t.jsx)(d.cC,{id:"sQikRY"}),(0,t.jsxs)(me,{children:[(0,t.jsxs)(xe,{children:[v," ",r.symbol]}),(0,t.jsx)(ye,{children:p})]})]}),(0,t.jsx)(je,{to:`/swap?chain=${x}&outputCurrency=${r.isNative?m.dt:r.address}`,children:(0,t.jsx)(d.cC,{id:"vH2C/2"})})]})}var Ce=i(87254),ke=i(44591),be=i(18124),we=i(88890),Te=i(68291),Ie=i(6239),Ne=i(41886),Be=i(15824),_e=i(50333),Se=i(18034),Me=i(94191);const Pe=(0,N.default)(ke.ZP).withConfig({displayName:"TokenDescription__TokenInfoSection",componentId:"sc-75fd6c0c-0"})`
  gap: 16px;
  width: 100%;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    gap: 24px;
  }
`,Ae=(0,N.default)(F.Tv.HeadlineSmall).withConfig({displayName:"TokenDescription__InfoSectionHeader",componentId:"sc-75fd6c0c-1"})`
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    font-size: 28px !important;
    line-height: 36px !important;
  }
`,Le=(0,N.default)(_.ZP).withConfig({displayName:"TokenDescription__TokenNameRow",componentId:"sc-75fd6c0c-2"})`
  gap: 8px;
  width: 100%;
`,Ee=(0,N.default)(Le).withConfig({displayName:"TokenDescription__TokenButtonRow",componentId:"sc-75fd6c0c-3"})`
  flex-wrap: wrap;
`,Ve=(0,N.default)(_.ZP).withConfig({displayName:"TokenDescription__TokenInfoButton",componentId:"sc-75fd6c0c-4"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({theme:e})=>e.neutral1};
  background-color: ${({theme:e})=>e.surface2};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  ${F.iV}
`,$e=(0,N.default)(F.Tv.BodyPrimary).withConfig({displayName:"TokenDescription__TokenDescriptionContainer",componentId:"sc-75fd6c0c-5"})`
  ${F.cw}
  max-width: 100%;
  // max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,Fe=N.default.p.withConfig({displayName:"TokenDescription__DescriptionVisibilityWrapper",componentId:"sc-75fd6c0c-6"})`
  display: ${({$visible:e})=>e?"inline":"none"};
`,Re=200;function De(){var e,n;const{address:i,currency:a,tokenQuery:r}=(0,b.U)(),{neutral2:l}=(0,N.useTheme)(),{description:s,homepageUrl:c,twitterName:u}=(null===(n=r.data)||void 0===n||null===(e=n.token)||void 0===e?void 0:e.project)??{},h=(0,Y.E)(a.chainId,i,a.isNative?Y.r.NATIVE:Y.r.TOKEN),[v,p]=(0,_e.Z)(),x=(0,w.useCallback)((()=>{p(i)}),[i,p]),[m,f]=(0,w.useReducer)((e=>!e),!0),y=(0,Ne.Nt)(s??"",Re),j=!!s&&s.length>Re,g=j&&m,{inputTax:C,outputTax:k}=(0,Se.j)(i,i),{formatPercent:T}=(0,q.Gb)(),{sellFeeString:I,buyFeeString:B}={sellFeeString:T(C),buyFeeString:T(k)},_=Boolean(parseFloat(I))||Boolean(parseFloat(k.toFixed(2))),S=I===B;return(0,t.jsxs)(Pe,{"data-testid":"token-details-info-section",children:[(0,t.jsx)(Ae,{children:(0,t.jsx)(d.cC,{id:"CE+M2e"})}),(0,t.jsxs)(Ee,{"data-testid":"token-details-info-links",children:[!a.isNative&&(0,t.jsx)(Be.ZP,{placement:"bottom",size:Be.Oz.Max,show:v,text:Ce.ag._({id:"6V3Ea3"}),children:(0,t.jsxs)(Ve,{onClick:x,children:[(0,t.jsx)(Me.Z,{width:"18px",height:"18px",color:l}),(0,Q.Xn)(a.address)]})}),(0,t.jsx)(F.dL,{href:h,children:(0,t.jsxs)(Ve,{children:[(0,t.jsx)(be.P,{width:"18px",height:"18px",fill:l}),a.chainId===o.ChainId.MAINNET?(0,t.jsx)(d.cC,{id:"nS3bjC"}):(0,t.jsx)(d.cC,{id:"vtJ2yO"})]})}),c&&(0,t.jsx)(F.dL,{href:c,children:(0,t.jsxs)(Ve,{children:[(0,t.jsx)(we.T,{width:"18px",height:"18px",fill:l}),(0,t.jsx)(d.cC,{id:"On0aF2"})]})}),u&&(0,t.jsx)(F.dL,{href:`https://x.com/${u}`,children:(0,t.jsxs)(Ve,{children:[(0,t.jsx)(Te.E,{width:"18px",height:"18px",fill:l}),(0,t.jsx)(d.cC,{id:"0F2sI+"})]})})]}),(0,t.jsxs)($e,{children:[!s&&(0,t.jsx)(Ne.aZ,{children:(0,t.jsx)(d.cC,{id:"kXI9SA"})}),s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Fe,{"data-testid":"token-description-full",$visible:!g,children:s}),(0,t.jsx)(Fe,{"data-testid":"token-description-truncated",$visible:g,children:y})]}),j&&(0,t.jsx)(Ne.ou,{onClick:f,"data-testid":"token-description-show-more-button",children:m?(0,t.jsx)(d.cC,{id:"fMPkxb"}):(0,t.jsx)(d.cC,{id:"vLyv1R"})})]}),_&&(0,t.jsx)(Be.ud,{placement:"left",size:Be.Oz.Small,text:(0,t.jsx)(F.Tv.Caption,{color:"neutral2",children:(0,t.jsx)(Ie.gE,{})}),children:(0,t.jsx)(ke.ZP,{gap:"sm",children:S?(0,t.jsxs)(F.Tv.BodyPrimary,{children:[a.symbol,"\xa0",(0,t.jsx)(d.cC,{id:"oSCKSR"}),"\xa0",I]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(F.Tv.BodyPrimary,{children:[a.symbol,"\xa0",(0,t.jsx)(d.cC,{id:"JzWZvv"}),"\xa0",B]})," ",(0,t.jsxs)(F.Tv.BodyPrimary,{children:[a.symbol,"\xa0",(0,t.jsx)(d.cC,{id:"sHAUpq"}),"\xa0",I]})," "]})})})]})}var We=i(75495);const Ze=(0,N.default)(Ne.Hr).withConfig({displayName:"TokenDetails__DividerLine",componentId:"sc-527127b-0"})`
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    opacity: 0;
    margin-bottom: 0;
  }
`;function Oe(){const{address:e,currency:n,currencyChain:i}=(0,b.U)();return(0,t.jsxs)(c.zG,{"aria-label":"breadcrumb-nav",children:[(0,t.jsxs)(c.yY,{to:`/explore/${i.toLowerCase()}`,children:[(0,t.jsx)(d.cC,{id:"8tjQCz"})," ",(0,t.jsx)(T.Z,{size:14})]}),(0,t.jsxs)(c.yY,{to:`/explore/tokens/${i.toLowerCase()}`,children:[(0,t.jsx)(d.cC,{id:"6RDwJM"})," ",(0,t.jsx)(T.Z,{size:14})]}),(0,t.jsx)(c.f3,{address:e,currency:n})]})}function ze(e){return e?e.isToken?e.address:m.dt:""}function Ue(){var e;const{address:n,currency:i,currencyChain:r,warning:d}=(0,b.U)(),l=(0,a.useWeb3React)().chainId??o.ChainId.MAINNET,s=(0,I.s0)(),c=(0,w.useCallback)((e=>{const i=ze(e.inputCurrency),t=ze(e.outputCurrency);if((0,B.K)(i,n)||(0,B.K)(t,n))return;const o=e.outputCurrency??e.inputCurrency;if(!o)return;const a=(0,j.j)(o.wrapped.address,o.chainId,o.isNative),d=(0,f.dG)({address:o.isNative?null:o.address,chain:r,inputAddress:e.inputCurrency&&e.inputCurrency!==o?i:null});s(d,{state:{preloadedLogoSrc:a}})}),[n,r,s]),v=function(){const{currency:e}=(0,b.U)(),n=(0,g.Z)(),i=(0,w.useMemo)((()=>"string"===typeof n.inputCurrency?n.inputCurrency:void 0),[n]);return(0,y.U8)(i,e.chainId)}(),[p,x]=(0,w.useState)(!1),[m,C]=(0,w.useState)(),T=(0,w.useCallback)((e=>{var n;null===(n=m)||void 0===n||n.resolve(e),C(void 0)}),[m,C]),N=!1===(null===(e=d)||void 0===e?void 0:e.canProceed);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{pointerEvents:N?"none":"auto"},onClick:()=>N&&x(!0),children:(0,t.jsx)(k.HY,{syncTabToUrl:!1,chainId:i.chainId,initialInputCurrency:v,initialOutputCurrency:i,onCurrencyChange:c,disableTokenInputs:i.chainId!==l,compact:!0})}),d&&(0,t.jsx)(u.Z,{tokenAddress:n,warning:d}),(0,t.jsx)(h.Z,{isOpen:p||!!m,tokenAddress:n,onContinue:()=>T(!0),onBlocked:()=>{x(!1)},onCancel:()=>T(!1),showCancel:!0})]})}function He({children:e}){const{address:n,currency:i}=(0,b.U)();return(0,t.jsx)(s.fM,{page:l.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:n,tokenSymbol:i.symbol,tokenName:i.name,chainId:i.chainId},shouldLogImpression:!0,children:e})}function Qe(){var e;const{address:n,currency:i,tokenQuery:o}=(0,b.U)(),a=null===(e=o.data)||void 0===e?void 0:e.token,{lg:r}=(0,C.e)();return(0,t.jsx)(He,{children:(0,t.jsxs)(p.Gy,{children:[(0,t.jsxs)(p.WQ,{children:[(0,t.jsx)(Oe,{}),(0,t.jsx)(p.Pn,{"data-testid":"token-info-container",children:(0,t.jsx)(We.F,{})}),(0,t.jsx)(v.ZP,{}),(0,t.jsx)(x.ZP,{chainId:i.chainId,address:n,tokenQueryData:a}),(0,t.jsx)(Ze,{}),(0,t.jsx)(ie,{})]}),(0,t.jsxs)(p.QN,{children:[r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ue,{}),(0,t.jsx)(he,{})]}),(0,t.jsx)(De,{})]}),(0,t.jsx)(ge,{})]})})}var qe,Ye=i(69780),Ge=i(62512),Ke=i(78857);function Xe(){return Xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},Xe.apply(this,arguments)}function Je(e,n){let{title:i,titleId:t,...o}=e;return w.createElement("svg",Xe({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n,"aria-labelledby":t},o),i?w.createElement("title",{id:t},i):null,qe||(qe=w.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const en=w.forwardRef(Je),nn=(i.p,N.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-3af219f6-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`),tn=N.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-3af219f6-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,on=(0,N.default)(Ye.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-3af219f6-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function an({pageChainId:e,isInvalidAddress:n}){var i;const{chainId:o}=(0,a.useWeb3React)(),r=(0,I.s0)(),l=(0,Ke.Z)(),s=!n&&e===o,c=o?null===(i=(0,Ge.bt)(o))||void 0===i?void 0:i.label:void 0;return(0,t.jsxs)(nn,{children:[(0,t.jsx)(en,{}),n||s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tn,{children:(0,t.jsx)(d.cC,{id:"5pThdE"})}),(0,t.jsx)(on,{onClick:()=>r("/tokens"),children:(0,t.jsx)(F.Tv.SubHeader,{children:(0,t.jsx)(d.cC,{id:"1ru2CS"})})})]}):(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)(tn,{children:(0,t.jsx)(d.cC,{id:"xNuZYG",values:{connectedChainLabel:c}})}),(0,t.jsx)(on,{onClick:()=>l(e),children:(0,t.jsx)(F.Tv.SubHeader,{children:(0,t.jsx)(d.cC,{id:"1+P9RR",values:{0:(0,Ge.bt)(e).label}})})})]})]})}var rn=i(80149),dn=i(51349),ln=i(68424),sn=i(437),cn=i(66869),un=i(88940);const hn=e=>{var n,i;const t=null===(n=e)||void 0===n?void 0:n.name,o=null===(i=e)||void 0===i?void 0:i.symbol,a=Ce.ag._({id:"aFvp+n"});return t||o?!t&&o?Ce.ag._({id:"DpXBMD",values:{tokenSymbol:o,baseTitle:a}}):t&&!o?Ce.ag._({id:"OES8vR",values:{tokenName:t,baseTitle:a}}):Ce.ag._({id:"a//Mei",values:{tokenName:t,tokenSymbol:o,baseTitle:a}}):a},vn=(0,N.default)(r.Z).withConfig({displayName:"TokenDetails__StyledPrefetchBalancesWrapper",componentId:"sc-a7fadabf-0"})`
  display: contents;
`;function pn(e,n,i,t){var r;const{chainId:d}=(0,a.useWeb3React)(),l=d??o.ChainId.MAINNET,s=(0,w.useMemo)((()=>{var n;return t?(0,m.gX)(i):(null===(n=e.data)||void 0===n?void 0:n.token)?(0,f.Pc)(e.data.token):void 0}),[t,i,null===(r=e.data)||void 0===r?void 0:r.token]),c=Boolean(s)||i!==l,u=function(e,n,i){var t;const o=(0,y.U8)(i?void 0:e,n);return i||!e||o&&(null===(t=o)||void 0===t?void 0:t.symbol)===ln.eu?void 0:o}(n,i,c);return{currency:s??u,currencyWasFetchedOnChain:!s}}function xn(){var e,n,i;const{tokenAddress:t,chainName:o}=(0,I.UO)();if(!t)throw new Error("Invalid token details route: token address URL param is undefined");const d=(0,f.Qj)(o),l=(0,f.Tz)(d),s=t===m.dt,c=s?(0,un.P)(d):t,u=(0,M.rSk)({variables:{address:c,chain:d},errorPolicy:"all"}),h=(0,v.Gn)(c,d),p=function(e){var n,i,t,o;const{account:d}=(0,a.useWeb3React)(),{data:l}=(0,r.T)({account:d});return(0,w.useMemo)((()=>{var n,i,t,o,a;const r=null===(i=l)||void 0===i||null===(n=i.portfolios)||void 0===n?void 0:n[0].tokenBalances,d=null===(a=e.data)||void 0===a||null===(o=a.token)||void 0===o||null===(t=o.project)||void 0===t?void 0:t.tokens;return d?d.reduce(((e,n)=>{if(n){var i;e[n.chain]||(e[n.chain]={});const t=e[n.chain]??{};t.address=n.address,t.balance=null===(i=r)||void 0===i?void 0:i.find((e=>{var i;return(null===(i=e.token)||void 0===i?void 0:i.id)===n.id})),e[n.chain]=t}return e}),{}):{}}),[null===(n=l)||void 0===n?void 0:n.portfolios,null===(o=e.data)||void 0===o||null===(t=o.token)||void 0===t||null===(i=t.project)||void 0===i?void 0:i.tokens])}(u),{currency:x,currencyWasFetchedOnChain:y}=pn(u,t,l,s),j=(0,rn.y8)(t,l),g=(0,N.useTheme)(),{preloadedLogoSrc:C}=(0,I.TH)().state??{},k=(null===(i=u.data)||void 0===i||null===(n=i.token)||void 0===n||null===(e=n.project)||void 0===e?void 0:e.logoUrl)??C,b=(0,dn.H)(k,{backgroundColor:g.surface2,darkMode:g.darkMode});return(0,w.useMemo)((()=>{var e,n;return{currency:x,currencyChain:d,currencyChainId:l,address:((null===(e=x)||void 0===e?void 0:e.isNative)?m.dt:null===(n=x)||void 0===n?void 0:n.address)??t,currencyWasFetchedOnChain:y,tokenQuery:u,chartState:h,warning:j,multiChainMap:p,extractedAccent1:b}}),[x,d,l,y,b,p,j,t,u,h])}function mn(){var e;const n=(0,a.useWeb3React)().chainId??o.ChainId.MAINNET,i=xn();return(0,t.jsx)(vn,{shouldFetchOnAccountUpdate:!0,shouldFetchOnHover:!1,children:(0,t.jsxs)(cn.f6,{accent1:i.extractedAccent1,children:[(0,t.jsx)(sn.Helmet,{children:(0,t.jsx)("title",{children:hn(null===(e=i)||void 0===e?void 0:e.currency)})}),i.currency?(0,t.jsx)(b.A,{contextValue:i,children:(0,t.jsx)(Qe,{})}):i.tokenQuery.loading?(0,t.jsx)(p.lJ,{}):(0,t.jsx)(an,{pageChainId:n,isInvalidAddress:!(0,Q.UJ)(i.address)})]})})}},38004:(e,n,i)=>{function t(e,n){return!(!e||!n)&&(e===n||e.toLowerCase()===n.toLowerCase())}i.d(n,{K:()=>t})}}]);
//# sourceMappingURL=1332.0d2b9318.chunk.js.map