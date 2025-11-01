import readline from 'readline-sync'

const numeroA = readline.questionInt("Digite o valor A: ");
const numeroB = readline.questionInt("Digite o valor B: ");
const numeroC = readline.questionInt("Digite o valor C: ");

const somaAB = numeroA + numeroB;

if(somaAB > numeroC){
    console.log(`${numeroA} + ${numeroB} = ${somaAB} > ${numeroC}`);
    console.log("A soma de A + B é maior do que C");
} 
  if(somaAB < numeroC){
        console.log(`${numeroA} + ${numeroB} = ${somaAB} < ${numeroC}`);
        console.log("A soma de A + B é menor do que C");
 }
  if(somaAB == numeroC){
    console.log(`${numeroA} + ${numeroB} = ${somaAB}`);
     console.log("A soma de A + B é igual a C");
   }
 

