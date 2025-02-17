// piedrapapeltijera.js

function jugar(eleccionUsuario) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const jugadaSistema = opciones[Math.floor(Math.random() * 3)];

    document.getElementById("jugadaSistema").textContent = jugadaSistema;

    let resultado = '';

    if (eleccionUsuario === jugadaSistema) {
        resultado = ' EMPATE ';
    } else if (
        (eleccionUsuario === 'piedra' && jugadaSistema === 'tijera') ||
        (eleccionUsuario === 'papel' && jugadaSistema === 'piedra') ||
        (eleccionUsuario === 'tijera' && jugadaSistema === 'papel')
    ) {
        resultado = ' ¡Ganaste! ';
    } else {
        resultado = ' Perdiste, intenta nuevamente. ';
    }

    document.getElementById("resultado").textContent = resultado;
    document.getElementById("reintentar").style.display = 'block';
}

function reiniciarJuego(){
    document.getElementById ("resultado").textContent = '';
    document.getElementById ("jugadaSistema").textContent = '';
    document.getElementById ("reintentar").textContent = 'Intenta Nuevamente';
}