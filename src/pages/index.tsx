import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { skills } from '../../data'
import {motion} from "framer-motion"
import { fadeInUP, fadeInUpChildrens, fadeInUPSkills } from '../../animations'
import {useTranslation} from "react-i18next"

const Home: NextPage = () => {

    const [description, setDescription] = useState<boolean>(false)
    
    const {t} = useTranslation("home")

    return (
        <motion.div variants={fadeInUP} initial="initial" animate="animate" className='flex flex-col flex-grow px-6 my-5'>
            <h5 className='my-2 text-sm font-bold text-center dark:text-white'>
                {t("textOne")}
                <br /> {t("textTwo")} 
                <br /> {t("textThree")}
            </h5>
            <div className='flex-grow p-2 mt-1 bg-gray-300 rounded-2xl dark:bg-gray-700' >
                <h6 className='my-3 mb-5 text-xl font-bold tracking-wider text-center dark:text-white'>{t("skills")}</h6>
                <motion.div variants={fadeInUpChildrens} initial="initial" animate="animate" className="flex flex-wrap justify-center gap-10 mx-auto max-w-2-xl md:gap-x-16">
                    {
                        skills.map((item, index) => {
                            return <motion.div 
                                variants={fadeInUP}
                                onMouseOver={() => setDescription(true)}
                                onMouseLeave={() => setDescription(false)}
                                className={`flex justify-center p-3 duration-500 bg-gray-100 shadow-sm dark:duration-500 rounded-2xl dark:bg-gray-700 shadow-black dark:shadow-black dark:shadow-sm`} key={index}>
                                {
                                    description ? 
                                        <motion.p variants={fadeInUPSkills} className="absolute text-black dark:text-white ">{item.description}</motion.p>
                                        : null
                                }
                                <Image src={item.image} alt={item.image} width={35} height={35} layout="fixed"/>
                            </motion.div>
                        })
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home