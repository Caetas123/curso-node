/* Neste exercicio, seu objetivo e desenvolver uma classe Carro que
modele as propriedades e descreva suas informações 
Requisitos:
A classe deve ter um construtor para definir as propriedades modelo, ano e cor.
Implementar um método info() que imprime todos os detalhes do carro.
Por exemplo, se o veículo for um Tempra de cor branca e ano 2001, o resultado impresso será:
Tempra branco ano 2001 */

class Carro {

	constructor({modelo, ano, cor}) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    info() {
        return `${this.modelo} ${this.cor} ano ${this.ano}`;
    }
}

const fox = new Carro ({
    modelo: 'Fox',
    ano: '2001',
    cor: 'Preto'
})

console.log(fox.info())

/* Não modifique o código abaixo! */
export function execute(car) { return new Carro(car).info(); }
