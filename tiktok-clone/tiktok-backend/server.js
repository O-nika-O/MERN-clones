import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js'
import Videos from './dbModel.js'
import connectDB from './dbConnection.js'
//App config
const app = express();
const port = 9000;

//Connect to Mongodb
    connectDB();

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})
//API enpoints
app.get('/', (req, res) => res.status(200).send('hello world'));
app.get ('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
    Videos.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});
app.post ('/v2/posts', (req, res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

//listener
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});

