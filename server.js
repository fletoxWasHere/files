const express = require('express')
const path = require("path");
const cors = require('cors')
const app = express()


const port = 3000
// Serve only the static files form the dist directory
// __dirname est le répertoire courant

var corsOptions = {
    origin: ["https://0.0.0.0","https://0.0.0.0","https://musical-multiverse-vr-1.onrender.com"],
    optionsSuccessStatus: 200 // For legacy browser support
    }
    
app.use(cors(corsOptions));


app.use(express.static(__dirname + "/public"));



app.get('/coreConfig/:name', (req, res) => {
    res.sendFile(path.join(__dirname + `/public/coreConfig/${req.params.name}`));
})
app.get('/wamsConfig/:name', (req, res) => {
    res.sendFile(path.join(__dirname + `/public/wamsConfig/${req.params.name}`));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
