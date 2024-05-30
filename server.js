const express = require('express')
const path = require("path");
const cors = require('cors')
const fs = require('node:fs');

const app = express()


const port = 3000
// Serve only the static files form the dist directory
// __dirname est le répertoire courant

var corsOptions = {
    origin: ["https://0.0.0.0","http://0.0.0.0","https://musical-multiverse-vr-1.onrender.com","https://localhost:5173"],
    optionsSuccessStatus: 200 // For legacy browser support
    }
    
// Set middleware of CORS 
app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://musical-multiverse-vr-1.onrender.com/"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
  
    next();
  });
app.use(express.static(__dirname + "/public"));



app.get('/coreConfig/:name', (req, res) => {
const filePath = path.join(__dirname, `/public/coreConfig/${req.params.name}.json`);
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Error reading file");
    return;
  }
  res.json(JSON.parse(data));
});
})

app.get('/wamsConfig/:name', (req, res) => {
    const filePath = path.join(__dirname, `/public/wamsConfig/${req.params.name}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          res.status(500).send("Error reading file");
          return;
        }
        res.json(JSON.parse(data));
      });
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
