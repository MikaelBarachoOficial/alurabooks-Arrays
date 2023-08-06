let sortedBylowerOrHigherPrice;
const btnSortByPrice = document.getElementById('btnOrdenarPorPreco');

btnSortByPrice.addEventListener('click', () => {
    let sortedBooks

    if (sortedBylowerOrHigherPrice == 'lower') {

        sortedBooks = discountBooks.sort((a, b) => b.preco - a.preco)
        btnSortByPrice.textContent = 'ORDENAR POR MENOR PREÇO'
        sortedBylowerOrHigherPrice = 'higher'

    } else {

        sortedBooks = discountBooks.sort((a, b) => a.preco - b.preco)
        btnSortByPrice.textContent = 'ORDENAR POR MAIOR PREÇO'
        sortedBylowerOrHigherPrice = 'lower'

    }

    showUpBooks(sortedBooks)
})