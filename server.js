// require our dependencies
require ('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT
//---------->

// create app
const app = express()

var corsOptions = { origin: "http://localhost:8088" }
app.use(cors(corsOptions) )

// body-parser - to process JSON content & encoded links
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//---------->

// configure database & CRUD
const db = require("./app/model/index")
db.sequelize.sync()
/*
// if our table already exists, you may need to drop it. Example during development or testing.
db.sequelize.sync({ force: true }).then(() => {
   console.log("Drop the database, and synchronize.");
});
*/
//---------->

// app routing
//---------->
app.get('/', (req, res) => {
    res.json({message: "Hello from the Mechanic Shop - Work Management System API."}  )
}  )
require('./app/route/vehicle.route' )(app)

// start web server 
app.listen(PORT, () => {
    console.log(`API started on port ${PORT} and now available at http://${HOST}:${PORT}/. Enjoy!`)
} )
  /* 
  To start the default web browser from the command line: 
  Windows ~ run 'start http://localhost:8088/'. 
  Mac     ~ run 'open http://localhost:8088/'.   
  */