function teste(...args) {
    args.forEach(value => {
        if (isNaN(value) || value < 0) console.log('Entrada inválida!')
    })
}

teste(1, 2, -1)