console.time('todo')
let suma = 0

console.time('bucle')
for (let i = 0; i <10000000; i++) {
  suma += 1
}
console.timeEnd('bucle')

//function async
console.time('async')
function asincronico () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('hola')
      resolve()
    }, 1000)
  })
}
asincronico()
  .then(()=> {
    console.timeEnd('async')
  })

let suma2 = 0

console.time('bucle2')
for (let i = 0; i <10000000; i++) {
  suma2 += 1
}
console.timeEnd('bucle2')

console.timeEnd('todo')

