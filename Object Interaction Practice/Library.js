class Library {
    constructor(books, patrons) {
        this.books = [];
        this.patrons = [];
    }

    addPatron(patron) {
        this.patrons.push(patron);
    }

    addBook(book) {
        this.books.push(book);
    }
}