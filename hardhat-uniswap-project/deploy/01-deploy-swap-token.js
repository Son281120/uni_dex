// // Run: npx hardhat run deploy/01-deploy-swap-token.js --network rinkeby

// async function main() {
//     const [deployer] = await ethers.getSigners();

//     console.log("Deploying contracts with the account:", deployer.address);

//     // Deploy Token 1
//     const Token1 = await ethers.getContractFactory("Token");
//     const token1 = await Token1.deploy("Token1", "TK1");
//     await token1.deployed();
//     console.log("Token1 deployed to:", token1.address);

//     // Deploy Token 2
//     const Token2 = await ethers.getContractFactory("Token");
//     const token2 = await Token2.deploy("Token2", "TK2");
//     await token2.deployed();
//     console.log("Token2 deployed to:", token2.address);

//     // Deploy Reward Token
//     const RewardToken = await ethers.getContractFactory("Token");
//     const rewardToken = await RewardToken.deploy("RewardToken", "RTK");
//     await rewardToken.deployed();
//     console.log("RewardToken deployed to:", rewardToken.address);

//     // Deploy TokenSwap
//     const TokenSwap = await ethers.getContractFactory("TokenSwap");
//     const tokenSwap = await TokenSwap.deploy(rewardToken.address);
//     await tokenSwap.deployed();
//     console.log("TokenSwap deployed to:", tokenSwap.address);
// }

// main()
//     .then(() => process.exit(0))
//     .catch(error => {
//         console.error(error);
//         process.exit(1);
//     });


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    // Deploy Token 1
    await deploy('Token1', {
        from: deployer,
        args: ["Token1", "TK1"],
        log: true,
    });

    // Deploy Token 2
    await deploy('Token2', {
        from: deployer,
        args: ["Token2", "TK2"],
        log: true,
    });

    // Deploy Reward Token
    await deploy('RewardToken', {
        from: deployer,
        args: ["RewardToken", "RTK"],
        log: true,
    });

    // Deploy TokenSwap
    await deploy('TokenSwap', {
        from: deployer,
        args: [],
        log: true,
    });

};



