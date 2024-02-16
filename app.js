let numeroSecreto = 0;  
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;   

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  
    else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } 
        else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    // Si ya sorteamos todos los numero 
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sorteaaron todos los números posibles');
    }
    else{
        //Si el numero generado esta incluido en la lista 
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //- Limpiar caja
    limpiarCaja();
    //- Indicar mensaje de intervalos de números
    //- Generar el número aleatorio
    //- Inicializar el numero de intentos
    condicionesIniciales();
    //- Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
      
}

condicionesIniciales();
