import { IExperience, IProjects, ISkills, ITestimonials } from "./types";

export const skills: ISkills[] = [
    {
        description: "Angular",
        image: "/angular.svg"
    },
    {
        description: "CSS",
        image: "/css-3.svg"
    },
    {
        description: "Git",
        image: "/git.svg"
    },
    {
        description: "Html5",
        image: "/html-5.svg"
    },
    {
        description: "Javascript",
        image: "/javascript.svg"
    },
    {
        description: "Jira",
        image: "/jira.svg"
    },
    {
        description: "Next",
        image: "/nextjs.svg"
    },
    {
        description: "Node.js",
        image: "/nodejs.svg"
    },
    {
        description: "React",
        image: "/react.svg"
    },
    {
        description: "Redux-saga",
        image: "/redux-saga.svg"
    },
    {
        description: "Redux",
        image: "/redux.svg"
    },
    {
        description: "Sass",
        image: "/sass.svg"
    },
    {
        description: "Tailwind",
        image: "/tailwindcss.svg"
    },
    {
        description: "Trello",
        image: "/trello.svg"
    },
    {
        description: "Node.ts",
        image: "/tsnode.svg"
    },
    {
        description: "TypeScript",
        image: "/typescript.svg"
    },
    {
        description: "Vue",
        image: "/vue.svg"
    },
]

// list of projects.
export const projects: IProjects[] = [
    {
        name: "Portafolio",
        description: "The portfolio where are you seeing this",
        image_path: "/portafolio.jpg",
        deployed_url: "",
        github_url: "https://github.com/FedericoGabrielCastro/portafolio",
        category: ["next"],
        key_techs: ["Next", "Typescript", "Tailwind"]
    },
    {
        name: "Portafolio",
        description: "The portfolio where are you seeing this",
        image_path: "/portafolio.jpg",
        deployed_url: "",
        github_url: "https://github.com/FedericoGabrielCastro/portafolio",
        category: ["next"],
        key_techs: ["Next", "Typescript", "Tailwind"]
    },
    {
        name: "Portafolio",
        description: "The portfolio where are you seeing this",
        image_path: "/portafolio.jpg",
        deployed_url: "",
        github_url: "https://github.com/FedericoGabrielCastro/portafolio",
        category: ["next"],
        key_techs: ["Next", "Typescript", "Tailwind"]
    },
    {
        name: "Portafolio",
        description: "The portfolio where are you seeing this",
        image_path: "/portafolio.jpg",
        deployed_url: "",
        github_url: "https://github.com/FedericoGabrielCastro/portafolio",
        category: ["next"],
        key_techs: ["Next", "Typescript", "Tailwind"]
    },
    {
        name: "Portafolio",
        description: "The portfolio where are you seeing this",
        image_path: "/portafolio.jpg",
        deployed_url: "",
        github_url: "https://github.com/FedericoGabrielCastro/portafolio",
        category: ["next"],
        key_techs: ["Next", "Typescript", "Tailwind"]
    },
]

// work exp
export const experience: IExperience[] = [
    {
        title: "IT-TechGroup",
        dateStart: "04/2022",
        dateFinish: "10/2022",
        description: "Development of an online casino covering the games Poker, blackjack and Roulette",
        aptitudes: "React.js · JavaScript"
    },
    {
        title: "UPJAUNT",
        dateStart: "11/2020",
        dateFinish: "11/2021",
        description: "Development of a mobile and web travel app to connect with other travelers and share their experiences",
        aptitudes: "React.js · React.Native"
    }
]

// testimonials
export const testimonials: ITestimonials[] = [
    {
        name:"Martín Alejandro Castro Álvearez",
        image:"/martin.jpeg",
        description:"Federico ha demostrado dominar el arte místico de la programación, usando Django, React, Redux, React Native y muchas otras tecnologías más. Además, tiene la capacidad de aprender rápidamente tecnologías nuevas.",
        date:"10/2022",
        profession:"Software Architect"
    },
    {
        name:"Maximiliano Andrés Britez",
        image:"/maxi.jpeg",
        description:"Federico por sobre todo es un colaborador leal en la empresa. Siempre tiene animos de aprender y aportar los conocimientos que va adquiriendo. Tiene capacidades excepcionales para su trayectoría y cumple cada cosa demandada, sobre entregando. Un placer trabajar con él.",
        date:"10/2022",
        profession:"Software Area Manager"
    },
    {
        name:"Joaquín Mussi",
        image:"/joaqo.jpeg",
        description:"Trabajé con Federico durante 6 meses y puedo dar fe de que es un excelente compañero de equipo; mostrándose siempre con una actitud positiva, seria y sobretodo responsable para con las tareas a desarrollar. Destacandose con sus habilidades en el Frontend de distintos proyectos como juegos online.",
        date:"11/2022",
        profession:"FullStack developer"
    },
]