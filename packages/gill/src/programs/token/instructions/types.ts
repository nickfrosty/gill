import type { Address } from "@solana/addresses";
import type { KeyPairSigner } from "@solana/signers";
import type { TOKEN_PROGRAM_ADDRESS } from "../addresses";
import type { TOKEN_2022_PROGRAM_ADDRESS } from "@solana-program/token-2022";

export type TokenInstructionBase<TMint = KeyPairSigner | Address> = {
  /** Signer that will pay for the rent storage deposit fee and transaction fees */
  feePayer: KeyPairSigner;
  /** Token mint to issue the tokens */
  mint: TMint;
  /**
   * Token program used to create the token's `mint`
   *
   * - (default) {@link TOKEN_PROGRAM_ADDRESS} - the original SPL Token Program
   * - {@link TOKEN_2022_PROGRAM_ADDRESS} - the SPL Token Extensions Program (aka Token22)
   **/
  tokenProgram?: Address;
};
