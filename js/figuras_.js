// Código del cuadrado
// console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
// const perimetroCuadrado = ladoCuadrado * 4; Cambiando a función
// const perimetroCuadrado = (lado) => lado * 4;->Revisar la función flecha
function perimetroCuadrado(lado) {
    return lado * 4;
}
// const perimetroCuadrado = (lado) => lado * 4;
// console.log(`El perimetro es: ${perimetroCuadrado}cm`);
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`El área es: ${areaCuadrado}cm^2`);
// const areaCuadrado = (lado) => lado*lado;
function areaCuadrado(lado) {
    return lado * lado;
}
// console.groupEnd();

// Código del triángulo
// console.group('Triangulo');
// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const AlturaTriangulo = 5.5;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm y la altura ${AlturaTriangulo}cm`);

// const perimetroTriangulo = baseTriangulo+ladoTriangulo+ladoTriangulo2;
// console.log(`El perimetro del trinángulo es: ${perimetroTriangulo}`);
// const areaTriangulo = (baseTriangulo*AlturaTriangulo)/2;
// console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);

// console.groupEnd();
function perimetroTriangulo(lado, lado2, base) {
    return lado + lado2+ base;
}

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}

// Código del ciruculo 
console.group('Circulo');

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * Math.PI;
}
function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * Math.PI;
}


// // Radio
// const radioCirculo = 4;
// // Diametro
// const diametroCirculo = radioCirculo * 2;
// // Pi Op1
// const PI = 3.1416
// // Pi math
// const pi = Math.PI;
// // Circunferencia
// const perimetroCirculo = diametroCirculo * pi;
// // Área 
// const areaCirculo = (radioCirculo * radioCirculo)*pi;
// // Resultados 
// console.log(`El radio del circulo es: ${radioCirculo}cm`);
// console.log(`El diametro del circulo es: ${diametroCirculo}cm`);
// console.log(`Pi es: ${pi}`);
// console.log(`El perimetro de el circulo es: ${perimetroCirculo}cm`);
// console.log(`El área de el circulo es: ${areaCirculo}cm^2`);
console.groupEnd();

// Encapsulando código




