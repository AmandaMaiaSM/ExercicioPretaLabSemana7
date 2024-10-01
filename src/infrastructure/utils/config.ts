import { Repository } from "../database/mongo-db/epository";
import { CreateAnimalsUseCase } from "../../application/use-cases/create-animals-use-case";
import { animalsController } from "../../interface/animals-controller";
import { DeleteAnimalsUseCase } from "../../application/use-cases/delete-animals-use-case";

//mport { UpdateAnimalsUseCase } from "../../application/use-cases/update-animals-use-case";
import { Animals } from "../../domain/animals";

export function configureDependenceis() {

    const animalsRepository = new Repository();
    const createAnimalsUseCase = new CreateAnimalsUseCase(animalsRepository); 
    const deleteanimalsUseCase = new DeleteAnimalsUseCase(animalsRepository);
    const controller = new animalsController(createAnimalsUseCase, animalsRepository, deleteanimalsUseCase,); 

    //const updateAnimalsUseCase = new UpdateAnimalsUseCase(animalsRepository)
    //const controller = new animalsController(createAnimalsUseCase, animalsRepository, deleteanimalsUseCase, updateAnimalsUseCase); // Instanciar o controlador com o caso de uso
    
    return { animalsController: controller }; // Retornar o controlador corretamente

}