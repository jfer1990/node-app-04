import {writeFileSync} from 'node:fs'; 

const guardarDB = (data) => {
    const archivo = './db/data.json'; 
    writeFileSync(archivo, data); 
}

export default guardarDB; 