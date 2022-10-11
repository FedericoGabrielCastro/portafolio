import type { NextPage } from 'next'
import ExperienceCard from '../components/ExperienceCard';
import { experience } from '../../data';
import Carousel from "framer-motion-carousel";
import { testimonials } from '../../data';
import TestimonialsCard from '../components/TestimonialsCard';
import { motion } from "framer-motion"
import { fadeInUP, fadeInUpChildrens } from '../../animations';

const resume: NextPage = () => {

    return (
        <motion.div variants={fadeInUP} initial="initial" animate="animate" className="flex flex-col gap-3 px-6">
            <h5 className="my-3 text-2xl font-bold">Experiencia laboral</h5>
            <motion.div variants={fadeInUpChildrens} animate="animate" initial="initial" className="grid gap-6 md:grid-cols-2">
                {
                    experience.map((experience, index) => {
                        return (
                            <motion.div variants={fadeInUP} key={index}>
                                <ExperienceCard experience={experience}/>
                            </motion.div>
                        ) 
                    })
                }
            </motion.div>
            <div className="items-center justify-center hidden sm:flex">
                <Carousel autoPlay={true} interval={7000} loop={true} renderDots={() => {return(<div>a</div>)}}>
                    {
                        testimonials.map((testimonials, index) => {
                            return <div key={index} className="flex items-center justify-center">
                                <TestimonialsCard testimonials={testimonials}/>
                            </div>
                        })
                    }
                </Carousel>
            </div>
        </motion.div>
    );
};

export default resume