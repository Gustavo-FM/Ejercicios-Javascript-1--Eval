/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*
***************************************************************************************************************/

function contadorVocales2(cadena, letra){
    cadena=cadena.toLowerCase();
    letra=letra.toLowerCase().trim();
    letraInicio= letra+" ";
    letraFin = " "+letra;
    letraMedio = " "+letra+" ";
    //document.write(cadena.length);
    //document.write("-");
    //document.write(letraFin);
       //let l=letraMedio.length;
    let contador =[];
    let x = cadena.indexOf(letraInicio);
    
    if(x==0){
        contador.push(x);
    }
    
    // porque si pongo let x me da error. Lo mismo sucede con y

      
    for(let i=0; i<cadena.length;){
        let z= cadena.indexOf(letraMedio, i);
        let y = cadena.indexOf(letraFin, i)
       // document.write(`i = ${i} `);
       // document.write(`y = ${y} `);
        //document.write(`z = ${z} `);
        //document.write(`Contador = ${contador}`);
        if(z>=0){
            contador.push(z+1);
            i=z+letra.length-1;
        }else{
            i++;
        }
        if(y>0 && (i+letraFin.length)==(cadena.length-1)){
            contador.push(y+1);
            break;
            
        } //else if (y>0 && (y+letra.length)!=cadena.length){
          //  i++; 
       // }
           
    }
        return contador;
    
    
}


let cadena=window.prompt("Te digo en que posoción(es) está la frase que buscas ","dame una cadena por favor !!!");
let letra=window.prompt("Dime que frase quieres buscar");
//let cadena= "el no el es el del el";
//let letra = "el";
let numLetras = contadorVocales2(cadena, letra);
//document.write("<h2>Bienvendio a mi página, "+nombre+"</h2>")
//document.write(`<h2> el nº de vocales es ${vocales}</h2>`);
document.write(`La frase buscada <h2>"${letra}"</h2> esta en las siguientes posiciones:  ${numLetras}`); 
//document.write(`${String.fromCharCode(33)}`);