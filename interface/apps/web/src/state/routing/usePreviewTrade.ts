import { skipToken } from '@reduxjs/toolkit/query/react'
import { ChainId, Currency, CurrencyAmount, Percent, Token, TradeType, V2_FACTORY_ADDRESSES } from '@uniswap/sdk-core'
import { ZERO_PERCENT } from 'constants/misc'
import { useGatewayDNSUpdateAllEnabled } from 'featureFlags/flags/gatewayDNSUpdate'
import { useQuickRouteMainnetEnabled } from 'featureFlags/flags/quickRouteMainnet'
import useIsWindowVisible from 'hooks/useIsWindowVisible'
import { useMemo, useState } from 'react'
import IUniswapV2PairJSON from '@uniswap/v2-core/build/IUniswapV2Pair.json'

import { useGetQuickRouteQuery, useGetQuickRouteQueryState } from './quickRouteSlice'
import { GetQuickQuoteArgs, PreviewTrade, QuoteState, TradeState } from './types'
import { currencyAddressForSwapQuote, transformQuickRouteToTrade } from './utils'
import { useV2RouterContract } from 'hooks/useContract'
import { computePairAddressVeevaa } from 'veevaa'
import { WNZT_NEXIS } from 'constants/tokens'
import { useMultipleContractSingleData } from 'lib/hooks/multicall'
import { Interface } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'

const TRADE_NOT_FOUND = { state: TradeState.NO_ROUTE_FOUND, trade: undefined } as const
const TRADE_LOADING = { state: TradeState.LOADING, trade: undefined } as const

export function useQuickRouteArguments({
  tokenIn,
  tokenOut,
  amount,
  tradeType,
  inputTax,
  outputTax,
}: {
  tokenIn?: Currency
  tokenOut?: Currency
  amount?: CurrencyAmount<Currency>
  tradeType: TradeType
  inputTax: Percent
  outputTax: Percent
}): GetQuickQuoteArgs | typeof skipToken {
  const enabledMainnet = useQuickRouteMainnetEnabled()
  const gatewayDNSUpdateAllEnabled = useGatewayDNSUpdateAllEnabled()

  return useMemo(() => {
    if (!tokenIn || !tokenOut || !amount) return skipToken
    if (!enabledMainnet || tokenIn.chainId !== ChainId.MAINNET) return skipToken

    return {
      amount: amount.quotient.toString(),
      tokenInAddress: currencyAddressForSwapQuote(tokenIn),
      tokenInChainId: tokenIn.chainId,
      tokenInDecimals: tokenIn.wrapped.decimals,
      tokenInSymbol: tokenIn.wrapped.symbol,
      tokenOutAddress: currencyAddressForSwapQuote(tokenOut),
      tokenOutChainId: tokenOut.wrapped.chainId,
      tokenOutDecimals: tokenOut.wrapped.decimals,
      tokenOutSymbol: tokenOut.wrapped.symbol,
      tradeType,
      inputTax,
      outputTax,
      gatewayDNSUpdateAllEnabled,
    }
  }, [amount, enabledMainnet, gatewayDNSUpdateAllEnabled, inputTax, outputTax, tokenIn, tokenOut, tradeType])
}

