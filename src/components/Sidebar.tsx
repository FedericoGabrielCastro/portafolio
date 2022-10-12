import Image from "next/image"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { fadeInUP, fadeInUpChildrens } from "../../animations"
import { BiMailSend } from 'react-icons/bi'
import { FaSun } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import { useState } from "react"

const Sidebar = () => {

    const { t, i18n } = useTranslation('sidebar')
    const { theme, setTheme } = useTheme()
    const [lenguage, setLenguaje] = useState<string>()

    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    console.log(i18n.language, "asdsadsadsa")

    const handleChangeLenguage = () => {

        let lenguaje = i18n.language
        setLenguaje(lenguaje)

        if (lenguaje === "es") {
            i18n.changeLanguage("en")
        } else {
            i18n.changeLanguage("es")
        }
    }

    return (
        <motion.div variants={fadeInUpChildrens} animate="animate" initial="initial" className="font-bold" >
            <Image src="/img/avatar.jpeg" alt="fede" width={100} height={100} className="mx-auto rounded-full"/>
            <motion.h3 variants={fadeInUP} className="my-4 text-2xl font-extrabold tracking-wider dark:text-white">
                <span className="font-extrabold text-green">Federico </span>
                Castro
            </motion.h3>
            <motion.p variants={fadeInUP} className="px-1 py-1 my-3 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white">Frontend developer</motion.p>
            <motion.a 
                variants={fadeInUP} 
                className="flex items-center justify-center gap-2 px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white"
                href="mailto:fgc_castro@live.com" > 
                <BiMailSend className="w-6 h-6 dark:text-white"/> 
                <p>{t("email")}</p>
            </motion.a>
            <motion.div variants={fadeInUP} className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
                {/* <a href=""> <AiFillGift className="w-8 h-8 cursor-pointer"/></a> */}
                <a href="https://github.com/FedericoGabrielCastro" rel="nofollow noreferrer" target="_blank"> <AiFillGithub className="w-10 h-10 cursor-pointer text-black-500 dark:text-black"/></a>
                <a href="https://www.linkedin.com/in/federico-gabriel-castro-837417186/" rel="nofollow noreferrer" target="_blank"> <AiFillLinkedin className="w-10 h-10 text-blue-500 cursor-pointer"/></a>
            </motion.div>
            {/* address */}
            <motion.div variants={fadeInUP} className="py-4 my-5 bg-gray-200 dark:bg-gray-700" style={{marginLeft: "-1rem", marginRight: "-1rem"}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation className="dark:text-white"/>
                    <span className="dark:text-white"> Buenos Aires </span>
                </div>
                <p className="my-1 dark:text-white">fgc_castro@live.com</p>
                <p className="my-1 dark:text-white">011 1530556626</p>
            </motion.div>
            {/* email button */}
            <motion.div variants={fadeInUP} className="flex flex-col items-center justify-between">
                <label className="relative inline-flex items-center mb-5 cursor-pointer" >
                    <input type="checkbox" value="" onChange={handleChangeLenguage} id="small-toggle" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {
                            lenguage === "es" ? "En" : "Es"
                        }
                    </span>
                </label>
                <label className="relative inline-flex items-center gap-3 mb-5 cursor-pointer" >
                    <input type="checkbox" onChange={handleChangeTheme} value="" id="small-toggle" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Theme</span> */}
                    <FaSun className="dark:text-yellow-300"/>
                </label>
            </motion.div>
        </motion.div> 
    )
}

export default Sidebar