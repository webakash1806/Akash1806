import { Link } from "react-router-dom"
import DarkModeToggle from '../Hooks/DarkModeToggle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Header = () => {

    const [isActive, setIsActive] = useState(true)

    const menuToggle = () => {
        isActive ? setIsActive(false) : setIsActive(true)
    }

    return (
        <header className="fixed top-0 left-0 w-screen flex items-center justify-between">
            <div className="menuBar cursor-pointer lg:hidden" onClick={menuToggle}>
                {isActive ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
            </div>
            <div className="logo">
                LOGO
            </div>
            <nav className={`dark:text-button absolute flex flex-col lg:flex-row lg:static ${isActive ? "top-[3rem] left-[-10rem]" : "top-[3rem] left-[0.5rem]"}`}>
                <Link to="/Akash1806">Home</Link>
                <Link to="/Akash1806/about">About</Link>
                <Link to="/Akash1806/contact">Home</Link>
                <Link to="/Akash1806/project">Home</Link>
                <Link to="/Akash1806/skills">Home</Link>
            </nav>
            <DarkModeToggle />
        </header>
    )
}

export default Header
