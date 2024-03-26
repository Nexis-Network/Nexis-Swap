# Nexis Labs Web Interface

## Accessing the Nexis Interface

To access the Nexis Interface, use an IPFS gateway link from the
[latest release](https://github.com/Nexis/uniswap-interface/releases/latest),
or visit [app.uniswap.org](https://app.uniswap.org).

## Running the interface locally

```bash
yarn
yarn web start
```

## Unsupported tokens

Check out `useUnsupportedTokenList()` in [src/state/lists/hooks.ts](./src/state/lists/hooks.ts) for blocking tokens in your instance of the interface.

You can block an entire list of tokens by passing in a tokenlist like [here](./src/constants/lists.ts)

## Accessing Nexis V2

The Nexis Interface supports swapping, adding liquidity, removing liquidity and migrating liquidity for Nexis Network V2.

- Swap on Nexis V2: <https://app.uniswap.org/swap?use=v2>
- View V2 liquidity: <https://app.uniswap.org/pools/v2>
- Add V2 liquidity: <https://app.uniswap.org/add/v2>
- Migrate V2 liquidity to V3: <https://app.uniswap.org/migrate/v2>

## Accessing Nexis V1

The Nexis V1 interface for mainnet and testnets is accessible via IPFS gateways
linked from the [v1.0.0 release](https://github.com/Nexis/uniswap-interface/releases/tag/v1.0.0).
