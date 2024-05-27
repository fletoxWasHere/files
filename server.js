const express = require('express')
const path = require("path");

const app = express()


const port = 3000
// Serve only the static files form the dist directory
// __dirname est le répertoire courant
app.use(express.static(__dirname + "/public/coreConfig/simpleOscillatorConfig.json"));



app.get('/coreConfig/simpleOscillatorConfig', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/coreConfig/simpleOscillatorConfig.json"));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
