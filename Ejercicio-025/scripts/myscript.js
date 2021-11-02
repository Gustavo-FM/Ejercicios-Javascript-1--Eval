/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número tras otro al usuario hasta que ingresamos el númoer 0 (que no se tendrá en cuenta)
*             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
*
*   Entrada : numero1, numero2, numero3,.....
*
*
*   Salida  : El mayor de numero1, numero2, numero3,....
*
*
***************************************************************************************************************/

function pedirFloat(msg) {
    let num;
    do {
            num=parseFloat(prompt(msg))
    } while (isNaN(num))
    return parseFloat(num)
}

function calMax(n){
    if(n>max)  
       max=n
}

let numeros=[]
let n=pedirFloat("Dame un numero")
//let max=n
numeros.push(n)
//alert("Te voy a pedir numeros hasta que ingreses el 0. Luego te daré el mayor de todos los que has introducido")
//let contador=0
while(n!=0) {
    n=pedirFloat("Dame un numero")
    numeros.push(n)
    //calMax(n)
    //contador++
}
numeros.pop()
/*
max=numeros.reduce(
    function mayor(anterior,actual) {
        return  anterior>actual?anterior:actual
    }
)

/*
//Funcion anonima
max=numeros.reduce(
    function (anterior,actual) {
        return  anterior>actual?anterior:actual
    }
)
*/


//Funcion arrow function
max=numeros.reduce((anterior,actual) => anterior>actual?anterior:actual)


console.log(`El mayor de ${numeros.join(",")} es ${max}`)
