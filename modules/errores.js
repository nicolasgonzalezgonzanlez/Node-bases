function serompe () {
  return 3 + a
}


try {
  serompe()
}catch (err) {
  console.error('vaya algo se ha roto')
}

console.log('fin')

//Que pasa con la asincronia
// de esta forma no se puede campurar el error porque esta en un hilo aparte del que estamos trabajando, es decir que no corre en el hilo principoal
/* function RompeAsync () {
  setTimeout(function () {
    return 3 + a 
  }, 100 )
} */

//solucion

function RompeAsync () {
  setTimeout(function () {
    try {
      return 3 + a
    } catch (err) {
      console.error(err.message)
    }
  })
}
RompeAsync() 