require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth place artwork hockey arctic metal ghost'; 
let testAccounts = [
"0xfdea60eebb19e6d08cd64b19f75450ce597a3ef1d7875bc78f280f43b531fa06",
"0x81488c73b9aa18d1ba04ec0c45929ecab0e4a472a5e505853004f7ee8a446d9d",
"0x8c98a429816e67baa902fe20c695285706a30e4ca2451327eadd8483da1eb66f",
"0x71026619b098d717383c3ccb27695c747875876b87252e7298f44529d0ffc600",
"0x2af1ab2486fce291b95ed847f143fa3829ad102975fd72d628d7715323fd2d6b",
"0x032bcbdb40a8f400006c844ea512348bcc6a2885cf3d6646783ce07be9dbda5d",
"0x9772d183ebde737d8b126882398b5b1c176d56507e71f4aee9036e2fbe4404a5",
"0xcaf2955c2d929cd702625816e84f14b88e38360827bc5fce139f708d463c6538",
"0xc646f3b32752762e1be5e28c24922215262d420e8e68d6397420a91accfde76a",
"0xba9c17b716f4c796a333e9db7fb60d590dd8d25d2541f4cc696fdcc8ad30b5b1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


