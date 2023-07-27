function CamposVacios() {
    var campos = document.querySelectorAll('input[type="text"], input[type="number"]');
    var camposVacios = false;
    
    campos.forEach(function (campo) {
        if (campo.value.trim() === "") {
            camposVacios = true;
            campo.style.border = "2px solid red";
        } else {
            campo.style.border = "1px solid #ccc";
        }
    });

    if (camposVacios) {
        document.querySelector('.alerta').classList.add('activa');
        document.querySelector('.alerta').innerHTML = "Todos los campos son obligatorios";
        setTimeout(function () {
            document.querySelector('.alerta').classList.remove('activa');
            document.querySelector('.alerta').innerHTML = "";
        }, 3000);
        return false;
    } else {
        return true;
    }
}

function SoloNumeros(input) {
    var soloNumeros = /^[0-9]+$/;
    var valor = input.value;
    
    if (!soloNumeros.test(valor)) {
        input.value = valor.replace(/\D/g, '');
    }
}

function SoloDecimales(input) {
    var soloDecimales = /^\d+(\.\d{0,2})?$/;
    var valor = input.value;
    
    if (!soloDecimales.test(valor)) {
        input.value = valor.replace(/[^\d.]/g, '');
    }
}
function SoloLetras(input) {
    var soloLetras = /^[A-Za-z\s]+$/;
    var valor = input.value;
    
    if (!soloLetras.test(valor)) {
        input.value = valor.replace(/[^A-Za-z\s]/g, '');
    }
}