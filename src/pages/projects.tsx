import { useState } from "react";
import ProjectCard from "../components/ProjectCard"
import {projects as projectsData}from '../../data'
import ProjectsNavbar from "../components/ProjectsNavbar";
import { ICategory } from "../../types";
import { motion } from "framer-motion"
import { fadeInUP, fadeInUpChildrens } from "../../animations";
 
const Projects = () => {

    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    const handlerFilterCategory = (category: ICategory | "all") => {
        if (category === "all") {
          setProjects(projectsData);
          setActive(category);
          return;
        }

    const newArray = projectsData.filter((project) =>
        project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category);
    };

    return (
        <motion.div variants={fadeInUP} initial="initial" animate="animate" className="px-5 py-2 overflow-scroll" style={{ height: "70vh" }}>
            <ProjectsNavbar
                handlerFilterCategory={handlerFilterCategory}
                active={active}
            />
            <motion.div variants={fadeInUpChildrens} animate="animate" initial="initial" className="relative grid grid-cols-12 gap-4 p-2 my-3">
                {
                    projects.map(projects => {
                        return (
                            <motion.div variants={fadeInUP} key={projects.name} className="col-span-12 p-2 overflow-scroll bg-gray-200 rounded-lg dark:bg-gray-700 sm:col-span-6 lg:col-span-4">
                                <ProjectCard  project={projects} />
                            </motion.div> 
                        )
                    }) 
                    
                }  
            </motion.div>
        </motion.div>
    )
}

export default Projects