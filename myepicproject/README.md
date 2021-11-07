
# Deploying to devnet:

```
solana config set --url devnet

// Make sure you're on devnet.
solana config get

anchor build

// Get the new program id.
solana address -k target/deploy/myepicproject-keypair.json

// Update Anchor.toml and lib.rs w/ new program id.
// Make sure Anchor.toml is on devnet.

// Build again.
anchor build
```


## Build

Run `anchor build`

## Fetch Built Program ID

Solana address -k target/deploy/myepicproject-keypair.json

## Change the program ID

In `programs/myepicproject/src/lib.rs`, insert the program id
`declare_id!("<program_id>");`