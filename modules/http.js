const http = require('http');
const { emitWarning } = require('process');

//es como express
http.createServer(Router).listen(3000);
  
  
function Router (req, res) {
  console.log(req.url)
  switch (req.url) {
    case '/hola':
      res.write('hola que tal')
      res.end()
      break;
    default:
      res.write('Error 404, no se lo que quieres')
      res.end()
  }

/*   console.log(req.url);
  res.writeHead(201, {
    'content-type': 'text/plain'
  })
  res.write('hola, ya se usar HTTP de NodeJS')
  res.end(); */
}
//buena practica para saber dpmde esta cprriendo

console.log('escuchando en el puerto 3000')