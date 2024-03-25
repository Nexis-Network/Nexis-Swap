"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2348,2001],{57809:(e,i,t)=>{t.d(i,{Z:()=>r});var o=t(45779),n=t(68090),a=t.n(n);function d(){return d=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},d.apply(this,arguments)}function l(e,i){if(null==e)return{};var t,o,n=function(e,i){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=(0,o.forwardRef)((function(e,i){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,s=void 0===a?24:a,r=l(e,["color","size"]);return o.createElement("svg",d({ref:i,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),o.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));s.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},s.displayName="Plus";const r=s},79833:(e,i,t)=>{t.d(i,{Z:()=>f});var o=t(92936),n=t(31017),a=t(80149),d=t(2108),l=t(57221),s=t(30335),r=t(22953),c=t(61152),u=t(54972);const p=c.default.div.withConfig({displayName:"TokenSafetyMessage__Label",componentId:"sc-1e5f49d3-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,h=c.default.div.withConfig({displayName:"TokenSafetyMessage__TitleRow",componentId:"sc-1e5f49d3-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,v=(0,c.default)(r.xv).withConfig({displayName:"TokenSafetyMessage__Title",componentId:"sc-1e5f49d3-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,m=c.default.div.withConfig({displayName:"TokenSafetyMessage__DetailsRow",componentId:"sc-1e5f49d3-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,x=(0,c.default)(u.dL).withConfig({displayName:"TokenSafetyMessage__StyledLink",componentId:"sc-1e5f49d3-4"})`
  color: ${({theme:e})=>e.accent1};

  font-weight: 535;
`;function f({warning:e,tokenAddress:i,plural:t=!1,tokenSymbol:r}){const c=(0,d.g)(e.level),u=(0,d.A)(e.level),{heading:f,description:g}=(0,a.N6)(e,t,r);return(0,o.jsxs)(p,{"data-cy":"token-safety-message",color:u,backgroundColor:c,children:[(0,a._x)(e)&&(0,o.jsxs)(h,{children:[e.canProceed?(0,o.jsx)(l.Z,{size:"16px"}):(0,o.jsx)(s.Z,{size:"16px"}),(0,o.jsx)(v,{marginLeft:"7px",children:e.message})]}),(0,o.jsxs)(m,{children:[f,Boolean(f)&&" ",g,Boolean(g)&&" ",i&&(0,o.jsx)(x,{href:a.W3,children:(0,o.jsx)(n.cC,{id:"zwWKhA"})})]})]})}},25321:(e,i,t)=>{t.d(i,{l:()=>h,u:()=>v});var o=t(29531),n=t(74365),a=t(88108),d=t(49256),l=t(10105),s=t(76078),r=t(66473);const c={[s.ChainId.MAINNET]:"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3?source=uniswap",[s.ChainId.ARBITRUM_ONE]:"https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-arbitrum-one?source=uniswap",[s.ChainId.OPTIMISM]:"https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis?source=uniswap",[s.ChainId.POLYGON]:"https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon?source=uniswap",[s.ChainId.CELO]:"https://api.thegraph.com/subgraphs/name/jesse-sawa/uniswap-celo?source=uniswap",[s.ChainId.BNB]:"https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-bsc?source=uniswap",[s.ChainId.AVALANCHE]:"https://api.thegraph.com/subgraphs/name/lynnshaoyu/uniswap-v3-avax?source=uniswap",[s.ChainId.BASE]:"https://api.studio.thegraph.com/query/48211/uniswap-v3-base/version/latest?source=uniswap"},u=new o.u({uri:c[s.ChainId.MAINNET]}),p=new n.i(((e,i)=>{const t=r.ZP.getState().application.chainId;return e.setContext((()=>({uri:t&&c[t]?c[t]:c[s.ChainId.MAINNET]}))),i(e)})),h=new a.f({cache:new d.h,link:(0,l.z)(p,u)}),v={[s.ChainId.MAINNET]:new a.f({cache:new d.h,uri:c[s.ChainId.MAINNET]}),[s.ChainId.ARBITRUM_ONE]:new a.f({cache:new d.h,uri:c[s.ChainId.ARBITRUM_ONE]}),[s.ChainId.OPTIMISM]:new a.f({cache:new d.h,uri:c[s.ChainId.OPTIMISM]}),[s.ChainId.POLYGON]:new a.f({cache:new d.h,uri:c[s.ChainId.POLYGON]}),[s.ChainId.CELO]:new a.f({cache:new d.h,uri:c[s.ChainId.CELO]}),[s.ChainId.BNB]:new a.f({cache:new d.h,uri:c[s.ChainId.BNB]}),[s.ChainId.AVALANCHE]:new a.f({cache:new d.h,uri:c[s.ChainId.AVALANCHE]})}},36813:(e,i,t)=>{t.d(i,{K:()=>k});var o=t(76078),n=t(21651),a=t(88846),d=t(63945),l=t(61592),s=t.n(l),r=t(63490),c=t.n(r),u=t(45779);const p=8;function h(e,i,t,o,a,d){let l={...t},r=[];for(let c=a+(d?1:-1);d?c<o.length:c>=0;d?c++:c--){const t=Number(o[c].tick),a=(0,n.tickToPrice)(e,i,t),u={liquidityActive:l.liquidityActive,tick:t,liquidityNet:s().BigInt(o[c].liquidityNet),price0:a.toFixed(p),sdkPrice:a};d?u.liquidityActive=s().add(l.liquidityActive,s().BigInt(o[c].liquidityNet)):!d&&s().notEqual(l.liquidityNet,s().BigInt(0))&&(u.liquidityActive=s().subtract(l.liquidityActive,l.liquidityNet)),r.push(u),l=u}return d||(r=r.reverse()),r}var v=t(25321),m=t(55660);const x=8,f=(e,i)=>e&&i?Math.floor(e/n.TICK_SPACINGS[i])*n.TICK_SPACINGS[i]:void 0;const g=1e3;function y(e,i,t,a){var l,s;const[r,p]=(0,u.useState)(0),[h,m]=(0,u.useState)([]),{data:x,error:f,loading:y}=function(e,i,t,a=0,l){var s,r,u;const p=v.u[l],h=e&&i&&t?n.Pool.getAddress(null===(s=e)||void 0===s?void 0:s.wrapped,null===(r=i)||void 0===r?void 0:r.wrapped,t,void 0,l?o.V3_CORE_FACTORY_ADDRESSES[l]:void 0):void 0;return(0,d.K_)({variables:{poolAddress:null===(u=h)||void 0===u?void 0:u.toLowerCase(),skip:a},skip:!h,pollInterval:c()("30s"),client:p})}(e,i,t,r,a);return(0,u.useEffect)((()=>{var e;(null===(e=x)||void 0===e?void 0:e.ticks.length)&&(m((e=>[...e,...x.ticks])),x.ticks.length===g&&p((e=>e+g)))}),[null===(l=x)||void 0===l?void 0:l.ticks]),{isLoading:y||(null===(s=x)||void 0===s?void 0:s.ticks.length)===g,error:f,ticks:h}}function k(e,i,t,d){var l,r,c,p,v;const g=(0,a.useWeb3React)().chainId??o.ChainId.MAINNET,k=(0,m.$o)(null===(l=e)||void 0===l?void 0:l.wrapped,null===(r=i)||void 0===r?void 0:r.wrapped,t,d??g),b=null===(c=k[1])||void 0===c?void 0:c.liquidity,w=null===(p=k[1])||void 0===p?void 0:p.sqrtRatioX96,T=null===(v=k[1])||void 0===v?void 0:v.tickCurrent,j=(0,u.useMemo)((()=>f(T,t)),[T,t]),{isLoading:C,error:I,ticks:P}=y(e,i,t,d??g);return(0,u.useMemo)((()=>{var t,o,a;if(!e||!i||void 0===j||k[0]!==m.tK.EXISTS||!P||0===P.length||C)return{isLoading:C||k[0]===m.tK.LOADING,error:I,activeTick:j,data:void 0};const d=null===(t=e)||void 0===t?void 0:t.wrapped,l=null===(o=i)||void 0===o?void 0:o.wrapped,r=P.findIndex((({tick:e})=>e>j))-1;if(r<0)return console.error("TickData pivot not found"),{isLoading:C,error:I,activeTick:j,data:void 0};const c=(0,n.tickToPrice)(d,l,j),u={liquidityActive:s().BigInt((null===(a=k[1])||void 0===a?void 0:a.liquidity)??0),tick:j,liquidityNet:Number(P[r].tick)===j?s().BigInt(P[r].liquidityNet):s().BigInt(0),price0:c.toFixed(x),sdkPrice:c},p=h(d,l,u,P,r,!0),v=h(d,l,u,P,r,!1).concat(u).concat(p);return{isLoading:C,error:I,currentTick:T,activeTick:j,liquidity:b,sqrtPriceX96:w,data:v}}),[e,i,j,k,P,C,I,T,b,w])}},55660:(e,i,t)=>{t.d(i,{$o:()=>y,AI:()=>g,Oh:()=>f,tK:()=>x});var o=t(51371),n=t(76078),a=t(87270),d=t(21651),l=t(88846),s=t(21891),r=t(61592),c=t.n(r),u=t(84938),p=t(45779);function h(e,i,t,o,n,a,d){try{var l=e[a](d),s=l.value}catch(r){return void t(r)}l.done?i(s):Promise.resolve(s).then(o,n)}const v=new o.vU(a.Mt);let m=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,i,t,o){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:n}=i,{address:a}=t,l=`${e}:${n}:${a}:${o.toString()}`,s=this.addresses.find((e=>e.key===l));if(s)return s.address;const r={key:l,address:(0,d.computePoolAddress)({factoryAddress:e,tokenA:i,tokenB:t,fee:o})};return this.addresses.unshift(r),r.address}static getPool(e,i,t,o,n,a){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const l=this.pools.find((d=>d.token0===e&&d.token1===i&&d.fee===t&&c().EQ(d.sqrtRatioX96,o)&&c().EQ(d.liquidity,n)&&d.tickCurrent===a));if(l)return l;const s=new d.Pool(e,i,t,o,n,a);return this.pools.unshift(s),s}};var x;function f(e){const{chainId:i}=(0,l.useWeb3React)(),t=(0,p.useMemo)((()=>i?e.map((([e,i,t])=>{if(e&&i&&t){const o=e.wrapped,n=i.wrapped;if(o.equals(n))return;return o.sortsBefore(n)?[o,n,t]:[n,o,t]}})):new Array(e.length)),[i,e]),o=(0,p.useMemo)((()=>{const e=i&&n.V3_CORE_FACTORY_ADDRESSES[i];return e?t.map((i=>i&&m.getPoolAddress(e,...i))):new Array(t.length)}),[i,t]),a=(0,u._Y)(o,v,"slot0"),d=(0,u._Y)(o,v,"liquidity");return(0,p.useMemo)((()=>e.map(((e,i)=>{const o=t[i];if(!o)return[x.INVALID,null];const[n,l,s]=o;if(!a[i])return[x.INVALID,null];const{result:r,loading:c,valid:u}=a[i];if(!d[i])return[x.INVALID,null];const{result:p,loading:h,valid:v}=d[i];if(!o||!u||!v)return[x.INVALID,null];if(c||h)return[x.LOADING,null];if(!r||!p)return[x.NOT_EXISTS,null];if(!r.sqrtPriceX96||r.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=m.getPool(n,l,s,r.sqrtPriceX96,p[0],r.tick);return[x.EXISTS,e]}catch(f){return console.error("Error when constructing the pool",f),[x.NOT_EXISTS,null]}}))),[d,e,a,t])}function g(e,i,t){return f((0,p.useMemo)((()=>[[e,i,t]]),[e,i,t]))[0]}function y(e,i,t,o){const[l,r]=(0,p.useState)([x.LOADING,null]),c=e&&i&&t?m.getPoolAddress(n.V3_CORE_FACTORY_ADDRESSES[o],e,i,t):void 0,u=(0,p.useMemo)((()=>c?{[o]:c}:{}),[o,c]),v=(0,s.SO)(u,a.Mt)[o];return(0,p.useEffect)((()=>{function o(){var n;return n=function*(){try{if(!e||!i||!t||!c||!v)return void r([x.INVALID,null]);const o=yield v.slot0(),n=yield v.liquidity();r([x.NOT_EXISTS,null]);const a=new d.Pool(e,i,t,o.sqrtPriceX96.toString(),n.toString(),o.tick);r([x.EXISTS,a])}catch(o){r([x.INVALID,null])}},o=function(){var e=this,i=arguments;return new Promise((function(t,o){var a=n.apply(e,i);function d(e){h(a,t,o,d,l,"next",e)}function l(e){h(a,t,o,d,l,"throw",e)}d(void 0)}))},o.apply(this,arguments)}!function(){o.apply(this,arguments)}()}),[v,t,c,e,i]),l}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(x||(x={}))},46012:(e,i,t)=>{t.r(i),t.d(i,{default:()=>y});var o=t(92936),n=t(31017),a=t(5985),d=t(47583),l=t(69780),s=t(33426),r=t(43454),c=t(61152),u=t(54972),p=t(65075);const h=t.p+"static/media/404-page-dark.f24684e761633ae99402.png",v=t.p+"static/media/404-page-light.c448d3fd36de14609aba.png",m=c.default.img.withConfig({displayName:"NotFound__Image",componentId:"sc-22bd2404-0"})`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,x=c.default.div.withConfig({displayName:"NotFound__Container",componentId:"sc-22bd2404-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=(0,c.default)(x).withConfig({displayName:"NotFound__Header",componentId:"sc-22bd2404-2"})`
  gap: 30px;
`,g=(0,c.default)(x).withConfig({displayName:"NotFound__PageWrapper",componentId:"sc-22bd2404-3"})`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function y(){const e=(0,p.Gv)(),i=(0,s.dD)(),t=i?u.Tv.LargeHeader:u.Tv.Hero,c=i?u.Tv.HeadlineMedium:u.Tv.HeadlineLarge;return(0,o.jsx)(g,{children:(0,o.jsxs)(d.fM,{page:a.yJ.NOT_FOUND,shouldLogImpression:!0,children:[(0,o.jsxs)(f,{children:[(0,o.jsxs)(x,{children:[(0,o.jsx)(t,{children:"404"}),(0,o.jsx)(c,{color:"neutral2",children:(0,o.jsx)(n.cC,{id:"yduHrq"})})]}),(0,o.jsx)(m,{src:e?h:v,alt:"Liluni"})]}),(0,o.jsx)(l.Hm,{as:r.rU,to:"/",children:(0,o.jsx)(n.cC,{id:"GTK9OW"})})]})})}},25064:(e,i,t)=>{t.r(i),t.d(i,{default:()=>bt});var o=t(92936),n=t(31017),a=t(5985),d=t(47583),l=t(44591),s=t(87254),r=t(76078),c=t(21651),u=t(70060),p=t(74118),h=t(68707),v=t(36813),m=t(61592),x=t.n(m),f=t(45779),g=t(66136),y=t(59287),k=t(55810);class b{_data=null;_options;constructor(e){this._options=e,this._options.hoveredTick=e.activeTick}draw(e,i){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,i)))}update(e,i){this._data=e,this._options={...this._options,...i}}_drawImpl(e,i){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;const t=e.context,o=this._data.bars.map((e=>({x:e.x,y:i(e.originalData.liquidity)??0,tick:e.originalData.tick})));(0,k.XV)(o,this._data.barSpacing,e.horizontalPixelRatio,this._data.visibleRange.from,this._data.visibleRange.to);const n=i(0)??0;t.fillStyle=this._options.tokenAColor;for(let a=this._data.visibleRange.from;a<this._data.visibleRange.to;a++){const i=o[a],d=i.column,l=this._options.activeTick===i.tick,s=this._options.hoveredTick===i.tick;if(!d)return;const r=Math.min(Math.max(e.horizontalPixelRatio,d.right-d.left),this._data.barSpacing*e.horizontalPixelRatio),c=.3*r,u=r-2*c,p=(0,k.n1)(n,i.y,e.verticalPixelRatio);if(s){const e=.3*t.canvas.height,i=t.canvas.height-e;t.fillStyle=this._options.highlightColor,t.beginPath(),t.roundRect(d.left+c,e,u,i,8),t.fill(),t.globalAlpha=1}else t.globalAlpha=.4;if(l?t.fillStyle=this._options.tokenBColor:void 0===this._options.activeTick?t.fillStyle=this._options.color??"white":this._options.activeTick>i.tick?t.fillStyle=this._options.tokenBColor:this._options.activeTick<i.tick&&(t.fillStyle=this._options.tokenAColor),t.beginPath(),t.roundRect(d.left+c,p.position,u,p.length,8),t.fill(),t.globalAlpha=1,l&&this._options.activeTickProgress){t.globalCompositeOperation="source-atop";const e=p.length*this._options.activeTickProgress,i=p.position+(p.length-e);t.fillStyle=this._options.tokenAColor,t.beginPath(),t.fillRect(d.left,i,r,e),t.globalCompositeOperation="source-over"}}}}class w{_renderer;_tokenAColor;_tokenBColor;_highlightColor;constructor(e){this._tokenAColor=e.tokenAColor,this._renderer=new b(e),this._tokenBColor=e.tokenBColor,this._highlightColor=e.highlightColor}priceValueBuilder(e){return[0,e.liquidity]}isWhitespace(e){return!e.liquidity}renderer(){return this._renderer}update(e,i){this._renderer.update(e,i)}defaultOptions(){return{...y.Qb,tokenAColor:this._tokenAColor,tokenBColor:this._tokenBColor,highlightColor:this._highlightColor}}}function T(e,i,t,o,n,a,d){try{var l=e[a](d),s=l.value}catch(r){return void t(r)}l.done?i(s):Promise.resolve(s).then(o,n)}function j(e){return function(){var i=this,t=arguments;return new Promise((function(o,n){var a=e.apply(i,t);function d(e){T(a,o,n,d,l,"next",e)}function l(e){T(a,o,n,d,l,"throw",e)}d(void 0)}))}}class C extends p.B{series;activeTick;constructor(e,i){super(e,i),this.series=this.api.addCustomSeries(new w(i)),this.series.setData(this.data),this.updateOptions(i),this.fitContent()}updateOptions(e){super.updateOptions(e,{localization:{locale:e.locale},rightPriceScale:{visible:!1,borderVisible:!1,scaleMargins:{top:.35,bottom:0},autoScale:!0},timeScale:{visible:!1,fixLeftEdge:!0,fixRightEdge:!0,borderVisible:!1},crosshair:{horzLine:{visible:!1,labelVisible:!1},vertLine:{visible:!1,labelVisible:!1}},grid:{vertLines:{visible:!1},horzLines:{visible:!1}}});const{data:i,activeTick:t}=e;this.activeTick=t,this.data!==i&&(this.data=i,this.series.setData(i),this.fitContent()),this.series.applyOptions({priceFormat:{type:"volume"},priceLineVisible:!1,lastValueVisible:!1}),this.series.applyOptions(e)}onSeriesHover(e){var i;super.onSeriesHover(e);const t={hoveredTick:(null===(i=e)||void 0===i?void 0:i.item.tick)??this.activeTick};this.series.applyOptions(t)}activeTickIndex(){return this.data.findIndex((e=>e.tick===this.activeTick))}fitContent(){const e=this.data.length,i=this.data.findIndex((e=>e.tick===this.activeTick)),t=-1!==i?i:e/2;this.api.timeScale().setVisibleLogicalRange({from:Math.max(t-50,0),to:Math.min(t+50,this.data.length)})}}const I=h.BigNumber.from(2).pow(128).sub(1);function P(e){return r.CurrencyAmount.fromRawAmount(e,I.toString())}function _(){return(_=j((function*(e,i,t,o,n){if(n.currentTick&&n.sqrtPriceX96&&n.liquidity)try{const a=x().greaterThan(o.liquidityNet,x().BigInt(0))?o.liquidityNet:x().multiply(o.liquidityNet,x().BigInt("-1")),d=[{index:o.tick,liquidityGross:a,liquidityNet:x().multiply(o.liquidityNet,x().BigInt("-1"))},{index:o.tick+c.TICK_SPACINGS[t],liquidityGross:a,liquidityNet:o.liquidityNet}],l=new c.Pool(e,i,t,n.sqrtPriceX96,o.liquidityActive,n.currentTick,d),s=c.TickMath.getSqrtRatioAtTick(d[0].index),r=(yield l.getOutputAmount(P(e),s))[0],u=parseFloat(o.sdkPrice.invert().quote(r).toExact()),p=c.TickMath.getSqrtRatioAtTick(d[1].index),h=(yield l.getOutputAmount(P(i),p))[0];return{amount0Locked:u,amount1Locked:parseFloat(o.sdkPrice.quote(h).toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function S(e,i,t,o){return N.apply(this,arguments)}function N(){return(N=j((function*(e,i,t,o){try{const n=c.TICK_SPACINGS[t],a=x().greaterThan(o.liquidityNet,x().BigInt(0))?o.liquidityNet:x().multiply(o.liquidityNet,x().BigInt("-1")),d=c.TickMath.getSqrtRatioAtTick(o.tick),l=[{index:o.tick,liquidityGross:a,liquidityNet:x().multiply(o.liquidityNet,x().BigInt("-1"))},{index:o.tick+c.TICK_SPACINGS[t],liquidityGross:a,liquidityNet:o.liquidityNet}],s=new c.Pool(e,i,Number(t),d,o.liquidityActive,o.tick,l),u=c.TickMath.getSqrtRatioAtTick(o.tick-n),p=r.CurrencyAmount.fromRawAmount(e,I.toString()),h=(yield s.getOutputAmount(p,u))[0],v=parseFloat(o.sdkPrice.invert().quote(h).toExact());return{amount0Locked:v,amount1Locked:parseFloat(h.toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function A({tokenA:e,tokenB:i,feeTier:t,isReversed:o,chainId:n}){const{formatNumber:a,formatPrice:d}=(0,g.Gb)(),l=(0,v.K)(e,i,t,n),[s,r]=(0,f.useState)();return(0,f.useEffect)((()=>{function n(){return n=j((function*(){var n;const a=l.data;if(!a)return;let s,u;const p=[];for(let r=0;r<a.length;r++){const n=a[r],h=o?1e3*r:1e3*(a.length-r),v=l.activeTick===n.tick;let m=n.sdkPrice,x=n.sdkPrice.invert();v&&l.activeTick&&l.currentTick&&(u=r,s=(l.currentTick-n.tick)/c.TICK_SPACINGS[t],m=(0,c.tickToPrice)(e,i,n.tick),x=m.invert());const{amount0Locked:f,amount1Locked:y}=yield S(e,i,t,n);p.push({tick:n.tick,liquidity:parseFloat(n.liquidityActive.toString()),price0:d({price:m,type:g.sw.SwapDetailsAmount}),price1:d({price:x,type:g.sw.SwapDetailsAmount}),time:h,amount0Locked:f,amount1Locked:y})}null===(n=p)||void 0===n||n.map(((e,i)=>{i>0&&(p[i-1].amount0Locked=e.amount0Locked,p[i-1].amount1Locked=e.amount1Locked)}));const h=void 0!==u?p[u]:void 0;if(void 0!==u&&h){const o=yield function(e,i,t,o,n){return _.apply(this,arguments)}(e,i,t,a[u],l);p[u]={...h,...o}}o||p.reverse(),r({barData:p.filter((e=>e.liquidity>0)),activeRangeData:h,activeRangePercentage:s})})),n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[l,e,i,a,d,o,t]),{tickData:s,activeTick:l.activeTick,loading:l.isLoading||!s}}var $=t(7392),L=t(95757),D=t(6992),B=t(24997),E=t(68310),M=t(13382),O=t(26431),R=t(90511),V=t(90471),q=t(67968),F=t(53950),U=t(87685),Z=t(18569),z=t(32682),W=t(64505),X=t(61152),H=t(54972),G=t(55874);const Q=356,Y=[E.oX.VOLUME,E.oX.PRICE,E.oX.LIQUIDITY],K=X.default.div.withConfig({displayName:"ChartSection__TimePeriodSelectorContainer",componentId:"sc-556fe134-0"})`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,J=X.default.div.withConfig({displayName:"ChartSection__ChartTypeSelectorContainer",componentId:"sc-556fe134-1"})`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,ee=(0,X.default)(p.k).withConfig({displayName:"ChartSection__StyledChart",componentId:"sc-556fe134-2"})`
  height: ${Q}px;
`,ie=({chartType:e,onChartTypeChange:i})=>(0,o.jsx)(J,{children:(0,o.jsx)(R.W,{options:Y,currentChartType:e,onSelectOption:i})});function te(e,i,t,o,n,a){var d;const[l,s]=(0,f.useState)(Z.XH.DAY),[r,c]=(0,f.useState)(E.oX.VOLUME),u=a===U.Qeo.V3,p={address:(null===(d=e)||void 0===d?void 0:d.address)??"",chain:n,duration:(0,Z.uw)(l),isV3:u},h=function(e,i,t,o,n){var a,d,l;const{data:s,loading:r}=(0,U.TNW)({variables:e});return(0,f.useMemo)((()=>{var e,a,d;const{priceHistory:l}=(null===(e=s)||void 0===e?void 0:e.v2Pair)??(null===(a=s)||void 0===a?void 0:a.v3Pool)??{},c=n?t:o,u=(null===(d=l)||void 0===d?void 0:d.map((e=>{var t,o;const n=(null===(t=i)||void 0===t?void 0:t.token0.address)===(null===(o=c)||void 0===o?void 0:o.address.toLowerCase())?e.token0Price:e.token1Price;return{time:e.timestamp,value:n,open:n,high:n,low:n,close:n}})))??[],p=r||!l?V.x1.INVALID:V.x1.VALID;return{chartType:E.oX.PRICE,entries:u,loading:r,dataQuality:p}}),[null===(a=s)||void 0===a?void 0:a.v2Pair,null===(d=s)||void 0===d?void 0:d.v3Pool,n,r,null===(l=i)||void 0===l?void 0:l.token0.address,t,o])}(p,e,i,t,o),v=function(e){var i,t;const{data:o,loading:n}=(0,U.hzq)({variables:e});return(0,f.useMemo)((()=>{var i,t,a;const{historicalVolume:d}=(null===(i=o)||void 0===i?void 0:i.v2Pair)??(null===(t=o)||void 0===t?void 0:t.v3Pool)??{},l=(null===(a=d)||void 0===a?void 0:a.map(V.Yz))??[],s=(0,V.q6)(l,E.oX.VOLUME,e.duration);return{chartType:E.oX.VOLUME,entries:l,loading:n,dataQuality:s}}),[null===(i=o)||void 0===i?void 0:i.v2Pair,null===(t=o)||void 0===t?void 0:t.v3Pool,n,e.duration])}(p);return(0,f.useMemo)((()=>{const e=(()=>{switch(r){case E.oX.PRICE:return h;case E.oX.VOLUME:return v;case E.oX.LIQUIDITY:return{chartType:E.oX.LIQUIDITY,entries:[],loading:!1,dataQuality:V.x1.VALID}}})();return{timePeriod:l,setTimePeriod:s,setChartType:c,activeQuery:e}}),[r,v,h,l])}function oe(e){var i,t,a,d,l,s;const[c,u]=[(null===(i=e.poolData)||void 0===i?void 0:i.token0)&&(0,Z.Pc)(e.poolData.token0),(null===(t=e.poolData)||void 0===t?void 0:t.token1)&&(0,Z.Pc)(e.poolData.token1)],{setChartType:p,timePeriod:h,setTimePeriod:v,activeQuery:m}=te(e.poolData,null===(a=c)||void 0===a?void 0:a.wrapped,null===(d=u)||void 0===d?void 0:d.wrapped,e.isReversed,e.chain??U.qop.Ethereum,(null===(l=e.poolData)||void 0===l?void 0:l.protocolVersion)??U.Qeo.V3),x=(0,W.Dv)(D.N),g=e.loading||m.chartType!==E.oX.LIQUIDITY&&(null===(s=m)||void 0===s?void 0:s.loading),y=(()=>{if(!c||!u||!e.poolData||!e.chain)return(0,o.jsx)($.M,{type:m.chartType,height:Q});const i={...e,feeTier:Number(e.poolData.feeTier),height:Q,timePeriod:h,tokenA:c.wrapped,tokenB:u.wrapped,chainId:(0,Z.Tz)(e.chain)??r.ChainId.MAINNET};if(m.chartType===E.oX.LIQUIDITY)return(0,o.jsx)(ce,{...i});if(m.dataQuality===V.x1.INVALID||!c||!u){const e=g?void 0:(0,o.jsx)(n.cC,{id:"WzOODY"});return(0,o.jsx)($.M,{type:m.chartType,height:Q,errorText:e})}const t=m.dataQuality===V.x1.STALE;switch(m.chartType){case E.oX.PRICE:return(0,o.jsx)(de,{...i,data:m.entries,stale:t});case E.oX.VOLUME:return(0,o.jsx)(B.x,{...i,data:m.entries,stale:t})}})(),k=(0,f.useMemo)((()=>m.chartType===E.oX.PRICE?O.Bz.filter((e=>e.value!==F._u.HOUR)):O.Bz),[m.chartType]);return(0,o.jsxs)("div",{"data-testid":"pdp-chart-container",children:[y,(0,o.jsxs)(O.Os,{children:[(0,o.jsx)(ie,{chartType:m.chartType,onChartTypeChange:p}),m.chartType!==E.oX.LIQUIDITY&&(0,o.jsx)(K,{children:(0,o.jsx)(M.Z,{options:k,currentSelected:F.rD[h],onSelectOption:e=>{const i=(0,F.Wz)(e);var t;i===h?null===(t=x)||void 0===t||t():v(i)}})})]})]})}const ne=X.default.div.withConfig({displayName:"ChartSection__PriceDisplayContainer",componentId:"sc-556fe134-3"})`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`,ae=(0,X.default)(H.Tv.HeadlineMedium).withConfig({displayName:"ChartSection__ChartPriceText",componentId:"sc-556fe134-4"})`
  ${H.cw}
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 24px !important;
    line-height: 32px !important;
  }
`;function de({tokenA:e,tokenB:i,isReversed:t,data:n,stale:a}){const{formatCurrencyAmount:d,formatPrice:l}=(0,g.Gb)(),[s,c]=t?[i,e]:[e,i],p=(0,f.useMemo)((()=>({data:n,stale:a,type:E.E4.LINE})),[n,a]),h=(0,z.ZP)(s),v=n[n.length-1];return(0,o.jsx)(ee,{Model:L.r4,params:p,children:e=>{var i;const t=e??v,a=Math.floor((t.value??t.close)*10**c.decimals),p=(0,o.jsxs)(ne,{children:[(0,o.jsx)(ae,{children:`1 ${s.symbol} = ${d({amount:r.CurrencyAmount.fromRawAmount(c,a)})} \n            ${c.symbol}`}),(0,o.jsx)(ae,{color:"neutral2",children:h?"("+l({price:h})+")":""})]});return(0,o.jsx)(u._,{value:p,additionalFields:(0,o.jsx)(L.Tg,{startingPrice:n[0],endingPrice:t}),valueFormatterType:g.sw.FiatTokenPrice,time:null===(i=e)||void 0===i?void 0:i.time})}})}const le=(0,X.default)(H.Tv.H1Medium).withConfig({displayName:"ChartSection__FadeInHeading",componentId:"sc-556fe134-5"})`
  ${G.Sj};
  line-height: 32px;
`,se=(0,X.default)(H.Tv.SubHeader).withConfig({displayName:"ChartSection__FadeInSubheader",componentId:"sc-556fe134-6"})`
  ${G.Sj}
`;function re({data:e,tokenADescriptor:i,tokenBDescriptor:t,currentTick:n}){const{formatNumber:a}=(0,g.Gb)();if(!n)return null;const d=e.tick>=n?a({input:e.amount0Locked,type:g.sw.TokenQuantityStats}):0,l=e.tick<=n?a({input:e.amount1Locked,type:g.sw.TokenQuantityStats}):0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(H.Tv.BodySmall,{children:s.ag._({id:"IHsZRO",values:{tokenADescriptor:i,displayValue0:d}})}),(0,o.jsx)(H.Tv.BodySmall,{children:s.ag._({id:"YJVSiv",values:{tokenBDescriptor:t,displayValue1:l}})})]})}function ce({tokenA:e,tokenB:i,feeTier:t,isReversed:a,chainId:d}){const l=e.symbol??e.name??s.ag._({id:"oSUFoB"}),r=i.symbol??i.name??s.ag._({id:"jy311U"}),{tickData:p,activeTick:h,loading:v}=A({tokenA:e,tokenB:i,feeTier:t,isReversed:a,chainId:d}),m=(0,X.useTheme)(),x=(0,f.useMemo)((()=>{var e,i;return{data:(null===(e=p)||void 0===e?void 0:e.barData)??[],tokenAColor:a?m.token1:m.token0,tokenBColor:a?m.token0:m.token1,highlightColor:m.surface3,activeTick:h,activeTickProgress:null===(i=p)||void 0===i?void 0:i.activeRangePercentage}}),[h,a,m,p]);return v?(0,o.jsx)(q.sT,{}):(0,o.jsx)(ee,{Model:C,params:x,TooltipBody:t!==c.FeeAmount.LOWEST?({data:e})=>{var i,t;return(0,o.jsx)(re,{data:e,tokenADescriptor:l,tokenBDescriptor:r,currentTick:null===(t=p)||void 0===t||null===(i=t.activeRangeData)||void 0===i?void 0:i.tick})}:void 0,children:e=>{var i,t,a;const d=e??(null===(i=p)||void 0===i?void 0:i.activeRangeData),s=(0,o.jsxs)("div",{children:[(0,o.jsx)(le,{children:`1 ${l} = ${null===(t=d)||void 0===t?void 0:t.price0} ${r}`}),(0,o.jsx)(le,{children:`1 ${r} = ${null===(a=d)||void 0===a?void 0:a.price1} ${l}`}),d&&d.tick===h&&(0,o.jsx)(se,{color:"neutral2",paddingTop:"4px",children:(0,o.jsx)(n.cC,{id:"IGfliU"})})]});return(0,o.jsx)(u._,{value:s})}})}var ue=t(95648),pe=t(18124),he=t(5319),ve=t(5967),me=t(94284),xe=t(15824),fe=t(50333),ge=t(94191),ye=t(51578),ke=t(6282),be=t(66869),we=t(13446),Te=t(54703),je=t(64370),Ce=t(25019);const Ie=(0,X.default)(H.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__TokenName",componentId:"sc-21fa9b37-0"})`
  display: none;

  @media (max-width: ${be.j$.lg}px) and (min-width: ${be.j$.xs}px) {
    display: block;
  }
  ${H.cw}
`,Pe=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetailsLink__TokenTextWrapper",componentId:"sc-21fa9b37-1"})`
  gap: 8px;
  margin-right: 12px;
  ${H.cw}
  ${({isClickable:e})=>e&&H.iV}
`,_e=(0,X.default)(H.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__SymbolText",componentId:"sc-21fa9b37-2"})`
  flex-shrink: 0;

  @media (max-width: ${be.j$.lg}px) and (min-width: ${be.j$.xs}px) {
    color: ${({theme:e})=>e.neutral2};
  }
`,Se=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetailsLink__CopyAddress",componentId:"sc-21fa9b37-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${H.iV}
`,Ne=(0,X.default)(ge.Z).withConfig({displayName:"PoolDetailsLink__StyledCopyIcon",componentId:"sc-21fa9b37-4"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,Ae=X.default.div.withConfig({displayName:"PoolDetailsLink__ExplorerWrapper",componentId:"sc-21fa9b37-5"})`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${H.iV}
`,$e=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetailsLink__ButtonsRow",componentId:"sc-21fa9b37-6"})`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function Le({address:e,chainId:i,tokens:t,loading:a}){var d,l,c,u,p,h,v;const m=(0,X.useTheme)(),x=e===je.dt,g=t[0]&&(0,Z.Pc)(t[0]),[y,k]=(0,fe.Z)(),b=(0,f.useCallback)((()=>{const i=(0,we.UJ)(e);i&&k(i)}),[e,k]),w=2===t.length,T=e&&i&&(0,Te.E)(i,e,x?Te.r.NATIVE:w?Te.r.ADDRESS:Te.r.TOKEN),j=(0,ke.s0)(),C=(0,Z.Ld)(i),I=(0,f.useCallback)((()=>{var e;w||j((0,Z.dG)({address:null===(e=t[0])||void 0===e?void 0:e.address,chain:C}))}),[j,t,w,C]),[P,_]=(0,f.useState)(!1),S=(0,f.useCallback)((e=>{if(e){e.clientWidth<e.scrollWidth&&_((e=>e?"both":"start"))}}),[P]);return!a&&e&&i?(0,o.jsxs)(me.ZP,{align:"space-between",children:[(0,o.jsxs)(Pe,{"data-testid":w?`pdp-pool-logo-${null===(d=t[0])||void 0===d?void 0:d.symbol}-${null===(l=t[1])||void 0===l?void 0:l.symbol}`:`pdp-token-logo-${null===(c=t[0])||void 0===c?void 0:c.symbol}`,isClickable:!w,onClick:I,ref:S,children:[w?(0,o.jsx)(ue.M3,{chainId:i,tokens:t,size:20}):(0,o.jsx)(ve.Z,{currency:g,size:"20px"}),(0,o.jsx)(Ie,{children:w?(0,o.jsx)(n.cC,{id:"ou6PkF"}):null===(u=t[0])||void 0===u?void 0:u.name}),(0,o.jsx)(_e,{children:w?`${null===(p=t[0])||void 0===p?void 0:p.symbol} / ${null===(h=t[1])||void 0===h?void 0:h.symbol}`:(0,o.jsxs)(me.ZP,{gap:"4px",children:[null===(v=t[0])||void 0===v?void 0:v.symbol," ",(0,o.jsx)(ye.Z,{size:16,color:m.neutral2})]})})]}),(0,o.jsxs)($e,{children:[!x&&(0,o.jsx)(xe.ZP,{placement:"bottom",size:xe.Oz.Max,show:y,text:s.ag._({id:"6V3Ea3"}),children:(0,o.jsxs)(Se,{"data-testid":`copy-address-${e}`,onClick:b,children:[(0,we.Xn)(e,P?2:void 0,"both"===P?2:void 0),(0,o.jsx)(Ne,{})]})}),T&&(0,o.jsx)(H.dL,{href:T,"data-testid":`explorer-url-${T}`,children:(0,o.jsx)(Ae,{children:i===r.ChainId.MAINNET?(0,o.jsx)(pe.P,{width:"16px",height:"16px",fill:m.neutral1}):(0,o.jsx)(he.J,{width:"16px",height:"16px",fill:m.neutral1})})})]})]}):(0,o.jsxs)(me.ZP,{gap:"8px",padding:"6px 0px",children:[(0,o.jsx)(Ce.F,{}),(0,o.jsx)(Ce.k,{$width:117})]})}var De=t(19478),Be=t(82743),Ee=t(39671),Me=t(3476),Oe=t(43454),Re=t(22953);const Ve=(0,X.default)(Re.xv).withConfig({displayName:"PoolDetailsStats__HeaderText",componentId:"sc-a0986055-0"})`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${be.j$.lg}px) {
    width: 100%;
  }
`,qe=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetailsStats__StatsWrapper",componentId:"sc-a0986055-1"})`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${be.j$.lg}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,Fe=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetailsStats__StatItemColumn",componentId:"sc-a0986055-2"})`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${be.j$.sm}px) {
    min-width: 150px;
  }
`,Ue=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceSymbols",componentId:"sc-a0986055-3"})`
  justify-content: space-between;

  @media (max-width: ${be.j$.lg}px) {
    flex-direction: column;
  }
`,Ze=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceTokenNamesContainer",componentId:"sc-a0986055-4"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${be.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,ze=(0,X.default)(Oe.rU).withConfig({displayName:"PoolDetailsStats__StyledLink",componentId:"sc-a0986055-5"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${H.iV}
`,We=X.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,Xe=X.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,He=X.default.div.withConfig({displayName:"PoolDetailsStats__BalanceChartSide",componentId:"sc-a0986055-6"})`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?We:Xe}
`,Ge=(0,X.default)(Be.X).withConfig({displayName:"PoolDetailsStats__StatSectionBubble",componentId:"sc-a0986055-7"})`
  width: 180px;
  height: 40px;
`,Qe=(0,X.default)(Be.X).withConfig({displayName:"PoolDetailsStats__StatHeaderBubble",componentId:"sc-a0986055-8"})`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,Ye=({token:e,chainId:i})=>{var t;const n=(0,Me.e)().lg,{formatNumber:a}=(0,g.Gb)(),d=i?(0,Z.vR)(i,e):e,l=(null===(t=d)||void 0===t?void 0:t.address)===je.dt&&i?(0,je.gX)(i):e.currency;return(0,o.jsxs)(Ze,{children:[!n&&(0,o.jsx)(ve.Z,{currency:l,size:"20px",style:{marginRight:"8px"}}),a({input:e.tvl,type:g.sw.TokenQuantityStats}),"\xa0",(0,o.jsxs)(ze,{to:(0,Z.dG)({address:d.address,chain:(0,Z.Ld)(i)}),children:[n&&(0,o.jsx)(ve.Z,{currency:l,size:"16px",style:{marginRight:"4px",marginLeft:"4px"}}),d.symbol]})]})};function Ke({poolData:e,isReversed:i,chainId:t,loading:a}){var d,s,r,c,u,p,h,v;const m=(0,Me.e)().lg,x=(0,X.useTheme)(),g=(0,Ee.U8)(null===(s=e)||void 0===s||null===(d=s.token0)||void 0===d?void 0:d.address,t),y=(0,Ee.U8)(null===(c=e)||void 0===c||null===(r=c.token1)||void 0===r?void 0:r.address,t),[k,b]=(0,f.useMemo)((()=>{if(e&&e.tvlToken0&&e.token0Price&&e.tvlToken1&&e.token1Price){var t,o,n,a,d,l,s,r,c,u,p,h,v,m;const x=(null===(t=e)||void 0===t?void 0:t.tvlToken0)*(null===(o=e)||void 0===o?void 0:o.token0Price)+(null===(n=e)||void 0===n?void 0:n.tvlToken1)*(null===(a=e)||void 0===a?void 0:a.token1Price),f={...null===(d=e)||void 0===d?void 0:d.token0,price:null===(l=e)||void 0===l?void 0:l.token0Price,tvl:null===(s=e)||void 0===s?void 0:s.tvlToken0,percent:(null===(r=e)||void 0===r?void 0:r.tvlToken0)*(null===(c=e)||void 0===c?void 0:c.token0Price)/x,currency:g},k={...null===(u=e)||void 0===u?void 0:u.token1,price:null===(p=e)||void 0===p?void 0:p.token1Price,tvl:null===(h=e)||void 0===h?void 0:h.tvlToken1,percent:(null===(v=e)||void 0===v?void 0:v.tvlToken1)*(null===(m=e)||void 0===m?void 0:m.token1Price)/x,currency:y};return i?[k,f]:[f,k]}return[void 0,void 0]}),[g,y,i,e]);return!a&&k&&b&&e?(0,o.jsxs)(qe,{loaded:!0,children:[(0,o.jsx)(Ve,{children:(0,o.jsx)(n.cC,{id:"29Hx9U"})}),(0,o.jsxs)(Fe,{children:[(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(n.cC,{id:"2mfj90"})}),(0,o.jsxs)(Ue,{children:[(0,o.jsx)(Ye,{token:k,chainId:t}),(0,o.jsx)(Ye,{token:b,chainId:t})]}),m&&(0,o.jsxs)(me.ZP,{"data-testid":"pool-balance-chart",children:[(0,o.jsx)(He,{percent:k.percent,$color:x.token0,isLeft:!0}),(0,o.jsx)(He,{percent:b.percent,$color:x.token1,isLeft:!1})]})]}),(null===(u=e)||void 0===u?void 0:u.tvlUSD)&&(0,o.jsx)(ii,{title:(0,o.jsx)(n.cC,{id:"FHKsZF"}),value:e.tvlUSD,delta:e.tvlUSDChange}),void 0!==(null===(p=e)||void 0===p?void 0:p.volumeUSD24H)&&(0,o.jsx)(ii,{title:(0,o.jsx)(n.cC,{id:"0RweTm"}),value:e.volumeUSD24H,delta:e.volumeUSD24HChange}),void 0!==(null===(h=e)||void 0===h?void 0:h.volumeUSD24H)&&void 0!==(null===(v=e)||void 0===v?void 0:v.feeTier)&&(0,o.jsx)(ii,{title:(0,o.jsx)(n.cC,{id:"PpS90j"}),value:e.volumeUSD24H*(e.feeTier/1e6)})]}):(0,o.jsxs)(qe,{children:[(0,o.jsx)(Ve,{children:(0,o.jsx)(Qe,{})}),Array.from({length:4}).map(((e,i)=>(0,o.jsxs)(l.ZP,{gap:"md",children:[(0,o.jsx)(Ce.k,{}),(0,o.jsx)(Ge,{})]},`loading-info-row-${i}`)))]})}const Je=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetailsStats__StatsTextContainer",componentId:"sc-a0986055-9"})`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${be.j$.lg}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,ei=(0,X.default)(Re.xv).withConfig({displayName:"PoolDetailsStats__StatItemText",componentId:"sc-a0986055-10"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${be.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function ii({title:e,value:i,delta:t}){const{formatNumber:n,formatDelta:a}=(0,g.Gb)();return(0,o.jsxs)(Fe,{children:[(0,o.jsx)(H.Tv.BodySecondary,{children:e}),(0,o.jsxs)(Je,{children:[(0,o.jsx)(ei,{children:n({input:i,type:g.sw.FiatTokenStats})}),!!t&&(0,o.jsxs)(me.ZP,{width:"max-content",padding:"4px 0px",children:[(0,o.jsx)(De.Kx,{delta:t}),(0,o.jsx)(H.Tv.BodySecondary,{children:a(t)})]})]})]})}var ti=t(88846),oi=t(56708),ni=t(91216),ai=t(69924),di=t(23532),li=t(7789),si=t(56536),ri=t(79833),ci=t(80149),ui=t(83102),pi=t(65480),hi=t(63194),vi=t(57809),mi=t(62652),xi=t(62587),fi=t(17202);function gi(e,i,t,o,n,a,d){try{var l=e[a](d),s=l.value}catch(r){return void t(r)}l.done?i(s):Promise.resolve(s).then(o,n)}const yi=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetailsStatsButtons__PoolDetailsStatsButtonsRow",componentId:"sc-b84bab9c-0"})`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${be.j$.lg}px) {
    gap: 8px;
    position: fixed;
    bottom: 0px;
    left: 0;
    margin: 8px;
    width: calc(100% - 16px);
    background: ${({theme:e})=>e.surface1};
    padding: 12px 32px;
    border: 1px solid ${({theme:e})=>e.surface3};
    border-radius: 20px;
    backdrop-filter: blur(10px);
    & > :first-child {
      margin-right: auto;
    }
    z-index: ${xi.k.sticky};
  }
  @media (max-width: ${be.j$.md}px) {
    bottom: 56px;
  }
`,ki=X.default.button.withConfig({displayName:"PoolDetailsStatsButtons__PoolButton",componentId:"sc-b84bab9c-1"})`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  width: ${({$open:e})=>e?"100px":"50%"};
  gap: 8px;
  color: ${({theme:e,$open:i})=>i?e.neutral1:e.accent1};
  background-color: ${({theme:e,$open:i})=>i?e.surface1:(0,mi.jb)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,$open:i})=>i&&`1px solid ${e.surface3}`};
  ${H.iV}
  @media (max-width: ${be.j$.lg}px) {
    width: ${({$fixedWidth:e})=>e&&"120px"};
  @media (max-width: ${be.j$.sm}px) {
    display: ${({$hideOnMobile:e})=>e&&"none"};
    width: ${({$fixedWidth:e})=>!e&&"100%"};
  }
`,bi=(0,X.default)(di.o).withConfig({displayName:"PoolDetailsStatsButtons__SwapIcon",componentId:"sc-b84bab9c-2"})`
  fill: ${({theme:e})=>e.accent1};
  rotate: 90deg;
`,wi=(0,X.default)(Be.X).withConfig({displayName:"PoolDetailsStatsButtons__ButtonBubble",componentId:"sc-b84bab9c-3"})`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`,Ti=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetailsStatsButtons__SwapModalWrapper",componentId:"sc-b84bab9c-4"})`
  z-index: 0;
  gap: 24px;
  visibility: ${({open:e})=>e?"visible":"hidden"};
  opacity: ${({open:e})=>e?"1":"0"};
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${si.R0} {
    &:before {
      background-color: unset;
    }
  }

  // Need to override the default visibility to properly hide
  ${ai.Vt} {
    visibility: ${({open:e})=>e?"visible":"hidden"};
  }

  @media (max-width: ${be.j$.lg}px) {
    position: fixed;
    width: calc(100% - 16px);
    padding: 0px 12px 12px;
    border-radius: 24px;
    max-width: 480px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${xi.k.fixed};
    background: ${({theme:e})=>e.surface1};
    transition: ${({theme:e})=>`opacity ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  }
`,ji=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetailsStatsButtons__MobileBalance",componentId:"sc-b84bab9c-5"})`
  gap: 2px;
  display: none;
  @media (max-width: ${be.j$.lg}px) {
    display: flex;
  }
`;function Ci({chainId:e,token0:i,token1:t,feeTier:a,loading:d}){var s,r,c,u,p,h,v,m,x,y,k,b;const{chainId:w,connector:T,account:j}=(0,ti.useWeb3React)(),{positions:C}=(0,ni.Z)(j??"",e?[e]:void 0),I=C&&function(e,i,t,o){var n;return null===(n=e)||void 0===n?void 0:n.find((e=>{var n,a,d,l,s,r,c,u,p;return((null===(n=e)||void 0===n?void 0:n.details.token0.toLowerCase())===(null===(a=i)||void 0===a?void 0:a.address)||(null===(d=e)||void 0===d?void 0:d.details.token0.toLowerCase())===(null===(l=t)||void 0===l?void 0:l.address))&&((null===(s=e)||void 0===s?void 0:s.details.token1.toLowerCase())===(null===(r=i)||void 0===r?void 0:r.address)||(null===(c=e)||void 0===c?void 0:c.details.token1.toLowerCase())===(null===(u=t)||void 0===u?void 0:u.address))&&(null===(p=e)||void 0===p?void 0:p.details.fee)==o&&!e.closed}))}(C,i,t,a),P=null===(s=I)||void 0===s?void 0:s.details.tokenId,_=(0,ui.o)(),S=(0,ke.s0)(),N=i&&(0,Z.Pc)(i),A=t&&(0,Z.Pc)(t),{data:$}=(0,li.T)({account:j}),{balance0:L,balance1:D,balance0Fiat:B,balance1Fiat:E}=(0,f.useMemo)((()=>{var o,n,a,d,l,s,r,c,u,p,h;const v=null===(a=$)||void 0===a||null===(n=a.portfolios)||void 0===n||null===(o=n[0].tokenBalances)||void 0===o?void 0:o.filter((i=>{var t;return(null===(t=i.token)||void 0===t?void 0:t.chain)===(0,Z.Ld)(e)})),m=null===(d=v)||void 0===d?void 0:d.find((e=>{var t,o;return(null===(t=e.token)||void 0===t?void 0:t.address)===(null===(o=i)||void 0===o?void 0:o.address)})),x=null===(l=v)||void 0===l?void 0:l.find((e=>{var i,o;return(null===(i=e.token)||void 0===i?void 0:i.address)===(null===(o=t)||void 0===o?void 0:o.address)}));return{balance0:(null===(s=m)||void 0===s?void 0:s.quantity)??0,balance1:(null===(r=x)||void 0===r?void 0:r.quantity)??0,balance0Fiat:(null===(u=m)||void 0===u||null===(c=u.denominatedValue)||void 0===c?void 0:c.value)??0,balance1Fiat:(null===(h=x)||void 0===h||null===(p=h.denominatedValue)||void 0===p?void 0:p.value)??0}}),[null===(r=$)||void 0===r?void 0:r.portfolios,e,null===(c=i)||void 0===c?void 0:c.address,null===(u=t)||void 0===u?void 0:u.address]),{formatNumber:M}=(0,g.Gb)(),O=M({input:L,type:g.sw.TokenNonTx}),R=M({input:D,type:g.sw.TokenNonTx}),V=B+E,q=M({input:V,type:g.sw.PortfolioBalance}),F=function(){var i,t=(i=function*(){N&&A&&(w!==e&&e&&(yield _(T,e)),S(`/add/${(0,fi.H)(N)}/${(0,fi.H)(A)}/${a}${P?`/${P}`:""}`))},function(){var e=this,t=arguments;return new Promise((function(o,n){var a=i.apply(e,t);function d(e){gi(a,o,n,d,l,"next",e)}function l(e){gi(a,o,n,d,l,"throw",e)}d(void 0)}))});return function(){return t.apply(this,arguments)}}(),[U,z]=(0,f.useReducer)((e=>!e),!1),W=(0,Me.e)(),X=W.lg,G=!W.sm,Q=(null===(p=i)||void 0===p?void 0:p.address)?(0,ci.y8)(null===(h=i)||void 0===h?void 0:h.address):null,Y=(null===(v=t)||void 0===v?void 0:v.address)?(0,ci.y8)(null===(m=t)||void 0===m?void 0:m.address):null,K=(0,ci.em)(Q,Y);return!d&&N&&A?(0,o.jsxs)(l.ZP,{gap:"lg",children:[(0,o.jsxs)(yi,{children:[j&&(0,o.jsxs)(ji,{children:[(0,o.jsx)(H.Tv.SubHeaderSmall,{children:(0,o.jsx)(n.cC,{id:"IDNK1Q"})}),(0,o.jsxs)(me.ZP,{gap:"8px",children:[(0,o.jsxs)(H.Tv.HeadlineSmall,{children:[O," ",N.symbol]}),(0,o.jsx)(H.Tv.HeadlineSmall,{color:"neutral3",children:"|"}),(0,o.jsxs)(H.Tv.HeadlineSmall,{children:[R," ",A.symbol]}),Boolean(V)&&!G&&(0,o.jsxs)(H.Tv.Caption,{children:["(",q,")"]})]})]}),(0,o.jsx)(ki,{onClick:z,$open:U,$fixedWidth:Boolean(j),"data-testid":`pool-details-${U?"close":"swap"}-button`,children:U?(0,o.jsxs)(o.Fragment,{children:[X&&(0,o.jsx)(hi.Z,{size:20}),(0,o.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,o.jsx)(n.cC,{id:"yz7wBu"})})]}):(0,o.jsxs)(o.Fragment,{children:[X&&(0,o.jsx)(bi,{}),(0,o.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,o.jsx)(n.cC,{id:"vH2C/2"})})]})}),(0,o.jsxs)(ki,{onClick:F,"data-testid":"pool-details-add-liquidity-button",$fixedWidth:Boolean(j),$hideOnMobile:!0,children:[X&&(0,o.jsx)(vi.Z,{size:20}),(0,o.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,o.jsx)(n.cC,{id:"E6MqGy"})})]})]}),(0,o.jsxs)(Ti,{open:U,"data-testid":"pool-details-swap-modal",children:[(0,o.jsx)(pi.HY,{syncTabToUrl:!1,chainId:e,initialInputCurrency:N,initialOutputCurrency:A,compact:!0,disableTokenInputs:e!==w}),Boolean(K)&&(0,o.jsx)(ri.Z,{tokenAddress:(K===Q?null===(x=i)||void 0===x?void 0:x.address:null===(y=t)||void 0===y?void 0:y.address)??"",warning:K??ci.mW,plural:Boolean(Q&&Y),tokenSymbol:K===Q?null===(k=i)||void 0===k?void 0:k.symbol:null===(b=t)||void 0===b?void 0:b.symbol})]}),(0,o.jsx)(oi.Z,{$open:U&&!X,$maxWidth:be.j$.lg,$zIndex:xi.k.sticky,onClick:z})]}):(0,o.jsxs)(yi,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,o.jsx)(ji,{children:(0,o.jsx)(wi,{})}),(0,o.jsx)(wi,{}),(0,o.jsx)(wi,{})]})}const Ii=e=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,o.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,o.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,o.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var Pi=t(13820),_i=t(57221),Si=t(31744);function Ni(e,i,t,o,n,a,d){try{var l=e[a](d),s=l.value}catch(r){return void t(r)}l.done?i(s):Promise.resolve(s).then(o,n)}function Ai(e){return function(){var i=this,t=arguments;return new Promise((function(o,n){var a=e.apply(i,t);function d(e){Ni(a,o,n,d,l,"next",e)}function l(e){Ni(a,o,n,d,l,"throw",e)}d(void 0)}))}}const $i=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetailsPositionsTable__PositionTableWrapper",componentId:"sc-be18e82b-0"})`
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`,Li=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetailsPositionsTable__PositionWrapper",componentId:"sc-be18e82b-1"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  width: 100%;
  ${H.iV}
  padding: 16px;
`,Di=(0,X.default)(H.Tv.LabelMicro).withConfig({displayName:"PoolDetailsPositionsTable__FeeTier",componentId:"sc-be18e82b-2"})`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,Bi=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetailsPositionsTable__StatusWrapper",componentId:"sc-be18e82b-3"})`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color ${({theme:e,status:i})=>i===Vi.IN_RANGE?e.success:i===Vi.OUT_OF_RANGE?e.deprecated_accentWarning:e.neutral2};
`,Ei=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetailsPositionsTable__RangeWrapper",componentId:"sc-be18e82b-4"})`
  gap: 10px;

  @media screen and (max-width: ${be.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,Mi=(0,X.default)((e=>(0,o.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})}))).withConfig({displayName:"PoolDetailsPositionsTable__StyledDoubleArrow",componentId:"sc-be18e82b-5"})`
  @media screen and (max-width: ${be.j$.sm}px) {
    display: none;
  }
`,Oi=(0,X.default)(H.Tv.Caption).withConfig({displayName:"PoolDetailsPositionsTable__RangeText",componentId:"sc-be18e82b-6"})`
  width: max-content;
  white-space: nowrap;
`,Ri=X.default.div.withConfig({displayName:"PoolDetailsPositionsTable__StyledDot",componentId:"sc-be18e82b-7"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.success};
`;var Vi;function qi({positionInfo:e}){const i=[{id:e.details.token0,address:e.details.token0,chain:(0,Z.Ld)(e.chainId)},{id:e.details.token0,address:e.details.token1,chain:(0,Z.Ld)(e.chainId)}],{chainId:t,connector:a}=(0,ti.useWeb3React)(),d=(0,ke.s0)(),l=(0,ui.o)(),s=(0,X.useTheme)(),{formatTickPrice:r}=(0,g.Gb)(),c=(0,f.useCallback)(Ai((function*(){t!==e.chainId&&(yield l(a,e.chainId)),d("/pool/"+e.details.tokenId)})),[a,d,e.chainId,e.details.tokenId,l,t]),u=e.inRange?Vi.IN_RANGE:e.closed?Vi.CLOSED:Vi.OUT_OF_RANGE,p=e.position.token0PriceLower.invert(),h=e.position.token0PriceUpper.invert(),v={LOWER:0===parseFloat(h.toFixed(0)),UPPER:parseFloat(p.toFixed(0))>Number.MAX_SAFE_INTEGER};return(0,o.jsxs)(Li,{onClick:c,children:[(0,o.jsxs)(me.ZP,{gap:"8px",children:[(0,o.jsx)(ue.e6,{chainId:e.chainId,tokens:i,size:16}),(0,o.jsxs)(H.Tv.SubHeader,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,o.jsxs)(Di,{children:[e.pool.fee/Pi.PM,"%"]}),(0,o.jsxs)(Bi,{status:u,children:[(0,o.jsx)(H.Tv.Caption,{color:"inherit",children:u}),u===Vi.IN_RANGE&&(0,o.jsx)(Ri,{}),u===Vi.OUT_OF_RANGE&&(0,o.jsx)(_i.Z,{size:12,color:s.deprecated_accentWarning}),u===Vi.CLOSED&&(0,o.jsx)(Ii,{})]})]}),(0,o.jsxs)(Ei,{children:[(0,o.jsxs)(Oi,{"data-testid":`position-min-${h.toFixed(0)}`,children:[(0,o.jsx)(n.cC,{id:"0uYsLP"}),"\xa0",r({price:h,atLimit:v,direction:Si.Mb.LOWER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,o.jsx)(n.cC,{id:"b2jAb+"}),"\xa0",e.pool.token1.symbol]}),(0,o.jsx)(Mi,{}),(0,o.jsxs)(Oi,{"data-testid":`position-max-${p.toFixed(0)}`,children:[(0,o.jsx)(n.cC,{id:"BniuBY"}),"\xa0",r({price:p,atLimit:v,direction:Si.Mb.UPPER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,o.jsx)(n.cC,{id:"b2jAb+"}),"\xa0",e.pool.token1.symbol]})]})]})}function Fi({positions:e}){return(0,o.jsx)($i,{children:e.map(((e,i)=>(0,o.jsx)(qi,{positionInfo:e},`pool-position-${i}`)))})}!function(e){e.IN_RANGE="In range",e.OUT_OF_RANGE="Out of range",e.CLOSED="Closed"}(Vi||(Vi={}));var Ui,Zi=t(73705),zi=t(66789),Wi=t(53083),Xi=t(57144),Hi=t(23388);!function(e){e.BUY="Buy",e.SELL="Sell",e.BURN="Burn",e.MINT="Mint"}(Ui||(Ui={}));const Gi=25;var Qi=t(63945),Yi=t(95685);const Ki=(0,X.default)(H.dL).withConfig({displayName:"PoolDetailsTransactionsTable__StyledExternalLink",componentId:"sc-767fc483-0"})`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`,Ji=X.default.div.withConfig({displayName:"PoolDetailsTransactionsTable__TableWrapper",componentId:"sc-767fc483-1"})`
  min-height: 256px;
`;var et;!function(e){e[e.Timestamp=0]="Timestamp",e[e.Type=1]="Type",e[e.MakerAddress=2]="MakerAddress",e[e.FiatValue=3]="FiatValue",e[e.InputAmount=4]="InputAmount",e[e.OutputAmount=5]="OutputAmount"}(et||(et={}));const it={[et.Timestamp]:120,[et.Type]:144,[et.MakerAddress]:100,[et.FiatValue]:125,[et.InputAmount]:125,[et.OutputAmount]:125};function tt({poolAddress:e,token0:i,token1:t,protocolVersion:a}){var d,l,s;const c=(0,Z.Qj)((0,ke.UO)().chainName),u=(0,Z.Tz)(c),p=(0,Yi.XB)(),{formatNumber:h,formatFiatPrice:v}=(0,g.Gb)(),[m,x]=(0,f.useReducer)((e=>!e),!1),[y,k]=(0,f.useState)([Ui.BUY,Ui.SELL,Ui.BURN,Ui.MINT]),[b]=(0,f.useState)({sortBy:Qi.ri.Timestamp,sortDirection:Qi.N9.Desc}),{transactions:w,loading:T,loadMore:j,error:C}=function(e,i,t=[Ui.BUY,Ui.SELL,Ui.BURN,Ui.MINT],o,n=U.Qeo.V3,a=Gi){var d,l,s,c,u;const{loading:p,error:h,data:v,fetchMore:m}=(0,U.uv5)({variables:{first:a,chain:(0,Z.Ld)(i),address:e},skip:n!==U.Qeo.V3}),{loading:x,error:g,data:y,fetchMore:k}=(0,U.arC)({variables:{first:a,address:e},skip:n!==U.Qeo.V2||i!==r.ChainId.MAINNET}),b=(0,f.useRef)(!1),{transactions:w,loading:T,fetchMore:j,error:C}=n===U.Qeo.V3?{transactions:null===(l=v)||void 0===l||null===(d=l.v3Pool)||void 0===d?void 0:d.transactions,loading:p,fetchMore:m,error:h}:{transactions:null===(c=y)||void 0===c||null===(s=c.v2Pair)||void 0===s?void 0:s.transactions,loading:x,fetchMore:k,error:g},I=(0,f.useCallback)((({onComplete:e})=>{var i,t;b.current||(b.current=!0,j({variables:{cursor:null===(t=w)||void 0===t||null===(i=t[w.length-1])||void 0===i?void 0:i.timestamp},updateQuery:(i,{fetchMoreResult:t})=>{var o,a,d;if(!t)return i;null===(o=e)||void 0===o||o();const l=n===U.Qeo.V3?{v3Pool:{...t.v3Pool,transactions:[...(null===(a=i.v3Pool)||void 0===a?void 0:a.transactions)??[],...t.v3Pool.transactions]}}:{v2Pair:{...t.v2Pair,transactions:[...(null===(d=i.v2Pair)||void 0===d?void 0:d.transactions)??[],...t.v2Pair.transactions]}};return b.current=!1,l}}))}),[j,w,n]),P=(0,f.useMemo)((()=>{var e;return null===(e=w??[])||void 0===e?void 0:e.map((e=>{var i,n,a,d;const l=(null===(n=parseFloat(e.token0Quantity)>0?e.token0:e.token1)||void 0===n||null===(i=n.address)||void 0===i?void 0:i.toLowerCase())===(null===(d=o)||void 0===d||null===(a=d.address)||void 0===a?void 0:a.toLowerCase()),s=e.type===U.uGm.Swap?l?Ui.SELL:Ui.BUY:e.type===U.uGm.Remove?Ui.BURN:Ui.MINT;if(t.includes(s))return{timestamp:e.timestamp,transaction:e.hash,pool:{token0:{id:e.token0.address??"",symbol:e.token0.symbol??""},token1:{id:e.token1.address??"",symbol:e.token1.symbol??""}},maker:e.account,amount0:parseFloat(e.token0Quantity),amount1:parseFloat(e.token1Quantity),amountUSD:e.usdValue.value,type:s}})).filter((e=>void 0!==e))}),[w,t,null===(u=o)||void 0===u?void 0:u.address]);return(0,f.useMemo)((()=>({transactions:P,loading:T,loadMore:I,error:C})),[P,T,I,C])}(e,u,y,i,a),I=T||!!C,P=(0,f.useMemo)((()=>{const e=(0,Zi.Cl)();return[e.accessor((e=>e),{id:"timestamp",header:()=>(0,o.jsx)(Wi.b,{minWidth:it[et.Timestamp],justifyContent:"flex-start",children:(0,o.jsxs)(me.ZP,{gap:"4px",children:[b.sortBy===Qi.ri.Timestamp&&(0,o.jsx)(Hi.iX,{direction:Qi.N9.Desc}),(0,o.jsx)(Hi.Hu,{$active:b.sortBy===Qi.ri.Timestamp,children:(0,o.jsx)(n.cC,{id:"LhMjLm"})})]})}),cell:e=>{var i,t,n,a;return(0,o.jsx)(Wi.b,{loading:I,minWidth:it[et.Timestamp],justifyContent:"flex-start",children:(0,o.jsx)(Hi._q,{timestamp:Number(null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t).timestamp),link:(0,Te.E)(u,null===(n=(a=e).getValue)||void 0===n?void 0:n.call(a).transaction,Te.r.TRANSACTION)})})}}),e.accessor((e=>{let t,a;var d;if(e.type===Ui.BUY)t="success",a=(0,o.jsxs)("span",{children:[(0,o.jsx)(n.cC,{id:"qiOIiY"}),"\xa0",null===(d=i)||void 0===d?void 0:d.symbol]});else if(e.type===Ui.SELL){var l;t="critical",a=(0,o.jsxs)("span",{children:[(0,o.jsx)(n.cC,{id:"xNB0TS"}),"\xa0",null===(l=i)||void 0===l?void 0:l.symbol]})}else t=e.type===Ui.MINT?"success":"critical",a=e.type===Ui.MINT?(0,o.jsx)(n.cC,{id:"m16xKo"}):(0,o.jsx)(n.cC,{id:"t/YqKh"});return(0,o.jsx)(H.Tv.BodyPrimary,{color:t,children:a})}),{id:"swap-type",header:()=>(0,o.jsx)(Wi.b,{minWidth:it[et.Type],justifyContent:"flex-start",children:(0,o.jsxs)(Hi.j4,{modalOpen:m,onClick:()=>x(),children:[(0,o.jsx)(Xi.w,{allFilters:Object.values(Ui),activeFilter:y,setFilters:k,isOpen:m,toggleFilterModal:x}),(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(n.cC,{id:"+zy2Nq"})})]})}),cell:e=>{var i,t;return(0,o.jsx)(Wi.b,{loading:I,minWidth:it[et.Type],justifyContent:"flex-start",children:null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t)})}}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,o.jsx)(Wi.b,{minWidth:it[et.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(n.cC,{id:"ylhjte",values:{activeLocalCurrency:p}})})}),cell:e=>{var i,t;return(0,o.jsx)(Wi.b,{loading:I,minWidth:it[et.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodyPrimary,{children:v({price:null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t)})})})}}),e.accessor((e=>{var t,o;return e.pool.token0.id.toLowerCase()===(null===(o=i)||void 0===o||null===(t=o.address)||void 0===t?void 0:t.toLowerCase())?e.amount0:e.amount1}),{id:"input-amount",header:()=>{var e;return(0,o.jsx)(Wi.b,{loading:I,minWidth:it[et.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:null===(e=i)||void 0===e?void 0:e.symbol})})},cell:e=>{var i,t;return(0,o.jsx)(Wi.b,{loading:I,minWidth:it[et.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodyPrimary,{children:h({input:Math.abs((null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t))??0),type:g.sw.TokenTx})})})}}),e.accessor((e=>{var t,o;return e.pool.token0.id.toLowerCase()===(null===(o=i)||void 0===o||null===(t=o.address)||void 0===t?void 0:t.toLowerCase())?e.amount1:e.amount0}),{id:"output-amount",header:()=>{var e;return(0,o.jsx)(Wi.b,{loading:I,minWidth:it[et.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:null===(e=t)||void 0===e?void 0:e.symbol})})},cell:e=>{var i,t;return(0,o.jsx)(Wi.b,{loading:I,minWidth:it[et.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodyPrimary,{children:h({input:Math.abs((null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t))??0),type:g.sw.TokenTx})})})}}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,o.jsx)(Wi.b,{minWidth:it[et.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(n.cC,{id:"sb9Y58"})})}),cell:e=>{var i,t,n,a;return(0,o.jsx)(Wi.b,{loading:I,minWidth:it[et.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(Ki,{href:(0,Te.E)(u,null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t),Te.r.ADDRESS),children:(0,o.jsx)(H.Tv.BodyPrimary,{children:(0,we.Xn)(null===(n=(a=e).getValue)||void 0===n?void 0:n.call(a),0)})})})}})]}),[p,u,y,m,v,h,I,b.sortBy,null===(d=i)||void 0===d?void 0:d.address,null===(l=i)||void 0===l?void 0:l.symbol,null===(s=t)||void 0===s?void 0:s.symbol]);return(0,o.jsx)(Ji,{"data-testid":"pool-details-transactions-table",children:(0,o.jsx)(zi.i,{columns:P,data:w,loading:T,error:C,loadMore:j,maxHeight:600})})}var ot;!function(e){e.TRANSACTIONS="transactions",e.POSITIONS="positions"}(ot||(ot={}));const nt=(0,X.default)(H.Tv.HeadlineMedium).withConfig({displayName:"PoolDetailsTable__TableHeader",componentId:"sc-7da6ceb2-0"})`
  color: ${({theme:e,active:i})=>!i&&e.neutral2};
  ${({disabled:e})=>!e&&H.iV}
  user-select: none;
`;function at({poolAddress:e,token0:i,token1:t,protocolVersion:a}){var d;const[s,r]=(0,f.useState)(ot.TRANSACTIONS),u=(0,Z.Qj)((0,ke.UO)().chainName),p=(0,Z.Tz)(u),{account:h}=(0,ti.useWeb3React)(),{positions:v}=(0,ni.Z)(h??"",[p]),m=(0,f.useMemo)((()=>{var i;return(null===(i=v)||void 0===i?void 0:i.filter((i=>c.Pool.getAddress(i.pool.token0,i.pool.token1,i.pool.fee).toLowerCase()===e.toLowerCase())))??[]}),[e,v]);return(0,o.jsxs)(l.ZP,{gap:"lg",children:[(0,o.jsxs)(me.ZP,{gap:"16px",children:[(0,o.jsx)(nt,{active:s===ot.TRANSACTIONS,onClick:()=>r(ot.TRANSACTIONS),disabled:!m.length,children:(0,o.jsx)(n.cC,{id:"4wyw8H"})}),Boolean(m.length)&&(0,o.jsxs)(nt,{active:s===ot.POSITIONS,onClick:()=>r(ot.POSITIONS),children:[(0,o.jsx)(n.cC,{id:"12Jgfh"}),` (${null===(d=m)||void 0===d?void 0:d.length})`]})]}),s===ot.TRANSACTIONS?(0,o.jsx)(tt,{poolAddress:e,token0:i,token1:t,protocolVersion:a}):(0,o.jsx)(Fi,{positions:m})]})}var dt=t(75748),lt=t(63490),st=t.n(lt);function rt(e){if(!e)return;const i=(new Date).getTime(),t=(i-st()("1d"))/1e3,o=(i-st()("2d"))/1e3,n=e.filter((e=>e.timestamp>=t)).reduce(((e,i)=>e+i.value),0),a=e.filter((e=>e.timestamp>=o&&e.timestamp<t)).reduce(((e,i)=>e+i.value),0);return(n-a)/a*100}var ct=t(51349),ut=t(46012);const pt=e=>{var i,t;const o=null===(i=e)||void 0===i?void 0:i.token0.symbol,n=null===(t=e)||void 0===t?void 0:t.token1.symbol,a=s.ag._({id:"aFvp+n"});return o&&n?`${o}/${n}: ${a}`:a};var ht=t(437);const vt=(0,X.default)(me.ZP).withConfig({displayName:"PoolDetails__PageWrapper",componentId:"sc-8dc1b7ad-0"})`
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;
  gap: 40px;
  align-items: flex-start;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 20px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,mt=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetails__LeftColumn",componentId:"sc-8dc1b7ad-1"})`
  gap: 40px;
  max-width: 780px;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${be.j$.lg}px) {
    width: 100%;
    max-width: unset;
  }
`,xt=X.default.hr.withConfig({displayName:"PoolDetails__HR",componentId:"sc-8dc1b7ad-2"})`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  width: 100%;
`,ft=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetails__RightColumn",componentId:"sc-8dc1b7ad-3"})`
  gap: 24px;
  width: 360px;

  @media (max-width: ${be.j$.lg}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
    & > *:first-child {
      margin-top: -24px;
    }
  }
`,gt=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetails__TokenDetailsWrapper",componentId:"sc-8dc1b7ad-4"})`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${be.j$.lg}px) and (min-width: ${be.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${be.j$.sm}px) {
    padding: unset;
  }
`,yt=(0,X.default)(Re.xv).withConfig({displayName:"PoolDetails__TokenDetailsHeader",componentId:"sc-8dc1b7ad-5"})`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,kt=(0,X.default)(l.ZP).withConfig({displayName:"PoolDetails__LinksContainer",componentId:"sc-8dc1b7ad-6"})`
  gap: 16px;
  width: 100%;
`;function bt(){var e,i,t,s,c,u,p,h,v,m,x,g,y,k,b,w;const{poolAddress:T,chainName:j}=(0,ke.UO)(),C=(0,Z._3)(j),I=C&&(0,Z.Tz)(C),{data:P,loading:_}=function(e,i){var t,o;const{loading:n,error:a,data:d}=(0,U.Bn1)({variables:{chain:(0,Z.Ld)(i),address:e}}),{loading:l,error:s,data:c}=(0,U.gyz)({variables:{address:e},skip:i!==r.ChainId.MAINNET});return(0,f.useMemo)((()=>{var e,t,o,u,p,h,v,m,x,f,g,y,k,b,w,T,j,C;const I=Boolean(a||s&&i===r.ChainId.MAINNET),P=Boolean(n||l&&i===r.ChainId.MAINNET);if(I||P)return{loading:P,error:I,data:void 0};const _=(null===(e=d)||void 0===e?void 0:e.v3Pool)??(null===(t=c)||void 0===t?void 0:t.v2Pair)??void 0,S=(null===(u=d)||void 0===u||null===(o=u.v3Pool)||void 0===o?void 0:o.feeTier)??dt.y9;return{data:_?{address:_.address,txCount:_.txCount,protocolVersion:_.protocolVersion,token0:_.token0,tvlToken0:_.token0Supply,token0Price:null===(x=_.token0)||void 0===x||null===(m=x.project)||void 0===m||null===(v=m.markets)||void 0===v||null===(h=v[0])||void 0===h||null===(p=h.price)||void 0===p?void 0:p.value,token1:_.token1,tvlToken1:_.token1Supply,token1Price:null===(b=_.token1)||void 0===b||null===(k=b.project)||void 0===k||null===(y=k.markets)||void 0===y||null===(g=y[0])||void 0===g||null===(f=g.price)||void 0===f?void 0:f.value,feeTier:S,volumeUSD24H:null===(w=_.volume24h)||void 0===w?void 0:w.value,volumeUSD24HChange:rt(null===(T=_.historicalVolume)||void 0===T?void 0:T.concat()),tvlUSD:null===(j=_.totalLiquidity)||void 0===j?void 0:j.value,tvlUSDChange:null===(C=_.totalLiquidityPercentChange24h)||void 0===C?void 0:C.value}:void 0,error:I,loading:P}}),[i,null===(t=c)||void 0===t?void 0:t.v2Pair,null===(o=d)||void 0===o?void 0:o.v3Pool,s,a,l,n])}((null===(e=T)||void 0===e?void 0:e.toLowerCase())??"",I),[S,N]=(0,f.useReducer)((e=>!e),!1),A=function(e,i){var t,o,n,a;return(null===(t=e)||void 0===t?void 0:t.token0)&&(null===(o=e)||void 0===o?void 0:o.token1)&&i?[(0,Z.vR)(i,null===(n=e)||void 0===n?void 0:n.token0),(0,Z.vR)(i,null===(a=e)||void 0===a?void 0:a.token1)]:[void 0,void 0]}(P,I),[$,L]=S?[null===(i=A)||void 0===i?void 0:i[1],null===(t=A)||void 0===t?void 0:t[0]]:A,{darkMode:D,surface2:B,accent1:E}=(0,X.useTheme)(),M=(0,ct.r)($&&(0,Z.Pc)($),{backgroundColor:B,darkMode:D}),O=(0,ct.r)(L&&(0,Z.Pc)(L),{backgroundColor:B,darkMode:D}),R=!j||!T||!(0,Z._3)(j)||!(0,we.UJ)(T);return!_&&!P||R?(0,o.jsx)(ut.default,{}):(0,o.jsxs)(be.f6,{token0:M!==E?M:void 0,token1:O!==E?O:void 0,children:[(0,o.jsx)(ht.Helmet,{children:(0,o.jsx)("title",{children:pt(P)})}),(0,o.jsx)(d.fM,{page:a.yJ.POOL_DETAILS_PAGE,properties:{poolAddress:T,chainId:I,feeTier:null===(s=P)||void 0===s?void 0:s.feeTier,token0Address:null===(c=P)||void 0===c?void 0:c.token0.address,token1Address:null===(u=P)||void 0===u?void 0:u.token1.address,token0Symbol:null===(p=P)||void 0===p?void 0:p.token0.symbol,token1Symbol:null===(h=P)||void 0===h?void 0:h.token1.symbol,token0Name:null===(v=P)||void 0===v?void 0:v.token0.name,token1Name:null===(m=P)||void 0===m?void 0:m.token1.name},shouldLogImpression:!_,children:(0,o.jsxs)(vt,{children:[(0,o.jsxs)(mt,{children:[(0,o.jsxs)(l.ZP,{gap:"20px",children:[(0,o.jsxs)(l.ZP,{children:[(0,o.jsx)(ue.G7,{chainId:I,poolAddress:T,token0:$,token1:L,loading:_}),(0,o.jsx)(ue.dG,{chainId:I,poolAddress:T,token0:$,token1:L,feeTier:null===(x=P)||void 0===x?void 0:x.feeTier,protocolVersion:null===(g=P)||void 0===g?void 0:g.protocolVersion,toggleReversed:N,loading:_})]}),(0,o.jsx)(oe,{poolData:P,loading:_,isReversed:S,chain:C})]}),(0,o.jsx)(xt,{}),(0,o.jsx)(at,{poolAddress:T,token0:$,token1:L,protocolVersion:null===(y=P)||void 0===y?void 0:y.protocolVersion})]}),(0,o.jsxs)(ft,{children:[(0,o.jsx)(Ci,{chainId:I,token0:$,token1:L,feeTier:null===(k=P)||void 0===k?void 0:k.feeTier,loading:_}),(0,o.jsx)(Ke,{poolData:P,isReversed:S,chainId:I,loading:_}),(0,o.jsxs)(gt,{children:[(0,o.jsx)(yt,{children:(0,o.jsx)(n.cC,{id:"Rj01Fz"})}),(0,o.jsxs)(kt,{children:[(0,o.jsx)(Le,{address:T,chainId:I,tokens:[$,L],loading:_}),(0,o.jsx)(Le,{address:null===(b=$)||void 0===b?void 0:b.address,chainId:I,tokens:[$],loading:_}),(0,o.jsx)(Le,{address:null===(w=L)||void 0===w?void 0:w.address,chainId:I,tokens:[L],loading:_})]})]})]})]})})]})}}}]);
//# sourceMappingURL=2348.2d7a5370.chunk.js.map