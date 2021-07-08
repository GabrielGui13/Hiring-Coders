const reverseString = (string) => {
    let retorno = ''
    for (let i = string.length - 1; i >= 0; i--) {
        retorno += string[i]
        console.log(retorno)
    }
}

reverseString('Gabriel')