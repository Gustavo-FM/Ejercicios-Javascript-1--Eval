/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
*
***************************************************************************************************************/
let nCaramelos
let nPeques
let carNiño
let resto
do {
    nCaramelos=prompt("¿Cuantos caramelos hay para los niños?")
}while(isNaN(nCaramelos)||!Number.isInteger(parseFloat(nCaramelos))||parseInt(nCaramelos)<0)

do {
    nPeques=prompt("Cuantos niños hay? ")
}while(isNaN(nPeques)||!Number.isInteger(parseFloat(nPeques))||parseInt(nPeques)<0||parseInt(nPeques)>parseInt(nCaramelos))

carNiño=parseInt(nCaramelos/nPeques)
resto = nCaramelos%nPeques

console.log(`El número de caramelos por niño es: ${carNiño}`)
console.log(`El número de caramelos que sobran es: ${resto}`)

