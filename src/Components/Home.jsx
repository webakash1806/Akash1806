import Header from "./Header"
import Button from "./Button"
import About from "./About"

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
            <main className="h-[40rem] home flex md:flex-row flex-col-reverse lg:p-[11rem] md:p-[4rem] sm:px-[6rem] p-[0.7rem] lg:justify-between md:justify-between items-center dark:bg-darkBG ">
                <div className="left flex sm:pt-6 pt-4 flex-col items-left justify-center  dark:text-white md:w-7/12 lg:w-6/12">
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
                <div className=" right flex items-center justify-center mb-[8.8rem] md:mb-0 relative md:mr-[7rem] lg:mr-[6rem] xl:mr-[9rem]">
                    <div className="absolute animate-bounce w-[7.5rem] md:w-[9rem] top-[4.5rem] z-10  right-14 md:top-[4rem] md:right-12 xl:top-[5rem] xl:right-16">
                        <img className="drop-shadow-[0px_0px_8px_#B42FFA]" src={nodeImage} alt="" />
                    </div>
                    <div className="absolute  bottom-20 right-[5.5rem] md:bottom-16 md:right-[5.6rem] w-[3.3rem] md:w-[4rem] z-10 xl:bottom-24 xl:right-[6.7rem]">
                        <img className="animate-spin duration-50 rounded-full shadow-[0px_0px_10px_#B42FFA]" src={reactImage} alt="" />
                    </div>
                    <div className="absolute  animate-bounce w-[3.4rem] h-[3.4rem] md:w-[4rem] md:h-[4rem] top-8 left-[5.4rem] md:top-4 md:left-[5.6rem] xl:top-6 xl:left-[6.2rem] object-cover z-10">
                        <img className="w-[3.4rem] h-[3.4rem] md:w-[4rem] md:h-[4rem] object-cover rounded-full shadow-[0px_0px_10px_#B42FFA]" src={tailwindImage} alt="" />
                    </div>
                    <div className="absolute shadow-[] h-[19rem] w-[14.5rem] md:h-[20rem] md:w-[15rem] xl:h-[24rem] xl:w-[17rem]">
                        <img src={mainImage} alt="" className="h-[19rem] w-[14.5rem] md:h-[20rem] md:w-[15rem] xl:h-[24rem] xl:w-[17rem] object-cover rounded-tl-2xl" />
                    </div>
                </div>
            </main>
            <About />
        </div>
    )
}

export default Home
