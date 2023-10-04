const express = require('express')
const assetsController = require('../controllers/assetController')
const homeController = require('../controllers/homeController')

class Router {
  static getRouter() {
    const router = express.Router()

    router.get('/', homeController.portfolioTracker)
    router.get('/data', assetsController.getAssets)
    router.get('/price/:ticket', assetsController.getAssetUsdPrice)

    return router
  }
}

module.exports = Router
