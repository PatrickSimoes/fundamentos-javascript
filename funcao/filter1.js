const nomes = ['Patrick', 'Marielly', 'Sidinei', 'João', 'Bruno', 'Alan'];

console.log('Nomes dos Usuários: '+nomes);

const buscaUsuarios = (buscar) => {
    return nomes.filter(nome => nome.toLowerCase().includes(buscar.toLowerCase()));
}

console.log(buscaUsuarios('y'));