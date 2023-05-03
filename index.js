const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())

const data = require('./data/chefData.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.json(data)
})



app.listen(port, () => {
    console.log(`awesome-chef data is running on port: ${port}`)
})