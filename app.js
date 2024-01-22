let numeroSecreto = 0;
let numeroIntentos =0;
let listaNumerosSorteados =[];
let numeroMaximo = 10 ;


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// con esta funcion atrapamos el numero que coloca el usuario por el id de la caja de html
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}`);
        //vamos a activar el botton de nuevo juego
        document.querySelector('#reiniciar').removeAttribute('disable',"true");
    } else{
        // el usuario no acertó;
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor'); 
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function funcionesIniciales(){
    asignarTextoElemento("h1","Juego del número Secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    numeroIntentos =1

}


function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    //Generar numero aleatorio 
    //Iniciar el numero de intentos 
    funcionesIniciales();
    //Deshabilitar el boton de nuevo juego el # es para decir el ID
    document.querySelector('#reiniciar').setAttribute('disable', "true")

}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')

    } else{

        // si el numero generado esta incluido en lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();

        }else{
            listaNumerosSorteados.push(numeroGenerado);//guarda el numero en la lista con el push
            return numeroGenerado;
        }
}   }

funcionesIniciales();




