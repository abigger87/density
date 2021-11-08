import { SystemProgram} from '@solana/web3.js';
import {
  Program
} from '@project-serum/anchor';

import {
  getProvider,
  getGifList
} from '.';

const createGifAccount = async ({baseAccount, setGifList, idl, programID}) => {
  try {
    const provider = getProvider();
    const program = new Program(idl, programID, provider);
    console.log("ping")
    await program.rpc.startStuffOff({
      accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [baseAccount]
    });
    console.log("Created a new BaseAccount w/ address:", baseAccount.publicKey.toString())
    await getGifList({baseAccount, setGifList, idl, programID});

  } catch(error) {
    console.log("Error creating BaseAccount account:", error)
  }
}

export default createGifAccount;