// Shoutout to Dabbit for helping w/ this!
// https://twitter.com/dabit3

const fs = require('fs')
const anchor = require("@project-serum/anchor")

const account = anchor.web3.Keypair.generate()

fs.writeFileSync('../assets/keypair.json', JSON.stringify(account))

module.exports = {};
export {};