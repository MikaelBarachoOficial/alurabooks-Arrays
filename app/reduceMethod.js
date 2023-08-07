function settingPriceOfAllTheBooks(bookList) {

    const AllAvailableBooksValue = document.getElementById('valor')
    let avaibleBooks = settingAvailableBooks(bookList)

    let allAvailableBooksValue = avaibleBooks.reduce((acc, book) => {
        return acc + book.precoDesconto
    }, 0)


    AllAvailableBooksValue.textContent = allAvailableBooksValue.toFixed(2);

}