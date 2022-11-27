let nombreInvalido = true

do{
    let nombreUsuario = prompt("Ingresar nombre de usuario para registrarse")

    if (nombreUsuario.length > 2){
        nombreInvalido = false
    }else{
        alert("Ingresar un nombre que contenga mínimo 3 caracteres")
    }
}while (nombreInvalido);

let preguntarDeNuevo = true

do{
    let contrasenia = prompt("Ingrese una contraseña con almenos 8 caracteres")
    while(contrasenia.length < 7){
        alert("La contraseña es demasiado corta")
        contrasenia = prompt("Ingrese una contraseña con almenos 8 caracteres")
    }
    let repetirContrasenia = prompt("Confirmar contraseña")

    if (contrasenia === repetirContrasenia){

        preguntarDeNuevo = false
        alert("Se ha confirmado con éxito la contraseña")

    }else{

        alert("Contraseña incorrecta")

    }

}while (preguntarDeNuevo);


const compra = () => {
    let producto = ""
    let precio = 0
    let precioTotal = 0
    let seguirComprando = true
    let cantidad = 0

    do{
        producto = prompt("Que desea comprar; Campera, zapas o pantalón").toLowerCase();
        cantidad = parseInt(prompt("Cuantos desea comprar?"))

        let cantidadValidada = validarCantidad(cantidad); 
        switch (producto){
            case "campera":
                precio = 11000
                break;
            case "zapas":
                precio = 25000
                break;
            case "pantalón":
                precio = 4000
                break;
            default:
                alert("No tenemos ese producto")
                precio = 0
                cantidad = 0
                break;
        }

        precioTotal += precio * cantidadValidada;
        alert("Tu precio total es $"+precioTotal);
        

        seguirComprando = confirm("Desea seguir comprando?");
    }while(seguirComprando);

    return precioTotal;
}

const aplicarDescuento = (precioTotal) => {
    if (precioTotal > 5000) {
        alert("Aplicamos 10% de descuento: $"+precioTotal*0.90);
        return precioTotal * 0.90;
    } else {
        return precioTotal;
    }
}

const envio = (precioTotal) => {
    if(precioTotal > 5001){
        alert("El envío es gratis por pasar los $5000: $"+precioTotal);
        return precioTotal;
    }else{
        alert("El envío es $750: $"+(precioTotal+750));
        return precioTotal + 750;
    }
}

const cuotas = () => {
    let confirmarCuotas = confirm("Querés pagar en cuotas?")
    if(confirmarCuotas === false){
        cuota = 0
        return cuota
    }
    while(confirmarCuotas){
        let cuota = parseInt(prompt("En cuantas cuotas querés pagar? (Hasta 12 cuotas)"))
        if(Number.isNaN(cuota)){
            alert("Ingresar un número de cuotas, máx 12")
        }else if(cuota > 12 || cuota === 0){
            alert("Ingresar un número entre el 1 y el 12")
        }else{
            return cuota
        }
    }
}

const interes = (precioTotal, cuotas) => {
    let precioPorcentaje = 0
    let cantInteres = 8.33 * cuotas
    if(cuotas === 0){
        alert("Tu precio total es $"+precioTotal)
        return precioTotal
    }else{
        precioPorcentaje = (precioTotal * cantInteres)/100
        alert("Tu precio total es $"+(precioTotal+precioPorcentaje).toFixed(2)+"; $"+((precioTotal+precioPorcentaje)/cuotas).toFixed(2)+" en "+cuotas+" cuotas")
        return precioTotal + precioPorcentaje
    }
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad)||cantidad > 20 || cantidad === 0){
        
        if(cantidad === 0){
            alert("ingrese almenos 1 unidad")
        }else{
            alert("Ingresar un número menor a 20")
        }
        cantidad = parseInt(prompt("Cuantos querés comprar?"))
    } 
    return cantidad  
}



interes(envio(aplicarDescuento(compra())),cuotas())


    



