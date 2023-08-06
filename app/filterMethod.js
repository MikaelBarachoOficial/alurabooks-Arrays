const btnFilter = document.querySelectorAll('.btn');

btnFilter.forEach(btn => {
    if (btn.value) {
        btn.addEventListener('click', () => {
            bookFilter(btn.value)
        })
    }
})

function bookFilter(category) {

    let filteredBooks = discountBooks.filter(book => {
        return book.categoria == category
    })

    showUpBooks(filteredBooks)
    
}