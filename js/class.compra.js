class Compra {
  constructor(carritoDeCompra) {
    this.carrito = carritoDeCompra;
  }
  obtenerSubtotal() {
    if (this.carrito.length > 0) {
      return this.carrito.reduce(
        (acumulador, producto) => acumulador + producto.importe,
        0
      );
    }
  }
}
