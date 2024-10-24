document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        enviarFormulario();
    });

    function enviarFormulario() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            alert('Formulario enviado con éxito.\nNombre: ' + nombre + '\nCorreo Electrónico: ' + email + '\nMensaje: ' + mensaje);
            formulario.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    }
});
