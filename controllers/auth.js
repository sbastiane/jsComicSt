document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Manejo del formulario de registro
    if (registerForm) {
        const registerButton = document.getElementById('registerButton');
        registerButton.addEventListener('click', (event) => {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('passwords').value;

            // Guardar usuario en localStorage
            const user = {
                username: username,
                password: password
            };

            localStorage.setItem('user', JSON.stringify(user));
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'Usuario registrado exitosamente.',
            }).then(() => {
                window.location.href = 'login.html';
            });
        });
    }

    // Manejo del formulario de login
    if (loginForm) {
        const loginButton = document.getElementById('loginButton');
        loginButton.addEventListener('click', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('passwords').value;

            // Obtener usuario de localStorage
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    text: 'Inicio de sesión exitoso.',
                }).then(() => {
                    window.location.href = 'index.html';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error de inicio de sesión',
                    text: 'Usuario o contraseña incorrectos. Por favor, intenta nuevamente.',
                });
            }
        });

        // Verificar si hay usuario registrado al cargar la página de login
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            Swal.fire({
                icon: 'warning',
                title: 'No hay usuario registrado',
                text: 'No hay usuario registrado. Por favor, regístrate primero.',
            }).then(() => {
                window.location.href = 'register.html';
            });
        }
    }
});