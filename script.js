// target elements on DOM
const body = document.body;
const container = document.querySelector(".container");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const addBookButton = document.querySelector('.addBookButton');
const form = document.querySelector('#form');

// display for function
function displayForm() {
    form.style.display = "initial";
}

//shows the form on click
addBookButton.addEventListener('click', displayForm);

// adds book to myLibrary
function addBook(book) {
    // check if anything is blank
    if ((author.value == "") || (title.value == "") || (pages.value == "")) {
        return;
    }
    myLibrary.push(book);
    // resets form when submitted
    form.reset();
}

// initialize empty library
let myLibrary = [];

// display library
function display(array) {
    array.forEach(object => {
        for (let key in object) {
            let newDiv = document.createElement('div');
            newDiv.textContent = `${key}: ${object[key]}`;
            container.append(newDiv); 
        }
    });
}

// reset displays
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
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
    let book = new Book(title.value, author.value, pages.value)
    addBook(book);
    display(myLibrary);
}

// display books on scren
const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    removeAllChildNodes(container);
    addBookToLibrary();

})