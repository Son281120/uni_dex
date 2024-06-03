require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },

  networks: {
    sepolia: {
      url: "http://localhost:8545",
      accounts: {
        mnemonic: ""
      }
    },
    hardhat: {
      chainId: 1337
    }
  },

};
