async function hola (nombre) {
  return new Promise(function (resolve, reject ) {
    setTimeout(function () {
      console.log('hola ' + nombre);
      resolve(nombre);
    }, 1000)
  })
};
async function Hablar (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('bla bla bla')
      //resolve(nombre);
      resolve(nombre)
    }, 1000)
  })
};

async function adios (nombre) {
  return new Promise((resolve, rejet) => {
    setTimeout(function () {
      console.log('adios ' + nombre)
      resolve();
    }, 1000)
  })
}

async function Main () {
  let nombre = await hola('Nicikas')
  await Hablar()
  await adios(nombre)
}

Main();