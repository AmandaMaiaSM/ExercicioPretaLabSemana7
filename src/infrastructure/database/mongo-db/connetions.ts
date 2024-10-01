//conectar com a string que posssui senha e user la do clauster do mongoDB

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


export const connectDB = async ()=>{
    try{
        await  mongoose.connect(process.env.MONGODB_URI as string);
        console.log('Mongo DB conectado com sucesso');
    }catch(error){
        console.log('Erro ao conectar no MongoDb', error);
    }
}