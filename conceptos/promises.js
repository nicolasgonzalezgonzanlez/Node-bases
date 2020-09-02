function hola (nombre) {
  return new Promise(function (resolve, reject ) {
    setTimeout(function () {
      console.log('hola ' + nombre);
      resolve(nombre);
    }, 1000)
  })
};
function Hablar (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('bla bla bla')
      //resolve(nombre);
      reject('hubo un error')
    }, 1000)
  })
};

function adios (nombre) {
  return new Promise((resolve, rejet) => {
    setTimeout(function () {
      console.log('adios ' + nombre)
      resolve();
    }, 1000)
  })
}
console.log('iniciando proceso...')
hola('Nicolas')
  .then(Hablar)
  .then(adios)
  .then((nombre) => {
    console.log('terminado el proceso...')
  })
  .catch((err) => {
    console.log(err)
  })