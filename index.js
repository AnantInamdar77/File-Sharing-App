import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';
const App=express();


const PORT = 8000;

App.use(cors());
App.use('/',router)
DBConnection();
App.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})