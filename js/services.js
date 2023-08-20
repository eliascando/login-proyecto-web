const API_URL = 'https://back-proyecto-web.onrender.com/api';

const validarUsuario = async({correo, password}) => {
    const response = await fetch(`${API_URL}/usuarios/validar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo, password })
    });
    const data = await response.json();
    console.log(data.data);
    return data.data;
}

const registrarUsuario = async(usuario) => {
    const response = await fetch(`${API_URL}/usuarios/registrar`, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
};

const guardarProducto = async(producto) => {
    const response = await fetch(`${API_URL}/productos/registrar`, {
        method: 'POST',
        body: JSON.stringify(producto),
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
};

const obtenerProductos = async(cedula) => {
    const response = await fetch(`${API_URL}/productos/${cedula}`);
    const data = await response.json();
    return data.data;
};

export { validarUsuario, registrarUsuario, guardarProducto, obtenerProductos }