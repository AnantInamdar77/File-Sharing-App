import mongoose  from "mongoose"

const DBConnection=async()=>{
    const MONGODB_URI=`mongodb+srv://Anant:AnantInamdar@file-sharing.jlwsf6z.mongodb.net/?retryWrites=true&w=majority&appName=file-Sharing`
    try {
       await mongoose.connect(MONGODB_URI,{useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,})
        console.log('database connected succesfully');
        
        
    } catch (error) {
        console.error('Error while conecting with database', error.message)
        
    }
}

export default DBConnection;