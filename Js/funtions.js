alert("Bienvenidos a catering")

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

if ((nombre == "") && (apellido == "")) {
    alert("Necesitas rellenar el campo de nombre y apellido para continuar la operacion")
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
}

alert("Te damos la bienvenida " + " " + nombre + " " + apellido + " " + "a nuestra empresa de catering")

let saludo = prompt("Selecciona clase de evento.\n " + "\nPor Ejemplo '1' para Casamiento " + "\n\n1-Casamiento" + "\n2-Quinceanera" + "\n3-Bautismo" + "\n4-Cumpleaños")
let Casamiento = 1;
let Quinceanera = 2;
let Bautismo = 3;
let Cumpleaños = 4;


while ((parseInt(saludo) !== Casamiento) && (parseInt(saludo) !== Quinceanera) && (parseInt(saludo) !== Bautismo) && (parseInt(saludo) !== Cumpleaños)) {
    saludo = prompt("Selecciona clase de evento.\n " + "\nPor Ejemplo '1' para Casamiento " + "\n\n1-Casamiento" + "\n2-Quinceanera" + "\n3-Bautismo" + "\n4-Cumpleaños")
}

let OpcionCasamiento 

if (saludo == 1) {

    let Carnes = 1;
    let Pescados = 2;
    let Vegetariano = 3;
    let Saludable = 4;
   



    let opcionCasamiento = prompt("Elige el menu que desee.\n " + "\n1-Carnes" + "\n2-Pescados" + "\n3-Vegetariano" + "\n4-Saludable" );

    while ((parseInt(opcionCasamiento) !== Carnes) && (parseInt(opcionCasamiento) !== Pescados) && (parseInt(opcionCasamiento) !== Vegetariano) && (parseInt(opcionCasamiento) !== Saludable)) {
        opcionCasamiento = prompt("Elige el menu que desee.\n " + "\n1-Carnes" + "\n2-Pescados" + "\n3-Vegetariano" + "\n4-Saludable");
    }



    if (opcionCasamiento == 1) {
        alert("Opcion Carnes'");


        alert("Tarjeta por persona $5000 pesos");


        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");

        while ((parseInt(cantidadTarjeta) <= 0)) {
            alert("tienes que elegir al menos 1 Tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 5000;

        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }


    if (opcionCasamiento == 2) {
        alert("Opcion pescado'");

        alert ("Tarjeta por persona $7000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 Tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 7000;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }

    if (opcionCasamiento == 3) {
        alert("Opcion Vegetariano'");

        alert("Tarjeta por persona $4000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 4000;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionCasamiento == 4) {
        alert("Opcion Saludable'")

        alert("Tarjeta por persona $4000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 800;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
}


if (saludo == 2) {

    let Carnes = 1;
    let Pescados = 2;
    let Vegetariano = 3;
    let Saludable = 4;
   



    let opcionQuinceanera = prompt("Elige el menu que desee.\n " + "\n1-Carnes" + "\n2-Pescados" + "\n3-Vegetariano" + "\n4-Saludable" );

    while ((parseInt(opcionQuinceanera) !== Carnes) && (parseInt(opcionQuinceanera) !== Pescados) && (parseInt(opcionuQinceanera) !== Vegetariano) && (parseInt(opcionCasamiento) !== Saludable)) {
        opcionQuinceanera = prompt("Elige el menu que desee.\n " + "\n1-Carnes" + "\n2-Pescados" + "\n3-Vegetariano" + "\n4-Saludable");
    }



    if (opcionQuinceanera == 1) {
        alert("Opcion Carnes'");


        alert("Tarjeta por persona $5000 pesos");


        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");

        while ((parseInt(cantidadTarjeta) <= 0)) {
            alert("tienes que elegir al menos 1 Tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 5000;

        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }


    if (opcionQuinceanera == 2) {
        alert("Opcion pescado'");

        alert ("Tarjeta por persona $7000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 Tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 7000;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }

    if (opcionQuinceanera == 3) {
        alert("Opcion Vegetariano'");

        alert("Tarjeta por persona $4000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 4000;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionQuinceanera == 4) {
        alert("Opcion Saludable'")

        alert("Tarjeta por persona $4000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 800;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
}
if (saludo == 3) {

    let Carnes = 1;
    let Pescados = 2;
    let Vegetariano = 3;
    let Saludable = 4;
   



    let opcionBautismo = prompt("Elige el menu que desee.\n " + "\n1-Carnes" + "\n2-Pescados" + "\n3-Vegetariano" + "\n4-Saludable" );

    while ((parseInt(opcionBautismo) !== Carnes) && (parseInt(opcionBautismo) !== Pescados) && (parseInt(opcionBautismo) !== Vegetariano) && (parseInt(opcionBautismo) !== Saludable)) {
        opcionBautismo = prompt("Elige el menu que desee.\n " + "\n1-Carnes" + "\n2-Pescados" + "\n3-Vegetariano" + "\n4-Saludable");
    }



    if (opcionBautismo == 1) {
        alert("Opcion Carnes'");


        alert("Tarjeta por persona $5000 pesos");


        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");

        while ((parseInt(cantidadTarjeta) <= 0)) {
            alert("tienes que elegir al menos 1 Tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 5000;

        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }


    if (opcionBautismo == 2) {
        alert("Opcion pescado'");

        alert ("Tarjeta por persona $7000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 Tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 7000;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }

    if (opcionBautismo == 3) {
        alert("Opcion Vegetariano'");

        alert("Tarjeta por persona $4000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 4000;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionBautismo == 4) {
        alert("Opcion Saludable'")

        alert("Tarjeta por persona $4000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 800;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
}
if (saludo == 4) {

    let Carnes = 1;
    let Pescados = 2;
    let Vegetariano = 3;
    let Saludable = 4;
   



    let opcionCumpleaños = prompt("Elige el menu que desee.\n " + "\n1-Carnes" + "\n2-Pescados" + "\n3-Vegetariano" + "\n4-Saludable" );

    while ((parseInt(opcionCumpleaños) !== Carnes) && (parseInt(opcionCumpleaños) !== Pescados) && (parseInt(opcionCumpleaños) !== Vegetariano) && (parseInt(opcionCumpleaños) !== Saludable)) {
        opcionCumpleaños = prompt("Elige el menu que desee.\n " + "\n1-Carnes" + "\n2-Pescados" + "\n3-Vegetariano" + "\n4-Saludable");
    }



    if (opcionCumpleaños == 1) {
        alert("Opcion Carnes'");


        alert("Tarjeta por persona $5000 pesos");


        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");

        while ((parseInt(cantidadTarjeta) <= 0)) {
            alert("tienes que elegir al menos 1 Tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 5000;

        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }


    if (opcionCumpleaños == 2) {
        alert("Opcion pescado'");

        alert ("Tarjeta por persona $7000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 Tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 7000;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }

    if (opcionCumpleaños == 3) {
        alert("Opcion Vegetariano'");

        alert("Tarjeta por persona $4000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 4000;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionCumpleaños == 4) {
        alert("Opcion Saludable'")

        alert("Tarjeta por persona $4000 pesos");

        let cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        while (parseInt(cantidadTarjeta) <= 0) {
            alert("tienes que elegir al menos 1 tarjeta para seguir la compra. Gracias");
            cantidadTarjeta = prompt("indica la cantidad de Tarjeta que deseas");
        }
        let suma = parseInt(cantidadTarjeta) * 800;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
}

