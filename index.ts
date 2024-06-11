console.log("=======================================")
console.log("STRING")
console.group("=======================================")
let textoUm : string;
let textoDois : string;
textoUm = "um texto bem legal";
textoDois = "um texto mais legal ainda"

function concatenarTextoPorVirgula (t1 : string, t2 : string) : string
{
    return `${t1}, ${t2}`;
}
console.log(concatenarTextoPorVirgula(textoUm,textoDois));
console.groupEnd();

console.log("=======================================")
console.log("NUMBER")
console.group("=======================================")
let numeroUm : number;
let numeroDois : number;
numeroUm = 663;
numeroDois = 3;

function somarDoisNumeros (n1 : number, n2 : number) : number
{
    return n1 + n2;
}
console.log(somarDoisNumeros(numeroDois, numeroUm).toString());
console.groupEnd();

console.log("=======================================")
console.log("ARRAY")
console.group("=======================================")
let vetor : string[] = [];
let elementoUm : string;
let elementoDois : string;
elementoUm = "Um";
elementoDois = "Dois";

function adicionarDoisElementosFimVetor (t1 : string, t2 : string) : Array<string>
{
    vetor.push(t1);
    vetor.push(t2); 
    return vetor;
}
console.log(adicionarDoisElementosFimVetor(elementoUm,elementoDois).toString());
console.groupEnd();

console.log("=======================================")
console.log("BOOLEAN")
console.group("=======================================")
let boleano : boolean;
boleano = false;
let numero : number;
numero = 20;

function VerificarPar (numero : number) : boolean
{
    if(numero%2 == 0)
        {
            return true;
        }
    return false;
}
console.log(VerificarPar(numero));
console.groupEnd();

console.log("=======================================")
console.log("INTERFACE")
console.group("=======================================")
interface ICarro
{
    Marca : string,
    Modelo : string,
    Ano : number
};
let fiestinha : ICarro = {
    Marca: "Ford",
    Modelo: "Fiesta",
    Ano: 1999
}
function MostrarAnoVeiculo (veiculo : ICarro) : number
{
    return veiculo.Ano;
}
console.log(MostrarAnoVeiculo(fiestinha));
console.groupEnd();

console.log("=======================================")
console.log("TYPE")
console.group("=======================================")
type Raio = number;
interface Roda{
    Diametro : Raio;
}
let oz : Roda = {
    Diametro: 17
}
function MostrarDiametroRoda (rodado : Roda) : number
{
    return rodado.Diametro != 0 ? rodado.Diametro : 0;
}
console.log(MostrarDiametroRoda(oz));
console.groupEnd();



