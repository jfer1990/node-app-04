import {readFileSync} from 'node:fs'; 

// Use fs.readFile() method to read the file
const archivo = './db/data.json';
const recuperarArchivo = ()=>{
    const info = readFileSync(archivo, {encoding:'utf-8'});
    return JSON.parse(info); 
}

export default recuperarArchivo; 