'use strict';
// !Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
// ! Triángulo

function perimetroTriangulo(lado, lado2, base) {
    return lado + lado2+ base;
}

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}
// ! Circulo
function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * Math.PI;
}
function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * Math.PI;
}

// Conectando con html
// * CUADRADO
function cuPerimetro() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    // console.log(typeof(value));
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function cuArea() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
// * TRIANGULO
function tiPerimetro(){
    const ladoa = document.getElementById('ladoOneTriangulo');
    const val1 = Number(ladoa.value);
    const ladob = document.getElementById('ladoTwoTriangulo');
    const val2 = Number(ladob.value);
    const base = document.getElementById('baseTriangulo');
    const val3 = Number(base.value);
    const perimetro = perimetroTriangulo(val1, val2, val3);
    alert(perimetro);
}
function tiArea(){
    const base = document.getElementById('baseATriangulo');
    const baseVal = Number(base.value);
    const altura = document.getElementById('alturaTriangulo');
    const alturaVal = Number(altura.value)
    const area = areaTriangulo(baseVal, alturaVal);
    alert(area);
}
// * CIRCULO
function ciDiametro(){
    const radio = document.getElementById('inputCirculo');
    valor = Number(radio.value);
    const diametro = diametroCirculo(valor);
    alert(diametro);
}
function ciPerimetro(){
    const radio = document.getElementById('inputCirculo');
    valor = Number(radio.value);
    const perimeto = perimetroCirculo(valor);
    alert(perimeto)
}
function ciArea() {
    const radio = document.getElementById('inputCirculo');
    valor = Number(radio.value);
    const area = areaCirculo(valor);
    alert(area);
}

// * TRIANGULO ISOCELES 



function isocelesAltura(a, c){
        let h;
        h=Math.sqrt((a*a)-((c*c)/4));
        return h;
}

function tiAltura(){
    let ladoA = document.getElementById('l1Triangulo');
    ladoA = Number(ladoA.value);
    let ladoB = document.getElementById('l2Triangulo');
    ladoB = Number(ladoB.value);
    let ladoBase = document.getElementById('tBase');
    ladoBase = Number(ladoBase.value);
    if (ladoA === ladoB) {
        const altura = isocelesAltura(ladoA, ladoBase);
        console.log(altura);
    }
    else {
        console.log("No es un triángulo isóceles");
    }
}