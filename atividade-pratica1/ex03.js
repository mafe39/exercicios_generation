import readline from 'readline-sync'

const salarioBruto = readline.questionFloat("Digite o salario bruto: ");
const adicionalNoturno = readline.questionFloat("Digite o adicional noturno: ");
const horaExtra = readline.questionFloat("Digite o adicional de horas extras: ");
const desconto = readline.questionFloat("Digite o desconto: ");

const salarioLiquido = salarioBruto + adicionalNoturno + (horaExtra * 5) - desconto;

console.log(`Salario Liquido: ${salarioLiquido.toFixed(2)}` );

