import { Animals } from "../../domain/animals";

export interface AnimalsRepository{
    create(animals: Animals): Promise<Animals>; 
    listAll(): Promise<Animals[]>;
    delete(id: string):  Promise<boolean>;
    update(id: string, data: Partial<Animals>): Promise<Animals | null>;
}