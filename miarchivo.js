
const templado6 = 9856
const templado8 = 10789
const templado10 = 12324 
let espesor = prompt("Ingrese A si desea un templado de 6mm \n B si desea uno de 8mm \n C si desea uno de 10mm \n ESC para salir ");
let ancho = Number(prompt("Ingrese su ancho en metros"));
let alto = Number(prompt("Ingrese su alto en metros"));

let cotizadorTemplado = (espesor, ancho, alto) => {
    switch(espesor) {
        case "A":
            let resultado6 = templado6 * ancho * alto;
            return resultado6
        case "B":
            let resultado8 = templado8 * ancho * alto;
            return resultado8
        case "C":
            let resultado10 = templado10 * ancho * alto;
            return resultado10        
    }
}

while(espesor !== ESC){
    alert(`El valor es de $${cotizadorTemplado(espesor, ancho, alto)}`)
    espesor = prompt("Ingrese A si desea un templado de 6mm \n B si desea uno de 8mm \n C si desea uno de 10mm \n ESC para salir");
    if(espesor !== ESC) {
        ancho = Number(prompt("Ingrese su ancho en metros"));
        alto = Number(prompt("Ingrese su alto en metros"));
    }else{
        alert("Usted a finalizado con la cotizacion. Por cualquier consulta se comunica al 111-1111");
    }
}




