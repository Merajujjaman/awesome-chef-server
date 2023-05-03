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
    res.send(data)
})

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const singleData = data.find(n => n.id == id)
    res.send(singleData);
})



app.listen(port, () => {
    console.log(`awesome-chef data is running on port: ${port}`)
})