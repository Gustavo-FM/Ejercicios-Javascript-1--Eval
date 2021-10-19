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
    } while(!Number.isFloat(num1)|| num1>0)
    return num1
}

let peso
let estatura
let IMC=22.0
let EDAD=45

peso=comprobarDecimales("Dime cual es tu peso en kg")
estatura=comprobarDecimales("Dime cual es tu estara en metros")

let indiceMasaCorporal= (peso/Math.pow(estatura,2))
if(indiceMasaCorporal<IMC )