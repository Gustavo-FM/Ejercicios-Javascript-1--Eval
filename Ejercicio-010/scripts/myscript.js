/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*
***************************************************************************************************************/
let n1;
let n2;

do{
    n1=window.prompt("Por favor dame un nº 1 entero");
    n2=window.prompt("Por favor dame un nº 2 entero");
    n1=parseFloat(n1);
    n2=parseFloat(n2);
}while(!Number.isInteger(n1)||!Number.isInteger(n2));
//while(/*isNaN(n1)||isNaN(n2)||*/!Number.isInteger(n1)||!Number.isInteger(n2));
//Esta sentencia no hacefalta ya que al pardearlo no haces Number entonces ya sabes que no es una frase
//con esto ya te eliminas esa condición que la hace al parsear ya que no la parcea (convierte a Number) si no puede
//document.write("n1 = "+n1)

for(let i=0; i<=n2; i++){
    let x= n1+i;
    b=(i==0)?"":", "
    document.write(`${b}${x*x}`);
}

