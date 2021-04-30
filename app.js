const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const generateRubbish = require('./generate_rubbish')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// body-parser setting
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/rubbish', (req, res) => {
  const rubbish = generateRubbish(req.body)
  res.render('index', { rubbish })
})

app.listen(port, () => {
  console.log(`Express is now running on http://localhost:${port}`)
})