let botao = document.getElementById('add')

function adicionarElemento() {
    let input = document.querySelector('[data-new-list-input]')
    let texto = input.value
    console.log(texto)
}

botao.addEventListener('click', adicionarElemento)