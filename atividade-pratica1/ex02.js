import readline from 'readline-sync'


let nota1, nota2, nota3, nota4; 

nota1 = readline.questionFloat("Digite a nota 1: ");
nota2 = readline.questionFloat("Digite a nota 2: ");
nota3 = readline.questionFloat("Digite a nota 3: ");
nota4 = readline.questionFloat("Digite a nota 4: ");

let media = (nota1 + nota2 + nota3 + nota4) /4;

console.log(`Média: ${media.toFixed(1)}`);
