

process.on('beforeExit', () => {
  console.log('A putnto de acabar');
});

process.on('exit', () => {
  console.log('Valem el proceso acabo');
});

process.on('uncaughtException', (err, origen) => {
  console.log('Valla se nos olvido capturar un errror')
  console.error(err)
})

perro()

console.log('esto no sale porque el error no se recoje')