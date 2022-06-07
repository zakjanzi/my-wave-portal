require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/X99LdU-RRm4k2wc6tspKF3qTY_207vYH",
      accounts: ["86db2ef7b639460298b9bb4f221f20c37e3b37ee595e39d9f1c7415e67d708e3"]
    },
  },
};