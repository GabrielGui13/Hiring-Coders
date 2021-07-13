// Boolean
const contaPaga: boolean = false;


// Number
const idade: number = 23;
const avaliacao: number = 4.5;


// String
const nome: string = 'Gabriel';


// Array
const idades: number[] = [23, 28, 45, 32];
const idades2: Array<number> = [23, 28, 45, 32];


// Tuple
let jogadores: [string, number, boolean];
jogadores = ['Gabriel', 18, true];


// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Reprovado = '003'
}
const statusApr: StatusAprovacao = StatusAprovacao.Aprovado;


// Any
const retornoAPI: any[] = [123, 'Gabriel', false];
const retornoAPI2: any = {
	// ...
}


// Void
function printarNaTela (msg: string): void {
	console.log(msg);
}


// Null e Undefined
const u: undefined = undefined
const n: null = null


// Object
function criar(objeto: object) {
	// ...
}
criar ({
	propridade: 1
})
	// criar('Gabriel') => da erro


// Never
function loopInfinito(): never {
	while (true) { }
}

function erro (mensagem: string): never {
	throw new Error(mensagem);
}

function falha (): never {
	return erro('Algo falhou');
}


// Union Types
const nota: string | number = 5;
function exibirNota (nota: number | string | boolean) { //ou number ou string
	console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);
exibirNota(true);


// Alias
type Funcionario = {
	nome: string;
	sobrenome: string;
	dataNascimento: Date;
}

	// type Funcionarios = Array<Funcionario> /*| number | boolean*/;

const funcionarios: Funcionario[] = [{
	nome: 'Gabriel',
	sobrenome: 'Viana',
	dataNascimento: new Date()
}, {
	nome: 'Fulano',
	sobrenome: 'Viana',
	dataNascimento: new Date()
}];

function tratarFuncionarios (funcionarios: Funcionario[]) {
	for (let funcionario of funcionarios) {
		console.log('Nome do funcionário: ' + funcionario.nome)	
	}
}


// Valores opcionais ou nulos
let altura: number | null = 1.6;
altura = null; //desativar strictNullChecks para funcionar, e tirar o null de cima

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; // ? indica opcional
}

const contato: Contato = {
    nome: 'Gabriel',
    telefone1: '1906175693'
}


// Type Assertion
const minhaIdade: any = 23;
minhaIdade as number //ts vai começar a entender como number
    //<number>minhaIdade

const input = document.getElementById('numero1') as HTMLInputElement;
const input2 = <HTMLInputElement>document.getElementById('numeronumero2');
console.log(input.value)