
// Data
const heroData = {
  title: 'Welcome to My Creative Portfolio',
  description: 'Explore my unique projects and get in touch!',
};

const aboutData = {
  title: 'About Me',
  description: 'I am a creative and passionate web developer who loves to experiment with new technologies and design patterns.',
};

const projectsData = [
  { title: 'Project 1', description: 'A brief description of Project 1.', image: 'https://via.placeholder.com/100' },
  { title: 'Project 2', description: 'A brief description of Project 2.', image: 'https://via.placeholder.com/100' },
  { title: 'Project 3', description: 'A brief description of Project 3.', image: 'https://via.placeholder.com/100' },
];

const contactData = {
  title: 'Get in Touch',
  description: 'Feel free to reach out to me for any inquiries or opportunities.',
};

// Create section element
export function createPortfolioSection(title, content) {
  const section = document.createElement('div');
  section.classList.add('section');

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = title;
  section.appendChild(sectionTitle);

  section.appendChild(content);

  return section;
}

// Create hero section
export function createHeroSection() {
  const { title, description } = heroData;
  const heroContent = document.createElement('div');
  const heroTitle = document.createElement('h1');
  const heroDesc = document.createElement('p');
  heroTitle.textContent = title;
  heroDesc.textContent = description;
  heroContent.appendChild(heroTitle);
  heroContent.appendChild(heroDesc);

  return createPortfolioSection('Hero', heroContent);
}

// Create about section
export function createAboutSection() {
  const { title, description } = aboutData;
  const aboutContent = document.createElement('div');
  const aboutTitle = document.createElement('h2');
  const aboutDesc = document.createElement('p');
  aboutTitle.textContent = title;
  aboutDesc.textContent = description;
  aboutContent.appendChild(aboutTitle);
  aboutContent.appendChild(aboutDesc);

  return createPortfolioSection('About', aboutContent);
}

// Create projects section
export function createProjectSection() {
  const projectsContent = document.createElement('div');
  projectsData.forEach(({ title, description, image }) => {
    const project = document.createElement('div');
    project.classList.add('project');

    const projectImage = document.createElement('img');
    projectImage.src = image;
    projectImage.alt = title;

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = title;

    const projectDesc = document.createElement('p');
    projectDesc.textContent = description;

    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(projectDesc);

    project.appendChild(projectImage);
    project.appendChild(projectInfo);

    projectsContent.appendChild(project);
  });

  return createPortfolioSection('Projects', projectsContent);
}

// Create contact section
export function createContactSection() {
  const { title, description } = contactData;
  const contactContent = document.createElement('div');
  const contactTitle = document.createElement('h2');
  const contactDesc = document.createElement('p');
  contactTitle.textContent = title;
  contactDesc.textContent = description;
  contactContent.appendChild(contactTitle);
  contactContent.appendChild(contactDesc);

  return createPortfolioSection('Contact', contactContent);
}

