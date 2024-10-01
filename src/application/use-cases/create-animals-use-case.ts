import { Animals } from "../../domain/animals";
import { AnimalsRepository } from "../repositories/animals-repository";



export class CreateAnimalsUseCase {
    constructor(
        private animalsRepository: AnimalsRepository
    ) {}

    async execute(data: Omit<Animals, 'id' | 'created_at'>): Promise<Animals> {
        const animals: Omit<Animals, 'id'> = {
            ...data,
            created_at: new Date().toISOString(),
        };

        // Chama o método 
        return await this.animalsRepository.create(animals as Animals); 
    }

    async listAll(): Promise<Animals[]> {
        return await this.animalsRepository.listAll();
    }
} 