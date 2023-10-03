import { Link } from "react-router-dom";
import style from '../nav/navigation.module.scss'

export const Navigation = () => {

    return (
        <nav>
           <Link to="/">
            Films
           </Link>
           <Link to="/characters">
           Characters
           </Link>
        </nav>
    )
}