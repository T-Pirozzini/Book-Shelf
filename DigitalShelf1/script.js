// ADD A BOOK
const newBook = document.forms['new-book'];

newBook.addEventListener('submit', function(e){
  e.preventDefault();  
  const addTitle = newBook.querySelector('#title').value;  
  const addAuthor = newBook.querySelector('#author').value;
  const addPages = newBook.querySelector('#pages').value;   

  //CREATE ELEMENTS
  const li = document.createElement('li');  
  const bookTitle = document.createElement('span');
  const infoDiv = document.createElement('div');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const removeBtn = document.createElement('span');

  const readBtn = document.createElement('button')

  
  //ADD CONTENT    
  bookTitle.textContent = addTitle;
  bookAuthor.textContent = 'Author: ' + addAuthor;
  bookPages.textContent = 'Pages: ' + addPages;
  removeBtn.textContent = 'Remove';   
   
  //ADD CLASSES
  bookTitle.classList.add('name');
  bookAuthor.classList.add('author');
  bookPages.classList.add('pages');
  removeBtn.classList.add('remove');
  readBtn.classList.add('read');
  
  //CLEAR FORM
  newBook.reset();

  //APPEND TO DOM
  li.appendChild(bookTitle);
  li.appendChild(removeBtn);  
  infoDiv.appendChild(bookAuthor);
  infoDiv.appendChild(bookPages);  
  list.appendChild(li);
  li.appendChild(infoDiv); 

  infoDiv.appendChild(status);
  infoDiv.appendChild(checkBox);     
})


//TOGGLE READ STATUS
// readBtn.addEventListener('onClick', toggleRead = () => {
//   const btn = document.querySelector('.read');
//   btn.classList.toggle('.read');
// });


// REMOVE A BOOK
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
  if(e.target.className == 'remove'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});


//FILTER BOOKS
const searchBar = document.forms['search-bar'].querySelector('input');
  searchBar.addEventListener('keyup', function(e){
   const term = e.target.value.toLowerCase();
   const books = list.getElementsByTagName('li');
   Array.from(books).forEach(function(book){
   const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    }else{
      book.style.display = 'none';
    }
  })
})


//REBUILD PROJECT USING A CONSTRUCTOR
//Class Constructor: Library

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.booksRead = 0;
  }
};

// Second Attempt




// ADD BOOK
// const form = document.querySelector('#new-book');
// const addBtn = document.querySelector('.add-btn');

// addBtn.addEventListener('sumbit', e => {
//   e.preventDefault();
// });

// addBtn.addEventListener('click', () => {  
//   const title = form.title.value.trim();
//   const author = form.author.value.trim();
//   const pages = form.pages.value.trim();
//   if(title.length){
//     addBook(title, author, pages);
//     form.reset();
//   }
// });

// const addBook = (title, author, pages) => {
//   const submission = `
//     <li>
//       <h4 class='book-name'>${title.toUpperCase()}</h4>
//       <div>
//         <p><span class='em-bold'>Author: </span>${author}</p>
//         <p><span class='em-bold'>Pages: </span>${pages}</p>
//         <p><span class='em-bold'>Read: </span><input type='checkbox' name='checkbox'><button class='remove-btn'>REMOVE</button></p>
//       </div>
//     </li>   
//     `;
//   bookContainer.innerHTML += submission;
// };


// // REMOVE BOOK
// const removeBtn = document.querySelector('.remove-btn');
// const bookContainer = document.querySelector('.book-container');
// const book = document.querySelector('.book');

// removeBtn.addEventListener('click', e => {  
//   console.log(book, bookContainer);
//   if(e.target.classList.contains('remove-btn')){
//     book.remove();    
//   } 
// });