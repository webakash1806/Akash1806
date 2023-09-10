import Header from "./Header"
import Button from "./Button"
import mainImage from "../assets/1686585000576 (1).jpg"
import nodeImage from "../assets/4547668-middle-removebg-preview.png"
import reactImage from "../assets/logo-react-icon.png"
import tailwindImage from "../assets/image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Header />
            <main className="min-h-screen home border-2 h-fit flex md:flex-row flex-col-reverse lg:p-[11rem] md:p-[5rem] p-[0.7rem] lg:justify-around md:justify-between items-center dark:bg-darkBG ">
                <div className="left flex flex-col items-left justify-center gap-1 dark:text-white md:w-7/12 lg:w-6/12">
                    <p className="text-[2.9rem] md:text-[3.5rem] font-bold">Hi! I am</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#AB35FD] to-[#DA18EE] text-[1.9rem] md:text-[2.2rem] font-bold"><Typewriter
                        words={['Akash Kumar Singh', 'Web Developer', 'Web Designer']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={90}
                        deleteSpeed={60}
                        delaySpeed={1200}
                    /></p>
                    <p className="text-[0.85rem] font-medium md:text-[1rem]">Highly motivated and passionate Frontend Web Developer seeking an opportunity to apply my skills in HTML, CSS, and JavaScript to develop engaging and user-friendly web applications.</p>
                    <Link target="_blank" to="https://drive.google.com/file/d/1We8nadp5FPDkLgeGoN56BJ7nLE84GFQZ/view?usp=sharing" className="group mt-5">
                        <Button>
                            Download CV<FontAwesomeIcon icon={faAnglesRight} className="pl-2 pr-4  group-hover:translate-x-5 duration-300" />
                        </Button>
                    </Link>
                </div>
                <div className="right md:w-5/12 flex items-center justify-center relative">
                    <div className="absolute w-[9rem] z-50"><img src={nodeImage} alt="" /></div>
                    <div className="absolute top-3 w-[4rem] z-50"><img src={reactImage} alt="" /></div>
                    <div className="absolute top-5 w-[4rem] h-[4rem] object-cover z-50"><img className="w-[4rem] h-[4rem] object-cover rounded-full" src={tailwindImage} alt="" /></div>
                    <div className="absolute h-[20rem] w-[15rem]"><img src={mainImage} alt="" className="h-[20rem] w-[15rem] object-cover rounded-tl-2xl" /></div>
                </div>
            </main>
        </div>
    )
}

export default Home
