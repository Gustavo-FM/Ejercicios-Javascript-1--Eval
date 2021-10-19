/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>=22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*
***************************************************************************************************************/


function comprobarDecimales(msg) {
  
  let num1
    do{
        num1=parseFloat(prompt(msg))
        console.log(typeof num1)
    } while(isNaN(num1)||num1<1)
    return num1
}

function comprobarEntero(msg){
  let numEntero
  do{
    numEntero = parseFloat(prompt(msg))
    
    //numEntero=parseFloat(numEntero)
  } while((!Number.isInteger(numEntero))||numEntero<0)
  return numEntero
}

let peso
let estatura
let edad
let IMC=22.0
let EDAD=45
let bajo ="bajo"
let medio="medio"
let alto="alto"
let salida=""

peso=comprobarDecimales("Dime cual es tu peso en kg")
estatura=comprobarDecimales("Dime cual es tu estatura en metros")
edad=comprobarEntero("Dime tu edad,debe serun nº entero ")

let imc= (peso/Math.pow(estatura,2))
if(imc<IMC){
  salida = (edad<EDAD)?bajo:medio
}else {
  salida = (edad<EDAD)?medio:alto
}

document.write(`Tu índice de masa corporal es ${imc}. Tienes un riesgo ${salida} de enfermedad coronaria`)
console.log(`Tu índice de masa corporal es ${imc}. Tienes un riesgo ${salida} de enfermedad coronaria`)
