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