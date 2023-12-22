// server/server.js
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

// Avoid CORS error
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const path = require('path');
const bodyParser = require("body-parser");
{/*Here we are configuring express to use body-parser as middle-ware.*/}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@advanceddatabase.hug3cfs.mongodb.net/?retryWrites=true&w=majority');

  // Define the Car schema
  const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    color: String,
  });


  const carModel = mongoose.model('cars', carSchema);

  app.delete('/api/car/:id', async (req,res)=>{
    console.log("Delete: "+req.params.id);
  
    let car = await carModel.findByIdAndDelete (req.params.id);
    res.send(car);
  })
  
  
  
  {/*Changed the React app so that it now makes a post request to the server (sending a
  ”book” object to the server).*/}
  
  {/*Added a post method on the Express Server */}
  app.post('/api/cars', (req,res) =>{
      console.log(req.body);
  
  
      carModel.create({
        make:req.body.make,
        model:req.body.model,
        color:req.body.color
      })
  
  
      .then(
        ()=>{res.send("Data recieved")}
      )
      .catch(
        ()=>{res.send("Data NOT recieved")}
      )
  
  
     
  })
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  
  
  {/*added api cars here from lab 5 */}
  {/* Wrote a method that reads all data from the database and gets it to display on the react
  app*/}
  
  app.get('/api/cars', async (req, res)=>{
      let cars = await carModel.find({});
      console.log(cars);
      res.json(cars);
  
  })
  /* added in an put component to allow updates*/
  app.put('/api/car/:identifier' , async (req, res)=>{
    console.log("Edit: " +req.params.identifier)
  
    let book = await carModel.findByIdAndUpdate(req.params.identifier,req.body,{new:true});
    res.send(car);
  })
  
  /*Write a method that reads a document/book by id from your database in your node/express
  server*/
  
  
  
  app.get('/api/car/:id', async (req,res)=>{
    console.log(req.params.id);
    let car = await carModel.findById({_id:req.params.id})
    res.send(car);
  })
  
  
  

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
}
