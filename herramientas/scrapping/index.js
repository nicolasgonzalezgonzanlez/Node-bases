const puppeteer = require('puppeteer');

//todo puppetear funciona de forma async

//funciona todo con funciones autoejectuabas


/* 
  Esto es una funcion auto ejecutada, se crea una >> funcion anonima 
    async () => {//..}
  Se envuelve la funcion y se la convierte en una EXPRESION
  (async () => {//..})
  y por ultimo se la ejecuta en el momento 
  (async () => {//..})()
*/
(async () => {
  console.log('lanzamos navegador');

  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage()
  await page.goto('https://nodejs.org/en/')

  let titutlo1 = await page.evaluate(() => {
    const h2 = document.querySelector('h2')
    console.log(h2.innerHTML)
    return h2.innerHTML
  })

  console.log(titutlo1)
  console.log('cerramos navegador')
  browser.close()
  console.log('navegador cerrado')

})();