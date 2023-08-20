import { validarUsuario } from './services.js';

const iniciarSesion = async(e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const pass = document.querySelector('#pass').value;
  
  const usuario = {
    correo: email,
    password: pass
  };

  console.log(usuario);

  const response = await validarUsuario(usuario);
  console.log(response);
  if(response){
    window.location.href = '/home.html';
    localStorage.setItem('usuario', JSON.stringify(response));
  }else{
    alert('Usuario o contraseña incorrectos');
  }
};

const botonIngresar = document.getElementById('boton-ingresar');
const botonRegistrar = document.getElementById('boton-registrar');

botonRegistrar.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '/registrar.html';
});

botonIngresar.addEventListener('click', iniciarSesion);