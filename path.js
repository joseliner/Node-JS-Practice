const path = require('path');

const fileLocation = path.join(___dirname, 'app.js');

const fileName = path.basename(fileLocation);

const fileExt = path.extname(fileName);

console.log(fileExt);