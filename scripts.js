document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");
    const carritoLista = document.querySelector(".carrito-lista");
    const totalElemento = document.getElementById("total");
    const botonVaciar = document.getElementById("vaciar-carrito");
  
    let carrito = [];
  
    botonesAgregar.forEach((boton) => {
      boton.addEventListener("click", () => {
        const nombre = boton.getAttribute("data-nombre");
        const precio = parseFloat(boton.getAttribute("data-precio"));
  
        
        const itemExistente = carrito.find((item) => item.nombre === nombre);
  
        if (itemExistente) {
          itemExistente.cantidad += 1;
        } else {
          carrito.push({ nombre, precio, cantidad: 1 });
        }
  
        actualizarCarrito();
      });
    });
  
    botonVaciar.addEventListener("click", () => {
      carrito = [];
      actualizarCarrito();
    });
  
    function actualizarCarrito() {
      carritoLista.innerHTML = "";
  
      if (carrito.length === 0) {
        carritoLista.innerHTML = "<p>No hay productos en el carrito.</p>";
      } else {
        carrito.forEach((item) => {
          const itemHTML = document.createElement("p");
          itemHTML.textContent = `${item.nombre} x${item.cantidad} - Bs ${(
            item.precio * item.cantidad
          ).toFixed(2)}`;
          carritoLista.appendChild(itemHTML);
        });
      }
  
      const total = carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
      );
      totalElemento.textContent = total.toFixed(2);
    }
  });