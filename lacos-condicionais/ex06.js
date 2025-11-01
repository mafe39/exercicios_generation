import readline from 'readline-sync'

const nome = readline.question("Digite o nome do colaborador: ");
const codigoColaborador = readline.questionInt("Digite o código do cargo: ");
const salario = readline.questionFloat("Digite o salário: ");


let cargoColaborador;
let percentualReajuste;

switch (codigoColaborador) {
    case 1:
        cargoColaborador = "Gerente";
        percentualReajuste = 0.10; 
        break;
    case 2:
        cargoColaborador = "Vendedor";
        percentualReajuste = 0.07;
        break;
    case 3:
        cargoColaborador = "Supervisor";
        percentualReajuste = 0.09; 
        break;
    case 4:
       cargoColaborador = "Motorista";
        percentualReajuste = 0.06; 
        break;
    case 5:
        cargoColaborador = "Estoquista";
        percentualReajuste = 0.05; 
        break;
    case 6:
       cargoColaborador = "Técnico de TI";
        percentualReajuste = 0.08; 
        break;
    default:
        console.log("Código de inválido!");
        
        
}

if (cargoColaborador) {
    
const novoSalario = salario + (percentualReajuste * salario);
 console.log(`\nNome do Colaborador: ${nome}`); 
 console.log(`Cargo: ${cargoColaborador}`);
 console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`);
}