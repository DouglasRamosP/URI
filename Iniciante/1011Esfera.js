var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let raio = parseFloat(lines);
let pi = 3.14159;

volume = (4 / 3) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);
