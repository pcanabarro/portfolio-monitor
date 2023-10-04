const assetController = require('./assetController')

const getHome = (req, res) => {
  res.status(200).send('Hi')
}

const portfolioTracker = async (req, res) => {
  const userAssets = assetController.getAssets()
  let listAsset = []

  await userAssets.map(async asset => {
    const item = {
      assetName: asset.assetName,
      assetTicket: asset.assetTicket,
      quantity: asset.quantity,
      price: await assetController.getAssetUsdPrice(asset.assetTicket),
    }
    Object.assign(item, { totalAsset: (item.quantity * item.price) })
    console.log(item)

    listAsset.push(item)
  })

  console.log(await listAsset)
  // res.status(200).send(listAsset)
}

module.exports = {
  getHome,
  portfolioTracker
}
