// Filtrando Títulos de Livros
function filtrarLivros(livros) {
    return livros
        .filter(livro => livro.autor.length > 5)
        .map(livro => livro.titulo);
}
const livros = [
    { titulo: "Livro A", autor: "Autor Longo" },
    { titulo: "Livro B", autor: "A" }
];
console.log(filtrarLivros(livros)); // ["Livro A"]
