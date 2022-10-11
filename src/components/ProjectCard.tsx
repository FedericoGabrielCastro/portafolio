import { useState } from "react";
import Image from "next/image";
import { FunctionComponent } from "react";
import { IProjects } from "../../types";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md"
import {motion} from "framer-motion"
import { fadeInUP, fadeInUpChildrens } from "../../animations";

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
        <p className="my-2 text-center"> {name} </p>
        {
            showDatail && (
                <motion.div variants={fadeInUpChildrens} animate="animate" initial="initial" className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                    <motion.div variants={fadeInUP}>
                        <Image src={image_path} alt={name} width={100} height={50} layout="responsive"/>
                        <motion.div variants={fadeInUpChildrens} animate="animate" initial="initial" className="flex justify-center my-4 space-x-3"> 
                            <motion.a 
                                variants={fadeInUP} 
                                href={github_url} 
                                className="flex items-center justify-center px-4 py-2 space-x-3 text-lg bg-gray-200 item-center">
                                <AiFillGithub />
                                <span>Github</span>
                            </motion.a>
                            <motion.a
                                variants={fadeInUP} 
                                href={deployed_url}
                                className="flex items-center justify-center px-4 py-2 space-x-3 text-lg bg-gray-200 item-center">
                                <AiFillProject />
                                <span>Project</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={fadeInUP}>
                        <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                        <h3 className="mb-3 font-medium">{description}</h3>
                        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {
                                key_techs.map(tech => {
                                    return <motion.span variants={fadeInUP} className="px-2 py-1 my-1 bg-gray-200 rounded-sm" key={tech}> {tech} </motion.span>
                                })
                            }
                        </div>
                    </motion.div>
                    <motion.button variants={fadeInUP} onClick={handleModal} className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none">
                        <MdClose size={30}/>
                    </motion.button>
                </motion.div>
            )
        }
    </div>
}

export default ProjectCard