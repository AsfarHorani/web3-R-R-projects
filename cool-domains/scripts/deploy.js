const main = async() => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("vend");
    await domainContract.deployed();

    console.log("Contract deployed to:", domainContract.address);


    //test
    let txn = await domainContract.register("apple", { value: hre.ethers.utils.parseEther('0.1') });
    await txn.wait();
    console.log("Minted domain banana.ninja");

    txn = await domainContract.setRecord("apple", "Am I a apple or a orange?");
    await txn.wait();
    console.log("Set record for apple.vend");

    const address = await domainContract.getAddress("apple");
    console.log("Owner of domain apple:", address);

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();