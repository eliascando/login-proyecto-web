import { usuarios } from '../data/usuarios.js';

const iniciarSesion = (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const pass = document.querySelector('#pass').value;
  const usuario = usuarios.find((usuario) => usuario.email === email && usuario.contraseña === pass);

  if (usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    window.location.href = 'home.html';
  } else {
    alert('Usuario o contraseña incorrectos');
  }
};

const botonIngresar = document.getElementById('boton-ingresar');
botonIngresar.addEventListener('click', iniciarSesion);