const { cexExports } = require('../helper/cex')

const config = {
  ethereum: {
    owners: [
      '0x562680a4dc50ed2f14d75bf31f494cfe0b8d10a1', // ETH/ERC20 hot wallet
    ]
  },
  bsc: {
    owners: [
      '0xC7029E939075F48fa2D5953381660c7d01570171', //Polygon hot wallet
    ]
  },
  tron: {
    owners: [
      'TS9b9boewmB6tq874PnVZrKPf4NZw9qHPi', //Tron TRX/TRC10/TRC20 hot wallet
    ]
  },
}

module.exports = cexExports(config)