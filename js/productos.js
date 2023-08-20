import { obtenerProductos } from './services.js';

window.onload = async function() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
        const usuario = JSON.parse(usuarioString);
        const bienvenida = document.getElementById('bienvenida');
        bienvenida.textContent = `Productos registrados por ${usuario.nombres} ${usuario.apellidos}`;
        const productos = await obtenerProductos(usuario.cedula);
        mostrarProductos(productos);
    }
};

const mostrarProductos = (productos) => {
    const productosTable = document.getElementById('productos-table');
    productosTable.innerHTML = '<tr><th>Nombre</th><th>Precio</th><th>Stock</th><th>Categoria</th><th>Talla</th><th>Color</th><th>Descripción</th></tr>'; // Limpiar el contenido previo

    if (productos.length === 0) {
        productosTable.style.display = 'none';
        const mensaje = document.createElement('div');
        const productos = document.getElementById('alerta');
        mensaje.innerHTML = '<h1>El usuario no tiene productos registrados</h1>';
        productos.appendChild(mensaje);
    } else {
        productos.forEach((producto) => {
            const productoRow = document.createElement('tr');
            productoRow.innerHTML = `
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>${producto.stock}</td>
                <td>${producto.categoria}</td>
                <td>${producto.talla}</td>
                <td>${producto.color}</td>
                <td>${producto.descripcion}</td>
            `;
            productosTable.appendChild(productoRow);
        });
    }
};

const volver = () => {
    window.location.href = 'home.html';
};

const botonVolver = document.getElementById('boton-volver');
botonVolver.addEventListener('click', volver);
