

const btn = document.getElementById("btn").addEventListener("click", addBookToLibrary); //get the button by id, when clicked run addBookToLibrary

let myLibrary = [   //empty array to store books 
];


function addBookToLibrary() {
  // console.log("hey") // function works

  //get the book data from the form inputs into an object
  const book = {  
  title: document.getElementById("title").value,
  author: document.getElementById("author").value,
  year: document.getElementById("year").value,
  numPages: document.getElementById("numPages").value,
  status: document.querySelector("input[name=readStatus]:checked").value
};

  myLibrary.push(book) //push the object data into the array

  displayBook() //run function to display the books on the table
};

// console.log("hey")

function displayBook () {

  //create a new table row with cells to store the new book
  let table1 = document.createElement("tr")
  let row1 = document.createElement("td")
  let row2 = document.createElement("td")
  let row3 = document.createElement("td")
  let row4 = document.createElement("td")
  let row5 = document.createElement("td")
  let row6 = document.createElement("td")
  row6.classList = "btnTd"
  let btn = document.createElement("button")
  btn.innerText = "Delete"
  btn.classList = "btnDel"




  //order the new table in the DOM
  tbody.appendChild(table1)
  table1.appendChild(row1)
  table1.appendChild(row2)
  table1.appendChild(row3)
  table1.appendChild(row4)
  table1.appendChild(row5)
  table1.appendChild(row6)
  row6.appendChild(btn)


  
  
 
  //fill the table with the objects stored in the array
  myLibrary.map(x => row1.innerText = x["title"]);
  myLibrary.map(x => row2.innerText = x["author"]);
  myLibrary.map(x => row3.innerText = x["year"]);
  myLibrary.map(x => row4.innerText = x["numPages"]);
  myLibrary.map(x => row4.innerText = x["numPages"]);
  myLibrary.map(x => row5.innerText = x["status"]);


}

const toggle = document.getElementById('toggle');
const sideShadow = document.getElementById("sidebar-shadow")

toggle.addEventListener('click', () => {
  const form = document.getElementById('form');
  // toggle.style.display = "none"
  if (form.style.display === "grid") {
  form.style.display = "none"
  } else {
  form.style.display = "grid"
  }
  // sideShadow.style.box.shadow = "none"
  // if (form.style.display === 'none') {
  //   form.style.display = 'grid';
  // } else {
  // }
});

/////////////////////////////////////
// myLibrary.push(Book)

// const book = new Book("h", "jjr", "2019", "124")
// console.log(book.title)
// console.log(book.author)
// console.log(book.year)
// console.log(book.numPages)