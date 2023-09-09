import { Link } from "react-router-dom"
import DarkModeToggle from '../Hooks/DarkModeToggle'

const Header = () => {
    return (
        <div>
            <Link className="dark:text-red-500" to="/Akash1806">Home</Link>
            <Link to="/Akash1806/about">About</Link>
            <Link to="/Akash1806/contact">Home</Link>
            <Link to="/Akash1806/project">Home</Link>
            <Link to="/Akash1806/skills">Home</Link>

            <DarkModeToggle />
        </div>
    )
}

export default Header
