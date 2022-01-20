import connectDB from './dbConnection.js';
import express from 'express';
import mongoose from "mongoose";
import Messages from './messagesModel.js';
import Pusher from "pusher";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 9000;
const db = mongoose.connection;

//connect to database
connectDB();

//middleware
app.use(express.json());
app.use(cors());
//I used cors to allow cross origin requests
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     next();
// })

const pusher = new Pusher({
    appId: "",
    key: "",
    secret: "",
    cluster: "us3",
    useTLS: true
  });


//api routes
app.get('/',(req,res) => res.status(200).send('API whatsapp Running'));

app.get('/messages/sync', (req,res) => {
    Messages.find((err, data) => {
        if(err) return res.status(500).send(err);
        res.status(200).send(data);
    });
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

//listen to port
db.once('open', () => {
    console.log('Connected to MongoDB');
    
    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log('a change has occured', change);

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            }).catch(e => console.log(e))

        } else {
            console.log('Error triggering pusher event');
        }
    })

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    
});