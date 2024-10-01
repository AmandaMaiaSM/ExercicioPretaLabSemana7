import { AnimalsRepository } from "../repositories/animals-repository";
import { Animals } from "../../domain/animals";
import { AnimalsModel } from "../../infrastructure/database/mongo-db/model-animals";

export class ListAnimalsUseCase {
    constructor(
        private animalsRepository: AnimalsRepository
    ) {}

    async execute(): Promise<Animals[]> {
        //return this.animalsRepository.listAll();
        const animals = await this.animalsRepository.listAll();
        return animals;
    }
}