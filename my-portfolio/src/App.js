/* --- INICIO DEL ARCHIVO App.js --- */

// Importamos React y 'useState' para manejar el estado del menú móvil
import React, { useState } from 'react';
// Importamos el archivo CSS que contendrá tus estilos
import './App.css';

// --- (PASO 1) TUS DATOS (Sin cambios) ---

// Datos que antes estaban en 'project.js'
const projects = [
  // =================================================================
  // == PROYECTOS DE ANÁLISIS DE DATOS Y AUTOMATIZACIÓN
  // =================================================================
  {
    img: "assets/img/cuentasmedicas.webp",
    link: "#", // Reemplaza con el link a tu dashboard
    title: "Automatización y Análisis de Gestión de Facturación y Radicación",
    description:
      "Este proyecto abordó el desafío de gestionar y analizar de forma ineficiente datos de facturación, radicación y glosas... El objetivo fue transformar esta situación, automatizando la preparación de datos y creando un dashboard interactivo para monitorear indicadores claves",
    icons: ["assets/icons/powerbi.svg","assets/icons/excel.svg","assets/icons/iconopy.svg"],
    category: "data",
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
    img: "assets/img/veeduriadigital.webp",
    link: "https://nicgaho.mnz.dom.my.id/",
    title: "Líder de Proyecto - Digiturno Clínico",
    description:"Lideré el desarrollo e implementación de un sistema de gestión de turnos a la medida para una clínica, abarcando el ciclo de vida completo del proyecto...",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg", "assets/icons/iconosjs.svg", "assets/icons/iconossql.svg", "assets/icons/iconosass.svg", "assets/icons/iconophp.svg", "assets/icons/iconogit.svg"],
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
    img: "assets/img/canarifruver.webp",
    link: "https://github.com/Dilan2119/SISTEMA-DE-FACTURACION",
    title: "Sistema de Facturación para Supermercados (Duplicado)", // NOTA: Este proyecto estaba duplicado
    description:
      'Sistema de escritorio con Python y MySQL para gestionar ventas, inventario y facturación concurrente en supermercados.',
    icons: ["assets/icons/iconopy.svg", "assets/icons/iconossql.svg"],
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
    link: "https://diseofreelance.netlify.app/",
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
  { name: "Excel", icon: "assets/icons/excel.svg" }
];


function App() {
  // Estado para el menú (Sin cambios, ya funcionaba)
  const [menuVisible, setMenuVisible] = useState(false);

  const mostrarOcultarMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const seleccionar = () => {
    setMenuVisible(false);
  };

  // --- (PASO 2) FILTRAMOS LOS PROYECTOS (Sin cambios) ---
  const dataProjects = projects.filter(p => p.category === 'data');
  const softwareProjects = projects.filter(p => p.category === 'software');

  // --- (PASO 3) FUNCIÓN AUXILIAR PARA RENDERIZAR PROYECTOS ---
  // --- ¡ESTA ES LA PARTE QUE SE CORRIGIÓ! ---
  // Ahora la estructura JSX coincide con el 'innerHTML' de tu main.js
  const renderProjectList = (projectsToShow) => {
    return projectsToShow.map((project, index) => (
      <li key={index} className="li-project"> {/* CLASE CORREGIDA */}
        <img
          // La barra '/' es vital
          src={`/${project.img}`}
          alt={`Imagen del proyecto ${project.title}`}
          loading="lazy"
        />
        <div className="project-card-content"> {/* ESTRUCTURA CORREGIDA */}
          <p className="title-project">{project.title}</p>
          <p className="description-project">{project.description}</p>
          <p className="title-technologies">Tecnologías usadas</p>
          <div className="container-technologies">
            {/* Hacemos un map para los íconos */}
            {project.icons.map((iconPath, i) => (
              <img
                key={i}
                src={`/${iconPath}`} 
                alt="Tecnología"
                className="tech-icon" // CLASE CORREGIDA
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="container-link-project">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Ver más
          </a>
        </div>
      </li>
    ));
  };


  return (
    // Usamos React.Fragment (<>) para agrupar todo
    <>
      {/* SECCION HEADER (Sin cambios) */}
      <div className="contenedor-header">
        <header>
          <div className="logo">
            <a href="#inicio">Dilan</a>
          </div>
          <nav id="nav" className={menuVisible ? 'responsive' : ''}>
            <ul>
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

      {/* SECCION INICIO (Sin cambios) */}
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

      {/* SECCION SOBRE MI (Sin cambios) */}
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

      {/* SECCION PORTAFOLIO (¡CORREGIDA!) */}
      <section id="portafolio" className="section-projects">
        <div className="container-projects">
          <h2 className="seccion-titulo" id="proyectos">
            Proyectos
          </h2>

          <h3 className="subseccion-titulo">Análisis de Datos y Automatización</h3>
          <ul className="ul-projects" id="data-projects-list">
            {/* Llamamos a la función corregida */}
            {renderProjectList(dataProjects)}
          </ul>

          <h3 className="subseccion-titulo">
            Desarrollo de Software (Web y Escritorio)
          </h3>
          <ul className="ul-projects" id="software-projects-list">
            {/* Llamamos a la función corregida */}
            {renderProjectList(softwareProjects)}
          </ul>
        </div>
      </section>

      {/* SECCION SKILLS (¡CORREGIDA!) */}
      <section id="skills" className="section-skill skills">
        <div className="container-skill">
          <h2 className="seccion-titulo">Mis Habilidades</h2>
          <ul className="ul-skill" id="skills-list">
            {/* Esta es la estructura HTML/JSX que tu CSS espera */}
            {skills.map((skill, index) => (
              <li key={index} className="li-skills"> {/* CLASE CORREGIDA */}
                <div className="skill-icon"> {/* ESTRUCTURA CORREGIDA */}
                  <img
                    src={`/${skill.icon}`} // La barra '/' es vital
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

      {/* SECCION CURRICULUM (Sin cambios) */}
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

      {/* SECCION FOOTER (Sin cambios) */}
      <footer>
        <a href="#inicio" className="arriba">
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