/*
Faça um programa para conferir sua idade. Se a idade for menor do que 18 anos, exiba uma mensagem informando que o usuário é menor de idade. Se a idade for igual ou maior do que 18 anos e menor do que 60 anos, exiba uma mensagem informando que o usuário é adulto. Se a idade for igual ou maior do que 60 anos, exiba uma mensagem informando que o usuário é idoso.
*/

let idade = parseInt(prompt("Digite a sua idade:"));

if (idade < 18) {
    alert ("Você é menor de idade.");
} else if (idade >= 18 && idade < 60) {
    alert ("Você é adulto.");
} else {
    alert ("Você é idoso.");
}
