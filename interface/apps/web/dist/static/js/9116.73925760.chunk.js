"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9116],{49116:(t,e,n)=>{n.r(e),n.d(e,{getClientSideQuote:()=>k,getRouter:()=>I});var o=n(76078),s=n(15546),r=n(57852),a=n(95315),i=n(64370),d=n(61592),u=n.n(d),c=n(32115),l=n(92650),m=n(21651);function p(t,e,n,o,s,r,a){try{var i=t[r](a),d=i.value}catch(u){return void n(u)}i.done?e(d):Promise.resolve(d).then(o,s)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(o,s){var r=t.apply(e,n);function a(t){p(r,o,s,a,i,"next",t)}function i(t){p(r,o,s,a,i,"throw",t)}a(void 0)}))}}const h=new Map;function I(t){const e=h.get(t);if(e)return e;const n=(0,r.oG)(t);if(n){const e=a.C[n],o=new s.hfy({chainId:t,provider:e});return h.set(t,o),o}throw new Error(`Router does not support this chain (chainId: ${t}).`)}function g(){return(g=y((function*({tradeType:t,tokenIn:e,tokenOut:n,amount:r},a,d){const p=Object.values(c.Yp).includes(e.address),y=Object.values(c.Yp).includes(n.address),h=p?(0,i.gX)(e.chainId):new o.Token(e.chainId,e.address,e.decimals,e.symbol),I=y?(0,i.gX)(n.chainId):new o.Token(n.chainId,n.address,n.decimals,n.symbol),g=t===o.TradeType.EXACT_INPUT?h:I,k=t===o.TradeType.EXACT_INPUT?I:h,f=o.CurrencyAmount.fromRawAmount(g,u().BigInt(r)),S=yield a.route(f,k,t,void 0,d);return S?function(t,e,{quote:n,quoteGasAdjusted:r,route:a,estimatedGasUsed:i,estimatedGasUsedQuoteToken:d,estimatedGasUsedUSD:u,gasPriceWei:p,methodParameters:y,blockNumber:h}){const I=[];for(const s of a){const{amount:e,quote:n,tokenPath:r}=s,a=s.protocol===l.Protocol.V2?s.route.pairs:s.route.pools,i=[];for(let s=0;s<a.length;s++){const d=a[s],u=r[s],c=r[s+1];let l,p;if(0===s&&(l=t===o.TradeType.EXACT_INPUT?e.quotient.toString():n.quotient.toString()),s===a.length-1&&(p=t===o.TradeType.EXACT_INPUT?n.quotient.toString():e.quotient.toString()),d instanceof m.Pool)i.push({type:"v3-pool",tokenIn:{chainId:u.chainId,decimals:u.decimals,address:u.address,symbol:u.symbol},tokenOut:{chainId:c.chainId,decimals:c.decimals,address:c.address,symbol:c.symbol},fee:d.fee.toString(),liquidity:d.liquidity.toString(),sqrtRatioX96:d.sqrtRatioX96.toString(),tickCurrent:d.tickCurrent.toString(),amountIn:l,amountOut:p});else{const t=d.reserve0,e=d.reserve1;i.push({type:"v2-pool",tokenIn:{chainId:u.chainId,decimals:u.decimals,address:u.address,symbol:u.symbol},tokenOut:{chainId:c.chainId,decimals:c.decimals,address:c.address,symbol:c.symbol},reserve0:{token:{chainId:t.currency.wrapped.chainId,decimals:t.currency.wrapped.decimals,address:t.currency.wrapped.address,symbol:t.currency.wrapped.symbol},quotient:t.quotient.toString()},reserve1:{token:{chainId:e.currency.wrapped.chainId,decimals:e.currency.wrapped.decimals,address:e.currency.wrapped.address,symbol:e.currency.wrapped.symbol},quotient:e.quotient.toString()},amountIn:l,amountOut:p})}}I.push(i)}const g={methodParameters:y,blockNumber:h.toString(),amount:e.quotient.toString(),amountDecimals:e.toExact(),quote:n.quotient.toString(),quoteDecimals:n.toExact(),quoteGasAdjusted:r.quotient.toString(),quoteGasAdjustedDecimals:r.toExact(),gasUseEstimateQuote:d.quotient.toString(),gasUseEstimateQuoteDecimals:d.toExact(),gasUseEstimate:i.toString(),gasUseEstimateUSD:u.toExact(),gasPriceWei:p.toString(),route:I,routeString:(0,s.zDd)(a)};return{state:c.k4.SUCCESS,data:{routing:c.AX.CLASSIC,quote:g,allQuotes:[]}}}(t,f,S):{state:c.k4.NOT_FOUND}}))).apply(this,arguments)}function k(t,e,n){return f.apply(this,arguments)}function f(){return f=y((function*({tokenInAddress:t,tokenInChainId:e,tokenInDecimals:n,tokenInSymbol:o,tokenOutAddress:s,tokenOutChainId:r,tokenOutDecimals:a,tokenOutSymbol:i,amount:d,tradeType:u},c,l){return function(t,e,n){return g.apply(this,arguments)}({tradeType:u,tokenIn:{address:t,chainId:e,decimals:n,symbol:o},tokenOut:{address:s,chainId:r,decimals:a,symbol:i},amount:d},c,l)})),f.apply(this,arguments)}}}]);
//# sourceMappingURL=9116.73925760.chunk.js.map