const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const amazonCoinFactory = await hre.ethers.getContractFactory("AmazonCoin");
  const amazonCoin = await amazonCoinFactory.deploy();

  await amazonCoin.deployed();

  console.log("Writing contractData");

  fs.writeFileSync(
    "../assets/contractData.js",
    `
    export const contractAddress = "${amazonCoin.address}"
`
  );

  console.log("Amazon Coin deployed to:", amazonCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
