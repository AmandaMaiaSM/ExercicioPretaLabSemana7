import express  from "express";
import {configureDependenceis} from '../infrastructure/utils/config'
import { connectDB } from "../infrastructure/database/mongo-db/connectionts";


export const app = express();
app.use(express.json());
//rodando DB
connectDB()

const {animalsController} = configureDependenceis();
app.post('/animals', (req, res) => animalsController.create(req, res));
app.get('/animals', (req, res) => animalsController.listAll(req,res));
app.delete('/animals/:id', (req, res) => animalsController.delete(req, res)); 
//app.put('/animals/:id', (req, res) => animalsController.update(req, res));

if (require.main === module){
    const PORT = 3333;
    app.listen(PORT, () => {
        console.log( ` Sevidor rodando com sucesso na porta ${PORT}`);
    })
}