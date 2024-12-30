// const aluno1 = 'Joana'
// const aluno2 = 'Cassia'
// const aluno3 = 'Kevin'
// const nomeDeAlunos = ['Joana', 'Cassia', 3, 'Kevin', NaN, 2.6, [10, false]] = Não faz sentido trabalhar assim

const numerosPrimos = [1,2,3,5,7]

{
    const nomeDeAlunos = ['Joana', 'Cassia', 'Kevin'] //Só defini dentro do escopo
    {
        console.log(nomeDeAlunos) // Posso printar ele, porque puis em um escopo mais interno
        const condicoesDeTempo = ['Chuvoso', 'Ensolarado', 'Sol']
        console.log(condicoesDeTempo)
    }
}

console.log(numerosPrimos)