// codigo del cuadrado

function perimetroCuadrado(lado) {

    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}


// codigo del triangulo

function perimetroTriangulo(lado1, lado2, base){

    return Number(lado1) + Number(lado2) + Number(base);
}


function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


// circulo


const PI = Math.PI;
console.log("PI es: " + PI);

function diametroCirculo(radio) {
    return radio * 2;
}

function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) / PI;
}



function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert("El perimetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert("El área del cuadrado es: " + area + "cm^2");
}


function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("baseTriangulo");

    const lado1 = input1.value, lado2 = input2.value, base = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert("El perimetro del Triangulo es: " + perimetro + "cm");
}
function calcularAreaTriangulo() {
    const input3 = document.getElementById("baseTriangulo");
    const input4 = document.getElementById("altura");

    const altura = input4.value || 0, base = input3.value;
    if (altura !== 0) {
        const area = areaTriangulo(base, altura);
        alert("El área del cuadrado es: " + area + "cm^2");
    }else {
        alert("Te falto la altura")
    }
}

const input = document.getElementById("InputCirculo");
function calcularDiametroCirculo() {
    const radio = input.value;
    const diametro = diametroCirculo(radio);
    alert("El diametro del Circulo es: " + diametro + "cm");
}
function calcularCircunferenciaCirculo() {
    const radio = input.value;
    const circun = circunferencia(radio);
    alert("La circunferencia del Circulo es: " + circun + "cm");
}
function calcularAreaCirculo() {
    const radio = input.value;
    const area = areaCirculo(radio);
    alert("El Area del Circulo es: " + area + "cm^2");
}

function alturaTriagulo(ladoA, ladoB, ladoBase){
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}