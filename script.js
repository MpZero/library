//get the button by id, when clicked run addBookToLibrary
const submitBtn = document.getElementById("btn").addEventListener("click", addBookToLibrary);

const table = document.getElementById("table")
const tbody = document.getElementById("tbody")

//empty array to store books 
let myLibrary = [{
  title: "The Hobbit", author: "J.R.R Tolkien", year: "1937", numPages: "372", status: "Read",
},
{
  title: "The Count of Monte Cristo", author: "Alexandre Dumas", year: "1846", numPages: "1276", status: "Read"
}

];

displayBook()


function addBookToLibrary() {

  //empty the table before adding a new book
  reloadTable()


  //get the book data from the form inputs into an object
  const book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    year: document.getElementById("year").value,
    numPages: document.getElementById("numPages").value,
    status: document.querySelector("input[name=readStatus]:checked").value
  };

  //push the object data into the array
  myLibrary.push(book)

  //run function to display the books on the table
  displayBook() 

};


function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")


    td6.classList = "btnTd"
    let btn = document.createElement("button")
    btn.innerText = "Delete"
    btn.classList = "btnDel"
    // btn.id = "del"
    // btn.setAttribute("data-index", 0)

    tr.id = "tr" + [i]

    tbody.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    td6.appendChild(btn)


    td1.innerHTML = myLibrary[i].title
    td2.innerHTML = myLibrary[i].author
    td3.innerHTML = myLibrary[i].year
    td4.innerHTML = myLibrary[i].numPages
    td5.innerHTML = myLibrary[i].status

    console.log(myLibrary[i].title)
  }
}

function reloadTable() {
  // let tr = document.getElementById("table")
  for (let i = 0; i < myLibrary.length; i++) {

    let a = document.getElementById("tr" + [i])
    a.remove()

  }
}
// reloadTable()




//make a form to add books appear after clicking the "Click Here..." button
const toggleForm = document.getElementById('toggleForm');
// const sideShadow = document.getElementById("sidebar-shadow")

toggleForm.addEventListener('click', () => {
  const form = document.getElementById('form');
  // toggle.style.display = "none"
  if (form.style.display === "grid") {
    form.style.display = "none"
  } else {
    form.style.display = "grid"
  }
});




//Delete books    
// const deleteBtn = document.querySelectorAll(".yo");

// deleteBtn.forEach(btn => {
//   btn.addEventListener("click", () => deleteBook())
// });


// function deleteBook() {
//   this.remove();
//   // myLibrary.pop()
//   // allDeleteBtns.parentElement.remove()
//   // let a = allDeleteBtns
//   // a.remove()
//   // delBook = ""
//   console.log(myLibrary)
// }

///////////////////////////////////////////////////

// deleteButton.addEventListener("click", () =>
//    document.querySelectorAll(`[data-id="${i}]`).remove()
// );


// function displayBook () {

//   //create a new table row with cells to store the new book
//   let table1 = document.createElement("tr")
//   let td = document.createElement("td")
//   let td = document.createElement("td")
//   let td = document.createElement("td")
//   let td = document.createElement("td")
//   let td = document.createElement("td")
//   let td = document.createElement("td")
//   row6.classList = "btnTd"
//   let btn = document.createElement("button")
//   btn.innerText = "Delete"
//   btn.classList = "btnDel"
//   btn.id = "del"
//   btn.setAttribute("data-index", 0)



//   //append the new table to the DOM
//   tbody.appendChild(table1)
//   table1.appendChild(row1)
//   table1.appendChild(row2)
//   table1.appendChild(row3)
//   table1.appendChild(row4)
//   table1.appendChild(row5)
//   table1.appendChild(row6)
//   row6.appendChild(btn)


//   //fill the table with the objects stored in the array
//   myLibrary.map(x => row1.innerText = x["title"]);
//   myLibrary.map(x => row2.innerText = x["author"]);
//   myLibrary.map(x => row3.innerText = x["year"]);
//   myLibrary.map(x => row4.innerText = x["numPages"]);
//   myLibrary.map(x => row4.innerText = x["numPages"]);
//   myLibrary.map(x => row5.innerText = x["status"]);


// }