/***************************************************************************************************************
*  
*   Objetivo: Juan y su familia se fueron en vacaciones a 3 restaurantes diferentes. Las facturas fueron de
*             XX, YY y ZZ euros. Para darle al camarero una propina justa Juan se otorgará un 20% de la factura 
*             como propina si la factura es menor de 50 euros, 15% si esta entre 50 y 200 euros y 10% si es mayor 
*             de 200 euros. 
*
*   Entrada : Tres valores reales que representa las facturas, p.ej.: 124, 48, 268 euros
*
*
*   Salida  : Mostrar por consola el valor de cada factura con el valor apropiado de propina
*
*
***************************************************************************************************************/
const factura1={
    restaurante: "El pollo loco",
    cantidad:124
}

const factura2={
    restaurante: "El rey del bocadillo",
    cantidad:47
}

const factura3={
    restaurante: "Delicius",
    cantidad:268
}

function calcularPropina(cantidad){
    switch (true){
        case cantidad<50: return parseFloat((0.2*cantidad).toFixed(2))
        case cantidad>=50 && cantidad<200: return parseFloat((0.15*cantidad).toFixed(2))
        default: return parseFloat((0.1*cantidad).toFixed(2))
    }
}

    const facturas=[factura1, factura2, factura3]

    for(f of facturas){
        console.log(`En el restaurnate ${f.restaurante} pagaré ${f.cantidad+calcularPropina(f.cantidad)}`)
    }
