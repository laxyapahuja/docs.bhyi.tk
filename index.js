const express = require('express')
const app = express()
const funny = require('./data/funnywords').arr
const abusing = require('./data/abusing').arr
const talking = require('./data/talking').arr

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', { 'data': [{'word':''},{'word':''},{'word':''},{'word':''},{'word':''}], 'color': '', 'opacity':[1,1,1], 'hidden':'hidden'})
})

app.get('/funny', (req, res) => {
    res.render('index', {'data': funny, 'color': '#41F2B1', 'opacity':[1,0.2,0.2], 'hidden':''})
})

app.get('/abusing', (req, res) => {
    res.render('index', {'data': abusing, 'color': '#E825AF', 'opacity':[0.2,1,0.2], 'hidden':''})
})

app.get('/talking', (req, res) => {
    res.render('index', {'data': talking, 'color': '#DCF53C', 'opacity':[0.2,0.2,1], 'hidden':''})
})

const port = process.env.PORT || 4000
app.listen(port, (err) => {
  console.log(`Shortener listening on ${port}!`)
  if (err) throw err
})