// Etapa uno con ejemplos definidos 
// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal*(porcentajePrecioConDescuento))/100;

// Imprimir consola como objeto
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

// ! Cambiandolo a una función 
function precioPagar(precio, descuento) {
    const total = precio*((100 - descuento)/100);
return total;
}

// Escribiendo HTML desde JS

function precioDescuento() {
    let precio = document.getElementById('inputPrice');
    precio = precio.value;
    let descuento = document.getElementById('inputDiscount');
    descuento = descuento.value;
    const total = precioPagar(precio, descuento);
    const result = document.getElementById('resultPrice');

    result.innerText = `El precio con descuento es: $${total}`;
}

// * Cupones de descuento 

const cupones = {
    descuento10: 10,
    descuento20: 20,
    descuento30: 30,
    descuento40: 40
}

const cupon = document.getElementById('cuponDescuento');

if(cupon === cupones
    )

console.log(cupon.value);

