var input = require('fs').readFileSync('stdin', 'utf8'); // Importa o módulo 'fs' (file system) e lê o conteúdo do arquivo 'stdin' como uma string UTF-8.
var lines = input.split("\n")// Divide a string 'input' em um array de substrings, usando o caractere de nova linha ('\n') como delimitador.

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())

if (A <= 10.0 || A >= 0 && B < 10 || B >= 0){
    let MEDIA = ((A * 3.5) + (B * 7.5))/11
    console.log(`MEDIA = ${MEDIA.toFixed(5)}`) // toFixed(5) define que serão mostradas 5 casas após a virgula.
}else{
    console.log(`[ERROR]`)
}    

