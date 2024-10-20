// Desestruturação de Matriz ([nome, separacaoArray] = Matriz) e operador rest(...)
const arrays = [['nome', 'idede', 'sexo'], ['patrick', '23', 'masculino'], ['joao', '22', 'masculino']]

const [colunas, ...pessoas] = arrays; // Desestruturação + rest

console.log(arrays)
console.log(colunas)
console.log(pessoas)