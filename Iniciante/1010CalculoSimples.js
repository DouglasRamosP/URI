var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split("\n");

let total = 0;

for (let i = 0; i < lines.length; i++) {
    let [codigo, quantidade, valor] = lines[i].trim().split(" ");
    quantidade = parseInt(quantidade);
    valor = parseFloat(valor);
    total += quantidade * valor;
}

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
