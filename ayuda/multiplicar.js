const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
    try {

        let salida = '';

        for (let i = 0; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i} \n`
        }

        if (listar) {
            console.log('============'.red);
            console.log('   Tabla del: '.green, colors.blue (base));
            console.log('============'.blue);
            console.log(salida.yellow);
        }
        
        fs.writeFileSync (`./salida/Tabla-${ base }.txt`, salida)
        const nombreArchivo = `Tabla-${ base }.txt`;
        return  nombreArchivo ;
    } catch (error) {
        throw error;
    }
    
}

module.exports ={
    crearArchivo
}