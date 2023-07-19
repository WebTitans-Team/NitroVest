// scripts/deploy.js
async function main() {
    // 1. Get the contract to deploy
    const NitroVest = await ethers.getContractFactory('NitroVest');
    console.log('Deploying NitroVest...');
 
    // 2. Instantiating a new NitroVest smart contract
    const nitrovest = await NitroVest.deploy();
 
    // 3. Waiting for the deployment to resolve
    await nitrovest.deployed();
 
    // 4. Use the contract instance to get the contract address
    console.log('NitroVest deployed to:', nitrovest.address);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });
 