let botao = document.getElementById('add')
let form = document.querySelector('[data-new-list-form]')
let input = document.querySelector('[data-new-list-input]')
let list = document.querySelector('[data-lists]')

window.addEventListener('onkeypress', event => {
    event.preventDefault()

    if (event.keyCode === 13) {
        form.submit()
    }
})

form.addEventListener('submit', event => {
    event.preventDefault()
    inserirTexto()

})

function inserirTexto() {
    let texto = input.value
    if (texto.trim() === '') return
    var li = document.createElement('li')
    li.innerHTML = texto
    list.appendChild(li)
    input.value = ''
}
