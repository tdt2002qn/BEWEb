const getHomepage = (req, res) => {
  //process data
  //call modal
  res.send('Hello THI1234ttt6')
}
const getABC = (req, res) => {
  res.send('Hello THIABC')
}
const getHtml = (req, res) => {
  res.render('example.ejs')
}
module.exports = {
  getHomepage, getABC, getHtml
}