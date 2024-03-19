import { createPortfolioSection, createHeroSection, createAboutSection, createProjectSection, createContactSection } from './portfolio.js';

// Render sections
const rootElement = document.getElementById('root');

const heroSection = createHeroSection();
rootElement.appendChild(heroSection);

const aboutSection = createAboutSection();
rootElement.appendChild(aboutSection);

const projectsSection = createProjectSection();
rootElement.appendChild(projectsSection);

const contactSection = createContactSection();
rootElement.appendChild(contactSection);

