const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido como base (${base}) no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido como límite (${limite}) no es un número.`);
            return;
        }

        console.log('===================='.green);
        console.log(`=== tabla de ${base} ===`.green);
        console.log('===================='.green);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        console.log(data);
        resolve(`tabla-${base}.txt`)


    });

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido como base (${base}) no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido como límite (${limite}) no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
            console.log('El archivo ' + colors.green('tabla-%s.txt') + ' se ha creado.', base);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}