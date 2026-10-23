import { FaCode, FaRocket, FaUsers, FaLightbulb, FaMobile, FaPalette, FaDatabase, FaTools, FaCloud, FaServer } from 'react-icons/fa';

export const userData = {
    // Information Personnelle
    name: "Yasmine Belghith",
    titles: [
        "Full Stack Developer",
        "Cloud & DevOps Enthusiast",
        "Flutter Developer",
        "Master Cloud & Systèmes Émergents"
    ],
    title: "Full Stack Developer",
    tagline: "Software Engineering Graduate | Full Stack Developer | Cloud & DevOps",
    description: "Passionnée par le Cloud Computing, le DevOps et les technologies web modernes. Je construis des solutions robustes, scalables et sécurisées — de l'idée à la mise en production.",
    location: "Tunis, Tunisie",
    email: "yessminbelghith@gmail.com",
    avatar: "/moi.png",
    cvLink: "#", // Mettre le lien de votre CV ici

    // Réseaux Sociaux
    socials: {
        linkedin: "https://www.linkedin.com/in/yasmine-belghith-546b0538b/"
    },

    // Statistiques ( Hero & About Section )
    stats: {
        projects: "6+",
        internships: "2",
        years: "1+",
        satisfaction: "100%"
    },

    // À propos
    about: {
        mission: "Étudiante en Génie Logiciel passionnée par le Cloud Computing, le DevOps et le développement web moderne. Actuellement en stage, je travaille sur une plateforme intelligente de gestion d'infrastructure cloud avec React, FastAPI, PostgreSQL et des pratiques DevOps. Toujours avide d'apprendre et de construire des projets réels.",
        features: [
            {
                icon: FaCloud,
                title: "Cloud & DevOps",
                description: "Docker, Kubernetes, Jenkins, CI/CD pipelines et infrastructure scalable."
            },
            {
                icon: FaCode,
                title: "Full Stack",
                description: "React, FastAPI, Laravel — du front-end au back-end, end-to-end."
            },
            {
                icon: FaServer,
                title: "Sécurité & Backend",
                description: "JWT, MFA (TOTP), DevSecOps, PostgreSQL et systèmes robustes."
            },
            {
                icon: FaLightbulb,
                title: "Veille Technologique",
                description: "Apprentissage continu : Linux, automatisation, Cloud Infrastructure."
            }
        ],
        expertise: [
            "React.js / Vite",
            "FastAPI / Python",
            "Laravel / PHP",
            "Flutter / Dart",
            "Docker & Kubernetes",
            "Jenkins / CI-CD",
            "PostgreSQL / MySQL",
            "JWT / MFA (TOTP)",
            "SonarQube / Cypress",
            "Git / GitHub",
            "UI/UX Design (Figma)",
            "Linux Administration"
        ],
        values: [
            {
                title: "Rigueur",
                description: "Souci du détail dans chaque ligne de code et chaque pipeline CI/CD."
            },
            {
                title: "Leadership",
                description: "Expérience de gestion d'équipe et travail collaboratif en environnement professionnel."
            },
            {
                title: "Curiosité",
                description: "Apprentissage continu — Cloud, DevOps, sécurité et nouvelles architectures."
            }
        ]
    },

    // Services offerts
    services: [
        {
            icon: FaCode,
            title: "Développement Web Full Stack",
            description: "Applications web modernes et performantes avec React, FastAPI ou Laravel — de l'interface utilisateur à l'API sécurisée.",
            technologies: ["React.js", "FastAPI", "Laravel", "PostgreSQL"],
            color: "indigo"
        },
        {
            icon: FaCloud,
            title: "Cloud & DevOps",
            description: "Containerisation, orchestration et automatisation CI/CD pour des déploiements fiables et rapides.",
            technologies: ["Docker", "Kubernetes", "Jenkins", "SonarQube"],
            color: "pink"
        },
        {
            icon: FaMobile,
            title: "Développement Mobile",
            description: "Applications mobiles cross-platform fluides pour iOS et Android avec Flutter, intégrant notifications et fonctionnalités device.",
            technologies: ["Flutter", "Dart", "Firebase", "REST API"],
            color: "purple"
        }
    ],

    // Compétences techniques
    skills: [
        {
            category: "Frontend",
            icon: FaCode,
            items: [
                { name: "React.js / Vite", level: 85 },
                { name: "HTML / CSS / JS", level: 90 },
                { name: "Flutter / Dart", level: 75 },
                { name: "Tailwind CSS", level: 80 },
            ]
        },
        {
            category: "Backend & API",
            icon: FaDatabase,
            items: [
                { name: "FastAPI / Python", level: 80 },
                { name: "Laravel / PHP", level: 75 },
                { name: "PostgreSQL / MySQL", level: 78 },
                { name: "JWT / MFA (TOTP)", level: 70 },
            ]
        },
        {
            category: "Cloud & DevOps",
            icon: FaCloud,
            items: [
                { name: "Docker", level: 78 },
                { name: "Kubernetes (K3s)", level: 65 },
                { name: "Jenkins / CI-CD", level: 70 },
                { name: "SonarQube / Cypress", level: 65 },
            ]
        },
        {
            category: "Outils & Méthodes",
            icon: FaTools,
            items: [
                { name: "Git / GitHub", level: 85 },
                { name: "Linux / Bash", level: 68 },
                { name: "Figma / UI-UX", level: 75 },
                { name: "Java / IntelliJ IDEA", level: 65 },
            ]
        }
    ],

    // Projets réels
    defaultProjects: [
        {
            id: "local-1",
            title: "Health & Gym Tracker",
            description: "Application mobile Flutter de suivi santé et fitness avec notifications push, intégration photos et fonctionnalités natives de l'appareil (caméra, capteurs).",
            category: "Mobile",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            github: "",
            link: "#",
            technologies: ["Flutter", "Dart", "Notifications", "Device Integration"]
        },
        {
            id: "local-2",
            title: "Dashboard Cloud Infrastructure",
            description: "Plateforme intelligente de gestion centralisée d'infrastructure cloud : assets IT, licences logicielles et certificats SSL — avec authentification JWT + MFA (TOTP) et pipeline CI/CD complet.",
            category: "Web Dev",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            github: "",
            link: "#",
            technologies: ["FastAPI", "React.js", "PostgreSQL", "Docker", "Kubernetes", "Jenkins"]
        },
        {
            id: "local-3",
            title: "Visualisation 3D Data Center",
            description: "Interface front-end 3D interactive pour la visualisation de racks de data center — navigation immersive dans l'infrastructure physique.",
            category: "Web Dev",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
            github: "",
            link: "#",
            technologies: ["JavaScript", "3D", "Front-end", "Data Visualization"]
        },
        {
            id: "local-4",
            title: "Système de Gestion Étudiants",
            description: "Application web de gestion des notes et présences des étudiants développée avec Laravel / PHP (MVC, CRUD). Réalisée en stage chez Megapixel Software.",
            category: "Web Dev",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
            github: "",
            link: "#",
            technologies: ["Laravel", "PHP", "MySQL", "MVC"]
        },
        {
            id: "local-5",
            title: "Application de Gestion (Java)",
            description: "Application desktop Java développée en équipe sous IntelliJ IDEA — gestion complète avec interface graphique et logique métier structurée.",
            category: "Desktop",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            github: "",
            link: "#",
            technologies: ["Java", "IntelliJ IDEA", "POO", "Travail d'équipe"]
        },
        {
            id: "local-6",
            title: "House Game",
            description: "Jeu web interactif développé en JavaScript vanilla — logique de jeu, animations et interactivité utilisateur implémentées nativement sans framework.",
            category: "Web Dev",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
            github: "",
            link: "#",
            technologies: ["JavaScript", "HTML", "CSS", "Game Design"]
        }
    ],

    // Expérience Professionnelle
    experiences: [
        {
            role: "Software Engineering Intern – DevOps & Cloud",
            company: "NEXT STEP",
            period: "Février 2026 – Présent",
            location: "Tunis, Tunisie",
            description: "Conception et développement d'un dashboard web intelligent pour la gestion centralisée d'infrastructure Cloud, assets IT, licences logicielles et certificats SSL. Implémentation sécurité JWT + MFA (TOTP), services de notifications automatiques, containerisation Docker, déploiement Kubernetes (K3s) et pipeline CI/CD Jenkins + SonarQube + Cypress. Pratiques DevSecOps appliquées.",
            technologies: ["FastAPI", "React.js", "PostgreSQL", "Docker", "Kubernetes", "Jenkins", "SonarQube", "Cypress", "JWT", "MFA", "Python", "GitHub"]
        },
        {
            role: "Stagiaire Développeur Web",
            company: "Megapixel Software",
            period: "Juillet 2025 – Présent",
            location: "Sfax, Tunisie",
            description: "Contribution à la conception et au développement d'un projet de gestion de la scolarité (notes et présences des étudiants) avec le framework Laravel / PHP, en appliquant l'architecture MVC et les opérations CRUD pour une gestion efficace des données.",
            technologies: ["Laravel", "PHP", "MySQL", "MVC", "CRUD", "Git"]
        }
    ],

    // Éducation
    education: [
        {
            degree: "Master en Cloud & Systèmes Émergents",
            school: "ISETCOM Tunis",
            year: "2026 – Présent",
            status: "En cours"
        },
        {
            degree: "Licence en Génie Logiciel & Systèmes d'Information",
            school: "IIT Sfax",
            year: "2023 – 2026",
            status: "Obtenue"
        },
        {
            degree: "Baccalauréat",
            school: "Lycée 15 Novembre",
            year: "2022 – 2023",
            status: "Obtenu"
        }
    ]
};
