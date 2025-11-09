document.addEventListener('DOMContentLoaded', () => {
    // Llama a las funciones para renderizar todo el contenido dinámico
    renderizarProyectos();
    renderizarSkills();
});

/**
 * Crea y muestra las tarjetas de proyectos en el HTML, separadas por categoría.
 */
function renderizarProyectos() {
    const dataList = document.getElementById('data-projects-list');
    const softwareList = document.getElementById('software-projects-list');

    if (!dataList || !softwareList) {
        console.error("Error: No se encontraron las listas de proyectos ('data-projects-list' o 'software-projects-list').");
        return;
    }

    projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.className = 'li-project';

        // 1. Crear la cadena de HTML para los íconos
        const iconsHTML = project.icons.map(iconPath => 
            `<img src="${iconPath}" alt="Tecnología" class="tech-icon" loading="lazy" />`
        ).join('');

        // 2. Construir toda la tarjeta
        projectItem.innerHTML = `
            <img src="${project.img}" alt="Imagen del proyecto ${project.title}" loading="lazy" />
            <div class="project-card-content">
                <p class="title-project">${project.title}</p>
                <p class="description-project">${project.description}</p>
                <p class="title-technologies">Tecnologías usadas</p>
                <div class="container-technologies">
                    ${iconsHTML}
                </div>
            </div>
            <div class="container-link-project">
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">Ver más</a>
            </div>
        `;

        // 3. Decidir en qué lista poner la tarjeta
        if (project.category === 'data') {
            dataList.appendChild(projectItem);
        } else if (project.category === 'software') {
            softwareList.appendChild(projectItem);
        }
    });
}

/**
 * Crea y muestra la lista de habilidades en el HTML.
 */
function renderizarSkills() {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) {
        console.error("No se encontró el contenedor de la lista de habilidades.");
        return;
    }

    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.className = 'li-skills';

        skillItem.innerHTML = `
            <div class="skill-icon">
                <img src="${skill.icon}" alt="Icono de ${skill.name}" loading="lazy" />
            </div>
            <p class="p-skill">${skill.name}</p>
        `;

        skillsList.appendChild(skillItem);
    });
}