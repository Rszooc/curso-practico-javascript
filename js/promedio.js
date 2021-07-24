// * PROMEDIO
// Pasando a función

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) 
    // {
    //     sumaLista +=lista[i];
    // }
    // Alternativas Métodos de arreglos 
    // const sumaLista = lista.reduce(
    //     function (valorAcumulado = 0, nuevoElemento) {
    //         return valorAcumulado + nuevoElemento;
    //     }
    // );
    // Cambiandolo a una función flecha
    const sumaLista = lista.reduce((valorAcumulado=0, nuevoElemento) => valorAcumulado + nuevoElemento);
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}