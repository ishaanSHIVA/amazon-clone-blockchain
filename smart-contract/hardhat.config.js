require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/cb0857104de54cde9bbd344aa5e1462b",
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
  },
};
