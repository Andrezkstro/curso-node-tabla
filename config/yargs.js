const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe:'Es la base de la tabla'
                })
                .options('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe:'Muestra la tabla en consola'
                })
                .options('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe:'Es hasta donde'
                })
                .check((argv,options) => {
                    if ( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser numerico'
                    }
                    return true;
                })
                .argv;

module.exports = argv;