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
    img: "assets/img/dashboard_bi_ingresos.png",
    link: "/dashboard-bi-ingresos",
    caseStudyId: "dashboard-bi-ingresos",
    buttonText: "Ver Dashboard / Caso de Estudio",
    roleBadge: "Business Intelligence & Healthcare Analytics | Líder de Datos & BI",
    title: "Dashboard BI: Seguimiento a Ingresos y Facturación Oportuna",
    description:
      "Tablero gerencial interactivo desarrollado para mitigar el riesgo de glosas y acelerar el ciclo de facturación médica. Permite auditar en tiempo real el estado de los ingresos clínicos (abiertos, cerrados y pendientes de gestión/facturación) desglosados por sede, aseguradora (entidad) y rangos de fecha, facilitando a la gerencia y al área de cuentas médicas identificar cuellos de botella en la radicación oportuna.",
    kpis: [
      "Control de Cierre Oportuno de Ingresos",
      "Auditoría de Ingresos Abiertos, Cerrados y Sin Gestionar",
      "Trazabilidad Multisede y Multientidad (EPS)",
      "Seguimiento de Factura Oportuna",
    ],
    icons: ["assets/icons/powerbi.svg","assets/icons/dato1.png","assets/icons/iconossql.svg","assets/icons/excel.svg"],
    techTags: ["Power BI", "DAX", "MySQL", "Power Query", "Modelado Relacional"],
    category: "data",
    imageFit: "contain"
  },
  {
    img: "assets/img/ContabilidadIngresos.png",
    link: "/dashboard-bi-finanzas",
    caseStudyId: "dashboard-bi-finanzas",
    buttonText: "Ver Dashboard Financiero",
    roleBadge: "Financial BI & Revenue Analytics | Contabilidad y Costos",
    title: "Dashboard BI: Control Financiero de Ingresos y Metas de Facturación",
    description:
      "Tablero financiero y contable en tiempo real que cuantifica monetariamente la operación clínica frente a las metas mensuales de recaudación y facturación. Permite auditar el dinero representado en ingresos cerrados, abiertos y pendientes de facturar por sede, aseguradora (EPS) y periodo, visibilizando el flujo de caja proyectado y el capital represado.",
    kpis: [
      "Monitoreo de Meta Financiera vs. Facturación Real ($)",
      "Valorización Monetaria de Ingresos Abiertos y Sin Gestionar",
      "Análisis de Ingresos y Facturación Oportuna en Dinero por Sede",
      "Seguimiento Contable por Entidad Pagadora y Periodo",
    ],
    icons: [
      "assets/icons/powerbi.svg",
      "assets/icons/dato1.png",
      "assets/icons/iconossql.svg",
      "assets/icons/excel.svg"
    ],
    techTags: ["Power BI", "DAX Financiero", "MySQL", "Control Presupuestal", "KPIs de Metas"],
    category: "data",
    imageFit: "contain",
  },
  {
    img: "assets/img/Ordenamientos.png",
    link: "/dashboard-bi-ordenamientos",
    caseStudyId: "dashboard-bi-ordenamientos",
    buttonText: "Ver Dashboard Clínico",
    roleBadge: "Clinical Analytics & Medical Audit | Control de Pertinencia y Costos",
    title: "Dashboard BI: Auditoría de Ordenamientos Médicos y Frecuencia de Uso",
    description:
      "Tablero de inteligencia clínica para auditar en tiempo real la prescripción y ordenamiento médico (medicamentos, imagenología y procedimientos) por sede, aseguradora, especialidad y fecha. Identifica el ranking de profesionales con mayor volumen de emisión y los pacientes con mayor frecuencia de ordenamiento correlacionados con su diagnóstico clínico.",
    kpis: [
      "Ranking de Profesionales y Especialidades por Volumen de Ordenamiento",
      "Segmentación por Clasificación (Medicamentos, Imagenología, Laboratorios)",
      "Identificación de Pacientes Hiperfrecuentadores y Diagnóstico Asociado",
      "Filtros Dinámicos por Sede, Entidad Aseguradora (EPS) y Periodo",
    ],
    icons: [
      "assets/icons/powerbi.svg",
      "assets/icons/dato1.png",
      "assets/icons/iconossql.svg",
      "assets/icons/excel.svg"
    ],
    techTags: ["Power BI", "DAX", "MySQL", "Auditoría Médica", "Control de Frecuencia"],
    category: "data",
    imageFit: "contain",
  },
  {
    img: "assets/img/automatizacion.webp",
    link: "https://github.com/Dilan2119/suite-automatizacion-datos",
    title: "Suite de Automatización de Datos",
    description:
      "Una aplicación de escritorio desarrollada en Python para automatizar tareas de oficina repetitivas... ofrece una interfaz gráfica de usuario (GUI) intuitiva y centralizada para procesar archivos JSON y Excel...",
    icons: ["assets/icons/iconopy.svg","assets/icons/excel.svg"],
    techTags: ["Python", "Excel"],
    category: "data",
  },
  // =================================================================
  // == PROYECTOS DE DESARROLLO DE SOFTWARE
  // =================================================================
  {
    img: "assets/img/nexacore/nexa_dash.png",
    link: "/nexacore",
    caseStudyId: "nexacore",
    buttonText: "Ver más / Caso de Estudio",
    title: "NexaCore — Plataforma de Gestión Hospitalaria",
    description:
      "Sistema centralizado para la automatización de procesos operativos, gestión de 148 equipos con hoja de vida digital, control de inventarios, actas con firma electrónica y más de 1.783 pedidos de compra gestionados en 6 sedes.",
    icons: ["assets/icons/iconoreact.svg", "assets/icons/iconophp.svg", "assets/icons/iconossql.svg", "assets/icons/iconosjs.svg"],
    techTags: ["React", "Laravel", "MySQL", "APIs REST", "Firma Digital"],
    category: "software",
  },
  {
    img: "assets/img/clinova/clinova_panel.jpg",
    link: "/clinova-case-study",
    caseStudyId: "clinova",
    buttonText: "Ver Caso de Estudio",
    roleBadge: "Enterprise Software & Healthtech | Líder de Proyecto & Arquitecto Full-Stack",
    title: "Clinova — Ecosistema de Talento Humano, Gestión Documental y Contratación en Salud",
    description:
      "Plataforma web empresarial desarrollada con React, Java Spring Boot y MySQL que transformó la gestión de Talento Humano de operativa a auditora. Centraliza la autogestión de hojas de vida (Nómina y OPS), semaforización de contratos, control de ausentismo, Gestión Documental de Calidad (Mapa de Procesos) y Contratación en Salud (CUPS, CUMS, SOAT/REPS y margen AUI).",
    icons: [
      "assets/icons/iconoreact.svg",
      "assets/icons/java.svg",
      "assets/icons/iconossql.svg"
    ],
    techTags: ["React", "Java Spring Boot", "MySQL", "APIs REST", "Arquitectura RBAC"],
    category: "software",
  },
  {
    // --- ¡NUEVO PROYECTO AÑADIDO AQUÍ! ---
    img: "assets/img/auditoria_ipsch_dashboard.webp", // Usa la imagen del dashboard como miniatura
    link: "/auditoria-ipsch", // Esta es la "ruta interna" especial que usaremos
    caseStudyId: "auditoria-ipsch",
    buttonText: "Ver más / Caso de Estudio",
    title: "Plataforma de Auditoría Médica IPSCH",
    description:
      "Plataforma web para digitalizar auditorías de historias clínicas, reemplazando procesos manuales en Excel y centralizando la gestión de calidad para médicos auditores.",
    icons: ["assets/icons/iconoreact.svg", "assets/icons/iconosjs.svg", "assets/icons/iconossql.svg", "assets/icons/iconohtml.svg", "assets/icons/iconocss.svg"], // ¡Ajusta estas tecnologías!
    techTags: ["React", "JavaScript", "MySQL", "HTML", "CSS"],
    category: "software",
  },

  {
    img: "assets/img/canarifruver.webp",
    link: "https://github.com/Dilan2119/SISTEMA-DE-FACTURACION",
    title: "Sistema de Facturación para Supermercados",
    description:
      'Sistema de escritorio con Python y MySQL para gestionar ventas, inventario y facturación concurrente en supermercados.',
    icons: ["assets/icons/iconopy.svg", "assets/icons/iconossql.svg"],
    techTags: ["Python", "MySQL"],
    category: "software",
  },
  {
    img: "assets/img/veeduriadigital.webp",
    link: "https://industrisbulding.site.je/?i=1",
    title: "Veeduria Digital",
    description:
      "Proyecto FullStack donde los ciudadanos pueden ver los proyectos del municipio, informar sobre problemas, entre otras cosas.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg", "assets/icons/iconosjs.svg", "assets/icons/iconossql.svg", "assets/icons/iconosass.svg", "assets/icons/iconophp.svg", "assets/icons/iconogit.svg"],
    techTags: ["HTML", "CSS", "JavaScript", "MySQL", "Sass", "PHP", "Git"],
    category: "software",
  },
  {
    img: "assets/img/dental.webp",
    link: "https://dentalclinica.netlify.app/",
    title: "Dental Clinic",
    description:
      "Página web para una clínica dental que ofrece servicios de odontología, con áreas especializadas en cosmética, pediatría e implantes.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg", "assets/icons/iconosjs.svg", "assets/icons/iconoboot.svg"],
    techTags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "software",
  },
  {
    img: "assets/img/blogcafe.webp",
    link: "https://dilanbulding-blogcafe.netlify.app/",
    title: "Blog de Café",
    description:
      'Sitio web que ofrece recetas, consejos y cursos sobre café, cubriendo temas como tipos de granos, recetas y beneficios.',
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg"],
    techTags: ["HTML", "CSS"],
    category: "software",
  },
    {
    img: "assets/img/frontend.webp",
    link: "https://almacenderopa.netlify.app/",
    title: "Almacén de Ropa",
    description:
      "Tienda en línea que ofrece camisetas con diseños relacionados con tecnologías de desarrollo web como VueJS, AngularJS, ReactJS y más.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg"],
    techTags: ["HTML", "CSS"],
    category: "software",
  },
  {
    img: "assets/img/Adivina.webp",
    link: "https://adivinanumerosecreto.netlify.app/",
    title: "Adivina el Número Secreto",
    description:
      "Juego interactivo donde el jugador intenta adivinar un número secreto. El juego proporciona pistas sobre si el número es mayor o menor hasta que el jugador acierta.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg", "assets/icons/iconosjs.svg"],
    techTags: ["HTML", "CSS", "JavaScript"],
    category: "software",
  },
  {
    img: "assets/img/diseño.webp",
    link: "https://diseofreelance.netlify.app/",
    title: "Diseño Freelance",
    description:
      "Ofrece servicios de diseño y desarrollo web, aplicaciones móviles y e-commerce. La página incluye secciones sobre sus servicios, una forma de contacto y ubicación.",
    icons: ["assets/icons/iconohtml.svg", "assets/icons/iconocss.svg"],
    techTags: ["HTML", "CSS"],
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

// Datos de los Casos de Estudio (Dashboard BI, NexaCore y Auditoría Médica IPSCH)
const caseStudies = {
  "dashboard-bi-ingresos": {
    badge: "Business Intelligence & Healthcare Analytics | Líder de Datos & BI",
    title: "Dashboard BI: Seguimiento a Ingresos y Facturación Oportuna",
    subtitle:
      "Tablero gerencial interactivo desarrollado para mitigar el riesgo de glosas y acelerar el ciclo de facturación médica. Permite auditar en tiempo real el estado de los ingresos clínicos (abiertos, cerrados y pendientes de gestión/facturación) desglosados por sede, aseguradora (entidad) y rangos de fecha, facilitando a la gerencia y al área de cuentas médicas identificar cuellos de botella en la radicación oportuna.",
    techTags: ["Power BI", "DAX", "MySQL", "Power Query", "Modelado Relacional"],
    kpis: [
      "Control de Cierre Oportuno de Ingresos",
      "Auditoría de Ingresos Abiertos, Cerrados y Sin Gestionar",
      "Trazabilidad Multisede y Multientidad (EPS)",
      "Seguimiento de Factura Oportuna",
    ],
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNjA5MThkZjAtYzJmYi00NmEzLTk3ZTUtZGE1NDEzOTBlMTA5IiwidCI6IjFjMjA3MWI1LTBmODAtNDYzYS1hMDY1LWNkZWFmMmZjNzZmMyIsImMiOjR9",
    embedTitle: "Cuentas_Medicas_House(HV)",
    privacyNote:
      "* Nota: Los datos expuestos en este dashboard han sido anonimizados y reemplazados por valores y registros sintéticos de prueba con fines demostrativos, garantizando el cumplimiento de las normativas de confidencialidad y protección de datos (Habeas Data).",
  },
  "dashboard-bi-finanzas": {
    badge: "Financial BI & Revenue Analytics | Contabilidad y Costos",
    title: "Dashboard BI: Control Financiero de Ingresos y Metas de Facturación",
    subtitle:
      "Modelo de inteligencia financiera conectado a la base de datos central para monitorear en pesos ($) el cumplimiento de las metas de facturación institucional. Cuantifica el valor económico de los ingresos cerrados, abiertos y sin gestionar por cada sede y entidad pagadora, permitiendo a la gerencia financiera detectar fugas de ingresos y acelerar el flujo de caja.",
    techTags: ["Power BI", "DAX Financiero", "MySQL", "Power Query", "Modelado Relacional"],
    kpis: [
      "Monitoreo de Meta Financiera vs. Facturación Real ($)",
      "Valorización Monetaria de Ingresos Abiertos y Sin Gestionar",
      "Análisis de Ingresos y Facturación Oportuna en Dinero por Sede",
      "Seguimiento Contable por Entidad Pagadora y Periodo",
    ],
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNTRlYWJiYmUtOTliZC00OTcyLWE1MGItNzU2NGJkODIyZjhiIiwidCI6IjFjMjA3MWI1LTBmODAtNDYzYS1hMDY1LWNkZWFmMmZjNzZmMyIsImMiOjR9",
    embedTitle: "Contabilidad_House_Ingresos(HV)",
    privacyNote:
      "* Nota: Las cifras monetarias, metas y registros expuestos en este dashboard corresponden a datos sintéticos de prueba con fines demostrativos, protegiendo la confidencialidad financiera de la institución (Habeas Data).",
  },
  "dashboard-bi-ordenamientos": {
    badge: "Clinical Analytics & Medical Audit | Control de Pertinencia y Costos",
    title: "Dashboard BI: Auditoría de Ordenamientos Médicos y Frecuencia de Uso",
    subtitle:
      "Herramienta gerencial y de auditoría médica conectada a la base de datos central para monitorear el patrón de prescripción institucional. Permite cruzar variables de especialidad, clasificación del servicio (medicamentos, ayudas diagnósticas, imagenología), profesional, paciente y diagnóstico (CIE-10) para controlar desviaciones en contratos y optimizar la pertinencia médica.",
    techTags: ["Power BI", "DAX", "MySQL", "Power Query", "Analítica Clínica"],
    kpis: [
      "Ranking de Profesionales y Especialidades por Volumen de Ordenamiento",
      "Segmentación por Clasificación (Medicamentos, Imagenología, Laboratorios)",
      "Identificación de Pacientes Hiperfrecuentadores y Diagnóstico Asociado",
      "Filtros Dinámicos por Sede, Entidad Aseguradora (EPS) y Periodo",
    ],
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZTEzMGI2YzUtNGRkZS00ZDQxLWI4MzEtYmJhYTc4NjhiYTVkIiwidCI6IjFjMjA3MWI1LTBmODAtNDYzYS1hMDY1LWNkZWFmMmZjNzZmMyIsImMiOjR9",
    embedTitle: "ORDENAMIENTOS(HV)",
    privacyNote:
      "* Nota: Los nombres de profesionales, identificaciones de usuarios, diagnósticos y cifras expuestas en este dashboard corresponden a registros sintéticos de prueba con fines demostrativos, garantizando la reserva de la historia clínica y la protección de datos personales (Habeas Data).",
  },
  nexacore: {
    title: "NexaCore — Plataforma de Gestión Hospitalaria",
    subtitle:
      "Sistema centralizado para la automatización de procesos operativos, gestión de 148 equipos con hoja de vida digital, control de inventarios, actas con firma electrónica y más de 1.783 pedidos de compra gestionados en 6 sedes.",
    techTags: ["React", "Laravel", "MySQL", "APIs REST", "Firma Digital"],
    modules: [
      {
        title: "1. Módulo de Gobernanza y Dashboard Central",
        img: "/assets/img/nexacore/nexa_dash.png",
        description:
          "Panel maestro que centraliza la operación de 6 sedes y 68 usuarios, implementando control de accesos por roles (RBAC) y visibilidad en tiempo real de los recursos institucionales.",
      },
      {
        title: "2. Inventario y Hojas de Vida TI",
        img: "/assets/img/nexacore/nexa_hvida.png",
        description:
          "Fichas técnicas digitales para los 148 equipos del parque informático de la clínica, con registro fotográfico, asignación de custodio, dirección IP y trazabilidad histórica.",
      },
      {
        title: "3. Actas con Firma Digital",
        img: "/assets/img/nexacore/nexa_actas.png",
        description:
          "Digitalización total de actas de entrega y devolución de hardware y periféricos, integrando un protocolo de validación con firma electrónica que elimina el uso de papel.",
      },
      {
        title: "4. Monitoreo de Salud del Parque Informático",
        img: "/assets/img/nexacore/nexa_mantenimiento.png",
        description:
          "Sistema de vigilancia preventiva con semáforos de estado, manteniendo más del 93% de los equipos al día mediante un calendario de vencimientos por activo fijo.",
      },
    ],
  },
  clinova: {
    badge: "Enterprise Software & Healthtech | Líder de Proyecto & Arquitecto Full-Stack",
    title: "Clinova — Plataforma de Talento Humano, Calidad (SGC) y Contratación Clínica",
    subtitle:
      "Software corporativo escalable diseñado para eliminar el archivo físico y digitalizar el ciclo de vida del personal, la auditoría de calidad institucional y la parametrización de contratos médicos bajo una arquitectura moderna en React, Java Spring Boot y MySQL.",
    techTags: ["React", "Java Spring Boot", "MySQL", "APIs REST", "Control de Roles (RBAC)", "Gestión Documental ISO"],
    kpis: [
      "Transformación de Talento Humano de Rol Operativo a Auditor",
      "Autogestión Digital de Expedientes (Nómina y Contratistas OPS)",
      "Semaforización Automática de Vencimientos de Contratos y Cursos",
      "Parametrización de Contratación en Salud (CUPS, CUMS, SOAT/REPS y AUI)",
    ],
    sections: [
      {
        title: "1. Panel de Control Modular y Buscador Global",
        img: "/assets/img/clinova/clinova_panel.jpg",
        description:
          "Arquitectura centralizada que integra 7 módulos estratégicos (Talento Humano, Gestión Documental, Configuración, Contexto de la Organización, Hojas de Vida, Contratación y Actas e Informes) con un motor de búsqueda global de documentos por código o nombre y control estricto de acceso por perfiles.",
      },
      {
        title: "2. Gestión de Talento Humano 360° y Semaforización",
        img: "/assets/img/clinova/clinova_talento.png",
        fit: "contain",
        description:
          "Digitalización integral del personal: los nuevos ingresos reciben credenciales para autogestionar su expediente digital, convirtiendo al área de Talento Humano en auditora. Incluye administración de perfiles y cargos, registro de incapacidades, ausentismos y licencias médicas, control de cursos, exportación masiva de reportes de usuarios activos/inactivos y un sistema de Semaforización que alerta vencimientos de contratos y certificaciones.",
      },
      {
        title: "3. Segmentación de Hojas de Vida: Nómina vs. Proveedores (OPS)",
        img: "/assets/img/clinova/clinova_hvida.png",
        fit: "contain",
        description:
          "Repositorio estructurado que separa los requisitos documentales y contractuales del personal de planta (Nómina) frente a contratistas e independientes de prestación de servicios (OPS), permitiendo descargas masivas y auditorías inmediatas sin carpetas físicas.",
      },
      {
        title: "4. Gestión Documental y Sistema de Gestión de Calidad (SGC)",
        img: "/assets/img/clinova/clinova_documental.png",
        fit: "contain",
        description:
          "Módulo alineado con estándares de calidad institucional que despliega el Mapa de Procesos gráfico, configuración de Tipos de Documento, Listado Único Maestro, repositorio de Documentos Externos (guías clínicas y normativas) y control de Documentos Obsoletos.",
      },
      {
        title: "5. Contratación en Salud (CUPS, CUMS y Margen AUI por Sede)",
        img: "/assets/img/clinova/clinova_contratacion.png",
        fit: "contain",
        description:
          "Motor especializado para el sector salud que gestiona acuerdos de voluntades y creación de contratos. Administra el portafolio de Servicios y Procedimientos (CUPS con tarifas SOAT y REPS), catálogo farmacéutico de Medicamentos (CUMS), Dispositivos Médicos e Insumos, automatizando el cálculo de margen AUI por sede.",
      },
      {
        title: "6. Actas, Plantillas Maestras e Informes Estadísticos",
        img: "/assets/img/clinova/clinova_actas.png",
        fit: "contain",
        description:
          "Estandarización de comités y reuniones mediante la configuración de Plantillas Maestras, creación y seguimiento digital de actas institucionales, y un módulo de visualización de reportes y estadísticas operativas.",
      },
    ],
  },
  "auditoria-ipsch": {
    title: "Plataforma de Auditoría Médica IPSCH",
    subtitle:
      "Plataforma web integral diseñada para digitalizar y optimizar el proceso de auditoría de historias clínicas. Este sistema reemplazó el uso de hojas de cálculo de Excel rotativas, proporcionando una herramienta centralizada y robusta para que los médicos auditores y sus equipos evalúen la calidad de los registros médicos bajo criterios estandarizados.",
    techTags: ["React", "JavaScript", "MySQL", "HTML", "CSS"],
    modules: [
      {
        title: "1. Acceso Seguro (Login)",
        img: "/assets/img/auditoria_ipsch_login.webp",
        description:
          "Interfaz de inicio de sesión limpia y segura, garantizando que solo el personal autorizado (médicos auditores, apoyos y administradores) pueda acceder al sistema.",
      },
      {
        title: "2. Dashboard de Indicadores Clave",
        img: "/assets/img/auditoria_ipsch_dashboard.webp",
        description:
          "El panel principal ofrece una visión gerencial instantánea del estado de las auditorías. Muestra KPIs como total de auditorías, cumplimiento promedio, profesionales activos y auditorías del mes. Incluye gráficos de tendencia y cumplimiento por dimensión.",
      },
      {
        title: "3. Registro de Auditoría",
        img: "/assets/img/auditoria_ipsch_auditoria.webp",
        description:
          "Pantalla principal donde el equipo auditor registra una nueva auditoría, asociando al paciente, profesional, sede y los formularios de criterios correspondientes. Muestra un resumen de calificaciones (satisfactorias, aceptables, etc.).",
      },
      {
        title: "4. Creación de Criterios (Formularios)",
        img: "/assets/img/auditoria_ipsch_formularios.webp",
        description:
          "Módulo de administración clave donde se construyen los \"formularios\" o instrumentos de auditoría. Permite a los líderes crear los criterios a evaluar y asignar el puntaje correspondiente a cada ítem.",
      },
      {
        title: "5. Módulos Adicionales (Reportes)",
        img: "/assets/img/auditoria_ipsch_reportes.webp",
        description:
          "El sistema también incluye módulos para la gestión de reportes detallados, creación de profesionales, pacientes y administración de usuarios del sistema, completando el ciclo de gestión de la auditoría.",
      },
    ],
  },
};


function App() {
  // Estado para el menú
  const [menuVisible, setMenuVisible] = useState(false);
  // --- ¡NUEVO ESTADO PARA CONTROLAR LA VISTA! ---
  const [currentView, setCurrentView] = useState('home'); 
  // Estado para el modal de Caso de Estudio activo y zoom de imagen
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  
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
  // Ahora detecta los proyectos con Caso de Estudio en modal (NexaCore y Auditoría IPSCH)
  const renderProjectList = (projectsToShow) => {
    return projectsToShow.map((project, index) => {
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
            {project.roleBadge && (
              <span className="project-role-badge">{project.roleBadge}</span>
            )}
            <p className="title-project">{project.title}</p>
            <p className="description-project">{project.description}</p>
            {project.kpis && (
              <div className="card-kpis-container">
                <p className="title-technologies">KPIs y Métricas Clave</p>
                <div className="card-kpis-list">
                  {project.kpis.map((kpi, kIdx) => (
                    <span key={kIdx} className="card-kpi-badge">
                      <i className="fa-solid fa-check-circle"></i> {kpi}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <p className="title-technologies">Tecnologías usadas</p>
            {project.techTags && (
              <div className="tech-tags-row">
                {project.techTags.map((tag, tIndex) => (
                  <span key={tIndex} className="tech-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            )}
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
            {project.caseStudyId ? (
              <a
                href="#portafolio"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCaseStudy(project.caseStudyId);
                }}
              >
                {project.buttonText || "Ver más / Caso de Estudio"}
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
                  href="https://www.linkedin.com/in/dilan-bulding-quintero-76195820b/"
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
                    <li><strong>Email</strong> dilanbulding19@gmail.com</li>
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
                    <h4>Especialización en Analítica de Datos</h4>
                    <span className="casa">Universidad Católica de Colombia</span>
                    <span className="fecha">2027 (Matriculado - Modalidad Virtual)</span>
                    <p>
                      Posgrado enfocado en arquitectura de Data Warehouse, Big Data,
                      Estadística Probabilística e Inteligencia de Negocios para la
                      Toma de Decisiones, integrando herramientas avanzadas de
                      visualización y bases de datos corporativas.
                    </p>
                    <div className="conectori"><div className="circuloi"></div></div>
                  </div>
                  <div className="item izq">
                    <h4>Ingeniería de sistemas</h4>
                    <span className="casa">Universidad de Pamplona</span>
                    <span className="fecha">2019 - 2024</span>
                    <p>
                      Ingeniero de Sistemas graduado con promedio destacado (4.07).
                      Sólida base en arquitectura de bases de datos, ingeniería de
                      software, automatización y gestión de infraestructura TI.
                    </p>
                    <div className="conectori"><div className="circuloi"></div></div>
                  </div>
                  <div className="item izq">
                    <h4>Inglés</h4>
                    <span className="casa">Comfanorte (Nivel B1)</span>
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
                    <h4>Coordinador de Sistemas & BI</h4>
                    <span className="casa">Clinical House</span>
                    <span className="fecha">2025 - Actualidad</span>
                    <p>
                      Liderazgo del área de TI (desarrollo e infraestructura).
                      Automatización de reportería clínica y diseño de dashboards en
                      tiempo real con Power BI y MySQL, reduciendo tiempos operativos
                      y optimizando la toma de decisiones gerenciales.
                    </p>
                    <div className="conectord"><div className="circulod"></div></div>
                  </div>
                  <div className="item der">
                    <h4>Desarrollador de Software & Datos</h4>
                    <span className="casa">Canarifruver (España)</span>
                    <span className="fecha">2024 - 2025</span>
                    <p>
                      Diseño y desarrollo de un sistema automatizado de facturación
                      en Python y MySQL con control de inventarios, gestión de
                      tarifas y envío automático de reportes financieros.
                    </p>
                    <div className="conectord"><div className="circulod"></div></div>
                  </div>
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

      {/* --- MODAL DE CASO DE ESTUDIO (NEXACORE & AUDITORIA-IPSCH) --- */}
      {activeCaseStudy && caseStudies[activeCaseStudy] && (
        <div
          className="nexa-modal-overlay"
          onClick={() => setActiveCaseStudy(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="nexa-modal-title"
        >
          <div
            className="nexa-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nexa-modal-header">
              <div>
                <span className="nexa-badge">
                  {caseStudies[activeCaseStudy].badge || "Caso de Estudio"}
                </span>
                <h2 id="nexa-modal-title" className="nexa-modal-title">
                  {caseStudies[activeCaseStudy].title}
                </h2>
                <p className="nexa-modal-subtitle">
                  {caseStudies[activeCaseStudy].subtitle}
                </p>
                <div className="tech-tags-row nexa-modal-tags">
                  {caseStudies[activeCaseStudy].techTags.map((tag, idx) => (
                    <span key={idx} className="tech-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="nexa-modal-close"
                onClick={() => setActiveCaseStudy(null)}
                aria-label="Cerrar caso de estudio"
              >
                &times;
              </button>
            </div>

            <div className="nexa-modal-body">
              {caseStudies[activeCaseStudy].kpis && (
                <div className="kpi-section">
                  <h3 className="kpi-section-title">KPIs y Métricas Clave de Negocio</h3>
                  <div className="kpi-badges-grid">
                    {caseStudies[activeCaseStudy].kpis.map((kpi, kIdx) => (
                      <div key={kIdx} className="kpi-badge-item">
                        <i className="fa-solid fa-chart-line"></i>
                        <span>{kpi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseStudies[activeCaseStudy].embedUrl && (
                <div className="powerbi-section">
                  <div
                    className="powerbi-wrapper"
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%",
                      height: 0,
                      overflow: "hidden",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <iframe
                      title={caseStudies[activeCaseStudy].embedTitle}
                      src={caseStudies[activeCaseStudy].embedUrl}
                      loading="lazy"
                      frameBorder="0"
                      allowFullScreen={true}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </div>
                  {caseStudies[activeCaseStudy].privacyNote && (
                    <p
                      className="privacy-note"
                      style={{
                        fontSize: "13px",
                        color: "#a3a3a3",
                        fontStyle: "italic",
                        marginTop: "12px",
                        lineHeight: "1.5",
                      }}
                    >
                      {caseStudies[activeCaseStudy].privacyNote}
                    </p>
                  )}
                </div>
              )}

              {(caseStudies[activeCaseStudy].modules || caseStudies[activeCaseStudy].sections) && (
                <div className="gallery-grid nexa-gallery-grid">
                  {(caseStudies[activeCaseStudy].modules || caseStudies[activeCaseStudy].sections).map((mod, idx) => (
                    <div key={idx} className="gallery-item nexa-gallery-item">
                      <div
                        className="nexa-img-wrapper"
                        onClick={() => setZoomImage(mod)}
                        title="Haz clic para ampliar la imagen"
                      >
                        <img
                          src={mod.img}
                          alt={mod.title}
                          loading="lazy"
                          className={mod.fit === "contain" ? "img-contain-modal" : ""}
                        />
                        <span className="nexa-zoom-hint">
                          <i className="fa-solid fa-magnifying-glass-plus"></i> Ampliar
                        </span>
                      </div>
                      <h3>{mod.title}</h3>
                      <p>{mod.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="nexa-modal-footer">
              <button className="btn" onClick={() => setActiveCaseStudy(null)}>
                <i className="fa-solid fa-xmark"></i>
                &nbsp; Cerrar Caso de Estudio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- LIGHTBOX PARA AMPLIAR IMÁGENES DEL CASO DE ESTUDIO --- */}
      {zoomImage && (
        <div
          className="nexa-lightbox-overlay"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="nexa-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="nexa-modal-close nexa-lightbox-close"
              onClick={() => setZoomImage(null)}
              aria-label="Cerrar vista ampliada"
            >
              &times;
            </button>
            <img src={zoomImage.img} alt={zoomImage.title} />
            <p className="nexa-lightbox-caption">{zoomImage.title}</p>
          </div>
        </div>
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
            href="https://www.linkedin.com/in/dilan-bulding-quintero-76195820b/"
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