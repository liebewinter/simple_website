const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:page', (req, res) => {
  res.render(`${req.params.page}`)
})


app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})