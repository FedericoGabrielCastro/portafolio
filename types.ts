// Interface for projects 
export interface IProjects {
    name: string
    description: string
    image_path: string
    deployed_url: string
    github_url: string
    category: ICategory[] 
    key_techs : string[]
}

export type ICategory = "react" | "node" | "express" | "javascript" | "typescript" | "next" ;

export interface ISkills {
    image: string
}

export interface IExperience {
    title: string
    dateStart: string
    dateFinish: string
    description: string
    aptitudes: string
}

export interface ITestimonials {
    name: string
    image: string
    description: string
    date: string
    profession: string
}