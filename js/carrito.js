document.addEventListener('DOMContentLoaded', function() {
    const listaCarrito = document.getElementById('listaCarrito');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function mostrarCarrito() {
        listaCarrito.innerHTML = '';
        carrito.forEach(function(producto, index) {
            const li = document.createElement('li');
            li.textContent = producto;
            listaCarrito.appendChild(li);
        });
    }

    function agregarAlCarrito(producto) {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(producto + ' ha sido añadido al carrito.');
        mostrarCarrito();
    }

    mostrarCarrito();

    window.agregarAlCarrito = agregarAlCarrito;
});
