import Header from "./Header"
import Button from "./Button"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home border-2 h-fit mt-10 p-[5rem] dark:bg-darkBG ">
                {/* hello */}
                <Button>
                    Get template
                </Button>
            </div>
        </div>
    )
}

export default Home
