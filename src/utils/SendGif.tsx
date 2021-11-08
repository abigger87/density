import {
  Program
} from '@project-serum/anchor';

import { getGifList, getProvider } from ".";

const sendGif = async ({ inputValue, baseAccount, setGifList, idl, programID }) => {
  if (inputValue.length === 0) {
    console.log("No gif link given!")
    return
  }
  console.log('Gif link:', inputValue);
  try {
    const provider = getProvider();
    const program = new Program(idl, programID, provider);

    await program.rpc.addGif(inputValue, {
      accounts: {
        baseAccount: baseAccount.publicKey,
      },
    });
    console.log("GIF sucesfully sent to program", inputValue)

    await getGifList({ baseAccount, setGifList, idl, programID });

    return true;
  } catch (error) {
    console.log("Error sending GIF:", error)
  }

  // ** If we reach this, we failed ** //
  return false;
};

export default sendGif;