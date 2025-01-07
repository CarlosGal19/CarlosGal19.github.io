import { projects } from '../data/projects.js';

document.addEventListener('DOMContentLoaded', () => {
    addProjects();
})

function addProjects() {
    const projectsContainer = document.querySelector('.projects');
    console.log(projectsContainer);
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const name = document.createElement('h2');
        name.textContent = project.name;

        const description = document.createElement('p');
        description.textContent = project.description;

        const technologies = document.createElement('div');

        const technologiesTitle = document.createElement('h3');
        technologiesTitle.textContent = 'Used Technologies';

        const technologiesList = document.createElement('ul');
        technologiesList.classList.add('technologies');

        project.technologies.forEach(technology => {
            const li = document.createElement('li');
            li.textContent = technology;
            technologiesList.appendChild(li);
        });

        technologies.appendChild(technologiesTitle);
        technologies.appendChild(technologiesList);

        let images;
        if(project.href) {
            images = document.createElement('div');
            images.classList.add('projectImages');

            const imagesTitle = document.createElement('h4');
            imagesTitle.textContent = 'Images';

            const imagesContainer = document.createElement('div');
            imagesContainer.classList.add('images');

            project.href.forEach(image => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = project.alt;
                imagesContainer.appendChild(img);
            });

            images.appendChild(imagesTitle);
            images.appendChild(imagesContainer);
        }

        let viewOnGithub;
        if(project.github) {
            viewOnGithub = document.createElement('a');
            viewOnGithub.classList.add('viewOnGithub');
            viewOnGithub.textContent = 'View on GitHub';
            viewOnGithub.href = project.github;
        }

        let statusMessage;
        if(!project.completed) {
            statusMessage = document.createElement('p');
            statusMessage.classList.add('status');
            statusMessage.textContent = 'Project in development';
        }

        projectDiv.appendChild(name);
        projectDiv.appendChild(description);
        projectDiv.appendChild(technologies);
        if(project.href) projectDiv.appendChild(images);
        if(project.github) projectDiv.appendChild(viewOnGithub);
        if(!project.completed) projectDiv.appendChild(statusMessage);

        projectsContainer.appendChild(projectDiv);
    });
}
