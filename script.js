//get the submit button 
const submitBtn = document.getElementById("btn").addEventListener("click", addBookToLibrary, (e) => {
 deleteTableBook(e)
});

//get the table elements to append a generated table
const table = document.getElementById("table")
const tbody = document.getElementById("tbody")


//empty array to store books 
let myLibrary = [{
  title: "The Hobbit", author: "J.R.R Tolkien", year: "1937", numPages: "372", status: "Read",
},
{
  title: "The Count of Monte Cristo", author: "Alexandre Dumas", year: "1846", numPages: "1276", status: "Read"
}];

displayBook()

function addBookToLibrary() {

  //get the book values from the form inputs into an object
  const book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    year: document.getElementById("year").value,
    numPages: document.getElementById("numPages").value,
    status: document.querySelector("input[name=readStatus]:checked").value,
    data: ""
    
  };

  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].data = [i] // 
  }
 
  //push the object data into the array
  myLibrary.push(book)

  //run function to delete the table
  deleteTable()

  //run function to display the books on the table
  displayBook() 

};


//creates cells, appends them to the table and fills them with the objects
function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")

    let readBtn = document.createElement("button")
    let delBtn = document.createElement("button")

    td6.classList = "btnTd"
    td5.classList = "btnTd"
    delBtn.innerText = "Delete"
    delBtn.classList = "btnDel"
    readBtn.classList = "readBtn"

    
    delBtn.setAttribute("data-index", [i])
    readBtn.setAttribute("data-status", [i] )
    readBtn.id = "status" + [i]
    tr.id = "tr" + [i]

    tbody.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    td5.appendChild(readBtn)
    td6.appendChild(delBtn)


    td1.textContent = myLibrary[i].title
    td2.textContent = myLibrary[i].author
    td3.textContent = myLibrary[i].year
    td4.textContent = myLibrary[i].numPages
    readBtn.innerText = myLibrary[i].status

    myLibrary[i].data = [i] 

  }
}

//get the input for the read status button
let readStatus = document.querySelector("#tbody").addEventListener("click", (e) => {
  changeReadStatus(e.target)
}) 

//get the input for the delete button
let deleteBtn = document.querySelector("#tbody").addEventListener("click", (e) => {
  deleteBook(e.target)
}) 

function changeReadStatus(el) {
  for (let i = 0; i < myLibrary.length; i++) {
   
    if (myLibrary[i].data == el.dataset.status && myLibrary[i].status == "Read") {

      myLibrary[i].status = "Not Read"
      el.textContent = "Not Read"

    } else if (myLibrary[i].data == el.dataset.status && myLibrary[i].status == "Not Read") {

      myLibrary[i].status = "Read"
      el.textContent = "Read"

    }
  }
}

//deletes selected book from array
function deleteBook(el) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].data  == el.dataset.index) {
        myLibrary.splice(i,1);
        //reloads the table
        deleteTableBook(el)
      }
    }
}

//removes the selected book row from the table
function deleteTableBook(el) {
  el.parentElement.parentElement.remove()
}


//removes all rows from the table except the headers
function deleteTable() {
   for (let i = 0; i < myLibrary.length; i++) {
  
    let tr = document.getElementById("tr" + [i])
    if (tr !== null) {
      tr.remove()
    } else {
    }
   }
}



//make a form to add books appear after clicking the "Click Here..." button
const toggleForm = document.getElementById('toggleForm');

toggleForm.addEventListener('click', () => {
  const form = document.getElementById('form');
  if (form.style.display === "grid") {
    form.style.display = "none"
  } else {
    form.style.display = "grid"
  }
});