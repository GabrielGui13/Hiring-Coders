 const fetch = require('node-fetch')

class Cielo {
    static compra(params) {    
        
        return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
            method: 'post',
            body:    JSON.stringify(params),
            headers: { 
                'Content-Type': 'application/json',
                'MerchantId': 'fccdd2de-39ea-4699-a592-a6d28d541f69',
                'MerchantKey': 'AYVJPKMQHLWTJOPOIKWOAUNOLQZGPKVKZZBWRTMB'
            },
        })
        .then(res => res.json());
    }
}

module.exports = Cielo