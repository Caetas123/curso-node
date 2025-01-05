type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<{nome:string, idadeEmMeses: number}>

function MixinVoa<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor (...args: any) {
            super(args[0])
        }
        voa() {
            console.log(`${this.nome} voou`)
        }
    }
}

function MixinNada<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor (...args: any) {
            super(args[0])
        }
        nada() {
            console.log(`${this.nome} nadou`)
        }
    }
}

function MixinAnda<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor (...args: any) {
            super(args[0])
        }
        anda() {
            console.log(`${this.nome} andou`)
        }
    }
}

interface AnimalInterface {
    nome: string
    idadeEmMeses: number
    comer: () => void
}

class Animal implements AnimalInterface {
    public nome: string
    public idadeEmMeses: number
    constructor({nome, idadeEmMeses} : {nome: string,idadeEmMeses: number}) {
        this.nome = nome
        this.idadeEmMeses = idadeEmMeses
    }

    comer(): void {
        console.log(`${this.nome} se alimentou`)
    }

}


class AnimalVoadorAndadorNadador extends MixinNada(MixinAnda(MixinVoa(Animal))) {}
class AnimalVoadorAndador extends MixinNada(MixinVoa(Animal)) {}


const cachorro = new (MixinAnda(Animal))({nome:'Mel', idadeEmMeses: 10})
const mosca = new (MixinVoa(Animal))({nome: 'Mosca X', idadeEmMeses: 0.1})
const pato = new (MixinNada(MixinAnda(MixinVoa(Animal))))({
    nome: 'Bruce', idadeEmMeses: 36})
const pato2 = new AnimalVoadorAndadorNadador ({
    nome: 'Bruc333e', idadeEmMeses: 40
})

cachorro.comer() 
cachorro.anda()
mosca.comer()
mosca.voa()
pato.comer()
pato.voa()
pato.anda()
pato.nada()
pato2.comer()
pato2.voa()
pato2.anda()
pato2.nada()