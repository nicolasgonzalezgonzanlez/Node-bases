function hola (nombre, myCallback) {
  console.log('soy async')
  setTimeout(function () {
    console.log('hola ' + nombre);
    myCallback(nombre);
  }, 1000)
};
function adios (nombre, otroCallback) {
  setTimeout(function () {
    console.log('adios ' + nombre)
    otroCallback();
  }, 1000)
}
hola('nicolas',function (nombre) {
  adios(nombre, function () {
    console.log('terminadno proceso')
  });
});