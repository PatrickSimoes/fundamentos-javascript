let numArray = new Array(3) // maneira de definir tamanho do array 1

numArray[2]=  'Patrick Simões';

console.log(numArray)

numArray.length = 4 // maneira de definir tamanho do array 2 

numArray[2]=  'Patrick';

console.log(numArray)

let arrayPush = []
const nomes = ['Patrick', 'joao', 'marines', 'sidinei'];
const animais = ['cachorro', 'pato', 'mareco'];

// animais.forEach(i => console.log(i))

console.log(nomes.length);

let exibeNomes = ''

for(i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);    
    exibeNomes += nomes[i] + ', '
}

console.log(exibeNomes);