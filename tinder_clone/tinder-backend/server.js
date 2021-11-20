import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';
import connectDB from './dbConnection.js'


//App config
const app = express();
const port = process.env.PORT || 8001;


//Connect to Mongo
connectDB();

//Middlewares
app.use(express.json())
app.use(Cors())


//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello WORLd'));
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
}); 

app.get('/tinder/cards', (req, res) => {

    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
    });
//Listeners 
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});