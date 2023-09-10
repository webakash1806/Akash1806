import Header from "./Header"
import Button from "./Button"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home border-2 h-fit mt-10 p-[5rem] dark:bg-darkBG ">
                <div className="left dark:text-white w-6/12">
                    <p>Hi! I am</p>
                    <p><Typewriter
                        words={['Akash Kumar Singh', 'Web Developer', 'Web Designer']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={90}
                        deleteSpeed={60}
                        delaySpeed={1200}
                    /></p>
                    <p>Highly motivated and passionate Frontend Web Developer seeking an opportunity to apply my skills in HTML, CSS, and JavaScript to develop engaging and user-friendly web applications.</p>
                    <Button>
                        Download CV
                    </Button>
                </div>
                <div className="right w-6/12">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
