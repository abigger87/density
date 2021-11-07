
## Build

Run `anchor build`

## Fetch Built Program ID

Solana address -k target/deploy/myepicproject-keypair.json

## Change the program ID

In `programs/myepicproject/src/lib.rs`, insert the program id
`declare_id!("<program_id>");`