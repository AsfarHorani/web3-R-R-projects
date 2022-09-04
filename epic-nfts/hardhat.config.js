require("@nomiclabs/hardhat-waffle");
// Import and configure dotenv
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

module.exports = {
    solidity: "0.8.1",
    networks: {
        rinkeby: {
            // This value will be replaced on runtime
            url: process.env.STAGING_QUICKNODE_KEY,
            accounts: [process.env.PRIVATE_KEY],
        },
        mainnet: {
            chainId: 1,
            url: process.env.PROD_QUICKNODE_KEY,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: "TRNBUZVJJ421I8E7ZB2PZJINYFC5UY5XXK",
    }
};