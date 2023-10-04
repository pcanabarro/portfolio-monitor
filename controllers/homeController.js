const getHome = (req, res) => {
  res.status(200).send('Hi')
}

module.exports = {
  getHome
}