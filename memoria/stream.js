const fs = require('fs');
const stream = require('stream');
const  util = require('util');

let data = '';

//leer
 let readAbleStream = fs.createReadStream(__dirname + '/input.txt')
/* readAbleStream.setEncoding('UTF8')
readAbleStream.on('data', (chunk) => {
  data += chunk
})
readAbleStream.on('end', () => {
  console.log(data)
}) */ 

//stdout es un buffer de escritura
/* process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal') */

//resibir un dato de que resive datos y los modifica

const Transform = stream.Transform;

function Mayus () {
  Transform.call(this)
}

util.inherits(Mayus, Transform)

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase()
  this.push(chunkMayus)
  cb()
}

let mayus = new Mayus();

readAbleStream
  .pipe(mayus)
  .pipe(process.stdout)