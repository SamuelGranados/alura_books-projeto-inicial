let livros = []
const endpointDaPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaPI()

async function getBuscarLivrosDaPI() {
    const res = await fetch(endpointDaPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}