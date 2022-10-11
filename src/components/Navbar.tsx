import { useState, useEffect, FunctionComponent } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

interface NavbarItem {
    activeItem: string
    name: string
    route: string
    handleSelecLink: Function
}

// component link
const NavItem: FunctionComponent<NavbarItem> = ({activeItem, name, route, handleSelecLink} ) => {   
    return activeItem !== name ? (
        <Link href={route}>
            <a>
                <span
                    className="hover:text-green dark:text-white dark:hover:text-green" 
                    onClick={() => handleSelecLink(name)}>{name}</span>
            </a>
        </Link>
    ) : null
}


// Render navbar 
const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>("")

    const handleSelecLink = (link: string) => {
        setActiveItem(link)
        console.log(link)
    }

    const { pathname } = useRouter()

    useEffect(() => {
        if (pathname === "/") setActiveItem("About")
        if (pathname === "/projects") setActiveItem("Projects")
        if (pathname === "/resume") setActiveItem("Resume")
    },[pathname])

    const navData = [
        {name: "About", route: "/"},
        {name: "Projects", route: "/projects"},
        {name: "Resume", route: "/resume"},
    ]

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">{activeItem}</span>
            <div className="flex space-x-5 text-lg">
                {
                    navData.map((item, index) => {
                        return <NavItem 
                                    key={index}
                                    activeItem={activeItem}
                                    name={item.name}
                                    route={item.route}
                                    handleSelecLink={() => handleSelecLink}/>
                    })
                }
            </div>
        </div>
    )
}

export default Navbar