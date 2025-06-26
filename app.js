// Estado global del jugador
const estado = {
  seleccionPrimeraOpcion: "",
  seleccionPuerta: "",
  puntaje: 0,
};

// Muestra una introducción tipo Hero con fondo, título, texto y un botón que lanza una función
function mostrarHeroNarrativo(fondoURL, titulo, subtitulo, botonTexto, callback) {
  document.body.innerHTML = `
    <section class="hero is-fullheight" style="background-image: url('${fondoURL}'); background-size: cover; background-position: center;">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-white is-1">${titulo}</h1>
          <h2 class="subtitle has-text-white is-4">${subtitulo}</h2>
          <button class="button is-light is-medium mt-5" onclick="${callback}">${botonTexto}</button>
        </div>
      </div>
    </section>
  `;
}

// Muestra una pantalla con fondo que luego revela el contenido con delay
function mostrarPantallaTransicion(fondoURL, contenidoHTML, delay = 1500) {
  document.body.innerHTML = `
    <section class="nivel" style="background-image: url('${fondoURL}');">
      <div class="contenido-nivel" id="contenido-nivel">
        <h2 class="title is-3 has-text-white">Cargando nivel...</h2>
      </div>
    </section>
  `;

  setTimeout(() => {
    document.getElementById("contenido-nivel").innerHTML = contenidoHTML;
    document.getElementById("contenido-nivel").classList.add("visible");
  }, delay);
}

// Nivel 2: Ruta inicial según elección
function nivel2(opcion) {
  estado.seleccionPrimeraOpcion = opcion;

  mostrarHeroNarrativo(
    "./img/nivel 2.png",
    `Nivel 2: El Laberinto de Decisión - "Puertas de la Mente" ${opcion.toUpperCase()}`,
    " CRUDY los transporta a un entorno abstracto donde deben atravesar puertas simbólicas:",
    "Ver opciones",
    "mostrarCartasNivel2()"
  );
}

// Muestra cartas personalizadas por ruta
function mostrarCartasNivel2() {
  const opcion = estado.seleccionPrimeraOpcion;
  const cartas = {
    logico: [
      { titulo: "Silogismo", texto: "Conclusión lógica basada en premisas.", img: "https://elperiodico.com.bo/wp-content/uploads/2024/02/IA.jpg" },
      { titulo: "Secuencia", texto: "Ordena correctamente los pasos.", img: "https://picsum.photos/seed/logic2/400/300" },
      { titulo: "Paradoja", texto: "Desafíos con contradicciones aparentes.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheQBPHLdgSKjH76m8twP211Ts7Fcnju4PhyejXygADyq7SlJyMQlddCNbRaGF5dGabWtE0glXnSd0KZciPwTXJPyMBx-90_-gX3cOCJeuiG2tnRMBF7EwDfA6hfGTyyIJDpsPF89ThiTKa/s1600/paradojas_ciencia_filosofia.jpg" }
    ],
    simulado: [
      { titulo: "Prueba", texto: "Simulación de decisiones reales.", img: "/img/prueba.webp" },
      { titulo: "Evaluación", texto: "Analiza datos y respuestas.", img: "./img/evaluacion.webp" },
      { titulo: "Escenario", texto: "Toma decisiones en tiempo real.", img: "./img/Atajo1.webp" }
    ],
    trampa: [
      { titulo: "Ilusión", texto: "¿Puedes distinguir lo falso?", img: "https://i.blogs.es/59f037/list_640px/1366_2000.jpg" },
      { titulo: "Mentira", texto: "Cuidado con los engaños.", img: "https://media.istockphoto.com/id/533045396/es/foto/funeral-hombre-de-negocios-sosteniendo-los-dedos-cruzados-detr%C3%A1s-de-la-espalda.jpg?s=612x612&w=0&k=20&c=DzVv2ArlU9LLoTONZyy9eHisXVxnDuIGANAZTOXD5pg=" },
      { titulo: "Falsa pista", texto: "No te dejes llevar por la trampa.", img: "https://media.licdn.com/dms/image/v2/C4D12AQGODVHVo805NA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1529475568068?e=2147483647&v=beta&t=s-ytwMPwbjL6udF7SLPxLO7UsX0Fqgv89I3FIU2IpOE" }
    ]
  };

  const seleccion = cartas[opcion];
  let html = `<h2 class="title is-3 has-text-white">Selecciona una opción</h2><div class="columns is-multiline is-centered mt-5">`;

  seleccion.forEach(carta => {
    html += `
      <div class="column is-4">
        <div class="card has-equal-height">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${carta.img}" alt="${carta.titulo}">
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-5">${carta.titulo}</p>
            <p class="content">${carta.texto}</p>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item button is-info is-light" onclick="nivel3('${carta.titulo}')">Seleccionar</a>
          </footer>
        </div>
      </div>`;
  });

  html += `</div>`;
  mostrarPantallaTransicion("https://s10.s3c.es/imag/_v0/1792x978/b/5/e/ia_apoca.jpg", html);
}

