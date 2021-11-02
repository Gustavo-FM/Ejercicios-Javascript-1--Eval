/***************************************************************************************************************
*  
*   Objetivo: Crear un array con objetos persona y determinar cuantos son mayores de edad
*             Devolver el promedio de edad total
*             Devolver el promedio de las personas mayores de edad
*             Devolver el promedio de las personas menores de edad
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
/*persona1={
    nombre="Mario",
    edad="17"
}*/

function leerEntero(){
    do{
        numero=prompt("Dame un número entero: ")
    }while(isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)

    return numero
}

const nombres=["Juana", "Maria", "Luis", "Rosa", "Maria", "Anton", "Ricardo", "Paula", "Roberto"]
const personas = Array.from({length:leerEntero()}, ()=>{return {nombre: nombres[Math.floor(Math.random()*nombres.length)],
                                                                edad: Math.floor(Math.random()*50+1)}})

console.log(personas)
personas.forEach( p => console.log(`La persona ${p.nombre} tiene ${p.edad} años`))

let doble=personas.map(p => { return {nombre:p.nombre,edad:p.edad*2} })
console.log(doble)

/*personas.forEach(function suma(){s=p.edad
                                        suma+=s

                                        prom=suma/(personas.length)

                                    }) 
*/
//function suma(){
 //   let sum 
               
    personas.forEach(function muestraEdad(p) {
                        console.log(p.edad)
                    })
        //return promedio = sum/personas.length
    let lista=nombres.map(p => `<li>${p}</li>`)
    salida="<ol>"
    salida+=lista.reduce((anterior,actual)=>anterior+actual)+"</ol>"
    document.write(salida)

    console.log(personas.reduce((anterior,actual)=>{ return {  nombre:"",
                                                                edad:anterior.edad+actual.edad
                                                            }
                                                   }).edad/personas.length)

   let mayores18=personas.filter((p)=>p.edad>=18)
   console.log(mayores18)
console.log("------------------------------")
   let menores18=personas.filter(function (p){ return p.edad<18})
   console.log(menores18)


//}

//console.log(suma())