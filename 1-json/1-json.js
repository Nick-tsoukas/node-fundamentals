// creates a file if it doesn't exists, logs it a data stream, and then logs it in human readable format
const fs = require('fs');
const chalk = require('chalk')
const log = console.log;
const path = './1-json.json';

const book = {
    title: 'Nodejs the right way',
    author: 'Node ninja'
};

const jsonBook = JSON.stringify(book);

// check to see if file exist if not create it 
function createFile(path) {
    if(!fs.existsSync(path)){
        log('creating file to :::', path);
        return fs.writeFileSync('./1-json.json', jsonBook);
    } 
    else log('The file already exists');
};

// create and logs binary stream of data from file and then logs data in human readable format
function outPutBuffer(path){
    const dataBuffer = fs.readFileSync(path);
    const readable = dataBuffer.toString();
    log(chalk.red(dataBuffer));
    log('===============')
    log(chalk.green(readable))
}

createFile(path);
outPutBuffer(path);

