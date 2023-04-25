import mongoose from "mongoose";

mongoose.set('strictQuery', true)

async function connect() {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('connect DB successfully');
    } catch (error) {
        const {code} = error;
        if(code === 8000) {
            throw new Error('Wrong database username or password')
        } else if(code === 'ENOTFOUND') {
            throw new Error('Wrong server name/ connection')
        }
        throw new Error("Can't connect to database")
    }
}

export default connect
