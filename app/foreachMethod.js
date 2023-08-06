function showUpBooks (bookList) {

    const booksField = document.getElementById('livros')
    booksField.innerHTML = ''

    bookList.forEach(book => {

      let bookAvailability = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        
      booksField.innerHTML += `<div class="livro">
        <img class="${bookAvailability}" src="${book.imagem}" alt="${book.alt}" />
        <h2 class="livro__titulo">
          ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco" style="color:green">R$${book.precoDisconto.toFixed(2)}</p>
        <p class="livro__preco" id="preco" style="text-decoration: line-through;">R$${book.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>`
      
    });

}