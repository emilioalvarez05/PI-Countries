import style from "./navBar.module.css"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"


const NavBar = () => {

    return (
        <header className={style.contenedor}>
        <div>

            <Link className={style.list} to="/home">Home</Link>
            <Link className={style.listitem} to="/create">Crear Actividad</Link>
            <SearchBar/>

            
        </div>
        </header>


    )
}

export default NavBar