var input = require('fs').readFileSync('stdin', 'utf8'); // Importa o módulo 'fs' (file system) e lê o conteúdo do arquivo 'stdin' como uma string UTF-8.
var lines = input.split("\n")// Divide a string 'input' em um array de substrings, usando o caractere de nova linha ('\n') como delimitador.

A = parseInt(lines.shift()) // Realiza a extração do primeiro elemento do array lines, converte em inteiro e armazena em A.
B = parseInt(lines.shift()) // Realiza a extração do primeiro elemento do array lines, converte em inteiro e armazena em B.

PROD = A * B 

console.log(`PROD = ${PROD}`)