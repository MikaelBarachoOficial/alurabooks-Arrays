const btnFilter = document.querySelectorAll('.btn');

btnFilter.forEach(btn => {
    btn.addEventListener('click', () => {
        bookFilter(btn.value)
    })
})

function bookFilter(category) {

    let filteredBooks = discountBooks.filter(book => {
        return book.categoria == category
    })
    console.table(filteredBooks)
    showUpBooks(filteredBooks)
    
}