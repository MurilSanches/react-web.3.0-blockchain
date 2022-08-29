require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/t19eHNS57f1yrEmD2rE_vf64xKvH_QYE',
      accounts: [ '1dc9fce3289b13dde446814bc8e7ee41f778d2356fb1e8d8959d47e919cad3a9', ],
    }
  }
}