# gill

## 0.5.0

### Minor Changes

- [#54](https://github.com/solana-foundation/gill/pull/54)
  [`8139481`](https://github.com/solana-foundation/gill/commit/813948162c84e7ddad12493ed78f9190182b99bf)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - allow `sendAndConfirmTransaction` to also
  handle signing

- [#52](https://github.com/solana-foundation/gill/pull/52)
  [`9e01463`](https://github.com/solana-foundation/gill/commit/9e01463d7d38ca9b073fbb96472093dd6ccf379c)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added `lamportsToSol` function

- [#56](https://github.com/solana-foundation/gill/pull/56)
  [`3439498`](https://github.com/solana-foundation/gill/commit/343949824950f700e572ada151b4dc07fd68d229)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added `transactionFromBase64` function

### Patch Changes

- [#58](https://github.com/solana-foundation/gill/pull/58)
  [`7c997f7`](https://github.com/solana-foundation/gill/commit/7c997f7cde676beeeb89200fe389c79dba708082)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - refactored client type names

- [#53](https://github.com/solana-foundation/gill/pull/53)
  [`452359c`](https://github.com/solana-foundation/gill/commit/452359c08c5fd089fb1f1e7959e70fb34e148697)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - declare imports as type

- [#50](https://github.com/solana-foundation/gill/pull/50)
  [`5dd8366`](https://github.com/solana-foundation/gill/commit/5dd8366084727541394d90e5044e030fdcfc246c)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - add `localhost` support to explorer urls

- [#55](https://github.com/solana-foundation/gill/pull/55)
  [`7e1ce79`](https://github.com/solana-foundation/gill/commit/7e1ce79e05793c0b0422de05d1b7505e6fdca864)
  Thanks [@metasal1](https://github.com/metasal1)! - remove duplicate entry from changelog

## 0.4.0

### Minor Changes

- [#40](https://github.com/solana-foundation/gill/pull/40)
  [`9ae5ee8`](https://github.com/solana-foundation/gill/commit/9ae5ee8c3549c15df5c71a072bd9686b55afeb1a)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added transfer token
  transaction/instruction builders

- [#43](https://github.com/solana-foundation/gill/pull/43)
  [`b9491e4`](https://github.com/solana-foundation/gill/commit/b9491e43ed0841c08b6de0d37a3e06df8161ce46)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added transactionToBase64WithSigners to
  sign and base64 encode

- [#44](https://github.com/solana-foundation/gill/pull/44)
  [`e18fc1b`](https://github.com/solana-foundation/gill/commit/e18fc1bf78b68eff089f61e93444f222f5374b90)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added functions for generating extractable
  keypairs, saving keypairs to files, and loading/saving keypairs to env variables

### Patch Changes

- [#42](https://github.com/solana-foundation/gill/pull/42)
  [`7a220bc`](https://github.com/solana-foundation/gill/commit/7a220bc67c6987e30105f3bdab24ff86ee6328ee)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - fix createSolanaClient to accept port
  numbers and set the localnet port

- [#49](https://github.com/solana-foundation/gill/pull/49)
  [`64d138a`](https://github.com/solana-foundation/gill/commit/64d138a03e3c09b340c54273455b44ae582ff0c6)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - vendor in spl memo

- [#48](https://github.com/solana-foundation/gill/pull/48)
  [`18a8eec`](https://github.com/solana-foundation/gill/commit/18a8eecba39d4c133e90c90905a5bb87f4eb7ba9)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - fix create token instructions to correctly
  handle desired token program

## 0.3.0

### Minor Changes

- [#30](https://github.com/solana-foundation/gill/pull/30)
  [`446a9d1`](https://github.com/solana-foundation/gill/commit/446a9d1a4ce1a74ce7e9d25865166bc1c08699a5)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added create token helpers

- [#34](https://github.com/solana-foundation/gill/pull/34)
  [`dc635bb`](https://github.com/solana-foundation/gill/commit/dc635bb83a930ff12aea22ab2b81a2c5fd1476e7)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - removed token client but keep the program
  address

- [#27](https://github.com/solana-foundation/gill/pull/27)
  [`93674ab`](https://github.com/solana-foundation/gill/commit/93674ab32c9b25baccf7293775e84c0253130419)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added genesis hash constant and to moniker
  function

- [#25](https://github.com/solana-foundation/gill/pull/25)
  [`a7c3ee4`](https://github.com/solana-foundation/gill/commit/a7c3ee44dfb4b0a97dcf71ae9f47d82b69da706e)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - add the address lookup table program as a
  reexport

- [#29](https://github.com/solana-foundation/gill/pull/29)
  [`94c1210`](https://github.com/solana-foundation/gill/commit/94c12107ca22d07c1ffb59879c81a0027ebf10de)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added client for Metaplex's Token Metadata
  program

- [#33](https://github.com/solana-foundation/gill/pull/33)
  [`be3110d`](https://github.com/solana-foundation/gill/commit/be3110d21652f3d31e238a55962a872f65f63faf)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added mint token functions

### Patch Changes

- [#35](https://github.com/solana-foundation/gill/pull/35)
  [`a1e342a`](https://github.com/solana-foundation/gill/commit/a1e342adfcd556ea6d51b8e345a19317a217d775)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - refactor common type and use `feePayer` vs
  `payer` for consistency

- [#28](https://github.com/solana-foundation/gill/pull/28)
  [`e28620c`](https://github.com/solana-foundation/gill/commit/e28620c075206c0df29e29406c3eaec2eb4008d2)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - allow `getExplorerLink` to return the base
  transaction url for each cluster

- [#37](https://github.com/solana-foundation/gill/pull/37)
  [`c489242`](https://github.com/solana-foundation/gill/commit/c489242ac71327fb70b08a83590a43e90daf5558)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - document transaction builders in the readme

- [#32](https://github.com/solana-foundation/gill/pull/32)
  [`7bf0137`](https://github.com/solana-foundation/gill/commit/7bf0137159e503c42241bc1ce7d25b30a240f726)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - fix prepareTransaction to correct return
  type to always have a blockhash

## 0.2.0

### Minor Changes

- [#21](https://github.com/solana-foundation/gill/pull/21)
  [`cdefdcd`](https://github.com/solana-foundation/gill/commit/cdefdcd112b28a207b08b38aed810772a993bc4c)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added the `debug` logger to facilitate
  common debug patterns

- [#20](https://github.com/solana-foundation/gill/pull/20)
  [`ee28853`](https://github.com/solana-foundation/gill/commit/ee288539b631b7e215421a217abc7156263b03fd)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added `transactionToBase64` function

- [#17](https://github.com/solana-foundation/gill/pull/17)
  [`f59381b`](https://github.com/solana-foundation/gill/commit/f59381b0b87e7670fd7e6debbd7827c0b98e73bd)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - re-export token and token22

- [#22](https://github.com/solana-foundation/gill/pull/22)
  [`3495a3c`](https://github.com/solana-foundation/gill/commit/3495a3cf70a6ae7933616059d54f40501712b931)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added `sendAndConfirmTransaction` to the
  client creator

- [#23](https://github.com/solana-foundation/gill/pull/23)
  [`f0044ad`](https://github.com/solana-foundation/gill/commit/f0044aded5b1d5b86194361c0f5865f4d6475ffd)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - easily add compute budget instructions when
  creating a transaction

### Patch Changes

- [#18](https://github.com/solana-foundation/gill/pull/18)
  [`4b139da`](https://github.com/solana-foundation/gill/commit/4b139dab06a274777e15ff47c92fec001c2f6e93)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - getExplorerUrl to return a string and
  accepted a signed transaction

- [#13](https://github.com/solana-foundation/gill/pull/13)
  [`1727586`](https://github.com/solana-foundation/gill/commit/17275861d0bbbfd1daf74a31e7445373c9612117)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - fixed types for the solana client and added
  tests

- [#16](https://github.com/solana-foundation/gill/pull/16)
  [`33e8974`](https://github.com/solana-foundation/gill/commit/33e8974d0dc1ad5f877827a7964a61d02737048f)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - fixed types for createTransaction

- [#19](https://github.com/solana-foundation/gill/pull/19)
  [`81cbff6`](https://github.com/solana-foundation/gill/commit/81cbff68a44e569141ad844cb4e661b57da2b8c7)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - refactor getExplorerLink to not accept a
  signed transaction

## 0.1.0

### Minor Changes

- [#10](https://github.com/solana-foundation/gill/pull/10)
  [`0c03cb8`](https://github.com/solana-foundation/gill/commit/0c03cb8ce794a2a79d2eee7a56d98caa3007fc8a)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added a `getMinimumBalanceForRentExemption`
  function that does not make an rpc call

### Patch Changes

- [#7](https://github.com/solana-foundation/gill/pull/7)
  [`d3e7220`](https://github.com/solana-foundation/gill/commit/d3e7220c8f7d23cc2bc1e583887ef45ef621134e)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - make the `latestBlockhash` in
  `createTransaction` optional

- [#8](https://github.com/solana-foundation/gill/pull/8)
  [`5de7acb`](https://github.com/solana-foundation/gill/commit/5de7acbc7500fe76d2592b1f989f156f477e85f5)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added readme

- [`acf3df9`](https://github.com/solana-foundation/gill/commit/acf3df98c49cbc82af2a4655a9979f1bc4471c9e)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added tests for createTransaction

## 0.0.4

### Patch Changes

- [`6ae676f`](https://github.com/solana-foundation/gill/commit/6ae676f0f06c0ab07af8b2d03fd2e0f3fb051916)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - fix rpc functions

- [#6](https://github.com/solana-foundation/gill/pull/6)
  [`1438ba7`](https://github.com/solana-foundation/gill/commit/1438ba7fbf1a572d7c8c7936b70ba85e775d2cf0)
  Thanks [@nickfrosty](https://github.com/nickfrosty)! - added the `createTransaction` function
