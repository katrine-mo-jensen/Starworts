import { Link } from "react-router-dom";

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