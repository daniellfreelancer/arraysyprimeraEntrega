// Arrays y primera entrega

class Producto {
    constructor(nombre, categoria, precio, color) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.color = color;
    }
}

const productos = [];


productos.push(new Producto("delantal", "Indumentaria", 15000, "blanco"));
productos.push(new Producto("remera", "Indumentaria", 7990, "Rosa"));
productos.push(new Producto("bowl", "Utencilios", 4500, "Plateado"));
productos.push(new Producto("espatula", "Utencilios", 2500, "Negro"));


//funciones
function stockDisponible() {
    let item = "";
    for (const Producto of productos) {
        item += `Producto: ${Producto.nombre}\nCategoria: ${Producto.categoria}\nprecio: $ ${Producto.precio}\ncolor: ${Producto.color}\n\n`
    }

    return item;
}

function buyButton() {
    const itemSelect = prompt(`Productos disponibles:\n${stockDisponible()}`);

    const itemBuy = productos.find(producto => producto.nombre === itemSelect);

    alert(`El producto a comprar es: ${itemBuy.nombre} a $ ${itemBuy.precio}`);
}

function exitButton() {
    alert("Adios, gracias por su visita");
}




let menuList;
do {
    menuList = Number(prompt(`Ingrese una opcion valida:
    1 - Productos disponibles
    2 - Comprar
    3 - Salir
    `));

    switch (menuList) {
        case 1:
            const itemStock = stockDisponible();
            alert(itemStock);
            break;
        case 2:
            buyButton();
            break;
        case 3:
            exitButton();
            break;
        default:
            alert("Por favor ingrese una opcion valida: 1, 2 ó 3");
            break;
    }

} while(menuList !== 3);


// Consultar costo de envio

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


