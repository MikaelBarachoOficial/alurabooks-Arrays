function applyBookDiscount (bookList) {
    let discount = 0.3

    let discountBookList = bookList.map(book => {
        return {...book, precoDisconto: book.preco - (book.preco * discount)}
    })

    return discountBookList
}