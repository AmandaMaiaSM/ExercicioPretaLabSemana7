import { AnimalsRepository } from "../../../application/repositories/animals-repository";
import { Animals } from "../../../domain/animals";
import { AnimalsModel } from "./model-animals";


export class Repository implements AnimalsRepository {
    async create(animals: Animals): Promise<Animals> {
        const createdAnimal = new AnimalsModel(animals);
        await createdAnimal.save();
        return createdAnimal.toObject() as Animals; 
    }

    async listAll(): Promise<Animals[]> {
        const animalsList = await AnimalsModel.find();
        return animalsList.map(animal => animal.toObject()) as Animals[];
    }

    async delete(id: string): Promise<boolean> {
        const result = await AnimalsModel.findByIdAndDelete(id);
        return result !== null; 
    }
    
    async update(id: string, data: Partial<Animals>): Promise<Animals | null> {
        const updatedAnimal = await AnimalsModel.findByIdAndUpdate(id, data, { new: true });
        return updatedAnimal ? updatedAnimal.toObject() as Animals : null;
    }
}

