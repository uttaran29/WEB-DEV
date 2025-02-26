const express = require('express')
const app = express()
const port = 3002

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("It's a get request.")
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log("It's a post request.")
    res.send('Hello World22!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})