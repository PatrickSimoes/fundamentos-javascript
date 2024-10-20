const arrayDePaises = [
    [
        'Canadá',
        '',
        'Brasil',
        '',
        'Alemanha',
        '',
        'Índia',
        'Rússia',
    ],
    [
        '',
        'titulo1',
        'titulo2',
        'titulo3',
        'Total',
        '',
        'titulo1',
        'titulo2',
        'titulo3',
        'Total',
        '',
        'titulo1',
        'titulo2',
        'titulo3',
        'Total',
        '',
        'titulo1',
        'titulo2',
        'titulo3',
        'Total',
        '',
        'titulo1',
        'titulo2',
        'titulo3',
        'Total',
    ]
];

let novoNome = []
let paisesFiltrado = arrayDePaises[0].filter(e => e != '')
let titulosFiltrado = arrayDePaises[1].filter(e => e != '')

let novoArray = titulosFiltrado.join(',').split('Total');

console.log(novoArray);

/* for(let i = 0; i < titulosFiltrado.length; i++) {
    console.log(`Indice: ${i}, Valor: ${titulosFiltrado[i]}`)
}

for(let i = 0; i < paisesFiltrado.length; i++) {
    console.log(`Indice: ${i}, Valor: ${paisesFiltrado[i]}`)
} */

for(let i = 0; i < paisesFiltrado.length; i++) {
    novoNome.push(`${paisesFiltrado[i]} - ${titulosFiltrado[i]}`)
}

