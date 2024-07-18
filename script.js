function redirectToBookPage(element) {
    var bookId = element.getAttribute('data-book');
    switch(bookId) {
        case 'sholms':
            window.location.href = 'sholms.html';
            break;
        case 'inferno':
            window.location.href = 'inferno.html';
            break;
        default:
            console.log('Book not found');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar');
    const books = document.querySelectorAll('.book');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        books.forEach(book => {
            //TODO: add a ID to each of the title author ect. and use that to search
            const title = book.querySelector('h3').textContent.toLowerCase(); 
            const author = book.textContent.toLowerCase();                              
            const description = book.querySelector('p').textContent.toLowerCase(); 
            const year = book.querySelector('p').textContent.toLowerCase();
            const publisher = book.querySelector('p').textContent.toLowerCase(); 
            const isbn = book.querySelector('p').textContent.toLowerCase();
            const pages = book.querySelector('p').textContent.toLowerCase();
            const genre = book.querySelector('p').textContent.toLowerCase();
        // const rating = number -> stars -> find the number of stars -> convert to string -> compare with query



            if(title.includes(query) || author.includes(query) || description.includes(query) || year.includes(query) || publisher.includes(query) || isbn.includes(query) || pages.includes(query) || genre.includes(query) || rating.includes(query)) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });
});