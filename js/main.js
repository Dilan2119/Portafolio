    document.addEventListener('DOMContentLoaded', () => {
    const projectsList = document.getElementById('projects-list');

    projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.classList.add('li-project');

        // Crear el contenedor de tecnologías
        const containerTechnologies = document.createElement('div');
        containerTechnologies.classList.add('container-technologies');

        // Agregar cada ícono como un nuevo elemento <i>
        project.icons.forEach(iconPath => {
            const iconElement = document.createElement('i');
            iconElement.style.backgroundImage = `url(${iconPath})`;
            iconElement.style.backgroundSize = 'contain';
            iconElement.style.backgroundRepeat = 'no-repeat';
            iconElement.style.backgroundPosition = 'center';
            containerTechnologies.appendChild(iconElement);
        });

        projectItem.innerHTML = `
            <img src="${project.img}" alt="${project.title}" loading="lazy" />
            <p class="title-project">${project.title}</p>
            <p class="description-project">${project.description}</p>
            <p class="title-technologies">Tecnologías usadas</p>
        `;

        // Agregar el contenedor de tecnologías al elemento del proyecto
        projectItem.appendChild(containerTechnologies);

        projectItem.innerHTML += `
            <div class="container-link-project">
                <a href="${project.link}" target="_blank">Ver más</a>
            </div>
        `;

        projectsList.appendChild(projectItem);
         // Código para poblar la lista de skills
  const skillsList = document.getElementById('skills-list');

  // Limpia cualquier contenido existente en la lista de habilidades
  skillsList.innerHTML = '';

  // Agrega cada habilidad a la lista
  skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.classList.add('li-skills');

    skillItem.innerHTML = `
      <div class="skill-icon">
        <img src="${skill.icon}" alt="${skill.name}" loading="lazy" />
      </div>
      <p class="p-skill">${skill.name}</p>
    `;

    skillsList.appendChild(skillItem);
  });
});
    });
   
