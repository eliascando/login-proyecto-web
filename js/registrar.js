import { registrarUsuario } from './services.js';

const boton_registrar = document.getElementById('boton-registrar');
const boton_volver = document.getElementById('boton-volver');

const volver = () => {
    window.location.href = '/index.html';
}

const registrar = async(e) => {
    e.preventDefault();

    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombres').value;
    const apellido = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;
    const pass = document.getElementById('pass').value;

    const usuario = {
        cedula: cedula,
        nombres: nombre,
        apellidos: apellido,
        edad: edad,
        correo: correo,
        password: pass
    };

    const response = await registrarUsuario(usuario);

    if (response.status === 'ok') {
        alert('Usuario registrado con éxito');
        window.location.href = '/index.html';
    } else {
        alert(response.message);
    }
}

boton_registrar.addEventListener('click', registrar);
boton_volver.addEventListener('click', volver);