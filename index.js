"use strict";
console.log("=======================================");
console.log("STRING");
console.group("=======================================");
let textoUm;
let textoDois;
textoUm = "um texto bem legal";
textoDois = "um texto mais legal ainda";
function concatenarTextoPorVirgula(t1, t2) {
    return `${t1}, ${t2}`;
}
console.log(concatenarTextoPorVirgula(textoUm, textoDois));
console.groupEnd();
console.log("=======================================");
console.log("NUMBER");
console.group("=======================================");
let numeroUm;
let numeroDois;
numeroUm = 663;
numeroDois = 3;
function somarDoisNumeros(n1, n2) {
    return n1 + n2;
}
console.log(somarDoisNumeros(numeroDois, numeroUm).toString());
console.groupEnd();
console.log("=======================================");
console.log("ARRAY");
console.group("=======================================");
let vetor;
let elementoUm;
let elementoDois;
elementoUm = "Um";
elementoDois = "Dois";
function adicionarDoisElementosFimVetor(t1, t2) {
    vetor.push(t1);
    vetor.push(t2);
    return vetor;
}
console.log(adicionarDoisElementosFimVetor(elementoUm, elementoDois).toString);
console.groupEnd();
console.log("=======================================");
console.log("ARRAY");
console.group("=======================================");
console.groupEnd();
