/***************************************************************************************************************
*  
*   Objetivo: Solicita la fecha de nacimiento de una persona (dia, mes y año) y calcula el número de la suerte
*             El número de la suerte se calcula sumando las cifras obtenidas en la suma
*             Por ejemplo: si la fecha de nacimiento es el 12 de Julio de 1980
*                                  12-7-1980 = 1999
*                                  1+9+9+9 = 28    
*                                  2+8 = 10
*                                  1+0 = 1   <---- Número de la suerte
*
*   Entrada : dia, mes, anho
*
*
*   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
*
*
***************************************************************************************************************/




/*//date llamar a julian*/
let fechaObj
//let fecha
//let re
let mes
let mes1
let dia
do{
    fecha=prompt("Dame tu fecha de nacimiento (aaaa,mm,dd)")
    re = new RegExp('^[0-9]{4},[0-1]{1}[0-9]{1},[0-3]{1}[0-9]{1}$')
    fechaObj=new Date(fecha)
    mes=fechaObj.getMonth()
    dia=fechaObj.getDate()
    mes1=mes+1

}while((re.test(fecha))==false||isNaN(mes)||isNaN(dia))

//fecha1=new Date(fecha)

let año=fechaObj.getFullYear()
let suma =año+mes1+dia
let suma1=suma.toString()
//let resultado=[]
let total=0
for(let i=0; i<suma1.length;i++){
    e=suma1.charAt(i)
    e=parseInt(e)
    total+=e
    //resultado.push(e). Podría haber hecho un array y luego recorrerlo y sumarlo. 
    //Esto se puede mejorar con la fncion forech creo. lo debo mirar.
}
document.write(`Como has nacido el ${dia} del ${mes1} del año ${año} (con formato toDateStrin: ${fechaObj.toDateString()}, con formato ISOString: ${fechaObj.toISOString()} y con toString ${fechaObj.toString()}), tu número de la suerte es ${total}`) 