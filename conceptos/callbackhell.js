function hola (nombre, myCallback) {
  console.log('soy async')
  setTimeout(function () {
    console.log('hola ' + nombre);
    myCallback(nombre);
  }, 1000)
};
function Hablar (callbackhell) {
  setTimeout(function () {
    console.log('bla bla bla')
    callbackhell();
  }, 1000)
};

function adios (nombre, otroCallback) {
  setTimeout(function () {
    console.log('adios ' + nombre)
    otroCallback();
  }, 1000)
}
//function recursiva

function conversacion (nombre, veces, callback) {
  if (veces > 0) {
    Hablar(function () {
      conversacion(nombre, --veces, callback);
    })
  } else {
    adios(nombre, callback);
  }
}
hola('Carlos', function (nombre) {
  conversacion(nombre, 3, function() {
    console.log('proceso terminado')
  })
})
/* hola('nicolas',function (nombre) {
  Hablar(function () {
    adios(nombre, function () {
      console.log('terminadno proceso')
    });
  })
}); */