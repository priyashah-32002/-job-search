const express = require('express'); 
const dotenv = require('dotenv');                        
dotenv.config({path:'config.env'})
const morgan =  require('morgan');
const bodyparser = require('body-parser');          
const path = require('path');                                         
const connectDB = require('./server/database/connection');

const app = express();
const hostname =process.env.hostname; 

const PORT = process.env.PORT||3040; 


// log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB ();

//parse requests
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json());
// app.use(express.json({extended: false}));


//set view engine
app.set("view engine","ejs")
//app.set("view", path.resolve(__dirname,"views/ejs"))

//load assests
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT, hostname, () => {
   console.log(`Server running at http://${hostname}:${PORT}/`);
 });

