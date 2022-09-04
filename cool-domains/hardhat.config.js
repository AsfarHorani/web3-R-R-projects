require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");


module.exports = {
    solidity: "0.8.10",
    networks: {
        mumbai: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/ap6LGqM_iGVBFYPsw8vjvq0KrCcBlHgt",
            accounts: ["281ff7294b2a58fa91d1aae03ce8a09f6ea64117f657062c3a957457ef1e0044"],
        }
    }
};