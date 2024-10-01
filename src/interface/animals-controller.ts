import { Request,Response } from "express";
import { CreateAnimalsUseCase } from "../application/use-cases/create-animals-use-case";
import { Repository } from "../infrastructure/database/mongo-db/epository";
import { DeleteAnimalsUseCase } from "../application/use-cases/delete-animals-use-case";
//import { UpdateAnimalsUseCase } from "../application/use-cases/update-animals-use-case";


//import { error } from "console";

export class animalsController{
    constructor(
        private createAnimalsUseCase: CreateAnimalsUseCase,
        private animalsRepository: Repository,
        private deleteanimalsUseCase: DeleteAnimalsUseCase,
       // private updateAnimalsUseCase : UpdateAnimalsUseCase

    ){}
    
    //
    async create( req: Request, res: Response): Promise<Response>{
        try{
            const animals =  await this.createAnimalsUseCase.execute(req.body);
            return  res.status(201).json(animals);

        }catch(error: any){ 
            return  res.status(400).json({ error: error.message });
        }
    }

    async listAll(req: Request, res: Response):  Promise<Response> {
        try {
            const animals = await this.createAnimalsUseCase.listAll();
            return res.status(200).json(animals);
        }
         catch (error: any){
            return res.status(400).json({error: error.message});

         }
        //return res.status(200).json(animals);
    }

    async delete (req: Request, res: Response): Promise<Response>{
        try {
            const {id } = req.params;
            const  IdDelete = await this.deleteanimalsUseCase.execute(id);
            
            if (IdDelete){
                return res.status(200).json({message: 'Animal deletado com sucesso'});
            }
            else{
                return res.status(404).json({ message: "Animal não encontrado" });
            }

        } catch (error: any){
            return res.status(400).json({ error: error.message});
        }
    }
    /*
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const updatedAnimal =  await this.updateAnimalsUseCase.execute(id, req.body);

            if (updatedAnimal) {
                return res.status(200).json(updatedAnimal);
            } else {
                return res.status(404).json({ message: "Animal não encontrado" });
            }
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }*/


}