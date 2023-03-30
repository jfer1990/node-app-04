import Tarea from './tarea.js'
import colors from "colors";


class Tareas {
    _listado = {}; 

    get listadoArr(){
        return Object.keys(this._listado).map(key=>this._listado[key]);
    } 

    set setListado(tareas){
        tareas?.forEach(tarea=>{
            this._listado[tarea.id] = tarea; 
        })
    }

    constructor(){
        this._listado = {}; 
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc); 
        this._listado[tarea.id] = tarea; 
    }

    listadoCompleto(){
        let acumTasks = ""; 
        Object.values(this._listado).forEach((item,index) => {
            const indice = `${index + 1}.-`; 
            if(item.completadoEn !== null){ 
                acumTasks += `${indice}  ${item.desc} :: ${'Completada'.green}  \n`;
            }
            else{
                acumTasks += `${indice}  ${item.desc}  :: ${'Pendiente'.red}\n`;
            } 
        }); 
        return acumTasks; 
    }

    listaCompletadasPendientes(completadas = true){
        let acumTasks = ""; 
        if(completadas){
            const noCompletadas = Object.values(this._listado).filter((item) => item.completadoEn !== null);
            noCompletadas.forEach((item,index)=>{
                const indice = `${index}.-`; 
                acumTasks += `${indice}  ${item.desc} :: ${'Completadas'.green}  \n`;
            }) 
            return acumTasks; 
        }
        else{
            const noCompletadas = Object.values(this._listado).filter((item) => item.completadoEn === null);
            noCompletadas.forEach((item,index)=>{
                const indice = `${index}.-`; 
                acumTasks += `${indice}  ${item.desc} :: ${'No completadas'.red}  \n`;
            }) 
            return acumTasks; 

        }

    }

    borrarTarea(id){
        if(this._listado[id]){
            delete(this._listado[id]); 
        }
    }

    marcarTareasCompletadas(idsTareas = []){
        idsTareas.forEach((id=>{
            this._listado[id].completadoEn = true; 
        }))
        // this.listadoArr.forEach(dat=>{
        //     dat.completadoEn = true; 
        //     idsTareas.forEach(dat2=>{
        //         dat2.completadoEn = true;

        //     })
        // }); 
    }


}

export default Tareas; 