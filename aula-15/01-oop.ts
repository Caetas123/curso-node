import { Produto } from "../aula-14/001-oop"

interface EstabelecimentoInterface {
    endereco: string
    setor: string // Produto é privado por isso não está aq
    filaDeEspera: number
    retornaNomeDosProdutos: () => string[]
    diminuiFilaDeEspera(): void
}

interface ReceitaInterface {
    remedios: string[]
    identificacaoDoMedico: string
}

interface Remedio extends Produto {
    receitaObrigatoria?: boolean
}

interface FarmaciaInterface extends EstabelecimentoInterface{
    compraRemedioPrescrito: (
        receita: ReceitaInterface, produtosAComprar: string[]
     ) => void
}


class Estabelecimento implements EstabelecimentoInterface{

    protected _filaDeEspera = 10
    
    constructor(
        public endereco:string,
        public setor:string,
        protected produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    retornaNomeDosProdutos(): string[] { // se nao por nem public nem private defini como public
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

class Farmacia extends Estabelecimento implements FarmaciaInterface{ // extend herda ass coisas
    
    constructor(
        public endereco:string,
        public setor:string,
        protected produtos: Remedio[], // protected deixa as classe que herdam tenha acesso a elas mas n deixa vazar  para fora para o objeto
        filaDeEspera?: number
    ) {
        super(endereco, setor, produtos, filaDeEspera)
    }

    public compraRemedioPrescrito(
        receita: ReceitaInterface, 
        produtosAComprar: string[]
        ): void {
        const remediosDisponiveis = this.produtos.filter(
            produto => produtosAComprar.includes(produto.nome))

        if(remediosDisponiveis.length === 0) {
            console.log('Infelizmente não temos estoque')
        }

        const remediosAutorizados = remediosDisponiveis.filter(
            produto => 
                !produto.receitaObrigatoria ? true: 
                receita.remedios.includes(produto.nome)
        )
        
        console.log({remediosDisponiveis})
        console.log({remediosAutorizados})
    }
}


const supermercado = new Estabelecimento( // o new pega oq tiver dentro do constructor e repassa
    'Rua Dos Abacates, 13, 1320 - bloco A',
    'alimentação', 
    [
        {nome: 'banana', valor: 8}, 
        {nome: 'beijinho', valor: 2.5},
        {nome: 'carne moída', valor: 20},
     ],
    25
)

const farmacia = new Farmacia( // o new pega oq tiver dentro do constructor e repassa
    'Rua Dos Pinhais, 13, 1320 - bloco F',
    'farmaceutico', 
    [
        {nome: 'aspirina', valor: 8}, 
        {nome: 'remedio controlado 1', valor: 80, receitaObrigatoria: true},
        {nome: 'remedio controlado 2', valor: 80, receitaObrigatoria: true},
        {nome: 'vitamina C', valor: 20},
        {nome: 'creme hidratante', valor: 15}
     ],
)

farmacia.compraRemedioPrescrito({
    remedios: ['remedio controlado 1'],
    identificacaoDoMedico: '123-456-111'
}, ['aspirina', 'remedio controlado 1', 'shampoo'])