export type Produto = { //exporta para outro arquivo
    nome: string,
    valor: number
}

// class Estabelecimento {
//     private endereco: string  // js puro #
//     private setor: string
//     private produtos: Produto[]

//     constructor(endereco:string, tipo:string, produtos:Produto[]) {
//         this.endereco = endereco
//         this.setor = tipo
//         this.produtos = produtos
//     }
// }

class EstabelecimentoBase {

    private _filaDeEspera = 10
    
    constructor(
        public endereco:string,
        public setor:string,
        private produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    retornaNomeDosProdutos() { // se nao por nem public nem private defini como public
        return this.produtos.map(produto => produto.nome)
    }

    get filaDeEspera() {
        return this._filaDeEspera
    }

    set filaDeEspera(fila: number) {
        if(fila <= 0){
            return
        }
        this._filaDeEspera = fila
    }

    diminuiFilaDeEspera() {
        if(this._filaDeEspera === 0) {
            return
        }
        this._filaDeEspera -= 1
    }
}


const padaria = {
    endereco: 'Rua Dos Laranjais, 13, 1320 - bloco D',
    tipo: 'alimentação',
    produtos: [
        {nome: 'pão', valor: 0.8},
        {nome: 'arroz', valor: 10},
        {nome: 'leite', valor: 5}, 
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20},
    ],
    nomeDosProdutos() {
        return this.produtos.map(produto => produto.nome)
    },
    _filaDeEspera: 5,
    get filaDeEspera() {
        return this._filaDeEspera
    },

    set filaDeEspera(fila: number) {
        if(fila <= 0){
            return
        }
        this._filaDeEspera = fila
    }
}

Object.freeze(padaria) // Não é perfeito

const padaria2 = {
    endereco: 'Rua Dos Abacates, 13, 1320 - bloco D',
    setor: 'alimentação',
    produtos: [
        {nome: 'pãaaaao', valor: 0.8},
        {nome: 'arroz', valor: 10},
        {nome: 'leite', valor: 5}, 
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20},
    ]
}


const padaria3 = new EstabelecimentoBase( // o new pega oq tiver dentro do constructor e repassa
    'Rua Dos Abacates, 13, 1320 - bloco A',
    'alimentação', 
    [
        {nome: 'banana', valor: 8}, 
        {nome: 'beijinho', valor: 2.5},
        {nome: 'carne moída', valor: 20},
     ],
    -3
)


const padaria4 = new EstabelecimentoBase(
    'Rua Dos Morasgos, 13, 1320 - bloco A',
    'alimentação', 
    [],
    27
)


// console.log(padaria)
console.log(padaria3.retornaNomeDosProdutos())
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria4.filaDeEspera = -100
padaria4.filaDeEspera = 20
console.log(padaria4.filaDeEspera)
console.log(padaria3.endereco)
console.log(padaria3.filaDeEspera)