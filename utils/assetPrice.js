const axios = require('axios')

const getAssetUsdPrice = async (assetTicket) => {
  let assetData
  // Using coinbase as api example
  await axios.get(`https://api.coinbase.com/v2/prices/${assetTicket}-USD/buy`)
    .then(res => {
    assetData = res.data
  })
  const assetPrice = assetData.data.amount

  return assetPrice
}

module.exports = {
  getAssetUsdPrice
}