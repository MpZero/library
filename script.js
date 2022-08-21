const btn = document.getElementById("btn").addEventListener("click", addBookToLibrary);

let myLibrary = [
];


function addBookToLibrary() {
  // console.log("hey") // function works
  const book = {
  title: document.getElementById("title").value,
  author: document.getElementById("author").value,
  year: document.getElementById("year").value,
  numPages: document.getElementById("numPages").value,
};

  myLibrary.push(book)

  displayBook()
};


function displayBook () {
  // console.log("hey")
  let table1 = document.createElement("tr")
  let row1 = document.createElement("td")
  let row2 = document.createElement("td")
  let row3 = document.createElement("td")
  let row4 = document.createElement("td")

  tbody.appendChild(table1)
  table1.appendChild(row1)
  table1.appendChild(row2)
  table1.appendChild(row3)
  table1.appendChild(row4)
 

  myLibrary.map(x => row1.innerText = x["title"]);
  myLibrary.map(x => row2.innerText = x["author"]);
  myLibrary.map(x => row3.innerText = x["year"]);
  myLibrary.map(x => row4.innerText = x["numPages"]);
}

/////////////////////////////////////
// myLibrary.push(Book)

// const book = new Book("h", "jjr", "2019", "124")
// console.log(book.title)
// console.log(book.author)
// console.log(book.year)
// console.log(book.numPages)