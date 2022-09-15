//get the button by id, when clicked run addBookToLibrary
// const submitBtn = document.getElementById("btn").addEventListener("click", addBookToLibrary);

const submitBtn = document.getElementById("btn").addEventListener("click", addBookToLibrary, (e) => {
 reloadTable(e)
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
},
// {
//   title: "2", author: "Alexandre Dumas", year: "1846", numPages: "1276", status: "Read"
// },
// {
//   title: "3", author: "Alexandre Dumas", year: "1846", numPages: "1276", status: "Read"
// },
// {
//   title: "4", author: "Alexandre Dumas", year: "1846", numPages: "1276", status: "Read"
// }

];

displayBook()


function addBookToLibrary() {

  //empty the table before adding a new book
  // reloadTable()


  //get the book data from the form inputs into an object
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
    btn.setAttribute("data-index", [i])

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

    // console.log(myLibrary[i].title)
    // myLibrary[i].data = "data-index" + [i] // data-index0
    myLibrary[i].data = [i] // 

    // console.log(myLibrary[i].data)
  }
}

function reloadTable(el) {
  // let tr = document.getElementById("table")
  el.parentElement.parentElement.remove()

  // for (let i = 0; i < myLibrary.length; i++) {
  
  //   // let tr = document.getElementById("tr" + [i])
  //   // tr.remove()
  //   el.parentElement.parentElement.remove()

  // }
}


///////////////////////////////////////////////////////////////////////////
//make a form to add books appear after clicking the "Click Here..." button
const toggleForm = document.getElementById('toggleForm');

toggleForm.addEventListener('click', () => {
  const form = document.getElementById('form');
  // toggle.style.display = "none"
  if (form.style.display === "grid") {
    form.style.display = "none"
  } else {
    form.style.display = "grid"
  }
});

///////////////////////////////////////////////////////////////////////////


// Works
let deleteBtn = document.querySelector("#tbody").addEventListener("click", (e) => {
  deleteBook(e.target)
  // console.log(e.target)
  
}) 

// function deleteBook(el) {
//   for (let i = myLibrary.length - 1; i >= 0; --i) {
//     // console.log(el.dataset.index)
//     // console.log(el.getAttribute())

//     // console.log(myLibrary[i].dataset.index)
//     console.log(myLibrary[i].data)

//     if (parseInt(myLibrary[i].data )  === el.dataset.index) {
//       console.log("hey")
//         // myLibrary.splice(i,1);
//     }
// }
// // reloadTable()
// // displayBook()

// }

function deleteBook(el) {
  for (let i = 0; i < myLibrary.length; i++) {
    // console.log(el.dataset.index) // 0
    // console.log(myLibrary[i].data) // data-index0
    // console.log(el.getAttribute("data-index")) // 0
    
    // console.log(myLibrary[i].data)


    if (myLibrary[i].data  == el.dataset.index) {
      // console.log("hey")
        myLibrary.splice(i,1);
        console.table(myLibrary)
        reloadTable(el)
      }
    }
}


function deleteTable() {
   for (let i = 0; i < myLibrary.length; i++) {
  
      //seleccionar tr adecuado si se elimina el orden entonces se rompe
    let tr = document.getElementById("tr" + [i])
    console.log(tr)
    if (tr !== null) {
      tr.remove()
    } else {
      console.log(myLibrary)
      // return

    }
    
    // table.remove()
    // tbody.remove()

   }
  
}
/////Deletes the DOM table////
// function deleteBook(el) {
//   let a = document.getElementById("tr0")
//   if(el.classList.contains("btnDel")){
//     el.parentElement.parentElement.remove();
//     myLibrary.splice()
//   }
//  reloadTable()
// }

/////
// for (let i = 0; i < myLibrary.length; i++) {
//   // const element = myLibrary[i];
//   let a = document.querySelectorAll('[data-index="{i}"]').addEventListener("click", (e) => {
//     console.log(e.target)
  
// })
// }

// document.querySelector('[data-index="{i}"]').addEventListener("click", (e) => {
//   console.log(e.target)
// }) 






// const elements1 = document.querySelectorAll(myLibrary.0);
// console.log(elements1); // 👉️ [div, div]


// Delete books    
// function a() {
// for (let i = 0; i < myLibrary.length; i++) {
//   const deleteBtn = document.querySelectorAll("data-index", [i]);
  
//   deleteBtn.forEach(btn => {
//     btn.addEventListener("click", () => deleteBook())
//   });
// }

// }

// for (let i = 0; i < myLibrary.length; i++) {
//   console.log("hey")
//   // const deleteBtn = document.querySelectorAll(`[data-id=+${i}]`)
//   const deleteBtn = document.querySelectorAll('[data-index=' + {i}+"]")
//   deleteBtn.forEach(btn => {
//     btn.addEventListener("click", () => console.log("hey"))
//   });
  
// }
// const deleteBtn = document.querySelectorAll("data-index"[i]);
  
//   deleteBtn.forEach(btn => {
//     btn.addEventListener("click", () => deleteBook())
//   });

// const deleteBtn = document.querySelectorAll("data-index"[i]);

// deleteBtn.forEach(btn => {
//   btn.addEventListener("click", () => deleteBook())
// });


// function deleteBook() {
//   console.log("hey")
// //   for (var i = myArray.length - 1; i >= 0; --i) {
// //     if (myArray[i].field == "money") {
// //         myArray.splice(i,1);
// //     }
// }

  // this.remove();
  // myLibrary.pop()
  // allDeleteBtns.parentElement.remove()
  // let a = allDeleteBtns
  // a.remove()
  // delBook = ""
  // console.log(myLibrary)


///////////////////////////////////////////////////

// deleteButton.addEventListener("click", () =>
//    document.querySelectorAll(`[data-id="${i}]`).remove()
// );

