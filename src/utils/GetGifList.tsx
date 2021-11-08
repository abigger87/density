import {
  Program
} from '@project-serum/anchor';

import { getProvider } from ".";

const getGifList = async ({baseAccount, setGifList, idl, programID}) => {
  try {
    const provider = getProvider();
    // @ts-ignore
    const program = new Program(idl, programID, provider);
    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log("Got the account", account)
    setGifList(account.gifList)

  } catch (error) {
    console.log("Error in getGifs: ", error)
    setGifList(null);
  }
}

export default getGifList;