const assetPrice = require('../utils/assetPrice')

const getAssets = (req, res) => {
  const assetsList = []
  res.status(200).json(assetsList)
}

const getAssetUsdPrice = async (req, res) => {
  const price = await assetPrice.getAssetUsdPrice(req.params.ticket)
  res.status(200).send(price)
}

module.exports = {
  getAssets,
  getAssetUsdPrice
}