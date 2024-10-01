import { AnimalsRepository } from "../repositories/animals-repository";

export class DeleteAnimalsUseCase{
    constructor(
        private animalsRepository : AnimalsRepository
    ){}
    async execute(id: string): Promise<boolean> {
        //return this.animalsRepository.delete(id);
        const result = await this.animalsRepository.delete(id);
        return result;
    }
}