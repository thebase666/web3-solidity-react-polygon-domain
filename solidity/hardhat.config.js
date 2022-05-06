require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/U7jtsjE8Jb9e9RoxkNyZ5mzpAqW_FxJ5",
      accounts: ["fa674ebf2b662e2b7f95c4d54751f7c40cb849a38fbb327c1bea0ac3274e1274"],
    }
  }
};