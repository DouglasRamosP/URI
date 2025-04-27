var input = require('fs').readFileSync('stdin', 'utf8'); // Importa o módulo 'fs' (file system) e lê o conteúdo do arquivo 'stdin' como uma string UTF-8.
var lines = input.split("\n")// Divide a string 'input' em um array de substrings, usando o caractere de nova linha ('\n') como delimitador.


var A = parseInt(lines.shift())// Remove e retorna o primeiro elemento do array 'lines', convertendo-o para um número inteiro. O valor removido é armazenado na variável A.
var B = parseInt(lines.shift())// Remove e retorna o primeiro elemento do array 'lines', convertendo-o para um número inteiro. O valor removido é armazenado na variável B.

SOMA = A + B

console.log(`SOMA = ${SOMA}`)
