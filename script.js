

let myLibrary = [
  // prototype = Book
];

function Book(title, author, year, numPages) {
  this.title = title
  this.author = author
  this.year = year
  this.numPages = numPages
};

function addBookToLibrary() {

  //take user input
  let userInput = prompt("a", "a")
  //store new book on the array
  myLibrary.push(userInput)
};

// addBookToLibrary()
