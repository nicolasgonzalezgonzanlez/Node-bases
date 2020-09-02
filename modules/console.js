console.log('algo');
console.info('hola')

console.error('epa hubo un error')

console.warn('no es un error pero casi')

var tabla = [
  {
    a: 1,
    b: 2
  },
  {
    a: 3,
    b: 6
  }
]
console.table(tabla);

console.group('conver')//inicia un conjunto de console
console.log('Hola')
console.group('bla')
console.log('blablablabla')
console.log('blablablabla')
console.log('blablablabla')
console.groupEnd('bla')
console.log('adios')
console.groupEnd('conver')//termina conversacion

// count con console

console.count('hola: ')
console.count('hola: ')
console.count('hola: ')
console.countReset('hola: ')
console.count('hola: ')
