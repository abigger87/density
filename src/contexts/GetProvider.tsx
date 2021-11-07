import { Connection, PublicKey, clusterApiUrl} from '@solana/web3.js';
import {
  Program, Provider, web3
} from '@project-serum/anchor';


// Set our network to devent.
const network = clusterApiUrl('devnet');

// Control's how we want to acknowledge when a trasnaction is "done".
const opts = {
  preflightCommitment: "processed"
}

const getProvider = () => {
  // @ts-ignore
  const connection = new Connection(network, opts.preflightCommitment);
  const provider = new Provider(
    connection,
    // @ts-ignore
    window.solana,
    // @ts-ignore
    opts.preflightCommitment,
  );
	return provider;
}

export default getProvider;