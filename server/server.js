//need to create actual routes that will 1. receive a fetch request from the frontend 
//2. send information to the database to save 
//3. parse through the information (from the db query) and send that information back to the frontend so we can use it to change the state

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 8080;

const app = express();

const userController = require('./controllers/controller');



app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})


//this is a test to see if the query to the DB works - had to use another route because of the original '/' get request that serves the index.html
app.get('/getusers', userController.getUser, (req, res) => {
  res.status(200).send('this works man!');
})

app.use('*', (req,res) => {
    res.status(404).send('Not Found');
  });




app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Internal Server Error');
  });


app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });