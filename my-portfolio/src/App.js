/* --- INICIO DEL ARCHIVO App.js --- */

// Importamos React y 'useState' para manejar el estado del menú móvil
import React, { useState } from 'react';
// Importamos el archivo CSS que contendrá tus estilos
import './App.css';

// --- (PASO 1) TUS DATOS (CON EL NUEVO PROYECTO AÑADIDO) ---

// Datos que antes estaban en 'project.js'
const projects = [
  // =================================================================
  // == PROYECTOS DE ANÁLISIS DE DATOS Y AUTOMATIZACIÓN
  // =================================================================
  {
    img: "assets/img/Cuentasmedicas.png",
    link: "#", // Reemplaza con el link a tu dashboard
    title: "Automatización y Análisis de Gestión de Facturación y Radicación",
    description:
      "Este proyecto abordó el reto de transformar un proceso manual e ineficiente de gestión y análisis de datos de facturación, radicación, prefacturación y órdenes de servicio. Para lograrlo, se estableció una conexión en tiempo real entre Power BI y la base de datos KUB App, implementando las consultas necesarias mediante MariaDB como motor principal. Esto permitió reemplazar múltiples archivos Excel desorganizados por un dashboard dinámico, con filtros por fechas y sedes, que ofrece información actualizada, confiable y completamente automatizada para la toma de decisiones.",
    icons: ["assets/icons/powerbi.svg","assets/icons/excel.svg","assets/icons/iconopy.svg","assets/icons/dato1.png"],
    category: "data",
    imageFit: 'contain'
  },
  {
    img: "assets/img/automatizacion.webp",
    link: "https://github.com/Dilan2119/suite-automatizacion-datos",
    title: "Suite de Automatización de Datos",
    description:
      "Una aplicación de escritorio desarrollada en Python para automatizar tareas de oficina repetitivas... ofrece una interfaz gráfica de usuario (GUI) intuitiva y centralizada para procesar archivos JSON y Excel...",
    icons: ["assets/icons/iconopy.svg","assets/icons/excel.svg"],
    category: "data",
  },
  // =================================================================
  // == PROYECTOS DE DESARROLLO DE SOFTWARE
  // =================================================================
  {
    // --- ¡NUEVO PROYECTO AÑADIDO AQUÍ! ---
    img: "assets/img/auditoria_ipsch_dashboard.webp", // Usa la imagen del dashboard como miniatura
    link: "/auditoria-ipsch", // Esta es la "ruta interna" especial que usaremos
    title: "Plataforma de Auditoría Médica IPSCH",
    description:
      "Plataforma web para digitalizar auditorías de historias clínicas, reemplazando procesos manuales en Excel y centralizando la gestión de calidad para médicos auditores.",
    icons: ["assets/icons/iconoreact.svg", "assets/icons/iconosjs.svg", "assets/icons/iconossql.svg", "assets/icons/iconohtml.svg", "assets/icons/iconocss.svg"], // ¡Ajusta estas tecnologías!
    category: "software",
  },

  {
    img: "assets/img/canarifruver.webp",
    link: "https://github.com/Dilan2119/SISTEMA-DE-FACTURACION",
    title: "Sistema de Facturación para Supermercados",
    description:
      'Sistema de escritorio con Python y MySQL para gestionar ventas, inventario y facturación concurrente en supermercados.',
    icons: ["assets/icons/iconopy.svg", "assets/icons/iconossql.svg"],
    category: "software",
  },
  {
    img: "assets/img/veeduriadigital.webp",
    link: "https://nicgaho.mnz.dom.my.id/",
    title: "Veeduria Digital",
    description:
      "Proyecto FullStack donde los ciudadanos pueden ver los proyectos del municipio, informar sobre problemas, entre otras cosas.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg", "assets/icons/iconosjs.svg", "assets/icons/iconossql.svg", "assets/icons/iconosass.svg", "assets/icons/iconophp.svg", "assets/icons/iconogit.svg"],
    category: "software",
  },
  {
    img: "assets/img/dental.webp",
    link: "https://dentalclinica.netlify.app/",
    title: "Dental Clinic",
    description:
      "Página web para una clínica dental que ofrece servicios de odontología, con áreas especializadas en cosmética, pediatría e implantes.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg", "assets/icons/iconosjs.svg", "assets/icons/iconoboot.svg"],
    category: "software",
  },
  {
    img: "assets/img/blogcafe.webp",
    link: "https://dilanbulding-blogcafe.netlify.app/",
    title: "Blog de Café",
    description:
      'Sitio web que ofrece recetas, consejos y cursos sobre café, cubriendo temas como tipos de granos, recetas y beneficios.',
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg"],
    category: "software",
  },
    {
    img: "assets/img/frontend.webp",
    link: "https://almacenderopa.netlify.app/",
    title: "Almacén de Ropa",
    description:
      "Tienda en línea que ofrece camisetas con diseños relacionados con tecnologías de desarrollo web como VueJS, AngularJS, ReactJS y más.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg"],
    category: "software",
  },
  {
    img: "assets/img/Adivina.webp",
    link: "https://adivinanumerosecreto.netlify.app/",
    title: "Adivina el Número Secreto",
    description:
      "Juego interactivo donde el jugador intenta adivinar un número secreto. El juego proporciona pistas sobre si el número es mayor o menor hasta que el jugador acierta.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg", "assets/icons/iconosjs.svg"],
    category: "software",
  },
  {
    img: "assets/img/diseño.webp",
    link: "httpss://diseofreelance.netlify.app/",
    title: "Diseño Freelance",
    description:
      "Ofrece servicios de diseño y desarrollo web, aplicaciones móviles y e-commerce. La página incluye secciones sobre sus servicios, una forma de contacto y ubicación.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg"],
    category: "software",
  },
];

