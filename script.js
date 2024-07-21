function redirectToBookPage(element) {
    var bookId = element.getAttribute('data-book');
    switch(bookId) {
        case 'sholms':
            window.location.href = '.BookReviews/Sherlock Holmes/sholms.html';
            break;
        case 'inferno':
            window.location.href = './BookReviews/Inferno/inferno.html';
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
            const title = book.querySelector('.title').textContent.toLowerCase(); 
            const author = book.querySelector('.author').textContent.toLowerCase();                              
            const reviewer = book.querySelector('.reviewer').textContent.toLowerCase();
            const pages = book.querySelector('.pages').textContent.toLowerCase();
            const yearwritten = book.querySelector('.yearwritten').textContent.toLowerCase();
            const publisher = book.querySelector('.publisher').textContent.toLowerCase();
            const genre = book.querySelector('.genre').textContent.toLowerCase();
            const isbn = book.querySelector('.isbn').textContent.toLowerCase();
            const tags = book.querySelector('.tags').textContent.toLowerCase();
            const date = book.querySelector('.date-reviewed').textContent.toLowerCase();
            // const rating = number -> stars -> find the number of stars -> convert to string -> compare with query

            if(title.includes(query) || author.includes(query) || reviewer.includes(query) || pages.includes(query) || yearwritten.includes(query) || publisher.includes(query) || genre.includes(query) || tags.includes(query) || date.includes(query) || isbn.includes(query)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
           
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeLink = document.querySelector('link[href*="style"]'); // Assuming there's only one stylesheet link that includes 'style' in its href

    themeSwitcher.addEventListener('click', function() {
        if (themeLink.href.includes('lightstyle.css')) {
            themeLink.href = themeLink.href.replace('lightstyle.css', 'darkstyle.css');
        } else {
            themeLink.href = themeLink.href.replace('darkstyle.css', 'lightstyle.css');
        }
    });
});