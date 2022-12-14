import { IExperience, IProjects, ISkills, ITestimonials } from "./types";

export const skills: ISkills[] = [
    {
        description: "Angular",
        image: "/img/angular.svg"
    },
    {
        description: "CSS",
        image: "/img/css-3.svg"
    },
    {
        description: "Git",
        image: "/img/git.svg"
    },
    {
        description: "Html5",
        image: "/img/html-5.svg"
    },
    {
        description: "Javascript",
        image: "/img/javascript.svg"
    },
    {
        description: "Jira",
        image: "/img/jira.svg"
    },
    {
        description: "Next",
        image: "/img/nextjs.svg"
    },
    {
        description: "Node.js",
        image: "/img/nodejs.svg"
    },
    {
        description: "React",
        image: "/img/react.svg"
    },
    {
        description: "Redux-saga",
        image: "/img/redux-saga.svg"
    },
    {
        description: "Redux",
        image: "/img/redux.svg"
    },
    {
        description: "Sass",
        image: "/img/sass.svg"
    },
    {
        description: "Tailwind",
        image: "/img/tailwindcss.svg"
    },
    {
        description: "Trello",
        image: "/img/trello.svg"
    },
    {
        description: "Node.ts",
        image: "/img/tsnode.svg"
    },
    {
        description: "TypeScript",
        image: "/img/typescript.svg"
    },
    {
        description: "Vue",
        image: "/img/vue.svg"
    },
]

// list of projects.
export const projects: IProjects[] = [
    {
        name: "Portafolio",
        description: "portafolio",
        image_path: "/img/portafolio.png",
        deployed_url: "https://portafolio-five-mu.vercel.app/",
        github_url: "https://github.com/FedericoGabrielCastro/portafolio",
        category: ["next", "typescript"],
        key_techs: ["Next", "Typescript", "Tailwind"]
    },
]

// work exp
export const experience: IExperience[] = [
    {
        title: "IT-TechGroup",
        dateStart: "04/2022",
        dateFinish: "10/2022",
        description: "descriptionItTech",
        aptitudes: "React.js ?? JavaScript"
    },
    {
        title: "UPJAUNT",
        dateStart: "11/2020",
        dateFinish: "11/2021",
        description: "descriptionUpjaunt",
        aptitudes: "React.js ?? React.Native"
    }
]

// testimonials
export const testimonials: ITestimonials[] = [
    {
        name:"Mart??n Alejandro Castro ??lvearez",
        image:"/img/martin.jpeg",
        description: "martinDescription",
        date:"10/2022",
        profession:"Software Architect"
    },
    {
        name:"Maximiliano Andr??s Britez",
        image:"/img/maxi.jpeg",
        description:"maxiDescription",
        date:"10/2022",
        profession:"Software Area Manager"
    },
    {
        name:"Joaqu??n Mussi",
        image:"/img/joaqo.jpeg",
        description:"joaquinDescription",
        date:"11/2022",
        profession:"FullStack developer"
    },
]