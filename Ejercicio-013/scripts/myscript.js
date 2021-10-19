/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
*
*
***************************************************************************************************************/
do{
    n=prompt("Dame un nº entero entre 1 y 20")
    n = parseFloat(n)

}while(!Number.isInteger(n)||n<1||n>20)

for(let i=1; i<=n;i++){
    for(let j=1;j<=i;j++){
        p=" "
        p1=(i<10)?(`${p} ${p}`):" "
        document.write(i+p1)
    }
    document.write("<br/>")
}
//no logro que antes del 10 incluya dos espacios para que quede la piramide bien alineada.