export function usePreviewTrade(
  skipFetch = false,
  tradeType: TradeType,
  amountSpecified: CurrencyAmount<Currency> | undefined,
  otherCurrency: Currency | undefined,
  inputTax = ZERO_PERCENT,
  outputTax = ZERO_PERCENT
): {
  state: TradeState
  trade?: PreviewTrade
  currentTrade?: PreviewTrade
  swapQuoteLatency?: number
} {
  const [currencyIn, currencyOut]: [Currency | undefined, Currency | undefined] = useMemo(
    () =>
      tradeType === TradeType.EXACT_INPUT
        ? [amountSpecified?.currency, otherCurrency]
        : [otherCurrency, amountSpecified?.currency],
    [amountSpecified, otherCurrency, tradeType]
  )

  const [amountOutVal,setAmountOutVal]=useState<string>("0");
  const PAIR_INTERFACE = new Interface(IUniswapV2PairJSON.abi)
  const tkA = currencyIn !=undefined? new Token(currencyIn!.chainId,currencyAddressForSwapQuote(currencyIn!)=="NZT"?WNZT_NEXIS.address:currencyAddressForSwapQuote(currencyIn!),currencyIn!.decimals):undefined;
  const tkB = currencyOut !=undefined ? new Token(currencyOut!.chainId,currencyAddressForSwapQuote(currencyOut!)=="NZT"?WNZT_NEXIS.address:currencyAddressForSwapQuote(currencyOut!),currencyOut!.decimals):undefined;

  const results = useMultipleContractSingleData([
    tkA!=undefined && tkB!=undefined?
    computePairAddressVeevaa({ factoryAddress: V2_FACTORY_ADDRESSES[currencyIn!.chainId], tokenA:tkA, tokenB:tkB ,chainId:tkA.chainId}):""
  ], PAIR_INTERFACE, 'getReserves')

  const queryArgs = useQuickRouteArguments({
    tokenIn: currencyIn,
    tokenOut: currencyOut,
    amount: amountSpecified,
    tradeType,
    inputTax,
    outputTax,
  })
  const isWindowVisible = useIsWindowVisible()
  const router = useV2RouterContract();

  const { isError, data: tradeResult, error, currentData } = useGetQuickRouteQueryState(queryArgs)
  let raeCustom:any=undefined;
  if((currencyIn?.chainId==2371 ||currencyIn?.chainId==7001 ) && currencyIn!=undefined && currencyOut!=undefined){
    let _tokenA = {
      chainId:currencyIn.chainId,
      address:currencyAddressForSwapQuote(currencyIn!)=="NZT"?WNZT_NEXIS.address:currencyAddressForSwapQuote(currencyIn!),
      decimals:currencyIn.decimals
    }
    let _tokenB = {
      chainId:currencyOut.chainId,
      address:currencyAddressForSwapQuote(currencyOut!)=="NZT"?WNZT_NEXIS.address:currencyAddressForSwapQuote(currencyOut!),
      decimals:currencyOut.decimals
    }
    const tokenA = new Token(_tokenA.chainId,_tokenA.address,_tokenA.decimals);
    const tokenB = new Token(_tokenB.chainId,_tokenB.address,_tokenB.decimals);
    const poolAddress = computePairAddressVeevaa({ factoryAddress: V2_FACTORY_ADDRESSES[currencyIn.chainId], tokenA, tokenB ,chainId:tokenA.chainId})
    // const results:any=[{result:undefined}]

    const { result: reserves } = results[0];
    if(!reserves){
    }else{
      const {reserve0,reserve1} = reserves;
      try {
        router?.getAmountOut(BigNumber.from(amountSpecified!.quotient.toString()),BigNumber.from(reserve0.toString()),BigNumber.from(reserve1.toString())).then((val:any)=>{
          setAmountOutVal(val);
        })
        const args={
          amount:amountSpecified!.quotient.toString(),
          gatewayDNSUpdateAllEnabled:false,
          inputTax,
          outputTax,
          tokenInAddress:currencyAddressForSwapQuote(currencyIn!),
          tokenInChainId:currencyIn?.chainId,
          tokenInDecimals:currencyIn?.decimals,
            tokenInSymbol:currencyIn?.symbol,
            tokenOutAddress: currencyAddressForSwapQuote(currencyOut!),
            tokenOutChainId: currencyOut!.wrapped.chainId,
            tokenOutDecimals: currencyOut!.wrapped.decimals,
            tokenOutSymbol: currencyOut!.wrapped.symbol,
            tradeType,
        };
        const data = {
          quote:{
            amount: BigNumber.from(amountOutVal.toString()),
            path:"[v2] "+poolAddress
          },
          tokenIn:{
            address:currencyAddressForSwapQuote(currencyIn!),
            decimals:currencyIn.decimals,
            name:currencyIn.name,
            symbol:currencyIn.symbol,
          },
          tokenOut:{
            address:currencyAddressForSwapQuote(currencyOut!),
            decimals:currencyOut.decimals,
            name:currencyOut.name,
            symbol:currencyOut.symbol,
          },
          tradeType:"EXACT_IN"
        }
        raeCustom = transformQuickRouteToTrade(args as any,data as any);
        raeCustom.pair = [currencyAddressForSwapQuote(currencyIn!),currencyAddressForSwapQuote(currencyOut!)]
      } catch (error) {
        console.log("ERR===",error)
      }
    }
    

  }
  useGetQuickRouteQuery(skipFetch || !isWindowVisible ? skipToken : queryArgs, {
    // If latest quote from cache was fetched > 2m ago, instantly repoll for another instead of waiting for next poll period
    refetchOnMountOrArgChange: 2 * 60,
  })

  const isFetching = currentData !== tradeResult || !currentData

  return useMemo(() => {
    if(raeCustom!=undefined) {
      const res = {
        state: TradeState.VALID,
        trade: raeCustom,
        currentTrade: raeCustom,
        swapQuoteLatency: 100,
      }
      console.log("raeCustom===",res)
      return res;
    }
    if (amountSpecified && otherCurrency && queryArgs === skipToken) {
      return {
        state: TradeState.STALE,
        trade: tradeResult?.trade,
        currentTrade: currentData?.trade,
        swapQuoteLatency: tradeResult?.latencyMs,
      }
    } else if (!amountSpecified || isError || queryArgs === skipToken) {
      return {
        state: TradeState.INVALID,
        trade: undefined,
        currentTrade: currentData?.trade,
        error: JSON.stringify(error),
      }
    } else if (tradeResult?.state === QuoteState.NOT_FOUND && !isFetching) {
      return TRADE_NOT_FOUND
    } else if (!tradeResult?.trade) {
      return TRADE_LOADING
    } else {
      return {
        state: isFetching ? TradeState.LOADING : TradeState.VALID,
        trade: tradeResult.trade,
        currentTrade: currentData?.trade,
        swapQuoteLatency: tradeResult.latencyMs,
      }
    }
  }, [
    amountSpecified,
    error,
    isError,
    isFetching,
    queryArgs,
    tradeResult?.latencyMs,
    tradeResult?.state,
    tradeResult?.trade,
    currentData?.trade,
    otherCurrency,
    raeCustom
  ])
}
