document.addEventListener('DOMContentLoaded', () => {
    const welcomeElement = document.getElementById('welcome');
    const name = document.getElementById('name');
    const price = document.getElementById('price');
    const description = document.getElementById('description');
    const photo = document.getElementById('photo');
    const buttonEnviar = document.getElementById('buttonEnviar');
    const productForm = document.getElementById('productForm');
    let products = [];
    // Obtener usuario de localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username) {
        welcomeElement.textContent = `Hola ${storedUser.username}!`;
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'No hay usuario registrado',
            text: 'No hay usuario registrado. Por favor, inicia sesión primero.',
        }).then(() => {
            window.location.href = 'login.html';
        });
    }
    // Cargar productos guardados al cargar la página
    window.addEventListener('load', function() {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            products = JSON.parse(savedProducts);
        }
    });
    // Manejo del envío del formulario
    if (productForm) {
        productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const reader = new FileReader();
            reader.onload = function(event) {
                const product = {
                    name: name.value,
                    price: price.value,
                    description: description.value,
                    photo: event.target.result, // Aquí se obtiene el Base64 de la imagen
                };
                products.push(product);
                localStorageSend();
                window.location.href = 'view.html';
            };
            reader.readAsDataURL(photo.files[0]);
        });
    }
    // Función para guardar productos en localStorage
    function localStorageSend() {
        localStorage.setItem('products', JSON.stringify(products));
    }
});