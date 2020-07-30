require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note punch proud install infant equal genius'; 
let testAccounts = [
"0x63e0f1fd6d2ac8f648f9aa9efba81fd2f8c3b8587d3819fe8de4c9ea01fd9622",
"0x59352030dc0d5ed8234b2022830554f51e3c68411b77d01796787860325c0dc1",
"0xcb1807862acc78e99c18db683a913940ca50aec8d2382cd0d63b6ee348ed16ce",
"0x26793fa5c9c715abb580a6b3292d134431ba48ede739d68cacdfa5e9c3b0a438",
"0xded2e7f564f57c14f365b36dc077b545dac5dc3e7058c680928ccc76be56c050",
"0x89d0fbc3ab8d12528a03cb22a0b000eeaa0b035936f4dd32d39fa79e290c167e",
"0x853c66b7381a679227095173ada8e4969d5495a9f5051563ba954c71daec7531",
"0x4316a988367372bf38ad7b0beddb615220c72cad2c4dfea499841ef46de16fd7",
"0x04de4b425c8a55f5d5af16c199d7ca58b6269e3cdf66d45e3652dcff9d84eeae",
"0x4959bacd107f2d4ceb74a3837249ab0b13f9337fc0fe643bddbc28766a887203"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
