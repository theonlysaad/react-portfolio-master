const logotext = "SAAD";
import airbnbClone from "../src/assets/images/AirBnb_Clone.jpg";
const meta = {
    title: "Saad Chah",
    description: "Je suis Saad Chah, ingénieur en informatique et réseaux, actuellement en Master Architecte Web à Paris.",
};

const introdata = {
    title: "Je suis Saad Chah",
    animated: {
        first: "Développeur Full-Stack",
        second: "Ingénieur DevOps",
        third: "Consultant IT",
    },
    description: "Étudiant en Master Architecte Web, je suis passionné par le développement d'applications web et mobiles, l'ERP et l'automatisation.",
    your_img_url: "https://your-profile-image-url.com",
};

const dataabout = {
    title: "À propos de moi",
    aboutme: "Je suis ingénieur en informatique et réseaux, spécialisé en développement full-stack et DevOps. Actuellement en Master à Paris, je cherche une alternance dans le domaine des systèmes d'information, ERP (Odoo, Sage X3) et développement web.",
};

const worktimeline = [
    {
        jobtitle: "Développeur Full Stack",
        where: "Inetum Maroc Offshore",
        date: "2023",
    },
    {
        jobtitle: "Développeur Web",
        where: "S'Tours Casablanca",
        date: "2022",
    },
    {
        jobtitle: "Développeur Back-End",
        where: "Banque Centrale Populaire Technologie",
        date: "2024",
    },
];

const skills = [
    { name: "JavaScript", value: 90 },
    { name: "React.js", value: 85 },
    { name: "Node.js", value: 80 },
    { name: "Python", value: 85 },
    { name: "Django", value: 80 },
    { name: "Docker & Kubernetes", value: 75 },
    { name: "SQL & NoSQL", value: 80 },
    { name: "CI/CD & DevOps", value: 70 },
];

const services = [
    {
        title: "Développement Web & Mobile",
        description: "Création d'applications modernes et performantes avec React.js, Node.js et Python.",
    },
    {
        title: "DevOps & Automatisation",
        description: "Mise en place de pipelines CI/CD et gestion des conteneurs avec Docker et Kubernetes.",
    },
    {
        title: "ERP & Systèmes d'Information",
        description: "Personnalisation et intégration de solutions ERP comme Odoo et Sage X3.",
    },
];

const dataportfolio = [
    {
        img: airbnbClone,
        description: "Application web full-stack inspirée d'Airbnb, avec MySQL, Flask RESTful API et front-end dynamique en HTML5/CSS3/jQuery.",
        link: "https://github.com/theonlysaad/AirBnB_clone_v4.git",
    },
    {
        img: "https://your-project-image-url.com",
        description: "Création d'une plateforme d'orchestration de dataflows en Python.",
        link: "#",
    },
    {
        img: "https://your-project-image-url.com",
        description: "Automatisation du déploiement CI/CD avec Docker et Jenkins.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "saadchah.04@gmail.com",
    YOUR_FONE: "(+33) 7 44 86 98 61",
    description: "N'hésitez pas à me contacter pour discuter de collaborations ou opportunités professionnelles.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/chah-saad-14a748216/",
    facebook: "https://facebook.com/saad.chah.7",
    twitter: "https://twitter.com/your-twitter",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
