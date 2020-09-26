const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/user");
const InitiateMongoServer = require("./config/db");
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/api/', routes)
app.get("/", (req, res) => {
    res.send('Hello Motherfucker');
  });

 
  
  
  app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
  });