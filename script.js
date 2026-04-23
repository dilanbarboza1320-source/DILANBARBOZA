
let carrito = [];

// Función para agregar productos
function comprar(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("carrito");
    const totalTexto = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${item.producto} - $${item.precio}
            <button onclick="eliminarItem(${index})">❌</button>
        `;

        lista.appendChild(li);
        total += item.precio;
    });

    totalTexto.textContent = "Total: $" + total;
}

function eliminarItem(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function EliminarDelCarrito() {
    carrito = [];
    actualizarCarrito();
}