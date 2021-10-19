/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario una cadena de texto y mostrar el número de vocales
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Número de vocales (p.j: 8)
*
*
***************************************************************************************************************/
function contarVocales(cadena) {
    cadena=cadena.toLowerCase()
    let contador=0;
    for(let i=0; i<cadena.length; i++){
        switch (cadena[i]){
            case 'a':
                contador++;
                break
            case 'e':
                contador++;
                break
            case 'i':
                contador++;
                break
            case 'o':
                    contador++;
                    break
            case 'u':
                    contador++;
                    break

        }
    }

    return contador;

}

function contadorVocales2(cadena, letra){
    cadena=cadena.toLowerCase();
    letra=letra.toLowerCase();
    contador=0;
    for(let i=0; i<cadena.length;){
        let x=cadena.indexOf(letra, i);
        if(x>=0){
            i=x+1;
            contador++
        }else{
            return contador;
        }
    }
    return contador;
}




let cadena=window.prompt("Cuento vocales de cadenas","dame una cadena por favor y te contaré las vocales!!!");
let letra=window.prompt("Dime que letra quieres contar");
let vocales = contarVocales(cadena);
let numLetras = contadorVocales2(cadena, letra);
//document.write("<h2>Bienvendio a mi página, "+nombre+"</h2>")
document.write(`<h2> el nº de vocales es ${vocales}</h2>`);
document.write(`El numero de ${letra} es ${numLetras}`); 