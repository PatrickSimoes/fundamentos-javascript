// O desafio era fazer uma função que vai receber um nome, o nome deve ser buscado e caso encontre ele deve retornar o nome + media
const nomesAlunos = ['Patrick', 'Pedrinho', 'Paulo']

const medias = [10, 9 , 8]
const alunosNotas = [nomesAlunos, medias]

function buscaNome(name) {
    let encontrado = false
    
    let encotnradoMedia = '';
    
    for(let i = 0 ; i < nomesAlunos.length; i++){
        if(alunosNotas[0][i] == name) {
            encotnradoMedia = alunosNotas[1][i] 
            encontrado = true
            i = nomesAlunos.length
        }
    }

    if(encontrado = true) {
        console.log(`Aluno ${name} Encontrado: A nota dele é ${encotnradoMedia}`)
    } else {
        console.log('Aluno não encontrado');
    }
}

//buscaNome('Paulo')

function buscaNomeIncludes(name) {
    if(alunosNotas[0].includes(name)) {
        index = alunosNotas[0].indexOf(name)
        
        console.log(`Aluno ${name} encontrado: Média ${alunosNotas[1][index]}`)
    } else {
        console.log(`Aluno Não encontrado`)
    }
}

buscaNomeIncludes('Patrick')