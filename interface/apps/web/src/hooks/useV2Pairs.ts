import { Interface } from '@ethersproject/abi'
import { Currency, CurrencyAmount, V2_FACTORY_ADDRESSES } from '@uniswap/sdk-core'
import IUniswapV2PairJSON from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import { Pair, computePairAddress } from '@uniswap/v2-sdk'
import { useMultipleContractSingleData } from 'lib/hooks/multicall'
import { useMemo } from 'react'
import { PairVeevaa, computePairAddressVeevaa } from 'veevaa'

const PAIR_INTERFACE = new Interface(IUniswapV2PairJSON.abi)

export enum PairState {
  LOADING,
  NOT_EXISTS,
  EXISTS,
  INVALID,
}

export function useV2Pairs(currencies: [Currency | undefined, Currency | undefined][]): [PairState, Pair | null][] {

  const tokens = useMemo(
    () => currencies.map(([currencyA, currencyB]) => [currencyA?.wrapped, currencyB?.wrapped]),
    [currencies]
  )


  const pairAddresses = useMemo(
    () =>
      tokens.map(([tokenA, tokenB]) => {
        console.log("address==",V2_FACTORY_ADDRESSES[tokenA!.chainId])
        return tokenA &&
          tokenB &&
          tokenA.chainId === tokenB.chainId &&
          !tokenA.equals(tokenB) &&
          V2_FACTORY_ADDRESSES[tokenA.chainId]
          ? tokenA.chainId==2370?computePairAddressVeevaa({ factoryAddress: V2_FACTORY_ADDRESSES[tokenA.chainId], tokenA, tokenB }) : computePairAddress({ factoryAddress: V2_FACTORY_ADDRESSES[tokenA.chainId], tokenA, tokenB })
          : undefined
      }),
    [tokens]
  )  

  const results = useMultipleContractSingleData(pairAddresses, PAIR_INTERFACE, 'getReserves')


  const useV2PairsResponse = useMemo(() => {
    return results.map((result, i) => {
      const { result: reserves, loading } = result
      const tokenA = tokens[i][0]
      const tokenB = tokens[i][1]

      if (loading) return [PairState.LOADING, null]
      if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [PairState.INVALID, null]
      console.log("reserves===",reserves)
      if (!reserves) return [PairState.NOT_EXISTS, null]
      const { reserve0, reserve1 } = reserves
      const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
      let pair;
      try {
        pair = tokenA.chainId==2370? new PairVeevaa(
          CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
          CurrencyAmount.fromRawAmount(token1, reserve1.toString())
        ): new Pair(
          CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
          CurrencyAmount.fromRawAmount(token1, reserve1.toString())
        );
      } catch (error) {
        pair = undefined;
        console.log("useV2Pairs ERROR===",error,reserve0.toString());
      }
      return [
        PairState.EXISTS,
        pair
      ]
    })
  }, [results, tokens]);
  console.log("useV2PairsResponse===",useV2PairsResponse);
  return useV2PairsResponse as any;

}

export function useV2Pair(tokenA?: Currency, tokenB?: Currency): [PairState, Pair | null] {
  const inputs: [[Currency | undefined, Currency | undefined]] = useMemo(() => [[tokenA, tokenB]], [tokenA, tokenB])
  const res = useV2Pairs(inputs)[0];
  return res;
}
