
// const mongodb_url=require('./config/db.config');
const mongodb_url="mongodb+srv://mekacham381:mekacham381@cluster0.c0q0vb8.mongodb.net/?retryWrites=true&w=majority"
const express=require('express');
const cors=require('cors');
const app = express();

const mongoose = require('mongoose');
const songModel = require('./model/model');
const router = require('./route');
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(express.static('public'));
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
    mongoose.connect(mongodb_url).then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
