import { FunctionComponent } from 'react'
import { IExperience } from '../../types'

const ExperienceCard: FunctionComponent<{experience: IExperience}> = ({
    experience: {title, description, dateStart, dateFinish, aptitudes}
}) => {
    return (
        <div className='flex items-stretch justify-between p-2 space-x-4 bg-gray-100 shadow-xl h-36 rounded-xl'>
         {/* <Image src={icon} alt={title} height={10} width={50} layout="responsive"/> */}
         <div className='flex flex-col justify-center gap-2'>
            <div className='flex justify-between h-auto'>
                <h6 className='font-bold'>{title}</h6>
                <div className='flex items-center justify-between'>
                    <h6 className='text-xs font-bold lg:text-sm'>{dateStart}</h6> -
                    <h6 className='text-xs font-bold lg:text-sm'>{dateFinish}</h6>
                </div>
            </div>
            <p className='text-xs lg:text-sm h-2/4'>{description}</p>
            <div className='flex justify-end align-bottom text-end'>
                <p className='font-bold'>{aptitudes}</p>
            </div>
         </div>
      </div>
    )
}

export default ExperienceCard