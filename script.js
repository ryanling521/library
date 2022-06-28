// target elements on DOM
const body = document.body;
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");

// adds book to myLibrary
function addBook(book) {
    myLibrary.push(book);
}

// initialize empty library
let myLibrary = [];

// loops through myLibrary array
function loopArray(array) {
    array.forEach(element => {
        let newDiv = document.createElement('div');
        newDiv.textContent = element;
        body.append(newDiv);
    });
}

function Book(title, author, pages) { //read
    this.title = title
    this.author = author
    this.pages = pages
    // this.read = read
    // if (read == 'yes') {
    //     this.info = function() {
    //     console.log(`${title} by ${author}, ${pages} pages, already read`)
    //     }
    // } else {
    //     this.info = function() {
    //     console.log(`${title} by ${author}, ${pages} pages, not yet read`)
    //     }
    // }
}

function addBookToLibrary() {
  // do stuff here
}

// display books on scren

const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    let book = new Book(title.value, author.value, pages.value)
    console.log(book);

})