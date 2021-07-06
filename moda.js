const list1 = [
    1, 2, 2, 2, 1, 3, 3, 4, 3, 2, 1, 3, 1, 4, 2
];

const lista1Count = {};

list1.map( (elemento) => {
    if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
    } else {
        lista1Count[elemento] = 1;
    }
});

const lista1Array = Object.entries(lista1Count).sort(
    (valorAcumulado, nuevoValor) => {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];