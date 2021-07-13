
class Data {
    // public dia: number; //por default é publica
    // private mes: number;
    //ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) { //valor default
        //this.dia = dia;
        //this.mes = mes;
        //this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);
console.log(data.mes); //da erro pois é privado

const data2 = new Data(1, 1); //não da erro