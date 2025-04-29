var input = require('fs').readFileSync('stdin', 'utf8'); // Importa o módulo 'fs' (file system) e lê o conteúdo do arquivo 'stdin' como uma string UTF-8.
var lines = input.split("\n")// Divide a string 'input' em um array de substrings, usando o caractere de nova linha ('\n') como delimitador.

let name = lines.shift()
let salaryFix = parseFloat(lines.shift())
let sales = parseFloat(lines.shift())

let endSal = (salaryFix) + (sales * 0.15)

console.log(`TOTAL = R$ ${endSal.toFixed(2)}`)