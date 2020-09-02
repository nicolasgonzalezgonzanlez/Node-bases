const fs = require('fs');//modulo nativo 

function Read (route, cb) {
  fs.readFile(route, (err, data) => {
   cb(data.toString())
  })
}

function ToWrite (route, content, cb) {
  fs.writeFile(route, content, function (err) {
    if (err) {
      console.err('no he podido escribirlo', err)
    } else {
      console.log('todo correcto')
    }
  })
}

function Delete (route, cb) {
  fs.unlink(route, cb)
}
//Read(__dirname + '/archivo.txt', console.log);

//ToWrite(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log)

//Delete(__dirname + '/archivo1.txt', console.log)