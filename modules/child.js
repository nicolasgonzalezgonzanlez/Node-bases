const { exec, spawn } = require('child_process');


/* exec('npx node console.js', (err, stdout, sterr) => {
  if (err) {
    console.log(err);
    return false
  }
  console.log(stdout)
}) */

console.log('temrino')

let proceso = spawn('cmd.exe')
