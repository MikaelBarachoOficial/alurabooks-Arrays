const btnFilter = document.querySelectorAll('.btn');

btnFilter.forEach(btn => {
    if (btn.value) {
        btn.addEventListener('click', () => {
            bookFilter(btn.value, discountBooks)
        })
    }
})

function bookFilter(category, bookList) {

    let filteredBooks = category == 'disponiveis' ?
        settingAvailableBooks(bookList) : selectingBooksbyItsCategory(category, bookList)

    showUpBooks(filteredBooks)

}

function settingAvailableBooks(bookList) {
    return bookList.filter(book => book.quantidade > 0)
}

function selectingBooksbyItsCategory(category, bookList) {
    return bookList.filter(book => book.categoria == category)
}