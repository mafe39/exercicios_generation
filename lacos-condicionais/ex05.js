import readline from 'readline-sync'

const codigo = readline.questionInt("Digite o Código do Produto (1 a 6): ");
const quantidade = readline.questionInt("Digite a Quantidade: ");

let nomeProduto;
let precoProduto;

switch (codigo) {
    case 1:
        nomeProduto = "Cachorro Quente";
        precoProduto = 10.00;
        break; 
    case 2:
        nomeProduto = "X-Salada";
        precoProduto = 15.00;
        break;

     case 3:
        nomeProduto = "X-Bacon";
        precoProduto = 18.00;
        break;

     case 4:
        nomeProduto = "Bauru";
        precoProduto = 12.00;
        break;

    case 5:
        nomeProduto = "Refrigerante";
        precoProduto = 8.00;
        break;

    case 6:
        nomeProduto = "Suco de laranja";
        precoProduto = 13.00;
        break;

    
    default:
        console.log("Código de Produto inválido!");
}
if (nomeProduto) {
    const valorTotal = quantidade * precoProduto;

    
    console.log(`\nO produto selecionado foi: ${nomeProduto}`);
    console.log(`Total: R$ ${valorTotal.toFixed(2)}`);
}