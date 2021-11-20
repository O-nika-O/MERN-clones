import mongoose from 'mongoose';

//db connection url to mongo
const db = 'mongodb+srv://admin:w8MtUZc65Cnv6gxe@cluster0.2dj6s.mongodb.net/tinderCloneDB?retryWrites=true&w=majority'

const connectDB = async () => {

    try {
        console.log(db);
        await mongoose.connect(`${db}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};


//module.exports = connectDB
export default connectDB;