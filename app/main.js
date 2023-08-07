let books = []
let discountBooks
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
fetchBooks()

async function fetchBooks() {
    const response = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
    books = await response.json()

    discountBooks = applyBookDiscount(books)

    showUpBooks(discountBooks)
    settingPriceOfAllTheBooks(discountBooks)

}
