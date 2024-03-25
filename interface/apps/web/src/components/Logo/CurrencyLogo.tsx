import { Currency } from '@uniswap/sdk-core'
import { TokenInfo } from '@uniswap/token-lists'

import AssetLogo, { AssetLogoBaseProps } from './AssetLogo'
import { useEffect, useState } from 'react'
import { NEXIS_LIST } from 'constants/lists'
import { useWeb3React } from '@web3-react/core'

export default function CurrencyLogo(
  props: AssetLogoBaseProps & {
    currency?: Currency | null
  }
) {
  
  return (
    <AssetLogo
      currency={props.currency}
      isNative={props.currency?.isNative}
      chainId={props.currency?.chainId}
      address={props.currency?.wrapped.address}
      symbol={props.symbol ?? props.currency?.symbol}
      primaryImg={(props.currency as TokenInfo)?.logoURI}
      {...props}
    />
  )
}
