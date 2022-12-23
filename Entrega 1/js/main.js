let nombreIngresado = prompt ("Ingrese su nombre")

if(nombreIngresado!=""){

    alert("Hola"+" "+ nombreIngresado + "," +" "+  "vamos calcular el consumo electrico en tu hogar")

let cantidadDeHeladeras= prompt("Ingrese la cantidad de heladeras en su hogar en valor numerico")
let horasDeUsoDeHeladeras =prompt("Ingrese la cantidad de horas de uso de sus heladera/as por dia en valor numerico")
let cantidadDeAiresAcondicionados=prompt("Ingrese la cantidad de aires acondicionados en su hogar en valor numerico")
let horasDeUsoDeAiresAcondicionados =prompt("Ingrese la cantidad de horas de uso de sus aire/es acondicionado/os por dia en valor numerico")
let cantidadDeFocos=prompt("Ingrese la cantidad de focos en su hogar en valor numerico")
let horasDeUsoDeFocos=prompt("Ingrese la cantidad de hs de uso de los focos en su hogar en valor numerico")
let cantidadDeMicroondas=prompt("Ingrese la cantidad de microondas de su hogar en valor numerico")
let horasDeUsoDeMicroondas=prompt("Ingrese la cantidad de horas de uso de sus microondas en valor numerico")
let cantidadDePavasElectricas=prompt("Ingrese la cantidad de pavas electricas de su hogar en valor numerico")
let horasDeUsoDePavasElectricas=prompt("Ingrese la cantidad de horas de uso de sus pavas electricas en valor numerico")

function consumoDelHogar(){
    let numeroDeHeladeras=parseInt(cantidadDeHeladeras)
    let numeroDeAiresAcondicionados=parseInt(cantidadDeAiresAcondicionados)
    let numeroDeFocos=parseInt(cantidadDeFocos)
    let numeroDeMicroondas=parseInt(cantidadDeMicroondas)
    let numeroDePavasElectricas=parseInt(cantidadDePavasElectricas)
    let horasDeConsumoHeladeras=parseFloat(horasDeUsoDeHeladeras)
    let horasDeConsumoAiresAcondicionados=parseFloat(horasDeUsoDeAiresAcondicionados)
    let horasDeConsumoFocos=parseFloat(horasDeUsoDeFocos)
    let horasDeConsumoMicroondas=parseFloat(horasDeUsoDeMicroondas)
    let horasDeConsumoPavasElectricoas=parseFloat(horasDeUsoDePavasElectricas)
    if(numeroDeHeladeras>=0 && numeroDeAiresAcondicionados>=0 && numeroDeFocos && numeroDeMicroondas>0 && numeroDePavasElectricas>=0 && horasDeConsumoHeladeras>=0 && horasDeConsumoAiresAcondicionados>=0 &&
         horasDeConsumoFocos>=0 && horasDeConsumoMicroondas>0 && horasDeConsumoPavasElectricoas>=0){ 
        TotalConsumo=(numeroDeHeladeras*horasDeConsumoHeladeras*0.2)+(numeroDeAiresAcondicionados*horasDeConsumoAiresAcondicionados*1.397)+(numeroDeFocos*horasDeConsumoFocos*0.10*0.8)+
        (numeroDeMicroondas*horasDeConsumoMicroondas*0.75)+(numeroDePavasElectricas*horasDeConsumoPavasElectricoas*2.0)
        alert("Su consumo diario aproximado en KW-h es: "+ TotalConsumo)
    if(TotalConsumo>9){
        alert("Su consumo se encuentra por encima promedio, el 80% de los consumos residenciales estan por debajo del suyo, por favor mejorar, el medio ambiente se lo ruega, CUIDEMOS EL PLANETA :(")
    }else if(TotalConsumo<8){
        alert("Su consumo esta por debajo del promedio, bien hecho!. El medio ambiente se lo agradece! PLANETA FELIZ :)")
    } else{
        alert("Su consumo se encuentra en el promedio, el 80% de los consumos residenciales estan en su rango! Bien hecho. A seguir mejorando!")
    }} 
    else{
        alert("Los datos ingresados no son correctos, vuelva a intentarlo")
    }
}
consumoDelHogar()}
else{
alert ("Ingrese un Nombre valido") }



