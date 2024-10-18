/*
Implemente um programa que realiza operações matemáticas básicas (adição, subtração, multiplicação e divisão) com base na escolha do usuário.
*/ 

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha uma operação (adição, subtração, multiplicação, divisão):");

switch (operacao.toLowerCase()) {
    case "adição":
        alert (`Resultado: ${num1 + num2}`);
        break;
    case "subtração":
        alert (`Resultado: ${num1 - num2}`);
        break;
    case "multiplicação":
        alert (`Resultado: ${num1 * num2}`);
        break;
    case "divisão":
        alert (`Resultado: ${num1 / num2}`);
        break;
    default:
        alert ("Operação inválida! Escolha entre adição, subtração, multiplicação ou divisão.");
}