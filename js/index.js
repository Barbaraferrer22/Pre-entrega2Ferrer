setTimeout(comprar, 2000);
const carrito = [];

const productos = [
  {
    id: 1256,
    imagen: "🌻",
    nombre: "GIRASOL",
    importe: 2500,
    categoria: "Flor",
  },
  {
    id: 2855,
    imagen: "🌷",
    nombre: "TULIPAN",
    importe: 5000,
    categoria: "Flor",
  },
  { id: 1256, imagen: "🌹", nombre: "ROSA", importe: 6500, categoria: "Flor" },
  {
    id: 4585,
    imagen: "🌼",
    nombre: "MARGARITA",
    importe: 3500,
    categoria: "Flor",
  },
  {
    id: 7896,
    imagen: "💐",
    nombre: "RAMO DE FLORES",
    importe: 10000,
    categoria: "Arreglo",
  },
  {
    id: 5248,
    imagen: "🌵",
    nombre: "CACTUS SAN PEDRO",
    importe: 15000,
    categoria: "Cactus",
  },
  {
    id: 7489,
    imagen: "🌲",
    nombre: "CIPRES",
    importe: 25000,
    categoria: "Arbol",
  },
  {
    id: 4101,
    imagen: "🌴",
    nombre: "PALMERA",
    importe: 80000,
    categoria: "Arbol",
  },
];

function buscarPlanta(id) {
  let resultado = productos.find((producto) => producto.id === parseInt(id));
  return resultado;
}

function finalizarCompra() {
  const pagando = new Compra(carrito);
  alert(
    `El valor total de su compra es de $ ${pagando.obtenerSubtotal()}. Muchas gracias por su compra ` +
      nombreIngresado
  );
}

let nombreIngresado = prompt("Hola 👋, ¿nos indicarias tu nombre?");
alert("bienvenido 😊" + nombreIngresado);

function comprar() {
  let id = prompt("Ingresa el ID de tu planta a comprar:");
  let plantaElegida = buscarPlanta(id);
  if (plantaElegida !== undefined) {
    carrito.push(plantaElegida);
    alert(`🍀 ${plantaElegida.nombre.toUpperCase()} se agregó al carrito`);
    let respuesta = confirm("¿Deseas llevar otra planta 🌸?");
    if (respuesta === true) {
      comprar();
    } else {
      console.table(carrito);
      finalizarCompra();
    }
  } else {
    alert("🌾 Error en código ingresado. actualiza para volver a comprar.");
  }
}
