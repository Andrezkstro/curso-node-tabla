const { clear } = require('console');
const { crearArchivo } = require('./ayuda/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
//const argv = require('yargs').argv;


clear;


//console.log(argv);

//console.log('base: yargs', argv.b);

//const base = 5;

crearArchivo ( argv.b,argv.l,argv.h )
    .then ( nombreArchivo => console.log(nombreArchivo.rainbow, 'CREADO'))
    .catch( err => console.log(err));