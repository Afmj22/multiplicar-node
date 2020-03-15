const fileSystem = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fileSystem.writeFile(`tablas/tabla-${ base }-limite-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`table-${base}-limite-${limite}.txt`);
            }
        });
    })
}

let listarTabla = async(base, limite = 10) => {
    if (!Number(base))
        throw new Error(`La base introducido ${base} no es un numero`);
    if (!Number(limite))
        throw new Error(`El limite introducido ${limite} no es un numero`);

    console.log(`=== Tabla de ${base} ===`.green);

    let data = '';
    for (i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    return data;
}

module.exports = {
    crearArchivo,
    listarTabla
}