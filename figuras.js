// codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log( "Los lados del cudrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log( "Perimetro del cuadrado: " + perimetroCuadrado + "cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log( "Área del cuadrado: " + areaCuadrado + "cm^2");
console.groupEnd();


// codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo  miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
);
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo1 + baseTriangulo;
console.log( "Perimetro del Triangulo " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log( "Área del triangulo: " + areaTriangulo + "cm^2");

console.groupEnd();

// circulo
console.group("Circulo");
const radio = 5;
console.log("El radio del circulo: " + radio + "cm");

const diametro = radio * 2;
console.log("El diámetro del circulo: " + diametro + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);


const circunferencia = diametro * PI;
console.log("El perimetro del circulo: " + circunferencia + "cm");

const area = (radio * radio) / PI;
console.log("El Área del circulo es: " + area + "cm^2");

console.groupEnd();