// Datos que antes estaban en 'skill.js'
const skills = [
  { name: "HTML", icon: "assets/icons/iconohtml.svg" },
  { name: "CSS", icon: "assets/icons/iconocss.svg" },
  { name: "JavaScript", icon: "assets/icons/iconosjs.svg" },
  { name: "Bootstrap", icon: "assets/icons/iconoboot.svg" },
  { name: "PHP", icon: "assets/icons/iconophp.svg" },
  { name: "Sass", icon: "assets/icons/iconosass.svg" },
  { name: "MySQL", icon: "assets/icons/iconossql.svg" },
  { name: "Git", icon: "assets/icons/iconogit.svg" },
  { name: "React", icon: "assets/icons/iconoreact.svg" },
  { name: "Flutter", icon: "assets/icons/iconoflu.svg" },
  { name: "Python", icon: "assets/icons/iconopy.svg" },
  { name: "Tailwind", icon: "assets/icons/iconotail.svg" },
  { name: "Power Bi", icon: "assets/icons/powerbi.svg" },
  { name: "Excel", icon: "assets/icons/excel.svg" },
  { name: "Base De Datos", icon: "assets/icons/dato1.png" }
];


function App() {
  // Estado para el menú
  const [menuVisible, setMenuVisible] = useState(false);
  // --- ¡NUEVO ESTADO PARA CONTROLAR LA VISTA! ---
  const [currentView, setCurrentView] = useState('home'); 

  
  const mostrarOcultarMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Esta función solo cierra el menú (para links de ancla)
  const seleccionar = () => {
    setMenuVisible(false);
  };

  // --- ¡NUEVA FUNCIÓN PARA CAMBIAR DE "PÁGINA"! ---
  const seleccionarView = (viewName = 'home') => {
    setMenuVisible(false); // Cierra el menú
    setCurrentView(viewName); // Cambia la vista
    window.scrollTo(0, 0); // Sube al inicio de la página
  };

  // --- (PASO 2) FILTRAMOS LOS PROYECTOS (Sin cambios) ---
  const dataProjects = projects.filter(p => p.category === 'data');
  const softwareProjects = projects.filter(p => p.category === 'software');

  // --- (PASO 3) FUNCIÓN RENDERIZAR PROYECTOS (¡CORREGIDA!) ---
  // Ahora detecta el link especial "/auditoria-ipsch"
  const renderProjectList = (projectsToShow) => {
    return projectsToShow.map((project, index) => {
      // Comprobamos si el link es el interno
      const isInternalLink = project.link === "/auditoria-ipsch";

      return (
        <li key={index} className="li-project">
          <img
            src={`/${project.img}`}
            alt={`Imagen del proyecto ${project.title}`}
            loading="lazy"
            // Aquí aplicamos la clase especial SI la propiedad imageFit es 'contain'
            className={project.imageFit === 'contain' ? 'img-fit-contain' : ''}
          />
          <div className="project-card-content">
            <p className="title-project">{project.title}</p>
            <p className="description-project">{project.description}</p>
            <p className="title-technologies">Tecnologías usadas</p>
            <div className="container-technologies">
              {project.icons.map((iconPath, i) => (
                <img
                  key={i}
                  src={`/${iconPath}`} 
                  alt="Tecnología"
                  className="tech-icon"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="container-link-project">
            {/* --- LÓGICA CONDICIONAL PARA EL LINK --- */}
            {isInternalLink ? (
              // Si es interno, llama a seleccionarView
              // --- ¡¡ESTA ES LA LÍNEA CORREGIDA PARA ARREGLAR EL BUILD!! ---
              <a 
                 href="#portafolio" // Usamos un href válido (en lugar de "#")
                 onClick={(e) => {
                   e.preventDefault(); // Prevenimos el salto de ancla
                   seleccionarView('auditoria-ipsch');
              }}>
                Ver más
              </a>
            ) : (
              // Si es externo, se abre en pestaña nueva
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver más
              </a>
            )}
          </div>
        </li>
      );
    });
  };


  return (
    // Usamos React.Fragment (<>) para agrupar todo
    <>
      {/* SECCION HEADER (MODIFICADO para que el logo te lleve a 'home') */}
      <div className="contenedor-header">
        <header>
          <div className="logo">
            {/* --- MODIFICADO: Llama a seleccionarView --- */}
            <a href="#inicio" onClick={(e) => {
              e.preventDefault(); 
              seleccionarView('home');
              // Pequeño hack para que el scroll a #inicio funcione solo en home
              if (currentView === 'home') {
                // Forzamos el scroll al ancla #inicio
                const inicioElement = document.getElementById('inicio');
                if (inicioElement) {
                  inicioElement.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}>Dilan</a>
          </div>
          <nav id="nav" className={menuVisible ? 'responsive' : ''}>
            <ul>
              {/* Los links del nav solo funcionan en la vista 'home' */}
              <li><a href="#inicio" onClick={seleccionar}>INICIO</a></li>
              <li><a href="#sobremi" onClick={seleccionar}>SOBRE MI</a></li>
              <li><a href="#portafolio" onClick={seleccionar}>PROYECTOS</a></li>
              <li><a href="#skills" onClick={seleccionar}>SKILLS</a></li>
              <li><a href="#curriculum" onClick={seleccionar}>CURRICULUM</a></li>
            </ul>
          </nav>
          <div className="nav-responsive" onClick={mostrarOcultarMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </header>
      </div>

      {/* --- ¡NUEVA LÓGICA DE VISTAS! --- */}
      
      {/* VISTA "HOME" (Tu portafolio principal) */}
      {currentView === 'home' && (
        <>
          <section id="inicio" className="inicio">
            <div className="contenido-banner">
              <div className="contenedor-img">
                <img
                  src="/assets/img/ft_perfil.jpg"
                  alt="Foto de perfil de Dilan Bulding"
                />
              </div>
              <h1>Dilan Bulding</h1>
              <h2>Ingeniero de Sistemas</h2>
              <div className="redes">
                <a
                  href="https://www.linkedin.com/in/dilan-stick-bulding-quintero-6b7501253/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/Dilan2119"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </section>

          <section id="sobremi" className="seccion sobremi">
            <div className="contenido-seccion">
              <h2>Sobre Mí</h2>
              <p>
                <span>Hola, soy Dilan Bulding.</span> Mi carrera profesional comenzó
                en el desarrollo de software (como se puede ver en mis proyectos
                anteriores), donde construí una sólida base técnica en la creación de
                soluciones web y de escritorio. Esta experiencia fue fundamental para
                mi transición al rol de Coordinador de Sistemas, donde mi enfoque se
                amplió hacia la gestión de proyectos, infraestructura y personal TIC.
                <br />
                <br />
                Actualmente, he integrado a mi rol una fuerte pasión por el análisis
                de datos y la automatización. Utilizo herramientas como Power BI para
                transformar datos complejos en dashboards intuitivos que facilitan la
                toma de decisiones, y Python para automatizar tareas repetitivas,
                optimizando la eficiencia y reduciendo errores. Mi objetivo es
                combinar mi experiencia en sistemas y desarrollo con el poder de los
                datos para generar un impacto medible en el negocio.
              </p>

              <div className="fila">
                <div className="col">
                  <h3>Datos Personales</h3>
                  <ul>
                    <li><strong>Teléfono</strong> 3122083663</li>
                    <li><strong>Email</strong> dlenard1919@gmail.com</li>
                    <li><strong>Dirección</strong> Cúcuta, Norte de Santander, Colombia</li>
                  </ul>
                </div>
                <div className="col">
                  <h3>Intereses</h3>
                  <div className="contenedor-intereses">
                    <div className="interes"><i className="fa-solid fa-gamepad"></i><span>JUEGOS</span></div>
                    <div className="interes"><i className="fa-solid fa-headphones"></i><span>MUSICA</span></div>
                    <div className="interes"><i className="fa-solid fa-plane"></i><span>VIAJAR</span></div>
                    <div className="interes"><i className="fa-solid fa-dumbbell"></i><span>GYM</span></div>
                    <div className="interes"><i className="fa-solid fa-person-hiking"></i><span>DEPORTE</span></div>
                    <div className="interes"><i className="fa-solid fa-book"></i><span>LIBROS</span></div>
                    <div className="interes"><i className="fa-solid fa-motorcycle"></i><span>MOTOS</span></div>
                    <div className="interes"><i className="fa-solid fa-camera"></i><span>FOTOS</span></div>
                  </div>
                </div>
              </div>

              <a
                href="/assets/docs/Dilan_Bulding(Hoja de Vida).pdf"
                className="btn"
                download
              >
                Descargar CV
                <i className="fa-solid fa-download"></i>
              </a>
            </div>
          </section>

          <section id="portafolio" className="section-projects">
            <div className="container-projects">
              <h2 className="seccion-titulo" id="proyectos">
                Proyectos
              </h2>

              <h3 className="subseccion-titulo">Análisis de Datos y Automatización</h3>
              <ul className="ul-projects" id="data-projects-list">
                {renderProjectList(dataProjects)}
              </ul>

              <h3 className="subseccion-titulo">
                Desarrollo de Software (Web y Escritorio)
              </h3>
              <ul className="ul-projects" id="software-projects-list">
                {renderProjectList(softwareProjects)}
              </ul>
            </div>
          </section>

          <section id="skills" className="section-skill skills">
            <div className="container-skill">
              <h2 className="seccion-titulo">Mis Habilidades</h2>
              <ul className="ul-skill" id="skills-list">
                {skills.map((skill, index) => (
                  <li key={index} className="li-skills">
                    <div className="skill-icon">
                      <img
                        src={`/${skill.icon}`} 
                        alt={`Icono de ${skill.name}`}
                        loading="lazy"
                      />
                    </div>
                    <p className="p-skill">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="curriculum" className="seccion curriculum">
            <div className="contenido-seccion">
              <h2 className="seccion-titulo">Curriculum</h2>
              <div className="fila">
                <div className="col izquierda">
                  <h3>Educación</h3>
                  <div className="item izq">
                    <h4>Ingeniería de sistemas</h4>
                    <span className="casa">Universidad de Pamplona</span>
                    <span className="fecha">2019 - 2024</span>
                    <p>
                      Ingeniero de Sistemas egresado, con sólidos conocimientos en
                      desarrollo de software, administración de sistemas y gestión
                      de proyectos, listo para aplicar mis habilidades en un entorno
                      profesional.
                    </p>
                    <div className="conectori"><div className="circuloi"></div></div>
                  </div>
                  <div className="item izq">
                    <h4>Secundaria</h4>
                    <span className="casa">Colegio Marco Fidel Suarez</span>
                    <span className="fecha">2012 - 2018</span>
                    <p>
                      Educación secundaria completada, fomentando el pensamiento
                      crítico y el trabajo en equipo en una institución reconocida
                      por su excelencia académica.
                    </p>
                    <div className="conectori"><div className="circuloi"></div></div>
                  </div>
                  <div className="item izq">
                    <h4>Inglés</h4>
                    <span className="casa">Confanorte (Nivel B1)</span>
                    <span className="fecha">2015 - 2018</span>
                    <p>
                      Competencias en inglés que me permiten mantener conversaciones,
                      comprender textos técnicos y comunicarme en entornos
                      profesionales.
                    </p>
                    <div className="conectori"><div className="circuloi"></div></div>
                  </div>
                </div>

                <div className="col derecha">
                  <h3>Experiencia de trabajo</h3>
                  <div className="item der">
                    <h4>Ingeniero de Sistemas Junior</h4>
                    <span className="casa">Alcaldía de El Zulia</span>
                    <span className="fecha">2024</span>
                    <p>
                      Apoyo en la elaboración del plan de desarrollo municipal,
                      aplicando conocimientos en análisis de datos e implementación
                      de soluciones tecnológicas para optimizar la planeación
                      estratégica.
                    </p>
                    <div className="conectord"><div className="circulod"></div></div>
                  </div>
                  <div className="item der">
                    <h4>Sistema de Facturación</h4>
                    <span className="casa">Canarifruver</span>
                    <span className="fecha">2024</span>
                    <p>
                      Diseño y desarrollo de un sistema de facturación en Python y
                      MySQL, con control de inventarios, facturación concurrente y
                      generación de reportes.
                    </p>
                    <div className="conectord"><div className="circulod"></div></div>
                  </div>
                  <div className="item der">
                    <h4>Front-end Developer</h4>
                    <span className="casa">Café la Ceiba</span>
                    <span className="fecha">2023</span>
                    <p>
                      Desarrollo de la página web de la marca, mejorando su
                      presencia en línea y optimizando la plataforma para una mejor
                      experiencia de usuario.
                    </p>
                    <div className="conectord"><div className="circulod"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* --- VISTA "AUDITORIA-IPSCH" (La nueva sección) --- */}
      {currentView === 'auditoria-ipsch' && (
        // Usamos las clases 'seccion' y 'contenido-seccion' para mantener consistencia
        <section id="project-detail" className="seccion auditoria-details">
          <div className="contenido-seccion">
            <h2 className="seccion-titulo">Auditoría Médica Digital IPSCH</h2>
            
            <p className="project-intro-description">
              Plataforma web integral diseñada para digitalizar y optimizar el proceso de auditoría de historias clínicas. Este sistema reemplazó el uso de hojas de cálculo de Excel rotativas, proporcionando una herramienta centralizada y robusta para que los médicos auditores y sus equipos evalúen la calidad de los registros médicos bajo criterios estandarizados.
            </p>

            {/* Galería de Imágenes y Descripciones */}
            <div className="gallery-grid">
              
              <div className="gallery-item">
                <img src="/assets/img/auditoria_ipsch_login.webp" alt="Página de Login" loading="lazy" />
                <h3>1. Acceso Seguro (Login)</h3>
                <p>Interfaz de inicio de sesión limpia y segura, garantizando que solo el personal autorizado (médicos auditores, apoyos y administradores) pueda acceder al sistema.</p>
              </div>

              <div className="gallery-item">
                <img src="/assets/img/auditoria_ipsch_dashboard.webp" alt="Dashboard Principal" loading="lazy" />
                <h3>2. Dashboard de Indicadores Clave</h3>
                <p>El panel principal ofrece una visión gerencial instantánea del estado de las auditorías. Muestra KPIs como total de auditorías, cumplimiento promedio, profesionales activos y auditorías del mes. Incluye gráficos de tendencia y cumplimiento por dimensión.</p>
              </div>

              <div className="gallery-item">
                <img src="/assets/img/auditoria_ipsch_auditoria.webp" alt="Formulario de Nueva Auditoría" loading="lazy" />
                <h3>3. Registro de Auditoría</h3>
                <p>Pantalla principal donde el equipo auditor registra una nueva auditoría, asociando al paciente, profesional, sede y los formularios de criterios correspondientes. Muestra un resumen de calificaciones (satisfactorias, aceptables, etc.).</p>
              </div>

              <div className="gallery-item">
                <img src="/assets/img/auditoria_ipsch_formularios.webp" alt="Gestión de Formularios" loading="lazy" />
                <h3>4. Creación de Criterios (Formularios)</h3>
                <p>Módulo de administración clave donde se construyen los "formularios" o instrumentos de auditoría. Permite a los líderes crear los criterios a evaluar y asignar el puntaje correspondiente a cada ítem.</p>
              </div>

              <div className="gallery-item">
                <img src="/assets/img/auditoria_ipsch_reportes.webp" alt="Sección de Reportes" loading="lazy" />
                <h3>5. Módulos Adicionales (Reportes)</h3>
                <p>El sistema también incluye módulos para la gestión de reportes detallados, creación de profesionales, pacientes y administración de usuarios del sistema, completando el ciclo de gestión de la auditoría.</p>
              </div>
            </div>

            {/* Botón para volver al portafolio */}
            <div className="back-button-container">
                <button className="btn" onClick={() => seleccionarView('home')}>
                    <i className="fa-solid fa-arrow-left"></i>
                    &nbsp; Volver al Portafolio
                </button>
            </div>
          </div>
        </section>
      )}


      {/* SECCION FOOTER (Siempre visible) */}
      <footer>
        {/* --- MODIFICADO: Llama a seleccionarView y scroll a #inicio --- */}
        <a href="#inicio" className="arriba" onClick={(e) => {
           e.preventDefault(); 
           seleccionarView('home');
           if (currentView === 'home') {
             // Forzamos el scroll al ancla #inicio
             const inicioElement = document.getElementById('inicio');
             if (inicioElement) {
               inicioElement.scrollIntoView({ behavior: 'smooth' });
             }
           }
        }}>
          <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className="redes">
          <a
            href="https://www.linkedin.com/in/dilan-stick-bulding-quintero-6b7501253/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Dilan2119"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;

/* --- FIN DEL ARCHIVO App.js --- */