import { Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <footer>
            <h6>Katrine</h6>
            <Outlet/>
        </footer>
    )
}