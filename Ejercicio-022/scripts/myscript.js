/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*
***************************************************************************************************************/

function meterNumero(msg) {
    let num1
    do{
        num1=prompt(msg)
        num1=parseFloat(num1)
    }while(!Number.isFloat(num1)) 
    return num1       
}


alert("Te voy a decir cual numero de tres es el mayor")
let num1=meterNumero("Dame el primer numero")
let num2=meterNumero("Dame el segundo numero")
let num3=meterNumero("Dame el tercer numero")

let max=num1
/*
if(num2>max)
    max=num2

if (num3>max)
    max = num3
*/

//max=Math.max(num1,num2,num3)

max=(num2>max)?num2:max
max=(num3>max)?num3:max

document.write(`El mayor de los tres es el ${max}`)