// Nivel 3: Hero previo antes del reto
function nivel3(seleccion) {
  estado.seleccionPuerta = seleccion;

  mostrarHeroNarrativo(
    "./img/nivel 3.png",
    "Nivel 3: Desafío de Reconstrucción  Memoria del Código",
    "Para acceder a partes clave del núcleo, los desarrolladores deben reconstruir fragmentos de código que CRUDY ha corrompido. Se trata de secuencias visuales breves, códigos fugaces que se muestran por unos segundos y luego desaparecen",
    "Iniciar desafío",
    "mostrarMemoria()"
  );
}

// Reto de memorización
function mostrarMemoria() {
  const contenido = `
    <h2 class="title is-3 has-text-white">Memoriza la secuencia:</h2>
    <p class="subtitle is-5 has-text-white" id="secuencia">🟥 🟩 🟦</p>
    <button class="button is-warning mt-3" onclick="mostrarOpcionesNivel3()">He memorizado</button>
  `;

  mostrarPantallaTransicion("./img/crudy2.png", contenido, 3000);

  setTimeout(() => {
    const secuencia = document.getElementById("secuencia");
    if (secuencia) secuencia.classList.add("oculto");
  }, 6000);
}

// Opción luego del desafío visual
function mostrarOpcionesNivel3() {
  const contenido = `
    <h2 class="title is-3 has-text-white">¿Cuál era la secuencia?</h2>
    <button class="button is-success boton-opcion" onclick="nivel4(true)">🟥 🟩 🟦</button>
    <button class="button is-danger boton-opcion" onclick="nivel4(false)">🟦 🟩 🟥</button>
  `;

  mostrarPantallaTransicion("./img/background3.webp", contenido);
}

// Nivel 4: Pregunta lógica/trampahttp://localhost:5500/index.html#cartas
function nivel4(acierto) {
  if (acierto) estado.puntaje++;

  let enunciado = "Si A → B y B → C, entonces:";
  if (estado.seleccionPrimeraOpcion === "trampa") {
    enunciado = "Si parece verdadero pero no lo es, entonces:";
  }

  const contenido = `
    <h2 class="title is-3 has-text-white">Nivel 4: Lógica Fractal El Camino de las Condiciones</h2>
    <p class="subtitle is-5 has-text-white">CRUDY lanza una secuencia de decisiones anidadas: ${enunciado}</p>
    <button class="button is-info boton-opcion" onclick="nivel5(true)">A → C</button>
    <button class="button is-danger boton-opcion" onclick="nivel5(false)">No se puede deducir</button>
  `;

  mostrarPantallaTransicion("./img/background1.png", contenido);
}

// Nivel 5: Pregunta final
function nivel5(acierto) {
  if (acierto) estado.puntaje++;

  let pregunta = "¿Cuál es una estructura de control en programación?";
  if (estado.seleccionPrimeraOpcion === "simulado") {
    pregunta = "¿Qué usarías para tomar decisiones en código?";
  }

  const contenido = `
    <h2 class="title is-3 has-text-white">Nivel 5: Juicio Final</h2>
    <p class="subtitle is-5 has-text-white"> Juicio del Núcleo - "Última Compilación" ${pregunta}</p>
    <button class="button is-success boton-opcion" onclick="final(true)">Condicional</button>
    <button class="button is-danger boton-opcion" onclick="final(false)">Contenedor</button>
  `;

  mostrarPantallaTransicion("./img/1.png", contenido);
}

// Final
function final(acierto) {
  if (acierto) estado.puntaje++;

  const contenido = `
    <h2 class="title is-2 has-text-black">¡Has completado el desafío!</h2>
    <p class="subtitle is-4 has-text-black">Puntaje final: <strong>${estado.puntaje} / 3</strong></p>
    <p class="has-text-black">Ruta elegida: <strong>${estado.seleccionPrimeraOpcion.toUpperCase()}</strong></p>
    <p class="has-text-black">Última carta: <strong>${estado.seleccionPuerta}</strong></p>
    <button class="button is-primary mt-4" onclick="location.reload()">Volver a empezar</button>
  `;

  mostrarPantallaTransicion("./img/apocalipsis.png", contenido);
}
