var input = require('fs').readFileSync('stdin', 'utf8'); // Importa o módulo 'fs' (file system) e lê o conteúdo do arquivo 'stdin' como uma string UTF-8.
var lines = input.split("\n")// Divide a string 'input' em um array de substrings, usando o caractere de nova linha ('\n') como delimitador.

let nFunc = parseInt(lines.shift())
let horasTrab = parseInt(lines.shift())
let valueHr = parseFloat(lines.shift())

let salary = horasTrab * valueHr

console.log(`NUMBER = ${nFunc}\nSALARY = U$ ${salary.toFixed(2)}`)

