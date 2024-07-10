function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
      .then(response => {
        if (!response.ok) {
          // If the response status is not OK,create and throw an error
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response to JSON
        return response.json(); 
      })
      // Call renderBooks with the parsed data
      .then(data => renderBooks(data)) 
      // Handle any errors
      .catch(error => console.error('Error fetching books:', error)); 
  }
  
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
