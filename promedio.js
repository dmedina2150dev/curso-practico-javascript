// const list1 = [
//     100,
//     200,
//     300,
//     500
// ];

function calcularMediaAritmetrica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce( (valorAcumulado = 0, nuevoElemneto) => {
        return valorAcumulado + nuevoElemneto;
    });

    const promedioLista = sumaLista / lista.length;


    return promedioLista;
}