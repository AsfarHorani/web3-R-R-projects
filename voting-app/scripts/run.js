
const hre = require("hardhat");

async function main() {

  const VotingSys = await hre.ethers.getContractFactory("VotingSys");
  const vostingSys = await VotingSys.deploy(
    ["Titanic","Batman","Punjab Nahi jaonga"],
    ["Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
     "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.",
    "A young man falls head over heels in love with an attractive woman. However, on noticing that she does not reciprocate his feelings, he vows to win her over at all costs."],
    ["QmW9ZGvquspAap8fWnkDUcEuczos3FwW9zqeKrg5nq8bJJ",
    "QmYr3CxUYK1qw24BU12HiUPJiMqKeTuJ7ynnUzkvuR3Jeb",
    "QmbCMqzbDTNA9ajuxbWn65i7jFwYckw12nrT7hArB1Xg8m"]);

  await vostingSys.deployed();

  console.log("VostingSys deployed to:", vostingSys.address);
  let txn = await vostingSys.getAllMovies();
  console.log("all movies: "+JSON.stringify(txn));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
