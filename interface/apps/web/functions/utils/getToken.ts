import { NATIVE_CHAIN_ID } from '../../src/constants/tokens'
import { Chain, TokenDocument, TokenQuery } from '../../src/graphql/data/__generated__/types-and-hooks'
import client from '../client'

function formatTitleName(symbol: string | undefined, name: string | undefined) {
  if (symbol) {
    return 'Get ' + symbol + ' on Nexis'
  }
  if (name) {
    return 'Get ' + name + ' on Nexis'
  }
  return 'View Token on Nexis'
}

const convertTokenAddress = (networkName: string, tokenAddress: string) => {
  if (tokenAddress === NATIVE_CHAIN_ID) {
    switch (networkName) {
      case Chain.Celo:
        return '0x471EcE3750Da237f93B8E339c536989b8978a438'
      case Chain.Nexis:
        return '0x1f829609216366fe5bb6b98e68441ed6ebbea1a3'
      case Chain.Polygon:
        return '0x0000000000000000000000000000000000001010'
      default:
        return undefined
    }
  }
  return tokenAddress
}

export default async function getToken(networkName: string, tokenAddress: string, url: string) {
  const origin = new URL(url).origin
  const image = origin + '/api/image/tokens/' + networkName + '/' + tokenAddress
  const uppercaseNetworkName = networkName.toUpperCase()
  const convertedTokenAddress = convertTokenAddress(uppercaseNetworkName, tokenAddress)
  const { data } = await client.query<TokenQuery>({
    query: TokenDocument,
    variables: {
      chain: uppercaseNetworkName,
      address: convertedTokenAddress,
    },
  })
  const asset = data?.token
  if (!asset) {
    return undefined
  }

  const title = formatTitleName(asset.symbol, asset.name)

  const formattedAsset = {
    title,
    image,
    url,
    symbol: asset.symbol ?? 'UNK',
    ogImage: asset.project?.logoUrl,
    name: asset.name ?? 'Token',
  }
  return formattedAsset
}
