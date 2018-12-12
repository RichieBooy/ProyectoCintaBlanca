// let usuario = document.getElementById("usuario");
// let contraseña = document.getElementById("contraseña");

// function entrar() {
//     console.log(contraseña.innerHTML);
// }



// let password = false;


// function entrar() {

// while (password === false) {
//     if (usuario === 'usuario@mail.com' && contraseña === 'gatitos13') {
//         prompt('Contraseña correcta')
//         password = true;
//     } else {
//         alert('Intenta de nuevo')
//         password = false;
//     }
// }
// }

let contraseña;
let password = false;
let correcta;

while (correcta === false) {
    password = prompt('Ingresa contraseña');

    if (contraseña === 'gatitos13') {
        console.log('Correcta');
        correcta = true;
    } else {
        console.log('Contraseña incorrecta');
    }
}
