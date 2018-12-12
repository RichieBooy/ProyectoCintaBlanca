let usuario;
let password;
let correcta  = false;

function login() {

    event.preventDefault();


    
    usuario = document.getElementById('usuario').value;
    password = document.getElementById('password').value;

    console.log(usuario + password)

    if (password === 'gatitos13' && usuario === 'usuario@mail.com') {
        window.open("Inicio.html","_self");
        console.log('Correcta')
    } else {
        alert('Contraseña incorrecta');
    }
}
