import style from "./navBar.module.css"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"


const NavBar = () => {

    return (
        
        <div className={style.contenedor}>

            <Link className={style.list} to="/home">Home</Link>
            <SearchBar/>
            <Link className={style.listitem} to="/create">Crear Actividad</Link>

            
        </div>
    


    )
}

export default NavBar