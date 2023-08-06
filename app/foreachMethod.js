function showUpBooks (bookList) {

  console.log(bookList)

    const booksField = document.getElementById('livros')

    bookList.forEach(book => {
        
        booksField.innerHTML += `<div class="livro">
        <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
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