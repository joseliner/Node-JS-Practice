const fs = require('fs');

// fs.writeFile('message.txt', 'Hey node', (err) => {
//     if(err) throw err;

//     console.log('file has been written');
// });

fs.readFile('./message.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});