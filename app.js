const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => { console.log(resp) })
            .catch(err => { console.log(err) });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`El archivo: ${colors.green(archivo)} ha sido creado`); })
            .catch(err => { console.log(err); });
        break;
    default:
        console.log('comando no reconocido');
}