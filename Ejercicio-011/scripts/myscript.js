/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-89
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
*
***************************************************************************************************************/
let nota = prompt("Deme el porcentaje de acierto de su examen: ");
nota=parseFloat(nota);
//document.write(nota);
let resultado
//document.write(resultado);
if(nota>90||nota<=100){
    resultado="A";
}else if(nota>80||nota<=90){
    resultado="B";
}

//es ridulo hacer el switch ya que se puede imprimir directamente en el if

switch(resultado){
    case "A":
        document.write("Tu cualificación es A");
        break;
    case "B":
        document.write("Tu cualificación es b");
        break;
    default:
        document.write("nota no valida");
}