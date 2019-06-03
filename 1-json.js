//  this script takes a javascript object an parses it to json then back to a js object, and then logs it to a console.

const log = console.log;
const book = { 
    title: "This is a book title",
    author: "Kool Kat"
}

//  the method called creates a json object from a Javascript object
const jsonBook = JSON.stringify(book);

const parsedBook = JSON.parse(jsonBook);

log("this is json " , jsonBook);
log('=====================');
log('This converts json to a Javascript Object:: ', typeof(parsedBook), parsedBook )


