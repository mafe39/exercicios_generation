import readline from 'readline-sync'

const salario = readline.questionFloat("Digite o salario: ");
const abono = readline.questionFloat("Digite o Abono: ");

const novoSalario = salario + abono;

console.log(`Novo salário:  ${novoSalario.toFixed(2)}`);

