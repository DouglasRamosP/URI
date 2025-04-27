var input = require('fs').readFileSync('stdin', 'utf8'); // Importa o módulo 'fs' (file system) e lê o conteúdo do arquivo 'stdin' como uma string UTF-8.
var lines = input.split("\n")// Divide a string 'input' em um array de substrings, usando o caractere de nova linha ('\n') como delimitador.

let A = parseInt(lines.shift())
let B = parseInt(lines.shift())
let C = parseInt(lines.shift())
let D = parseInt(lines.shift())

let DIFERENCA = (A * B - C * D)

console.log(`DIFERENCA = ${DIFERENCA}`)