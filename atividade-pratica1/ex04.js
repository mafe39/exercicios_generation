import readline from 'readline-sync'

const numero1 = readline.questionFloat("Digite o valor1: ");
const numero2 = readline.questionFloat("Digite o valor2: ");
const numero3 = readline.questionFloat("Digite o valor3: ");
const numero4 = readline.questionFloat("Digite o valor4: ");

let diferenca = (numero1 * numero2) - (numero3 * numero4);
console.log(`Diferença: ${diferenca.toFixed(1)}`);