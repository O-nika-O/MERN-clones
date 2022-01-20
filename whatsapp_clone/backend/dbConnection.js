import mongoose from "mongoose";

const db = '';

const connectDB = async () => {

    try {
        console.log("Connecting to database...");
        await mongoose.connect(`${db}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    catch (err) {
        console.log(err.message);
        process.exit(1);
    }

}

export default connectDB;