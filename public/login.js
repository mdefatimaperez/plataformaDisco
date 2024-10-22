const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');

function login() {
    if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
        swal({
            title: "UPS!",
            text: "Completa los campos para continuar",
            icon: "warning",
   
        });
    } else {
        console.log('Inicio de sesión exitoso!');
    }
}

//error contraseña corta
passwordInput.addEventListener('input', function () {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = '*Tu respuesta es demasiado corta*';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});