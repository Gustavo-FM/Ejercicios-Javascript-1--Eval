/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores. Se empieza con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,2,3,5,8,13,....
*
*
***************************************************************************************************************/
let n;
do{
    n=prompt("Dame un numero entero y te mostraré la serie de Fibonacci: ")
    n=parseFloat(n)
}while(!Number.isInteger(n)||n<0)

let sum;


function fibo(n){
    let sum1=0
  
    if(n==0){
        return 0;
        }else if(n==1) {
            return 1
            }else{
                sum1=fibo(n-1)+fibo(n-2)       
    }
    return sum1
}



function fibo2(n){
    let x=0;
    let sum1=0
    let sum2=0
    //let sum3=0
    let resultado=""
    n1=n
    let sum3=fibo1(n1)
    //resultado+=sum3+", "

    function fibo1(n1){
        let sum3=0
    if(n1==0){
        
        resultado+=sum3+", "
         return 0;
    }else if(n1==1){
        resultado+=sum3+", "
        sum3=1
       
        return 1
    }else{ //no hace falta el for pero estoy tratando de guardar los distintos valores de la serie
        //esto no funciona. Sólo es válido el resultado final pero no puedo guardarlo
        for(let i=2; i<=n1; i++){
            sum1=fibo1(i-1)
            sum2=fibo1(i-2)
            sum3= sum1+sum2;
            document.write("i= "+i)
            document.write(" suma1= "+sum1)
            document.write(" suma2= "+sum2)
            document.write(" suma3= "+sum3+"<br/>")
           //return sum3
       //}
       
    }
    resultado+=sum3+", "
    document.write(" Despus de salir sum3= "+sum3+"<br/>" )
    return sum3
   // return resultado
    }
    } 
    return resultado
}

function fiboMejorada(n){
    let x=0;
    let sum1=0
    let sum2=0
    let sum3=0
    let resultado=""
    for(let i=0; i<=n; i++){
        if(n==0){
            sum3=0
           // return 0;
        }else if(n==1){
            sum3=1
           // return 1
        }else{ //no hace falta el for pero estoy tratando de guardar los distintos valores de la serie
            //esto no funciona. Sólo es válido el resultado final pero no puedo guardarlo
                sum1=fiboMejorada(i-1)
                sum2=fiboMejorada(i-2)
                //sum3= sum1+sum2;
                //document.write("suma1= "+sum1)
                //document.write(" suma2= "+sum2)
               // document.write(" sum3= "+sum3+"<br/>" )
        }
        
        sum3= sum1+sum2;
        resultado=sum3+", "
    }
    //resultado=sum3+", "
    return resultado
}



function fiboPrueba(n){
    let sum1=0;
    let sum2=0;
    let total
    let devuelvo=0+", ";
    for(let i=1;i<=n; i++){
        if(i==1){
            sum1=0;
            sum2=1;
            //total= (sum1+sum2)
            //devuelvo+=sum2+", "
        }else{
            x = sum1 
            sum1=sum2
            sum2= x +sum1
            //total=sum2
            
        }
        p=(i==n)?"":", "
        devuelvo+=sum2+p;

    }
    return devuelvo
}
//let fibonaci = fiboPrueba(n)
//document.write(fiboPrueba(n))
//document.write(fiboMejorada(n))
document.write(fibo2(n))
//document.write(fibo(n))