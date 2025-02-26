const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Thanks for quering about us')
})

app.get('/contact', (req, res) => {
    res.send('Thanks for contacting us!! We will reach out to you soon.')
})

app.get('/kiit', (req, res) => {
    res.send("https://kiit.ac.in/")
})


app.get('/kiit/:slug', (req, res) => {

    console.log(req.params)

    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})