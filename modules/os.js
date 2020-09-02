const os = require('os');

//que arquitectura corre
console.log(os.arch());
//plataforma (windows, mac, etc)
console.log(os.platform())

//los nucleos
console.log(os.cpus())

//errores
console.log(os.constants)
//memoria ram libre
console.log(os.freemem())

//directorio raiz

console.log(os.homedir())

//directorio temporal
console.log(os.tmpdir())

//nombre host de la maquina
console.log(os.hostname())

//acceder a interface de red
console.log(os.networkInterfaces())