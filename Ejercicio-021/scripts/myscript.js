/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
*
***************************************************************************************************************/

let catetoA
let catetoB

do{
    catetoA=prompt("Dame le cateto A")
    catetoA=parseFloat(catetoA)
}while(!Number.isInteger(catetoA)||catetoA<0)

do{
    catetoB=prompt("Dame el cateto B")
    catetoB=parseFloat(catetoB)
}while(!Number.isInteger(catetoB)||catetoB<0)


let hipo=Math.sqrt((Math.pow(catetoA,2)+Math.pow(catetoB,2)))

console.log(`La hipotenusa mide ${hipo}`)