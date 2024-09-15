const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const Prediction=require("./models/Prediction");
dotenv.config();
mongoose.connect('mongodb://127.0.0.1:27017/practiceDB').then(()=>{
    console.log('MongoDB Connected');
}).catch(err=>{
    console.log('Error connecting to MongoDB');
});

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/post', function (req, res) {
console.log("hit");
})

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
})