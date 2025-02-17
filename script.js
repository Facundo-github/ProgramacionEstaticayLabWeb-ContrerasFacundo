// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');

    form.addEventListener('input', () => {
        const formData = new FormData(form);

        // Actualizar la tabla con los datos del formulario
        let i = 1; // Comenzar desde la segunda fila (índice 1) para los datos
        for (let [key, value] of formData.entries()) {
            if (key === 'suscripcion') {
                // Manejar las casillas de verificación de suscripción
                const checkboxes = form.querySelectorAll('input[name="suscripcion"]:checked');
                const suscripciones = Array.from(checkboxes).map(cb => cb.value).join(', ');
                rows[i].cells[1].textContent = suscripciones;
            } else if (key === 'metodo_contacto') {
                // Mantener el valor seleccionado para el método de contacto
                const metodoContacto = form.querySelector('input[name="metodo_contacto"]:checked').value;
                rows[i].cells[1].textContent = metodoContacto;
            } else {
                rows[i].cells[1].textContent = value;
            }
            i++;
        }
    });
});