import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import DarkModeToggle from '../Hooks/DarkModeToggle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Header = () => {

    const [isActive, setIsActive] = useState(true)

    const menuToggle = () => {
        isActive ? setIsActive(false) : setIsActive(true)
    }

    return (
        <header className="bg-white z-20 fixed top-0 left-0 w-screen flex items-center duration-[0.3s] lg:justify-around justify-between px-6 md:px-[5rem] dark:bg-darkBG dark:text-primaryText py-[0.55rem] shadow-md text-darkBG shadow-primaryText lg:py-4 ">
            <div className="w-6 menuBar cursor-pointer lg:hidden  text-[23px] dark:hover:text-white" onClick={menuToggle}>
                {isActive ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon className="text-[27px]" icon={faXmark} />}
            </div>
            <div className="logo">
                LOGO
            </div>
            <nav className={`bg-white duration-[0.3s] shadow-md shadow-text2 gap-6 w-[13rem] text-[1.1rem] p-[1.5rem] pr-[2rem] pb-[3rem] rounded-b-md dark:bg-darkBG lg:bg-transparent absolute flex flex-col lg:flex-row lg:p-0 tracking-wider lg:gap-10 lg:w-fit lg:text-[1.2rem] font-[500] lg:static lg:shadow-none ${isActive ? "top-[3.2rem] left-[-14rem]" : "top-[3.2rem] left-0"}`}>
                <HashLink className=" hover:text-shadowBG flex border-b-[1px] lg:border-b-0 items-center justify-between dark:hover:text-white duration-[0.2s] px-2" to="/Akash1806#home">Home <FontAwesomeIcon className="lg:hidden text-[0.9rem]" icon={faArrowRight} /></HashLink>
                <HashLink className=" hover:text-shadowBG flex border-b-[1px] lg:border-b-0 items-center justify-between dark:hover:text-white duration-[0.2s] px-2" to="#about">About <FontAwesomeIcon className="lg:hidden text-[0.9rem]" icon={faArrowRight} /></HashLink>
                <Link className=" hover:text-shadowBG flex border-b-[1px] lg:border-b-0 items-center justify-between dark:hover:text-white duration-[0.2s] px-2" to="/Akash1806/contact">Contact <FontAwesomeIcon className="lg:hidden text-[0.9rem]" icon={faArrowRight} /></Link>
                <Link className=" hover:text-shadowBG flex border-b-[1px] lg:border-b-0 items-center justify-between dark:hover:text-white duration-[0.2s] px-2" to="/Akash1806/project">Skills <FontAwesomeIcon className="lg:hidden text-[0.9rem]" icon={faArrowRight} /></Link>
                <Link className=" hover:text-shadowBG flex border-b-[1px] lg:border-b-0 items-center justify-between dark:hover:text-white duration-[0.2s] px-2" to="/Akash1806/skills">Project <FontAwesomeIcon className="lg:hidden text-[0.9rem]" icon={faArrowRight} /></Link>
            </nav>
            <DarkModeToggle />
        </header>
    )
}

export default Header
