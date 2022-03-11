require ("@nomiclabs/hardhat-ethers");
require ("@nomiclabs/hardhat-waffle");
const {privateKey,feeToSetter} = require("./env");
module.exports = {
  defaultNetwork: "testnet",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: privateKey
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000
    }
  },
  solidity: {
  version: "0.6.6",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
