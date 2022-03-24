let myLibrary = [];

// book constructor
function book (title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// display objects in array on page
const displayBooks = function(myLibrary) {
    for ((i=myLibrary.length - 1); i< myLibrary.length; i++){
        const contentGrid = document.querySelector('#content-grid');
        const div =document.createElement('div');
        div.classList.add('content-card');
        div.setAttribute("data-index", `${i}`)
        const title = document.createElement('h2');
        title.innerHTML = myLibrary[i].title;
        div.appendChild(title);
        const author = document.createElement('h2');
        author.innerHTML = myLibrary[i].author;
        div.appendChild(author);
        const pages = document.createElement('h2');
        pages.innerHTML = `${myLibrary[i].pages} pages`;
        div.appendChild(pages);
        const read = document.createElement('button');
        read.classList.add('read-btn')
        read.innerHTML = myLibrary[i].read == "on" ? 'Read!': 'Not Read';
        //need to expand this read.addEventListener("click", () =>  {});
        div.appendChild(read);
        let remove = document.createElement('button');
        remove.classList.add('remove-btn');
        remove.innerHTML = `Remove`;
        remove.addEventListener("click", () => {
            contentGrid.removeChild(div);
            myLibrary.splice(div, 1);
          });
        div.appendChild(remove);
        contentGrid.appendChild(div);
    }; 
}



// show form when NEW BOOK button is clicked
const displayForm = (ev) => {
    const form = document.getElementById('add-book-form')
    if (form.style.visibility === 'hidden'){
        form.style.visibility = 'visible';
    }
    else {
        form.style.visibility = 'hidden';
    }
};

// create new book object based on form input
const submitBook = (ev) => {
    ev.preventDefault();
    let newBook = new book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read').value)
    myLibrary.push(newBook);
    document.getElementById('add-book-form').reset();
    displayBooks(myLibrary);
    displayForm();
};
  

//add Event Listeners
document.getElementById('submit-book').addEventListener('click', submitBook);
document.getElementById('add-book').addEventListener('click', displayForm);


// Functions to test manually
/*book.prototype.info = function() {
    return this.read === true ? (`${this.title} by ${this.author}, ${this.pages} pages, read"`): (`${this.title} by ${this.author}, ${this.pages} pages, not yet read"`);
}

const book1 = new book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const book2 = new book('Harry Potter', 'J.K. Rowling', 300, true);

add variable to array
function addBookToLibrary(book) {
    myLibrary.push(book);
    return(myLibrary);
} */
