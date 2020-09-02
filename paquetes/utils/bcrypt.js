const bcrypt = require('bcrypt');

//queresmos una pass
//Paso numero cifrar

const password = 'perruno';

bcrypt.hash(password, 5, (err, hash) => {
  console.log(hash)

  bcrypt.compare(password, hash, (err, result) => {
    console.log(err)
    console.log(result)
  })  
});

