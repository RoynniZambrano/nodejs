const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const writeToFile = (name) => {
    fs.writeFile('filename.txt', `Hello: ${name}`, 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}


rl.question('What is your name? ', (answer) => {
    writeToFile(answer);
    rl.close();
});