//trocar todo '' por prompt()
//trocar todo console.log() por alert()

var entrada = ''

switch (entrada.toLowerCase()) {
    case 'imc':
        console.log(calcularIMC())
        break
    case 'area':
        console.log(calcularArea())
        break
    case 'ano_bissexto':
        console.log(calcularAnoBissexto())
        break
    case 'raizes':
        console.log(calcularRaizes())
        break
    case 'porcentagem':
        console.log(calcularPorcentagem())
        break
    default:
        console.log('Entrada inválida!')
}

//calculo do imc
function calcularIMC() {
    var altura = ''
    var massa = ''

    //validacao das entradas
    if ((isNaN(altura) || altura < 0) || (isNaN(massa) || massa < 0)) return 'Entrada inválida!'
    
    var imc = massa / Math.pow(altura, 2)

    if (imc <= 16.9) return 'Muito abaixo do peso'
    else if (imc >= 17 && imc <= 18.4) return 'Abaixo do peso'
    else if (imc >= 18.5 && imc <= 24.9) return 'Peso normal'
    else if (imc >= 25 && imc <= 29.9) return 'Acima do peso'
    else if (imc >= 30 && imc <= 34.9) return 'Obesidade Grau I'
    else if (imc >= 35 && imc <= 40) return 'Obesidade Grau II'
    else return 'Obesidade Grau III'
}

//calculo da area do triangulo, retangulo ou circulo
function calcularArea() {
    var forma = ''
    var area = 0

    if (forma === 'triangulo') {
        var base = ''
        var altura = ''

        if ((isNaN(base) || base < 0) || (isNaN(altura) || altura < 0)) return 'Entrada inválida!'

        area = (base * altura) / 2
    }
    else if (forma === 'retangulo') {
        var base = ''
        var altura = ''

        if ((isNaN(base) || base < 0) || (isNaN(altura) || altura < 0)) return 'Entrada inválida!'

        area = base * altura
    }
    else if (forma === 'circulo') {
        var raio = ''

        if (isNaN(raio) || raio < 0) return 'Entrada inválida!'

        area = Math.PI * Math.pow(raio, 2)
    }
    else return 'Entrada inválida!'

    return `Área = ${area.toFixed(2)} m2`
}

//calculo do ano bissexto
function calcularAnoBissexto() {
    var ano = prompt()

    //validacao das entradas
    if (isNaN(ano) || ano < 0) return 'Entrada inválida!'


    if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)) {
        return `O ano ${ano} é bissexto`
    }
    else {
        return `O ano ${ano} não é bissexto`
    }
}

function calcularRaizes() {
    var a = 0
    var b = 0
    var c = 0

    var delta = Math.pow(b,2) - (4 * a * c)

    //validacao do delta
    if (delta < 0) return 'Raizes complexas' 

    var x1 = (-b + Math.sqrt(delta)) / (2 * a)
    var x2 = (-b - Math.sqrt(delta)) / (2 * a)

    return `x1 = ${x1.toFixed(2)}\nx2 = ${x2.toFixed(2)}`
}

function calcularPorcentagem() {
    var p = ''
    var base = ''

    //validacao das entradas
    if (isNaN(base) || base < 0) return 'Entrada inválida!'

    var va = base * (1 + p / 100)

    if (p > 0) return `O valor ${base} com juros de ${Math.abs(p)}% será ${va.toFixed(2)}`
    else if (p < 0) return `O valor ${base} com desconto de ${Math.abs(p)}% será ${va.toFixed(2)}`
    else return 'Entrada inválida!'
}