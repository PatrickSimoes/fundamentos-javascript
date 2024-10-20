let titulos = ['FTL' ,'ADM', 'Diferença']
let arrayNomes = ['van', 'truck', 'carreta', 'Total', 'van', 'truck', 'carreta', 'Total', 'van', 'truck', 'carreta', 'Total']

let concatenado = arrayNomes.map(function(value, indice) {
    return `${titulos[indice]}_${value}`
})

console.log(concatenado);