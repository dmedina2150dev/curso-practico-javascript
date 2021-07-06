// Helpers
function esPar(num) {

    return (num % 2 === 0);

}

function calcularMediaAritmetrica(lista) {
    const sumaLista = lista.reduce( (valorAcumulado = 0, nuevoElemneto) => {
        return valorAcumulado + nuevoElemneto;
    });

    const promedioLista = sumaLista / lista.length;


    return promedioLista;
}

// mediana General

const salariosChile = chile.map(
    (persona) => {
        return persona.salary;
    }
);

const salariosChileSort = salariosChile.sort(
    (salaryA, salaryB) => {
        return salaryA - salaryB;
    }
);

// Calculando mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetrica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


const medianaGeneral = medianaSalarios(salariosChileSort);

// mediana top 10%
const spliceStart = (salariosChileSort.length * 90) / 100;
const spliceCount = salariosChileSort.length - spliceStart;

const topTenSalarios = salariosChileSort.splice(spliceStart, spliceCount);

const medianaTopTen = medianaSalarios(topTenSalarios);



console.log({
    medianaGeneral,
    medianaTopTen
});
