import { Product } from "./01-produto";

const product1: Readonly<Product> = { // nao deixa modificar as propriedades
    name: 'Pair of Socks',
    amountInStock: 100,
    unitValue: 5,
}

// product1.name = 'Socks'

const productAllOptional: Partial<Product> = { // Todas as propiedades ficaram opcionais com o partial
    unitValue: 20
}

const productAllRequired: Required<Product> = { //todas obrigatorias
    name: 'Jacket',
    amountInStock: 30,
    unitValue: 100,
    barCode: 'askljdjklasdkjlaskjdlaskjldjkl'
}

const productOmitStockAndBarCode: Omit<Product, // Omite alguma coisa para nao ser necessario usar
"amountInStock" | "barCode"> = {
    name: 'Shorts',
    unitValue: 80,
}

const productOnlyNameAndValue: Pick<Product, // O pick deixa Apenas as quelas propriedades escolhidas/listadas nele
"name" | "unitValue"> = {
    name: 'Shorts',
    unitValue: 80,
}