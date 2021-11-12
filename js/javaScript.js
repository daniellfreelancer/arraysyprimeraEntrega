// Desafio #1 JS

// var cliente = prompt("Bienvenidos a Sofia Cocina ¿ Cuál es tu nombre ?");

// alert ("Bienvenido " + cliente + " " +"a nuestra tienda, es un gusto tenerte como cliente");


// Desafio #2 JS


// let userAdmin = prompt("Bienvenido: ingrese usuario");
// let userPass = prompt("Bienvenido: ingrese su clave");

// if ((userAdmin == "admin") && (userPass == "admin")) {
//     alert ( "Bienvenido administrador" )
// } else {
//     alert ( "Usuario o clave incorrecta")
// }


// Desafio #3 JS
// Ciclo de 5 en 5
// for(let i = 0; i < 30 ; i+=5) {
    
//     console.log(i);
//   if (i == 30) {
//     break;
//   }
// } 

// console.log("Es un ciclo de 5 en 5");

// ------------------------------------------------------------------------------

// EJEMPLO #1 DESAFIO 4

/*
function lasCondes() {
  const precio = 2000;
  alert(`El Valor de tu envio para la comuna de Las Condes es de: $ ${precio}`);
}
function providencia() {
  const precio = 2500;
  alert(`El Valor de tu envio para la comuna de Providencia es de: $ ${precio}`);
}
function ñuñoa() {
  const precio = 3000;
  alert(`El Valor de tu envio para la comuna de Ñuñoa es de: $ ${precio}`);
}
function santiago() {
  const precio = "Gratis";
  alert(`El Valor de tu envio para la comuna de Santiago es de: $ ${precio}`);
}
function sanMiguel() {
  const precio = 4000;
  alert(`El Valor de tu envio para la comuna de San Miguel es de: $ ${precio}`);
}

const precioEnvio = Number(prompt(`Consulta el valor tu envio: ¿ en cúal comuna vives?
Opcion # 1 - (Las Condes)
Opcion # 2 - (Providencia)
Opcion # 3 - (Ñuñoa)
Opcion # 4 - (Santiago)
Opcion # 5 - (San Miguel)`));
 
switch (precioEnvio) {
  case 1:
    lasCondes();
    break;
  case 2:
    providencia();
    break;
  case 3:
    ñuñoa();
    break;
  case 4:
    santiago();
    break;
  case 5:
    sanMiguel();
    break;
  default:
    break;
}

*/

function delivery(comuna){ 
  
  const zona = comuna;
  const moneda = " CLP";

  const comuna1 = "Las Condes";
  const valor1 = 2000;

  const comuna2 = "Providencia";
  const valor2 = 2500;

  const comuna3 = "Ñuñoa";
  const valor3 = 3000;

  const comuna4 = "Santiago Centro";
  const valor4 = "Sin costo adicional";

  const comuna5 = "San Miguel";
  const valor5 = 4000;

  console.log(zona); // Verficacion en consola del # de opcion
  if (zona == 1) {
    alert(`El precio de envio para la comuna de: ${comuna1} es de $ ${valor1}${moneda}`);
  } 
  else if (zona == 2) {
    alert(`El precio de envio para la comuna de: ${comuna2} es de $ ${valor2}${moneda}`);
  }
  else if (zona == 3) {
    alert(`El precio de envio para la comuna de: ${comuna3} es de $ ${valor3}${moneda}`);
  }
  else if (zona == 4){
    alert(`El precio de envio para la comuna de: ${comuna4} es ${valor4}`);
  }
  else if (zona == 5){
    alert(`El precio de envio para la comuna de: ${comuna5} es de $ ${valor5}${moneda}`);
  }
  else {
    alert(`Opcion no valida: Actualmente trabajamos con estas comunas
    Opcion # 1 - (Las Condes)
    Opcion # 2 - (Providencia)
    Opcion # 3 - (Ñuñoa)
     Opcion # 4 - (Santiago)
    Opcion # 5 - (San Miguel)`)}
  return comuna;
}

const consultaDelivery=Number(prompt(`Consulta el valor tu envio: ¿ en cúal comuna vives?
Opcion # 1 - (Las Condes)
Opcion # 2 - (Providencia)
Opcion # 3 - (Ñuñoa)
Opcion # 4 - (Santiago)
Opcion # 5 - (San Miguel)`));
 
// llamado de funcion
delivery(consultaDelivery);
