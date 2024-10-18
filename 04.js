/*
Atividades relacionais: crie um programa que solicite ao usuário que digite a sua
altura em metros e o seu peso em quilogramas. Em seguida, o programa deve
calcular o índice de massa corporal (IMC) do usuário usando a fórmula IMC = peso /
altura*2 e verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. O
programa deve imprimir na tela se o IMC está dentro do intervalo saudável ou não. 
*/ 

let peso = 60 //parseFloat(prompt("Digite seu peso em quilogramas:"));
let altura = 1.70//parseFloat(prompt("Digite sua altura em metros:"));

let imc = (peso / (altura * altura));

if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é ${imc.toFixed()}. Você está dentro do intervalo saudável.`);
} else {
    console.log(`Seu IMC é ${imc.toFixed()}. Você não está dentro do intervalo saudável.`);
}
