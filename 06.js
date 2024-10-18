/*
Escreva um programa que classifique a idade de uma pessoa em diferentes categorias: criança, adolescente, adulto e idoso.
*/ 

let idade = 5//parseInt(prompt("Digite a sua idade:"));

switch (true) {
    case (idade < 12):
        console.log("Você é uma criança.");
        break;
    case (idade >= 12 && idade < 18):
        console.log("Você é um adolescente.");
        break;
    case (idade >= 18 && idade < 60):
        console.log("Você é um adulto.");
        break;
    case (idade >= 60):
        console.log("Você é um idoso.");
        break;
    default:
        console.log("Idade inválida.");
}