import type { Address } from "@solana/addresses";
import type { IInstruction } from "@solana/instructions";
import type { KeyPairSigner } from "@solana/signers";
import { getCreateAccountInstruction } from "@solana-program/system";
import { getInitializeMintInstruction } from "@solana-program/token";
import {
  extension,
  getInitializeMetadataPointerInstruction,
  getInitializeMintInstruction as getInitializeMintInstructionToken2022,
  getInitializeTokenMetadataInstruction,
  getMintSize,
  TOKEN_2022_PROGRAM_ADDRESS,
} from "@solana-program/token-2022";

import { checkedAddress, getMinimumBalanceForRentExemption } from "../../../core";
import {
  getCreateMetadataAccountV3Instruction,
  getTokenMetadataAddress,
} from "../../token-metadata";
import { checkedTokenProgramAddress } from "../addresses";
import type { TokenInstructionBase } from "./types";

export type GetCreateTokenInstructionsArgs = TokenInstructionBase<KeyPairSigner> & {
  /**
   * The number of decimal places this token should have
   *
   * @default `9` - the most commonly used decimals value
   **/
  decimals?: bigint | number;
  /**
   * Authority address that is able to freeze (and thaw) user owned token accounts.
   * When a user's token account is frozen, they will not be able to transfer their tokens.
   *
   * When not provided, defaults to: `null`
   **/
  freezeAuthority?: Address | KeyPairSigner;
  /**
   * Optional (but highly recommended) metadata to attach to this token
   */
  metadata: {
    /** Whether or not the onchain metadata will be editable after minting */
    isMutable: boolean;
    /** Name of this token */
    name: string;
    /** Symbol for this token */
    symbol: string;
    /** URI pointing to additional metadata for this token. Typically an offchain json file. */
    uri: string;
  };
  /**
   * Metadata address for this token
   *
   * @example
   * For `TOKEN_PROGRAM_ADDRESS` use the {@link getTokenMetadataAddress} function:
   * ```
   * metadataAddress: await getTokenMetadataAddress(mint.address);
   * ```
   *
   * @example
   * For `TOKEN_2022_PROGRAM_ADDRESS` use the mint's address:
   * ```
   * metadataAddress: mint.address;
   * ```
   * */
  metadataAddress: Address;
  /**
   * Authority address that is allowed to mint new tokens
   *
   * When not provided, defaults to: `feePayer`
   **/
  mintAuthority?: KeyPairSigner;
  /**
   * Authority address that is allowed to update the metadata
   *
   * When not provided, defaults to: `feePayer`
   **/
  updateAuthority?: KeyPairSigner;
  // extensions // todo
};

/**
 * Create the instructions required to initialize a new token's mint
 */
export function getCreateTokenInstructions(args: GetCreateTokenInstructionsArgs): IInstruction[] {
  args.tokenProgram = checkedTokenProgramAddress(args.tokenProgram);

  if (!args.decimals) args.decimals = 9;
  if (!args.mintAuthority) args.mintAuthority = args.feePayer;
  if (!args.updateAuthority) args.updateAuthority = args.feePayer;
  if (args.freezeAuthority) args.freezeAuthority = checkedAddress(args.freezeAuthority);

  if (args.tokenProgram === TOKEN_2022_PROGRAM_ADDRESS) {
    // @ts-ignore FIXME(nick): errors due to not finding the valid overload
    const metadataPointer = extension("MetadataPointer", {
      authority: args.updateAuthority.address,
      metadataAddress: args.mint.address,
    });

    // @ts-ignore FIXME(nick): errors due to not finding the valid overload
    const metadataExtensionData = extension("TokenMetadata", {
      // todo: support token22 additional metadata
      additionalMetadata: new Map(),

      mint: args.mint.address,

      name: args.metadata.name,

      symbol: args.metadata.symbol,

      updateAuthority: args.updateAuthority.address,

      uri: args.metadata.uri,
    });

    return [
      getCreateAccountInstruction({
        /**
         * token22 requires the total lamport balance for all extensions,
         * including pre-initialization and post-initialization
         */
        lamports: getMinimumBalanceForRentExemption(
          BigInt(getMintSize([metadataPointer, metadataExtensionData])),
        ),

        newAccount: args.mint,

        payer: args.feePayer,

        programAddress: args.tokenProgram,
        /**
         * token22 requires only the pre-mint-initialization extensions (like metadata pointer)
         * to be the `space`. then it will extend the account's space for each applicable extension
         * */
        space: BigInt(getMintSize([metadataPointer])),
      }),
      getInitializeMetadataPointerInstruction({
        authority: args.mintAuthority.address,
        metadataAddress: args.metadataAddress,
        mint: args.mint.address,
      }),
      getInitializeMintInstructionToken2022({
        decimals: Number(args.decimals),
        freezeAuthority: args.freezeAuthority || null,
        mint: args.mint.address,
        mintAuthority: args.mintAuthority.address,
      }),
      getInitializeTokenMetadataInstruction({
        metadata: args.mint.address,
        mint: args.mint.address,
        mintAuthority: args.mintAuthority,
        name: args.metadata.name,
        symbol: args.metadata.symbol,
        updateAuthority: args.updateAuthority.address,
        uri: args.metadata.uri,
      }),
      // todo: support token22 additional metadata by adding that instruction(s) here
    ];
  } else {
    // the token22 `getMintSize` is fully compatible with the original token program
    const space: bigint = BigInt(getMintSize());

    return [
      getCreateAccountInstruction({
        lamports: getMinimumBalanceForRentExemption(space),
        newAccount: args.mint,
        payer: args.feePayer,
        programAddress: args.tokenProgram,
        space,
      }),
      getInitializeMintInstruction({
        decimals: Number(args.decimals),
        freezeAuthority: args.freezeAuthority || null,
        mint: args.mint.address,
        mintAuthority: args.mintAuthority.address,
      }),
      getCreateMetadataAccountV3Instruction({
        collectionDetails: null,
        data: {
          name: args.metadata.name,
          collection: null,
          sellerFeeBasisPoints: 0,
          creators: null,
          symbol: args.metadata.symbol,
          uri: args.metadata.uri,
          uses: null,
        },
        isMutable: args.metadata.isMutable,
        metadata: args.metadataAddress,
        mint: args.mint.address,
        mintAuthority: args.mintAuthority,
        payer: args.feePayer,
        updateAuthority: args.updateAuthority,
      }),
    ];
  }
}
