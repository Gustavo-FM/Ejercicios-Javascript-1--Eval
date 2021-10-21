ejemploFunciones.js
//funcion declarativa 
function saludar1(nombre){
    let saludo="Hola"
    document.write(`<p>${saludo} ${nombre}</p>`)
    }
    
    function saludar2(nombre){
    let saludo="Adios"
    document.write(`<p>${saludo} ${nombre}</p>`)
    }
    
    saludar1("Pedro")
    saludar2("Pedro")
    
    
    //Funcion expresada anonima
    
    const saludar3=function (nombre){
    let saludo="Hola"
    document.write(`<p>${saludo} ${nombre}</p>`)
    }
    
    
    saludar3("Pedro")
    
    
    //Funcion expresada arrow function
    
    const saludar4=  (nombre) => { document.write(`Hola  ${nombre}`)}
    
    const perro={
    nombre:"kuki",
    edad:"3",
    ladrar: () => console.log("Guau!")
    }
    
    console.log(perro)
    
    
    vector=[1,2,3,4,5];
    
    vector.forEach(element => console.log(element));
    let cuadrados=vector.map((elemento)=>elemento*elemento)
    let sumaReducida=vector.reduce((previo,actual)=>previo+actual)
    
    let cadena= vector.map((elemento)=>`<li>${elemento}</li>`).reduce((previo,actual)=>previo.concat(actual))
    document.write(`<ul>${cadena}</ul>`)
    
    
    
    function escribirDatos(){
    for(let i=1;i<vector.length;i++){
    console.log(vector[i])
    }
}
