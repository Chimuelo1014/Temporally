
let estado = {
    eleccionInicial: '',
    puntaje: 0,
};

function mostrarInicio() {
    document.getElementById('juego').innerHTML = `
    <h2>Bienvenido, desarrollador</h2>
    <p>CRUDY ha despertado. ¿Cuál ruta tomarás?</p>
    <button class="btn btn-primary boton-opcion" onclick="nivel1('nucleo')">Núcleo lógico</button>
    <button class="btn btn-primary boton-opcion" onclick="nivel1('simulado')">Entorno simulado</button>
    <button class="btn btn-danger boton-opcion" onclick="nivel1('trampa')">Ruta desconocida</button>
    `;
}

function nivel1(opcion) {
    estado.eleccionInicial = opcion;
    let mensaje = {
    nucleo: 'Accedes al corazón de CRUDY...',
    simulado: 'Todo parece real, pero hay errores...',
    trampa: '¡Era una trampa! Reinicias desde un lugar extraño...'
    }[opcion];

    document.getElementById('juego').innerHTML = `
    <h2>Nivel 1: Inicio del Protocolo</h2>
    <p>${mensaje}</p>
    <button class="btn btn-secondary" onclick="nivel2()">Continuar</button>
    `;
}

function nivel2() {
    document.getElementById('juego').innerHTML = `
    <h2>Nivel 2: Laberinto de Decisión</h2>
    <p>Escoge una puerta:</p>
    <button class="btn btn-success boton-opcion" onclick="nivel3('condicional')">Puerta Condicional</button>
    <button class="btn btn-warning boton-opcion" onclick="nivel3('directo')">Acceso Directo</button>
    <button class="btn btn-info boton-opcion" onclick="nivel3('codigo')">Puerta de Código</button>
    `;
}

function nivel3(seleccion) {
    estado.seleccionPuerta = seleccion;
    document.getElementById('juego').innerHTML = `
    <h2>Nivel 3: Desafío de Reconstrucción</h2>
    <p>Memoriza la secuencia:</p>
    <div id="secuencia" class="my-3">🟥 🟩 🟦</div>
    <button class="btn btn-secondary" onclick="mostrarOpcionesNivel3()">He memorizado</button>
    `;
    setTimeout(() => {
    document.getElementById('secuencia').classList.add('oculto');
    }, 3000);
}

function mostrarOpcionesNivel3() {
    document.getElementById('juego').innerHTML = `
    <h2>¿Cuál era la secuencia?</h2>
    <button class="btn btn-light boton-opcion" onclick="nivel4(true)">🟥 🟩 🟦</button>
    <button class="btn btn-light boton-opcion" onclick="nivel4(false)">🟦 🟩 🟥</button>
    `;
}

function nivel4(acierto) {
    if (acierto) estado.puntaje++;
    document.getElementById('juego').innerHTML = `
    <h2>Nivel 4: Lógica Fractal</h2>
    <p>Si A → B, B → C, entonces:</p>
    <button class="btn btn-info boton-opcion" onclick="nivel5(true)">A → C</button>
    <button class="btn btn-danger boton-opcion" onclick="nivel5(false)">No se puede deducir</button>
    `;
}

function nivel5(acierto) {
    if (acierto) estado.puntaje++;
    document.getElementById('juego').innerHTML = `
    <h2>Nivel 5: Juicio del Núcleo</h2>
    <p>¿Cuál de estos es un tipo de estructura de control en programación?</p>
    <button class="btn btn-success boton-opcion" onclick="final(true)">Condicional</button>
    <button class="btn btn-danger boton-opcion" onclick="final(false)">Contenedor</button>
    `;
}

function final(acierto) {
    if (acierto) estado.puntaje++;
    let final = estado.puntaje >= 2 ? "¡Has liberado el núcleo de CRUDY!" : "CRUDY no ha sido convencido. Te quedas atrapado...";
    document.getElementById('juego').innerHTML = `
    <h2>Resultado Final</h2>
    <p>${final}</p>
    <p>Puntaje: ${estado.puntaje}/3</p>
    <button class="btn btn-light" onclick="reiniciar()">Reiniciar Juego</button>
    `;
}

function reiniciar() {
    estado = { eleccionInicial: '', puntaje: 0 };
    mostrarInicio();
}

// Inicio del juego
mostrarInicio();
