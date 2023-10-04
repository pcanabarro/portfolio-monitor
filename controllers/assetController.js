const axios = require('axios')

const getAssets = () => {
  const assetsList = [{
    assetName: 'A',
    assetTicket: 'A',
    quantity: 1,
  }]

  return assetsList
}

const getAssetUsdPrice = async (ticket) => {
  let assetData

  // Using coinbase api as example
  await axios.get(`https://api.coinbase.com/v2/prices/${ticket}-USD/buy`)
  .then(res => {
    assetData = res.data
  })
  const assetPrice = assetData.data.amount

  return assetPrice
}
module.exports = {
  getAssets,
  getAssetUsdPrice
}
