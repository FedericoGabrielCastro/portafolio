import Image from "next/image"
import { AiFillGithub, AiFillLinkedin, AiFillGift } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from "next-themes"

const Sidebar = () => {

    const { theme, setTheme } = useTheme()

    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
        console.log(theme)
    }

    const handleSendEmail = () => {
        window.open("mailto:fgc_castro@live.com") // Email here 
    }

    return (
        <div>
            <Image src="/avatar.jpeg" alt="fede" width={100} height={100} className="mx-auto rounded-full"/>
            <h3 className="my-4 text-2xl font-medium tracking-wider">
                <span className="text-green">Federico </span>
                Castro
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Frontend developer</p>
            <a 
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
                href=""
                download="name"> 
                <GiTie className="w-6 h-6"/> resume</a>
            <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
                {/* <a href=""> <AiFillGift className="w-8 h-8 cursor-pointer"/></a> */}
                <a href=""> <AiFillGithub className="w-8 h-8 cursor-pointer text-black-500"/></a>
                <a href=""> <AiFillLinkedin className="w-8 h-8 text-blue-500 cursor-pointer"/></a>
            </div>
            {/* address */}
            <div className="py-4 my-5 bg-gray-200" style={{marginLeft: "-1rem", marginRight: "-1rem"}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span> Buenos Aires </span>
                </div>
                <p className="my-1">fgc_castro@live.com</p>
                <p className="my-1">011 1530556626</p>
            </div>
            {/* email button */}
            <button 
                className="w-8/12 px-2 py-2 my-1 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={handleSendEmail}> email </button>
            <button 
                className="w-8/12 px-2 py-2 text-white rounded-full text-1xl bg-gradient-to-r from-green to-blue-400"
                onClick={handleChangeTheme}>Theme</button>
        </div> 
    )
}

export default Sidebar