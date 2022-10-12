import { useState, useEffect, FunctionComponent } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"

interface NavbarItem {
    activeItem: string
    name: string
    route: string
    handleSelecLink: Function
}

// component link
const NavItem: FunctionComponent<NavbarItem> = ({activeItem, name, route, handleSelecLink} ) => {   
    
    const { t } = useTranslation('navbar')
    
    return activeItem.toLocaleLowerCase() !== t(name).toLocaleLowerCase() ? (
        <Link href={route}>
            <a>
                <span
                    className="hover:text-green dark:text-white dark:hover:text-green" 
                    onClick={() => handleSelecLink(name)}>{t(name)}</span>
            </a>
        </Link>
    ) : null
}

// Render navbar 
const Navbar = () => {

    const { t } = useTranslation('navbar')
    const [activeItem, setActiveItem] = useState<string>("")

    const { pathname } = useRouter()
    
    useEffect(() => {
        if (pathname === "/") setActiveItem(t("about"))
        if (pathname === "/projects") setActiveItem(t("projects"))
        if (pathname === "/resume") setActiveItem(t("resume"))
    },[pathname])
    
    const navData = [
        {name: "about", route: "/"},
        {name: "projects", route: "/projects"},
        {name: "resume", route: "/resume"},
    ]
    
    const handleSelecLink = () => {}

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
                                    handleSelecLink={handleSelecLink}/>
                    })
                }
            </div>
        </div>
    )
}



export default Navbar