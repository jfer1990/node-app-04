import colors from "colors";
import  {inquireMenu, pause, leerInput, BorrarTareaInquire, confirm, MostrarListadoChecklist} from './helpers/inquirer.js'; 
import guardarDB from './helpers/guardarArchivo.js'; 
import recuperarArchivo from './helpers/recuperarArchivo.js'; 

import Tareas from './models/tareas.js'
console.clear(); 

const main = async()=>{
    let opt = ''; 
    const tareas = new Tareas();
    // const recover = recuperarArchivo();  
    //tareas.setListado = recover; 
    const tareasDB = recuperarArchivo(); 

    if(tareasDB){
        tareas.setListado = tareasDB; 
    }
    
    do{
        opt = await inquireMenu(); 
        
        switch(opt){
            case '1':
            const desc = await leerInput('Descripción:');
            tareas.crearTarea(desc); 
                break; 
            case '2':
                console.log(tareas.listadoCompleto()); 
                break; 
            case '3':
                console.log(tareas.listaCompletadasPendientes(true)); 
                break; 
            case '4':
                console.log(tareas.listaCompletadasPendientes(false)); 
                break; 
            case '5':
                const ids = await MostrarListadoChecklist(tareas.listadoArr); 
                tareas.marcarTareasCompletadas(ids); 
                
                break; 
            case '6':
                const delOpt = await BorrarTareaInquire(tareas.listadoArr); 
                const deleteTask = await confirm("Esta acción eliminará esta tarea, desea continuar?"); 
                if(deleteTask){
                    tareas.borrarTarea(delOpt); 
                }
                break; 
        }

        guardarDB(JSON.stringify(tareas.listadoArr)); 
        await pause();  

        // const tarea = new Tarea('HACER ALGO'); 
        // console.log(tarea); 
        
    } while(opt !== '0')
    

    // pause(); 
}

main(); 