import { ITestimonials } from "../../types"
import { FunctionComponent } from "react"
import Image from "next/image"

const TestimonialsCard: FunctionComponent<{testimonials: ITestimonials}> = ({
    testimonials: {name,image,description,date,profession}
}) => {
    return (
        <div className="flex flex-col items-center justify-center w-8/12 h-64 gap-4 p-4 my-2 text-center bg-gray-100 shadow-xl rounded-2xl dark:bg-gray-700 dark:text-white">
            <div className="flex flex-row items-center gap-5">
                <Image src={image} alt={name} width={60} height={60} className="rounded-2xl" layout="fixed" objectFit="cover"/>
                <div className="flex flex-col items-center justify-center ">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-xs lg:text-sm">{profession}</p>
                    <p className="text-xs">{date}</p>
                </div>
            </div>
            <p className="text-xs text-black lg:text-sm dark:text-white">{description}</p>
        </div>
    )
}

export default TestimonialsCard