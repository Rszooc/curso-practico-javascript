// * MEDIANA
// Clase anterior función media aritmética
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((valorAcumulado=0, nuevoElemento) => valorAcumulado + nuevoElemento);
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Función que válida un número par (con operador ternario)
function esPar(numero) {
    return numero % 2 === 0 ? true : false;
}

// Reto ordenar elementos
function ordena(lista){
    lista.sort((a,b)=>a-b);
    return lista; 
}

// Reto Función mediana 
function medianaLista(listaUsr){
    const ordenado = ordena(listaUsr);
    const mitadLista = parseInt(ordenado.length/2);
    let mediana;
    if (esPar(ordenado.length)) {
        const elemento1 = ordenado[mitadLista - 1];
        const elemento2 = ordenado[mitadLista];
        const promedio = calcularMediaAritmetica([elemento1,elemento2]);
        mediana = promedio;
    } else {
        mediana = ordenado[mitadLista];
    }
    return mediana;
}
