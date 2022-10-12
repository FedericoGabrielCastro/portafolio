import { useState } from "react";
import Image from "next/image";
import { FunctionComponent } from "react";
import { IProjects } from "../../types";
import { AiFillGithub } from "react-icons/ai";
import { MdClose } from "react-icons/md"
import {motion} from "framer-motion"
import { fadeInUP, fadeInUpChildrens } from "../../animations";
import {AiOutlineGlobal} from 'react-icons/ai'

const ProjectCard: FunctionComponent<{project: IProjects}> = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        github_url,
        description,
        key_techs,
    }
}) => {

    const [showDatail, setShowDetail] = useState(false)

    const handleDetails = () => {
        setShowDetail(true)
    }

    const handleModal = () => {
        setShowDetail(false)
    }
    
    return <div>
        <Image src={image_path} alt={name} className="my-1 rounded-lg cursor-pointer" onClick={handleDetails} width={100} height={50} layout="responsive" />
        <p className="my-2 text-center dark:text-white"> {name} </p>
        {
            showDatail && (
                <motion.div id="aca" variants={fadeInUpChildrens} animate="animate" initial="initial" className="absolute top-0 left-0 z-10 flex flex-col w-full h-auto p-5 text-black bg-gray-100 sm:flex-row dark:text-white rounded-xl dark:bg-gray-700 md:grid-cols-2 gap-x-12 dark:bg-dark-100">
                    <motion.div variants={fadeInUP}>
                        <Image src={image_path} alt={name} width={100} height={50} layout="responsive" className="rounded-xl dark:text-white"/>
                        <motion.div variants={fadeInUpChildrens} animate="animate" initial="initial" className="flex justify-center my-4 space-x-3"> 
                            <motion.a 
                                variants={fadeInUP} 
                                href={github_url} 
                                className="flex items-center justify-center px-2 py-1 space-x-3 text-sm bg-gray-200 lg:text-lg lg:py-2 lg:px-4 dark:bg-gray-600 item-center rounded-xl">
                                <AiFillGithub  className="w-5 h-5 text-black lg:w-10 lg:h-10"/>
                                <span>Github</span>
                            </motion.a>
                            <motion.a
                                variants={fadeInUP} 
                                href={deployed_url}
                                className="flex items-center justify-center px-2 py-1 space-x-3 text-sm bg-gray-200 lg:text-lg lg:py-2 lg:px-4 dark:bg-gray-600 item-center rounded-xl">
                                <AiOutlineGlobal className="w-5 h-5 text-black lg:w-10 lg:h-10"/>
                                <span>Project</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={fadeInUP}>
                        <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                        <h3 className="mb-3 font-medium">{description}</h3>
                        <div className="flex flex-wrap items-center justify-end mt-5 space-x-2 text-sm lg:justify-start">
                            {
                                key_techs.map(tech => {
                                    return <motion.span variants={fadeInUP} className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-gray-600" key={tech}> {tech} </motion.span>
                                })
                            }
                        </div>
                    </motion.div>
                    <motion.button variants={fadeInUP} onClick={handleModal} className="absolute p-1 bg-gray-200 rounded-full dark:bg-gray-600 top-3 right-3 focus:outline-none">
                        <MdClose size={30} className=""/>
                    </motion.button>
                </motion.div>
            )
        }
    </div>
}

export default ProjectCard