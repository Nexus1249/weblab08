async function loadBooks() {
  // TODO 13: fetch("/books") and convert to JSON array of books
  
  const response = await fetch("/books");
  const books = await response.json();

  // TODO 14: render books into #book-list
  const bookList = document.getElementById("book-list");
  if (bookList) {
    bookList.innerHTML = "";
    books.forEach((book) => {
      const li = document.createElement("li");
      li.textContent = `${book.bookNo}: ${book.bookName}`;
      bookList.appendChild(li);
    });
  }
}

window.addEventListener("DOMContentLoaded", loadBooks);
