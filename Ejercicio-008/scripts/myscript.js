/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 1 hasta 
*             ese numero. Realizarlo con los tres tipos de bucles.
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 2,4,6,....,n   
*
*   Notas: La salida finalizará en n o n-1 dependiendo de si n es par o impar
*
***************************************************************************************************************/
let n
salida=" "
do{
   n=prompt("Número: ")
   b=isNaN(n)
     
}while(b===true)

let p=(n%2==0)?0:1;
for(let i=p;i<=n;i+=2){
  salida+=i+" "
}

console.log(salida)
document.write(salida)