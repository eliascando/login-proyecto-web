import { guardarProducto } from './services.js';

let cedula_usuario;
window.onload = function() {
  const usuarioString = localStorage.getItem('usuario');
  if (usuarioString) {
    const usuario = JSON.parse(usuarioString);
    const bienvenida = document.getElementById('bienvenida');
    bienvenida.textContent = `Hola ${usuario.nombres} ${usuario.apellidos}!`;
    cedula_usuario = usuario.cedula;
  }
};

const salir = () => {
  localStorage.removeItem('usuario');
  window.location.href = 'index.html';
};

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores ingresados por el usuario
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const stock = document.getElementById('stock').value;
  const categoria = document.querySelector('[name="categoria"]').value;
  const talla = document.querySelector('[name="talla"]').value;
  const color = document.querySelector('[name="color"]').value;
  const descripcion = document.getElementById('descripcion').value;
  

  // Crear un objeto con los datos del producto
  const producto = {
    nombre: nombre,
    precio: precio,
    stock: stock,
    categoria: categoria,
    talla: talla,
    color: color,
    descripcion: descripcion,
    cedula_usuario: cedula_usuario
  };

  guardarProducto(producto).then(data => {
    const alerta = document.querySelector('.alerta');
    alerta.textContent = data.message;
    alerta.style.display = 'block';
    alerta.style.color = data.status === 'ok' ? 'green' : 'red';
    setTimeout(() => {
      alerta.style.display = 'none';
    }, 3000);
  }).catch
  (error => {
    console.log(error);
  });

  // Limpiar el formulario después de guardar el producto
  document.querySelector('.form').reset();
});

const botonSalir = document.getElementById('boton-salir');
botonSalir.addEventListener('click', salir);