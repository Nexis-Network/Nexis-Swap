"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9212],{73499:(e,t,i)=>{i.d(t,{Z:()=>f});var n=i(92936),o=i(31017),r=i(30335),s=i(57221),d=i(61152),a=i(15824);const c=d.default.div.withConfig({displayName:"RangeBadge__BadgeWrapper",componentId:"sc-5538a536-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,l=d.default.div.withConfig({displayName:"RangeBadge__BadgeText",componentId:"sc-5538a536-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,u=d.default.span.withConfig({displayName:"RangeBadge__ActiveDot",componentId:"sc-5538a536-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=d.default.div.withConfig({displayName:"RangeBadge__LabelText",componentId:"sc-5538a536-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function f({removed:e,inRange:t}){const i=(0,d.useTheme)();return(0,n.jsx)(c,{children:e?(0,n.jsx)(a.ud,{text:(0,n.jsx)(o.cC,{id:"MZPP7t"}),children:(0,n.jsxs)(p,{color:i.neutral2,children:[(0,n.jsx)(l,{children:(0,n.jsx)(o.cC,{id:"D87pha"})}),(0,n.jsx)(r.Z,{width:12,height:12})]})}):t?(0,n.jsx)(a.ud,{text:(0,n.jsx)(o.cC,{id:"aIvv/z"}),children:(0,n.jsxs)(p,{color:i.success,children:[(0,n.jsx)(l,{children:(0,n.jsx)(o.cC,{id:"vOyUlD"})}),(0,n.jsx)(u,{})]})}):(0,n.jsx)(a.ud,{text:(0,n.jsx)(o.cC,{id:"IwiTcw"}),children:(0,n.jsxs)(p,{color:i.deprecated_accentWarning,children:[(0,n.jsx)(l,{children:(0,n.jsx)(o.cC,{id:"i3Z+/Z"})}),(0,n.jsx)(s.Z,{width:12,height:12})]})})})}},23116:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(92936),o=i(15824),r=i(45779);const s=i(61152).default.span.withConfig({displayName:"HoverInlineText__TextWrapper",componentId:"sc-707bc6e1-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`,d=({text:e,maxCharacters:t=20,margin:i=!1,adjustSize:d=!1,fontSize:a,textColor:c,link:l,...u})=>{const[p,f]=(0,r.useState)(!1);return e?e.length>t?(0,n.jsx)(o.ZP,{text:e,show:p,children:(0,n.jsx)(s,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),margin:i,adjustSize:d,textColor:c,link:l,fontSize:a,...u,children:" "+e.slice(0,t-1)+"..."})}):(0,n.jsx)(s,{margin:i,adjustSize:d,link:l,fontSize:a,textColor:c,...u,children:e}):(0,n.jsx)("span",{})}},90652:(e,t,i)=>{i.d(t,{N:()=>E,Z:()=>b});var n=i(92936),o=i(31017),r=i(76078),s=i(21651),d=i(73499),a=i(47841),c=i(23116),l=i(63415),u=i(94284),p=i(39671),f=i(57899),m=i(55660),h=i(45779),x=i(43454),g=i(31744),v=i(61152),I=i(66869),w=i(54972),y=i(66136),_=i(5347),j=i(64370);const k=(0,v.default)(x.rU).withConfig({displayName:"PositionListItem__LinkRow",componentId:"sc-c6f6cae0-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${I.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,S=v.default.div.withConfig({displayName:"PositionListItem__DataLineItem",componentId:"sc-c6f6cae0-1"})`
  font-size: 14px;
`,T=(0,v.default)(S).withConfig({displayName:"PositionListItem__RangeLineItem",componentId:"sc-c6f6cae0-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,L=v.default.span.withConfig({displayName:"PositionListItem__DoubleArrow",componentId:"sc-c6f6cae0-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,P=(0,v.default)(w.Tv.BodySmall).withConfig({displayName:"PositionListItem__RangeText",componentId:"sc-c6f6cae0-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,C=(0,v.default)(w.Tv.UtilityBadge).withConfig({displayName:"PositionListItem__FeeTierText",componentId:"sc-c6f6cae0-5"})`
  font-size: 16px !important;
  margin-left: 8px !important;
  color: ${({theme:e})=>e.neutral3};
`,N=(0,v.default)(w.Tv.BodySmall).withConfig({displayName:"PositionListItem__ExtentsText",componentId:"sc-c6f6cae0-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,A=v.default.div.withConfig({displayName:"PositionListItem__PrimaryPositionIdData",componentId:"sc-c6f6cae0-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function E(e){if(!e)return{};const t=e.amount0.currency,i=e.amount1.currency;if([j.h1,j.Hz,j.AA].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:i};return[...Object.values(j.Fl),j.ML].some((e=>e&&e.equals(i)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:i}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:i,base:t}}function b({token0:e,token1:t,tokenId:i,fee:x,liquidity:v,tickLower:I,tickUpper:j}){var S,b,M,O,D,R,X;const{formatDelta:z,formatTickPrice:U}=(0,y.Gb)(),q=(0,p.dQ)(e),$=(0,p.dQ)(t),Z=q?(0,_.B)(q):void 0,B=$?(0,_.B)($):void 0,[,G]=(0,m.AI)(Z??void 0,B??void 0,x),V=(0,h.useMemo)((()=>{if(G)return new s.Position({pool:G,liquidity:v.toString(),tickLower:I,tickUpper:j})}),[v,G,I,j]),W=(0,f.Z)(x,I,j),{priceLower:Y,priceUpper:F,quote:K,base:Q}=E(V),H=K&&(0,_.B)(K),J=Q&&(0,_.B)(Q),ee=!!G&&(G.tickCurrent<I||G.tickCurrent>=j),te="/pools/"+i,ie=null===(S=v)||void 0===S?void 0:S.eq(0);return(0,n.jsxs)(k,{to:te,children:[(0,n.jsxs)(u.m0,{children:[(0,n.jsxs)(A,{children:[(0,n.jsx)(a.Z,{currency0:J,currency1:H,size:18,margin:!0}),(0,n.jsxs)(w.Tv.SubHeader,{children:["\xa0",null===(b=H)||void 0===b?void 0:b.symbol,"\xa0/\xa0",null===(M=J)||void 0===M?void 0:M.symbol]}),(0,n.jsx)(C,{children:(0,n.jsx)(o.cC,{id:"J/hVSQ",values:{0:z(parseFloat(new r.Percent(x,1e6).toSignificant()))}})})]}),(0,n.jsx)(d.Z,{removed:ie,inRange:!ee})]}),Y&&F?(0,n.jsxs)(T,{children:[(0,n.jsxs)(P,{children:[(0,n.jsx)(N,{children:(0,n.jsx)(o.cC,{id:"0uYsLP"})}),(0,n.jsx)(o.cC,{id:"YAzUzD",values:{0:U({price:Y,atLimit:W,direction:g.Mb.LOWER})},components:{0:(0,n.jsx)("span",{}),1:(0,n.jsx)(c.Z,{text:null===(O=H)||void 0===O?void 0:O.symbol}),2:(0,n.jsx)(c.Z,{text:(null===(D=J)||void 0===D?void 0:D.symbol)??""})}})]})," ",(0,n.jsxs)(w.Pw,{children:[(0,n.jsx)(L,{children:"\u2194"})," "]}),(0,n.jsxs)(w.Z,{children:[(0,n.jsx)(L,{children:"\u2194"})," "]}),(0,n.jsxs)(P,{children:[(0,n.jsx)(N,{children:(0,n.jsx)(o.cC,{id:"BniuBY"})}),(0,n.jsx)(o.cC,{id:"YAzUzD",values:{0:U({price:F,atLimit:W,direction:g.Mb.UPPER})},components:{0:(0,n.jsx)("span",{}),1:(0,n.jsx)(c.Z,{text:null===(R=H)||void 0===R?void 0:R.symbol}),2:(0,n.jsx)(c.Z,{maxCharacters:10,text:null===(X=J)||void 0===X?void 0:X.symbol})}})]})]}):(0,n.jsx)(l.ZP,{})]})}},57899:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(21651),o=i(45779),r=i(31744);function s(e,t,i){return(0,o.useMemo)((()=>({[r.Mb.LOWER]:e&&t?t===(0,n.nearestUsableTick)(n.TickMath.MIN_TICK,n.TICK_SPACINGS[e]):void 0,[r.Mb.UPPER]:e&&i?i===(0,n.nearestUsableTick)(n.TickMath.MAX_TICK,n.TICK_SPACINGS[e]):void 0})),[e,t,i])}},55660:(e,t,i)=>{i.d(t,{$o:()=>I,AI:()=>v,Oh:()=>g,tK:()=>x});var n=i(51371),o=i(76078),r=i(87270),s=i(21651),d=i(88846),a=i(21891),c=i(61592),l=i.n(c),u=i(84938),p=i(45779);function f(e,t,i,n,o,r,s){try{var d=e[r](s),a=d.value}catch(c){return void i(c)}d.done?t(a):Promise.resolve(a).then(n,o)}const m=new n.vU(r.Mt);let h=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,t,i,n){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:r}=i,d=`${e}:${o}:${r}:${n.toString()}`,a=this.addresses.find((e=>e.key===d));if(a)return a.address;const c={key:d,address:(0,s.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:i,fee:n})};return this.addresses.unshift(c),c.address}static getPool(e,t,i,n,o,r){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const d=this.pools.find((s=>s.token0===e&&s.token1===t&&s.fee===i&&l().EQ(s.sqrtRatioX96,n)&&l().EQ(s.liquidity,o)&&s.tickCurrent===r));if(d)return d;const a=new s.Pool(e,t,i,n,o,r);return this.pools.unshift(a),a}};var x;function g(e){const{chainId:t}=(0,d.useWeb3React)(),i=(0,p.useMemo)((()=>t?e.map((([e,t,i])=>{if(e&&t&&i){const n=e.wrapped,o=t.wrapped;if(n.equals(o))return;return n.sortsBefore(o)?[n,o,i]:[o,n,i]}})):new Array(e.length)),[t,e]),n=(0,p.useMemo)((()=>{const e=t&&o.V3_CORE_FACTORY_ADDRESSES[t];return e?i.map((t=>t&&h.getPoolAddress(e,...t))):new Array(i.length)}),[t,i]),r=(0,u._Y)(n,m,"slot0"),s=(0,u._Y)(n,m,"liquidity");return(0,p.useMemo)((()=>e.map(((e,t)=>{const n=i[t];if(!n)return[x.INVALID,null];const[o,d,a]=n;if(!r[t])return[x.INVALID,null];const{result:c,loading:l,valid:u}=r[t];if(!s[t])return[x.INVALID,null];const{result:p,loading:f,valid:m}=s[t];if(!n||!u||!m)return[x.INVALID,null];if(l||f)return[x.LOADING,null];if(!c||!p)return[x.NOT_EXISTS,null];if(!c.sqrtPriceX96||c.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=h.getPool(o,d,a,c.sqrtPriceX96,p[0],c.tick);return[x.EXISTS,e]}catch(g){return console.error("Error when constructing the pool",g),[x.NOT_EXISTS,null]}}))),[s,e,r,i])}function v(e,t,i){return g((0,p.useMemo)((()=>[[e,t,i]]),[e,t,i]))[0]}function I(e,t,i,n){const[d,c]=(0,p.useState)([x.LOADING,null]),l=e&&t&&i?h.getPoolAddress(o.V3_CORE_FACTORY_ADDRESSES[n],e,t,i):void 0,u=(0,p.useMemo)((()=>l?{[n]:l}:{}),[n,l]),m=(0,a.SO)(u,r.Mt)[n];return(0,p.useEffect)((()=>{function n(){var o;return o=function*(){try{if(!e||!t||!i||!l||!m)return void c([x.INVALID,null]);const n=yield m.slot0(),o=yield m.liquidity();c([x.NOT_EXISTS,null]);const r=new s.Pool(e,t,i,n.sqrtPriceX96.toString(),o.toString(),n.tick);c([x.EXISTS,r])}catch(n){c([x.INVALID,null])}},n=function(){var e=this,t=arguments;return new Promise((function(i,n){var r=o.apply(e,t);function s(e){f(r,i,n,s,d,"next",e)}function d(e){f(r,i,n,s,d,"throw",e)}s(void 0)}))},n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[m,i,l,e,t]),d}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(x||(x={}))},40413:(e,t,i)=>{i.d(t,{W:()=>c,n:()=>a});var n=i(11604),o=i(84938),r=i(45779),s=i(7151);function d(e){var t;const i=(0,s.GL)(),d=(0,r.useMemo)((()=>e?e.map((e=>[n.O$.from(e)])):[]),[e]),a=(0,o.es)(i,"positions",d),c=(0,r.useMemo)((()=>a.some((({loading:e})=>e))),[a]),l=(0,r.useMemo)((()=>a.some((({error:e})=>e))),[a]),u=(0,r.useMemo)((()=>{if(!c&&!l&&e)return a.map(((t,i)=>{const n=e[i],o=t.result;return{tokenId:n,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[c,l,a,e]);return{loading:c,positions:null===(t=u)||void 0===t?void 0:t.map(((e,t)=>({...e,tokenId:d[t][0]})))}}function a(e){var t;const i=d(e?[e]:void 0);return{loading:i.loading,position:null===(t=i.positions)||void 0===t?void 0:t[0]}}function c(e){var t,i;const a=(0,s.GL)(),{loading:c,result:l}=(0,o.Wk)(a,"balanceOf",[e??void 0]),u=null===(i=l)||void 0===i||null===(t=i[0])||void 0===t?void 0:t.toNumber(),p=(0,r.useMemo)((()=>{if(u&&e){const t=[];for(let i=0;i<u;i++)t.push([e,i]);return t}return[]}),[e,u]),f=(0,o.es)(a,"tokenOfOwnerByIndex",p),m=(0,r.useMemo)((()=>f.some((({loading:e})=>e))),[f]),h=(0,r.useMemo)((()=>e?f.map((({result:e})=>e)).filter((e=>!!e)).map((e=>n.O$.from(e[0]))):[]),[e,f]),{positions:x,loading:g}=d(h);return{loading:m||c||g,positions:x}}}}]);
//# sourceMappingURL=9212.3cbf34a5.chunk.js.map