class BookList {
    constructor() {
        this.books = []
        this.favoriteBook = ""
    }
    addBook(title, author) {
        this.books.push({ title, author })
    }
    setFavoriteBook(title) {
        this.favoriteBook = title
    }
    getBooksList() {
        this.books.forEach(book => {
            console.log(`${book.title}, muallif: ${book.author}`)
        })
    }
    getFavoriteBook() {
        console.log(`Sevimli kitob: ${this.favoriteBook || "hali tanlanmagan"}`)
    }
}
let myBooks = new BookList()
myBooks.addBook("Oq Kema", "Chingiz Aytmatov")
myBooks.addBook("Hamsa", "Alisher Navoiy")
myBooks.setFavoriteBook("Oq Kema")
myBooks.getBooksList()
myBooks.getFavoriteBook()
