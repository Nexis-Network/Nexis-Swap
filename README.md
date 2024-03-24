# Nexis Swap

## Build Instructions

1. clone the repository
  ```bash
  git clone https://github.com/Nexis-Network/Nexis-Swap
  ```
2. change working directory
   ```
   cd Nexis-Swap
   cd sdk-core-nexis
   ```
3. install sdk-core-nexis dependencies
   ```
   yarn install
   yarn build
   yalc publish
   ```
4. change working directory to interface now
   ```
   cd ..
   cd interface
   yarn install
   ```

5. If the above stuff fails run this
    ```bash
     yalc add @uniswap/sdk-core@4.2.0
     yalc link @uniswap/sdk-core@4.2.0
     yarn lfg
     yarn install
     rm apps/web/src/graphql/data/__generated__/types-and-hooks.ts
     mv types-and-hooks.ts apps/web/src/graphql/data/__generated__/types-and-hooks.ts
     yarn web start
    ```
6. build
   ```
   yarn build:production
   ```

