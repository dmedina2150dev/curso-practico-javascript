const list1 = [200, 300, 500,40000000];

const mitadLista1 = parseInt(list1.length / 2);

function esPar(num) {

    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetrica(lista) {
    const sumaLista = lista.reduce( (valorAcumulado = 0, nuevoElemneto) => {
        return valorAcumulado + nuevoElemneto;
    });

    const promedioLista = sumaLista / lista.length;


    return promedioLista;
}

let mediana;

if (esPar(list1.length)) {
    const elemento1 = list1[mitadLista1];
    const elemento2 = list1[mitadLista1 - 1];

    const promedioElemento1y2 = calcularMediaAritmetrica([elemento1, elemento2]);

    mediana = promedioElemento1y2;

} else {
    mediana = list1[mitadLista1];
}