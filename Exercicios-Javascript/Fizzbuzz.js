const fizzBuzz = (value) => {
    if (isNaN(value)) console.log('Nao eh um numero')
    else if (value % 5 == 0 && value % 3 == 0) console.log('Fizzbuzz') 
    else if (value % 3 == 0) console.log('Fizz') 
    else if (value % 5 == 0) console.log('Buzz') 
    else console.log(value)
}

fizzBuzz('oi')