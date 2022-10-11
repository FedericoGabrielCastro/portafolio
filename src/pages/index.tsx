import type { NextPage } from 'next'
import Image from 'next/image'
import { skills } from '../../data'
import {motion} from "framer-motion"
import { fadeInUP, fadeInUpChildrens } from '../../animations'

const Home: NextPage = () => {

    return (
        <motion.div variants={fadeInUP} initial="initial" animate="animate" className='flex flex-col flex-grow px-6 my-5'>
            <h5 className='my-2 text-sm font-medium'>
                Soy un desarrollador Front-end con conocimiento avanzado en el desarrollo de sitios web con buenas habilidades en el manejo de JavaScript y TypeScript.
                <br />En mi experiencia me he encargado de diversos retos profesionales por lo cual me considero un programador versátil.
                <br />Soy un apasionado de la informática. Tengo disposición de aprender nuevas tecnologías 
            </h5>
            <div className='flex-grow p-2 mt-1 bg-gray-300 rounded-2xl' >
                <h6 className='my-3 text-xl font-bold tracking-wider text-center'>Skills</h6>
                <motion.div variants={fadeInUpChildrens} initial="initial" animate="animate" className="flex flex-wrap justify-center gap-10 mx-auto max-w-2-xl md:gap-x-16">
                    {
                        skills.map((item, index) => {
                            return <motion.div variants={fadeInUP} className="flex justify-center p-3 bg-gray-100 shadow-2xl rounded-2xl" key={index}>
                                <Image src={item.image} alt={item.image} width={35} height={30}/>
                            </motion.div>
                        })
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home