
function Book(title, author, isbn, del) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.del = del;
  }

  function UI() {}

  UI.prototype.addBookToList = function (book) {
    
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
   
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">${book.del}</td>
 `;
    list.appendChild(row);
  };

   UI.prototype.removeBookFromList = function(el){
 if(className="delete"){
   el.parentElement.parentElement.remove()
 }
}

  UI.prototype.showAlert = function (msg, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
  
    div.appendChild(document.createTextNode(msg));
  
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
  
    container.insertBefore(div, form);
  
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);

  };
  
  UI.prototype.clearFields = function () {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  };

  document.getElementById("book-form").addEventListener("submit", (e) => {
    const title1 = document.getElementById("title").value,
      author1 = document.getElementById("author").value,
      isbn1 = document.getElementById("isbn").value;
      del1="X";
 
    const book = new Book(title1, author1, isbn1, del1);
    const ui = new UI();
  
    if (title1 === "" || author1 === "" || isbn1 === "") {
      ui.showAlert("Please fill in all fields!", "error");
    } else {
      ui.addBookToList(book);
      ui.showAlert("Book added!", "success");
      ui.clearFields();
    }

document.getElementById("book-list").addEventListener("click", (e) => {
    ui.removeBookFromList(e.target);

    // ui.showAlert('Book Removed', 'success');
  })

 e.preventDefault();
  });




  
