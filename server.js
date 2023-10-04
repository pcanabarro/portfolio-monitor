const express = require('express')
const Router = require('./routes/router')

class App {
	constructor() {
		this.app = express()
		this.port = process.env.SERVER_PORT || 3001
		this.app.use(express.json())
		this.app.use(Router.getRouter())
	}

	start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

const app = new App()
app.start()