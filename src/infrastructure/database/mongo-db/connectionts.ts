import mongoose from "mongoose";

 export const connectDB = async ()=>{
    try{
        await  mongoose.connect('mongodb+srv://amandamaiadev:3MZ5kOdhxogBHzIV@cluster0.onoyd.mongodb.net/')
        console.log('Mongo DB conectado com sucesso')
    }catch(error){
        console.log('Erro ao conectar no MongoDb', error)
    };
}