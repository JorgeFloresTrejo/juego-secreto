let numeroSecreto = 0; 
let intentos = 0;
let maximoIntentos = 3;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


// Función para generar el número secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        // Si el numero secreto ya está incluido en la lista de numeros se generará un nuevo número
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            // Si el número que se genera no está en la lista, se agrega a la lista y retorna el número
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
};

 // Optimizar el código con una función
function asignarTextoElemento(elementoHTML, texto){
    let elemento = document.querySelector(elementoHTML);
    elemento.innerHTML = texto;   
    return; 
};

// Función para definir las secciones de inicio
function condicionesIniciales(){
    // Asignando el texto a los elementos de inicio
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Escoge un número del 1 al ${numeroMaximo}`);
    // LLamamos la función para generar el número secreto
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

// Función para limpiar el input
function limpiarInput(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

// Función que se ejecuta cuando el usuario da click en el boton de intento
function verificarIntento(){
    let intentoDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto === intentoDeUsuario){
        asignarTextoElemento('p', `Acertaste el número secreto que es ${numeroSecreto} y lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // Si el usuario no acertó
        if(intentoDeUsuario < numeroSecreto ){
            asignarTextoElemento('p', 'El número secreto es mayor');
        }else{
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}

// Función para reiniciar el juego
function reiniciarJuego(){
    // Limpiar la caja
    limpiarInput();
    // Reiniciar el mensaje
    // Generar de nuevo el número aleatorio
    // Inicializar el número de intentos en 1
    condicionesIniciales();
    // Deshabilitar el boton de reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;
}

condicionesIniciales();