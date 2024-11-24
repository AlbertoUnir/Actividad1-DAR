import React from "react";
import "../styles/actividad1_bloc_style.css"; // Importar el CSS proporcionado
import { withPrefix } from "gatsby";

const IndexPage = () => {
  return (
    <>
      {/* Define el tipo de documento como HTML5 */}
      {/* Define el idioma de la página como español */}
      <html lang="es">
        <header id="inicio">
          {/* Define el conjunto de caracteres como UTF-8 */}
          <meta charSet="UTF-8" />
          {/* Vincula la fuente Montserrat desde Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* Vincula el archivo CSS de estilos del blog */}
          <title>Blog rutas en bicicleta</title>
        </header>
        <body>
          {/* Encabezado del Blog */}
          <header>
            <h1>RUTAS EN BICICLETA</h1> {/* Título del blog */}
            <h4>Un blog donde comparto mis experiencias y opiniones</h4> {/* Subtítulo del blog */}
          </header>

          {/* Barra de Navegación */}
          <nav className="barra-navegacion">
            <ul>
              <li>
                <a href="#entrada1">MONTAÑA</a> {/* Enlace a la sección de montaña */}
              </li>
              <li>
                <a href="#entrada2">CARRETERA</a> {/* Enlace a la sección de carretera */}
              </li>
              <li>
                <a href="#entrada3">CIUDAD</a> {/* Enlace a la sección de ciudad */}
              </li>
            </ul>
          </nav>

          {/* Sección Principal del Blog */}
          <main>
            {/* Primera Entrada del Blog */}
            <article className="entrada" id="entrada1">
              <h2>Parque nacional de Sierra Nevada</h2> {/* Título de la primera entrada */}
              <div className="informacion-entrada">
                <p className="tipo-entrada">Ruta de montaña</p>
                <p className="fecha">Publicado el 23 de noviembre de 2024</p>
              </div>
              {/* Imagen para la primera entrada */}
              <img
                src={withPrefix("/static/images/bicicleta_montaña_sierra_nevada.jpeg")}
                alt="Ciclista en una ruta de montaña en un parque nacional"
                className="imagen-articulo"
              />
              {/* Párrafos describiendo la experiencia de la ruta */}
              <p>
                Si eres amante de la naturaleza y la aventura, las rutas de bicicleta de montaña son una excelente manera de conectar con el aire libre. Una de mis rutas favoritas es la del Parque Nacional de Sierra Nevada, donde los paisajes te dejan sin aliento y la adrenalina está garantizada. Con caminos llenos de rocas, pendientes desafiantes y bajadas rápidas, esta ruta es perfecta para ciclistas con experiencia que buscan emociones fuertes. Recuerda llevar siempre el equipo adecuado, incluyendo casco y guantes, y no olvides revisar tu bicicleta antes de comenzar.
              </p>
              <p>
                Durante el trayecto, te encontrarás con vistas increíbles, como lagos de montaña y bosques densos. También es posible avistar animales salvajes, lo que añade un toque especial a la experiencia. La ruta tiene un nivel de dificultad medio-alto, así que asegúrate de tener una buena condición física y suficiente agua para el trayecto.
              </p>
              {/* Botón para volver al inicio */}
              <a href="#inicio">
                Volver al inicio
              </a>
            </article>

            {/* Segunda Entrada del Blog */}
            <article className="entrada" id="entrada2">
              <h2>Costa del Sol</h2> {/* Título de la segunda entrada */}
              <div className="informacion-entrada">
                <p className="tipo-entrada">Ruta de carretera</p>
                <p className="fecha">Publicado el 23 de noviembre de 2024</p>
              </div>
              {/* Imagen para la segunda entrada */}
              <img
                src={withPrefix("/static/images/bicicleta_carretera_ruta_del_sol.jpeg")}
                alt="Ruta de bicicleta de carretera a lo largo de la costa"
                className="imagen-articulo"
              />
              {/* Párrafos describiendo la experiencia de la ruta */}
              <p>
                Las rutas de bicicleta de carretera son perfectas para aquellos que aman la velocidad y los desafíos de largas distancias. Una de las mejores rutas de carretera que he hecho fue la Ruta del Sol, en la Costa del Sol, donde puedes pedalear a lo largo de la costa disfrutando del sol, la brisa del mar y las impresionantes vistas del Mediterráneo.
              </p>
              <p>
                La ruta tiene algunos tramos desafiantes, como subidas largas que pondrán a prueba tus piernas, pero al llegar a la cima, las vistas y las bajadas compensan cada esfuerzo. Durante la travesía, encontrarás pequeñas cafeterías donde puedes parar a descansar y tomar un café o un bocadillo.
              </p>
              {/* Botón para volver al inicio */}
              <a href="#inicio">
                Volver al inicio
              </a>
            </article>

            {/* Tercera Entrada del Blog */}
            <article className="entrada" id="entrada3">
              <h2>Barcelona</h2> {/* Título de la tercera entrada */}
              <div className="informacion-entrada">
                <p className="tipo-entrada">Ruta de ciudad</p>
                <p className="fecha">Publicado el 23 de noviembre de 2024</p>
              </div>
              {/* Imagen para la tercera entrada */}
              <img
                src={withPrefix("/static/images/bicicleta_ciudad_Barcelona.jpeg")}
                alt="Ruta de bicicleta urbana por una ciudad moderna"
                className="imagen-articulo"
              />
              {/* Párrafos describiendo la experiencia de la ruta */}
              <p>
                Explorar la ciudad en bicicleta es una excelente forma de conocer sus calles y descubrir lugares que de otra forma podrías pasar por alto. Mi ruta favorita es la que atraviesa los parques y los principales puntos históricos de la ciudad de Barcelona.
              </p>
              <p>
                Lo mejor de las rutas urbanas es la facilidad para hacer paradas en cafeterías, museos y plazas. No necesitas una bicicleta especial, pero asegúrate de llevar un candado para poder dejarla sin preocupaciones mientras exploras los alrededores.
              </p>
              {/* Botón para volver al inicio */}
              <a href="#inicio">
                Volver al inicio
              </a>
            </article>
          </main>

          {/* Pie de Página del Blog */}
          <footer>
            <h4>© 2024 - Alberto Giménez Torres - Actividad 1 - Desarrollo de aplicaciones en red.</h4>
          </footer>
        </body>
      </html>
    </>
  );
};

export default IndexPage;
