import { v4 as uuidv4 } from 'uuid';

class Tarea{ 
    id = ''; 
    desc = ''; 
    completadoEn = null; 

    set completadoEn(completed = true){this.completadoEn = completed}

    constructor(desc){
        this.desc = desc; 
        this.id = uuidv4();
    }
}

export default Tarea; 