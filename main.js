let usuario = document.getElementById("usuaio");
let contraseña = document.getElementById("contraseña");
let password = false;


function entrar() {

while (password === false) {
    if (usuario === 'usuario@mail.com' && contraseña === 'gatitos13') {
        prompt('Contraseña correcta')
        password = true;
    } else {
        alert('Intenta de nuevo')
        password = false;
    }
}
}